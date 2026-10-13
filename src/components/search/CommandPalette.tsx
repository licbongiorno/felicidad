'use client';

import { useRouter } from 'next/navigation';
import { AnimatePresence, m } from 'motion/react';
import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import { createPortal } from 'react-dom';
import { buildIndex, QUICK_ACTIONS, search, type SearchDoc } from '@/domain/search';
import { EASE_OUT } from '@/lib/motion';

interface Props {
  open: boolean;
  onClose: () => void;
}

/**
 * Paleta de búsqueda (patrón ARIA combobox + listbox). Flechas para moverse, Enter para
 * abrir, Escape para cerrar. El índice se construye una sola vez al cargar el módulo.
 */
const INDEX = buildIndex();
const BY_ID = new Map(INDEX.map((d) => [d.id, d]));

export default function CommandPalette({ open, onClose }: Props) {
  const router = useRouter();
  const uid = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);

  const results: SearchDoc[] = useMemo(
    () => (query.trim() ? search(INDEX, query) : QUICK_ACTIONS.map((id) => BY_ID.get(id)!).filter(Boolean)),
    [query],
  );

  useEffect(() => {
    if (!open) return;
    setQuery('');
    setActive(0);
    const returnFocus = document.activeElement as HTMLElement | null;
    const t = window.setTimeout(() => inputRef.current?.focus(), 30);
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = overflow;
      returnFocus?.focus?.();
    };
  }, [open]);

  useEffect(() => setActive(0), [query]);

  // Mantener visible la opción activa al navegar con flechas.
  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>(`[data-index="${active}"]`)?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  function go(d: SearchDoc | undefined) {
    if (!d) return;
    onClose();
    router.push(d.href);
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(results.length - 1, a + 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(0, a - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      go(results[active]);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    } else if (e.key === 'Tab') {
      e.preventDefault(); // el foco permanece en el campo (única parada de tabulación)
    }
  }

  if (typeof document === 'undefined') return null;
  const listId = `${uid}-list`;
  const optionId = (i: number) => `${uid}-opt-${i}`;

  // Agrupar por tipo manteniendo el orden de relevancia.
  let lastKind: string | null = null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[12vh]">
          <m.div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
          <m.div
            role="dialog"
            aria-modal="true"
            aria-label="Buscar"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.25, ease: EASE_OUT } }}
            exit={{ opacity: 0, y: -6, scale: 0.98, transition: { duration: 0.15 } }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 shadow-lift"
          >
            <div className="flex items-center gap-3 border-b border-stone-200 px-4">
              <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-stone-500" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <circle cx="11" cy="11" r="6.5" />
                <path d="M16 16l4 4" strokeLinecap="round" />
              </svg>
              <input
                ref={inputRef}
                role="combobox"
                aria-expanded="true"
                aria-controls={listId}
                aria-activedescendant={results.length ? optionId(active) : undefined}
                aria-autocomplete="list"
                aria-label="Buscar prácticas, antídotos, artículos y más"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Buscar prácticas, emociones, artículos…"
                className="h-14 flex-1 bg-transparent text-[16px] text-stone-800 placeholder:text-stone-500 focus:outline-none"
              />
              <kbd className="hidden rounded border border-stone-300 px-1.5 py-0.5 text-[11px] text-stone-500 sm:block">Esc</kbd>
            </div>

            <ul ref={listRef} id={listId} role="listbox" aria-label="Resultados" className="max-h-[55vh] overflow-y-auto p-2">
              {!query.trim() && <li role="presentation" className="px-3 pb-1 pt-2 text-[11px] uppercase tracking-[0.18em] text-stone-500">Accesos rápidos</li>}
              {results.length === 0 && (
                <li role="presentation" className="px-3 py-8 text-center text-sm text-stone-600">
                  Sin resultados para «{query}». Prueba con otra palabra.
                </li>
              )}
              {results.map((d, i) => {
                const header = query.trim() && d.kind !== lastKind ? d.kind : null;
                lastKind = d.kind;
                const selected = i === active;
                return (
                  <li key={d.id} role="presentation">
                    {header && <p className="px-3 pb-1 pt-3 text-[11px] uppercase tracking-[0.18em] text-stone-500">{header}</p>}
                    <div
                      id={optionId(i)}
                      role="option"
                      aria-selected={selected}
                      data-index={i}
                      onMouseMove={() => setActive(i)}
                      onClick={() => go(d)}
                      className={`flex cursor-pointer items-center justify-between gap-4 rounded-xl px-3 py-2.5 transition-colors ${selected ? 'bg-white shadow-soft' : ''}`}
                    >
                      <span className="min-w-0">
                        <span className="block truncate text-[15px] text-stone-800">{d.title}</span>
                        <span className="block truncate text-xs text-stone-600">{d.subtitle}</span>
                      </span>
                      <span className={`shrink-0 text-xs ${selected ? 'text-sage-700' : 'text-stone-500'}`}>{selected ? 'Abrir ↵' : !query.trim() ? d.kind : ''}</span>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="hidden items-center gap-4 border-t border-stone-200 px-4 py-2.5 text-[11px] text-stone-500 sm:flex">
              <span>↑↓ moverse</span>
              <span>↵ abrir</span>
              <span>Esc cerrar</span>
            </div>
          </m.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
