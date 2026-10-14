import type { Metadata } from 'next';
import { ReviewPanel } from '@/components/review/ReviewPanel';

export const metadata: Metadata = { title: 'Revisión clínica · Habilidades Psicológicas', robots: { index: false } };

export default function ReviewPage() {
  return <ReviewPanel />;
}
