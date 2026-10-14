import type { Metadata } from 'next';
import { GrowthPage } from '@/components/growth/GrowthPage';

export const metadata: Metadata = { title: 'Tu jardín · Protocolo Eudaimonía' };

export default function CrecimientoPage() {
  return <GrowthPage />;
}
