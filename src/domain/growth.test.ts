import { describe, expect, it } from 'vitest';
import {
  buildGarden,
  challengeOfWeek,
  challengeProgress,
  daysThisMonth,
  DBT_SKILLS,
  growthCounts,
  growthNote,
  MAX_PLANTS_PER_FAMILY,
  plantsFor,
  skillProgress,
  STAGES_PER_PLANT,
  WEEKLY_CHALLENGES,
  weekStart,
  type LifetimeCounts,
} from './growth';
import { JOURNAL_TEMPLATES } from './journal';
import { PRACTICE_BY_ID } from './practices';
import type { JournalEntry, PracticeFamily, SessionRecord } from './types';

const session = (practiceId: string, family: PracticeFamily, startedAt: Date, completed = true): SessionRecord => ({
  id: Math.random().toString(36),
  practiceId,
  family,
  skills: ['attention'],
  source: 'gym',
  startedAt,
  durationSec: 300,
  completed,
  moodPre: null,
  moodPost: null,
  tz: null,
});

const entry = (type: JournalEntry['type'], createdAt: Date): JournalEntry => ({ id: Math.random().toString(36), type, values: {}, createdAt, tz: null });

describe('jardín', () => {
  it('cada planta madura en cinco prácticas y no pasa del máximo', () => {
    expect(plantsFor('constructive', 0)).toHaveLength(0);
    expect(plantsFor('constructive', 1).map((p) => p.stage)).toEqual([1]);
    expect(plantsFor('constructive', 7).map((p) => p.stage)).toEqual([5, 2]);
    expect(plantsFor('constructive', 999)).toHaveLength(MAX_PLANTS_PER_FAMILY);
  });

  it('las plantas aparecen siempre en el mismo sitio (deterministas)', () => {
    expect(plantsFor('attentional', 12)).toEqual(plantsFor('attentional', 12));
    expect(plantsFor('attentional', 12).slice(0, 2)).toEqual(plantsFor('attentional', 10));
    for (const p of plantsFor('deconstructive', 40)) {
      expect(p.x).toBeGreaterThanOrEqual(0);
      expect(p.x).toBeLessThanOrEqual(1);
    }
  });

  it('nunca retrocede: los recuentos de toda la vida no bajan de la ventana local', () => {
    const now = new Date();
    const sessions = [session('pausa-stop', 'attentional', now), session('pausa-stop', 'attentional', now), session('tipp', 'attentional', now, false)];
    const stale: LifetimeCounts = { at: now, families: { attentional: 0, constructive: 0, deconstructive: 0 }, practices: {}, journalTypes: {}, journalTotal: 0 };
    expect(growthCounts(sessions, [], stale).families.attentional).toBe(2);
    expect(growthCounts(sessions, [], null).practices['pausa-stop']).toBe(2);
  });

  it('suma a los recuentos de toda la vida lo registrado después de la consulta', () => {
    const at = new Date('2026-10-01T10:00:00');
    const lifetime: LifetimeCounts = { at, families: { attentional: 40, constructive: 3, deconstructive: 0 }, practices: { 'pausa-stop': 12 }, journalTypes: {}, journalTotal: 5 };
    const sessions = [session('pausa-stop', 'attentional', new Date('2026-10-02T10:00:00')), session('pausa-stop', 'attentional', new Date('2026-09-30T10:00:00'))];
    const counts = growthCounts(sessions, [entry('tres-cosas', new Date('2026-10-03T10:00:00'))], lifetime);
    expect(counts.families.attentional).toBe(41);
    expect(counts.practices['pausa-stop']).toBe(13);
    expect(counts.journalTotal).toBe(6);
  });

  it('los hitos aparecen al acumular práctica', () => {
    const g = buildGarden({ families: { attentional: 3, constructive: 2, deconstructive: 0 }, practices: {}, journalTypes: {}, journalTotal: 30 });
    expect(g.total).toBe(5);
    expect(g.reached.map((m) => m.at)).toEqual([1, 5]);
    expect(g.next?.at).toBe(12);
    expect(g.fireflies).toBe(24);
  });

  it('el mensaje al terminar describe lo que creció', () => {
    expect(growthNote('constructive', 0, 0)).toMatch(/Brotó una flor nueva/);
    expect(growthNote('attentional', STAGES_PER_PLANT - 1, 20)).toMatch(/plenitud/);
    expect(growthNote('deconstructive', 1, 3)).toMatch(/creció un poco más/);
    expect(growthNote('attentional', 2, 4)).toMatch(/sale el sol/);
  });
});

describe('constancia sin castigo', () => {
  it('cuenta días distintos del mes, con práctica o diario', () => {
    const today = new Date(2026, 9, 14, 12);
    const sessions = [
      session('pausa-stop', 'attentional', new Date(2026, 9, 14, 9)),
      session('pausa-stop', 'attentional', new Date(2026, 9, 14, 20)),
      session('pausa-stop', 'attentional', new Date(2026, 9, 2, 9)),
      session('pausa-stop', 'attentional', new Date(2026, 8, 30, 9)),
      session('pausa-stop', 'attentional', new Date(2026, 9, 5, 9), false),
    ];
    const journal = [entry('tres-cosas', new Date(2026, 9, 7, 9))];
    expect(daysThisMonth(sessions, journal, today).days).toBe(3);
  });
});

describe('colección DBT', () => {
  it('cada habilidad apunta a contenido existente', () => {
    const types = new Set(JOURNAL_TEMPLATES.map((t) => t.type));
    for (const s of DBT_SKILLS) {
      if (s.source.kind === 'practica') expect(PRACTICE_BY_ID[s.source.id], s.id).toBeDefined();
      else expect(types.has(s.source.type), s.id).toBe(true);
    }
    expect(new Set(DBT_SKILLS.map((s) => s.id)).size).toBe(DBT_SKILLS.length);
  });

  it('los niveles van de descubrir a integrar, con la aplicación en la vida', () => {
    const counts = { families: { attentional: 0, constructive: 0, deconstructive: 0 }, practices: { tipp: 6, 'mente-sabia': 2, please: 1 }, journalTypes: { 'tarjeta-diaria': 6 }, journalTotal: 6 };
    const applied = { 'mente-sabia': { applied: 4, useful: 3 }, please: { applied: 1, useful: 0 }, 'dear-man': { applied: 1, useful: 1 } };
    const by = Object.fromEntries(skillProgress(counts, applied).map((s) => [s.skill.id, s]));
    expect(by.tipp.level).toBe(2); // practicada, aún sin aplicar
    expect(by['mente-sabia'].level).toBe(4); // integrada: le sirvió 3 veces
    expect(by.please.level).toBe(3); // aplicada
    expect(by['dear-man'].level).toBe(3); // aplicada aunque se practicó fuera de la app
    expect(by.tarjeta.level).toBe(3);
    expect(by['give-fast'].level).toBe(0);
  });
});

describe('desafío semanal', () => {
  it('la semana empieza el lunes y el desafío es estable durante la semana', () => {
    const wed = new Date(2026, 9, 14, 12);
    expect(weekStart(wed).getDay()).toBe(1);
    expect(challengeOfWeek(wed).id).toBe(challengeOfWeek(new Date(2026, 9, 18, 23)).id);
    expect(challengeOfWeek(wed).id).not.toBe(challengeOfWeek(new Date(2026, 9, 21, 12)).id);
  });

  it('cada desafío apunta a contenido existente', () => {
    const types = new Set(JOURNAL_TEMPLATES.map((t) => t.type));
    for (const c of WEEKLY_CHALLENGES) {
      for (const id of c.counts.practices ?? []) expect(PRACTICE_BY_ID[id], c.id).toBeDefined();
      for (const t of c.counts.journalTypes ?? []) expect(types.has(t), c.id).toBe(true);
      expect(c.target).toBeGreaterThan(0);
    }
  });

  it('cuenta sólo lo de esta semana y no pasa del objetivo', () => {
    const today = new Date(2026, 9, 14, 12);
    const c = WEEKLY_CHALLENGES.find((x) => x.id === 'stop-3')!;
    const sessions = [0, 1, 2, 3].map((d) => session('pausa-stop', 'attentional', new Date(2026, 9, 12 + d, 9))).concat(session('pausa-stop', 'attentional', new Date(2026, 9, 10, 9)));
    expect(challengeProgress(c, sessions, [], today)).toEqual({ done: 3, target: 3, complete: true });
  });
});
