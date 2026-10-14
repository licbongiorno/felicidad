'use client';

import { m } from 'motion/react';
import { toggle } from '@/domain/personal';
import { useProgressStore } from '@/store/useProgressStore';
import { haptic } from '@/lib/haptics';
import { gentleSpring } from '@/lib/motion';

/** Marcar o desmarcar una práctica como favorita. */
export function FavoriteButton({ practiceId, title, className = '' }: { practiceId: string; title: string; className?: string }) {
  const favorites = useProgressStore((s) => s.personal.favorites);
  const updatePersonal = useProgressStore((s) => s.updatePersonal);
  const on = favorites.includes(practiceId);
  return (
    <button
      type="button"
      aria-pressed={on}
      aria-label={on ? `Quitar «${title}» de favoritas` : `Guardar «${title}» en favoritas`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        haptic('tick');
        updatePersonal({ favorites: toggle(favorites, practiceId, 60) });
      }}
      className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-stone-100 ${on ? 'text-sage-700' : 'text-stone-400 hover:text-stone-600'} ${className}`}
    >
      <m.svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden animate={{ scale: on ? [1, 1.25, 1] : 1 }} transition={gentleSpring}>
        <path
          d="M12 20s-7.5-4.4-7.5-9.7A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.3C19.5 15.6 12 20 12 20z"
          fill={on ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinejoin="round"
        />
      </m.svg>
    </button>
  );
}
