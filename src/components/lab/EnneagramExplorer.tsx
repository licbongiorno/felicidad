'use client';

import Link from 'next/link';
import { AnimatePresence, m } from 'motion/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ENNEAGRAM_BY_TYPE,
  ENNEAGRAM_CENTERS,
  ENNEAGRAM_ITEMS,
  ENNEAGRAM_SCALE,
  scoreEnneagram,
  type EnneagramProfile,
  type EnneagramType,
} from '@/domain/typologies';
import { PRACTICE_SUMMARY_BY_ID } from '@/domain/practiceIndex';
import { EASE_OUT, fadeUp, stagger } from '@/lib/motion';
import { Button, buttonStyles } from '@/components/ui/Button';

/** Respuestas del eneagrama, sólo en este dispositivo. */
const KEY = 'eneagrama-respuestas';
const PER_PAGE = 9;
const PAGES = Math.ceil(ENNEAGRAM_ITEMS.length / PER_PAGE);
const VALID_IDS = new Set(ENNEAGRAM_ITEMS.map((i) => i.id));

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

function TypeCard({ p, mean, open = false }: { p: EnneagramProfile; mean?: number; open?: boolean }) {
  const practice = PRACTICE_SUMMARY_BY_ID[p.growth.practiceId];
  const to = (t: EnneagramType) => `${t} · ${ENNEAGRAM_BY_TYPE[t].name}`;
  return (
    <details open={open} className="group rounded-2xl border border-stone-200 bg-white p-5">
      <summary className="cursor-pointer list-none">
        <span className="flex items-start justify-between gap-3">
          <span>
            <span className="block text-xs uppercase tracking-wider text-stone-500">
              Eneatipo {p.type} · {ENNEAGRAM_CENTERS[p.center].title.split(' o ')[0]}
            </span>
            <span className="mt-1 block font-serif text-xl text-stone-800">{p.name}</span>
            {mean !== undefined && <span className="mt-0.5 block text-sm tabular-nums text-stone-600">Puntaje medio: {fmt(mean)} de 5</span>}
          </span>
          <span aria-hidden className="mt-1 text-stone-400 group-open:rotate-45">
            ＋
          </span>
        </span>
      </summary>
      <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-stone-700">
        <p>{p.summary}</p>
        <dl className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
          <div>
            <dt className="text-xs uppercase tracking-wider text-stone-500">Miedo básico</dt>
            <dd>{p.basicFear}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-stone-500">Deseo básico</dt>
            <dd>{p.basicDesire}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-stone-500">Pasión</dt>
            <dd>{p.passion}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-stone-500">Fijación</dt>
            <dd>{p.fixation}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-xs uppercase tracking-wider text-stone-500">Defensa, según Naranjo</dt>
            <dd>{p.defense}</dd>
          </div>
        </dl>
        <div className="rounded-xl bg-stone-100 px-4 py-3 text-sm">
          <p>
            <span className="font-medium">En calma o creciendo, hacia el {to(p.integration.to)}: </span>
            {p.integration.text}
          </p>
          <p className="mt-2">
            <span className="font-medium">Con estrés, hacia el {to(p.disintegration.to)}: </span>
            {p.disintegration.text}
          </p>
        </div>
        <p>
          <span className="font-medium">Para crecer: </span>
          {p.growth.text}{' '}
          {practice && (
            <Link href={`/gimnasio/${practice.id}`} className={link}>
              Práctica: {practice.title}
            </Link>
          )}
        </p>
      </div>
    </details>
  );
}

/**
 * Eneagrama para autoexploración: 45 afirmaciones originales (5 por eneatipo). No da un tipo:
 * muestra los tres puntajes más altos como «los que más te resuenan» e invita a leerlos.
 */
export function EnneagramExplorer() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [page, setPage] = useState(0);
  const [view, setView] = useState<'test' | 'results'>('test');
  const [notice, setNotice] = useState('');
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const a = load();
    setAnswers(a);
    if (Object.keys(a).length === ENNEAGRAM_ITEMS.length) setView('results');
  }, []);

  const score = useMemo(() => scoreEnneagram(answers), [answers]);
  const complete = score.answered === ENNEAGRAM_ITEMS.length;
  const items = ENNEAGRAM_ITEMS.slice(page * PER_PAGE, (page + 1) * PER_PAGE);
  const pageDone = items.every((i) => answers[i.id]);

  function answer(id: number, value: number) {
    setNotice('');
    setAnswers((prev) => {
      const next = { ...prev, [id]: value };
      save(next);
      return next;
    });
  }

  function goTo(p: number) {
    setPage(p);
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function clear() {
    setAnswers({});
    save({});
    setPage(0);
    setView('test');
    setNotice('Borraste tus respuestas de este dispositivo.');
  }

  const top3 = score.order.slice(0, 3);

  return (
    <m.div variants={stagger(0.06)} initial="hidden" animate="show" className="mx-auto max-w-3xl">
      <m.header variants={fadeUp}>
        <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Laboratorio · autoexploración</p>
        <h1 className="mt-2 font-serif text-4xl text-stone-800">Eneagrama</h1>
        <p className="mt-3 rounded-xl border border-stone-300 bg-stone-100 px-4 py-3 text-[15px] font-medium leading-relaxed text-stone-800">
          Es una herramienta para pensarte, no un test validado. No diagnostica ni define quién eres.
        </p>
        <p className="mt-4 leading-relaxed text-stone-600">
          El eneagrama describe nueve estilos de personalidad. Aquí vas a leer 45 afirmaciones y marcar cuánto se parecen a ti. Al final
          verás los tres estilos que más te resuenan, para leerlos con calma. Casi todas las personas se reconocen en más de uno.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-stone-600">
          Las afirmaciones son propias de esta app. Tus respuestas quedan sólo en este dispositivo.{' '}
          <Link href="/biblioteca/eneagrama-que-es-y-que-no" className={link}>
            Qué es el eneagrama y qué no
          </Link>
        </p>
      </m.header>

      <div ref={topRef} className="scroll-mt-6" />

      <p aria-live="polite" className="mt-4 min-h-[1.25rem] text-sm text-stone-600">
        {notice}
      </p>

      {view === 'test' || !complete ? (
        <m.section variants={fadeUp} aria-labelledby="eneagrama-preguntas" className="mt-4">
          <h2 id="eneagrama-preguntas" className="sr-only">
            Afirmaciones
          </h2>
          <div className="rounded-2xl border border-stone-200 bg-white p-4">
            <p className="text-sm tabular-nums text-stone-700">
              Respondiste {score.answered} de {ENNEAGRAM_ITEMS.length} · Página {page + 1} de {PAGES}
            </p>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-stone-200" aria-hidden>
              <div className="h-full rounded-full bg-sage-600 transition-[width] duration-500" style={{ width: `${(score.answered / ENNEAGRAM_ITEMS.length) * 100}%` }} />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <m.ol
              key={page}
              start={page * PER_PAGE + 1}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.35, ease: EASE_OUT } }}
              exit={{ opacity: 0, x: -12, transition: { duration: 0.15 } }}
              className="mt-6 space-y-4"
            >
              {items.map((item, k) => (
                <li key={item.id}>
                  <fieldset className="rounded-2xl border border-stone-200 bg-white p-5">
                    <legend className="sr-only">
                      Afirmación {page * PER_PAGE + k + 1}: {item.text}
                    </legend>
                    <p aria-hidden className="font-serif text-lg leading-snug text-stone-800">
                      <span className="mr-2 text-sm tabular-nums text-stone-500">{page * PER_PAGE + k + 1}.</span>
                      {item.text}
                    </p>
                    <div className="mt-4 flex flex-col gap-2 sm:grid sm:grid-cols-5">
                      {ENNEAGRAM_SCALE.map((o) => (
                        <label key={o.value} className="cursor-pointer">
                          <input
                            type="radio"
                            name={`eneagrama-${item.id}`}
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
            </m.ol>
          </AnimatePresence>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {page > 0 && (
              <Button variant="secondary" onClick={() => goTo(page - 1)}>
                Anterior
              </Button>
            )}
            {page < PAGES - 1 ? (
              <Button onClick={() => goTo(page + 1)}>Siguiente</Button>
            ) : (
              <Button
                onClick={() => {
                  setView('results');
                  topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                disabled={!complete}
              >
                Ver lo que más me resuena
              </Button>
            )}
            {!pageDone && <span className="text-sm text-stone-600">Puedes dejar alguna sin responder y volver después.</span>}
            {page === PAGES - 1 && !complete && (
              <span className="text-sm text-stone-600">Faltan {ENNEAGRAM_ITEMS.length - score.answered} para ver el resultado.</span>
            )}
          </div>
        </m.section>
      ) : (
        <m.section variants={fadeUp} aria-labelledby="eneagrama-resultado" className="mt-4">
          <div className="rounded-2xl border border-sage-200 bg-sage-50/60 p-5">
            <h2 id="eneagrama-resultado" className="font-serif text-2xl text-stone-800">
              Los que más te resuenan
            </h2>
            <p className="mt-2 leading-relaxed text-stone-700">
              Estos son los tres puntajes más altos:{' '}
              <span className="font-medium">{top3.map((t) => `${t} · ${ENNEAGRAM_BY_TYPE[t].name}`).join(', ')}</span>. No dicen qué tipo
              eres. Te invitamos a leer las tres descripciones y notar cuál te describe mejor, sobre todo en lo que te mueve por dentro: el
              miedo y el deseo de fondo, más que las conductas.
            </p>
          </div>

          <ul className="mt-6 space-y-3">
            {top3.map((t, i) => (
              <li key={t}>
                <TypeCard p={ENNEAGRAM_BY_TYPE[t]} mean={score.means[t]} open={i === 0} />
              </li>
            ))}
          </ul>

          <h3 className="mt-10 font-serif text-xl text-stone-800">Tus nueve puntajes</h3>
          <p className="mt-1 text-sm text-stone-600">Puntaje medio de 1 a 5. Diferencias pequeñas no significan mucho.</p>
          <ul className="mt-4 space-y-2">
            {score.order.map((t) => (
              <li key={t} className="grid grid-cols-[minmax(0,11rem)_1fr_auto] items-center gap-3 text-sm">
                <span className="truncate text-stone-700">
                  {t} · {ENNEAGRAM_BY_TYPE[t].name}
                </span>
                <span className="h-2 overflow-hidden rounded-full bg-stone-200" aria-hidden>
                  <span className="block h-full rounded-full bg-sage-600" style={{ width: `${((score.means[t] - 1) / 4) * 100}%` }} />
                </span>
                <span className="tabular-nums text-stone-700">{fmt(score.means[t])}</span>
              </li>
            ))}
          </ul>

          <details className="mt-8">
            <summary className="cursor-pointer text-sm text-sage-700">Leer los otros seis estilos</summary>
            <ul className="mt-4 space-y-3">
              {score.order.slice(3).map((t) => (
                <li key={t}>
                  <TypeCard p={ENNEAGRAM_BY_TYPE[t]} mean={score.means[t]} />
                </li>
              ))}
            </ul>
          </details>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="secondary" onClick={() => setView('test')}>
              Revisar mis respuestas
            </Button>
            <Link href="/biblioteca/eneagrama-que-es-y-que-no" className={buttonStyles('secondary')}>
              Leer sobre el eneagrama
            </Link>
          </div>
        </m.section>
      )}

      <div className="mt-10 border-t border-stone-200 pt-6">
        <Button variant="ghost" onClick={clear} disabled={score.answered === 0}>
          Borrar mis respuestas
        </Button>
      </div>
    </m.div>
  );
}
