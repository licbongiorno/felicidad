/**
 * Laboratorio «Mi forma de vincularme»: autoexploración del apego adulto en dos dimensiones,
 * ansiedad y evitación (Brennan, Clark y Shaver, 1998; Fraley, Waller y Brennan, 2000), con
 * los cuatro cuadrantes descriptivos de Bartholomew y Horowitz (1991).
 *
 * Las afirmaciones son PROPIAS de esta app: no reproducen el ECR ni el ECR-R. No es un test
 * validado ni da un estilo: describe tendencias de hoy para pensar, y enlaza prácticas del
 * paquete «apego-pareja». Las respuestas sólo se guardan en el dispositivo.
 */

export type AttachmentDimension = 'ansiedad' | 'evitacion';
export type AttachmentQuadrantId = 'seguro' | 'preocupado' | 'evitativo' | 'temeroso';

export interface AttachmentItem {
  id: number;
  text: string;
  dimension: AttachmentDimension;
  /** true si un acuerdo alto indica MENOS de la dimensión (se puntúa 6 − respuesta). */
  reversed?: boolean;
}

export const ATTACHMENT_SCALE: { value: number; label: string }[] = [
  { value: 1, label: 'Nada que ver conmigo' },
  { value: 2, label: 'Poco parecido a mí' },
  { value: 3, label: 'Algo parecido a mí' },
  { value: 4, label: 'Bastante parecido a mí' },
  { value: 5, label: 'Muy parecido a mí' },
];

/** Catorce afirmaciones, siete por dimensión (dos invertidas en cada una), intercaladas. */
export const ATTACHMENT_ITEMS: AttachmentItem[] = [
  { id: 1, dimension: 'ansiedad', text: 'Si alguien que quiero tarda en responderme, me cuesta pensar en otra cosa.' },
  { id: 2, dimension: 'evitacion', text: 'Cuando algo me duele, suelo guardármelo.' },
  { id: 3, dimension: 'ansiedad', text: 'Releo los mensajes buscando señales de enojo o de distancia.' },
  { id: 4, dimension: 'evitacion', text: 'Si pasamos mucho tiempo muy juntos, después necesito tomar distancia.' },
  { id: 5, dimension: 'ansiedad', reversed: true, text: 'Si pasamos unos días sin hablar, confío en que el vínculo sigue bien.' },
  { id: 6, dimension: 'evitacion', reversed: true, text: 'Si tuve un mal día, se lo cuento a la persona que quiero.' },
  { id: 7, dimension: 'ansiedad', text: 'Pregunto varias veces si está todo bien entre nosotros, aunque me digan que sí.' },
  { id: 8, dimension: 'evitacion', text: 'Cuando una charla se pone emocional, me dan ganas de cortarla o de irme.' },
  { id: 9, dimension: 'ansiedad', text: 'Si la otra persona hace planes sin mí, me inquieto más de lo que quisiera.' },
  { id: 10, dimension: 'evitacion', text: 'Prefiero arreglármelas sin ayuda, aunque me cueste mucho.' },
  { id: 11, dimension: 'ansiedad', text: 'Si alguien querido habla menos que de costumbre, pienso enseguida que hice algo mal.' },
  { id: 12, dimension: 'evitacion', text: 'Cuido tanto mi independencia que a veces me alejo sin darme cuenta.' },
  { id: 13, dimension: 'ansiedad', reversed: true, text: 'Cuando no me contestan enseguida, pienso que están ocupados y sigo con lo mío.' },
  { id: 14, dimension: 'evitacion', reversed: true, text: 'Cuando alguien me busca para hablar de lo nuestro, me quedo y escucho.' },
];

export const ATTACHMENT_DIMENSIONS: Record<AttachmentDimension, { title: string; low: string; high: string; description: string }> = {
  ansiedad: {
    title: 'Ansiedad de apego',
    low: 'Más calma ante la distancia',
    high: 'Más alarma ante la distancia',
    description: 'Cuánto te preocupa no importar o que te dejen. Cuando sube, dan ganas de buscar, insistir o pedir pruebas.',
  },
  evitacion: {
    title: 'Evitación',
    low: 'Más comodidad con la cercanía',
    high: 'Más necesidad de distancia',
    description: 'Cuánto te incomodan la cercanía y depender de otros. Cuando sube, dan ganas de alejarte o de callar lo que sientes.',
  },
};

export interface AttachmentQuadrant {
  id: AttachmentQuadrantId;
  /** Nombre descriptivo, nunca una etiqueta de persona. */
  title: string;
  /** Combinación de dimensiones, en palabras. */
  combo: string;
  /** Tendencias de hoy, en segunda persona y en condicional. */
  today: string;
  /** Qué puede ayudar, en una frase. */
  helps: string;
  practiceIds: string[];
  articleIds: string[];
}

export const ATTACHMENT_QUADRANTS: AttachmentQuadrant[] = [
  {
    id: 'seguro',
    title: 'Más cerca de la seguridad',
    combo: 'Poca ansiedad y poca evitación',
    today:
      'Hoy tus respuestas muestran bastante calma con la cercanía y con la distancia. Quizás puedes pedir lo que necesitas y esperar una respuesta sin mucha alarma. Eso no quiere decir que no te pase nada: con estrés, cualquiera se mueve hacia buscar o hacia alejarse.',
    helps: 'Puede servirte notar en qué vínculos o momentos te cuesta más, y cuidar los gestos que sostienen la confianza.',
    practiceIds: ['mi-alarma-de-apego', 'ofertas-de-conexion', 'su-alarma-quizas'],
    articleIds: ['apego-adulto', 'mentalizar-en-pareja'],
  },
  {
    id: 'preocupado',
    title: 'Con la alarma alta',
    combo: 'Más ansiedad y poca evitación',
    today:
      'Hoy tus respuestas muestran que la distancia te enciende bastante la alarma. Quizás te cuesta esperar una respuesta, o buscas señales de que todo está bien. Al mismo tiempo, te resulta posible acercarte y contar lo que sientes.',
    helps: 'Puede ayudarte calmar el cuerpo antes de escribir o reclamar, y convertir el reclamo en un pedido claro.',
    practiceIds: ['pausa-de-apego', 'mi-alarma-de-apego', 'pedir-cercania-sin-reclamo'],
    articleIds: ['apego-adulto'],
  },
  {
    id: 'evitativo',
    title: 'Con la distancia como refugio',
    combo: 'Poca ansiedad y más evitación',
    today:
      'Hoy tus respuestas muestran que la cercanía intensa te incomoda un poco, y que tomar distancia te calma. Quizás te arreglas sin pedir ayuda, o cortas las charlas cuando se ponen emocionales. No te preocupa tanto que te dejen.',
    helps: 'Puede ayudarte notar el momento en que te alejas, y avisar en lugar de desaparecer: «necesito un rato y vuelvo».',
    practiceIds: ['mi-alarma-de-apego', 'el-baile-de-los-dos', 'pedir-cercania-sin-reclamo'],
    articleIds: ['apego-adulto'],
  },
  {
    id: 'temeroso',
    title: 'Entre el deseo y el miedo a la cercanía',
    combo: 'Más ansiedad y más evitación',
    today:
      'Hoy tus respuestas muestran que deseas la cercanía y a la vez te da miedo. Quizás buscas al otro y, cuando se acerca, te dan ganas de irte. Es una combinación que cansa, y tiene mucho sentido si te costó confiar en otras personas.',
    helps: 'Puede ayudarte ir despacio: primero calmar la alarma, después nombrar lo que temes. Aquí una terapia suele ayudar mucho.',
    practiceIds: ['pausa-de-apego', 'mi-alarma-de-apego', 'su-alarma-quizas'],
    articleIds: ['apego-adulto', 'mentalizar-en-pareja'],
  },
];

export const ATTACHMENT_QUADRANT_BY_ID: Record<AttachmentQuadrantId, AttachmentQuadrant> = Object.fromEntries(
  ATTACHMENT_QUADRANTS.map((q) => [q.id, q]),
) as Record<AttachmentQuadrantId, AttachmentQuadrant>;

/** Punto medio de la escala 1–5: por encima, la dimensión se describe como «más». */
export const ATTACHMENT_MIDPOINT = 3;

export type TendencyBand = 'baja' | 'media' | 'alta';

export interface AttachmentScore {
  answered: number;
  complete: boolean;
  /** Media de 1 a 5 por dimensión (con invertidos ya corregidos); null si no hay respuestas. */
  means: Record<AttachmentDimension, number | null>;
  /** Cuadrante descriptivo; null hasta responder todo. */
  quadrant: AttachmentQuadrantId | null;
}

/** Puntaje de un ítem: invertidos = 6 − respuesta. Fuera de 1–5 o no entero: se ignora. */
export function itemScore(item: AttachmentItem, value: number): number | null {
  if (!Number.isInteger(value) || value < 1 || value > 5) return null;
  return item.reversed ? 6 - value : value;
}

export function quadrantOf(ansiedad: number, evitacion: number): AttachmentQuadrantId {
  const anx = ansiedad > ATTACHMENT_MIDPOINT;
  const avo = evitacion > ATTACHMENT_MIDPOINT;
  if (anx && avo) return 'temeroso';
  if (anx) return 'preocupado';
  if (avo) return 'evitativo';
  return 'seguro';
}

/** Banda descriptiva de una media: baja (< 2,5), media (2,5–3,5) o alta (> 3,5). */
export function tendencyBand(mean: number): TendencyBand {
  if (mean < 2.5) return 'baja';
  if (mean > 3.5) return 'alta';
  return 'media';
}

export function scoreAttachment(answers: Record<number, number>): AttachmentScore {
  const sums: Record<AttachmentDimension, { sum: number; n: number }> = { ansiedad: { sum: 0, n: 0 }, evitacion: { sum: 0, n: 0 } };
  for (const item of ATTACHMENT_ITEMS) {
    const v = answers[item.id];
    if (v === undefined) continue;
    const s = itemScore(item, v);
    if (s === null) continue;
    sums[item.dimension].sum += s;
    sums[item.dimension].n += 1;
  }
  const answered = sums.ansiedad.n + sums.evitacion.n;
  const means = {
    ansiedad: sums.ansiedad.n ? sums.ansiedad.sum / sums.ansiedad.n : null,
    evitacion: sums.evitacion.n ? sums.evitacion.sum / sums.evitacion.n : null,
  };
  const complete = answered === ATTACHMENT_ITEMS.length;
  const quadrant = complete && means.ansiedad !== null && means.evitacion !== null ? quadrantOf(means.ansiedad, means.evitacion) : null;
  return { answered, complete, means, quadrant };
}

/** Frase sobre una dimensión, sin etiquetar: «hoy aparece …». */
export function dimensionSentence(dim: AttachmentDimension, mean: number): string {
  const band = tendencyBand(mean);
  if (dim === 'ansiedad') {
    if (band === 'alta') return 'Hoy aparece bastante alarma ante la distancia o el silencio.';
    if (band === 'media') return 'Hoy aparece algo de alarma ante la distancia, según el momento.';
    return 'Hoy aparece poca alarma ante la distancia o el silencio.';
  }
  if (band === 'alta') return 'Hoy aparecen bastantes ganas de tomar distancia cuando hay mucha cercanía.';
  if (band === 'media') return 'Hoy aparece algo de incomodidad con la cercanía, según el momento.';
  return 'Hoy aparece bastante comodidad con la cercanía y con contar lo que sientes.';
}

/** Ids de prácticas y artículos que enlaza el ejercicio (el test comprueba que existan). */
export const ATTACHMENT_LINKED_PRACTICES = [...new Set(ATTACHMENT_QUADRANTS.flatMap((q) => q.practiceIds))];
export const ATTACHMENT_LINKED_ARTICLES = [...new Set(ATTACHMENT_QUADRANTS.flatMap((q) => q.articleIds))];

/** Títulos de los artículos enlazados (el componente no carga la biblioteca completa; el test los compara). */
export const ATTACHMENT_ARTICLE_TITLES: Record<string, string> = {
  'apego-adulto': 'Apego adulto: la alarma, el baile y la seguridad ganada',
  'mentalizar-en-pareja': 'Mentalizar en pareja',
};
