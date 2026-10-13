import Link from 'next/link';
import { GLOSSARY } from '@/domain/glossary';
import { ARTICLE_BY_ID } from '@/domain/library';
import { PRACTICE_BY_ID } from '@/domain/practices';
import { Stagger, StaggerItem } from '@/components/motion/Reveal';

const sorted = [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term, 'es'));

export default function GlossaryPage() {
  return (
    <Stagger step={0.03} className="mx-auto max-w-2xl">
      <StaggerItem>
        <Link href="/biblioteca" className="group inline-flex items-center gap-1.5 text-sm text-stone-600 transition-colors hover:text-stone-800">
          <span className="transition-transform duration-300 group-hover:-translate-x-0.5">←</span> Biblioteca
        </Link>
      </StaggerItem>
      <StaggerItem as="header" className="mt-8">
        <h1 className="font-serif text-4xl text-stone-800 sm:text-5xl">Glosario</h1>
        <p className="mt-3 leading-relaxed text-stone-600">Los términos que usamos en la app, explicados en lenguaje claro.</p>
      </StaggerItem>
      <StaggerItem as="div" className="mt-10">
        <dl className="divide-y divide-stone-200">
          {sorted.map((t) => (
            <div key={t.id} id={t.id} className="scroll-mt-24 py-5">
              <dt className="font-serif text-xl text-stone-800">{t.term}</dt>
              <dd className="mt-1.5 text-[15px] leading-relaxed text-stone-700">{t.definition}</dd>
              {(t.articleId || t.practiceId || t.seeAlso) && (
                <dd className="mt-2 flex flex-wrap gap-3 text-sm">
                  {t.articleId && ARTICLE_BY_ID[t.articleId] && (
                    <Link href={`/biblioteca/${t.articleId}`} className="text-sage-700 underline decoration-sage-300 underline-offset-2 hover:decoration-sage-700">
                      Leer: {ARTICLE_BY_ID[t.articleId].title}
                    </Link>
                  )}
                  {t.seeAlso && (
                    <Link href={t.seeAlso.href} className="text-sage-700 underline decoration-sage-300 underline-offset-2 hover:decoration-sage-700">
                      {t.seeAlso.label}
                    </Link>
                  )}
                  {t.practiceId && PRACTICE_BY_ID[t.practiceId] && (
                    <Link href={`/gimnasio/${t.practiceId}`} className="text-sage-700 underline decoration-sage-300 underline-offset-2 hover:decoration-sage-700">
                      Practicar: {PRACTICE_BY_ID[t.practiceId].title}
                    </Link>
                  )}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </StaggerItem>
    </Stagger>
  );
}
