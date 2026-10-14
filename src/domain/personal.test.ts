import { describe, expect, it } from 'vitest';
import { currentWeekKey, goalSuggestions, planCandidates, toggle, weeklyPlanStatus } from './personal';
import { EMPTY_PERSONAL, type SessionRecord } from './types';

const session = (practiceId: string, startedAt: Date, completed = true): SessionRecord => ({
  id: Math.random().toString(36),
  practiceId,
  family: 'attentional',
  skills: ['attention'],
  source: 'gym',
  startedAt,
  durationSec: 300,
  completed,
  moodPre: null,
  moodPost: null,
});

describe('objetivos', () => {
  it('sugiere primero lo no probado de cada módulo elegido', () => {
    const sessions = [session('tipp', new Date()), session('tipp', new Date()), session('pausa-stop', new Date())];
    const [afrontamiento] = goalSuggestions(['afrontamiento'], sessions);
    expect(afrontamiento.module.id).toBe('afrontamiento');
    expect(afrontamiento.practiced).toBe(2);
    expect(['tipp', 'pausa-stop']).not.toContain(afrontamiento.next?.id);
  });

  it('ignora objetivos que ya no existen y respeta el máximo al elegir', () => {
    expect(goalSuggestions(['no-existe'], [])).toEqual([]);
    expect(toggle(['a', 'b', 'c'], 'd', 3)).toEqual(['a', 'b', 'c']);
    expect(toggle(['a', 'b'], 'a', 3)).toEqual(['b']);
  });
});

describe('plan semanal', () => {
  const wed = new Date(2026, 9, 14, 12);

  it('sólo vale para la semana en curso y cuenta lo hecho desde el lunes', () => {
    const personal = { ...EMPTY_PERSONAL, plan: { week: currentWeekKey(wed), practiceIds: ['tipp', 'mente-sabia'] } };
    const sessions = [session('tipp', new Date(2026, 9, 13, 9)), session('tipp', new Date(2026, 9, 10, 9))];
    const status = weeklyPlanStatus(personal, sessions, wed)!;
    expect(status.items.map((i) => [i.practice.id, i.done])).toEqual([
      ['tipp', 1],
      ['mente-sabia', 0],
    ]);
    expect(status.complete).toBe(false);
    expect(weeklyPlanStatus(personal, sessions, new Date(2026, 9, 21, 12))).toBeNull();
  });

  it('propone favoritas antes que las de los objetivos', () => {
    const c = planCandidates({ ...EMPTY_PERSONAL, favorites: ['dear-man'], goals: ['afrontamiento'] }, []);
    expect(c[0].id).toBe('dear-man');
    expect(c.some((p) => p.id === 'tipp')).toBe(true);
  });
});
