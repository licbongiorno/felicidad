import Link from 'next/link';
import type { KidGuide } from '@/domain/kids-guides';
import { KID_ACTIVITY_BY_ID } from '@/domain/kids';

/** Guía para madres, padres y tutores: puntos clave, secciones, frases listas y referencias. */
export function GuideView({ guide }: { guide: KidGuide }) {
  const activities = guide.activities.map((id) => KID_ACTIVITY_BY_ID[id]).filter(Boolean);
  return (
    <article className="mx-auto max-w-2xl">
      <Link href="/familia" className="text-sm text-stone-600 hover:text-stone-800">
        ← Familia
      </Link>
      <header className="mt-4">
        <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Guía para acompañar · {guide.readingMin} min</p>
        <h1 className="mt-2 font-serif text-4xl leading-tight text-stone-800">{guide.title}</h1>
        <p className="mt-3 text-lg leading-relaxed text-stone-600">{guide.subtitle}</p>
      </header>

      <section className="mt-8 rounded-2xl bg-sage-50 p-6" aria-labelledby="clave">
        <h2 id="clave" className="text-sm font-medium text-stone-800">
          En pocas palabras
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-stone-700">
          {guide.keyPoints.map((k) => (
            <li key={k}>{k}</li>
          ))}
        </ul>
      </section>

      {guide.sections.map((s) => (
        <section key={s.heading} className="mt-10">
          <h2 className="font-serif text-2xl text-stone-800">{s.heading}</h2>
          {s.paragraphs.map((p, i) => (
            <p key={i} className="mt-3 leading-relaxed text-stone-700">
              {p}
            </p>
          ))}
        </section>
      ))}

      {guide.phrases.length > 0 && (
        <section className="mt-10 rounded-2xl border border-stone-200 bg-white p-6 shadow-soft" aria-labelledby="frases">
          <h2 id="frases" className="text-sm font-medium text-stone-800">
            Frases para usar
          </h2>
          <ul className="mt-3 space-y-2 font-serif text-lg leading-relaxed text-stone-800">
            {guide.phrases.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </section>
      )}

      {guide.caveat && (
        <aside className="mt-8 rounded-2xl border border-stone-300 bg-stone-50 p-6">
          <h2 className="text-sm font-medium text-stone-800">{guide.caveat.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-stone-700">{guide.caveat.body}</p>
        </aside>
      )}

      {activities.length > 0 && (
        <section className="mt-10" aria-labelledby="actividades">
          <h2 id="actividades" className="text-sm font-medium text-stone-800">
            Actividades para hacer juntos
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {activities.map((a) => (
              <li key={a.id} className="rounded-full border border-stone-200 bg-white px-3.5 py-1.5 text-sm text-stone-700">
                {a.title}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-stone-500">Están en el modo chico, según su edad.</p>
        </section>
      )}

      {guide.references.length > 0 && (
        <section className="mt-12 border-t border-stone-200 pt-6" aria-labelledby="refs">
          <h2 id="refs" className="text-xs uppercase tracking-[0.2em] text-stone-500">
            Referencias
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-stone-600">
            {guide.references.map((r) => (
              <li key={r.citation}>
                {r.citation}{' '}
                {r.doi && (
                  <a href={`https://doi.org/${r.doi}`} className="text-sage-700 underline decoration-sage-300 underline-offset-2" target="_blank" rel="noreferrer">
                    doi:{r.doi}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
