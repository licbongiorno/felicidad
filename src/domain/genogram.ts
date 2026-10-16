/**
 * Genograma de tres generaciones (McGoldrick, Gerson y Petry, 2008), simplificado para que
 * cualquiera lo arme sin conocer la notación: cada persona ocupa un lugar en la familia
 * (abuelos, padres o quienes criaron, tíos, hermanos, pareja, hijos u otra persona
 * importante) y la diagramación se calcula sola.
 *
 * Los datos son de terceros y sensibles (salud, consumos, violencia): se guardan sólo en el
 * dispositivo y se recomienda usar apodos o iniciales.
 */

/** Dos ramas: la familia de cada persona que te crió. */
export type Branch = 1 | 2;

export type Slot =
  | { kind: 'yo' }
  | { kind: 'progenitor'; branch: Branch }
  | { kind: 'abuelo'; branch: Branch; index: 0 | 1 }
  | { kind: 'tio'; branch: Branch }
  | { kind: 'hermano' }
  | { kind: 'pareja' }
  | { kind: 'hijo' }
  | { kind: 'otro' };

/** Cuadrado, círculo o rombo (otra identidad o prefiere no decir). */
export type Shape = 'cuadrado' | 'circulo' | 'rombo';

export type Bond = 'cercana' | 'distante' | 'conflictiva' | 'cortada';

export const BONDS: { id: Bond; label: string }[] = [
  { id: 'cercana', label: 'Cercana' },
  { id: 'distante', label: 'Distante' },
  { id: 'conflictiva', label: 'Con conflicto' },
  { id: 'cortada', label: 'Cortada, sin contacto' },
];

export const SHAPES: { id: Shape; label: string }[] = [
  { id: 'cuadrado', label: 'Varón (cuadrado)' },
  { id: 'circulo', label: 'Mujer (círculo)' },
  { id: 'rombo', label: 'Otra identidad o prefiero no decir (rombo)' },
];

export interface GenTag {
  id: string;
  label: string;
  /** Fortaleza que se hereda (se muestra distinto y con otra pregunta). */
  strength?: boolean;
}

export const GEN_TAGS: GenTag[] = [
  { id: 'migracion', label: 'Migración' },
  { id: 'separacion', label: 'Separación' },
  { id: 'perdida-temprana', label: 'Pérdida temprana' },
  { id: 'enfermedad', label: 'Enfermedad grave' },
  { id: 'salud-mental', label: 'Sufrimiento psíquico' },
  { id: 'consumo', label: 'Alcohol u otros consumos' },
  { id: 'violencia', label: 'Violencia' },
  { id: 'secreto', label: 'Tema del que no se habla' },
  { id: 'cuida-a-todos', label: 'Cuida a todos' },
  { id: 'sacrificio', label: 'Mucho sacrificio o trabajo' },
  { id: 'fortaleza', label: 'Salió adelante', strength: true },
  { id: 'alegria', label: 'Humor y alegría', strength: true },
];

export const GEN_TAG_BY_ID = Object.fromEntries(GEN_TAGS.map((t) => [t.id, t])) as Record<string, GenTag>;

export interface GenPerson {
  id: string;
  slot: Slot;
  name: string;
  shape: Shape;
  birthYear?: number | null;
  deceased?: boolean;
  deathYear?: number | null;
  tags: string[];
  /** Cómo es el vínculo contigo. */
  bond?: Bond | null;
  note?: string;
}

export type CoupleId = 'progenitores' | 'abuelos-1' | 'abuelos-2' | 'pareja';

export interface Genogram {
  v: 1;
  people: GenPerson[];
  /** Parejas que se separaron. */
  separated: Partial<Record<CoupleId, boolean>>;
}

export const MAX_PEOPLE = 40;
export const MAX_NAME = 24;
export const MAX_NOTE = 280;

export const emptyGenogram = (): Genogram => ({
  v: 1,
  people: [{ id: 'yo', slot: { kind: 'yo' }, name: 'Yo', shape: 'rombo', tags: [] }],
  separated: {},
});

/** Generación relativa a ti: −2 abuelos, −1 padres y tíos, 0 tu generación, 1 hijos. */
export function generationOf(slot: Slot): -2 | -1 | 0 | 1 {
  switch (slot.kind) {
    case 'abuelo':
      return -2;
    case 'progenitor':
    case 'tio':
      return -1;
    case 'hijo':
      return 1;
    default:
      return 0;
  }
}

export const sameSlot = (a: Slot, b: Slot) => JSON.stringify(a) === JSON.stringify(b);

/** Lugares únicos: sólo una persona por lugar. */
export const isSingleSlot = (s: Slot) => s.kind === 'yo' || s.kind === 'progenitor' || s.kind === 'abuelo' || s.kind === 'pareja';

// ---------------------------------------------------------------- lectura segura

const isObj = (x: unknown): x is Record<string, unknown> => typeof x === 'object' && x !== null;
const year = (x: unknown) => (typeof x === 'number' && Number.isInteger(x) && x >= 1800 && x <= 2100 ? x : null);
const branch = (x: unknown): Branch | null => (x === 1 || x === 2 ? x : null);

function parseSlot(x: unknown): Slot | null {
  if (!isObj(x)) return null;
  switch (x.kind) {
    case 'yo':
    case 'hermano':
    case 'pareja':
    case 'hijo':
    case 'otro':
      return { kind: x.kind };
    case 'progenitor':
    case 'tio': {
      const b = branch(x.branch);
      return b ? { kind: x.kind, branch: b } : null;
    }
    case 'abuelo': {
      const b = branch(x.branch);
      return b && (x.index === 0 || x.index === 1) ? { kind: 'abuelo', branch: b, index: x.index } : null;
    }
    default:
      return null;
  }
}

/** Valida lo guardado en el dispositivo; descarta lo que no tenga forma conocida. */
export function parseGenogram(raw: unknown): Genogram {
  const base = emptyGenogram();
  if (!isObj(raw) || raw.v !== 1 || !Array.isArray(raw.people)) return base;
  const people: GenPerson[] = [];
  for (const p of raw.people.slice(0, MAX_PEOPLE)) {
    if (!isObj(p) || typeof p.id !== 'string' || typeof p.name !== 'string') continue;
    const slot = parseSlot(p.slot);
    if (!slot) continue;
    if (isSingleSlot(slot) && people.some((q) => sameSlot(q.slot, slot))) continue;
    people.push({
      id: p.id.slice(0, 40),
      slot,
      name: p.name.slice(0, MAX_NAME),
      shape: p.shape === 'cuadrado' || p.shape === 'circulo' ? p.shape : 'rombo',
      birthYear: year(p.birthYear),
      deceased: p.deceased === true,
      deathYear: year(p.deathYear),
      tags: Array.isArray(p.tags) ? p.tags.filter((t): t is string => typeof t === 'string' && !!GEN_TAG_BY_ID[t]) : [],
      bond: BONDS.some((b) => b.id === p.bond) ? (p.bond as Bond) : null,
      note: typeof p.note === 'string' ? p.note.slice(0, MAX_NOTE) : undefined,
    });
  }
  if (!people.some((p) => p.slot.kind === 'yo')) people.unshift(base.people[0]);
  const separated: Genogram['separated'] = {};
  if (isObj(raw.separated)) {
    for (const k of ['progenitores', 'abuelos-1', 'abuelos-2', 'pareja'] as CoupleId[]) if (raw.separated[k] === true) separated[k] = true;
  }
  return { v: 1, people, separated };
}

// ---------------------------------------------------------------- diagramación

export const NODE = 46;
export const GAP = 116;
export const ROW = 150;
const MARGIN = 70;

export interface PlacedPerson {
  person: GenPerson;
  x: number;
  y: number;
}

export interface Couple {
  id: CoupleId;
  a: PlacedPerson;
  b: PlacedPerson;
  separated: boolean;
}

/** Un grupo de hermanos que cuelga de uno o dos padres. */
export interface Descent {
  /** Punto desde donde baja la línea (medio de la pareja o el padre solo). */
  from: { x: number; y: number };
  /** 1 si cuelga de un solo padre (la línea arranca debajo de su nombre). */
  parents: 1 | 2;
  children: PlacedPerson[];
}

export interface GenLayout {
  width: number;
  height: number;
  placed: PlacedPerson[];
  couples: Couple[];
  descents: Descent[];
  /** Personas importantes fuera del árbol: se dibujan aparte, sin líneas. */
  others: PlacedPerson[];
}

const byBirth = (a: GenPerson, b: GenPerson) => (a.birthYear ?? 9999) - (b.birthYear ?? 9999);

/**
 * Coloca a cada persona en su fila y calcula líneas de pareja y de descendencia.
 * Los lugares vacíos ocupan espacio igual, para que la forma sea estable al ir sumando.
 */
export function layoutGenogram(g: Genogram): GenLayout {
  const find = (s: Slot) => g.people.find((p) => sameSlot(p.slot, s));
  const all = (kind: Slot['kind'], b?: Branch) => g.people.filter((p) => p.slot.kind === kind && (b === undefined || ('branch' in p.slot && p.slot.branch === b))).sort(byBirth);
  const yRow = (gen: number) => MARGIN + (gen + 2) * ROW;
  const xs = new Map<string, number>();

  // Fila −1: tíos de la rama 1, los dos progenitores (separados para que quepan los abuelos) y tíos de la rama 2.
  const p1 = find({ kind: 'progenitor', branch: 1 });
  const p2 = find({ kind: 'progenitor', branch: 2 });
  const t1 = all('tio', 1);
  const t2 = all('tio', 2);
  const xP1 = 0;
  const xP2 = 2 * GAP;
  t1.forEach((t, i) => xs.set(t.id, xP1 - (t1.length - i) * GAP));
  t2.forEach((t, i) => xs.set(t.id, xP2 + (i + 1) * GAP));
  if (p1) xs.set(p1.id, xP1);
  if (p2) xs.set(p2.id, xP2);

  // Fila −2: cada pareja de abuelos centrada sobre sus hijos.
  const grand = (b: Branch) => {
    const kids = b === 1 ? [...t1.map((t) => xs.get(t.id)!), xP1] : [xP2, ...t2.map((t) => xs.get(t.id)!)];
    const mid = (Math.min(...kids) + Math.max(...kids)) / 2;
    const a0 = find({ kind: 'abuelo', branch: b, index: 0 });
    const a1 = find({ kind: 'abuelo', branch: b, index: 1 });
    if (a0) xs.set(a0.id, mid - GAP / 2);
    if (a1) xs.set(a1.id, mid + GAP / 2);
    return { a0, a1, mid };
  };
  const g1 = grand(1);
  const g2 = grand(2);

  // Fila 0: hermanos y tú, centrados bajo los progenitores; la pareja a tu derecha.
  // Con pareja, tú vas al final de los hermanos para que la línea de pareja no los cruce.
  const me = find({ kind: 'yo' })!;
  const partner = find({ kind: 'pareja' });
  const sibs = partner ? [...all('hermano'), me] : [...all('hermano'), me].sort(byBirth);
  const midParents = (xP1 + xP2) / 2;
  sibs.forEach((s, i) => xs.set(s.id, midParents + (i - (sibs.length - 1) / 2) * GAP));
  if (partner) xs.set(partner.id, xs.get(me.id)! + GAP);

  // Fila 1: hijos bajo la pareja (o bajo ti).
  const kids = all('hijo');
  const xMe = xs.get(me.id)!;
  const midMe = partner ? (xMe + xs.get(partner.id)!) / 2 : xMe;
  kids.forEach((k, i) => xs.set(k.id, midMe + (i - (kids.length - 1) / 2) * GAP));

  // Otras personas importantes: fila aparte, al final.
  const others = g.people.filter((p) => p.slot.kind === 'otro');
  const lastGen = kids.length ? 1 : 0;
  const yOthers = yRow(lastGen) + ROW;

  const minX = Math.min(...[...xs.values()], g1.mid - GAP / 2, g2.mid + GAP / 2, 0);
  const shift = MARGIN - minX;
  const placed: PlacedPerson[] = g.people
    .filter((p) => p.slot.kind !== 'otro')
    .map((p) => ({ person: p, x: xs.get(p.id)! + shift, y: yRow(generationOf(p.slot)) }));
  const at = (p?: GenPerson) => (p ? placed.find((q) => q.person.id === p.id) : undefined);
  const placedOthers = others.map((p, i) => ({ person: p, x: MARGIN + i * GAP, y: yOthers }));

  const couples: Couple[] = [];
  const descents: Descent[] = [];
  const unit = (id: CoupleId, a: GenPerson | undefined, b: GenPerson | undefined, children: GenPerson[]) => {
    const pa = at(a);
    const pb = at(b);
    if (pa && pb) couples.push({ id, a: pa, b: pb, separated: !!g.separated[id] });
    const parents = [pa, pb].filter((x): x is PlacedPerson => !!x);
    const ch = children.map(at).filter((x): x is PlacedPerson => !!x);
    if (!parents.length || !ch.length) return;
    const from = { x: parents.reduce((s, p) => s + p.x, 0) / parents.length, y: parents[0].y };
    descents.push({ from, parents: parents.length === 2 ? 2 : 1, children: ch });
  };
  unit('abuelos-1', g1.a0, g1.a1, p1 ? [...t1, p1] : t1);
  unit('abuelos-2', g2.a0, g2.a1, p2 ? [p2, ...t2] : t2);
  unit('progenitores', p1, p2, sibs);
  unit('pareja', me, partner, kids);

  const xsAll = [...placed, ...placedOthers].map((p) => p.x);
  const width = Math.max(...xsAll, 0) + MARGIN;
  const height = (placedOthers.length ? yOthers : yRow(lastGen)) + NODE / 2 + 56;
  return { width, height, placed, couples, descents, others: placedOthers };
}

// ---------------------------------------------------------------- patrones

export interface GenPattern {
  tag: GenTag;
  people: GenPerson[];
  generations: number;
  text: string;
  question: string;
}

const QUESTIONS: Record<string, string> = {
  migracion: '¿Qué se perdió y qué se ganó con cada migración? ¿Cómo se habló de eso en tu familia?',
  separacion: '¿Cómo se vivieron las separaciones? ¿Qué se aprendió sobre quedarse o irse?',
  'perdida-temprana': '¿Quién tuvo que crecer de golpe? ¿Hubo lugar para el duelo?',
  enfermedad: '¿Quién cuidó a quién? ¿Qué cambió en la familia con cada enfermedad?',
  'salud-mental': '¿Se pudo hablar del sufrimiento o se escondió? ¿Quién pidió ayuda?',
  consumo: '¿Qué función cumplía el consumo en la familia? ¿Quién cargó con sus efectos?',
  violencia: 'Esto merece cuidado. ¿Hubo alguien que la frenó? Si te remueve, habla con un profesional.',
  secreto: '¿Qué protegía el silencio? ¿Qué cuesta hoy no saber?',
  'cuida-a-todos': '¿Quién cuida a quien cuida? ¿Ese lugar se elige o se hereda?',
  sacrificio: '¿Qué se logró con tanto esfuerzo? ¿Qué quedó postergado?',
  fortaleza: '¿Cómo lo hicieron? ¿Qué de esa fuerza está también en ti?',
  alegria: '¿Cómo se transmite esa alegría? ¿Dónde aparece hoy en tu vida?',
};

const who = (p: GenPerson) => (p.slot.kind === 'yo' ? 'tú' : p.name.trim() || 'sin nombre');

/** Temas que aparecen en dos o más personas de al menos dos generaciones. */
export function genogramPatterns(g: Genogram): GenPattern[] {
  const out: GenPattern[] = [];
  for (const tag of GEN_TAGS) {
    const people = g.people.filter((p) => p.slot.kind !== 'otro' && p.tags.includes(tag.id)).sort((a, b) => generationOf(a.slot) - generationOf(b.slot));
    const generations = new Set(people.map((p) => generationOf(p.slot))).size;
    if (people.length < 2 || generations < 2) continue;
    const names = people.map(who);
    const list = names.length > 1 ? `${names.slice(0, -1).join(', ')} y ${names[names.length - 1]}` : names[0];
    out.push({
      tag,
      people,
      generations,
      text: `«${tag.label}» aparece en ${people.length} personas de ${generations} generaciones: ${list}.`,
      question: QUESTIONS[tag.id],
    });
  }
  // Primero lo que más se repite; las fortalezas, al final de cada nivel.
  return out.sort((a, b) => b.generations - a.generations || b.people.length - a.people.length || Number(!!a.tag.strength) - Number(!!b.tag.strength));
}

/** Etiqueta del lugar, usando el nombre de cada progenitor para nombrar su rama. */
export function slotLabel(slot: Slot, g: Genogram): string {
  const parentName = (b: Branch) => g.people.find((p) => p.slot.kind === 'progenitor' && p.slot.branch === b)?.name.trim();
  const rama = (b: Branch) => parentName(b) || (b === 1 ? 'tu primer progenitor' : 'tu segundo progenitor');
  switch (slot.kind) {
    case 'yo':
      return 'Tú';
    case 'progenitor':
      return slot.branch === 1 ? 'Primer padre, madre o quien te crió' : 'Segundo padre, madre o quien te crió';
    case 'abuelo':
      return `Padre o madre de ${rama(slot.branch)}`;
    case 'tio':
      return `Hermano o hermana de ${rama(slot.branch)}`;
    case 'hermano':
      return 'Tu hermano o hermana';
    case 'pareja':
      return 'Tu pareja';
    case 'hijo':
      return 'Tu hijo o hija';
    case 'otro':
      return 'Otra persona importante';
  }
}
