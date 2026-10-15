import { daysAgo, recordDayKey, toDateKey } from './metrics';
import type { Application, DailyCheckin, JournalEntry, PracticeFamily, SessionRecord } from './types';

/**
 * El ritual diario: tres pasos breves (registro de ánimo, una práctica y una pregunta)
 * que se pueden completar en menos de diez minutos.
 *
 * Mismos principios que el jardín (ver domain/growth): no hay rachas que se rompan ni
 * mensajes de culpa. Si alguien vuelve después de unos días, se le da la bienvenida.
 */

// ---------------------------------------------------------------- pregunta del día

export type QuestionTheme = 'gratitud' | 'valores' | 'emociones' | 'vinculos' | 'autocompasion' | 'presente' | 'fortalezas' | 'sentido';

export interface DailyQuestion {
  text: string;
  theme: QuestionTheme;
}

export const QUESTION_THEME_LABEL: Record<QuestionTheme, string> = {
  gratitud: 'Gratitud',
  valores: 'Valores',
  emociones: 'Emociones',
  vinculos: 'Vínculos',
  autocompasion: 'Autocompasión',
  presente: 'Presente',
  fortalezas: 'Fortalezas',
  sentido: 'Sentido',
};

const q = (theme: QuestionTheme, ...texts: string[]): DailyQuestion[] => texts.map((text) => ({ text, theme }));

/** Ordenadas para que los temas se alternen día a día. */
const BY_THEME: DailyQuestion[][] = [
  q(
    'gratitud',
    '¿Qué pequeña cosa de hoy te gustaría recordar?',
    '¿Quién te hizo la vida un poco más fácil esta semana?',
    '¿Qué tienes hoy que hace un año no tenías?',
    '¿Qué parte de tu cuerpo te ayudó hoy sin que lo notaras?',
    '¿Qué lugar te hace sentir en casa?',
    '¿Qué comida, música o aroma te alegró últimamente?',
    '¿A quién te gustaría agradecerle algo y todavía no lo hiciste?',
    '¿Qué momento simple de hoy salió mejor de lo que esperabas?',
  ),
  q(
    'emociones',
    '¿Qué emoción estuvo más presente hoy?',
    '¿Dónde sientes en el cuerpo lo que sientes ahora?',
    '¿Qué te preocupa hoy? ¿Está en tus manos?',
    '¿Qué te hizo reír o sonreír en estos días?',
    '¿Qué situación te enojó y qué necesitabas en ese momento?',
    '¿Qué emoción te cuesta más mostrar a los demás?',
    '¿Qué te dio calma hoy, aunque sea un momento?',
    'Si tu ánimo de hoy fuera un clima, ¿cuál sería y por qué?',
  ),
  q(
    'valores',
    '¿Qué hiciste hoy que va con lo que te importa?',
    '¿Qué tipo de persona quieres ser en los momentos difíciles?',
    '¿Qué te gustaría que dijeran de ti las personas que quieres?',
    '¿Qué pequeño paso podrías dar mañana hacia algo que valoras?',
    '¿En qué gastaste tu tiempo hoy? ¿Te gustaría cambiar algo?',
    '¿Qué cosa haces aunque nadie te lo pida, porque te importa?',
    '¿A qué le dijiste que sí hoy? ¿Y a qué le dijiste que no?',
    '¿Qué valor te gustaría cuidar más esta semana?',
  ),
  q(
    'vinculos',
    '¿Con quién te sentiste en confianza esta semana?',
    '¿Qué conversación te gustaría tener y vienes postergando?',
    '¿Qué hiciste hoy por otra persona?',
    '¿Quién te conoce de verdad? ¿Qué sabe de ti?',
    '¿Qué te gustaría pedirle a alguien cercano?',
    '¿Con quién te gustaría pasar más tiempo?',
    '¿Qué aprendiste de alguien en estos días?',
    '¿A quién podrías escribirle hoy solo para saludar?',
  ),
  q(
    'autocompasion',
    '¿Qué le dirías a una amiga o a un amigo que vive lo que vives tú hoy?',
    '¿Qué te exiges que quizás podrías soltar un poco?',
    '¿Qué hiciste bien hoy, aunque haya sido algo pequeño?',
    '¿Qué necesitas en este momento para cuidarte?',
    '¿De qué error reciente aprendiste algo?',
    '¿Qué parte de ti merece hoy un poco más de paciencia?',
    '¿Cómo podrías descansar mejor esta noche?',
    'Si pudieras darte un permiso hoy, ¿cuál sería?',
  ),
  q(
    'presente',
    '¿Qué ves, oyes y sientes en este momento?',
    '¿Qué momento de hoy viviste con atención plena?',
    '¿Qué hiciste hoy en piloto automático?',
    '¿Qué fue lo más lindo que viste hoy?',
    '¿Cómo está tu respiración ahora? ¿Y tus hombros?',
    '¿Qué sonido te acompañó hoy?',
    '¿Qué disfrutaste hoy sin apuro?',
    '¿Qué te gustaría notar mañana que hoy pasaste por alto?',
  ),
  q(
    'fortalezas',
    '¿Qué fortaleza tuya usaste hoy?',
    '¿Qué problema resolviste en estos días? ¿Cómo lo hiciste?',
    '¿Qué cosa difícil superaste alguna vez y hoy te da fuerza?',
    '¿En qué te piden ayuda los demás?',
    '¿Qué actividad te hace perder la noción del tiempo?',
    '¿Qué aprendiste a hacer en el último año?',
    '¿Qué cualidad tuya te gustaría usar más?',
    '¿Qué te hace sentir capaz?',
  ),
  q(
    'sentido',
    '¿Qué le dio sentido a tu día de hoy?',
    '¿Qué te gustaría que siga igual dentro de cinco años?',
    '¿Para qué o para quién te levantas por la mañana?',
    '¿Qué te gustaría aprender si tuvieras tiempo?',
    '¿Qué te inspira de alguien que admiras?',
    '¿Qué te gustaría dejar a las personas que vienen después?',
    '¿Qué te hace sentir parte de algo más grande?',
    '¿Qué pregunta te gustaría que alguien te hiciera?',
  ),
];

export const DAILY_QUESTIONS: DailyQuestion[] = BY_THEME[0].flatMap((_, i) => BY_THEME.map((list) => list[i]).filter(Boolean));

/** Número de día local desde una fecha fija: el mismo para todo el día. */
function dayNumber(date: Date): number {
  const local = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.round(local.getTime() / 86_400_000);
}

/** Una pregunta por día, igual durante todo el día; `skip` permite pedir otra. */
export function questionOfDay(today = new Date(), skip = 0): DailyQuestion {
  const n = DAILY_QUESTIONS.length;
  return DAILY_QUESTIONS[(((dayNumber(today) + skip) % n) + n) % n];
}

// ---------------------------------------------------------------- pasos del día

export interface DayProgress {
  checkin: boolean;
  practice: boolean;
  reflection: boolean;
  done: number;
  total: 3;
}

export function dayProgress(
  sessions: SessionRecord[],
  checkins: DailyCheckin[],
  journal: JournalEntry[],
  today = new Date(),
): DayProgress {
  const key = toDateKey(today);
  const checkin = checkins.some((c) => c.date === key);
  const practice = sessions.some((s) => s.completed && recordDayKey(s.startedAt, s.tz) === key);
  const reflection = journal.some((j) => recordDayKey(j.createdAt, j.tz) === key);
  return { checkin, practice, reflection, done: Number(checkin) + Number(practice) + Number(reflection), total: 3 };
}

/** Respuesta de hoy a la pregunta del día, si ya la hay. */
export function todaysAnswer(journal: JournalEntry[], today = new Date()): JournalEntry | null {
  const key = toDateKey(today);
  return journal.find((j) => j.type === 'pregunta-del-dia' && recordDayKey(j.createdAt, j.tz) === key) ?? null;
}

// ---------------------------------------------------------------- regreso

/** Días desde la última actividad (práctica, registro o diario); null si nunca hubo. */
export function daysSinceLastActivity(
  sessions: SessionRecord[],
  checkins: DailyCheckin[],
  journal: JournalEntry[],
  today = new Date(),
): number | null {
  const times = [
    ...sessions.filter((s) => s.completed).map((s) => s.startedAt.getTime()),
    ...journal.map((j) => j.createdAt.getTime()),
    ...checkins.map((c) => new Date(`${c.date}T12:00:00`).getTime()),
  ];
  if (times.length === 0) return null;
  const last = new Date(Math.max(...times));
  return Math.max(0, dayNumber(today) - dayNumber(last));
}

/** A partir de cuántos días sin actividad se muestra la bienvenida de regreso. */
export const RETURN_AFTER_DAYS = 4;

// ---------------------------------------------------------------- hitos

export interface MilestoneData {
  sessions: SessionRecord[];
  checkins: DailyCheckin[];
  journal: JournalEntry[];
  applications: Application[];
}

export interface Milestone {
  id: string;
  title: string;
  /** Qué reconoce, en segunda persona. */
  body: string;
  /** Dibujo del hito (ver components/growth/MilestoneBadge). */
  icon: 'semilla' | 'hoja' | 'pluma' | 'sol' | 'arcoiris' | 'puente' | 'estrella' | 'arbol' | 'corazon' | 'montana';
  reached: (d: MilestoneData) => boolean;
}

const completed = (d: MilestoneData) => d.sessions.filter((s) => s.completed);
const practiceDays = (d: MilestoneData) => new Set(completed(d).map((s) => recordDayKey(s.startedAt, s.tz))).size;
const families = (d: MilestoneData) => new Set<PracticeFamily>(completed(d).map((s) => s.family)).size;
const answers = (d: MilestoneData) => d.journal.filter((j) => j.type === 'pregunta-del-dia').length;

/** Hay al menos un día con los tres pasos hechos. */
function fullDay(d: MilestoneData): boolean {
  const checkinDays = new Set(d.checkins.map((c) => c.date));
  const journalDays = new Set(d.journal.map((j) => recordDayKey(j.createdAt, j.tz)));
  return completed(d).some((s) => {
    const k = recordDayKey(s.startedAt, s.tz);
    return checkinDays.has(k) && journalDays.has(k);
  });
}

/** Una semana (lunes a domingo, en los últimos 90 días) con práctica en 4 días o más. */
function steadyWeek(d: MilestoneData, today = new Date()): boolean {
  const weeks = new Map<string, Set<string>>();
  for (const s of completed(d)) {
    if (s.startedAt < daysAgo(90, today)) continue;
    const day = new Date(s.startedAt);
    const monday = new Date(day.getFullYear(), day.getMonth(), day.getDate() - ((day.getDay() + 6) % 7));
    const wk = toDateKey(monday);
    if (!weeks.has(wk)) weeks.set(wk, new Set());
    weeks.get(wk)!.add(recordDayKey(s.startedAt, s.tz));
  }
  return [...weeks.values()].some((days) => days.size >= 4);
}

export const MILESTONES: Milestone[] = [
  { id: 'primera-practica', title: 'Primera práctica', body: 'Diste el primer paso. Es el más difícil.', icon: 'semilla', reached: (d) => completed(d).length >= 1 },
  { id: 'primer-registro', title: 'Primer registro de ánimo', body: 'Empezaste a mirar cómo estás. Así se ven los cambios.', icon: 'hoja', reached: (d) => d.checkins.length >= 1 },
  { id: 'primera-pregunta', title: 'Primera pregunta del día', body: 'Te diste un momento para reflexionar por escrito.', icon: 'pluma', reached: (d) => answers(d) >= 1 },
  { id: 'dia-completo', title: 'Un día completo', body: 'Hiciste los tres pasos del día: registro, práctica y pregunta.', icon: 'sol', reached: fullDay },
  { id: 'tres-familias', title: 'Explorador', body: 'Probaste prácticas de atención, de cultivo y de comprensión.', icon: 'arcoiris', reached: (d) => families(d) >= 3 },
  { id: 'primera-aplicacion', title: 'Fuera de la pantalla', body: 'Usaste una habilidad en tu vida real. Ahí ocurre el cambio.', icon: 'puente', reached: (d) => d.applications.some((a) => a.applied) },
  { id: 'cinco-dias', title: 'Cinco días de práctica', body: 'Cinco días distintos con práctica. La constancia empieza a notarse.', icon: 'estrella', reached: (d) => practiceDays(d) >= 5 },
  { id: 'semana-constante', title: 'Una semana constante', body: 'Practicaste cuatro días o más en una misma semana.', icon: 'arbol', reached: (d) => steadyWeek(d) },
  { id: 'siete-preguntas', title: 'Siete reflexiones', body: 'Respondiste siete preguntas del día. Ya tienes un pequeño diario.', icon: 'pluma', reached: (d) => answers(d) >= 7 },
  { id: 'diez-practicas', title: 'Diez prácticas', body: 'Diez sesiones completas. Tu mente ya reconoce el camino.', icon: 'estrella', reached: (d) => completed(d).length >= 10 },
  { id: 'cinco-utiles', title: 'Lo que me sirve', body: 'Cinco veces una habilidad te resultó útil en tu vida.', icon: 'corazon', reached: (d) => d.applications.filter((a) => a.applied && a.usefulness === 'util').length >= 5 },
  { id: 'veinte-dias', title: 'Veinte días de práctica', body: 'Veinte días distintos. Esto ya es un hábito en construcción.', icon: 'montana', reached: (d) => practiceDays(d) >= 20 },
  { id: 'cincuenta-practicas', title: 'Cincuenta prácticas', body: 'Cincuenta sesiones. Lo que entrenas, crece.', icon: 'arbol', reached: (d) => completed(d).length >= 50 },
];

export const MILESTONE_BY_ID = Object.fromEntries(MILESTONES.map((m) => [m.id, m])) as Record<string, Milestone>;

/** Ids de los hitos alcanzados con los datos disponibles (ventana local). */
export function reachedMilestones(d: MilestoneData): string[] {
  return MILESTONES.filter((m) => m.reached(d)).map((m) => m.id);
}

/**
 * Une lo ya guardado con lo alcanzado ahora: un hito nunca se pierde, aunque los
 * registros salgan de la ventana de 90 días. Devuelve también los nuevos, para celebrarlos.
 */
export function mergeMilestones(saved: string[], now: string[]): { all: string[]; fresh: string[] } {
  const known = new Set(saved);
  const fresh = now.filter((id) => !known.has(id) && MILESTONE_BY_ID[id]);
  const all = MILESTONES.map((m) => m.id).filter((id) => known.has(id) || fresh.includes(id));
  return { all, fresh };
}

/** El próximo hito por alcanzar, para mostrar «lo siguiente». */
export function nextMilestone(reached: string[]): Milestone | null {
  return MILESTONES.find((m) => !reached.includes(m.id)) ?? null;
}
