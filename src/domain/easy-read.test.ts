import { describe, expect, it } from 'vitest';
import { EASY_READS } from './easy-read';
import { ARTICLE_BY_ID } from './library';
import { inflesz, longestSentenceWords } from './readability';

describe('lectura fácil', () => {
  it('resume artículos que existen, una sola vez cada uno', () => {
    expect(new Set(EASY_READS.map((e) => e.articleId)).size).toBe(EASY_READS.length);
    for (const e of EASY_READS) expect(ARTICLE_BY_ID[e.articleId], e.articleId).toBeDefined();
  });

  it('es breve y muy fácil de leer: frases cortas, palabras comunes, tú y no vos', () => {
    for (const e of EASY_READS) {
      expect(e.paragraphs.length, e.articleId).toBeGreaterThanOrEqual(4);
      expect(e.paragraphs.length, e.articleId).toBeLessThanOrEqual(8);
      const text = e.paragraphs.join(' ');
      expect(Math.round(inflesz(text)), e.articleId).toBeGreaterThanOrEqual(75);
      expect(longestSentenceWords(text), e.articleId).toBeLessThanOrEqual(15);
      for (const p of e.paragraphs) {
        expect(p.trim(), e.articleId).toMatch(/[.?!»…]$/);
        expect(p, e.articleId).not.toMatch(/ {2}|\w\/[ao]s?\b/);
        expect(p, e.articleId).not.toMatch(/\b(vos|tenés|podés|querés|sabés|sentís|hacé|mirá|probá)\b/i);
      }
    }
  });
});
