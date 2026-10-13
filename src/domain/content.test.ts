import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { ANTIDOTES, buildAntidoteSequence, STABILIZATION_STEP, STABILIZATION_THRESHOLD } from './antidotes';
import { CARDS, DECKS } from './cards';
import { JOURNAL_TEMPLATES } from './journal';
import { ARTICLES, ARTICLE_BY_ID } from './library';
import { PRACTICES, PRACTICE_BY_ID } from './practices';
import { PROGRAMS } from './programs';

/**
 * Integridad del contenido clínico: estos tests fallan si una edición de contenido
 * rompe una referencia cruzada o se desalinea con las reglas de seguridad del servidor.
 */

const unique = (xs: string[]) => new Set(xs).size === xs.length;

describe('prácticas', () => {
  it('ids únicos', () => expect(unique(PRACTICES.map((p) => p.id))).toBe(true));

  it.each(PRACTICES.map((p) => [p.id, p] as const))('%s está completa', (_id, p) => {
    expect(p.steps.length).toBeGreaterThan(0);
    expect(p.steps.every((s) => s.durationSec > 0 && s.instruction.length > 10)).toBe(true);
    expect(p.evidence.length).toBeGreaterThan(0);
    expect(p.howItWorks.length).toBeGreaterThan(0);
    expect(p.tips.length).toBeGreaterThan(0);
    expect(p.obstacles.length).toBeGreaterThan(0);
    expect(p.skills.length).toBeGreaterThan(0);
  });
});

describe('antídotos', () => {
  it('una entrada por emoción', () => expect(unique(ANTIDOTES.map((a) => a.emotionId))).toBe(true));

  it.each(ANTIDOTES.map((a) => [a.emotionId, a] as const))('%s referencia una práctica existente y está completo', (_id, a) => {
    expect(PRACTICE_BY_ID[a.trainingPracticeId]).toBeDefined();
    expect(a.science.length).toBeGreaterThan(0);
    expect(a.whenNot.length).toBeGreaterThan(0);
    expect(a.evidence.length).toBeGreaterThan(0);
  });

  it('las emociones coinciden con las permitidas en las reglas de Firestore', () => {
    const rules = readFileSync('firestore.rules', 'utf8');
    for (const a of ANTIDOTES) expect(rules).toContain(`'${a.emotionId}'`);
  });

  it(`antepone estabilización desde intensidad ${STABILIZATION_THRESHOLD}`, () => {
    const a = ANTIDOTES[0];
    expect(buildAntidoteSequence(a, STABILIZATION_THRESHOLD - 1)[0]).not.toBe(STABILIZATION_STEP);
    expect(buildAntidoteSequence(a, STABILIZATION_THRESHOLD)[0]).toBe(STABILIZATION_STEP);
    expect(buildAntidoteSequence(a, 10)).toHaveLength(a.steps.length + 1);
  });
});

describe('diario', () => {
  const rules = readFileSync('firestore.rules', 'utf8');

  it.each(JOURNAL_TEMPLATES.map((t) => [t.type, t] as const))('%s es coherente con las reglas del servidor', (type, t) => {
    expect(t.fields.some((f) => f.id === t.headline)).toBe(true);
    expect(t.fields.length).toBeLessThanOrEqual(12);
    // Cada campo de la plantilla debe estar en la lista blanca de su tipo en firestore.rules.
    const block = rules.slice(rules.indexOf(`type == '${type}'`));
    const allowed = block.slice(block.indexOf('hasOnly(['), block.indexOf('])'));
    for (const f of t.fields) expect(allowed, `campo ${f.id}`).toContain(`'${f.id}'`);
  });
});

describe('biblioteca y programas', () => {
  it('ids de artículos únicos', () => expect(unique(ARTICLES.map((a) => a.id))).toBe(true));

  it('los relacionados de cada artículo existen', () => {
    for (const a of ARTICLES) {
      for (const id of a.related.practices ?? []) expect(PRACTICE_BY_ID[id], `${a.id} → ${id}`).toBeDefined();
      for (const id of a.related.articles ?? []) expect(ARTICLE_BY_ID[id], `${a.id} → ${id}`).toBeDefined();
    }
  });

  it('cada semana de cada programa referencia contenido existente', () => {
    const journalTypes = new Set(JOURNAL_TEMPLATES.map((t) => t.type));
    for (const p of PROGRAMS) {
      for (const w of p.weeks) {
        for (const id of w.practiceIds) expect(PRACTICE_BY_ID[id], `${p.id} → ${id}`).toBeDefined();
        for (const id of w.articleIds) expect(ARTICLE_BY_ID[id], `${p.id} → ${id}`).toBeDefined();
        if (w.journalType) expect(journalTypes.has(w.journalType)).toBe(true);
      }
    }
  });
});

describe('cartas', () => {
  it('ids únicos y mazos válidos', () => {
    expect(unique(CARDS.map((c) => c.id))).toBe(true);
    for (const c of CARDS) expect(DECKS[c.deck]).toBeDefined();
  });

  it('cada mazo tiene al menos dos cartas (el gesto de cambiar de carta lo requiere)', () => {
    for (const deck of Object.keys(DECKS)) expect(CARDS.filter((c) => c.deck === deck).length).toBeGreaterThanOrEqual(2);
  });

  it('toda cita tiene fuente localizable', () => {
    for (const c of CARDS.filter((c) => c.textType === 'cita')) expect(c.source.length).toBeGreaterThan(5);
  });
});
