import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, serverTimestamp, setDoc, Timestamp, updateDoc, where, writeBatch, type FirestoreError, type Unsubscribe } from 'firebase/firestore';
import { getDb } from '@/lib/firebase/db';
import { KID_CONSENT_VERSION } from '@/lib/consent';
import { currentTimeZone } from '@/domain/metrics';
import { KID_NAME_MAX, KID_NOTE_MAX, type KidActivityLog, type KidProfile } from '@/domain/kids';
import type { NewKid, NewKidActivity } from './types';

/** Perfiles de chicos y sus actividades: users/{uid}/kids y users/{uid}/kidActivities. */

const kidsCol = (uid: string) => collection(getDb(), 'users', uid, 'kids');
const activitiesCol = (uid: string) => collection(getDb(), 'users', uid, 'kidActivities');
const toDate = (v: unknown) => (v instanceof Timestamp ? v.toDate() : new Date());

export async function addKid(uid: string, kid: NewKid): Promise<string> {
  const ref = doc(kidsCol(uid));
  await setDoc(ref, {
    name: kid.name.trim().slice(0, KID_NAME_MAX),
    band: kid.band,
    avatar: kid.avatar,
    consent: { version: KID_CONSENT_VERSION, acceptedAt: serverTimestamp() },
    createdAt: serverTimestamp(),
  });
  return ref.id;
}

export function updateKid(uid: string, kidId: string, patch: Partial<NewKid>) {
  return updateDoc(doc(kidsCol(uid), kidId), {
    ...(patch.name !== undefined && { name: patch.name.trim().slice(0, KID_NAME_MAX) }),
    ...(patch.band && { band: patch.band }),
    ...(patch.avatar && { avatar: patch.avatar }),
  });
}

/** Borra el perfil y todos sus registros (derecho de supresión). */
export async function deleteKid(uid: string, kidId: string) {
  const snap = await getDocs(query(activitiesCol(uid), where('kidId', '==', kidId)));
  for (let i = 0; i < snap.docs.length; i += 400) {
    const batch = writeBatch(getDb());
    snap.docs.slice(i, i + 400).forEach((d) => batch.delete(d.ref));
    await batch.commit();
  }
  await deleteDoc(doc(kidsCol(uid), kidId));
}

export function subscribeKids(uid: string, onData: (rows: KidProfile[]) => void, onError: (e: FirestoreError) => void): Unsubscribe {
  return onSnapshot(
    query(kidsCol(uid), orderBy('createdAt', 'asc')),
    (snap) =>
      onData(
        snap.docs.map((d) => {
          const v = d.data({ serverTimestamps: 'estimate' });
          return { id: d.id, name: v.name, band: v.band, avatar: v.avatar, createdAt: toDate(v.createdAt) };
        }),
      ),
    onError,
  );
}

export function addKidActivity(uid: string, a: NewKidActivity) {
  return addDoc(activitiesCol(uid), {
    kidId: a.kidId,
    activityId: a.activityId,
    feeling: a.feeling ?? null,
    intensity: a.intensity ?? null,
    note: a.note ? a.note.trim().slice(0, KID_NOTE_MAX) || null : null,
    tz: currentTimeZone(),
    createdAt: serverTimestamp(),
  });
}

/** Todas las actividades (son pocas por familia): alimentan el álbum, el jardín y el panel. */
export function subscribeKidActivities(uid: string, onData: (rows: KidActivityLog[]) => void, onError: (e: FirestoreError) => void): Unsubscribe {
  return onSnapshot(
    query(activitiesCol(uid), orderBy('createdAt', 'desc')),
    (snap) =>
      onData(
        snap.docs.map((d) => {
          const v = d.data({ serverTimestamps: 'estimate' });
          return {
            id: d.id,
            kidId: v.kidId,
            activityId: v.activityId,
            feeling: v.feeling ?? null,
            intensity: v.intensity ?? null,
            note: v.note ?? null,
            createdAt: toDate(v.createdAt),
            tz: v.tz ?? undefined,
          };
        }),
      ),
    onError,
  );
}
