import { recordDayKey, toDateKey } from './metrics';
import type { JournalEntry, JournalType, PracticeFamily, SessionRecord } from './types';

/**
 * Crecimiento: la capa de motivación de la app, diseñada como gamificación terapéutica.
 *
 * Principios (ver docs/GUIA-DE-ESTILO.md › Motivación):
 * - Nada se pierde: el jardín sólo crece y no hay rachas que se rompan.
 * - Sin puntos, rankings ni comparación con otras personas.
 * - Se reconoce la práctica, no el resultado: no se premia «sentirse bien».
 * - Todo es opcional: el desafío semanal se puede ocultar.
 *
 * El jardín usa los recuentos de toda la vida (LifetimeCounts, consultas de recuento a
 * Firestore). Mientras no llegan, o sin conexión, se usa la ventana local de 90 días.
 */

// ---------------------------------------------------------------- recuentos

export interface LifetimeCounts {
  /** Momento de la consulta: lo posterior se suma desde la ventana local. */
  at: Date;
  families: Record<PracticeFamily, number>;
  /** Sesiones completas por práctica (sólo las de la colección DBT). */
  practices: Record<string, number>;
  /** Entradas del diario por tipo (sólo las de la colección DBT). */
  journalTypes: Record<string, number>;
  journalTotal: number;
}

export interface GrowthCounts {
  families: Record<PracticeFamily, number>;
  practices: Record<string, number>;
  journalTypes: Record<string, number>;
  journalTotal: number;
}

const FAMILIES: PracticeFamily[] = ['attentional', 'constructive', 'deconstructive'];

/** Recuentos a partir de la ventana local (90 días). */
function windowCounts(sessions: SessionRecord[], journal: JournalEntry[], since?: Date): GrowthCounts {
  const out: GrowthCounts = { families: { attentional: 0, constructive: 0, deconstructive: 0 }, practices: {}, journalTypes: {}, journalTotal: 0 };
  for (const s of sessions) {
    if (!s.completed || (since && s.startedAt < since)) continue;
    out.families[s.family] += 1;
    out.practices[s.practiceId] = (out.practices[s.practiceId] ?? 0) + 1;
  }
  for (const j of journal) {
    if (since && j.createdAt < since) continue;
    out.journalTotal += 1;
    out.journalTypes[j.type] = (out.journalTypes[j.type] ?? 0) + 1;
  }
  return out;
}

/**
 * Combina los recuentos de toda la vida con lo registrado después de la consulta.
 * Nunca devuelve menos que la ventana local: el jardín no retrocede si la consulta falla.
 */
export function growthCounts(sessions: SessionRecord[], journal: JournalEntry[], lifetime: LifetimeCounts | null): GrowthCounts {
  const local = windowCounts(sessions, journal);
  if (!lifetime) return local;
  const newer = windowCounts(sessions, journal, lifetime.at);
  const merge = (a: Record<string, number>, b: Record<string, number>, floor: Record<string, number>) => {
    const keys = new Set([...Object.keys(a), ...Object.keys(b), ...Object.keys(floor)]);
    return Object.fromEntries([...keys].map((k) => [k, Math.max((a[k] ?? 0) + (b[k] ?? 0), floor[k] ?? 0)]));
  };
  return {
    families: merge(lifetime.families, newer.families, local.families) as Record<PracticeFamily, number>,
    practices: merge(lifetime.practices, newer.practices, local.practices),
    journalTypes: merge(lifetime.journalTypes, newer.journalTypes, local.journalTypes),
    journalTotal: Math.max(lifetime.journalTotal + newer.journalTotal, local.journalTotal),
  };
}

// ---------------------------------------------------------------- jardín

/** Cada planta pasa por cinco etapas: una por práctica completa de su familia. */
export const STAGES_PER_PLANT = 5;
/** Plantas visibles por familia; más allá, el jardín madura con otros elementos. */
export const MAX_PLANTS_PER_FAMILY = 12;

export const STAGE_LABEL = ['semilla', 'brote', 'tallo', 'hojas', 'capullo', 'en flor'] as const;

export const SPECIES: Record<PracticeFamily, { name: string; plural: string; skill: string }> = {
  attentional: { name: 'helecho', plural: 'helechos', skill: 'atención' },
  constructive: { name: 'flor', plural: 'flores', skill: 'compasión y cualidades' },
  deconstructive: { name: 'árbol', plural: 'árboles', skill: 'comprensión' },
};

export interface Plant {
  id: string;
  family: PracticeFamily;
  /** 1–5 (5 = madura). */
  stage: number;
  /** Posición normalizada en el lienzo (0–1) y profundidad (0 lejos – 1 cerca). */
  x: number;
  depth: number;
  /** Variación visual estable (0–1). */
  seed: number;
}

/** Generador pseudoaleatorio determinista: la misma planta siempre aparece en el mismo sitio. */
function rand(seed: number): () => number {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

const FAMILY_SEED: Record<PracticeFamily, number> = { attentional: 101, constructive: 202, deconstructive: 303 };
/** Franja de profundidad por familia: árboles al fondo, helechos en medio, flores delante. */
const DEPTH_BAND: Record<PracticeFamily, [number, number]> = {
  deconstructive: [0.05, 0.35],
  attentional: [0.35, 0.7],
  constructive: [0.6, 1],
};

export function plantsFor(family: PracticeFamily, units: number): Plant[] {
  const n = Math.min(MAX_PLANTS_PER_FAMILY, Math.ceil(units / STAGES_PER_PLANT));
  const r = rand(FAMILY_SEED[family]);
  const [d0, d1] = DEPTH_BAND[family];
  const plants: Plant[] = [];
  for (let i = 0; i < n; i++) {
    // Distribución estratificada: cada planta en su franja horizontal, con algo de variación.
    const slot = (i * 0.618034 + FAMILY_SEED[family] / 1000) % 1;
    const x = 0.06 + 0.88 * Math.min(1, Math.max(0, slot + (r() - 0.5) * 0.08));
    const depth = d0 + (d1 - d0) * r();
    const stage = Math.min(STAGES_PER_PLANT, Math.max(1, units - i * STAGES_PER_PLANT));
    plants.push({ id: `${family}-${i}`, family, stage, x, depth, seed: r() });
  }
  return plants;
}

export interface GardenMilestone {
  at: number;
  title: string;
  body: string;
}

/** Elementos que aparecen al acumular práctica. Celebran el camino, no un resultado. */
export const GARDEN_MILESTONES: GardenMilestone[] = [
  { at: 1, title: 'Primer brote', body: 'Plantaste la primera semilla. Empezar es la parte más difícil.' },
  { at: 5, title: 'Sale el sol', body: 'Cinco prácticas. La luz ya llega a tu jardín.' },
  { at: 12, title: 'Llegan las mariposas', body: 'Tu jardín empieza a tener vida propia.' },
  { at: 25, title: 'Un arroyo', body: 'El agua corre: la práctica se va volviendo parte de tu vida.' },
  { at: 50, title: 'Pájaros', body: 'Cincuenta prácticas. Lo que cultivaste ya da refugio.' },
  { at: 80, title: 'Un banco para descansar', body: 'Un lugar para sentarte a mirar lo que creció.' },
  { at: 120, title: 'Faroles', body: 'Tu jardín tiene luz también de noche, en los días difíciles.' },
  { at: 180, title: 'Jardín maduro', body: 'Un jardín cuidado durante mucho tiempo. Sigue creciendo contigo.' },
];

export interface Garden {
  total: number;
  plants: Plant[];
  /** Hitos alcanzados y el siguiente. */
  reached: GardenMilestone[];
  next: GardenMilestone | null;
  /** Luciérnagas: una por entrada del diario (máximo 24). */
  fireflies: number;
}

export function buildGarden(counts: GrowthCounts): Garden {
  const total = FAMILIES.reduce((s, f) => s + counts.families[f], 0);
  const plants = FAMILIES.flatMap((f) => plantsFor(f, counts.families[f])).sort((a, b) => a.depth - b.depth);
  const reached = GARDEN_MILESTONES.filter((m) => total >= m.at);
  const next = GARDEN_MILESTONES.find((m) => total < m.at) ?? null;
  return { total, plants, reached, next, fireflies: Math.min(24, counts.journalTotal) };
}

export const hasMilestone = (garden: Garden, at: number) => garden.reached.some((m) => m.at === at);

/**
 * Qué cambió en el jardín con una práctica más de esa familia (mensaje al terminar).
 * `unitsBefore`: prácticas previas de la familia; `totalBefore`: de todas las familias.
 */
export function growthNote(family: PracticeFamily, unitsBefore: number, totalBefore: number): string {
  const after = unitsBefore + 1;
  const sp = SPECIES[family];
  const milestone = GARDEN_MILESTONES.find((m) => m.at === totalBefore + 1);
  if (after > MAX_PLANTS_PER_FAMILY * STAGES_PER_PLANT) return `Tus ${sp.plural} siguen fuertes: el jardín madura contigo.`;
  const stage = ((after - 1) % STAGES_PER_PLANT) + 1;
  const base =
    stage === 1
      ? `Brotó ${family === 'constructive' ? 'una flor nueva' : `un ${sp.name} nuevo`} en tu jardín.`
      : stage === STAGES_PER_PLANT
        ? `${family === 'constructive' ? 'Una de tus flores' : `Uno de tus ${sp.plural}`} llegó a su plenitud.`
        : `${family === 'constructive' ? 'Una de tus flores' : `Uno de tus ${sp.plural}`} creció un poco más.`;
  return milestone ? `${base} Y algo nuevo apareció: ${milestone.title.toLowerCase()}.` : base;
}

// ---------------------------------------------------------------- constancia sin castigo

/** Días distintos de este mes con alguna práctica completa o entrada del diario. */
export function daysThisMonth(sessions: SessionRecord[], journal: JournalEntry[], today = new Date()): { days: number; monthLabel: string } {
  const prefix = toDateKey(today).slice(0, 7);
  const keys = new Set<string>();
  for (const s of sessions) if (s.completed) keys.add(recordDayKey(s.startedAt, s.tz));
  for (const j of journal) keys.add(recordDayKey(j.createdAt, j.tz));
  const days = [...keys].filter((k) => k.startsWith(prefix)).length;
  return { days, monthLabel: new Intl.DateTimeFormat('es', { month: 'long' }).format(today) };
}

// ---------------------------------------------------------------- colección DBT

export type DbtModule = 'conciencia' | 'malestar' | 'regulacion' | 'interpersonal';

export const DBT_MODULE_LABEL: Record<DbtModule, string> = {
  conciencia: 'Conciencia plena',
  malestar: 'Tolerancia al malestar',
  regulacion: 'Regulación emocional',
  interpersonal: 'Efectividad interpersonal',
};

export interface DbtSkill {
  id: string;
  title: string;
  module: DbtModule;
  /** Práctica del gimnasio o plantilla del diario que la entrena. */
  source: { kind: 'practica'; id: string } | { kind: 'diario'; type: JournalType };
}

export const DBT_SKILLS: DbtSkill[] = [
  { id: 'mente-sabia', title: 'Mente sabia', module: 'conciencia', source: { kind: 'practica', id: 'mente-sabia' } },
  { id: 'stop', title: 'STOP', module: 'conciencia', source: { kind: 'practica', id: 'pausa-stop' } },
  { id: 'tarjeta', title: 'Tarjeta diaria', module: 'conciencia', source: { kind: 'diario', type: 'tarjeta-diaria' } },
  { id: 'tipp', title: 'TIPP', module: 'malestar', source: { kind: 'practica', id: 'tipp' } },
  { id: 'sentidos', title: 'Cinco sentidos', module: 'malestar', source: { kind: 'practica', id: 'cinco-sentidos' } },
  { id: 'pros-contras', title: 'Pros y contras', module: 'malestar', source: { kind: 'practica', id: 'pros-y-contras' } },
  { id: 'aceptacion', title: 'Aceptación radical', module: 'malestar', source: { kind: 'practica', id: 'aceptacion-radical' } },
  { id: 'hechos', title: 'Comprobar los hechos', module: 'regulacion', source: { kind: 'practica', id: 'comprobar-hechos' } },
  { id: 'opuesta', title: 'Acción opuesta', module: 'regulacion', source: { kind: 'practica', id: 'accion-opuesta' } },
  { id: 'please', title: 'PLEASE', module: 'regulacion', source: { kind: 'practica', id: 'please' } },
  { id: 'cadena', title: 'Análisis en cadena', module: 'regulacion', source: { kind: 'diario', type: 'analisis-cadena' } },
  { id: 'dear-man', title: 'DEAR MAN', module: 'interpersonal', source: { kind: 'practica', id: 'dear-man' } },
  { id: 'give-fast', title: 'GIVE y FAST', module: 'interpersonal', source: { kind: 'practica', id: 'give-fast' } },
];

export const DBT_PRACTICE_IDS = DBT_SKILLS.flatMap((s) => (s.source.kind === 'practica' ? [s.source.id] : []));
export const DBT_JOURNAL_TYPES = DBT_SKILLS.flatMap((s) => (s.source.kind === 'diario' ? [s.source.type] : []));

/**
 * Niveles pedagógicos de dominio (de la práctica en pantalla a la vida cotidiana):
 *   1 Descubrir  · la probaste una vez.
 *   2 Practicar  · 3 prácticas: ya conoces el procedimiento.
 *   3 Aplicar    · la usaste al menos una vez en tu vida (paso «Revisar»).
 *   4 Integrar   · te sirvió en tu vida 3 veces: sabes cuándo y cómo usarla.
 * Las habilidades del diario (tarjeta diaria, análisis en cadena) ya son aplicación:
 * cuentan como aplicadas a las 6 entradas e integradas a las 12.
 * Se usa el nivel más alto alcanzado y, como los recuentos sólo crecen, nunca baja.
 */
export const MASTERY_LABEL = ['Por descubrir', 'Descubierta', 'Practicada', 'Aplicada', 'Integrada'] as const;
export const MASTERY_HINT = [
  'Pruébala una vez para descubrirla',
  'Practícala 3 veces para aprender el procedimiento',
  'Úsala en tu vida y cuéntalo desde la práctica o en «Revisar»',
  'Cuando te sirva 3 veces en tu vida, queda integrada',
  'Ya sabes cuándo y cómo usarla',
] as const;
export const PRACTICE_FOR_LEVEL_2 = 3;
export const USEFUL_FOR_LEVEL_4 = 3;
export const JOURNAL_FOR_LEVEL = [1, 3, 6, 12];

export interface SkillProgress {
  skill: DbtSkill;
  /** Prácticas en pantalla (o entradas del diario). */
  uses: number;
  /** Veces que se usó en la vida cotidiana, y cuántas sirvió. */
  applied: number;
  useful: number;
  level: number;
}

export function skillProgress(counts: GrowthCounts, applied: Record<string, { applied: number; useful: number }> = {}): SkillProgress[] {
  return DBT_SKILLS.map((skill) => {
    if (skill.source.kind === 'diario') {
      const uses = counts.journalTypes[skill.source.type] ?? 0;
      return { skill, uses, applied: 0, useful: 0, level: JOURNAL_FOR_LEVEL.filter((t) => uses >= t).length };
    }
    const uses = counts.practices[skill.source.id] ?? 0;
    const a = applied[skill.source.id] ?? { applied: 0, useful: 0 };
    const reached = [uses + a.applied >= 1, uses >= PRACTICE_FOR_LEVEL_2, a.applied >= 1, a.useful >= USEFUL_FOR_LEVEL_4];
    const level = reached.lastIndexOf(true) + 1;
    return { skill, uses, applied: a.applied, useful: a.useful, level };
  });
}

export const skillHref = (s: DbtSkill) => (s.source.kind === 'practica' ? `/gimnasio/${s.source.id}` : `/diario?nuevo=${s.source.type}`);

// ---------------------------------------------------------------- desafío semanal

export interface WeeklyChallenge {
  id: string;
  title: string;
  why: string;
  target: number;
  /** Qué cuenta para el desafío. */
  counts: { practices?: string[]; journalTypes?: JournalType[]; anyPractice?: boolean; anyJournal?: boolean };
  href: string;
  cta: string;
}

export const WEEKLY_CHALLENGES: WeeklyChallenge[] = [
  { id: 'stop-3', title: 'Tres pausas STOP', why: 'Parar antes de responder es la base de casi todas las habilidades.', target: 3, counts: { practices: ['pausa-stop'] }, href: '/gimnasio/pausa-stop', cta: 'Hacer una pausa STOP' },
  { id: 'tarjeta-4', title: 'Cuatro tarjetas diarias', why: 'Registrar varios días seguidos muestra patrones que en un solo día no se ven.', target: 4, counts: { journalTypes: ['tarjeta-diaria'] }, href: '/diario?nuevo=tarjeta-diaria', cta: 'Llenar la tarjeta de hoy' },
  { id: 'sentidos-2', title: 'Calmarte con los sentidos', why: 'Ensayarlo en calma lo deja listo para un mal momento.', target: 2, counts: { practices: ['cinco-sentidos'] }, href: '/gimnasio/cinco-sentidos', cta: 'Practicar ahora' },
  { id: 'hechos-2', title: 'Comprobar los hechos dos veces', why: 'Separar hechos de interpretaciones cambia cómo te sientes.', target: 2, counts: { practices: ['comprobar-hechos'] }, href: '/gimnasio/comprobar-hechos', cta: 'Comprobar los hechos' },
  { id: 'cinco-dias', title: 'Practicar cinco veces', why: 'Varias prácticas breves valen más que una larga.', target: 5, counts: { anyPractice: true }, href: '/gimnasio', cta: 'Elegir una práctica' },
  { id: 'mente-sabia-3', title: 'Tres momentos de mente sabia', why: 'Antes de decidir, buscar el equilibrio entre lo que sientes y lo que sabes.', target: 3, counts: { practices: ['mente-sabia'] }, href: '/gimnasio/mente-sabia', cta: 'Practicar mente sabia' },
  { id: 'please-1', title: 'Revisar tu PLEASE', why: 'Cuidar el sueño, la comida y el movimiento reduce la vulnerabilidad emocional.', target: 1, counts: { practices: ['please'] }, href: '/gimnasio/please', cta: 'Revisar ahora' },
  { id: 'diario-3', title: 'Escribir tres veces', why: 'Poner la experiencia en palabras ya empieza a ordenarla.', target: 3, counts: { anyJournal: true }, href: '/diario', cta: 'Abrir el diario' },
  { id: 'compasion-2', title: 'Dos pausas de autocompasión', why: 'Tratarte con amabilidad también se entrena.', target: 2, counts: { practices: ['pausa-autocompasion', 'mano-en-el-pecho'] }, href: '/gimnasio/pausa-autocompasion', cta: 'Hacer una pausa' },
  { id: 'interpersonal-1', title: 'Preparar una conversación', why: 'Ensayar antes hace más fácil pedir lo que necesitas.', target: 1, counts: { practices: ['dear-man', 'give-fast'], journalTypes: ['conversacion'] }, href: '/gimnasio/dear-man', cta: 'Practicar DEAR MAN' },
  { id: 'respirar-3', title: 'Tres respiraciones lentas', why: 'Exhalar despacio es el freno más rápido del sistema nervioso.', target: 3, counts: { practices: ['respiracion-resonante', 'suspiro-ciclico'] }, href: '/gimnasio/respiracion-resonante', cta: 'Respirar ahora' },
  { id: 'aceptacion-1', title: 'Un momento de aceptación', why: 'Dejar de pelear con lo que no se puede cambiar libera energía.', target: 1, counts: { practices: ['aceptacion-radical'] }, href: '/gimnasio/aceptacion-radical', cta: 'Practicar aceptación' },
];

/** Lunes de la semana local (00:00). */
export function weekStart(today = new Date()): Date {
  const d = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const offset = (d.getDay() + 6) % 7;
  d.setDate(d.getDate() - offset);
  return d;
}

/** El desafío de la semana: rota por número de semana, igual para todos los dispositivos. */
export function challengeOfWeek(today = new Date()): WeeklyChallenge {
  const week = Math.floor(weekStart(today).getTime() / (7 * 86_400_000));
  return WEEKLY_CHALLENGES[((week % WEEKLY_CHALLENGES.length) + WEEKLY_CHALLENGES.length) % WEEKLY_CHALLENGES.length];
}

export function challengeProgress(challenge: WeeklyChallenge, sessions: SessionRecord[], journal: JournalEntry[], today = new Date()) {
  const since = weekStart(today);
  const { practices, journalTypes, anyPractice, anyJournal } = challenge.counts;
  const s = sessions.filter((x) => x.completed && x.startedAt >= since && (anyPractice || practices?.includes(x.practiceId))).length;
  const j = journal.filter((x) => x.createdAt >= since && (anyJournal || journalTypes?.includes(x.type))).length;
  const done = Math.min(challenge.target, s + j);
  return { done, target: challenge.target, complete: done >= challenge.target };
}
