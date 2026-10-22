import Link from 'next/link';
import { EnneagramExplorer } from '@/components/lab/EnneagramExplorer';

export default function Page() {
  return (
    <div>
      <Link href="/laboratorio" className="text-sm text-stone-600 hover:text-stone-800">
        ← Laboratorio
      </Link>
      <div className="mt-8">
        <EnneagramExplorer />
      </div>
    </div>
  );
}
