import Link from 'next/link';
import { ShadowQuestions } from '@/components/lab/ShadowQuestions';

export default function Page() {
  return (
    <div>
      <Link href="/laboratorio" className="text-sm text-stone-600 hover:text-stone-800">
        ← Laboratorio
      </Link>
      <div className="mt-8">
        <ShadowQuestions />
      </div>
    </div>
  );
}
