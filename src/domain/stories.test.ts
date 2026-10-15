import { describe, expect, it } from 'vitest';
import { AGE_BANDS, KID_ACTIVITY_BY_ID, KID_FEELINGS } from './kids';
import { STORIES, STORY_THEMES, storiesFor, storyLogId, storyOfLog, themesFor } from './stories';
import { inflesz, longestSentenceWords } from './readability';
import { STORY_CAST } from './story-cast';
import { STORY_ART } from './story-art';
import { existsSync } from 'node:fs';

const ALL_TEXT = (s: (typeof STORIES)[number]) => s.pages.map((p) => p.text).join(' ');
const YOUNG = new Set(['0-3', '4-6']);

describe('cuentos', () => {
  it('ids únicos y cortos (entran en el registro de actividad)', () => {
    expect(new Set(STORIES.map((s) => s.id)).size).toBe(STORIES.length);
    for (const s of STORIES) {
      expect(s.id, s.id).toMatch(/^[a-z0-9-]+$/);
      expect(storyLogId(s.id).length, s.id).toBeLessThanOrEqual(64);
      expect(storyOfLog(storyLogId(s.id))?.id).toBe(s.id);
    }
  });

  it('hay muchos cuentos y cada franja tiene variedad de temas', () => {
    expect(STORIES.length).toBeGreaterThanOrEqual(30);
    for (const b of AGE_BANDS) {
      expect(storiesFor(b.id).length, b.id).toBeGreaterThanOrEqual(b.id === '0-3' ? 5 : 8);
      expect(themesFor(b.id).length, b.id).toBeGreaterThanOrEqual(b.id === '0-3' ? 3 : 6);
    }
  });

  it('cubre los temas pedidos en las franjas desde 4 años', () => {
    for (const theme of ['duelo', 'muerte', 'separacion', 'esperanza', 'valentia'] as const)
      for (const b of ['4-6', '7-9', '10-12', '13-17'] as const) expect(storiesFor(b, theme).length, `${theme} ${b}`).toBeGreaterThan(0);
  });

  it('incluye clásicos en dominio público, siempre declarados', () => {
    const classics = STORIES.filter((s) => s.source.kind === 'clasico');
    expect(classics.length).toBeGreaterThanOrEqual(10);
    for (const s of classics)
      if (s.source.kind === 'clasico') {
        expect(s.source.year, s.id).toBeLessThan(1930);
        expect(s.source.adaptation.length, s.id).toBeGreaterThan(20);
        expect(s.source.author.length, s.id).toBeGreaterThan(2);
      }
  });

  it('estructura completa: páginas, preguntas, guía para el adulto, temas y emociones válidas', () => {
    const themes = new Set(STORY_THEMES.map((t) => t.id));
    const feelings = new Set(KID_FEELINGS.map((f) => f.id));
    for (const s of STORIES) {
      expect(s.pages.length, s.id).toBeGreaterThanOrEqual(YOUNG.has(s.bands[0]) ? 4 : 6);
      expect(s.pages.length, s.id).toBeLessThanOrEqual(16);
      expect(s.questions.length, s.id).toBeGreaterThanOrEqual(2);
      expect(s.questions.length, s.id).toBeLessThanOrEqual(4);
      for (const q of s.questions) expect(q, s.id).toMatch(/^¿.+\?$/);
      expect(s.forAdult.length, s.id).toBeGreaterThan(60);
      expect(s.themes.length, s.id).toBeGreaterThan(0);
      for (const t of s.themes) expect(themes.has(t), `${s.id} → ${t}`).toBe(true);
      for (const f of s.feelings) expect(feelings.has(f), `${s.id} → ${f}`).toBe(true);
      if (s.activity) expect(KID_ACTIVITY_BY_ID[s.activity], `${s.id} → ${s.activity}`).toBeDefined();
      if (s.activity) for (const b of s.bands) expect(KID_ACTIVITY_BY_ID[s.activity].bands, `${s.id} → ${s.activity} (${b})`).toContain(b);
      expect(s.minutes, s.id).toBeGreaterThanOrEqual(1);
      expect(s.minutes, s.id).toBeLessThanOrEqual(15);
    }
  });

  it('los temas difíciles se marcan como sensibles y no usan eufemismos sobre la muerte', () => {
    for (const s of STORIES) {
      if (s.themes.some((t) => t === 'muerte' || t === 'duelo')) expect(s.sensitive, s.id).toBe(true);
      const text = ALL_TEXT(s).toLowerCase();
      expect(text, s.id).not.toMatch(/se quedó dormid[oa] para siempre|se fue de viaje para siempre|nos dejó para siempre/);
    }
  });

  it('legibles para su edad, con frases cortas y bien puntuadas', () => {
    for (const s of STORIES) {
      const text = ALL_TEXT(s);
      const young = s.bands.some((b) => YOUNG.has(b));
      const teen = s.bands.every((b) => b === '13-17');
      expect(Math.round(inflesz(text)), s.id).toBeGreaterThanOrEqual(young ? 70 : teen ? 58 : 65);
      expect(longestSentenceWords(text), s.id).toBeLessThanOrEqual(young ? 16 : 24);
      for (const p of s.pages) {
        expect(p.text.trim(), s.id).toMatch(/[.?!»…]$/);
        expect(p.text.length, s.id).toBeLessThanOrEqual(young ? 260 : 520);
        expect(p.text, s.id).not.toMatch(/ {2}/);
        expect(p.text, s.id).not.toMatch(/\w\/[ao]s?\b/);
      }
    }
  });

  it('cada cuento tiene su propio elenco ilustrado (y no sobran elencos de cuentos que no existen)', () => {
    for (const s of STORIES) expect(STORY_CAST[s.id]?.length, s.id).toBeGreaterThan(0);
    const ids = new Set(STORIES.map((s) => s.id));
    for (const id of Object.keys(STORY_CAST)) expect(ids.has(id), id).toBe(true);
    // Dos cuentos no comparten exactamente el mismo elenco.
    const keys = STORIES.map((s) => JSON.stringify(STORY_CAST[s.id]));
    expect(new Set(keys).size).toBe(keys.length);
  });

  it('cada ilustración generada corresponde a un cuento y el archivo existe', () => {
    const ids = new Set(STORIES.map((s) => s.id));
    for (const id of STORY_ART) {
      expect(ids.has(id), id).toBe(true);
      expect(existsSync(`public/cuentos/${id}.webp`), id).toBe(true);
    }
  });

  it('las franjas de cada cuento son contiguas (no salta edades)', () => {
    const order = AGE_BANDS.map((b) => b.id);
    for (const s of STORIES) {
      const idx = s.bands.map((b) => order.indexOf(b)).sort((a, b) => a - b);
      for (let i = 1; i < idx.length; i++) expect(idx[i] - idx[i - 1], s.id).toBe(1);
    }
  });
});
