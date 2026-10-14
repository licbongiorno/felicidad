'use client';

import { LazyMotion, MotionConfig } from 'motion/react';
import { useEffect, useState, type ReactNode } from 'react';
import { A11Y_EVENT, readMotionPref } from '@/lib/a11y';
import { calm } from '@/lib/motion';

const loadFeatures = () => import('@/lib/motionFeatures').then((m) => m.default);

/**
 * - `LazyMotion` + componentes `m`: el núcleo de animación va en el JS inicial y las
 *   funciones avanzadas (gestos, layout) se descargan en paralelo tras pintar la página.
 *   `strict` hace fallar cualquier uso residual del componente `motion` completo.
 * - `reducedMotion="user"`: si el sistema pide menos movimiento, sólo se animan opacidades.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  // «Reducir movimiento» de Ajustes fuerza el modo reducido aunque el sistema no lo pida.
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const sync = () => setReduce(readMotionPref() === 'reduce');
    sync();
    window.addEventListener(A11Y_EVENT, sync);
    return () => window.removeEventListener(A11Y_EVENT, sync);
  }, []);
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion={reduce ? 'always' : 'user'} transition={calm}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
