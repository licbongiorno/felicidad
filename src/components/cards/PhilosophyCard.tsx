'use client';

import { useRef } from 'react';
import { m, useMotionValue, useTransform, type PanInfo, type Variants } from 'motion/react';
import type { PhilosophyCard as Card } from '@/domain/cards';
import { gentleSpring } from '@/lib/motion';

const SWIPE_DISTANCE = 110;
const SWIPE_VELOCITY = 600;

/** `custom` = dirección de salida (-1 izquierda, 1 derecha), provista por AnimatePresence. */
const cardVariants: Variants = {
  enter: { scale: 0.955, y: 14, opacity: 0 },
  center: { scale: 1, y: 0, opacity: 1, transition: gentleSpring },
  exit: (dir: number) => ({
    x: dir * 460,
    rotate: dir * 14,
    opacity: 0,
    transition: { duration: 0.45, ease: [0.4, 0, 0.6, 1] },
  }),
};

interface Props {
  card: Card;
  flipped: boolean;
  direction: number;
  onFlip: () => void;
  onSwipe: (dir: -1 | 1) => void;
}

/**
 * Carta volteable y deslizable.
 * - Tocar: gira la carta (resorte 3D).
 * - Arrastrar: la carta sigue el dedo con rotación proporcional; al soltar más allá del
 *   umbral (distancia o velocidad) sale despedida y entra la siguiente.
 */
export function PhilosophyCard({ card, flipped, direction, onFlip, onSwipe }: Props) {
  const x = useMotionValue(0);
  // Un arrastre nunca debe interpretarse además como toque (giro accidental).
  const dragged = useRef(false);
  const rotate = useTransform(x, [-260, 260], [-9, 9]);
  const hintLeft = useTransform(x, [-140, -30], [1, 0]);
  const hintRight = useTransform(x, [30, 140], [0, 1]);

  function onDragEnd(_: unknown, info: PanInfo) {
    const { offset, velocity } = info;
    if (Math.abs(offset.x) > SWIPE_DISTANCE || Math.abs(velocity.x) > SWIPE_VELOCITY) {
      onSwipe(offset.x < 0 ? -1 : 1);
    }
  }

  return (
    <m.div
      custom={direction}
      variants={cardVariants}
      initial="enter"
      animate="center"
      exit="exit"
      style={{ x, rotate }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.85}
      onPointerDown={() => (dragged.current = false)}
      onDragStart={() => (dragged.current = true)}
      onDragEnd={onDragEnd}
      onTap={() => !dragged.current && onFlip()}
      whileDrag={{ scale: 1.02 }}
      className="perspective absolute inset-0 cursor-grab touch-pan-y select-none active:cursor-grabbing"
    >
      <m.div
        className="preserve-3d relative h-full w-full"
        initial={false}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 180, damping: 24 }}
      >
        {/* Anverso */}
        <div className="backface-hidden absolute inset-0 flex flex-col justify-between rounded-3xl border border-stone-200 bg-white p-8 shadow-lift">
          <span className="text-xs uppercase tracking-[0.2em] text-stone-500">{card.author}</span>
          <blockquote className="font-serif text-xl leading-relaxed text-stone-700 sm:text-[1.4rem]">
            {card.textType === 'cita' ? `«${card.text}»` : card.text}
          </blockquote>
          <div className="flex items-end justify-between gap-4 text-xs text-stone-500">
            <span>{card.source}</span>
            <span className="shrink-0 rounded-full bg-stone-100 px-2 py-0.5">{card.textType}</span>
          </div>
        </div>

        {/* Reverso */}
        <div
          aria-hidden={!flipped}
          className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col justify-between rounded-3xl border border-sage-200 bg-gradient-to-b from-sage-50 to-white p-8 shadow-lift"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-sage-600">Reflexión</span>
            <p className="mt-4 font-serif text-xl leading-relaxed text-stone-700">{card.reflection}</p>
          </div>
          <div className="border-t border-sage-200 pt-5">
            <span className="text-xs uppercase tracking-[0.2em] text-sage-600">Ahora, un minuto</span>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">{card.microPractice}</p>
          </div>
        </div>
      </m.div>

      {/* Indicadores de arrastre */}
      <m.span
        aria-hidden
        style={{ opacity: hintLeft }}
        className="pointer-events-none absolute right-5 top-5 rounded-full bg-stone-800/80 px-3 py-1 text-[11px] uppercase tracking-wider text-stone-50"
      >
        Siguiente
      </m.span>
      <m.span
        aria-hidden
        style={{ opacity: hintRight }}
        className="pointer-events-none absolute left-5 top-5 rounded-full bg-stone-800/80 px-3 py-1 text-[11px] uppercase tracking-wider text-stone-50"
      >
        Siguiente
      </m.span>
    </m.div>
  );
}
