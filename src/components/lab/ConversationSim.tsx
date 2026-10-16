'use client';

import Link from 'next/link';
import { AnimatePresence, m } from 'motion/react';
import { useState } from 'react';
import { STYLE_LABEL, type SimOption, type Simulation } from '@/domain/lab';
import { PRACTICE_SUMMARY_BY_ID as PRACTICE_BY_ID } from '@/domain/practiceIndex';
import { collapse, fadeUp, gentleSpring, stagger } from '@/lib/motion';
import { haptic } from '@/lib/haptics';
import { Button, buttonStyles } from '@/components/ui/Button';

interface Turn {
  line: string;
  reply: SimOption;
}

/**
 * Simulador de conversación: la otra persona habla, eliges una respuesta y recibes una
 * explicación. Las respuestas pasivas o agresivas no «pierden»: invitan a probar otra.
 */
export function ConversationSim({ sim }: { sim: Simulation }) {
  const [step, setStep] = useState(0);
  const [chosen, setChosen] = useState<SimOption | null>(null);
  const [history, setHistory] = useState<Turn[]>([]);
  const [tries, setTries] = useState(0);
  const done = step >= sim.steps.length;
  const current = sim.steps[Math.min(step, sim.steps.length - 1)];

  function choose(o: SimOption) {
    haptic(o.style === 'asertivo' ? 'success' : 'tick');
    setChosen(o);
    setTries((t) => t + 1);
  }

  function next() {
    if (!chosen) return;
    setHistory((h) => [...h, { line: current.line, reply: chosen }]);
    setChosen(null);
    setStep((s) => s + 1);
  }

  function restart() {
    setStep(0);
    setChosen(null);
    setHistory([]);
    setTries(0);
  }

  return (
    <div className="mx-auto max-w-2xl">
      <m.header variants={stagger(0.06)} initial="hidden" animate="show">
        <m.p variants={fadeUp} className="text-xs uppercase tracking-[0.2em] text-stone-500">
          Simulador de conversación · {sim.skills.map((s) => PRACTICE_BY_ID[s]?.title.split(':')[0] ?? s).join(' · ')}
        </m.p>
        <m.h1 variants={fadeUp} className="mt-2 font-serif text-4xl text-stone-800">
          {sim.title}
        </m.h1>
        <m.p variants={fadeUp} className="mt-4 leading-relaxed text-stone-600">
          {sim.context}
        </m.p>
        <m.p variants={fadeUp} className="mt-2 text-sm text-stone-600">
          <span className="font-medium text-stone-700">Tu objetivo: </span>
          {sim.goal}
        </m.p>
      </m.header>

      <ol className="mt-10 space-y-5" aria-live="polite">
        {history.map((t, i) => (
          <li key={i} className="space-y-3">
            <Bubble who={sim.other}>{t.line}</Bubble>
            <Bubble who="Tú" mine>
              {t.reply.text}
            </Bubble>
          </li>
        ))}

        {!done && (
          <li className="space-y-4">
            <Bubble who={sim.other}>{current.line}</Bubble>
            <div role="radiogroup" aria-label="Elige tu respuesta" className="grid gap-2">
              {current.options.map((o) => {
                const active = chosen === o;
                return (
                  <button
                    key={o.text}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => choose(o)}
                    className={`relative rounded-2xl px-4 py-3 text-left text-[15px] leading-relaxed ring-1 ring-inset transition-colors ${
                      active ? 'text-stone-50 ring-sage-700' : 'bg-white text-stone-700 ring-stone-200 hover:ring-stone-300'
                    }`}
                  >
                    {active && <m.span layoutId={`sim-${sim.id}`} transition={gentleSpring} className="absolute inset-0 rounded-2xl bg-sage-700" />}
                    <span className="relative">{o.text}</span>
                  </button>
                );
              })}
            </div>
            <AnimatePresence initial={false} mode="wait">
              {chosen && (
                <m.div key={chosen.text} variants={collapse} initial="hidden" animate="show" exit="exit" className="overflow-hidden">
                  <div className={`rounded-2xl p-4 ${chosen.style === 'asertivo' ? 'border border-sage-200 bg-sage-50/70' : 'border border-stone-200 bg-white'}`}>
                    <p className="text-xs uppercase tracking-[0.14em] text-stone-500">Respuesta {STYLE_LABEL[chosen.style].toLowerCase()}</p>
                    <p className="mt-1 text-sm leading-relaxed text-stone-700">{chosen.feedback}</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {chosen.style === 'asertivo' ? (
                        <Button onClick={next}>{step === sim.steps.length - 1 ? 'Terminar' : 'Seguir la conversación'}</Button>
                      ) : (
                        <>
                          <Button variant="secondary" onClick={() => setChosen(null)}>
                            Probar otra respuesta
                          </Button>
                          <Button variant="ghost" onClick={next}>
                            Seguir igual
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </m.div>
              )}
            </AnimatePresence>
          </li>
        )}
      </ol>

      {done && (
        <m.section variants={stagger(0.1)} initial="hidden" animate="show" className="mt-10 rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
          <m.h2 variants={fadeUp} className="font-serif text-2xl text-stone-800">
            Lo que practicaste
          </m.h2>
          <m.p variants={fadeUp} className="mt-2 leading-relaxed text-stone-600">
            {sim.closing}
          </m.p>
          <m.p variants={fadeUp} className="mt-3 text-sm text-stone-500">
            Elegiste {history.filter((t) => t.reply.style === 'asertivo').length} de {history.length} respuestas asertivas, en {tries}{' '}
            {tries === 1 ? 'intento' : 'intentos'}. Probar varias opciones también es aprender.
          </m.p>
          <m.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
            <Link href="/diario?nuevo=conversacion" className={buttonStyles('primary')}>
              Preparar una conversación real
            </Link>
            <Button variant="secondary" onClick={restart}>
              Repetir
            </Button>
            <Link href="/laboratorio/conversaciones" className={buttonStyles('ghost')}>
              Otra situación
            </Link>
          </m.div>
        </m.section>
      )}
    </div>
  );
}

function Bubble({ who, mine = false, children }: { who: string; mine?: boolean; children: React.ReactNode }) {
  return (
    <m.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className={`flex ${mine ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${mine ? 'rounded-br-md bg-sage-100 text-stone-800' : 'rounded-bl-md border border-stone-200 bg-white text-stone-800'}`}>
        <p className="text-[11px] uppercase tracking-[0.14em] text-stone-500">{who}</p>
        <p className="mt-1 font-serif text-[17px] leading-relaxed">{children}</p>
      </div>
    </m.div>
  );
}
