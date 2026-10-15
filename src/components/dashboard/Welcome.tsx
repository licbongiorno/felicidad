'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { fadeUp, stagger } from '@/lib/motion';
import { Onboarding } from './Onboarding';

/** Bienvenida para quien aún no tiene registros: un primer paso claro en lugar de un panel vacío. */
export function Welcome() {
  return (
    <m.section variants={stagger(0.08)} initial="hidden" animate="show" className="lg:col-span-3">
      <m.div variants={fadeUp} className="rounded-3xl bg-gradient-to-br from-accent-from to-accent-to p-8 text-accent-fg shadow-lift sm:p-10">
        <p className="text-xs uppercase tracking-[0.25em] text-accent-soft">Bienvenida</p>
        <h2 className="mt-3 max-w-xl font-serif text-3xl leading-tight text-accent-fg sm:text-4xl">
          La mente se entrena como cualquier otra habilidad: con práctica regular y paciencia.
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-accent-muted">
          Dos pasos para empezar: mide cómo estás hoy (un minuto) y responde tres preguntas para armar tu ruta. Todo lo demás puede esperar.
        </p>
        <Link
          href="/evaluaciones"
          className="mt-7 inline-flex items-center rounded-full bg-accent-fg px-5 py-2.5 text-sm font-medium text-accent-from transition-transform duration-200 hover:bg-accent-muted active:scale-[0.97]"
        >
          1 · Medir mi bienestar →
        </Link>
      </m.div>

      <m.div variants={fadeUp} className="mt-6">
        <Onboarding />
      </m.div>
    </m.section>
  );
}
