import { recordDayKey, toDateKey } from './metrics';
import type { JournalEntry, JournalType, Reference, SessionRecord } from './types';

/**
 * Desafíos de 7, 21 y 30 días: una tarea corta por día.
 * El día cuenta como hecho si se registró la práctica o la entrada del diario que pide la tarea,
 * o si la persona lo marca a mano («Lo hice»). Saltarse un día no reinicia nada: se muestra lo
 * hecho, nunca lo perdido.
 */

export interface ChallengeTask {
  title: string;
  text: string;
  practiceId?: string;
  journalType?: JournalType;
}

export interface Challenge {
  id: string;
  title: string;
  subtitle: string;
  days: 7 | 21 | 30;
  why: string;
  /** Tareas que se recorren en orden; si hay menos que días, se repiten. */
  tasks: ChallengeTask[];
  references: Reference[];
}

const breath = (title: string, text: string, practiceId: string): ChallengeTask => ({ title, text, practiceId });

export const CHALLENGES: Challenge[] = [
  {
    id: 'siete-dias-de-calma',
    title: 'Siete días de calma',
    subtitle: 'Una pausa breve por día para bajar el ritmo',
    days: 7,
    why: 'Las pausas cortas y repetidas entrenan al cuerpo a volver a la calma. Siete días alcanzan para notar qué te sirve más.',
    tasks: [
      breath('Suspiro cíclico', 'Dos inhalaciones por la nariz y una exhalación larga, durante unos minutos.', 'suspiro-ciclico'),
      breath('Pausa STOP', 'Para, respira, observa y sigue.', 'pausa-stop'),
      breath('Cinco sentidos', 'Nombra lo que ves, oyes, tocas, hueles y saboreas.', 'cinco-sentidos'),
      breath('Plantas de los pies', 'Lleva la atención a los pies apoyados en el suelo.', 'plantas-de-los-pies'),
      breath('Espacio de tres minutos', 'Mira qué pasa, junta la atención y ábrela al cuerpo.', 'espacio-tres-minutos'),
      breath('Mano en el pecho', 'Un gesto de calma y cuidado hacia ti.', 'mano-en-el-pecho'),
      breath('Respiración a tu ritmo', 'Repite la pausa que más te gustó esta semana.', 'respiracion-resonante'),
    ],
    references: [{ citation: 'Balban, M. Y., et al. (2023). Brief structured respiration practices enhance mood and reduce physiological arousal. Cell Reports Medicine, 4(1), 100895.', doi: '10.1016/j.xcrm.2022.100895' }],
  },
  {
    id: 'semana-de-gratitud',
    title: 'Una semana de gratitud',
    subtitle: 'Tres cosas buenas cada noche',
    days: 7,
    why: 'Anotar cada noche tres cosas que salieron bien entrena la atención a lo bueno. El efecto se nota más si lo haces varios días seguidos.',
    tasks: [{ title: 'Tres cosas buenas', text: 'Antes de dormir, anota tres cosas que salieron bien hoy y por qué pasaron.', journalType: 'tres-cosas' }],
    references: [{ citation: 'Seligman, M. E. P., Steen, T. A., Park, N., y Peterson, C. (2005). Positive psychology progress. American Psychologist, 60(5), 410-421.', doi: '10.1037/0003-066X.60.5.410' }],
  },
  {
    id: 'veintiun-dias-de-atencion',
    title: '21 días de atención plena',
    subtitle: 'De la respiración al cuerpo y a la vida diaria',
    days: 21,
    why: 'Tres semanas de práctica breve y diaria son un buen comienzo para un hábito. Cada semana suma un paso: la respiración, el cuerpo y la vida diaria.',
    tasks: [
      breath('Atención a la respiración', 'Diez minutos con la respiración. Cuando te distraigas, vuelve con amabilidad.', 'atencion-respiracion'),
      breath('Atención a la respiración', 'Otra vez la respiración. Nota cómo cambia de un día a otro.', 'atencion-respiracion'),
      breath('Anotación mental', 'Nombra en voz baja lo que aparece: «pensar», «oír», «sentir».', 'anotacion-mental'),
      breath('Atención a los sonidos', 'Deja que los sonidos lleguen sin buscarlos.', 'atencion-sonidos'),
      breath('Pájaros en el cielo', 'Mira los pensamientos pasar, como pájaros.', 'pajaros-en-el-cielo'),
      breath('Atención a la respiración', 'Vuelve a lo básico: respirar y volver.', 'atencion-respiracion'),
      breath('Cinco minutos', 'Una práctica corta para un día con poco tiempo.', 'cinco-minutos'),
      breath('Escaneo corporal', 'Recorre el cuerpo de los pies a la cabeza.', 'escaneo-corporal'),
      breath('Escaneo corporal', 'Otra vez el cuerpo. Nota dónde hay tensión y dónde no.', 'escaneo-corporal'),
      breath('Relajación progresiva', 'Tensa y suelta, grupo por grupo.', 'relajacion-progresiva'),
      breath('Caminar con atención', 'Camina despacio y siente cada paso.', 'caminar-atencion'),
      breath('Escaneo corporal', 'El cuerpo como ancla para el presente.', 'escaneo-corporal'),
      breath('Hacer espacio', 'Deja lugar a una sensación difícil sin pelear con ella.', 'hacer-espacio'),
      breath('Caminar con atención', 'Prueba en un lugar distinto al de siempre.', 'caminar-atencion'),
      breath('Saboreo', 'Detente en algo agradable de tu día y alárgalo.', 'saboreo'),
      breath('Pausa STOP', 'Úsala en un momento real de prisa o enojo.', 'pausa-stop'),
      breath('El observador', 'Mira lo que piensas y sientes desde un poco más atrás.', 'observador'),
      breath('Espacio de tres minutos', 'Hazlo dos veces hoy, en momentos distintos.', 'espacio-tres-minutos'),
      breath('Surfear el impulso', 'Cuando aparezca un impulso, obsérvalo subir y bajar.', 'surfear-impulso'),
      breath('Conciencia abierta', 'Deja que todo aparezca y se vaya.', 'conciencia-pura'),
      breath('Tu práctica favorita', 'Elige la que más te sirvió y planea cuándo la seguirás haciendo.', 'atencion-respiracion'),
    ],
    references: [{ citation: 'Kabat-Zinn, J. (1990). Full catastrophe living. Delacorte.' }, { citation: 'Lally, P., van Jaarsveld, C. H. M., Potts, H. W. W., y Wardle, J. (2010). How are habits formed. European Journal of Social Psychology, 40(6), 998-1009.', doi: '10.1002/ejsp.674' }],
  },
  {
    id: 'treinta-dias-de-trato-amable',
    title: '30 días de trato amable',
    subtitle: 'Hablarte como le hablarías a alguien que quieres',
    days: 30,
    why: 'La autocrítica se aprende y también se puede desaprender. Un mes de pequeñas prácticas de autocompasión ayuda a que la voz amable salga sola.',
    tasks: [
      breath('Pausa de autocompasión', 'Nombra el momento difícil, recuerda que a otros también les pasa y date un gesto amable.', 'pausa-autocompasion'),
      breath('Mano en el pecho', 'Un minuto de calma con la mano en el pecho.', 'mano-en-el-pecho'),
      { title: 'Carta compasiva', text: 'Escríbete unas líneas como lo haría un buen amigo.', journalType: 'carta-compasiva' },
      breath('Amor altruista', 'Desea el bien a alguien querido y luego a ti.', 'amor-altruista'),
      breath('El yo compasivo', 'Imagina la versión más sabia y amable de ti.', 'yo-compasivo'),
      breath('Ritmo calmante', 'Respira lento para activar el sistema de calma.', 'ritmo-calmante'),
      { title: 'Tres cosas buenas', text: 'Anota tres cosas que hiciste bien hoy, aunque sean pequeñas.', journalType: 'tres-cosas' },
      breath('Escucharme sin juzgar', 'Escucha lo que te pasa sin corregirte.', 'escucharme-sin-juzgar'),
      breath('Fortalezas', 'Mira qué fortaleza tuya apareció hoy.', 'fortalezas'),
      breath('Pausa de autocompasión', 'Úsala en un momento real en que te trates mal.', 'pausa-autocompasion'),
    ],
    references: [{ citation: 'Neff, K. D., y Germer, C. K. (2013). A pilot study and randomized controlled trial of the mindful self-compassion program. Journal of Clinical Psychology, 69(1), 28-44.', doi: '10.1002/jclp.21923' }],
  },
];

export const CHALLENGE_BY_ID: Record<string, Challenge> = Object.fromEntries(CHALLENGES.map((c) => [c.id, c]));

export const taskFor = (c: Challenge, day: number): ChallengeTask => c.tasks[(day - 1) % c.tasks.length];

/** Estado guardado en el dispositivo: día de inicio y días marcados a mano. */
export interface ChallengeState {
  start: string; // YYYY-MM-DD
  manual: string[]; // claves YYYY-MM-DD
}

const parseKey = (key: string): Date => {
  const [y, m, d] = key.split('-').map(Number);
  return new Date(y, m - 1, d);
};

export const addDays = (key: string, n: number): string => {
  const d = parseKey(key);
  d.setDate(d.getDate() + n);
  return toDateKey(d);
};

/** Día del desafío (1 = el de inicio) para una fecha. */
export function challengeDay(start: string, today = new Date()): number {
  return Math.round((parseKey(toDateKey(today)).getTime() - parseKey(start).getTime()) / 86_400_000) + 1;
}

/** Si la tarea de un día ya se hizo (por registro o a mano). */
export function taskDone(task: ChallengeTask, dayKey: string, state: ChallengeState, sessions: SessionRecord[], journal: JournalEntry[]): boolean {
  if (state.manual.includes(dayKey)) return true;
  if (task.practiceId && sessions.some((s) => s.completed && s.practiceId === task.practiceId && recordDayKey(s.startedAt, s.tz) === dayKey)) return true;
  if (task.journalType && journal.some((j) => j.type === task.journalType && recordDayKey(j.createdAt, j.tz) === dayKey)) return true;
  return false;
}

export interface ChallengeProgress {
  /** Día actual (puede pasar del total cuando terminó). */
  day: number;
  /** Hecho o no, por cada día ya transcurrido (hasta hoy, sin pasar del total). */
  done: boolean[];
  completed: number;
  finished: boolean;
}

export function challengeProgress(c: Challenge, state: ChallengeState, sessions: SessionRecord[], journal: JournalEntry[], today = new Date()): ChallengeProgress {
  const day = challengeDay(state.start, today);
  const elapsed = Math.max(0, Math.min(c.days, day));
  const done = Array.from({ length: elapsed }, (_, i) => taskDone(taskFor(c, i + 1), addDays(state.start, i), state, sessions, journal));
  return { day, done, completed: done.filter(Boolean).length, finished: day > c.days };
}
