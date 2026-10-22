import { describe, expect, it } from 'vitest';
import { NVC_REWRITES, NVC_SORT_SETS } from './lab-cnv';
import { inflesz, longestSentenceWords } from './readability';

describe('laboratorio de comunicación no violenta', () => {
  it('cada juego tiene ejemplos de las dos clases y explica cada respuesta', () => {
    for (const set of NVC_SORT_SETS) {
      expect(set.items.filter((x) => x.nvc).length, set.id).toBeGreaterThanOrEqual(3);
      expect(set.items.filter((x) => !x.nvc).length, set.id).toBeGreaterThanOrEqual(3);
      for (const x of set.items) expect(x.why.trim(), x.text).toMatch(/[.?!»]$/);
    }
  });

  it('las reescrituras tienen las cuatro partes, en tú y fáciles de leer', () => {
    expect(new Set(NVC_REWRITES.map((r) => r.id)).size).toBe(NVC_REWRITES.length);
    for (const r of NVC_REWRITES) {
      const text = Object.values(r.parts).join(' ');
      for (const p of Object.values(r.parts)) expect(p.trim().length, r.id).toBeGreaterThan(5);
      expect(Math.round(inflesz(text)), r.id).toBeGreaterThanOrEqual(55);
      expect(longestSentenceWords(text), r.id).toBeLessThanOrEqual(30);
      expect(`${text} ${r.context} ${r.reactive}`, r.id).not.toMatch(/\b(sos|tenés|podés|querés|vos)\b/i);
    }
  });
});
