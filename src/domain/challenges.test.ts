import { describe, expect, it } from 'vitest';
import { addDays, CHALLENGES, challengeDay, challengeProgress, taskFor } from './challenges';
import { PRACTICE_BY_ID } from './practices';
import { JOURNAL_TEMPLATES } from './journal';
import type { JournalEntry, SessionRecord } from './types';

const session = (practiceId: string, startedAt: Date): SessionRecord => ({
  id: practiceId + startedAt.getTime(),
  practiceId,
  family: 'attentional',
  skills: [],
  source: 'gym',
  startedAt,
  durationSec: 60,
  completed: true,
  moodPre: null,
  moodPost: null,
});

describe('desafíos', () => {
  it('ids únicos y tareas que apuntan a contenido existente', () => {
    expect(new Set(CHALLENGES.map((c) => c.id)).size).toBe(CHALLENGES.length);
    for (const c of CHALLENGES) {
      expect([7, 21, 30]).toContain(c.days);
      expect(c.tasks.length).toBeGreaterThan(0);
      expect(c.tasks.length).toBeLessThanOrEqual(c.days);
      for (const t of c.tasks) {
        if (t.practiceId) expect(PRACTICE_BY_ID[t.practiceId], `${c.id} → ${t.practiceId}`).toBeDefined();
        if (t.journalType) expect(JOURNAL_TEMPLATES.some((j) => j.type === t.journalType), `${c.id} → ${t.journalType}`).toBe(true);
        expect(t.text.trim()).toMatch(/[.?!»]$/);
      }
      for (const r of c.references) expect(r.citation).toMatch(/\(\d{4}\)/);
    }
  });

  it('las tareas se repiten si hay menos que días', () => {
    const c = CHALLENGES.find((x) => x.id === 'semana-de-gratitud')!;
    expect(taskFor(c, 5)).toBe(c.tasks[0]);
  });

  it('cuenta el día por registro o a mano, sin reiniciar al saltarse días', () => {
    const c = CHALLENGES.find((x) => x.id === 'siete-dias-de-calma')!;
    const start = '2026-03-01';
    const today = new Date(2026, 2, 4, 20); // día 4
    expect(challengeDay(start, today)).toBe(4);
    const sessions = [session(taskFor(c, 1).practiceId!, new Date(2026, 2, 1, 9)), session('otra', new Date(2026, 2, 2, 9))];
    const p = challengeProgress(c, { start, manual: [addDays(start, 2)] }, sessions, [] as JournalEntry[], today);
    expect(p.done).toEqual([true, false, true, false]);
    expect(p.completed).toBe(2);
    expect(p.finished).toBe(false);
    expect(challengeProgress(c, { start, manual: [] }, [], [], new Date(2026, 2, 9)).finished).toBe(true);
  });
});
