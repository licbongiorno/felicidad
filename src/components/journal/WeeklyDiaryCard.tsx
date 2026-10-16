'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { useMemo, useState } from 'react';
import { buildWeek, CARD_EMOTIONS, weekStart, weekToCsv } from '@/domain/diaryCard';
import { toDateKey } from '@/domain/metrics';
import { downloadFile } from '@/lib/ics';
import { useProgressStore } from '@/store/useProgressStore';
import { fadeUp, stagger } from '@/lib/motion';
import { Button, buttonStyles } from '@/components/ui/Button';

const DAY = new Intl.DateTimeFormat('es-AR', { weekday: 'short', day: 'numeric' });
const RANGE = new Intl.DateTimeFormat('es-AR', { day: 'numeric', month: 'long' });

/** Intensidad 0–10 como celda con relleno proporcional (sin colores de alarma). */
function Level({ value, label }: { value: number | null; label: string }) {
  if (value === null) return <span className="text-stone-400" aria-label={`${label}: sin dato`}>·</span>;
  return (
    <span className="inline-flex min-w-8 items-center justify-center rounded-md px-1.5 py-0.5 tabular-nums text-stone-800" style={{ backgroundColor: `rgb(var(--sage-300) / ${0.15 + (value / 10) * 0.75})` }}>
      {value}
    </span>
  );
}

/**
 * Tarjeta diaria DBT en vista semanal: la planilla que se lleva a terapia. Se arma con las
 * tarjetas del diario; se puede imprimir o descargar en CSV.
 */
export function WeeklyDiaryCard() {
  const journal = useProgressStore((s) => s.journal);
  const [start, setStart] = useState(() => weekStart(new Date()));
  const week = useMemo(() => buildWeek(journal, start), [journal, start]);
  const isCurrent = toDateKey(start) === toDateKey(weekStart(new Date()));
  const end = week.days[6].date;

  const move = (n: number) =>
    setStart((s) => {
      const d = new Date(s);
      d.setDate(d.getDate() + 7 * n);
      return d;
    });

  return (
    <m.div variants={stagger(0.05)} initial="hidden" animate="show">
      <m.div variants={fadeUp} className="print:hidden">
        <Link href="/diario" className="group inline-flex items-center gap-1.5 text-sm text-stone-500 transition-colors hover:text-stone-700">
          <span className="transition-transform duration-300 group-hover:-translate-x-0.5">←</span> Diario
        </Link>
      </m.div>
      <m.header variants={fadeUp} className="mt-8 max-w-2xl print:mt-0">
        <h1 className="font-serif text-4xl text-stone-800 sm:text-5xl print:text-3xl">Tarjeta diaria DBT</h1>
        <p className="mt-2 text-lg text-stone-600">
          Semana del {RANGE.format(week.start)} al {RANGE.format(end)}
        </p>
        <p className="mt-3 leading-relaxed text-stone-600 print:hidden">
          Tus tarjetas de cada día, juntas en una planilla. Llévala a tu sesión: ver la semana entera ayuda a encontrar patrones que de un día para otro pasan desapercibidos.
        </p>
      </m.header>

      <m.nav variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-2 print:hidden" aria-label="Semanas">
        <Button variant="secondary" onClick={() => move(-1)}>
          ← Semana anterior
        </Button>
        <Button variant="secondary" onClick={() => move(1)} disabled={isCurrent}>
          Semana siguiente →
        </Button>
        <Link href="/diario?nuevo=tarjeta-diaria" className={buttonStyles('primary')}>
          Llenar la tarjeta de hoy
        </Link>
      </m.nav>

      {week.filled === 0 ? (
        <m.p variants={fadeUp} className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 text-stone-600">
          No hay tarjetas esta semana. Llenarla cada noche lleva unos dos minutos.
        </m.p>
      ) : (
        <>
          <m.div variants={fadeUp} tabIndex={0} role="region" aria-label="Planilla de la semana (se desplaza hacia los costados)" className="mt-8 overflow-x-auto rounded-2xl border border-stone-200 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 print:overflow-visible print:border-0">
            <table className="w-full min-w-[40rem] border-collapse text-sm">
              <caption className="sr-only">Tarjeta diaria de la semana: una columna por día</caption>
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-600">
                  <th scope="col" className="sticky left-0 bg-white p-3 font-medium">
                    &nbsp;
                  </th>
                  {week.days.map((d) => (
                    <th key={d.key} scope="col" className="p-3 text-center font-medium capitalize">
                      {DAY.format(d.date)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CARD_EMOTIONS.map((e) => (
                  <tr key={e.id} className="border-b border-stone-100">
                    <th scope="row" className="sticky left-0 bg-white p-3 text-left font-medium text-stone-700">
                      {e.label}
                    </th>
                    {week.days.map((d) => (
                      <td key={d.key} className="p-2 text-center">
                        <Level value={d.emotions[e.id]} label={`${e.label}, ${DAY.format(d.date)}`} />
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-b border-stone-100">
                  <th scope="row" className="sticky left-0 bg-white p-3 text-left font-medium text-stone-700">
                    Impulso más fuerte
                  </th>
                  {week.days.map((d) => (
                    <td key={d.key} className="p-2 text-center align-top text-stone-700">
                      {d.urge ? (
                        <span>
                          {d.urge}
                          {d.urgeIntensity !== null && <span className="block tabular-nums text-stone-500">{d.urgeIntensity}/10</span>}
                        </span>
                      ) : (
                        <span className="text-stone-400">·</span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-stone-100">
                  <th scope="row" className="sticky left-0 bg-white p-3 text-left font-medium text-stone-700">
                    Conducta a evitar
                  </th>
                  {week.days.map((d) => (
                    <td key={d.key} className="p-2 text-center align-top text-stone-700">
                      {d.entry ? d.behavior || 'No' : <span className="text-stone-400">·</span>}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-stone-100">
                  <th scope="row" className="sticky left-0 bg-white p-3 text-left font-medium text-stone-700">
                    Habilidades
                  </th>
                  {week.days.map((d) => (
                    <td key={d.key} className="p-2 text-center align-top text-stone-700">
                      {d.skills.length ? d.skills.join(', ') : <span className="text-stone-400">·</span>}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th scope="row" className="sticky left-0 bg-white p-3 text-left font-medium text-stone-700">
                    Cuánto ayudaron
                  </th>
                  {week.days.map((d) => (
                    <td key={d.key} className="p-2 text-center">
                      <Level value={d.usefulness} label={`Cuánto ayudaron, ${DAY.format(d.date)}`} />
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </m.div>

          <m.section variants={fadeUp} className="mt-8 grid gap-4 md:grid-cols-2" aria-label="Resumen de la semana">
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <h2 className="font-serif text-xl text-stone-800">La semana en números</h2>
              <ul className="mt-3 space-y-1.5 text-[15px] text-stone-700">
                <li>
                  Días con tarjeta: <span className="tabular-nums">{week.filled} de 7</span>
                </li>
                {CARD_EMOTIONS.map((e) => (
                  <li key={e.id}>
                    {e.label}, promedio: <span className="tabular-nums">{week.averages[e.id] ?? '—'}</span>
                  </li>
                ))}
                <li>
                  Días con una conducta a evitar: <span className="tabular-nums">{week.behaviorDays}</span>
                </li>
              </ul>
              <p className="mt-3 text-sm text-stone-500">Son números para conversar, no un diagnóstico.</p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <h2 className="font-serif text-xl text-stone-800">Habilidades que usaste</h2>
              {week.skillCounts.length ? (
                <ul className="mt-3 space-y-1.5 text-[15px] text-stone-700">
                  {week.skillCounts.map((s) => (
                    <li key={s.skill}>
                      {s.skill} · <span className="tabular-nums">{s.days === 1 ? '1 día' : `${s.days} días`}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-[15px] text-stone-600">Esta semana no anotaste habilidades.</p>
              )}
            </div>
          </m.section>

          <m.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3 print:hidden">
            <Button onClick={() => window.print()}>Imprimir o guardar PDF</Button>
            <Button variant="secondary" onClick={() => downloadFile(`tarjeta-dbt-${toDateKey(week.start)}.csv`, weekToCsv(week), 'text/csv;charset=utf-8')}>
              Descargar planilla (CSV)
            </Button>
          </m.div>
          <p className="mt-4 text-sm text-stone-500 print:hidden">El archivo queda en tu dispositivo. Compártelo sólo si quieres.</p>
        </>
      )}
    </m.div>
  );
}
