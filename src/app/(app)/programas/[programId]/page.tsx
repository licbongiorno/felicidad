import { notFound } from 'next/navigation';
import { PROGRAMS, PROGRAM_BY_ID } from '@/domain/programs';
import { ProgramDetail } from '@/components/programs/ProgramViews';

export function generateStaticParams() {
  return PROGRAMS.map((p) => ({ programId: p.id }));
}

export default async function ProgramPage({ params }: { params: Promise<{ programId: string }> }) {
  const { programId } = await params;
  const program = PROGRAM_BY_ID[programId];
  if (!program) notFound();
  return <ProgramDetail program={program} />;
}
