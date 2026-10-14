import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { KidShell } from '@/components/kids/KidShell';

// Tipografía redondeada y muy legible, sólo para la sección de chicos.
const kid = Nunito({ subsets: ['latin'], variable: '--font-kid', display: 'swap', weight: ['500', '700', '800'] });

export const metadata: Metadata = { title: 'Para chicos · Habilidades Psicológicas', robots: { index: false } };

export default function KidsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={kid.variable}>
      <KidShell>{children}</KidShell>
    </div>
  );
}
