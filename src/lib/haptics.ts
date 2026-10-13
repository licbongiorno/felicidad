/**
 * Retroalimentación háptica mínima (Android/Chrome; iOS Safari la ignora).
 * Pulsos muy cortos: confirmar el gesto sin sobresaltar.
 */
const PATTERNS = {
  tick: 4,
  select: 10,
  success: [12, 60, 18],
} as const;

export function haptic(kind: keyof typeof PATTERNS = 'tick'): void {
  if (typeof navigator === 'undefined' || typeof navigator.vibrate !== 'function') return;
  try {
    navigator.vibrate(PATTERNS[kind] as number | number[]);
  } catch {
    /* sin soporte o sin activación de usuario */
  }
}
