import type { KidActivityLog, KidProfile } from '@/domain/kids';
import { KID_NAME_MAX, KID_NOTE_MAX } from '@/domain/kids';
import { currentTimeZone } from '@/domain/metrics';
import type { NewKid, NewKidActivity } from './types';

/** Perfiles de chicos en modo demo (localStorage): misma interfaz que firestoreKids. */

export const KIDS_DEMO_KEY = 'eudaimonia-demo-kids';

interface Data {
  kids: KidProfile[];
  activities: KidActivityLog[];
}

let data: Data | null = null;
const kidListeners = new Set<() => void>();
const activityListeners = new Set<() => void>();

function store(): Data {
  if (data) return data;
  try {
    const raw = JSON.parse(localStorage.getItem(KIDS_DEMO_KEY) ?? 'null') as Data | null;
    data = raw
      ? {
          kids: raw.kids.map((k) => ({ ...k, createdAt: new Date(k.createdAt) })),
          activities: raw.activities.map((a) => ({ ...a, createdAt: new Date(a.createdAt) })),
        }
      : { kids: [], activities: [] };
  } catch {
    data = { kids: [], activities: [] };
  }
  return data;
}

function commit() {
  try {
    localStorage.setItem(KIDS_DEMO_KEY, JSON.stringify(store()));
  } catch {
    /* sin almacenamiento: sólo en memoria */
  }
  kidListeners.forEach((l) => l());
  activityListeners.forEach((l) => l());
}

const newId = () => Math.random().toString(36).slice(2, 12);

export async function addKid(_uid: string, kid: NewKid) {
  const id = newId();
  store().kids.push({ id, name: kid.name.trim().slice(0, KID_NAME_MAX), band: kid.band, avatar: kid.avatar, createdAt: new Date() });
  commit();
  return id;
}

export async function updateKid(_uid: string, kidId: string, patch: Partial<NewKid>) {
  store().kids = store().kids.map((k) => (k.id === kidId ? { ...k, ...patch, name: (patch.name ?? k.name).trim().slice(0, KID_NAME_MAX) } : k));
  commit();
}

export async function deleteKid(_uid: string, kidId: string) {
  store().kids = store().kids.filter((k) => k.id !== kidId);
  store().activities = store().activities.filter((a) => a.kidId !== kidId);
  commit();
}

export function subscribeKids(_uid: string, onData: (rows: KidProfile[]) => void) {
  const emit = () => onData([...store().kids]);
  kidListeners.add(emit);
  queueMicrotask(emit);
  return () => void kidListeners.delete(emit);
}

export async function addKidActivity(_uid: string, a: NewKidActivity) {
  store().activities.unshift({
    id: newId(),
    kidId: a.kidId,
    activityId: a.activityId,
    feeling: a.feeling ?? null,
    intensity: a.intensity ?? null,
    note: a.note ? a.note.trim().slice(0, KID_NOTE_MAX) || null : null,
    createdAt: new Date(),
    tz: currentTimeZone(),
  });
  commit();
}

export function subscribeKidActivities(_uid: string, onData: (rows: KidActivityLog[]) => void) {
  const emit = () => onData([...store().activities]);
  activityListeners.add(emit);
  queueMicrotask(emit);
  return () => void activityListeners.delete(emit);
}

/** Para la exportación y el borrado de la cuenta demo. */
export function demoKidsData(): Data {
  return store();
}

export function resetDemoKids() {
  data = { kids: [], activities: [] };
  try {
    localStorage.removeItem(KIDS_DEMO_KEY);
  } catch {
    /* nada que limpiar */
  }
  commit();
}
