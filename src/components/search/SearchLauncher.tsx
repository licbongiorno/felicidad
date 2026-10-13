'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useUiStore } from '@/store/useUiStore';

// El índice incluye todo el contenido (prácticas, artículos, cartas): se descarga sólo al abrir.
const CommandPalette = dynamic(() => import('./CommandPalette'), { ssr: false });

/** Atajos globales: ⌘K / Ctrl+K, o "/" cuando no se está escribiendo. */
export function SearchLauncher() {
  const open = useUiStore((s) => s.searchOpen);
  const setOpen = useUiStore((s) => s.setSearchOpen);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const typing = target.closest('input, textarea, select, [contenteditable="true"]');
      if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!useUiStore.getState().searchOpen);
      } else if (e.key === '/' && !typing) {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setOpen]);

  useEffect(() => {
    if (open) setMounted(true);
  }, [open]);

  return mounted ? <CommandPalette open={open} onClose={() => setOpen(false)} /> : null;
}
