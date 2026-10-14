import type { Application, SessionRecord, Usefulness } from './types';

/**
 * Ciclo completo de cada ejercicio: Comprender → Practicar → Reflexionar → Llevarlo a tu
 * vida → Revisar. Este módulo cubre los dos últimos pasos: el plan de transferencia que
 * se guarda con la sesión y la revisión posterior (Application).
 *
 * Indicadores (separados a propósito; ninguno es una medida de mejoría clínica):
 * - Práctica: sesiones completas (domain/metrics).
 * - Aplicación: intentos de usar la habilidad fuera de la pantalla.
 * - Utilidad percibida: útil, indiferente o no apropiada.
 */

export const USEFULNESS_LABEL: Record<Usefulness, string> = {
  util: 'Me sirvió',
  indiferente: 'Me dio igual',
  'no-apropiada': 'No era para esto',
};

/** Ideas para el paso «Llevarlo a tu vida»: concretas, con un cuándo y un dónde. */
export const TRANSFER_SUGGESTIONS = [
  'Mañana, antes de empezar a trabajar',
  'La próxima vez que note tensión en el cuerpo',
  'Antes de responder un mensaje que me altere',
  'Esta noche, antes de dormir',
  'En la próxima discusión, antes de contestar',
];

/** Se pide revisar un plan pasadas unas horas y durante dos semanas como máximo. */
export const REVIEW_AFTER_HOURS = 6;
export const REVIEW_WINDOW_DAYS = 14;

/** Planes de transferencia que todavía no se revisaron, del más reciente al más antiguo. */
export function pendingReviews(sessions: SessionRecord[], applications: Application[], now = new Date()): SessionRecord[] {
  const reviewed = new Set(applications.map((a) => a.sessionId).filter(Boolean));
  const min = now.getTime() - REVIEW_WINDOW_DAYS * 86_400_000;
  const max = now.getTime() - REVIEW_AFTER_HOURS * 3_600_000;
  return sessions
    .filter((s) => s.transfer && !reviewed.has(s.id) && s.startedAt.getTime() >= min && s.startedAt.getTime() <= max)
    .sort((a, b) => b.startedAt.getTime() - a.startedAt.getTime());
}

export interface ApplicationStats {
  applied: number;
  notApplied: number;
  useful: number;
  neutral: number;
  notSuitable: number;
  /** Prácticas que más sirvieron en la vida cotidiana (id → veces útil). */
  topUseful: { practiceId: string; n: number }[];
}

export function applicationStats(applications: Application[], windowDays = 28, now = new Date()): ApplicationStats {
  const since = now.getTime() - windowDays * 86_400_000;
  const rows = applications.filter((a) => a.createdAt.getTime() >= since);
  const applied = rows.filter((a) => a.applied);
  const byPractice = new Map<string, number>();
  for (const a of applied) if (a.usefulness === 'util') byPractice.set(a.practiceId, (byPractice.get(a.practiceId) ?? 0) + 1);
  return {
    applied: applied.length,
    notApplied: rows.length - applied.length,
    useful: applied.filter((a) => a.usefulness === 'util').length,
    neutral: applied.filter((a) => a.usefulness === 'indiferente').length,
    notSuitable: applied.filter((a) => a.usefulness === 'no-apropiada').length,
    topUseful: [...byPractice.entries()]
      .map(([practiceId, n]) => ({ practiceId, n }))
      .sort((a, b) => b.n - a.n)
      .slice(0, 3),
  };
}

/** Aplicaciones (hechas) y útiles por práctica, de toda la vida. */
export function applicationsByPractice(applications: Application[]): Record<string, { applied: number; useful: number }> {
  const out: Record<string, { applied: number; useful: number }> = {};
  for (const a of applications) {
    if (!a.applied) continue;
    const cur = (out[a.practiceId] ??= { applied: 0, useful: 0 });
    cur.applied += 1;
    if (a.usefulness === 'util') cur.useful += 1;
  }
  return out;
}
