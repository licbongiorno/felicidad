import { ANTIDOTE_BY_EMOTION } from './antidotes';
import { FAMILY_LABEL } from './evidence';
import { daysAgo, recordDayKey, toDateKey } from './metrics';
import { PRACTICE_INDEX as PRACTICES, PRACTICE_SUMMARY_BY_ID as PRACTICE_BY_ID } from './practiceIndex';
import type { AfflictionLog, AfflictiveEmotionId, Assessment, JournalEntry, PracticeFamily, SessionRecord } from './types';
import { WHO5 } from './instruments';
import { levelOf, missingPrerequisites } from './levels';
import { completedPracticeIds } from './metrics';

export interface Suggestion {
  id: string;
  eyebrow: string;
  title: string;
  reason: string;
  href: string;
  cta: string;
}

/**
 * Sugerencias del panel. Reglas transparentes (el "porqué" siempre se muestra al usuario):
 *  1. Patrón aflictivo recurrente → entrenar su antídoto en calma.
 *  2. Sin práctica hoy → la familia menos practicada en 14 días (equilibrio entre familias).
 *  3. WHO-5 pendiente (más de 14 días desde la última) → evaluación quincenal.
 *  4. Sin registro escrito en la semana → una entrada de diario.
 */
export function suggestNext(
  sessions: SessionRecord[],
  afflictions: AfflictionLog[],
  journal: JournalEntry[],
  assessments: Assessment[] = [],
  today = new Date(),
): Suggestion[] {
  const out: Suggestion[] = [];
  const since14 = daysAgo(13, today).getTime();
  const todayKey = toDateKey(today);

  // 1. Emoción aflictiva recurrente
  const counts = new Map<AfflictiveEmotionId, number>();
  for (const a of afflictions) {
    if (a.createdAt.getTime() >= since14) counts.set(a.emotionId, (counts.get(a.emotionId) ?? 0) + 1);
  }
  const [topEmotion, topCount] = [...counts.entries()].sort((a, b) => b[1] - a[1])[0] ?? [];
  if (topEmotion && topCount && topCount >= 3) {
    const antidote = ANTIDOTE_BY_EMOTION[topEmotion];
    const practice = PRACTICE_BY_ID[antidote.trainingPracticeId];
    out.push({
      id: 'pattern',
      eyebrow: 'Patrón detectado',
      title: practice.title,
      reason: `${antidote.emotionLabel} apareció ${topCount} veces en dos semanas. Entrenar «${antidote.antidoteName.toLowerCase()}» en calma lo vuelve más accesible cuando lo necesites.`,
      href: `/gimnasio/${practice.id}`,
      cta: 'Entrenar',
    });
  }

  // 2. Equilibrio entre familias
  const practicedToday = sessions.some((s) => s.completed && recordDayKey(s.startedAt, s.tz) === todayKey);
  if (!practicedToday) {
    const minutes: Record<PracticeFamily, number> = { attentional: 0, constructive: 0, deconstructive: 0 };
    const perPractice = new Map<string, number>();
    for (const s of sessions) {
      if (!s.completed || s.startedAt.getTime() < since14) continue;
      minutes[s.family] += s.durationSec / 60;
      perPractice.set(s.practiceId, (perPractice.get(s.practiceId) ?? 0) + 1);
    }
    const family = (Object.keys(minutes) as PracticeFamily[]).sort((a, b) => minutes[a] - minutes[b])[0];
    const done = completedPracticeIds(sessions);
    const candidate = PRACTICES.filter(
      (p) => p.family === family && !p.cautions && !p.micro && levelOf(p.id).level !== 'avanzado' && missingPrerequisites(p.id, done).length === 0,
    ).sort(
      (a, b) => (perPractice.get(a.id) ?? 0) - (perPractice.get(b.id) ?? 0),
    )[0];
    const total = Object.values(minutes).reduce((a, b) => a + b, 0);
    const familyName = FAMILY_LABEL[family].toLowerCase();
    if (candidate) {
      out.push({
        id: 'balance',
        eyebrow: 'Práctica de hoy',
        title: candidate.title,
        reason:
          total === 0
            ? 'Un buen punto de partida: las prácticas atencionales son la base sobre la que se apoyan las demás.'
            : `En las últimas dos semanas, la familia ${familyName} es la que menos has practicado. Alternar familias entrena procesos complementarios.`,
        href: `/gimnasio/${candidate.id}`,
        cta: 'Comenzar',
      });
    } else {
      // Ninguna práctica de esa familia está lista: se sugiere el prerrequisito que falta.
      const next = PRACTICES.filter((p) => p.family === family && !p.cautions && levelOf(p.id).level !== 'avanzado')
        .flatMap((p) => missingPrerequisites(p.id, done))
        .map((id) => PRACTICES.find((x) => x.id === id))
        .find((x) => x !== undefined);
      if (next) {
        out.push({
          id: 'balance',
          eyebrow: 'Práctica de hoy',
          title: next.title,
          reason: `La familia ${familyName} es la que menos has practicado. Para empezar con ella conviene tener antes una base: esta práctica la prepara.`,
          href: `/gimnasio/${next.id}`,
          cta: 'Comenzar',
        });
      }
    }
  }

  // 3. Evaluación quincenal
  const lastWho5 = assessments.find((a) => a.instrument === 'who5');
  if (!lastWho5 || lastWho5.createdAt.getTime() < daysAgo(WHO5.intervalDays - 1, today).getTime()) {
    out.push({
      id: 'who5',
      eyebrow: 'Evaluación quincenal',
      title: 'Índice de bienestar WHO-5',
      reason: lastWho5
        ? 'Han pasado dos semanas desde tu última evaluación. Repetirla permite ver si hay un cambio clínicamente relevante.'
        : 'Cinco preguntas, un minuto. Tu primera respuesta será la línea base con la que comparar tu evolución.',
      href: '/evaluaciones',
      cta: 'Responder',
    });
  }

  // 4. Escritura
  const since7 = daysAgo(6, today).getTime();
  if (!journal.some((j) => j.createdAt.getTime() >= since7)) {
    out.push({
      id: 'journal',
      eyebrow: 'Diario',
      title: 'Tres cosas buenas',
      reason: 'No hay registros escritos esta semana. Escribir organiza la experiencia mejor que sólo pensarla.',
      href: '/diario?nuevo=tres-cosas',
      cta: 'Escribir',
    });
  }

  return out.slice(0, 2);
}
