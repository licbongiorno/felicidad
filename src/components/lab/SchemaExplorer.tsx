'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { useEffect, useState } from 'react';
import { MODE_GROUP_LABEL, MODES, SCHEMA_BY_ID, SCHEMA_DOMAINS, SCHEMAS, type ModeGroup } from '@/domain/schemas';
import { PRACTICE_SUMMARY_BY_ID as PRACTICE_BY_ID } from '@/domain/practiceIndex';
import { fadeUp, stagger } from '@/lib/motion';
import { Tabs } from '@/components/ui/Tabs';
import { buttonStyles } from '@/components/ui/Button';

/** Esquemas que la persona marcó como «me resuena», sólo en este dispositivo. */
const KEY = 'esquemas-resuenan';

function load(): string[] {
  try {
    const v = JSON.parse(localStorage.getItem(KEY) ?? '[]');
    return Array.isArray(v) ? v.filter((x): x is string => typeof x === 'string' && !!SCHEMA_BY_ID[x]) : [];
  } catch {
    return [];
  }
}

const link = 'text-sage-700 underline decoration-sage-300 underline-offset-2 hover:decoration-sage-700';

/**
 * Mapa de la terapia de esquemas: los 18 esquemas por dominio y los modos. No es un test ni
 * da puntaje; marcar «me resuena» sólo sirve para volver a mirarlos y elegir por dónde empezar.
 */
export function SchemaExplorer() {
  const [marked, setMarked] = useState<string[]>([]);
  useEffect(() => setMarked(load()), []);

  const toggle = (id: string) =>
    setMarked((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      try {
        localStorage.setItem(KEY, JSON.stringify(next));
      } catch {
        // sin almacenamiento: la marca vive sólo en esta pestaña
      }
      return next;
    });

  const schemasTab = (
    <div>
      {marked.length > 0 && (
        <section aria-label="Lo que marcaste" className="mb-8 rounded-2xl border border-sage-200 bg-sage-50/60 p-5">
          <h2 className="font-serif text-xl text-stone-800">Te resuenan {marked.length === 1 ? 'un esquema' : `${marked.length} esquemas`}</h2>
          <p className="mt-1 text-[15px] text-stone-700">{marked.map((id) => SCHEMA_BY_ID[id].name).join(' · ')}</p>
          <p className="mt-3 text-sm leading-relaxed text-stone-600">
            Elige uno y empieza por ver cómo lo afrontas. Después, arma tu tarjeta para cuando se active.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/gimnasio/tres-formas-de-afrontar" className={buttonStyles('primary')}>
              Rendirme, escapar o contraatacar
            </Link>
            <Link href="/diario?nuevo=tarjeta-esquema" className={buttonStyles('secondary')}>
              Escribir la tarjeta del esquema
            </Link>
          </div>
        </section>
      )}
      {SCHEMA_DOMAINS.map((d) => (
        <section key={d.id} className="mb-10" aria-labelledby={`dominio-${d.id}`}>
          <h2 id={`dominio-${d.id}`} className="font-serif text-2xl text-stone-800">
            {d.title}
          </h2>
          <p className="mt-1 text-[15px] leading-relaxed text-stone-600">{d.description}</p>
          <p className="mt-1 text-sm text-stone-500">Necesidad de fondo: {d.need}</p>
          <ul className="mt-4 space-y-3">
            {SCHEMAS.filter((s) => s.domain === d.id).map((s) => {
              const on = marked.includes(s.id);
              return (
                <li key={s.id} className={`rounded-2xl border bg-white p-5 transition-colors ${on ? 'border-sage-400' : 'border-stone-200'}`}>
                  <details>
                    <summary className="cursor-pointer list-none">
                      <span className="flex items-start justify-between gap-3">
                        <span>
                          <span className="block font-medium text-stone-800">{s.name}</span>
                          <span className="mt-0.5 block font-serif text-[17px] italic text-stone-600">{s.belief}</span>
                        </span>
                        <span aria-hidden className="mt-1 text-stone-400">
                          ＋
                        </span>
                      </span>
                    </summary>
                    <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-stone-700">
                      <p>{s.description}</p>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-stone-500">Cómo se ve</p>
                        <ul className="mt-1 list-disc space-y-0.5 pl-5">
                          {s.looksLike.map((x) => (
                            <li key={x}>{x}</li>
                          ))}
                        </ul>
                      </div>
                      <p className="rounded-xl bg-stone-100 px-4 py-3">
                        <span className="font-medium">Tu adulto sano podría decirte: </span>
                        {s.healthyAdult}
                      </p>
                    </div>
                  </details>
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(s.id)}
                    className={`mt-4 rounded-full border px-4 py-1.5 text-sm transition-colors ${on ? 'border-sage-500 bg-sage-600 text-white' : 'border-stone-300 text-stone-700 hover:border-sage-400'}`}
                  >
                    {on ? 'Me resuena ✓' : 'Me resuena'}
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );

  const modesTab = (
    <div>
      <p className="mb-8 max-w-2xl leading-relaxed text-stone-600">
        Un modo es el estado en el que estás en un momento. Todos pasamos de uno a otro durante el día. Reconocer cuál está al mando ayuda a
        darle lo que necesita.{' '}
        <Link href="/gimnasio/reconocer-el-modo" className={link}>
          Practicar reconocer el modo
        </Link>
      </p>
      {(Object.keys(MODE_GROUP_LABEL) as ModeGroup[]).map((g) => (
        <section key={g} className="mb-10" aria-labelledby={`modos-${g}`}>
          <h2 id={`modos-${g}`} className="font-serif text-2xl text-stone-800">
            {MODE_GROUP_LABEL[g].title}
          </h2>
          <p className="mt-1 text-sm text-stone-500">{MODE_GROUP_LABEL[g].help}</p>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {MODES.filter((mo) => mo.group === g).map((mo) => {
              const practice = mo.practiceId ? PRACTICE_BY_ID[mo.practiceId] : undefined;
              return (
                <li key={mo.id} className="flex flex-col rounded-2xl border border-stone-200 bg-white p-5">
                  <h3 className="font-medium text-stone-800">{mo.name}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-stone-700">{mo.description}</p>
                  <ul className="mt-3 space-y-0.5 text-sm text-stone-600">
                    {mo.signs.map((x) => (
                      <li key={x}>· {x}</li>
                    ))}
                  </ul>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-700">
                    <span className="font-medium">Qué ayuda: </span>
                    {mo.helps}
                  </p>
                  {practice && (
                    <Link href={`/gimnasio/${practice.id}`} className={`mt-3 text-sm ${link}`}>
                      {practice.title}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );

  return (
    <m.div variants={stagger(0.06)} initial="hidden" animate="show" className="mx-auto max-w-3xl">
      <m.header variants={fadeUp}>
        <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Laboratorio · terapia de esquemas</p>
        <h1 className="mt-2 font-serif text-4xl text-stone-800">Mapa de esquemas y modos</h1>
        <p className="mt-4 leading-relaxed text-stone-600">
          Los 18 esquemas de Jeffrey Young y las partes que se turnan dentro de nosotros. Léelos con calma y marca los que te resuenan.
        </p>
        <p className="mt-3 rounded-xl bg-stone-100 px-4 py-3 text-sm leading-relaxed text-stone-700">
          Esto no es un test ni un diagnóstico. Casi todos nos reconocemos en varios esquemas. Lo que marques queda sólo en este dispositivo.{' '}
          <Link href="/biblioteca/terapia-de-esquemas" className={link}>
            Qué es la terapia de esquemas
          </Link>
        </p>
      </m.header>
      <m.div variants={fadeUp} className="mt-8">
        <Tabs
          tabs={[
            { id: 'esquemas', label: 'Los 18 esquemas', content: schemasTab },
            { id: 'modos', label: 'Los modos', content: modesTab },
          ]}
        />
      </m.div>
    </m.div>
  );
}
