'use client';

import { AnimatePresence, m } from 'motion/react';
import { useEffect, useState, type KeyboardEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { CARDS, DECKS, type DeckId, type PhilosophyCard as Card } from '@/domain/cards';
import { gentleSpring } from '@/lib/motion';
import { haptic } from '@/lib/haptics';
import { Button } from '@/components/ui/Button';
import { PhilosophyCard } from './PhilosophyCard';
import { Sheet } from '@/components/ui/Sheet';
import { DrawnCheck } from '@/components/motion/Reveal';
import { useProgressStore } from '@/store/useProgressStore';
import { MAX_TEXTAREA } from '@/domain/journal';

type Filter = DeckId | 'todos';

function shuffle<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const cardsFor = (f: Filter) => (f === 'todos' ? CARDS : CARDS.filter((c) => c.deck === f));

/**
 * Mazo barajado: el orden aleatorio evita que el usuario "elija" la carta que confirma
 * la rumiación, y recorrerlo completo garantiza variedad antes de repetir.
 */
export function CardDeck() {
  const [filter, setFilter] = useState<Filter>('todos');
  const [order, setOrder] = useState<Card[]>(CARDS);
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(-1);
  const [flipped, setFlipped] = useState(false);
  const [reflectOpen, setReflectOpen] = useState(false);
  const [reflection, setReflection] = useState('');
  const [savedFor, setSavedFor] = useState<string | null>(null);
  const logJournal = useProgressStore((s) => s.logJournal);

  // Barajar tras montar (no en el render del servidor). Con ?carta=id (desde el buscador),
  // esa carta queda primera; si no, se conserva la primera carta visible.
  const params = useSearchParams();
  const requested = params.get('carta');
  useEffect(() => {
    setOrder((o) => {
      const first = o.find((c) => c.id === requested) ?? o[0];
      return [first, ...shuffle(o.filter((c) => c !== first))];
    });
    setPosition(0);
    setFlipped(false);
  }, [requested]);

  const card = order[position % order.length];

  function next(dir: -1 | 1 = -1) {
    haptic('select');
    setDirection(dir);
    setFlipped(false);
    if (position + 1 < order.length) {
      setPosition(position + 1);
      return;
    }
    // Fin del mazo: rebarajar evitando que la carta actual vuelva a salir primera.
    const reshuffled = shuffle(order);
    if (reshuffled.length > 1 && reshuffled[0].id === card.id) {
      [reshuffled[0], reshuffled[reshuffled.length - 1]] = [reshuffled[reshuffled.length - 1], reshuffled[0]];
    }
    setOrder(reshuffled);
    setPosition(0);
  }

  function saveReflection() {
    if (!reflection.trim()) return;
    logJournal({ type: 'reflexion-carta', values: { autor: `${card.author} · ${card.source}`, texto: reflection.trim() } });
    haptic('success');
    setSavedFor(card.id);
    setReflection('');
    setReflectOpen(false);
  }

  function flip() {
    haptic('tick');
    setFlipped((f) => !f);
  }

  function changeFilter(f: Filter) {
    if (f === filter) return;
    setFilter(f);
    setOrder(shuffle(cardsFor(f)));
    setPosition(0);
    setFlipped(false);
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      flip();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault();
      next(e.key === 'ArrowLeft' ? -1 : 1);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <nav aria-label="Mazos" className="mb-8 flex max-w-full gap-1 overflow-x-auto rounded-full bg-stone-100 p-1">
        {(['todos', ...(Object.keys(DECKS) as DeckId[])] as Filter[]).map((id) => {
          const active = filter === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => changeFilter(id)}
              aria-pressed={active}
              className={`relative shrink-0 rounded-full px-4 py-1.5 text-sm transition-colors duration-200 ${
                active ? 'text-stone-900' : 'text-stone-600 hover:text-stone-800'
              }`}
            >
              {active && (
                <m.span layoutId="deck-pill" transition={gentleSpring} className="absolute inset-0 rounded-full bg-white shadow-soft" />
              )}
              <span className="relative">{id === 'todos' ? 'Todos' : DECKS[id].title}</span>
            </button>
          );
        })}
      </nav>

      <div className="mb-8 h-5">
        <AnimatePresence mode="wait">
          <m.p
            key={filter}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-sm text-stone-500"
          >
            {filter === 'todos' ? 'Todas las perspectivas' : DECKS[filter].description}
          </m.p>
        </AnimatePresence>
      </div>

      <div
        tabIndex={0}
        role="group"
        aria-roledescription="mazo de cartas"
        aria-label={`${card.author}. ${flipped ? 'Reverso' : 'Anverso'}. Enter para girar, flechas para cambiar de carta.`}
        onKeyDown={onKeyDown}
        className="relative h-[27rem] w-full max-w-sm rounded-3xl"
      >
        {/* Cartas de fondo: sugieren el mazo y amortiguan la entrada de la siguiente */}
        {[2, 1].map((depth) => (
          <div
            key={depth}
            aria-hidden
            className="absolute inset-0 rounded-3xl border border-stone-200 bg-white"
            style={{ transform: `translateY(${depth * 12}px) scale(${1 - depth * 0.045})`, opacity: 1 - depth * 0.3 }}
          />
        ))}

        <AnimatePresence custom={direction} initial={false}>
          <PhilosophyCard
            key={`${filter}-${card.id}`}
            card={card}
            flipped={flipped}
            direction={direction}
            onFlip={flip}
            onSwipe={next}
          />
        </AnimatePresence>
      </div>

      <p className="mt-10 text-xs tabular-nums text-stone-500">
        {(position % order.length) + 1} / {order.length}
        <span aria-hidden className="mx-2 text-stone-500">·</span>
        Toca para girar · desliza para cambiar
      </p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
        <Button variant="secondary" onClick={() => next(-1)}>
          Sacar otra carta
        </Button>
        {savedFor === card.id ? (
          <span className="flex items-center gap-2 px-3 text-sm text-sage-700">
            <DrawnCheck className="h-5 w-5" /> Guardada en tu diario
          </span>
        ) : (
          <Button variant="ghost" onClick={() => setReflectOpen(true)}>
            Escribir reflexión
          </Button>
        )}
      </div>

      <Sheet open={reflectOpen} onClose={() => setReflectOpen(false)} title="Tu reflexión">
        <blockquote className="border-l-2 border-sage-300 pl-4 font-serif text-[17px] leading-relaxed text-stone-600">
          {card.reflection}
        </blockquote>
        <p className="mt-2 pl-4 text-xs text-stone-500">
          {card.author} · {card.source}
        </p>
        <textarea
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          maxLength={MAX_TEXTAREA}
          rows={6}
          placeholder="Escribe lo que surja, sin corregir…"
          className="mt-5 w-full resize-none rounded-2xl border border-stone-200 bg-white px-4 py-3 font-serif text-[17px] leading-relaxed text-stone-800 placeholder:text-stone-500 focus:border-sage-400 focus:shadow-soft focus:outline-none"
        />
        <div className="mt-4 flex justify-end pb-4 sm:pb-0">
          <Button disabled={!reflection.trim()} onClick={saveReflection}>
            Guardar en el diario
          </Button>
        </div>
      </Sheet>
    </div>
  );
}
