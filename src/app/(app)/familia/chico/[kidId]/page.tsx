import { KidReport } from '@/components/family/KidReport';

export default async function KidReportPage({ params }: { params: Promise<{ kidId: string }> }) {
  const { kidId } = await params;
  return <KidReport kidId={kidId} />;
}
