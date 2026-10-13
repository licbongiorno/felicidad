'use client';

import { animate, m, useMotionValue, useReducedMotion, useTransform } from 'motion/react';
import { useEffect, type ReactNode } from 'react';
import { EASE_OUT, fadeUp, stagger } from '@/lib/motion';

const TAGS = { div: m.div, ul: m.ul, li: m.li, section: m.section, header: m.header };
type Tag = keyof typeof TAGS;

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: Tag;
}

/** Contenedor que escalona la aparición de sus `StaggerItem`. */
export function Stagger({ children, className, as = 'div', step = 0.06, delay = 0 }: RevealProps & { step?: number; delay?: number }) {
  const Comp = TAGS[as] as typeof m.div;
  return (
    <Comp className={className} variants={stagger(step, delay)} initial="hidden" animate="show">
      {children}
    </Comp>
  );
}

/** Atributos de accesibilidad que se reenvían al elemento (p. ej. aria-labelledby, id). */
type A11yProps = { id?: string } & { [key: `aria-${string}`]: string | undefined };

export function StaggerItem({ children, className, as = 'div', ...a11y }: RevealProps & A11yProps) {
  const Comp = TAGS[as] as typeof m.div;
  return (
    <Comp className={className} variants={fadeUp} {...a11y}>
      {children}
    </Comp>
  );
}

interface CountUpProps {
  value: number;
  from?: number;
  decimals?: number;
  signed?: boolean;
  duration?: number;
  className?: string;
}

const formatCount = (v: number, decimals: number, signed: boolean) => {
  const s = v.toFixed(decimals);
  return signed && v > 0 ? `+${s}` : s;
};

/**
 * Número que se desliza hasta su valor: los datos "se asientan" en lugar de saltar.
 * Con "reducir movimiento" se renderiza el valor final como texto plano: un MotionValue
 * fijado sin animación no siempre repinta, y el usuario vería "0" (detectado por los tests e2e).
 */
export function CountUp(props: CountUpProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <span className={`tabular-nums ${props.className ?? ''}`}>{formatCount(props.value, props.decimals ?? 0, props.signed ?? false)}</span>;
  }
  return <AnimatedCount {...props} />;
}

function AnimatedCount({ value, from = 0, decimals = 0, signed = false, duration = 1.1, className }: CountUpProps) {
  const mv = useMotionValue(from);
  const text = useTransform(mv, (v) => formatCount(v, decimals, signed));

  useEffect(() => {
    const controls = animate(mv, value, { duration, ease: EASE_OUT });
    return () => controls.stop();
  }, [value, duration, mv]);

  return <m.span className={`tabular-nums ${className ?? ''}`}>{text}</m.span>;
}

/** Marca de verificación que se dibuja: confirma una acción sin celebrarla. */
export function DrawnCheck({ className = 'h-6 w-6' }: { className?: string }) {
  // Con "reducir movimiento" se muestra ya dibujada (si no, pathLength quedaba en 0 y no se veía).
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <m.circle
        cx="12"
        cy="12"
        r="10"
        className="stroke-sage-300"
        strokeWidth="1.5"
        initial={reduce ? false : { pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
      />
      <m.path
        d="M7.5 12.5l3 3 6-6.5"
        className="stroke-sage-700"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduce ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.45, delay: 0.35, ease: EASE_OUT }}
      />
    </svg>
  );
}
