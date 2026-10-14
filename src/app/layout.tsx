import type { Metadata, Viewport } from 'next';
import { Inter, Newsreader } from 'next/font/google';
import { AuthProvider } from '@/providers/AuthProvider';
import { MotionProvider } from '@/providers/MotionProvider';
import { THEME_BOOT_SCRIPT } from '@/lib/theme';
import { ServiceWorkerRegister } from '@/components/layout/ServiceWorkerRegister';
import './globals.css';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const serif = Newsreader({ subsets: ['latin'], variable: '--font-serif', display: 'swap' });

export const metadata: Metadata = {
  title: 'Habilidades Psicológicas',
  description: 'Entrena habilidades psicológicas basadas en evidencia, entre sesiones o por tu cuenta.',
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
    { media: '(prefers-color-scheme: dark)', color: '#161412' },
  ],
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // data-theme lo fija el script antes de hidratar: se ignora esa diferencia en <html>.
    <html lang="es" className={`${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT_SCRIPT }} />
      </head>
      <body className="min-h-screen font-sans">
        <MotionProvider>
          <AuthProvider>{children}</AuthProvider>
        </MotionProvider>
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
