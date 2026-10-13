'use client';

import { m } from 'motion/react';
import { useMemo } from 'react';
import { ANTIDOTE_BY_EMOTION } from '@/domain/antidotes';
import type { AfflictiveEmotionId } from '@/domain/types';
import { useProgressStore } from '@/store/useProgressStore';
import { EASE_OUT } from '@/lib/motion';

const DATE = new Intl.DateTimeFormat('es', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });

/**
 * Historial de antídotos: frecuencia por emoción (qué aparece más) y últimos registros
 * con la intensidad antes → después dibujada como un tramo sobre la escala 0–10.
 */
export function AntidoteHistory() {
  const logs = useProgressStore((s) => s.afflictions);

  const byEmotion = useMemo(() => {
    const m = new Map<AfflictiveEmotionId, { n: number; delta: number; complete: number }>();
    for (const l of logs) {
      const cur = m.get(l.emotionId) ?? { n: 0, delta: 0, complete: 0 };
      cur.n += 1;
      if (l.intensityPost !== null) {
        cur.delta += l.intensityPost - l.intensityPre;
        cur.complete += 1;
      }
      m.set(l.emotionId, cur);
    }
    return [...m.entries()].sort((a, b) => b[1].n - a[1].n);
  }, [logs]);

  if (logs.length === 0) return null;
  const max = byEmotion[0]?.[1].n ?? 1;

  return (
    <section className="mt-16">
      <h2 className="text-xs uppercase tracking-[0.2em] text-stone-500">Tu historial · últimos 90 días</h2>

      <div className="mt-6 grid gap-6 lg:grid-cols-5">
        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft lg:col-span-2">
          <h3 className="text-sm text-stone-600">Lo que más aparece</h3>
          <ul className="mt-5 space-y-4">
            {byEmotion.map(([id, v], i) => (
              <li key={id}>
                <div className="flex items-baseline justify-between text-sm">
                  <span className="text-stone-700">{ANTIDOTE_BY_EMOTION[id].emotionLabel}</span>
                  <span className="tabular-nums text-stone-500">
                    {v.n}× {v.complete > 0 && `· ${v.delta / v.complete > 0 ? '+' : ''}${(v.delta / v.complete).toFixed(1)} media`}
                  </span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-stone-100">
                  <m.div
                    className="h-full rounded-full bg-sage-500"
                    style={{ originX: 0 }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: v.n / max }}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.8, ease: EASE_OUT }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft lg:col-span-3">
          <h3 className="text-sm text-stone-600">Registros recientes</h3>
          <ul className="mt-5 divide-y divide-stone-100">
            {logs.slice(0, 6).map((l) => (
              <li key={l.id} className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2 py-3 sm:grid-cols-[10rem_1fr_auto]">
                <div>
                  <p className="text-[15px] text-stone-800">{ANTIDOTE_BY_EMOTION[l.emotionId].emotionLabel}</p>
                  <p className="text-xs text-stone-500">{DATE.format(l.createdAt)}</p>
                </div>
                {/* Tramo antes → después sobre la escala 0–10 */}
                <div className="relative order-3 col-span-2 h-4 sm:order-none sm:col-span-1" aria-hidden>
                  <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-stone-200" />
                  {l.intensityPost !== null && (
                    <div
                      className="absolute top-1/2 h-0.5 -translate-y-1/2 bg-sage-300"
                      style={{
                        left: `${(Math.min(l.intensityPre, l.intensityPost) / 10) * 100}%`,
                        width: `${(Math.abs(l.intensityPre - l.intensityPost) / 10) * 100}%`,
                      }}
                    />
                  )}
                  <span className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-stone-400 bg-white" style={{ left: `${l.intensityPre * 10}%` }} />
                  {l.intensityPost !== null && (
                    <span className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage-700" style={{ left: `${l.intensityPost * 10}%` }} />
                  )}
                </div>
                <p className="text-right text-sm tabular-nums text-stone-600">
                  {l.intensityPre} → {l.intensityPost ?? '–'}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-4 flex items-center gap-4 text-xs text-stone-500">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full border border-stone-400 bg-white" aria-hidden /> antes
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-sage-700" aria-hidden /> después
            </span>
            <span>escala 0–10</span>
          </p>
        </div>
      </div>
    </section>
  );
}
