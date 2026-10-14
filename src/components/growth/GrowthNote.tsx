'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { fadeUp, gentleSpring } from '@/lib/motion';
import { IconSprout } from '@/components/ui/icons';

/** Aviso sobrio al terminar una práctica: qué creció en el jardín. Sin «¡bien hecho!». */
export function GrowthNote({ note, className = '' }: { note: string; className?: string }) {
  return (
    <m.div variants={fadeUp} className={`mx-auto flex max-w-md items-center gap-4 rounded-2xl border border-sage-200 bg-sage-50/70 p-4 text-left ${className}`}>
      <m.span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sage-700 shadow-soft"
        initial={{ scale: 0.4, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ ...gentleSpring, delay: 0.6 }}
      >
        <IconSprout width={22} height={22} />
      </m.span>
      <p className="text-sm leading-relaxed text-stone-700">
        {note}{' '}
        <Link href="/crecimiento" className="text-sage-700 underline decoration-sage-300 underline-offset-2 hover:decoration-sage-700">
          Ver tu jardín
        </Link>
      </p>
    </m.div>
  );
}
