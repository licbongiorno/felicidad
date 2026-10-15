'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { useMemo } from 'react';
import { addDays, CHALLENGES, challengeProgress, taskFor, type Challenge, type ChallengeState } from '@/domain/challenges';
import { toDateKey } from '@/domain/metrics';
import { useProgressStore } from '@/store/useProgressStore';
import { fadeUp, stagger } from '@/lib/motion';
import { haptic } from '@/lib/haptics';
import { Button, buttonStyles } from '@/components/ui/Button';
import { useChallenges } from './challengeStore';

/** Desafíos de 7, 21 y 30 días: tarea de hoy, días hechos y opción de empezar o dejar. */
export function Challenges() {
  const { all, ready, save } = useChallenges();
  const active = CHALLENGES.filter((c) => all[c.id]);
  const rest = CHALLENGES.filter((c) => !all[c.id]);

  const start = (id: string) => {
    haptic('success');
    save((p) => ({ ...p, [id]: { start: toDateKey(new Date()), manual: [] } }));
  };
  const stop = (id: string) =>
    save((p) => {
      const next = { ...p };
      delete next[id];
      return next;
    });
  const mark = (id: string, key: string) => {
    haptic('success');
    save((p) => ({ ...p, [id]: { ...p[id], manual: [...new Set([...p[id].manual, key])] } }));
  };

  return (
    <m.div variants={stagger(0.05)} initial="hidden" animate="show">
      <m.header variants={fadeUp} className="max-w-2xl">
        <h1 className="font-serif text-4xl text-stone-800 sm:text-5xl">Desafíos</h1>
        <p className="mt-3 leading-relaxed text-stone-600">
          Una tarea corta por día durante 7, 21 o 30 días. Si un día no puedes, no pasa nada: sigues desde donde estás.
        </p>
      </m.header>

      {ready && active.length > 0 && (
        <section className="mt-10" aria-labelledby="activos">
          <h2 id="activos" className="text-xs uppercase tracking-[0.2em] text-stone-600">
            En curso
          </h2>
          <ul className="mt-5 grid gap-4">
            {active.map((c) => (
              <m.li key={c.id} variants={fadeUp}>
                <ActiveChallenge challenge={c} state={all[c.id]} onMark={(k) => mark(c.id, k)} onStop={() => stop(c.id)} onRestart={() => start(c.id)} />
              </m.li>
            ))}
          </ul>
        </section>
      )}

      {rest.length > 0 && (
        <section className="mt-12" aria-labelledby="disponibles">
          <h2 id="disponibles" className="text-xs uppercase tracking-[0.2em] text-stone-600">
            {active.length ? 'Otros desafíos' : 'Elige uno'}
          </h2>
          <ul className="mt-5 grid gap-4 md:grid-cols-2">
            {rest.map((c) => (
              <m.li key={c.id} variants={fadeUp} className="flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6">
                <span className="text-xs uppercase tracking-[0.2em] text-sage-700">{c.days} días</span>
                <span className="mt-2 font-serif text-xl text-stone-800">{c.title}</span>
                <span className="mt-1 text-sm text-stone-600">{c.subtitle}</span>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">{c.why}</p>
                <Button className="mt-5 self-start" onClick={() => start(c.id)} disabled={!ready}>
                  Empezar hoy
                </Button>
              </m.li>
            ))}
          </ul>
        </section>
      )}
    </m.div>
  );
}

function ActiveChallenge({
  challenge: c,
  state,
  onMark,
  onStop,
  onRestart,
}: {
  challenge: Challenge;
  state: ChallengeState;
  onMark: (dayKey: string) => void;
  onStop: () => void;
  onRestart: () => void;
}) {
  const sessions = useProgressStore((s) => s.sessions);
  const journal = useProgressStore((s) => s.journal);
  const p = useMemo(() => challengeProgress(c, state, sessions, journal), [c, state, sessions, journal]);
  const todayKey = addDays(state.start, p.day - 1);
  const task = taskFor(c, Math.min(p.day, c.days));
  const todayDone = !p.finished && p.done[p.day - 1];
  const href = task.practiceId ? `/gimnasio/${task.practiceId}` : task.journalType ? `/diario?nuevo=${task.journalType}` : null;

  return (
    <article className="rounded-3xl border border-stone-200 bg-white p-6 shadow-soft sm:p-8" aria-label={c.title}>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-serif text-2xl text-stone-800">{c.title}</h3>
        <p className="text-sm tabular-nums text-stone-600">
          {p.finished ? `Terminado · ${p.completed} de ${c.days} días` : `Día ${p.day} de ${c.days} · ${p.completed} hechos`}
        </p>
      </div>

      <ol className="mt-4 flex flex-wrap gap-1.5" aria-label="Días del desafío">
        {Array.from({ length: c.days }, (_, i) => {
          const status = i < p.done.length ? (p.done[i] ? 'hecho' : i === p.day - 1 ? 'hoy' : 'sin hacer') : 'por venir';
          return (
            <li
              key={i}
              title={`Día ${i + 1}: ${status}`}
              aria-label={`Día ${i + 1}: ${status}`}
              className={`h-3 w-3 rounded-full ${
                status === 'hecho' ? 'bg-sage-600' : status === 'hoy' ? 'bg-sage-200 ring-2 ring-sage-500' : status === 'sin hacer' ? 'bg-stone-200' : 'bg-stone-100'
              }`}
            />
          );
        })}
      </ol>

      {p.finished ? (
        <div className="mt-6">
          <p className="leading-relaxed text-stone-700">
            ¡Terminaste! Hiciste {p.completed} de {c.days} días. Lo que practicaste ya es tuyo.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button onClick={onRestart}>Repetir</Button>
            <Button variant="ghost" onClick={onStop}>
              Quitar de la lista
            </Button>
          </div>
        </div>
      ) : (
        <div className="mt-6 rounded-2xl bg-sage-50 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-600">Hoy</p>
          <p className="mt-1 font-serif text-xl text-stone-800">{task.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-stone-700">{task.text}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {todayDone ? (
              <p className="font-medium text-sage-700" role="status">
                Hecho ✓
              </p>
            ) : (
              <>
                {href && (
                  <Link href={href} className={buttonStyles('primary')}>
                    Hacerlo ahora
                  </Link>
                )}
                <Button variant="secondary" onClick={() => onMark(todayKey)}>
                  Lo hice
                </Button>
              </>
            )}
          </div>
        </div>
      )}

      {!p.finished && (
        <button type="button" onClick={onStop} className="mt-5 text-sm text-stone-500 underline-offset-4 hover:underline">
          Dejar este desafío
        </button>
      )}
    </article>
  );
}
