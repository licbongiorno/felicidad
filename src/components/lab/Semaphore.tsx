'use client';

import Link from 'next/link';
import { AnimatePresence, m } from 'motion/react';
import { useState } from 'react';
import { zoneOf, ZONES, type Zone } from '@/domain/lab';
import { PRACTICE_BY_ID } from '@/domain/practices';
import { EASE_OUT, fadeUp, stagger } from '@/lib/motion';
import { IntensityScale } from '@/components/ui/IntensityScale';
import { CrisisResources } from '@/components/safety/CrisisResources';
import { useToolbox } from './useToolbox';

/** Colores de zona: tonos apagados del jardín, sin rojos de alarma. */
const ZONE_BG: Record<Zone, string> = { verde: 'bg-sage-500', amarillo: 'bg-garden-petal-b', rojo: 'bg-garden-petal-a' };

export function ZoneDot({ zone, active = true }: { zone: Zone; active?: boolean }) {
  return <span aria-hidden className={`inline-block h-3.5 w-3.5 shrink-0 rounded-full ${ZONE_BG[zone]} ${active ? '' : 'opacity-25'}`} />;
}

/**
 * Semáforo emocional: según la intensidad, qué hacer ahora. Primero el cuerpo cuando la
 * emoción está al máximo; reflexionar cuando se puede pensar. Usa la caja del usuario.
 */
export function Semaphore() {
  const [intensity, setIntensity] = useState<number | null>(null);
  const { toolbox, entry } = useToolbox();
  const info = intensity === null ? null : zoneOf(intensity);
  const mine = info ? toolbox.practices[info.zone].filter((id) => PRACTICE_BY_ID[id]) : [];
  const suggested = info ? (mine.length ? mine : info.practices) : [];

  return (
    <m.div variants={stagger(0.06)} initial="hidden" animate="show" className="mx-auto max-w-xl">
      <m.header variants={fadeUp}>
        <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Laboratorio</p>
        <h1 className="mt-2 font-serif text-4xl text-stone-800">Semáforo emocional</h1>
        <p className="mt-4 leading-relaxed text-stone-600">
          No todas las herramientas sirven a cualquier intensidad. Indica cuán fuerte es lo que sientes ahora y te mostramos qué hacer
          primero.
        </p>
      </m.header>

      <m.div variants={fadeUp} className="mt-8 flex items-stretch gap-5 rounded-3xl border border-stone-200 bg-white p-6 shadow-soft">
        <div className="flex flex-col justify-between gap-3 rounded-full bg-stone-800 px-2.5 py-3" aria-hidden>
          {[...ZONES].reverse().map((z) => (
            <m.span
              key={z.zone}
              className={`h-7 w-7 rounded-full ${ZONE_BG[z.zone]}`}
              animate={{ opacity: info?.zone === z.zone ? 1 : 0.18, scale: info?.zone === z.zone ? 1.08 : 1 }}
              transition={{ duration: 0.5, ease: EASE_OUT }}
            />
          ))}
        </div>
        <div className="min-w-0 flex-1">
          <IntensityScale label="¿Cuán intensa es la emoción ahora?" value={intensity} onChange={setIntensity} lowAnchor="0 · nada" highAnchor="10 · máxima" />
        </div>
      </m.div>

      <AnimatePresence mode="wait">
        {info && (
          <m.section
            key={info.zone}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
            className="mt-6 rounded-3xl border border-stone-200 bg-white p-6 shadow-soft"
            aria-live="polite"
          >
            <h2 className="flex items-center gap-3 font-serif text-2xl text-stone-800">
              <ZoneDot zone={info.zone} />
              {info.title}
            </h2>
            <p className="mt-2 leading-relaxed text-stone-600">{info.meaning}</p>

            {info.zone !== 'verde' && toolbox.signals[info.zone] && (
              <p className="mt-4 rounded-xl bg-stone-100 px-4 py-3 text-sm leading-relaxed text-stone-700">
                <span className="font-medium">Tus señales: </span>
                {toolbox.signals[info.zone]}
              </p>
            )}

            <p className="mt-5 text-xs uppercase tracking-[0.14em] text-stone-500">{mine.length ? 'Lo que elegiste para esta zona' : 'Para empezar'}</p>
            <ul className="mt-2 grid gap-2">
              {suggested.map((id) => (
                <li key={id}>
                  <Link
                    href={`/gimnasio/${id}`}
                    className="group flex items-center justify-between rounded-2xl border border-stone-200 px-4 py-3 transition-[border-color,box-shadow] hover:border-sage-300 hover:shadow-soft"
                  >
                    <span className="font-serif text-lg text-stone-800">{PRACTICE_BY_ID[id].title}</span>
                    <span className="text-stone-500 transition-transform group-hover:translate-x-0.5" aria-hidden>
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {toolbox.own[info.zone] && (
              <p className="mt-4 text-sm leading-relaxed text-stone-700">
                <span className="font-medium">También te ayuda: </span>
                {toolbox.own[info.zone]}
              </p>
            )}
            {toolbox.frases && (
              <p className="mt-3 font-serif text-lg leading-relaxed text-stone-800">«{toolbox.frases.split('\n')[0]}»</p>
            )}

            {info.zone === 'rojo' && (
              <div className="mt-6 border-t border-stone-100 pt-4">
                <p className="text-sm font-medium text-stone-800">Si hay riesgo de hacerte daño, pide ayuda ahora</p>
                <CrisisResources className="mt-1" />
                {toolbox.personas && <p className="mt-3 text-sm text-stone-700">Tus personas: {toolbox.personas}</p>}
              </div>
            )}
            {info.zone === 'verde' && (
              <p className="mt-5 text-sm text-stone-600">
                También puedes ponerle nombre en la{' '}
                <Link href="/biblioteca/rueda-de-emociones" className="text-sage-700 underline decoration-sage-300 underline-offset-2">
                  rueda de emociones
                </Link>{' '}
                o usar el{' '}
                <Link href="/antidotos" className="text-sage-700 underline decoration-sage-300 underline-offset-2">
                  antídoto
                </Link>{' '}
                de lo que sientes.
              </p>
            )}
          </m.section>
        )}
      </AnimatePresence>

      <m.p variants={fadeUp} className="mt-8 text-sm text-stone-600">
        {entry ? 'Tu semáforo usa lo que guardaste en tu caja de herramientas. ' : 'Personaliza lo que aparece en cada zona. '}
        <Link href="/laboratorio/caja" className="text-sage-700 underline decoration-sage-300 underline-offset-2">
          {entry ? 'Editar mi caja' : 'Armar mi caja de herramientas'}
        </Link>
      </m.p>
    </m.div>
  );
}
