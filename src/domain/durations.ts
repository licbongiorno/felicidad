import { totalDurationSec } from './practices';
import type { GuidedStep } from './types';

/**
 * Duración ajustable de las prácticas. La versión estándar es el guion original; las
 * versiones breve (≈5 min) y extendida (≈20 min) escalan todos los pasos en proporción,
 * conservando la estructura y el peso relativo de cada fase.
 */

export type DurationVariant = 'breve' | 'estandar' | 'extendida';

export const VARIANT_LABEL: Record<DurationVariant, string> = {
  breve: 'Breve',
  estandar: 'Estándar',
  extendida: 'Extendida',
};

const TARGET_SEC: Record<Exclude<DurationVariant, 'estandar'>, number> = { breve: 300, extendida: 1200 };

/** Ningún paso baja de 20 s: por debajo, la instrucción no da tiempo a hacerse. */
const MIN_STEP_SEC = 20;

export function scaleSteps(steps: GuidedStep[], variant: DurationVariant): GuidedStep[] {
  if (variant === 'estandar') return steps;
  const total = totalDurationSec(steps);
  const target = TARGET_SEC[variant];
  const factor = target / total;
  return steps.map((s) => ({ ...s, durationSec: Math.max(MIN_STEP_SEC, Math.round((s.durationSec * factor) / 5) * 5) }));
}

/**
 * Variantes que tienen sentido para un guion: no se ofrece "breve" si la práctica ya
 * dura ≤ 6 min, ni "extendida" si ya dura ≥ 18 min.
 */
export function availableVariants(steps: GuidedStep[]): DurationVariant[] {
  const total = totalDurationSec(steps);
  const out: DurationVariant[] = [];
  if (total > 360) out.push('breve');
  out.push('estandar');
  if (total < 1080) out.push('extendida');
  return out;
}
