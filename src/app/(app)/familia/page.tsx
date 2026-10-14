import type { Metadata } from 'next';
import { FamilyHub } from '@/components/family/FamilyHub';

export const metadata: Metadata = { title: 'Familia · Habilidades Psicológicas', robots: { index: false } };

export default function FamilyPage() {
  return <FamilyHub />;
}
