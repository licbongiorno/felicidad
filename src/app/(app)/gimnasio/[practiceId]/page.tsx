import { notFound } from 'next/navigation';
import { PRACTICES, PRACTICE_BY_ID } from '@/domain/practices';
import { PracticePlayer } from '@/components/gym/PracticePlayer';

export function generateStaticParams() {
  return PRACTICES.map((p) => ({ practiceId: p.id }));
}

export default async function PracticePage({ params }: { params: Promise<{ practiceId: string }> }) {
  const { practiceId } = await params;
  const practice = PRACTICE_BY_ID[practiceId];
  if (!practice) notFound();
  return <PracticePlayer practice={practice} />;
}
