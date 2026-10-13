import type { AfflictionLog, DailyCheckin, SessionRecord, SkillKey } from './types';

/** Clave de fecha en la zona horaria local del dispositivo: YYYY-MM-DD. */
export function toDateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/** Zona horaria IANA del dispositivo (p. ej. America/Argentina/Buenos_Aires). */
export const currentTimeZone = (): string => Intl.DateTimeFormat().resolvedOptions().timeZone;

/** Clave YYYY-MM-DD de un instante en una zona horaria concreta. */
export function dateKeyInTz(date: Date, tz: string): string {
  try {
    return new Intl.DateTimeFormat('en-CA', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);
  } catch {
    return toDateKey(date); // zona inválida o desconocida: se usa la local
  }
}

/**
 * "Día vivido" de un registro: el de la zona horaria donde se hizo (si se guardó).
 * Una práctica a las 23:00 en Buenos Aires sigue siendo de ese día vista desde Madrid,
 * así que viajar no rompe la racha ni duplica días.
 */
export function recordDayKey(date: Date, tz?: string | null): string {
  return tz ? dateKeyInTz(date, tz) : toDateKey(date);
}

export function daysAgo(n: number, from = new Date()): Date {
  const d = new Date(from);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - n);
  return d;
}

/** Días con al menos una práctica completa (sesión del gimnasio o antídoto finalizado). */
export function practiceDayKeys(sessions: SessionRecord[]): Set<string> {
  return new Set(sessions.filter((s) => s.completed).map((s) => recordDayKey(s.startedAt, s.tz)));
}

/**
 * Racha actual: días consecutivos con práctica. Si hoy aún no se practicó, la racha
 * cuenta desde ayer (el día no está "perdido" hasta que termina).
 */
export function computeStreak(sessions: SessionRecord[], today = new Date()): { current: number; longest: number } {
  const days = practiceDayKeys(sessions);
  if (days.size === 0) return { current: 0, longest: 0 };

  let current = 0;
  let offset = days.has(toDateKey(today)) ? 0 : 1;
  while (days.has(toDateKey(daysAgo(offset, today)))) {
    current++;
    offset++;
  }

  const sorted = [...days].sort();
  let longest = 1;
  let run = 1;
  for (let i = 1; i < sorted.length; i++) {
    const prev = new Date(`${sorted[i - 1]}T00:00:00`);
    const next = new Date(`${sorted[i]}T00:00:00`);
    const diff = Math.round((next.getTime() - prev.getTime()) / 86_400_000);
    run = diff === 1 ? run + 1 : 1;
    longest = Math.max(longest, run);
  }
  return { current, longest: Math.max(longest, current) };
}

/** Minutos practicados por día en los últimos `n` días (más antiguo primero). */
export function dailyMinutes(sessions: SessionRecord[], n: number, today = new Date()) {
  const totals = new Map<string, number>();
  for (const s of sessions) {
    const key = recordDayKey(s.startedAt, s.tz);
    totals.set(key, (totals.get(key) ?? 0) + s.durationSec / 60);
  }
  return Array.from({ length: n }, (_, i) => {
    const key = toDateKey(daysAgo(n - 1 - i, today));
    return { key, minutes: Math.round(totals.get(key) ?? 0) };
  });
}

/**
 * Dosis de entrenamiento por habilidad: minutos y sesiones en la ventana.
 * Es una medida de exposición, no de competencia; se muestra como tal.
 */
export function skillDose(sessions: SessionRecord[], windowDays = 28, today = new Date()) {
  const since = daysAgo(windowDays - 1, today).getTime();
  const result: Record<SkillKey, { minutes: number; sessions: number; weekly: number[] }> = {
    attention: { minutes: 0, sessions: 0, weekly: [0, 0, 0, 0] },
    compassion: { minutes: 0, sessions: 0, weekly: [0, 0, 0, 0] },
    resilience: { minutes: 0, sessions: 0, weekly: [0, 0, 0, 0] },
  };
  for (const s of sessions) {
    const t = s.startedAt.getTime();
    if (t < since || !s.completed) continue;
    const week = Math.min(3, Math.floor((t - since) / (7 * 86_400_000)));
    for (const skill of s.skills) {
      result[skill].minutes += s.durationSec / 60;
      result[skill].sessions += 1;
      result[skill].weekly[week] += s.durationSec / 60;
    }
  }
  for (const k of Object.keys(result) as SkillKey[]) {
    result[k].minutes = Math.round(result[k].minutes);
    result[k].weekly = result[k].weekly.map(Math.round);
  }
  return result;
}

/** Estado emocional base: media móvil del ánimo autoinformado. */
export function moodBaseline(checkins: DailyCheckin[], windowDays: number, today = new Date()) {
  const sinceKey = toDateKey(daysAgo(windowDays - 1, today));
  const values = checkins.filter((c) => c.date >= sinceKey).map((c) => c.mood);
  if (values.length === 0) return null;
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  return { mean: Math.round(mean * 10) / 10, n: values.length };
}

/** Cambio medio inmediato de intensidad tras aplicar un antídoto (sólo registros completos). */
export function antidoteEffect(logs: AfflictionLog[], windowDays = 28, today = new Date()) {
  const since = daysAgo(windowDays - 1, today).getTime();
  const complete = logs.filter((l) => l.intensityPost !== null && l.createdAt.getTime() >= since);
  if (complete.length === 0) return null;
  const delta = complete.reduce((sum, l) => sum + (l.intensityPost! - l.intensityPre), 0) / complete.length;
  return { meanDelta: Math.round(delta * 10) / 10, n: complete.length };
}

/** Serie diaria de ánimo (null = sin registro), más antiguo primero. */
export function moodSeries(checkins: DailyCheckin[], n: number, today = new Date()) {
  const byDate = new Map(checkins.map((c) => [c.date, c.mood]));
  return Array.from({ length: n }, (_, i) => {
    const key = toDateKey(daysAgo(n - 1 - i, today));
    return { key, mood: byDate.get(key) ?? null };
  });
}

/**
 * Ánimo medio en días con y sin práctica. Es una correlación descriptiva:
 * no permite inferir que la práctica cause el cambio (ver Biblioteca › Cómo leer tu progreso).
 */
export function moodByPracticeDay(sessions: SessionRecord[], checkins: DailyCheckin[], windowDays = 28, today = new Date()) {
  const sinceKey = toDateKey(daysAgo(windowDays - 1, today));
  const practiced = practiceDayKeys(sessions);
  const withP: number[] = [];
  const without: number[] = [];
  for (const c of checkins) {
    if (c.date < sinceKey) continue;
    (practiced.has(c.date) ? withP : without).push(c.mood);
  }
  const mean = (xs: number[]) => (xs.length ? Math.round((xs.reduce((a, b) => a + b, 0) / xs.length) * 10) / 10 : null);
  return { with: { mean: mean(withP), n: withP.length }, without: { mean: mean(without), n: without.length } };
}

/** Ids de práctica con al menos una sesión completa (para el progreso de programas). */
export function completedPracticeIds(sessions: SessionRecord[]): Set<string> {
  return new Set(sessions.filter((s) => s.completed).map((s) => s.practiceId));
}

/** Revisión semanal: últimos 7 días frente a los 7 anteriores. */
export function weeklyReview(sessions: SessionRecord[], checkins: DailyCheckin[], journalDates: Date[], today = new Date()) {
  const window = (startAgo: number) => {
    const from = daysAgo(startAgo + 6, today).getTime();
    const to = daysAgo(startAgo - 1, today).getTime(); // exclusivo
    const fromKey = toDateKey(daysAgo(startAgo + 6, today));
    const toKey = toDateKey(daysAgo(startAgo, today));
    const s = sessions.filter((x) => x.completed && x.startedAt.getTime() >= from && x.startedAt.getTime() < to);
    const moods = checkins.filter((c) => c.date >= fromKey && c.date <= toKey).map((c) => c.mood);
    return {
      practiceDays: new Set(s.map((x) => recordDayKey(x.startedAt, x.tz))).size,
      minutes: Math.round(s.reduce((a, x) => a + x.durationSec / 60, 0)),
      mood: moods.length ? Math.round((moods.reduce((a, b) => a + b, 0) / moods.length) * 10) / 10 : null,
      entries: journalDates.filter((d) => d.getTime() >= from && d.getTime() < to).length,
    };
  };
  return { current: window(0), previous: window(7) };
}
