/*
 * Service worker de Protocolo Eudaimonía: permite abrir y usar la app sin conexión.
 *
 * - Páginas (navegación): red primero; sin red, la copia guardada. Así nunca se sirve una
 *   versión vieja si hay conexión.
 * - Archivos estáticos con hash (/_next/static): caché primero; su nombre cambia con cada
 *   versión, así que no pueden quedar obsoletos.
 * - Sólo peticiones GET del mismo origen. Firebase y los datos clínicos NO pasan por aquí:
 *   su persistencia offline la gestiona Firestore (IndexedDB) con sus propias garantías.
 */
const VERSION = 'v3';
const PAGES = `pages-${VERSION}`;
const STATIC = `static-${VERSION}`;

// Rutas que deben funcionar sin conexión aunque no se hayan visitado.
// El plan de seguridad y el modo chico van primero: son los que más se necesitan sin red.
// (Si el plan de seguridad sigue en borrador, la respuesta no es 200 y no se guarda.)
const PRECACHE = ['/', '/plan-de-seguridad', '/chicos', '/dashboard', '/gimnasio', '/gimnasio/temporizador', '/antidotos', '/diario', '/evaluaciones', '/cartas', '/desafios'];

// Next.js referencia los archivos de dos formas: "/_next/static/…" en las etiquetas y
// "static/chunks/…" (sin prefijo, con comillas escapadas) dentro de los datos de la página.
// Hay que capturar ambas: si falta el chunk de la página, se ve la cabecera pero no el contenido.
const ASSET_RE = /(?:\/_next\/)?(static\/(?:chunks|css|media)\/[^"'\s\\]+)/g;

async function precache() {
  const pages = await caches.open(PAGES);
  const statics = await caches.open(STATIC);
  const assets = new Set();
  await Promise.all(
    PRECACHE.map(async (url) => {
      try {
        const res = await fetch(url, { credentials: 'same-origin' });
        if (!res.ok) return;
        await pages.put(url, res.clone());
        // También los scripts y estilos que esa página necesita para hidratarse.
        for (const m of (await res.text()).matchAll(ASSET_RE)) {
          // Los datos de la página pueden partir un nombre entre fragmentos: sólo rutas completas.
          if (/\.(js|css|woff2?|png|svg|webp|jpg)$/.test(m[1])) assets.add(`/_next/${m[1]}`);
        }
      } catch {
        /* sin red durante la instalación: se cacheará al visitarla */
      }
    }),
  );
  await Promise.all([...assets].map((a) => statics.add(a).catch(() => undefined)));
}

self.addEventListener('install', (event) => {
  event.waitUntil(precache().then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== PAGES && k !== STATIC).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

const OFFLINE_HTML = `<!doctype html><html lang="es"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Sin conexión · Eudaimonía</title>
<body style="margin:0;font-family:system-ui,sans-serif;background:#fafaf9;color:#292524">
<main style="max-width:28rem;margin:20vh auto;padding:0 24px">
<h1 style="font-family:Georgia,serif;font-weight:400">Sin conexión</h1>
<p style="line-height:1.6;color:#57534e">Esta página aún no está disponible sin conexión. Las prácticas del Gimnasio, los Antídotos y el Diario sí lo están.</p>
<p><a href="/gimnasio" style="color:#4a5c45">Ir al Gimnasio</a></p>
</main></body></html>`;

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // Firebase y terceros: sin intervenir

  // Archivos estáticos versionados: caché primero.
  if (url.pathname.startsWith('/_next/static/')) {
    event.respondWith(
      caches.open(STATIC).then(async (cache) => {
        const hit = await cache.match(req);
        if (hit) return hit;
        const res = await fetch(req);
        if (res.ok) cache.put(req, res.clone());
        return res;
      }),
    );
    return;
  }

  // Navegación: red primero, copia guardada como respaldo.
  if (req.mode === 'navigate') {
    event.respondWith(
      (async () => {
        const cache = await caches.open(PAGES);
        try {
          const res = await fetch(req);
          if (res.ok) cache.put(url.pathname, res.clone());
          return res;
        } catch {
          return (
            (await cache.match(url.pathname)) ??
            new Response(OFFLINE_HTML, { headers: { 'Content-Type': 'text/html; charset=utf-8' } })
          );
        }
      })(),
    );
  }
});
