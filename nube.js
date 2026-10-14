// Centro de control (#199), parte 3: «Guardar en la nube para que Pablo te vea».
// Solo se ofrece con ?nube=1 en la dirección (hasta que Pablo apruebe el texto y la revisión legal). Sin eso, este fichero
// no hace nada: no carga la librería de Supabase ni toca la red. Con la nube activada y su consentimiento aceptado, sube a
// Supabase (Frankfurt) lo que la app guarda en este navegador, el plan cuando cambia y las alertas del cribado.
// Las reglas de acceso del servidor (docs/supabase/001-tablas.sql) hacen que cada persona solo vea lo suyo y Pablo todo.
(function () {
  'use strict';
  if (typeof Motor === 'undefined' || !Motor.nubeOfrecida(location.search)) return;

  const URL_NUBE = 'https://jqfvamnpqaahsriidamu.supabase.co';
  const CLAVE_PUBLICA = 'sb_publishable_UlfEUswhQTf5uOjIV3Csgg_h-jHtJhV'; // pública por diseño (va en la app); sin sesión no da acceso a nada
  const LIBRERIA = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.117.2/dist/umd/supabase.js';
  const CLAVE_LOCAL = 'app-dietas-nube'; // { consentimiento: {version, fecha}, subidas: [], firmaPlan, ultimaSubida, consentimientosSubidos: [] }

  const caja = document.getElementById('tarjeta-nube');
  if (!caja) return;
  caja.hidden = false;
  const cuerpo = document.getElementById('nube-cuerpo');

  const esc = (t) => String(t ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const leerLocal = () => { try { const g = JSON.parse(localStorage.getItem(CLAVE_LOCAL) || '{}'); return g && typeof g === 'object' ? g : {}; } catch { return {}; } };
  const guardarLocal = (g) => { try { localStorage.setItem(CLAVE_LOCAL, JSON.stringify(g)); } catch { /* sin almacenamiento: se repetirá la subida */ } };
  const leerJSON = (k) => { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch { return null; } };

  let sb = null;
  let ultimoPlan = null; // detalle del último evento 'app-dietas:plan'
  let estado = ''; // mensaje para la persona

  function cargarLibreria() {
    if (window.supabase && window.supabase.createClient) return Promise.resolve();
    return new Promise((ok, mal) => {
      const s = document.createElement('script');
      s.src = LIBRERIA; s.async = true; s.crossOrigin = 'anonymous';
      s.onload = () => ok(); s.onerror = () => mal(new Error('no se pudo cargar la librería de la nube'));
      document.head.appendChild(s);
    });
  }

  const TEXTO_CONSENTIMIENTO = `<p><strong>Guardar en la nube para que Pablo te vea</strong></p>
    <p>Si lo activas, lo que metes en la app (tus respuestas, tu plan, tus comidas y los avisos) se guarda en un servidor de Supabase en Frankfurt (Unión Europea), que trabaja para Pablo como encargado del tratamiento. Pablo podrá verlo, escribirte y revisar tu plan. Para entrar te mandamos un enlace a tu correo, y ese correo es también el que usará Pablo para contactarte.</p>
    <p>Puedes desconectarte cuando quieras y borrar todo lo guardado desde este mismo apartado. Si no lo activas, la app sigue funcionando igual, solo en este aparato.</p>
    <p class="subt">Versión de prueba: todavía no metas datos reales de pacientes.</p>`;

  function pintar(sesion) {
    const local = leerLocal();
    if (!sesion) {
      cuerpo.innerHTML = `${TEXTO_CONSENTIMIENTO}
        <label class="check"><input type="checkbox" id="nube-acepto"> Acepto que mis datos se guarden en ese servidor para que Pablo los vea.</label>
        <div class="campo" style="margin-top:0.5rem"><label for="nube-correo">Tu correo</label><input id="nube-correo" type="email" autocomplete="email" inputmode="email" style="font-size:16px"></div>
        <button type="button" class="btn-secundario" id="nube-entrar">Mandarme el enlace</button>
        <p class="subt" id="nube-estado" aria-live="polite">${esc(estado)}</p>`;
      document.getElementById('nube-entrar').addEventListener('click', entrar);
      return;
    }
    const ultima = local.ultimaSubida ? new Date(local.ultimaSubida).toLocaleString('es-ES') : 'todavía no';
    cuerpo.innerHTML = `<p>Conectado como <strong>${esc(sesion.user.email)}</strong>. Pablo ve lo que guardas aquí.</p>
      <p class="subt">Última subida: ${esc(ultima)}.</p>
      <div class="fila2"><button type="button" class="btn-secundario" id="nube-subir">Subir ahora</button>
      <button type="button" class="btn-texto" id="nube-salir">Desconectar</button></div>
      <button type="button" class="btn-texto" id="nube-borrar" style="margin-top:0.5rem">Borrar todo lo que tengo en la nube</button>
      <p class="subt" id="nube-estado" aria-live="polite">${esc(estado)}</p>`;
    document.getElementById('nube-subir').addEventListener('click', () => subir('a mano'));
    document.getElementById('nube-salir').addEventListener('click', async () => { await sb.auth.signOut(); estado = 'Desconectado: lo que ya subiste sigue guardado para Pablo.'; pintar(null); });
    document.getElementById('nube-borrar').addEventListener('click', borrarTodo);
  }

  function decir(t) { estado = t; const e = document.getElementById('nube-estado'); if (e) e.textContent = t; }

  async function entrar() {
    const correo = document.getElementById('nube-correo').value.trim();
    if (!document.getElementById('nube-acepto').checked) return decir('Para activarla tienes que marcar la casilla.');
    if (!Motor.correoValido(correo)) return decir('Ese correo no parece válido.');
    const local = leerLocal();
    local.consentimiento = { version: Motor.VERSION_CONSENTIMIENTO_NUBE, fecha: new Date().toISOString() };
    guardarLocal(local);
    decir('Enviando…');
    const { error } = await sb.auth.signInWithOtp({ email: correo, options: { emailRedirectTo: location.origin + location.pathname + '?nube=1' } });
    decir(error ? `No se ha podido mandar el enlace (${error.message}).` : `Te he mandado un enlace a ${correo}. Ábrelo en este mismo móvil y en este navegador.`);
  }

  function lunesDeHoy() {
    const d = new Date(); const dia = (d.getDay() + 6) % 7; d.setDate(d.getDate() - dia);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  let subiendo = false;
  async function subir(motivo) {
    if (!sb || subiendo) return;
    const { data } = await sb.auth.getSession();
    const sesion = data && data.session;
    if (!sesion) return;
    const local = leerLocal();
    if (!local.consentimiento || local.consentimiento.version !== Motor.VERSION_CONSENTIMIENTO_NUBE) return decir('Falta aceptar el consentimiento de la nube.');
    subiendo = true;
    try {
      const uid = sesion.user.id;
      const ahora = new Date().toISOString();
      let r = await sb.from('perfiles').upsert({ usuario: uid, contacto: sesion.user.email, actualizado: ahora }, { onConflict: 'usuario' });
      if (r.error) throw r.error;
      // Consentimientos: el de la app (datos de salud) y el de la nube, una vez cada versión.
      const subidosC = new Set(local.consentimientosSubidos || []);
      const consApp = leerJSON('app-dietas-consentimiento');
      const porSubir = [];
      if (consApp && consApp.aceptado && consApp.version && !subidosC.has(consApp.version)) porSubir.push({ usuario: uid, version: consApp.version, aceptado_en: consApp.fecha || ahora });
      if (!subidosC.has(local.consentimiento.version)) porSubir.push({ usuario: uid, version: local.consentimiento.version, aceptado_en: local.consentimiento.fecha });
      if (porSubir.length) {
        r = await sb.from('consentimientos').insert(porSubir);
        if (r.error) throw r.error;
        porSubir.forEach((c) => subidosC.add(c.version));
        local.consentimientosSubidos = [...subidosC];
      }
      const inst = Motor.instantaneaLocal((k) => localStorage.getItem(k));
      if (inst.tamano > Motor.MAX_INSTANTANEA) throw new Error('demasiados datos guardados en este navegador');
      r = await sb.from('respuestas').upsert({ usuario: uid, datos: { instantanea: inst.datos, plan: ultimoPlan }, actualizado: ahora }, { onConflict: 'usuario' });
      if (r.error) throw r.error;
      if (ultimoPlan && ultimoPlan.asignaciones) {
        const firma = Motor.firmaPlan(ultimoPlan.asignaciones);
        if (firma !== local.firmaPlan) {
          const periodo = leerJSON('app-dietas-periodo') || {};
          const inicio = /^\d{4}-\d{2}-\d{2}$/.test(periodo.inicio || '') ? periodo.inicio : lunesDeHoy();
          const semanas = [1, 2, 3, 4].includes(periodo.semanas) ? periodo.semanas : 1;
          r = await sb.from('planes').insert({ usuario: uid, inicio, semanas, plan: ultimoPlan });
          if (r.error) throw r.error;
          local.firmaPlan = firma;
        }
      }
      const alertas = Motor.alertasPorSubir(leerJSON('app-dietas-alertas-pablo') || [], local.subidas || []);
      if (alertas.length) {
        r = await sb.from('alertas').insert(alertas.map((a) => ({ usuario: uid, ...Motor.filaAlerta(a) })));
        if (r.error) throw r.error;
        local.subidas = [...(local.subidas || []), ...alertas.map(Motor.idAlerta)].slice(-200);
      }
      local.ultimaSubida = ahora;
      guardarLocal(local);
      estado = motivo === 'a mano' ? 'Subido.' : '';
      pintar(sesion);
    } catch (e) {
      decir(`No se ha podido subir (${e && e.message ? e.message : e}). Lo intento otra vez la próxima vez que cambies algo.`);
    } finally {
      subiendo = false;
    }
  }

  async function borrarTodo() {
    if (!confirm('¿Borrar todo lo que tienes en la nube? Pablo dejará de verlo. Lo de este móvil se queda.')) return;
    const { data } = await sb.auth.getSession();
    if (!data || !data.session) return;
    const r = await sb.from('perfiles').delete().eq('usuario', data.session.user.id);
    if (r.error) return decir(`No se ha podido borrar (${r.error.message}).`);
    await sb.auth.signOut();
    guardarLocal({});
    estado = 'Borrado. Tu correo sigue registrado para poder entrar; si quieres que lo quite también, díselo a Pablo.';
    pintar(null);
  }

  let temporizador = null;
  const subirEnUnRato = () => { clearTimeout(temporizador); temporizador = setTimeout(() => subir('auto'), 2500); };
  window.addEventListener('app-dietas:plan', (ev) => { ultimoPlan = ev.detail || null; subirEnUnRato(); });

  cuerpo.innerHTML = '<p class="subt">Cargando…</p>';
  cargarLibreria().then(async () => {
    sb = window.supabase.createClient(URL_NUBE, CLAVE_PUBLICA, { auth: { persistSession: true, detectSessionInUrl: true } });
    const { data } = await sb.auth.getSession();
    pintar(data && data.session);
    sb.auth.onAuthStateChange((evento, sesion) => { if (evento === 'SIGNED_IN') { pintar(sesion); subirEnUnRato(); } });
    if (data && data.session) subirEnUnRato();
  }).catch((e) => { cuerpo.innerHTML = `<p class="subt">La nube no está disponible ahora (${esc(e.message)}). La app funciona igual.</p>`; });
})();
