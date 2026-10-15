// App instalable (#214): registra el service worker (solo con http/https: desde file:// no) y deja instalar en Android desde Perfil.
// La versión sale de la de los scripts de la propia página (publicar-demo.sh se la pone a cada .js): una versión nueva es un sw.js nuevo.
(function () {
  'use strict';
  // El manifest también solo con http/https: desde file:// Safari lo bloquea (origen null) y la página da error al cargar.
  const enWeb = /^https?:$/.test(location.protocol);
  const meta = document.querySelector('meta[name="app-manifest"]');
  if (enWeb && meta) { const l = document.createElement('link'); l.rel = 'manifest'; l.href = meta.content; document.head.appendChild(l); }
  if ('serviceWorker' in navigator && enWeb) {
    const propio = document.querySelector('script[src*="pwa.js"]');
    const v = propio && /[?&]v=([0-9a-f]+)/.exec(propio.getAttribute('src'));
    const registrar = () => navigator.serviceWorker.register('sw.js' + (v ? '?v=' + v[1] : '')).catch(() => { /* sin service worker la app funciona igual */ });
    if (document.readyState === 'complete') registrar(); else window.addEventListener('load', registrar);
  }
  let promptInstalar = null;
  window.addEventListener('beforeinstallprompt', (ev) => {
    ev.preventDefault(); promptInstalar = ev;
    const b = document.getElementById('instalar-boton'); if (b) b.hidden = false;
  });
  const b = document.getElementById('instalar-boton');
  if (b) b.addEventListener('click', async () => {
    if (!promptInstalar) return;
    promptInstalar.prompt();
    try { await promptInstalar.userChoice; } catch { /* cerrado sin elegir */ }
    promptInstalar = null; b.hidden = true;
  });
})();
