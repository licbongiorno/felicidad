import { Suspense } from 'react';
import { AntidoteModule } from '@/components/antidotes/AntidoteModule';

export default function AntidotesPage() {
  return (
    <>
      <h1 className="sr-only">Antídotos cognitivos</h1>
      <Suspense fallback={null}>
        <AntidoteModule />
      </Suspense>
    </>
  );
}
