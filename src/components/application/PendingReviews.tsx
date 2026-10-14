'use client';

import { AnimatePresence, m } from 'motion/react';
import { useMemo } from 'react';
import { pendingReviews } from '@/domain/application';
import { PRACTICE_BY_ID } from '@/domain/practices';
import { useProgressStore } from '@/store/useProgressStore';
import { fadeUp } from '@/lib/motion';
import { ApplicationForm } from './ApplicationForm';

const WHEN = new Intl.DateTimeFormat('es', { weekday: 'long', day: 'numeric', month: 'long' });

/** Paso «Revisar» en el panel: los planes de «Llevarlo a tu vida» que aún no se revisaron. */
export function PendingReviews({ className = '' }: { className?: string }) {
  const sessions = useProgressStore((s) => s.sessions);
  const applications = useProgressStore((s) => s.applications);
  const pending = useMemo(() => pendingReviews(sessions, applications).slice(0, 2), [sessions, applications]);

  if (pending.length === 0) return null;

  return (
    <m.section variants={fadeUp} className={`rounded-2xl border border-sage-200 bg-sage-50/60 p-6 ${className}`} aria-labelledby="revisar">
      <h2 id="revisar" className="text-xs uppercase tracking-[0.2em] text-stone-500">
        Revisar · lo que te propusiste
      </h2>
      <ul className="mt-4 space-y-6">
        <AnimatePresence initial={false}>
          {pending.map((s) => (
            <m.li key={s.id} layout exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
              <p className="font-serif text-xl text-stone-800">{PRACTICE_BY_ID[s.practiceId]?.title ?? 'Una práctica'}</p>
              <p className="mt-1 text-sm leading-relaxed text-stone-600">
                El {WHEN.format(s.startedAt)} te propusiste: <span className="text-stone-800">«{s.transfer}»</span>. ¿Pudiste usarla?
              </p>
              <div className="mt-3">
                <ApplicationForm practiceId={s.practiceId} sessionId={s.id} compact />
              </div>
            </m.li>
          ))}
        </AnimatePresence>
      </ul>
    </m.section>
  );
}
