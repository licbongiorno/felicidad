import { describe, expect, it } from 'vitest';
import { ANTIDOTES } from './antidotes';
import { CARDS } from './cards';
import { GLOSSARY } from './glossary';
import { EVIDENCE_LAST_CHECKED, isPublished, REVIEW_OVERRIDES, reviewOf, SHOW_DRAFTS } from './governance';
import { INSTRUMENTS } from './instruments';
import { JOURNAL_TEMPLATES } from './journal';
import { PRACTICE_LEVELS, levelOf } from './levels';
import { ARTICLES, ARTICLE_BY_ID } from './library';
import { PRACTICES, PRACTICE_BY_ID, totalDurationSec } from './practices';
import { inflesz, longestSentenceWords } from './readability';

/**
 * Calidad del contenido (plan de mejora de contenido):
 *  A3 legibilidad · A4 guía de estilo · A5 niveles · E1–E3 gobernanza clínica.
 */

const allTexts = (): { where: string; text: string }[] => [
  ...PRACTICES.flatMap((p) => [
    { where: `práctica ${p.id}: resumen`, text: p.summary },
    ...p.steps.map((s) => ({ where: `práctica ${p.id}: paso «${s.title}»`, text: s.instruction })),
    ...p.howItWorks.map((t) => ({ where: `práctica ${p.id}: cómo funciona`, text: t })),
    ...p.tips.map((t) => ({ where: `práctica ${p.id}: consejo`, text: t })),
  ]),
  ...ANTIDOTES.flatMap((a) => [
    { where: `antídoto ${a.emotionId}: cuándo no`, text: a.whenNot },
    ...a.steps.map((s) => ({ where: `antídoto ${a.emotionId}: paso «${s.title}»`, text: s.instruction })),
    ...a.science.map((t) => ({ where: `antídoto ${a.emotionId}: ciencia`, text: t })),
  ]),
  ...ARTICLES.flatMap((a) => a.sections.flatMap((s) => s.paragraphs.map((t) => ({ where: `artículo ${a.id}`, text: t })))),
  ...CARDS.map((c) => ({ where: `carta ${c.id}`, text: `${c.text} ${c.reflection} ${c.microPractice}` })),
  ...GLOSSARY.map((g) => ({ where: `glosario ${g.id}`, text: g.definition })),
];

// ---------------------------------------------------------------- A3 · legibilidad
describe('legibilidad (INFLESZ)', () => {
  it.each(ANTIDOTES.map((a) => [a.emotionId, a] as const))('«cuándo no usarlo» de %s es fácil de leer en un mal momento', (_id, a) => {
    expect(Math.round(inflesz(a.whenNot)), a.whenNot).toBeGreaterThanOrEqual(55);
    expect(longestSentenceWords(a.whenNot)).toBeLessThanOrEqual(26);
  });

  it.each(PRACTICES.map((p) => [p.id, p] as const))('los pasos de %s tienen legibilidad al menos normal', (_id, p) => {
    expect(Math.round(inflesz(p.steps.map((s) => s.instruction).join(' ')))).toBeGreaterThanOrEqual(55);
  });

  it.each(ANTIDOTES.map((a) => [a.emotionId, a] as const))('los pasos del antídoto %s tienen legibilidad al menos normal', (_id, a) => {
    expect(Math.round(inflesz(a.steps.map((s) => s.instruction).join(' ')))).toBeGreaterThanOrEqual(55);
  });
});

// ---------------------------------------------------------------- A4 · guía de estilo
describe('guía de estilo', () => {
  it('las instrucciones de los pasos son breves y terminan en puntuación', () => {
    for (const p of [...PRACTICES, ...ANTIDOTES]) {
      for (const s of p.steps) {
        const words = s.instruction.split(/\s+/).length;
        expect(words, s.instruction).toBeLessThanOrEqual(45);
        expect(longestSentenceWords(s.instruction), s.instruction).toBeLessThanOrEqual(30);
        expect(s.instruction.trim(), s.instruction).toMatch(/[.?!»…)]$/);
      }
    }
  });

  it('sin dobles espacios ni formas de género no recomendadas (x, @, /os)', () => {
    for (const { where, text } of allTexts()) {
      expect(text, where).not.toMatch(/ {2}/);
      // La guía usa «o/a» (p. ej. «cansado/a»); no se usan @, x ni «/os».
      expect(text, where).not.toMatch(/[a-záéíóú]@[a-z]|\btod[xe]s\b|\w+\/os\b/i);
    }
  });

  it('no aparecen citas apócrifas conocidas', () => {
    const APOCRYPHAL = [
      /entre el est[ií]mulo y la respuesta hay un espacio/i,
      /lo que niegas te somete/i,
      /s[eé] el cambio que quieres ver/i,
      /hasta que no hagas consciente lo inconsciente/i,
    ];
    for (const c of CARDS) for (const re of APOCRYPHAL) expect(`${c.text}`, c.id).not.toMatch(re);
  });

  it('toda referencia citada incluye el año', () => {
    const refs = [
      ...PRACTICES.flatMap((p) => p.evidence),
      ...ANTIDOTES.flatMap((a) => a.evidence),
      ...ARTICLES.flatMap((a) => a.references),
      ...JOURNAL_TEMPLATES.flatMap((t) => t.evidence),
      ...INSTRUMENTS.flatMap((i) => i.references),
    ];
    for (const r of refs) expect(r.citation, r.citation).toMatch(/\((\d{4}(\/\d{4})?|s\.f\.)\)/);
  });

  it('los avisos de seguridad remiten a ayuda profesional o a la seguridad', () => {
    for (const a of ANTIDOTES) expect(a.whenNot, a.emotionId).toMatch(/profesional|terapeuta|médico|ayuda|seguridad|especializado|equipo|actuar|cambiar|calma/i);
  });
});

// ---------------------------------------------------------------- A5 · niveles y prerrequisitos
describe('niveles y prerrequisitos', () => {
  it('cada práctica tiene nivel asignado y no sobran entradas', () => {
    for (const p of PRACTICES) expect(PRACTICE_LEVELS[p.id], p.id).toBeDefined();
    for (const id of Object.keys(PRACTICE_LEVELS)) expect(PRACTICE_BY_ID[id], id).toBeDefined();
  });

  it('los prerrequisitos existen y son de un nivel igual o inferior', () => {
    const rank = { iniciacion: 0, intermedio: 1, avanzado: 2 };
    for (const [id, info] of Object.entries(PRACTICE_LEVELS)) {
      for (const pre of info.prerequisites ?? []) {
        expect(PRACTICE_BY_ID[pre], `${id} → ${pre}`).toBeDefined();
        expect(rank[levelOf(pre).level], `${id} → ${pre}`).toBeLessThanOrEqual(rank[info.level]);
        expect(pre).not.toBe(id);
      }
    }
  });

  it('las prácticas con precauciones clínicas no son de iniciación', () => {
    for (const p of PRACTICES.filter((x) => x.cautions && x.family === 'deconstructive')) expect(levelOf(p.id).level, p.id).not.toBe('iniciacion');
  });

  it('las herramientas rápidas duran como máximo 3 minutos', () => {
    for (const p of PRACTICES.filter((x) => x.micro)) expect(totalDurationSec(p.steps), p.id).toBeLessThanOrEqual(180);
  });
});

// ---------------------------------------------------------------- E1–E3 · gobernanza
describe('gobernanza clínica', () => {
  it('las excepciones de revisión apuntan a contenido existente', () => {
    const exists: Record<string, (id: string) => boolean> = {
      practica: (id) => !!PRACTICE_BY_ID[id],
      antidoto: (id) => ANTIDOTES.some((a) => a.emotionId === id),
      diario: (id) => JOURNAL_TEMPLATES.some((t) => t.type === id),
      articulo: (id) => !!ARTICLE_BY_ID[id],
      instrumento: (id) => INSTRUMENTS.some((i) => i.id === id),
      herramienta: (id) => id === 'plan-seguridad',
      programa: () => true,
    };
    for (const key of Object.keys(REVIEW_OVERRIDES)) {
      const [kind, id] = key.split(':');
      expect(exists[kind]?.(id), key).toBe(true);
    }
  });

  it('el contenido sensible está en borrador hasta la aprobación clínica', () => {
    expect(reviewOf('herramienta', 'plan-seguridad').status).not.toBe('pendiente');
    expect(reviewOf('instrumento', 'phq9').status).not.toBe('pendiente');
  });

  it('fuera del modo demo, los borradores no se publican', () => {
    expect(SHOW_DRAFTS).toBe(false); // los tests corren sin modo demo
    expect(isPublished('instrumento', 'phq9')).toBe(reviewOf('instrumento', 'phq9').status !== 'borrador');
    expect(isPublished('instrumento', 'gad7')).toBe(true);
  });

  it('las referencias se verificaron hace menos de 12 meses (revisión anual obligatoria)', () => {
    const days = (Date.now() - new Date(`${EVIDENCE_LAST_CHECKED}T00:00:00`).getTime()) / 86_400_000;
    expect(days, `Última verificación: ${EVIDENCE_LAST_CHECKED}. Ejecuta npm run verify:refs y actualiza EVIDENCE_LAST_CHECKED.`).toBeLessThanOrEqual(365);
  });

  it('los enlaces del glosario existen', () => {
    for (const g of GLOSSARY) {
      if (g.articleId) expect(ARTICLE_BY_ID[g.articleId], g.id).toBeDefined();
      if (g.practiceId) expect(PRACTICE_BY_ID[g.practiceId], g.id).toBeDefined();
    }
  });
});

// ---------------------------------------------------------------- catálogo y seguridad
describe('catálogo clínico', () => {
  it('cada práctica y cada plantilla visible tiene enfoque, y no sobran entradas', async () => {
    const { PRACTICE_APPROACHES, JOURNAL_APPROACHES, APPROACH_LABEL } = await import('./catalog');
    for (const p of PRACTICES) expect(PRACTICE_APPROACHES[p.id]?.length, p.id).toBeGreaterThan(0);
    for (const id of Object.keys(PRACTICE_APPROACHES)) expect(PRACTICE_BY_ID[id], id).toBeDefined();
    for (const t of JOURNAL_TEMPLATES.filter((x) => !x.hidden)) expect(JOURNAL_APPROACHES[t.type]?.length, t.type).toBeGreaterThan(0);
    for (const list of Object.values(PRACTICE_APPROACHES)) for (const a of list) expect(APPROACH_LABEL[a]).toBeDefined();
  });

  it('el contenido de nivel 2 tiene precauciones y una alternativa de nivel 1', async () => {
    const { PRACTICE_RISK, JOURNAL_RISK, practiceRisk } = await import('./catalog');
    for (const [id, r] of Object.entries(PRACTICE_RISK)) {
      expect(PRACTICE_BY_ID[id]?.cautions, id).toBeTruthy();
      expect(PRACTICE_BY_ID[r.alternative], `${id} → ${r.alternative}`).toBeDefined();
      expect(practiceRisk(r.alternative), r.alternative).toBe(1);
    }
    for (const type of Object.keys(JOURNAL_RISK)) expect(JOURNAL_TEMPLATES.find((t) => t.type === type)?.caution, type).toBeTruthy();
  });

  it('los recursos de crisis son llamables y se revisaron hace menos de 12 meses', async () => {
    const { CRISIS_RESOURCES, CRISIS_RESOURCES_CHECKED_AT } = await import('@/config/safety');
    const days = (Date.now() - new Date(`${CRISIS_RESOURCES_CHECKED_AT}T00:00:00`).getTime()) / 86_400_000;
    expect(days, 'Revisa los teléfonos de crisis y actualiza CRISIS_RESOURCES_CHECKED_AT.').toBeLessThanOrEqual(365);
    expect(CRISIS_RESOURCES.some((r) => r.href === 'tel:911')).toBe(true);
    for (const r of CRISIS_RESOURCES) if (r.href) expect(r.href, r.label).toMatch(/^tel:\d+$/);
  });
});

// ---------------------------------------------------------------- instrumentos
describe('instrumentos', () => {
  it.each(INSTRUMENTS.map((i) => [i.id, i] as const))('%s puntúa dentro de su rango', (_id, ins) => {
    const opts = (k: number) => (ins.itemOptions?.[k] ?? ins.options).map((o) => o.value);
    if (ins.itemOptions) expect(ins.itemOptions.length).toBe(ins.items.length);
    const lows = ins.items.map((_, k) => Math.min(...opts(k)));
    const highs = ins.items.map((_, k) => Math.max(...opts(k)));
    const scores = [ins.score(lows), ins.score(highs)];
    expect(Math.min(...scores)).toBeGreaterThanOrEqual(ins.minScore ?? 0);
    expect(Math.max(...scores)).toBeLessThanOrEqual(ins.maxScore);
  });

  it('la PSS-10 invierte los ítems 4, 5, 7 y 8', () => {
    const pss = INSTRUMENTS.find((i) => i.id === 'pss10')!;
    // Máximo estrés: 4 en los ítems directos y 0 en los invertidos.
    expect(pss.score([4, 4, 4, 0, 0, 4, 0, 0, 4, 4])).toBe(40);
    expect(pss.score([0, 0, 0, 4, 4, 0, 4, 4, 0, 0])).toBe(0);
  });

  it('el ISI sigue los puntos de corte de Morin et al. (2011)', () => {
    const isi = INSTRUMENTS.find((i) => i.id === 'isi')!;
    expect([7, 8, 14, 15, 21, 22].map((s) => isi.interpret(s).band)).toEqual(['sin-insomnio', 'subumbral', 'subumbral', 'moderado', 'moderado', 'grave']);
  });
});

// ---------------------------------------------------------------- rueda de emociones
describe('rueda de emociones', () => {
  it('cada familia está completa, es legible y enlaza a un antídoto existente', async () => {
    const { EMOTION_FAMILIES } = await import('./emotions');
    expect(new Set(EMOTION_FAMILIES.map((e) => e.id)).size).toBe(EMOTION_FAMILIES.length);
    for (const e of EMOTION_FAMILIES) {
      expect(e.shades.length, e.id).toBe(5);
      for (const t of [e.body, e.urge, e.fits, e.opposite]) {
        expect(t.trim(), e.id).toMatch(/\.$/);
        expect(t, e.id).not.toMatch(/ {2}/);
      }
      expect(Math.round(inflesz(`${e.body} ${e.urge} ${e.fits} ${e.opposite}`)), e.id).toBeGreaterThanOrEqual(55);
      if (e.antidoteId) expect(ANTIDOTES.some((a) => a.emotionId === e.antidoteId), e.id).toBe(true);
    }
  });
});

// ---------------------------------------------------------------- trampas del pensamiento
describe('trampas del pensamiento', () => {
  it('cada trampa está completa, con ejemplo entre comillas españolas y una pregunta', async () => {
    const { THINKING_TRAPS } = await import('./thinkingTraps');
    expect(new Set(THINKING_TRAPS.map((t) => t.id)).size).toBe(THINKING_TRAPS.length);
    for (const t of THINKING_TRAPS) {
      expect(t.example, t.id).toMatch(/^«.+»$/);
      expect(t.alternative, t.id).toMatch(/^«.+»$/);
      expect(t.question.trim(), t.id).toMatch(/\?$/);
      expect(Math.round(inflesz(`${t.description} ${t.question}`)), t.id).toBeGreaterThanOrEqual(55);
    }
  });
});
