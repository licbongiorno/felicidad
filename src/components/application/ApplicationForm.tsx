'use client';

import { AnimatePresence, m } from 'motion/react';
import { useState } from 'react';
import { USEFULNESS_LABEL } from '@/domain/application';
import type { Usefulness } from '@/domain/types';
import { useProgressStore } from '@/store/useProgressStore';
import { collapse, gentleSpring } from '@/lib/motion';
import { haptic } from '@/lib/haptics';
import { Button } from '@/components/ui/Button';

const OPTIONS: Usefulness[] = ['util', 'indiferente', 'no-apropiada'];

/**
 * Paso «Revisar»: ¿usaste la habilidad en tu vida?, ¿te sirvió?, ¿qué aprendiste?
 * Decir que no se pudo también es información valiosa: no hay respuesta incorrecta.
 */
export function ApplicationForm({
  practiceId,
  sessionId = null,
  onDone,
  compact = false,
}: {
  practiceId: string;
  sessionId?: string | null;
  onDone?: () => void;
  compact?: boolean;
}) {
  const logApplication = useProgressStore((s) => s.logApplication);
  const [applied, setApplied] = useState<boolean | null>(null);
  const [usefulness, setUsefulness] = useState<Usefulness | null>(null);
  const [note, setNote] = useState('');
  const [saved, setSaved] = useState(false);

  function save() {
    if (applied === null) return;
    logApplication({ practiceId, sessionId, applied, usefulness: applied ? usefulness : null, note: note.trim() || null });
    haptic('success');
    setSaved(true);
    onDone?.();
  }

  if (saved) {
    return (
      <p role="status" className="text-sm leading-relaxed text-stone-700">
        {applied ? 'Guardado. Usarla en tu vida es lo que convierte una práctica en una habilidad.' : 'Guardado. Saber qué se interpuso ayuda a ajustar el plan.'}
      </p>
    );
  }

  const choice = (active: boolean) =>
    `relative rounded-full px-4 py-2 text-sm ring-1 ring-inset transition-colors ${active ? 'text-stone-50 ring-sage-700' : 'bg-white text-stone-700 ring-stone-200 hover:ring-stone-300'}`;

  return (
    <div className="space-y-4">
      <div role="radiogroup" aria-label="¿Pudiste usarla?" className="flex flex-wrap gap-2">
        {[
          { v: true, label: 'Sí, la usé' },
          { v: false, label: 'Todavía no' },
        ].map((o) => (
          <button key={String(o.v)} type="button" role="radio" aria-checked={applied === o.v} onClick={() => setApplied(o.v)} className={choice(applied === o.v)}>
            {applied === o.v && <m.span layoutId={`applied-${practiceId}-${sessionId}`} transition={gentleSpring} className="absolute inset-0 rounded-full bg-sage-700" />}
            <span className="relative">{o.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence initial={false}>
        {applied !== null && (
          <m.div key="detail" variants={collapse} initial="hidden" animate="show" exit="exit" className="space-y-4 overflow-hidden">
            {applied && (
              <div role="radiogroup" aria-label="¿Te sirvió?" className="flex flex-wrap gap-2">
                {OPTIONS.map((u) => (
                  <button key={u} type="button" role="radio" aria-checked={usefulness === u} onClick={() => setUsefulness(u)} className={choice(usefulness === u)}>
                    {usefulness === u && <m.span layoutId={`useful-${practiceId}-${sessionId}`} transition={gentleSpring} className="absolute inset-0 rounded-full bg-sage-700" />}
                    <span className="relative">{USEFULNESS_LABEL[u]}</span>
                  </button>
                ))}
              </div>
            )}
            <label className="block">
              <span className="mb-1.5 block text-sm text-stone-600">
                {applied ? '¿Qué aprendiste o qué cambiarías la próxima vez? (opcional)' : '¿Qué se interpuso? (opcional)'}
              </span>
              <input
                value={note}
                onChange={(e) => setNote(e.target.value.slice(0, 280))}
                placeholder={applied ? 'Ej.: Funcionó mejor cuando lo hice antes de contestar' : 'Ej.: No me acordé en el momento'}
                className="w-full rounded-xl border border-stone-200 bg-stone-50/60 px-4 py-2.5 text-[15px] text-stone-800 placeholder:text-stone-500 focus:border-sage-400 focus:bg-white focus:outline-none"
              />
            </label>
            <div className={compact ? '' : 'flex justify-end'}>
              <Button onClick={save} disabled={applied && !usefulness}>
                Guardar
              </Button>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
