'use client';

import { AnimatePresence, m } from 'motion/react';
import { useMemo, useState } from 'react';
import { TEMPLATE_BY_TYPE } from '@/domain/journal';
import { daysAgo, recordDayKey, toDateKey } from '@/domain/metrics';
import type { JournalEntry, JournalType } from '@/domain/types';
import { collapse, EASE_OUT, gentleSpring } from '@/lib/motion';

const TIME = new Intl.DateTimeFormat('es', { hour: '2-digit', minute: '2-digit' });
const DAY = new Intl.DateTimeFormat('es', { weekday: 'long', day: 'numeric', month: 'long' });

function dayLabel(key: string) {
  if (key === toDateKey(new Date())) return 'Hoy';
  if (key === toDateKey(daysAgo(1))) return 'Ayer';
  return DAY.format(new Date(`${key}T12:00:00`));
}

export function JournalTimeline({ entries }: { entries: JournalEntry[] }) {
  const [filter, setFilter] = useState<JournalType | 'todos'>('todos');
  const [open, setOpen] = useState<string | null>(null);

  const types = useMemo(() => [...new Set(entries.map((e) => e.type))], [entries]);
  const filtered = filter === 'todos' ? entries : entries.filter((e) => e.type === filter);
  const groups = useMemo(() => {
    const map = new Map<string, JournalEntry[]>();
    for (const e of filtered) {
      const k = recordDayKey(e.createdAt, e.tz);
      map.set(k, [...(map.get(k) ?? []), e]);
    }
    return [...map.entries()];
  }, [filtered]);

  if (entries.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-stone-200 px-6 py-12 text-center">
        <p className="font-serif text-lg text-stone-600">Tu diario está en blanco.</p>
        <p className="mt-2 text-sm text-stone-500">La primera entrada suele ser la más difícil. Prueba con «Tres cosas buenas».</p>
      </div>
    );
  }

  return (
    <div>
      {types.length > 1 && (
        <div className="mb-8 flex gap-1 overflow-x-auto">
          {(['todos', ...types] as const).map((t) => {
            const active = filter === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setFilter(t)}
                className={`relative shrink-0 rounded-full px-3.5 py-1.5 text-sm transition-colors ${active ? 'text-stone-900' : 'text-stone-600 hover:text-stone-800'}`}
              >
                {active && <m.span layoutId="journal-filter" transition={gentleSpring} className="absolute inset-0 rounded-full bg-white shadow-soft ring-1 ring-stone-200" />}
                <span className="relative">{t === 'todos' ? 'Todo' : TEMPLATE_BY_TYPE[t].title}</span>
              </button>
            );
          })}
        </div>
      )}

      <div className="space-y-10">
        {groups.map(([key, items]) => (
          <section key={key}>
            <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-stone-500 first-letter:uppercase">{dayLabel(key)}</h3>
            <ol className="relative space-y-3 border-l border-stone-200 pl-6">
              {items.map((e, i) => {
                const t = TEMPLATE_BY_TYPE[e.type];
                const expanded = open === e.id;
                const headline = String(e.values[t.headline] ?? t.title);
                return (
                  <m.li
                    key={e.id}
                    layout
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.4, ease: EASE_OUT }}
                    className="relative"
                  >
                    <span className="absolute -left-[29px] top-5 h-2.5 w-2.5 rounded-full border-2 border-stone-50 bg-sage-400" aria-hidden />
                    <button
                      type="button"
                      onClick={() => setOpen(expanded ? null : e.id)}
                      aria-expanded={expanded}
                      className={`w-full rounded-2xl border bg-white px-5 py-4 text-left transition-[border-color,box-shadow] duration-300 ${
                        expanded ? 'border-sage-200 shadow-lift' : 'border-stone-200 hover:border-stone-300 hover:shadow-soft'
                      }`}
                    >
                      <span className="flex items-center justify-between gap-4 text-xs text-stone-500">
                        <span className="uppercase tracking-[0.14em] text-sage-700">{t.title}</span>
                        <span className="tabular-nums">{TIME.format(e.createdAt)}</span>
                      </span>
                      <span className="mt-1.5 block line-clamp-2 font-serif text-lg text-stone-800">{headline}</span>
                      <AnimatePresence initial={false}>
                        {expanded && (
                          <m.span variants={collapse} initial="hidden" animate="show" exit="exit" className="block overflow-hidden">
                            <span className="mt-4 block space-y-4 border-t border-stone-100 pt-4">
                              {t.fields
                                .filter((f) => e.values[f.id] !== undefined && f.id !== t.headline)
                                .map((f) => (
                                  <span key={f.id} className="block">
                                    <span className="block text-xs text-stone-500">{f.label}</span>
                                    <span className="mt-0.5 block whitespace-pre-wrap text-[15px] leading-relaxed text-stone-700">
                                      {f.kind === 'scale' ? `${e.values[f.id]}/10` : String(e.values[f.id])}
                                    </span>
                                  </span>
                                ))}
                            </span>
                          </m.span>
                        )}
                      </AnimatePresence>
                    </button>
                  </m.li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
