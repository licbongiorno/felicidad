import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SIMULATIONS } from '@/domain/lab';
import { ConversationSim } from '@/components/lab/ConversationSim';

export function generateStaticParams() {
  return SIMULATIONS.map((s) => ({ simId: s.id }));
}

export default async function SimulationPage({ params }: { params: Promise<{ simId: string }> }) {
  const { simId } = await params;
  const sim = SIMULATIONS.find((s) => s.id === simId);
  if (!sim) notFound();
  return (
    <div>
      <Link href="/laboratorio/conversaciones" className="text-sm text-stone-600 hover:text-stone-800">
        ← Conversaciones
      </Link>
      <div className="mt-8">
        <ConversationSim sim={sim} />
      </div>
    </div>
  );
}
