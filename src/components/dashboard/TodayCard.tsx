'use client';

import Link from 'next/link';
import { AnimatePresence, m } from 'motion/react';
import { useMemo, useState } from 'react';
import { useProgressStore } from '@/store/useProgressStore';
import { dayProgress, daysSinceLastActivity, questionOfDay, QUESTION_THEME_LABEL, RETURN_AFTER_DAYS, todaysAnswer } from '@/domain/daily';
import { MAX_TEXTAREA } from '@/domain/journal';
import { EASE_OUT, fadeUp } from '@/lib/motion';
import { haptic } from '@/lib/haptics';
import { Button, buttonStyles } from '@/components/ui/Button';

/**
 * «Tu día»: tres pasos breves que se pueden completar en menos de diez minutos.
 * Es el centro del inicio: muestra qué falta, nunca qué se perdió.
 */
export function TodayCard({ practice, className = '' }: { practice: { title: string; href: string } | null; className?: string }) {
  const sessions = useProgressStore((s) => s.sessions);
  const checkins = useProgressStore((s) => s.checkins);
  const journal = useProgressStore((s) => s.journal);
  const progress = useMemo(() => dayProgress(sessions, checkins, journal), [sessions, checkins, journal]);
  const away = useMemo(() => daysSinceLastActivity(sessions, checkins, journal), [sessions, checkins, journal]);
  const complete = progress.done === progress.total;

  return (
    <m.section variants={fadeUp} aria-labelledby="tu-dia" className={`rounded-3xl border border-stone-200/80 bg-white p-6 shadow-soft sm:p-8 ${className}`}>
      {away !== null && away >= RETURN_AFTER_DAYS && progress.done === 0 && (
        <p className="mb-6 rounded-2xl bg-sage-50 px-4 py-3 text-sm leading-relaxed text-stone-700">
          <span className="font-medium text-stone-800">Qué bueno verte de nuevo.</span> Pasaron {away} días, y está bien: la práctica no se pierde. Empieza
          con algo corto hoy.
        </p>
      )}
      <div className="flex items-center gap-5">
        <ProgressRing done={progress.done} total={progress.total} />
        <div className="min-w-0">
          <h2 id="tu-dia" className="font-serif text-3xl text-stone-800">
            Tu día
          </h2>
          <p className="mt-1 text-sm text-stone-600">
            {complete
              ? 'Hiciste los tres pasos de hoy. Bien hecho.'
              : progress.done === 0
                ? 'Tres pasos cortos, en el orden que quieras.'
                : `Llevas ${progress.done} de 3. ${progress.done === 2 ? 'Falta uno.' : 'Vas bien.'}`}
          </p>
        </div>
      </div>

      <ol className="mt-7 grid gap-3 md:grid-cols-3">
        <Step n={1} done={progress.checkin} title="¿Cómo estás?" detail="Un minuto para registrar tu ánimo.">
          <a href="#registro-de-hoy" className={buttonStyles(progress.checkin ? 'ghost' : 'secondary', 'mt-4 self-start')}>
            {progress.checkin ? 'Cambiar registro' : 'Registrar'}
          </a>
        </Step>
        <Step n={2} done={progress.practice} title="Practica" detail={practice ? practice.title : 'Elige una práctica del Gimnasio.'}>
          <Link href={practice?.href ?? '/gimnasio'} className={buttonStyles(progress.practice ? 'ghost' : 'secondary', 'mt-4 self-start')}>
            {progress.practice ? 'Practicar otra' : 'Empezar'}
          </Link>
        </Step>
        <Step n={3} done={progress.reflection} title="Pregunta del día" detail="Unas líneas para mirar tu día.">
          <a href="#pregunta-del-dia" className={buttonStyles(progress.reflection ? 'ghost' : 'secondary', 'mt-4 self-start')}>
            {progress.reflection ? 'Ver respuesta' : 'Responder'}
          </a>
        </Step>
      </ol>

      <DailyQuestion />
    </m.section>
  );
}

function Step({ n, done, title, detail, children }: { n: number; done: boolean; title: string; detail: string; children: React.ReactNode }) {
  return (
    <li className={`flex flex-col rounded-2xl border p-4 transition-colors ${done ? 'border-sage-200 bg-sage-50/70' : 'border-stone-200'}`}>
      <div className="flex items-center gap-2.5">
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-medium ${done ? 'bg-sage-600 text-white' : 'bg-stone-100 text-stone-600'}`}
          aria-hidden
        >
          {done ? (
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3.5 8.5l3 3 6-7" />
            </svg>
          ) : (
            n
          )}
        </span>
        <span className="font-medium text-stone-800">{title}</span>
        <span className="sr-only">{done ? '(hecho)' : '(pendiente)'}</span>
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">{detail}</p>
      {children}
    </li>
  );
}

function ProgressRing({ done, total }: { done: number; total: number }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative h-16 w-16 shrink-0" role="img" aria-label={`${done} de ${total} pasos hechos hoy`}>
      <svg viewBox="0 0 64 64" className="h-16 w-16 -rotate-90">
        <circle cx="32" cy="32" r={r} fill="none" strokeWidth="6" className="stroke-stone-100" />
        <m.circle
          cx="32"
          cy="32"
          r={r}
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          className="stroke-sage-500"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c * (1 - done / total) }}
          transition={{ duration: 0.9, ease: EASE_OUT }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-serif text-xl text-stone-800" aria-hidden>
        {done}/{total}
      </span>
    </div>
  );
}

/** Pregunta del día con respuesta en el mismo lugar. Se guarda en el diario. */
function DailyQuestion() {
  const journal = useProgressStore((s) => s.journal);
  const logJournal = useProgressStore((s) => s.logJournal);
  const answer = useMemo(() => todaysAnswer(journal), [journal]);
  const [skip, setSkip] = useState(0);
  const [text, setText] = useState('');
  const question = questionOfDay(new Date(), skip);

  const save = () => {
    if (!text.trim()) return;
    logJournal({ type: 'pregunta-del-dia', values: { pregunta: question.text, respuesta: text.trim() } });
    haptic('success');
    setText('');
  };

  return (
    <div id="pregunta-del-dia" className="mt-6 scroll-mt-24 rounded-2xl bg-stone-50 p-5">
      <AnimatePresence mode="wait" initial={false}>
        {answer ? (
          <m.div key="respondida" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Pregunta del día · respondida</p>
            <p className="mt-2 font-serif text-xl text-stone-800">{String(answer.values.pregunta)}</p>
            <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-stone-700">{String(answer.values.respuesta)}</p>
            <p className="mt-3 text-xs text-stone-500">
              Mañana habrá otra.{' '}
              <Link href="/diario" className="text-sage-700 underline decoration-sage-300 underline-offset-2">
                Ver tus respuestas en el diario
              </Link>
            </p>
          </m.div>
        ) : (
          <m.div key={question.text} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
            <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Pregunta del día · {QUESTION_THEME_LABEL[question.theme]}</p>
            <label htmlFor="respuesta-del-dia" className="mt-2 block font-serif text-xl text-stone-800">
              {question.text}
            </label>
            <textarea
              id="respuesta-del-dia"
              rows={3}
              value={text}
              maxLength={MAX_TEXTAREA}
              onChange={(e) => setText(e.target.value)}
              placeholder="Escribe lo primero que aparezca. No hace falta que sea perfecto."
              className="mt-3 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-800 placeholder:text-stone-500 focus:border-sage-400 focus:outline-none"
            />
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <Button onClick={save} disabled={!text.trim()}>
                Guardar respuesta
              </Button>
              <Button variant="ghost" onClick={() => setSkip((s) => s + 1)}>
                Otra pregunta
              </Button>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
