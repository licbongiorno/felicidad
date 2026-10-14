import { notFound } from 'next/navigation';
import { KID_GUIDES, KID_GUIDE_BY_ID } from '@/domain/kids-guides';
import { GuideView } from '@/components/family/GuideView';

export function generateStaticParams() {
  return KID_GUIDES.map((g) => ({ guideId: g.id }));
}

export default async function GuidePage({ params }: { params: Promise<{ guideId: string }> }) {
  const { guideId } = await params;
  const guide = KID_GUIDE_BY_ID[guideId];
  if (!guide) notFound();
  return <GuideView guide={guide} />;
}
