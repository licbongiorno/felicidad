import { Suspense } from 'react';
import { JournalHome } from '@/components/journal/JournalHome';

export default function JournalPage() {
  return (
    <Suspense fallback={null}>
      <JournalHome />
    </Suspense>
  );
}
