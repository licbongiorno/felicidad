'use client';

import { useEffect } from 'react';

/** Registra el service worker sólo en producción (en desarrollo interferiría con la recarga en caliente). */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production' || !('serviceWorker' in navigator)) return;
    navigator.serviceWorker.register('/sw.js').catch(() => undefined);
  }, []);
  return null;
}
