'use client';

import { m, useScroll, useSpring } from 'motion/react';

/** Barra fina de progreso de lectura, ligada al desplazamiento de la página. */
export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return <m.div aria-hidden style={{ scaleX, originX: 0 }} className="fixed inset-x-0 top-0 z-40 h-0.5 bg-sage-500" />;
}
