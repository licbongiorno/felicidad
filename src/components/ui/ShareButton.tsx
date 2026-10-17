'use client';

import { useState } from 'react';
import { buttonStyles } from './Button';

/**
 * Compartir un contenido público (píldora, artículo): sólo su título y su dirección,
 * nunca datos de la persona. Usa el menú de compartir del sistema y, si no existe,
 * copia el enlace.
 */
export function ShareButton({ title, path, className = '' }: { title: string; path: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = new URL(path, window.location.origin).toString();
    if (typeof navigator.share === 'function') {
      try {
        await navigator.share({ title, url });
        return;
      } catch (e) {
        // La persona cerró el menú: no hace falta hacer nada más.
        if ((e as DOMException)?.name === 'AbortError') return;
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt('Copia este enlace:', url);
    }
  }

  return (
    <button type="button" onClick={share} className={`${buttonStyles('secondary')} ${className}`}>
      <span aria-live="polite">{copied ? 'Enlace copiado' : 'Compartir'}</span>
    </button>
  );
}
