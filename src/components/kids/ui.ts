/** Estilos de botón de la sección para chicos: grandes (mín. 48 px), redondeados y claros. */
export const kidButton = (variant: 'primary' | 'soft' | 'ghost' = 'primary', className = '') =>
  [
    'inline-flex min-h-12 select-none items-center justify-center gap-2 rounded-full px-6 py-3 font-kid text-lg font-bold transition-[transform,box-shadow,background-color] duration-200 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60',
    'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-kid-primary/40',
    variant === 'primary' && 'bg-kid-primary text-kid-onprimary shadow-[0_4px_0_rgb(0_0_0/0.15)] hover:brightness-110',
    variant === 'soft' && 'bg-kid-surface text-kid-ink shadow-[0_3px_0_rgb(0_0_0/0.08)] ring-2 ring-kid-line hover:ring-kid-primary/50',
    variant === 'ghost' && 'text-kid-ink hover:bg-kid-surface',
    className,
  ]
    .filter(Boolean)
    .join(' ');
