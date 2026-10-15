import { describe, expect, it } from 'vitest';
import { NEEDS } from './needs';
import { PRACTICE_BY_ID } from './practices';
import { PROGRAMS } from './programs';
import { PILLS } from './pills';
import { levelOf } from './levels';
import { practiceRisk } from './catalog';
import { isPublished } from './governance';
import { inflesz } from './readability';

describe('mapa de habilidades por necesidad', () => {
  it('cubre las necesidades de la visión de producto con ids únicos', () => {
    expect(NEEDS.length).toBeGreaterThanOrEqual(16);
    expect(new Set(NEEDS.map((n) => n.id)).size).toBe(NEEDS.length);
  });

  it('cada necesidad enlaza contenido publicado y existente', () => {
    for (const n of NEEDS) {
      expect(n.practices.length, n.id).toBeGreaterThanOrEqual(4);
      expect(new Set(n.practices).size, n.id).toBe(n.practices.length);
      for (const id of n.practices) {
        expect(PRACTICE_BY_ID[id], `${n.id} → ${id}`).toBeDefined();
        expect(isPublished('practica', id), `${n.id} → ${id}`).toBe(true);
      }
      for (const id of n.programs) expect(PROGRAMS.some((p) => p.id === id), `${n.id} → ${id}`).toBe(true);
      for (const id of n.pills ?? []) expect(PILLS.some((p) => p.id === id), `${n.id} → ${id}`).toBe(true);
    }
  });

  it('la primera sugerencia de cada necesidad es de iniciación y sin riesgo 2', () => {
    for (const n of NEEDS) {
      const first = n.practices[0];
      expect(levelOf(first).level, `${n.id} → ${first}`).toBe('iniciacion');
      expect(practiceRisk(first), `${n.id} → ${first}`).toBe(1);
    }
  });

  it('textos breves y legibles', () => {
    for (const n of NEEDS) {
      for (const t of [n.description, n.objective]) {
        expect(t, n.id).toMatch(/[.]$/);
        expect(t.split(/\s+/).length, n.id).toBeLessThanOrEqual(24);
      }
    }
    expect(Math.round(inflesz(NEEDS.map((n) => `${n.description} ${n.objective}`).join(' ')))).toBeGreaterThanOrEqual(55);
  });
});
