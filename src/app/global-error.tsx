'use client';

import { useEffect } from 'react';
import { reportError } from '@/lib/errorReport';

/**
 * Último recurso si falla el propio layout raíz: no puede depender de estilos ni fuentes
 * de la app, así que usa estilos en línea mínimos.
 */
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => reportError(error, 'global'), [error]);
  return (
    <html lang="es">
      <body style={{ margin: 0, background: '#fafaf9', color: '#292524', fontFamily: 'Georgia, serif' }}>
        <main style={{ maxWidth: 480, margin: '20vh auto', padding: '0 24px' }}>
          <h1 style={{ fontSize: 32, fontWeight: 400 }}>La aplicación no pudo cargarse</h1>
          <p style={{ color: '#57534e', lineHeight: 1.6, fontFamily: 'system-ui, sans-serif' }}>
            Tus registros guardados no se han perdido. Prueba a recargar la página.
          </p>
          <button
            onClick={reset}
            style={{ marginTop: 16, padding: '10px 20px', borderRadius: 999, border: 0, background: '#4a5c45', color: '#fff', fontSize: 14, cursor: 'pointer' }}
          >
            Reintentar
          </button>
        </main>
      </body>
    </html>
  );
}
