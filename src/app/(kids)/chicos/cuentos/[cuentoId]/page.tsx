import { notFound } from 'next/navigation';
import { isPublished } from '@/domain/governance';
import { STORIES, STORY_BY_ID } from '@/domain/stories';
import { KidStory } from '@/components/kids/KidStories';

export function generateStaticParams() {
  return STORIES.map((s) => ({ cuentoId: s.id }));
}

export default async function KidStoryPage({ params }: { params: Promise<{ cuentoId: string }> }) {
  const { cuentoId } = await params;
  if (!STORY_BY_ID[cuentoId] || !isPublished('cuento', cuentoId)) notFound();
  return <KidStory storyId={cuentoId} />;
}
