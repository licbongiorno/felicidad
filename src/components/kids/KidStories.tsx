'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { useMemo, useState } from 'react';
import { storiesFor, storyLogId, STORY_BY_ID, themesFor, type Story, type StoryTheme } from '@/domain/stories';
import { fadeUp, stagger } from '@/lib/motion';
import { useKid } from './KidShell';
import { StoryBook } from './StoryBook';
import { StoryArt } from './StoryArt';

/** Biblioteca de cuentos del chico: los de su edad, filtrables por tema. */
export function KidStories() {
  const { kid, logs } = useKid();
  const [theme, setTheme] = useState<StoryTheme | null>(null);
  const themes = useMemo(() => themesFor(kid.band), [kid.band]);
  const list = useMemo(() => storiesFor(kid.band, theme), [kid.band, theme]);
  const read = useMemo(() => new Set(logs.map((l) => l.activityId)), [logs]);

  return (
    <m.div variants={stagger(0.05)} initial="hidden" animate="show">
      <m.h1 variants={fadeUp} className="text-3xl font-extrabold sm:text-4xl">
        Cuentos
      </m.h1>
      <m.p variants={fadeUp} className="mt-2 text-lg text-kid-soft">
        Historias para sentir, pensar y conversar con tu adulto.
      </m.p>

      <m.div variants={fadeUp} className="-mx-4 mt-5 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="Temas">
        <ThemeChip active={theme === null} onClick={() => setTheme(null)}>
          Todos
        </ThemeChip>
        {themes.map((t) => (
          <ThemeChip key={t.id} active={theme === t.id} onClick={() => setTheme(t.id)}>
            {t.label}
          </ThemeChip>
        ))}
      </m.div>

      <ul className="mt-5 grid gap-4 sm:grid-cols-2">
        {list.map((s) => (
          <m.li key={s.id} variants={fadeUp}>
            <StoryCard story={s} href={`/chicos/cuentos/${s.id}`} read={read.has(storyLogId(s.id))} />
          </m.li>
        ))}
      </ul>
    </m.div>
  );
}

export function ThemeChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`min-h-11 shrink-0 rounded-full px-4 py-2 text-base font-bold ring-2 transition-colors ${
        active ? 'bg-kid-primary text-kid-onprimary ring-kid-primary' : 'bg-kid-surface ring-kid-line hover:ring-kid-primary/50'
      }`}
    >
      {children}
    </button>
  );
}

export function StoryCard({ story, href, read = false }: { story: Story; href: string; read?: boolean }) {
  return (
    <Link href={href} className="block h-full overflow-hidden rounded-3xl bg-kid-surface shadow-[0_4px_0_rgb(0_0_0/0.06)] ring-2 ring-kid-line transition-transform active:scale-[0.98]">
      <div className="relative">
        <StoryArt story={story} mood="feliz" />
        {read && <span className="absolute right-3 top-3 rounded-full bg-kid-surface px-3 py-1 text-sm font-bold">Leído ✓</span>}
      </div>
      <span className="block p-4">
        <span className="block text-xl font-extrabold leading-tight">{story.title}</span>
        <span className="mt-1 block text-base text-kid-soft">
          {story.tagline} · {story.minutes} min
        </span>
      </span>
    </Link>
  );
}

/** Un cuento en el modo chico: se guarda la lectura (y la emoción, si la elige). */
export function KidStory({ storyId }: { storyId: string }) {
  const { narration, log } = useKid();
  const story = STORY_BY_ID[storyId];
  return (
    <StoryBook
      story={story}
      say={narration.on ? narration.say : undefined}
      onDone={(feeling) => log({ activityId: storyLogId(story.id), feeling, intensity: null })}
      activityHref={(id) => `/chicos/${id}`}
      backHref="/chicos/cuentos"
    />
  );
}
