import { describe, expect, it } from 'vitest';
import {
  ATTACHMENT_DIMENSIONS,
  ATTACHMENT_ARTICLE_TITLES,
  ATTACHMENT_ITEMS,
  ATTACHMENT_LINKED_ARTICLES,
  ATTACHMENT_LINKED_PRACTICES,
  ATTACHMENT_QUADRANTS,
  dimensionSentence,
  itemScore,
  quadrantOf,
  scoreAttachment,
  tendencyBand,
} from './lab-apego';
import { PRACTICE_BY_ID } from './practices';
import { ARTICLE_BY_ID } from './library';
import { inflesz, longestSentenceWords } from './readability';

const VOSEO = /\b(sos|tenés|podés|querés|vos|sabés|hacés|decís|mirá|fijate|usted)\b/i;
const LABEL = /\beres (un|una)?\s*(seguro|segura|preocupad[oa]|evitativ[oa]|temeros[oa])\b/i;

/** Respuestas en las que cada ítem de una dimensión puntúa `value` (ya corregido). */
function answersFor(anx: number, avo: number): Record<number, number> {
  const out: Record<number, number> = {};
  for (const i of ATTACHMENT_ITEMS) {
    const target = i.dimension === 'ansiedad' ? anx : avo;
    out[i.id] = i.reversed ? 6 - target : target;
  }
  return out;
}

describe('mi forma de vincularme: ítems', () => {
  it('entre 12 y 16 ítems, mitad por dimensión, con ids y textos únicos', () => {
    expect(ATTACHMENT_ITEMS.length).toBeGreaterThanOrEqual(12);
    expect(ATTACHMENT_ITEMS.length).toBeLessThanOrEqual(16);
    expect(new Set(ATTACHMENT_ITEMS.map((i) => i.id)).size).toBe(ATTACHMENT_ITEMS.length);
    expect(new Set(ATTACHMENT_ITEMS.map((i) => i.text)).size).toBe(ATTACHMENT_ITEMS.length);
    const anx = ATTACHMENT_ITEMS.filter((i) => i.dimension === 'ansiedad');
    const avo = ATTACHMENT_ITEMS.filter((i) => i.dimension === 'evitacion');
    expect(anx.length).toBe(avo.length);
  });

  it('cada dimensión tiene ítems invertidos, pero son minoría', () => {
    for (const dim of ['ansiedad', 'evitacion'] as const) {
      const items = ATTACHMENT_ITEMS.filter((i) => i.dimension === dim);
      const rev = items.filter((i) => i.reversed).length;
      expect(rev, dim).toBeGreaterThanOrEqual(1);
      expect(rev, dim).toBeLessThan(items.length / 2);
    }
  });

  it('textos breves, en tú, sin voseo, sin etiquetas y fáciles de leer', () => {
    const texts = [
      ...ATTACHMENT_ITEMS.map((i) => i.text),
      ...Object.values(ATTACHMENT_DIMENSIONS).flatMap((d) => [d.title, d.low, d.high, d.description]),
      ...ATTACHMENT_QUADRANTS.flatMap((q) => [q.title, q.combo, q.today, q.helps]),
    ];
    for (const t of texts) {
      expect(t, t).not.toMatch(VOSEO);
      expect(t, t).not.toMatch(LABEL);
      expect(t, t).not.toMatch(/ {2}|\w\/[ao]s?\b/);
      expect(longestSentenceWords(t), t).toBeLessThanOrEqual(28);
    }
    for (const i of ATTACHMENT_ITEMS) expect(i.text, i.text).toMatch(/\.$/);
    const all = ATTACHMENT_QUADRANTS.map((q) => `${q.today} ${q.helps}`).join(' ');
    expect(Math.round(inflesz(all))).toBeGreaterThanOrEqual(55);
  });
});

describe('mi forma de vincularme: puntaje', () => {
  it('invierte los ítems invertidos y descarta valores fuera de escala', () => {
    const normal = ATTACHMENT_ITEMS.find((i) => !i.reversed)!;
    const rev = ATTACHMENT_ITEMS.find((i) => i.reversed)!;
    expect(itemScore(normal, 4)).toBe(4);
    expect(itemScore(rev, 4)).toBe(2);
    expect(itemScore(rev, 1)).toBe(5);
    expect(itemScore(normal, 0)).toBeNull();
    expect(itemScore(normal, 6)).toBeNull();
    expect(itemScore(normal, 2.5)).toBeNull();
  });

  it('calcula la media por dimensión con los invertidos corregidos', () => {
    const s = scoreAttachment(answersFor(4, 2));
    expect(s.complete).toBe(true);
    expect(s.answered).toBe(ATTACHMENT_ITEMS.length);
    expect(s.means.ansiedad).toBeCloseTo(4);
    expect(s.means.evitacion).toBeCloseTo(2);
  });

  it('responder 5 a todo no da el máximo: los invertidos lo compensan', () => {
    const all5 = Object.fromEntries(ATTACHMENT_ITEMS.map((i) => [i.id, 5]));
    const s = scoreAttachment(all5);
    expect(s.means.ansiedad!).toBeLessThan(5);
    expect(s.means.evitacion!).toBeLessThan(5);
  });

  it('sin todas las respuestas no ubica cuadrante', () => {
    expect(scoreAttachment({})).toEqual({ answered: 0, complete: false, means: { ansiedad: null, evitacion: null }, quadrant: null });
    const partial = scoreAttachment({ 1: 5, 2: 1 });
    expect(partial.answered).toBe(2);
    expect(partial.quadrant).toBeNull();
  });

  it('ignora ids desconocidos y valores inválidos', () => {
    const s = scoreAttachment({ 999: 5, 1: 7, 2: 3 });
    expect(s.answered).toBe(1);
  });

  it('ubica los cuatro cuadrantes descriptivos', () => {
    expect(scoreAttachment(answersFor(2, 2)).quadrant).toBe('seguro');
    expect(scoreAttachment(answersFor(4, 2)).quadrant).toBe('preocupado');
    expect(scoreAttachment(answersFor(2, 4)).quadrant).toBe('evitativo');
    expect(scoreAttachment(answersFor(4, 4)).quadrant).toBe('temeroso');
    // El punto medio exacto cuenta como «no más».
    expect(quadrantOf(3, 3)).toBe('seguro');
    expect(quadrantOf(3.01, 3)).toBe('preocupado');
  });

  it('bandas y frases de tendencia', () => {
    expect(tendencyBand(1.5)).toBe('baja');
    expect(tendencyBand(3)).toBe('media');
    expect(tendencyBand(4.2)).toBe('alta');
    for (const dim of ['ansiedad', 'evitacion'] as const) for (const m of [1, 3, 5]) expect(dimensionSentence(dim, m)).toMatch(/^Hoy /);
  });
});

describe('mi forma de vincularme: enlaces', () => {
  it('cuatro cuadrantes con prácticas y artículos existentes', () => {
    expect(ATTACHMENT_QUADRANTS.map((q) => q.id).sort()).toEqual(['evitativo', 'preocupado', 'seguro', 'temeroso']);
    for (const q of ATTACHMENT_QUADRANTS) {
      expect(q.practiceIds.length, q.id).toBeGreaterThan(0);
      expect(q.articleIds.length, q.id).toBeGreaterThan(0);
    }
    for (const id of ATTACHMENT_LINKED_PRACTICES) expect(PRACTICE_BY_ID[id], id).toBeDefined();
    for (const id of ATTACHMENT_LINKED_ARTICLES) {
      expect(ARTICLE_BY_ID[id], id).toBeDefined();
      expect(ATTACHMENT_ARTICLE_TITLES[id], id).toBe(ARTICLE_BY_ID[id].title);
    }
  });
});
