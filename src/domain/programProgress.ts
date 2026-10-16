/** Progreso por semana a partir de los ids de práctica completados. Módulo liviano: no carga el catálogo. */
export function programProgress(program: { weeks: { practiceIds: string[] }[] }, completedPracticeIds: Set<string>) {
  const weeks = program.weeks.map((w) => {
    const done = w.practiceIds.filter((id) => completedPracticeIds.has(id)).length;
    return { done, total: w.practiceIds.length, complete: done === w.practiceIds.length };
  });
  const done = weeks.reduce((s, w) => s + w.done, 0);
  const total = weeks.reduce((s, w) => s + w.total, 0);
  const currentWeek = Math.max(0, weeks.findIndex((w) => !w.complete));
  return { weeks, done, total, ratio: total ? done / total : 0, currentWeek: weeks.every((w) => w.complete) ? weeks.length - 1 : currentWeek };
}
