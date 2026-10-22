'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { useState } from 'react';
import { SHADOW_LINKS, SHADOW_QUESTIONS } from '@/domain/typologies';
import { PRACTICE_SUMMARY_BY_ID, PROGRAM_INDEX } from '@/domain/practiceIndex';
import { fadeUp, stagger } from '@/lib/motion';
import { Button, buttonStyles } from '@/components/ui/Button';

const link = 'text-sage-700 underline decoration-sage-300 underline-offset-2 hover:decoration-sage-700';

/**
 * Cuestionario de la sombra: diez preguntas abiertas para notar proyecciones. Sin puntaje y
 * sin guardar nada: lo que escribas vive sólo mientras la página está abierta.
 */
export function ShadowQuestions() {
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState('');
  const written = Object.values(notes).filter((x) => x.trim()).length;
  const program = PROGRAM_INDEX.find((p) => p.id === SHADOW_LINKS.programId);

  function clear() {
    setNotes({});
    setNotice('Borraste lo que escribiste.');
  }

  return (
    <m.div variants={stagger(0.06)} initial="hidden" animate="show" className="mx-auto max-w-3xl">
      <m.header variants={fadeUp}>
        <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Laboratorio · Jung</p>
        <h1 className="mt-2 font-serif text-4xl text-stone-800">Preguntas para mirar tu sombra</h1>
        <p className="mt-3 rounded-xl border border-stone-300 bg-stone-100 px-4 py-3 text-[15px] font-medium leading-relaxed text-stone-800">
          Es una herramienta para pensarte, no un test validado. No diagnostica ni define quién eres.
        </p>
        <p className="mt-4 leading-relaxed text-stone-600">
          Para Jung, la sombra reúne lo que no aceptamos de nosotros. Muchas veces la vemos primero en otras personas. Estas diez preguntas
          no tienen puntaje ni respuestas correctas. Léelas despacio, elige las que te muevan algo y piensa o escribe sobre ellas.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-stone-600">
          Aquí no se guarda nada. Si escribes en los recuadros, se borra al cerrar la página. Si quieres conservarlo, anótalo en papel.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-stone-600">
          No toda molestia es proyección. Si alguien te hace daño, tu enojo es válido y protegerte es lo primero.
        </p>
      </m.header>

      <p aria-live="polite" className="mt-4 min-h-[1.25rem] text-sm text-stone-600">
        {notice}
      </p>

      <m.section variants={fadeUp} aria-labelledby="sombra-preguntas" className="mt-4">
        <h2 id="sombra-preguntas" className="sr-only">
          Preguntas
        </h2>
        <p className="text-sm tabular-nums text-stone-700">
          {SHADOW_QUESTIONS.length} preguntas · escribiste en {written}
        </p>
        <ol className="mt-4 space-y-4">
          {SHADOW_QUESTIONS.map((q, i) => (
            <li key={q.id} className="rounded-2xl border border-stone-200 bg-white p-5">
              <label htmlFor={`sombra-${q.id}`} className="block font-serif text-lg leading-snug text-stone-800">
                <span className="mr-2 text-sm tabular-nums text-stone-500">{i + 1}.</span>
                {q.question}
              </label>
              <p id={`sombra-${q.id}-para`} className="mt-2 text-sm leading-relaxed text-stone-600">
                <span className="font-medium">Para qué sirve: </span>
                {q.purpose}
              </p>
              <textarea
                id={`sombra-${q.id}`}
                aria-describedby={`sombra-${q.id}-para`}
                value={notes[q.id] ?? ''}
                onChange={(e) => {
                  setNotice('');
                  setNotes((prev) => ({ ...prev, [q.id]: e.target.value }));
                }}
                rows={2}
                placeholder="Opcional. No se guarda."
                className="mt-3 w-full resize-y rounded-xl border border-stone-300 bg-white px-3 py-2 text-[15px] text-stone-800 placeholder:text-stone-500 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200"
              />
            </li>
          ))}
        </ol>
      </m.section>

      <m.section variants={fadeUp} aria-labelledby="sombra-seguir" className="mt-10 rounded-2xl border border-sage-200 bg-sage-50/60 p-5">
        <h2 id="sombra-seguir" className="font-serif text-xl text-stone-800">
          Para seguir
        </h2>
        <p className="mt-2 text-[15px] leading-relaxed text-stone-700">
          Integrar la sombra no es actuarla, sino reconocerla y darle un lugar sano. Si una pregunta te dejó algo, puedes trabajarlo con una
          práctica guiada o con el programa de cuatro semanas.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {SHADOW_LINKS.practiceIds.map((id) => {
            const p = PRACTICE_SUMMARY_BY_ID[id];
            return p ? (
              <Link key={id} href={`/gimnasio/${id}`} className={buttonStyles('secondary')}>
                {p.title}
              </Link>
            ) : null;
          })}
          {program && (
            <Link href={`/programas/${program.id}`} className={buttonStyles('primary')}>
              Programa: {program.title}
            </Link>
          )}
        </div>
        <p className="mt-4 text-sm text-stone-600">
          Para profundizar en estas ideas:{' '}
          <Link href="/biblioteca/psicologia-de-jung" className={link}>
            Jung: sombra, complejos, arquetipos e individuación
          </Link>
        </p>
      </m.section>

      <div className="mt-10 border-t border-stone-200 pt-6">
        <Button variant="ghost" onClick={clear} disabled={written === 0}>
          Borrar mis respuestas
        </Button>
      </div>
    </m.div>
  );
}
