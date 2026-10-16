import { recordDayKey, toDateKey } from './metrics';
import type { JournalEntry } from './types';

/**
 * Tarjeta diaria DBT en vista semanal: la planilla de siete columnas que se lleva a terapia.
 * Se arma con las entradas «tarjeta-diaria» del diario (una por día; si hay varias, la última),
 * sin guardar nada nuevo. Es descriptiva: no calcula riesgos ni puntuaciones clínicas.
 */

export const CARD_EMOTIONS = [
  { id: 'tristeza', label: 'Tristeza' },
  { id: 'miedo', label: 'Miedo o ansiedad' },
  { id: 'ira', label: 'Ira' },
  { id: 'verguenza', label: 'Vergüenza o culpa' },
  { id: 'alegria', label: 'Alegría' },
] as const;

export interface CardDay {
  key: string; // YYYY-MM-DD
  date: Date;
  entry: JournalEntry | null;
  emotions: Record<(typeof CARD_EMOTIONS)[number]['id'], number | null>;
  urge: string;
  urgeIntensity: number | null;
  behavior: string;
  skills: string[];
  usefulness: number | null;
  summary: string;
}

export interface CardWeek {
  start: Date;
  days: CardDay[];
  filled: number;
  /** Promedio de cada emoción en los días con registro (null si no hay datos). */
  averages: Record<(typeof CARD_EMOTIONS)[number]['id'], number | null>;
  /** Habilidades usadas, de la más a la menos frecuente. */
  skillCounts: { skill: string; days: number }[];
  behaviorDays: number;
}

/** Lunes de la semana de una fecha (hora local, 00:00). */
export function weekStart(d: Date): Date {
  const s = new Date(d);
  s.setHours(0, 0, 0, 0);
  s.setDate(s.getDate() - ((s.getDay() + 6) % 7));
  return s;
}

const num = (v: unknown): number | null => (typeof v === 'number' && Number.isFinite(v) ? v : typeof v === 'string' && v.trim() !== '' && Number.isFinite(Number(v)) ? Number(v) : null);
const str = (v: unknown): string => (typeof v === 'string' ? v.trim() : '');

/** «TIPP, mente sabia; acción opuesta» → ['TIPP', 'mente sabia', 'acción opuesta']. */
export function splitSkills(text: string): string[] {
  return text
    .split(/[,;\n]| y /)
    .map((s) => s.trim().replace(/\.$/, ''))
    .filter(Boolean);
}

export function buildWeek(journal: JournalEntry[], start: Date): CardWeek {
  const s = weekStart(start);
  const byDay = new Map<string, JournalEntry>();
  for (const e of [...journal].filter((j) => j.type === 'tarjeta-diaria').sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())) {
    byDay.set(recordDayKey(e.createdAt, e.tz), e);
  }
  const days: CardDay[] = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(s);
    date.setDate(s.getDate() + i);
    const key = toDateKey(date);
    const entry = byDay.get(key) ?? null;
    const v = entry?.values ?? {};
    return {
      key,
      date,
      entry,
      emotions: Object.fromEntries(CARD_EMOTIONS.map((e) => [e.id, num(v[e.id])])) as CardDay['emotions'],
      urge: str(v.impulso),
      urgeIntensity: num(v.impulsoIntensidad),
      behavior: str(v.conducta),
      skills: splitSkills(str(v.habilidades)),
      usefulness: num(v.utilidad),
      summary: str(v.resumen),
    };
  });
  const filledDays = days.filter((d) => d.entry);
  const averages = Object.fromEntries(
    CARD_EMOTIONS.map((e) => {
      const vals = filledDays.map((d) => d.emotions[e.id]).filter((x): x is number => x !== null);
      return [e.id, vals.length ? Math.round((vals.reduce((a, b) => a + b, 0) / vals.length) * 10) / 10 : null];
    }),
  ) as CardWeek['averages'];
  const counts = new Map<string, { skill: string; days: number }>();
  for (const d of filledDays) {
    for (const sk of new Set(d.skills.map((x) => x.toLowerCase()))) {
      const label = d.skills.find((x) => x.toLowerCase() === sk)!;
      const c = counts.get(sk) ?? { skill: label, days: 0 };
      c.days += 1;
      counts.set(sk, c);
    }
  }
  return {
    start: s,
    days,
    filled: filledDays.length,
    averages,
    skillCounts: [...counts.values()].sort((a, b) => b.days - a.days || a.skill.localeCompare(b.skill, 'es')),
    behaviorDays: filledDays.filter((d) => d.behavior).length,
  };
}

const csvCell = (v: string | number | null) => {
  const s = v === null ? '' : String(v);
  return /[",\n;]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

/** Planilla en CSV (una fila por día) para abrir en una hoja de cálculo o llevar a terapia. */
export function weekToCsv(week: CardWeek): string {
  const header = ['Fecha', ...CARD_EMOTIONS.map((e) => e.label), 'Impulso', 'Intensidad del impulso', 'Conducta a evitar', 'Habilidades', 'Cuánto ayudaron', 'El día en una frase'];
  const rows = week.days.map((d) => [d.key, ...CARD_EMOTIONS.map((e) => d.emotions[e.id]), d.urge, d.urgeIntensity, d.behavior, d.skills.join(', '), d.usefulness, d.summary]);
  return [header, ...rows].map((r) => r.map(csvCell).join(',')).join('\n');
}
