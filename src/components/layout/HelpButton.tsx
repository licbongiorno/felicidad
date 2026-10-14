'use client';

import Link from 'next/link';
import { useState } from 'react';
import { isPublished } from '@/domain/governance';
import { haptic } from '@/lib/haptics';
import { Sheet } from '@/components/ui/Sheet';
import { CrisisResources } from '@/components/safety/CrisisResources';

/**
 * Botón «Ayuda», visible en todas las pantallas (requisito de seguridad, nivel 3):
 * la app no gestiona crisis, pero deja siempre a un toque el acceso a ayuda humana.
 */
export function HelpButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          haptic('tick');
          setOpen(true);
        }}
        className="ml-3 flex shrink-0 items-center gap-1.5 rounded-full border border-stone-300 bg-white px-3 py-1.5 text-sm font-medium text-stone-700 transition-colors hover:border-stone-400 hover:text-stone-900"
        aria-haspopup="dialog"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 20.5s-7.5-4.4-7.5-9.7A4 4 0 0 1 12 8.6a4 4 0 0 1 7.5 2.2c0 5.3-7.5 9.7-7.5 9.7z" />
          <path d="M12 11.5v3M10.5 13h3" />
        </svg>
        Ayuda
      </button>
      <Sheet open={open} onClose={() => setOpen(false)} title="Ayuda ahora">
        <div className="pb-4">
          <p className="text-sm leading-relaxed text-stone-600">
            Si estás pasando un momento muy difícil, no tienes que resolverlo con un ejercicio. Hablar con una persona es lo
            más importante. Estas líneas son gratuitas.
          </p>
          <CrisisResources className="mt-3" />
          <p className="mt-4 text-sm leading-relaxed text-stone-600">
            Si puedes, quédate cerca de alguien de confianza y aléjate de lo que pueda hacerte daño.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            {isPublished('herramienta', 'plan-seguridad') && (
              <Link href="/plan-de-seguridad" onClick={() => setOpen(false)} className="font-medium text-sage-700 underline decoration-sage-300 underline-offset-2">
                Abrir mi plan de seguridad
              </Link>
            )}
            <Link href="/antidotos" onClick={() => setOpen(false)} className="text-sage-700 underline decoration-sage-300 underline-offset-2">
              Si puedes esperar: un antídoto para lo que sientes
            </Link>
          </div>
        </div>
      </Sheet>
    </>
  );
}
