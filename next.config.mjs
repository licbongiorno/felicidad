/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== 'production';

/**
 * Política de seguridad de contenido.
 * - connect-src limita a dónde puede enviar datos la página: sólo a sí misma y a Firebase.
 *   Es la defensa principal contra la exfiltración de datos clínicos.
 * - script-src sin dominios externos salvo los de Google necesarios para el popup de acceso.
 *   Incluye 'unsafe-inline' porque las páginas se prerenderizan como HTML estático y Next.js
 *   inyecta scripts en línea; un nonce exigiría renderizar cada página en cada visita.
 *   React escapa todo el contenido y el único HTML en línea propio es el script de tema.
 * - 'unsafe-eval' sólo en desarrollo (recarga en caliente).
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' https://apis.google.com${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  [
    "connect-src 'self'",
    'https://firestore.googleapis.com',
    'https://identitytoolkit.googleapis.com',
    'https://securetoken.googleapis.com',
    'https://firebaseinstallations.googleapis.com',
    'https://www.googleapis.com',
    'https://*.firebaseio.com',
    'wss://*.firebaseio.com',
    ...(isDev ? ['ws:'] : []),
  ].join(' '),
  'frame-src https://*.firebaseapp.com https://accounts.google.com https://apis.google.com',
  "worker-src 'self'",
  "manifest-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'no-referrer' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
      // El service worker debe revalidarse siempre para que las actualizaciones lleguen.
      { source: '/sw.js', headers: [{ key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' }] },
    ];
  },
};

export default nextConfig;
