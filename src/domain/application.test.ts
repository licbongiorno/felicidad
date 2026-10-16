import { describe, expect, it } from 'vitest';
import { applicationsByPractice, applicationStats, confidenceTrends, pendingReviews } from './application';
import type { Application, SessionRecord } from './types';

const now = new Date('2026-10-14T12:00:00');
const hoursAgo = (h: number) => new Date(now.getTime() - h * 3_600_000);

const session = (id: string, startedAt: Date, transfer: string | null): SessionRecord => ({
  id,
  practiceId: 'pausa-stop',
  family: 'attentional',
  skills: ['attention'],
  source: 'gym',
  startedAt,
  durationSec: 300,
  completed: true,
  moodPre: null,
  moodPost: null,
  transfer,
});

const app = (practiceId: string, applied: boolean, usefulness: Application['usefulness'], createdAt = hoursAgo(1), sessionId: string | null = null): Application => ({
  id: Math.random().toString(36),
  practiceId,
  sessionId,
  applied,
  usefulness,
  note: null,
  createdAt,
});

describe('paso «Revisar»', () => {
  it('pide revisar los planes de hace más de 6 horas y menos de 14 días, una sola vez', () => {
    const sessions = [
      session('reciente', hoursAgo(2), 'Mañana en el trabajo'),
      session('listo', hoursAgo(30), 'Antes de dormir'),
      session('viejo', hoursAgo(24 * 20), 'Hace mucho'),
      session('sin-plan', hoursAgo(30), null),
      session('revisado', hoursAgo(48), 'Ya lo conté'),
    ];
    const pending = pendingReviews(sessions, [app('pausa-stop', true, 'util', hoursAgo(1), 'revisado')], now);
    expect(pending.map((s) => s.id)).toEqual(['listo']);
  });
});

describe('indicadores de aplicación', () => {
  it('separa uso, no uso y utilidad percibida en la ventana', () => {
    const rows = [
      app('pausa-stop', true, 'util'),
      app('pausa-stop', true, 'util'),
      app('tipp', true, 'indiferente'),
      app('tipp', false, null),
      app('dear-man', true, 'util', hoursAgo(24 * 40)),
    ];
    const s = applicationStats(rows, 28, now);
    expect(s).toMatchObject({ applied: 3, notApplied: 1, useful: 2, neutral: 1, notSuitable: 0 });
    expect(s.topUseful).toEqual([{ practiceId: 'pausa-stop', n: 2 }]);
    expect(applicationsByPractice(rows)).toEqual({ 'pausa-stop': { applied: 2, useful: 2 }, tipp: { applied: 1, useful: 0 }, 'dear-man': { applied: 1, useful: 1 } });
  });
});

describe('confianza por habilidad', () => {
  const app = (practiceId: string, confidence: number | null, day: number): Application => ({
    id: `${practiceId}-${day}`,
    practiceId,
    sessionId: null,
    applied: true,
    usefulness: 'util',
    note: null,
    confidence,
    createdAt: new Date(2026, 9, day),
  });

  it('toma la primera y la última confianza registrada de cada habilidad', () => {
    const t = confidenceTrends([app('dear-man', 7, 10), app('dear-man', 3, 1), app('dear-man', null, 12), app('pausa-stop', 5, 5)]);
    expect(t[0]).toMatchObject({ practiceId: 'dear-man', first: 3, last: 7, n: 2, change: 4 });
    expect(t[1]).toMatchObject({ practiceId: 'pausa-stop', first: 5, last: 5, n: 1, change: 0 });
  });

  it('ignora los registros sin confianza (versiones anteriores)', () => {
    expect(confidenceTrends([app('tipp', null, 1)])).toEqual([]);
  });
});
