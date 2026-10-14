import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getCountFromServer,
  updateDoc,
  writeBatch,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  Timestamp,
  where,
  type DocumentData,
  type FirestoreError,
  type QueryDocumentSnapshot,
  type Unsubscribe,
} from 'firebase/firestore';
import type { User } from 'firebase/auth';
import { getDb } from './db';
import { CONSENT_VERSION } from '@/lib/consent';
import type { AfflictionLog, Application, Assessment, DailyCheckin, JournalEntry, Profile, SessionRecord } from '@/domain/types';
import { currentTimeZone } from '@/domain/metrics';
import type { LifetimeCounts } from '@/domain/growth';

export { CONSENT_VERSION };

export const USER_COLLECTIONS = ['sessions', 'checkins', 'afflictionLogs', 'journal', 'assessments', 'applications'] as const;
type UserCollection = (typeof USER_COLLECTIONS)[number];

const userCollection = (uid: string, name: UserCollection) =>
  collection(getDb(), 'users', uid, name);

const toDate = (value: unknown): Date => (value instanceof Timestamp ? value.toDate() : new Date());

// Con caché offline, serverTimestamp() es null hasta que confirma el servidor; 'estimate'
// devuelve la hora local mientras tanto.
const read = (d: QueryDocumentSnapshot<DocumentData>) => d.data({ serverTimestamps: 'estimate' });

// ---------------------------------------------------------------- perfil

export async function ensureUserProfile(user: User, consentAccepted: boolean): Promise<void> {
  const ref = doc(getDb(), 'users', user.uid);
  const snap = await getDoc(ref);
  if (snap.exists()) return;
  await setDoc(ref, {
    displayName: user.displayName ?? null,
    role: 'patient',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    consent: consentAccepted ? { version: CONSENT_VERSION, acceptedAt: serverTimestamp() } : null,
    createdAt: serverTimestamp(),
  });
}

export function subscribeProfile(uid: string, onData: (p: Profile | null) => void, onError: (e: FirestoreError) => void): Unsubscribe {
  return onSnapshot(
    doc(getDb(), 'users', uid),
    (snap) => {
      if (!snap.exists()) return onData(null);
      const v = snap.data();
      onData({ displayName: v.displayName ?? null, role: v.role ?? 'patient', consentVersion: v.consent?.version ?? null });
    },
    onError,
  );
}

/** Registra (o renueva) el consentimiento informado con la versión vigente. */
export async function acceptConsent(user: User): Promise<void> {
  const ref = doc(getDb(), 'users', user.uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) return ensureUserProfile(user, true);
  await updateDoc(ref, { consent: { version: CONSENT_VERSION, acceptedAt: serverTimestamp() } });
}

// ---------------------------------------------------------------- derechos sobre los datos

/** Normaliza Timestamps a ISO-8601 para una exportación legible y portable. */
function plain(value: unknown): unknown {
  if (value instanceof Timestamp) return value.toDate().toISOString();
  if (Array.isArray(value)) return value.map(plain);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, plain(v)]));
  return value;
}

/** Derecho de acceso y portabilidad: todos los datos del usuario, sin ventana temporal. */
export async function exportUserData(uid: string) {
  const profile = await getDoc(doc(getDb(), 'users', uid));
  const out: Record<string, unknown> = { exportedAt: new Date().toISOString(), profile: plain(profile.data() ?? null) };
  for (const name of USER_COLLECTIONS) {
    const snap = await getDocs(userCollection(uid, name));
    out[name] = snap.docs.map((d) => ({ id: d.id, ...(plain(d.data()) as object) }));
  }
  return out;
}

/** Derecho de supresión: borra todas las subcolecciones y el perfil. */
export async function deleteUserData(uid: string): Promise<void> {
  for (const name of USER_COLLECTIONS) {
    const snap = await getDocs(userCollection(uid, name));
    for (let i = 0; i < snap.docs.length; i += 400) {
      const batch = writeBatch(getDb());
      snap.docs.slice(i, i + 400).forEach((d) => batch.delete(d.ref));
      await batch.commit();
    }
  }
  await deleteDoc(doc(getDb(), 'users', uid));
}

// ---------------------------------------------------------------- sesiones de práctica

export type NewSession = Omit<SessionRecord, 'id'>;

export function addSession(uid: string, s: NewSession) {
  return addDoc(userCollection(uid, 'sessions'), {
    practiceId: s.practiceId,
    family: s.family,
    skills: s.skills,
    source: s.source,
    startedAt: Timestamp.fromDate(s.startedAt),
    durationSec: Math.round(s.durationSec),
    completed: s.completed,
    moodPre: s.moodPre,
    moodPost: s.moodPost,
    tz: s.tz ?? currentTimeZone(),
    contentVersion: s.contentVersion ?? null,
    ...(s.transfer ? { transfer: s.transfer.slice(0, 280) } : {}),
    createdAt: serverTimestamp(),
  });
}

export function subscribeSessions(
  uid: string,
  since: Date,
  onData: (rows: SessionRecord[]) => void,
  onError: (e: FirestoreError) => void,
): Unsubscribe {
  const q = query(
    userCollection(uid, 'sessions'),
    where('startedAt', '>=', Timestamp.fromDate(since)),
    orderBy('startedAt', 'desc'),
  );
  return onSnapshot(
    q,
    (snap) =>
      onData(
        snap.docs.map((d) => {
          const v = read(d);
          return {
            id: d.id,
            practiceId: v.practiceId,
            family: v.family,
            skills: v.skills ?? [],
            source: v.source,
            startedAt: toDate(v.startedAt),
            durationSec: v.durationSec,
            completed: v.completed,
            moodPre: v.moodPre ?? null,
            moodPost: v.moodPost ?? null,
            tz: v.tz ?? null,
            contentVersion: v.contentVersion ?? null,
            transfer: v.transfer ?? null,
          };
        }),
      ),
    onError,
  );
}

/**
 * Recuentos de toda la vida para el jardín y la colección DBT (consultas de recuento:
 * una lectura por cada 1000 documentos contados, sin descargar los registros).
 * Usa índices de un solo campo: no necesita índices compuestos.
 */
export async function fetchLifetimeCounts(uid: string, practiceIds: string[], journalTypes: string[]): Promise<LifetimeCounts> {
  const at = new Date();
  const sessions = userCollection(uid, 'sessions');
  const journal = userCollection(uid, 'journal');
  const count = async (q: ReturnType<typeof query>) => (await getCountFromServer(q)).data().count;
  const done = where('completed', '==', true);
  const families = ['attentional', 'constructive', 'deconstructive'] as const;
  const [fam, prac, jt, journalTotal] = await Promise.all([
    Promise.all(families.map((f) => count(query(sessions, done, where('family', '==', f))))),
    Promise.all(practiceIds.map((p) => count(query(sessions, done, where('practiceId', '==', p))))),
    Promise.all(journalTypes.map((t) => count(query(journal, where('type', '==', t))))),
    count(query(journal)),
  ]);
  return {
    at,
    families: { attentional: fam[0], constructive: fam[1], deconstructive: fam[2] },
    practices: Object.fromEntries(practiceIds.map((p, i) => [p, prac[i]])),
    journalTypes: Object.fromEntries(journalTypes.map((t, i) => [t, jt[i]])),
    journalTotal,
  };
}

// ---------------------------------------------------------------- registros de antídotos

export type NewAfflictionLog = Omit<AfflictionLog, 'id' | 'createdAt'>;

export function addAfflictionLog(uid: string, log: NewAfflictionLog) {
  return addDoc(userCollection(uid, 'afflictionLogs'), {
    ...log,
    trigger: log.trigger?.slice(0, 280) || null,
    tz: log.tz ?? currentTimeZone(),
    contentVersion: log.contentVersion ?? null,
    createdAt: serverTimestamp(),
  });
}

export function subscribeAfflictionLogs(
  uid: string,
  since: Date,
  onData: (rows: AfflictionLog[]) => void,
  onError: (e: FirestoreError) => void,
): Unsubscribe {
  const q = query(
    userCollection(uid, 'afflictionLogs'),
    where('createdAt', '>=', Timestamp.fromDate(since)),
    orderBy('createdAt', 'desc'),
  );
  return onSnapshot(
    q,
    (snap) =>
      onData(
        snap.docs.map((d) => {
          const v = read(d);
          return {
            id: d.id,
            emotionId: v.emotionId,
            antidoteId: v.antidoteId,
            intensityPre: v.intensityPre,
            intensityPost: v.intensityPost ?? null,
            trigger: v.trigger ?? null,
            stabilizationUsed: v.stabilizationUsed ?? false,
            createdAt: toDate(v.createdAt),
            tz: v.tz ?? null,
          };
        }),
      ),
    onError,
  );
}

// ---------------------------------------------------------------- check-in diario

export function saveCheckin(uid: string, c: Omit<DailyCheckin, 'updatedAt'>) {
  // Un documento por día (id = fecha local): idempotente, re-editable durante el día.
  return setDoc(doc(userCollection(uid, 'checkins'), c.date), {
    date: c.date,
    mood: c.mood,
    perma: c.perma,
    updatedAt: serverTimestamp(),
  });
}

export function subscribeCheckins(
  uid: string,
  sinceKey: string,
  onData: (rows: DailyCheckin[]) => void,
  onError: (e: FirestoreError) => void,
): Unsubscribe {
  const q = query(userCollection(uid, 'checkins'), where('date', '>=', sinceKey), orderBy('date', 'desc'));
  return onSnapshot(
    q,
    (snap) =>
      onData(
        snap.docs.map((d) => {
          const v = read(d);
          return { date: v.date, mood: v.mood, perma: v.perma ?? null, updatedAt: toDate(v.updatedAt) };
        }),
      ),
    onError,
  );
}

// ---------------------------------------------------------------- diario

export type NewJournalEntry = Omit<JournalEntry, 'id' | 'createdAt'>;

export function addJournalEntry(uid: string, entry: NewJournalEntry) {
  return addDoc(userCollection(uid, 'journal'), { type: entry.type, values: entry.values, tz: entry.tz ?? currentTimeZone(), createdAt: serverTimestamp() });
}

export function subscribeJournal(
  uid: string,
  since: Date,
  onData: (rows: JournalEntry[]) => void,
  onError: (e: FirestoreError) => void,
): Unsubscribe {
  const q = query(userCollection(uid, 'journal'), where('createdAt', '>=', Timestamp.fromDate(since)), orderBy('createdAt', 'desc'));
  return onSnapshot(
    q,
    (snap) =>
      onData(
        snap.docs.map((d) => {
          const v = read(d);
          return { id: d.id, type: v.type, values: v.values ?? {}, createdAt: toDate(v.createdAt), tz: v.tz ?? null };
        }),
      ),
    onError,
  );
}

// ---------------------------------------------------------------- aplicaciones en la vida cotidiana

export type NewApplication = Omit<Application, 'id' | 'createdAt'>;

export function addApplication(uid: string, a: NewApplication) {
  return addDoc(userCollection(uid, 'applications'), {
    practiceId: a.practiceId,
    sessionId: a.sessionId,
    applied: a.applied,
    usefulness: a.usefulness,
    note: a.note ? a.note.slice(0, 280) : null,
    tz: a.tz ?? currentTimeZone(),
    createdAt: serverTimestamp(),
  });
}

/** Sin ventana temporal: son pocos registros y alimentan los niveles de dominio de toda la vida. */
export function subscribeApplications(uid: string, onData: (rows: Application[]) => void, onError: (e: FirestoreError) => void): Unsubscribe {
  const q = query(userCollection(uid, 'applications'), orderBy('createdAt', 'desc'));
  return onSnapshot(
    q,
    (snap) =>
      onData(
        snap.docs.map((d) => {
          const v = read(d);
          return {
            id: d.id,
            practiceId: v.practiceId,
            sessionId: v.sessionId ?? null,
            applied: v.applied === true,
            usefulness: v.usefulness ?? null,
            note: v.note ?? null,
            createdAt: toDate(v.createdAt),
            tz: v.tz ?? null,
          };
        }),
      ),
    onError,
  );
}

// ---------------------------------------------------------------- evaluaciones

export type NewAssessment = Omit<Assessment, 'id' | 'createdAt'>;

export function addAssessment(uid: string, a: NewAssessment) {
  return addDoc(userCollection(uid, 'assessments'), { ...a, tz: a.tz ?? currentTimeZone(), createdAt: serverTimestamp() });
}

export function subscribeAssessments(
  uid: string,
  since: Date,
  onData: (rows: Assessment[]) => void,
  onError: (e: FirestoreError) => void,
): Unsubscribe {
  const q = query(userCollection(uid, 'assessments'), where('createdAt', '>=', Timestamp.fromDate(since)), orderBy('createdAt', 'desc'));
  return onSnapshot(
    q,
    (snap) =>
      onData(
        snap.docs.map((d) => {
          const v = read(d);
          return { id: d.id, instrument: v.instrument, items: v.items ?? [], score: v.score, createdAt: toDate(v.createdAt), tz: v.tz ?? null };
        }),
      ),
    onError,
  );
}
