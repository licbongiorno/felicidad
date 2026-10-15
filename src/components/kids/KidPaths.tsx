'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { useMemo } from 'react';
import { KID_PATH_BY_ID, pathProgress, pathsFor, stickersOf, type KidPath } from '@/domain/kids';
import { fadeUp } from '@/lib/motion';
import { SKILL_PAINT, Sticker } from './KidArt';
import { useKid } from './KidShell';
import { kidButton } from './ui';

/** «Mis caminos» en el inicio del modo chico: elegir un recorrido y seguir donde quedó. */
export function KidPaths() {
  const { kid, logs } = useKid();
  const done = useMemo(() => stickersOf(logs), [logs]);
  const paths = pathsFor(kid.band);
  if (!paths.length) return null;
  return (
    <m.section variants={fadeUp} className="mt-8" aria-labelledby="caminos">
      <h2 id="caminos" className="text-2xl font-extrabold">
        Mis caminos
      </h2>
      <p className="text-base text-kid-soft">Elige un camino y aprende paso a paso.</p>
      <ul className="mt-3 grid gap-3 sm:grid-cols-2">
        {paths.map((p) => (
          <PathCard key={p.id} path={p} done={done} />
        ))}
      </ul>
    </m.section>
  );
}

function PathCard({ path, done }: { path: KidPath; done: Set<string> }) {
  const { completed, total, next } = pathProgress(path, done);
  return (
    <li className={`flex flex-col rounded-3xl p-5 shadow-[0_4px_0_rgb(0_0_0/0.06)] ${SKILL_PAINT[path.skill].tint}`}>
      <div className="flex items-start gap-3">
        <Sticker skill={path.skill} earned={completed > 0} size={52} className="shrink-0" />
        <div className="min-w-0">
          <Link href={`/chicos/camino/${path.id}`} className="block text-xl font-extrabold leading-tight underline-offset-4 hover:underline">
            {path.title}
          </Link>
          <p className="mt-0.5 text-sm text-kid-soft">{path.description}</p>
        </div>
      </div>
      <Progress completed={completed} total={total} className="mt-4" />
      <div className="mt-4">
        {next ? (
          <Link href={`/chicos/${next.id}`} className={kidButton('primary', 'w-full !text-base')}>
            {completed === 0 ? 'Empezar' : 'Seguir'}: {next.title}
          </Link>
        ) : (
          <p className="rounded-full bg-kid-surface px-4 py-3 text-center text-base font-extrabold">¡Camino completado!</p>
        )}
      </div>
    </li>
  );
}

export function Progress({ completed, total, className = '' }: { completed: number; total: number; className?: string }) {
  return (
    <div className={className}>
      <div className="flex justify-between text-sm font-bold">
        <span>
          {completed} de {total}
        </span>
      </div>
      <div className="mt-1 h-3 overflow-hidden rounded-full bg-kid-surface" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={completed} aria-label={`${completed} de ${total} actividades`}>
        <div className="h-full rounded-full bg-kid-primary transition-[width] duration-700" style={{ width: `${total ? (completed / total) * 100 : 0}%` }} />
      </div>
    </div>
  );
}

/** Detalle de un camino: la lista ordenada con lo que ya hizo. */
export function KidPathView({ pathId }: { pathId: string }) {
  const { kid, logs } = useKid();
  const path = KID_PATH_BY_ID[pathId];
  const done = useMemo(() => stickersOf(logs), [logs]);
  if (!path || path.band !== kid.band) {
    return (
      <p className="mt-6 text-xl">
        Este camino no está disponible para ti.{' '}
        <Link href="/chicos" className="underline">
          Volver al inicio
        </Link>
      </p>
    );
  }
  const { items, completed, total, next } = pathProgress(path, done);
  return (
    <article>
      <Link href="/chicos" className="inline-flex h-12 items-center gap-2 rounded-full pr-4 text-lg font-bold text-kid-soft hover:text-kid-ink">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M15 5l-7 7 7 7" />
        </svg>
        Volver
      </Link>
      <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl">{path.title}</h1>
      <p className="mt-1 text-lg text-kid-soft">{path.description}</p>
      <Progress completed={completed} total={total} className="mt-4 max-w-md" />
      <ol className="mt-6 space-y-3">
        {items.map((a, i) => {
          const isDone = done.has(a.id);
          const isNext = next?.id === a.id;
          return (
            <li key={a.id}>
              <Link
                href={`/chicos/${a.id}`}
                className={`flex items-center gap-4 rounded-3xl p-4 ring-2 transition-transform active:scale-[0.98] ${
                  isNext ? 'bg-kid-surface ring-kid-primary' : 'bg-kid-surface ring-kid-line'
                }`}
              >
                <span
                  aria-hidden
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-extrabold ${isDone ? 'bg-kid-paint-mint text-kid-ink' : 'bg-kid-bg text-kid-ink ring-2 ring-kid-line'}`}
                >
                  {isDone ? '✓' : i + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-lg font-extrabold leading-tight">{a.title}</span>
                  <span className="block text-sm text-kid-soft">
                    {isDone ? 'Hecha · puedes repetirla' : isNext ? 'Siguiente' : a.tagline}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </article>
  );
}
