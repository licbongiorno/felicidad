'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { fadeUp } from '@/lib/motion';
import { useGrowth } from '@/hooks/useGrowth';
import { Garden } from './Garden';

/** Tarjeta del panel: el jardín en pequeño, los días del mes y el próximo hito. */
export function GrowthCard({ className = '' }: { className?: string }) {
  const { garden, month } = useGrowth();
  return (
    <m.section variants={fadeUp} className={`overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-soft transition-shadow duration-500 hover:shadow-lift ${className}`}>
      <Link href="/crecimiento" className="group block focus-visible:outline-none" aria-label="Ver tu jardín">
        <div className="aspect-[16/7] w-full sm:aspect-[16/5]">
          <Garden garden={garden} compact />
        </div>
        <div className="flex flex-wrap items-end justify-between gap-4 p-6">
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-stone-500">Tu jardín</h2>
            <p className="mt-2 font-serif text-2xl text-stone-800">
              {garden.total === 0 ? 'Listo para la primera semilla' : `${month.days} ${month.days === 1 ? 'día practicado' : 'días practicados'} en ${month.monthLabel}`}
            </p>
            <p className="mt-1 text-sm text-stone-600">
              {garden.next
                ? `Próximo en aparecer: ${garden.next.title.toLowerCase()} (${garden.next.at - garden.total} ${garden.next.at - garden.total === 1 ? 'práctica' : 'prácticas'}).`
                : 'Tu jardín está maduro y sigue creciendo contigo.'}
            </p>
          </div>
          <span className="text-sm text-sage-700 transition-transform group-hover:translate-x-0.5">Ver tu jardín →</span>
        </div>
      </Link>
    </m.section>
  );
}
