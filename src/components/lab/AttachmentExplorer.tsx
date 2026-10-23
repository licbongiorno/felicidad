'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ATTACHMENT_ARTICLE_TITLES,
  ATTACHMENT_DIMENSIONS,
  ATTACHMENT_ITEMS,
  ATTACHMENT_QUADRANTS,
  ATTACHMENT_QUADRANT_BY_ID,
  ATTACHMENT_SCALE,
  dimensionSentence,
  scoreAttachment,
  type AttachmentDimension,
  type AttachmentQuadrantId,
} from '@/domain/lab-apego';
import { PRACTICE_SUMMARY_BY_ID } from '@/domain/practiceIndex';
import { fadeUp, stagger } from '@/lib/motion';
import { Button, buttonStyles } from '@/components/ui/Button';

/** Respuestas de «Mi forma de vincularme», sólo en este dispositivo. */
const KEY = 'apego-respuestas';
const VALID_IDS = new Set(ATTACHMENT_ITEMS.map((i) => i.id));

function load(): Record<number, number> {
  try {
    const v = JSON.parse(localStorage.getItem(KEY) ?? '{}');
    if (!v || typeof v !== 'object' || Array.isArray(v)) return {};
    const out: Record<number, number> = {};
    for (const [k, x] of Object.entries(v)) {
      const id = Number(k);
      if (VALID_IDS.has(id) && typeof x === 'number' && Number.isInteger(x) && x >= 1 && x <= 5) out[id] = x;
    }
    return out;
  } catch {
    return {};
  }
}

function save(answers: Record<number, number>) {
  try {
    if (Object.keys(answers).length === 0) localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, JSON.stringify(answers));
  } catch {
    // sin almacenamiento: las respuestas viven sólo en esta pestaña
  }
}

const link = 'text-sage-700 underline decoration-sage-300 underline-offset-2 hover:decoration-sage-700';
const fmt = (n: number) => n.toLocaleString('es-AR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
/** Posición 0–100 % de una media de 1 a 5. */
const pct = (mean: number) => ((mean - 1) / 4) * 100;

/** Orden de las celdas del mapa: arriba, más ansiedad; a la derecha, más evitación. */
const GRID: AttachmentQuadrantId[] = ['preocupado', 'temeroso', 'seguro', 'evitativo'];

function DimensionBar({ dim, mean }: { dim: AttachmentDimension; mean: number }) {
  const d = ATTACHMENT_DIMENSIONS[dim];
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5">
      <p className="flex items-baseline justify-between gap-3">
        <span className="font-serif text-lg text-stone-800">{d.title}</span>
        <span className="text-sm tabular-nums text-stone-600">{fmt(mean)} de 5</span>
      </p>
      <p className="mt-1 text-sm leading-relaxed text-stone-600">{d.description}</p>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-stone-200" aria-hidden>
        <div className="h-full rounded-full bg-sage-600" style={{ width: `${pct(mean)}%` }} />
      </div>
      <p className="mt-1 flex justify-between text-xs text-stone-500" aria-hidden>
        <span>{d.low}</span>
        <span>{d.high}</span>
      </p>
      <p className="mt-3 text-[15px] text-stone-700">{dimensionSentence(dim, mean)}</p>
    </div>
  );
}

function QuadrantMap({ anx, avo, current }: { anx: number; avo: number; current: AttachmentQuadrantId }) {
  return (
    <figure className="mt-6">
      <div className="relative mx-auto aspect-square w-full max-w-sm" aria-hidden>
        <div className="grid h-full grid-cols-2 grid-rows-2 gap-1 overflow-hidden rounded-2xl">
          {GRID.map((id) => (
            <div
              key={id}
              className={`flex items-center justify-center p-3 text-center text-xs leading-snug ${
                id === current ? 'bg-sage-100 font-medium text-stone-800' : 'bg-stone-100 text-stone-500'
              }`}
            >
              {ATTACHMENT_QUADRANT_BY_ID[id].title}
            </div>
          ))}
        </div>
        <span
          className="absolute h-4 w-4 -translate-x-1/2 translate-y-1/2 rounded-full border-2 border-white bg-sage-700 shadow"
          style={{ left: `${pct(avo)}%`, bottom: `${pct(anx)}%` }}
        />
      </div>
      <figcaption className="mx-auto mt-2 max-w-sm text-xs leading-relaxed text-stone-500">
        Hacia arriba, más ansiedad de apego. Hacia la derecha, más evitación. El punto marca tus respuestas de hoy.
      </figcaption>
    </figure>
  );
}

/**
 * «Mi forma de vincularme»: catorce afirmaciones propias (siete de ansiedad de apego y siete
 * de evitación). No da un estilo: describe tendencias de hoy y enlaza prácticas del paquete.
 */
export function AttachmentExplorer() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [view, setView] = useState<'test' | 'results'>('test');
  const [notice, setNotice] = useState('');
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const a = load();
    setAnswers(a);
    if (Object.keys(a).length === ATTACHMENT_ITEMS.length) setView('results');
  }, []);

  const score = useMemo(() => scoreAttachment(answers), [answers]);
  const { complete } = score;

  function answer(id: number, value: number) {
    setNotice('');
    setAnswers((prev) => {
      const next = { ...prev, [id]: value };
      save(next);
      return next;
    });
  }

  function clear() {
    setAnswers({});
    save({});
    setView('test');
    setNotice('Borraste tus respuestas de este dispositivo.');
  }

  const showResults = view === 'results' && complete && score.quadrant && score.means.ansiedad !== null && score.means.evitacion !== null;
  const q = score.quadrant ? ATTACHMENT_QUADRANT_BY_ID[score.quadrant] : null;

  return (
    <m.div variants={stagger(0.06)} initial="hidden" animate="show" className="mx-auto max-w-3xl">
      <m.header variants={fadeUp}>
        <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Laboratorio · autoexploración</p>
        <h1 className="mt-2 font-serif text-4xl text-stone-800">Mi forma de vincularme</h1>
        <p className="mt-3 rounded-xl border border-stone-300 bg-stone-100 px-4 py-3 text-[15px] font-medium leading-relaxed text-stone-800">
          Es un ejercicio para pensarte, no un test validado. No diagnostica ni dice qué estilo de apego tienes.
        </p>
        <p className="mt-4 leading-relaxed text-stone-600">
          El apego adulto se suele describir con dos dimensiones: cuánta alarma te da la distancia (ansiedad) y cuánto te incomoda la
          cercanía (evitación). Piensa en tus vínculos cercanos: tu pareja, una pareja anterior o alguien muy importante para ti. Marca
          cuánto se parece cada frase a lo que te pasa en general.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-stone-600">
          Las afirmaciones son propias de esta app. Tus respuestas quedan sólo en este dispositivo.{' '}
          <Link href="/biblioteca/apego-adulto" className={link}>
            Leer sobre el apego adulto
          </Link>
        </p>
      </m.header>

      <div ref={topRef} className="scroll-mt-6" />

      <p aria-live="polite" className="mt-4 min-h-[1.25rem] text-sm text-stone-600">
        {notice}
      </p>

      {!showResults ? (
        <m.section variants={fadeUp} aria-labelledby="apego-preguntas" className="mt-4">
          <h2 id="apego-preguntas" className="sr-only">
            Afirmaciones
          </h2>
          <div className="rounded-2xl border border-stone-200 bg-white p-4">
            <p className="text-sm tabular-nums text-stone-700">
              Respondiste {score.answered} de {ATTACHMENT_ITEMS.length}
            </p>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-stone-200" aria-hidden>
              <div
                className="h-full rounded-full bg-sage-600 transition-[width] duration-500"
                style={{ width: `${(score.answered / ATTACHMENT_ITEMS.length) * 100}%` }}
              />
            </div>
          </div>

          <ol className="mt-6 space-y-4">
            {ATTACHMENT_ITEMS.map((item, k) => (
              <li key={item.id}>
                <fieldset className="rounded-2xl border border-stone-200 bg-white p-5">
                  <legend className="sr-only">
                    Afirmación {k + 1}: {item.text}
                  </legend>
                  <p aria-hidden className="font-serif text-lg leading-snug text-stone-800">
                    <span className="mr-2 text-sm tabular-nums text-stone-500">{k + 1}.</span>
                    {item.text}
                  </p>
                  <div className="mt-4 flex flex-col gap-2 sm:grid sm:grid-cols-5">
                    {ATTACHMENT_SCALE.map((o) => (
                      <label key={o.value} className="cursor-pointer">
                        <input
                          type="radio"
                          name={`apego-${item.id}`}
                          value={o.value}
                          checked={answers[item.id] === o.value}
                          onChange={() => answer(item.id, o.value)}
                          className="peer sr-only"
                        />
                        <span className="flex h-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-stone-700 ring-1 ring-inset ring-stone-200 transition-colors hover:ring-stone-300 peer-checked:bg-sage-700 peer-checked:text-stone-50 peer-checked:ring-sage-700 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-sage-600 sm:flex-col sm:justify-center sm:text-center">
                          <span className="font-medium tabular-nums">{o.value}</span>
                          <span className="text-xs leading-tight">{o.label}</span>
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </li>
            ))}
          </ol>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button
              onClick={() => {
                setView('results');
                topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              disabled={!complete}
            >
              Ver mis tendencias de hoy
            </Button>
            {!complete && <span className="text-sm text-stone-600">Faltan {ATTACHMENT_ITEMS.length - score.answered} para ver la devolución.</span>}
          </div>
        </m.section>
      ) : (
        q && (
          <m.section variants={fadeUp} aria-labelledby="apego-resultado" className="mt-4">
            <div className="rounded-2xl border border-sage-200 bg-sage-50/60 p-5">
              <p className="text-xs uppercase tracking-wider text-stone-500">{q.combo}, hoy</p>
              <h2 id="apego-resultado" className="mt-1 font-serif text-2xl text-stone-800">
                {q.title}
              </h2>
              <p className="mt-3 leading-relaxed text-stone-700">{q.today}</p>
              <p className="mt-3 leading-relaxed text-stone-700">{q.helps}</p>
            </div>

            <QuadrantMap anx={score.means.ansiedad!} avo={score.means.evitacion!} current={q.id} />

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <DimensionBar dim="ansiedad" mean={score.means.ansiedad!} />
              <DimensionBar dim="evitacion" mean={score.means.evitacion!} />
            </div>

            <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-5 text-[15px] leading-relaxed text-stone-700">
              <h3 className="font-serif text-lg text-stone-800">Cómo leer esto</h3>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>Describe cómo respondiste hoy, no quién eres. Con otra persona, en otra etapa o con más estrés, puede salir distinto.</li>
                <li>No es un test validado. Es un ejercicio de reflexión con frases propias de la app.</li>
                <li>El apego cambia. Las relaciones que dan confianza, la reflexión y la terapia ayudan a vincularse con más seguridad.</li>
                <li>Cerca del medio, las diferencias pequeñas no significan mucho.</li>
              </ul>
            </div>

            <h3 className="mt-8 font-serif text-xl text-stone-800">Para seguir</h3>
            <ul className="mt-3 space-y-2">
              {q.practiceIds.map((id) => {
                const p = PRACTICE_SUMMARY_BY_ID[id];
                return p ? (
                  <li key={id}>
                    <Link href={`/gimnasio/${id}`} className={link}>
                      Práctica: {p.title}
                    </Link>
                  </li>
                ) : null;
              })}
              {q.articleIds.map((id) => (
                <li key={id}>
                  <Link href={`/biblioteca/${id}`} className={link}>
                    Artículo: {ATTACHMENT_ARTICLE_TITLES[id] ?? id}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/programas/apego-mas-seguro" className={link}>
                  Programa: Hacia un vínculo más seguro
                </Link>
              </li>
            </ul>

            <p className="mt-6 rounded-xl border border-stone-300 bg-stone-100 px-4 py-3 text-sm leading-relaxed text-stone-800">
              Si en tu pareja hay violencia, control, amenazas o miedo, no es un tema de estilos de apego. Lo primero es tu seguridad: Línea
              144, o 911 si estás en peligro. También puedes usar el botón Ayuda.
            </p>

            <details className="mt-8">
              <summary className="cursor-pointer text-sm text-sage-700">Leer las cuatro combinaciones</summary>
              <ul className="mt-4 space-y-3">
                {ATTACHMENT_QUADRANTS.map((x) => (
                  <li key={x.id} className="rounded-2xl border border-stone-200 bg-white p-5">
                    <p className="text-xs uppercase tracking-wider text-stone-500">{x.combo}</p>
                    <p className="mt-1 font-serif text-lg text-stone-800">{x.title}</p>
                    <p className="mt-2 text-[15px] leading-relaxed text-stone-700">{x.helps}</p>
                  </li>
                ))}
              </ul>
            </details>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="secondary" onClick={() => setView('test')}>
                Revisar mis respuestas
              </Button>
              <Link href="/biblioteca/mentalizar-en-pareja" className={buttonStyles('secondary')}>
                Mentalizar en pareja
              </Link>
            </div>
          </m.section>
        )
      )}

      <div className="mt-10 border-t border-stone-200 pt-6">
        <Button variant="ghost" onClick={clear} disabled={score.answered === 0}>
          Borrar mis respuestas
        </Button>
      </div>
    </m.div>
  );
}
