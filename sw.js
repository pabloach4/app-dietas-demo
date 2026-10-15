// Service worker de la app instalable (#214). La versión llega en la dirección con la que se registra (sw.js?v=<commit>, la misma que
// publicar-demo.sh pone a los .js): una versión nueva es otro sw.js, se instala, borra las cachés viejas y la siguiente apertura la usa.
//  · HTML: primero la red; si no hay, la caché.   · .js, .css, iconos, manifest: caché con actualización.
//  · Nunca toca lo que no es de esta misma dirección (Supabase, jsdelivr…) ni nada que no sea GET.
const VERSION = new URL(self.location.href).searchParams.get('v') || 'dev';
const CACHE = `dietas-${VERSION}`;
const BASE = ['cuestionario.html', 'centro.html', 'manifest.webmanifest', 'centro.webmanifest', 'iconos/icono-192.png', 'iconos/icono-512.png', 'iconos/apple-touch-icon.png'];

self.addEventListener('install', (ev) => {
  ev.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(BASE.map((u) => new Request(u, { cache: 'reload' }))).catch(() => {});
    // Los scripts que llevan las páginas, con la versión que traen en su dirección: así abre sin red desde la primera vez.
    for (const pagina of ['cuestionario.html', 'centro.html']) {
      try {
        const html = await (await fetch(pagina, { cache: 'reload' })).text();
        const recursos = [...html.matchAll(/(?:src|href)="([^"#]+\.(?:js|css)(?:\?[^"]*)?)"/g)].map((m) => m[1]).filter((u) => !/^https?:/.test(u));
        await cache.addAll(recursos.map((u) => new Request(u, { cache: 'reload' }))).catch(() => {});
      } catch { /* sin red al instalar: se irán guardando al usarlos */ }
    }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (ev) => {
  ev.waitUntil((async () => {
    for (const nombre of await caches.keys()) if (nombre.startsWith('dietas-') && nombre !== CACHE) await caches.delete(nombre);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (ev) => {
  const req = ev.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || url.pathname.endsWith('/sw.js')) return;
  const esHtml = req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');
  if (esHtml) {
    ev.respondWith((async () => {
      try {
        const r = await fetch(req);
        if (r.ok) { const c = await caches.open(CACHE); c.put(req, r.clone()).catch(() => {}); }
        return r;
      } catch {
        return (await caches.match(req, { ignoreSearch: true })) || (await caches.match('cuestionario.html')) || Response.error();
      }
    })());
    return;
  }
  ev.respondWith((async () => {
    const c = await caches.open(CACHE);
    const guardado = await c.match(req);
    const red = fetch(req).then((r) => { if (r.ok) c.put(req, r.clone()).catch(() => {}); return r; }).catch(() => undefined);
    return guardado || (await red) || Response.error();
  })());
});
