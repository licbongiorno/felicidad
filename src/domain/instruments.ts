import type { InstrumentId, Reference } from './types';

/**
 * Instrumentos validados de autoinforme. Ninguno es diagnóstico: orientan y permiten
 * seguir la evolución. Todos son de uso libre.
 *
 * - WHO-5 (bienestar, 0–100, más es mejor). Topp et al. (2015).
 * - GAD-7 (ansiedad, 0–21, más es peor). Spitzer et al. (2006).
 * - PHQ-9 (depresión, 0–27, más es peor). Kroenke et al. (2001). El ítem 9 pregunta por
 *   ideación suicida: cualquier respuesta > 0 activa el aviso de seguridad (riskItemIndex).
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
  intervalDays: number;
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

export const INSTRUMENTS: Instrument[] = [WHO5, GAD7, PHQ9];
export const INSTRUMENT_BY_ID = Object.fromEntries(INSTRUMENTS.map((i) => [i.id, i])) as Record<InstrumentId, Instrument>;

/** ¿Las respuestas activan el aviso de seguridad (ítem de riesgo > 0)? */
export function hasRiskResponse(instrument: Instrument, items: (number | null)[]): boolean {
  return instrument.riskItemIndex !== undefined && (items[instrument.riskItemIndex] ?? 0) > 0;
}
