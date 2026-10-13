import type { Transition, Variants } from 'motion/react';

/**
 * Lenguaje de movimiento de la app.
 * Principio: el movimiento acompaña, nunca llama la atención. Desaceleraciones largas
 * (ease-out), resortes amortiguados sin rebote visible y desplazamientos cortos (≤ 28 px).
 */

export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const calm: Transition = { duration: 0.5, ease: EASE_OUT };

export const gentleSpring: Transition = { type: 'spring', stiffness: 260, damping: 30, mass: 0.9 };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: calm },
};

export const stagger = (step = 0.06, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: step, delayChildren: delay } },
});

/** Transición entre fases de un flujo; `custom` = dirección (1 avanza, -1 retrocede). */
export const phaseVariants: Variants = {
  enter: (d: number) => ({ opacity: 0, x: d * 28, filter: 'blur(2px)' }),
  center: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: EASE_OUT } },
  exit: (d: number) => ({ opacity: 0, x: d * -20, filter: 'blur(2px)', transition: { duration: 0.22, ease: 'easeIn' } }),
};

/** Aparición/colapso de bloques opcionales (avisos, campos condicionales). */
export const collapse: Variants = {
  hidden: { opacity: 0, height: 0 },
  show: { opacity: 1, height: 'auto', transition: { height: calm, opacity: { duration: 0.3, delay: 0.1 } } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.25, ease: 'easeIn' } },
};
