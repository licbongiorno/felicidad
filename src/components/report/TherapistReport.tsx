'use client';

import { m } from 'motion/react';
import { useMemo, useState, type ReactNode } from 'react';
import { useAuth } from '@/providers/AuthProvider';
import { useProgressStore } from '@/store/useProgressStore';
import { ANTIDOTE_BY_EMOTION } from '@/domain/antidotes';
import { TEMPLATE_BY_TYPE } from '@/domain/journal';
import { compareScores, INSTRUMENTS } from '@/domain/instruments';
import { practiceEffects } from '@/domain/insights';
import { FREE_TIMER_ID, FREE_TIMER_TITLE } from '@/domain/freeTimer';
import { PRACTICE_BY_ID } from '@/domain/practices';
import { computeStreak, daysAgo, moodSeries, recordDayKey, toDateKey } from '@/domain/metrics';
import { fadeUp, gentleSpring, stagger } from '@/lib/motion';
import { SAFETY_DISCLAIMER } from '@/config/safety';
import { Button } from '@/components/ui/Button';
import { MoodTrend } from '@/components/dashboard/MoodTrend';

const PERIODS = [14, 28, 56] as const;
type SectionId = 'resumen' | 'animo' | 'who5' | 'practicas' | 'antidotos' | 'diario';
const SECTIONS: { id: SectionId; label: string }[] = [
  { id: 'resumen', label: 'Resumen' },
  { id: 'animo', label: 'Ánimo diario' },
  { id: 'who5', label: 'Evaluaciones' },
  { id: 'practicas', label: 'Prácticas' },
  { id: 'antidotos', label: 'Antídotos' },
  { id: 'diario', label: 'Entradas del diario' },
];

const DATE = new Intl.DateTimeFormat('es', { day: 'numeric', month: 'long', year: 'numeric' });
const SHORT = new Intl.DateTimeFormat('es', { day: 'numeric', month: 'short' });
const mean = (xs: number[]) => (xs.length ? Math.round((xs.reduce((a, b) => a + b, 0) / xs.length) * 10) / 10 : null);
const practiceTitle = (id: string) => (id === FREE_TIMER_ID ? FREE_TIMER_TITLE : (PRACTICE_BY_ID[id]?.title ?? id));

/**
 * Informe de seguimiento para llevar a sesión. Se genera en el dispositivo (no se envía a
 * ningún servidor) y se imprime o guarda como PDF desde el navegador. Las entradas del
 * diario se incluyen sólo si el usuario las marca una a una: privacidad por defecto.
 */
export function TherapistReport() {
  const { user, profile } = useAuth();
  const sessions = useProgressStore((s) => s.sessions);
  const checkins = useProgressStore((s) => s.checkins);
  const afflictions = useProgressStore((s) => s.afflictions);
  const assessments = useProgressStore((s) => s.assessments);
  const journal = useProgressStore((s) => s.journal);

  const [days, setDays] = useState<(typeof PERIODS)[number]>(28);
  const [enabled, setEnabled] = useState<Set<SectionId>>(new Set(['resumen', 'animo', 'who5', 'practicas', 'antidotos']));
  const [included, setIncluded] = useState<Set<string>>(new Set());
  const [note, setNote] = useState('');

  const since = daysAgo(days - 1);
  const sinceKey = toDateKey(since);
  const data = useMemo(() => {
    const s = sessions.filter((x) => x.startedAt >= since);
    const completed = s.filter((x) => x.completed);
    const c = checkins.filter((x) => x.date >= sinceKey);
    const a = afflictions.filter((x) => x.createdAt >= since);
    // Por instrumento: registros del periodo y el último anterior (para calcular el cambio).
    const instruments = INSTRUMENTS.map((ins) => {
      const all = assessments.filter((x) => x.instrument === ins.id);
      return { ins, inPeriod: all.filter((x) => x.createdAt >= since), before: all.find((x) => x.createdAt < since) };
    }).filter((x) => x.inPeriod.length > 0);
    const byPractice = new Map<string, { n: number; min: number }>();
    for (const x of completed) {
      const cur = byPractice.get(x.practiceId) ?? { n: 0, min: 0 };
      cur.n += 1;
      cur.min += x.durationSec / 60;
      byPractice.set(x.practiceId, cur);
    }
    const effects = new Map(practiceEffects(s, 1).map((e) => [e.key, e]));
    const byEmotion = new Map<string, { n: number; pre: number[]; post: number[] }>();
    for (const x of a) {
      const cur = byEmotion.get(x.emotionId) ?? { n: 0, pre: [], post: [] };
      cur.n += 1;
      cur.pre.push(x.intensityPre);
      if (x.intensityPost !== null) cur.post.push(x.intensityPost);
      byEmotion.set(x.emotionId, cur);
    }
    return {
      practiceDays: new Set(completed.map((x) => recordDayKey(x.startedAt, x.tz))).size,
      minutes: Math.round(completed.reduce((t, x) => t + x.durationSec / 60, 0)),
      sessionsCount: completed.length,
      streak: computeStreak(sessions).current,
      moods: c.map((x) => x.mood),
      series: moodSeries(checkins, days),
      instruments,
      practices: [...byPractice.entries()].sort((x, y) => y[1].min - x[1].min).map(([id, v]) => ({ id, ...v, effect: effects.get(id) })),
      emotions: [...byEmotion.entries()].sort((x, y) => y[1].n - x[1].n),
      journal: journal.filter((x) => x.createdAt >= since),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessions, checkins, afflictions, assessments, journal, days]);

  const toggle = <T,>(set: Set<T>, v: T) => {
    const next = new Set(set);
    if (next.has(v)) next.delete(v);
    else next.add(v);
    return next;
  };
  const show = (id: SectionId) => enabled.has(id);
  const who = profile?.displayName || user?.email || 'Paciente';

  return (
    <m.div variants={stagger(0.06)} initial="hidden" animate="show">
      {/* ------------------------------------------------ controles (no se imprimen) */}
      <m.section variants={fadeUp} className="print:hidden">
        <h1 className="font-serif text-4xl text-stone-800 sm:text-5xl">Informe para tu terapeuta</h1>
        <p className="mt-3 max-w-2xl leading-relaxed text-stone-600">
          Un resumen de tu práctica y tus registros para llevar a sesión. Se genera en este dispositivo y no se envía a
          ningún sitio: tú decides si lo imprimes, lo guardas como PDF o lo compartes.
        </p>

        <div className="mt-8 grid gap-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-soft md:grid-cols-2">
          <fieldset>
            <legend className="mb-3 text-sm text-stone-600">Periodo</legend>
            <div role="radiogroup" aria-label="Periodo" className="inline-flex rounded-full bg-stone-100 p-1">
              {PERIODS.map((p) => (
                <button
                  key={p}
                  type="button"
                  role="radio"
                  aria-checked={days === p}
                  onClick={() => setDays(p)}
                  className={`relative rounded-full px-4 py-1.5 text-sm ${days === p ? 'text-stone-900' : 'text-stone-600 hover:text-stone-800'}`}
                >
                  {days === p && <m.span layoutId="report-period" transition={gentleSpring} className="absolute inset-0 rounded-full bg-white shadow-soft" />}
                  <span className="relative">{p / 7} semanas</span>
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="mb-3 text-sm text-stone-600">Secciones</legend>
            <div className="flex flex-wrap gap-2">
              {SECTIONS.map((s) => (
                <label key={s.id} className="flex cursor-pointer items-center gap-2 rounded-full bg-stone-100 px-3 py-1.5 text-sm text-stone-700">
                  <input type="checkbox" checked={enabled.has(s.id)} onChange={() => setEnabled((e) => toggle(e, s.id))} className="accent-sage-700" />
                  {s.label}
                </label>
              ))}
            </div>
          </fieldset>
          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm text-stone-600">Lo que quiero comentar en sesión (opcional, no se guarda)</span>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              className="w-full resize-none rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-[15px] focus:border-sage-400 focus:bg-white focus:outline-none"
            />
          </label>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-stone-500">Consejo: en el diálogo de impresión elige «Guardar como PDF».</p>
          <Button onClick={() => window.print()}>Imprimir o guardar PDF</Button>
        </div>
      </m.section>

      {/* ------------------------------------------------ documento */}
      <m.article
        variants={fadeUp}
        aria-label="Vista previa del informe"
        className="mx-auto mt-12 max-w-3xl rounded-2xl border border-stone-200 bg-white p-8 shadow-soft sm:p-12 print:mt-0 print:max-w-none print:rounded-none print:border-0 print:p-0 print:shadow-none"
      >
        <header className="border-b border-stone-200 pb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Protocolo Eudaimonía · Informe de seguimiento</p>
          <h2 className="mt-2 font-serif text-3xl text-stone-900">{who}</h2>
          <p className="mt-1 text-sm text-stone-600">
            Del {DATE.format(since)} al {DATE.format(new Date())} · generado el {DATE.format(new Date())}
          </p>
        </header>

        {note.trim() && (
          <Block title="Para comentar en sesión">
            <p className="whitespace-pre-wrap text-[15px] leading-relaxed text-stone-800">{note.trim()}</p>
          </Block>
        )}

        {show('resumen') && (
          <Block title="Resumen">
            <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Stat label="Días con práctica" value={`${data.practiceDays}/${days}`} />
              <Stat label="Sesiones" value={data.sessionsCount} />
              <Stat label="Minutos" value={data.minutes} />
              <Stat label="Racha actual" value={`${data.streak} d`} />
            </dl>
          </Block>
        )}

        {show('animo') && (
          <Block title="Ánimo diario (0–10)">
            {data.moods.length ? (
              <>
                <p className="mb-4 text-sm text-stone-700">
                  Media <strong className="tabular-nums">{mean(data.moods)}</strong> · mín. {Math.min(...data.moods)} · máx. {Math.max(...data.moods)} ·{' '}
                  {data.moods.length} registros en {days} días
                </p>
                <MoodTrend series={data.series} />
              </>
            ) : (
              <Muted>Sin registros de ánimo en el periodo.</Muted>
            )}
          </Block>
        )}

        {show('who5') && (
          <Block title="Evaluaciones validadas">
            {data.instruments.length ? (
              <div className="space-y-6">
                {data.instruments.map(({ ins, inPeriod, before }) => (
                  <div key={ins.id}>
                    <p className="mb-2 text-sm font-medium text-stone-800">
                      {ins.title} <span className="font-normal text-stone-500">(0–{ins.maxScore}, {ins.higherIsBetter ? 'más es mejor' : 'más indica más síntomas'})</span>
                    </p>
                    <table className="w-full text-sm">
                      <thead className="text-left text-xs text-stone-500">
                        <tr>
                          <th className="pb-2 font-normal">Fecha</th>
                          <th className="pb-2 text-right font-normal">Puntuación</th>
                          <th className="pb-2 pl-4 font-normal">Interpretación</th>
                          <th className="pb-2 text-right font-normal">Cambio</th>
                        </tr>
                      </thead>
                      <tbody>
                        {inPeriod.map((a, i) => {
                          const cmp = compareScores(ins, a.score, inPeriod[i + 1]?.score ?? before?.score);
                          const riskFlag = ins.riskItemIndex !== undefined && (a.items[ins.riskItemIndex] ?? 0) > 0;
                          return (
                            <tr key={a.id} className="border-t border-stone-100">
                              <td className="py-2 text-stone-700">{SHORT.format(a.createdAt)}</td>
                              <td className="py-2 text-right tabular-nums text-stone-900">{a.score}</td>
                              <td className="py-2 pl-4 text-stone-700">
                                {ins.interpret(a.score).title}
                                {riskFlag && <strong className="ml-2 text-stone-900">· ítem de riesgo positivo</strong>}
                              </td>
                              <td className="py-2 text-right tabular-nums text-stone-700">
                                {cmp ? `${cmp.delta > 0 ? '+' : ''}${cmp.delta}${cmp.relevant ? ' (relevante)' : ''}` : '—'}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            ) : (
              <Muted>Sin evaluaciones en el periodo.</Muted>
            )}
            <p className="mt-3 text-xs text-stone-500">Cuestionarios de autoinforme; no son instrumentos diagnósticos. Umbrales de cambio relevante según la literatura de cada instrumento.</p>
          </Block>
        )}

        {show('practicas') && (
          <Block title="Prácticas">
            {data.practices.length ? (
              <table className="w-full text-sm">
                <thead className="text-left text-xs text-stone-500">
                  <tr>
                    <th className="pb-2 font-normal">Práctica</th>
                    <th className="pb-2 text-right font-normal">Sesiones</th>
                    <th className="pb-2 text-right font-normal">Minutos</th>
                    <th className="pb-2 text-right font-normal">Δ ánimo (n)</th>
                  </tr>
                </thead>
                <tbody>
                  {data.practices.map((p) => (
                    <tr key={p.id} className="border-t border-stone-100">
                      <td className="py-2 text-stone-800">{practiceTitle(p.id)}</td>
                      <td className="py-2 text-right tabular-nums text-stone-700">{p.n}</td>
                      <td className="py-2 text-right tabular-nums text-stone-700">{Math.round(p.min)}</td>
                      <td className="py-2 text-right tabular-nums text-stone-700">
                        {p.effect ? `${p.effect.meanDelta > 0 ? '+' : ''}${p.effect.meanDelta} (${p.effect.n})` : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <Muted>Sin prácticas completas en el periodo.</Muted>
            )}
          </Block>
        )}

        {show('antidotos') && (
          <Block title="Emociones trabajadas con antídotos (intensidad 0–10)">
            {data.emotions.length ? (
              <table className="w-full text-sm">
                <thead className="text-left text-xs text-stone-500">
                  <tr>
                    <th className="pb-2 font-normal">Emoción</th>
                    <th className="pb-2 text-right font-normal">Veces</th>
                    <th className="pb-2 text-right font-normal">Antes (media)</th>
                    <th className="pb-2 text-right font-normal">Después (media)</th>
                  </tr>
                </thead>
                <tbody>
                  {data.emotions.map(([id, v]) => (
                    <tr key={id} className="border-t border-stone-100">
                      <td className="py-2 text-stone-800">{ANTIDOTE_BY_EMOTION[id as keyof typeof ANTIDOTE_BY_EMOTION]?.emotionLabel ?? id}</td>
                      <td className="py-2 text-right tabular-nums text-stone-700">{v.n}</td>
                      <td className="py-2 text-right tabular-nums text-stone-700">{mean(v.pre)}</td>
                      <td className="py-2 text-right tabular-nums text-stone-700">{mean(v.post) ?? '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <Muted>Sin registros de antídotos en el periodo.</Muted>
            )}
          </Block>
        )}

        {show('diario') && (
          <Block title="Entradas del diario seleccionadas">
            {data.journal.length === 0 ? (
              <Muted>Sin entradas en el periodo.</Muted>
            ) : (
              <>
                <p className="mb-4 text-sm text-stone-600 print:hidden">
                  Marca sólo las que quieras compartir. Las no marcadas no aparecen en el informe impreso.
                </p>
                <ul className="space-y-3">
                  {data.journal.map((e) => {
                    const t = TEMPLATE_BY_TYPE[e.type];
                    const on = included.has(e.id);
                    return (
                      <li key={e.id} className={on ? '' : 'print:hidden'}>
                        <label className="flex cursor-pointer items-start gap-3 print:cursor-auto">
                          <input type="checkbox" checked={on} onChange={() => setIncluded((s) => toggle(s, e.id))} className="mt-1 accent-sage-700 print:hidden" />
                          <span className="flex-1">
                            <span className="text-xs text-stone-500">
                              {SHORT.format(e.createdAt)} · {t.title}
                            </span>
                            {on ? (
                              <span className="mt-1 block space-y-1">
                                {t.fields
                                  .filter((f) => e.values[f.id] !== undefined)
                                  .map((f) => (
                                    <span key={f.id} className="block text-sm text-stone-800">
                                      <span className="text-stone-500">{f.label}: </span>
                                      <span className="whitespace-pre-wrap">{f.kind === 'scale' ? `${e.values[f.id]}/10` : String(e.values[f.id])}</span>
                                    </span>
                                  ))}
                              </span>
                            ) : (
                              <span className="block text-sm text-stone-600">{String(e.values[t.headline] ?? '')}</span>
                            )}
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </Block>
        )}

        <footer className="mt-10 border-t border-stone-200 pt-4 text-xs leading-relaxed text-stone-500">
          Datos autoinformados por el/la paciente en la aplicación. Los cambios inmediatos (ánimo, intensidad) no equivalen a
          efectos clínicos sostenidos. {SAFETY_DISCLAIMER}
        </footer>
      </m.article>
    </m.div>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-8 break-inside-avoid">
      <h3 className="mb-3 text-xs uppercase tracking-[0.18em] text-stone-600">{title}</h3>
      {children}
    </section>
  );
}

function Stat({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div>
      <dt className="text-xs text-stone-500">{label}</dt>
      <dd className="mt-1 font-serif text-2xl tabular-nums text-stone-900">{value}</dd>
    </div>
  );
}

function Muted({ children }: { children: ReactNode }) {
  return <p className="text-sm text-stone-600">{children}</p>;
}
