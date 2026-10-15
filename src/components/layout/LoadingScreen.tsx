'use client';

import { m } from 'motion/react';
import { useEffect, useState, type ReactNode } from 'react';
import { useAuth } from '@/providers/AuthProvider';
import { exitKidMode } from '@/lib/kids/kidMode';
import { LogoMark } from '@/components/ui/icons';

const SLOW_MS = 15_000;

/**
 * Borra lo que la app guarda en este navegador (caché sin conexión de Firestore, service
 * worker y archivos en caché) y recarga. Resuelve cargas trabadas por una caché vieja o
 * dañada, o por otra pestaña abierta con una versión anterior. Los datos están en la nube:
 * no se pierde nada (sólo los cambios hechos sin conexión que aún no se sincronizaron).
 */
async function repairAndReload() {
  try {
    const regs = (await navigator.serviceWorker?.getRegistrations?.()) ?? [];
    await Promise.all(regs.map((r) => r.unregister()));
  } catch {
    /* sin service worker */
  }
  try {
    const keys = (await caches?.keys?.()) ?? [];
    await Promise.all(keys.map((k) => caches.delete(k)));
  } catch {
    /* sin Cache Storage */
  }
  try {
    const dbs = (await indexedDB.databases?.()) ?? [];
    await Promise.all(
      dbs
        .filter((d) => d.name?.startsWith('firestore/'))
        .map(
          (d) =>
            new Promise<void>((resolve) => {
              const req = indexedDB.deleteDatabase(d.name!);
              req.onsuccess = req.onerror = req.onblocked = () => resolve();
            }),
        ),
    );
  } catch {
    /* navegador sin indexedDB.databases(): se recarga igual */
  }
  window.location.reload();
}

/**
 * Pantalla de carga con salida: si tarda más de 15 s (sin conexión con el servidor,
 * reCAPTCHA bloqueado, caché vieja…), ofrece reintentar o cerrar sesión en lugar de
 * dejar el indicador girando para siempre.
 */
export function LoadingScreen({ children, className = '' }: { children?: ReactNode; className?: string }) {
  const { user, signOut } = useAuth();
  const [slow, setSlow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setSlow(true), SLOW_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`flex min-h-screen flex-col items-center justify-center px-6 ${className}`} aria-label="Cargando" aria-busy={!slow}>
      {children ?? (
        <m.div animate={{ scale: [0.9, 1, 0.9], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}>
          <LogoMark className="h-10 w-10" />
        </m.div>
      )}
      {slow && (
        <div role="alert" className="mt-8 max-w-sm rounded-2xl border border-stone-200 bg-white p-6 text-center shadow-soft">
          <p className="font-medium text-stone-800">Está tardando más de lo normal</p>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            Revisa tu conexión a internet. Si tienes la app abierta en otra pestaña, ciérrala. Si sigue igual, usa «Reparar»: borra la copia guardada en
            este navegador y vuelve a cargar. Tus datos están en la nube y no se pierden.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <button type="button" onClick={() => window.location.reload()} className="rounded-full bg-sage-700 px-5 py-2.5 text-sm font-medium text-stone-50 hover:bg-sage-800">
              Reintentar
            </button>
            <button
              type="button"
              onClick={() => void repairAndReload()}
              className="rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-50"
            >
              Reparar
            </button>
            {user && (
              <button
                type="button"
                onClick={() => {
                  exitKidMode();
                  void signOut();
                }}
                className="rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                Cerrar sesión
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
