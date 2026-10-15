import { notFound } from 'next/navigation';
import { PILLS, PILL_BY_ID } from '@/domain/pills';
import { PRACTICE_BY_ID } from '@/domain/practices';
import { ARTICLE_BY_ID } from '@/domain/library';
import { isPublished } from '@/domain/governance';
import { PillReader } from '@/components/library/PillReader';

export function generateStaticParams() {
  return PILLS.map((p) => ({ pillId: p.id }));
}

export default async function PillPage({ params }: { params: Promise<{ pillId: string }> }) {
  const { pillId } = await params;
  const pill = PILL_BY_ID[pillId];
  if (!pill || !isPublished('pildora', pill.id)) notFound();
  const related = [
    ...(pill.related?.practices ?? [])
      .filter((id) => PRACTICE_BY_ID[id] && isPublished('practica', id))
      .map((id) => ({ href: `/gimnasio/${id}`, label: PRACTICE_BY_ID[id].title, kind: 'Práctica' })),
    ...(pill.related?.articles ?? [])
      .filter((id) => ARTICLE_BY_ID[id] && isPublished('articulo', id))
      .map((id) => ({ href: `/biblioteca/${id}`, label: ARTICLE_BY_ID[id].title, kind: 'Artículo' })),
  ];
  return <PillReader pill={pill} related={related} />;
}
