import type { GuidedStep } from './types';

/** Temporizador libre: práctica sin guía con campanas de intervalo. */

export const FREE_TIMER_ID = 'temporizador-libre';
export const FREE_TIMER_TITLE = 'Temporizador libre';

export const DURATION_OPTIONS = [5, 10, 15, 20, 30, 45] as const;
export const INTERVAL_OPTIONS = [null, 5, 10] as const;

const PREP_SEC = 15;

/**
 * Convierte duración + intervalo en pasos para el reproductor guiado: cada cambio de paso
 * hace sonar la campana, de modo que los intervalos se marcan sin lógica adicional.
 */
export function freeTimerSteps(totalMin: number, intervalMin: number | null): GuidedStep[] {
  const steps: GuidedStep[] = [
    { title: 'Preparación', instruction: 'Adopta una postura cómoda y estable. La campana marcará el inicio.', durationSec: PREP_SEC },
  ];
  const total = totalMin * 60;
  const chunk = intervalMin && intervalMin < totalMin ? intervalMin * 60 : total;
  let remaining = total;
  let i = 1;
  while (remaining > 0) {
    const d = Math.min(chunk, remaining);
    steps.push({
      title: chunk < total ? `Intervalo ${i}` : 'Práctica libre',
      instruction: 'Descansa en la práctica que elijas. Cuando notes que la mente se fue, vuelve con amabilidad.',
      durationSec: d,
      kind: 'silence',
    });
    remaining -= d;
    i++;
  }
  return steps;
}
