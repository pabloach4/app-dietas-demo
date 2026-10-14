// Centro de control de Pablo (#199, parte 4): alertas, personas y ficha de cada una, leídas de Supabase.
// Entra con un enlace al correo. Las reglas del servidor (docs/supabase/001-tablas.sql) solo dejan ver todo a una cuenta que
// esté en `nutricionistas`; cualquier otra cuenta ve solo lo suyo (o nada), así que esta página no protege nada por sí misma.
(function () {
  'use strict';
  const URL_NUBE = 'https://jqfvamnpqaahsriidamu.supabase.co';
  const CLAVE_PUBLICA = 'sb_publishable_UlfEUswhQTf5uOjIV3Csgg_h-jHtJhV'; // pública por diseño
  const LIBRERIA = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.117.2/dist/umd/supabase.js';
  const cuerpo = document.getElementById('cc-cuerpo');
  const esc = (t) => String(t ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fecha = (iso) => (iso ? new Date(iso).toLocaleString('es-ES', { dateStyle: 'medium', timeStyle: 'short' }) : '—');
  const ESTADOS = { nueva: 'Nueva', vista: 'Vista', hablado: 'Hablado con la persona' };

  // Nombres de las recetas (el plan guarda solo su código).
  const nombreReceta = (() => {
    const m = new Map();
    try {
      for (const [csv, ing] of [[Motor.RECETAS_EJEMPLO_CSV, Motor.RECETAS_EJEMPLO_INGREDIENTES_CSV], [Motor.RECETAS_CATALOGO_CSV, Motor.RECETAS_CATALOGO_INGREDIENTES_CSV]]) {
        const r = Motor.parsearRecetas(csv, ing);
        for (const x of (Array.isArray(r) ? r : r.recetas || [])) m.set(x.id, x.nombre);
      }
    } catch { /* sin nombres: se enseña el código */ }
    return (id) => m.get(id) || id;
  })();

  let sb = null;
  let datos = { perfiles: [], respuestas: [], alertas: [], gestion: [], planes: [] };
  let vista = 'alertas';
  let personaAbierta = null;

  function cargarLibreria() {
    return new Promise((ok, mal) => {
      const s = document.createElement('script');
      s.src = LIBRERIA; s.crossOrigin = 'anonymous';
      s.onload = () => ok(); s.onerror = () => mal(new Error('no se pudo cargar la librería de Supabase'));
      document.head.appendChild(s);
    });
  }

  function pantallaEntrar(msg) {
    cuerpo.innerHTML = `<div class="tarjeta"><h2>Entrar</h2>
      <p class="subt">Te mando un enlace a tu correo; ábrelo en este mismo navegador.</p>
      <div class="fila" style="margin-top:0.5rem"><input id="cc-correo" type="email" autocomplete="email" placeholder="tu correo"><button id="cc-entrar">Mandarme el enlace</button></div>
      <p class="subt" id="cc-estado" aria-live="polite">${esc(msg || '')}</p></div>`;
    document.getElementById('cc-entrar').addEventListener('click', async () => {
      const correo = document.getElementById('cc-correo').value.trim();
      if (!Motor.correoValido(correo)) { document.getElementById('cc-estado').textContent = 'Ese correo no parece válido.'; return; }
      document.getElementById('cc-estado').textContent = 'Enviando…';
      const { error } = await sb.auth.signInWithOtp({ email: correo, options: { emailRedirectTo: location.origin + location.pathname } });
      document.getElementById('cc-estado').textContent = error ? `No se ha podido mandar (${error.message}).` : `Enlace enviado a ${correo}.`;
    });
  }

  function pantallaNoNutricionista(sesion) {
    cuerpo.innerHTML = `<div class="tarjeta"><h2>Tu cuenta aún no es de nutricionista</h2>
      <p>Has entrado como <strong>${esc(sesion.user.email)}</strong>. Para ver los datos de todas las personas, pega esto una sola vez en Supabase → SQL Editor → Run:</p>
      <p><code>insert into public.nutricionistas (user_id) select id from auth.users where email = '${esc(sesion.user.email)}';</code></p>
      <p class="subt">Después recarga esta página.</p>
      <button class="sec" id="cc-salir">Salir</button></div>`;
    document.getElementById('cc-salir').addEventListener('click', async () => { await sb.auth.signOut(); pantallaEntrar(); });
  }

  async function cargarDatos() {
    const [p, r, a, g, pl] = await Promise.all([
      sb.from('perfiles').select('usuario, nombre, contacto, creado, actualizado'),
      sb.from('respuestas').select('usuario, datos, actualizado'),
      sb.from('alertas').select('id, usuario, creada, tipo, prioritaria, datos').order('creada', { ascending: false }),
      sb.from('alertas_gestion').select('alerta_id, estado, nota, actualizado'),
      sb.from('planes').select('id, usuario, inicio, semanas, plan, origen, creado').order('creado', { ascending: false }),
    ]);
    const err = [p, r, a, g, pl].find((x) => x.error);
    if (err) throw err.error;
    datos = { perfiles: p.data, respuestas: r.data, alertas: a.data, gestion: g.data, planes: pl.data };
  }

  const contactoDe = (u) => (datos.perfiles.find((p) => p.usuario === u) || {}).contacto || 'sin contacto';
  const gestionDe = (id) => datos.gestion.find((g) => g.alerta_id === id) || { estado: 'nueva', nota: '' };

  function htmlAlerta(a) {
    const g = gestionDe(a.id);
    const d = a.datos || {};
    const senales = (d.disparadores || []).map((x) => `<li>${esc(x.señal)} <span class="subt">(pregunta ${esc(x.pregunta)}: ${esc(x.etiqueta)})</span></li>`).join('');
    return `<div class="tarjeta ${a.prioritaria ? 'prioritaria' : ''}">
      <div class="fila" style="justify-content:space-between"><strong>${esc(fecha(a.creada))}</strong>
        ${a.prioritaria ? '<span class="chip rojo">REVISIÓN PRIORITARIA · valoración sanitaria</span>' : `<span class="chip">${esc(a.tipo)}</span>`}</div>
      <p class="subt"><a href="mailto:${esc(contactoDe(a.usuario))}">${esc(contactoDe(a.usuario))}</a> · <a href="#" class="cc-ver" data-u="${esc(a.usuario)}">ver ficha</a></p>
      <ul>${senales || '<li>(sin detalle)</li>'}</ul>
      ${d.perdidaKg !== undefined ? `<p class="subt">Pérdida declarada: ${esc(d.perdidaKg)} kg en 3 meses.</p>` : ''}
      ${(d.contexto || []).length ? `<p class="subt">Contexto: ${d.contexto.map((c) => `pregunta ${esc(c.pregunta)}: ${esc(c.etiqueta)}`).join('; ')}.</p>` : ''}
      <div class="fila" style="margin-top:0.5rem"><select class="cc-estado" data-id="${a.id}">${Object.entries(ESTADOS).map(([k, v]) => `<option value="${k}"${k === g.estado ? ' selected' : ''}>${v}</option>`).join('')}</select></div>
      <textarea class="cc-nota" data-id="${a.id}" placeholder="Nota privada (la persona no la ve)" style="margin-top:0.5rem">${esc(g.nota || '')}</textarea>
      <div class="fila" style="margin-top:0.5rem"><button class="cc-guardar" data-id="${a.id}">Guardar</button><span class="subt cc-ok" data-id="${a.id}"></span></div>
    </div>`;
  }

  function pintarAlertas() {
    const pendientes = datos.alertas.filter((a) => gestionDe(a.id).estado !== 'hablado');
    const hechas = datos.alertas.filter((a) => gestionDe(a.id).estado === 'hablado');
    return `<p class="subt">${pendientes.length} por atender · ${hechas.length} atendidas.</p>
      ${pendientes.map(htmlAlerta).join('') || '<div class="tarjeta"><p>No hay alertas por atender.</p></div>'}
      ${hechas.length ? `<details class="tarjeta"><summary>Atendidas (${hechas.length})</summary>${hechas.map(htmlAlerta).join('')}</details>` : ''}`;
  }

  function pintarPersonas() {
    const filas = datos.perfiles.slice().sort((a, b) => String(b.actualizado).localeCompare(String(a.actualizado))).map((p) => {
      const n = datos.alertas.filter((a) => a.usuario === p.usuario && gestionDe(a.id).estado !== 'hablado').length;
      const ult = (datos.respuestas.find((r) => r.usuario === p.usuario) || {}).actualizado;
      return `<div class="tarjeta persona cc-ver" data-u="${esc(p.usuario)}"><div class="fila" style="justify-content:space-between">
        <strong>${esc(p.nombre || p.contacto || 'sin nombre')}</strong>${n ? `<span class="chip rojo">${n} alerta${n === 1 ? '' : 's'}</span>` : ''}</div>
        <p class="subt">Última actividad: ${esc(fecha(ult || p.actualizado))}</p></div>`;
    });
    return `<p class="subt">${datos.perfiles.length} persona${datos.perfiles.length === 1 ? '' : 's'}.</p>${filas.join('') || '<div class="tarjeta"><p>Todavía no hay nadie.</p></div>'}`;
  }

  function pintarFicha(u) {
    const p = datos.perfiles.find((x) => x.usuario === u) || { contacto: '?' };
    const r = datos.respuestas.find((x) => x.usuario === u);
    const inst = (r && r.datos && r.datos.instantanea) || {};
    const f = inst['app-dietas-ultimo-perfil'] || {};
    const plan = datos.planes.find((x) => x.usuario === u);
    const fuera = inst['app-dietas-comidas-fuera'] || [];
    const periodo = inst['app-dietas-periodo'] || {};
    const alertas = datos.alertas.filter((a) => a.usuario === u);
    const dias = (plan && plan.plan && plan.plan.dias) || [];
    const asign = (plan && plan.plan && plan.plan.asignaciones) || [];
    const ORDEN = ['desayuno', 'media_manana', 'comida', 'merienda', 'cena'];
    return `<button class="sec" id="cc-volver">← Volver</button>
      <div class="tarjeta"><h2>${esc(p.nombre || p.contacto)}</h2>
        <p class="subt"><a href="mailto:${esc(p.contacto)}">${esc(p.contacto)}</a> · alta ${esc(fecha(p.creado))} · última subida ${esc(fecha(r && r.actualizado))}</p>
        <table><tbody>
          <tr><th>Peso / altura / edad</th><td>${esc(f.peso ?? '—')} kg · ${esc(f.altura ?? '—')} cm · ${esc(f.edad ?? '—')} años · ${esc(f.sexo || '')}</td></tr>
          <tr><th>% graso</th><td>${f.grasa !== undefined && f.grasa !== null ? `${esc(f.grasa)} % (${esc(f.grasaMetodo || 'método sin indicar')})` : 'no lo sabe'}</td></tr>
          <tr><th>Objetivo</th><td>${esc(f.objetivo || '—')}</td></tr>
          <tr><th>Vida diaria</th><td>${esc(f.vidaTrabajo || '—')}${f.vidaPasos ? ` · ${esc(f.vidaPasos)} pasos` : ''}</td></tr>
          <tr><th>Sesiones</th><td>${(f.sesiones || []).map((s) => `${esc(s.dia)} ${esc(s.deporte)} ${esc(s.minutos)} min`).join(' · ') || '—'}</td></tr>
          <tr><th>Dieta</th><td>${periodo.inicio ? `desde ${esc(periodo.inicio)}, ${esc(periodo.semanas || 1)} semana(s)` : 'sin fechas'}</td></tr>
          <tr><th>Lista negra</th><td>${esc((Array.isArray(inst['app-dietas-lista-negra']) ? inst['app-dietas-lista-negra'] : []).join(', ') || '—')}</td></tr>
        </tbody></table></div>
      ${alertas.length ? `<h2>Alertas</h2>${alertas.map(htmlAlerta).join('')}` : ''}
      <div class="tarjeta"><h2>Plan ${plan ? `(${esc(plan.origen === 'pablo' ? 'publicado por ti' : 'de la app')}, ${esc(fecha(plan.creado))})` : ''}</h2>
        ${plan ? `<p class="subt">Media: ${esc(plan.plan.kcalMedia)} kcal/día${plan.plan.huecos ? ` · ${esc(plan.plan.huecos)} comidas sin receta` : ''}</p>
        <div class="tabla"><table><thead><tr><th>Día</th><th>kcal</th><th>P/G/H (g)</th><th>Comidas</th></tr></thead><tbody>
        ${dias.map((d) => `<tr><td>${esc(d.dia)}<br><span class="subt">${esc(d.tipo)}</span></td><td>${esc(d.kcal)}</td><td>${esc(d.proteinaG)}/${esc(d.grasaG)}/${esc(d.hidratoG)}</td>
          <td>${asign.filter((a) => a.dia === d.dia).sort((x, y) => ORDEN.indexOf(x.franja) - ORDEN.indexOf(y.franja)).map((a) => `${esc(a.franja.replace('_', ' '))}: ${esc(nombreReceta(a.receta))}${a.racionAjustada && Math.abs(a.racionAjustada - 1) > 0.01 ? ` ×${esc(String(Math.round(a.racionAjustada * 100) / 100).replace('.', ','))}` : ''}`).join('<br>')}</td></tr>`).join('')}
        </tbody></table></div>` : '<p>Todavía no ha subido ningún plan.</p>'}</div>
      <div class="tarjeta"><h2>Comidas fuera</h2>${fuera.length ? `<ul>${fuera.slice(-20).reverse().map((c) => `<li>${esc(c.fecha)} ${esc(c.franja)}: ${esc(c.texto)}${c.kcal ? ` (${esc(c.kcal)} kcal)` : ''}</li>`).join('')}</ul>` : '<p class="subt">Ninguna.</p>'}</div>`;
  }

  function pintar() {
    if (personaAbierta) cuerpo.innerHTML = pintarFicha(personaAbierta);
    else {
      const n = datos.alertas.filter((a) => gestionDe(a.id).estado !== 'hablado').length;
      cuerpo.innerHTML = `<div class="pestanas" role="tablist">
          <button role="tab" aria-selected="${vista === 'alertas'}" data-v="alertas">Alertas${n ? ` (${n})` : ''}</button>
          <button role="tab" aria-selected="${vista === 'personas'}" data-v="personas">Personas</button>
          <button class="sec" id="cc-recargar">Recargar</button><button class="sec" id="cc-salir">Salir</button></div>
        ${vista === 'alertas' ? pintarAlertas() : pintarPersonas()}`;
      cuerpo.querySelectorAll('[data-v]').forEach((b) => b.addEventListener('click', () => { vista = b.dataset.v; pintar(); }));
      document.getElementById('cc-recargar').addEventListener('click', () => iniciar());
      document.getElementById('cc-salir').addEventListener('click', async () => { await sb.auth.signOut(); pantallaEntrar(); });
    }
    const volver = document.getElementById('cc-volver');
    if (volver) volver.addEventListener('click', () => { personaAbierta = null; pintar(); });
    cuerpo.querySelectorAll('.cc-ver').forEach((e) => e.addEventListener('click', (ev) => { ev.preventDefault(); personaAbierta = e.dataset.u; pintar(); window.scrollTo(0, 0); }));
    cuerpo.querySelectorAll('.cc-guardar').forEach((b) => b.addEventListener('click', async () => {
      const id = Number(b.dataset.id);
      const estado = cuerpo.querySelector(`.cc-estado[data-id="${id}"]`).value;
      const nota = cuerpo.querySelector(`.cc-nota[data-id="${id}"]`).value.slice(0, 2000);
      const ok = cuerpo.querySelector(`.cc-ok[data-id="${id}"]`);
      const { error } = await sb.from('alertas_gestion').upsert({ alerta_id: id, estado, nota, actualizado: new Date().toISOString() }, { onConflict: 'alerta_id' });
      if (error) { ok.textContent = `No se ha guardado (${error.message}).`; return; }
      const i = datos.gestion.findIndex((g) => g.alerta_id === id);
      const fila = { alerta_id: id, estado, nota };
      if (i >= 0) datos.gestion[i] = fila; else datos.gestion.push(fila);
      ok.textContent = 'Guardado.';
    }));
  }

  async function iniciar() {
    const { data } = await sb.auth.getSession();
    const sesion = data && data.session;
    if (!sesion) return pantallaEntrar();
    const n = await sb.from('nutricionistas').select('user_id').eq('user_id', sesion.user.id);
    if (n.error) { cuerpo.innerHTML = `<div class="tarjeta"><p>Error al comprobar la cuenta: ${esc(n.error.message)}</p></div>`; return; }
    if (!n.data.length) return pantallaNoNutricionista(sesion);
    cuerpo.innerHTML = '<p class="subt">Cargando datos…</p>';
    try { await cargarDatos(); pintar(); } catch (e) { cuerpo.innerHTML = `<div class="tarjeta"><p>Error al cargar: ${esc(e.message)}</p></div>`; }
  }

  cargarLibreria().then(() => {
    sb = window.supabase.createClient(URL_NUBE, CLAVE_PUBLICA, { auth: { persistSession: true, detectSessionInUrl: true } });
    sb.auth.onAuthStateChange((evento) => { if (evento === 'SIGNED_IN') iniciar(); });
    iniciar();
  }).catch((e) => { cuerpo.innerHTML = `<div class="tarjeta"><p>${esc(e.message)}</p></div>`; });
})();
