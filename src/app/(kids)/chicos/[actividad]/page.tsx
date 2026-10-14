import { notFound } from 'next/navigation';
import { KID_ACTIVITIES, KID_ACTIVITY_BY_ID } from '@/domain/kids';
import { ActivityRunner } from '@/components/kids/ActivityRunner';

export function generateStaticParams() {
  return KID_ACTIVITIES.map((a) => ({ actividad: a.id }));
}

export default async function KidActivityPage({ params }: { params: Promise<{ actividad: string }> }) {
  const { actividad } = await params;
  if (!KID_ACTIVITY_BY_ID[actividad]) notFound();
  return <ActivityRunner activityId={actividad} />;
}
