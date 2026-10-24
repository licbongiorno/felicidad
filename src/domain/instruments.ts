import type { InstrumentId, Reference } from './types';

/**
 * Instrumentos validados de autoinforme. Ninguno es diagnóstico: orientan y permiten
 * seguir la evolución. WHO-5, GAD-7, PHQ-9, DERS-16 y PSS-10 son de uso libre; el ISI
 * requiere licencia (ver governance.ts).
 *
 * - WHO-5 (bienestar, 0–100, más es mejor). Topp et al. (2015).
 * - GAD-7 (ansiedad, 0–21, más es peor). Spitzer et al. (2006).
 * - PHQ-9 (depresión, 0–27, más es peor). Kroenke et al. (2001). El ítem 9 pregunta por
 *   ideación suicida: cualquier respuesta > 0 activa el aviso de seguridad (riskItemIndex).
 * - DERS-16 (dificultades de regulación emocional, 16–80, más es peor). Bjureberg et al. (2016).
 * - ISI (insomnio, 0–28, más es peor). Bastien et al. (2001); Morin et al. (2011).
 * - PSS-10 (estrés percibido, 0–40, más es peor; 4 ítems invertidos). Cohen et al. (1983).
 * - SWLS (satisfacción con la vida, 5–35, más es mejor). Diener et al. (1985). Uso libre.
 * - AUDIT-C (consumo de alcohol, 0–12, más es peor). Bush et al. (1998), a partir del AUDIT de la OMS. Uso libre.
 * - Mini-IPIP (cinco grandes rasgos de personalidad, cada uno 4–20). Donnellan et al. (2006), con ítems del IPIP
 *   de dominio público. No mide síntomas: da un perfil (`traits`) y no una puntuación única.
 * - PCL-5 (síntomas de estrés postraumático, 0–80, más es peor). Weathers et al. (2013), National Center for PTSD;
 *   de dominio público.
 * - ASRS v1.1, cribado de 6 preguntas (TDAH en adultos, 0–6 respuestas en la zona sombreada, más es peor).
 *   Kessler et al. (2005). Uso libre con atribución y sin modificaciones: queda en borrador hasta usar la
 *   versión oficial en castellano (ver governance.ts).
 */

export interface Interpretation {
  band: string;
  title: string;
  body: string;
  /** Gravedad para presentar el resultado y decidir si se sugiere consultar. */
  severity: 'ok' | 'atencion' | 'alto';
}

export interface Instrument {
  id: InstrumentId;
  title: string;
  short: string;
  purpose: string;
  stem: string;
  /** Aviso que se muestra antes de las preguntas (p. ej. PCL-5: puedes parar si te desbordas). */
  intro?: string;
  items: string[];
  options: { value: number; label: string }[];
  /** Opciones distintas por ítem (p. ej. ISI); si falta, todos usan `options`. */
  itemOptions?: { value: number; label: string }[][];
  intervalDays: number;
  /** Puntuación mínima posible (0 si falta; DERS-16 empieza en 16). */
  minScore?: number;
  maxScore: number;
  higherIsBetter: boolean;
  /** Cambio mínimo considerado clínicamente relevante. */
  relevantChange: number;
  /** Índice del ítem de riesgo (0-based), si existe. */
  riskItemIndex?: number;
  score: (items: number[]) => number;
  interpret: (score: number) => Interpretation;
  /** Instrumentos de perfil (p. ej. Mini-IPIP): cada rasgo suma sus ítems y no hay puntuación única. */
  traits?: Trait[];
  references: Reference[];
}

export interface Trait {
  key: string;
  label: string;
  /** Ítems del rasgo (0-based). Los invertidos se puntúan 6 − respuesta (escala 1–5). */
  items: number[];
  reversed: number[];
  low: string;
  high: string;
}

export interface TraitScore {
  trait: Trait;
  score: number;
  min: number;
  max: number;
  band: 'bajo' | 'medio' | 'alto';
}

/** Puntaje de cada rasgo. Las franjas son orientativas: tercios del rango, no normas poblacionales. */
export function traitScores(instrument: Instrument, items: number[]): TraitScore[] {
  return (instrument.traits ?? []).map((trait) => {
    const score = trait.items.reduce((acc, i) => acc + (trait.reversed.includes(i) ? 6 - items[i] : items[i]), 0);
    const min = trait.items.length;
    const max = trait.items.length * 5;
    const third = (max - min) / 3;
    const band = score < min + third ? 'bajo' : score > max - third ? 'alto' : 'medio';
    return { trait, score, min, max, band };
  });
}

const sum = (xs: number[]) => xs.reduce((a, b) => a + b, 0);

const FREQ_0_3 = [
  { value: 0, label: 'Nunca' },
  { value: 1, label: 'Varios días' },
  { value: 2, label: 'Más de la mitad de los días' },
  { value: 3, label: 'Casi todos los días' },
];

// ---------------------------------------------------------------- WHO-5

export const WHO5: Instrument = {
  id: 'who5',
  title: 'Índice de Bienestar WHO-5',
  short: 'Bienestar',
  purpose: 'Bienestar general · 5 preguntas · 1 minuto',
  stem: 'Durante las últimas dos semanas…',
  items: [
    'Me he sentido alegre y de buen humor',
    'Me he sentido tranquilo/a y relajado/a',
    'Me he sentido activo/a y enérgico/a',
    'Me he despertado fresco/a y descansado/a',
    'Mi vida cotidiana ha estado llena de cosas que me interesan',
  ],
  options: [
    { value: 5, label: 'Todo el tiempo' },
    { value: 4, label: 'La mayor parte del tiempo' },
    { value: 3, label: 'Más de la mitad del tiempo' },
    { value: 2, label: 'Menos de la mitad del tiempo' },
    { value: 1, label: 'De vez en cuando' },
    { value: 0, label: 'Nunca' },
  ],
  intervalDays: 14,
  maxScore: 100,
  higherIsBetter: true,
  relevantChange: 10,
  score: (items) => sum(items) * 4,
  interpret: (score) => interpretWho5(score),
  references: [
    {
      citation:
        'Topp, C. W., Østergaard, S. D., Søndergaard, S., & Bech, P. (2015). The WHO-5 Well-Being Index: A systematic review of the literature. Psychotherapy and Psychosomatics, 84(3), 167–176.',
      doi: '10.1159/000376585',
    },
  ],
};

export const WHO5_RELEVANT_CHANGE = 10;

export function scoreWho5(items: number[]): number {
  return sum(items) * 4;
}

export type Who5Band = 'bueno' | 'bajo' | 'muy-bajo';

export function interpretWho5(score: number): Interpretation & { band: Who5Band } {
  if (score <= 28) {
    return {
      band: 'muy-bajo',
      severity: 'alto',
      title: 'Bienestar muy bajo',
      body: 'Esta puntuación es frecuente en personas que atraviesan una depresión. No es un diagnóstico, pero sí una buena razón para hablarlo con un profesional de la salud mental, si no lo estás haciendo ya.',
    };
  }
  if (score < 50) {
    return {
      band: 'bajo',
      severity: 'atencion',
      title: 'Bienestar bajo',
      body: 'Tu bienestar de las últimas dos semanas está por debajo del rango habitual. Puede ser algo pasajero; si se mantiene en las próximas evaluaciones, conviene comentarlo con un profesional de la salud mental.',
    };
  }
  return {
    band: 'bueno',
    severity: 'ok',
    title: 'Bienestar en rango habitual',
    body: 'Tu puntuación está dentro del rango esperable. Lo más útil ahora es observar la tendencia a lo largo de varias evaluaciones.',
  };
}

/** Compara con la evaluación previa usando el umbral de cambio relevante del instrumento. */
export function compareScores(instrument: Instrument, current: number, previous: number | undefined) {
  if (previous === undefined) return null;
  const delta = current - previous;
  const relevant = Math.abs(delta) >= instrument.relevantChange;
  const better = instrument.higherIsBetter ? delta > 0 : delta < 0;
  return { delta, relevant, label: !relevant ? 'Sin cambio relevante' : better ? 'Mejora relevante' : 'Empeoramiento relevante' };
}

export function compareWho5(current: number, previous: number | undefined) {
  const r = compareScores(WHO5, current, previous);
  return r && { ...r, label: r.label === 'Empeoramiento relevante' ? 'Descenso relevante' : r.label };
}

// ---------------------------------------------------------------- GAD-7

export const GAD7: Instrument = {
  id: 'gad7',
  title: 'Cuestionario de ansiedad GAD-7',
  short: 'Ansiedad',
  purpose: 'Síntomas de ansiedad · 7 preguntas · 2 minutos',
  stem: 'Durante las últimas dos semanas, ¿con qué frecuencia te han molestado estos problemas?',
  items: [
    'Sentirte nervioso/a, ansioso/a o con los nervios de punta',
    'No poder dejar de preocuparte o no poder controlar la preocupación',
    'Preocuparte demasiado por diferentes cosas',
    'Dificultad para relajarte',
    'Estar tan inquieto/a que es difícil permanecer sentado/a tranquilamente',
    'Molestarte o irritarte fácilmente',
    'Sentir miedo, como si algo terrible pudiera pasar',
  ],
  options: FREQ_0_3,
  intervalDays: 14,
  maxScore: 21,
  higherIsBetter: false,
  relevantChange: 4,
  score: sum,
  interpret: (score) => {
    if (score >= 15)
      return { band: 'grave', severity: 'alto', title: 'Ansiedad grave', body: 'Esta puntuación indica síntomas de ansiedad intensos. No es un diagnóstico, pero te recomendamos consultar con un profesional de la salud mental: la ansiedad tiene tratamientos eficaces.' };
    if (score >= 10)
      return { band: 'moderada', severity: 'atencion', title: 'Ansiedad moderada', body: 'A partir de 10 puntos se recomienda una evaluación profesional. Mientras tanto, las prácticas de respiración, el tiempo de preocupación y el programa «Calma ante la ansiedad» pueden ayudarte.' };
    if (score >= 5)
      return { band: 'leve', severity: 'ok', title: 'Ansiedad leve', body: 'Hay algunos síntomas de ansiedad. Observa cómo evolucionan en las próximas evaluaciones; las herramientas de la app pueden ayudarte a manejarlos.' };
    return { band: 'minima', severity: 'ok', title: 'Ansiedad mínima', body: 'Tus síntomas de ansiedad de las últimas dos semanas son mínimos.' };
  },
  references: [
    {
      citation: 'Spitzer, R. L., Kroenke, K., Williams, J. B. W., & Löwe, B. (2006). A brief measure for assessing generalized anxiety disorder: The GAD-7. Archives of Internal Medicine, 166(10), 1092–1097.',
      doi: '10.1001/archinte.166.10.1092',
    },
    {
      citation:
        'Toussaint, A., Hüsing, P., Gumz, A., et al. (2020). Sensitivity to change and minimal clinically important difference of the 7-item Generalized Anxiety Disorder Questionnaire (GAD-7). Journal of Affective Disorders, 265, 395–401.',
      doi: '10.1016/j.jad.2020.01.032',
      note: 'Fuente del umbral de cambio relevante (≈4 puntos).',
    },
  ],
};

// ---------------------------------------------------------------- PHQ-9

export const PHQ9: Instrument = {
  id: 'phq9',
  title: 'Cuestionario de salud del paciente PHQ-9',
  short: 'Ánimo',
  purpose: 'Síntomas depresivos · 9 preguntas · 3 minutos',
  stem: 'Durante las últimas dos semanas, ¿con qué frecuencia te han molestado estos problemas?',
  items: [
    'Poco interés o placer en hacer cosas',
    'Sentirte decaído/a, deprimido/a o sin esperanza',
    'Dificultad para dormir o mantenerte dormido/a, o dormir demasiado',
    'Sentirte cansado/a o con poca energía',
    'Poco apetito o comer en exceso',
    'Sentirte mal contigo mismo/a, o que eres un fracaso o que has decepcionado a tu familia o a ti',
    'Dificultad para concentrarte en cosas como leer o ver la televisión',
    'Moverte o hablar tan despacio que otras personas lo han notado, o lo contrario: estar tan inquieto/a que te mueves mucho más de lo habitual',
    'Pensamientos de que estarías mejor muerto/a o de hacerte daño de alguna manera',
  ],
  options: FREQ_0_3,
  intervalDays: 14,
  maxScore: 27,
  higherIsBetter: false,
  relevantChange: 5,
  riskItemIndex: 8,
  score: sum,
  interpret: (score) => {
    if (score >= 20)
      return { band: 'grave', severity: 'alto', title: 'Síntomas depresivos graves', body: 'Esta puntuación indica síntomas intensos. Te recomendamos consultar pronto con un profesional de la salud mental: la depresión tiene tratamientos eficaces.' };
    if (score >= 15)
      return { band: 'moderadamente-grave', severity: 'alto', title: 'Síntomas depresivos moderadamente graves', body: 'Te recomendamos consultar con un profesional de la salud mental para una evaluación.' };
    if (score >= 10)
      return { band: 'moderada', severity: 'atencion', title: 'Síntomas depresivos moderados', body: 'A partir de 10 puntos se recomienda una evaluación profesional. El programa «Salir del desánimo» puede ser un buen complemento.' };
    if (score >= 5)
      return { band: 'leve', severity: 'ok', title: 'Síntomas depresivos leves', body: 'Hay algunos síntomas. Observa su evolución en las próximas evaluaciones.' };
    return { band: 'minima', severity: 'ok', title: 'Síntomas mínimos', body: 'Tus síntomas depresivos de las últimas dos semanas son mínimos.' };
  },
  references: [
    {
      citation: 'Kroenke, K., Spitzer, R. L., & Williams, J. B. W. (2001). The PHQ-9: Validity of a brief depression severity measure. Journal of General Internal Medicine, 16(9), 606–613.',
      doi: '10.1046/j.1525-1497.2001.016009606.x',
    },
    {
      citation: 'Löwe, B., Unützer, J., Callahan, C. M., Perkins, A. J., & Kroenke, K. (2004). Monitoring depression treatment outcomes with the Patient Health Questionnaire-9. Medical Care, 42(12), 1194–1201.',
      doi: '10.1097/00005650-200412000-00006',
      note: 'Fuente del umbral de cambio relevante (5 puntos).',
    },
  ],
};

// ---------------------------------------------------------------- DERS-16

const DERS_OPTIONS = [
  { value: 1, label: 'Casi nunca' },
  { value: 2, label: 'A veces' },
  { value: 3, label: 'La mitad de las veces' },
  { value: 4, label: 'La mayoría de las veces' },
  { value: 5, label: 'Casi siempre' },
];

export const DERS16: Instrument = {
  id: 'ders16',
  title: 'Escala de dificultades en la regulación emocional DERS-16',
  short: 'Regulación emocional',
  purpose: 'Dificultades para manejar las emociones · 16 preguntas · 3 minutos',
  stem: '¿Con qué frecuencia te pasan estas cosas?',
  items: [
    'Me cuesta entender lo que siento',
    'Estoy confundido/a sobre cómo me siento',
    'Cuando estoy mal, me cuesta hacer mis tareas',
    'Cuando estoy mal, pierdo el control',
    'Cuando estoy mal, creo que voy a seguir así mucho tiempo',
    'Cuando estoy mal, creo que voy a terminar muy deprimido/a',
    'Cuando estoy mal, me cuesta concentrarme en otras cosas',
    'Cuando estoy mal, siento que estoy fuera de control',
    'Cuando estoy mal, me avergüenzo de sentirme así',
    'Cuando estoy mal, me siento débil',
    'Cuando estoy mal, me cuesta controlar lo que hago',
    'Cuando estoy mal, creo que no hay nada que pueda hacer para sentirme mejor',
    'Cuando estoy mal, me enfado conmigo mismo/a por sentirme así',
    'Cuando estoy mal, empiezo a sentirme muy mal conmigo mismo/a',
    'Cuando estoy mal, me cuesta pensar en otra cosa',
    'Cuando estoy mal, mis emociones me desbordan',
  ],
  options: DERS_OPTIONS,
  intervalDays: 14,
  minScore: 16,
  maxScore: 80,
  higherIsBetter: false,
  // No hay un cambio mínimo clínicamente relevante publicado: valor orientativo (≈ 10 % del rango).
  relevantChange: 7,
  score: sum,
  interpret: (score) => {
    if (score >= 59)
      return { band: 'alta', severity: 'alto', title: 'Muchas dificultades para regular las emociones', body: 'Tu puntuación está en el tercio alto de la escala. Las emociones parecen desbordarte a menudo. No es un diagnóstico, pero vale la pena hablarlo con un profesional de la salud mental: la terapia dialéctico-conductual trabaja justo esto.' };
    if (score >= 38)
      return { band: 'media', severity: 'atencion', title: 'Algunas dificultades para regular las emociones', body: 'Tu puntuación está en el tercio medio de la escala. Las habilidades DBT de la app pueden ayudarte. Observa cómo evoluciona en las próximas evaluaciones.' };
    return { band: 'baja', severity: 'ok', title: 'Pocas dificultades para regular las emociones', body: 'Tu puntuación está en el tercio bajo de la escala. Lo más útil ahora es observar la tendencia a lo largo del tiempo.' };
  },
  references: [
    {
      citation:
        'Bjureberg, J., Ljótsson, B., Tull, M. T., Hedman, E., Sahlin, H., Lundh, L.-G., Bjärehed, J., DiLillo, D., Messman-Moore, T., Gumpert, C. H., & Gratz, K. L. (2016). Development and validation of a brief version of the Difficulties in Emotion Regulation Scale: The DERS-16. Journal of Psychopathology and Behavioral Assessment, 38(2), 284–296.',
      doi: '10.1007/s10862-015-9514-x',
    },
    {
      citation:
        'Gratz, K. L., & Roemer, L. (2004). Multidimensional assessment of emotion regulation and dysregulation: Development, factor structure, and initial validation of the Difficulties in Emotion Regulation Scale. Journal of Psychopathology and Behavioral Assessment, 26(1), 41–54.',
      doi: '10.1023/B:JOBA.0000007455.08539.94',
      note: 'Escala original de 36 ítems. Las franjas de la app dividen el rango en tercios: no hay puntos de corte clínicos establecidos.',
    },
  ],
};

// ---------------------------------------------------------------- ISI

const SEVERITY_0_4 = [
  { value: 0, label: 'Nada' },
  { value: 1, label: 'Leve' },
  { value: 2, label: 'Moderado' },
  { value: 3, label: 'Grave' },
  { value: 4, label: 'Muy grave' },
];
const MUCH_0_4 = [
  { value: 0, label: 'Nada' },
  { value: 1, label: 'Un poco' },
  { value: 2, label: 'Algo' },
  { value: 3, label: 'Bastante' },
  { value: 4, label: 'Mucho' },
];

export const ISI: Instrument = {
  id: 'isi',
  title: 'Índice de gravedad del insomnio ISI',
  short: 'Sueño',
  purpose: 'Gravedad del insomnio · 7 preguntas · 2 minutos',
  stem: 'Piensa en tu sueño de las últimas dos semanas.',
  items: [
    '¿Cuánta dificultad tienes para quedarte dormido/a?',
    '¿Cuánta dificultad tienes para seguir dormido/a durante la noche?',
    '¿Cuánto te molesta despertarte demasiado temprano?',
    '¿Cuánta insatisfacción te produce tu forma de dormir actual?',
    '¿Cuánto notan los demás que tu problema de sueño afecta tu calidad de vida?',
    '¿Cuánto te preocupa o te angustia tu problema de sueño?',
    '¿Cuánto interfiere tu problema de sueño con tu día a día (cansancio, ánimo, concentración, memoria)?',
  ],
  options: MUCH_0_4,
  itemOptions: [SEVERITY_0_4, SEVERITY_0_4, SEVERITY_0_4, MUCH_0_4, MUCH_0_4, MUCH_0_4, MUCH_0_4],
  intervalDays: 14,
  maxScore: 28,
  higherIsBetter: false,
  relevantChange: 8,
  score: sum,
  interpret: (score) => {
    if (score >= 22)
      return { band: 'grave', severity: 'alto', title: 'Insomnio grave', body: 'Esta puntuación indica un insomnio clínico grave. No es un diagnóstico, pero te recomendamos consultar con un profesional de la salud: la terapia cognitivo-conductual para el insomnio es el tratamiento de primera elección.' };
    if (score >= 15)
      return { band: 'moderado', severity: 'atencion', title: 'Insomnio moderado', body: 'Esta puntuación indica un insomnio clínico moderado. Conviene consultarlo con un profesional de la salud. El programa «Dormir mejor» puede ser un buen complemento.' };
    if (score >= 8)
      return { band: 'subumbral', severity: 'ok', title: 'Insomnio leve (subclínico)', body: 'Hay algunas dificultades de sueño, por debajo del umbral clínico. El diario de sueño y el programa «Dormir mejor» pueden ayudarte.' };
    return { band: 'sin-insomnio', severity: 'ok', title: 'Sin insomnio clínicamente significativo', body: 'Tu sueño de las últimas dos semanas no muestra un insomnio relevante.' };
  },
  references: [
    {
      citation: 'Bastien, C. H., Vallières, A., & Morin, C. M. (2001). Validation of the Insomnia Severity Index as an outcome measure for insomnia research. Sleep Medicine, 2(4), 297–307.',
      doi: '10.1016/S1389-9457(00)00065-4',
    },
    {
      citation:
        'Morin, C. M., Belleville, G., Bélanger, L., & Ivers, H. (2011). The Insomnia Severity Index: Psychometric indicators to detect insomnia cases and evaluate treatment response. Sleep, 34(5), 601–608.',
      doi: '10.1093/sleep/34.5.601',
      note: 'Fuente del cambio relevante (una reducción de 8 puntos equivale a una mejoría moderada).',
    },
  ],
};

// ---------------------------------------------------------------- PSS-10

/** Ítems de la PSS-10 que se puntúan al revés (0-based): 4, 5, 7 y 8 en la numeración original. */
export const PSS10_REVERSED = [3, 4, 6, 7];

export const PSS10: Instrument = {
  id: 'pss10',
  title: 'Escala de estrés percibido PSS-10',
  short: 'Estrés',
  purpose: 'Estrés percibido · 10 preguntas · 2 minutos',
  stem: 'En el último mes, ¿con qué frecuencia…',
  items: [
    '…te has sentido afectado/a por algo que pasó de forma inesperada?',
    '…has sentido que no podías controlar las cosas importantes de tu vida?',
    '…te has sentido nervioso/a o estresado/a?',
    '…has sentido confianza en tu capacidad para manejar tus problemas personales?',
    '…has sentido que las cosas te iban bien?',
    '…has sentido que no podías con todo lo que tenías que hacer?',
    '…has podido controlar lo que te irrita en la vida?',
    '…has sentido que tenías todo bajo control?',
    '…te has enfadado por cosas que no podías controlar?',
    '…has sentido que las dificultades se acumulaban tanto que no podías superarlas?',
  ],
  options: [
    { value: 0, label: 'Nunca' },
    { value: 1, label: 'Casi nunca' },
    { value: 2, label: 'A veces' },
    { value: 3, label: 'Bastante a menudo' },
    { value: 4, label: 'Muy a menudo' },
  ],
  intervalDays: 30,
  maxScore: 40,
  higherIsBetter: false,
  // No hay un cambio mínimo clínicamente relevante publicado: valor orientativo (≈ 10 % del rango).
  relevantChange: 4,
  score: (items) => sum(items.map((v, i) => (PSS10_REVERSED.includes(i) ? 4 - v : v))),
  interpret: (score) => {
    if (score >= 27)
      return { band: 'alto', severity: 'alto', title: 'Estrés percibido alto', body: 'Tu puntuación está en el tercio alto de la escala. Sientes que las exigencias superan tus recursos. Si se mantiene, conviene hablarlo con un profesional de la salud mental. El programa «Estrés y agotamiento» puede ayudarte.' };
    if (score >= 14)
      return { band: 'moderado', severity: 'atencion', title: 'Estrés percibido moderado', body: 'Tu puntuación está en el tercio medio de la escala. Las pausas breves y la resolución de problemas pueden ayudarte a recuperar margen.' };
    return { band: 'bajo', severity: 'ok', title: 'Estrés percibido bajo', body: 'Tu puntuación está en el tercio bajo de la escala. Sientes, en general, que puedes con lo que te pide la vida.' };
  },
  references: [
    {
      citation: 'Cohen, S., Kamarck, T., & Mermelstein, R. (1983). A global measure of perceived stress. Journal of Health and Social Behavior, 24(4), 385–396.',
      doi: '10.2307/2136404',
    },
    {
      citation: 'Remor, E. (2006). Psychometric properties of a European Spanish version of the Perceived Stress Scale (PSS). The Spanish Journal of Psychology, 9(1), 86–93.',
      doi: '10.1017/S1138741600006004',
      note: 'Versión española. Las franjas de la app dividen el rango en tercios: la escala no tiene puntos de corte oficiales.',
    },
  ],
};

// ---------------------------------------------------------------- SWLS

export const SWLS: Instrument = {
  id: 'swls',
  title: 'Escala de satisfacción con la vida (SWLS)',
  short: 'Satisfacción',
  purpose: 'Satisfacción con la vida · 5 preguntas · 1 minuto',
  stem: '¿Cuánto estás de acuerdo con cada frase?',
  items: [
    'En la mayoría de los aspectos, mi vida es como quiero que sea.',
    'Las circunstancias de mi vida son muy buenas.',
    'Estoy satisfecho/a con mi vida.',
    'Hasta ahora he conseguido las cosas importantes que quiero en la vida.',
    'Si pudiera vivir mi vida otra vez, no cambiaría casi nada.',
  ],
  options: [
    { value: 1, label: 'Totalmente en desacuerdo' },
    { value: 2, label: 'En desacuerdo' },
    { value: 3, label: 'Algo en desacuerdo' },
    { value: 4, label: 'Ni de acuerdo ni en desacuerdo' },
    { value: 5, label: 'Algo de acuerdo' },
    { value: 6, label: 'De acuerdo' },
    { value: 7, label: 'Totalmente de acuerdo' },
  ],
  intervalDays: 30,
  minScore: 5,
  maxScore: 35,
  higherIsBetter: true,
  // No hay un cambio mínimo publicado: valor orientativo (≈ 10 % del rango).
  relevantChange: 3,
  score: sum,
  interpret: (score) => {
    if (score >= 26) return { band: 'satisfecho', severity: 'ok', title: 'Satisfacción alta con tu vida', body: 'Sientes que tu vida, en general, va como quieres. No significa que todo esté bien: es una mirada de conjunto.' };
    if (score >= 21) return { band: 'algo-satisfecho', severity: 'ok', title: 'Satisfacción media-alta', body: 'Hay más cosas que te conforman que cosas que no. Mirar tus valores puede ayudarte a ver qué área te gustaría mejorar.' };
    if (score >= 15)
      return { band: 'algo-insatisfecho', severity: 'atencion', title: 'Satisfacción media-baja', body: 'Hay áreas de tu vida que no van como quisieras. El programa «Vivir mis valores» puede ayudarte a elegir por dónde empezar.' };
    return {
      band: 'insatisfecho',
      severity: 'alto',
      title: 'Satisfacción baja con tu vida',
      body: 'Sientes que tu vida está lejos de como la quieres. Si esto se mantiene o te pesa mucho, conviene hablarlo con un profesional de la salud mental.',
    };
  },
  references: [
    { citation: 'Diener, E., Emmons, R. A., Larsen, R. J., & Griffin, S. (1985). The Satisfaction With Life Scale. Journal of Personality Assessment, 49(1), 71–75.', doi: '10.1207/s15327752jpa4901_13' },
    {
      citation: 'Pavot, W., & Diener, E. (1993). Review of the Satisfaction With Life Scale. Psychological Assessment, 5(2), 164–172.',
      doi: '10.1037/1040-3590.5.2.164',
      note: 'Las franjas de la app agrupan los rangos descriptivos de este trabajo; no son puntos de corte clínicos.',
    },
  ],
};

// ---------------------------------------------------------------- AUDIT-C

export const AUDITC: Instrument = {
  id: 'auditc',
  title: 'Consumo de alcohol AUDIT-C',
  short: 'Alcohol',
  purpose: 'Consumo de alcohol · 3 preguntas · 1 minuto',
  stem: 'Pensando en el último año… (un trago es una lata de cerveza, una copa de vino o una medida de bebida blanca)',
  items: ['¿Con qué frecuencia tomas alguna bebida con alcohol?', '¿Cuántos tragos tomas en un día típico en que tomas?', '¿Con qué frecuencia tomas seis tragos o más en una misma ocasión?'],
  options: [],
  itemOptions: [
    [
      { value: 0, label: 'Nunca' },
      { value: 1, label: 'Una vez al mes o menos' },
      { value: 2, label: 'De 2 a 4 veces al mes' },
      { value: 3, label: 'De 2 a 3 veces por semana' },
      { value: 4, label: '4 o más veces por semana' },
    ],
    [
      { value: 0, label: '1 o 2' },
      { value: 1, label: '3 o 4' },
      { value: 2, label: '5 o 6' },
      { value: 3, label: 'De 7 a 9' },
      { value: 4, label: '10 o más' },
    ],
    [
      { value: 0, label: 'Nunca' },
      { value: 1, label: 'Menos de una vez al mes' },
      { value: 2, label: 'Una vez al mes' },
      { value: 3, label: 'Una vez por semana' },
      { value: 4, label: 'A diario o casi a diario' },
    ],
  ],
  intervalDays: 90,
  maxScore: 12,
  higherIsBetter: false,
  relevantChange: 2,
  score: sum,
  interpret: (score) => {
    if (score >= 8)
      return {
        band: 'alto',
        severity: 'alto',
        title: 'Consumo de alto riesgo',
        body: 'Tu consumo puede estar dañando tu salud. Conviene consultar a un profesional de la salud. Si tomas todos los días, no dejes de golpe: dejar de golpe puede ser peligroso. Pide ayuda para hacerlo con cuidado. Línea 141 de SEDRONAR: gratuita, anónima y las 24 horas.',
      };
    if (score >= 3)
      return {
        band: 'riesgo',
        severity: 'atencion',
        title: 'Posible consumo de riesgo',
        body: 'Tu puntuación sugiere un consumo que conviene revisar (el punto de corte habitual es 3 en mujeres y 4 en varones). La práctica «Balance del alcohol» y un plan de menor riesgo pueden ayudarte. Si te cuesta reducirlo, consulta.',
      };
    return { band: 'bajo', severity: 'ok', title: 'Consumo de bajo riesgo', body: 'Tu consumo está por debajo del punto de corte habitual. Ningún consumo es del todo sin riesgo, y menos es mejor para la salud.' };
  },
  references: [
    {
      citation:
        'Bush, K., Kivlahan, D. R., McDonell, M. B., Fihn, S. D., & Bradley, K. A. (1998). The AUDIT alcohol consumption questions (AUDIT-C): An effective brief screening test for problem drinking. Archives of Internal Medicine, 158(16), 1789–1795.',
      doi: '10.1001/archinte.158.16.1789',
    },
    {
      citation: 'Babor, T. F., Higgins-Biddle, J. C., Saunders, J. B., & Monteiro, M. G. (2001). AUDIT: The Alcohol Use Disorders Identification Test. Guidelines for use in primary care (2nd ed.). World Health Organization.',
      note: 'Instrumento de la OMS de uso libre. La versión AUDIT-C usa las tres primeras preguntas.',
    },
  ],
};

// ---------------------------------------------------------------- Mini-IPIP

export const BIGFIVE: Instrument = {
  id: 'bigfive',
  title: 'Cinco grandes rasgos de personalidad (Mini-IPIP)',
  short: 'Personalidad',
  purpose: 'Rasgos de personalidad · 20 frases · 4 minutos',
  stem: '¿Cuánto te describe cada frase? Piensa en cómo eres en general, no en cómo te gustaría ser.',
  items: [
    'Soy el alma de las reuniones.',
    'Comprendo lo que sienten los demás.',
    'Hago las tareas enseguida.',
    'Mi humor cambia seguido.',
    'Tengo una imaginación muy viva.',
    'No hablo mucho.',
    'No me interesan los problemas de otras personas.',
    'Seguido me olvido de guardar las cosas en su lugar.',
    'Casi siempre me siento en calma.',
    'No me interesan las ideas abstractas.',
    'En las reuniones hablo con muchas personas distintas.',
    'Siento las emociones de los demás.',
    'Me gusta el orden.',
    'Me altero con facilidad.',
    'Me cuesta entender las ideas abstractas.',
    'Me quedo en segundo plano.',
    'En el fondo, no me interesan mucho los demás.',
    'Dejo las cosas hechas un desorden.',
    'Pocas veces me siento triste.',
    'No tengo mucha imaginación.',
  ],
  options: [
    { value: 1, label: 'Nada' },
    { value: 2, label: 'Poco' },
    { value: 3, label: 'Algo' },
    { value: 4, label: 'Bastante' },
    { value: 5, label: 'Mucho' },
  ],
  // La personalidad cambia poco: no tiene sentido repetirlo seguido.
  intervalDays: 180,
  maxScore: 0,
  higherIsBetter: true,
  relevantChange: 0,
  // No hay puntuación única: se guarda 0 y el perfil se calcula de los ítems (traitScores).
  score: () => 0,
  interpret: () => ({
    band: 'perfil',
    severity: 'ok',
    title: 'Tu perfil de cinco rasgos',
    body: 'Ningún rasgo es mejor o peor: cada uno tiene ventajas y costos según la situación. Es una foto de cómo te ves hoy, no un diagnóstico.',
  }),
  traits: [
    {
      key: 'extraversion',
      label: 'Extraversión',
      items: [0, 5, 10, 15],
      reversed: [5, 15],
      low: 'Prefieres grupos chicos y momentos tranquilos. Recargas energía a solas.',
      high: 'Te entusiasma estar con gente y hablar. Recargas energía en compañía.',
    },
    {
      key: 'amabilidad',
      label: 'Amabilidad',
      items: [1, 6, 11, 16],
      reversed: [6, 16],
      low: 'Dices tus opiniones de forma directa y priorizas tus metas.',
      high: 'Te importa mucho lo que sienten los demás y buscas la armonía.',
    },
    {
      key: 'responsabilidad',
      label: 'Responsabilidad',
      items: [2, 7, 12, 17],
      reversed: [7, 17],
      low: 'Te mueves con flexibilidad y espontaneidad, aunque el orden te cuesta más.',
      high: 'Te gusta el orden y cumples lo que planeas.',
    },
    {
      key: 'neuroticismo',
      label: 'Sensibilidad al malestar (neuroticismo)',
      items: [3, 8, 13, 18],
      reversed: [8, 18],
      low: 'Las emociones difíciles te llegan con menos fuerza y se te pasan rápido.',
      high: 'Sientes con intensidad la tristeza, el miedo o el enojo. Las habilidades de regulación pueden ayudarte.',
    },
    {
      key: 'imaginacion',
      label: 'Imaginación e intelecto (apertura)',
      items: [4, 9, 14, 19],
      reversed: [9, 14, 19],
      low: 'Prefieres lo concreto, lo práctico y lo conocido.',
      high: 'Disfrutas de las ideas nuevas, la fantasía y lo abstracto.',
    },
  ],
  references: [
    {
      citation:
        'Donnellan, M. B., Oswald, F. L., Baird, B. M., & Lucas, R. E. (2006). The Mini-IPIP scales: Tiny-yet-effective measures of the Big Five factors of personality. Psychological Assessment, 18(2), 192–203.',
      doi: '10.1037/1040-3590.18.2.192',
      note: 'Traducción propia al castellano, no validada. Las franjas bajo, medio y alto son tercios del rango, no normas poblacionales.',
    },
    {
      citation:
        'Goldberg, L. R. (1999). A broad-bandwidth, public domain, personality inventory measuring the lower-level facets of several five-factor models. En I. Mervielde, I. Deary, F. De Fruyt y F. Ostendorf (Eds.), Personality Psychology in Europe (Vol. 7, pp. 7–28). Tilburg University Press.',
      note: 'Los ítems del IPIP son de dominio público.',
    },
  ],
};

// ---------------------------------------------------------------- PCL-5

export const PCL5: Instrument = {
  id: 'pcl5',
  title: 'Lista de síntomas de estrés postraumático (PCL-5)',
  short: 'Estrés postraumático',
  purpose: 'Síntomas después de una experiencia muy difícil · 20 preguntas · 5 minutos',
  stem: 'Piensa en la experiencia más estresante que viviste. En el último mes, ¿cuánto te molestó cada uno de estos problemas?',
  intro:
    'No hace falta que escribas ni cuentes qué pasó. Si al responder te desbordas, puedes parar cuando quieras y volver más tarde. Si necesitas hablar con alguien ahora, usa el botón Ayuda.',
  items: [
    'Recuerdos repetidos, perturbadores y no deseados de esa experiencia.',
    'Sueños repetidos y perturbadores sobre esa experiencia.',
    'Sentir o actuar de repente como si esa experiencia estuviera pasando otra vez, como si volvieras a vivirla.',
    'Sentirte muy mal cuando algo te recordó esa experiencia.',
    'Tener reacciones fuertes en el cuerpo cuando algo te recordó esa experiencia, como palpitaciones, falta de aire o sudor.',
    'Evitar recuerdos, pensamientos o sentimientos relacionados con esa experiencia.',
    'Evitar lo que te la recuerda: personas, lugares, conversaciones, actividades, objetos o situaciones.',
    'Dificultad para recordar partes importantes de esa experiencia.',
    'Creencias muy negativas sobre ti, los demás o el mundo. Por ejemplo: «hay algo mal en mí», «no se puede confiar en nadie», «el mundo es muy peligroso».',
    'Culparte a ti o a otra persona por esa experiencia o por lo que pasó después.',
    'Sentimientos negativos fuertes, como miedo, horror, enojo, culpa o vergüenza.',
    'Perder el interés en actividades que antes disfrutabas.',
    'Sentir distancia o desconexión de otras personas.',
    'Dificultad para sentir emociones positivas, como alegría o cariño por las personas cercanas.',
    'Irritabilidad, arranques de enojo o actuar de forma agresiva.',
    'Correr demasiados riesgos o hacer cosas que podrían dañarte.',
    'Estar en alerta, vigilante o en guardia todo el tiempo.',
    'Sobresaltarte o asustarte con facilidad.',
    'Dificultad para concentrarte.',
    'Dificultad para dormirte o para seguir durmiendo.',
  ],
  options: [
    { value: 0, label: 'Nada' },
    { value: 1, label: 'Un poco' },
    { value: 2, label: 'Moderadamente' },
    { value: 3, label: 'Bastante' },
    { value: 4, label: 'Muchísimo' },
  ],
  intervalDays: 30,
  maxScore: 80,
  higherIsBetter: false,
  // El National Center for PTSD considera clínicamente significativo un cambio de 10 a 20 puntos.
  relevantChange: 10,
  score: sum,
  interpret: (score) => {
    if (score >= 33)
      return {
        band: 'probable',
        severity: 'alto',
        title: 'Síntomas de estrés postraumático intensos',
        body: 'Tu puntuación está por encima del punto de corte habitual (31 a 33). No es un diagnóstico, pero conviene consultar con un profesional de salud mental. El estrés postraumático tiene tratamientos eficaces, como la terapia cognitiva centrada en el trauma.',
      };
    if (score >= 20)
      return {
        band: 'moderado',
        severity: 'atencion',
        title: 'Algunos síntomas después de una experiencia difícil',
        body: 'Hay síntomas presentes, aunque por debajo del punto de corte. Si te molestan en el día a día o no bajan con el tiempo, vale la pena consultar. Las prácticas para calmar el cuerpo pueden ayudarte mientras tanto.',
      };
    return {
      band: 'bajo',
      severity: 'ok',
      title: 'Pocos síntomas en el último mes',
      body: 'Tus respuestas muestran pocos síntomas de estrés postraumático. Si algo de esa experiencia todavía te pesa, puedes hablarlo con alguien de confianza o con un profesional.',
    };
  },
  references: [
    {
      citation: 'Weathers, F. W., Litz, B. T., Keane, T. M., Palmieri, P. A., Marx, B. P., & Schnurr, P. P. (2013). The PTSD Checklist for DSM-5 (PCL-5). National Center for PTSD.',
      note: 'Instrumento de dominio público. Traducción propia al castellano, no validada.',
    },
    {
      citation:
        'Blevins, C. A., Weathers, F. W., Davis, M. T., Witte, T. K., & Domino, J. L. (2015). The Posttraumatic Stress Disorder Checklist for DSM-5 (PCL-5): Development and initial psychometric evaluation. Journal of Traumatic Stress, 28(6), 489–498.',
      doi: '10.1002/jts.22059',
    },
    {
      citation:
        'Bovin, M. J., Marx, B. P., Weathers, F. W., Gallagher, M. W., Rodriguez, P., Schnurr, P. P., & Keane, T. M. (2016). Psychometric properties of the PTSD Checklist for Diagnostic and Statistical Manual of Mental Disorders–Fifth Edition (PCL-5) in veterans. Psychological Assessment, 28(11), 1379–1391.',
      doi: '10.1037/pas0000254',
      note: 'Fuente del punto de corte de 31 a 33. La franja de 20 a 32 es orientativa.',
    },
  ],
};

// ---------------------------------------------------------------- ASRS v1.1 (cribado de 6 preguntas)

/** Respuesta mínima que cae en la zona sombreada de cada ítem: «A veces» en los tres primeros, «A menudo» en los demás. */
export const ASRS_SHADED_FROM = [2, 2, 2, 3, 3, 3];

export const ASRS: Instrument = {
  id: 'asrs',
  title: 'Cribado de TDAH en adultos (ASRS v1.1)',
  short: 'TDAH',
  purpose: 'Atención e inquietud en adultos · 6 preguntas · 2 minutos',
  stem: 'Pensando en los últimos seis meses, ¿con qué frecuencia te pasa lo siguiente?',
  items: [
    '¿Con qué frecuencia te cuesta terminar los detalles finales de un proyecto, una vez hechas las partes difíciles?',
    '¿Con qué frecuencia te cuesta ordenar las cosas cuando haces una tarea que requiere organización?',
    '¿Con qué frecuencia tienes problemas para recordar citas u obligaciones?',
    'Cuando tienes una tarea que exige pensar mucho, ¿con qué frecuencia la evitas o demoras en empezarla?',
    '¿Con qué frecuencia mueves las manos o los pies, o te retuerces, cuando tienes que pasar mucho tiempo en una silla?',
    '¿Con qué frecuencia sientes demasiada energía y la necesidad de hacer cosas, como si te moviera un motor?',
  ],
  options: [
    { value: 0, label: 'Nunca' },
    { value: 1, label: 'Rara vez' },
    { value: 2, label: 'A veces' },
    { value: 3, label: 'A menudo' },
    { value: 4, label: 'Muy a menudo' },
  ],
  intervalDays: 180,
  maxScore: 6,
  higherIsBetter: false,
  relevantChange: 2,
  // Puntuación del cribado: cuántas respuestas caen en la zona sombreada (Kessler et al., 2005).
  score: (items) => items.reduce((acc, v, i) => acc + (v >= ASRS_SHADED_FROM[i] ? 1 : 0), 0),
  interpret: (score) => {
    if (score >= 4)
      return {
        band: 'compatible',
        severity: 'atencion',
        title: 'Respuestas compatibles con TDAH en adultos',
        body: 'Cuatro o más respuestas en la zona marcada sugieren que vale la pena una evaluación profesional. Es un cribado, no un diagnóstico: la ansiedad, la depresión, el mal sueño o el estrés también afectan la atención.',
      };
    return {
      band: 'no-compatible',
      severity: 'ok',
      title: 'Respuestas no compatibles con TDAH',
      body: 'Tus respuestas no superan el umbral del cribado. Si igual sientes que la atención o la organización te traen problemas, puedes consultarlo con un profesional.',
    };
  },
  references: [
    {
      citation:
        'Kessler, R. C., Adler, L., Ames, M., Demler, O., Faraone, S., Hiripi, E., Howes, M. J., Jin, R., Secnik, K., Spencer, T., Ustun, T. B., & Walters, E. E. (2005). The World Health Organization Adult ADHD Self-Report Scale (ASRS): A short screening scale for use in the general population. Psychological Medicine, 35(2), 245–256.',
      doi: '10.1017/S0033291704002892',
      note: '© New York University and the President and Fellows of Harvard College. Uso libre con atribución; no admite modificaciones salvo la versión electrónica.',
    },
  ],
};

export const INSTRUMENTS: Instrument[] = [WHO5, GAD7, PHQ9, DERS16, ISI, PSS10, SWLS, AUDITC, BIGFIVE, PCL5, ASRS];
export const INSTRUMENT_BY_ID = Object.fromEntries(INSTRUMENTS.map((i) => [i.id, i])) as Record<InstrumentId, Instrument>;

/** ¿Las respuestas activan el aviso de seguridad (ítem de riesgo > 0)? */
export function hasRiskResponse(instrument: Instrument, items: (number | null)[]): boolean {
  return instrument.riskItemIndex !== undefined && (items[instrument.riskItemIndex] ?? 0) > 0;
}
