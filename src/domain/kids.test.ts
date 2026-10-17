import { describe, expect, it } from 'vitest';
import {
  AGE_BANDS,
  hasKidMode,
  activitiesFor,
  gardenStage,
  GARDEN_STAGES,
  KID_ACTIVITIES,
  KID_ACTIVITY_BY_ID,
  KID_FEELINGS,
  KID_SKILLS,
  kidAlert,
  stickersOf,
  suggestionsFor,
  weeklySummary,
  type KidActivityLog,
} from './kids';
import { KID_GUIDES } from './kids-guides';
import { inflesz, longestSentenceWords } from './readability';
import { KID_RESOURCES } from '@/config/safety';

const textsOf = (a: (typeof KID_ACTIVITIES)[number]) => {
  const t: string[] = [];
  if ('intro' in a) t.push(a.intro);
  if (a.kind === 'pasos' || a.kind === 'mision' || a.kind === 'juntos') t.push(...a.steps.map((s) => s.text));
  if (a.kind === 'juego') t.push(...a.rounds.map((r) => r.situation));
  return t;
};

describe('actividades para chicos', () => {
  it('ids únicos y habilidades existentes', () => {
    expect(new Set(KID_ACTIVITIES.map((a) => a.id)).size).toBe(KID_ACTIVITIES.length);
    const skills = new Set(KID_SKILLS.map((s) => s.id));
    for (const a of KID_ACTIVITIES) {
      expect(skills.has(a.skill), a.id).toBe(true);
      expect(a.bands.length, a.id).toBeGreaterThan(0);
      // Las de 0 a 3 años (juego o lectura juntos) pueden durar hasta 10 minutos.
      expect(a.minutes, a.id).toBeLessThanOrEqual(a.kind === 'juntos' ? 10 : 5);
    }
  });

  it('cada franja tiene variedad: al menos 10 actividades y 5 habilidades, con el check-in y la gratitud', () => {
    for (const b of AGE_BANDS.filter((x) => hasKidMode(x.id))) {
      const list = activitiesFor(b.id);
      expect(list.length, b.id).toBeGreaterThanOrEqual(20);
      expect(new Set(list.map((a) => a.skill)).size, b.id).toBeGreaterThanOrEqual(5);
      expect(list.some((a) => a.id === 'como-me-siento'), b.id).toBe(true);
      expect(list.some((a) => a.id === 'frasco-de-gratitud'), b.id).toBe(true);
    }
  });

  it('los textos para chicos son bastante fáciles de leer y con frases cortas', () => {
    for (const a of KID_ACTIVITIES) {
      const text = textsOf(a).join(' ');
      // Las de 0 a 3 años las lee el adulto: legibilidad al menos normal.
      expect(Math.round(inflesz(text)), a.id).toBeGreaterThanOrEqual(a.kind === 'juntos' ? 58 : 65);
      expect(longestSentenceWords(text), a.id).toBeLessThanOrEqual(20);
      for (const t of textsOf(a)) expect(t.trim(), a.id).toMatch(/[.?!»…]$/);
    }
  });

  it('sin dobles espacios ni marcas de género con barra', () => {
    for (const a of KID_ACTIVITIES) for (const t of [...textsOf(a), a.forAdult, a.evidence]) {
      expect(t, a.id).not.toMatch(/ {2}/);
      expect(t, a.id).not.toMatch(/\w\/[ao]s?\b/);
    }
  });

  it('las preguntas tienen tres opciones con respuesta; los juegos incluyen la respuesta entre las opciones', () => {
    for (const a of KID_ACTIVITIES) {
      if (a.kind === 'pasos' || a.kind === 'mision')
        for (const s of a.steps)
          if (s.choice) {
            expect(s.choice.options.length, a.id).toBe(3);
            expect(s.choice.question.trim(), a.id).toMatch(/\?$/);
            for (const o of s.choice.options) expect(o.reply.length, a.id).toBeGreaterThan(10);
          }
      if (a.kind === 'juego') for (const r of a.rounds) expect(r.options, a.id).toContain(r.answer);
      if (a.kind === 'mision') expect(a.missions.length, a.id).toBeGreaterThanOrEqual(4);
    }
  });

  it('de 0 a 3 años no hay pantalla para el chico: sólo actividades para hacer juntos', () => {
    expect(hasKidMode('0-3')).toBe(false);
    const baby = activitiesFor('0-3');
    expect(baby.length).toBeGreaterThanOrEqual(8);
    for (const a of KID_ACTIVITIES) expect(a.kind === 'juntos', a.id).toBe(a.bands.includes('0-3'));
    for (const a of baby) expect(a.bands, a.id).toEqual(['0-3']);
  });

  it('los adolescentes tienen habilidades propias además de las compartidas', () => {
    const teen = activitiesFor('13-17');
    expect(teen.length).toBeGreaterThanOrEqual(25);
    for (const id of ['tipp-rapido', 'stop', 'accion-opuesta', 'pedir-y-decir-que-no', 'redes-y-yo']) expect(teen.map((a) => a.id)).toContain(id);
  });

  it('los dibujos de respiración se mueven sólo al tomar y soltar el aire, y quedan quietos en las pausas', async () => {
    const { breathFull, breathMoves } = await import('./kids');
    expect([breathFull('in'), breathFull('hold'), breathFull('out'), breathFull('rest')]).toEqual([true, true, false, false]);
    expect([breathMoves('in'), breathMoves('hold'), breathMoves('out'), breathMoves('rest')]).toEqual([true, false, true, false]);
  });

  it('los pasos que piden respirar despacio varias veces dan al menos 6 segundos por respiración', () => {
    const times: Record<string, number> = { dos: 2, tres: 3, cuatro: 4, cinco: 5 };
    for (const a of KID_ACTIVITIES)
      if (a.kind === 'pasos' || a.kind === 'mision' || a.kind === 'juntos')
        for (const s of a.steps) {
          const m = s.text.match(/(despacio|lento|hondo).*\b(dos|tres|cuatro|cinco) veces|\b(dos|tres|cuatro|cinco) veces.*(despacio|lento|hondo)/i);
          if (m && s.seconds) {
            const n = times[(m[2] ?? m[3]).toLowerCase()];
            expect(s.seconds / n, `${a.id}: ${s.text}`).toBeGreaterThanOrEqual(6);
          }
        }
  });

  it('las respiraciones tienen la exhalación igual o más larga que la inhalación', () => {
    for (const a of KID_ACTIVITIES) if (a.kind === 'respirar') expect(a.exhale, a.id).toBeGreaterThanOrEqual(a.inhale);
  });

  it('cada emoción sugiere al menos una actividad existente en cada franja', () => {
    for (const f of KID_FEELINGS)
      for (const b of AGE_BANDS.filter((x) => hasKidMode(x.id))) {
        const s = suggestionsFor(f.id, b.id);
        expect(s.length, `${f.id} ${b.id}`).toBeGreaterThan(0);
        for (const a of s) expect(a.bands).toContain(b.id);
      }
  });
});

describe('jardín, stickers y avisos', () => {
  const log = (over: Partial<KidActivityLog>, daysAgo = 0): KidActivityLog => ({
    id: Math.random().toString(36),
    kidId: 'k',
    activityId: 'como-me-siento',
    feeling: null,
    intensity: null,
    note: null,
    createdAt: new Date(Date.now() - daysAgo * 86_400_000),
    ...over,
  });

  it('el jardín crece por etapas y nunca retrocede', () => {
    expect(gardenStage(0).index).toBe(0);
    expect(gardenStage(1).index).toBe(1);
    let prev = 0;
    for (let n = 0; n < 60; n++) {
      expect(gardenStage(n).index).toBeGreaterThanOrEqual(prev);
      prev = gardenStage(n).index;
    }
    expect(gardenStage(1000).index).toBe(GARDEN_STAGES.length - 1);
  });

  it('un sticker por actividad distinta', () => {
    expect(stickersOf([log({}), log({}), log({ activityId: 'globo-magico' })]).size).toBe(2);
  });

  it('avisa al adulto con una emoción difícil «muchísimo» en 3 días distintos de la semana', () => {
    const strong = (d: number) => log({ feeling: 'tristeza', intensity: 3 }, d);
    expect(kidAlert([strong(0), strong(1)])).toBeNull();
    expect(kidAlert([strong(0), strong(0.1), strong(0.2)])).toBeNull(); // mismo día
    expect(kidAlert([strong(0), strong(2), strong(4)])?.feeling.id).toBe('tristeza');
    expect(kidAlert([strong(0), strong(2), strong(9)])).toBeNull(); // fuera de la semana
    expect(kidAlert([0, 2, 4].map((d) => log({ feeling: 'tristeza', intensity: 2 }, d)))).toBeNull();
    expect(kidAlert([0, 2, 4].map((d) => log({ feeling: 'alegria', intensity: 3 }, d)))).toBeNull();
  });

  it('el resumen semanal cuenta actividades, días, emociones y gratitud', () => {
    const w = weeklySummary([
      log({ feeling: 'alegria', intensity: 2 }),
      log({ activityId: 'frasco-de-gratitud', note: 'Mi perro' }, 1),
      log({ activityId: 'globo-magico' }, 10),
    ]);
    expect(w.activities).toBe(2);
    expect(w.days).toBe(2);
    expect(w.feelings[0].feeling.id).toBe('alegria');
    expect(w.gratitude).toEqual(['Mi perro']);
  });
});

describe('guías para familias', () => {
  it('completas, legibles, con frases entre comillas y actividades existentes', () => {
    expect(new Set(KID_GUIDES.map((g) => g.id)).size).toBe(KID_GUIDES.length);
    for (const g of KID_GUIDES) {
      expect(Math.round(inflesz(g.sections.flatMap((s) => s.paragraphs).join(' '))), g.id).toBeGreaterThanOrEqual(60);
      for (const p of g.phrases) expect(p, g.id).toMatch(/^«.+»$/);
      for (const id of g.activities) expect(KID_ACTIVITY_BY_ID[id], `${g.id} → ${id}`).toBeDefined();
      for (const r of g.references) expect(r.citation, g.id).toMatch(/\(\d{4}\)/);
    }
  });

  it('hay una guía de cuándo consultar que remite a ayuda urgente', () => {
    const g = KID_GUIDES.find((x) => x.id === 'cuando-consultar');
    expect(g?.sections.flatMap((s) => s.paragraphs).join(' ')).toMatch(/911/);
  });
});

describe('recursos de ayuda para chicos', () => {
  it('son llamables e incluyen emergencias', () => {
    expect(KID_RESOURCES.some((r) => r.href === 'tel:911')).toBe(true);
    for (const r of KID_RESOURCES) expect(r.href, r.label).toMatch(/^tel:\d+$/);
  });
});

describe('caminos de aprendizaje', () => {
  it('cada franja tiene al menos 3 caminos con actividades existentes de su edad', async () => {
    const { KID_PATHS, pathsFor } = await import('./kids');
    expect(new Set(KID_PATHS.map((p) => p.id)).size).toBe(KID_PATHS.length);
    for (const b of AGE_BANDS) {
      expect(pathsFor(b.id).length, b.id).toBeGreaterThanOrEqual(3);
      // Cada camino de la franja empieza con una actividad distinta: el botón «Empezar» no se repite.
      const firsts = pathsFor(b.id).map((p) => p.activities[0]);
      expect(new Set(firsts).size, b.id).toBe(firsts.length);
    }
    for (const p of KID_PATHS) {
      expect(p.activities.length, p.id).toBeGreaterThanOrEqual(5);
      for (const id of p.activities) {
        expect(KID_ACTIVITY_BY_ID[id], `${p.id} → ${id}`).toBeDefined();
        expect(KID_ACTIVITY_BY_ID[id].bands, `${p.id} → ${id}`).toContain(p.band);
      }
    }
  });

  it('el progreso cuenta lo hecho y propone la siguiente actividad', async () => {
    const { KID_PATH_BY_ID, pathProgress } = await import('./kids');
    const p = KID_PATH_BY_ID['peques-calma'];
    expect(pathProgress(p, new Set()).next?.id).toBe('globo-magico');
    const half = pathProgress(p, new Set(['globo-magico', 'huele-la-flor']));
    expect(half.completed).toBe(2);
    expect(half.next?.id).toBe('soplar-burbujas');
    expect(pathProgress(p, new Set(p.activities)).next).toBeNull();
  });
});
