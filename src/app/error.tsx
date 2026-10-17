'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { LogoMark } from '@/components/ui/icons';
import { Button, buttonStyles } from '@/components/ui/Button';
import { reportError } from '@/lib/errorReport';

/**
 * Error inesperado en una sección. Mensaje tranquilo, sin detalles técnicos para el
 * usuario; el detalle va a la consola y, sin datos personales, a los logs del servidor.
 */
export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
    reportError(error, 'seccion');
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-lg flex-col justify-center px-6">
      <LogoMark className="h-9 w-9" />
      <h1 className="mt-8 font-serif text-4xl text-stone-800">Algo no salió como esperábamos</h1>
      <p className="mt-4 leading-relaxed text-stone-600">
        Tus registros guardados no se han perdido. Puedes reintentar o volver al panel.
      </p>
      {error.digest && <p className="mt-2 text-xs text-stone-500">Referencia: {error.digest}</p>}
      <div className="mt-8 flex flex-wrap gap-3">
        <Button onClick={reset}>Reintentar</Button>
        <Link href="/dashboard" className={buttonStyles('ghost')}>
          Ir al panel
        </Link>
      </div>
    </main>
  );
}
