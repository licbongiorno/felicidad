import { Suspense } from 'react';
import { CardDeck } from '@/components/cards/CardDeck';
import { Stagger, StaggerItem } from '@/components/motion/Reveal';

export default function CardsPage() {
  return (
    <Stagger>
      <StaggerItem as="header" className="mx-auto mb-10 max-w-xl text-center">
        <h1 className="font-serif text-4xl text-stone-800 sm:text-5xl">Cartas</h1>
        <p className="mt-3 leading-relaxed text-stone-600">
          Cuando el pensamiento da vueltas, una perspectiva ajena crea distancia. Lee, da vuelta la carta y haz la
          micro-práctica.
        </p>
        <p className="mt-3 text-xs text-stone-500">Recurso reflexivo: su eficacia como intervención aislada no está establecida.</p>
      </StaggerItem>
      <StaggerItem>
        <Suspense fallback={null}>
          <CardDeck />
        </Suspense>
      </StaggerItem>
    </Stagger>
  );
}
