import { ANTIDOTE_BY_EMOTION } from './antidotes';
import { FREE_TIMER_ID, FREE_TIMER_TITLE } from './freeTimer';
import { PRACTICE_SUMMARY_BY_ID as PRACTICE_BY_ID } from './practiceIndex';
import type { AfflictionLog, SessionRecord } from './types';

/**
 * "Qué te funciona": efectos inmediatos autoinformados, agrupados.
 * Son descriptivos y de n pequeña: se exige un mínimo de registros por grupo y la UI
 * siempre muestra n y la advertencia de que no implican causalidad.
 */

export interface EffectRow {
  key: string;
  label: string;
  /** Cambio medio (después − antes). */
  meanDelta: number;
  n: number;
}

export const MIN_N = 2;

const round1 = (x: number) => Math.round(x * 10) / 10;

function group<T>(items: T[], keyOf: (t: T) => string | null, deltaOf: (t: T) => number | null) {
  const acc = new Map<string, { sum: number; n: number }>();
  for (const it of items) {
    const k = keyOf(it);
    const d = deltaOf(it);
    if (k === null || d === null) continue;
    const cur = acc.get(k) ?? { sum: 0, n: 0 };
    cur.sum += d;
    cur.n += 1;
    acc.set(k, cur);
  }
  return acc;
}

const moodDelta = (s: SessionRecord) => (s.moodPre !== null && s.moodPost !== null ? s.moodPost - s.moodPre : null);

/** Cambio medio de ánimo (0–10) por práctica; mayor es mejor. */
export function practiceEffects(sessions: SessionRecord[], minN = MIN_N): EffectRow[] {
  const acc = group(sessions, (s) => s.practiceId, moodDelta);
  return [...acc.entries()]
    .filter(([, v]) => v.n >= minN)
    .map(([key, v]) => ({
      key,
      label: key === FREE_TIMER_ID ? FREE_TIMER_TITLE : (PRACTICE_BY_ID[key]?.title ?? key),
      meanDelta: round1(v.sum / v.n),
      n: v.n,
    }))
    .sort((a, b) => b.meanDelta - a.meanDelta);
}

/** Cambio medio de intensidad por antídoto; más negativo es mejor (la emoción bajó más). */
export function antidoteEffects(logs: AfflictionLog[], minN = MIN_N): EffectRow[] {
  const acc = group(logs, (l) => l.emotionId, (l) => (l.intensityPost !== null ? l.intensityPost - l.intensityPre : null));
  return [...acc.entries()]
    .filter(([, v]) => v.n >= minN)
    .map(([key, v]) => ({
      key,
      label: ANTIDOTE_BY_EMOTION[key as keyof typeof ANTIDOTE_BY_EMOTION]?.antidoteName ?? key,
      meanDelta: round1(v.sum / v.n),
      n: v.n,
    }))
    .sort((a, b) => a.meanDelta - b.meanDelta);
}

export type DayPart = 'mañana' | 'tarde' | 'noche';

export function dayPart(d: Date): DayPart {
  const h = d.getHours();
  if (h >= 5 && h < 12) return 'mañana';
  if (h >= 12 && h < 19) return 'tarde';
  return 'noche';
}

/** Cambio medio de ánimo según el momento del día en que se practicó. */
export function timeOfDayEffects(sessions: SessionRecord[], minN = MIN_N): EffectRow[] {
  const acc = group(sessions, (s) => dayPart(s.startedAt), moodDelta);
  const order: DayPart[] = ['mañana', 'tarde', 'noche'];
  return order
    .filter((k) => (acc.get(k)?.n ?? 0) >= minN)
    .map((k) => {
      const v = acc.get(k)!;
      return { key: k, label: k[0].toUpperCase() + k.slice(1), meanDelta: round1(v.sum / v.n), n: v.n };
    });
}
