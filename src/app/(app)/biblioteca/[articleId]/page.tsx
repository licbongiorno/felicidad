import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ARTICLES, ARTICLE_BY_ID } from '@/domain/library';
import { PRACTICE_BY_ID } from '@/domain/practices';
import { ReadingProgress } from '@/components/library/ReadingProgress';
import { Stagger, StaggerItem } from '@/components/motion/Reveal';
import { ArticleAudio } from '@/components/library/ArticleAudio';
import { CycleDiagram } from '@/components/library/CycleDiagram';
import { isPublished, reviewOf, REVIEW_LABEL } from '@/domain/governance';
import { ShareButton } from '@/components/ui/ShareButton';
import { EASY_READ_BY_ARTICLE } from '@/domain/easy-read';

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ articleId: a.id }));
}

export default async function ArticlePage({ params }: { params: Promise<{ articleId: string }> }) {
  const { articleId } = await params;
  const article = ARTICLE_BY_ID[articleId];
  if (!article || !isPublished('articulo', article.id)) notFound();
  const review = reviewOf('articulo', article.id);
  const easy = EASY_READ_BY_ARTICLE[article.id] && isPublished('lectura-facil', article.id) ? EASY_READ_BY_ARTICLE[article.id] : null;
  const listen = [article.title, article.subtitle, ...article.keyPoints, ...article.sections.flatMap((s) => [s.heading, ...s.paragraphs])];

  const practices = (article.related.practices ?? []).map((id) => PRACTICE_BY_ID[id]).filter(Boolean);
  const articles = (article.related.articles ?? []).map((id) => ARTICLE_BY_ID[id]).filter(Boolean);

  return (
    <>
      <ReadingProgress />
      <Stagger as="div" step={0.06} className="mx-auto max-w-2xl">
        <StaggerItem>
          <Link href="/biblioteca" className="group inline-flex items-center gap-1.5 text-sm text-stone-500 transition-colors hover:text-stone-700">
            <span className="transition-transform duration-300 group-hover:-translate-x-0.5">←</span> Biblioteca
          </Link>
        </StaggerItem>

        <StaggerItem as="header" className="mt-8">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
            {article.category} · {article.readingMin} min
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-stone-800 sm:text-5xl">{article.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">{article.subtitle}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <ArticleAudio paragraphs={listen} />
            <ShareButton title={article.title} path={`/biblioteca/${article.id}`} />
            {review.status === 'borrador' && <span className="rounded-full bg-stone-800 px-3 py-1 text-xs text-stone-50">{REVIEW_LABEL.borrador}</span>}
          </div>
        </StaggerItem>

        {easy && (
          <StaggerItem as="div" className="mt-8">
            <details id="lectura-facil" className="group rounded-2xl border border-stone-200 bg-white px-6 py-4">
              <summary className="cursor-pointer list-none text-[15px] font-medium text-sage-800 marker:hidden">
                <span className="mr-2 inline-block transition-transform group-open:rotate-90" aria-hidden>›</span>
                Versión fácil de leer
                <span className="ml-2 text-sm font-normal text-stone-500">Frases cortas, en un minuto</span>
              </summary>
              <div className="mt-4 space-y-3">
                {easy.paragraphs.map((p, i) => (
                  <p key={i} className="text-lg leading-relaxed text-stone-700">
                    {p}
                  </p>
                ))}
              </div>
            </details>
          </StaggerItem>
        )}

        <StaggerItem as="section" className="mt-10 rounded-2xl bg-sage-50 px-6 py-5">
          <h2 className="text-xs uppercase tracking-[0.2em] text-sage-700">En síntesis</h2>
          <ul className="mt-3 space-y-2.5">
            {article.keyPoints.map((k) => (
              <li key={k} className="flex gap-3 text-[15px] leading-relaxed text-stone-700">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-sage-600" aria-hidden />
                {k}
              </li>
            ))}
          </ul>
        </StaggerItem>

        <StaggerItem as="div" className="mt-12">
          {article.sections.map((s) => (
            <section key={s.heading} className="mb-10">
              <h2 className="font-serif text-2xl text-stone-800">{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 text-[17px] leading-[1.8] text-stone-700">
                  {p}
                </p>
              ))}
            </section>
          ))}

          {article.diagram && <CycleDiagram {...article.diagram} />}

          {article.caveat && (
            <aside className="my-10 border-l-2 border-stone-300 pl-5">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-600">{article.caveat.title}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-stone-600">{article.caveat.body}</p>
            </aside>
          )}
        </StaggerItem>

        {(practices.length > 0 || articles.length > 0) && (
          <StaggerItem as="section" className="mt-6 border-t border-stone-200 pt-10">
            <h2 className="text-xs uppercase tracking-[0.2em] text-stone-500">Llevarlo a la práctica</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {practices.map((p) => (
                <li key={p.id}>
                  <Link href={`/gimnasio/${p.id}`} className="group block rounded-2xl border border-stone-200 bg-white p-4 transition-[border-color,box-shadow] hover:border-sage-300 hover:shadow-soft">
                    <span className="text-xs text-stone-500">Práctica</span>
                    <span className="mt-0.5 block font-serif text-stone-800">{p.title}</span>
                  </Link>
                </li>
              ))}
              {articles.map((a) => (
                <li key={a.id}>
                  <Link href={`/biblioteca/${a.id}`} className="group block rounded-2xl border border-stone-200 bg-white p-4 transition-[border-color,box-shadow] hover:border-sage-300 hover:shadow-soft">
                    <span className="text-xs text-stone-500">Artículo</span>
                    <span className="mt-0.5 block font-serif text-stone-800">{a.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>
        )}

        <StaggerItem as="section" className="mt-12">
          <h2 className="text-xs uppercase tracking-[0.2em] text-stone-500">Referencias</h2>
          <ol className="mt-4 space-y-3 text-xs leading-relaxed text-stone-600">
            {article.references.map((r) => (
              <li key={r.citation}>
                {r.citation}{' '}
                {r.doi && (
                  <a href={`https://doi.org/${r.doi}`} target="_blank" rel="noopener noreferrer" className="text-sage-700 underline decoration-sage-300 underline-offset-2 hover:decoration-sage-700">
                    doi:{r.doi}
                  </a>
                )}
              </li>
            ))}
          </ol>
          <p className="mt-6 border-t border-stone-100 pt-4 text-xs text-stone-500">
            Versión {review.version} · referencias verificadas el {review.evidenceCheckedAt} · {REVIEW_LABEL[review.status]}
            {review.reviewedBy ? ` por ${review.reviewedBy}` : ''}
          </p>
        </StaggerItem>
      </Stagger>
    </>
  );
}
