'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { useEffect, useMemo } from 'react';
import { activitiesFor, gardenStage, KID_SKILLS, stickersOf } from '@/domain/kids';
import { fadeUp, stagger } from '@/lib/motion';
import { Mascot } from './Mascot';
import { FeelingFace, SKILL_PAINT, Sticker } from './KidArt';
import { useKid } from './KidShell';
import { KidPaths } from './KidPaths';
import { StoryScene } from './StoryScene';
import { storiesFor } from '@/domain/stories';

/** Inicio del modo chico: cómo me siento, mi jardín y las actividades por habilidad. */
export function KidHome() {
  const { kid, logs, narration } = useKid();
  const activities = useMemo(() => activitiesFor(kid.band), [kid.band]);
  const stickers = useMemo(() => stickersOf(logs), [logs]);
  const stage = gardenStage(logs.length);
  const greeting = `Hola, ${kid.name}. ¿Qué te gustaría hacer hoy?`;

  // Saludo con voz al entrar (sólo si la voz está encendida).
  useEffect(() => {
    narration.say(greeting);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [narration.on]);

  const skills = KID_SKILLS.map((s) => ({ ...s, items: activities.filter((a) => a.skill === s.id && a.id !== 'como-me-siento') })).filter((s) => s.items.length > 0);

  return (
    <m.div variants={stagger(0.06)} initial="hidden" animate="show">
      <m.section variants={fadeUp} className="flex items-center gap-3 pt-2 sm:gap-5">
        <Mascot size={112} title="Brote, tu compañero" />
        <button
          type="button"
          onClick={() => narration.say(greeting)}
          className="rounded-3xl bg-kid-surface px-5 py-4 text-left text-xl font-bold leading-snug shadow-[0_3px_0_rgb(0_0_0/0.06)] ring-2 ring-kid-line"
        >
          ¿Qué te gustaría hacer hoy?
        </button>
      </m.section>

      <m.div variants={fadeUp} className="mt-6 grid gap-3 sm:grid-cols-2">
        <Link
          href="/chicos/como-me-siento"
          className="group flex items-center gap-4 rounded-3xl bg-kid-tint-coral p-5 shadow-[0_4px_0_rgb(0_0_0/0.06)] transition-transform active:scale-[0.98]"
        >
          <span className="flex -space-x-3" aria-hidden>
            <FeelingFace feeling="alegria" size={48} />
            <FeelingFace feeling="tristeza" size={48} />
            <FeelingFace feeling="enojo" size={48} />
          </span>
          <span>
            <span className="block text-2xl font-extrabold">¿Cómo me siento?</span>
            <span className="block text-base text-kid-soft">Elige tu cara de hoy</span>
          </span>
        </Link>
        <Link
          href="/chicos/album"
          className="flex items-center gap-4 rounded-3xl bg-kid-tint-leaf p-5 shadow-[0_4px_0_rgb(0_0_0/0.06)] transition-transform active:scale-[0.98]"
        >
          <Sticker skill="gratitud" earned size={56} />
          <span>
            <span className="block text-2xl font-extrabold">Mi jardín</span>
            <span className="block text-base text-kid-soft">
              {stickers.size} {stickers.size === 1 ? 'sticker' : 'stickers'} · {stage.label.toLowerCase()}
            </span>
          </span>
        </Link>
        <Link
          href="/chicos/cuentos"
          className="flex items-center gap-4 overflow-hidden rounded-3xl bg-kid-tint-lavender p-5 shadow-[0_4px_0_rgb(0_0_0/0.06)] transition-transform active:scale-[0.98] sm:col-span-2"
        >
          <span className="w-24 shrink-0 overflow-hidden rounded-2xl sm:w-32" aria-hidden>
            <StoryScene scene="noche" />
          </span>
          <span>
            <span className="block text-2xl font-extrabold">Cuentos</span>
            <span className="block text-base text-kid-soft">{storiesFor(kid.band).length} historias para sentir y pensar</span>
          </span>
        </Link>
      </m.div>

      <KidPaths />

      <m.h2 variants={fadeUp} className="mt-10 text-sm font-extrabold uppercase tracking-[0.18em] text-kid-soft">
        Todas las actividades
      </m.h2>

      {skills.map((s) => (
        <m.section key={s.id} variants={fadeUp} className="mt-8" aria-labelledby={`skill-${s.id}`}>
          <h2 id={`skill-${s.id}`} className="text-2xl font-extrabold">
            {s.label}
          </h2>
          <p className="text-base text-kid-soft">{s.description}</p>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {s.items.map((a) => (
              <li key={a.id}>
                <Link
                  href={`/chicos/${a.id}`}
                  className={`flex h-full items-center gap-3 rounded-3xl p-4 shadow-[0_4px_0_rgb(0_0_0/0.06)] transition-transform active:scale-[0.98] ${SKILL_PAINT[a.skill].tint}`}
                >
                  <Sticker skill={a.skill} earned={stickers.has(a.id)} size={56} className="shrink-0" />
                  <span className="min-w-0">
                    <span className="block text-lg font-extrabold leading-tight">{a.title}</span>
                    <span className="mt-0.5 block text-sm text-kid-soft">
                      {a.tagline} · {a.minutes} min
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </m.section>
      ))}
    </m.div>
  );
}
