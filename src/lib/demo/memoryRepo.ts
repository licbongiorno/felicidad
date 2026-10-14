import type { AfflictionLog, Assessment, DailyCheckin, JournalEntry, SessionRecord } from '@/domain/types';
import type { NewAfflictionLog, NewAssessment, NewJournalEntry, NewSession } from '@/lib/firebase/repositories';
import { currentTimeZone } from '@/domain/metrics';
import type { LifetimeCounts } from '@/domain/growth';

/**
 * Backend en memoria para el modo demo (sin configuración de Firebase).
 * Misma interfaz que `lib/firebase/repositories`. Persiste en localStorage sólo para
 * sobrevivir recargas durante pruebas: NO apto para datos clínicos reales.
 */

interface DemoData {
  sessions: SessionRecord[];
  afflictions: AfflictionLog[];
  checkins: DailyCheckin[];
  journal: JournalEntry[];
  assessments: Assessment[];
}

const KEY = 'eudaimonia-demo';
type Kind = keyof DemoData;

function revive(raw: string | null): DemoData {
  const empty: DemoData = { sessions: [], afflictions: [], checkins: [], journal: [], assessments: [] };
  if (!raw) return empty;
  try {
    const d = JSON.parse(raw) as DemoData;
    return {
      sessions: d.sessions.map((s) => ({ ...s, startedAt: new Date(s.startedAt) })),
      afflictions: d.afflictions.map((a) => ({ ...a, createdAt: new Date(a.createdAt) })),
      checkins: d.checkins.map((c) => ({ ...c, updatedAt: new Date(c.updatedAt) })),
      journal: (d.journal ?? []).map((j) => ({ ...j, createdAt: new Date(j.createdAt) })),
      assessments: (d.assessments ?? []).map((a) => ({ ...a, createdAt: new Date(a.createdAt) })),
    };
  } catch {
    return empty;
  }
}

let data: DemoData | null = null;
const listeners: { [K in Kind]: Set<() => void> } = {
  sessions: new Set(),
  afflictions: new Set(),
  checkins: new Set(),
  journal: new Set(),
  assessments: new Set(),
};

function store(): DemoData {
  if (!data) {
    try {
      data = revive(localStorage.getItem(KEY));
    } catch {
      data = revive(null);
    }
  }
  return data;
}

function commit(kind: Kind) {
  try {
    localStorage.setItem(KEY, JSON.stringify(store()));
  } catch {
    /* almacenamiento no disponible: los datos quedan sólo en memoria */
  }
  listeners[kind].forEach((l) => l());
}

function subscribe<T>(kind: Kind, select: () => T[], onData: (rows: T[]) => void) {
  const emit = () => onData(select());
  listeners[kind].add(emit);
  queueMicrotask(emit);
  return () => void listeners[kind].delete(emit);
}

const id = () => Math.random().toString(36).slice(2, 12);

export async function fetchLifetimeCounts(_uid: string, practiceIds: string[], journalTypes: string[]): Promise<LifetimeCounts> {
  const { sessions, journal } = store();
  const done = sessions.filter((s) => s.completed);
  const by = (f: string) => done.filter((s) => s.family === f).length;
  return {
    at: new Date(),
    families: { attentional: by('attentional'), constructive: by('constructive'), deconstructive: by('deconstructive') },
    practices: Object.fromEntries(practiceIds.map((p) => [p, done.filter((s) => s.practiceId === p).length])),
    journalTypes: Object.fromEntries(journalTypes.map((t) => [t, journal.filter((j) => j.type === t).length])),
    journalTotal: journal.length,
  };
}

export async function addSession(_uid: string, s: NewSession) {
  store().sessions.unshift({ ...s, id: id(), durationSec: Math.round(s.durationSec), tz: s.tz ?? currentTimeZone() });
  commit('sessions');
}

export function subscribeSessions(_uid: string, since: Date, onData: (rows: SessionRecord[]) => void, _onError?: unknown) {
  return subscribe('sessions', () => store().sessions.filter((s) => s.startedAt >= since), onData);
}

export async function addAfflictionLog(_uid: string, log: NewAfflictionLog) {
  store().afflictions.unshift({ ...log, id: id(), createdAt: new Date(), tz: log.tz ?? currentTimeZone() });
  commit('afflictions');
}

export function subscribeAfflictionLogs(_uid: string, since: Date, onData: (rows: AfflictionLog[]) => void, _onError?: unknown) {
  return subscribe('afflictions', () => store().afflictions.filter((a) => a.createdAt >= since), onData);
}

export async function saveCheckin(_uid: string, c: Omit<DailyCheckin, 'updatedAt'>) {
  const rest = store().checkins.filter((x) => x.date !== c.date);
  store().checkins = [{ ...c, updatedAt: new Date() }, ...rest].sort((a, b) => b.date.localeCompare(a.date));
  commit('checkins');
}

export function subscribeCheckins(_uid: string, sinceKey: string, onData: (rows: DailyCheckin[]) => void, _onError?: unknown) {
  return subscribe('checkins', () => store().checkins.filter((c) => c.date >= sinceKey), onData);
}

export async function addJournalEntry(_uid: string, entry: NewJournalEntry) {
  store().journal.unshift({ ...entry, id: id(), createdAt: new Date(), tz: entry.tz ?? currentTimeZone() });
  commit('journal');
}

export function subscribeJournal(_uid: string, since: Date, onData: (rows: JournalEntry[]) => void, _onError?: unknown) {
  return subscribe('journal', () => store().journal.filter((j) => j.createdAt >= since), onData);
}

export async function addAssessment(_uid: string, a: NewAssessment) {
  store().assessments.unshift({ ...a, id: id(), createdAt: new Date(), tz: a.tz ?? currentTimeZone() });
  commit('assessments');
}

export function subscribeAssessments(_uid: string, since: Date, onData: (rows: Assessment[]) => void, _onError?: unknown) {
  return subscribe('assessments', () => store().assessments.filter((a) => a.createdAt >= since), onData);
}

export async function exportUserData(_uid: string) {
  const { sessions, afflictions, checkins, journal, assessments } = store();
  return { exportedAt: new Date().toISOString(), profile: { demo: true }, sessions, checkins, afflictionLogs: afflictions, journal, assessments };
}

export async function deleteUserData(_uid: string) {
  data = { sessions: [], afflictions: [], checkins: [], journal: [], assessments: [] };
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* nada que limpiar */
  }
  (Object.keys(listeners) as Kind[]).forEach((k) => listeners[k].forEach((l) => l()));
}
