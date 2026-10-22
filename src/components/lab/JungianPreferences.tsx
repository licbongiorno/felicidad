'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';
import {
  DICHOTOMY_BY_ID,
  DICHOTOMY_IDS,
  JUNGIAN_DICHOTOMIES,
  JUNGIAN_ITEMS,
  JUNGIAN_SCALE,
  TEMPERAMENTS,
  scoreJungian,
  type DichotomyResult,
  type Pole,
} from '@/domain/typologies';
import { fadeUp, stagger } from '@/lib/motion';
import { Button, buttonStyles } from '@/components/ui/Button';

/** Respuestas de preferencias junguianas, sólo en este dispositivo. */
const KEY = 'preferencias-junguianas-respuestas';
const VALID_IDS = new Set(JUNGIAN_ITEMS.map((i) => i.id));

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

const ARTICLE: Record<Pole, string> = { E: 'la', I: 'la', S: 'la', N: 'la', T: 'el', F: 'el', J: 'el', P: 'la' };

const STRENGTH_TEXT: Record<Exclude<DichotomyResult['strength'], 'equilibrio'>, string> = {
  leve: 'una preferencia leve',
  moderada: 'una preferencia moderada',
  clara: 'una preferencia clara',
};

function ResultRow({ r }: { r: DichotomyResult }) {
  const info = DICHOTOMY_BY_ID[r.dichotomy];
  const [first, second] = info.poles;
  // Posición del marcador: 0 % = todo el primer polo, 100 % = todo el segundo.
  const pos = r.pole === null ? 50 : r.pole === first.pole ? 50 - r.ratio * 50 : 50 + r.ratio * 50;
  const poleName = info.poles.find((p) => p.pole === r.pole)?.name.toLowerCase();
  return (
    <li className="rounded-2xl border border-stone-200 bg-white p-5">
      <h3 className="font-medium text-stone-800">{info.title}</h3>
      <p className="mt-1 text-[15px] text-stone-700">
        {r.pole === null
          ? 'Tus respuestas quedaron en equilibrio entre los dos polos.'
          : `Tus respuestas muestran ${STRENGTH_TEXT[r.strength as keyof typeof STRENGTH_TEXT]} por ${r.pole ? ARTICLE[r.pole] : ''} ${poleName}.`}
      </p>
      <div className="mt-4 flex items-center gap-3 text-xs text-stone-600">
        <span className="w-24 text-right">{first.name}</span>
        <span className="relative h-2 flex-1 rounded-full bg-stone-200" aria-hidden>
          <span className="absolute inset-y-0 left-1/2 w-px bg-stone-400" />
          <span className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage-700 shadow-soft" style={{ left: `${pos}%` }} />
        </span>
        <span className="w-24">{second.name}</span>
      </div>
    </li>
  );
}

/**
 * Preferencias junguianas: 16 pares de opciones originales con una escala bipolar. Muestra la
 * fuerza de cada preferencia, nunca un código de cuatro letras.
 */
export function JungianPreferences() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [notice, setNotice] = useState('');
  useEffect(() => setAnswers(load()), []);

  const results = useMemo(() => scoreJungian(answers), [answers]);
  const answered = Object.keys(answers).length;
  const complete = answered === JUNGIAN_ITEMS.length;

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
    setNotice('Borraste tus respuestas de este dispositivo.');
  }

  return (
    <m.div variants={stagger(0.06)} initial="hidden" animate="show" className="mx-auto max-w-3xl">
      <m.header variants={fadeUp}>
        <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Laboratorio · autoexploración</p>
        <h1 className="mt-2 font-serif text-4xl text-stone-800">Preferencias junguianas</h1>
        <p className="mt-3 rounded-xl border border-stone-300 bg-stone-100 px-4 py-3 text-[15px] font-medium leading-relaxed text-stone-800">
          Es una herramienta para pensarte, no un test validado. No diagnostica ni define quién eres.
        </p>
        <p className="mt-4 leading-relaxed text-stone-600">
          Carl Jung describió formas preferidas de cargar energía, de enterarse de las cosas y de decidir. En cada par, marca cuál se
          parece más a ti en general, no en un día puntual. Verás hacia dónde te inclinas y con qué fuerza. Todas las personas usamos los
          dos polos.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-stone-600">
          Las frases son propias de esta app y tus respuestas quedan sólo en este dispositivo.{' '}
          <Link href="/biblioteca/preferencias-junguianas-y-mbti" className={link}>
            Usos y límites de estas ideas
          </Link>
        </p>
      </m.header>

      <p aria-live="polite" className="mt-4 min-h-[1.25rem] text-sm text-stone-600">
        {notice}
      </p>

      <m.section variants={fadeUp} aria-labelledby="pref-preguntas" className="mt-4">
        <h2 id="pref-preguntas" className="sr-only">
          Pares de opciones
        </h2>
        <div className="sticky top-2 z-10 rounded-2xl border border-stone-200 bg-white p-4 shadow-soft">
          <p className="text-sm tabular-nums text-stone-700">
            Respondiste {answered} de {JUNGIAN_ITEMS.length}
          </p>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-stone-200" aria-hidden>
            <div className="h-full rounded-full bg-sage-600 transition-[width] duration-500" style={{ width: `${(answered / JUNGIAN_ITEMS.length) * 100}%` }} />
          </div>
        </div>

        <ol className="mt-6 space-y-4">
          {JUNGIAN_ITEMS.map((item, k) => (
            <li key={item.id}>
              <fieldset className="rounded-2xl border border-stone-200 bg-white p-5">
                <legend className="sr-only">
                  Par {k + 1}. Opción A: {item.a.text} Opción B: {item.b.text}
                </legend>
                <div aria-hidden className="grid gap-3 sm:grid-cols-2">
                  <p className="rounded-xl bg-stone-100 px-4 py-3 text-[15px] leading-snug text-stone-800">
                    <span className="mr-1 font-medium">A.</span>
                    {item.a.text}
                  </p>
                  <p className="rounded-xl bg-stone-100 px-4 py-3 text-[15px] leading-snug text-stone-800">
                    <span className="mr-1 font-medium">B.</span>
                    {item.b.text}
                  </p>
                </div>
                <div className="mt-4 flex flex-col gap-2 sm:grid sm:grid-cols-5">
                  {JUNGIAN_SCALE.map((o) => (
                    <label key={o.value} className="cursor-pointer">
                      <input
                        type="radio"
                        name={`preferencia-${item.id}`}
                        value={o.value}
                        checked={answers[item.id] === o.value}
                        onChange={() => answer(item.id, o.value)}
                        className="peer sr-only"
                      />
                      <span className="flex h-full items-center justify-center rounded-xl px-3 py-2 text-center text-sm text-stone-700 ring-1 ring-inset ring-stone-200 transition-colors hover:ring-stone-300 peer-checked:bg-sage-700 peer-checked:text-stone-50 peer-checked:ring-sage-700 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-sage-600">
                        {o.label}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </li>
          ))}
        </ol>

        {!complete && (
          <p className="mt-6 text-sm text-stone-600">
            Faltan {JUNGIAN_ITEMS.length - answered} para ver tus preferencias.
          </p>
        )}
      </m.section>

      {complete && (
        <m.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} aria-labelledby="pref-resultado" className="mt-10">
          <h2 id="pref-resultado" className="font-serif text-2xl text-stone-800">
            Hacia dónde te inclinas
          </h2>
          <p className="mt-2 leading-relaxed text-stone-600">
            Es una foto de cómo respondiste hoy, no una etiqueta. Una preferencia leve puede cambiar si respondes otro día. Mira cada
            polo como un lugar cómodo, no como un límite: el que usas menos también es tuyo y se puede entrenar.
          </p>
          <ul className="mt-6 space-y-3">
            {DICHOTOMY_IDS.map((d) => (
              <ResultRow key={d} r={results[d]} />
            ))}
          </ul>
        </m.section>
      )}

      <m.section variants={fadeUp} aria-labelledby="pref-polos" className="mt-12">
        <h2 id="pref-polos" className="font-serif text-2xl text-stone-800">
          Qué significa cada polo
        </h2>
        <ul className="mt-4 space-y-4">
          {JUNGIAN_DICHOTOMIES.map((d) => (
            <li key={d.id} className="rounded-2xl border border-stone-200 bg-white p-5">
              <h3 className="font-medium text-stone-800">
                {d.title} <span className="font-normal text-stone-600">· {d.question}</span>
              </h3>
              <dl className="mt-3 grid gap-3 sm:grid-cols-2">
                {d.poles.map((p) => (
                  <div key={p.pole}>
                    <dt className="text-sm font-medium text-stone-800">{p.name}</dt>
                    <dd className="mt-0.5 text-[15px] leading-relaxed text-stone-700">{p.description}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{d.origin}</p>
            </li>
          ))}
        </ul>
      </m.section>

      <m.section variants={fadeUp} aria-labelledby="pref-temperamentos" className="mt-12">
        <h2 id="pref-temperamentos" className="font-serif text-2xl text-stone-800">
          Los cuatro temperamentos
        </h2>
        <p className="mt-2 leading-relaxed text-stone-600">
          Estos cuatro temperamentos son de David Keirsey y Marilyn Bates (1978), no de Jung. Combinan algunas preferencias para
          describir estilos de comunicación. Léelos como ideas para entender diferencias, no como casilleros.
        </p>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {TEMPERAMENTS.map((t) => (
            <li key={t.id} className="flex flex-col rounded-2xl border border-stone-200 bg-white p-5">
              <h3 className="font-medium text-stone-800">{t.name}</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-stone-700">{t.summary}</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-700">
                <span className="font-medium">Cómo suele comunicarse: </span>
                {t.communication}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-stone-700">
                <span className="font-medium">Qué le ayuda: </span>
                {t.helps}
              </p>
            </li>
          ))}
        </ul>
      </m.section>

      <m.section variants={fadeUp} aria-labelledby="pref-limites" className="mt-12 rounded-2xl bg-stone-100 p-5">
        <h2 id="pref-limites" className="font-serif text-xl text-stone-800">
          Sobre el MBTI y sus límites
        </h2>
        <p className="mt-2 text-[15px] leading-relaxed text-stone-700">
          El indicador MBTI, creado por Katharine Briggs e Isabel Briggs Myers, se inspiró en los tipos de Jung. Es muy popular, pero tiene
          críticas serias: muchas personas obtienen otro tipo al repetirlo, y dividir a la gente en dos grupos por escala no refleja que la
          mayoría está cerca del medio. Por eso no se recomienda para elegir carrera, contratar o decidir sobre nadie. Para estudiar la
          personalidad, el modelo de los cinco grandes rasgos tiene mucha más evidencia.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/biblioteca/preferencias-junguianas-y-mbti" className={buttonStyles('secondary')}>
            Leer el artículo completo
          </Link>
          <Link href="/gimnasio/mis-funciones-psicologicas" className={buttonStyles('secondary')}>
            Práctica: cómo miro el mundo
          </Link>
        </div>
      </m.section>

      <div className="mt-10 border-t border-stone-200 pt-6">
        <Button variant="ghost" onClick={clear} disabled={answered === 0}>
          Borrar mis respuestas
        </Button>
      </div>
    </m.div>
  );
}
