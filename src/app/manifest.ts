import type { MetadataRoute } from 'next';

/** Manifiesto PWA: permite instalar la app y abrirla a pantalla completa, como una app nativa. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Habilidades Psicológicas',
    short_name: 'Habilidades',
    description: 'Entrena habilidades psicológicas basadas en evidencia, entre sesiones o por tu cuenta.',
    start_url: '/dashboard',
    display: 'standalone',
    background_color: '#fafaf9',
    theme_color: '#fafaf9',
    lang: 'es',
    categories: ['health', 'medical', 'lifestyle'],
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }],
    shortcuts: [
      { name: 'Antídotos', url: '/antidotos', description: 'Trabajar una emoción difícil ahora' },
      { name: 'Gimnasio', url: '/gimnasio', description: 'Empezar una práctica guiada' },
      { name: 'Diario', url: '/diario', description: 'Escribir una entrada' },
    ],
  };
}
