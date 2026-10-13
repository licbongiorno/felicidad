'use client';

import { LazyMotion, MotionConfig } from 'motion/react';
import type { ReactNode } from 'react';
import { calm } from '@/lib/motion';

const loadFeatures = () => import('@/lib/motionFeatures').then((m) => m.default);

/**
 * - `LazyMotion` + componentes `m`: el núcleo de animación va en el JS inicial y las
 *   funciones avanzadas (gestos, layout) se descargan en paralelo tras pintar la página.
 *   `strict` hace fallar cualquier uso residual del componente `motion` completo.
 * - `reducedMotion="user"`: si el sistema pide menos movimiento, sólo se animan opacidades.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user" transition={calm}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
