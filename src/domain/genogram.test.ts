import { describe, expect, it } from 'vitest';
import { emptyGenogram, genogramPatterns, layoutGenogram, parseGenogram, slotLabel, GAP, type Genogram, type GenPerson, type Slot } from './genogram';
import { MODES, SCHEMAS, SCHEMA_DOMAINS } from './schemas';
import { PRACTICE_BY_ID } from './practices';

const person = (id: string, slot: Slot, extra: Partial<GenPerson> = {}): GenPerson => ({ id, slot, name: id, shape: 'circulo', tags: [], ...extra });

const family = (): Genogram => ({
  v: 1,
  separated: { progenitores: true },
  people: [
    { ...emptyGenogram().people[0], tags: ['migracion', 'fortaleza'] },
    person('Mamá', { kind: 'progenitor', branch: 1 }, { tags: ['migracion', 'fortaleza'] }),
    person('Papá', { kind: 'progenitor', branch: 2 }, { shape: 'cuadrado', tags: ['consumo'] }),
    person('Abuela Rosa', { kind: 'abuelo', branch: 1, index: 0 }, { tags: ['migracion'] }),
    person('Abuelo Juan', { kind: 'abuelo', branch: 1, index: 1 }, { shape: 'cuadrado', deceased: true }),
    person('Tía Ana', { kind: 'tio', branch: 1 }),
    person('Tío Luis', { kind: 'tio', branch: 2 }, { shape: 'cuadrado', tags: ['consumo'] }),
    person('Sofi', { kind: 'hermano' }, { birthYear: 1990 }),
    person('Leo', { kind: 'pareja' }, { shape: 'cuadrado' }),
    person('Mía', { kind: 'hijo' }),
    person('Madrina', { kind: 'otro' }),
  ],
});

describe('genograma', () => {
  it('ubica cada generación en su fila y sin superposiciones', () => {
    const l = layoutGenogram(family());
    const rows = new Map<number, number[]>();
    for (const p of l.placed) rows.set(p.y, [...(rows.get(p.y) ?? []), p.x]);
    expect([...rows.keys()].length).toBe(4);
    for (const xs of rows.values()) {
      const sorted = [...xs].sort((a, b) => a - b);
      for (let i = 1; i < sorted.length; i++) expect(sorted[i] - sorted[i - 1]).toBeGreaterThanOrEqual(GAP - 1);
    }
    expect(Math.min(...l.placed.map((p) => p.x))).toBeGreaterThan(0);
    expect(l.width).toBeGreaterThan(Math.max(...l.placed.map((p) => p.x)));
    expect(l.others).toHaveLength(1);
  });

  it('arma parejas, separaciones y líneas de descendencia', () => {
    const l = layoutGenogram(family());
    expect(l.couples.map((c) => c.id).sort()).toEqual(['abuelos-1', 'pareja', 'progenitores']);
    expect(l.couples.find((c) => c.id === 'progenitores')!.separated).toBe(true);
    // Abuelos de la rama 1 → tía y mamá; papá cuelga solo de su lado (sin abuelos cargados no hay línea).
    const fromGrand = l.descents.find((d) => d.children.some((c) => c.person.id === 'Tía Ana'))!;
    expect(fromGrand.children.map((c) => c.person.id).sort()).toEqual(['Mamá', 'Tía Ana']);
    expect(l.descents.some((d) => d.children.some((c) => c.person.id === 'Tío Luis'))).toBe(false);
    const fromMe = l.descents.find((d) => d.children.some((c) => c.person.id === 'Mía'))!;
    expect(fromMe.children).toHaveLength(1);
  });

  it('con pareja, tú quedas al lado de tu pareja', () => {
    const l = layoutGenogram(family());
    const x = (id: string) => l.placed.find((p) => p.person.id === id)!.x;
    expect(x('Leo') - x('yo')).toBe(GAP);
    expect(x('Sofi')).toBeLessThan(x('yo'));
  });

  it('encuentra temas que se repiten entre generaciones', () => {
    const ps = genogramPatterns(family());
    const mig = ps.find((p) => p.tag.id === 'migracion')!;
    expect(mig.generations).toBe(3);
    expect(mig.text).toBe('«Migración» aparece en 3 personas de 3 generaciones: Abuela Rosa, Mamá y tú.');
    expect(ps.find((p) => p.tag.id === 'consumo')).toBeUndefined(); // misma generación
    expect(ps.find((p) => p.tag.id === 'fortaleza')?.question).toMatch(/\?$/);
    expect(ps[0].tag.id).toBe('migracion');
  });

  it('lee lo guardado con cuidado y descarta lo que no tiene forma', () => {
    expect(parseGenogram(null).people).toHaveLength(1);
    const g = parseGenogram({
      v: 1,
      separated: { pareja: true, otra: true },
      people: [
        { id: 'a', name: 'x'.repeat(50), slot: { kind: 'progenitor', branch: 1 }, shape: 'raro', tags: ['migracion', 'inventado'], birthYear: 3000, bond: 'cercana' },
        { id: 'b', name: 'Repetido', slot: { kind: 'progenitor', branch: 1 }, shape: 'circulo', tags: [] },
        { id: 'c', name: 'Mal', slot: { kind: 'abuelo', branch: 3, index: 0 }, tags: [] },
      ],
    });
    expect(g.people.map((p) => p.id)).toEqual(['yo', 'a']);
    const a = g.people[1];
    expect(a.name).toHaveLength(24);
    expect(a.shape).toBe('rombo');
    expect(a.tags).toEqual(['migracion']);
    expect(a.birthYear).toBeNull();
    expect(a.bond).toBe('cercana');
    expect(g.separated).toEqual({ pareja: true });
  });

  it('nombra cada rama con el nombre de quien te crió', () => {
    expect(slotLabel({ kind: 'tio', branch: 1 }, family())).toBe('Hermano o hermana de Mamá');
    expect(slotLabel({ kind: 'tio', branch: 2 }, emptyGenogram())).toBe('Hermano o hermana de tu segundo progenitor');
  });
});

describe('mapa de esquemas', () => {
  it('tiene los 18 esquemas en 5 dominios y modos con prácticas existentes', () => {
    expect(SCHEMA_DOMAINS).toHaveLength(5);
    expect(SCHEMAS).toHaveLength(18);
    expect(new Set(SCHEMAS.map((s) => s.id)).size).toBe(18);
    for (const d of SCHEMA_DOMAINS) expect(SCHEMAS.some((s) => s.domain === d.id), d.id).toBe(true);
    for (const s of SCHEMAS) {
      expect(s.belief, s.id).toMatch(/^«.+»$/);
      expect(s.looksLike.length, s.id).toBeGreaterThanOrEqual(2);
    }
    for (const m of MODES) if (m.practiceId) expect(PRACTICE_BY_ID[m.practiceId], m.id).toBeDefined();
  });
});
