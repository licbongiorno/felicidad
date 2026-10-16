/** Duración total de una secuencia de pasos, en segundos. Módulo aparte para no arrastrar el catálogo. */
export function totalDurationSec(steps: { durationSec: number }[]): number {
  return steps.reduce((sum, s) => sum + s.durationSec, 0);
}
