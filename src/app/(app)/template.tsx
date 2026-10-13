'use client';

import { m } from 'motion/react';
import { EASE_OUT } from '@/lib/motion';

/** Las plantillas se remontan en cada navegación: transición suave entre secciones. */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <m.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: EASE_OUT }}>
      {children}
    </m.div>
  );
}
