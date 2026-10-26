// Demo del cuestionario completo (issue #10). Script clásico (no type="module"), igual que web/app.js,
// para que funcione abriendo web/index.html o cuestionario.html directo con file://.
(function () {
  'use strict';

  // Copia de datos/reparto-comidas-parametros.csv (issue #9): el navegador no puede leer ficheros del
  // disco (y fetch() a un fichero local con file:// da CORS en Chrome), así que va embebido aquí. Si
  // Pablo cambia el CSV, hay que copiarlo de nuevo en este bloque para que la demo lo refleje.
  const PARAMETROS_REPARTO_CSV = `grupo,clave,franja,valor,nota
peso_base,kcal_dia,desayuno,25,peso del reparto llano de kcal del dia
peso_base,kcal_dia,media_manana,5,
peso_base,kcal_dia,comida,35,
peso_base,kcal_dia,merienda,5,
peso_base,kcal_dia,cena,30,
factor_contexto,PRE,,1.6,ultima principal que ACABA 1.5-4 h antes de la sesion
factor_contexto,POST,,1.4,siguiente principal tras el fin de la sesion; sin limite de horas (#64)
factor_contexto,toma_ligera_PRE,,1.5,secundaria 0.5-1.5 h antes; digestion rapida
factor_contexto,PRE_POST_combinado,,2.2,cuando PRE y POST caen en la misma franja
ventana_horas,PRE_desde_h_antes,,4.0,la principal ACABA entre PRE_hasta y PRE_desde antes del inicio
ventana_horas,PRE_hasta_h_antes,,1.5,
ventana_horas,POST_hasta_h_despues,,2.0,YA NO SE USA (#64: la siguiente principal es POST sin limite)
ventana_horas,ligera_desde_h_antes,,1.5,
ventana_horas,ligera_hasta_h_antes,,0.5,
tope,proteina_secundaria_g,,25,el exceso vuelve a las principales a partes iguales
tope,grasa_pre_carga_g,,15,toma que cae menos de 2 h antes de sesion de carga
proteina_principal,g_kg_min,,0.25,sobre pesoRef (peso de referencia del motor)
proteina_principal,g_kg_max,,0.4,sobre pesoRef; se puede pasar si no cabe (sin techo real)
borde_primera_hora,sesion_antes_de_h,,9.0,y sin principal 1.5-4 h antes
borde_primera_hora,toma_pre_min_antes,,30,minutos antes de la sesion
borde_primera_hora,toma_pre_max_antes,,60,minutos antes de la sesion
borde_primera_hora,hidrato_rapido_g_kg_min,,0.5,se descuenta del reparto del dia
borde_primera_hora,hidrato_rapido_g_kg_max,,1.0,
`;
  Motor.definirParametrosReparto(Motor.parsearParametrosCSV(PARAMETROS_REPARTO_CSV));

  // Copia de datos/limites-por-alimento.csv (issue #3): igual razón que el bloque de arriba.
  const LIMITES_POR_ALIMENTO_CSV = `LÍMITES DEL MÉTODO DE PABLO (linter) — tabulados tal cual están en su sistema,,,,
"Origen: scripts/diet_linter.py y scripts/dietfarma_toolkit.js del repo dietfarma-nutricion (consulta 28/09/2026, solo lectura). Pesos en crudo. «Recomendado» → banda aceptable con aviso informativo; «tope duro» → bloquea. Calibrados sobre sus dietas reales; no son umbrales clínicos.",,,,
Alimento / familia,Mínimo (g),Recomendado (g),Tope duro (g),Notas del propio método
A. PROTEÍNA PRINCIPAL Y VERDURA (Comida y Cena; los mínimos no aplican a desayuno/media mañana/merienda ni a líquidos),,,,
Pollo / pavo,80,300,400,"Entre 300 y 400 es aviso, no incumplimiento: «no perseguir los +50-80 g» (Pablo, 03/09)"
Ternera / cerdo,80,300,400,
Pescado blanco,80,300,400,
Pescado azul,70,300,350,
Atún en lata,40,160,160,2 latas escurridas. Solo atún: champiñones o maíz enlatados no llevan este tope
Huevos,50,240,240,50 g = 1 huevo; 240 g = 4 huevos M
Marisco,60,250,250,
Legumbre cocida,50,300,300,"En grano, no crema/hummus (saciedad)"
Verdura (cada una por separado),40,200,300,Aplica aunque sustituya a la base (espaguetis de calabacín). No se suma entre verduras de una ensalada mixta. Líquidos exentos
Patata / boniato,,,400,«La patata con mucho 400 gramos a lo sumo» (19/09). Sin banda de aviso: tope directo
Conejo / cordero,,,400,Añadidos 24/09 (salieron 565 g de conejo)
Sepia / calamar / pulpo / mejillón / almeja / berberecho,,,300,
Guisante / haba,,,250,
Maíz,,,150,
Aguacate,,,200,
"B. RACIONES REALISTAS POR FAMILIA (todo ingrediente sin tope propio; aviso al pasar, bloquea si se pasa en más de un 50%; líquidos exentos)",,,,"Origen: barrido del 24/09 sobre 12 dietas reales (192 recetas, 172 ingredientes). Criterio: cuánto come una persona de una sentada, no proporción contra la ración estándar"
Cebolla y puerro,,,200,"Incluye cebolleta, chalota, ajo tierno"
"Condimentos (ajo, especias, sal, vinagre...)",,,20,Nunca se reescalan al escalar un plato (regla 22: no son palanca de kcal)
"Grasa (aceite, mantequilla, nata, mayonesa...)",,,30,El aceite es el único condimento que cuenta en kcal y se vigila
Bebida vegetal / leche,,,500,
"Hortaliza de fruto (tomate, pepino)",,,300,
Fruto seco,,,40,
Queso fresco / requesón* / cottage,,,300,*El requesón está vetado como plato de merienda en la práctica de Pablo
Queso curado,,,60,
Yogur,,,250,
Hoja de ensalada,,,150,
"Pan (tostada, bocadillo, tortita...)",,,150,
Pasta fresca / ñoquis,,,300,
"Cereal crudo (arroz, pasta seca, avena, quinoa, cuscús)",,,150,"En crudo, no cocido"
Legumbre seca,,,125,
Aceituna y encurtido,,,80,
C. REGLAS DE PLATO Y ESTRUCTURA,,,,
Peso total del plato,,700,900,"Suma de ingredientes sólidos. Captura el plato de 1,1 kg que no rompe ningún tope individual"
Guarnición obligatoria,,,,Comida/Cena «desnuda» si suma <40 g de base de hidrato o verdura → bloquea. La fruta NO cuenta como guarnición. Motivo: saciedad y no dar sensación de castigo
Embutido/jamón curado,,,100,"Por ración en desayuno/media mañana/merienda (máximo, no objetivo; habitual 30-60 g). Mismo tipo máx. 3 veces/semana; en cenas máx. 2/semana y nunca dos días seguidos"
No duplicar base de hidrato,,,,Nunca dos bases distintas en la misma comida (facilidad para cocinar). El pan vale en desayuno/media mañana/merienda
Hueco al chocar con un tope,,,,"NO se tapa con pan de guarnición ni inflando verdura/proteína/condimento: 1) repartir kcal entre las otras comidas cerca del entreno, 2) cerrar con postre (fruta/yogur), 3) cambiar el plato"
Protegidos que nunca se reescalan,,,,"Fruta, yogur, café, condimentos y ajo: se quedan en su cantidad aunque el plato se escale"
`;
  const MEDIDAS_CASERAS = Motor.medidasDesdeCsv(Motor.MEDIDAS_CASERAS_CSV); // #194: ayuda al lado de los gramos, nunca en su lugar
  const medidaAlLado = (nombre, gramos) => { const m = Motor.medidaCasera(MEDIDAS_CASERAS, nombre, gramos); return m ? ` <small class="dc-medida">${m}</small>` : ''; };
  Motor.definirTablaLimites(Motor.conLimitesIngredientes(Motor.parsearTablaLimites(LIMITES_POR_ALIMENTO_CSV), Motor.limitesIngredientesDesdeCsv(Motor.LIMITES_INGREDIENTES_CSV))); // #171: mín/máx por ingrediente (Instinct, #193)

  // Catálogo de recetas de EJEMPLO (issue #16/#23/#30): igual que tests/asignador-recetas.test.ts.
  // Ninguna es una receta real de Pablo — solo para ver la forma de la lista de la compra.
  // Catálogo de EJEMPLO: una sola fuente en el motor (src/motor/catalogo-ejemplo.ts), compartida con los tests (#66/#103).
  const RECETAS_EJEMPLO_CSV = Motor.RECETAS_CATALOGO_CSV; // catálogo EJEMPLO de 115 recetas (issue #135)
  const RECETAS_EJEMPLO_INGREDIENTES_CSV = Motor.RECETAS_CATALOGO_INGREDIENTES_CSV;
  // #256 (puntos 26 y 6): los nombres según el perfil (sin celiaquía, «pan»; con ella, «avena sin gluten»). Mismos ids y cifras.
  const RECETAS_BASE = Motor.parsearRecetas(RECETAS_EJEMPLO_CSV, RECETAS_EJEMPLO_INGREDIENTES_CSV);
  let RECETAS_EJEMPLO = Motor.adaptarNombresGluten(RECETAS_BASE, false);
  /** Catálogo + las comidas compuestas (primero y segundo) que usa un plan, para la compra y el detalle (issue #131). */
  const catalogoPlan = (asignaciones) => RECETAS_EJEMPLO.concat(Motor.recetasCompuestas(asignaciones.map((a) => a.receta), RECETAS_EJEMPLO));

  // Precios aproximados de supermercado (#265 J): la tabla de Instinct (#266) con la ficha de cada producto, por el bundle.
  const PRECIOS = Motor.parsearPrecios(Motor.PRECIOS_CSV).filas;
  const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  const FECHA_PRECIOS = PRECIOS.reduce((m, f) => (f.fechaConsulta > m ? f.fechaConsulta : m), '');
  const CUANDO_PRECIOS = `${MESES[Number(FECHA_PRECIOS.slice(5, 7)) - 1]} de ${FECHA_PRECIOS.slice(0, 4)}`;

  const DIAS = Motor.DIAS;
  const FRANJAS = [
    { franja: 'desayuno', nombre: 'Desayuno', horaDef: '08:00' },
    { franja: 'media_manana', nombre: 'Media mañana', horaDef: '11:00' },
    { franja: 'comida', nombre: 'Comida', horaDef: '14:00' },
    { franja: 'merienda', nombre: 'Merienda', horaDef: '17:00' },
    { franja: 'cena', nombre: 'Cena', horaDef: '21:00' },
  ];
  const DEPORTES_RAPIDOS = [
    'correr suave', 'correr', 'correr rápido', 'caminar rápido', 'bici', 'natación',
    'fuerza', 'fuerza en máquinas', 'hyrox', 'crossfit', 'pádel', 'fútbol',
  ];

  // Issue #21: cada código de aviso del motor (calcular.ts) en español llano. Si aparece un código
  // nuevo que no está aquí, se cae al texto técnico original (sigue siendo Español, solo más largo).
  // #256 (punto 5): casillas de alergia y la palabra que entiende el filtro (la misma que si se escribiera en «Otros»).
  const CASILLAS_ALERGIA = [['al-pescado', 'pescado'], ['al-crustaceos', 'crustáceos'], ['al-moluscos', 'moluscos'], ['al-huevo', 'huevo'], ['al-frutos-cascara', 'frutos de cáscara'], ['al-cacahuete', 'cacahuete'], ['al-soja', 'soja'], ['al-sesamo', 'sésamo']];
  // #257 (punto 8): al marcar «¿Conoces tu % graso?» aparecen el campo y el método (solo se abrían al cargar un perfil o un ejemplo).
  document.getElementById('grasa-conocida').addEventListener('change', (e) => { document.getElementById('grasa-detalle').hidden = !e.target.checked; });
  // #260 (punto 30): el papel de una comida en palabras («antes de entrenar», no «PRE»).
  const nombreRol = (rol) => ({ PRE: 'antes de entrenar', POST: 'después de entrenar', toma_ligera: 'toma ligera' }[rol] ?? String(rol).replace(/_/g, ' ').toLowerCase());
  // #256 (punto 1): las frases amables de los avisos viven en el motor (Motor.avisosParaPersona); el texto técnico es para Pablo.

  const sesionesDiv = document.getElementById('sesiones');
  const franjasDiv = document.getElementById('franjas');

  function horaATexto(t) { return t ? t.slice(0, 5) : ''; }
  function textoAHora(s) { // "08:30" -> 8.5
    if (!s) return undefined;
    const [h, m] = s.split(':').map(Number);
    return h + m / 60;
  }

  // --- Consentimiento previo a las preguntas de salud (#172; texto aprobado por Pablo el 14/10 en docs/consentimiento.md) ---
  // Sin aceptar no se ve ninguna pregunta de salud. Se guarda solo en este navegador (fecha y versión del texto).
  const CLAVE_CONSENTIMIENTO = 'app-dietas-consentimiento';
  const VERSION_CONSENTIMIENTO = '2026-10-14-ampliado'; // sube si cambia el texto de docs/consentimiento.md: quien aceptó otra versión vuelve a verlo
  {
    let aceptado = false;
    try { const c = JSON.parse(localStorage.getItem(CLAVE_CONSENTIMIENTO) || 'null'); aceptado = Boolean(c && c.aceptado === true && typeof c.fecha === 'string' && c.version === VERSION_CONSENTIMIENTO); } catch { /* sin almacenamiento: se vuelve a pedir */ }
    const caja = document.getElementById('consentimiento');
    const casilla = document.getElementById('consentimiento-acepto');
    const boton = document.getElementById('consentimiento-continuar');
    const mostrar = (pide) => { document.body.classList.toggle('sin-consentimiento', pide); caja.hidden = !pide; };
    mostrar(!aceptado);
    casilla.addEventListener('change', () => { boton.disabled = !casilla.checked; });
    boton.addEventListener('click', () => {
      if (!casilla.checked) return;
      try { localStorage.setItem(CLAVE_CONSENTIMIENTO, JSON.stringify({ aceptado: true, fecha: new Date().toISOString(), version: VERSION_CONSENTIMIENTO })); } catch { try { falloAlmacenamiento(); } catch { /* aún no definida: sigue la sesión */ } }
      mostrar(false);
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  }


  // --- Cribado de bajo peso y baja energía (#195): preguntas opcionales; si salta un disparador se guarda una alerta para Pablo ---
  // Sin correos ni avisos a nadie: la lista vive en este navegador (Perfil › Alertas para Pablo). A la persona solo se le dice, en neutro, que Pablo hablará con ella.
  const CLAVE_ALERTAS = 'app-dietas-alertas-pablo';
  const TEXTO_AGUA = 'No hay un valor perfecto de agua: bebe la que tu cuerpo te pida. Aun así, es aconsejable beber algo más de 1,5 L al día (agua total: la que bebes y la que ya trae la comida).'; // Pablo, 14/10 (#159)
  let avisoCribadoHoy = ''; // mensaje neutro para «Hoy» tras calcular
  let avisoFrenoHoy = ''; // #229: tras el freno de «perder grasa», el plan es para mantener o ganar músculo y «Hoy» lo dice
  let objetivoPorFreno = ''; // el objetivo que se eligió en la pantalla del freno, para el aviso de «Hoy»
  // #242: con celiaquía, al lado de cada ingrediente «riesgo» (avena, embutido, tomate triturado…) se dice que hay que comprar la versión
  // con el sello sin gluten; y Pablo lleva el plan en persona (alerta para él y una línea en «Hoy»).
  const esCeliaco = () => Boolean(respuestasActuales && respuestasActuales.alergias && respuestasActuales.alergias.celiaquia);
  const avisoGlutenHtml = (nombre) => (esCeliaco() && Motor.claseGluten(nombre) === 'riesgo' ? ` <small class="aviso-gluten">${Motor.AVISO_ETIQUETA_GLUTEN}</small>` : '');
  let diasSuelo = []; // #230: días en que el cálculo quedó por debajo del suelo de kcal (D11) y se prescribe el suelo
  function pintarAvisoSuelo() {
    for (const id of ['aviso-suelo-semana', 'aviso-suelo-cal']) {
      const e = document.getElementById(id);
      if (!e) continue;
      e.textContent = Motor.MENSAJE_SUELO;
      e.hidden = !diasSuelo.length;
    }
  }
  (function construirCribado() {
    const cont = document.getElementById('cribado-preguntas');
    cont.innerHTML = Motor.PREGUNTAS_CRIBADO.map((p) => `
      <div class="campo"><label for="cribado-p${p.n}">${p.texto}</label>
        <select id="cribado-p${p.n}" class="cribado-sel" data-n="${p.n}" style="font-size:16px"><option value="">Sin contestar</option>${p.opciones.map((o) => `<option value="${o.valor}">${o.etiqueta}</option>`).join('')}</select></div>
      ${p.n === 1 ? `<div id="cribado-pesos" class="fila2" hidden>
        <div class="campo"><label for="cribado-peso-antes">Peso hace 3 meses (kg, opcional)</label><input id="cribado-peso-antes" type="number" step="0.1" inputmode="decimal"></div>
        <div class="campo"><label for="cribado-peso-ahora">Peso ahora (kg, opcional)</label><input id="cribado-peso-ahora" type="number" step="0.1" inputmode="decimal"></div>
        <div class="campo"><label for="cribado-peso-habitual">Tu peso habitual (kg, opcional)</label><input id="cribado-peso-habitual" type="number" step="0.1" inputmode="decimal"></div></div>` : ''}`).join('');
    document.querySelector('.cribado-sel[data-n="1"]').addEventListener('change', (ev) => { document.getElementById('cribado-pesos').hidden = ev.target.value !== 'si'; });
    // #260 (punto 33, decisión de coordinación): la pregunta de la regla no se hace a los hombres (y su respuesta, si la había, se borra).
    const reglaSegunSexo = () => {
      const hombre = document.getElementById('sexo').value === 'hombre';
      const p6 = document.querySelector('.cribado-sel[data-n="6"]');
      p6.closest('.campo').hidden = hombre;
      if (hombre) p6.value = '';
    };
    document.getElementById('sexo').addEventListener('change', reglaSegunSexo);
    reglaSegunSexo();
  })();
  function leerCribado() {
    const respuestas = {};
    document.querySelectorAll('.cribado-sel').forEach((s) => { if (s.value) respuestas[Number(s.dataset.n)] = s.value; });
    const n = (id) => { const v = document.getElementById(id).value; return v === '' ? undefined : Number(v); };
    return { respuestas, pesoHace3m: n('cribado-peso-antes'), pesoAhora: n('cribado-peso-ahora'), pesoHabitual: n('cribado-peso-habitual') }; // #229: el habitual, para el freno
  }
  function limpiarCribado() {
    document.querySelectorAll('.cribado-sel').forEach((s) => { s.value = ''; });
    ['cribado-peso-antes', 'cribado-peso-ahora', 'cribado-peso-habitual'].forEach((id) => { document.getElementById(id).value = ''; });
    document.getElementById('cribado-pesos').hidden = true;
  }
  function leerAlertas() {
    try { const l = JSON.parse(localStorage.getItem(CLAVE_ALERTAS) || '[]'); return Array.isArray(l) ? l.filter((a) => a && typeof a.fecha === 'string' && Array.isArray(a.disparadores)) : []; } catch { return []; }
  }
  function guardarAlertas(l) {
    try { localStorage.setItem(CLAVE_ALERTAS, JSON.stringify(l)); } catch { falloAlmacenamiento(); }
  }
  function pintarAlertas() {
    const l = leerAlertas();
    const caja = document.getElementById('tarjeta-alertas');
    caja.hidden = !l.length;
    // #254: la persona solo ve que Pablo revisará sus respuestas, con la fecha; el tipo, los motivos y las cifras son solo para Pablo.
    const llega = Motor.textoLlegaAPablo(nubeActiva());
    document.getElementById('alertas-lista').innerHTML = Motor.lineasAlertasPersona(l, nubeActiva()).map((x) => `<li class="item-compra"><div style="flex:1;min-width:0">
      <strong>${escaparHtml(x.fecha ? fechaLegible(x.fecha) : '')}</strong> · ${escaparHtml(x.texto)}</div></li>`).join('');
    const freno = document.getElementById('freno-aviso-pablo');
    if (freno) freno.textContent = `${Motor.TEXTO_ALERTA_PERSONA} ${llega}`;
  }
  /** ¿Está activa «Que Pablo vea mis datos»? (web/nube.js, solo con ?nube=1, guarda el consentimiento en app-dietas-nube). */
  // #256 (punto 4): sin la nube ofrecida (sin ?nube=1) la opción no se ve y no se nombra: 'no_ofrecida'.
  function nubeActiva() {
    if (!Motor.nubeOfrecida(location.search)) return 'no_ofrecida';
    try { const g = JSON.parse(localStorage.getItem('app-dietas-nube') || '{}'); return Boolean(g && g.consentimiento); } catch { return false; }
  }
  /** Evalúa el cribado de lo que se acaba de enviar: guarda la alerta (si salta algún disparador) y deja el mensaje neutro para la persona. */
  function procesarCribado(respuestas) {
    const res = Motor.evaluarCribado(respuestas.cribado);
    const alerta = Motor.alertaParaPablo(res, new Date().toISOString());
    avisoCribadoHoy = '';
    if (alerta) {
      guardarAlertas(Motor.anadirAlerta(leerAlertas(), alerta));
      avisoCribadoHoy = res.prioritaria ? Motor.MENSAJE_CRIBADO_PRIORITARIO : Motor.MENSAJE_CRIBADO_NEUTRO;
    }
    pintarAlertas();
  }
  queueMicrotask(pintarAlertas); // tras cargar todo el script (usa funciones de fecha definidas más abajo)

  // #265 parte A (Pablo, 19–20/10): «Hablar con Pablo» en Perfil, en el freno y en la derivación: correo y «Pedir cita»; el WhatsApp
  // solo DESPUÉS de pedir cita. Con la nube activa, la petición viaja como alerta `cita` prioritaria; sin ella, se abre un correo ya escrito.
  const CLAVE_CITA = 'app-dietas-cita-pedida';
  function leerCita() {
    try { const c = JSON.parse(localStorage.getItem(CLAVE_CITA) || 'null'); return c && typeof c.fecha === 'string' ? c : null; } catch { return null; }
  }
  function pintarHablarPablo() {
    const cita = leerCita();
    const wa = Motor.whatsappPablo(Boolean(cita));
    const dias = Motor.DIAS_CITA.map((d) => `<label class="hp-op"><input type="checkbox" name="hp-dia" value="${d}"> ${d}</label>`).join('');
    const franjas = Object.entries(Motor.FRANJAS_CITA).map(([k, v], i) => `<label class="hp-op"><input type="radio" name="hp-franja" value="${k}"${i === 2 ? ' checked' : ''}> ${v}</label>`).join('');
    document.querySelectorAll('.hablar-pablo').forEach((caja, n) => {
      caja.innerHTML = `<h3 class="hp-titulo">Hablar con Pablo</h3>
        <a class="btn-secundario hp-correo" href="${escaparHtml(Motor.enlaceCorreoPablo())}">✉️ Escribir un correo</a>
        <button type="button" class="btn-secundario hp-cita-abrir" aria-expanded="false" style="margin-top:0.5rem">📅 Pedir cita</button>
        <form class="hp-cita" hidden>
          <fieldset><legend>¿Qué días te vienen bien?</legend>${dias.replace(/name="hp-dia"/g, `name="hp-dia-${n}"`)}</fieldset>
          <fieldset><legend>¿A qué hora?</legend>${franjas.replace(/name="hp-franja"/g, `name="hp-franja-${n}"`)}</fieldset>
          <label class="hp-motivo-l">Motivo (si quieres)<textarea class="hp-motivo" rows="3" maxlength="${Motor.MAX_MOTIVO_CITA}"></textarea></label>
          <button type="submit" class="btn-principal">Enviar la petición</button>
        </form>
        <p class="subt hp-estado" aria-live="polite">${cita ? escaparHtml(`Pediste cita el ${fechaLegible(cita.fecha.slice(0, 10))}. Pablo te contestará para cerrarla.`) : ''}</p>
        ${!wa ? '' : wa.href
    ? `<a class="btn-secundario hp-whatsapp" href="${escaparHtml(wa.href)}" target="_blank" rel="noopener">💬 Escribir a Pablo por WhatsApp para cerrar la cita</a>`
    : `<button type="button" class="btn-secundario hp-whatsapp">💬 Escribir a Pablo por WhatsApp para cerrar la cita</button><p class="subt hp-wa-nota" hidden>${escaparHtml(wa.nota)}</p>`}`;
    });
  }
  document.addEventListener('click', (e) => {
    const abrir = e.target.closest && e.target.closest('.hp-cita-abrir');
    if (abrir) {
      const f = abrir.parentElement.querySelector('.hp-cita');
      f.hidden = !f.hidden; abrir.setAttribute('aria-expanded', String(!f.hidden));
      return;
    }
    const wa = e.target.closest && e.target.closest('button.hp-whatsapp');
    if (wa) { const nota = wa.parentElement.querySelector('.hp-wa-nota'); if (nota) nota.hidden = false; }
  });
  document.addEventListener('submit', (e) => {
    const f = e.target.closest && e.target.closest('.hp-cita');
    if (!f) return;
    e.preventDefault();
    const peticion = {
      dias: [...f.querySelectorAll('input[type="checkbox"]:checked')].map((x) => x.value),
      franja: (f.querySelector('input[type="radio"]:checked') || {}).value || 'indiferente',
      motivo: f.querySelector('.hp-motivo').value,
    };
    const ahora = new Date().toISOString();
    let estado;
    if (nubeActiva() === true) {
      guardarAlertas(Motor.anadirAlerta(leerAlertas(), Motor.alertaCita(peticion, ahora)));
      document.querySelector('#nube-subir')?.click(); // la sube ya, por el mismo camino que las demás (web/nube.js)
      estado = 'Petición enviada. Pablo te contestará para cerrar la cita.';
    } else {
      location.href = Motor.correoCita(peticion);
      estado = 'Se ha abierto tu correo con la petición: envíalo y Pablo te contestará para cerrar la cita.';
    }
    try { localStorage.setItem(CLAVE_CITA, JSON.stringify({ fecha: ahora })); } catch { falloAlmacenamiento(); }
    pintarHablarPablo();
    document.querySelectorAll('.hp-estado').forEach((p) => { p.textContent = estado; });
  });
  queueMicrotask(pintarHablarPablo);

  // --- Recorrido por pasos (issue #13) ---
  const PASOS = [1, 2, 3, 4];
  const NOMBRE_PASO = { 1: 'Paso 1 de 4 · Tus datos', 2: 'Paso 2 de 4 · Objetivo y vida diaria', 3: 'Paso 3 de 4 · Sesiones de la semana', 4: 'Paso 4 de 4 · Salud y algo más' };
  let pasoActual = 1;

  function mostrarPaso(n) {
    pasoActual = n;
    document.querySelectorAll('.paso').forEach((el) => el.classList.toggle('activo', Number(el.dataset.paso) === n));
    document.getElementById('progreso').innerHTML = PASOS.map((p) => `<div class="punto ${p < n ? 'hecho' : p === n ? 'actual' : ''}"></div>`).join('');
    document.getElementById('paso-nombre').textContent = NOMBRE_PASO[n];
    document.getElementById('btn-atras').hidden = n === 1;
    document.getElementById('btn-siguiente').textContent = n === PASOS.length ? 'Ver mi plan' : 'Siguiente';
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }

  // #255: lo imprescindible de cada paso. Un cuestionario nuevo los trae vacíos: «Siguiente» no avanza sin ellos y señala cuáles faltan.
  const IMPRESCINDIBLES = { 1: [['peso', 'el peso'], ['altura', 'la altura'], ['edad', 'la edad'], ['sexo', 'el sexo']], 2: [['objetivo', 'el objetivo']] };
  function faltanDelPaso(n) {
    const faltan = (IMPRESCINDIBLES[n] || []).filter(([id]) => String(document.getElementById(id).value).trim() === '');
    for (const [id] of IMPRESCINDIBLES[n] || []) document.getElementById(id).removeAttribute('aria-invalid');
    for (const [id] of faltan) document.getElementById(id).setAttribute('aria-invalid', 'true');
    if (!faltan.length) return false;
    const e = document.getElementById('incompleto');
    const nombres = faltan.map((x) => x[1]);
    e.textContent = `Falta ${nombres.length > 1 ? `${nombres.slice(0, -1).join(', ')} y ${nombres[nombres.length - 1]}` : nombres[0]}.`;
    e.hidden = false;
    avisarIncompleto();
    document.getElementById(faltan[0][0]).focus();
    return true;
  }
  for (const id of ['peso', 'altura', 'edad', 'sexo', 'objetivo']) {
    const el = document.getElementById(id);
    const limpiar = () => { if (String(el.value).trim() !== '') el.removeAttribute('aria-invalid'); };
    el.addEventListener('input', limpiar);
    el.addEventListener('change', limpiar);
  }
  document.getElementById('btn-siguiente').addEventListener('click', () => {
    if (pasoActual < PASOS.length && faltanDelPaso(pasoActual)) return;
    if (pasoActual < PASOS.length) mostrarPaso(pasoActual + 1);
    else document.getElementById('form-cuestionario').requestSubmit();
  });
  document.getElementById('btn-atras').addEventListener('click', () => { if (pasoActual > 1) mostrarPaso(pasoActual - 1); });

  // #189 (QA #188, hallazgo 4): el mensaje de «falta algo / no vale» tiene que verse sin desplazarse, aunque la pantalla vuelva al primer paso.
  function avisarIncompleto() {
    // QA #188 (hallazgo 4): el mensaje sale fijo arriba de la pantalla, siempre a la vista, aunque el formulario vuelva al primer paso.
    const e = document.getElementById('incompleto');
    e.setAttribute('role', 'alert');
    e.setAttribute('tabindex', '-1');
    Object.assign(e.style, { position: 'fixed', top: 'max(0.75rem, env(safe-area-inset-top))', left: '0.75rem', right: '0.75rem', zIndex: '60', boxShadow: '0 6px 24px rgba(0,0,0,.25)', cursor: 'pointer', margin: '0' });
    const cerrar = () => { e.hidden = true; e.removeEventListener('click', cerrar); document.removeEventListener('input', cerrar); };
    e.addEventListener('click', cerrar);
    document.addEventListener('input', cerrar); // en cuanto se corrige un dato, el mensaje se va
  }
  function mostrarFormulario() {
    document.body.classList.remove('vista-resultado');
    document.getElementById('titulo-pantalla').textContent = 'Tu plan, paso a paso';
    document.getElementById('form-cuestionario').hidden = false;
    document.getElementById('barra-pasos').hidden = false;
    document.getElementById('progreso').hidden = false;
    document.getElementById('paso-nombre').hidden = false;
  }
  function ocultarFormulario() {
    document.body.classList.add('vista-resultado');
    document.getElementById('btn-cancelar-edicion').hidden = true; // #260.34
    document.getElementById('form-cuestionario').hidden = true;
    document.getElementById('barra-pasos').hidden = true;
    document.getElementById('progreso').hidden = true;
    document.getElementById('paso-nombre').hidden = true;
  }

  // --- Franjas (bloque 7) ---
  FRANJAS.forEach((f) => {
    const fila = document.createElement('div');
    fila.className = 'franja-fila franja-card';
    fila.innerHTML = `
      <div class="cabecera">
        <label class="check"><input type="checkbox" class="f-activa" checked> ${f.nombre}</label>
      </div>
      <input type="time" class="f-hora" value="${f.horaDef}">
    `;
    fila.dataset.franja = f.franja;
    franjasDiv.appendChild(fila);
  });

  document.addEventListener('change', (ev) => {
    if (ev.target.classList && ev.target.classList.contains('f-activa')) document.getElementById('franjas-error').hidden = true;
  });

  function leerFranjas() {
    return Array.from(franjasDiv.children)
      .filter((fila) => fila.querySelector('.f-activa').checked)
      .map((fila) => ({ franja: fila.dataset.franja, hora: textoAHora(fila.querySelector('.f-hora').value) }));
  }

  // --- Sesiones (bloque 3) ---
  function opcionesDeporteRapido() {
    return DEPORTES_RAPIDOS.map((d) => `<option value="${d}">${d}</option>`).join('') + '<option value="__otro__">Otro (elegir de la lista completa)…</option>';
  }
  function opcionesActividadCompleta() {
    return Object.entries(Motor.ACTIVIDADES).map(([clave, act]) => `<option value="${clave}">${act.nombre}</option>`).join('');
  }

  // #220: deporte principal al principio del paso 3. Con uno de la lista, la semana va por días (Descanso por defecto) y cada sesión
  // se elige entre los tipos de ese deporte (Motor.DEPORTES_PRINCIPALES, cada uno ya traducido a una actividad del motor); «Otra
  // actividad…» abre la lista completa. Con «Otro» o «Ninguno en concreto», las filas de siempre. Las sesiones que llegan al motor
  // tienen la misma forma que antes.
  const MINUTOS_SESION_NUEVA = 45; // #274: también al añadir desde el desplegable del día (antes quedaba vacía y el cálculo fallaba)
  const DIA_LARGO = { L: 'Lunes', M: 'Martes', X: 'Miércoles', J: 'Jueves', V: 'Viernes', S: 'Sábado', D: 'Domingo' };
  let deporteElegido = 'otro';
  const tiposDelDeporte = () => (Motor.deportePrincipal(deporteElegido) || { tipos: [] }).tipos;
  const opcionesTipo = () => tiposDelDeporte().map((t, i) => `<option value="${i}">${escaparHtml(t.nombre)}</option>`).join('') + '<option value="__otra__">Otra actividad…</option>';
  const botonesDeporte = document.getElementById('deporte-principal');
  botonesDeporte.innerHTML = Motor.DEPORTES_PRINCIPALES.map((d) => `<button type="button" class="btn-secundario dp-btn" data-deporte="${d.id}" aria-pressed="false">${escaparHtml(d.nombre)}</button>`).join('');
  function marcarDeporte() {
    botonesDeporte.querySelectorAll('.dp-btn').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.deporte === deporteElegido)));
    document.getElementById('add-sesion').hidden = tiposDelDeporte().length > 0;
  }
  function pintarSesiones(sesiones) {
    sesionesDiv.innerHTML = '';
    if (tiposDelDeporte().length) {
      DIAS.forEach((d) => {
        const bloque = document.createElement('div');
        bloque.className = 'dia-sesiones';
        bloque.dataset.dia = d;
        bloque.innerHTML = `<div class="dia-sesiones-cab"><strong>${DIA_LARGO[d]}</strong>
          <select class="dia-anadir" aria-label="${DIA_LARGO[d]}: añadir sesión"></select></div><div class="dia-filas"></div>`;
        const sel = bloque.querySelector('.dia-anadir');
        sel.addEventListener('change', () => {
          if (sel.value === '') return;
          const t = tiposDelDeporte()[Number(sel.value)];
          nuevaFilaSesion(d, '', MINUTOS_SESION_NUEVA, undefined, t ? t.actividad : undefined, t ? t.nombre : undefined, t ? t.nombre : '__otra__'); // #274
        });
        sesionesDiv.appendChild(bloque);
      });
    }
    sesiones.forEach((s) => nuevaFilaSesion(s.dia, s.deporte, s.minutos, s.horaInicio, s.actividad, s.nota));
    rotularDias();
  }
  function rotularDias() {
    sesionesDiv.querySelectorAll('.dia-sesiones').forEach((b) => {
      const sel = b.querySelector('.dia-anadir');
      sel.innerHTML = `<option value="">${b.querySelector('.sesion') ? '+ Otra sesión este día' : 'Descanso'}</option>${opcionesTipo()}`;
      sel.value = '';
      b.classList.toggle('con-sesion', !!b.querySelector('.sesion'));
    });
  }
  function elegirDeporte(id) {
    const actuales = leerSesiones();
    deporteElegido = Motor.deportePrincipal(id) ? id : 'otro';
    marcarDeporte();
    pintarSesiones(actuales);
  }
  botonesDeporte.addEventListener('click', (ev) => { const b = ev.target.closest('.dp-btn'); if (b) elegirDeporte(b.dataset.deporte); });

  /** `tipoInicial`: nombre del tipo recién elegido en el día, o '__otra__' («Otra actividad…»). */
  function nuevaFilaSesion(dia, deporte, minutos, horaInicio, actividad, nota, tipoInicial) {
    const fila = document.createElement('div');
    fila.className = 'sesion sesion-card';
    // Por días solo si se sabe la actividad (un deporte escrito que no se reconoce sigue a la pantalla de elegir deporte).
    const actividadFila = actividad || resolverActividadUI({ deporte });
    const bloqueDia = (tipoInicial || actividadFila) ? sesionesDiv.querySelector(`.dia-sesiones[data-dia="${dia}"] .dia-filas`) : null;
    fila.innerHTML = `
      ${bloqueDia ? '<select class="s-tipo" aria-label="Tipo de sesión"></select>' : ''}
      <div class="fila2"${bloqueDia ? ' hidden' : ''}>
        <label class="campo-mini"><span>Día</span><select class="s-dia">${DIAS.map((d) => `<option value="${d}">${NOMBRE_DIA_LARGO[d] ?? d}</option>`).join('')}</select></label>
        <label class="campo-mini"><span>Actividad</span><select class="s-deporte">${opcionesDeporteRapido()}</select></label>
      </div>
      <label class="campo-mini campo-completa"><span>Elige la actividad de la lista</span><select class="s-actividad-completa" hidden>${opcionesActividadCompleta()}</select></label>
      <div class="fila2">
        <!-- #260 (punto 33): etiquetas a la vista (antes la hora no tenía título y solo una ayuda invisible en el móvil). -->
        <label class="campo-mini"><span>Hora de inicio (opcional)</span><input class="s-hora" type="time"></label>
        <label class="campo-mini"><span>Minutos</span><input class="s-minutos" type="number" min="1" step="1" placeholder="Ej.: 60"></label>
      </div>
      <div class="campo" style="margin:0.4rem 0 0"><input class="s-nota" type="text" maxlength="120" aria-label="Nombre o estructura de la sesión (opcional)" placeholder="Nombre o estructura (opcional): «4×6 min progresivos, 12,9 km»"></div>
      <button type="button" class="quitar">✕ Quitar esta sesión</button>
    `;
    fila.querySelector('.s-dia').value = dia;
    fila.querySelector('.s-minutos').value = minutos;
    fila.querySelector('.s-nota').value = Motor.limpiarNotaSesion(nota) ?? '';
    // Issue #55: los perfiles guardados traen la hora como número decimal (7.5) y los ejemplos como 'HH:MM';
    // el <input type="time"> solo entiende 'HH:MM'. Sin hora (o dato inválido) queda vacío: no se inventa.
    fila.querySelector('.s-hora').value = Motor.horaDeGuardado(horaInicio);
    const selDeporte = fila.querySelector('.s-deporte');
    const selCompleta = fila.querySelector('.s-actividad-completa');
    if (bloqueDia) {
      // Por días la actividad va siempre explícita; el tipo elegido («Series») se escribe como nota y se ve en el plan.
      selDeporte.value = '__otro__';
      if (actividadFila) selCompleta.value = actividadFila;
      const selTipo = fila.querySelector('.s-tipo');
      const notaEl = fila.querySelector('.s-nota');
      selTipo.innerHTML = opcionesTipo();
      const tipo = tipoInicial === '__otra__' ? undefined : Motor.tipoDeSesion(deporteElegido, actividadFila, tipoInicial || nota);
      selTipo.value = tipo ? String(tiposDelDeporte().indexOf(tipo)) : '__otra__';
      selCompleta.hidden = !!tipo;
      let nombreTipo = tipo ? tipo.nombre : '';
      selTipo.addEventListener('change', () => {
        const t = tiposDelDeporte()[Number(selTipo.value)];
        selCompleta.hidden = !!t;
        if (t) selCompleta.value = t.actividad;
        if (notaEl.value.trim() === '' || notaEl.value.trim() === nombreTipo) notaEl.value = t ? t.nombre : '';
        nombreTipo = t ? t.nombre : '';
      });
    } else if (actividad) {
      selDeporte.value = '__otro__';
      selCompleta.hidden = false;
      selCompleta.value = actividad;
    } else {
      selDeporte.value = deporte;
    }
    selDeporte.addEventListener('change', () => { selCompleta.hidden = selDeporte.value !== '__otro__'; });
    fila.querySelector('.quitar').addEventListener('click', () => { fila.remove(); rotularDias(); });
    (bloqueDia || sesionesDiv).appendChild(fila);
    if (bloqueDia) rotularDias();
  }

  document.getElementById('add-sesion').addEventListener('click', () => nuevaFilaSesion('L', 'fuerza', MINUTOS_SESION_NUEVA));

  function leerSesiones() {
    return Array.from(sesionesDiv.querySelectorAll('.sesion')).map((fila) => {
      const deporteSel = fila.querySelector('.s-deporte').value;
      const base = {
        dia: fila.querySelector('.s-dia').value,
        minutos: Number(fila.querySelector('.s-minutos').value),
        horaInicio: textoAHora(fila.querySelector('.s-hora').value),
        nota: Motor.limpiarNotaSesion(fila.querySelector('.s-nota').value), // se conserva y se muestra; no entra en el cálculo (#69)
      };
      return deporteSel === '__otro__'
        ? { ...base, deporte: fila.querySelector('.s-actividad-completa').selectedOptions[0].textContent, actividad: fila.querySelector('.s-actividad-completa').value }
        : { ...base, deporte: deporteSel };
    });
  }

  // --- Ejemplos ---
  function num(id) { const v = document.getElementById(id).value; return v === '' ? undefined : Number(v); }

  const EJEMPLOS = {
    general: {
      peso: 70, altura: 164, edad: 34, sexo: 'mujer', objetivo: 'perder grasa', vidaTrabajo: 'sentado',
      sesiones: [
        { dia: 'L', deporte: 'fuerza en máquinas', minutos: 50, horaInicio: '18:00' },
        { dia: 'X', deporte: 'fuerza en máquinas', minutos: 50, horaInicio: '18:00' },
        { dia: 'V', deporte: 'caminar rápido', minutos: 45, horaInicio: '18:00' },
      ],
    },
    maraton: {
      peso: 68, altura: 176, edad: 36, sexo: 'hombre', objetivo: 'rendimiento', grasa: 11,
      grasaMetodo: 'pliegues cutáneos', vidaTrabajo: 'sentado', vidaPasos: '5000-7500',
      sesiones: [
        { dia: 'L', deporte: 'correr suave', minutos: 50, horaInicio: '07:30' },
        { dia: 'M', deporte: 'correr', minutos: 70, horaInicio: '18:30' }, // igual que tests/reparto-comidas.test.ts
        { dia: 'X', deporte: 'fuerza', minutos: 40, horaInicio: '07:30' },
        { dia: 'J', deporte: 'correr rápido', minutos: 60, horaInicio: '18:30' },
        { dia: 'S', deporte: 'correr', minutos: 150, horaInicio: '09:00' },
        { dia: 'D', deporte: 'correr suave', minutos: 40, horaInicio: '09:00' },
      ],
      // La comida a las 14:45 (no las 14:00 por defecto) para que caiga en la ventana PRE de 1,5-4 h
      // antes de la sesión de las 18:30, igual que tests/reparto-comidas.test.ts.
      franjas: { comida: '14:45' },
    },
    hyrox: {
      peso: 84, altura: 181, edad: 29, sexo: 'hombre', objetivo: 'perder grasa', grasa: 16,
      grasaMetodo: 'báscula de bioimpedancia', vidaTrabajo: 'de_pie',
      sesiones: [
        { dia: 'L', deporte: 'hyrox', minutos: 75, horaInicio: '18:00' },
        { dia: 'M', deporte: 'correr', minutos: 50, horaInicio: '07:00' },
        { dia: 'X', deporte: 'fuerza', minutos: 60, horaInicio: '18:00' },
        { dia: 'J', deporte: 'hyrox', minutos: 60, horaInicio: '19:00' }, // igual que tests/reparto-comidas.test.ts
        { dia: 'V', deporte: 'correr suave', minutos: 40, horaInicio: '07:00' },
        { dia: 'S', deporte: 'hyrox', minutos: 90, horaInicio: '10:00' },
      ],
      // Igual que el ejemplo de maratón: 15:00 (justo en el borde de 4 h) en vez de las 14:00 por
      // defecto, y merienda/cena a la hora exacta de tests/reparto-comidas.test.ts.
      franjas: { comida: '15:00', merienda: '17:30', cena: '21:30' },
    },
    diabetes: {
      peso: 70, altura: 164, edad: 34, sexo: 'mujer', objetivo: 'perder grasa', vidaTrabajo: 'sentado',
      salud: ['diabetes tipo 2'], sesiones: [],
    },
  };

  function restablecerEstadoDelPlan(conservarSustituciones = false) {
    excepcionesHorario.clear();
    diasHorarioAbiertos.clear();
    contextoPorDia = new Map(DIAS.map((d) => [d, Motor.contextoDiaPorDefecto()]));
    diasContextoAbiertos = new Set();
    diasAbiertos = new Set();
    historialMovimientos = [];
    mensajeDeshacer = '';
    // Restaurar un perfil guardado conserva las recetas elegidas (se revalidan al calcular); un perfil nuevo las borra.
    historialSustituciones = [];
    avisoSustituciones = [];
    if (!conservarSustituciones) { sustituciones = {}; guardarSustituciones(); }
  }

  function cargarEjemplo(clave) {
    // #259.27: otro ejemplo es otra persona: no se conservan los platos del plan de antes.
    asignacionSemanaActual = { asignaciones: [], huecos: [], avisos: [] }; ultimaFirmaRespuestas = ''; avisoCambiosVigente = '';
    exigirRevisionPerfil(false); // un ejemplo trae sus propias alergias/salud: no hay nada pendiente de revisar
    rellenarFormulario(EJEMPLOS[clave]);
  }

  // Rellena el formulario a partir de un objeto con la forma de EJEMPLOS (issue #20: lo usa también el
  // último perfil guardado en localStorage, no solo los botones de ejemplo).
  function rellenarFormulario(ej, { conservarSustituciones = false } = {}) {
    document.getElementById('peso').value = ej.peso;
    document.getElementById('altura').value = ej.altura;
    document.getElementById('edad').value = ej.edad;
    document.getElementById('sexo').value = ej.sexo;
    const conocida = ej.grasa !== undefined;
    document.getElementById('grasa-conocida').checked = conocida;
    document.getElementById('grasa-detalle').hidden = !conocida;
    document.getElementById('grasa').value = ej.grasa ?? '';
    document.getElementById('grasa-metodo').value = ej.grasaMetodo ?? 'pliegues cutáneos';
    document.getElementById('objetivo').value = ej.objetivo;
    document.getElementById('vida-trabajo').value = ej.vidaTrabajo ?? 'sentado';
    document.getElementById('vida-pasos').value = ej.vidaPasos ?? '';
    document.querySelectorAll('.salud').forEach((c) => { c.checked = false; });
    document.getElementById('salud-otra').value = '';
    limpiarCribado(); // #195: el cribado no se guarda con el perfil ni viaja entre ejemplos
    (ej.salud ?? []).forEach((texto) => {
      const marcada = Array.from(document.querySelectorAll('.salud')).find((c) => texto.includes(c.value));
      if (marcada) marcada.checked = true; else document.getElementById('salud-otra').value = texto;
    });
    // Issue #56: un ejemplo, «Empezar de cero» o un perfil guardado rellenan explícitamente lo que traen y
    // limpian lo que no traen (alergias, preferencias, turnos…), y se olvida el estado del plan anterior
    // (horarios por día, contexto por día, deshacer). Lo que NO se toca: la lista de la compra a mano (#34)
    // y las competiciones anotadas (#44), que no son del perfil.
    const alerg = ej.alergias ?? {};
    ['celiaquia', 'lactosa', 'vegetariano', 'vegano'].forEach((k) => { document.getElementById(`al-${k}`).checked = !!alerg[k]; });
    document.getElementById('al-otros').value = alerg.otros ?? '';
    CASILLAS_ALERGIA.forEach(([id]) => { document.getElementById(id).checked = false; }); // #198, #256.5: las casillas de alergia no viajan entre ejemplos
    document.getElementById('pref-gustan').value = (ej.preferencias ?? {}).gustan ?? '';
    document.getElementById('pref-evitas').value = (ej.preferencias ?? {}).evitan ?? '';
    fusionarEnListaNegra(partirAlimentos((ej.preferencias ?? {}).evitan)); // la lista negra guardada no se pierde: se suma y deja el campo con toda la lista
    document.getElementById('turnos').checked = !!ej.turnos;
    document.getElementById('tiempo-cocina').value = ej.tiempoCocina ?? 'normal';
    document.getElementById('comunidad').value = ej.comunidad ?? 'Comunidad de Madrid';
    restablecerEstadoDelPlan(conservarSustituciones);
    // #220: el deporte principal guardado, o deducido de las sesiones si el perfil o el ejemplo es de antes.
    deporteElegido = Motor.deportePrincipal(ej.deportePrincipal) ? ej.deportePrincipal
      : Motor.deducirDeportePrincipal((ej.sesiones ?? []).map((s) => s.actividad || resolverActividadUI(s)));
    marcarDeporte();
    pintarSesiones(ej.sesiones ?? []);
    // Horas de las comidas: las del ejemplo/guardado si las da, si no las de por defecto (bloque 7).
    // ej.franjas[franja] puede ser solo la hora (texto, ejemplos de siempre) o {activa, hora} (guardado).
    Array.from(franjasDiv.children).forEach((fila) => {
      const guardado = (ej.franjas ?? {})[fila.dataset.franja];
      const horaDef = FRANJAS.find((f) => f.franja === fila.dataset.franja).horaDef;
      const esObjeto = guardado && typeof guardado === 'object';
      fila.querySelector('.f-activa').checked = esObjeto ? guardado.activa : true;
      fila.querySelector('.f-hora').value = (esObjeto ? guardado.hora : guardado) ?? horaDef;
    });
    ['incompleto', 'derivar', 'freno-peso', 'elegir-deporte', 'resultado'].forEach((id) => { document.getElementById(id).hidden = true; });
    mostrarFormulario();
    mostrarPaso(1);
  }

  document.querySelectorAll('[data-perfil]').forEach((btn) => {
    btn.addEventListener('click', () => cargarEjemplo(btn.dataset.perfil));
  });

  // Issue #24: el CSS @media print hace el resto (oculta la UI interactiva y despliega los repartos).
  document.getElementById('btn-imprimir').addEventListener('click', () => window.print());

  // Issue #26: resumen en texto plano, listo para pegar en WhatsApp/email (líneas con guiones, sin tablas).
  function generarResumenTexto() {
    const plan = planActual; const semana = semanaActual;
    if (!plan || !semana) return '';
    const sesiones = semana.perfil.sesiones ?? [];
    const sesionesConActividad = ultimasSesiones.map((s, i) => ({ ...s, actividad: resolverActividadUI(s), dia: sesiones[i] ? sesiones[i].dia : s.dia }));
    const NOMBRE_FRANJA = { desayuno: 'Desayuno', media_manana: 'Media mañana', comida: 'Comida', merienda: 'Merienda', cena: 'Cena' };
    const lineas = [
      `Plan semanal — objetivo: ${respuestasActuales.objetivo}`,
      `Media: ${plan.kcalMedia} kcal/día (${plan.basal.ecuacion}, ${plan.basal.kcal} kcal basal)`,
      '',
    ];
    plan.dias.forEach((d) => {
      lineas.push(`- ${d.dia} (${d.tipo}): ${d.kcal} kcal — P ${d.proteinaG} g · G ${d.grasaG} g · H ${d.hidratoG} g`);
      const reparto = Motor.repartirComidas({
        kcal: d.kcal, proteina: d.proteinaG, grasa: d.grasaG, hidrato: d.hidratoG,
        pesoRef: plan.proteina.pesoReferencia, peso: respuestasActuales.peso, tipoDia: d.tipo,
        sesiones: franjaADia(d.dia, franjasDelDia(d.dia), sesionesConActividad),
        sesionesTodas: sesionesTodasDelDia(d.dia, sesionesConActividad),
        franjas: franjasDelDia(d.dia),
        ...(contextoPorDia.get(d.dia).tomaLigera ? { tomaLigera: contextoPorDia.get(d.dia).tomaLigera } : {}), // #64
        ...(hambreCena ? { hambreCena } : {}), // #265 F
      });
      reparto.franjas.forEach((f) => {
        const rol = f.rol !== 'normal' ? ` (${nombreRol(f.rol)})` : '';
        lineas.push(`  · ${NOMBRE_FRANJA[f.franja] ?? f.franja}${rol}: P ${f.proteina} · G ${f.grasa} · H ${f.hidrato} g`);
      });
    });
    if (plan.avisos.length) {
      lineas.push('', 'Avisos:');
      Motor.avisosParaPersona(plan.avisos).forEach((t) => lineas.push(`- ${t}`));
    }
    return lineas.join('\n');
  }

  // Issue #83: no se anuncia «Copiado» si no se ha copiado. La decisión es Motor.copiarAlPortapapeles (API moderna o, si
  // no existe, textarea temporal + execCommand cuyo booleano se respeta). Si falla, se avisa y se ofrece el texto para
  // copiarlo a mano (explícito: no finge haberlo copiado); el botón permite reintentar.
  let intentoCopia = 0;
  let temporizadorCopia = null;
  async function copiarResumen() {
    if (!planActual) return; // sin plan vigente (p. ej. tras una derivación) no hay nada que copiar: nunca el plan anterior (#99)
    const boton = document.getElementById('btn-copiar');
    const estado = document.getElementById('estado-copiar');
    const manual = document.getElementById('resumen-manual');
    const original = '📋 Copiar resumen';
    const intento = ++intentoCopia; // un intento más nuevo anula el aviso y el temporizador del anterior
    clearTimeout(temporizadorCopia);
    manual.hidden = true;
    let texto = '';
    let copiado = false;
    try {
      texto = generarResumenTexto();
      const previo = document.activeElement;
      copiado = await Motor.copiarAlPortapapeles(texto, {
        clipboard: navigator.clipboard,
        copiarConTextarea: (t) => {
          const ta = document.createElement('textarea');
          ta.value = t;
          ta.setAttribute('readonly', '');
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          try {
            ta.select();
            return document.execCommand('copy');
          } finally {
            document.body.removeChild(ta); // se limpia siempre, también si falla
            if (previo && previo.focus) previo.focus(); // el foco vuelve a donde estaba
          }
        },
      });
    } catch { copiado = false; }
    if (intento !== intentoCopia) return; // ya hay un intento más reciente: no pisar su estado
    if (copiado) {
      boton.textContent = '✅ Copiado';
      estado.textContent = 'Resumen copiado al portapapeles.';
    } else {
      boton.textContent = '⚠️ No se pudo copiar';
      estado.textContent = 'No se ha podido copiar automáticamente. Selecciona y copia el texto de abajo a mano, o pulsa el botón para reintentar.';
      manual.value = texto;
      manual.hidden = false;
      manual.focus();
      manual.select();
    }
    temporizadorCopia = setTimeout(() => { boton.textContent = original; }, 1800);
  }
  document.getElementById('btn-copiar').addEventListener('click', copiarResumen);

  // Issue #31: CSV descargable del plan semanal (una fila por día y franja), para guardar o cruzar
  // con hojas de Pablo. Sin servidor: se genera el Blob en el navegador y se dispara la descarga.
  function descargarPlanCSV() {
    if (!planActual || !filasPlanCSV.length) return; // sin plan vigente no se exporta el anterior (#99)
    const cabecera = 'dia,tipo,franja,kcal,proteina_g,grasa_g,hidrato_g';
    const filas = filasPlanCSV.map((f) => [
      f.dia, f.tipo, f.franja, f.kcal, f.proteina_g, f.grasa_g, f.hidrato_g,
    ].join(','));
    const csv = [cabecera, ...filas].join('\r\n');
    const fecha = Motor.fechaLocalISO(new Date()); // día local del dispositivo, no el UTC (#96)
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `plan-${fecha}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  document.getElementById('btn-descargar-csv').addEventListener('click', descargarPlanCSV);

  // --- Issue #28: comparar el plan actual (escenario A) con una variante (B: objetivo, vida diaria o
  // una sesión extra), sin volver a pasar por todo el cuestionario. Reutiliza perfilDesdeCuestionario y
  // calcular tal cual, no reimplementa nada del motor en la capa de UI. ---
  const cmpDia = document.getElementById('cmp-extra-dia');
  const cmpDeporte = document.getElementById('cmp-extra-deporte');
  cmpDia.innerHTML = DIAS.map((d) => `<option value="${d}">${d}</option>`).join('');
  cmpDeporte.innerHTML = opcionesDeporteRapido().replace('<option value="__otro__">Otro (elegir de la lista completa)…</option>', '');

  document.getElementById('cmp-extra-activa').addEventListener('change', (ev) => {
    document.getElementById('cmp-extra-detalle').hidden = !ev.target.checked;
  });

  document.getElementById('btn-comparar').addEventListener('click', () => {
    if (!semanaActual || !respuestasActuales) return;
    document.getElementById('cmp-objetivo').value = respuestasActuales.objetivo;
    document.getElementById('cmp-vida-trabajo').value = respuestasActuales.vida.trabajo;
    document.getElementById('cmp-vida-pasos').value = respuestasActuales.vida.pasos || '';
    document.getElementById('cmp-extra-activa').checked = false;
    document.getElementById('cmp-extra-detalle').hidden = true;
    document.getElementById('comparacion-resultado').innerHTML = '';
    document.getElementById('comparador').hidden = false;
    window.scrollTo({ top: 0 });
  });
  document.getElementById('btn-cerrar-comparador').addEventListener('click', () => {
    document.getElementById('comparador').hidden = true;
  });

  document.getElementById('btn-ver-comparacion').addEventListener('click', () => {
    const planA = planActual;
    // Escenario A a partir de semanaActual.perfil (no de respuestasActuales.sesiones, que puede haberse
    // quedado atrás si ya se movió alguna sesión desde los resultados, issue #18).
    const sesionesA = (semanaActual.perfil.sesiones ?? []).map((s) => ({ dia: s.dia, deporte: s.actividad, actividad: s.actividad, minutos: s.minutos }));
    const sesionesB = [...sesionesA];
    const salida = document.getElementById('comparacion-resultado');
    if (document.getElementById('cmp-extra-activa').checked) {
      // Issue #86: sin `actividad` (el nombre del deporte no es una clave: «correr suave» ≠ «correr_suave»); la resuelve el
      // motor desde `deporte`. Los minutos vacíos valen 45; uno inválido (0, negativo, no numérico) no se sustituye en silencio.
      const bruto = document.getElementById('cmp-extra-minutos').value.trim();
      const minutos = bruto === '' ? 45 : Number(bruto);
      if (!(minutos > 0)) {
        salida.innerHTML = '<p style="color:var(--peligro)">La sesión extra necesita una duración mayor que 0 minutos. No se ha cambiado nada de tu plan.</p>';
        return;
      }
      sesionesB.push({ dia: cmpDia.value, deporte: cmpDeporte.value, minutos });
    }
    const respuestasB = {
      ...respuestasActuales,
      objetivo: document.getElementById('cmp-objetivo').value,
      vida: { trabajo: document.getElementById('cmp-vida-trabajo').value, pasos: document.getElementById('cmp-vida-pasos').value || undefined },
      sesiones: sesionesB,
    };
    const resultadoB = Motor.perfilDesdeCuestionario(respuestasB);
    if (resultadoB.estado !== 'ok') {
      document.getElementById('comparacion-resultado').innerHTML = `<p style="color:var(--peligro)">No se pudo calcular el escenario B (${resultadoB.estado}). Prueba con otro cambio.</p>`;
      return;
    }
    let planB;
    try { planB = Motor.calcular(resultadoB.perfil); } catch (e) {
      salida.innerHTML = `<p style="color:var(--peligro)">No se pudo calcular el escenario B: ${escaparHtml(e.message)}. Tu plan (A) no ha cambiado.</p>`;
      return;
    }
    pintarComparacion(planA, planB, semanaActual.perfil, resultadoB.perfil);
  });

  function pintarComparacion(planA, planB, perfilA, perfilB) {
    const diferencia = planB.kcalMedia - planA.kcalMedia;
    const columna = (nombre, plan, otroPlan) => `
      <div class="comparacion-col">
        <div class="tarjeta">
          <h3>${nombre}</h3>
          <div class="stat"><div class="n">${plan.kcalMedia}</div><div class="l">kcal media/día (${plan.basal.ecuacion})</div></div>
          ${porqueHtml(`cmp-${nombre.startsWith('Escenario A') ? 'A' : 'B'}-kcal`, Motor.explicarKcalMedia(plan, { objetivoElegido: respuestasActuales && respuestasActuales.objetivo }), '¿Por qué estas kcal?')}
          ${porqueHtml(`cmp-${nombre.startsWith('Escenario A') ? 'A' : 'B'}-ecuacion`, Motor.explicarEcuacion(plan, nombre.startsWith('Escenario A') ? perfilA : perfilB), '¿Por qué esta ecuación?')}
          ${plan.dias.map((d, i) => {
            const otro = otroPlan.dias[i];
            const distinta = otro.kcal !== d.kcal;
            return `<div class="comparacion-dia ${distinta ? 'distinta' : ''}"><span>${d.dia} <span class="d">(${d.tipo})</span></span><span>${d.kcal} kcal</span></div>`;
          }).join('')}
        </div>
      </div>
    `;
    document.getElementById('comparacion-resultado').innerHTML = `
      <p style="text-align:center;font-weight:600">
        Diferencia de media: ${diferencia > 0 ? '+' : ''}${diferencia} kcal/día
        (${diferencia === 0 ? 'igual' : diferencia > 0 ? 'B come más' : 'B come menos'})
      </p>
      <div class="comparacion-grid">
        ${columna('Escenario A (actual)', planA, planB)}
        ${columna('Escenario B', planB, planA)}
      </div>
    `;
  }

  // --- Issue #47: «¿Por qué?» junto a cada cifra. Los textos los genera el motor (Motor.explicar*) a
  // partir del rastro real del cálculo; aquí solo se pintan, así que se actualizan solos al mover,
  // deshacer o comparar. Los desplegables abiertos se recuerdan entre re-pintados. ---
  const porqueAbiertos = new Set();
  document.addEventListener('toggle', (ev) => {
    const d = ev.target;
    if (!(d instanceof HTMLDetailsElement) || !d.dataset.clave) return;
    if (d.open) porqueAbiertos.add(d.dataset.clave); else porqueAbiertos.delete(d.dataset.clave);
  }, true);

  function cuerpoPorque(expl) {
    return `<p class="porque-resumen">${escaparHtml(expl.resumen)}</p>`
      + (expl.detalle.length ? `<ul class="porque-detalle">${expl.detalle.map((l) => `<li>${escaparHtml(l)}</li>`).join('')}</ul>` : '');
  }
  // `contenido`: una explicación, o una lista [[subtítulo, explicación], …] para agrupar varias cifras.
  function porqueHtml(clave, contenido, titulo = '¿Por qué?') {
    const cuerpo = Array.isArray(contenido)
      ? contenido.map(([sub, expl]) => `<h4>${escaparHtml(sub)}</h4>${cuerpoPorque(expl)}`).join('')
      : cuerpoPorque(contenido);
    return `<details class="porque" data-clave="${clave}" ${porqueAbiertos.has(clave) ? 'open' : ''}><summary>${titulo}</summary>${cuerpo}</details>`;
  }
  function porqueDiaHtml(clave, dia) {
    const d = planActual.dias.find((x) => x.dia === dia);
    return porqueHtml(clave, [
      ['Calorías del día', Motor.explicarKcalDia(planActual, d)],
      ['Tipo de día', Motor.explicarTipoDia(d)],
      ['Proteína', Motor.explicarProteina(planActual, semanaActual.perfil)],
      ['Grasa', Motor.explicarGrasa(planActual, d)],
      ['Hidrato', Motor.explicarHidrato(planActual, d)],
    ], '¿Por qué estas cifras?');
  }
  // --- Issue #43: navegación por secciones (Mi plan / Compra) y resumen del día ---
  const NOMBRE_DIA_LARGO = { L: 'Lunes', M: 'Martes', X: 'Miércoles', J: 'Jueves', V: 'Viernes', S: 'Sábado', D: 'Domingo' };
  const LETRA_DIA_JS = ['D', 'L', 'M', 'X', 'J', 'V', 'S']; // Date.getDay(): 0 = domingo
  const diaDeHoy = () => LETRA_DIA_JS[new Date().getDay()]; // se lee del reloj cada vez: con la página abierta pasada la medianoche «hoy» cambia (#105)
  let diaResumen = diaDeHoy();
  let vistaHoyReal = null; // #262: { dia, reparto, recetaPorSlot } de hoy sin los ajustes de la semana que mira el calendario
  let vistaSemana = null; // {repartosPorDia, recetaPorSlot, huecoPorSlot, franjas}: lo que ya calculó mostrarResultado
  let panelActual = 'hoy';

  const PANELES = ['hoy', 'semana', 'calendario', 'recetas', 'compra', 'perfil'];
  // Rediseño (#152): cada pestaña lleva su título grande y recuerda por dónde iba al volver a ella.
  const TITULO_PANEL = { hoy: 'Hoy', semana: 'Semana', recetas: 'Recetas', compra: 'Compra', perfil: 'Perfil' };
  let scrollPorPanel = {};
  // #208 parte 3: Perfil en subpantallas (Datos, Alergias y lista negra, Competiciones, Alertas, Que Pablo vea mis datos). Las tarjetas
  // son las mismas de siempre (mismos ids): solo se enseña una cada vez y la fila de Alertas o de la nube solo sale si esa tarjeta existe.
  function irPerfilSub(vista) {
    const panel = document.getElementById('panel-perfil');
    if (!panel) return;
    panel.dataset.vista = vista;
    document.querySelectorAll('#perfil-menu [data-ir]').forEach((b) => {
      const tarjeta = panel.querySelector(`:scope > [data-sub="${b.dataset.ir}"]`) || document.getElementById(b.dataset.ir === 'nube' ? 'tarjeta-nube' : 'tarjeta-' + b.dataset.ir);
      b.hidden = Boolean(tarjeta && tarjeta.hidden) || (b.dataset.ir === 'nube' && !tarjeta);
    });
    document.getElementById('perfil-atras').hidden = vista === 'menu';
    if (vista === 'gustos') pintarGustos();
    if (vista !== 'menu') window.scrollTo({ top: 0 });
  }
  document.querySelectorAll('#perfil-menu [data-ir]').forEach((b) => b.addEventListener('click', () => irPerfilSub(b.dataset.ir)));
  document.getElementById('perfil-atras').addEventListener('click', () => irPerfilSub('menu'));
  function mostrarPanel(nombre, { mover = true, recordar = false } = {}) {
    if (recordar && nombre !== panelActual) scrollPorPanel[panelActual] = window.scrollY;
    panelActual = nombre;
    const pestana = nombre === 'calendario' ? 'semana' : nombre; // el calendario es una vista dentro de «Semana»
    document.getElementById('titulo-pantalla').textContent = TITULO_PANEL[pestana];
    document.querySelectorAll('#tabs-app [role="tab"]').forEach((t) => {
      const activa = t.dataset.panel === pestana;
      t.setAttribute('aria-selected', String(activa));
      t.tabIndex = activa ? 0 : -1;
    });
    PANELES.forEach((n) => { document.getElementById(`panel-${n}`).hidden = n !== nombre; });
    if (nombre === 'perfil') irPerfilSub('menu'); // #208: el Perfil siempre abre por su menú
    if (nombre === 'hoy') pintarHoy();
    if (nombre === 'semana' && typeof pintarResumenDia === 'function') pintarResumenDia(); // la marca «hoy» sigue al reloj (#105)
    if (nombre === 'recetas') pintarRecetas();
    if (mover) window.scrollTo({ top: recordar ? (scrollPorPanel[nombre] || 0) : 0 });
  }
  // «Semana» abre por el Calendario, que va primero; el Plan queda a su derecha (Pablo, 08/10).
  const panelDeTab = (tab) => (tab.dataset.panel === 'semana' ? 'calendario' : tab.dataset.panel);
  document.querySelectorAll('.subvista .sub-plan').forEach((b) => b.addEventListener('click', () => mostrarPanel('semana')));
  document.querySelectorAll('.subvista .sub-calendario').forEach((b) => b.addEventListener('click', () => mostrarPanel('calendario')));

  // #163 (partes 1-2): cuánto dura la dieta y desde qué día. Una sola fecha para el cliente: el lunes del
  // calendario (calInicio) se calcula a partir del inicio de la dieta; si se cambia ese lunes a mano, el inicio se borra.
  const CLAVE_PERIODO = 'app-dietas-periodo';
  // Tabla de conservación de #165 (datos/conservacion.csv, convenciones de compra de Pablo del 13/10): orienta, no garantiza cuánto dura.
  const CONSERVACION_ACTIVA = Motor.conservacionDesdeCsv(Motor.CONSERVACION_CSV);
  const TABLA_COMER_FUERA = Motor.comerFueraDesdeCsv(Motor.COMER_FUERA_CSV); // #161: datos/comer-fuera.csv (Instinct, #160)
  let periodoDieta = { inicio: '', semanas: Motor.SEMANAS_POR_DEFECTO };
  try {
    const g = JSON.parse(localStorage.getItem(CLAVE_PERIODO) || 'null');
    if (g) periodoDieta = { inicio: Motor.esFechaValida(g.inicio ?? '') ? g.inicio : '', semanas: Motor.semanasValidas(g.semanas) };
  } catch { /* sin almacenamiento o dato corrupto: 1 semana y sin fecha */ }
  // #164: «Generar próxima lista de la compra» con las sobras de la dieta anterior (solo durante la sesión).
  let proxima = { abierta: false, sobras: [], semanas: 1, resultado: null, dieta: null };
  let dietaSiguienteFn = null;
  let avisosAlergiasHoy = []; // #189: avisos de alergias que la app no sabe filtrar, para enseñarlos en «Hoy»
  function guardarPeriodoDieta() { try { localStorage.setItem(CLAVE_PERIODO, JSON.stringify(periodoDieta)); } catch { falloAlmacenamiento(); } }
  // #164: la dieta siguiente preparada (solo las recetas por comida: la ración se recalcula con el perfil de cada momento).
  // Empieza el día después de acabar la actual; hasta entonces no cambia nada de lo que se ve.
  const CLAVE_SIGUIENTE = 'app-dietas-siguiente';
  let siguiente = null; // { inicio, semanas, recetas: [{ dia, franja, receta }] }
  try {
    const g = JSON.parse(localStorage.getItem(CLAVE_SIGUIENTE) || 'null');
    if (g && Motor.esFechaValida(g.inicio ?? '') && Array.isArray(g.recetas) && g.recetas.every((x) => x && typeof x.dia === 'string' && typeof x.franja === 'string' && typeof x.receta === 'string')) {
      siguiente = { inicio: g.inicio, semanas: Motor.semanasValidas(g.semanas), recetas: g.recetas, quitadas: Array.isArray(g.quitadas) ? g.quitadas.filter((q) => q && typeof q.nombre === 'string').slice(0, 40).map((q) => ({ nombre: String(q.nombre).slice(0, 80), motivo: String(q.motivo ?? '').slice(0, 120) })) : [] };
    }
  } catch { /* sin almacenamiento o dato corrupto: no hay dieta siguiente */ }
  function guardarSiguiente() {
    try { if (siguiente) localStorage.setItem(CLAVE_SIGUIENTE, JSON.stringify(siguiente)); else localStorage.removeItem(CLAVE_SIGUIENTE); } catch { falloAlmacenamiento(); }
  }
  // #207: plan revisado y publicado por Pablo (llega con la nube, web/nube.js, y se guarda aquí). Si vale hoy, se usa como semana fijada.
  const CLAVE_PLAN_PABLO = 'app-dietas-plan-pablo';
  let planPablo = null; // { creado, inicio, semanas, plan: { asignaciones: [{dia, franja, receta, racionAjustada}] } }
  function leerPlanPablo() {
    try {
      const g = JSON.parse(localStorage.getItem(CLAVE_PLAN_PABLO) || 'null');
      planPablo = g && typeof g === 'object' && g.plan && Array.isArray(g.plan.asignaciones) && Motor.esFechaValida(g.inicio || '') ? g : null;
    } catch { planPablo = null; }
  }
  leerPlanPablo();
  const planPabloVigente = () => (planPablo && Motor.estadoDeLaPreparada(Motor.fechaLocalISO(new Date()), planPablo.inicio, Motor.semanasValidas(planPablo.semanas)) === 'activa' ? planPablo : null);
  let avisoPabloHoy = ''; // «Revisado por Pablo…» y lo que se quitó, para Hoy y Semana
  window.addEventListener('app-dietas:plan-pablo', () => { leerPlanPablo(); if (semanaActual && planActual) mostrarResultado(semanaActual, planActual, respuestasActuales, franjasActuales); });

  // Al llegar la fecha, la siguiente pasa a ser la dieta actual (mismo inicio y semanas, una sola fecha) y se olvida al acabar.
  function estadoSiguienteHoy() {
    if (!siguiente) return undefined;
    const est = Motor.estadoDeLaPreparada(Motor.fechaLocalISO(new Date()), siguiente.inicio, siguiente.semanas);
    if (est === 'caducada') { siguiente = null; guardarSiguiente(); return undefined; }
    if (est === 'activa' && periodoDieta.inicio !== siguiente.inicio) {
      periodoDieta = { inicio: siguiente.inicio, semanas: siguiente.semanas };
      guardarPeriodoDieta();
      calInicio = Motor.lunesDelInicio(siguiente.inicio);
      try { localStorage.setItem(CLAVE_CALENDARIO, JSON.stringify({ inicio: calInicio, competiciones })); } catch { falloAlmacenamiento(); }
    }
    return est;
  }
  function sincronizarInicioDieta() {
    if (periodoDieta.inicio && Motor.lunesDelInicio(periodoDieta.inicio) !== calInicio) { periodoDieta.inicio = ''; guardarPeriodoDieta(); }
  }
  function periodoDietaHtml() {
    const fin = periodoDieta.inicio ? Motor.finDeLaDieta(periodoDieta.inicio, periodoDieta.semanas) : undefined;
    const hoy = periodoDieta.inicio ? Motor.semanaDeLaDieta(Motor.fechaLocalISO(new Date()), periodoDieta.inicio, periodoDieta.semanas) : undefined;
    return `
      <div class="periodo-dieta" style="display:flex;flex-wrap:wrap;gap:0.6rem;align-items:flex-end;margin:0 0 0.8rem">
        <div class="campo" style="margin:0"><label for="periodo-semanas">Esta dieta dura</label>
          <select id="periodo-semanas">${[1, 2, 3, 4].map((n) => `<option value="${n}"${n === periodoDieta.semanas ? ' selected' : ''}>${n} semana${n === 1 ? '' : 's'}</option>`).join('')}</select></div>
        <div class="campo" style="margin:0"><label for="periodo-inicio">Empiezo el</label>
          <input id="periodo-inicio" type="date" value="${periodoDieta.inicio}" aria-describedby="periodo-inicio-ayuda"><small class="subt" id="periodo-inicio-ayuda" style="display:block">El día que empezaste esta dieta (por ejemplo, el lunes de esta semana).</small></div>
      </div>
      ${fin ? `<p class="una-linea" id="periodo-fin">Termina el ${fechaLegible(fin)}${hoy ? ` · hoy es la semana ${hoy.semana} de ${hoy.de}` : ''}.</p>` : ''}`;
  }

  // --- Issue #73: «Hoy» (siguiente comida y sesión según el reloj de este dispositivo) y resumen de «Perfil».
  // No hay conexión con calendarios ni con la actividad real: solo el día de la semana y la hora del dispositivo.
  let acuseVolumen = null; // #265 G: { fecha, texto } tras «¿qué tal de cantidad?», hasta la siguiente comida marcada
  function pintarHoy() {
    const cont = document.getElementById('hoy-ahora');
    if (!vistaSemana || !planActual) { cont.innerHTML = '<h2>Hoy</h2><p class="subt">Calcula tu plan para ver aquí lo que toca hoy.</p>'; return; }
    const ahora = new Date();
    const dia = LETRA_DIA_JS[ahora.getDay()];
    const horaAct = ahora.getHours() + ahora.getMinutes() / 60;
    const iso = `${ahora.getFullYear()}-${String(ahora.getMonth() + 1).padStart(2, '0')}-${String(ahora.getDate()).padStart(2, '0')}`;
    const fechaTxt = ahora.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });
    let nota = 'El plan va por días de la semana, con la hora de tu móvil.'; // #260.30: sin la nota técnica
    if (calInicio && !Motor.diaDeLaFecha(calInicio, iso)) nota = `Hoy queda fuera de la semana con fechas que elegiste en el calendario (lunes ${calInicio}). ${nota}`;
    // #257 (punto 7): con el calendario en otra semana, «Hoy» no anuncia su competición («MAÑANA COMPITES» a 29 días): se dice qué
    // semana se está mirando y se ofrece volver a esta. (Que Hoy tenga además el plan de la semana real va aparte: #257, punto 7, parte 2.)
    const otraSemana = Boolean(calInicio) && !Motor.diaDeLaFecha(calInicio, iso);
    const avisoOtraSemanaHtml = otraSemana ? `<div class="hoy-bloque" id="hoy-otra-semana" role="status"><p style="margin:0 0 0.4rem">En el calendario estás mirando la semana del ${escaparHtml(fechaLegible(calInicio, false))}: lo de esa semana (como una competición) no se enseña aquí.</p><button type="button" class="btn-secundario" id="hoy-volver-semana">Volver a esta semana</button></div>` : '';

    // #262: con el calendario en otra semana, el día de hoy es el del plan sin los ajustes de esa semana (calculado aparte).
    const hoyReal = vistaHoyReal && vistaHoyReal.dia.dia === dia ? vistaHoyReal : null;
    const { reparto } = hoyReal ? hoyReal : vistaSemana.repartosPorDia.find((r) => r.dia.dia === dia);
    const recetaHoy = (clave) => (hoyReal ? hoyReal.recetaPorSlot.get(clave) : vistaSemana.recetaPorSlot.get(clave));
    const NOMBRE = { desayuno: 'Desayuno', media_manana: 'Media mañana', comida: 'Comida', merienda: 'Merienda', cena: 'Cena' };
    const horas = franjasDelDia(dia);
    const comidas = reparto.franjas.map((f) => {
      const h = horas.find((x) => x.franja === f.franja);
      return { f, hora: h && h.hora !== undefined ? h.hora : undefined };
    });
    const conHora = comidas.filter((c) => c.hora !== undefined).sort((a, b) => a.hora - b.hora);
    // La comida que toca es la última cuya hora ya llegó y sigue ahí hasta que la persona la marca como hecha (Pablo, 08/10).
    // Red de seguridad para quien no pulsa el botón: a las 2 h, o al llegar la hora de la siguiente, pasa sola a la próxima.
    const hechas = hechasDe(iso);
    const enCurso = conHora.filter((c) => c.hora <= horaAct && horaAct - c.hora < 2).pop();
    const tocaAhora = Boolean(enCurso) && !hechas.includes(enCurso.f.franja);
    const siguiente = tocaAhora ? enCurso : conHora.find((c) => c.hora > horaAct && !hechas.includes(c.f.franja));
    const valorando = porValorar && porValorar.fecha === iso ? comidas.find((c) => c.f.franja === porValorar.franja) : undefined;
    const sinHora = comidas.filter((c) => c.hora === undefined);

    let bloqueComida;
    if (!comidas.length) {
      bloqueComida = '<p>Hoy no hay comidas activas en tu plan.</p>';
    } else if (valorando) {
      // Recién marcada como hecha: se pregunta la cantidad solo de esa comida, y después se pasa a la siguiente.
      bloqueComida = `
        <div class="hoy-bloque destacado hoy-toca">
          <h3>${NOMBRE[valorando.f.franja] ?? valorando.f.franja} · hecha</h3>
          <div class="hoy-plato">¿Qué tal de cantidad?</div>
          <div class="hoy-valores">${botonesVolumenHtml(iso, valorando.f.franja)}</div>
          <div class="hoy-valorar-pie"><button type="button" class="btn-texto hoy-valorar-saltar">Ahora no</button><button type="button" class="btn-texto hoy-hecha-deshacer">Deshacer</button></div>
        </div>`;
    } else if (siguiente) {
      const asignada = recetaHoy(`${dia}|${siguiente.f.franja}`);
      const hueco = hoyReal ? undefined : vistaSemana.huecoPorSlot.get(`${dia}|${siguiente.f.franja}`);
      // A la vista, solo lo que toca comer y tres botones (Pablo, 08/10): las cifras y los porqués van dentro de la hoja o plegados.
      const nombreComida = NOMBRE[siguiente.f.franja] ?? siguiente.f.franja;
      const partesPlato = asignada ? asignada.receta.nombre.split(' · ') : []; // «Primero: … · Segundo: …» va en una línea por plato
      const accion = (vista, texto) => `<button type="button" class="hoy-accion" data-dia="${dia}" data-franja="${siguiente.f.franja}" data-vista="${vista}" aria-label="${texto}: ${nombreComida.toLowerCase()} de hoy">${texto}</button>`;
      bloqueComida = `
        <div class="hoy-bloque destacado hoy-toca">
          <h3>${tocaAhora ? 'Ahora' : 'Siguiente'} · ${nombreComida} · ${horaDecimalATexto(siguiente.hora)}</h3>
          ${asignada ? `<div class="hoy-plato${partesPlato.length > 1 ? ' hoy-plato-menu' : ''}">${partesPlato.map((p) => `<span>${escaparHtml(p)}</span>`).join(' ')} <span class="etq-ejemplo">EJEMPLO</span></div>
          <div class="hoy-acciones">${accion('receta', 'Receta')}${accion('cantidades', 'Cantidades')}${accion('cambiar', 'Cambiar')}</div>
          <button type="button" class="hoy-hecha" data-franja="${siguiente.f.franja}" aria-label="Ya he comido: ${nombreComida.toLowerCase()} de hoy">Ya he comido</button>`
            : `<div class="error-inline" style="margin:0">Sin receta de ejemplo que encaje${hueco ? `: ${escaparHtml(hueco.motivo)}` : ''}.</div>
          ${botonVerComida(dia, siguiente.f.franja)}`}
        </div>`;
      const resto = conHora.slice(conHora.indexOf(siguiente) + 1).filter((c) => !hechas.includes(c.f.franja));
      if (resto.length) {
        bloqueComida += `<div class="hoy-bloque hoy-despues"><h3>Después</h3>${resto.map((c) => {
          const r = recetaHoy(`${dia}|${c.f.franja}`);
          const n = NOMBRE[c.f.franja] ?? c.f.franja;
          return `<button type="button" class="hoy-fila-comida" data-dia="${dia}" data-franja="${c.f.franja}" data-vista="cantidades" aria-label="Ver ${n.toLowerCase()} de hoy"><span class="hora">${horaDecimalATexto(c.hora)}</span><span class="texto"><strong>${n}</strong>${r ? escaparHtml(r.receta.nombre) : 'Sin receta de ejemplo'}</span></button>`;
        }).join('')}</div>`;
      }
    } else if (conHora.length) {
      bloqueComida = '<div class="hoy-bloque"><h3>Comidas</h3><div class="titulo">Hoy ya no te queda ninguna comida por delante. ¡Buen trabajo!</div></div>';
      // #219 (revisión): de noche se adelanta la primera comida de mañana, con sus botones, para que se pueda mirar y preparar.
      const manana = LETRA_DIA_JS[(ahora.getDay() + 1) % 7];
      const repManana = vistaSemana.repartosPorDia.find((r) => r.dia.dia === manana);
      const horasManana = franjasDelDia(manana);
      const primera = repManana && repManana.reparto.franjas
        .map((f) => ({ f, hora: (horasManana.find((x) => x.franja === f.franja) || {}).hora }))
        .filter((c) => c.hora !== undefined).sort((a, b) => a.hora - b.hora)[0];
      const asignadaM = primera && vistaSemana.recetaPorSlot.get(`${manana}|${primera.f.franja}`);
      if (asignadaM) {
        const nombreM = NOMBRE[primera.f.franja] ?? primera.f.franja;
        const accionM = (vista, texto) => `<button type="button" class="hoy-accion" data-dia="${manana}" data-franja="${primera.f.franja}" data-vista="${vista}" aria-label="${texto}: ${nombreM.toLowerCase()} de mañana">${texto}</button>`;
        const partesM = asignadaM.receta.nombre.split(' · ');
        bloqueComida += `
        <div class="hoy-bloque destacado hoy-toca hoy-manana">
          <h3>Mañana · ${nombreM} · ${horaDecimalATexto(primera.hora)}</h3>
          <div class="hoy-plato${partesM.length > 1 ? ' hoy-plato-menu' : ''}">${partesM.map((x) => `<span>${escaparHtml(x)}</span>`).join(' ')} <span class="etq-ejemplo">EJEMPLO</span></div>
          <div class="hoy-acciones">${accionM('receta', 'Receta')}${accionM('cantidades', 'Cantidades')}${accionM('cambiar', 'Cambiar')}</div>
        </div>`;
      }
    } else {
      bloqueComida = '<div class="hoy-bloque"><h3>Comidas</h3><div class="titulo">Ninguna comida de hoy tiene hora indicada.</div></div>';
    }
    if (sinHora.length && conHora.length) {
      bloqueComida += `<p class="hoy-nota">Sin hora indicada hoy: ${sinHora.map((c) => NOMBRE[c.f.franja]).join(', ')}.</p>`;
    }

    const entrenos = entrenosDelDia(dia);
    // #259 (punto 29): comidas de hoy a la misma hora, muy pegadas o dentro de un entreno: aviso y botón para cambiar la hora.
    const NOMBRE_CHOQUE = { desayuno: 'El desayuno', media_manana: 'La media mañana', comida: 'La comida', merienda: 'La merienda', cena: 'La cena' };
    const choques = Motor.choquesHorario(horas, entrenos.filter((s) => s.horaInicio !== undefined).map((s) => ({ inicio: s.horaInicio, fin: s.horaInicio + s.minutos / 60 })), (f) => NOMBRE_CHOQUE[f] ?? f);
    // #265 I: entreno en ayunas a primera hora: la toma solo se sugiere; con «Me la he tomado», sus kcal salen del resto del día.
    const tomaSug = otraSemana || hoyReal ? undefined : reparto.tomaSugerida;
    const tomada = tomasAyunas.includes(iso);
    const notaToma = !tomada ? `Si la marcas, esas ${tomaSug ? tomaSug.kcal : ''} kcal se quitan del resto del día. Si no, el día sigue igual.`
      : descuentoAyunasHoy && descuentoAyunasHoy.descontado < descuentoAyunasHoy.kcal - 25 ? `Con raciones normales solo se han podido quitar unas ${descuentoAyunasHoy.descontado} kcal del resto del día.`
        : 'Hecho: las comidas de después llevan un poco menos.';
    const bloqueAyunas = tomaSug ? `<div class="hoy-bloque" id="hoy-toma-ayunas"><h3>Antes de entrenar</h3><p style="margin:0 0 0.4rem">Entrenas a las ${escaparHtml(horaDecimalATexto(tomaSug.inicio))} sin comer antes. Si te sienta bien, toma algo ligero 30-60 min antes, por ejemplo ${escaparHtml(Motor.TOMA_AYUNAS.ejemplo)} (unas ${tomaSug.kcal} kcal). Es solo una sugerencia.</p><label class="hoy-check"><input type="checkbox" id="hoy-toma-check"${tomada ? ' checked' : ''}> Me la he tomado</label><p class="hoy-nota" id="hoy-toma-nota">${escaparHtml(notaToma)}</p></div>` : '';
    const avisoHorarioHtml = choques.length ? `<div class="hoy-bloque" id="hoy-choques" role="status"><h3>Revisa el horario de hoy</h3>${choques.map((c) => `<p style="margin:0 0 0.3rem">${escaparHtml(c.texto)}</p>`).join('')}<button type="button" class="btn-secundario" id="hoy-cambiar-hora" data-dia="${dia}">Cambiar la hora</button></div>` : '';
    const compiteHoy = otraSemana ? [] : compiteEseDia(dia);
    const bloqueEntreno = compiteHoy.length ? `<div class="hoy-bloque"><h3>Hoy compites</h3><div class="titulo">${escaparHtml(compiteHoy.map((c) => c.nombre).join(' y '))}: la prueba sustituye al entreno habitual de hoy.</div></div>` // #257.14
      : entrenos.length ? entrenos.map((s) => {
      const nombre = nombreSesion(s);
      let estado = 'hora sin indicar';
      if (s.horaInicio !== undefined) {
        const fin = s.horaInicio + s.minutos / 60;
        estado = horaAct < s.horaInicio ? `hoy a las ${horaDecimalATexto(s.horaInicio)}`
          : horaAct < fin ? `según el horario previsto, ahora (${horaDecimalATexto(s.horaInicio)}-${horaDecimalATexto(fin % 24)})`
            : `su hora prevista (${horaDecimalATexto(s.horaInicio)}) ya pasó; no se registra si la hiciste`;
      }
      return `<div class="hoy-bloque"><h3>Entreno de hoy</h3><div class="titulo">${escaparHtml(nombre)} · ${s.minutos}'${notaSesionHtml(s)}</div><div>${estado}</div></div>`;
    }).join('') : '<div class="hoy-bloque"><h3>Entreno de hoy</h3><div class="titulo">Sin entreno previsto hoy. Descansar también es parte del plan (y de los buenos).</div></div>';

    // Las casillas son cifras del PLAN de hoy (lo que toca), nunca lo comido: la app no registra ingesta.
    const dHoy = hoyReal ? hoyReal.dia : planActual.dias.find((x) => x.dia === dia);
    const casilla = (n, l) => `<div class="casilla"><span class="n">${n}</span><span class="l">${l}</span></div>`;
    const fueraHoy = comidasFuera.filter((x) => x.fecha === iso && comidas.some((c) => c.f.franja === x.franja));
    const previstas = (franja) => comidas.find((c) => c.f.franja === franja).f.kcalAprox;
    const cuadreHoy = vistaSemana.cuadreDias && vistaSemana.cuadreDias.get(dia);
    const desvioHoy = cuadreHoy ? Math.round((cuadreHoy.servido - cuadreHoy.objetivo) / 10) * 10 : 0;
    const notaFuera = !fueraHoy.some((x) => x.kcal !== undefined) ? 'Sin calorías apuntadas, el resto del día no se ajusta.'
      : !cuadreHoy || cuadreHoy.cuadrado ? 'El resto del día está ajustado a la comida fuera, con raciones normales.'
        : `El resto del día se ha ajustado hasta donde dan las raciones normales: hoy te quedas unas ${Math.abs(desvioHoy)} kcal ${desvioHoy > 0 ? 'por encima' : 'por debajo'}. Mañana se sigue con el plan normal.`;
    const bloqueFuera = fueraHoy.length ? `<div class="hoy-bloque hoy-despues"><h3>${fueraHoy.every((x) => x.prevista) ? 'Vas a comer fuera' : 'Has comido fuera'}</h3>${fueraHoy.map((x) => `<button type="button" class="hoy-fila-comida" data-dia="${dia}" data-franja="${x.franja}" data-vista="fuera" aria-label="Editar la comida fuera: ${(NOMBRE[x.franja] ?? x.franja).toLowerCase()}"><span class="texto"><strong>${NOMBRE[x.franja] ?? x.franja}</strong>${escaparHtml(x.texto)}${x.kcal !== undefined ? ` · ~${x.kcal} kcal${x.tipica ? ' (cifra típica)' : ''} (tu plan preveía ~${previstas(x.franja)})` : ''}</span></button>`).join('')}<p class="hoy-nota hoy-nota-fuera">${notaFuera}</p></div>` : '';
    // Lo que no hace falta para saber qué toca se queda plegado; lo que estaba abierto sigue abierto al repintar (cada minuto).
    const abiertos = new Set([...cont.querySelectorAll('details.hoy-mas[open]')].map((x) => x.dataset.mas));
    const mas = (id, titulo, cuerpo) => (cuerpo ? `<details class="hoy-mas" data-mas="${id}"${abiertos.has(id) ? ' open' : ''}><summary>${titulo}</summary>${cuerpo}</details>` : '');
    const numeros = `${dHoy ? `<p class="hoy-tipo">Tipo de día: <span class="dia-tipo" data-tipo="${escaparHtml(dHoy.tipo)}">${escaparHtml(nombreTipoDia(dHoy, hayEntrenoEl(dHoy.dia)))}</span></p>
      <div class="casillas" role="group" aria-label="Cifras del plan de hoy">${casilla(dHoy.kcal, 'kcal')}${casilla(`${dHoy.proteinaG} g`, 'proteína')}${casilla(`${dHoy.hidratoG} g`, 'hidratos')}${casilla(`${dHoy.grasaG} g`, 'grasas')}</div>` : ''}
      ${dHoy && fueraHoy.some((x) => x.kcal !== undefined) && cuadreHoy ? `<p class="hoy-nota" id="hoy-numeros-fuera">Con lo que has comido fuera, hoy suma ~${Math.round(cuadreHoy.servido / 10) * 10} kcal (el plan preveía ${dHoy.kcal}).</p>` : ''}
      <p class="hoy-nota">${escaparHtml(nota)}</p>`; // #258 (punto 13): las cifras de arriba son las del plan; esta línea, lo de hoy con lo comido fuera
    const avisoAlergiaHtml = avisosAlergiasHoy.length ? `<div class="hoy-bloque" id="aviso-alergia-hoy" role="status"><p style="margin:0">${avisosAlergiasHoy[0]}${avisosAlergiasHoy.length > 1 ? ` (y ${avisosAlergiasHoy.length - 1} más en los avisos del plan)` : ''}</p></div>` : '';
    const avisoPabloHtml = avisoPabloHoy ? `<div class="hoy-bloque" id="aviso-plan-pablo" role="status"><p style="margin:0">${avisoPabloHoy}</p></div>` : '';
    const avisoCribadoHtml = (avisoCribadoHoy ? `<div class="hoy-bloque" id="aviso-cribado" role="status"><p style="margin:0">${escaparHtml(avisoCribadoHoy)}</p></div>` : '')
      + (avisoFrenoHoy ? `<div class="hoy-bloque" id="aviso-freno" role="status"><p style="margin:0">${escaparHtml(avisoFrenoHoy)}</p></div>` : '')
      + (esCeliaco() ? `<div class="hoy-bloque" id="aviso-celiaquia" role="status"><p style="margin:0">${escaparHtml(Motor.MENSAJE_CELIAQUIA_HOY)}</p></div>` : '')
      + (diasSuelo.includes(dia) ? `<div class="hoy-bloque aviso-suelo" id="aviso-suelo-hoy" role="status"><p style="margin:0">${escaparHtml(Motor.MENSAJE_SUELO)}</p></div>` : '');
    const finAviso = periodoDieta.inicio ? Motor.avisoFinDeLaDieta(iso, periodoDieta.inicio, periodoDieta.semanas) : undefined;
    const avisoFinHtml = finAviso ? `
      <div class="hoy-bloque" id="aviso-fin-dieta" role="status">
        <p style="margin:0 0 0.4rem"><strong>Tu dieta termina ${finAviso.quedan === 0 ? 'hoy' : `el ${fechaLegible(finAviso.termina, false)}`}.</strong> Prepara ya la siguiente compra.</p>
        <button type="button" class="btn-secundario" id="aviso-fin-compra">Generar próxima lista de la compra</button>
      </div>` : '';
    // #189: una dieta ya terminada no sigue como si nada: se dice en una línea y se ofrece preparar la siguiente.
    const terminada = periodoDieta.inicio && !finAviso ? Motor.avisoDietaTerminada(iso, periodoDieta.inicio, periodoDieta.semanas) : undefined;
    const avisoTerminadaHtml = terminada ? `
      <div class="hoy-bloque" id="aviso-dieta-terminada" role="status">
        <p style="margin:0 0 0.4rem"><strong>Tu dieta terminó el ${fechaLegible(terminada.termino, false)}.</strong> Lo que ves es la última semana: prepara la siguiente.</p>
        <button type="button" class="btn-secundario" id="aviso-fin-compra">Generar próxima lista de la compra</button>
      </div>` : '';
    cont.innerHTML = `
      <p class="antetitulo hoy-fecha">${escaparHtml(fechaTxt)}</p>
      ${avisoAlergiaHtml}
      ${avisoCribadoHtml}
      ${avisoPabloHtml}
      ${avisoFinHtml}${avisoTerminadaHtml}
      ${avisoOtraSemanaHtml}
      ${otraSemana ? '' : previaCompeticionHtml(dia, vistaSemana.compPorDia && vistaSemana.compPorDia.get(dia))}
      ${acuseVolumen && acuseVolumen.fecha === iso ? `<p class="hoy-acuse" role="status">${escaparHtml(acuseVolumen.texto)}</p>` : ''}
      ${bloqueComida}
      ${bloqueAyunas}
      ${avisoHorarioHtml}
      ${medallasHoyHtml(dia, iso)}
      ${bloqueFuera}
      ${bloqueEntreno}
      ${otraSemana ? '' : cardCompeticionHtml(dia)}
      ${mas('numeros', 'Tus números de hoy', numeros)}
      ${mas('agua', 'Agua', '<p class="hoy-nota" id="hoy-agua">' + TEXTO_AGUA + '</p>')}`;
    const cambiarHora = document.getElementById('hoy-cambiar-hora');
    if (cambiarHora) cambiarHora.addEventListener('click', () => { // abre el horario de este día en Semana › Plan
      const d = cambiarHora.dataset.dia;
      diasHorarioAbiertos.add(d);
      mostrarPanel('semana');
      document.querySelector('#panel-calendario .sub-plan')?.click();
      mostrarResultado(semanaActual, planActual, respuestasActuales, franjasActuales);
      const panel = document.getElementById(`panel-horario-${d}`);
      if (!panel) return;
      // La tarjeta del día puede estar plegada (en el móvil lo está): se despliega para que el horario se vea.
      document.querySelectorAll('#r-dias .dia-toggle').forEach((t) => { const c = document.getElementById(t.getAttribute('aria-controls')); if (c && c.contains(panel) && t.getAttribute('aria-expanded') !== 'true') t.click(); });
      const visible = document.getElementById(`panel-horario-${d}`);
      for (let det = visible && visible.closest('details'); det; det = det.parentElement && det.parentElement.closest('details')) det.open = true; // «Más opciones de este día»
      if (visible) { visible.scrollIntoView({ block: 'center' }); const campo = visible.querySelector('.hor-campo'); if (campo) campo.focus(); }
    });
    const checkToma = document.getElementById('hoy-toma-check');
    if (checkToma) checkToma.addEventListener('change', () => { // #265 I
      tomasAyunas = tomasAyunas.filter((x) => x !== iso).concat(checkToma.checked ? [iso] : []).slice(-30);
      try { localStorage.setItem(CLAVE_AYUNAS, JSON.stringify(tomasAyunas)); } catch { falloAlmacenamiento(); }
      mostrarResultado(semanaActual, planActual, respuestasActuales, franjasActuales); // el resto del día se regula
      pintarHoy();
      document.getElementById('hoy-toma-check')?.focus();
    });
    const volverSemana = document.getElementById('hoy-volver-semana');
    if (volverSemana) volverSemana.addEventListener('click', () => document.getElementById('cal-lunes-actual').click());
    const btnFin = document.getElementById('aviso-fin-compra');
    if (btnFin) btnFin.addEventListener('click', () => { proxima.abierta = true; renderizarListaCompra(); mostrarPanel('compra'); });
  }
  setInterval(() => { if (panelActual === 'hoy' && !document.getElementById('resultado').hidden) pintarHoy(); }, 60000);
  // #253: medallas del día y resumen de la semana, sin rachas. Salen solas de «Ya he comido» y «He comido fuera»; con un freno
  // (cribado de forma de comer o conductas compensatorias, freno de bajo peso, suelo de kcal) no sale nada. Se pueden ocultar en Perfil.
  const CLAVE_MEDALLAS_OCULTAS = 'app-dietas-medallas-ocultas';
  let medallasOcultas = false;
  try { medallasOcultas = localStorage.getItem(CLAVE_MEDALLAS_OCULTAS) === '1'; } catch { /* sin almacenamiento: se enseñan */ }
  let medallasAntes = null; // { iso, m }: para el aviso breve solo cuando se consigue una nueva
  let avisoMedallaTimer = null;
  const SVG_MEDALLA = '<svg viewBox="0 0 28 28" aria-hidden="true" focusable="false"><circle cx="14" cy="14" r="11.5"/><path d="M9 14.5l3.2 3.2L19 11"/></svg>';
  function planLogros() {
    const p = {};
    for (const { dia: d, reparto } of vistaSemana.repartosPorDia) {
      const dPlan = planActual.dias.find((x) => x.dia === d.dia) || d;
      p[d.dia] = {
        franjas: reparto.franjas.map((f) => { const a = vistaSemana.recetaPorSlot.get(`${d.dia}|${f.franja}`); return { franja: f.franja, proteina: a ? (Number(a.receta.proteina) || 0) * (a.racionAjustada || 1) : 0 }; }),
        proteinaObjetivo: Number(dPlan.proteinaG) || 0,
      };
    }
    return p;
  }
  function logrosActivos() { return Boolean(vistaSemana && planActual) && !Motor.frenoLogros(leerAlertas(), diasSuelo.length > 0); }
  function medallasHoyHtml(dia, iso) {
    const tarjeta = document.getElementById('tarjeta-medallas');
    const activos = logrosActivos();
    if (tarjeta) tarjeta.hidden = !activos;
    const filaMenu = document.querySelector('#perfil-menu [data-ir="medallas"]');
    if (filaMenu) filaMenu.hidden = !activos;
    if (!activos) { medallasAntes = null; pintarMedallasPerfil(); return ''; }
    const plan = planLogros();
    const apuntado = Motor.apuntadoPorDia(comidasHechas, comidasFuera.filter((x) => !x.prevista));
    const m = Motor.medallasDia(plan[dia], apuntado.get(iso));
    const nuevas = medallasAntes && medallasAntes.iso === iso ? Motor.medallasNuevas(medallasAntes.m, m) : [];
    medallasAntes = { iso, m };
    pintarMedallasPerfil(plan, apuntado, iso);
    if (medallasOcultas) return '';
    if (nuevas.length) avisoMedalla(Motor.TEXTOS_LOGROS.aviso[nuevas[0]]);
    const T = Motor.TEXTOS_LOGROS;
    const fila = ['completo', 'proteina', 'sincera'].map((k) => `<div class="medalla${m[k] ? ' conseguida' : ''}" data-medalla="${k}" title="${escaparHtml(T.explica[k])}">${SVG_MEDALLA}<span>${escaparHtml(T.nombre[k])}</span><span class="sr-solo">${m[k] ? ': conseguida' : ': todavía no'}</span></div>`).join('');
    // El domingo, el resumen de la semana también en Hoy.
    const domingo = new Date(`${iso}T12:00:00`).getDay() === 0;
    const r = domingo ? Motor.resumenSemana(plan, apuntado, Motor.lunesDe(iso), iso) : undefined;
    return `<div class="hoy-medallas" role="group" aria-label="Medallas de hoy">${fila}</div>${r ? `<p class="hoy-semana" id="hoy-semana">Esta semana: ${escaparHtml(r.texto)}. <strong>${escaparHtml(r.redonda ? T.semanaRedonda : T.animo)}</strong></p>` : ''}`;
  }
  function avisoMedalla(texto) {
    const a = document.getElementById('medallas-aviso');
    a.textContent = texto;
    a.hidden = false;
    clearTimeout(avisoMedallaTimer);
    avisoMedallaTimer = setTimeout(() => { a.hidden = true; }, 2600);
  }
  function pintarMedallasPerfil(plan, apuntado, iso) {
    const cont = document.getElementById('medallas-perfil');
    const ver = document.getElementById('medallas-ver');
    if (!cont || !ver) return;
    ver.checked = !medallasOcultas;
    if (!plan || medallasOcultas) { cont.innerHTML = medallasOcultas ? '<p class="subt">Ocultas. Marca la casilla para volver a verlas.</p>' : ''; return; }
    const T = Motor.TEXTOS_LOGROS;
    const semanas = Motor.resumenCincoSemanas(plan, apuntado, iso);
    const fecha = (l) => `${Number(l.slice(8, 10))}/${Number(l.slice(5, 7))}`;
    cont.innerHTML = `<ul class="medallas-semanas" id="medallas-semanas">${semanas.map((s, i) => `<li><strong>${i === 0 ? 'Esta semana' : `Semana del ${fecha(s.lunes)}`}</strong>: ${s.resumen ? `${escaparHtml(s.resumen.texto)}${s.resumen.redonda ? ` · <strong>${escaparHtml(T.semanaRedonda)}</strong>` : ''}` : escaparHtml(T.sinRegistro)}</li>`).join('')}</ul>
      <p class="subt">${escaparHtml(T.animo)} Las medallas salen solas de «Ya he comido» y «He comido fuera». Cada día cuenta por sí solo.</p>`;
  }
  document.getElementById('medallas-ver').addEventListener('change', (e) => {
    medallasOcultas = !e.target.checked;
    try { if (medallasOcultas) localStorage.setItem(CLAVE_MEDALLAS_OCULTAS, '1'); else localStorage.removeItem(CLAVE_MEDALLAS_OCULTAS); } catch { falloAlmacenamiento(); }
    pintarHoy();
  });

  // --- Issue #74: catálogo de recetas de EJEMPLO. Fuente única: RECETAS_EJEMPLO (la misma del plan). Explorar no
  // toca la semana; las restricciones del perfil se aplican siempre y nunca se relajan por quedarse sin resultados. ---
  // --- Lista negra: alimentos que la persona no quiere comer (gustos, no alergias). Se guarda aparte del perfil y se suma a «evitas»
  // del cuestionario al filtrar las recetas. ---
  const CLAVE_LISTA_NEGRA = 'app-dietas-lista-negra';
  let listaNegra = [];
  try {
    const guardada = JSON.parse(localStorage.getItem(CLAVE_LISTA_NEGRA) || 'null');
    if (Array.isArray(guardada)) listaNegra = guardada.filter((x) => typeof x === 'string' && x.trim()).map((x) => x.trim().slice(0, 40)).slice(0, 60);
  } catch { /* sin almacenamiento o dato corrupto: lista vacía */ }
  function guardarListaNegra() { try { localStorage.setItem(CLAVE_LISTA_NEGRA, JSON.stringify(listaNegra)); } catch { falloAlmacenamiento(); } }
  // Una sola lista: lo que se escribe en «no me voy a comer» del cuestionario y la lista negra de Perfil son lo mismo (issue #117).
  const partirAlimentos = (t) => String(t || '').split(/[,;]| y /i).map((x) => x.trim().slice(0, 40)).filter(Boolean);
  const sinRepetidos = (items) => items.filter((x, i) => items.findIndex((y) => Motor.raizAlimento(y) === Motor.raizAlimento(x)) === i);
  function fusionarEnListaNegra(items) {
    listaNegra = sinRepetidos(listaNegra.concat(items)).slice(0, 60);
    guardarListaNegra();
    pintarListaNegra();
  }
  document.getElementById('pref-evitas').addEventListener('change', (ev) => {
    listaNegra = sinRepetidos(partirAlimentos(ev.target.value)).slice(0, 60);
    cambioListaNegra();
  });
  function pintarListaNegra() {
    document.getElementById('pref-evitas').value = listaNegra.join(', ');
    document.getElementById('ln-lista').innerHTML = listaNegra.map((x, i) => `<li>${escaparHtml(x)}<button type="button" data-i="${i}" aria-label="Quitar de la lista negra: ${escaparHtml(x)}">✕</button></li>`).join('');
    document.getElementById('ln-vacio').hidden = listaNegra.length > 0;
    document.querySelectorAll('#ln-lista button').forEach((b) => b.addEventListener('click', () => {
      listaNegra.splice(Number(b.dataset.i), 1);
      cambioListaNegra();
    }));
  }
  function cambioListaNegra() {
    guardarListaNegra();
    pintarListaNegra();
    if (vistaSemana && planActual) mostrarResultado(semanaActual, planActual, respuestasActuales, franjasActuales); // las recetas se recalculan con la lista nueva
  }
  function anadirListaNegra() {
    const campo = document.getElementById('ln-nuevo');
    const nuevos = sinRepetidos(campo.value.split(',').map((x) => x.trim().slice(0, 40)).filter(Boolean))
      .filter((x) => !listaNegra.some((y) => Motor.raizAlimento(y) === Motor.raizAlimento(x)));
    if (!nuevos.length) { campo.value = ''; return; }
    listaNegra = listaNegra.concat(nuevos).slice(0, 60);
    campo.value = '';
    cambioListaNegra();
    campo.focus();
  }
  document.getElementById('ln-anadir').addEventListener('click', anadirListaNegra);
  document.getElementById('ln-nuevo').addEventListener('keydown', (ev) => { if (ev.key === 'Enter') { ev.preventDefault(); anadirListaNegra(); } });
  pintarListaNegra();

  // --- Issue #128: «mis recetas sí o sí». Se guardan en este navegador y se mantienen semana tras semana hasta quitarlas. ---
  const CLAVE_SI_O_SI = 'app-dietas-recetas-si-o-si';
  const NOMBRE_FRANJA_SOS = { desayuno: 'desayuno', media_manana: 'media mañana', comida: 'comida', merienda: 'merienda', cena: 'cena' };
  let recetasSiOSi = []; // [{ id, veces, franja }]
  let estadosSiOSi = []; // lo que dijo el último reparto: cuántas colocó y, si no pudo, por qué
  try {
    const guardadas = JSON.parse(localStorage.getItem(CLAVE_SI_O_SI) || 'null');
    if (Array.isArray(guardadas)) {
      recetasSiOSi = guardadas.filter((x) => x && typeof x.id === 'string' && RECETAS_EJEMPLO.some((r) => r.id === x.id) && !Motor.validarPeticionSiOSi(x.franja, Number(x.veces)))
        .map((x) => ({ id: x.id, veces: Number(x.veces), franja: x.franja }));
    }
  } catch { /* sin almacenamiento o dato corrupto: ninguna */ }
  function guardarSiOSi() { try { localStorage.setItem(CLAVE_SI_O_SI, JSON.stringify(recetasSiOSi)); } catch { falloAlmacenamiento(); } }
  function opcionesVeces(franja, actual) {
    const max = franja === 'comida' || franja === 'cena' ? 2 : 7;
    return Array.from({ length: max }, (_, i) => i + 1).map((n) => `<option value="${n}" ${n === actual ? 'selected' : ''}>${n} ${n === 1 ? 'vez' : 'veces'} por semana</option>`).join('');
  }
  function cambioSiOSi() {
    guardarSiOSi();
    if (vistaSemana && planActual) mostrarResultado(semanaActual, planActual, respuestasActuales, franjasActuales); // el reparto se rehace con la nueva petición (y repinta la lista)
    else pintarListaSiOSi();
  }
  function pintarListaSiOSi() {
    const ul = document.getElementById('sos-lista');
    if (!ul) return;
    ul.innerHTML = recetasSiOSi.map((p, i) => {
      const r = RECETAS_EJEMPLO.find((x) => x.id === p.id);
      const e = estadosSiOSi.find((x) => x.id === p.id && x.franja === p.franja);
      const estado = e ? (e.causa ? `<br><span class="error-inline" style="margin:0">⚠️ No se ha forzado: ${escaparHtml(e.causa)}. Puedes probar otro día o quitarla.</span>` : `<br><span style="color:var(--gris)">✅ Colocada ${e.colocadas} de ${e.pedidas}.</span>`) : '';
      return `<li class="comp-item"><span><strong>${escaparHtml(r.nombre)}</strong> · ${NOMBRE_FRANJA_SOS[p.franja]}${estado}</span>
        <span class="acciones"><select class="sos-editar" data-i="${i}" aria-label="Veces por semana de ${escaparHtml(r.nombre)}">${opcionesVeces(p.franja, p.veces)}</select>
        <button type="button" class="btn-texto sos-quitar" data-i="${i}" style="color:var(--peligro)" aria-label="Quitar ${escaparHtml(r.nombre)} de mis recetas sí o sí">Quitar</button></span></li>`;
    }).join('');
    document.getElementById('sos-vacio').hidden = recetasSiOSi.length > 0;
  }
  document.getElementById('sos-lista').addEventListener('change', (ev) => {
    const s = ev.target.closest('.sos-editar');
    if (!s) return;
    const p = recetasSiOSi[Number(s.dataset.i)];
    if (p && !Motor.validarPeticionSiOSi(p.franja, Number(s.value))) { p.veces = Number(s.value); cambioSiOSi(); }
  });
  document.getElementById('sos-lista').addEventListener('click', (ev) => {
    const b = ev.target.closest('.sos-quitar');
    if (!b) return;
    recetasSiOSi.splice(Number(b.dataset.i), 1);
    cambioSiOSi();
  });
  pintarListaSiOSi();
  /** Bloque «La quiero sí o sí» de la ficha de una receta (solo platos únicos: primero, segundo y postre van dentro de una comida). */
  function bloqueSiOSiHtml(r) {
    if (r.tipoPlato && r.tipoPlato !== 'unico') return '';
    const ya = recetasSiOSi.find((p) => p.id === r.id);
    const franja = ya ? ya.franja : r.franjas[0];
    return `
      <h3>Recetas «sí o sí»</h3>
      <p class="subt" style="margin:0 0 0.5rem">Si la quieres sí o sí, saldrá en tu semana las veces que elijas (en comidas y cenas, 1 o 2 como máximo; en desayunos, medias mañanas y meriendas, hasta 7) y se mantendrá cada semana hasta que la quites. Si choca con una alergia, tu lista negra o los topes, no se fuerza y se te avisa.</p>
      <div class="campo"><label for="sos-franja">Comida</label><select id="sos-franja">${r.franjas.map((f) => `<option value="${f}" ${f === franja ? 'selected' : ''}>${NOMBRE_FRANJA_SOS[f]}</option>`).join('')}</select></div>
      <div class="campo"><label for="sos-veces">Veces por semana</label><select id="sos-veces">${opcionesVeces(franja, ya ? ya.veces : 1)}</select></div>
      <button type="button" class="btn-principal" id="sos-guardar" data-id="${r.id}">${ya ? 'Guardar cambios' : 'La quiero sí o sí'}</button>
      ${ya ? `<button type="button" class="btn-texto" id="sos-quitar-ficha" data-id="${r.id}" style="color:var(--peligro)">Quitar de mis «sí o sí»</button>` : ''}`;
  }
  document.getElementById('dc-cuerpo').addEventListener('change', (ev) => {
    if (ev.target.id === 'sos-franja') document.getElementById('sos-veces').innerHTML = opcionesVeces(ev.target.value, 1);
  });
  document.getElementById('dc-cuerpo').addEventListener('click', (ev) => {
    const g = ev.target.closest('#sos-guardar');
    const q = ev.target.closest('#sos-quitar-ficha');
    if (!g && !q) return;
    const id = (g || q).dataset.id;
    recetasSiOSi = recetasSiOSi.filter((p) => p.id !== id);
    if (g) recetasSiOSi.push({ id, franja: document.getElementById('sos-franja').value, veces: Number(document.getElementById('sos-veces').value) });
    cambioSiOSi();
    const r = RECETAS_EJEMPLO.find((x) => x.id === id);
    if (r) abrirDetalleReceta(id);
  });

  // --- Issue #129: «mi semana fija». Lo fijado se repite cada semana en su día y franja; solo se recalcula su ración. ---
  const CLAVE_FIJA = 'app-dietas-semana-fija';
  let semanaFija = new Map(); // 'dia|franja' -> id de receta (o «id1+id2» si es una comida compuesta)
  let historialFija = [];     // estados anteriores, para deshacer
  let estadosFija = [];       // lo que dijo el último reparto
  try {
    const g = JSON.parse(localStorage.getItem(CLAVE_FIJA) || 'null');
    if (g && typeof g === 'object') semanaFija = new Map(Object.entries(g).filter(([k, v]) => /^[LMXJVSD]\|(desayuno|media_manana|comida|merienda|cena)$/.test(k) && typeof v === 'string'));
  } catch { /* sin almacenamiento o dato corrupto: nada fijado */ }
  function guardarFija() { try { localStorage.setItem(CLAVE_FIJA, JSON.stringify(Object.fromEntries(semanaFija))); } catch { falloAlmacenamiento(); } }
  function cambiarFija(fn) {
    historialFija.push(new Map(semanaFija));
    historialFija = historialFija.slice(-20);
    fn();
    guardarFija();
    if (vistaSemana && planActual) mostrarResultado(semanaActual, planActual, respuestasActuales, franjasActuales);
  }
  function pintarFija() {
    const caja = document.getElementById('r-fija');
    if (!caja) return;
    // Issue #142: cuando una fijación no es viable, la app ya ha puesto otra receta compatible; aquí se dice cuál y se ofrecen otras para elegir.
    const opcionesNoViable = (e) => {
      if (e.ok || !vistaSemana) return '';
      const clave = `${e.dia}|${e.franja}`;
      const slot = vistaSemana.slots.find((x) => x.dia === e.dia && x.franja === e.franja);
      if (!slot) return '';
      const puesta = vistaSemana.asignaciones.find((a) => `${a.dia}|${a.franja}` === clave);
      const nombrePuesta = puesta ? (Motor.recetaDeId(new Map(RECETAS_EJEMPLO.map((r) => [r.id, r])), puesta.receta) || {}).nombre : undefined;
      const { alternativas } = Motor.alternativasParaSlot(slot, RECETAS_EJEMPLO, { alergiasPreferencias: restriccionesActuales ?? undefined, actual: puesta ? puesta.receta : undefined, usosSemana: Motor.usosVariedadSemana(vistaSemana.asignaciones, clave) });
      const botones = alternativas.slice(0, 3).map((a) => `<button type="button" class="btn-secundario fija-elegir" data-dia="${e.dia}" data-franja="${e.franja}" data-id="${a.receta.id}">Fijar «${escaparHtml(a.receta.nombre)}» (~${a.kcalResultante} kcal)</button>`).join(' ');
      return `<br><span>${nombrePuesta ? `Hemos puesto «${escaparHtml(nombrePuesta)}» en su lugar. ` : 'No hay ninguna receta compatible para esta comida. '}${botones ? 'Otras opciones:' : ''}</span> ${botones}`;
    };
    const lineas = estadosFija.filter((e) => !e.ok || e.causa || e.aviso).map((e) =>
      `<li>${e.ok ? '⚠️' : '⛔'} <strong>${escaparHtml(e.dia)} · ${NOMBRE_FRANJA_SOS[e.franja]}</strong> · ${escaparHtml(e.nombre)}: ${escaparHtml(e.causa ?? e.aviso ?? '')}${opcionesNoViable(e)}${e.arreglo ? ` <span style="color:var(--gris)">${escaparHtml(e.arreglo)}</span>` : ''}${e.aviso && e.causa ? ` <span style="color:var(--gris)">${escaparHtml(e.aviso)}</span>` : ''}</li>`).join('');
    caja.innerHTML = `
      <div class="acciones-rapidas" style="margin:0 0 0.5rem">
        <button type="button" class="btn-secundario" id="fija-toda">Fijar toda la semana</button>
        <button type="button" class="btn-texto" id="fija-quitar" ${semanaFija.size ? '' : 'disabled'}>Quitar todas las fijaciones (${semanaFija.size})</button>
        <button type="button" class="btn-texto" id="fija-deshacer" ${historialFija.length ? '' : 'disabled'}>Deshacer</button>
      </div>
      ${lineas ? `<details class="plegable" open><summary>Tu semana fija: avisos</summary><ul class="resumen-lista">${lineas}</ul></details>` : ''}`;
  }
  document.addEventListener('click', (ev) => {
    const b = ev.target.closest && ev.target.closest('.fijar-btn, .fija-elegir, #fija-toda, #fija-quitar, #fija-deshacer');
    if (!b || !planActual) return;
    if (b.id === 'fija-deshacer') {
      if (!historialFija.length) return;
      semanaFija = historialFija.pop();
      guardarFija();
      mostrarResultado(semanaActual, planActual, respuestasActuales, franjasActuales);
    } else if (b.id === 'fija-quitar') cambiarFija(() => semanaFija.clear());
    else if (b.classList.contains('fija-elegir')) cambiarFija(() => semanaFija.set(`${b.dataset.dia}|${b.dataset.franja}`, b.dataset.id)); // elegir una de las opciones: queda fijada esa receta
    else if (b.id === 'fija-toda') {
      cambiarFija(() => { for (const a of asignacionSemanaActual.asignaciones) semanaFija.set(`${a.dia}|${a.franja}`, a.receta); });
    } else {
      const k = `${b.dataset.dia}|${b.dataset.franja}`;
      cambiarFija(() => { if (semanaFija.has(k)) semanaFija.delete(k); else { const a = asignacionSemanaActual.asignaciones.find((x) => `${x.dia}|${x.franja}` === k); if (a) semanaFija.set(k, a.receta); } });
    }
  });

  // --- Issue #133: «¿qué tal de cantidad?». Las valoraciones mueven un nivel de volumen por tipo de comida; las kcal y los macros no
  // cambian nunca: solo se proponen platos más concentrados o más abundantes. Se guarda en este navegador. ---
  const CLAVE_VOLUMEN = 'app-dietas-volumen';
  let valoraciones = [];   // [{ fecha: 'YYYY-MM-DD', franja, valor: 'mucha' | 'bien' | 'hambre' }]
  let nivelManual = {};    // ajuste a mano desde Perfil: { desayuno?, principal?, pequena? }
  try {
    const g = JSON.parse(localStorage.getItem(CLAVE_VOLUMEN) || 'null');
    if (g && Array.isArray(g.valoraciones)) valoraciones = g.valoraciones.filter((v) => v && /^\d{4}-\d{2}-\d{2}$/.test(v.fecha) && NOMBRE_FRANJA_SOS[v.franja] && ['mucha', 'bien', 'hambre'].includes(v.valor)).slice(-200);
    if (g && g.manual && typeof g.manual === 'object') for (const k of ['desayuno', 'principal', 'pequena']) if (Number.isInteger(g.manual[k]) && Math.abs(g.manual[k]) <= 2) nivelManual[k] = g.manual[k];
  } catch { /* sin almacenamiento o dato corrupto: sin valoraciones */ }
  function guardarVolumen() { try { localStorage.setItem(CLAVE_VOLUMEN, JSON.stringify({ valoraciones, manual: nivelManual })); } catch { falloAlmacenamiento(); } }
  const nivelesVolumen = () => Motor.calcularNiveles(valoraciones, nivelManual);
  const NOMBRE_GRUPO_VOL = { desayuno: 'Desayuno', principal: 'Comida y cena', pequena: 'Media mañana y merienda' };
  function cambioVolumen() {
    guardarVolumen();
    if (vistaSemana && planActual) mostrarResultado(semanaActual, planActual, respuestasActuales, franjasActuales); // el reparto se rehace con el nuevo nivel
    pintarVolumenPerfil();
    if (panelActual === 'hoy') pintarHoy();
  }
  /** Tres botones tras marcar una comida como hecha en «Hoy». Al contestar, «Hoy» pasa a la siguiente comida. */
  function botonesVolumenHtml(iso, f) {
    const actual = (valoraciones.find((v) => v.fecha === iso && v.franja === f) || {}).valor;
    const b = (valor, texto) => `<button type="button" class="btn-secundario vol-btn" data-franja="${f}" data-valor="${valor}" aria-pressed="${actual === valor}">${texto}</button>`;
    return `${b('mucha', 'Mucha comida')}${b('bien', 'Bien de cantidad')}${b('hambre', 'Me he quedado con hambre')}`;
  }
  // Comidas marcadas como hechas hoy (Pablo, 08/10): «Hoy» pasa a la siguiente cuando la persona lo dice. Solo se guarda el día
  // en curso y solo sirve para eso: no es un registro de lo comido ni cambia el plan. Desde #251, los 14 días anteriores se
  // guardan en `dias` (solo las franjas marcadas) para que Pablo vea en el centro las comidas hechas de la semana. Desde #253, 42 días:
  // las medallas enseñan esta semana y las 4 anteriores.
  const CLAVE_HECHAS = 'app-dietas-comidas-hechas';
  let comidasHechas = { fecha: '', franjas: [], dias: {} };
  try {
    const g = JSON.parse(localStorage.getItem(CLAVE_HECHAS) || 'null');
    if (g && typeof g.fecha === 'string' && Array.isArray(g.franjas)) {
      const dias = {};
      if (g.dias && typeof g.dias === 'object') for (const [d, l] of Object.entries(g.dias)) if (/^\d{4}-\d{2}-\d{2}$/.test(d) && Array.isArray(l)) dias[d] = l.filter((x) => typeof x === 'string').slice(0, 8);
      comidasHechas = { fecha: g.fecha, franjas: g.franjas.filter((x) => typeof x === 'string').slice(0, 8), dias };
    }
  } catch { /* sin almacenamiento o dato corrupto: ninguna marcada */ }
  function hechasDe(iso) {
    if (comidasHechas.fecha !== iso) {
      const dias = { ...comidasHechas.dias };
      if (comidasHechas.fecha && comidasHechas.franjas.length) dias[comidasHechas.fecha] = comidasHechas.franjas;
      const limite = Motor.fechaLocalISO(new Date(new Date(`${iso}T12:00:00`).getTime() - 42 * 864e5));
      for (const d of Object.keys(dias)) if (d < limite || d >= iso) delete dias[d];
      comidasHechas = { fecha: iso, franjas: [], dias };
    }
    return comidasHechas.franjas;
  }
  let porValorar = null; // { fecha, franja }: comida recién marcada como hecha, a la espera de «¿qué tal de cantidad?»
  // Comidas hechas fuera de casa (Pablo, 08/10): se apunta qué se comió y, si se saben, las kcal, para compararlas con lo que
  // preveía el plan. Con kcal apuntadas, el resto de ese día se regula (ver el cuadre en mostrarResultado). Se guardan las 30
  // últimas, solo en este navegador.
  const CLAVE_FUERA = 'app-dietas-comidas-fuera';
  let comidasFuera = []; // [{ fecha: 'YYYY-MM-DD', franja, texto, kcal?, prevista?, tipica?, fuente? }] (#265 H: prevista = «Voy a comer fuera»)
  try {
    const g = JSON.parse(localStorage.getItem(CLAVE_FUERA) || 'null');
    if (Array.isArray(g)) {
      comidasFuera = g.filter((x) => x && typeof x.fecha === 'string' && typeof x.franja === 'string' && typeof x.texto === 'string')
        .map((x) => ({ fecha: x.fecha, franja: x.franja, texto: x.texto.slice(0, 80), ...(Number.isFinite(x.kcal) ? { kcal: Math.round(x.kcal) } : {}), ...(x.prevista === true ? { prevista: true } : {}), ...(x.tipica === true && typeof x.fuente === 'string' ? { tipica: true, fuente: x.fuente.slice(0, 300) } : {}) })).slice(-30);
    }
  } catch { /* sin almacenamiento o dato corrupto: ninguna */ }
  // #265 I (Pablo, 20/10: «Solo sugerencia… si no marca se entiende que no se la ha comido»): los días en que la persona marcó
  // «Me la he tomado» (la toma ligera antes de entrenar en ayunas). Solo cuenta la de hoy; se guardan las 30 últimas, en este navegador.
  const CLAVE_AYUNAS = 'app-dietas-toma-ayunas';
  let tomasAyunas = []; // ['YYYY-MM-DD', …]
  try {
    const g = JSON.parse(localStorage.getItem(CLAVE_AYUNAS) || 'null');
    if (Array.isArray(g)) tomasAyunas = g.filter((x) => typeof x === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(x)).slice(-30);
  } catch { /* sin almacenamiento o dato corrupto: ninguna */ }
  let descuentoAyunasHoy = null; // { kcal, descontado } tras el último cálculo, para la nota de Hoy
  // #265 H: la fecha de cada día de la semana del plan, desde hoy (hoy, o el próximo de los 6 siguientes con esa letra).
  function fechaProximaDe(dia) {
    const d = new Date();
    for (let i = 0; i < 7; i++, d.setDate(d.getDate() + 1)) if (LETRA_DIA_JS[d.getDay()] === dia) return Motor.fechaLocalISO(d);
    return Motor.fechaLocalISO(new Date());
  }
  document.addEventListener('click', (ev) => {
    const b = ev.target.closest && ev.target.closest('.hoy-hecha, .hoy-valorar-saltar, .hoy-hecha-deshacer');
    if (!b) return;
    const iso = Motor.fechaLocalISO(new Date());
    const hechas = hechasDe(iso);
    if (b.classList.contains('hoy-hecha')) {
      if (!hechas.includes(b.dataset.franja)) hechas.push(b.dataset.franja);
      porValorar = { fecha: iso, franja: b.dataset.franja };
      acuseVolumen = null;
    } else {
      if (b.classList.contains('hoy-hecha-deshacer') && porValorar) comidasHechas.franjas = hechas.filter((f) => f !== porValorar.franja);
      porValorar = null;
    }
    try { localStorage.setItem(CLAVE_HECHAS, JSON.stringify(comidasHechas)); } catch { falloAlmacenamiento(); }
    pintarHoy();
    const foco = document.querySelector('#hoy-ahora .hoy-valores .vol-btn, #hoy-ahora .hoy-accion');
    if (foco) foco.focus();
  });
  document.addEventListener('click', (ev) => {
    const b = ev.target.closest && ev.target.closest('.vol-btn');
    if (!b) return;
    const ahora = new Date();
    const iso = Motor.fechaLocalISO(ahora);
    const yaIgual = valoraciones.find((v) => v.fecha === iso && v.franja === b.dataset.franja && v.valor === b.dataset.valor);
    const g = Motor.grupoDeFranja(b.dataset.franja);
    const antes = nivelesVolumen()[g];
    valoraciones = valoraciones.filter((v) => !(v.fecha === iso && v.franja === b.dataset.franja));
    if (!yaIgual) valoraciones.push({ fecha: iso, franja: b.dataset.franja, valor: b.dataset.valor });
    // #265 G (punto 35): acuse visible y, a la 3.ª «hambre» de la semana (lunes a domingo), alerta para Pablo no prioritaria.
    const alerta = !yaIgual && b.dataset.valor === 'hambre' ? Motor.alertaHambre(valoraciones, iso, ahora.toISOString(), leerAlertas()) : undefined;
    if (alerta) { guardarAlertas(Motor.anadirAlerta(leerAlertas(), alerta)); pintarAlertas(); }
    acuseVolumen = yaIgual ? null : { fecha: iso, texto: Motor.acuseValoracion(b.dataset.valor, antes, nivelesVolumen()[g], nivelManual[g] !== undefined, Boolean(alerta)) };
    porValorar = null;
    cambioVolumen();
  });
  function pintarVolumenPerfil() {
    const caja = document.getElementById('volumen-perfil');
    if (!caja) return;
    const niv = nivelesVolumen();
    // Se pinta también al cargar la página, cuando todavía no hay plan (y semanaActual aún no existe): sin plan no hay déficit que avisar.
    // El objetivo se lee del perfil ya calculado (perder_grasa, recomposicion…), no del texto del cuestionario («perder grasa»).
    const enDeficit = (() => { try { return !!semanaActual && ['perder_grasa', 'recomposicion'].includes(semanaActual.perfil.objetivo ?? 'perder_grasa'); } catch { return false; } })();
    const avisos = Motor.avisosVolumen(valoraciones, niv, enDeficit, Motor.fechaLocalISO(new Date()));
    caja.innerHTML = ['desayuno', 'principal', 'pequena'].map((g) => `
      <div class="comp-item"><span><strong>${NOMBRE_GRUPO_VOL[g]}</strong> · nivel ${niv[g] > 0 ? '+' : ''}${niv[g]}${nivelManual[g] !== undefined ? ' (a mano)' : ''}<br><span style="color:var(--gris)">${escaparHtml(Motor.TEXTO_NIVEL(niv[g]))}</span></span>
        <span class="acciones"><button type="button" class="btn-secundario vol-nivel" data-g="${g}" data-d="-1" aria-label="Más concentrado: ${NOMBRE_GRUPO_VOL[g]}" ${niv[g] <= -2 ? 'disabled' : ''}>−</button>
        <button type="button" class="btn-secundario vol-nivel" data-g="${g}" data-d="1" aria-label="Más abundante: ${NOMBRE_GRUPO_VOL[g]}" ${niv[g] >= 2 ? 'disabled' : ''}>+</button>
        ${nivelManual[g] !== undefined ? `<button type="button" class="btn-texto vol-auto" data-g="${g}">Automático</button>` : ''}</span></div>`).join('')
      + avisos.map((a) => `<p class="error-inline">⚠️ ${escaparHtml(a)}</p>`).join('');
  }
  document.addEventListener('click', (ev) => {
    const n = ev.target.closest && ev.target.closest('.vol-nivel');
    const a = ev.target.closest && ev.target.closest('.vol-auto');
    if (!n && !a) return;
    if (a) delete nivelManual[a.dataset.g];
    else nivelManual[n.dataset.g] = Math.max(-2, Math.min(2, nivelesVolumen()[n.dataset.g] + Number(n.dataset.d)));
    cambioVolumen();
  });
  pintarVolumenPerfil();

  const CLAVE_FAVORITAS = 'app-dietas-recetas-favoritas';
  let restriccionesActuales = null;
  let favoritasRecetas = [];
  try { favoritasRecetas = Motor.favoritasValidas(JSON.parse(localStorage.getItem(CLAVE_FAVORITAS) || 'null'), RECETAS_EJEMPLO); } catch { /* sin almacenamiento o dato corrupto: sin favoritas */ }
  function guardarFavoritas() { try { localStorage.setItem(CLAVE_FAVORITAS, JSON.stringify(favoritasRecetas)); } catch { falloAlmacenamiento(); /* solo dura esta sesión */ } }

  // --- #261 C (idea de Pablo del 19/10, decidida el 20/10): «Mis gustos» en Perfil, opcional. Dos platos del mismo momento, «Me gusta
  // este», «Los dos» o «Ninguno»; al terminar se recalcula el plan sin conservar los platos de antes (#259.27), o los gustos no se
  // notarían. El gusto solo desempata en el asignador. Se guardan las respuestas; las afinidades salen de ellas. ---
  const CLAVE_GUSTOS = 'app-dietas-gustos';
  const ATRIBUTOS_RECETAS = Motor.atributosDesdeCsv(Motor.ATRIBUTOS_CSV);
  const ICONO_ESTILO = { arroz_plato: '🍚', batido: '🥤', bocadillo_tostada: '🥪', bol_desayuno: '🥣', cereal_plato: '🌾', crema: '🥣', dulce_cuchara: '🍮', ensalada: '🥗', fruta: '🍎', guiso: '🍲', huevo_plato: '🍳', pasta: '🍝', plato_combinado: '🍽️', snack: '🥨', sopa: '🍜', verduras_plato: '🥦', yogur_fruta: '🍓' };
  let historialGustos = [];
  try { historialGustos = Motor.historialGustosValido(JSON.parse(localStorage.getItem(CLAVE_GUSTOS) || 'null'), RECETAS_BASE); } catch { /* sin almacenamiento o dato corrupto: sin gustos */ }
  let duelosEnCurso = null; // mientras se juega; null fuera de los duelos
  let gustosHecho = '';
  let preferirUnaVez; // #261 C: al aplicar o borrar los gustos, con qué platos de antes se recalcula (en vez de los de ahora)
  let planAntesGustos = null; // el plan de antes de aplicar los gustos, para que «Borrar mis gustos» lo devuelva
  function guardarGustos() { try { localStorage.setItem(CLAVE_GUSTOS, JSON.stringify(historialGustos)); } catch { falloAlmacenamiento(); } }
  const listaY = (xs) => (xs.length > 1 ? `${xs.slice(0, -1).join(', ')} y ${xs[xs.length - 1]}` : xs.join(''));
  function tarjetaDueloHtml(r, lado) {
    const at = ATRIBUTOS_RECETAS.get(r.id);
    return `<div class="duelo-plato"><span class="duelo-icono" aria-hidden="true">${ICONO_ESTILO[at && at.estilo] || '🍽️'}</span><strong>${escaparHtml(r.nombre)}</strong>`
      + `<span class="subt">Lleva: ${escaparHtml(listaY(Motor.ingredientesPrincipales(r).map((n) => n.toLowerCase())))}</span>`
      + `<button type="button" class="btn-secundario" data-gusto="${lado}">Me gusta este</button></div>`;
  }
  function recalcularConGustos(preferir) {
    preferirUnaVez = preferir;
    if (vistaSemana && planActual) mostrarResultado(semanaActual, planActual, respuestasActuales, franjasActuales);
    preferirUnaVez = undefined;
  }
  function terminarDuelos() {
    const nuevos = duelosEnCurso || [];
    duelosEnCurso = null;
    if (nuevos.length && JSON.stringify(nuevos) !== JSON.stringify(historialGustos)) {
      if (!historialGustos.length) planAntesGustos = asignacionSemanaActual.asignaciones.map(({ dia, franja, receta }) => ({ dia, franja, receta }));
      historialGustos = nuevos;
      guardarGustos();
      recalcularConGustos([]);
      gustosHecho = 'Tu plan tendrá más platos parecidos a los que te gustan.';
    }
    pintarGustos();
  }
  function pintarGustos() {
    const caja = document.getElementById('gustos-duelo');
    if (!caja) return;
    const estado = document.getElementById('gustos-estado');
    const enCurso = Array.isArray(duelosEnCurso);
    const par = enCurso && restriccionesActuales ? Motor.siguienteDuelo(RECETAS_EJEMPLO, duelosEnCurso, ATRIBUTOS_RECETAS, restriccionesActuales) : undefined;
    if (enCurso && (!par || Motor.duelosTerminados(RECETAS_EJEMPLO, duelosEnCurso, ATRIBUTOS_RECETAS))) { terminarDuelos(); return; }
    caja.innerHTML = par ? `<p class="duelo-avance">${duelosEnCurso.length + 1} de unos ${duelosEnCurso.length < 15 ? 15 : Motor.MAX_DUELOS}</p>`
      + `<div class="duelo-par" data-a="${escaparHtml(par[0].id)}" data-b="${escaparHtml(par[1].id)}">${tarjetaDueloHtml(par[0], 'a')}${tarjetaDueloHtml(par[1], 'b')}</div>`
      + '<div class="duelo-otras"><button type="button" class="btn-secundario" data-gusto="ambos">Los dos</button><button type="button" class="btn-secundario" data-gusto="ninguno">Ninguno</button></div>' : '';
    caja.querySelectorAll('[data-gusto]').forEach((b) => b.addEventListener('click', () => {
      duelosEnCurso = [...duelosEnCurso, { a: par[0].id, b: par[1].id, respuesta: b.dataset.gusto }];
      pintarGustos();
    }));
    const sinPlan = !restriccionesActuales;
    estado.textContent = sinPlan ? 'Primero calcula tu plan: así solo te enseñamos platos que puedes comer.'
      : enCurso ? '' : gustosHecho || (historialGustos.length ? `Tu plan ya tiene en cuenta tus gustos (${historialGustos.length} elecciones).` : '');
    const empezar = document.getElementById('gustos-empezar');
    empezar.hidden = enCurso || sinPlan || Motor.duelosTerminados(RECETAS_EJEMPLO, historialGustos, ATRIBUTOS_RECETAS);
    empezar.textContent = historialGustos.length ? 'Seguir eligiendo' : 'Empezar';
    document.getElementById('gustos-ya').hidden = !enCurso;
    document.getElementById('gustos-borrar').hidden = enCurso || !historialGustos.length;
  }
  document.getElementById('gustos-empezar').addEventListener('click', () => { gustosHecho = ''; duelosEnCurso = [...historialGustos]; pintarGustos(); });
  document.getElementById('gustos-ya').addEventListener('click', terminarDuelos);
  document.getElementById('gustos-borrar').addEventListener('click', () => {
    historialGustos = [];
    try { localStorage.removeItem(CLAVE_GUSTOS); } catch { /* nada guardado */ }
    recalcularConGustos(planAntesGustos || []);
    planAntesGustos = null;
    gustosHecho = 'Gustos borrados: tu plan vuelve a ser el de antes.';
    pintarGustos();
  });

  // --- #265 E3 (Pablo: «que todos los días quiera desayunar "pan con…" que tenga opciones para eso»): desayuno variado, siempre el
  // mismo o siempre pan con… Al final del cuestionario (opcional) y en Perfil, con el mismo estado. Es un gusto, no un dato de salud:
  // se guarda en este navegador, como el volumen. ---
  const CLAVE_DESAYUNO = 'app-dietas-desayuno';
  let prefDesayuno = { modo: 'variado' };
  try { prefDesayuno = Motor.preferenciaDesayunoValida(JSON.parse(localStorage.getItem(CLAVE_DESAYUNO) || 'null')); } catch { /* sin almacenamiento o dato corrupto: variado */ }
  function guardarDesayuno() { try { localStorage.setItem(CLAVE_DESAYUNO, JSON.stringify(prefDesayuno)); } catch { falloAlmacenamiento(); } }
  const desayunosElegibles = () => RECETAS_EJEMPLO.filter((r) => r.franjas.includes('desayuno') && (!restriccionesActuales || Motor.evaluarCompatibilidad(r, restriccionesActuales).compatible));
  function pintarDesayunoPref() {
    for (const [id, s] of [['desayuno-cuestionario', 'c'], ['desayuno-perfil', 'p']]) {
      const caja = document.getElementById(id);
      if (!caja) continue;
      const opcion = (valor, texto) => `<label class="check"><input type="radio" class="des-modo" name="des-modo-${s}" value="${valor}" ${prefDesayuno.modo === valor ? 'checked' : ''}> ${texto}</label>`;
      const lista = desayunosElegibles();
      const elegida = prefDesayuno.modo === 'mismo' ? prefDesayuno.receta : '';
      const deLista = lista.some((r) => r.id === elegida) ? lista : [...RECETAS_EJEMPLO.filter((r) => r.id === elegida), ...lista];
      caja.innerHTML = opcion('variado', 'Variado (lo elige la app)')
        + opcion('mismo', 'Siempre el mismo')
        + (prefDesayuno.modo === 'mismo' ? `<div class="campo"><label for="des-receta-${s}">¿Cuál?</label><select id="des-receta-${s}" class="des-receta">${deLista.map((r) => `<option value="${escaparHtml(r.id)}" ${r.id === elegida ? 'selected' : ''}>${escaparHtml(r.nombre)}</option>`).join('')}</select></div>` : '')
        + opcion('pan', 'Siempre pan con…')
        + (prefDesayuno.modo === 'pan' ? `<div class="des-encimas" role="group" aria-label="Con qué">${Motor.ENCIMAS_PAN.map((e) => `<label class="check"><input type="checkbox" class="des-encima" value="${e.id}" ${prefDesayuno.con.includes(e.id) ? 'checked' : ''}> ${escaparHtml(e.nombre)}</label>`).join('')}<small class="ayuda">Sin marcar nada, cualquier desayuno de pan o tostada.</small></div>` : '');
    }
  }
  document.addEventListener('change', (ev) => {
    const t = ev.target;
    const caja = t.closest && t.closest('#desayuno-cuestionario, #desayuno-perfil');
    if (!caja) return;
    if (t.classList.contains('des-modo')) {
      prefDesayuno = t.value === 'mismo' ? { modo: 'mismo', receta: (desayunosElegibles()[0] ?? RECETAS_EJEMPLO.find((r) => r.franjas.includes('desayuno'))).id }
        : t.value === 'pan' ? { modo: 'pan', con: [] } : { modo: 'variado' };
    } else if (t.classList.contains('des-receta')) prefDesayuno = { modo: 'mismo', receta: t.value };
    else if (t.classList.contains('des-encima')) prefDesayuno = { modo: 'pan', con: Array.from(t.closest('.des-encimas').querySelectorAll('.des-encima:checked')).map((c) => c.value) };
    else return;
    guardarDesayuno();
    pintarDesayunoPref();
    const enfocar = document.querySelector(`#${caja.id} .${t.classList[0]}${t.type === 'select-one' ? '' : `[value="${t.value}"]`}`); // el control se ha vuelto a pintar
    if (enfocar) enfocar.focus();
    if (caja.id === 'desayuno-perfil' && vistaSemana && planActual) mostrarResultado(semanaActual, planActual, respuestasActuales, franjasActuales); // la semana se rehace con el desayuno elegido
  });
  pintarDesayunoPref();

  // --- #265 F (punto 23). Pablo: «Cuando llegas de entrenar por la noche y te toca cenar, ¿llegas con mucha hambre o con poca?».
  // Solo se pregunta si algún entreno acaba a partir de las 20:00 con la cena después. «Con poca»: la cena pasa un 20 % a la toma de
  // antes del entreno (lo hace repartirComidas); «con mucha»: la cena sube un nivel de volumen; «normal» o sin contestar: como
  // ahora. Al final del cuestionario (opcional) y en Perfil, con el mismo estado; se guarda en este navegador, como el desayuno. ---
  const CLAVE_HAMBRE_CENA = 'app-dietas-hambre-cena';
  let hambreCena;
  try { hambreCena = Motor.hambreCenaValida(JSON.parse(localStorage.getItem(CLAVE_HAMBRE_CENA) || 'null')); } catch { /* sin almacenamiento o dato corrupto: sin contestar */ }
  function guardarHambreCena() { try { localStorage.setItem(CLAVE_HAMBRE_CENA, JSON.stringify(hambreCena ?? null)); } catch { falloAlmacenamiento(); } }
  function hayEntrenoNoche(sesiones, franjasDe) {
    return sesiones.some((s) => Number.isFinite(s.horaInicio) && s.minutos > 0
      && Motor.entrenoNocheAntesDeCena(franjasDe(s.dia), [{ inicio: s.horaInicio, fin: s.horaInicio + s.minutos / 60 }]));
  }
  function pintarHambreCena() {
    const sesPlan = semanaActual ? semanaActual.perfil.sesiones ?? [] : [];
    const ve = {
      c: hayEntrenoNoche(leerSesiones(), () => leerFranjas()),
      p: !!semanaActual && hayEntrenoNoche(ultimasSesiones.map((s, i) => ({ ...s, dia: sesPlan[i] ? sesPlan[i].dia : s.dia })), franjasDelDia),
    };
    for (const [id, s] of [['hambre-cena-cuestionario', 'c'], ['hambre-cena-perfil', 'p']]) {
      const caja = document.getElementById(id);
      if (!caja) continue;
      caja.closest('.tarjeta').hidden = !ve[s];
      const opcion = (valor, texto) => `<label class="check"><input type="radio" class="hc-opcion" name="hc-${s}" value="${valor}" ${hambreCena === valor ? 'checked' : ''}> ${texto}</label>`;
      caja.innerHTML = opcion('poca', 'Con poca hambre') + opcion('normal', 'Normal') + opcion('mucha', 'Con mucha hambre');
    }
  }
  document.addEventListener('change', (ev) => {
    const t = ev.target;
    const caja = t.closest && t.closest('#hambre-cena-cuestionario, #hambre-cena-perfil');
    if (!caja) { if (t.closest && t.closest('#form-cuestionario')) pintarHambreCena(); return; } // sesiones u horarios cambiados
    if (!t.classList.contains('hc-opcion')) return;
    hambreCena = Motor.hambreCenaValida(t.value);
    guardarHambreCena();
    pintarHambreCena();
    const enfocar = document.querySelector(`#${caja.id} .hc-opcion[value="${t.value}"]`); // el control se ha vuelto a pintar
    if (enfocar) enfocar.focus();
    if (caja.id === 'hambre-cena-perfil' && vistaSemana && planActual) mostrarResultado(semanaActual, planActual, respuestasActuales, franjasActuales);
  });
  document.getElementById('btn-siguiente').addEventListener('click', () => pintarHambreCena()); // filas de sesión quitadas o puestas (no al cargar: semanaActual aún no existe)

  function textoRestricciones(ap) {
    if (!ap) return 'Restricciones del perfil: aún no calculadas.';
    const deAlergia = new Set(ap.deAlergia || []); // #256.5: una alergia se llama alergia, no «evitas»
    // #260 (punto 37): cada restricción una vez (lo del cuestionario y la lista negra se juntaban repetido).
    const lista = [...new Set([ap.celiaquia && 'celiaquía', ap.lactosa && 'lactosa', ap.vegetariano && 'vegetariano/a', ap.vegano && 'vegano/a', ...ap.evitados.map((e) => (deAlergia.has(e) ? `alergia a «${e}»` : `evitas «${e}»`))].filter(Boolean))];
    return lista.length
      ? `Restricciones de tu perfil: ${lista.join(', ')}. Se aplican siempre; si no sale ninguna receta no se rebajan. Encontrar un ingrediente no garantiza que la receta sea segura para ti.`
      : 'Restricciones de tu perfil: ninguna indicada. Esto no garantiza seguridad alimentaria.';
  }

  function pintarRecetas() {
    if (!document.getElementById('rec-lista')) return;
    const ap = restriccionesActuales;
    document.getElementById('rec-restricciones').textContent = textoRestricciones(ap);
    const consulta = document.getElementById('rec-buscar').value;
    const franja = document.getElementById('rec-franja').value;
    const soloCompat = document.getElementById('rec-compat').checked;
    const soloFav = document.getElementById('rec-favoritas').checked;
    document.getElementById('rec-limpiar').hidden = !consulta;
    const compat = (r) => (ap ? Motor.evaluarCompatibilidad(r, ap) : { compatible: true });
    const encontradas = Motor.filtrarCatalogo(RECETAS_EJEMPLO, { consulta, franja: franja || undefined, soloFavoritas: soloFav, favoritas: favoritasRecetas });
    const visibles = soloCompat ? encontradas.filter((r) => compat(r).compatible) : encontradas;
    const ocultasPorRestriccion = encontradas.length - visibles.length;
    const NOMBRE = { desayuno: 'desayuno', media_manana: 'media mañana', comida: 'comida', merienda: 'merienda', cena: 'cena' };

    const estado = document.getElementById('rec-estado');
    document.getElementById('rec-n-filtros').textContent = [franja, soloCompat, soloFav].filter(Boolean).length; // #208: contador en los filtros
    if (!visibles.length) {
      const partes = [];
      if (consulta.trim()) partes.push(`la búsqueda «${consulta.trim()}»`);
      if (franja) partes.push(`la comida «${NOMBRE[franja]}»`);
      if (soloFav) partes.push('«solo favoritas»');
      estado.textContent = `Ninguna receta de ejemplo cumple ${partes.length ? partes.join(' + ') : 'los filtros'}${soloCompat ? ' y tus restricciones' : ''}.`
        + (ocultasPorRestriccion ? ` ${ocultasPorRestriccion === 1 ? 'Hay 1 que coincide pero no encaja' : `Hay ${ocultasPorRestriccion} que coinciden pero no encajan`} con tus restricciones (desmarca el filtro para verla${ocultasPorRestriccion === 1 ? '' : 's'}; siguen sin servir para tu plan).` : '')
        + ' Tus restricciones no se relajan para encontrar resultados: prueba otra búsqueda o quita filtros de comida o favoritas.';
    } else {
      estado.textContent = `${visibles.length} receta${visibles.length === 1 ? '' : 's'} de ejemplo${ocultasPorRestriccion ? ` (${ocultasPorRestriccion} más no encajan con tus restricciones y no se muestran)` : ''}.`;
    }

    document.getElementById('rec-lista').innerHTML = visibles.map((r) => {
      const c = compat(r);
      const fav = favoritasRecetas.includes(r.id);
      return `
        <li class="rec-card">
          <div class="rec-img" aria-hidden="true"></div>
          <div class="rec-cuerpo">
            <div class="rec-nombre">${escaparHtml(r.nombre)}</div>
            <span class="rec-etiqueta">EJEMPLO</span>
            <div class="rec-dato">Para: ${r.franjas.map((f) => NOMBRE[f] ?? f).join(', ')}</div>
            <div class="rec-dato">Declarado (ración base, de ejemplo): ${r.kcal} kcal</div>
            ${c.compatible ? '' : `<div class="rec-incompat">No encaja con tus restricciones${c.motivo ? `: ${escaparHtml(c.motivo.detalle)}` : ''}</div>`}
            <div class="rec-acciones">
              <button type="button" class="rec-fav" data-id="${r.id}" aria-pressed="${fav}" aria-label="${fav ? 'Quitar de favoritas' : 'Marcar como favorita'}: ${escaparHtml(r.nombre)}">${fav ? '♥' : '♡'}</button>
              <button type="button" class="rec-ver" data-id="${r.id}" aria-label="Ver receta: ${escaparHtml(r.nombre)}">Ver receta</button>
            </div>
          </div>
        </li>`;
    }).join('');
  }

  function abrirDetalleReceta(id) {
    const r = RECETAS_EJEMPLO.find((x) => x.id === id);
    if (!r) return;
    const ap = restriccionesActuales;
    const c = ap ? Motor.evaluarCompatibilidad(r, ap) : { compatible: true };
    const NOMBRE = { desayuno: 'desayuno', media_manana: 'media mañana', comida: 'comida', merienda: 'merienda', cena: 'cena' };
    const pasos = Motor.elaboracionEjemplo(r.id, r);
    const ings = Motor.ingredientesDeLaRacion(r, 1, Motor.noSeReescala).map((i) => `
      <li class="dc-ing"><span class="dc-ing-nombre">${escaparHtml(i.nombre)}</span>
        <span class="dc-ing-dato"><span class="dc-ing-etq">Ración base</span> <strong>${String(i.gramosBase).replace('.', ',')} g</strong></span></li>`).join('');
    document.getElementById('dc-titulo').textContent = r.nombre;
    document.getElementById('dc-cuerpo').innerHTML = `
      <p><span class="rec-etiqueta">EJEMPLO</span> Receta de ejemplo, no de Pablo ni validada para clientes.</p>
      ${c.compatible ? '' : `<p class="error-inline">No encaja con tus restricciones${c.motivo ? `: ${escaparHtml(c.motivo.detalle)}` : ''}. No se propondría en tu plan.</p>`}
      <p class="dc-aviso" style="color:var(--gris)">Esto es solo la ficha. Verla o marcarla como favorita no la añade a tu plan ni a tu compra, ni significa que la hayas tomado.</p>
      ${bloqueSiOSiHtml(r)}
      <h3>Ingredientes (ración base, pesos de ejemplo pendientes de validar)</h3>
      <ul class="dc-ings">${ings}</ul>
      <h3>Elaboración <small style="font-weight:400">(EJEMPLO)</small></h3>
      ${pasos ? `<ol>${pasos.map((p) => `<li>${escaparHtml(p)}</li>`).join('')}</ol>` : '<p><strong>Elaboración pendiente:</strong> esta receta no tiene pasos en su ficha.</p>'}
      <h3>Datos de la ficha</h3>
      <ul>
        <li>Se puede usar en: ${r.franjas.map((f) => NOMBRE[f] ?? f).join(', ')}.</li>
        <li>Valores declarados (ración base, de ejemplo, no medidos): ${r.kcal} kcal · P ${r.proteina} g · G ${r.grasa} g · H ${r.hidrato} g. No son tu objetivo de comida ni la ración ajustada de tu plan.</li>
        <li>No disponibles en los datos de ejemplo: tiempo de preparación, saciedad y alérgenos. No se asume ninguno.</li>
      </ul>`;
    const dlg = document.getElementById('detalle-comida');
    if (!dlg.open) { disparadorDetalle = document.activeElement; dlg.showModal(); }
    document.getElementById('dc-titulo').focus();
  }

  document.getElementById('rec-buscar').addEventListener('input', pintarRecetas);
  document.getElementById('rec-buscar').addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape' && ev.target.value) { ev.target.value = ''; pintarRecetas(); ev.stopPropagation(); }
  });
  document.getElementById('rec-limpiar').addEventListener('click', () => {
    document.getElementById('rec-buscar').value = '';
    pintarRecetas();
    document.getElementById('rec-buscar').focus();
  });
  ['rec-franja', 'rec-compat', 'rec-favoritas'].forEach((id) => document.getElementById(id).addEventListener('change', pintarRecetas));
  document.getElementById('rec-lista').addEventListener('click', (ev) => {
    const fav = ev.target.closest('.rec-fav');
    if (fav) {
      favoritasRecetas = Motor.alternarFavorita(favoritasRecetas, fav.dataset.id);
      guardarFavoritas();
      pintarRecetas();
      const nuevo = document.querySelector(`#rec-lista .rec-fav[data-id="${fav.dataset.id}"]`);
      if (nuevo) nuevo.focus();
      return;
    }
    const ver = ev.target.closest('.rec-ver');
    if (ver) abrirDetalleReceta(ver.dataset.id);
  });
  document.getElementById('rec-borrar-favoritas').addEventListener('click', () => {
    if (!favoritasRecetas.length) return;
    if (!window.confirm('¿Borrar todas tus recetas favoritas? No se puede deshacer.')) return;
    favoritasRecetas = [];
    try { localStorage.removeItem(CLAVE_FAVORITAS); } catch { falloAlmacenamiento(); /* nada que borrar */ }
    pintarRecetas();
  });

  function pintarPerfil() {
    if (!respuestasActuales) return;
    const r = respuestasActuales;
    const sesiones = (semanaActual.perfil.sesiones ?? []).length;
    const comidas = franjasActuales ? franjasActuales.length : 0;
    const filas = [
      ['Peso, altura, edad', `${r.peso} kg · ${r.altura} cm · ${r.edad} años`],
      ['Objetivo', r.objetivo],
      ['Sesiones por semana', String(sesiones)],
      ['Comidas al día', String(comidas)],
    ];
    document.getElementById('perfil-datos').innerHTML = filas.map(([k, v]) => `<li><strong>${k}:</strong> ${escaparHtml(v)}</li>`).join('');
  }
  document.getElementById('perfil-reiniciar').addEventListener('click', () => {
    if (!window.confirm('¿Empezar de cero? Se borra el perfil guardado en este navegador y se vuelve al cuestionario con un ejemplo. La lista de la compra hecha a mano y las competiciones anotadas se conservan.')) return;
    document.getElementById('empezar-de-cero').click();
  });

  document.querySelectorAll('#tabs-app [role="tab"]').forEach((tab) => {
    tab.addEventListener('click', () => mostrarPanel(panelDeTab(tab), { recordar: true }));
    tab.addEventListener('keydown', (ev) => {
      if (ev.key !== 'ArrowRight' && ev.key !== 'ArrowLeft') return;
      const tabs = Array.from(document.querySelectorAll('#tabs-app [role="tab"]'));
      const siguiente = tabs[(tabs.indexOf(tab) + (ev.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
      siguiente.focus();
      mostrarPanel(panelDeTab(siguiente), { mover: false });
    });
  });

  function horaDecimalATexto(h) {
    if (h === undefined || h === null) return '';
    // #241: una sesión que acaba a medianoche o después se escribe «00:30», nunca «24:00» ni «25:00»; 7,9999 h es «08:00», no «07:60».
    const total = ((Math.round(h * 60) % 1440) + 1440) % 1440;
    return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
  }

  // Entrenos y comidas de un día, tal como salen de la única fuente del plan (issue #44: el calendario y el
  // resumen del día enseñan exactamente lo mismo). Lo que falta se dice: sin entreno, franja desactivada,
  // sin receta, hora sin indicar.
  function construirDetalleDia(dia) {
    const NOMBRE_FRANJA_RESUMEN = { desayuno: 'Desayuno', media_manana: 'Media mañana', comida: 'Comida', merienda: 'Merienda', cena: 'Cena' };
    const sesionesSemana = semanaActual.perfil.sesiones ?? [];
    const d = planActual.dias.find((x) => x.dia === dia);
    const { reparto } = vistaSemana.repartosPorDia.find((r) => r.dia.dia === dia);
    // La hora de inicio no viaja en el perfil del motor: está en ultimasSesiones, en el mismo orden.
    const sesiones = sesionesSemana.map((s, i) => ({ ...s, horaInicio: (ultimasSesiones[i] ?? {}).horaInicio, nota: (ultimasSesiones[i] ?? {}).nota, deporte: (ultimasSesiones[i] ?? {}).deporte })).filter((s) => s.dia === dia);
    let entrenosHtml = sesiones.length
      ? sesiones.map((s) => `<li class="fila entreno"><span class="fila-icono" aria-hidden="true">${iconoActividad(s.actividad)}</span><div class="fila-texto"><strong>${escaparHtml(nombreSesion(s))}${notaSesionHtml(s)}</strong><span class="fila-sub">${s.minutos}'${s.horaInicio !== undefined ? ` · ${horaDecimalATexto(s.horaInicio)}` : ' · hora sin indicar'}</span></div></li>`).join('')
      : '<li>Día sin entreno: hoy los músculos se recuperan solos, tú solo tienes que comer bien.</li>';
    // #257 (punto 14): el día de la carrera, la prueba sustituye al entreno habitual (así lo cuenta el plan): ni «Día sin entreno» ni la tirada.
    const compite = compiteEseDia(dia);
    if (compite.length) entrenosHtml = `<li class="fila entreno"><span class="fila-icono" aria-hidden="true">🏁</span><div class="fila-texto"><strong>Hoy compites: ${escaparHtml(compite.map((c) => c.nombre).join(' y '))}</strong><span class="fila-sub">La prueba sustituye al entreno habitual de este día.</span></div></li>`;
    const horaFranja = (f) => { const x = franjasDelDia(dia).find((y) => y.franja === f); return x && x.hora !== undefined ? `${horaDecimalATexto(x.hora)} · ` : ''; };
    const comidasHtml = reparto.franjas.length ? reparto.franjas.map((f) => {
      const conflicto = reparto.conflictos.filter((c) => c.franja === f.franja).map((c) => `<span class="error-inline">⚠️ ${escaparHtml(textoConflicto(c))}</span>`).join('');
      const asignada = vistaSemana.recetaPorSlot.get(`${dia}|${f.franja}`);
      // #258 (punto 13): hoy, una comida apuntada como «He comido fuera» sale como tal en el resumen, no como lo previsto.
      const fuera = comidasFuera.find((x) => x.fecha === fechaProximaDe(dia) && x.franja === f.franja); // #265 H: también la prevista otro día
      if (fuera) return `<li class="fila fila-fuera"><span class="fila-icono ic-comida" aria-hidden="true"></span><div class="fila-texto"><strong>${NOMBRE_FRANJA_RESUMEN[f.franja] ?? f.franja}</strong><span class="fila-sub">${horaFranja(f.franja)}${fuera.kcal !== undefined ? `~${fuera.kcal} kcal` : 'kcal sin apuntar'}</span><span class="fila-sub">${fuera.prevista ? 'Vas a comer fuera' : 'Comida fuera'}: ${escaparHtml(fuera.texto)}</span></div></li>`;
      // #257 (punto 10): las kcal de lo que se come (las del plato), no las del objetivo de la comida.
      const cabecera = `<strong>${NOMBRE_FRANJA_RESUMEN[f.franja] ?? f.franja}</strong><span class="fila-sub">${horaFranja(f.franja)}~${asignada ? asignada.kcalResultante : f.kcalAprox} kcal</span>`;
      return asignada
        ? `<li class="fila"><span class="fila-icono ic-comida" aria-hidden="true"></span><div class="fila-texto">${cabecera}<span class="fila-sub">EJEMPLO: ${asignada.receta.nombre} (${Math.round(asignada.racionAjustada * 100)} %)</span>${conflicto}</div>${botonVerComida(dia, f.franja)}</li>`
        : `<li class="fila hueco"><span class="fila-icono ic-aviso" aria-hidden="true"></span><div class="fila-texto">${cabecera}<span class="fila-aviso">Sin receta de ejemplo que encaje.</span>${conflicto}</div>${botonVerComida(dia, f.franja)}</li>`;
    }).join('') : '<li>Sin comidas activas este día.</li>';

    const activas = new Set(reparto.franjas.map((f) => f.franja));
    const desactivadas = Object.keys(NOMBRE_FRANJA_RESUMEN).filter((f) => !activas.has(f)).map((f) => NOMBRE_FRANJA_RESUMEN[f]);
    const desactivadasHtml = desactivadas.length ? `<li style="color:var(--gris)">Sin comida en: ${desactivadas.join(', ')} (franja desactivada en tu perfil).</li>` : '';
    return { d, entrenosHtml, comidasHtml: comidasHtml + desactivadasHtml };
  }

  function pintarResumenDia() {
    if (!vistaSemana || !planActual) return;
    const diasPlan = planActual.dias.map((d) => d.dia);
    if (!diasPlan.includes(diaResumen)) diaResumen = diasPlan[0];
    document.getElementById('dias-chips').innerHTML = diasPlan.map((d) => `
      <button type="button" class="${d === diaDeHoy() ? 'hoy' : ''}" data-dia="${d}" aria-pressed="${d === diaResumen}"
        aria-label="${NOMBRE_DIA_LARGO[d] ?? d}${d === diaDeHoy() ? ' (hoy)' : ''}">${d}</button>
    `).join('');
    document.querySelectorAll('#dias-chips button').forEach((b) => b.addEventListener('click', () => {
      diaResumen = b.dataset.dia;
      pintarResumenDia();
      const activo = document.querySelector(`#dias-chips button[data-dia="${diaResumen}"]`);
      if (activo) activo.focus();
    }));

    const { d, entrenosHtml, comidasHtml } = construirDetalleDia(diaResumen);

    document.getElementById('resumen-dia-contenido').innerHTML = `
      <p class="dia-resumen-titulo">${NOMBRE_DIA_LARGO[diaResumen] ?? diaResumen}${diaResumen === diaDeHoy() ? ' (hoy)' : ''} · ${nombreTipoDia(d, hayEntrenoEl(d.dia))}</p>
      <p class="dia-resumen-kcal">${d.kcal} <small style="font-size:0.5em;font-weight:400">kcal</small></p>
      <div class="dia-macros" style="font-size:0.82rem;color:var(--gris)">P ${d.proteinaG} g · G ${d.grasaG} g · H ${d.hidratoG} g</div>
      ${porqueDiaHtml(`res-dia-${diaResumen}`, diaResumen)}
      <h3 style="margin-top:1rem">Entrenos</h3>
      <ul class="dia-resumen-lista">${entrenosHtml}</ul>
      <h3>Comidas</h3>
      <ul class="dia-resumen-lista">${comidasHtml}</ul>
      ${cardCompeticionHtml(diaResumen)}
      <div class="acciones-rapidas">
        <button type="button" class="btn-secundario" id="ir-a-compra">Ver la compra</button>
      </div>
    `;
    document.getElementById('ir-a-compra').addEventListener('click', () => mostrarPanel('compra'));
  }

  // --- Issue #125: día de competición. Línea de tiempo, combustible de carrera y reorganización de las tomas alrededor de la
  // hora de salida. Ofrece, no impone: el horario por día solo cambia al pulsar el botón (y se deshace con «Volver al horario general»). ---
  const NOMBRE_TOMA = { desayuno: 'Desayuno', media_manana: 'Media mañana', comida: 'Comida', merienda: 'Merienda', cena: 'Cena' };
  /** #257 (punto 14): competiciones de ese día de la semana del calendario ([] sin calendario). */
  function compiteEseDia(dia) {
    return calInicio ? Motor.competicionesDelDia(competiciones, calInicio, dia) : [];
  }
  function competicionDelDia(dia) {
    if (!calInicio || !planActual || !respuestasActuales) return null;
    const fecha = Motor.fechaDelDia(calInicio, dia);
    const f = new Date(new Date(`${fecha}T00:00:00Z`).getTime() + 86400000);
    const manana = `${f.getUTCFullYear()}-${String(f.getUTCMonth() + 1).padStart(2, '0')}-${String(f.getUTCDate()).padStart(2, '0')}`;
    for (const c of competiciones) {
      const compiteAlDiaSiguiente = competiciones.some((o) => o !== c && (o.fecha === manana || (o.pruebas ?? []).some((p) => p.fecha === manana)));
      const p = Motor.planDiaCompeticion(c, fecha, respuestasActuales.peso, { compiteAlDiaSiguiente });
      if (p) return { c, p, fecha };
    }
    return null;
  }
  function tomasHabituales() {
    return (franjasActuales ?? []).filter((f) => f.hora !== undefined)
      .map((f) => ({ franja: f.franja, minuto: Math.round(f.hora * 60), principal: ['desayuno', 'comida', 'cena'].includes(f.franja) }));
  }
  const PRIORIDAD_TOMA = { previa: 5, recuperacion: 4, despues: 3, normal: 2, ligera: 1, opcional: 0 };
  const ROL_TOMA_TXT = { previa: 'comida previa', ligera: 'toma ligera', recuperacion: 'recuperación', despues: 'después de la prueba', opcional: 'opcional', normal: '' };
  function horarioCompeticion(x) {
    const pr = x.p.pruebas;
    const r = Motor.reorganizarDia(tomasHabituales(), pr[0].inicio, pr[pr.length - 1].fin);
    // El horario por día guarda una sola hora por comida: manda la toma de más peso (previa > recuperación > …).
    const porFranja = new Map();
    for (const t of r.tomas) {
      if (t.rol === 'opcional') continue;
      const ya = porFranja.get(t.franja);
      if (!ya || PRIORIDAD_TOMA[t.rol] > PRIORIDAD_TOMA[ya.rol]) porFranja.set(t.franja, t);
    }
    return { r, nuevas: (franjasActuales ?? []).map((f) => ({ ...f, hora: porFranja.has(f.franja) ? porFranja.get(f.franja).minuto / 60 : f.hora })) };
  }
  // #155 B: líquido de recuperación solo con pesaje (ACSM 2016, p. 556); sin kg perdidos no hay cifra.
  document.addEventListener('input', (ev) => {
    if (!ev.target || ev.target.id !== 'liq-kg') return;
    const res = document.getElementById('liq-res');
    const v = ev.target.value.trim();
    if (v === '') { res.textContent = ''; return; }
    const kg = Number(v.replace(',', '.'));
    const l = Motor.liquidoRecuperacion(kg);
    const f = (x) => String(x).replace('.', ',');
    res.textContent = l ? `Entre ${f(l[0])} y ${f(l[1])} litros, poco a poco en las horas siguientes y con sodio (en la comida o en la bebida). Orientativo.`
      : `Escribe un valor entre 0,1 y ${Motor.MAX_KG_PERDIDOS_CREIBLE} kg; si has perdido más, revisa el pesaje o consulta, y no se da cifra.`;
  });
  function lineaCompeticionHtml(x) {
    const hm = Motor.aHoraTexto;
    const rango = (r, u) => (r[0] === r[1] ? `${r[0]} ${u}` : `${r[0]}–${r[1]} ${u}`);
    return x.p.linea.map((e) => `<li><strong>${e.minuto < 0 ? 'Víspera' : hm(e.minuto)}</strong> · ${escaparHtml(e.titulo)}${e.hidratoG ? ` · ${rango(e.hidratoG, 'g de hidratos')}` : ''}${e.proteinaG ? ` · ${rango(e.proteinaG, 'g de proteína')}` : ''}<br><span style="color:var(--gris)">${escaparHtml(e.detalle)}</span></li>`).join('');
  }
  function combustibleHtml(x) {
    return x.p.combustible.map((c) => {
      if (!c.hidratoG[1]) return `<li>Prueba ${c.prueba} (${c.duracionMin} min): ${escaparHtml(c.nota ?? 'nada obligatorio')}.</li>`;
      const gel = c.geles ? ` · ${c.geles.n[0]}–${c.geles.n[1]} geles de ${c.geles.gramosPorGel} g (por ejemplo, a los minutos ${c.geles.minutos.join(', ')})` : '';
      const alt = c.alternativas ? `<br><span style="color:var(--gris)">Alternativas: ${c.alternativas.map(escaparHtml).join('; ')}.</span>` : '';
      return `<li>Prueba ${c.prueba} (${c.duracionMin} min): <strong>${c.hidratoG[0]}–${c.hidratoG[1]} g</strong> de hidratos (${c.hidratoGHora[0]}–${c.hidratoGHora[1]} g/h)${c.obligatorio ? '' : ' · opcional'}${gel}${alt}<br><span style="color:var(--gris)">Agua: ${c.aguaL[0]}–${c.aguaL[1]} L, sin beber de más${c.sodio ? '; bebida con sodio' : ''}${c.nota ? ` · ${escaparHtml(c.nota)}` : ''}.</span></li>`;
    }).join('');
  }
  // Días previos a una competición (Pablo, 08/10): que el paciente vea en «Hoy» que esos días ya se está preparando la prueba
  // (y que está en carga, si le toca), con una frase de ánimo. `x` es el día de Motor.aplicarCompeticion.
  function previaCompeticionHtml(dia, x) {
    if (!x || !calInicio || !['descarga', 'previa', 'carga', 'vispera'].includes(x.fase)) return '';
    const c = competiciones.find((o) => o.nombre === x.competicion);
    const utc = (f) => Date.UTC(Number(f.slice(0, 4)), Number(f.slice(5, 7)) - 1, Number(f.slice(8, 10)));
    const faltan = c ? Math.round((utc(c.fecha) - utc(Motor.fechaDelDia(calInicio, dia))) / 86400000) : 0;
    const cuando = faltan === 1 ? 'Mañana compites' : faltan > 1 ? `Faltan ${faltan} días` : 'Se acerca tu competición';
    const enCarga = (x.hidratoMinGKg ?? 0) > 0;
    const frase = x.fase === 'vispera'
      ? `${enCarga ? 'Hoy estás en carga: hidratos arriba y poca fibra para llegar con el depósito lleno.' : 'Hoy, comida conocida y a descansar.'} El trabajo ya está hecho: solo queda disfrutarlo.`
      : enCarga ? 'Ya estás en carga: hoy suben los hidratos para llenar el depósito. Comer bien estos días también es entrenar.'
        : 'Ya estamos preparando la competición: cada comida de estos días suma para llegar a tope.';
    return `<div class="hoy-bloque hoy-previa"><h3>${cuando}${x.competicion ? ` · ${escaparHtml(x.competicion)}` : ''}</h3><div class="titulo">${frase}</div></div>`;
  }
  function cardCompeticionHtml(dia) {
    const x = competicionDelDia(dia);
    if (!x) return '';
    const hm = Motor.aHoraTexto;
    const { r, nuevas } = horarioCompeticion(x);
    const normal = tomasHabituales().sort((a, b) => a.minuto - b.minuto).map((t) => `${hm(t.minuto)} ${NOMBRE_TOMA[t.franja] ?? t.franja}`).join(' · ');
    const comp = r.tomas.map((t) => `${hm(t.minuto)} ${NOMBRE_TOMA[t.franja] ?? t.franja}${ROL_TOMA_TXT[t.rol] ? ` (${ROL_TOMA_TXT[t.rol]})` : ''}`).join(' · ');
    const aplicado = excepcionesHorario.has(dia) && nuevas.every((n) => { const e = excepcionesHorario.get(dia).find((y) => y.franja === n.franja); return e && Math.abs(e.hora - n.hora) < 1e-6; });
    const cambios = r.cambios.map((c) => `<li>${NOMBRE_TOMA[c.franja] ?? c.franja}: ${c.de !== undefined ? `${hm(c.de)} → ` : ''}<strong>${hm(c.a)}</strong> — ${escaparHtml(c.motivo)}</li>`).join('');
    return `
      <div class="tarjeta comp-dia" style="margin-top:1rem">
        <h3 style="margin-top:0">Día de competición · ${escaparHtml(x.c.nombre)}</h3>
        <p class="subt" style="font-size:0.8rem;margin:0 0 0.5rem">${escaparHtml(Motor.NOTA_PAUTA)} Las tomas de antes, entre pruebas y después cuentan dentro del total del día.</p>
        <ul class="dia-resumen-lista">${lineaCompeticionHtml(x)}</ul>
        <details class="plegable"><summary>Combustible de carrera (aparte del total del día)</summary><ul class="dia-resumen-lista">${combustibleHtml(x)}</ul></details>
        <details class="plegable"><summary>Líquido de recuperación (si te pesas antes y después)</summary>
          <p class="una-linea">No hace falta pesarse. Si lo haces, escribe cuántos kg has perdido en la prueba y te decimos cuánto beber.</p>
          <div class="campo"><label for="liq-kg">Kg perdidos en la prueba</label><input id="liq-kg" type="number" inputmode="decimal" min="0" max="5" step="0.1" style="font-size:16px;width:7rem"></div>
          <p class="una-linea" id="liq-res" role="status" aria-live="polite"></p>
        </details>
        <details class="plegable"><summary>Tu día normal / tu día de competición</summary>
          <p style="font-size:0.85rem;margin:0.3rem 0"><strong>Tu día normal:</strong> ${escaparHtml(normal)}</p>
          <p style="font-size:0.85rem;margin:0.3rem 0"><strong>Tu día de competición:</strong> ${escaparHtml(comp)}</p>
          ${cambios ? `<ul class="dia-resumen-lista">${cambios}</ul>` : '<p class="subt">No hace falta mover ninguna comida.</p>'}
          ${r.avisos.map((a) => `<p class="subt" style="font-size:0.82rem">⚠️ ${escaparHtml(a)}</p>`).join('')}
          <p class="subt" style="font-size:0.8rem">Las kcal y los macros del día no cambian: lo que se mueve conserva lo suyo. Si una comida tiene dos horas (toma ligera y resto), el horario por comidas guarda la principal; la ligera queda en la línea de tiempo.</p>
          <button type="button" class="btn-secundario comp-aplicar" data-dia="${dia}" ${aplicado ? 'disabled' : ''}>${aplicado ? 'Horario de competición aplicado' : 'Aplicar este horario a este día'}</button>
          ${aplicado ? `<button type="button" class="btn-texto comp-quitar" data-dia="${dia}">Volver al horario general</button>` : ''}
        </details>
      </div>`;
  }
  document.addEventListener('click', (ev) => {
    const b = ev.target.closest && ev.target.closest('.comp-aplicar, .comp-quitar');
    if (!b || !planActual) return;
    const dia = b.dataset.dia;
    if (b.classList.contains('comp-quitar')) excepcionesHorario.delete(dia);
    else {
      const x = competicionDelDia(dia);
      if (!x) return;
      excepcionesHorario.set(dia, horarioCompeticion(x).nuevas);
    }
    mostrarResultado(semanaActual, planActual, respuestasActuales, franjasActuales);
  });
  /** Avisos con hora del día de competición para el .ics (el detalle solo se exporta si se pide). */
  function extrasIcsCompeticion() {
    if (!calInicio || !respuestasActuales) return [];
    const extras = [];
    for (const dia of DIAS) {
      const x = competicionDelDia(dia);
      if (!x) continue;
      x.p.linea.filter((e) => e.minuto >= 0).forEach((e, i) => extras.push({
        uid: `competicion-${x.c.id}-${x.fecha}-${i + 1}`, fecha: x.fecha, hora: Motor.aHoraTexto(e.minuto),
        titulo: `Competición: ${e.tipo === 'durante' ? 'prueba' : e.tipo === 'previa' || e.tipo === 'ligera' ? 'toma previa' : e.tipo === 'entre' ? 'toma entre pruebas' : 'recuperación'}`,
        detalle: `${e.titulo}. ${e.detalle}`,
      }));
    }
    return extras;
  }

  // --- Issue #44: calendario semanal. Fechas reales solo a partir de un lunes elegido por la persona;
  // las competiciones son anotaciones locales (no tocan kcal ni macros). ---
  const CLAVE_CALENDARIO = 'app-dietas-calendario';
  let calInicio = ''; // 'YYYY-MM-DD' (lunes) o '' si no se ha elegido: entonces no se muestra ninguna fecha
  let competiciones = [];
  let diaCal = diaDeHoy();
  let editandoCompId = null;

  try {
    const guardado = JSON.parse(localStorage.getItem(CLAVE_CALENDARIO) || 'null');
    if (guardado) {
      calInicio = Motor.esLunes(guardado.inicio ?? '') ? guardado.inicio : '';
      competiciones = Motor.competicionesDesdeJson(guardado.competiciones);
    }
  } catch { /* storage bloqueado o dato corrupto: se empieza en blanco */ }

  function guardarCalendarioLocal() {
    try { localStorage.setItem(CLAVE_CALENDARIO, JSON.stringify({ inicio: calInicio, competiciones })); } catch { falloAlmacenamiento(); /* sin almacenamiento: solo dura esta sesión */ }
    if (vistaSemana && planActual) mostrarResultado(semanaActual, planActual, respuestasActuales, franjasActuales); // la semana cambia con las competiciones (#124)
  }

  // Icono por actividad (#70): decorativo (el nombre de la actividad siempre va en texto) y sin efecto en ningún cálculo.
  function iconoActividad(clave) {
    const c = String(clave || '');
    if (/^correr/.test(c)) return '🏃';
    if (/^(caminar|senderismo)/.test(c)) return '🚶';
    if (/^(bici|spinning)/.test(c)) return '🚴';
    if (/^natacion/.test(c)) return '🏊';
    if (/^(eliptica|remo)/.test(c)) return '🚣';
    if (/^(fuerza|calistenia|tonificacion)/.test(c)) return '🏋️';
    if (/^(hyrox|crossfit|funcional|hiit)/.test(c)) return '🔥';
    if (/^(futbol|balonmano)/.test(c)) return '⚽';
    if (/^(baloncesto|voleibol)/.test(c)) return '🏀';
    if (/^(tenis|padel)/.test(c)) return '🎾';
    if (/^(boxeo|kickboxing|artes_marciales)/.test(c)) return '🥊';
    return '🏅'; // desconocida o sin icono propio: neutro
  }
  function iconosDelDia(sesiones, dia) {
    return Array.from(new Set(sesiones.filter((x) => x.dia === dia).map((x) => iconoActividad(x.actividad)))).join('');
  }

  // Nota libre de la sesión (#69), escapada, para añadir tras el nombre de la actividad.
  const notaSesionHtml = (s) => (s.nota ? ` · «${escaparHtml(s.nota)}»` : '');

  function escaparHtml(t) {
    const tabla = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
    return String(t).replace(/[&<>"']/g, (ch) => tabla[ch]);
  }

  function fechaLegible(iso, conAnio = true) {
    const [y, m, dd] = iso.split('-').map(Number);
    return new Date(Date.UTC(y, m - 1, dd)).toLocaleDateString('es-ES', { timeZone: 'UTC', day: 'numeric', month: 'long', ...(conAnio ? { year: 'numeric' } : {}) });
  }

  function pintarCalendario() {
    const inputInicio = document.getElementById('cal-inicio');
    if (document.activeElement !== inputInicio) inputInicio.value = calInicio;

    const hayPlan = !!(vistaSemana && planActual);
    const chips = document.getElementById('cal-chips');
    const detalle = document.getElementById('cal-detalle');
    if (!hayPlan) {
      chips.innerHTML = '';
      detalle.innerHTML = '<p style="color:var(--gris)">Calcula tu plan para ver aquí tus comidas y entrenos.</p>';
    } else {
      chips.innerHTML = DIAS.map((dia) => {
        const fecha = calInicio ? Motor.fechaDelDia(calInicio, dia) : '';
        const hayComp = fecha && competiciones.some((c) => c.fecha === fecha);
        return `<button type="button" data-dia="${dia}" aria-pressed="${dia === diaCal}"
          aria-label="${NOMBRE_DIA_LARGO[dia]}${fecha ? ` ${fechaLegible(fecha, false)}` : ''}${hayComp ? ', con competición' : ''}">
          ${dia}<small>${fecha ? Number(fecha.slice(8)) : ''}${hayComp ? ' <span class="marca-comp">●</span>' : ''}</small></button>`;
      }).join('');
      chips.querySelectorAll('button').forEach((b) => b.addEventListener('click', () => {
        diaCal = b.dataset.dia;
        pintarCalendario();
        const activo = chips.querySelector(`button[data-dia="${diaCal}"]`);
        if (activo) activo.focus();
      }));

      const { d, entrenosHtml, comidasHtml } = construirDetalleDia(diaCal);
      const fecha = calInicio ? Motor.fechaDelDia(calInicio, diaCal) : '';
      const delDia = calInicio ? Motor.competicionesDelDia(competiciones, calInicio, diaCal) : [];
      // La competición solo se nombra el día que la hay (Pablo, 08/10: «todos los días no te apuntas a una competición»).
      const compHtml = delDia.map((c) => `<li class="entreno">🏁 <strong>${escaparHtml(c.nombre)}</strong> · ${escaparHtml(resumenCompeticion(c))}</li>`).join('');
      detalle.innerHTML = `
        <p class="dia-resumen-titulo">${NOMBRE_DIA_LARGO[diaCal]}${fecha ? ` · ${fechaLegible(fecha)}` : ''} · ${nombreTipoDia(d, hayEntrenoEl(d.dia))}</p>
        <p class="dia-resumen-kcal">${d.kcal} <small style="font-size:0.5em;font-weight:400">kcal</small></p>
        ${compHtml ? `<h3 style="margin-top:1rem">Competición</h3><ul class="dia-resumen-lista">${compHtml}</ul>` : ''}
        <h3 style="margin-top:1rem">Entrenos</h3><ul class="dia-resumen-lista">${entrenosHtml}</ul>
        <h3>Comidas</h3><ul class="dia-resumen-lista">${comidasHtml}</ul>
        ${cardCompeticionHtml(diaCal)}
      `;
    }

    pintarExportacionIcs();

    const lista = document.getElementById('cal-lista-comp');
    lista.innerHTML = competiciones.length ? competiciones.map((c) => {
      const dia = calInicio ? Motor.diaDeLaFecha(calInicio, c.fecha) : undefined;
      // #257 (punto 14): cuántos días faltan y un botón para ver la semana de la carrera (antes había que adivinar el lunes).
      const hoyIso = Motor.fechaLocalISO(new Date());
      const utc = (f) => Date.UTC(Number(f.slice(0, 4)), Number(f.slice(5, 7)) - 1, Number(f.slice(8, 10)));
      const faltan = Math.round((utc(c.fecha) - utc(hoyIso)) / 86400000);
      const cuando = faltan === 0 ? 'hoy' : faltan === 1 ? 'mañana' : faltan > 1 ? `faltan ${faltan} días` : '';
      const lunesComp = Motor.lunesDeLaSemana(c.fecha);
      return `
        <li class="comp-item">
          <span><strong>${escaparHtml(c.nombre)}</strong>${cuando ? ` <span class="comp-faltan">· ${cuando}</span>` : ''}<br><span style="color:var(--gris)">${escaparHtml(resumenCompeticion(c))}${dia ? ` · esta semana (${NOMBRE_DIA_LARGO[dia]})` : ''}</span></span>
          <span class="acciones">
            ${faltan >= 0 && calInicio !== lunesComp ? `<button type="button" class="btn-texto" data-accion="semana" data-lunes="${lunesComp}" aria-label="Ver la semana de ${escaparHtml(c.nombre)}">Ver esa semana</button>` : ''}
            <button type="button" class="btn-texto" data-accion="editar" data-id="${c.id}" aria-label="Editar ${escaparHtml(c.nombre)}">Editar</button>
            <button type="button" class="btn-texto" data-accion="borrar" data-id="${c.id}" aria-label="Borrar ${escaparHtml(c.nombre)}" style="color:var(--peligro)">Borrar</button>
          </span>
        </li>`;
    }).join('') : '<li style="color:var(--gris)">Todavía no has anotado ninguna competición.</li>';
    lista.querySelectorAll('button').forEach((b) => b.addEventListener('click', () => {
      if (b.dataset.accion === 'semana') {
        calInicio = b.dataset.lunes;
        sincronizarInicioDieta();
        document.getElementById('cal-inicio-error').hidden = true;
        document.getElementById('cal-inicio').value = calInicio;
        guardarCalendarioLocal();
        pintarCalendario();
        return;
      }
      if (b.dataset.accion === 'borrar') {
        competiciones = Motor.borrarCompeticion(competiciones, b.dataset.id);
        if (editandoCompId === b.dataset.id) salirDeEdicionCompeticion();
        guardarCalendarioLocal();
        pintarCalendario();
      } else {
        const c = competiciones.find((x) => x.id === b.dataset.id);
        if (!c) return;
        editandoCompId = c.id;
        document.getElementById('cal-comp-nombre').value = c.nombre;
        document.getElementById('cal-comp-fecha').value = c.fecha;
        document.getElementById('cal-comp-fin').value = c.fechaFin ?? '';
        selTipoComp.value = c.tipo ?? 'otra';
        document.getElementById('cal-comp-geles').value = c.usaGeles ?? 'no_se';
        document.getElementById('cal-comp-intestino').value = c.problemasIntestinales ?? 'no_se';
        cajaPruebas.innerHTML = '';
        (c.pruebas?.length ? c.pruebas : [{ hora: c.hora ?? '' }]).forEach((p) => { anadirFilaPrueba(p); if (p.duracionMin) cajaPruebas.lastChild.querySelector('.p-dur').dataset.tocada = '1'; });
        actualizarTipoComp();
        document.getElementById('cal-comp-guardar').textContent = 'Guardar cambios';
        document.getElementById('cal-comp-cancelar').hidden = false;
        document.getElementById('cal-comp-nombre').focus();
      }
    }));
  }

  // --- Issue #45: exportación manual .ics. La vista previa y el archivo salen de la misma lista de
  // eventos (Motor.construirEventos); aquí solo se recogen los datos que ya muestra el calendario. ---
  const zonaSelect = document.getElementById('cal-exp-zona');
  zonaSelect.innerHTML = Motor.ZONAS_ICS.map((z) => `<option value="${z.id}">${z.nombre}</option>`).join('');

  function opcionesExportacion() {
    const NOMBRE_FRANJA_ICS = { desayuno: 'Desayuno', media_manana: 'Media mañana', comida: 'Comida', merienda: 'Merienda', cena: 'Cena' };
    const sesiones = (semanaActual.perfil.sesiones ?? []).map((s, i) => {
      const hora = (ultimasSesiones[i] ?? {}).horaInicio;
      return {
        dia: s.dia, minutos: s.minutos, nota: (ultimasSesiones[i] ?? {}).nota, hora: hora === undefined ? undefined : horaDecimalATexto(hora),
        nombre: (Motor.ACTIVIDADES[s.actividad] && Motor.ACTIVIDADES[s.actividad].nombre) || s.actividad,
      };
    });
    const comidas = [];
    vistaSemana.repartosPorDia.forEach(({ dia: d, reparto }) => {
      reparto.franjas.forEach((f) => {
        const x = franjasDelDia(d.dia).find((y) => y.franja === f.franja);
        const asignada = vistaSemana.recetaPorSlot.get(`${d.dia}|${f.franja}`);
        comidas.push({
          dia: d.dia, franja: f.franja, nombreFranja: NOMBRE_FRANJA_ICS[f.franja] ?? f.franja,
          hora: x && x.hora !== undefined ? horaDecimalATexto(x.hora) : undefined,
          detalle: asignada
            ? `EJEMPLO: ${asignada.receta.nombre} (${Math.round(asignada.racionAjustada * 100)} %) · ~${asignada.kcalResultante} kcal`
            : `~${f.kcalAprox} kcal (sin receta de ejemplo asignada)`,
        });
      });
    });
    return {
      inicio: calInicio,
      categorias: Array.from(document.querySelectorAll('.cal-exp-cat')).filter((c) => c.checked).map((c) => c.value),
      conDetalle: document.getElementById('cal-exp-detalle').checked,
      sesiones, comidas, competiciones, extrasCompeticion: extrasIcsCompeticion(),
      ...(periodoDieta.inicio ? { finDieta: Motor.finDeLaDieta(periodoDieta.inicio, periodoDieta.semanas) } : {}),
    };
  }

  function pintarExportacionIcs() {
    const aviso = document.getElementById('cal-exp-aviso');
    const preview = document.getElementById('cal-exp-preview');
    const boton = document.getElementById('cal-exp-descargar');
    document.getElementById('cal-exp-estado').textContent = '';
    const bloquear = (msg) => { aviso.textContent = msg; aviso.hidden = false; preview.innerHTML = ''; boton.disabled = true; };
    if (!vistaSemana || !planActual) return bloquear('Calcula tu plan para poder exportar.');
    if (!calInicio) return bloquear('Elige arriba el lunes de inicio de la semana: sin fecha no se puede exportar nada.');
    aviso.hidden = true;

    const { eventos, omitidos } = Motor.construirEventos(opcionesExportacion());
    const zona = Motor.ZONAS_ICS.find((z) => z.id === zonaSelect.value) ?? Motor.ZONAS_ICS[0];
    if (!eventos.length) {
      preview.innerHTML = `<p style="color:var(--gris)">Con esta selección no hay ningún evento que exportar.</p>${omitidos.length ? `<ul class="resumen-lista">${omitidos.map((o) => `<li>${escaparHtml(o)}</li>`).join('')}</ul>` : ''}`;
      boton.disabled = true;
      return;
    }
    const conflictos = Motor.conflictosComidaEntreno(eventos);
    boton.disabled = conflictos.length > 0; // con choques, se habilita al marcar «he revisado los horarios»
    const cuenta = (cat) => eventos.filter((e) => e.categoria === cat).length;
    const bloqueConflictos = conflictos.length ? `
      <div class="error-inline" id="cal-exp-conflictos" role="alert">
        <strong>Revisa los horarios antes de descargar:</strong> ${conflictos.length === 1 ? 'una comida cae' : `${conflictos.length} comidas caen`} durante un entreno. No se ha movido ni borrado nada.
        <ul>${conflictos.map((c) => `<li>${fechaLegible(c.comida.fecha, false)}: ${escaparHtml(c.comida.titulo)} a las ${c.comida.hora}, durante el entreno de ${c.entreno.hora} a ${c.finEntreno}</li>`).join('')}</ul>
        <label class="check"><input type="checkbox" id="cal-exp-revisado"> He revisado los horarios y quiero descargar igualmente</label>
      </div>` : '';
    preview.innerHTML = `${bloqueConflictos}
      <p style="margin:0">Del <strong>${fechaLegible(eventos[0].fecha)}</strong> al <strong>${fechaLegible(eventos[eventos.length - 1].fecha)}</strong> ·
        ${eventos.length} eventos (${cuenta('comidas')} comidas, ${cuenta('entrenos')} entrenos, ${cuenta('competiciones')} competiciones) ·
        zona: ${zona.id}</p>
      <ul class="exp-preview-lista">
        ${eventos.map((e) => `<li><strong>${fechaLegible(e.fecha, false)}</strong> · ${e.hora ? `${e.hora}${e.duracionMin ? ` (${e.duracionMin} min)` : ''}` : 'todo el día'} — ${escaparHtml(e.titulo)}${e.detalle ? `<br><span style="color:var(--gris)">${escaparHtml(e.detalle)}</span>` : ''}</li>`).join('')}
      </ul>
      ${omitidos.length ? `<p style="font-size:0.82rem;color:var(--gris);margin:0.5rem 0 0">No incluido: ${omitidos.map(escaparHtml).join(' ')}</p>` : ''}
    `;
  }
  document.getElementById('cal-exp-preview').addEventListener('change', (ev) => {
    if (ev.target.id === 'cal-exp-revisado') document.getElementById('cal-exp-descargar').disabled = !ev.target.checked;
  });
  document.querySelectorAll('.cal-exp-cat, #cal-exp-detalle, #cal-exp-zona').forEach((el) => el.addEventListener('change', pintarExportacionIcs));
  document.getElementById('cal-exp-descargar').addEventListener('click', () => {
    if (!vistaSemana || !calInicio) return;
    const { eventos } = Motor.construirEventos(opcionesExportacion());
    if (!eventos.length) return;
    const revisado = document.getElementById('cal-exp-revisado');
    if (Motor.conflictosComidaEntreno(eventos).length && !(revisado && revisado.checked)) return;
    const ics = Motor.generarIcs(eventos, zonaSelect.value, new Date());
    const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar;charset=utf-8' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = `plan-${calInicio}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    document.getElementById('cal-exp-estado').textContent = 'Archivo descargado. Impórtalo tú a mano en tu calendario; no se ha enviado a ningún sitio.';
  });

  // Texto corto de una competición: tipo, días, pruebas con sus horas y geles (issue #123).
  function resumenCompeticion(c) {
    const pruebas = c.pruebas?.length ? c.pruebas.map((p) => `${p.hora} (${p.duracionMin} min)`).join(', ') : (c.hora ? c.hora : 'todo el día');
    const geles = c.usaGeles === 'si' ? ' · con geles' : c.usaGeles === 'no' ? ' · sin geles' : '';
    return `${Motor.NOMBRE_TIPO_COMPETICION[c.tipo ?? 'otra']} · ${fechaLegible(c.fecha)}${c.fechaFin ? ` → ${fechaLegible(c.fechaFin)}` : ''} · ${pruebas}${geles}`;
  }
  // --- Issue #123: tipo, pruebas (hora + duración), varios días y geles de la competición. ---
  const selTipoComp = document.getElementById('cal-comp-tipo');
  selTipoComp.innerHTML = Motor.TIPOS_COMPETICION.map((t) => `<option value="${t}"${t === 'otra' ? ' selected' : ''}>${Motor.NOMBRE_TIPO_COMPETICION[t]}</option>`).join('');
  selTipoComp.value = 'otra';
  const cajaPruebas = document.getElementById('cal-comp-pruebas');
  function diasDeLaCompeticion() {
    const ini = document.getElementById('cal-comp-fecha').value;
    const fin = document.getElementById('cal-comp-fin').value;
    if (!ini || !fin || fin <= ini) return [];
    const dias = [];
    const aTexto = (t) => { const d = new Date(t); return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`; }; // fechas de calendario, sin zona horaria
    for (let t = Date.parse(`${ini}T00:00:00Z`); t <= Date.parse(`${fin}T00:00:00Z`) && dias.length < 14; t += 86400000) dias.push(aTexto(t));
    return dias;
  }
  function anadirFilaPrueba(p = {}) {
    const fila = document.createElement('div');
    fila.className = 'fila2 prueba-fila';
    fila.style.alignItems = 'end';
    fila.innerHTML = `
      <div class="campo"><label>Hora de inicio</label><input class="p-hora" type="time" value="${p.hora ?? ''}"></div>
      <div class="campo"><label>Minutos</label><input class="p-dur" type="number" min="1" max="4320" step="1" inputmode="numeric" value="${p.duracionMin ?? Motor.DURACION_PROPUESTA_MIN[selTipoComp.value]}"></div>
      <div class="campo p-dia-caja" hidden><label>Día</label><select class="p-dia"></select></div>
      <div class="campo"><button type="button" class="btn-texto p-quitar" style="color:var(--peligro)">Quitar prueba</button></div>`;
    fila.querySelector('.p-quitar').addEventListener('click', () => fila.remove());
    fila.dataset.fecha = p.fecha ?? '';
    cajaPruebas.appendChild(fila);
    refrescarDiasPruebas();
  }
  function refrescarDiasPruebas() {
    const dias = diasDeLaCompeticion();
    cajaPruebas.querySelectorAll('.prueba-fila').forEach((fila) => {
      const sel = fila.querySelector('.p-dia');
      const actual = sel.value || fila.dataset.fecha || document.getElementById('cal-comp-fecha').value;
      sel.innerHTML = dias.map((d) => `<option value="${d}">${fechaLegible(d)}</option>`).join('');
      if (dias.includes(actual)) sel.value = actual;
      fila.querySelector('.p-dia-caja').hidden = dias.length === 0;
    });
  }
  function reiniciarPruebas() { cajaPruebas.innerHTML = ''; anadirFilaPrueba(); }
  function recogerPruebas() {
    const ini = document.getElementById('cal-comp-fecha').value;
    return [...cajaPruebas.querySelectorAll('.prueba-fila')].filter((f) => f.querySelector('.p-hora').value).map((f) => {
      const dia = f.querySelector('.p-dia-caja').hidden ? '' : f.querySelector('.p-dia').value;
      return { hora: f.querySelector('.p-hora').value, duracionMin: Number(f.querySelector('.p-dur').value), ...(dia && dia !== ini ? { fecha: dia } : {}) };
    });
  }
  function actualizarTipoComp() {
    const peso = selTipoComp.value === 'categoria_peso';
    const aviso = document.getElementById('cal-comp-peso');
    aviso.textContent = peso ? Motor.MENSAJE_CATEGORIA_PESO : '';
    aviso.hidden = !peso;
    // La duración propuesta solo se cambia en las pruebas que la persona aún no ha tocado.
    cajaPruebas.querySelectorAll('.p-dur').forEach((i) => { if (!i.dataset.tocada) i.value = Motor.DURACION_PROPUESTA_MIN[selTipoComp.value]; });
  }
  selTipoComp.addEventListener('change', actualizarTipoComp);
  cajaPruebas.addEventListener('input', (ev) => { if (ev.target.classList.contains('p-dur')) ev.target.dataset.tocada = '1'; });
  document.getElementById('cal-comp-add-prueba').addEventListener('click', () => anadirFilaPrueba());
  document.getElementById('cal-comp-fecha').addEventListener('change', refrescarDiasPruebas);
  document.getElementById('cal-comp-fin').addEventListener('change', refrescarDiasPruebas);
  reiniciarPruebas();

  function salirDeEdicionCompeticion() {
    editandoCompId = null;
    document.getElementById('cal-form-comp').reset();
    reiniciarPruebas();
    actualizarTipoComp();
    document.getElementById('cal-comp-guardar').textContent = 'Añadir competición';
    document.getElementById('cal-comp-cancelar').hidden = true;
    document.getElementById('cal-comp-error').hidden = true;
  }

  document.getElementById('cal-inicio').addEventListener('change', (ev) => {
    const error = document.getElementById('cal-inicio-error');
    const valor = ev.target.value;
    if (!valor) { calInicio = ''; error.hidden = true; }
    else if (!Motor.esLunes(valor)) {
      const [y, m, dd] = valor.split('-').map(Number);
      const nombre = new Date(Date.UTC(y, m - 1, dd)).toLocaleDateString('es-ES', { timeZone: 'UTC', weekday: 'long' });
      error.textContent = `El ${fechaLegible(valor)} es ${nombre}, no lunes. Elige un lunes (o usa «Usar el lunes de esta semana»). ${calInicio ? `Se sigue usando el lunes ${fechaLegible(calInicio)}.` : 'Todavía no hay ninguna fecha aplicada.'}`;
      error.hidden = false;
      return; // no se aplica ni se corrige en silencio
    } else { calInicio = valor; error.hidden = true; }
    sincronizarInicioDieta();
    guardarCalendarioLocal();
    pintarCalendario();
  });
  document.getElementById('cal-lunes-actual').addEventListener('click', () => {
    const hoy = new Date();
    const iso = `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, '0')}-${String(hoy.getDate()).padStart(2, '0')}`;
    calInicio = Motor.lunesDeLaSemana(iso); // se elige con un clic explícito, nunca al cargar
    sincronizarInicioDieta();
    document.getElementById('cal-inicio-error').hidden = true;
    document.getElementById('cal-inicio').value = calInicio;
    guardarCalendarioLocal();
    pintarCalendario();
  });
  document.getElementById('cal-form-comp').addEventListener('submit', (ev) => {
    ev.preventDefault();
    const datos = {
      nombre: document.getElementById('cal-comp-nombre').value,
      fecha: document.getElementById('cal-comp-fecha').value,
      fechaFin: document.getElementById('cal-comp-fin').value,
      tipo: selTipoComp.value,
      usaGeles: document.getElementById('cal-comp-geles').value,
      problemasIntestinales: document.getElementById('cal-comp-intestino').value,
      pruebas: recogerPruebas(),
    };
    const r = editandoCompId ? Motor.editarCompeticion(competiciones, editandoCompId, datos) : Motor.anadirCompeticion(competiciones, datos);
    const error = document.getElementById('cal-comp-error');
    if (!r.ok) { error.textContent = r.error; error.hidden = false; return; }
    competiciones = r.lista;
    salirDeEdicionCompeticion();
    guardarCalendarioLocal();
    pintarCalendario();
  });
  document.getElementById('cal-comp-cancelar').addEventListener('click', salirDeEdicionCompeticion);
  document.getElementById('cal-borrar-todo').addEventListener('click', () => {
    if (!competiciones.length && !calInicio) return;
    if (!window.confirm('¿Borrar todas las competiciones anotadas y la fecha de inicio elegida? No se puede deshacer.')) return;
    competiciones = [];
    calInicio = '';
    sincronizarInicioDieta();
    salirDeEdicionCompeticion();
    try { localStorage.removeItem(CLAVE_CALENDARIO); } catch { falloAlmacenamiento(); /* nada que borrar */ }
    pintarCalendario();
  });

  document.getElementById('empezar-de-nuevo').addEventListener('click', () => {
    document.getElementById('resultado').hidden = true;
    mostrarFormulario();
    mostrarPaso(1);
    // #260 (punto 34): con un plan ya hecho, «Editar perfil» se puede cancelar y volver al plan sin repetir los pasos.
    document.getElementById('btn-cancelar-edicion').hidden = !planActual;
  });
  document.getElementById('btn-cancelar-edicion').addEventListener('click', () => {
    // Lo que se haya tocado en el formulario no se aplica: vuelve el perfil guardado, tal cual estaba.
    try { const g = JSON.parse(localStorage.getItem(CLAVE_GUARDADO) || 'null'); if (g && typeof g === 'object') rellenarFormulario(g, { conservarSustituciones: true }); } catch { /* sin perfil guardado: se queda el formulario como esté */ }
    ocultarFormulario();
    document.getElementById('resultado').hidden = false;
    mostrarPanel('perfil');
    window.scrollTo(0, 0);
  });

  // --- Recordar el último perfil (issue #20). Solo en este navegador (localStorage); si falla (modo
  // privado, storage bloqueado) la demo sigue funcionando igual, solo que sin recordar nada. ---
  // Issue #82: si el navegador no deja guardar (modo privado, almacenamiento bloqueado o lleno) la app sigue funcionando
  // en esta sesión, pero lo dice: nada de lo guardado (perfil, favoritas, cambios de receta, compra a mano) sobrevivirá
  // a recargar. Solo se avisa cuando una escritura falla de verdad.
  function falloAlmacenamiento() {
    const aviso = document.getElementById('aviso-almacenamiento');
    if (aviso) aviso.hidden = false;
  }

  const CLAVE_GUARDADO = 'app-dietas-ultimo-perfil';

  function leerFormularioComoEjemplo() {
    return {
      peso: num('peso'), altura: num('altura'), edad: num('edad'), sexo: document.getElementById('sexo').value,
      grasa: document.getElementById('grasa-conocida').checked ? num('grasa') : undefined,
      grasaMetodo: document.getElementById('grasa-metodo').value,
      objetivo: document.getElementById('objetivo').value,
      vidaTrabajo: document.getElementById('vida-trabajo').value,
      vidaPasos: document.getElementById('vida-pasos').value || undefined,
      deportePrincipal: deporteElegido,
      sesiones: leerSesiones().map(({ dia, deporte, minutos, horaInicio, actividad, nota }) => ({ dia, deporte, minutos, horaInicio, actividad, nota })),
      franjas: Object.fromEntries(Array.from(franjasDiv.children).map((fila) => [
        fila.dataset.franja, { activa: fila.querySelector('.f-activa').checked, hora: fila.querySelector('.f-hora').value },
      ])),
    };
  }

  let revisionPerfilPendiente = false;

  function guardarPerfilLocal() {
    try { localStorage.setItem(CLAVE_GUARDADO, JSON.stringify(leerFormularioComoEjemplo())); } catch { falloAlmacenamiento(); /* modo privado, etc.: no pasa nada */ }
  }

  // #257 (punto 9): empezar de cero (o con otro perfil) borra también las comidas marcadas como hechas: eran del plan anterior y la
  // persona nueva no veía su desayuno en Hoy.
  function olvidarComidasHechas() {
    asignacionSemanaActual = { asignaciones: [], huecos: [], avisos: [] }; ultimaFirmaRespuestas = ''; avisoCambiosVigente = ''; // #259.27: otra persona
    comidasHechas = { fecha: '', franjas: [], dias: {} };
    porValorar = null;
    try { localStorage.removeItem(CLAVE_HECHAS); } catch { falloAlmacenamiento(); }
  }
  function borrarPerfilGuardado() {
    try { localStorage.removeItem(CLAVE_GUARDADO); } catch { falloAlmacenamiento(); /* nada que borrar */ }
    document.getElementById('aviso-guardado').hidden = true;
    olvidarComidasHechas();
    formularioNuevo();
  }
  document.getElementById('empezar-de-cero').addEventListener('click', borrarPerfilGuardado);

  // Issue #41: el perfil guardado NO incluye salud, alergias ni alimentos a evitar. Al precargarlo hay
  // que revisarlos de forma explícita (casilla desmarcada siempre al cargar) antes de generar resultado,
  // para que una recarga no se lea como "sin restricciones".
  function exigirRevisionPerfil(pendiente) {
    revisionPerfilPendiente = pendiente;
    const caja = document.getElementById('revision-precargado');
    caja.hidden = !pendiente;
    caja.classList.remove('error');
    document.getElementById('revision-confirmada').checked = false;
  }

  // #220 (revisión de coordinación): un cuestionario nuevo arranca con los datos de ejemplo de siempre pero SIN sesiones y sin
  // deporte principal elegido: las sesiones del ejemplo no son de la persona y el plan las usaría sin que lo sepa.
  // #255 (prueba de campo): tampoco el peso, la altura, la edad, el sexo ni el objetivo del ejemplo: empiezan vacíos («Elige…»).
  function formularioNuevo() {
    cargarEjemplo('general');
    deporteElegido = '';
    marcarDeporte();
    pintarSesiones([]);
    for (const id of ['peso', 'altura', 'edad', 'sexo', 'objetivo']) {
      const el = document.getElementById(id);
      el.value = '';
      el.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  function cargarPerfilGuardadoSiHay() {
    let guardado = null;
    try { guardado = JSON.parse(localStorage.getItem(CLAVE_GUARDADO) || 'null'); } catch { /* storage bloqueado o dato corrupto */ }
    // Un JSON válido pero con otra forma (lista, número, sesiones que no son lista…) se ignora: nunca debe romper la carga.
    const formaValida = guardado && typeof guardado === 'object' && !Array.isArray(guardado)
      && (guardado.sesiones === undefined || Array.isArray(guardado.sesiones))
      && (guardado.franjas === undefined || (guardado.franjas && typeof guardado.franjas === 'object' && !Array.isArray(guardado.franjas)));
    if (!formaValida) { formularioNuevo(); return; }
    try {
      rellenarFormulario(guardado, { conservarSustituciones: true });
    } catch {
      formularioNuevo(); // el perfil guardado estaba dañado a medias: se vuelve a un cuestionario limpio, sin precarga
      return;
    }
    exigirRevisionPerfil(true);
    document.getElementById('aviso-guardado').hidden = false;
  }

  // --- Envío del cuestionario ---
  let ultimasSesiones = []; // para poder rellenar `actividad` tras un 'elegir_deporte' y reintentar

  // Estado de los resultados ya calculados (issue #18): para poder mover una sesión de día sin volver
  // a pasar por el formulario. `semanaActual`/`planActual` los actualiza moverSesion() (#11): solo
  // recalcula los días afectados, el resto del plan se conserva tal cual.
  let semanaActual = null;
  let planActual = null;
  let respuestasActuales = null;
  let franjasActuales = null;
  // Issue #50: horas de comidas de un día concreto como excepción al horario general (franjasActuales).
  // Solo cambia el reparto de ese día; las kcal y macros diarios no se tocan. Sobrevive a mover/deshacer.
  const excepcionesHorario = new Map(); // dia -> [{franja, hora}]
  // Issue #75: recetas elegidas a mano para una comida (clave «día|franja» → id). Se aplican siempre sobre la asignación
  // del motor y se vuelven a validar al recalcular; el historial permite deshacer exactamente el último cambio.
  const CLAVE_SUSTITUCIONES = 'app-dietas-sustituciones';
  let sustituciones = {};
  let historialSustituciones = []; // instantáneas anteriores de `sustituciones`
  let avisoSustituciones = [];     // {clave, recetaId, motivo} descartadas por no ser ya válidas, hasta que se descarten
  try {
    const g = JSON.parse(localStorage.getItem(CLAVE_SUSTITUCIONES) || 'null');
    if (g && typeof g === 'object' && !Array.isArray(g)) {
      sustituciones = Motor.sustitucionesDesdeJson(g); // solo claves «día|franja» válidas con id de texto
    }
  } catch { /* sin almacenamiento o dato corrupto: sin sustituciones */ }
  function guardarSustituciones() {
    try {
      if (Object.keys(sustituciones).length) localStorage.setItem(CLAVE_SUSTITUCIONES, JSON.stringify(sustituciones));
      else localStorage.removeItem(CLAVE_SUSTITUCIONES);
    } catch { falloAlmacenamiento(); /* solo dura esta sesión */ }
  }
  const diasHorarioAbiertos = new Set();
  function franjasDelDia(dia) { return excepcionesHorario.get(dia) ?? franjasActuales ?? []; }
  let diasAbiertos = new Set(); // qué tarjetas de día quedan desplegadas al volver a pintar
  const diasMasAbiertos = new Set(); // y en cuáles está abierto «Más opciones de este día» (porqué, contexto y horario)
  let diasContextoAbiertos = new Set(); // issue #37: qué formularios de "contexto del día" quedan desplegados
  let contextoPorDia = new Map(DIAS.map((d) => [d, Motor.contextoDiaPorDefecto()])); // issue #37: turno, táper, etc. por día — solo anotación, no cambia kcal ni recetas
  let historialMovimientos = []; // issue #38: días afectados de cada movimiento, en el mismo orden que semana.historial (para el mensaje de "Deshacer")
  let mensajeDeshacer = ''; // issue #38: confirmación tras deshacer, con etiquetas de día legibles
  let filasPlanCSV = []; // issue #31: última tabla día/franja calculada, lista para descargar en CSV
  let ultimaFirmaRespuestas = ''; let avisoCambiosVigente = ''; // #259.27: qué cambió al recalcular con datos nuevos
  let asignacionSemanaActual = { asignaciones: [], huecos: [], avisos: [] }; // issue #35: única asignación de recetas de la semana, compartida por las tarjetas de día y la lista de la compra
  let diasIncluidosCompra = new Set(DIAS); // issue #33: qué días se siguen; por defecto, todos
  let marcadosEnCasa = new Map(); // issue #34/#76: ingrediente → gramos de la dieta cuando se marcó «comprado / ya en casa» (null = marca antigua sin cantidad)
  let manualQuitado = null; // issue #76: último artículo manual quitado, para poder deshacerlo
  let articulosManuales = []; // issue #34: artículos añadidos a mano, {id, nombre, cantidad, unidad, yaEnCasa}

  // Issue #34: marcas de "ya en casa" y artículos añadidos a mano, solo en este navegador (localStorage,
  // igual que el perfil guardado de #20). Sobreviven a un recálculo del plan (mover sesión, #33) porque
  // viven en variables de módulo, no en lo que se vuelve a pintar.
  const CLAVE_LISTA_MANUAL = 'app-dietas-lista-compra-manual';

  function guardarListaManual() {
    try {
      localStorage.setItem(CLAVE_LISTA_MANUAL, JSON.stringify({
        marcados: Array.from(marcadosEnCasa.entries()), manuales: articulosManuales,
      }));
    } catch { falloAlmacenamiento(); /* modo privado, etc.: no pasa nada */ }
  }

  function cargarListaManual() {
    try {
      const guardado = JSON.parse(localStorage.getItem(CLAVE_LISTA_MANUAL) || 'null');
      if (guardado) {
        // Lectura tolerante (Motor.listaManualDesdeJson): formato antiguo y nuevo; lo dañado se descarta entrada a entrada.
        const { marcas, manuales } = Motor.listaManualDesdeJson(guardado);
        marcadosEnCasa = new Map(Object.entries(marcas));
        articulosManuales = manuales;
      }
    } catch { /* storage bloqueado o dato corrupto: se empieza de cero */ }
  }
  cargarListaManual();

  function borrarListaManual() {
    if (!window.confirm('¿Borrar todas las marcas de «comprado / ya en casa» y los artículos añadidos a mano? No se puede deshacer. No afecta a la dieta, ni a los días elegidos, ni al plan.')) return;
    marcadosEnCasa = new Map();
    articulosManuales = [];
    manualQuitado = null;
    try { localStorage.removeItem(CLAVE_LISTA_MANUAL); } catch { falloAlmacenamiento(); /* nada que borrar */ }
    renderizarListaCompra();
  }

  function construirRespuestas() {
    const salud = [];
    document.querySelectorAll('.salud:checked').forEach((c) => salud.push(c.value));
    if (document.getElementById('salud-otra').value.trim()) salud.push(document.getElementById('salud-otra').value.trim());

    ultimasSesiones = leerSesiones();
    return {
      peso: num('peso'), altura: num('altura'), edad: num('edad'),
      sexo: document.getElementById('sexo').value,
      grasa: document.getElementById('grasa-conocida').checked ? num('grasa') : undefined,
      grasaMetodo: document.getElementById('grasa-conocida').checked ? document.getElementById('grasa-metodo').value : undefined,
      objetivo: document.getElementById('objetivo').value,
      sesiones: ultimasSesiones.map(({ dia, deporte, minutos, actividad }) => ({ dia, deporte, minutos, actividad })),
      vida: {
        trabajo: document.getElementById('vida-trabajo').value,
        pasos: document.getElementById('vida-pasos').value || undefined,
      },
      salud,
      cribado: leerCribado(),
      alergias: {
        celiaquia: document.getElementById('al-celiaquia').checked,
        lactosa: document.getElementById('al-lactosa').checked,
        vegetariano: document.getElementById('al-vegetariano').checked,
        vegano: document.getElementById('al-vegano').checked,
        otros: Motor.textoOtrasAlergias({ otros: document.getElementById('al-otros').value, marcadas: CASILLAS_ALERGIA.filter(([id]) => document.getElementById(id).checked).map(([, palabra]) => palabra) }), // #198, #256.5
      },
      preferencias: { gustan: document.getElementById('pref-gustan').value, evitan: document.getElementById('pref-evitas').value },
      vidaReal: { turnos: document.getElementById('turnos').checked, tiempoCocina: document.getElementById('tiempo-cocina').value },
      comunidadAutonoma: document.getElementById('comunidad').value,
    };
  }

  // #210: en la pantalla de freno (derivación a consulta) la tarjeta «Que Pablo vea mis datos» (solo con ?nube=1) va debajo, para que quien
  // más necesita que Pablo le contacte pueda dejarle su correo. Es el mismo nodo que gestiona web/nube.js: se mueve, no se duplica.
  const nubeOriginal = { padre: null, siguiente: null };
  function nubeAlFreno(pantalla = 'derivar') {
    const tarjeta = document.getElementById('tarjeta-nube');
    if (!tarjeta || tarjeta.hidden) return; // sin ?nube=1 nada cambia
    if (!nubeOriginal.padre) { nubeOriginal.padre = tarjeta.parentNode; nubeOriginal.siguiente = tarjeta.nextSibling; }
    document.getElementById(pantalla).after(tarjeta);
  }
  function nubeDeVuelta() {
    const tarjeta = document.getElementById('tarjeta-nube');
    if (tarjeta && nubeOriginal.padre && tarjeta.parentNode !== nubeOriginal.padre) nubeOriginal.padre.insertBefore(tarjeta, nubeOriginal.siguiente);
  }
  // #211: web/nube.js (solo con ?nube=1) decide si hace falta la ventana del correo y llama a continuar() al terminar. Sin nube.js, no espera.
  function esperarNube() {
    let seguir;
    const promesa = new Promise((ok) => { seguir = ok; });
    const ev = new CustomEvent('app-dietas:fin-cuestionario', { cancelable: true, detail: { continuar: seguir } });
    window.dispatchEvent(ev);
    return ev.defaultPrevented ? promesa : null;
  }
  function ocultarPantallas() {
    nubeDeVuelta();
    ['incompleto', 'derivar', 'freno-peso', 'elegir-deporte', 'resultado'].forEach((id) => { document.getElementById(id).hidden = true; });
  }

  function mostrarElegirDeporte(resultado) {
    const el = document.getElementById('elegir-deporte');
    el.hidden = false;
    el.innerHTML = `
      <p><strong>"${resultado.deporte}"</strong> no está en la lista rápida de deportes. Elige el que más se parezca:</p>
      <select id="eleccion-deporte">${opcionesActividadCompleta()}</select>
      <button type="button" id="confirmar-deporte">Confirmar y seguir</button>
    `;
    document.getElementById('confirmar-deporte').addEventListener('click', () => {
      const elegido = document.getElementById('eleccion-deporte').value;
      Array.from(sesionesDiv.querySelectorAll('.sesion')).forEach((fila) => {
        const deporteSel = fila.querySelector('.s-deporte');
        const actual = deporteSel.value === '__otro__' ? fila.querySelector('.s-actividad-completa').selectedOptions[0].textContent : deporteSel.value;
        if (actual === resultado.deporte) {
          deporteSel.value = '__otro__';
          const selCompleta = fila.querySelector('.s-actividad-completa');
          selCompleta.hidden = false;
          selCompleta.value = elegido;
        }
      });
      document.getElementById('form-cuestionario').requestSubmit();
    });
  }

  // Issue #59: todas las sesiones con hora del día (también fuerza) para avisar de comidas que caen dentro.
  function sesionesTodasDelDia(dia, sesiones) {
    return sesiones.filter((s) => s.dia === dia && s.horaInicio !== undefined).map((s) => ({ inicio: s.horaInicio, fin: s.horaInicio + s.minutos / 60 }));
  }
  // Un nombre accesible distinto por comida («Ver detalle de la comida: Desayuno del martes»): sin él, el lector de
  // pantalla oiría 35 botones idénticos (issue #80).
  function botonVerComida(dia, franja) {
    const NOMBRE = { desayuno: 'Desayuno', media_manana: 'Media mañana', comida: 'Comida', merienda: 'Merienda', cena: 'Cena' };
    const etiqueta = `Ver detalle de la comida: ${NOMBRE[franja] ?? franja} del ${NOMBRE_DIA_LARGO[dia].toLowerCase()}`;
    return `<button type="button" class="ver-comida" data-dia="${dia}" data-franja="${franja}" aria-label="${etiqueta}">Ver detalle de la comida</button>`;
  }
  function textoConflicto(c) {
    return `Esta comida cae dentro de una sesión de ${horaDecimalATexto(c.inicio)} a ${horaDecimalATexto(c.fin)}. Revisa el horario: no se ha movido nada ni se da por viable.`;
  }

  function franjaADia(dia, franjas, sesiones) {
    const sesionesDelDia = sesiones
      .filter((s) => s.dia === dia && s.horaInicio !== undefined)
      .filter((s) => { const a = Motor.ACTIVIDADES[s.actividad]; return a && (a.tipo === 'intermitente' || a.tipo === 'resistencia'); })
      .map((s) => ({ inicio: s.horaInicio, fin: s.horaInicio + s.minutos / 60 }));
    return sesionesDelDia;
  }

  function resolverActividadUI(sesion) {
    // Mismo mapeo mínimo que perfil-cuestionario.ts, para poder filtrar sesiones de carga en el navegador.
    const MAPA = {
      'correr suave': 'correr_suave', correr: 'correr', 'correr rápido': 'correr_rapido',
      'caminar rápido': 'caminar_rapido', bici: 'bici', natación: 'natacion', fuerza: 'fuerza',
      'fuerza en máquinas': 'fuerza_suave', hyrox: 'hyrox', crossfit: 'crossfit', pádel: 'padel', futbol: 'futbol', fútbol: 'futbol',
    };
    return sesion.actividad || MAPA[sesion.deporte];
  }

  // Issue #30: lista de la compra de la semana, con el catálogo de recetas de EJEMPLO y el asignador
  // de #23 + el generador de #19. Los huecos (franja sin receta que encaje) se muestran, no se esconden.
  const NOMBRE_SECCION = {
    verdura: '🥦 Verdura', fruta: '🍎 Fruta', carne_pescado: '🍗 Carne y pescado', proteina_vegetal: '🫘 Legumbres y proteína vegetal',
    vegetal_lacteo: '🌱 Bebidas y yogures vegetales', lacteos: '🥛 Lácteos y huevos', despensa: '🥫 Despensa', congelados: '🧊 Congelados', otros: '📦 Otros',
  };

  function pintarListaCompra(asignacionSemana) {
    // Issue #35: la misma asignación que ya se muestra en las tarjetas de día, no un cálculo aparte —
    // así el plan y la lista de la compra concuerdan siempre, incluso tras mover una sesión.
    asignacionSemanaActual = asignacionSemana;
    renderizarListaCompra();
  }

  // Issue #33: qué días de la semana seguirá el plan quien usa la demo. El filtro solo decide qué días
  // entran en la lista de la compra agregada; la selección se conserva mientras dure la sesión (p. ej.
  // al mover una sesión de entreno y recalcular el plan).
  function renderizarListaCompra() {
    const diasElegidos = DIAS.filter((d) => diasIncluidosCompra.has(d));
    const asignaciones = Motor.filtrarPorDias(asignacionSemanaActual.asignaciones, diasElegidos);
    const huecos = Motor.filtrarPorDias(asignacionSemanaActual.huecos, diasElegidos);

    const diasHtml = `
      <div class="dias-compra" role="group" aria-label="Días que seguiré el plan">
        ${DIAS.map((d) => `
          <label class="dia-compra-chip">
            <input type="checkbox" class="dia-compra-check" value="${d}" ${diasIncluidosCompra.has(d) ? 'checked' : ''}>
            ${d}
          </label>
        `).join('')}
      </div>
    `;

    // Issue #34: cada ingrediente puede tacharse como "ya en casa" sin tocar la cantidad requerida por
    // la dieta (gramosTotales/comprar no cambian). Los artículos añadidos a mano son una lista aparte,
    // que nunca entra en generarListaCompra ni afecta a macros o recetas.
    // Issue #36: coste orientativo con los precios aproximados de supermercado (#265 J). Responde al mismo
    // filtro de días que la lista: se calcula sobre `lista`, ya filtrada por diasElegidos.
    const euros = (n) => n.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    let cuerpo;
    let costeHtml = '';
    let listaConEstado = [];
    let proximaHtml = '';
    let generarProxima = null;
    let porqueCompra = '';
    if (!diasElegidos.length) {
      cuerpo = '<p style="color:var(--gris)">Ningún día marcado: elige al menos uno para ver la lista de la compra.</p>';
    } else if (!asignaciones.length) {
      cuerpo = '<p style="color:var(--gris)">No se ha podido asignar ninguna receta de ejemplo a ninguna franja de los días elegidos.</p>';
    } else {
      const listaBase = Motor.compraDelPeriodo(asignaciones.map((a) => ({ recetaId: a.receta, veces: 1, racion: a.racionAjustada })), catalogoPlan(asignaciones), { semanas: periodoDieta.semanas, conservacion: CONSERVACION_ACTIVA, esProtegido: Motor.noSeReescala });
      const agrupado = periodoDieta.semanas > 1 && CONSERVACION_ACTIVA.size > 0;
      // Issue #76: una marca solo cuenta como cubierta si la cantidad de la dieta no cambió desde que se marcó.
      const evaluacion = Motor.evaluarMarcas(listaBase, Object.fromEntries(marcadosEnCasa));
      const aRevisar = new Map(evaluacion.aRevisar.map((m) => [m.ingrediente, m]));
      const lista = Motor.marcarYaEnCasa(listaBase, evaluacion.cubiertos);
      listaConEstado = lista;
      generarProxima = (semanas) => {
        if (!proxima.dieta && dietaSiguienteFn) proxima.dieta = dietaSiguienteFn();
        const sig = proxima.dieta || { asignaciones, huecos: [] };
        const delasDias = Motor.filtrarPorDias(sig.asignaciones, diasElegidos);
        const base = Motor.compraDelPeriodo(delasDias.map((a) => ({ recetaId: a.receta, veces: 1, racion: a.racionAjustada })), catalogoPlan(delasDias), { semanas, conservacion: CONSERVACION_ACTIVA, esProtegido: Motor.noSeReescala });
        const porId = new Map(RECETAS_EJEMPLO.map((r) => [r.id, r]));
        const platos = DIAS.map((d) => [d, delasDias.filter((a) => a.dia === d).map((a) => (Motor.recetaDeId(porId, a.receta) || { nombre: a.receta }).nombre)]).filter(([, n]) => n.length);
        return { ...Motor.descontarSobras(base, proxima.sobras), semanas, platos, huecos: sig.huecos.length };
      };
      // #192: si el plan se recalculó (alergia, lista negra…) la próxima lista ya preparada se rehace desde las recetas revisadas.
      if (proxima.resultado && proxima.obsoleta) { proxima.resultado = generarProxima(proxima.semanas); proxima.obsoleta = false; }
      // #164: la próxima lista de la compra, con las sobras de la dieta anterior descontadas.
      const nombresLista = lista.map((i) => i.ingrediente).sort((a, b) => a.localeCompare(b, 'es'));
      const gramosCorto = (g) => String(Math.round(g * 10) / 10).replace('.', ',');
      if (!proxima.abierta) {
        proximaHtml = '<button type="button" class="btn-secundario" id="prox-abrir" style="margin:0 0 0.8rem">Generar próxima lista de la compra</button>';
      } else {
        const r = proxima.resultado;
        proximaHtml = `
        <div class="tarjeta-interna" id="prox" style="border:1px solid var(--borde);border-radius:12px;padding:0.8rem;margin:0 0 1rem">
          <h3 style="margin:0 0 0.2rem">¿Te ha sobrado comida de la anterior?</h3>
          <p class="una-linea">La vida está muy cara para tirar comida. Di qué te sobró y cuánto (orientativo); si no sobró nada, pasa al siguiente paso.</p>
          <div style="display:flex;flex-wrap:wrap;gap:0.4rem;align-items:flex-end;margin:0.6rem 0">
            <div class="campo" style="margin:0"><label for="prox-ing">Alimento</label><select id="prox-ing" style="font-size:16px">${nombresLista.map((n) => `<option>${escaparHtml(n)}</option>`).join('')}</select></div>
            <div class="campo" style="margin:0"><label for="prox-g">Gramos</label><input id="prox-g" type="number" inputmode="decimal" min="1" max="5000" step="1" style="font-size:16px;width:6rem"></div>
            <button type="button" class="btn-texto" id="prox-add">+ Añadir</button>
          </div>
          ${proxima.sobras.length ? `<ul class="resumen-lista">${proxima.sobras.map((s, i) => `<li class="item-compra"><span><strong>${gramosCorto(s.gramos)} g</strong> — ${escaparHtml(s.ingrediente)}</span><button type="button" class="quitar-manual prox-quitar" data-i="${i}" aria-label="Quitar ${escaparHtml(s.ingrediente)}">✕</button></li>`).join('')}</ul>` : '<p class="una-linea">Nada apuntado todavía.</p>'}
          <div class="campo" style="margin:0.6rem 0"><label for="prox-sem">La próxima dieta la haré</label><select id="prox-sem" style="font-size:16px">${[1, 2, 3, 4].map((n) => `<option value="${n}"${n === proxima.semanas ? ' selected' : ''}>${n} semana${n === 1 ? '' : 's'}</option>`).join('')}</select></div>
          <p class="una-linea">La próxima dieta procura no repetir los platos de esta. Todavía no se guarda ni sustituye a la actual: es para preparar la compra.</p>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap"><button type="button" class="btn-secundario" id="prox-generar">Preparar la lista</button><button type="button" class="btn-texto" id="prox-cerrar">Cerrar</button></div>
          ${r ? `<h3 style="margin:1rem 0 0.2rem" id="prox-titulo">Próxima lista de la compra · ${r.semanas} semana${r.semanas === 1 ? '' : 's'}</h3>
            ${r.cubiertos.length ? `<p class="una-linea">Con tus sobras ya tienes de sobra: ${r.cubiertos.map(escaparHtml).join(', ')}.</p>` : ''}
            ${r.sinUso.length ? `<p class="una-linea">Esta dieta no usa: ${r.sinUso.map((s) => escaparHtml(s.ingrediente)).join(', ')}.</p>` : ''}
            <details class="plegable"><summary>Platos de la próxima dieta</summary><ul class="resumen-lista" id="prox-platos">${r.platos.map(([d, n]) => `<li><strong>${d}</strong> · ${n.map(escaparHtml).join(' · ')}</li>`).join('')}</ul>${r.huecos ? `<p class="una-linea">${r.huecos} comida${r.huecos === 1 ? '' : 's'} sin plato que encaje.</p>` : ''}</details>
            <ul class="resumen-lista" id="prox-lista">${r.lista.map((i) => `<li class="item-compra"><span><strong>${i.comprar}</strong> — ${escaparHtml(i.ingrediente)}${i.sobra ? ` <small class="dieta-dato">(tienes ${gramosCorto(i.sobra)} g)</small>` : ''}</span></li>`).join('')}</ul>` : ''}
          ${r ? (siguiente ? `<p class="una-linea" id="prox-guardada">Guardada: tu próxima dieta empieza el ${fechaLegible(siguiente.inicio)}${estadoSiguienteHoy() === 'activa' ? ' (ya está en marcha)' : ''}. Hasta entonces sigues viendo la actual. <button type="button" class="btn-texto" id="prox-quitar-guardada">Quitar</button></p>${(siguiente.quitadas ?? []).length ? `<p class="una-linea" id="prox-quitadas" role="status">⚠️ Desde que la guardaste han cambiado tus restricciones: se han quitado ${siguiente.quitadas.length} plato${siguiente.quitadas.length === 1 ? '' : 's'} que ya no valen (${[...new Set(siguiente.quitadas.map((q) => escaparHtml(q.nombre)))].slice(0, 4).join(', ')}). Al empezar esa dieta se elegirán otros.</p>` : ''}`
            : periodoDieta.inicio ? `<button type="button" class="btn-secundario" id="prox-guardar" style="margin-top:0.6rem">Guardar como mi próxima dieta</button><p class="una-linea">Empezará el ${fechaLegible(Motor.inicioDeLaSiguiente(periodoDieta.inicio, periodoDieta.semanas))}, el día después de acabar la actual.</p>`
            : '<p class="una-linea">Para guardarla, di arriba en «Empiezo el» cuándo empieza tu dieta actual: la próxima empezará el día después de acabar.</p>') : ''}
        </div>`;
      }
      const gramosTxt = (g) => `${String(Math.round(g * 10) / 10).replace('.', ',')} g`;
      const dietaTxt = (item) => (item.comprar === `${item.gramosTotales} g` ? '' : ` <small class="dieta-dato">(dieta: ${gramosTxt(item.gramosTotales)})</small>`);
      const itemLi = (item) => `
            <li class="item-compra${aRevisar.has(item.ingrediente) ? ' a-revisar' : ''}">
              <label>
                <input type="checkbox" class="marca-en-casa" data-ingrediente="${escaparHtml(item.ingrediente)}" data-gramos="${item.gramosTotales}" ${item.yaEnCasa ? 'checked' : ''} aria-label="Comprado o ya en casa: ${escaparHtml(item.ingrediente)}">
                <span class="${item.yaEnCasa ? 'tachado' : ''}"><strong>${item.comprar}</strong> — ${escaparHtml(item.ingrediente)}${avisoGlutenHtml(item.ingrediente)}${agrupado && item.grupo === 'fresco' ? ' <small class="dieta-dato">esta semana</small>' : ''}${dietaTxt(item)}${item.comprarPeriodo ? `<br><small class="dieta-dato">para las ${periodoDieta.semanas} semanas: ${item.comprarPeriodo}${item.congelable ? ' · si quieres, se puede congelar' : ''}</small>` : ''}</span>
              </label>
              ${aRevisar.has(item.ingrediente) ? `<div class="aviso-cantidad" role="status">Lo marcaste cuando hacían falta ${gramosTxt(aRevisar.get(item.ingrediente).marcado)} y ahora hacen falta ${gramosTxt(aRevisar.get(item.ingrediente).ahora)}: no se da por cubierto.
                <button type="button" class="btn-texto marca-confirmar" data-ingrediente="${escaparHtml(item.ingrediente)}" data-gramos="${item.gramosTotales}">Sigue cubierto</button></div>` : ''}
            </li>`;
      const cabeceraSec = (t) => `<h3 style="font-size:0.85rem;text-transform:uppercase;color:var(--gris);margin:1rem 0 0.4rem">${t}</h3>`;
      if (agrupado) {
        const grupos = [['despensa', `🥫 Lo que no se va a poner malo · para las ${periodoDieta.semanas} semanas`], ['fresco', '🥬 Fresco']];
        cuerpo = grupos.map(([g, titulo]) => {
          const delGrupo = lista.filter((i) => i.grupo === g).sort((a, b) => a.seccion.localeCompare(b.seccion) || a.ingrediente.localeCompare(b.ingrediente));
          return delGrupo.length ? `${cabeceraSec(titulo)}<ul class="resumen-lista">${delGrupo.map(itemLi).join('')}</ul>` : '';
        }).join('');
      } else {
        const porSeccion = new Map();
        lista.forEach((item) => {
          if (!porSeccion.has(item.seccion)) porSeccion.set(item.seccion, []);
          porSeccion.get(item.seccion).push(item);
        });
        const secciones = Array.from(porSeccion.keys()).sort();
        cuerpo = secciones.map((sec) => `${cabeceraSec(NOMBRE_SECCION[sec] ?? sec)}<ul class="resumen-lista">${porSeccion.get(sec).map(itemLi).join('')}</ul>`).join('');
        if (periodoDieta.semanas > 1) cuerpo = '<p class="una-linea">Por ahora todo se compra cada semana: todavía no está validado qué aguanta sin ponerse malo.</p>' + cuerpo;
      }

      const estimacion = Motor.estimarCoste(lista, PRECIOS);
      porqueCompra = porqueHtml('compra', Motor.explicarCompra({ dias: diasElegidos.length, huecos: huecos.length, sinPrecio: estimacion.sinPrecio.length }), '¿Por qué estas cantidades y este coste?');
      const filasSeccionCoste = Object.entries(estimacion.porSeccion)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([sec, coste]) => `<li>${NOMBRE_SECCION[sec] ?? sec}: ≈ ${euros(coste)} €</li>`)
        .join('');
      const sinPrecioHtml = estimacion.sinPrecio.length ? `
        <p style="font-size:0.8rem;color:var(--gris);margin:0.5rem 0 0">
          Sin precio, fuera del total (${estimacion.sinPrecio.length}): ${estimacion.sinPrecio.join(', ')}.
        </p>
      ` : '';
      costeHtml = `
        <div class="coste-estimado">
          <p style="margin:0 0 0.4rem"><strong>≈ ${euros(estimacion.total)} €</strong> en total, con los días elegidos
            <span style="font-size:0.8rem;color:var(--gris)">(precio aproximado de supermercado, consultado en ${CUANDO_PRECIOS})</span></p>
          <ul class="resumen-lista">${filasSeccionCoste}</ul>
          ${sinPrecioHtml}
        </div>
      `;
    }

    const huecosHtml = huecos.length ? `
      <p style="font-size:0.85rem;color:var(--peligro);margin-top:1rem">
        ⚠️ ${huecos.length} franja${huecos.length === 1 ? '' : 's'} sin receta de ejemplo que encaje
        (normal con solo 5 recetas): ${huecos.slice(0, 3).map((h) => `${h.dia} ${h.franja}`).join(', ')}${huecos.length > 3 ? '…' : ''}.
        Esta lista es <strong>parcial</strong>: no incluye los ingredientes de esas comidas.
      </p>
    ` : '';

    const manualesHtml = `
      <h3 style="font-size:0.85rem;text-transform:uppercase;color:var(--gris);margin:1rem 0 0.4rem">Añadidos a mano</h3>
      ${manualQuitado ? `<div class="cambio-zona" role="status">Quitado «${escaparHtml(manualQuitado.articulo.nombre)}». <button type="button" class="btn-texto" id="deshacer-quitar-manual">↩ Deshacer</button></div>` : ''}
      ${articulosManuales.length ? `<ul class="resumen-lista">
        ${articulosManuales.map((a) => `
          <li class="item-compra">
            <label>
              <input type="checkbox" class="marca-en-casa-manual" data-id="${a.id}" ${a.yaEnCasa ? 'checked' : ''}>
              <span class="${a.yaEnCasa ? 'tachado' : ''}"><strong>${escaparHtml(a.cantidad)}${a.unidad ? ` ${escaparHtml(a.unidad)}` : ''}</strong> — ${escaparHtml(a.nombre)}</span>
            </label>
            <button type="button" class="quitar-manual" data-id="${a.id}" aria-label="Quitar ${escaparHtml(a.nombre)}">✕</button>
          </li>
        `).join('')}
      </ul>` : '<p style="color:var(--gris);font-size:0.85rem;margin:0">Nada añadido a mano todavía.</p>'}
      <div class="manual-form">
        <input type="text" id="manual-nombre" placeholder="Ingrediente (p. ej. sal)">
        <input type="text" id="manual-cantidad" placeholder="Cantidad (p. ej. 1)">
        <input type="text" id="manual-unidad" placeholder="Unidad (p. ej. bote)">
        <button type="button" id="btn-anadir-manual" class="btn-texto">+ Añadir</button>
      </div>
      ${(marcadosEnCasa.size || articulosManuales.length) ? `
        <button type="button" id="btn-borrar-lista-manual" class="btn-texto" style="color:var(--peligro)">
          Borrar marcas y añadidos a mano
        </button>
      ` : ''}
    `;

    document.getElementById('lista-compra').innerHTML = `
      <h2>Lista de la compra</h2>
      <p class="una-linea">Hecha con las recetas de EJEMPLO de tu semana, no definitivas.</p>
      <details class="saber-mas"><summary>Saber más</summary><p>Marca lo que ya has comprado o tienes en casa (el pan olvidado en el congelador también cuenta). Si después cambia la cantidad que hace falta (otra receta, otros días), te avisamos en lugar de darlo por cubierto. «Dieta» es lo que pide el plan; «comprar» está redondeado hacia arriba.</p></details>
      ${periodoDietaHtml()}
      ${proximaHtml}
      <p style="font-size:0.85rem;color:var(--gris);margin:0 0 0.4rem">¿Qué días seguirás el plan esta semana?</p>
      ${diasHtml}
      ${porqueCompra}
      ${cuerpo}
      ${costeHtml}
      ${huecosHtml}
      ${manualesHtml}
      <div class="acciones-compra">
        <button type="button" class="btn-secundario" id="btn-copiar-compra">Copiar compra pendiente</button>
        <button type="button" class="btn-secundario" id="btn-descargar-compra">Descargar .txt</button>
        <p id="estado-compra" class="subt" role="status" aria-live="polite"></p>
      </div>
    `;

    // Issue #42: mismo estado que se acaba de pintar (días, cantidades por ración asignada, marcas de
    // "ya en casa", extras manuales). Se construye al pulsar, no antes, para no quedarse desfasado.
    const textoCompra = () => Motor.formatearListaPendiente({
      dias: diasElegidos, items: listaConEstado, manuales: articulosManuales, huecos: huecos.length, semanas: periodoDieta.semanas > 1 && CONSERVACION_ACTIVA.size > 0 ? periodoDieta.semanas : 1,
    });
    const estadoCompra = document.getElementById('estado-compra');
    document.getElementById('btn-descargar-compra').addEventListener('click', () => {
      const blob = new Blob(['﻿' + textoCompra()], { type: 'text/plain;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `compra-${Motor.fechaLocalISO(new Date())}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      estadoCompra.textContent = 'Descargado.';
    });
    document.getElementById('btn-copiar-compra').addEventListener('click', async () => {
      try {
        if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('sin portapapeles');
        await navigator.clipboard.writeText(textoCompra());
        estadoCompra.textContent = '✅ Copiado al portapapeles.';
      } catch {
        estadoCompra.textContent = '⚠️ No se pudo copiar: usa «Descargar .txt».';
      }
    });

    const abrirProx = document.getElementById('prox-abrir');
    if (abrirProx) abrirProx.addEventListener('click', () => { proxima.abierta = true; renderizarListaCompra(); document.getElementById('prox-ing')?.focus(); });
    if (document.getElementById('prox')) {
      const regenerar = () => { if (proxima.resultado && generarProxima) proxima.resultado = generarProxima(proxima.semanas); };
      document.getElementById('prox-cerrar').addEventListener('click', () => { proxima = { abierta: false, sobras: [], semanas: 1, resultado: null, dieta: null }; renderizarListaCompra(); });
      document.getElementById('prox-add').addEventListener('click', () => {
        const ing = document.getElementById('prox-ing').value;
        const g = Number(document.getElementById('prox-g').value);
        if (!ing || !Number.isFinite(g) || g <= 0 || g > 5000) return;
        proxima.sobras = Motor.normalizarSobras([...proxima.sobras, { ingrediente: ing, gramos: g }]);
        regenerar();
        renderizarListaCompra();
      });
      document.querySelectorAll('#prox .prox-quitar').forEach((b) => b.addEventListener('click', () => {
        proxima.sobras = proxima.sobras.filter((_, i) => i !== Number(b.dataset.i));
        regenerar();
        renderizarListaCompra();
      }));
      const repintarPlan = () => { if (vistaSemana && planActual) mostrarResultado(semanaActual, planActual, respuestasActuales, franjasActuales); else renderizarListaCompra(); };
      const guardar = document.getElementById('prox-guardar');
      if (guardar) guardar.addEventListener('click', () => {
        if (!proxima.dieta || !periodoDieta.inicio) return;
        siguiente = {
          inicio: Motor.inicioDeLaSiguiente(periodoDieta.inicio, periodoDieta.semanas), semanas: proxima.semanas,
          recetas: proxima.dieta.asignaciones.map((a) => ({ dia: a.dia, franja: a.franja, receta: a.receta })),
        };
        guardarSiguiente();
        repintarPlan();
      });
      const quitarG = document.getElementById('prox-quitar-guardada');
      if (quitarG) quitarG.addEventListener('click', () => { siguiente = null; guardarSiguiente(); repintarPlan(); });
      document.getElementById('prox-sem').addEventListener('change', (ev) => { proxima.semanas = Motor.semanasValidas(ev.target.value); regenerar(); renderizarListaCompra(); });
      document.getElementById('prox-generar').addEventListener('click', () => {
        if (!generarProxima) return;
        proxima.resultado = generarProxima(proxima.semanas);
        renderizarListaCompra();
        document.getElementById('prox-titulo')?.scrollIntoView({ block: 'nearest' });
      });
    }
    document.getElementById('periodo-semanas').addEventListener('change', (ev) => {
      periodoDieta.semanas = Motor.semanasValidas(ev.target.value);
      guardarPeriodoDieta();
      renderizarListaCompra();
    });
    document.getElementById('periodo-inicio').addEventListener('change', (ev) => {
      periodoDieta.inicio = Motor.esFechaValida(ev.target.value) ? ev.target.value : '';
      guardarPeriodoDieta();
      if (periodoDieta.inicio) {
        calInicio = Motor.lunesDelInicio(periodoDieta.inicio);
        guardarCalendarioLocal(); // repinta la semana con las fechas nuevas
        pintarCalendario();
      }
      renderizarListaCompra();
    });
    document.querySelectorAll('#lista-compra .dia-compra-check').forEach((chk) => {
      chk.addEventListener('change', () => {
        if (chk.checked) diasIncluidosCompra.add(chk.value); else diasIncluidosCompra.delete(chk.value);
        renderizarListaCompra();
      });
    });
    document.querySelectorAll('#lista-compra .marca-en-casa').forEach((chk) => {
      chk.addEventListener('change', () => {
        manualQuitado = null;
        if (chk.checked) marcadosEnCasa.set(chk.dataset.ingrediente, Number(chk.dataset.gramos)); else marcadosEnCasa.delete(chk.dataset.ingrediente);
        guardarListaManual();
        renderizarListaCompra();
      });
    });
    document.querySelectorAll('#lista-compra .marca-confirmar').forEach((btn) => {
      btn.addEventListener('click', () => {
        marcadosEnCasa.set(btn.dataset.ingrediente, Number(btn.dataset.gramos)); // confirma la nueva cantidad como cubierta
        guardarListaManual();
        renderizarListaCompra();
      });
    });
    document.querySelectorAll('#lista-compra .marca-en-casa-manual').forEach((chk) => {
      chk.addEventListener('change', () => {
        const articulo = articulosManuales.find((a) => a.id === chk.dataset.id);
        if (articulo) articulo.yaEnCasa = chk.checked;
        guardarListaManual();
        renderizarListaCompra();
      });
    });
    document.querySelectorAll('#lista-compra .quitar-manual').forEach((btn) => {
      btn.addEventListener('click', () => {
        const indice = articulosManuales.findIndex((a) => a.id === btn.dataset.id);
        if (indice >= 0) manualQuitado = { articulo: articulosManuales[indice], indice };
        articulosManuales = articulosManuales.filter((a) => a.id !== btn.dataset.id);
        guardarListaManual();
        renderizarListaCompra();
      });
    });
    const deshacerQuitar = document.getElementById('deshacer-quitar-manual');
    if (deshacerQuitar) deshacerQuitar.addEventListener('click', () => {
      articulosManuales.splice(Math.min(manualQuitado.indice, articulosManuales.length), 0, manualQuitado.articulo);
      manualQuitado = null;
      guardarListaManual();
      renderizarListaCompra();
    });
    document.getElementById('btn-anadir-manual').addEventListener('click', () => {
      manualQuitado = null;
      const nombre = document.getElementById('manual-nombre').value.trim();
      if (!nombre) return;
      const cantidad = document.getElementById('manual-cantidad').value.trim();
      const unidad = document.getElementById('manual-unidad').value.trim();
      articulosManuales.push({ id: `m${Date.now()}${Math.floor(Math.random() * 1000)}`, nombre, cantidad, unidad, yaEnCasa: false });
      guardarListaManual();
      renderizarListaCompra();
    });
    const btnBorrarManual = document.getElementById('btn-borrar-lista-manual');
    if (btnBorrarManual) btnBorrarManual.addEventListener('click', borrarListaManual);
  }

  // Issue #38: deshacer el último movimiento de sesión. Motor.deshacer() (#11) ya guarda el estado
  // anterior completo en semana.historial; aquí solo se restaura y se vuelve a calcular desde ese
  // perfil (no un recálculo "a medias": es exactamente el mismo cálculo que ya dio esos números antes
  // de mover nada, así que el resto de días queda idéntico sin necesidad de preservarlos a mano).
  function deshacerUltimoMovimiento() {
    const semanaRestaurada = Motor.deshacer(semanaActual);
    if (!semanaRestaurada) return;
    const diasAfectados = historialMovimientos.pop() || [];
    diasAfectados.forEach((dd) => diasAbiertos.add(dd));
    mensajeDeshacer = diasAfectados.length
      ? `↩️ Deshecho: ${diasAfectados.join(' y ')} ${diasAfectados.length === 1 ? 'vuelve' : 'vuelven'} a como estaban antes de mover la sesión.`
      : '↩️ Deshecho el último movimiento.';
    const planRestaurado = Motor.calcular(semanaRestaurada.perfil);
    mostrarResultado(semanaRestaurada, planRestaurado, respuestasActuales, franjasActuales);
  }

  function renderizarZonaDeshacer() {
    const zona = document.getElementById('zona-deshacer');
    if (!zona) return;
    const hayHistorial = (semanaActual.historial ?? []).length > 0;
    zona.innerHTML = `
      ${mensajeDeshacer ? `<p style="font-size:0.85rem;color:var(--verde);font-weight:600;margin:0 0 0.6rem">${mensajeDeshacer}</p>` : ''}
      ${hayHistorial ? '<button type="button" id="btn-deshacer">Deshacer último movimiento</button>' : ''}
    `;
    const btn = document.getElementById('btn-deshacer');
    if (btn) btn.addEventListener('click', deshacerUltimoMovimiento);
  }

  // --- Issue #51: detalle de una comida. Todo sale de las mismas fuentes que el resto de vistas: la
  // asignación de recetas (recetaPorSlot / huecoPorSlot), las horas del día (franjasDelDia), el reparto del
  // motor y las explicaciones de #47. Las recetas y elaboraciones son EJEMPLOS. ---
  function listaCompraDeDiasElegidos() {
    const dias = DIAS.filter((d) => diasIncluidosCompra.has(d));
    const asignaciones = Motor.filtrarPorDias(asignacionSemanaActual.asignaciones, dias);
    if (!asignaciones.length) return [];
    return Motor.generarListaCompra(asignaciones.map((a) => ({ recetaId: a.receta, veces: 1, racion: a.racionAjustada })), catalogoPlan(asignaciones), { esProtegido: Motor.noSeReescala });
  }

  function entrenosDelDia(dia) {
    return (semanaActual.perfil.sesiones ?? []).map((s, i) => ({ ...s, horaInicio: (ultimasSesiones[i] ?? {}).horaInicio, nota: (ultimasSesiones[i] ?? {}).nota, deporte: (ultimasSesiones[i] ?? {}).deporte })).filter((s) => s.dia === dia);
  }
  // #260 (punto 32): la sesión con las palabras de la persona («Pádel», «Cardio»), no con el nombre técnico de la tabla de actividades.
  function nombreSesion(s) {
    const suyo = String(s.deporte ?? '').trim();
    const t = suyo || (Motor.ACTIVIDADES[s.actividad] && Motor.ACTIVIDADES[s.actividad].nombre) || s.actividad;
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  // #260 (puntos 32 y 30): el tipo de día en palabras («día de carga», no «carga_alta»); un día con entreno no se llama «descanso».
  function nombreTipoDia(d, conEntreno) {
    const N = { fuerza: 'día de fuerza', suave: 'día suave', duro: 'día exigente', carga_alta: 'día de carga' };
    return d.tipo === 'descanso' ? (conEntreno ? 'día suave' : 'día sin entreno') : (N[d.tipo] ?? d.tipo);
  }
  const hayEntrenoEl = (dia) => (semanaActual && (semanaActual.perfil.sesiones ?? []).some((s) => s.dia === dia));

  let verCocido = false; // interruptor del detalle: el peso por defecto es en seco, el cocido es opcional
  let vistaDetalle = 'cantidades'; // qué parte del plato enseña la hoja: «cantidades» (ingredientes y gramos) o «receta» (elaboración)
  function abrirDetalleComida(dia, franja, vista) {
    if (!vistaSemana || !planActual) return;
    if (vista) vistaDetalle = vista;
    const NOMBRE = { desayuno: 'Desayuno', media_manana: 'Media mañana', comida: 'Comida', merienda: 'Merienda', cena: 'Cena' };
    const d = planActual.dias.find((x) => x.dia === dia);
    const { reparto } = vistaSemana.repartosPorDia.find((r) => r.dia.dia === dia);
    const f0 = reparto.franjas.find((x) => x.franja === franja);
    if (!f0) return;
    const nf = (x) => String(x).replace('.', ',');
    const f = { ...f0, proteina: nf(f0.proteina), grasa: nf(f0.grasa), hidrato: nf(f0.hidrato) }; // solo para mostrar con coma decimal
    const asignada = vistaSemana.recetaPorSlot.get(`${dia}|${franja}`);
    const hueco = vistaSemana.huecoPorSlot.get(`${dia}|${franja}`);
    const h = franjasDelDia(dia).find((x) => x.franja === franja);
    const hora = h && h.hora !== undefined ? horaDecimalATexto(h.hora) : undefined;

    document.getElementById('dc-titulo').textContent = `${NOMBRE[franja] ?? franja} · ${NOMBRE_DIA_LARGO[dia]}${hora ? ` · ${hora}` : ' · hora sin indicar'}`;

    let receta = '';
    if (asignada) {
      const comprados = new Map(listaCompraDeDiasElegidos().map((i) => [i.ingrediente, i.comprar]));
      const enCompra = diasIncluidosCompra.has(dia);
      const filas = Motor.ingredientesDeLaRacion(asignada.receta, asignada.racionAjustada, Motor.noSeReescala).map((i) => {
        const c = verCocido && Motor.pesoCocido(i.nombre, i.gramosRacion);
        return `
        <li class="dc-ing">
          <span class="dc-ing-nombre">${escaparHtml(i.nombre)}${i.protegido ? ' <small class="dc-ing-nota">cantidad fija</small>' : ''}${avisoGlutenHtml(i.nombre)}</span>
          <span class="dc-ing-gramos">${String(i.gramosRacion).replace('.', ',')} g${medidaAlLado(i.nombre, i.gramosRacion)}${c ?` <small class="dc-cocido">≈ ${c.gramos} g cocido</small>` : ''}</span>
          <span class="dc-ing-compra">${enCompra ? `en la compra de la semana: ${escaparHtml(comprados.get(i.nombre) ?? '—')}` : 'día fuera de la compra'}</span>
        </li>`;
      }).join('');
      const pasos = Motor.elaboracionEjemplo(asignada.receta.id, asignada.receta);
      const hayCocido = Motor.ingredientesDeLaRacion(asignada.receta, 1).some((i) => Motor.factorCocido(i.nombre));
      const bloqueCocido = hayCocido ? `
        <label class="check"><input type="checkbox" id="dc-ver-cocido" ${verCocido ? 'checked' : ''}> Ver también el peso en cocido</label>
        ${verCocido ? '<p class="dc-chiste">Los pesos son en seco. Lo único que tendrías que hacer es sacar el móvil y multiplicar por el factor (arroz ×2,5, pasta ×2,25…), pero tranquilo: para trabajar ya estamos nosotros.</p>' : ''}` : '';
      const vistas = `<div class="dc-vistas" role="group" aria-label="Qué quieres ver de este plato">${[['cantidades', 'Cantidades'], ['receta', 'Receta']].map(([v, t]) => `<button type="button" data-vista="${v}" aria-pressed="${vistaDetalle === v}">${t}</button>`).join('')}</div>`;
      const fila = (letra, clase, objetivo, deLaReceta) => `<tr><th><span class="chip chip-${clase}">${letra}</span></th><td>${objetivo}</td><td>${deLaReceta}</td></tr>`;
      // #257 (punto 15): se compara con lo que lleva la ración que se come (antes, los macros de la receta base).
      const servido = Motor.macrosConRacion(asignada.receta, asignada.racionAjustada);
      const cuadre = `
        <table class="dc-cuadre">
          <thead><tr><th></th><th>Tu objetivo</th><th>Tu ración</th></tr></thead>
          <tbody>
            <tr class="dc-cuadre-kcal"><th>kcal</th><td><strong>~${f.kcalAprox}</strong></td><td><strong>~${asignada.kcalResultante}</strong></td></tr>
            ${fila('P', 'p', `${f.proteina} g`, `~${nf(servido.proteina)} g`)}
            ${fila('G', 'g', `${f.grasa} g`, `~${nf(servido.grasa)} g`)}
            ${fila('H', 'h', `${f.hidrato} g`, `~${nf(servido.hidrato)} g`)}
          </tbody>
        </table>
        ${asignada.ajusteDia ? `<p class="dc-nota">⚖️ ${escaparHtml(asignada.ajusteDia.motivo)}</p>` : ''}
        <p class="dc-nota">La receta usa valores declarados (ración base ${asignada.receta.kcal} kcal), no medidos: sirve para acercarse a las kcal, no para clavar los macros.${asignada.protegidosSinEscalar && asignada.protegidosSinEscalar.length ? ` ${escaparHtml(asignada.protegidosSinEscalar.join(', '))} no se reescala${asignada.protegidosSinEscalar.length > 1 ? 'n' : ''}, así que las cifras son aproximadas.` : ''}</p>`;
      receta = `
        <h3 class="dc-plato">${escaparHtml(asignada.receta.nombre)} <span class="etq-ejemplo">EJEMPLO</span> <span class="dc-racion">${escaparHtml(Motor.racionEnPalabras(asignada.racionAjustada))}</span></h3>
        ${vistas}
        <div class="dc-parte" data-parte="cantidades"${vistaDetalle === 'cantidades' ? '' : ' hidden'}>
        <div class="dc-ings-cab"><span>Ingrediente</span><span>Lo que comes</span><span>Lo que compras</span></div>
        <ul class="dc-ings">${filas}</ul>
        ${bloqueCocido}
        </div>
        <div class="dc-parte" data-parte="receta"${vistaDetalle === 'receta' ? '' : ' hidden'}>
        <h3>Elaboración</h3>
        ${pasos ? `<ol class="dc-pasos">${pasos.map((p) => `<li>${escaparHtml(p)}</li>`).join('')}</ol>`
          : '<p><strong>Elaboración pendiente:</strong> esta receta no tiene pasos en su ficha y no se inventa una.</p>'}
        </div>
        <details class="dc-notas"><summary>Cómo encaja con tu objetivo</summary>
        ${cuadre}
        </details>
        <details class="dc-notas"><summary>Notas sobre los pesos</summary>
          <p class="dc-nota">La compra suma esta comida con las demás de los días elegidos y redondea hacia arriba (carne y pescado de 50 en 50 g, el resto de 25 en 25 g, huevos de 50 g): por eso no coincide con lo que se come. Los pesos son de ejemplo, en crudo, y están pendientes de validar; el cocido es orientativo.</p>
        </details>`;
    } else {
      receta = `
        <h3>⚠️ Sin receta de ejemplo para esta comida</h3>
        <p>${hueco ? escaparHtml(hueco.motivo) : 'Ninguna receta de ejemplo encaja.'}</p>
        <p class="dc-aviso">No se propone ninguna receta sustituta. Objetivo de la franja: P ${f.proteina} g · G ${f.grasa} g · H ${f.hidrato} g (~${f.kcalAprox} kcal).</p>`;
    }

    const contexto = `
      ${reparto.conflictos.filter((c) => c.franja === franja).map((c) => `<p class="error-inline">⚠️ ${escaparHtml(textoConflicto(c))}</p>`).join('')}
      <details class="dc-notas"><summary>¿Por qué estas cifras?</summary>
        <p class="dc-nota" data-tipo="${d.tipo}">${NOMBRE_DIA_LARGO[dia]} (${nombreTipoDia(d, hayEntrenoEl(d.dia))}) · ${NOMBRE[franja] ?? franja}${hora ? ` a las ${hora}` : ''}.</p>
        ${cuerpoPorque(Motor.explicarComida(f0, { tipoDia: d.tipo, pesoRef: planActual.proteina.pesoReferencia, proteinaDia: d.proteinaG, hidratoDia: d.hidratoG, grasaDia: d.grasaG }))}
        ${asignada ? cuerpoPorque(Motor.explicarRacion({ kcalReceta: asignada.receta.kcal, kcalObjetivo: f0.kcalAprox, racion: asignada.racionAjustada, kcalResultante: asignada.kcalResultante, protegidos: Motor.ingredientesDeLaRacion(asignada.receta, asignada.racionAjustada, Motor.noSeReescala).filter((i) => i.protegido).map((i) => i.nombre) })) : ''}
      </details>`;

    document.getElementById('dc-cuerpo').innerHTML = receta + contexto
      + `<div class="dc-acciones"><button type="button" class="btn-secundario" id="dc-cambiar">Cambiar receta de esta comida</button></div>`;
    document.getElementById('dc-cambiar').addEventListener('click', () => abrirAlternativas(dia, franja));
    const botonesVista = document.querySelectorAll('#dc-cuerpo .dc-vistas button');
    botonesVista.forEach((b) => b.addEventListener('click', () => {
      vistaDetalle = b.dataset.vista;
      botonesVista.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      document.querySelectorAll('#dc-cuerpo .dc-parte').forEach((p) => { p.hidden = p.dataset.parte !== vistaDetalle; });
    }));
    const chkCocido = document.getElementById('dc-ver-cocido');
    if (chkCocido) chkCocido.addEventListener('change', () => { verCocido = chkCocido.checked; abrirDetalleComida(dia, franja); const nuevo = document.getElementById('dc-ver-cocido'); if (nuevo) nuevo.focus(); });
    const dlg = document.getElementById('detalle-comida');
    if (!dlg.open) { disparadorDetalle = document.activeElement; dlg.showModal(); }
    document.getElementById('dc-titulo').focus();
  }
  document.addEventListener('click', (ev) => {
    const b = ev.target.closest && ev.target.closest('.hor-ir');
    if (!b) return;
    diasHorarioAbiertos.add(b.dataset.dia);
    diasMasAbiertos.add(b.dataset.dia); // el horario vive dentro de «Más opciones de este día»
    mostrarResultado(semanaActual, planActual, respuestasActuales, franjasActuales);
    const panel = document.querySelector(`#r-dias .horario-dia[data-dia="${b.dataset.dia}"]`);
    if (panel) { panel.scrollIntoView({ block: 'center' }); const i = panel.querySelector('input'); if (i) i.focus(); }
  });
  let disparadorDetalle = null; // para devolver el foco al botón que abrió el detalle
  document.addEventListener('click', (ev) => {
    const b = ev.target.closest && ev.target.closest('.ver-comida');
    if (b) { abrirDetalleComida(b.dataset.dia, b.dataset.franja, 'cantidades'); return; }
    const h = ev.target.closest && ev.target.closest('.hoy-accion, .hoy-fila-comida'); // botones de «Hoy»: receta, cantidades o cambiar
    if (!h) return;
    if (h.dataset.vista === 'fuera') abrirComidaFuera(h.dataset.dia, h.dataset.franja);
    else if (h.dataset.vista === 'cambiar') abrirAlternativas(h.dataset.dia, h.dataset.franja);
    else abrirDetalleComida(h.dataset.dia, h.dataset.franja, h.dataset.vista);
  });
  (() => {
    const dlg = document.getElementById('detalle-comida');
    const cerrar = () => dlg.close();
    dlg.addEventListener('close', () => {
      if (disparadorDetalle && document.body.contains(disparadorDetalle) && disparadorDetalle.getClientRects().length > 0) disparadorDetalle.focus();
      else if (disparadorDetalle) { const t = document.querySelector('#tabs-app [aria-selected="true"]'); if (t) t.focus(); } // origen ya no existe
      disparadorDetalle = null;
    });
    document.getElementById('dc-cerrar').addEventListener('click', cerrar);
    document.getElementById('dc-volver').addEventListener('click', cerrar);
    // Clic en el fondo: solo cierra si el gesto EMPIEZA y TERMINA fuera de la caja del cuadro. Un clic con ev.target===dlg
    // también ocurre al soltar tras seleccionar texto dentro, y no debe cerrarlo (#98).
    let empezoFuera = false;
    const fueraDeLaCaja = (ev) => {
      const r = dlg.getBoundingClientRect();
      return ev.clientX < r.left || ev.clientX > r.right || ev.clientY < r.top || ev.clientY > r.bottom;
    };
    dlg.addEventListener('mousedown', (ev) => { empezoFuera = ev.target === dlg && fueraDeLaCaja(ev); });
    dlg.addEventListener('click', (ev) => { if (ev.target === dlg && empezoFuera && fueraDeLaCaja(ev)) cerrar(); empezoFuera = false; });
  })();

  const NOMBRE_FRANJA_CAMBIO = { desayuno: 'Desayuno', media_manana: 'Media mañana', comida: 'Comida', merienda: 'Merienda', cena: 'Cena' };
  function nombreSlot(clave) { const [d, f] = String(clave).split('|'); return NOMBRE_DIA_LARGO[d] ? `${NOMBRE_FRANJA_CAMBIO[f] ?? f} del ${NOMBRE_DIA_LARGO[d].toLowerCase()}` : 'una comida'; }

  function pintarZonaSustituciones() {
    const z = document.getElementById('zona-sustituciones');
    if (!z) return;
    let html = '';
    if (avisoSustituciones.length) {
      html += `<div class="cambio-zona aviso-inval"><strong>Algún cambio de receta ya no es válido y se ha quitado:</strong>
        <ul class="resumen-lista">${avisoSustituciones.map((i) => `<li>${escaparHtml(nombreSlot(i.clave))}: ${escaparHtml(i.motivo)}.</li>`).join('')}</ul>
        <button type="button" class="btn-texto" id="aviso-sust-cerrar">Entendido</button></div>`;
    }
    if (historialSustituciones.length) {
      const ultimo = Object.keys(sustituciones).find((k) => !(k in historialSustituciones[historialSustituciones.length - 1]) || historialSustituciones[historialSustituciones.length - 1][k] !== sustituciones[k]);
      html += `<div class="cambio-zona">Has cambiado la receta de ${ultimo ? escaparHtml(nombreSlot(ultimo)) : 'una comida'}.
        <button type="button" class="btn-texto" id="deshacer-sustitucion">↩ Deshacer cambio de receta</button></div>`;
    }
    z.innerHTML = html;
    const cerrar = document.getElementById('aviso-sust-cerrar');
    if (cerrar) cerrar.addEventListener('click', () => { avisoSustituciones = []; pintarZonaSustituciones(); });
    const des = document.getElementById('deshacer-sustitucion');
    if (des) des.addEventListener('click', () => {
      sustituciones = historialSustituciones.pop();
      guardarSustituciones();
      mostrarResultado(semanaActual, planActual, respuestasActuales, franjasActuales);
    });
  }

  // Alternativas de una comida (vista previa sin escribir nada; solo «Sustituir receta» cambia el plan).
  function abrirAlternativas(dia, franja) {
    if (!vistaSemana || !planActual) return;
    const clave = `${dia}|${franja}`;
    const slot = vistaSemana.slots.find((x) => x.dia === dia && x.franja === franja);
    if (!slot) return;
    const actual = vistaSemana.recetaPorSlot.get(clave);
    const hueco = vistaSemana.huecoPorSlot.get(clave);
    // Variedad (decisión de Pablo, #77): máx. 2 del mismo plato entre comidas y cenas de la semana; otras franjas exentas.
    const usos = Motor.usosVariedadSemana(asignacionSemanaActual.asignaciones, clave);
    const { alternativas, descartadas } = Motor.alternativasParaSlot(slot, RECETAS_EJEMPLO, {
      alergiasPreferencias: restriccionesActuales ?? undefined, actual: actual ? actual.receta.id : undefined, usosSemana: usos,
    });
    const h = franjasDelDia(dia).find((x) => x.franja === franja);
    document.getElementById('dc-titulo').textContent = `Cambiar receta · ${nombreSlot(clave)}${h && h.hora !== undefined ? ` · ${horaDecimalATexto(h.hora)}` : ''}`;
    // #259 (punto 28): primero las 8 que mejor encajan con las kcal de esta comida; el resto, con «Ver más».
    const PRIMERAS_ALT = 8;
    const tarjetas = alternativas.map((a, i) => `
      <li class="alt-card"${i >= PRIMERAS_ALT ? ' hidden data-mas-alt' : ''}>
        <div class="titulo">${escaparHtml(a.receta.nombre)} <span class="rec-etiqueta">EJEMPLO</span></div>
        <div class="dato">~${a.kcalResultante} kcal</div>
        ${a.avisos.length ? `<details class="saber-mas"><summary>Aviso sobre este plato</summary>${a.avisos.map((x) => `<div class="aviso">⚠️ ${escaparHtml(x)}.</div>`).join('')}</details>` : ''}
        <div class="alt-acciones"><button type="button" class="btn-secundario alt-previsualizar" data-i="${i}" aria-label="Ver cómo quedaría: ${escaparHtml(a.receta.nombre)}">Ver cómo quedaría</button></div>
      </li>`).join('');
    const bloqueadasPorVariedad = descartadas.filter((d) => d.motivo.includes('tercera aparición'));
    const motivos = descartadas.length ? `
      <details class="como-importar"><summary>Recetas no disponibles para esta comida y por qué</summary>
        <ul>${descartadas.map((d) => `<li><strong>${escaparHtml(d.receta.nombre)}:</strong> ${escaparHtml(d.motivo)}.</li>`).join('')}</ul></details>` : '';
    document.getElementById('dc-cuerpo').innerHTML = `
      <p>${actual ? `Ahora: <strong>${escaparHtml(actual.receta.nombre)}</strong>.` : `Ahora: sin receta de ejemplo${hueco ? ` (${escaparHtml(hueco.motivo)})` : ''}.`}</p>
      ${dia === LETRA_DIA_JS[new Date().getDay()] ? '<button type="button" class="btn-secundario" id="alt-fuera">He comido fuera</button> ' : ''}<button type="button" class="btn-secundario" id="alt-fuera-antes">Voy a comer fuera</button>
      ${alternativas.length ? `<ul class="alt-lista">${tarjetas}</ul>${alternativas.length > PRIMERAS_ALT ? `<button type="button" class="btn-texto" id="alt-ver-mas">Ver más (${alternativas.length - PRIMERAS_ALT})</button>` : ''}` : `<p class="error-inline">No hay ninguna receta de ejemplo compatible para esta comida${bloqueadasPorVariedad.length ? ' que respete el límite de variedad' : ''}. No se cambia nada ni se rebajan tus restricciones.</p>`}
      ${motivos}
      <details class="saber-mas"><summary>Saber más</summary><p>Cambia solo esta comida: no añade otra ni registra que la hayas tomado, y el resto de la semana y tus objetivos no se tocan. Las opciones <strong>no son equivalentes nutricionales</strong>: solo cumplen tus restricciones, el validador de platos, la variedad semanal en comidas y cenas (máx. 2 veces el mismo plato) y la franja. Las kcal y macros de las recetas de ejemplo son aproximados.</p></details>
      <div id="alt-previa"></div>
      <div class="dc-acciones"><button type="button" class="btn-texto" id="alt-cancelar">Cancelar y volver al detalle</button></div>`;
    document.getElementById('dc-cuerpo').querySelectorAll('.alt-previsualizar').forEach((b) => b.addEventListener('click', () => previsualizarAlternativa(dia, franja, alternativas[Number(b.dataset.i)], slot, b)));
    document.getElementById('alt-cancelar').addEventListener('click', () => abrirDetalleComida(dia, franja));
    const verMasAlt = document.getElementById('alt-ver-mas');
    if (verMasAlt) verMasAlt.addEventListener('click', () => { document.querySelectorAll('[data-mas-alt]').forEach((li) => { li.hidden = false; }); verMasAlt.remove(); });
    const botonFuera = document.getElementById('alt-fuera');
    if (botonFuera) botonFuera.addEventListener('click', () => abrirComidaFuera(dia, franja));
    document.getElementById('alt-fuera-antes').addEventListener('click', () => abrirComidaFuera(dia, franja, true));
    const dlg = document.getElementById('detalle-comida');
    if (!dlg.open) { disparadorDetalle = document.activeElement; dlg.showModal(); }
    document.getElementById('dc-titulo').focus();
  }
  // «He comido fuera» (Pablo, 08/10): se apunta qué se comió y, si se saben, las kcal; se compara con lo previsto y la comida
  // queda como hecha. Con kcal apuntadas, el resto del día se regula. El buscador de platos y cadenas llegará con su tabla de datos.
  // #265 H (Pablo: «Sí, con antelación»): con `prevista`, «Voy a comer fuera»: se elige el día (desde hoy) y la comida, no se marca
  // como hecha, y ese día se cuadra entero; si no sabe qué tomará, la cifra típica de restaurante con su fuente. Se puede quitar.
  function abrirComidaFuera(dia, franja, prevista = false) {
    if (!vistaSemana || !planActual) return;
    const iso = prevista ? fechaProximaDe(dia) : Motor.fechaLocalISO(new Date());
    const { reparto } = vistaSemana.repartosPorDia.find((r) => r.dia.dia === dia);
    const f = reparto.franjas.find((x) => x.franja === franja);
    if (!f) return;
    const previa = comidasFuera.find((x) => x.fecha === iso && x.franja === franja);
    document.getElementById('dc-titulo').textContent = prevista ? 'Voy a comer fuera' : `Comida fuera · ${nombreSlot(`${dia}|${franja}`)}`;
    const tipica = Motor.cifraTipicaRestaurante(TABLA_COMER_FUERA, franja);
    const diasElegibles = vistaSemana.repartosPorDia.map((r) => r.dia.dia).map((d) => ({ d, iso: fechaProximaDe(d) })).sort((a, b) => a.iso.localeCompare(b.iso));
    const bloqueAntes = prevista ? `
      <div class="campo"><label for="fuera-dia">Día</label><select id="fuera-dia" style="font-size:16px">${diasElegibles.map((x, i) => `<option value="${x.d}"${x.d === dia ? ' selected' : ''}>${i === 0 && x.iso === Motor.fechaLocalISO(new Date()) ? 'Hoy' : NOMBRE_DIA_LARGO[x.d]} ${Number(x.iso.slice(8))}</option>`).join('')}</select></div>
      <div class="campo"><label for="fuera-franja">Comida</label><select id="fuera-franja" style="font-size:16px">${reparto.franjas.map((x) => `<option value="${x.franja}"${x.franja === franja ? ' selected' : ''}>${escaparHtml(NOMBRE_FRANJA_CAMBIO[x.franja] ?? x.franja)}</option>`).join('')}</select></div>
      <label class="check"><input type="checkbox" id="fuera-no-se"${previa && previa.tipica ? ' checked' : ''}> Todavía no sé qué tomaré</label>
      <p class="una-linea" id="fuera-tipica"${previa && previa.tipica ? '' : ' hidden'}>${tipica ? `Se reserva una cifra típica de comida de restaurante: ~${tipica.kcal} kcal (${escaparHtml(tipica.tamano)}; <a href="${escaparHtml(tipica.fuenteUrl)}" target="_blank" rel="noopener">fuente</a>, consultada el ${escaparHtml(tipica.fecha)}). Si luego sabes qué tomaste, cámbialo aquí.` : 'Todavía no hay una cifra típica con fuente para esta comida: se guarda sin calorías y el día no se ajusta. Si sabes las calorías, escríbelas.'}</p>` : '';
    document.getElementById('dc-cuerpo').innerHTML = `${bloqueAntes}
      <div class="campo" id="fuera-campo-texto"><label for="fuera-texto">${prevista ? '¿Qué vas a tomar?' : '¿Qué has comido?'}</label><input id="fuera-texto" type="text" maxlength="120" autocomplete="off" placeholder="Ej.: una pizza de Telepizza con una Coca-Cola de lata"></div>
      <button type="button" class="btn-secundario" id="fuera-calcular" style="margin:0 0 0.6rem">Calcular las calorías</button>
      <div id="fuera-desglose" aria-live="polite"></div>
      <div class="campo"><label for="fuera-kcal">Calorías aproximadas, si las sabes</label><input id="fuera-kcal" type="number" inputmode="numeric" min="0" max="5000" step="10" placeholder="Ej.: 850"></div>
      <p class="una-linea">Tu plan preveía ~${f.kcalAprox} kcal para esta comida. Si apuntas las calorías, el resto ${prevista ? 'de ese día' : 'del día'} se ajusta solo, con raciones normales. Vale solo para ${prevista ? 'ese día' : 'hoy'}.</p>
      <p class="error-inline" id="fuera-error" role="alert" hidden></p>
      <div class="dc-acciones">
        <button type="button" class="btn-principal" id="fuera-guardar">Guardar</button>
        ${previa ? `<button type="button" class="btn-texto" id="fuera-quitar">${previa.prevista ? 'Ya no voy a comer fuera' : 'Quitar esta anotación'}</button>` : ''}
        <button type="button" class="btn-texto" id="fuera-volver">Volver a las opciones</button>
      </div>`;
    const campoTexto = document.getElementById('fuera-texto');
    const campoKcal = document.getElementById('fuera-kcal');
    if (previa && !previa.tipica) { campoTexto.value = previa.texto; if (previa.kcal !== undefined) campoKcal.value = previa.kcal; }
    const noSe = document.getElementById('fuera-no-se');
    if (prevista) {
      const otra = () => abrirComidaFuera(document.getElementById('fuera-dia').value, document.getElementById('fuera-franja').value, true);
      document.getElementById('fuera-dia').addEventListener('change', otra);
      document.getElementById('fuera-franja').addEventListener('change', otra);
      const pintarNoSe = () => { document.getElementById('fuera-tipica').hidden = !noSe.checked; document.getElementById('fuera-campo-texto').hidden = noSe.checked; document.getElementById('fuera-calcular').hidden = noSe.checked; };
      noSe.addEventListener('change', pintarNoSe);
      pintarNoSe();
    }
    // #161: desglose de calorías desde lo escrito, con la tabla de Instinct. Nunca se calla: o hay desglose, o dice qué no reconoce.
    const desglose = document.getElementById('fuera-desglose');
    let items = []; // { linea, unidadMin, unidadMax, cantidad }
    let sinReconocer = [];
    let calculado = false;
    let textoCalculado = '';
    let kcalAuto = ''; // la última cifra que puso el cálculo (si la persona la cambia a mano, ya no se toca)
    const miles = (n) => Math.round(n).toLocaleString('es-ES');
    const rangoTxt = (a, b) => (Math.round(a) === Math.round(b) ? `${miles(a)} kcal` : `${miles(a)}–${miles(b)} kcal`);
    const totales = () => ({ min: items.reduce((s, i) => s + i.unidadMin * i.cantidad, 0), max: items.reduce((s, i) => s + i.unidadMax * i.cantidad, 0) });
    const pintarDesglose = () => {
      if (!calculado) { desglose.innerHTML = ''; return; }
      const t = totales();
      const lineas = items.map((it, k) => `
        <li class="item-compra fuera-linea" data-k="${k}">
          <div style="flex:1;min-width:0"><strong>${escaparHtml(it.linea.nombre)}</strong> · ${it.linea.comoMinimo ? `como mínimo ${miles(it.unidadMin * it.cantidad)} kcal` : rangoTxt(it.unidadMin * it.cantidad, it.unidadMax * it.cantidad)} <span class="etq-ejemplo">${it.linea.comoMinimo ? 'COMO MÍNIMO' : it.linea.estado === 'oficial' ? 'OFICIAL' : 'ESTIMADA'}</span>${it.linea.nota && it.linea.estado === 'oficial' ? `<br><span class="una-linea">${escaparHtml(it.linea.nota)}</span>` : ''}
            ${it.linea.nota && it.linea.estado !== 'oficial' ? `<details${it.linea.comoMinimo ? ' open' : ''}><summary>Por qué ${it.linea.comoMinimo ? 'solo un mínimo' : 'un rango'}</summary><p class="una-linea">${escaparHtml(it.linea.nota)}</p></details>` : ''}
            ${it.linea.opciones ? `<label class="una-linea" for="fuera-var-${k}">¿Cuál? (para afinar)</label><select id="fuera-var-${k}" class="fuera-variedad" data-k="${k}" style="font-size:16px"><option value="">Sin elegir</option>${[...new Set(it.linea.opciones)].map((o) => `<option>${escaparHtml(o)}</option>`).join('')}</select>` : ''}
          </div>
          <div class="fuera-cantidad" style="display:flex;align-items:center;gap:0.3rem">
            <button type="button" class="btn-texto fuera-menos" data-k="${k}" aria-label="Menos cantidad de ${escaparHtml(it.linea.nombre)}">−</button>
            <span aria-live="polite">${String(it.cantidad).replace('.', ',')}</span>
            <button type="button" class="btn-texto fuera-mas" data-k="${k}" aria-label="Más cantidad de ${escaparHtml(it.linea.nombre)}">+</button>
          </div>
        </li>`).join('');
      desglose.innerHTML = `
        ${items.length ? `<ul class="resumen-lista">${lineas}</ul>
        <p><strong>Total: ${items.some((i) => i.linea.comoMinimo) ? `como mínimo ${miles(t.min)} kcal` : rangoTxt(t.min, t.max)}</strong>${t.min === t.max ? '' : ` · para ajustar el día se usa el punto medio (${miles((t.min + t.max) / 2)} kcal)`}${items.some((i) => i.linea.comoMinimo) ? ' · para ajustar el día se usa ese mínimo' : ''}</p>` : ''}
        ${sinReconocer.length ? `<p class="una-linea" id="fuera-no-reconocido">No lo encuentro: ${sinReconocer.map(escaparHtml).join('; ')}. Pon las kcal del total si las sabes, o escríbelo de otra forma (por ejemplo, «ración de croquetas»).</p>` : ''}
        ${!items.length && !sinReconocer.length ? '<p class="una-linea">No he reconocido nada: escribe las calorías tú.</p>' : ''}`;
      if (!items.length && campoKcal.value === kcalAuto) { campoKcal.value = ''; kcalAuto = ''; } // nada reconocido: no queda la cifra del cálculo anterior (#189)
      // #258 (punto 12): si falta algo por encontrar, no se deja puesta una cifra parcial (al guardar parecería el total de la comida).
      if (sinReconocer.length && campoKcal.value === kcalAuto) { campoKcal.value = ''; kcalAuto = ''; }
      if (items.length && !sinReconocer.length) { campoKcal.value = String(items.some((i) => i.linea.comoMinimo) ? Math.round(t.min / 10) * 10 : Math.round((t.min + t.max) / 20) * 10); kcalAuto = campoKcal.value; }
      desglose.querySelectorAll('.fuera-menos, .fuera-mas').forEach((b) => b.addEventListener('click', () => {
        const it = items[Number(b.dataset.k)];
        it.cantidad = Math.max(0.5, Math.min(20, it.cantidad + (b.classList.contains('fuera-mas') ? 0.5 : -0.5)));
        pintarDesglose();
      }));
      desglose.querySelectorAll('.fuera-variedad').forEach((s) => s.addEventListener('change', () => {
        const it = items[Number(s.dataset.k)];
        if (!s.value) return;
        const afinada = Motor.estimarComidaFuera(`${/pizza/i.test(it.linea.nombre) ? 'pizza ' : ''}${s.value} ${it.linea.cadena}`, TABLA_COMER_FUERA).lineas[0];
        if (afinada) items[Number(s.dataset.k)] = { linea: afinada, unidadMin: afinada.kcalMin / afinada.cantidad, unidadMax: afinada.kcalMax / afinada.cantidad, cantidad: it.cantidad };
        pintarDesglose();
      }));
    };
    const calcular = () => {
      const r = Motor.estimarComidaFuera(campoTexto.value, TABLA_COMER_FUERA);
      items = r.lineas.map((l) => ({ linea: l, unidadMin: l.kcalMin / l.cantidad, unidadMax: l.kcalMax / l.cantidad, cantidad: l.cantidad }));
      sinReconocer = r.sinReconocer;
      calculado = true;
      textoCalculado = campoTexto.value;
      pintarDesglose();
      return r;
    };
    document.getElementById('fuera-calcular').addEventListener('click', () => { if (campoTexto.value.trim()) calcular(); });
    let pausa = null;
    campoTexto.addEventListener('input', () => { clearTimeout(pausa); pausa = setTimeout(() => { if (campoTexto.value.trim().length > 3) calcular(); }, 600); });
    const dlg = document.getElementById('detalle-comida');
    const terminar = () => {
      try { localStorage.setItem(CLAVE_HECHAS, JSON.stringify(comidasHechas)); localStorage.setItem(CLAVE_FUERA, JSON.stringify(comidasFuera)); } catch { falloAlmacenamiento(); }
      dlg.close();
      if (vistaSemana && planActual) mostrarResultado(semanaActual, planActual, respuestasActuales, franjasActuales); // el resto del día se regula
      if (panelActual === 'hoy') pintarHoy();
    };
    const avisar = (texto, campo) => { const e = document.getElementById('fuera-error'); e.textContent = texto; e.hidden = false; campo.focus(); };
    [campoTexto, campoKcal].forEach((c) => c.addEventListener('input', () => { document.getElementById('fuera-error').hidden = true; }));
    document.getElementById('fuera-guardar').addEventListener('click', () => {
      if (prevista && noSe.checked) {
        const kcalTip = campoKcal.value.trim() !== '' && Number.isFinite(Number(campoKcal.value)) ? Number(campoKcal.value) : tipica && tipica.kcal;
        comidasFuera = comidasFuera.filter((x) => !(x.fecha === iso && x.franja === franja))
          .concat({ fecha: iso, franja, texto: 'Aún sin decidir', prevista: true, ...(Number.isFinite(kcalTip) ? { kcal: Math.round(kcalTip) } : {}), ...(tipica && campoKcal.value.trim() === '' ? { tipica: true, fuente: tipica.fuenteUrl } : {}) }).slice(-30);
        terminar();
        return;
      }
      const texto = campoTexto.value.trim().slice(0, 120);
      const kcal = campoKcal.value.trim() === '' ? undefined : Number(campoKcal.value);
      if (!texto) { avisar(prevista ? 'Escribe qué vas a tomar, aunque sea por encima, o marca «Todavía no sé qué tomaré».' : 'Escribe qué has comido, aunque sea por encima.', campoTexto); return; }
      if (campoKcal.value.trim() === '' && textoCalculado !== campoTexto.value) {
        // Sin calorías apuntadas: se calculan del texto y se enseña el desglose antes de guardar (nunca se queda igual en silencio).
        calcular();
        return;
      }
      if (kcal !== undefined && !(Number.isFinite(kcal) && kcal >= 0 && kcal <= 5000)) { avisar('Las calorías tienen que ser un número entre 0 y 5000; si no las sabes, déjalo vacío.', campoKcal); return; }
      comidasFuera = comidasFuera.filter((x) => !(x.fecha === iso && x.franja === franja))
        .concat({ fecha: iso, franja, texto, ...(kcal !== undefined ? { kcal: Math.round(kcal) } : {}), ...(prevista ? { prevista: true } : {}) }).slice(-30);
      if (!prevista) { // lo previsto aún no se ha comido
        const hechas = hechasDe(iso);
        if (!hechas.includes(franja)) hechas.push(franja);
        porValorar = null; // la pregunta de cantidad es sobre las raciones del plan: aquí no aplica
      }
      terminar();
    });
    const quitar = document.getElementById('fuera-quitar');
    if (quitar) {
      quitar.addEventListener('click', () => {
        comidasFuera = comidasFuera.filter((x) => !(x.fecha === iso && x.franja === franja));
        if (!prevista) comidasHechas.franjas = hechasDe(iso).filter((x) => x !== franja);
        terminar();
      });
    }
    document.getElementById('fuera-volver').addEventListener('click', () => abrirAlternativas(dia, franja));
    if (!dlg.open) { disparadorDetalle = document.activeElement; dlg.showModal(); }
    campoTexto.focus();
  }

  function previsualizarAlternativa(dia, franja, alt, slot, botonOrigen) {
    const clave = `${dia}|${franja}`;
    const diasElegidos = DIAS.filter((d) => diasIncluidosCompra.has(d));
    const lista = (asignaciones) => new Map(Motor.generarListaCompra(
      Motor.filtrarPorDias(asignaciones, diasElegidos).map((a) => ({ recetaId: a.receta, veces: 1, racion: a.racionAjustada })),
      catalogoPlan(asignaciones), { esProtegido: Motor.noSeReescala },
    ).map((i) => [i.ingrediente, i.gramosTotales]));
    const antes = asignacionSemanaActual.asignaciones;
    const despues = antes.filter((a) => `${a.dia}|${a.franja}` !== clave).concat([{ dia, franja, receta: alt.receta.id, racionAjustada: alt.racionAjustada, kcalResultante: alt.kcalResultante }]);
    const la = antes.length ? lista(antes) : new Map();
    const ld = lista(despues);
    const cambios = [...new Set([...la.keys(), ...ld.keys()])].map((n) => [n, (ld.get(n) ?? 0) - (la.get(n) ?? 0)]).filter(([, d]) => Math.abs(d) > 0.05)
      .map(([n, d]) => `<li>${escaparHtml(n)}: ${d > 0 ? '+' : '−'}${String(Math.abs(Math.round(d * 10) / 10)).replace('.', ',')} g</li>`).join('');
    const ings = Motor.ingredientesDeLaRacion(alt.receta, alt.racionAjustada, Motor.noSeReescala)
      .map((i) => `<li>${escaparHtml(i.nombre)}: <strong>${String(i.gramosRacion).replace('.', ',')} g</strong>${i.protegido ? ' (no se escala)' : ''}${avisoGlutenHtml(i.nombre)}</li>`).join(''); // #256.6: el sello, también aquí
    document.getElementById('alt-previa').innerHTML = `
      <div class="cambio-zona" style="margin-top:0.8rem" tabindex="-1" id="alt-previa-caja">
        <strong>Así quedaría: ${escaparHtml(alt.receta.nombre)} (EJEMPLO, ${escaparHtml(Motor.racionEnPalabras(alt.racionAjustada))})</strong>
        <p style="margin:0.3rem 0">Ingredientes de esta comida:</p><ul class="resumen-lista">${ings}</ul>
        <p style="margin:0.3rem 0">Efecto en la compra (días elegidos, gramos de la dieta antes de redondear): ${cambios ? '' : 'sin cambios.'}</p>
        ${cambios ? `<ul class="resumen-lista">${cambios}</ul>` : ''}
        <p class="dc-aviso" style="color:var(--gris)">Objetivo de la comida (lo calcula el plan, no cambia): ~${slot.kcalObjetivo} kcal. La receta aporta ~${alt.kcalResultante} kcal aproximadas.</p>
        <div class="alt-acciones">
          <button type="button" class="btn-principal" id="alt-confirmar">Sustituir receta</button>
          <button type="button" class="btn-secundario" id="alt-descartar">Cancelar</button>
        </div>
      </div>`;
    document.getElementById('alt-previa-caja').focus();
    document.getElementById('alt-descartar').addEventListener('click', () => {
      document.getElementById('alt-previa').innerHTML = '';
      if (botonOrigen) botonOrigen.focus(); // el foco vuelve al control que abrió la vista previa (#80)
    });
    document.getElementById('alt-confirmar').addEventListener('click', () => {
      historialSustituciones.push({ ...sustituciones });
      sustituciones[clave] = alt.receta.id;
      guardarSustituciones();
      disparadorDetalle = null; // el botón de origen se vuelve a pintar: el foco se coloca a mano más abajo
      document.getElementById('detalle-comida').close();
      mostrarResultado(semanaActual, planActual, respuestasActuales, franjasActuales);
      enfocarTrasCambio(dia, franja);
    });
  }

  // Tras confirmar un cambio de receta se re-pinta la pantalla: el foco va al «Deshacer cambio de receta» si se ve,
  // si no al botón de esa misma comida, y si tampoco a la pestaña activa (nunca se queda perdido en <body>).
  function enfocarTrasCambio(dia, franja) {
    const visible = (e) => e && e.getClientRects().length > 0;
    const candidatos = [
      document.getElementById('deshacer-sustitucion'),
      document.querySelector(`.ver-comida[data-dia="${dia}"][data-franja="${franja}"]`),
      document.querySelector('#tabs-app [aria-selected="true"]'),
    ];
    const destino = candidatos.find(visible);
    if (destino) destino.focus();
  }

  function horarioDiaHtml(dia) {
    const NOMBRE = { desayuno: 'Desayuno', media_manana: 'Media mañana', comida: 'Comida', merienda: 'Merienda', cena: 'Cena' };
    const hayExcepcion = excepcionesHorario.has(dia);
    const abierto = diasHorarioAbiertos.has(dia);
    return `
      <button type="button" class="horario-toggle" aria-expanded="${abierto}" aria-controls="panel-horario-${dia}">${abierto ? 'Ocultar horario de comidas ▴' : 'Horario de comidas de este día ▾'}${hayExcepcion ? ' · distinto del general' : ''}</button>
      <div class="horario-dia" id="panel-horario-${dia}" data-dia="${dia}" ${abierto ? '' : 'hidden'}>
        <p style="font-size:0.8rem;color:var(--gris);margin:0 0 0.5rem">
          Cambia solo las horas de este día (por ejemplo, por un turno); el resto de la semana sigue con el horario general.
          No cambia las kcal ni los macros del día, solo cómo se reparten entre las comidas.
        </p>
        ${franjasDelDia(dia).map((f) => `
          <div class="campo"><label for="hor-${dia}-${f.franja}">${NOMBRE[f.franja] ?? f.franja}</label>
            <input type="time" id="hor-${dia}-${f.franja}" class="hor-campo" data-franja="${f.franja}" value="${f.hora !== undefined ? horaDecimalATexto(f.hora) : ''}"></div>
        `).join('')}
        <p class="error-inline" role="alert" hidden></p>
        <button type="button" class="btn-secundario hor-aplicar">Aplicar a este día</button>
        ${hayExcepcion ? '<button type="button" class="btn-texto hor-reset">Volver al horario general</button>' : ''}
      </div>
    `;
  }

  function mostrarResultado(semana, plan, respuestas, franjasBloque7) {
    // Issue #18: se guarda el estado para poder mover una sesión de día sin volver al formulario.
    // Issue #124: con una competición cerca se ajusta la semana; el plan base se conserva (plan.planBase) para poder volver a calcular sin acumular cambios.
    const estadoSiguiente = estadoSiguienteHoy(); // #164: puede cambiar el inicio de la dieta y el lunes del calendario, por eso va antes
    const planBase = plan.planBase ?? plan;
    const compSem = calInicio && competiciones.length ? Motor.aplicarCompeticion(planBase, semana.perfil, competiciones, calInicio, Motor.fechaLocalISO(new Date())) : null;
    plan = compSem && compSem.activa ? { ...compSem.plan, planBase } : planBase;
    const compPorDia = new Map((compSem ? compSem.dias : []).map((x) => [x.dia, x]));
    semanaActual = semana;
    planActual = plan;
    respuestasActuales = respuestas;
    franjasActuales = franjasBloque7;

    document.getElementById('r-basal').textContent = plan.basal.kcal; // #260.30: sin el nombre de la fórmula («ten_haaf»)
    document.getElementById('r-kcalmedia').textContent = plan.kcalMedia;
    document.getElementById('porque-semana').innerHTML =
      porqueHtml('semana-ecuacion', Motor.explicarEcuacion(plan, semana.perfil), '¿Por qué esta ecuación?')
      + porqueHtml('semana-kcal', Motor.explicarKcalMedia(plan, { objetivoElegido: respuestas.objetivo }), '¿Por qué estas kcal?'); // #257.16

    // Issue #12: que un día con sesión se note a simple vista, aunque el reparto de kcal sea parecido
    // al de descanso (caso "solo fuerza" o actividades que no cuentan como carga, como caminar rápido).
    // Issue #13: tarjetas por día (una columna en móvil) en vez de una tabla ancha.
    // Issue #15: el reparto por franjas de cada día, debajo de sus totales (se despliega al tocar).
    // Issue #18: mover una sesión a otro día, con las mismas tarjetas.
    const sesiones = semana.perfil.sesiones ?? [];
    const diasConSesion = new Set(sesiones.map((s) => s.dia));
    const sesionesConActividad = ultimasSesiones.map((s, i) => ({ ...s, actividad: resolverActividadUI(s), dia: sesiones[i] ? sesiones[i].dia : s.dia }));
    const NOMBRE_FRANJA = { desayuno: 'Desayuno', media_manana: 'Media mañana', comida: 'Comida', merienda: 'Merienda', cena: 'Cena' };
    const avisosReparto = [];
    // Nota libre de cada sesión (#69): si sugiere otro tipo de esfuerzo que la actividad elegida, se avisa (no se cambia nada).
    (semana.perfil.sesiones ?? []).forEach((ses, i) => {
      const aviso = Motor.avisoClasificacionSesion((ultimasSesiones[i] ?? {}).nota, ses.actividad);
      if (aviso) avisosReparto.push(`${ses.dia}: ${aviso}`);
    });
    const slotsSemana = []; // issue #30: {dia, franja, kcalObjetivo} de cada franja, para el asignador de recetas
    const filasCSV = []; // issue #31: una fila por día y franja, para el CSV descargable

    // Issue #35: primera pasada solo para tener el reparto de kcal/macros de cada día y la semana
    // completa de franjas (slotsSemana); el asignador de recetas necesita la semana entera (para
    // repartir variedad, #23), así que no se puede resolver receta por receta dentro del mismo bucle.
    const repartosPorDia = plan.dias.map((d) => {
      const reparto = Motor.repartirComidas({
        kcal: d.kcal, proteina: d.proteinaG, grasa: d.grasaG, hidrato: d.hidratoG,
        pesoRef: plan.proteina.pesoReferencia, peso: respuestas.peso, tipoDia: d.tipo,
        sesiones: franjaADia(d.dia, franjasDelDia(d.dia), sesionesConActividad),
        sesionesTodas: sesionesTodasDelDia(d.dia, sesionesConActividad),
        franjas: franjasDelDia(d.dia),
        ...(contextoPorDia.get(d.dia).tomaLigera ? { tomaLigera: contextoPorDia.get(d.dia).tomaLigera } : {}), // #64
        ...(hambreCena ? { hambreCena } : {}), // #265 F
      });
      reparto.avisos.forEach((a) => avisosReparto.push(`${d.dia}: ${a}`));
      reparto.franjas.forEach((f) => {
        slotsSemana.push({ dia: d.dia, franja: f.franja, kcalObjetivo: f.kcalAprox, proteinaObjetivoG: f.proteina, cargaAlta: d.tipo === 'carga_alta', ...((() => { const n = f.franja === 'cena' && reparto.cenaTrasEntreno ? Motor.nivelVolumenCena(nivelesVolumen().principal, reparto.cenaTrasEntreno.hambre) : nivelesVolumen()[Motor.grupoDeFranja(f.franja)]; return n !== 0 ? { bandaPeso: Motor.bandaPesoServido(f.franja, n) } : {}; })()) /* #265 F: «con mucha», la cena tras el entreno de noche, un nivel más */, ...(compPorDia.get(d.dia)?.sinFibraAlta ? { sinFibraAlta: true } : {}), ...((() => { const cd = compPorDia.get(d.dia); const fase = cd && (cd.fase === 'competicion' || (cd.fase !== 'recuperacion' && cd.sinFibraAlta)) ? (cd.fase === 'competicion' ? 'competicion' : 'vispera') : undefined; const hf = (franjasDelDia(d.dia).find((x) => x.franja === f.franja) || {}).hora; const lim = Motor.limiteFibraG(fase, f.franja, hf, fase === 'competicion' ? Motor.finUltimaPruebaH(competiciones, Motor.fechaDelDia(calInicio, d.dia)) : undefined); return lim !== undefined ? { maxFibraG: lim } : {}; })()) });
        filasCSV.push({
          dia: d.dia, tipo: d.tipo, franja: f.franja,
          kcal: f.kcalAprox, proteina_g: f.proteina, grasa_g: f.grasa, hidrato_g: f.hidrato,
        });
      });
      return { dia: d, reparto };
    });

    // Issue #35: única asignación de recetas para toda la semana — la misma que luego consume la lista
    // de la compra (pintarListaCompra), para que tarjetas y lista concuerden siempre.
    // Issue #39: antes de proponer una receta, se descarta lo incompatible con alergias/preferencias
    // (o lo que no se puede confirmar, como celiaquía sin etiquetas contrastadas en este catálogo).
    const alergiasPreferencias = Motor.alergiasPreferenciasDesdeTexto(respuestas.alergias, [respuestas.preferencias.evitan, ...listaNegra].filter(Boolean).join(', '));
    restriccionesActuales = alergiasPreferencias; // issue #74: el catálogo usa las mismas restricciones que el plan
    pintarDesayunoPref(); // #265 E3: la lista de «siempre el mismo», con las restricciones de ahora
    pintarHambreCena(); // #265 F: la pregunta, solo si esta semana algún entreno acaba de noche con la cena después
    if (!Array.isArray(duelosEnCurso)) pintarGustos(); // #261 C: los duelos, con las restricciones de ahora
    const admitePostre = (r) => Motor.evaluarCompatibilidad(r, alergiasPreferencias).compatible; // #259.11: el postre de cierre, con las mismas restricciones
    RECETAS_EJEMPLO = Motor.adaptarNombresGluten(RECETAS_BASE, Boolean(respuestas.alergias && respuestas.alergias.celiaquia)); // #256.26
    // #189: la próxima dieta guardada se vuelve a comprobar con las restricciones de ahora: lo que ya no vale se quita y se dice.
    if (siguiente) {
      const rev = Motor.revisarSiguienteGuardada(siguiente.recetas, RECETAS_EJEMPLO, alergiasPreferencias);
      if (rev.quitadas.length) {
        siguiente = { ...siguiente, recetas: rev.validas, quitadas: [...(siguiente.quitadas ?? []), ...rev.quitadas.map((q) => ({ nombre: q.nombre, motivo: q.motivo }))].slice(-40) };
        guardarSiguiente();
      }
    }
    const fijasPropias = [...semanaFija].map(([k, v]) => ({ dia: k[0], franja: k.slice(2), receta: v }));
    // #207: el plan de Pablo, si vale hoy, es la semana fijada. Antes se vuelve a comprobar con las restricciones de ahora (como #189).
    const pabloHoy = planPabloVigente();
    let fijadasDePablo;
    let quitadasPablo = [];
    if (pabloHoy) {
      const revP = Motor.revisarPlanPablo(pabloHoy.plan.asignaciones, RECETAS_EJEMPLO, alergiasPreferencias);
      fijadasDePablo = revP.validas;
      quitadasPablo = revP.quitadas;
    }
    // #259 (punto 27): al recalcular (por ejemplo, tras cambiar el peso), cada comida conserva su plato si sigue valiendo.
    const previa = preferirUnaVez ?? asignacionSemanaActual.asignaciones.map(({ dia, franja, receta }) => ({ dia, franja, receta })); // #261 C: al aplicar o borrar los gustos, no se conservan los platos de ahora
    const gustos = Motor.gustosPorReceta(RECETAS_EJEMPLO, historialGustos, ATRIBUTOS_RECETAS); // #261 C: solo desempata; sin gustos, vacío
    const opcionesAsignador = { alergiasPreferencias, imprescindibles: partirAlimentos(respuestas.preferencias.gustan), recetasSiOSi, fijadas: fijadasDePablo ?? (estadoSiguiente === 'activa' ? siguiente.recetas : fijasPropias), ...(previa.length ? { preferir: previa } : {}), desayuno: prefDesayuno, ...(gustos.size ? { gustos } : {}) };
    const asignacionBase = Motor.asignarRecetas(slotsSemana, RECETAS_EJEMPLO, opcionesAsignador);
    // Issue #75: las recetas elegidas a mano se aplican sobre la asignación y se vuelven a validar con el perfil actual.
    const aplicadas = Motor.aplicarSustituciones(asignacionBase, slotsSemana, RECETAS_EJEMPLO, sustituciones, { alergiasPreferencias });
    // Issue #145: lo que no cabe en una comida con cantidades normales se reparte entre las otras comidas del día (sin inflar nada).
    const recetasCuadre = RECETAS_EJEMPLO.concat(Motor.recetasCompuestas(aplicadas.resultado.asignaciones.map((a) => a.receta), RECETAS_EJEMPLO));
    const enCompeticion = (dia) => Boolean(compPorDia.get(dia) && compPorDia.get(dia).fase === 'competicion');
    let cuadrado = Motor.cuadrarDias(aplicadas.resultado.asignaciones, slotsSemana, recetasCuadre, { noMover: enCompeticion, admite: admitePostre }); // #259.11: y si hace falta, postre
    // «He comido fuera» (Pablo, 08/10): «igual que si come otra cosa en su casa y cambia, si sale fuera debería regularse también».
    // Hoy esa comida cuenta con las kcal apuntadas y una segunda pasada del mismo cuadre regula las comidas que van DESPUÉS de ella
    // (las anteriores ya han pasado y no se tocan), con los mismos topes de cantidades normales. Al día siguiente deja de aplicarse.
    const hoyIso = Motor.fechaLocalISO(new Date());
    const diaHoy = LETRA_DIA_JS[new Date().getDay()];
    // #265 H: «Voy a comer fuera» otro día de la semana: ese día se cuadra entero (aún no ha pasado nada), con los mismos topes.
    for (const d of [...new Set(slotsSemana.map((s) => s.dia))]) {
      const isoD = fechaProximaDe(d);
      const fueraD = new Map(comidasFuera.filter((x) => x.fecha === isoD && x.kcal !== undefined && slotsSemana.some((s) => s.dia === d && s.franja === x.franja)).map((x) => [x.franja, x.kcal]));
      if (!fueraD.size) continue; // #173: la segunda pasada vive ahora en el motor, con tests
      const horaDe = (franja) => { const h = franjasDelDia(d).find((x) => x.franja === franja); return h && h.hora !== undefined ? h.hora : undefined; };
      cuadrado = Motor.cuadrarConComidaFuera(cuadrado, slotsSemana, recetasCuadre, { diaHoy: d, fuera: fueraD, horaDe, noMoverDia: enCompeticion, todoElDia: isoD !== hoyIso });
    }
    // #265 I: «Me la he tomado» hoy: las kcal de la toma antes de entrenar en ayunas se quitan de las comidas de después, con los topes de siempre.
    descuentoAyunasHoy = null;
    {
      const tomaHoy = (repartosPorDia.find((r) => r.dia.dia === diaHoy) || {}).reparto?.tomaSugerida;
      if (tomaHoy && tomasAyunas.includes(hoyIso) && !enCompeticion(diaHoy)) {
        const horaDe = (franja) => { const h = franjasDelDia(diaHoy).find((x) => x.franja === franja); return h && h.hora !== undefined ? h.hora : undefined; };
        const r = Motor.descontarTomaPrevia(cuadrado, slotsSemana, recetasCuadre, { dia: diaHoy, kcal: tomaHoy.kcal, hora: tomaHoy.inicio - 0.75, horaDe });
        cuadrado = r;
        descuentoAyunasHoy = { kcal: tomaHoy.kcal, descontado: r.descontado };
      }
    }
    // #207: «Revisado por Pablo» mientras el plan en uso coincide con lo que publicó; «con cambios tuyos» si la persona cambia platos.
    {
      const caja = document.getElementById('r-pablo');
      if (pabloHoy) {
        const etq = Motor.etiquetaPlanPablo(cuadrado.asignaciones, fijadasDePablo);
        const quita = quitadasPablo.length ? ` Se han quitado ${quitadasPablo.length} plato${quitadasPablo.length === 1 ? '' : 's'} que ya no valen con tus restricciones (${[...new Set(quitadasPablo.map((q) => q.nombre))].slice(0, 3).map(escaparHtml).join(', ')}).` : '';
        avisoPabloHoy = `<strong>${Motor.TEXTO_PLAN_PABLO[etq]}.</strong>${quita}`;
      } else avisoPabloHoy = '';
      if (caja) { caja.hidden = !avisoPabloHoy; caja.innerHTML = avisoPabloHoy; }
    }
    const avisoCuadrePorDia = new Map(cuadrado.dias.filter((x) => x.aviso).map((x) => [x.dia, x.aviso])); // #145: el día que no cuadra lo dice
    const asignacionSemana = { ...aplicadas.resultado, asignaciones: cuadrado.asignaciones, avisos: [...aplicadas.resultado.avisos, ...cuadrado.avisos] };
    // #265 E2 (revisión del 26/10): lo que la variedad de la semana no ha podido cumplir se ve en «Avisos del plan» (antes se quedaba en el motor).
    asignacionSemana.avisos.filter((a) => a.startsWith('Variedad de la semana') || a.startsWith('Desayuno:')).forEach((a) => avisosReparto.push(a)); // #265 E3: el desayuno elegido que no se ha podido servir
    // #259 (punto 27): al recalcular se dice qué ha cambiado (antes no salía nada y la compra tachada dejaba de servir sin saberlo).
    const NOMBRE_CAMBIO = { desayuno: 'desayuno', media_manana: 'media mañana', comida: 'comida', merienda: 'merienda', cena: 'cena' };
    const cambiadas = previa.length ? asignacionSemana.asignaciones.filter((a) => { const x = previa.find((y) => y.dia === a.dia && y.franja === a.franja); return !x || x.receta !== a.receta; }) : [];
    const firmaRespuestas = JSON.stringify(respuestas);
    const datosNuevos = Boolean(ultimaFirmaRespuestas) && ultimaFirmaRespuestas !== firmaRespuestas; // un repintado (abrir un horario…) no es un cambio
    if (datosNuevos || !ultimaFirmaRespuestas) avisoCambiosVigente = '';
    ultimaFirmaRespuestas = firmaRespuestas;
    const avisoCambiosPlan = !previa.length || !datosNuevos ? avisoCambiosVigente
      : !cambiadas.length ? 'Con tus datos nuevos se mantienen todos los platos: solo se ajustan las cantidades.'
        : `Con tus datos nuevos cambian ${cambiadas.length} de ${asignacionSemana.asignaciones.length} comidas (${cambiadas.slice(0, 6).map((a) => `${NOMBRE_DIA_LARGO[a.dia] ?? a.dia} ${NOMBRE_CAMBIO[a.franja] ?? a.franja}`).join(', ')}${cambiadas.length > 6 ? '…' : ''}); el resto mantiene su plato y solo ajusta las cantidades.`;
    avisoCambiosVigente = avisoCambiosPlan;
    // #164: la dieta siguiente = la misma semana, procurando no repetir los platos de la actual (mismo cuadre del día).
    dietaSiguienteFn = () => {
      const porId = new Map(RECETAS_EJEMPLO.map((r) => [r.id, r]));
      const evitar = [...new Set(asignacionSemana.asignaciones.flatMap((a) => { const r = Motor.recetaDeId(porId, a.receta); return r ? (r.platos ?? [r.id]) : [a.receta]; }))];
      const base = Motor.asignarRecetas(slotsSemana, RECETAS_EJEMPLO, { ...opcionesAsignador, preferir: undefined, fijadas: fijasPropias, evitar });
      const rc = RECETAS_EJEMPLO.concat(Motor.recetasCompuestas(base.asignaciones.map((a) => a.receta), RECETAS_EJEMPLO));
      return { ...base, asignaciones: Motor.cuadrarDias(base.asignaciones, slotsSemana, rc, { noMover: enCompeticion, admite: admitePostre }).asignaciones };
    };
    proxima.dieta = null; // el plan se ha recalculado: la dieta siguiente preparada antes ya no vale
    if (proxima.resultado) proxima.obsoleta = true; // #192: la lista ya preparada se rehace con las restricciones de ahora al pintar la compra
    if (aplicadas.invalidadas.length) {
      aplicadas.invalidadas.forEach((i) => { delete sustituciones[i.clave]; });
      avisoSustituciones = [...avisoSustituciones, ...aplicadas.invalidadas];
      historialSustituciones = []; // el estado cambió por el perfil: ya no se puede «deshacer» a algo previo válido
      guardarSustituciones();
    }
    const recetaPorSlot = new Map(
      Motor.combinarConRecetas(asignacionSemana.asignaciones, RECETAS_EJEMPLO).map((a) => [`${a.dia}|${a.franja}`, a]),
    );
    const huecoPorSlot = new Map(asignacionSemana.huecos.map((h) => [`${h.dia}|${h.franja}`, h]));
    // Issue #124: aviso de cabecera y bloque «Qué cambia esta semana» (compara con la misma semana sin competición).
    {
      const cajaComp = document.getElementById('r-competicion');
      const partes = [];
      if (compSem && compSem.avisos.length) partes.push(`<p style="margin:0 0 0.5rem"><strong>🏁 ${compSem.avisos.map(escaparHtml).join(' · ')}</strong></p>`);
      if (compSem && compSem.activa) {
        const kcalPorDia = new Map();
        for (const a of asignacionSemana.asignaciones) kcalPorDia.set(a.dia, (kcalPorDia.get(a.dia) ?? 0) + a.kcalResultante);
        const filas = compSem.dias.filter((x) => x.fase).map((x) => {
          const falta = x.hidratoMinGKg && plan.dias.find((p) => p.dia === x.dia) ? plan.dias.find((p) => p.dia === x.dia).kcal - (kcalPorDia.get(x.dia) ?? 0) : 0;
          const faltaTxt = Motor.faltaVisibleCompeticion(falta, x.kcalDespues)
            ? ` Con los topes de plato, las recetas de este día se quedan a ~${Math.round(falta)} kcal (≈ ${Math.round(falta / 4)} g de hidrato) del objetivo: si no te llega, añade una bebida deportiva o una toma extra (no se fuerza ningún plato).`
            : '';
          const cambio = x.kcalDespues !== x.kcalAntes || x.hidratoDespues !== x.hidratoAntes
            ? `${x.kcalAntes} → <strong>${x.kcalDespues}</strong> kcal · H ${x.hidratoAntes} → <strong>${x.hidratoDespues}</strong> g` : 'sin cambio de cifras';
          return `<li><strong>${x.dia} · ${Motor.ETIQUETA_FASE[x.fase]}</strong>: ${cambio}.<br><span style="color:var(--gris)">${x.motivos.map(escaparHtml).join('; ')}${escaparHtml(faltaTxt)}</span></li>`;
        }).join('');
        partes.push(`<details class="plegable" open><summary>Qué cambia esta semana</summary><ul class="resumen-lista">${filas}</ul><p class="subt" style="font-size:0.8rem">${escaparHtml(Motor.NOTA_PAUTA_ORIENTATIVA)}</p></details>`);
      }
      cajaComp.innerHTML = partes.join('');
    }
    // Issue #117: qué ha pasado con cada alimento de «sí o sí»: entra en la semana (se marca en la comida) o se explica por qué no.
    {
      const pedidos = asignacionBase.imprescindibles ?? [];
      estadosFija = asignacionBase.fijadas ?? [];
      pintarFija();
      estadosSiOSi = asignacionBase.recetasSiOSi ?? [];
      pintarListaSiOSi();
      const htmlAlimentos = pedidos.length
        ? `<strong>Tus «sí o sí»:</strong> ${pedidos.map((p) => p.cubierto ? `✅ ${escaparHtml(p.alimento)}` : `⚠️ ${escaparHtml(p.alimento)}: no ha podido entrar (${escaparHtml(p.causa)})`).join(" · ")}`
        : "";
      const htmlRecetas = estadosSiOSi.length
        ? `<strong>Tus recetas «sí o sí»:</strong> ${estadosSiOSi.map((e) => e.causa ? `⚠️ ${escaparHtml(e.nombre)}: no se ha forzado (${escaparHtml(e.causa)})` : `✅ ${escaparHtml(e.nombre)} (${e.colocadas} de ${e.pedidas})`).join(" · ")}`
        : "";
      const htmlPedidos = [htmlAlimentos, htmlRecetas].filter(Boolean).join("<br>");
      document.getElementById("r-pedidos").innerHTML = htmlPedidos;
      document.getElementById("perfil-pedidos").innerHTML = htmlPedidos;
    }

    document.getElementById('r-dias').innerHTML = repartosPorDia.map(({ dia: d, reparto }) => {
      const kcalFranjas = reparto.franjas.reduce((t, x) => t + x.kcalAprox, 0); // #153: la barra es el % de las kcal del día que lleva cada franja
      const franjasHtml = reparto.franjas.map((f) => {
        const pct = kcalFranjas > 0 ? Math.round((f.kcalAprox / kcalFranjas) * 100) : 0;
        const asignada = recetaPorSlot.get(`${d.dia}|${f.franja}`);
        const hueco = huecoPorSlot.get(`${d.dia}|${f.franja}`);
        const conflictosHtml = reparto.conflictos.filter((c) => c.franja === f.franja).map((c) => `
          <div class="receta-franja hueco">⚠️ ${escaparHtml(textoConflicto(c))}
            <button type="button" class="hor-ir" data-dia="${d.dia}">Editar horario de este día</button></div>`).join('');
        const recetaHtml = asignada
          ? `<div class="receta-franja">🍽️ <strong>${escaparHtml(asignada.receta.nombre)}</strong> <span class="etq-ejemplo">EJEMPLO</span>${asignada.pedidoPorUsuario ? ' <span class="etq-pedido">⭐ lo pediste tú</span>' : ''}${asignada.fijada ? ' <span class="etq-pedido">📌 fijada</span>' : ''}<div class="receta-dato">ración ${Math.round(asignada.racionAjustada * 100)} % · ~${asignada.kcalResultante} kcal</div><button type="button" class="btn-texto fijar-btn" data-dia="${d.dia}" data-franja="${f.franja}">${semanaFija.has(`${d.dia}|${f.franja}`) ? '📌 Quitar fijación' : '📌 Fijar'}</button></div>`
          : `<div class="receta-franja hueco">⚠️ Sin receta de ejemplo que encaje${hueco ? `: ${escaparHtml(hueco.motivo)}` : ''}</div>`;
        return `
          <div class="franja-reparto-card ${f.rol !== 'normal' ? 'destacada' : ''}">
            <div class="franja-reparto-cabecera">
              <div>
                <div class="nombre">${NOMBRE_FRANJA[f.franja] ?? f.franja}${(() => { const x = franjasDelDia(d.dia).find((y) => y.franja === f.franja); return x && x.hora !== undefined ? ` <small style="font-weight:400;color:var(--gris)">· ${horaDecimalATexto(x.hora)}</small>` : ''; })()}</div>
                ${f.rol !== 'normal' ? `<div class="rol">${escaparHtml(nombreRol(f.rol))}</div>` : ''}
              </div>
              <div class="macros"><strong>~${f.kcalAprox}</strong> kcal<div class="franja-barra-pct">${pct} % del día</div></div>
            </div>
            <div class="franja-reparto-macros"><span><span class="chip chip-p" aria-hidden="true">P</span>${f.proteina} g<span class="sr-solo"> de proteína</span></span><span><span class="chip chip-g" aria-hidden="true">G</span>${f.grasa} g<span class="sr-solo"> de grasa</span></span><span><span class="chip chip-h" aria-hidden="true">H</span>${f.hidrato} g<span class="sr-solo"> de hidratos</span></span></div>
            <div class="franja-barra" aria-hidden="true"><span style="width:${pct}%"></span></div>
            ${recetaHtml}
            ${conflictosHtml}
            ${botonVerComida(d.dia, f.franja)}
          </div>
        `;
      }).join('');
      const sesionesDelDia = sesiones.map((s, i) => ({ ...s, i })).filter((s) => s.dia === d.dia);
      const moverHtml = sesionesDelDia.length ? `
        <div class="dia-sesiones">
          ${sesionesDelDia.map((s) => `
            <div class="sesion-mover">
              <span>${escaparHtml(nombreSesion({ ...s, deporte: (ultimasSesiones[s.i] ?? {}).deporte }))} · ${s.minutos}'${notaSesionHtml({ nota: (ultimasSesiones[s.i] ?? {}).nota })}</span>
              <label>mover a
                <select class="mover-select" data-indice="${s.i}">
                  ${DIAS.map((dd) => `<option value="${dd}" ${dd === d.dia ? 'selected' : ''}>${dd}</option>`).join('')}
                </select>
              </label>
            </div>
          `).join('')}
        </div>
      ` : '';
      const abierta = diasAbiertos.has(d.dia);

      // Issue #37: contexto de vida real del día (turno, táper, tiempo de cocina...). Solo una
      // anotación visible: no decide receta ni cambia kcal/macros todavía.
      const contexto = contextoPorDia.get(d.dia);
      const etiquetas = Motor.etiquetasContextoDia(contexto);
      const badgesHtml = etiquetas.length
        ? `<div class="contexto-badges">${etiquetas.map((e) => `<span class="contexto-badge">${e}</span>`).join('')}</div>` : '';
      const contextoAbierto = diasContextoAbiertos.has(d.dia);
      const contextoFormHtml = `
        <button type="button" class="contexto-toggle" aria-expanded="${contextoAbierto}" aria-controls="panel-contexto-${d.dia}">${contextoAbierto ? 'Ocultar contexto del día ▴' : 'Contexto del día (turno, táper...) ▾'}</button>
        <div class="contexto-dia" id="panel-contexto-${d.dia}" ${contextoAbierto ? '' : 'hidden'}>
          <p style="font-size:0.8rem;color:var(--gris);margin:0 0 0.5rem">
            Solo para anotarlo: todavía no cambia las kcal ni elige receta por esto (salvo la toma ligera de abajo).
          </p>
          <label class="check"><input type="checkbox" class="ctx-campo" data-dia="${d.dia}" data-campo="turno" ${contexto.turno ? 'checked' : ''}> 🕐 Guardia o turno</label>
          <label class="check"><input type="checkbox" class="ctx-campo" data-dia="${d.dia}" data-campo="comidaFuera" ${contexto.comidaFuera ? 'checked' : ''}> 🍽️ Como fuera de casa</label>
          <label class="check"><input type="checkbox" class="ctx-campo" data-dia="${d.dia}" data-campo="microondas" ${contexto.microondas ? 'checked' : ''}> 🔥 Tengo microondas</label>
          <label class="check"><input type="checkbox" class="ctx-campo" data-dia="${d.dia}" data-campo="taperFrio" ${contexto.taperFrio ? 'checked' : ''}> ❄️ Táper frío (sin recalentar)</label>
          <label class="check"><input type="checkbox" class="ctx-campo" data-dia="${d.dia}" data-campo="comedor" ${contexto.comedor ? 'checked' : ''}> 🍱 Como en comedor/cantina</label>
          <div class="campo" style="margin-top:0.4rem">
            <label>Tiempo para cocinar</label>
            <select class="ctx-tiempo-cocina" data-dia="${d.dia}">
              <option value="poco" ${contexto.tiempoCocina === 'poco' ? 'selected' : ''}>Poco, prefiero platos rápidos</option>
              <option value="normal" ${contexto.tiempoCocina === 'normal' ? 'selected' : ''}>Normal</option>
              <option value="mucho" ${contexto.tiempoCocina === 'mucho' ? 'selected' : ''}>Me gusta cocinar</option>
            </select>
          </div>
          <div class="campo" style="margin-top:0.4rem">
            <label>Toma ligera antes de una sesión temprana</label>
            <select class="ctx-toma-ligera" data-dia="${d.dia}">
              <option value="" ${!contexto.tomaLigera ? 'selected' : ''}>Solo sugerida: no se reserva nada</option>
              <option value="pautada" ${contexto.tomaLigera === 'pautada' ? 'selected' : ''}>Pautada: cuenta como una comida y se resta un poco de cada comida</option>
              <option value="imprevista" ${contexto.tomaLigera === 'imprevista' ? 'selected' : ''}>Imprevista: se resta de la cena y cuenta como merienda</option>
            </select>
          </div>
        </div>
      `;

      return `
        <div class="dia-card ${diasConSesion.has(d.dia) ? 'con-entreno' : ''}">
          <div class="dia-cabecera">
            <div>
              <div class="dia-nombre">${diasConSesion.has(d.dia) ? `<span aria-hidden="true">${iconosDelDia(sesiones, d.dia)}</span> ` : ''}${NOMBRE_DIA_LARGO[d.dia] ?? d.dia}</div>
              <div class="dia-tipo" data-tipo="${d.tipo}">${nombreTipoDia(d, hayEntrenoEl(d.dia))}${compPorDia.get(d.dia)?.fase ? ` · <span class="etq-fase">${Motor.ETIQUETA_FASE[compPorDia.get(d.dia).fase]}</span>` : ''}</div>
            </div>
            <div class="dia-kcal">${d.kcal}<small style="font-size:0.55em;font-weight:400"> kcal</small></div>
          </div>
          <div class="dia-macros">P ${d.proteinaG} g · G ${d.grasaG} g · H ${d.hidratoG} g</div>
          ${avisoCuadrePorDia.has(d.dia) ? `<p class="subt aviso-cuadre" data-dia="${d.dia}">⚠️ ${escaparHtml(avisoCuadrePorDia.get(d.dia).replace(/^[^:]+: /, ''))}</p>` : ''}
          ${badgesHtml}
          ${moverHtml}
          <button type="button" class="dia-toggle" aria-expanded="${abierta}" aria-controls="panel-franjas-${d.dia}">${abierta ? 'Ocultar reparto por comidas ▴' : 'Ver reparto por comidas ▾'}</button>
          <div class="dia-franjas" id="panel-franjas-${d.dia}" ${abierta ? '' : 'hidden'}>${franjasHtml}</div>
          <details class="saber-mas dia-mas" data-dia="${d.dia}"${diasMasAbiertos.has(d.dia) ? ' open' : ''}>
            <summary>Más opciones de este día</summary>
            ${porqueDiaHtml(`card-dia-${d.dia}`, d.dia)}
            ${contextoFormHtml}
            ${horarioDiaHtml(d.dia)}
          </details>
        </div>
      `;
    }).join('');
    document.querySelectorAll('#r-dias details.dia-mas').forEach((det) => det.addEventListener('toggle', () => {
      if (det.open) diasMasAbiertos.add(det.dataset.dia); else diasMasAbiertos.delete(det.dataset.dia);
    }));

    document.querySelectorAll('#r-dias .dia-toggle').forEach((btn, idx) => {
      const dia = plan.dias[idx].dia;
      btn.addEventListener('click', () => {
        const panel = btn.nextElementSibling;
        const abrir = panel.hidden;
        panel.hidden = !abrir;
        btn.textContent = abrir ? 'Ocultar reparto por comidas ▴' : 'Ver reparto por comidas ▾';
        btn.setAttribute('aria-expanded', String(abrir));
        if (abrir) diasAbiertos.add(dia); else diasAbiertos.delete(dia);
      });
    });

    document.querySelectorAll('#r-dias .mover-select').forEach((sel) => {
      sel.addEventListener('change', () => {
        const indice = Number(sel.dataset.indice);
        const nuevoDia = sel.value;
        const r = Motor.moverSesion(semanaActual, indice, { dia: nuevoDia });
        if (ultimasSesiones[indice]) ultimasSesiones[indice] = { ...ultimasSesiones[indice], dia: nuevoDia };
        r.diasAfectados.forEach((dd) => diasAbiertos.add(dd));
        historialMovimientos.push(r.diasAfectados); // issue #38: para el mensaje de "Deshacer"
        mensajeDeshacer = '';
        mostrarResultado(r.semana, r.despues, respuestasActuales, franjasActuales);
      });
    });

    // Issue #37: contexto del día (turno, táper...). Solo anota; no vuelve a calcular nada, así que
    // basta con re-pintar con el mismo plan y perfil ya calculados.
    document.querySelectorAll('#r-dias .contexto-toggle').forEach((btn, idx) => {
      const dia = plan.dias[idx].dia;
      btn.addEventListener('click', () => {
        if (diasContextoAbiertos.has(dia)) diasContextoAbiertos.delete(dia); else diasContextoAbiertos.add(dia);
        mostrarResultado(semanaActual, planActual, respuestasActuales, franjasActuales);
      });
    });
    document.querySelectorAll('#r-dias .ctx-campo').forEach((chk) => {
      chk.addEventListener('change', () => {
        const contexto = contextoPorDia.get(chk.dataset.dia);
        contexto[chk.dataset.campo] = chk.checked;
        mostrarResultado(semanaActual, planActual, respuestasActuales, franjasActuales);
      });
    });
    document.querySelectorAll('#r-dias .ctx-toma-ligera').forEach((sel) => {
      sel.addEventListener('change', () => {
        const c = contextoPorDia.get(sel.dataset.dia);
        if (sel.value) c.tomaLigera = sel.value; else delete c.tomaLigera;
        mostrarResultado(semanaActual, planActual, respuestasActuales, franjasActuales);
      });
    });
    document.querySelectorAll('#r-dias .ctx-tiempo-cocina').forEach((sel) => {
      sel.addEventListener('change', () => {
        contextoPorDia.get(sel.dataset.dia).tiempoCocina = sel.value;
        mostrarResultado(semanaActual, planActual, respuestasActuales, franjasActuales);
      });
    });

    document.querySelectorAll('#r-dias .horario-toggle').forEach((btn, idx) => {
      const dia = plan.dias[idx].dia;
      btn.addEventListener('click', () => {
        if (diasHorarioAbiertos.has(dia)) diasHorarioAbiertos.delete(dia); else diasHorarioAbiertos.add(dia);
        mostrarResultado(semanaActual, planActual, respuestasActuales, franjasActuales);
      });
    });
    document.querySelectorAll('#r-dias .horario-dia').forEach((panel) => {
      const dia = panel.dataset.dia;
      const error = panel.querySelector('.error-inline');
      panel.querySelector('.hor-aplicar').addEventListener('click', () => {
        const nuevas = Array.from(panel.querySelectorAll('.hor-campo')).map((i) => ({ franja: i.dataset.franja, hora: textoAHora(i.value) }));
        const v = Motor.validarHorarioDia(nuevas);
        if (!v.ok) { error.textContent = v.error; error.hidden = false; return; }
        const general = franjasActuales ?? [];
        const igualAlGeneral = nuevas.length === general.length && nuevas.every((n) => general.some((g) => g.franja === n.franja && g.hora === n.hora));
        if (igualAlGeneral) excepcionesHorario.delete(dia); else excepcionesHorario.set(dia, nuevas);
        mostrarResultado(semanaActual, planActual, respuestasActuales, franjasActuales);
      });
      const reset = panel.querySelector('.hor-reset');
      if (reset) reset.addEventListener('click', () => {
        excepcionesHorario.delete(dia);
        mostrarResultado(semanaActual, planActual, respuestasActuales, franjasActuales);
      });
    });

    filasPlanCSV = filasCSV;
    // #262: si hoy queda fuera de la semana del calendario y ese día de la semana está ajustado por una competición, hoy se calcula
    // con el plan sin esos ajustes (mismo reparto y mismas opciones; se conservan los platos que sigan valiendo).
    vistaHoyReal = null;
    const isoHoyReal = Motor.fechaLocalISO(new Date());
    const diaHoyReal = LETRA_DIA_JS[new Date().getDay()];
    if (calInicio && !Motor.diaDeLaFecha(calInicio, isoHoyReal) && compPorDia.get(diaHoyReal) && compPorDia.get(diaHoyReal).fase) {
      const dB = planBase.dias.find((x) => x.dia === diaHoyReal);
      if (dB) {
        const repB = Motor.repartirComidas({
          kcal: dB.kcal, proteina: dB.proteinaG, grasa: dB.grasaG, hidrato: dB.hidratoG,
          pesoRef: planBase.proteina.pesoReferencia, peso: respuestas.peso, tipoDia: dB.tipo,
          sesiones: franjaADia(dB.dia, franjasDelDia(dB.dia), sesionesConActividad),
          sesionesTodas: sesionesTodasDelDia(dB.dia, sesionesConActividad),
          franjas: franjasDelDia(dB.dia),
          ...(hambreCena ? { hambreCena } : {}), // #265 F
        });
        const slotsB = repB.franjas.map((f) => ({ dia: dB.dia, franja: f.franja, kcalObjetivo: f.kcalAprox, proteinaObjetivoG: f.proteina, cargaAlta: dB.tipo === 'carga_alta' }));
        const asigB = Motor.asignarRecetas(slotsB, RECETAS_EJEMPLO, { alergiasPreferencias, preferir: asignacionSemana.asignaciones.filter((a) => a.dia === dB.dia) });
        const conRecB = Motor.combinarConRecetas(asigB.asignaciones, RECETAS_EJEMPLO.concat(Motor.recetasCompuestas(asigB.asignaciones.map((a) => a.receta), RECETAS_EJEMPLO)));
        vistaHoyReal = { dia: dB, reparto: repB, recetaPorSlot: new Map(conRecB.map((a) => [`${a.dia}|${a.franja}`, a])) };
      }
    }
    vistaSemana = { repartosPorDia, recetaPorSlot, huecoPorSlot, franjas: franjasBloque7, slots: slotsSemana, asignaciones: asignacionSemana.asignaciones, compPorDia, cuadreDias: new Map(cuadrado.dias.map((x) => [x.dia, x])) };
    pintarFija(); // ya con la vista y la asignación de esta semana (issue #142: opciones para las fijaciones que no valen)
    pintarZonaSustituciones();
    pintarResumenDia();
    pintarHoy();
    pintarPerfil();
    pintarRecetas();
    pintarCalendario();
    pintarListaCompra(asignacionSemana);
    renderizarZonaDeshacer();
    // #199: aviso para web/nube.js (solo actúa si la persona activó «Que Pablo vea mis datos»): el plan que acaba de salir.
    window.dispatchEvent(new CustomEvent('app-dietas:plan', { detail: {
      kcalMedia: plan.kcalMedia,
      dias: plan.dias.map((d) => ({ dia: d.dia, tipo: d.tipo, kcal: d.kcal, proteinaG: d.proteinaG, grasaG: d.grasaG, hidratoG: d.hidratoG })),
      asignaciones: asignacionSemana.asignaciones.map((a) => ({ dia: a.dia, franja: a.franja, receta: a.receta, racionAjustada: a.racionAjustada, kcalResultante: a.kcalResultante })),
      huecos: asignacionSemana.huecos.length,
      // #256 (punto 1): avisos y notas técnicos del cálculo, para Pablo (la persona solo ve las frases amables).
      avisos: plan.avisos.map((a) => ({ codigo: a.codigo, texto: a.texto })), notas: [...plan.notas],
      // #207: lo que Pablo necesita para editar con seguridad (NO las respuestas del cribado: esas viajan como alertas).
      restricciones: { alergias: respuestas.alergias, evitan: respuestas.preferencias.evitan, gustan: respuestas.preferencias.gustan, listaNegra: [...listaNegra] },
    } }));

    // Issue #21: mensaje en español llano primero, el código técnico se queda visible pero en pequeño.
    // Issue #169: lo escrito en «Otros alimentos a evitar» que la app no sabe filtrar se dice aquí; no se calla.
    const avisosAlergias = (restriccionesActuales ? Motor.leerEvitados(restriccionesActuales, RECETAS_EJEMPLO) : [])
      .filter((l) => l.deAlergia && (l.lectura === 'no_comprobable' || l.lectura === 'sin_coincidencias'))
      .map((l) => (l.lectura === 'no_comprobable'
        ? `⚠️ «${escaparHtml(l.texto)}»: con los ingredientes de una receta no se puede saber si lo lleva. Revísalo con Pablo antes de seguir el plan.`
        : `⚠️ No he encontrado «${escaparHtml(l.texto)}» en ninguna receta. Si es una alergia que afecta a más alimentos, la app no lo sabe: revísalo con Pablo.`));
    const soloPescado = Motor.avisoSoloPescado(respuestas.alergias.otros ?? ''); // #198: pescado sin decir nada de marisco ni de moluscos
    if (soloPescado) avisosAlergias.unshift(escaparHtml(soloPescado));
    const moluscoSuelto = Motor.avisoMoluscoSuelto(respuestas.alergias.otros ?? '');
    if (moluscoSuelto) avisosAlergias.unshift(escaparHtml(moluscoSuelto));
    avisosAlergiasHoy = avisosAlergias; // #189: también se ven al entrar en «Hoy»
    if (panelActual === 'hoy') pintarHoy();
    const avisosPersona = Motor.avisosParaPersona(plan.avisos);
    document.getElementById('r-avisos').innerHTML = (avisoCambiosPlan || avisosPersona.length || avisosReparto.length || avisosAlergias.length)
      ? [
        ...(avisoCambiosPlan ? [`<li id="aviso-cambios-plan">${escaparHtml(avisoCambiosPlan)}</li>`] : []),
        ...avisosAlergias.map((a) => `<li>${a}<br><small style="opacity:.55">alergias</small></li>`),
        ...Motor.avisosParaPersona(plan.avisos).map((t) => `<li>${t}</li>`),
        ...Motor.agruparAvisosPorDia(avisosReparto).map((a) => `<li>${escaparHtml(a)}</li>`), // #259.25: el mismo aviso de varios días, una vez
      ].join('')
      : '<li>Ninguno.</li>';
    // #256 (punto 1): las notas del cálculo (D10, IOC, regla 16bis…) son para Pablo: suben con el plan y la persona no las ve.
    document.getElementById('tarjeta-notas').hidden = true;
    // Issue #119: avisos y notas van plegados (con su recuento) para no saturar la pantalla; si algún aviso exige revisar con Pablo, se abre solo.
    document.querySelector('#tarjeta-avisos summary').textContent = `Avisos del plan (${avisosPersona.length + Motor.agruparAvisosPorDia(avisosReparto).length + avisosAlergias.length})`;
    document.querySelector('#tarjeta-avisos details').open = avisosAlergias.length > 0 || plan.avisos.some((a) => ['revisar_con_pablo', 'disponibilidad_baja', 'disponibilidad_baja_estimada', 'disponibilidad_baja_competicion', 'disponibilidad_baja_competicion_estimada', 'menor'].includes(a.codigo)); // los que piden hablar con Pablo no pueden quedar plegados (#168)

    // Texto legible en vez de volcar el JSON (issue #13): además de verse mal, desbordaba en móvil.
    const al = respuestas.alergias;
    const alergiasTxt = [
      al.celiaquia && 'celiaquía', al.lactosa && 'intolerancia a la lactosa',
      al.vegetariano && 'vegetariano/a', al.vegano && 'vegano/a', al.otros && al.otros,
    ].filter(Boolean).join(', ') || 'ninguna indicada';
    const prefTxt = [
      respuestas.preferencias.gustan && `le gusta: ${respuestas.preferencias.gustan}`,
      respuestas.preferencias.evitan && `evita: ${respuestas.preferencias.evitan}`,
    ].filter(Boolean).join(' · ') || 'sin indicar';
    const vidaRealTxt = `${respuestas.vidaReal.turnos ? 'con turnos/guardias' : 'sin turnos'}, tiempo de cocina: ${respuestas.vidaReal.tiempoCocina}`;
    document.getElementById('r-resumen').innerHTML = `
      <li><strong>Alergias e intolerancias:</strong> ${escaparHtml(alergiasTxt)}</li>
      <li><strong>Preferencias:</strong> ${escaparHtml(prefTxt)}</li>
      <li><strong>Vida real:</strong> ${escaparHtml(vidaRealTxt)}</li>
      <li><strong>Comunidad autónoma:</strong> ${escaparHtml(respuestas.comunidadAutonoma)}</li>
    `;

    // Issue #24: cabecera que solo se ve al imprimir (la tabla de días de pantalla ya sale igual, pero
    // sin un botón "Calcular" delante conviene recordar de quién es el plan).
    document.getElementById('cabecera-impresion').innerHTML = `
      <h1>Plan semanal</h1>
      <p>${escaparHtml(respuestas.peso)} kg · objetivo: ${escaparHtml(respuestas.objetivo)} · ${plan.kcalMedia} kcal/día de media</p>
    `;

    // Issue #18: si ya se estaban viendo los resultados (venimos de mover una sesión), no reiniciar el
    // formulario ni saltar arriba — solo refrescar las tarjetas donde el usuario ya está mirando.
    const yaVisible = !document.getElementById('resultado').hidden;
    if (!yaVisible) {
      ocultarFormulario();
      document.getElementById('resultado').hidden = false;
      scrollPorPanel = {}; // plan nuevo: ninguna pestaña conserva la posición del anterior
      mostrarPanel('hoy');
    }
  }

  // Issue #60: salidas de la pantalla de derivación. Volver NO desbloquea nada: al enviar de nuevo se vuelve a
  // evaluar el mismo perfil y, si sigue siendo clínico, deriva otra vez. Reiniciar carga un perfil limpio.
  document.getElementById('derivar-volver').addEventListener('click', () => {
    document.getElementById('derivar').hidden = true;
    mostrarFormulario();
    mostrarPaso(4); // la salud está en el paso 4
    const primero = document.querySelector('.paso[data-paso="4"] input');
    if (primero) primero.focus();
  });
  // #229: salidas de la pantalla del freno de «perder grasa».
  document.querySelectorAll('#freno-peso [data-objetivo]').forEach((b) => b.addEventListener('click', () => {
    document.getElementById('objetivo').value = b.dataset.objetivo;
    objetivoPorFreno = b.dataset.objetivo;
    document.getElementById('freno-peso').hidden = true;
    document.getElementById('form-cuestionario').requestSubmit();
  }));
  document.getElementById('freno-volver').addEventListener('click', () => {
    document.getElementById('freno-peso').hidden = true;
    nubeDeVuelta();
    mostrarFormulario();
    mostrarPaso(2); // el objetivo está en el paso 2
  });
  document.getElementById('derivar-reiniciar').addEventListener('click', () => {
    document.getElementById('derivar').hidden = true;
    olvidarComidasHechas(); // #257.9
    formularioNuevo();
    const peso = document.getElementById('peso');
    if (peso) peso.focus();
  });

  // #265 parte B (Pablo, 19–20/10: «Recetas y consejos»): quien queda derivado ve recetas (ingredientes y pasos, sin gramos ni kcal)
  // filtradas por sus alergias y restricciones, y consejos generales. Nada de plan, kcal ni cantidades.
  let apDerivado = null;
  function pintarDerivadoExtra(respuestas) {
    if (respuestas) {
      apDerivado = Motor.alergiasPreferenciasDesdeTexto(respuestas.alergias, [respuestas.preferencias && respuestas.preferencias.evitan, ...listaNegra].filter(Boolean).join(', '));
      RECETAS_EJEMPLO = Motor.adaptarNombresGluten(RECETAS_BASE, Boolean(respuestas.alergias && respuestas.alergias.celiaquia));
    }
    if (!apDerivado) return;
    const NOMBRE = { desayuno: 'desayuno', media_manana: 'media mañana', comida: 'comida', merienda: 'merienda', cena: 'cena' };
    const lista = Motor.recetasParaDerivado(RECETAS_EJEMPLO, apDerivado, document.getElementById('der-buscar').value);
    document.getElementById('der-estado').textContent = lista.length ? `${lista.length} receta${lista.length === 1 ? '' : 's'} que encajan con tus restricciones.` : 'Ninguna receta encaja con esa búsqueda y tus restricciones.';
    document.getElementById('der-recetas').innerHTML = lista.slice(0, 40).map((r) => `
      <li><details class="plegable"><summary>${escaparHtml(r.nombre)} <small style="color:var(--gris)">· ${r.franjas.map((f) => NOMBRE[f] ?? f).join(', ')}</small></summary>
        <p><strong>Ingredientes:</strong> ${r.ingredientes.map(escaparHtml).join(', ')}.</p>
        ${r.pasos.length ? `<ol>${r.pasos.map((p) => `<li>${escaparHtml(p)}</li>`).join('')}</ol>` : '<p>Esta receta no tiene pasos en su ficha.</p>'}
      </details></li>`).join('');
    document.getElementById('der-consejos').innerHTML = Motor.CONSEJOS_DERIVADO.map((c) => `<p><strong>${escaparHtml(c.tema)}.</strong> ${escaparHtml(c.texto)}${c.fuente ? ` <a href="${c.fuente}" target="_blank" rel="noopener">Fuente</a>` : ''}</p>`).join('');
  }
  document.getElementById('der-buscar').addEventListener('input', () => pintarDerivadoExtra());

  function descartarPlanAnterior() {
    diasSuelo = [];
    pintarAvisoSuelo();
    semanaActual = null;
    planActual = null;
    respuestasActuales = null;
    vistaSemana = null;
    filasPlanCSV = [];
    asignacionSemanaActual = { asignaciones: [], huecos: [], avisos: [] };
    ['r-dias', 'lista-compra', 'resumen-dia-contenido', 'hoy-ahora', 'cal-detalle', 'cal-exp-preview'].forEach((id) => { const e = document.getElementById(id); if (e) e.innerHTML = ''; });
    const dlg = document.getElementById('detalle-comida');
    if (dlg && dlg.open) dlg.close();
  }

  let esperandoNube = false; // #211: un segundo toque en «Ver mi plan» mientras sale la ventana del correo no abre otra
  // #274: cualquier error del cálculo sale aquí, en lenguaje de cliente; antes se quedaba en la consola y la pantalla no cambiaba.
  function avisarErrorCalculo(e) {
    console.error(e);
    esperandoNube = false;
    const aviso = document.getElementById('incompleto');
    aviso.hidden = false;
    aviso.textContent = 'No hemos podido calcular tu plan con estos datos. Revisa tus datos (paso 1) y los minutos y la actividad de cada sesión (paso 3). Si sigue sin salir, díselo a Pablo.';
    avisarIncompleto();
  }
  document.getElementById('form-cuestionario').addEventListener('submit', async (ev) => {
    ev.preventDefault();
    try { await verMiPlan(); } catch (e) { avisarErrorCalculo(e); }
  });
  async function verMiPlan() {
    if (esperandoNube) return; // ya está esperando la ventana del correo
    if (!leerFranjas().length) { // issue #61
      ocultarPantallas();
      document.getElementById('franjas-error').hidden = false;
      mostrarPaso(4);
      const primera = document.querySelector('#franjas .f-activa');
      if (primera) { primera.scrollIntoView({ block: 'center' }); primera.focus(); }
      return;
    }
    document.getElementById('franjas-error').hidden = true;
    if (revisionPerfilPendiente && !document.getElementById('revision-confirmada').checked) {
      ocultarPantallas();
      document.getElementById('revision-precargado').classList.add('error');
      document.getElementById('incompleto').hidden = false;
      document.getElementById('incompleto').textContent = 'Antes de calcular, revisa salud, alergias e intolerancias y alimentos a evitar (no se guardaron) y marca la casilla de confirmación.';
      avisarIncompleto();
      mostrarPaso(4);
      document.getElementById('revision-confirmada').focus();
      return;
    }
    ocultarPantallas();
    const respuestas = construirRespuestas();
    const resultado = Motor.perfilDesdeCuestionario(respuestas);
    if (resultado.estado === 'derivar' || resultado.estado === 'ok') {
      procesarCribado(respuestas); // #195
      const espera = esperarNube(); // #211: con ?nube=1, ventana obligatoria con el correo antes de enseñar nada
      if (espera) { esperandoNube = true; try { await espera; } finally { esperandoNube = false; } } // sin nube.js no hay espera: todo sigue síncrono
    }
    else avisoCribadoHoy = '';

    if (resultado.estado === 'derivar') {
      descartarPlanAnterior(); // la pantalla de derivación no deja ningún plan anterior visible ni exportable (#99)
      ocultarFormulario();
      document.getElementById('derivar').hidden = false;
      // #256 (punto 3): la derivación deja aviso a Pablo (como el freno) y el texto dice qué pasa ahora, sin cara triste.
      const alertaDer = Motor.alertaDerivacion({ motivo: resultado.motivo, salud: respuestas.salud || [], edad: respuestas.edad }, new Date().toISOString());
      if (alertaDer) { guardarAlertas(Motor.anadirAlerta(leerAlertas(), alertaDer)); pintarAlertas(); }
      pintarDerivadoExtra(respuestas); // #265 parte B: recetas y consejos, sin plan ni cifras
      nubeAlFreno(); document.getElementById('derivar-texto').textContent = `${resultado.mensaje} ${Motor.TEXTO_ALERTA_PERSONA} ${Motor.textoLlegaAPablo(nubeActiva())}`;
      document.getElementById('derivar').focus();
      return;
    }
    if (resultado.estado === 'incompleto') {
      document.getElementById('incompleto').hidden = false;
      document.getElementById('incompleto').textContent = resultado.mensaje;
      avisarIncompleto();
      mostrarPaso(resultado.falta === 'sesiones' ? 3 : resultado.falta === 'objetivo' ? 2 : 1); // datos básicos en el paso 1; objetivo en el 2; sesiones en el 3
      if (resultado.falta === 'sesiones') { // #274: el foco en el campo que falta
        const campo = [...sesionesDiv.querySelectorAll('.s-minutos')].find((c) => !(Number(c.value) > 0) || c.value.trim() === '');
        if (campo) { campo.scrollIntoView({ block: 'center' }); campo.focus(); }
      }
      return;
    }
    if (resultado.estado === 'elegir_deporte') {
      mostrarElegirDeporte(resultado);
      mostrarPaso(3); // las sesiones están en el paso 3
      return;
    }

    // #229: freno de «perder grasa» por bajo peso (las 4 referencias de Pablo). No se calcula ese plan: pantalla amable, alerta
    // prioritaria para Pablo y dos salidas (mantener o ganar músculo), que recalculan con ese objetivo.
    const freno = Motor.frenoBajoPeso(resultado.perfil, respuestas.cribado);
    if (freno.salta) {
      const alerta = Motor.alertaFreno(freno, new Date().toISOString());
      guardarAlertas(Motor.anadirAlerta(leerAlertas(), alerta));
      pintarAlertas();
      descartarPlanAnterior();
      ocultarFormulario();
      document.getElementById('freno-peso').hidden = false;
      nubeAlFreno('freno-peso');
      document.getElementById('freno-peso').focus();
      return;
    }
    avisoFrenoHoy = objetivoPorFreno ? `Pablo prefiere verlo contigo antes de un plan para perder grasa. Mientras tanto tienes un plan para ${objetivoPorFreno === 'mantener' ? 'mantener tu peso' : 'ganar músculo'}.` : '';
    objetivoPorFreno = '';

    const plan = Motor.calcular(resultado.perfil); // si falla, lo enseña avisarErrorCalculo (#274)
    // #230: si el suelo de kcal (D11) cambió algún día, la persona lo ve sin desplegar nada y Pablo recibe una alerta (una por plan).
    diasSuelo = Motor.diasConSuelo(plan).map((d) => d.dia);
    const alertaSuelo = Motor.alertaSuelo(plan, new Date().toISOString());
    if (alertaSuelo) { guardarAlertas(Motor.anadirAlerta(leerAlertas(), alertaSuelo)); pintarAlertas(); }
    if (respuestas.alergias && respuestas.alergias.celiaquia) { guardarAlertas(Motor.anadirAlerta(leerAlertas(), Motor.alertaCeliaquia(new Date().toISOString()))); pintarAlertas(); } // #242
    pintarAvisoSuelo();
    revisionPerfilPendiente = false;
    document.getElementById('revision-precargado').hidden = true;
    const nuevasFranjas = leerFranjas();
    excepcionesHorario.forEach((exc, dia) => {
      const mismas = exc.length === nuevasFranjas.length && exc.every((e) => nuevasFranjas.some((n) => n.franja === e.franja));
      if (!mismas) excepcionesHorario.delete(dia); // las comidas activas cambiaron: esa excepción ya no encaja
    });
    diasAbiertos = new Set(); // cálculo nuevo: todas las tarjetas empiezan cerradas
    diasMasAbiertos.clear();
    guardarPerfilLocal(); // issue #20: para precargarlo la próxima vez que se abra la demo
    mostrarResultado(Motor.crearSemana(resultado.perfil), plan, respuestas, leerFranjas());
    if (!tutorialVisto()) abrirTutorial(); // #219: la primera vez que se llega al plan
  }

  // #219 (Pablo, 15/10): la primera vez que la persona llega a su plan sale un tutorial corto con lo básico del día a día, señalando
  // el sitio real de la pantalla. Una sola vez (localStorage; si no se puede guardar, solo se recuerda en esta visita). Se vuelve a ver
  // desde Perfil. Un paso cuyo elemento no está o no se ve se salta: nunca se señala algo que no existe.
  const CLAVE_TUTORIAL = 'app-dietas-tutorial-visto';
  let tutorialVistoAqui = false;
  const tutorialVisto = () => { if (tutorialVistoAqui) return true; try { return !!localStorage.getItem(CLAVE_TUTORIAL); } catch { return false; } };
  function marcarTutorialVisto() {
    tutorialVistoAqui = true;
    try { localStorage.setItem(CLAVE_TUTORIAL, new Date().toISOString()); } catch { /* sin almacenamiento: no vuelve a salir en esta visita */ }
  }
  const seVe = (el) => { if (!el) return false; const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0 && getComputedStyle(el).visibility !== 'hidden'; };
  // La comida que se enseña en Hoy: la de ahora o la siguiente de hoy y, si hoy ya no queda ninguna, la primera de mañana (#219).
  const bloqueComidaHoy = () => document.querySelector('#hoy-ahora .hoy-toca .hoy-acciones')?.closest('.hoy-toca');
  const esDeManana = () => !!bloqueComidaHoy()?.classList.contains('hoy-manana');
  const PASOS_TUTORIAL = [
    { el: () => bloqueComidaHoy() || document.getElementById('hoy-ahora'),
      texto: () => (!bloqueComidaHoy() ? 'Aquí tienes tus comidas de hoy; en «Semana», las de cada día.' : esDeManana() ? 'Hoy ya no te queda ninguna comida: esta es la primera de mañana. Toca «Receta» o «Cantidades» para ver cómo se hace y cuánto lleva.' : 'Aquí tienes la comida que te toca ahora. Toca «Receta» o «Cantidades» para ver cómo se hace y cuánto lleva.') },
    { el: () => [...document.querySelectorAll('#hoy-ahora .hoy-accion')].find((b) => b.textContent.trim() === 'Cambiar'),
      texto: () => (esDeManana() ? '¿No te apetece? «Cambiar» te propone otros platos que encajan. En las comidas de hoy, ahí también está «He comido fuera», para apuntar lo que comes fuera de casa.' : '¿No te apetece? «Cambiar» te propone otros platos que encajan. Ahí también está «He comido fuera», para apuntar lo que comes fuera de casa.') },
    { el: () => document.getElementById('tab-semana'), texto: 'En «Semana» tienes el plan de todos los días.' },
    { el: () => document.getElementById('tab-compra'), texto: 'En «Compra», la lista de la compra de tu plan.' },
    { el: () => document.getElementById('tab-perfil'), texto: () => `En «Perfil» cambias tus datos y tus alergias${document.getElementById('tarjeta-nube') && !document.getElementById('tarjeta-nube').hidden ? ', y con «Que Pablo vea mis datos» le llegan a Pablo' : ''}. Desde ahí puedes volver a ver este tutorial.` },
  ];
  let tutorial = null; // { pasos, i, previo }
  function cerrarTutorial() {
    if (!tutorial) return;
    document.querySelectorAll('[data-tutorial-activo]').forEach((e) => e.removeAttribute('data-tutorial-activo'));
    const caja = document.getElementById('tutorial');
    caja.hidden = true;
    window.removeEventListener('resize', colocarTutorial);
    window.removeEventListener('scroll', colocarTutorial, true);
    const previo = tutorial.previo;
    tutorial = null;
    marcarTutorialVisto();
    if (previo && document.contains(previo)) previo.focus();
  }
  function colocarTutorial() {
    if (!tutorial) return;
    const el = tutorial.pasos[tutorial.i].el();
    const luz = document.getElementById('tut-luz');
    const tarjeta = document.getElementById('tut-tarjeta');
    if (!el) return;
    const r = el.getBoundingClientRect();
    const m = 6;
    Object.assign(luz.style, { top: `${r.top - m}px`, left: `${r.left - m}px`, width: `${r.width + 2 * m}px`, height: `${r.height + 2 * m}px` });
    const alto = window.innerHeight;
    const ancho = document.documentElement.clientWidth;
    const t = tarjeta.getBoundingClientRect();
    const cs = getComputedStyle(document.getElementById('tutorial')); // zona segura del iPhone (padding con env())
    const arriba = 12 + (parseFloat(cs.paddingTop) || 0);
    const pie = 12 + (parseFloat(cs.paddingBottom) || 0);
    const abajo = r.top + r.height / 2 < alto / 2;
    let top = abajo ? r.bottom + m + 12 : r.top - m - 12 - t.height;
    top = Math.max(arriba, Math.min(top, alto - t.height - pie));
    const left = Math.max(16, Math.min(r.left + r.width / 2 - t.width / 2, ancho - t.width - 16));
    Object.assign(tarjeta.style, { top: `${top}px`, left: `${left}px` });
  }
  function pintarPasoTutorial() {
    const paso = tutorial.pasos[tutorial.i];
    const el = paso.el();
    document.querySelectorAll('[data-tutorial-activo]').forEach((e) => e.removeAttribute('data-tutorial-activo'));
    el.setAttribute('data-tutorial-activo', '');
    if (!el.closest('#tabs-app')) el.scrollIntoView({ block: 'center' });
    const n = tutorial.pasos.length;
    document.getElementById('tut-texto').textContent = typeof paso.texto === 'function' ? paso.texto() : paso.texto;
    document.getElementById('tut-cuenta').textContent = `${tutorial.i + 1} de ${n}`;
    document.getElementById('tut-atras').disabled = tutorial.i === 0;
    document.getElementById('tut-siguiente').textContent = tutorial.i === n - 1 ? 'Terminar' : 'Siguiente';
    colocarTutorial();
    document.getElementById('tut-siguiente').focus();
  }
  function crearCajaTutorial() {
    const caja = document.getElementById('tutorial');
    if (caja.dataset.listo) return caja;
    caja.dataset.listo = '1';
    caja.innerHTML = `<div id="tut-luz" aria-hidden="true"></div>
      <div id="tut-tarjeta" role="dialog" aria-modal="true" aria-labelledby="tut-texto">
        <p class="tut-cuenta" id="tut-cuenta"></p>
        <p id="tut-texto"></p>
        <div class="tut-botones">
          <button type="button" class="btn-texto" id="tut-saltar">Saltar</button>
          <span class="tut-nav"><button type="button" class="btn-secundario" id="tut-atras">Atrás</button><button type="button" class="btn-principal" id="tut-siguiente">Siguiente</button></span>
        </div>
      </div>`;
    caja.querySelector('#tut-saltar').addEventListener('click', cerrarTutorial);
    caja.querySelector('#tut-atras').addEventListener('click', () => { if (tutorial && tutorial.i > 0) { tutorial.i--; pintarPasoTutorial(); } });
    caja.querySelector('#tut-siguiente').addEventListener('click', () => {
      if (!tutorial) return;
      if (tutorial.i < tutorial.pasos.length - 1) { tutorial.i++; pintarPasoTutorial(); } else cerrarTutorial();
    });
    caja.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape') { ev.preventDefault(); cerrarTutorial(); return; }
      if (ev.key !== 'Tab') return;
      const botones = [...caja.querySelectorAll('button:not(:disabled)')];
      const i = botones.indexOf(document.activeElement);
      ev.preventDefault(); // el foco se queda dentro del tutorial
      botones[(i + (ev.shiftKey ? -1 : 1) + botones.length) % botones.length].focus();
    });
    return caja;
  }
  function abrirTutorial() {
    mostrarPanel('hoy');
    const pasos = PASOS_TUTORIAL.filter((p) => seVe(p.el()));
    if (!pasos.length) return;
    const caja = crearCajaTutorial();
    tutorial = { pasos, i: 0, previo: document.activeElement };
    caja.hidden = false;
    window.addEventListener('resize', colocarTutorial);
    window.addEventListener('scroll', colocarTutorial, true);
    pintarPasoTutorial();
  }
  document.getElementById('btn-tutorial').addEventListener('click', abrirTutorial);

  cargarPerfilGuardadoSiHay();
})();

// --- Issue #137: apartado de Fuentes al final, por tema y con el estado de cada referencia. ---
(function pintarFuentes() {
  const caja = document.getElementById('fuentes-lista');
  if (!caja || !Array.isArray(window.FUENTES)) return;
  const ESTADO = { publicada: 'Publicada · enlace comprobado', doi_aportado: 'DOI aportado · aún sin abrir', criterio_pablo: 'Criterio de Pablo, no un estudio', dato_ejemplo: 'Dato de EJEMPLO, sin validar' };
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const temas = [...new Set(window.FUENTES.map((f) => f.tema))];
  caja.innerHTML = temas.map((t) => `<details class="plegable"><summary>${esc(t)}</summary><ul class="resumen-lista">${window.FUENTES.filter((f) => f.tema === t).map((f) =>
    `<li><strong>${f.enlace ? `<a href="${esc(f.enlace)}" target="_blank" rel="noopener noreferrer">${esc(f.referencia)}</a>` : esc(f.referencia)}</strong><br><span style="color:var(--gris)">${esc(f.respalda)}</span><br><small>${esc(ESTADO[f.estado] || f.estado)}</small></li>`).join('')}</ul></details>`).join('');
})();

// Novedades: la demo publicada trae en novedades.js cuándo se publicó y los últimos cambios, para ver los avances al abrirla.
// #256 (punto 2): son notas de programador para Pablo: solo con ?novedades=1 en la dirección, nunca para la persona.
(() => {
  if (new URLSearchParams(location.search).get('novedades') !== '1') return;
  const n = window.NOVEDADES;
  const caja = document.getElementById('novedades');
  const aviso = document.getElementById('novedades-aviso');
  if (!n || !caja || !aviso || !Array.isArray(n.cambios)) return;
  document.getElementById('novedades-fecha').textContent = `Actualizada el ${n.fecha} · versión ${n.version}`;
  const lista = document.getElementById('novedades-lista');
  n.cambios.forEach((c) => {
    const li = document.createElement('li');
    const dia = document.createElement('strong');
    dia.textContent = `${c.dia} · `;
    li.append(dia, c.texto);
    lista.appendChild(li);
  });
  aviso.textContent = `Actualizada el ${n.fecha} · Ver novedades`;
  aviso.addEventListener('click', () => { caja.scrollIntoView({ behavior: 'smooth', block: 'start' }); caja.focus({ preventScroll: true }); });
  caja.hidden = false;
  aviso.hidden = false;
})();
