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
    <p>Si lo activas, lo que metes en la app (tus respuestas, tu plan, tus comidas y los avisos) se guarda en un servidor de Supabase en Frankfurt (Unión Europea), que trabaja para Pablo como encargado del tratamiento. Pablo podrá verlo, escribirte y revisar tu plan. No hace falta contraseña ni enlace: el correo que escribas es el que usará Pablo para contactarte.</p>
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
      let r = await sb.from('perfiles').upsert({ usuario: uid, contacto: local.contacto || sesion.user.email, actualizado: ahora }, { onConflict: 'usuario' });
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

  // #207: lo que Pablo ha revisado y publicado para esta persona. Se guarda en este navegador y la app lo usa como semana fijada.
  async function traerPlanDePablo() {
    if (!sb) return;
    const { data } = await sb.auth.getSession();
    if (!data || !data.session) return;
    const r = await sb.from('planes').select('id, inicio, semanas, plan, origen, creado').eq('origen', 'pablo').order('creado', { ascending: false }).limit(10);
    if (r.error || !Array.isArray(r.data)) return;
    const nuevo = Motor.planPabloAplicable(r.data, Motor.fechaLocalISO(new Date()));
    if (!Motor.esPlanPabloNuevo(nuevo, leerJSON('app-dietas-plan-pablo'))) return;
    try { localStorage.setItem('app-dietas-plan-pablo', JSON.stringify({ creado: nuevo.creado, inicio: nuevo.inicio, semanas: nuevo.semanas, plan: nuevo.plan })); } catch { return; }
    window.dispatchEvent(new CustomEvent('app-dietas:plan-pablo'));
  }
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') traerPlanDePablo(); });

  // --- #211: ventana obligatoria con el correo de la persona al terminar el cuestionario (y en la pantalla de freno) ---
  // cuestionario.js solo dispara 'app-dietas:fin-cuestionario' y espera a detail.continuar(). Aquí se decide si hace falta la ventana
  // (Motor.necesitaVentanaNube), se entra de forma anónima en Supabase (sin correos) y se sube todo. Si no hay red, se deja seguir y se reintenta.
  let resolverListo = () => {};
  const listo = new Promise((ok) => { resolverListo = ok; });
  let pendiente = false;
  function avisoPendiente(si) {
    pendiente = si;
    let p = document.getElementById('nube-aviso-pendiente');
    if (!p) {
      p = document.createElement('p');
      p.id = 'nube-aviso-pendiente'; p.className = 'subt'; p.setAttribute('role', 'status'); p.style.cssText = 'text-align:center;margin:0.4rem var(--gutter,16px)';
      const cab = document.querySelector('header.top');
      if (cab) cab.after(p); else document.body.prepend(p);
    }
    p.hidden = !si;
    p.textContent = si ? 'Aún no se ha podido enviar a Pablo. Se reintentará solo.' : '';
  }

  function abrirVentana() {
    return new Promise((ok) => {
      const d = document.createElement('dialog');
      d.id = 'nube-ventana';
      d.setAttribute('aria-labelledby', 'nube-ventana-titulo');
      d.style.cssText = 'max-width:min(30rem,94vw);max-height:90vh;overflow:auto;border:0;border-radius:18px;padding:1.1rem;background:var(--tarjeta,#fff);color:var(--texto,#15171c);box-shadow:0 20px 50px rgba(0,0,0,.35)';
      d.innerHTML = '<h2 id="nube-ventana-titulo" style="margin:0 0 0.5rem;font-size:1.1rem">Antes de ver tu plan</h2>' + TEXTO_CONSENTIMIENTO
        + '<label class="check"><input type="checkbox" id="nube-v-acepto"> Acepto que mis datos se guarden en ese servidor para que Pablo los vea.</label>'
        + '<div class="campo" style="margin-top:0.5rem"><label for="nube-v-correo">Tu correo, para que Pablo se ponga en contacto contigo</label>'
        + '<input id="nube-v-correo" type="email" autocomplete="email" inputmode="email" required style="font-size:16px"></div>'
        + '<p class="error-inline" id="nube-v-error" role="alert" hidden></p>'
        + '<button type="button" class="btn-principal" id="nube-v-seguir">Continuar</button>';
      document.body.appendChild(d);
      d.addEventListener('cancel', (ev) => ev.preventDefault()); // Esc no la cierra: sin casilla y correo válido no se sigue
      const error = (t) => { const e = d.querySelector('#nube-v-error'); e.hidden = !t; e.textContent = t || ''; };
      d.querySelector('#nube-v-seguir').addEventListener('click', () => {
        const correo = d.querySelector('#nube-v-correo').value.trim();
        if (!d.querySelector('#nube-v-acepto').checked) return error('Para continuar tienes que marcar la casilla.');
        if (!Motor.correoValido(correo)) return error('Escribe un correo válido: es el que usará Pablo para contactarte.');
        d.close(); d.remove();
        ok(correo);
      });
      d.showModal();
      d.querySelector('#nube-v-correo').focus();
    });
  }

  async function entrarAnonimo(correo) {
    const local = leerLocal();
    local.consentimiento = { version: Motor.VERSION_CONSENTIMIENTO_NUBE, fecha: new Date().toISOString() };
    local.contacto = correo;
    guardarLocal(local);
    if (!sb) { avisoPendiente(true); return; }
    try {
      const { data } = await sb.auth.getSession();
      if (!data || !data.session) {
        const r = await sb.auth.signInAnonymously();
        if (r.error) throw r.error;
      }
      await subir('ventana');
      avisoPendiente(false);
    } catch (e) {
      avisoPendiente(true); // el correo queda en local y se reintenta al volver
    }
  }

  window.addEventListener('app-dietas:fin-cuestionario', (ev) => {
    const continuar = (ev.detail && ev.detail.continuar) || (() => {});
    ev.preventDefault(); // avisa al cuestionario de que esperamos a continuar()
    (async () => {
      await Promise.race([listo, new Promise((ok) => setTimeout(ok, 6000))]); // la librería tarda, o no hay red: no se bloquea a la persona
      let haySesion = false;
      try { if (sb) { const { data } = await sb.auth.getSession(); haySesion = Boolean(data && data.session); } } catch { /* sin red */ }
      const local = leerLocal();
      const hace = Motor.necesitaVentanaNube({ nubeOfrecida: true, haySesion, contacto: local.contacto, consentimientoVersion: local.consentimiento && local.consentimiento.version });
      if (!hace) { if (local.contacto && !haySesion) avisoPendiente(true); continuar(); return; }
      const correo = await abrirVentana();
      await entrarAnonimo(correo);
      continuar();
    })().catch(() => continuar());
  });
  const reintentar = () => { if (pendiente || (leerLocal().contacto && sb)) subir('reintento').then(() => avisoPendiente(false)).catch(() => {}); };
  window.addEventListener('online', reintentar);

  let temporizador = null;
  const subirEnUnRato = () => { clearTimeout(temporizador); temporizador = setTimeout(() => subir('auto'), 2500); };
  window.addEventListener('app-dietas:plan', (ev) => { ultimoPlan = ev.detail || null; subirEnUnRato(); });

  cuerpo.innerHTML = '<p class="subt">Cargando…</p>';
  cargarLibreria().then(async () => {
    sb = window.supabase.createClient(URL_NUBE, CLAVE_PUBLICA, { auth: { persistSession: true, detectSessionInUrl: true } });
    resolverListo();
    const { data } = await sb.auth.getSession();
    pintar(data && data.session);
    traerPlanDePablo();
    sb.auth.onAuthStateChange((evento, sesion) => { if (evento === 'SIGNED_IN') { pintar(sesion); subirEnUnRato(); traerPlanDePablo(); } });
    if (data && data.session) subirEnUnRato();
  }).catch((e) => { resolverListo(); cuerpo.innerHTML = `<p class="subt">La nube no está disponible ahora (${esc(e.message)}). La app funciona igual.</p>`; });
})();
