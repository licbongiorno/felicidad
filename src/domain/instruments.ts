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
  references: Reference[];
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
      body: 'Esta puntuación es frecuente en personas que atraviesan una depresión. No es un diagnóstico, pero sí una buena razón para hablarlo con un/a profesional de la salud mental, si no lo estás haciendo ya.',
    };
  }
  if (score < 50) {
    return {
      band: 'bajo',
      severity: 'atencion',
      title: 'Bienestar bajo',
      body: 'Tu bienestar de las últimas dos semanas está por debajo del rango habitual. Puede ser algo pasajero; si se mantiene en las próximas evaluaciones, conviene comentarlo con un/a profesional.',
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
      return { band: 'grave', severity: 'alto', title: 'Ansiedad grave', body: 'Esta puntuación indica síntomas de ansiedad intensos. No es un diagnóstico, pero te recomendamos consultar con un/a profesional de la salud mental: la ansiedad tiene tratamientos eficaces.' };
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
      return { band: 'grave', severity: 'alto', title: 'Síntomas depresivos graves', body: 'Esta puntuación indica síntomas intensos. Te recomendamos consultar pronto con un/a profesional de la salud mental: la depresión tiene tratamientos eficaces.' };
    if (score >= 15)
      return { band: 'moderadamente-grave', severity: 'alto', title: 'Síntomas depresivos moderadamente graves', body: 'Te recomendamos consultar con un/a profesional de la salud mental para una evaluación.' };
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
      return { band: 'alta', severity: 'alto', title: 'Muchas dificultades para regular las emociones', body: 'Tu puntuación está en el tercio alto de la escala. Las emociones parecen desbordarte a menudo. No es un diagnóstico, pero vale la pena hablarlo con un/a profesional: la terapia dialéctico-conductual trabaja justo esto.' };
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
      return { band: 'grave', severity: 'alto', title: 'Insomnio grave', body: 'Esta puntuación indica un insomnio clínico grave. No es un diagnóstico, pero te recomendamos consultar con un/a profesional: la terapia cognitivo-conductual para el insomnio es el tratamiento de primera elección.' };
    if (score >= 15)
      return { band: 'moderado', severity: 'atencion', title: 'Insomnio moderado', body: 'Esta puntuación indica un insomnio clínico moderado. Conviene consultarlo con un/a profesional. El programa «Dormir mejor» puede ser un buen complemento.' };
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
      return { band: 'alto', severity: 'alto', title: 'Estrés percibido alto', body: 'Tu puntuación está en el tercio alto de la escala. Sientes que las exigencias superan tus recursos. Si se mantiene, conviene hablarlo con un/a profesional. El programa «Estrés y agotamiento» puede ayudarte.' };
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

export const INSTRUMENTS: Instrument[] = [WHO5, GAD7, PHQ9, DERS16, ISI, PSS10];
export const INSTRUMENT_BY_ID = Object.fromEntries(INSTRUMENTS.map((i) => [i.id, i])) as Record<InstrumentId, Instrument>;

/** ¿Las respuestas activan el aviso de seguridad (ítem de riesgo > 0)? */
export function hasRiskResponse(instrument: Instrument, items: (number | null)[]): boolean {
  return instrument.riskItemIndex !== undefined && (items[instrument.riskItemIndex] ?? 0) > 0;
}
