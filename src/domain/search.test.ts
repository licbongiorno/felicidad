import { describe, expect, it } from 'vitest';
import { ANTIDOTES } from './antidotes';
import { CARDS } from './cards';
import { ARTICLES } from './library';
import { PRACTICES } from './practices';
import { buildIndex, normalize, QUICK_ACTIONS, search } from './search';

const index = buildIndex();

describe('buscador', () => {
  it('indexa todo el contenido con ids únicos', () => {
    expect(index.length).toBeGreaterThanOrEqual(PRACTICES.length + ANTIDOTES.length + ARTICLES.length + CARDS.length);
    expect(new Set(index.map((d) => d.id)).size).toBe(index.length);
  });

  it('los accesos rápidos existen en el índice', () => {
    const ids = new Set(index.map((d) => d.id));
    for (const id of QUICK_ACTIONS) expect(ids.has(id), id).toBe(true);
  });

  it('ignora mayúsculas y tildes', () => {
    expect(normalize('Rumiación ÁNIMO')).toBe('rumiacion animo');
    expect(search(index, 'rumiacion')[0].title).toMatch(/Rumiación/);
    expect(search(index, 'RUMIACIÓN')[0].id).toBe(search(index, 'rumiacion')[0].id);
  });

  it('prioriza coincidencias en el título', () => {
    expect(search(index, 'ira')[0]).toMatchObject({ kind: 'Antídoto', title: 'Ira' });
    expect(search(index, 'tonglen')[0].href).toBe('/gimnasio/tonglen');
  });

  it('exige todas las palabras (AND)', () => {
    const r = search(index, 'respiracion resonante');
    expect(r[0].href).toBe('/gimnasio/respiracion-resonante');
    expect(search(index, 'respiracion zzzz')).toEqual([]);
  });

  it('encuentra por sinónimos de las secciones y por autor de las cartas', () => {
    expect(search(index, 'pdf')[0].href).toBe('/informe');
    expect(search(index, 'spinoza').every((d) => d.kind === 'Carta')).toBe(true);
    expect(search(index, 'spinoza').length).toBeGreaterThanOrEqual(3);
  });

  it('los enlaces apuntan a rutas de la app', () => {
    for (const d of index) expect(d.href.startsWith('/')).toBe(true);
  });

  it('no falla con caracteres especiales de expresiones regulares', () => {
    expect(() => search(index, '(ira) [x] *')).not.toThrow();
  });

  it('respeta el límite de resultados', () => {
    expect(search(index, 'a', 5)).toHaveLength(5);
    expect(search(index, '   ')).toEqual([]);
  });
});

describe('formatos nuevos en el buscador', () => {
  const index = buildIndex();
  it('encuentra píldoras, desafíos, cuentos y guías para familias', () => {
    expect(search(index, 'gratitud semana').some((r) => r.kind === 'Desafío')).toBe(true);
    expect(search(index, 'burnout').some((r) => r.kind === 'Píldora')).toBe(true);
    expect(search(index, 'patito feo').some((r) => r.kind === 'Cuento')).toBe(true);
    expect(search(index, 'pantallas').some((r) => r.kind === 'Guía')).toBe(true);
  });
});
