'use client';

import { create } from 'zustand';
import type { FirestoreError, Unsubscribe } from 'firebase/firestore';
import type * as FirestoreRepo from '@/lib/firebase/repositories';
import { DEMO_MODE } from '@/lib/demo';
import { daysAgo, toDateKey } from '@/domain/metrics';
import type { AfflictionLog, Application, Assessment, DailyCheckin, JournalEntry, SessionRecord } from '@/domain/types';
import { DBT_JOURNAL_TYPES, DBT_PRACTICE_IDS, type LifetimeCounts } from '@/domain/growth';

/**
 * Estado global del progreso del usuario.
 *
 * - Firestore es la fuente de verdad; este store es una proyección en memoria alimentada
 *   por listeners `onSnapshot` (ventana de 90 días).
 * - El repositorio (Firestore, ~73 kB gzip) se carga bajo demanda: las páginas pintan su
 *   contenido estático y los datos llegan cuando el módulo está disponible.
 * - Las escrituras NO se esperan en la UI: con la caché offline, el listener refleja la
 *   escritura local al instante y el SDK la sincroniza cuando hay red. Si el servidor la
 *   rechaza (reglas), el error queda en `syncError` para mostrarse al usuario.
 * - Los valores derivados (racha, dosis, línea base) NO viven aquí: se calculan con las
 *   funciones puras de `domain/metrics` + `useMemo` en cada vista.
 */

/** Operaciones de datos comunes a Firestore y al repositorio en memoria del modo demo. */
export type DataRepo = Pick<
  typeof FirestoreRepo,
  | 'addSession'
  | 'subscribeSessions'
  | 'addAfflictionLog'
  | 'subscribeAfflictionLogs'
  | 'saveCheckin'
  | 'subscribeCheckins'
  | 'addJournalEntry'
  | 'subscribeJournal'
  | 'addAssessment'
  | 'subscribeAssessments'
  | 'fetchLifetimeCounts'
  | 'addApplication'
  | 'subscribeApplications'
  | 'deleteUserData'
> & { exportUserData: (uid: string) => Promise<unknown> };

let repoPromise: Promise<DataRepo> | null = null;

export function loadRepo(): Promise<DataRepo> {
  repoPromise ??= DEMO_MODE
    ? (import('@/lib/demo/memoryRepo') as unknown as Promise<DataRepo>)
    : import('@/lib/firebase/repositories');
  return repoPromise;
}

const WINDOW_DAYS = 90;
const SOURCES = 6;

type SyncStatus = 'idle' | 'loading' | 'ready' | 'error';

interface ProgressState {
  uid: string | null;
  status: SyncStatus;
  syncError: string | null;
  sessions: SessionRecord[];
  afflictions: AfflictionLog[];
  checkins: DailyCheckin[];
  journal: JournalEntry[];
  assessments: Assessment[];
  /** Aplicaciones de habilidades en la vida cotidiana (sin ventana temporal). */
  applications: Application[];
  /** Recuentos de toda la vida para el jardín (null hasta que llegan o sin conexión). */
  lifetime: LifetimeCounts | null;

  connect: (uid: string) => void;
  disconnect: () => void;
  logSession: (session: FirestoreRepo.NewSession) => void;
  logAntidote: (log: FirestoreRepo.NewAfflictionLog, session: FirestoreRepo.NewSession) => void;
  saveCheckin: (checkin: Omit<DailyCheckin, 'updatedAt'>) => void;
  logJournal: (entry: FirestoreRepo.NewJournalEntry) => void;
  logAssessment: (a: FirestoreRepo.NewAssessment) => void;
  logApplication: (a: FirestoreRepo.NewApplication) => void;
  clearError: () => void;
}

const initialData = {
  uid: null,
  status: 'idle' as SyncStatus,
  syncError: null,
  sessions: [],
  afflictions: [],
  checkins: [],
  journal: [],
  assessments: [],
  applications: [],
  lifetime: null,
};

// Los handles de suscripción no son estado de UI: viven fuera del store.
let unsubscribers: Unsubscribe[] = [];
// Invalida conexiones en curso si se desconecta (o cambia de usuario) mientras carga el repositorio.
let generation = 0;

function describe(e: unknown): string {
  const code = (e as FirestoreError)?.code;
  if (code === 'permission-denied') return 'El servidor rechazó el registro. Revisa tu sesión e inténtalo de nuevo.';
  if (code === 'unavailable') return 'Sin conexión. Tus registros se sincronizarán al reconectar.';
  return 'No se pudo sincronizar un registro.';
}

export const useProgressStore = create<ProgressState>()((set, get) => {
  /** Ejecuta una escritura en segundo plano y captura su error. */
  const write = (op: (repo: DataRepo, uid: string) => Promise<unknown>) => {
    const { uid } = get();
    if (!uid) {
      set({ syncError: 'Necesitas iniciar sesión para guardar tu progreso.' });
      return;
    }
    loadRepo()
      .then((repo) => op(repo, uid))
      .catch((e) => set({ syncError: describe(e) }));
  };

  /** Pide los recuentos de toda la vida. Si falla (sin red), el jardín usa la ventana local. */
  const refreshLifetime = () => {
    const { uid } = get();
    if (!uid) return;
    loadRepo()
      .then((repo) => repo.fetchLifetimeCounts(uid, DBT_PRACTICE_IDS, DBT_JOURNAL_TYPES))
      .then((lifetime) => {
        if (get().uid === uid) set({ lifetime });
      })
      .catch(() => {
        /* sin recuentos: growthCounts usa los 90 días locales */
      });
  };

  /** Escritura que, al confirmarse, actualiza los recuentos del jardín. */
  const writeAndGrow = (op: (repo: DataRepo, uid: string) => Promise<unknown>) =>
    write((repo, uid) => op(repo, uid).then((r) => (refreshLifetime(), r)));

  return {
    ...initialData,

    connect: (uid) => {
      if (get().uid === uid) return;
      get().disconnect();
      set({ uid, status: 'loading' });
      const gen = generation;

      loadRepo()
        .then((repo) => {
          if (gen !== generation) return; // se desconectó mientras cargaba
          const since = daysAgo(WINDOW_DAYS);
          const loaded = new Set<string>();
          const markLoaded = (source: string) => {
            loaded.add(source);
            if (loaded.size === SOURCES && get().status === 'loading') set({ status: 'ready' });
          };
          const onError = (e: FirestoreError) => set({ status: 'error', syncError: describe(e) });

          unsubscribers = [
            repo.subscribeSessions(uid, since, (sessions) => { set({ sessions }); markLoaded('sessions'); }, onError),
            repo.subscribeAfflictionLogs(uid, since, (afflictions) => { set({ afflictions }); markLoaded('afflictions'); }, onError),
            repo.subscribeCheckins(uid, toDateKey(since), (checkins) => { set({ checkins }); markLoaded('checkins'); }, onError),
            repo.subscribeJournal(uid, since, (journal) => { set({ journal }); markLoaded('journal'); }, onError),
            // Las evaluaciones se comparan a largo plazo: ventana de un año.
            repo.subscribeAssessments(uid, daysAgo(365), (assessments) => { set({ assessments }); markLoaded('assessments'); }, onError),
            repo.subscribeApplications(uid, (applications) => { set({ applications }); markLoaded('applications'); }, onError),
          ];
          refreshLifetime();
        })
        .catch(() => set({ status: 'error', syncError: 'No se pudo conectar con tus datos. Revisa tu conexión y recarga.' }));
    },

    disconnect: () => {
      generation++;
      unsubscribers.forEach((u) => u());
      unsubscribers = [];
      set(initialData);
    },

    logSession: (session) => writeAndGrow((repo, uid) => repo.addSession(uid, session)),

    // Un antídoto completado cuenta también como sesión de práctica (racha y dosis).
    logAntidote: (log, session) =>
      writeAndGrow((repo, uid) => Promise.all([repo.addAfflictionLog(uid, log), repo.addSession(uid, session)])),

    saveCheckin: (checkin) => write((repo, uid) => repo.saveCheckin(uid, checkin)),

    logJournal: (entry) => writeAndGrow((repo, uid) => repo.addJournalEntry(uid, entry)),

    logAssessment: (a) => write((repo, uid) => repo.addAssessment(uid, a)),

    logApplication: (a) => write((repo, uid) => repo.addApplication(uid, a)),

    clearError: () => set({ syncError: null }),
  };
});
