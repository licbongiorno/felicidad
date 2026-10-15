import { notFound } from 'next/navigation';
import { KID_PATHS, KID_PATH_BY_ID } from '@/domain/kids';
import { KidPathView } from '@/components/kids/KidPaths';

export function generateStaticParams() {
  return KID_PATHS.filter((p) => p.band !== '0-3').map((p) => ({ caminoId: p.id }));
}

export default async function KidPathPage({ params }: { params: Promise<{ caminoId: string }> }) {
  const { caminoId } = await params;
  if (!KID_PATH_BY_ID[caminoId]) notFound();
  return <KidPathView pathId={caminoId} />;
}
