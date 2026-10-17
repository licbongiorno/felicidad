'use client';

import { AnimatePresence, m } from 'motion/react';
import { useEffect, useState } from 'react';
import { useProgressStore } from '@/store/useProgressStore';
import { DEMO_MODE } from '@/lib/demo';
import { collapse } from '@/lib/motion';

export function SyncNotice() {
  const syncError = useProgressStore((s) => s.syncError);
  const clearError = useProgressStore((s) => s.clearError);
  const retry = useProgressStore((s) => s.retry);
  const online = useOnline();

  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-6 print:hidden">
      <AnimatePresence initial={false}>
        {!online ? (
          <m.div key="offline" variants={collapse} initial="hidden" animate="show" exit="exit" className="overflow-hidden">
            <p role="status" className="mt-4 flex items-center gap-2 rounded-xl bg-stone-100 px-4 py-3 text-sm text-stone-700">
              <span className="h-2 w-2 shrink-0 rounded-full bg-stone-500" aria-hidden />
              Sin conexión. Puedes seguir practicando: lo que registres se guarda y se sincronizará al volver la red.
            </p>
          </m.div>
        ) : syncError ? (
          <m.div key="error" variants={collapse} initial="hidden" animate="show" exit="exit" className="overflow-hidden">
            <div role="status" className="mt-4 flex items-center justify-between gap-4 rounded-xl bg-stone-200/60 px-4 py-3 text-sm text-stone-700">
              <span>{syncError}</span>
              <span className="flex shrink-0 gap-1">
                <button type="button" onClick={retry} className="rounded-full px-2 py-1 font-medium text-sage-800 transition-colors hover:bg-stone-300/50">
                  Reintentar
                </button>
                <button type="button" onClick={clearError} className="rounded-full px-2 py-1 text-stone-600 transition-colors hover:bg-stone-300/50 hover:text-stone-800">
                  Cerrar
                </button>
              </span>
            </div>
          </m.div>
        ) : DEMO_MODE ? (
          <m.p
            key="demo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 flex items-center gap-2 text-xs text-stone-500"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-sage-400" aria-hidden />
            Modo demo · los datos se guardan sólo en este navegador
          </m.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

/** Estado de la conexión del navegador (online/offline). */
function useOnline() {
  const [online, setOnline] = useState(true);
  useEffect(() => {
    const update = () => setOnline(navigator.onLine);
    update();
    window.addEventListener('online', update);
    window.addEventListener('offline', update);
    return () => {
      window.removeEventListener('online', update);
      window.removeEventListener('offline', update);
    };
  }, []);
  return online;
}
