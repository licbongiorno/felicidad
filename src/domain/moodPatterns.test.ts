import { describe, expect, it } from 'vitest';
import { confidenceOf, moodPatterns } from './moodPatterns';
import type { DailyCheckin, JournalEntry, SessionRecord } from './types';

const today = new Date(2026, 9, 31, 12);
const day = (n: number) => new Date(2026, 9, n, 20);
const key = (n: number) => `2026-10-${String(n).padStart(2, '0')}`;
const checkin = (n: number, mood: number): DailyCheckin => ({ date: key(n), mood, perma: null, updatedAt: day(n) });
const session = (n: number, family: SessionRecord['family'] = 'attentional'): SessionRecord => ({
  id: `s${n}`,
  practiceId: 'atencion-respiracion',
  family,
  skills: [],
  source: 'gym',
  startedAt: day(n),
  durationSec: 600,
  completed: true,
  moodPre: null,
  moodPost: null,
});

describe('patrones del ánimo', () => {
  it('la confianza depende del grupo más chico y de la diferencia', () => {
    expect(confidenceOf(3, 20, 2)).toBe('baja');
    expect(confidenceOf(8, 9, 0.6)).toBe('media');
    expect(confidenceOf(15, 14, 1.2)).toBe('alta');
    expect(confidenceOf(15, 14, 0.6)).toBe('media');
  });

  it('no muestra nada con pocos días ni con diferencias pequeñas', () => {
    expect(moodPatterns([checkin(1, 5), checkin(2, 7)], [session(1)], [], today)).toEqual([]);
    const flat = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => checkin(n, 6));
    expect(moodPatterns(flat, [1, 3, 5, 7].map((n) => session(n)), [], today)).toEqual([]);
  });

  it('describe la asociación sin afirmar causas y propone un experimento', () => {
    const moods = Array.from({ length: 16 }, (_, i) => checkin(i + 1, i % 2 === 0 ? 8 : 5));
    const practiced = Array.from({ length: 16 }, (_, i) => i + 1).filter((n) => n % 2 === 1).map((n) => session(n));
    const ps = moodPatterns(moods, practiced, [] as JournalEntry[], today);
    const p = ps.find((x) => x.feature === 'practica' && x.lag === 'mismo-dia')!;
    expect(p.diff).toBe(3);
    expect(p.nWith).toBe(8);
    expect(p.confidence).toBe('media');
    expect(p.text).toContain('3 puntos más alto (8 días con, 8 sin)');
    expect(p.experiment.experimento).toMatch(/un día sí y otro no/);
    // También sale el día siguiente (con signo opuesto en este patrón alternado).
    expect(ps.some((x) => x.feature === 'practica' && x.lag === 'dia-siguiente' && x.diff < 0)).toBe(true);
  });

  it('ignora registros de más de 90 días', () => {
    const old = new Date(2026, 5, 1);
    const moods = Array.from({ length: 10 }, (_, i) => ({ ...checkin(1, i % 2 ? 9 : 2), date: `2026-06-${String(i + 1).padStart(2, '0')}` }));
    expect(moodPatterns(moods, [{ ...session(1), startedAt: old }], [], today)).toEqual([]);
  });
});
