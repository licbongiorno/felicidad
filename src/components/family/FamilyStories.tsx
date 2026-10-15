'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { useMemo, useState } from 'react';
import { AGE_BANDS, type AgeBand } from '@/domain/kids';
import { sourceYear, STORY_THEMES, storiesFor, STORY_BY_ID, type StoryTheme } from '@/domain/stories';
import { fadeUp, stagger } from '@/lib/motion';
import { StoryBook } from '@/components/kids/StoryBook';
import { StoryCard, ThemeChip } from '@/components/kids/KidStories';

/** Cuentos para leer juntos: por edad y por tema, con una guía para el adulto en cada uno. */
export function FamilyStories() {
  const [band, setBand] = useState<AgeBand>('4-6');
  const [theme, setTheme] = useState<StoryTheme | null>(null);
  const list = useMemo(() => storiesFor(band, theme), [band, theme]);
  const themes = useMemo(() => STORY_THEMES.filter((t) => storiesFor(band, t.id).length > 0), [band]);

  return (
    <m.div variants={stagger(0.05)} initial="hidden" animate="show" className="mx-auto max-w-4xl">
      <m.header variants={fadeUp}>
        <Link href="/familia" className="text-sm text-sage-700 underline decoration-sage-300 underline-offset-2">
          ← Familia
        </Link>
        <h1 className="mt-3 font-serif text-4xl text-stone-800">Cuentos para leer juntos</h1>
        <p className="mt-2 max-w-2xl leading-relaxed text-stone-600">
          Historias para hablar de lo que cuesta: la muerte, el duelo, una separación, los miedos. También de la esperanza y la valentía. Cada cuento
          trae preguntas para conversar y una guía para ti.
        </p>
      </m.header>

      <m.div variants={fadeUp} className="kid-theme mt-6">
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-stone-500">Edad</p>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Edad">
          {AGE_BANDS.map((b) => (
            <ThemeChip
              key={b.id}
              active={band === b.id}
              onClick={() => {
                setBand(b.id);
                setTheme(null);
              }}
            >
              {b.label}
            </ThemeChip>
          ))}
        </div>
        <p className="mb-2 mt-5 text-xs uppercase tracking-[0.2em] text-stone-500">Tema</p>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Tema">
          <ThemeChip active={theme === null} onClick={() => setTheme(null)}>
            Todos
          </ThemeChip>
          {themes.map((t) => (
            <ThemeChip key={t.id} active={theme === t.id} onClick={() => setTheme(t.id)}>
              {t.label}
            </ThemeChip>
          ))}
        </div>

        <ul className="mt-6 grid gap-4 font-kid text-kid-ink sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s) => (
            <li key={s.id}>
              <StoryCard story={s} href={`/familia/cuentos/${s.id}`} />
            </li>
          ))}
        </ul>
      </m.div>
    </m.div>
  );
}

/** Un cuento desde Familia: primero la guía para el adulto, después el libro. */
export function FamilyStory({ storyId }: { storyId: string }) {
  const story = STORY_BY_ID[storyId];
  const [reading, setReading] = useState(!story.sensitive);
  return (
    <div className="mx-auto max-w-3xl">
      <Link href="/familia/cuentos" className="text-sm text-sage-700 underline decoration-sage-300 underline-offset-2">
        ← Cuentos
      </Link>
      <section className="mt-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-soft" aria-labelledby="para-ti">
        <h2 id="para-ti" className="text-xs uppercase tracking-[0.2em] text-stone-500">
          Para ti, antes de leer
        </h2>
        {story.sensitive && (
          <p className="mt-3 rounded-xl bg-stone-100 px-3 py-2 text-sm text-stone-800">
            Es un cuento sobre un tema sensible. Léelo primero a solas y elige un momento tranquilo para compartirlo.
          </p>
        )}
        <p className="mt-3 leading-relaxed text-stone-700">{story.forAdult}</p>
        <p className="mt-3 text-sm text-stone-600">
          Edad: {story.bands.map((b) => AGE_BANDS.find((x) => x.id === b)?.label).join(' y ')} · {story.minutes} min
          {story.source.kind === 'clasico' && ` · Adaptación libre de «${story.source.original}» (${story.source.author}, ${sourceYear(story.source.year)}). ${story.source.adaptation}`}
        </p>
        {!reading && (
          <button type="button" onClick={() => setReading(true)} className="mt-4 rounded-full bg-sage-700 px-5 py-2.5 text-sm font-medium text-stone-50 hover:bg-sage-800">
            Leer el cuento
          </button>
        )}
      </section>
      {reading && (
        <div className="kid-theme mt-6 rounded-[2rem] bg-kid-bg p-4 font-kid text-kid-ink sm:p-6">
          <StoryBook story={story} backHref="/familia/cuentos" />
        </div>
      )}
    </div>
  );
}
