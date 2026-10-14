'use client';

import { create } from 'zustand';
import type { Unsubscribe } from 'firebase/firestore';
import { DEMO_MODE } from '@/lib/demo';
import type { KidActivityLog, KidProfile } from '@/domain/kids';
import type { KidsRepo, NewKid, NewKidActivity } from '@/lib/kids/types';

/**
 * Perfiles de chicos y sus actividades. Igual que el progreso del adulto: Firestore es la
 * fuente de verdad y este store es la proyección en memoria (listeners onSnapshot).
 * Se conecta bajo demanda, sólo al entrar en la sección para chicos o en Familia.
 */

let repoPromise: Promise<KidsRepo> | null = null;
const loadKidsRepo = () =>
  (repoPromise ??= (DEMO_MODE ? import('@/lib/kids/memoryKids') : import('@/lib/kids/firestoreKids')) as unknown as Promise<KidsRepo>);

interface KidsState {
  uid: string | null;
  status: 'idle' | 'loading' | 'ready' | 'error';
  error: string | null;
  kids: KidProfile[];
  activities: KidActivityLog[];
  connect: (uid: string) => void;
  disconnect: () => void;
  addKid: (kid: NewKid) => Promise<string | null>;
  updateKid: (kidId: string, patch: Partial<NewKid>) => void;
  deleteKid: (kidId: string) => Promise<void>;
  logActivity: (a: NewKidActivity) => void;
}

let unsubs: Unsubscribe[] = [];
let generation = 0;
const kidsReady = { kids: false, activities: false };

const message = (e: unknown) =>
  (e as { code?: string })?.code === 'permission-denied' ? 'El servidor rechazó el cambio. Revisa tu sesión.' : 'No se pudo guardar. Se reintentará al volver la conexión.';

export const useKidsStore = create<KidsState>()((set, get) => ({
  uid: null,
  status: 'idle',
  error: null,
  kids: [],
  activities: [],

  connect: (uid) => {
    if (get().uid === uid) return;
    get().disconnect();
    const gen = ++generation;
    kidsReady.kids = kidsReady.activities = false;
    set({ uid, status: 'loading', error: null });
    const ready = (k: keyof typeof kidsReady) => {
      kidsReady[k] = true;
      if (kidsReady.kids && kidsReady.activities && gen === generation) set({ status: 'ready' });
    };
    const onError = (e: unknown) => gen === generation && set({ status: 'error', error: message(e) });
    loadKidsRepo()
      .then((repo) => {
        if (gen !== generation) return;
        unsubs = [
          repo.subscribeKids(uid, (kids) => gen === generation && (set({ kids }), ready('kids')), onError),
          repo.subscribeKidActivities(uid, (activities) => gen === generation && (set({ activities }), ready('activities')), onError),
        ];
      })
      .catch(onError);
  },

  disconnect: () => {
    generation++;
    unsubs.forEach((u) => u());
    unsubs = [];
    set({ uid: null, status: 'idle', error: null, kids: [], activities: [] });
  },

  addKid: async (kid) => {
    const { uid } = get();
    if (!uid) return null;
    try {
      return await (await loadKidsRepo()).addKid(uid, kid);
    } catch (e) {
      set({ error: message(e) });
      return null;
    }
  },

  updateKid: (kidId, patch) => {
    const { uid } = get();
    if (!uid) return;
    loadKidsRepo()
      .then((repo) => repo.updateKid(uid, kidId, patch))
      .catch((e) => set({ error: message(e) }));
  },

  deleteKid: async (kidId) => {
    const { uid } = get();
    if (!uid) return;
    try {
      await (await loadKidsRepo()).deleteKid(uid, kidId);
    } catch (e) {
      set({ error: message(e) });
    }
  },

  // No se espera: con la caché offline, el listener refleja la escritura al instante.
  logActivity: (a) => {
    const { uid } = get();
    if (!uid) return;
    loadKidsRepo()
      .then((repo) => repo.addKidActivity(uid, a))
      .catch((e) => set({ error: message(e) }));
  },
}));
