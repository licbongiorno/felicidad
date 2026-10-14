'use client';

import { AnimatePresence, m } from 'motion/react';
import { useState } from 'react';
import { useProgressStore } from '@/store/useProgressStore';
import { Button } from '@/components/ui/Button';

const MAX = 10;

/**
 * Preguntas o temas para llevar a la próxima sesión. Se sincronizan entre dispositivos y
 * aparecen en el informe para el terapeuta. Al terminar la sesión, se pueden borrar.
 */
export function SessionQuestions({ printable = false }: { printable?: boolean }) {
  const questions = useProgressStore((s) => s.personal.questions);
  const updatePersonal = useProgressStore((s) => s.updatePersonal);
  const [text, setText] = useState('');

  function add() {
    const q = text.trim();
    if (!q || questions.length >= MAX) return;
    updatePersonal({ questions: [...questions, q.slice(0, 280)] });
    setText('');
  }

  return (
    <div>
      {questions.length > 0 ? (
        <ol className="space-y-2">
          <AnimatePresence initial={false}>
            {questions.map((q, i) => (
              <m.li
                key={`${i}-${q}`}
                layout
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                className="flex items-start justify-between gap-4 rounded-xl border border-stone-200 bg-white px-4 py-3 text-[15px] leading-relaxed text-stone-800"
              >
                <span>
                  <span className="mr-2 tabular-nums text-stone-500">{i + 1}.</span>
                  {q}
                </span>
                <button
                  type="button"
                  onClick={() => updatePersonal({ questions: questions.filter((_, j) => j !== i) })}
                  className="shrink-0 text-xs text-stone-500 hover:text-stone-700 print:hidden"
                  aria-label={`Quitar la pregunta ${i + 1}`}
                >
                  Quitar
                </button>
              </m.li>
            ))}
          </AnimatePresence>
        </ol>
      ) : (
        <p className="text-sm text-stone-600">Todavía no anotaste nada para la próxima sesión.</p>
      )}
      {!printable || questions.length < MAX ? (
        <div className="mt-3 flex gap-2 print:hidden">
          <input
            value={text}
            onChange={(e) => setText(e.target.value.slice(0, 280))}
            onKeyDown={(e) => e.key === 'Enter' && add()}
            placeholder="Ej.: ¿Por qué me cuesta tanto decir que no en el trabajo?"
            aria-label="Nueva pregunta para la sesión"
            className="min-w-0 flex-1 rounded-xl border border-stone-200 bg-stone-50/60 px-4 py-2.5 text-[15px] text-stone-800 placeholder:text-stone-500 focus:border-sage-400 focus:bg-white focus:outline-none"
          />
          <Button variant="secondary" onClick={add} disabled={!text.trim() || questions.length >= MAX}>
            Anotar
          </Button>
        </div>
      ) : null}
    </div>
  );
}
