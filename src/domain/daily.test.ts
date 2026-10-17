import { describe, expect, it } from 'vitest';
import {
  DAILY_QUESTIONS,
  dayProgress,
  daysSinceLastActivity,
  mergeMilestones,
  MILESTONES,
  nextMilestone,
  questionOfDay,
  reachedMilestones,
  todaysAnswer,
} from './daily';
import { CONCERNS, planFor, TIME_BUDGETS, DAY_MOMENTS } from './onboarding';
import { familyTip } from './family-tips';
import { PRACTICE_BY_ID } from './practices';
import { PROGRAMS } from './programs';
import { MODULES } from './catalog';
import { inflesz, longestSentenceWords } from './readability';
import { toDateKey } from './metrics';
import type { Application, DailyCheckin, JournalEntry, SessionRecord } from './types';
import type { KidActivityLog, KidProfile } from './kids';

const day = (offset: number, hour = 12) => {
  const d = new Date(2026, 9, 15, hour);
  d.setDate(d.getDate() + offset);
  return d;
};
const TODAY = day(0);

const session = (offset: number, over: Partial<SessionRecord> = {}): SessionRecord => ({
  id: Math.random().toString(36),
  practiceId: 'atencion-respiracion',
  family: 'attentional',
  skills: [],
  source: 'gym',
  startedAt: day(offset),
  durationSec: 300,
  completed: true,
  moodPre: null,
  moodPost: null,
  ...over,
});
const checkin = (offset: number): DailyCheckin => ({ date: toDateKey(day(offset)), mood: 6, perma: null, updatedAt: day(offset) });
const entry = (offset: number, type: JournalEntry['type'] = 'pregunta-del-dia'): JournalEntry => ({
  id: Math.random().toString(36),
  type,
  values: { pregunta: '¿Qué?', respuesta: 'Esto.' },
  createdAt: day(offset),
});

describe('pregunta del día', () => {
  it('hay muchas preguntas, únicas, cortas, fáciles de leer y que terminan en signo de pregunta', () => {
    expect(DAILY_QUESTIONS.length).toBeGreaterThanOrEqual(60);
    expect(new Set(DAILY_QUESTIONS.map((q) => q.text)).size).toBe(DAILY_QUESTIONS.length);
    for (const q of DAILY_QUESTIONS) {
      expect(q.text, q.text).toMatch(/\?$/);
      expect(q.text, q.text).toMatch(/¿/);
      expect(q.text, q.text).not.toMatch(/\w\/[ao]s?\b/);
      expect(longestSentenceWords(q.text), q.text).toBeLessThanOrEqual(20);
      expect(q.text.length, q.text).toBeLessThanOrEqual(120);
    }
    expect(Math.round(inflesz(DAILY_QUESTIONS.map((q) => q.text).join(' ')))).toBeGreaterThanOrEqual(65);
  });

  it('los temas se alternan: dos días seguidos nunca repiten tema', () => {
    for (let i = 0; i < 70; i++) expect(questionOfDay(day(i)).theme, String(i)).not.toBe(questionOfDay(day(i + 1)).theme);
  });

  it('es la misma durante todo el día y cambia al día siguiente; «otra» da una distinta', () => {
    expect(questionOfDay(day(0, 1))).toEqual(questionOfDay(day(0, 23)));
    expect(questionOfDay(day(0))).not.toEqual(questionOfDay(day(1)));
    expect(questionOfDay(TODAY, 1)).not.toEqual(questionOfDay(TODAY));
  });
});

describe('pasos del día', () => {
  it('cuenta registro, práctica y escritura de hoy', () => {
    expect(dayProgress([], [], [], TODAY).done).toBe(0);
    const p = dayProgress([session(0), session(-1)], [checkin(-1)], [entry(0)], TODAY);
    expect(p).toMatchObject({ checkin: false, practice: true, reflection: true, done: 2 });
    expect(dayProgress([session(0, { completed: false })], [checkin(0)], [], TODAY)).toMatchObject({ practice: false, checkin: true, done: 1 });
  });

  it('encuentra la respuesta de hoy a la pregunta del día', () => {
    expect(todaysAnswer([entry(-1)], TODAY)).toBeNull();
    expect(todaysAnswer([entry(0, 'tres-cosas')], TODAY)).toBeNull();
    expect(todaysAnswer([entry(0)], TODAY)).not.toBeNull();
  });

  it('días desde la última actividad, para dar la bienvenida de regreso', () => {
    expect(daysSinceLastActivity([], [], [], TODAY)).toBeNull();
    expect(daysSinceLastActivity([session(-6)], [checkin(-5)], [], TODAY)).toBe(5);
    expect(daysSinceLastActivity([session(0)], [], [], TODAY)).toBe(0);
  });
});

describe('hitos', () => {
  const none = { sessions: [], checkins: [], journal: [], applications: [] };

  it('ids únicos y sin hitos al empezar', () => {
    expect(new Set(MILESTONES.map((m) => m.id)).size).toBe(MILESTONES.length);
    expect(reachedMilestones(none)).toEqual([]);
    expect(nextMilestone([])?.id).toBe('primera-practica');
  });

  it('reconoce la práctica, un día completo y las tres familias', () => {
    const data = {
      ...none,
      sessions: [session(0), session(-1, { family: 'constructive' }), session(-2, { family: 'deconstructive' })],
      checkins: [checkin(0)],
      journal: [entry(0)],
    };
    const r = reachedMilestones(data);
    for (const id of ['primera-practica', 'primer-registro', 'primera-pregunta', 'dia-completo', 'tres-familias']) expect(r).toContain(id);
    expect(r).not.toContain('cinco-dias');
  });

  it('una semana constante pide cuatro días distintos en la misma semana', () => {
    // 2026-10-12 es lunes: del 12 al 15 son cuatro días de la misma semana.
    const four = [-3, -2, -1, 0].map((d) => session(d));
    expect(reachedMilestones({ ...none, sessions: four })).toContain('semana-constante');
    expect(reachedMilestones({ ...none, sessions: [session(-3), session(-3), session(-2), session(0)] })).not.toContain('semana-constante');
  });

  it('cuenta las aplicaciones útiles en la vida', () => {
    const app = (useful: boolean): Application => ({ id: 'a', practiceId: 'x', sessionId: null, applied: true, usefulness: useful ? 'util' : 'indiferente', note: null, createdAt: TODAY });
    expect(reachedMilestones({ ...none, applications: [app(false)] })).toContain('primera-aplicacion');
    expect(reachedMilestones({ ...none, applications: [1, 2, 3, 4, 5].map(() => app(true)) })).toContain('cinco-utiles');
  });

  it('un hito guardado nunca se pierde y los nuevos se celebran una vez', () => {
    expect(mergeMilestones(['primera-practica'], [])).toEqual({ all: ['primera-practica'], fresh: [] });
    const m = mergeMilestones(['primera-practica'], ['primera-practica', 'primer-registro']);
    expect(m.fresh).toEqual(['primer-registro']);
    expect(m.all).toEqual(['primera-practica', 'primer-registro']);
    expect(mergeMilestones([], ['no-existe']).fresh).toEqual([]);
  });
});

describe('primer uso', () => {
  it('cada preocupación lleva a un programa, un módulo y una primera práctica sin precauciones', () => {
    const moduleIds = new Set(MODULES.map((m) => m.id));
    expect(new Set(CONCERNS.map((c) => c.id)).size).toBe(CONCERNS.length);
    for (const c of CONCERNS) {
      expect(PROGRAMS.some((p) => p.id === c.programId), c.id).toBe(true);
      expect(moduleIds.has(c.module), c.id).toBe(true);
      for (const t of TIME_BUDGETS) {
        const plan = planFor({ concern: c.id, time: t.id, moment: 'noche' });
        expect(plan.program.id).toBe(c.programId);
        const p = PRACTICE_BY_ID[plan.firstPracticeId];
        expect(p, `${c.id}/${t.id} → ${plan.firstPracticeId}`).toBeDefined();
        expect(p.cautions, `${c.id}/${t.id}`).toBeFalsy();
      }
    }
  });

  it('los momentos del día tienen una hora válida', () => {
    for (const d of DAY_MOMENTS) expect(d.time).toMatch(/^([01]\d|2[0-3]):[0-5]\d$/);
  });
});

describe('idea semanal para la familia', () => {
  const kid = (band: KidProfile['band']): KidProfile => ({ id: 'k', name: 'Juli', band, avatar: 'sol', createdAt: TODAY });
  const log = (feeling: KidActivityLog['feeling'], intensity: KidActivityLog['intensity'], daysAgo = 0): KidActivityLog => ({
    id: Math.random().toString(36),
    kidId: 'k',
    activityId: 'como-me-siento',
    feeling,
    intensity,
    note: null,
    createdAt: new Date(TODAY.getTime() - daysAgo * 86_400_000),
  });

  it('elige la guía según lo registrado en la semana', () => {
    expect(familyTip(kid('4-6'), [], TODAY).guide.id).toBe('tiempo-especial');
    expect(familyTip(kid('13-17'), [], TODAY).guide.id).toBe('adolescencia');
    expect(familyTip(kid('0-3'), [], TODAY).guide.id).toBe('primeros-anos');
    expect(familyTip(kid('7-9'), [log('miedo', 1)], TODAY).guide.id).toBe('acompanar-la-ansiedad');
    expect(familyTip(kid('7-9'), [log('enojo', 1)], TODAY).guide.id).toBe('berrinches');
    expect(familyTip(kid('10-12'), [log('enojo', 1)], TODAY).guide.id).toBe('validar');
    expect(familyTip(kid('7-9'), [0, 2, 4].map((d) => log('tristeza', 3, d)), TODAY).guide.id).toBe('cuando-consultar');
    expect(familyTip(kid('7-9'), [log('alegria', 2)], TODAY).guide.id).toBe('entrenador-emocional');
  });

  it('para 0 a 3 años la idea cambia de semana en semana y responde al cansancio y a la constancia', () => {
    const week = (n: number) => new Date(TODAY.getTime() + n * 7 * 86_400_000);
    const ids = new Set([0, 1, 2, 3].map((n) => familyTip(kid('0-3'), [{ ...log('alegria', 1), createdAt: week(n) }], week(n)).guide.id));
    expect(ids.size).toBe(4);
    expect(familyTip(kid('7-9'), [log('cansancio', 2)], TODAY).guide.id).toBe('dormir-mejor');
    expect(familyTip(kid('7-9'), [0, 1, 2, 3].map((d) => log('alegria', 1, d)), TODAY).text).toMatch(/4 días/);
  });

  it('los textos nombran al chico o son generales, sin dobles espacios', () => {
    for (const b of ['0-3', '4-6', '7-9', '10-12', '13-17'] as const)
      for (const logs of [[], [log('miedo', 1)], [log('enojo', 1)], [log('tristeza', 1)], [log('alegria', 1)]]) {
        const t = familyTip(kid(b), logs, TODAY);
        expect(t.guide, b).toBeDefined();
        expect(t.text).not.toMatch(/ {2}/);
      }
  });
});
