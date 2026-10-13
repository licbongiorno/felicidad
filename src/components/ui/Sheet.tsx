'use client';

import { AnimatePresence, m, useDragControls, type PanInfo } from 'motion/react';
import { useEffect, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { EASE_OUT } from '@/lib/motion';

interface Props {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

/**
 * Hoja modal. En móvil sube desde abajo y se cierra arrastrándola hacia abajo;
 * en escritorio aparece centrada. Escape cierra, el scroll de fondo se bloquea y el
 * foco se devuelve al elemento que la abrió.
 */
export function Sheet({ open, onClose, title, children }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const dragControls = useDragControls();
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!open) return;
    returnFocus.current = document.activeElement as HTMLElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return onCloseRef.current();
      if (e.key !== 'Tab' || !panelRef.current) return;
      // Trampa de foco: Tab y Mayús+Tab circulan dentro de la hoja mientras está abierta.
      const focusables = [...panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input:not([disabled]), select, [tabindex]:not([tabindex="-1"])',
      )];
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    const t = window.setTimeout(() => panelRef.current?.querySelector<HTMLElement>('textarea, input, button, a')?.focus(), 50);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', onKey);
      window.clearTimeout(t);
      returnFocus.current?.focus?.();
    };
  }, [open]);

  function onDragEnd(_: unknown, info: PanInfo) {
    if (info.offset.y > 110 || info.velocity.y > 600) onClose();
  }

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
          <m.div
            className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <m.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={{ y: '100%', opacity: 0.6 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.45, ease: EASE_OUT } }}
            exit={{ y: '100%', opacity: 0, transition: { duration: 0.28, ease: 'easeIn' } }}
            drag="y"
            dragControls={dragControls}
            dragListener={false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.6 }}
            onDragEnd={onDragEnd}
            className="pb-safe relative max-h-[88vh] w-full overflow-y-auto rounded-t-3xl bg-stone-50 px-6 pt-3 shadow-lift sm:max-w-lg sm:rounded-3xl sm:pb-6"
          >
            {/* Asa de arrastre: sólo desde aquí se inicia el gesto, para no interferir con el contenido */}
            <div onPointerDown={(e) => dragControls.start(e)} className="cursor-grab touch-none active:cursor-grabbing">
              <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-stone-300 sm:hidden" aria-hidden />
            </div>
            <div onPointerDown={(e) => dragControls.start(e)} className="mb-5 flex touch-none items-center justify-between gap-4">
              <h2 className="font-serif text-2xl text-stone-800">{title}</h2>
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar"
                className="rounded-full p-2 text-stone-500 transition-colors hover:bg-stone-200/60 hover:text-stone-700"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            {children}
          </m.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
