import { MODULE_BY_ID, type ModuleId, type SkillModule } from './catalog';
import { isPublished } from './governance';
import { weekStart } from './growth';
import { toDateKey } from './metrics';
import { PRACTICE_SUMMARY_BY_ID as PRACTICE_BY_ID } from './practiceIndex';
import type { PersonalSettings, SessionRecord } from './types';
import type { PracticeSummary as Practice } from './practiceIndex';

/**
 * Personalización: objetivos, favoritas y plan semanal. No reemplaza la evaluación
 * clínica: sólo ordena lo que la app ofrece según lo que la persona eligió trabajar.
 */

export const MAX_GOALS = 3;
export const MAX_PLAN = 3;

export const currentWeekKey = (today = new Date()) => toDateKey(weekStart(today));

/** Para cada objetivo, la próxima práctica sugerida: primero las no probadas, después la menos practicada. */
export function goalSuggestions(goals: string[], sessions: SessionRecord[]): { module: SkillModule; next: Practice | null; practiced: number }[] {
  const counts = new Map<string, number>();
  for (const s of sessions) if (s.completed) counts.set(s.practiceId, (counts.get(s.practiceId) ?? 0) + 1);
  return goals
    .map((g) => MODULE_BY_ID[g as ModuleId])
    .filter(Boolean)
    .map((module) => {
      const available = module.practices.filter((id) => PRACTICE_BY_ID[id] && isPublished('practica', id));
      const sorted = [...available].sort((a, b) => (counts.get(a) ?? 0) - (counts.get(b) ?? 0));
      const practiced = available.filter((id) => (counts.get(id) ?? 0) > 0).length;
      return { module, next: sorted[0] ? PRACTICE_BY_ID[sorted[0]] : null, practiced };
    });
}

/** Estado del plan de esta semana (null si no hay plan o es de una semana anterior). */
export function weeklyPlanStatus(personal: PersonalSettings, sessions: SessionRecord[], today = new Date()) {
  const plan = personal.plan;
  if (!plan || plan.week !== currentWeekKey(today)) return null;
  const since = weekStart(today);
  const items = plan.practiceIds
    .filter((id) => PRACTICE_BY_ID[id])
    .map((id) => ({ practice: PRACTICE_BY_ID[id], done: sessions.filter((s) => s.completed && s.practiceId === id && s.startedAt >= since).length }));
  return { items, complete: items.length > 0 && items.every((i) => i.done > 0) };
}

/** Candidatas para el plan semanal: favoritas primero, luego las sugeridas por los objetivos. */
export function planCandidates(personal: PersonalSettings, sessions: SessionRecord[]): Practice[] {
  const fromGoals = personal.goals.flatMap((g) => MODULE_BY_ID[g as ModuleId]?.practices ?? []);
  const ids = [...new Set([...personal.favorites, ...fromGoals, ...sessions.filter((s) => s.completed).map((s) => s.practiceId)])];
  return ids.filter((id) => PRACTICE_BY_ID[id] && isPublished('practica', id)).slice(0, 12).map((id) => PRACTICE_BY_ID[id]);
}

export const toggle = (list: string[], id: string, max = Infinity) => (list.includes(id) ? list.filter((x) => x !== id) : list.length >= max ? list : [...list, id]);
