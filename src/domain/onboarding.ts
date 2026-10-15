import type { ModuleId } from './catalog';
import { PRACTICE_BY_ID } from './practices';
import { PROGRAMS } from './programs';

/**
 * Primer uso: tres preguntas que convierten «¿por dónde empiezo?» en una ruta concreta.
 * La recomendación es transparente (se explica por qué) y se puede cambiar en cualquier momento.
 */

export type ConcernId =
  | 'empezar'
  | 'ansiedad'
  | 'estres'
  | 'animo'
  | 'emociones-intensas'
  | 'autocritica'
  | 'relaciones'
  | 'sueno'
  | 'postergar'
  | 'sentido';

export interface Concern {
  id: ConcernId;
  label: string;
  programId: string;
  module: ModuleId;
  why: string;
}

export const CONCERNS: Concern[] = [
  { id: 'empezar', label: 'Quiero sentirme mejor en general', programId: 'fundamentos', module: 'bienestar', why: 'Empieza por la base: cuatro habilidades que sostienen el bienestar.' },
  { id: 'ansiedad', label: 'Me preocupo mucho o siento ansiedad', programId: 'ansiedad', module: 'emociones', why: 'Aprenderás a bajar la activación del cuerpo y a tomar distancia de las preocupaciones.' },
  { id: 'estres', label: 'Vivo con estrés o cansancio', programId: 'estres', module: 'afrontamiento', why: 'Pausas cortas y formas de recuperarte en medio de días exigentes.' },
  { id: 'animo', label: 'Me siento sin ganas o con el ánimo bajo', programId: 'desanimo', module: 'habitos', why: 'Pequeñas acciones que devuelven energía, una por vez y sin presión.' },
  { id: 'emociones-intensas', label: 'Mis emociones me desbordan', programId: 'regulacion-emocional', module: 'emociones', why: 'Herramientas para responder en lugar de reaccionar cuando la emoción sube.' },
  { id: 'autocritica', label: 'Me critico mucho', programId: 'autoestima', module: 'autocompasion', why: 'Aprenderás a tratarte con la misma amabilidad que le darías a alguien querido.' },
  { id: 'relaciones', label: 'Me cuesta poner límites o pedir', programId: 'poner-limites', module: 'relaciones', why: 'Formas claras y amables de decir lo que necesitas.' },
  { id: 'sueno', label: 'Duermo mal', programId: 'dormir-mejor', module: 'cuerpo', why: 'Hábitos y prácticas para que el cuerpo aprenda a descansar.' },
  { id: 'postergar', label: 'Postergo lo que tengo que hacer', programId: 'dejar-de-postergar', module: 'habitos', why: 'Empezar en pequeño y sostenerlo, sin esperar a tener ganas.' },
  { id: 'sentido', label: 'Busco vivir más según lo que me importa', programId: 'vivir-mis-valores', module: 'valores', why: 'Descubrir tus valores y convertirlos en acciones de cada día.' },
];

export type TimeBudget = 'poco' | 'medio' | 'mucho';

export const TIME_BUDGETS: { id: TimeBudget; label: string; minutes: number }[] = [
  { id: 'poco', label: '2 a 5 minutos', minutes: 5 },
  { id: 'medio', label: 'Unos 10 minutos', minutes: 10 },
  { id: 'mucho', label: '20 minutos o más', minutes: 20 },
];

export type DayMoment = 'manana' | 'tarde' | 'noche';

export const DAY_MOMENTS: { id: DayMoment; label: string; time: string; cue: string }[] = [
  { id: 'manana', label: 'Por la mañana', time: '08:00', cue: 'termine de desayunar' },
  { id: 'tarde', label: 'Por la tarde', time: '18:30', cue: 'llegue a casa' },
  { id: 'noche', label: 'Por la noche', time: '21:30', cue: 'me siente en la cama por la noche' },
];

export interface OnboardingAnswers {
  concern: ConcernId;
  time: TimeBudget;
  moment: DayMoment;
}

export interface OnboardingPlan {
  concern: Concern;
  program: (typeof PROGRAMS)[number];
  firstPracticeId: string;
  minutes: number;
  moment: (typeof DAY_MOMENTS)[number];
}

/** Con poco tiempo, se propone la práctica breve del programa en lugar de la primera. */
const SHORT_FIRST: Record<string, string> = {
  estres: 'espacio-tres-minutos',
  'regulacion-emocional': 'suspiro-ciclico',
  autoestima: 'mano-en-el-pecho',
  ansiedad: 'suspiro-ciclico',
};

export function planFor(a: OnboardingAnswers): OnboardingPlan {
  const concern = CONCERNS.find((c) => c.id === a.concern) ?? CONCERNS[0];
  const program = PROGRAMS.find((p) => p.id === concern.programId) ?? PROGRAMS[0];
  const budget = TIME_BUDGETS.find((t) => t.id === a.time) ?? TIME_BUDGETS[1];
  // La primera práctica sin precauciones del programa: para empezar, nada que requiera cuidados.
  const ids = program.weeks.flatMap((w) => w.practiceIds);
  const first = ids.find((id) => PRACTICE_BY_ID[id] && !PRACTICE_BY_ID[id].cautions) ?? 'atencion-respiracion';
  return {
    concern,
    program,
    firstPracticeId: a.time === 'poco' ? (SHORT_FIRST[program.id] ?? first) : first,
    minutes: budget.minutes,
    moment: DAY_MOMENTS.find((m) => m.id === a.moment) ?? DAY_MOMENTS[0],
  };
}
