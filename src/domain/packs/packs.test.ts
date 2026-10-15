import { describe, expect, it } from 'vitest';
import { readdirSync, readFileSync } from 'node:fs';
import { APPROACH_LABEL, MODULE_BY_ID } from '../catalog';
import { PRACTICE_BY_ID } from '../practices';
import { ARTICLE_BY_ID } from '../library';
import { inflesz, longestSentenceWords } from '../readability';
import { PACKS, PACK_PILLS } from '.';

describe('paquetes de contenido', () => {
  it('sólo importan tipos (evita ciclos de importación entre registros)', () => {
    for (const f of readdirSync('src/domain/packs').filter((x) => x.endsWith('.ts') && !x.endsWith('.test.ts') && x !== 'index.ts' && x !== 'types.ts')) {
      const src = readFileSync(`src/domain/packs/${f}`, 'utf8');
      for (const line of src.split('\n').filter((l) => l.startsWith('import '))) {
        expect(/^import type /.test(line) || /from '\.\/types'/.test(line), `${f}: ${line}`).toBe(true);
      }
    }
  });

  it('cada práctica tiene su ficha (nivel, enfoque y módulo válidos) y al revés', () => {
    for (const p of PACKS) {
      const ids = new Set(p.practices.map((x) => x.id));
      for (const id of ids) expect(p.meta[id], `${p.id} → ${id} sin meta`).toBeDefined();
      for (const [id, m] of Object.entries(p.meta)) {
        expect(ids.has(id), `${p.id}: meta de ${id} sin práctica`).toBe(true);
        expect(MODULE_BY_ID[m.module], `${id} → módulo ${m.module}`).toBeDefined();
        expect(m.approaches.length, id).toBeGreaterThan(0);
        for (const a of m.approaches) expect(APPROACH_LABEL[a], `${id} → ${a}`).toBeDefined();
        for (const pre of m.prerequisites ?? []) expect(PRACTICE_BY_ID[pre], `${id} → prerrequisito ${pre}`).toBeDefined();
        if (m.risk) expect(PRACTICE_BY_ID[m.risk.alternative], `${id} → alternativa ${m.risk.alternative}`).toBeDefined();
        if (m.risk) expect(PRACTICE_BY_ID[id].cautions, `${id}: riesgo 2 sin precauciones`).toBeTruthy();
      }
    }
  });

  it('ids únicos entre todos los paquetes', () => {
    const all = PACKS.flatMap((p) => [...p.practices.map((x) => `p:${x.id}`), ...p.articles.map((x) => `a:${x.id}`), ...p.programs.map((x) => `g:${x.id}`), ...p.pills.map((x) => `i:${x.id}`)]);
    expect(new Set(all).size).toBe(all.length);
  });
});

describe('píldoras', () => {
  it('de 4 a 7 tarjetas breves, legibles y con referencias fechadas', () => {
    expect(new Set(PACK_PILLS.map((p) => p.id)).size).toBe(PACK_PILLS.length);
    for (const p of PACK_PILLS) {
      expect(p.id, p.id).toMatch(/^[a-z0-9-]+$/);
      expect(p.slides.length, p.id).toBeGreaterThanOrEqual(4);
      expect(p.slides.length, p.id).toBeLessThanOrEqual(7);
      for (const s of p.slides) {
        expect(s.text.length, `${p.id}: ${s.heading}`).toBeLessThanOrEqual(320);
        expect(s.text.trim(), p.id).toMatch(/[.?!»…]$/);
        expect(s.text, p.id).not.toMatch(/\w\/[ao]s?\b/);
      }
      const text = p.slides.map((s) => s.text).join(' ');
      expect(Math.round(inflesz(text)), p.id).toBeGreaterThanOrEqual(58);
      expect(longestSentenceWords(text), p.id).toBeLessThanOrEqual(28);
      expect(p.references.length, p.id).toBeGreaterThan(0);
      for (const r of p.references) expect(r.citation, p.id).toMatch(/\(\d{4}[a-z]?\)|\(\d{4}\/\d{4}\)/);
      for (const id of p.related?.practices ?? []) expect(PRACTICE_BY_ID[id], `${p.id} → ${id}`).toBeDefined();
      for (const id of p.related?.articles ?? []) expect(ARTICLE_BY_ID[id], `${p.id} → ${id}`).toBeDefined();
    }
  });
});
