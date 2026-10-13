'use client';

import { AnimatePresence, m } from 'motion/react';
import { useState } from 'react';
import { toDateKey } from '@/domain/metrics';
import type { DailyCheckin, PermaKey } from '@/domain/types';
import { useProgressStore } from '@/store/useProgressStore';
import { collapse } from '@/lib/motion';
import { haptic } from '@/lib/haptics';
import { Button } from '@/components/ui/Button';
import { IntensityScale } from '@/components/ui/IntensityScale';
import { DrawnCheck } from '@/components/motion/Reveal';

// Ítems ad hoc inspirados en PERMA (Seligman, 2011). NO son un instrumento validado:
// para uso clínico formal emplear el PERMA-Profiler (Butler & Kern, 2016) con su licencia.
const PERMA_ITEMS: { key: PermaKey; label: string }[] = [
  { key: 'P', label: 'Sentí emociones positivas (calma, alegría, gratitud)' },
  { key: 'E', label: 'Estuve absorto/a en algo que hacía' },
  { key: 'R', label: 'Me sentí conectado/a con otras personas' },
  { key: 'M', label: 'Lo que hice tuvo sentido para mí' },
  { key: 'A', label: 'Avancé en algo que me importa' },
];

export function CheckinForm({ existing }: { existing: DailyCheckin | undefined }) {
  const saveCheckin = useProgressStore((s) => s.saveCheckin);
  const [mood, setMood] = useState<number | null>(existing?.mood ?? null);
  const [perma, setPerma] = useState<Partial<Record<PermaKey, number>>>(existing?.perma ?? {});
  const [showPerma, setShowPerma] = useState(Boolean(existing?.perma));
  const [saved, setSaved] = useState(false);

  function submit() {
    if (mood === null) return;
    saveCheckin({ date: toDateKey(new Date()), mood, perma: showPerma ? perma : null });
    haptic('success');
    setSaved(true);
  }

  return (
    <div className="grid gap-x-12 gap-y-6 lg:grid-cols-2">
      <div>
        <IntensityScale
          label="¿Cómo está tu ánimo hoy, en general?"
          value={mood}
          onChange={(v) => {
            setMood(v);
            setSaved(false);
          }}
          lowAnchor="0 · muy bajo"
          highAnchor="10 · excelente"
        />
        <button
          type="button"
          onClick={() => setShowPerma((s) => !s)}
          aria-expanded={showPerma}
          className="group mt-6 inline-flex items-center gap-2 text-sm text-stone-600 transition-colors hover:text-stone-800"
        >
          <m.span animate={{ rotate: showPerma ? 45 : 0 }} className="inline-block text-base leading-none">
            +
          </m.span>
          {showPerma ? 'Ocultar dimensiones de bienestar' : 'Añadir dimensiones de bienestar (opcional)'}
        </button>
      </div>

      <div className="flex flex-col justify-between">
        <AnimatePresence initial={false}>
          {showPerma && (
            <m.div variants={collapse} initial="hidden" animate="show" exit="exit" className="overflow-hidden">
              <div className="space-y-5 pb-2">
                {PERMA_ITEMS.map(({ key, label }) => (
                  <label key={key} className="block">
                    <span className="flex justify-between gap-4 text-sm text-stone-600">
                      {label}
                      <span className="tabular-nums text-stone-500">{perma[key] ?? '–'}</span>
                    </span>
                    <input
                      type="range"
                      min={0}
                      max={10}
                      value={perma[key] ?? 5}
                      onChange={(e) => {
                        setPerma((p) => ({ ...p, [key]: Number(e.target.value) }));
                        setSaved(false);
                      }}
                      className="mt-3 w-full accent-sage-600"
                    />
                  </label>
                ))}
                <p className="text-xs text-stone-500">
                  Ítems orientativos inspirados en el modelo PERMA; no constituyen un instrumento validado.
                </p>
              </div>
            </m.div>
          )}
        </AnimatePresence>

        <div className="mt-6 flex items-center justify-end gap-4">
          <AnimatePresence>
            {saved && (
              <m.span
                initial={{ opacity: 0, x: 6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-sm text-sage-700"
              >
                <DrawnCheck className="h-5 w-5" />
                Guardado
              </m.span>
            )}
          </AnimatePresence>
          <Button disabled={mood === null} onClick={submit}>
            {existing ? 'Actualizar' : 'Registrar'}
          </Button>
        </div>
      </div>
    </div>
  );
}
