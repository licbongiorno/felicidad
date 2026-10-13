'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { fadeUp, stagger } from '@/lib/motion';
import { buttonStyles } from '@/components/ui/Button';

const GOALS = [
  {
    title: 'Empezar por la base',
    body: 'Conocer las cuatro dimensiones entrenables del bienestar, una por semana.',
    href: '/programas/fundamentos',
    cta: 'Programa Fundamentos',
  },
  {
    title: 'Manejar emociones intensas',
    body: 'Herramientas para bajar la activación y responder en lugar de reaccionar.',
    href: '/programas/regulacion-emocional',
    cta: 'Regulación emocional',
  },
  {
    title: 'Cultivar la compasión',
    body: 'De la gratitud a la compasión activa, hacia otros y hacia ti.',
    href: '/programas/compasion',
    cta: 'Corazón abierto',
  },
];

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
          Dos pasos para empezar: mide cómo estás hoy (un minuto) y elige un recorrido. Todo lo demás puede esperar.
        </p>
        <Link
          href="/evaluaciones"
          className="mt-7 inline-flex items-center rounded-full bg-accent-fg px-5 py-2.5 text-sm font-medium text-accent-from transition-transform duration-200 hover:bg-accent-muted active:scale-[0.97]"
        >
          1 · Medir mi bienestar →
        </Link>
      </m.div>

      <m.p variants={fadeUp} className="mb-4 mt-8 text-xs uppercase tracking-[0.2em] text-stone-500">
        2 · ¿Qué te trae aquí?
      </m.p>
      <m.ul variants={stagger(0.06)} className="grid gap-4 md:grid-cols-3">
        {GOALS.map((g) => (
          <m.li key={g.href} variants={fadeUp}>
            <div className="flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-soft transition-shadow hover:shadow-lift">
              <h3 className="font-serif text-xl text-stone-800">{g.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">{g.body}</p>
              <Link href={g.href} className={buttonStyles('secondary', 'mt-5 self-start')}>
                {g.cta} →
              </Link>
            </div>
          </m.li>
        ))}
      </m.ul>
    </m.section>
  );
}
