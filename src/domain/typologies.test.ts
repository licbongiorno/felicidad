import { describe, expect, it } from 'vitest';
import {
  DICHOTOMY_IDS,
  ENNEAGRAM_BY_TYPE,
  ENNEAGRAM_ITEMS,
  ENNEAGRAM_TYPE_IDS,
  ENNEAGRAM_TYPES,
  JUNGIAN_DICHOTOMIES,
  JUNGIAN_ITEMS,
  SHADOW_LINKS,
  SHADOW_QUESTIONS,
  TEMPERAMENTS,
  TYPOLOGY_PRACTICE_IDS,
  scoreEnneagram,
  scoreJungian,
} from './typologies';
import { PRACTICE_SUMMARY_BY_ID, PROGRAM_INDEX } from './practiceIndex';

const VOSEO = /\b(sos|tenés|podés|querés|vos|sabés|hacés|decís|mirá|fijate)\b/i;

const allTexts = (): string[] => [
  ...ENNEAGRAM_ITEMS.map((i) => i.text),
  ...ENNEAGRAM_TYPES.flatMap((t) => [
    t.name,
    t.summary,
    t.basicFear,
    t.basicDesire,
    t.fixation,
    t.passion,
    t.defense,
    t.integration.text,
    t.disintegration.text,
    t.growth.text,
  ]),
  ...JUNGIAN_ITEMS.flatMap((i) => [i.a.text, i.b.text]),
  ...JUNGIAN_DICHOTOMIES.flatMap((d) => [d.title, d.question, d.origin, ...d.poles.flatMap((p) => [p.name, p.description])]),
  ...TEMPERAMENTS.flatMap((t) => [t.name, t.summary, t.communication, t.helps]),
  ...SHADOW_QUESTIONS.flatMap((q) => [q.question, q.purpose]),
];

describe('eneagrama', () => {
  it('45 ítems, 5 por tipo, con ids únicos', () => {
    expect(ENNEAGRAM_ITEMS).toHaveLength(45);
    expect(new Set(ENNEAGRAM_ITEMS.map((i) => i.id)).size).toBe(45);
    expect(new Set(ENNEAGRAM_ITEMS.map((i) => i.text)).size).toBe(45);
    for (const t of ENNEAGRAM_TYPE_IDS) expect(ENNEAGRAM_ITEMS.filter((i) => i.type === t), `tipo ${t}`).toHaveLength(5);
  });

  it('9 perfiles completos', () => {
    expect(ENNEAGRAM_TYPES.map((t) => t.type)).toEqual(ENNEAGRAM_TYPE_IDS);
    for (const t of ENNEAGRAM_TYPES) {
      for (const k of ['name', 'summary', 'basicFear', 'basicDesire', 'fixation', 'passion', 'defense'] as const) {
        expect(t[k].trim().length, `${t.type}.${k}`).toBeGreaterThan(2);
        expect(t[k], `${t.type}.${k}`).not.toContain('/');
      }
      expect(t.integration.text.length, `${t.type}`).toBeGreaterThan(10);
      expect(t.disintegration.text.length, `${t.type}`).toBeGreaterThan(10);
      expect(t.growth.text.length, `${t.type}`).toBeGreaterThan(10);
      expect(t.integration.to).not.toBe(t.type);
      expect(t.disintegration.to).not.toBe(t.type);
    }
  });

  it('las líneas son coherentes: A se integra en B si y sólo si B se desintegra en A', () => {
    for (const a of ENNEAGRAM_TYPE_IDS) {
      for (const b of ENNEAGRAM_TYPE_IDS) {
        expect(ENNEAGRAM_BY_TYPE[a].integration.to === b, `${a}→${b}`).toBe(ENNEAGRAM_BY_TYPE[b].disintegration.to === a);
      }
    }
    // Las líneas de Riso y Hudson.
    const integration = Object.fromEntries(ENNEAGRAM_TYPES.map((t) => [t.type, t.integration.to]));
    expect(integration).toEqual({ 1: 7, 7: 5, 5: 8, 8: 2, 2: 4, 4: 1, 3: 6, 6: 9, 9: 3 });
  });

  it('puntaje medio por tipo y orden', () => {
    const empty = scoreEnneagram({});
    expect(empty.answered).toBe(0);
    for (const t of ENNEAGRAM_TYPE_IDS) expect(empty.means[t]).toBe(0);
    expect(empty.order).toEqual(ENNEAGRAM_TYPE_IDS);

    // Todo en 1, salvo el tipo 4 en 5 y el tipo 7 en 3.
    const answers: Record<number, number> = {};
    for (const i of ENNEAGRAM_ITEMS) answers[i.id] = i.type === 4 ? 5 : i.type === 7 ? 3 : 1;
    const s = scoreEnneagram(answers);
    expect(s.answered).toBe(45);
    expect(s.means[4]).toBe(5);
    expect(s.means[7]).toBe(3);
    expect(s.means[1]).toBe(1);
    expect(s.order.slice(0, 3)).toEqual([4, 7, 1]);

    // Medias con ítems sueltos e ignorando valores inválidos.
    const two = ENNEAGRAM_ITEMS.filter((i) => i.type === 2);
    const partial = scoreEnneagram({ [two[0].id]: 2, [two[1].id]: 5, [two[2].id]: 9, 999: 5 });
    expect(partial.answered).toBe(2);
    expect(partial.means[2]).toBe(3.5);
    expect(partial.order[0]).toBe(2);
  });
});

describe('preferencias junguianas', () => {
  it('16 ítems, 4 por dicotomía, con los dos polos de su dicotomía', () => {
    expect(JUNGIAN_ITEMS).toHaveLength(16);
    expect(new Set(JUNGIAN_ITEMS.map((i) => i.id)).size).toBe(16);
    for (const d of DICHOTOMY_IDS) {
      const items = JUNGIAN_ITEMS.filter((i) => i.dichotomy === d);
      expect(items, d).toHaveLength(4);
      for (const i of items) {
        expect(i.a.pole).not.toBe(i.b.pole);
        expect(d.includes(i.a.pole) && d.includes(i.b.pole), `${i.id}`).toBe(true);
      }
      // El polo de la izquierda se alterna.
      expect(new Set(items.map((i) => i.a.pole)).size, d).toBe(2);
    }
  });

  it('fuerza de la preferencia en casos simples', () => {
    const toward = (pole: string, v: 1 | 2) => Object.fromEntries(JUNGIAN_ITEMS.map((i) => [i.id, i.a.pole === pole ? v : 6 - v]));
    const allE = scoreJungian(toward('E', 1));
    expect(allE.EI).toMatchObject({ pole: 'E', strength: 'clara', ratio: 1, answered: 4 });

    const someI = scoreJungian(toward('I', 2));
    expect(someI.EI).toMatchObject({ pole: 'I', strength: 'moderada', ratio: 0.5 });

    const middle = scoreJungian(Object.fromEntries(JUNGIAN_ITEMS.map((i) => [i.id, 3])));
    for (const d of DICHOTOMY_IDS) expect(middle[d]).toMatchObject({ pole: null, strength: 'equilibrio', ratio: 0 });

    // Un solo ítem algo inclinado de cuatro: leve.
    const n = JUNGIAN_ITEMS.filter((i) => i.dichotomy === 'SN');
    const leve = scoreJungian({ [n[0].id]: n[0].a.pole === 'N' ? 2 : 4, [n[1].id]: 3, [n[2].id]: 3, [n[3].id]: 3 });
    expect(leve.SN).toMatchObject({ pole: 'N', strength: 'leve', answered: 4 });

    const none = scoreJungian({});
    expect(none.TF).toMatchObject({ pole: null, strength: 'equilibrio', answered: 0 });
  });

  it('explica cada polo, aclara el origen de J y P y que los temperamentos son de Keirsey', () => {
    expect(JUNGIAN_DICHOTOMIES.map((d) => d.id)).toEqual(DICHOTOMY_IDS);
    expect(JUNGIAN_DICHOTOMIES.find((d) => d.id === 'JP')?.origin).toMatch(/Briggs/);
    expect(TEMPERAMENTS.map((t) => t.id).sort()).toEqual(['NF', 'NT', 'SJ', 'SP']);
  });
});

describe('cuestionario de la sombra', () => {
  it('10 preguntas abiertas, cada una con su para qué', () => {
    expect(SHADOW_QUESTIONS).toHaveLength(10);
    expect(new Set(SHADOW_QUESTIONS.map((q) => q.id)).size).toBe(10);
    for (const q of SHADOW_QUESTIONS) {
      expect(q.question, q.id).toMatch(/\?$/);
      expect(q.purpose.trim(), q.id).toMatch(/[.!?]$/);
    }
  });
});

describe('estilo y enlaces', () => {
  it('trata de «tú», sin voseo, sin barras de género ni dobles espacios', () => {
    for (const t of allTexts()) {
      expect(t, t).not.toMatch(VOSEO);
      expect(t, t).not.toMatch(/\w\/[ao]s?\b/);
      expect(t, t).not.toMatch(/ {2}/);
    }
  });

  it('las prácticas y el programa enlazados existen', () => {
    for (const id of TYPOLOGY_PRACTICE_IDS) expect(PRACTICE_SUMMARY_BY_ID[id], id).toBeDefined();
    expect(PROGRAM_INDEX.some((p) => p.id === SHADOW_LINKS.programId)).toBe(true);
  });
});
