import type { ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

const styles: Record<Variant, string> = {
  primary:
    'bg-sage-700 text-stone-50 shadow-soft hover:bg-sage-800 hover:shadow-lift disabled:bg-stone-300 disabled:shadow-none',
  secondary:
    'border border-stone-300 bg-white text-stone-700 hover:border-stone-400 hover:bg-stone-50 hover:shadow-soft disabled:text-stone-500',
  ghost: 'text-stone-600 hover:bg-stone-100 hover:text-stone-800',
};

/**
 * Clases de botón reutilizables también en <Link>, para no anidar <button> dentro de <a>.
 * Micro-interacción en CSS (sin JS): leve hundimiento al presionar.
 */
export function buttonStyles(variant: Variant = 'primary', className = ''): string {
  return `inline-flex select-none items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-[transform,background-color,border-color,color,box-shadow] duration-200 ease-out active:scale-[0.97] disabled:cursor-not-allowed disabled:active:scale-100 ${styles[variant]} ${className}`;
}

export function Button({
  variant = 'primary',
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button className={buttonStyles(variant, className)} {...props} />;
}
