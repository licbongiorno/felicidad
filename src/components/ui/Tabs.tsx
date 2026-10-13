'use client';

import { AnimatePresence, m } from 'motion/react';
import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { gentleSpring } from '@/lib/motion';

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

/** Pestañas accesibles (patrón ARIA tablist) con subrayado que se desliza. */
export function Tabs({ tabs, className = '' }: { tabs: Tab[]; className?: string }) {
  const uid = useId();
  const [active, setActive] = useState(tabs[0]?.id);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  function onKeyDown(e: KeyboardEvent, i: number) {
    const delta = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = (i + delta + tabs.length) % tabs.length;
    setActive(tabs[next].id);
    refs.current[next]?.focus();
  }

  return (
    <div className={className}>
      <div role="tablist" className="flex gap-6 overflow-x-auto border-b border-stone-200">
        {tabs.map((t, i) => {
          const selected = t.id === current.id;
          return (
            <button
              key={t.id}
              ref={(el) => {
                refs.current[i] = el;
              }}
              role="tab"
              id={`${uid}-tab-${t.id}`}
              aria-selected={selected}
              aria-controls={`${uid}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(t.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`relative shrink-0 pb-3 text-sm transition-colors duration-200 ${
                selected ? 'text-stone-900' : 'text-stone-500 hover:text-stone-700'
              }`}
            >
              {t.label}
              {selected && (
                <m.span layoutId={`${uid}-underline`} transition={gentleSpring} className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-sage-600" />
              )}
            </button>
          );
        })}
      </div>
      <div role="tabpanel" id={`${uid}-panel`} aria-labelledby={`${uid}-tab-${current.id}`} className="pt-6">
        <AnimatePresence mode="wait" initial={false}>
          <m.div
            key={current.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.3 }}
          >
            {current.content}
          </m.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
