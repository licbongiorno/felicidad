import Link from 'next/link';
import { Genogram } from '@/components/lab/Genogram';

export const metadata = { title: 'Tu genograma' };

export default function Page() {
  return (
    <div>
      <Link href="/laboratorio" className="text-sm text-stone-600 hover:text-stone-800 print:hidden">
        ← Laboratorio
      </Link>
      <div className="mt-8">
        <Genogram />
      </div>
    </div>
  );
}
