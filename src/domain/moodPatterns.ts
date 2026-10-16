import { recordDayKey, toDateKey } from './metrics';
import type { DailyCheckin, JournalEntry, PracticeFamily, SessionRecord } from './types';

/**
 * Patrones del ánimo: compara el ánimo de los días en que hiciste algo con los días en que no.
 * Son asociaciones descriptivas, nunca causas: el texto lo dice siempre, y cada patrón se puede
 * convertir en un experimento para comprobarlo (diario «experimento»).
 *
 * Reglas de prudencia:
 * - mínimo MIN_EACH días en cada grupo; si no, no se muestra;
 * - diferencias menores a MIN_DIFF puntos no se informan como patrón;
 * - la confianza depende del grupo más chico (baja < 7, media < 14, alta ≥ 14 y diferencia ≥ 1).
 */

export const MIN_EACH = 3;
export const MIN_DIFF = 0.5;
const WINDOW_DAYS = 90;

export type Confidence = 'baja' | 'media' | 'alta';
export type Lag = 'mismo-dia' | 'dia-siguiente';

interface Feature {
  id: string;
  /** «practicaste», «escribiste en el diario»… (completa «Los días que …»). */
  label: string;
  /** Acción para el experimento. */
  action: string;
  has: (day: DayData) => boolean;
}

interface DayData {
  sessions: SessionRecord[];
  journal: JournalEntry[];
}

const fam = (f: PracticeFamily) => (d: DayData) => d.sessions.some((s) => s.completed && s.family === f);

export const FEATURES: Feature[] = [
  { id: 'practica', label: 'practicaste una habilidad', action: 'hacer una práctica corta', has: (d) => d.sessions.some((s) => s.completed) },
  { id: 'atencion', label: 'hiciste una práctica de atención', action: 'hacer una práctica de atención de diez minutos', has: fam('attentional') },
  { id: 'compasion', label: 'hiciste una práctica de compasión o gratitud', action: 'hacer una práctica de compasión o gratitud', has: fam('constructive') },
  { id: 'diario', label: 'escribiste en el diario', action: 'escribir unas líneas en el diario', has: (d) => d.journal.length > 0 },
  {
    id: 'gratitud',
    label: 'anotaste cosas buenas del día',
    action: 'anotar tres cosas buenas antes de dormir',
    has: (d) => d.journal.some((j) => j.type === 'tres-cosas' || j.type === 'carta-gratitud') || d.sessions.some((s) => s.completed && (s.practiceId === 'tres-cosas-buenas' || s.practiceId === 'gratitud-contemplativa')),
  },
];

export interface MoodPattern {
  feature: string;
  label: string;
  lag: Lag;
  withMean: number;
  withoutMean: number;
  diff: number;
  nWith: number;
  nWithout: number;
  confidence: Confidence;
  /** Frase lista para mostrar. */
  text: string;
  /** Campos para abrir un experimento en el diario. */
  experiment: { creencia: string; experimento: string; prediccion: string };
}

const mean = (xs: number[]) => xs.reduce((a, b) => a + b, 0) / xs.length;
const round1 = (x: number) => Math.round(x * 10) / 10;
const fmt = (x: number) => round1(Math.abs(x)).toLocaleString('es-AR', { maximumFractionDigits: 1 });

export function confidenceOf(nWith: number, nWithout: number, diff: number): Confidence {
  const n = Math.min(nWith, nWithout);
  if (n >= 14 && Math.abs(diff) >= 1) return 'alta';
  if (n >= 7) return 'media';
  return 'baja';
}

export function moodPatterns(checkins: DailyCheckin[], sessions: SessionRecord[], journal: JournalEntry[], today = new Date()): MoodPattern[] {
  const since = new Date(today);
  since.setHours(0, 0, 0, 0);
  since.setDate(since.getDate() - WINDOW_DAYS);
  const sinceKey = toDateKey(since);

  const days = new Map<string, DayData>();
  const day = (k: string) => days.get(k) ?? (days.set(k, { sessions: [], journal: [] }), days.get(k)!);
  for (const s of sessions) day(recordDayKey(s.startedAt, s.tz)).sessions.push(s);
  for (const j of journal) day(recordDayKey(j.createdAt, j.tz)).journal.push(j);
  const empty: DayData = { sessions: [], journal: [] };

  const moods = checkins.filter((c) => c.date >= sinceKey && Number.isFinite(c.mood));
  const prevKey = (k: string) => {
    const [y, m, d] = k.split('-').map(Number);
    return toDateKey(new Date(y, m - 1, d - 1));
  };

  const out: MoodPattern[] = [];
  for (const f of FEATURES) {
    for (const lag of ['mismo-dia', 'dia-siguiente'] as Lag[]) {
      const withM: number[] = [];
      const withoutM: number[] = [];
      for (const c of moods) {
        const k = lag === 'mismo-dia' ? c.date : prevKey(c.date);
        (f.has(days.get(k) ?? empty) ? withM : withoutM).push(c.mood);
      }
      if (withM.length < MIN_EACH || withoutM.length < MIN_EACH) continue;
      const diff = mean(withM) - mean(withoutM);
      if (Math.abs(diff) < MIN_DIFF) continue;
      const confidence = confidenceOf(withM.length, withoutM.length, diff);
      const when = lag === 'mismo-dia' ? 'ese mismo día' : 'al día siguiente';
      const dir = diff > 0 ? 'más alto' : 'más bajo';
      out.push({
        feature: f.id,
        label: f.label,
        lag,
        withMean: round1(mean(withM)),
        withoutMean: round1(mean(withoutM)),
        diff: round1(diff),
        nWith: withM.length,
        nWithout: withoutM.length,
        confidence,
        text: `Los días que ${f.label}, tu ánimo ${when} fue en promedio ${fmt(diff)} ${fmt(diff) === '1' ? 'punto' : 'puntos'} ${dir} (${withM.length} días con, ${withoutM.length} sin).`,
        experiment: {
          creencia: diff > 0 ? `Cuando ${f.action.replace(/^hacer /, 'hago ').replace(/^escribir /, 'escribo ').replace(/^anotar /, 'anoto ')}, me siento mejor ${when}.` : `${f.action[0].toUpperCase()}${f.action.slice(1)} no me ayuda a sentirme mejor ${when}.`,
          experimento: `Durante dos semanas, ${f.action} un día sí y otro no, y registrar el ánimo cada noche.`,
          prediccion: diff > 0 ? `Los días que lo haga, mi ánimo será más alto.` : `No va a haber diferencia en mi ánimo.`,
        },
      });
    }
  }
  const weight: Record<Confidence, number> = { alta: 3, media: 2, baja: 1 };
  return out.sort((a, b) => weight[b.confidence] - weight[a.confidence] || Math.abs(b.diff) - Math.abs(a.diff));
}
