'use client';

import Link from 'next/link';
import { AnimatePresence, m } from 'motion/react';
import { useState } from 'react';
import {
  NVC_FEELINGS_MET,
  NVC_FEELINGS_UNMET,
  NVC_NEEDS,
  NVC_PART_LABEL,
  NVC_PSEUDO_FEELINGS,
  NVC_REWRITES,
  NVC_SORT_SETS,
  type NvcRewrite,
  type NvcSortSet,
} from '@/domain/lab-cnv';
import { collapse, EASE_OUT, fadeUp, stagger } from '@/lib/motion';
import { haptic } from '@/lib/haptics';
import { Button, buttonStyles } from '@/components/ui/Button';
import { Tabs } from '@/components/ui/Tabs';

const PARTS = Object.keys(NVC_PART_LABEL) as (keyof NvcRewrite['parts'])[];

/** Un juego de dos opciones: ¿forma CNV o no? Sin puntaje guardado. */
function SortGame({ set }: { set: NvcSortSet }) {
  const [i, setI] = useState(0);
  const [answer, setAnswer] = useState<boolean | null>(null);
  const [right, setRight] = useState(0);
  const done = i >= set.items.length;
  const item = set.items[Math.min(i, set.items.length - 1)];

  function pick(nvc: boolean) {
    if (answer !== null) return;
    setAnswer(nvc);
    if (nvc === item.nvc) {
      setRight((r) => r + 1);
      haptic('success');
    } else haptic('tick');
  }

  function next() {
    setAnswer(null);
    setI((x) => x + 1);
  }

  function again() {
    setI(0);
    setAnswer(null);
    setRight(0);
  }

  if (done)
    return (
      <div className="mt-6 rounded-3xl border border-stone-200 bg-white p-8 shadow-soft">
        <p className="font-serif text-5xl text-stone-800">
          {right} <span className="text-2xl text-stone-500">de {set.items.length}</span>
        </p>
        <p className="mt-4 leading-relaxed text-stone-600">En una charla real cuesta más, sobre todo con enojo. Por eso ayuda entrenarlo en calma.</p>
        <div className="mt-6">
          <Button variant="secondary" onClick={again}>
            Jugar de nuevo
          </Button>
        </div>
      </div>
    );

  return (
    <div aria-live="polite">
      <p className="mt-6 leading-relaxed text-stone-600">{set.intro}</p>
      <AnimatePresence mode="wait">
        <m.div
          key={i}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE_OUT } }}
          exit={{ opacity: 0, x: -16, transition: { duration: 0.2 } }}
          className="mt-6 rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-soft"
        >
          <p className="text-xs tabular-nums text-stone-500">
            {i + 1} de {set.items.length}
          </p>
          <p className="mt-4 font-serif text-2xl leading-snug text-stone-800">«{item.text}»</p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {[true, false].map((k) => {
              const isAnswer = answer !== null && item.nvc === k;
              const isWrongPick = answer === k && item.nvc !== k;
              return (
                <button
                  key={String(k)}
                  type="button"
                  onClick={() => pick(k)}
                  disabled={answer !== null}
                  className={`rounded-2xl px-4 py-3 text-[15px] font-medium ring-1 ring-inset transition-colors ${
                    isAnswer ? 'bg-sage-700 text-stone-50 ring-sage-700' : isWrongPick ? 'bg-stone-100 text-stone-500 ring-stone-200' : 'bg-white text-stone-700 ring-stone-200 hover:ring-stone-300'
                  }`}
                >
                  {k ? set.yes : set.no}
                </button>
              );
            })}
          </div>
          <AnimatePresence initial={false}>
            {answer !== null && (
              <m.div variants={collapse} initial="hidden" animate="show" exit="exit" className="overflow-hidden">
                <p className="mt-6 text-sm leading-relaxed text-stone-700">
                  <span className="font-medium">{answer === item.nvc ? 'Así es. ' : 'Mira de nuevo. '}</span>
                  {item.why}
                </p>
                <div className="mt-6">
                  <Button onClick={next}>{i === set.items.length - 1 ? 'Ver resumen' : 'Siguiente'}</Button>
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </m.div>
      </AnimatePresence>
    </div>
  );
}

/** Reescribir del «chacal» a la «jirafa». Lo escrito queda sólo en pantalla: no se guarda. */
function Rewrite() {
  const [i, setI] = useState(0);
  const [text, setText] = useState('');
  const [shown, setShown] = useState(false);
  const item = NVC_REWRITES[i];

  function next() {
    setI((x) => (x + 1) % NVC_REWRITES.length);
    setText('');
    setShown(false);
  }

  return (
    <div className="mt-6 rounded-3xl border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
      <p className="text-xs tabular-nums text-stone-500">
        {i + 1} de {NVC_REWRITES.length}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.context}</p>
      <p className="mt-4 font-serif text-2xl leading-snug text-stone-800">«{item.reactive}»</p>
      <label className="mt-6 block">
        <span className="mb-2 block text-sm font-medium text-stone-700">Tu versión: qué pasó, qué sientes, qué necesitas y qué pides</span>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          maxLength={600}
          placeholder="Cuando… me siento… porque necesito… ¿Podrías…?"
          className="w-full rounded-xl border border-stone-200 bg-stone-50/60 px-4 py-3 font-serif text-[17px] leading-relaxed text-stone-800 placeholder:text-stone-500 focus:border-sage-400 focus:bg-white focus:outline-none"
        />
        <span className="mt-1 block text-xs text-stone-500">No se guarda: queda sólo en esta pantalla.</span>
      </label>
      <div className="mt-4 flex flex-wrap gap-3">
        {!shown && <Button onClick={() => setShown(true)}>Ver una versión posible</Button>}
        <Button variant="secondary" onClick={next}>
          Otra frase
        </Button>
      </div>
      <AnimatePresence initial={false}>
        {shown && (
          <m.dl variants={collapse} initial="hidden" animate="show" exit="exit" className="mt-6 overflow-hidden">
            {PARTS.map((p) => (
              <div key={p} className="border-t border-stone-100 py-3 first:border-t-0">
                <dt className="text-xs uppercase tracking-[0.15em] text-sage-700">{NVC_PART_LABEL[p]}</dt>
                <dd className="mt-1 leading-relaxed text-stone-800">{item.parts[p]}</dd>
              </div>
            ))}
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              No hay una única forma correcta. Compara: ¿tu versión describe sin juzgar, nombra una emoción tuya y pide algo concreto que
              la otra persona pueda rechazar?
            </p>
          </m.dl>
        )}
      </AnimatePresence>
    </div>
  );
}

function WordList({ title, hint, words }: { title: string; hint?: string; words: string[] }) {
  return (
    <section className="mt-6">
      <h2 className="font-serif text-xl text-stone-800">{title}</h2>
      {hint && <p className="mt-1 text-sm leading-relaxed text-stone-600">{hint}</p>}
      <ul className="mt-3 flex flex-wrap gap-2">
        {words.map((w) => (
          <li key={w} className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700">
            {w}
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Vocabulario de sentimientos y necesidades, para buscar la palabra justa. */
function Vocabulary() {
  return (
    <div className="mt-2">
      <WordList title="Cuando lo que necesitas está cubierto" words={NVC_FEELINGS_MET} />
      <WordList title="Cuando lo que necesitas falta" words={NVC_FEELINGS_UNMET} />
      <WordList
        title="Parecen sentimientos, pero no lo son"
        hint="Estas palabras dicen lo que crees que el otro te hizo. Debajo suele haber tristeza, miedo o enojo."
        words={NVC_PSEUDO_FEELINGS}
      />
      {NVC_NEEDS.map((g) => (
        <WordList key={g.group} title={`Necesidades · ${g.group}`} words={g.needs} />
      ))}
    </div>
  );
}

/**
 * Laboratorio de comunicación no violenta: distinguir los componentes y reescribir frases
 * reactivas. Nada de lo que se responde o escribe se guarda.
 */
export function NvcTrainer() {
  return (
    <div className="mx-auto max-w-xl">
      <m.header variants={stagger(0.06)} initial="hidden" animate="show">
        <m.p variants={fadeUp} className="text-xs uppercase tracking-[0.2em] text-stone-500">
          Entrenamiento · comunicación no violenta
        </m.p>
        <m.h1 variants={fadeUp} className="mt-2 font-serif text-4xl text-stone-800">
          Del chacal a la jirafa
        </m.h1>
        <m.p variants={fadeUp} className="mt-4 leading-relaxed text-stone-600">
          Marshall Rosenberg llamó «chacal» al lenguaje que juzga y exige, y «jirafa» al que observa, nombra lo que siente, busca la
          necesidad y pide. Aquí puedes practicar cada parte.
        </m.p>
      </m.header>
      <Tabs
        className="mt-8"
        tabs={[
          ...NVC_SORT_SETS.map((s) => ({ id: s.id, label: s.yes, content: <SortGame key={s.id} set={s} /> })),
          { id: 'reescribir', label: 'Reescribir', content: <Rewrite /> },
          { id: 'vocabulario', label: 'Vocabulario', content: <Vocabulary /> },
        ]}
      />
      <p className="mt-8 text-sm leading-relaxed text-stone-600">
        Si alguien te agrede o te sientes en peligro, la prioridad es tu seguridad, no la forma de hablar. Puedes llamar a la Línea 144 o
        al 911.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/biblioteca/cnv-cuatro-componentes" className={buttonStyles('secondary')}>
          Leer los cuatro componentes
        </Link>
        <Link href="/programas/cnv-seis-semanas" className={buttonStyles('ghost')}>
          Programa de seis semanas
        </Link>
      </div>
    </div>
  );
}
