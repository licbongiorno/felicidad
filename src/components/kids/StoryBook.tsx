'use client';

import Link from 'next/link';
import { AnimatePresence, m } from 'motion/react';
import { useEffect, useState } from 'react';
import { KID_ACTIVITY_BY_ID, KID_FEELINGS, type KidFeelingId } from '@/domain/kids';
import { sourceYear, type Story } from '@/domain/stories';
import { haptic } from '@/lib/haptics';
import { Mascot } from './Mascot';
import { FeelingFace } from './KidArt';
import { StoryScene } from './StoryScene';
import { kidButton } from './ui';

/**
 * Libro de cuentos: una página por pantalla, con dibujo, texto grande y voz opcional.
 * Al final, preguntas para conversar y, si se quiere, elegir cómo me dejó el cuento.
 * Se usa en el modo chico y en Familia (para leerlo juntos).
 */
export function StoryBook({
  story,
  say,
  onDone,
  activityHref,
  backHref,
}: {
  story: Story;
  /** Narración (sólo si la voz está encendida). */
  say?: (text: string) => void;
  /** Al terminar, con la emoción elegida (o null). */
  onDone?: (feeling: KidFeelingId | null) => void;
  activityHref?: (id: string) => string;
  backHref: string;
}) {
  const [page, setPage] = useState(0);
  const [feeling, setFeeling] = useState<KidFeelingId | null>(null);
  const [saved, setSaved] = useState(false);
  const total = story.pages.length;
  const atEnd = page === total;
  const current = story.pages[Math.min(page, total - 1)];

  useEffect(() => {
    if (!say) return;
    say(atEnd ? `Fin. ${story.questions[0]}` : current.text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const go = (d: number) => {
    setPage((p) => Math.max(0, Math.min(total, p + d)));
    haptic('tick');
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const finish = (f: KidFeelingId | null) => {
    if (saved) return;
    setFeeling(f);
    setSaved(true);
    haptic('success');
    onDone?.(f);
  };

  const activity = story.activity ? KID_ACTIVITY_BY_ID[story.activity] : null;

  return (
    <article className="mx-auto max-w-2xl" aria-labelledby="titulo-cuento">
      <header className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h1 id="titulo-cuento" className="text-3xl font-extrabold leading-tight sm:text-4xl">
            {story.title}
          </h1>
          {story.source.kind === 'clasico' && (
            <p className="mt-1 text-sm text-kid-soft">
              Basado en «{story.source.original}», de {story.source.author} ({sourceYear(story.source.year)})
            </p>
          )}
        </div>
        <p className="shrink-0 pt-2 text-base font-bold tabular-nums text-kid-soft" aria-live="polite">
          {atEnd ? 'Fin' : `${page + 1} de ${total}`}
        </p>
      </header>

      <div className="mt-3 flex gap-1" aria-hidden>
        {story.pages.map((_, i) => (
          <span key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i < page || atEnd ? 'bg-kid-primary' : i === page ? 'bg-kid-primary/50' : 'bg-kid-line'}`} />
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {!atEnd ? (
          <m.section key={page} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.3 }} className="mt-5">
            <div className="overflow-hidden rounded-[2rem] ring-2 ring-kid-line">
              <StoryScene scene={current.scene} />
            </div>
            <div className="mt-5 flex items-start gap-3">
              {current.mood && <Mascot mood={current.mood} size={64} motion="none" className="hidden shrink-0 sm:block" />}
              <p className="text-2xl font-bold leading-relaxed">{current.text}</p>
            </div>
          </m.section>
        ) : (
          <m.section key="fin" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
            <div className="flex items-center gap-4">
              <Mascot mood="calma" size={96} motion={saved ? 'cheer' : 'idle'} />
              <p className="text-2xl font-extrabold">Fin del cuento.</p>
            </div>
            <h2 className="mt-6 text-xl font-extrabold">Para conversar</h2>
            <ul className="mt-3 space-y-3">
              {story.questions.map((q) => (
                <li key={q}>
                  <button type="button" onClick={() => say?.(q)} className="w-full rounded-3xl bg-kid-surface px-5 py-4 text-left text-xl font-bold ring-2 ring-kid-line">
                    {q}
                  </button>
                </li>
              ))}
            </ul>

            {onDone && (
              <>
                <h2 className="mt-8 text-xl font-extrabold">¿Cómo te dejó el cuento?</h2>
                <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-8" role="group" aria-label="Cómo me dejó el cuento">
                  {KID_FEELINGS.map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      aria-pressed={feeling === f.id}
                      disabled={saved}
                      onClick={() => finish(f.id)}
                      className={`flex flex-col items-center gap-1 rounded-2xl p-2 text-sm font-bold ring-2 transition-colors ${
                        feeling === f.id ? 'bg-kid-tint-sun ring-kid-paint-sun' : 'bg-kid-surface ring-kid-line'
                      }`}
                    >
                      <FeelingFace feeling={f.id} size={44} />
                      {f.label}
                    </button>
                  ))}
                </div>
                {!saved ? (
                  <button type="button" onClick={() => finish(null)} className={kidButton('ghost', 'mt-3')}>
                    Terminar sin elegir
                  </button>
                ) : (
                  <p className="mt-4 text-lg font-bold" role="status">
                    ¡Guardado! El cuento ya está en tu jardín.
                  </p>
                )}
              </>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              {activity && activityHref && (
                <Link href={activityHref(activity.id)} className={kidButton('primary')}>
                  Seguir con «{activity.title}»
                </Link>
              )}
              <Link href={backHref} className={kidButton('soft')}>
                Más cuentos
              </Link>
              <button type="button" onClick={() => setPage(0)} className={kidButton('ghost')}>
                Leer otra vez
              </button>
            </div>
          </m.section>
        )}
      </AnimatePresence>

      {!atEnd && (
        <nav className="mt-6 flex items-center justify-between gap-3" aria-label="Páginas del cuento">
          <button type="button" onClick={() => go(-1)} disabled={page === 0} className={kidButton('soft', 'min-w-28')}>
            ← Atrás
          </button>
          {say && (
            <button type="button" onClick={() => say(current.text)} className={kidButton('ghost')} aria-label="Escuchar esta página">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M4 9v6h4l5 4V5L8 9H4z" />
                <path d="M16 8.5a5 5 0 0 1 0 7" />
              </svg>
            </button>
          )}
          <button type="button" onClick={() => go(1)} className={kidButton('primary', 'min-w-28')}>
            {page === total - 1 ? 'Terminar' : 'Seguir →'}
          </button>
        </nav>
      )}
    </article>
  );
}
