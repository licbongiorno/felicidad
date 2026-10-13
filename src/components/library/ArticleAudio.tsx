'use client';

import { useEffect, useRef, useState } from 'react';
import { voiceSupported } from '@/lib/voice';
import { createReader, type Reader } from '@/lib/voice-queue';

type State = 'idle' | 'playing' | 'paused';

/** Botón "Escuchar" para artículos: lee el texto en voz alta con la síntesis del navegador. */
export function ArticleAudio({ paragraphs }: { paragraphs: string[] }) {
  const [supported, setSupported] = useState(false);
  const [state, setState] = useState<State>('idle');
  const [progress, setProgress] = useState(0);
  const reader = useRef<Reader | null>(null);

  useEffect(() => {
    setSupported(voiceSupported());
    return () => reader.current?.stop();
  }, []);

  if (!supported) return null;

  function play() {
    reader.current?.stop();
    reader.current = createReader(paragraphs, setProgress, () => setState('idle'));
    reader.current?.play();
    setState('playing');
  }

  return (
    <div className="flex flex-wrap items-center gap-3 print:hidden" role="group" aria-label="Escuchar el artículo">
      {state === 'idle' ? (
        <button
          type="button"
          onClick={play}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-stone-700 ring-1 ring-stone-200 transition-colors hover:bg-white"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
            <path d="M8 5.5v13l11-6.5z" />
          </svg>
          Escuchar
        </button>
      ) : (
        <>
          <button
            type="button"
            onClick={() => {
              if (state === 'playing') {
                reader.current?.pause();
                setState('paused');
              } else {
                reader.current?.resume();
                setState('playing');
              }
            }}
            className="rounded-full px-4 py-2 text-sm text-stone-700 ring-1 ring-stone-200 hover:bg-white"
          >
            {state === 'playing' ? 'Pausar' : 'Continuar'}
          </button>
          <button type="button" onClick={() => reader.current?.stop()} className="rounded-full px-3 py-2 text-sm text-stone-600 hover:bg-stone-100">
            Detener
          </button>
          <span className="text-xs tabular-nums text-stone-500" aria-live="polite">
            Párrafo {progress + 1} de {paragraphs.length}
          </span>
        </>
      )}
    </div>
  );
}
