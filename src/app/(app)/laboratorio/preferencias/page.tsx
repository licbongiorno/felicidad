import Link from 'next/link';
import { JungianPreferences } from '@/components/lab/JungianPreferences';

export default function Page() {
  return (
    <div>
      <Link href="/laboratorio" className="text-sm text-stone-600 hover:text-stone-800">
        ← Laboratorio
      </Link>
      <div className="mt-8">
        <JungianPreferences />
      </div>
    </div>
  );
}
