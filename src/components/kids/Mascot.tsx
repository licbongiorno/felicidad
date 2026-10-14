'use client';

import { m } from 'motion/react';
import type { MascotMood } from '@/domain/kids';

/**
 * Brote, la mascota de la sección para chicos: un brotecito con dos hojas que guía,
 * respira con el chico y festeja. Las expresiones son simples y fáciles de leer.
 * Con movimiento reducido, MotionConfig deja sólo los cambios de opacidad.
 */

type Motion = 'idle' | 'cheer' | 'none';

export function Mascot({
  mood = 'feliz',
  size = 120,
  motion = 'idle',
  className = '',
  title,
}: {
  mood?: MascotMood;
  size?: number;
  motion?: Motion;
  className?: string;
  /** Si se da, la mascota se anuncia; si no, es decorativa. */
  title?: string;
}) {
  const body =
    motion === 'cheer'
      ? { animate: { y: [0, -14, 0, -8, 0], rotate: [0, -4, 4, -2, 0] }, transition: { duration: 1.1, ease: 'easeOut' as const } }
      : motion === 'idle'
        ? { animate: { y: [0, -3, 0] }, transition: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' as const } }
        : {};
  const leaves = motion === 'none' ? {} : { animate: { rotate: [-4, 4, -4] }, transition: { duration: 3.6, repeat: Infinity, ease: 'easeInOut' as const } };

  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <ellipse cx="60" cy="110" rx="30" ry="5" className="fill-kid-ink" opacity="0.08" />
      <m.g {...body} style={{ originX: '60px', originY: '104px' }}>
        {/* tallo y hojas */}
        <m.g {...leaves} style={{ originX: '60px', originY: '44px' }}>
          <path d="M60 44 C60 36 60 30 60 26" className="stroke-kid-paint-leaf" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M60 30 C50 16 34 18 30 26 C38 34 52 34 60 30Z" className="fill-kid-paint-leaf" />
          <path d="M60 28 C70 12 88 14 92 22 C84 32 68 32 60 28Z" className="fill-kid-paint-mint" />
          <path d="M60 30 C50 24 42 24 36 26" className="stroke-kid-surface" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.7" />
          <path d="M60 28 C70 20 80 19 86 22" className="stroke-kid-surface" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.7" />
        </m.g>
        {/* cuerpo */}
        <path d="M60 42 C84 42 96 58 96 76 C96 96 80 106 60 106 C40 106 24 96 24 76 C24 58 36 42 60 42Z" className="fill-kid-paint-body" />
        <path d="M38 58 C42 52 48 49 54 48" className="stroke-kid-surface" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.55" />
        {/* mejillas */}
        <ellipse cx="38" cy="84" rx="7" ry="4.5" className="fill-kid-paint-cheek" opacity="0.75" />
        <ellipse cx="82" cy="84" rx="7" ry="4.5" className="fill-kid-paint-cheek" opacity="0.75" />
        <Face mood={mood} />
      </m.g>
    </svg>
  );
}

function Face({ mood }: { mood: MascotMood }) {
  const eye = 'fill-kid-paint-eye';
  const line = 'stroke-kid-paint-eye';
  const closed = (cx: number) => <path d={`M${cx - 6} 74 Q${cx} 79 ${cx + 6} 74`} className={line} strokeWidth="3" strokeLinecap="round" fill="none" />;
  const happyClosed = (cx: number) => <path d={`M${cx - 6} 76 Q${cx} 69 ${cx + 6} 76`} className={line} strokeWidth="3" strokeLinecap="round" fill="none" />;
  const open = (cx: number, r = 5.5, dx = 0, dy = 0) => (
    <g>
      <circle cx={cx + dx} cy={74 + dy} r={r} className={eye} />
      <circle cx={cx + dx + 1.8} cy={72 + dy} r={r * 0.36} className="fill-kid-surface" />
    </g>
  );

  switch (mood) {
    case 'calma':
      return (
        <g>
          {closed(46)}
          {closed(74)}
          <path d="M54 88 Q60 92 66 88" className={line} strokeWidth="3" strokeLinecap="round" fill="none" />
        </g>
      );
    case 'piensa':
      return (
        <g>
          {open(46, 5.5, 1.5, -2)}
          {open(74, 5.5, 1.5, -2)}
          <path d="M55 90 L66 88" className={line} strokeWidth="3" strokeLinecap="round" />
          <circle cx="98" cy="46" r="3" className="fill-kid-paint-lavender" />
          <circle cx="104" cy="36" r="4.5" className="fill-kid-paint-lavender" />
        </g>
      );
    case 'sorpresa':
      return (
        <g>
          {open(46, 6.5)}
          {open(74, 6.5)}
          <ellipse cx="60" cy="91" rx="5" ry="6" className={eye} />
        </g>
      );
    case 'orgullo':
      return (
        <g>
          {happyClosed(46)}
          {happyClosed(74)}
          <path d="M50 86 Q60 98 70 86 Z" className={eye} />
        </g>
      );
    case 'valiente':
      return (
        <g>
          <path d="M39 64 L52 67" className={line} strokeWidth="3" strokeLinecap="round" />
          <path d="M81 64 L68 67" className={line} strokeWidth="3" strokeLinecap="round" />
          {open(46)}
          {open(74)}
          <path d="M51 87 Q60 95 69 87" className={line} strokeWidth="3.2" strokeLinecap="round" fill="none" />
        </g>
      );
    default:
      return (
        <g>
          {open(46)}
          {open(74)}
          <path d="M51 86 Q60 95 69 86" className={line} strokeWidth="3.2" strokeLinecap="round" fill="none" />
        </g>
      );
  }
}
