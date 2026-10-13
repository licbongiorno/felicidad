import { describe, expect, it } from 'vitest';
import {
  antidoteEffect,
  computeStreak,
  dailyMinutes,
  daysAgo,
  moodBaseline,
  moodByPracticeDay,
  moodSeries,
  skillDose,
  toDateKey,
  weeklyReview,
  dateKeyInTz,
  recordDayKey,
} from './metrics';
import type { AfflictionLog, DailyCheckin, SessionRecord } from './types';

const TODAY = new Date(2026, 9, 15, 18, 0); // 15 oct 2026, 18:00 local

function session(daysBefore: number, minutes = 10, overrides: Partial<SessionRecord> = {}): SessionRecord {
  const d = daysAgo(daysBefore, TODAY);
  d.setHours(9);
  return {
    id: Math.random().toString(36),
    practiceId: 'atencion-respiracion',
    family: 'attentional',
    skills: ['attention'],
    source: 'gym',
    startedAt: d,
    durationSec: minutes * 60,
    completed: true,
    moodPre: null,
    moodPost: null,
    ...overrides,
  };
}

const checkin = (daysBefore: number, mood: number): DailyCheckin => ({
  date: toDateKey(daysAgo(daysBefore, TODAY)),
  mood,
  perma: null,
  updatedAt: TODAY,
});

describe('toDateKey', () => {
  it('usa la fecha local con ceros a la izquierda', () => {
    expect(toDateKey(new Date(2026, 0, 5, 23, 59))).toBe('2026-01-05');
  });
});

describe('computeStreak', () => {
  it('es 0 sin sesiones', () => {
    expect(computeStreak([], TODAY)).toEqual({ current: 0, longest: 0 });
  });

  it('cuenta días consecutivos incluyendo hoy', () => {
    expect(computeStreak([session(0), session(1), session(2)], TODAY).current).toBe(3);
  });

  it('no rompe la racha si hoy aún no se practicó', () => {
    expect(computeStreak([session(1), session(2)], TODAY).current).toBe(2);
  });

  it('se rompe con un día sin práctica', () => {
    expect(computeStreak([session(0), session(2), session(3)], TODAY).current).toBe(1);
  });

  it('ignora sesiones incompletas', () => {
    expect(computeStreak([session(0, 1, { completed: false })], TODAY).current).toBe(0);
  });

  it('calcula la racha más larga histórica', () => {
    const s = [session(0), session(5), session(6), session(7), session(8)];
    expect(computeStreak(s, TODAY)).toEqual({ current: 1, longest: 4 });
  });

  it('dos sesiones el mismo día cuentan una vez', () => {
    expect(computeStreak([session(0), session(0)], TODAY).current).toBe(1);
  });
});

describe('dailyMinutes', () => {
  it('devuelve n días ordenados del más antiguo a hoy, con ceros', () => {
    const days = dailyMinutes([session(0, 12), session(0, 3), session(2, 5)], 3, TODAY);
    expect(days.map((d) => d.minutes)).toEqual([5, 0, 15]);
    expect(days[2].key).toBe(toDateKey(TODAY));
  });
});

describe('skillDose', () => {
  it('suma minutos por habilidad dentro de la ventana y reparte por semana', () => {
    const dose = skillDose([session(0, 10), session(20, 10), session(40, 99)], 28, TODAY);
    expect(dose.attention.minutes).toBe(20);
    expect(dose.attention.sessions).toBe(2);
    expect(dose.attention.weekly.reduce((a, b) => a + b, 0)).toBe(20);
    expect(dose.compassion.minutes).toBe(0);
  });
});

describe('moodBaseline / moodSeries', () => {
  const checkins = [checkin(0, 8), checkin(1, 6), checkin(10, 2)];

  it('media de la ventana', () => {
    expect(moodBaseline(checkins, 7, TODAY)).toEqual({ mean: 7, n: 2 });
    expect(moodBaseline(checkins, 28, TODAY)).toEqual({ mean: 5.3, n: 3 });
    expect(moodBaseline([], 7, TODAY)).toBeNull();
  });

  it('serie con null en días sin registro', () => {
    const series = moodSeries(checkins, 3, TODAY);
    expect(series.map((p) => p.mood)).toEqual([null, 6, 8]);
  });
});

describe('moodByPracticeDay', () => {
  it('separa el ánimo de días con y sin práctica', () => {
    const r = moodByPracticeDay([session(0), session(1)], [checkin(0, 8), checkin(1, 6), checkin(2, 3)], 28, TODAY);
    expect(r.with).toEqual({ mean: 7, n: 2 });
    expect(r.without).toEqual({ mean: 3, n: 1 });
  });
});

describe('antidoteEffect', () => {
  const log = (pre: number, post: number | null): AfflictionLog => ({
    id: 'x',
    emotionId: 'ira',
    antidoteId: 'antidoto-ira',
    intensityPre: pre,
    intensityPost: post,
    trigger: null,
    stabilizationUsed: false,
    createdAt: TODAY,
  });

  it('promedia sólo registros completos', () => {
    expect(antidoteEffect([log(8, 4), log(6, 6), log(9, null)], 28, TODAY)).toEqual({ meanDelta: -2, n: 2 });
  });

  it('null sin registros completos', () => {
    expect(antidoteEffect([log(9, null)], 28, TODAY)).toBeNull();
  });
});

describe('weeklyReview', () => {
  it('compara los últimos 7 días con los 7 anteriores', () => {
    const r = weeklyReview(
      [session(0, 10), session(1, 10), session(8, 30)],
      [checkin(0, 8), checkin(9, 4)],
      [daysAgo(2, TODAY), daysAgo(3, TODAY)],
      TODAY,
    );
    expect(r.current).toEqual({ practiceDays: 2, minutes: 20, mood: 8, entries: 2 });
    expect(r.previous).toEqual({ practiceDays: 1, minutes: 30, mood: 4, entries: 0 });
  });
});

describe('zona horaria del registro', () => {
  // 13 oct 2026 a las 02:30 UTC = 12 oct 23:30 en Buenos Aires (UTC−3) = 13 oct 04:30 en Madrid (UTC+2).
  const instant = new Date(Date.UTC(2026, 9, 13, 2, 30));

  it('calcula el día en la zona indicada', () => {
    expect(dateKeyInTz(instant, 'America/Argentina/Buenos_Aires')).toBe('2026-10-12');
    expect(dateKeyInTz(instant, 'Europe/Madrid')).toBe('2026-10-13');
  });

  it('una zona inválida no rompe: se usa la fecha local', () => {
    expect(dateKeyInTz(instant, 'Zona/Inexistente')).toBe(toDateKey(instant));
  });

  it('el día vivido se conserva al viajar: la racha no se rompe', () => {
    // Práctica el 11 y el 12 a las 23:30 en Buenos Aires; vistas desde cualquier zona siguen siendo 11 y 12.
    const ba = 'America/Argentina/Buenos_Aires';
    const s = (utc: Date): SessionRecord => ({ ...session(0), startedAt: utc, tz: ba });
    const days = [s(new Date(Date.UTC(2026, 9, 12, 2, 30))), s(new Date(Date.UTC(2026, 9, 13, 2, 30)))].map((x) => recordDayKey(x.startedAt, x.tz));
    expect(days).toEqual(['2026-10-11', '2026-10-12']);
  });

  it('sin zona guardada (registros antiguos) usa la fecha local', () => {
    expect(recordDayKey(instant, null)).toBe(toDateKey(instant));
  });
});
