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
  Motor.definirTablaLimites(Motor.parsearTablaLimites(LIMITES_POR_ALIMENTO_CSV));

  // Catálogo de recetas de EJEMPLO (issue #16/#23/#30): igual que tests/asignador-recetas.test.ts.
  // Ninguna es una receta real de Pablo — solo para ver la forma de la lista de la compra.
  // Catálogo de EJEMPLO: una sola fuente en el motor (src/motor/catalogo-ejemplo.ts), compartida con los tests (#66/#103).
  const RECETAS_EJEMPLO_CSV = Motor.RECETAS_EJEMPLO_CSV;
  const RECETAS_EJEMPLO_INGREDIENTES_CSV = Motor.RECETAS_EJEMPLO_INGREDIENTES_CSV;
  const RECETAS_EJEMPLO = Motor.parsearRecetas(RECETAS_EJEMPLO_CSV, RECETAS_EJEMPLO_INGREDIENTES_CSV);
  /** Catálogo + las comidas compuestas (primero y segundo) que usa un plan, para la compra y el detalle (issue #131). */
  const catalogoPlan = (asignaciones) => RECETAS_EJEMPLO.concat(Motor.recetasCompuestas(asignaciones.map((a) => a.receta), RECETAS_EJEMPLO));

  // Tabla de precios de EJEMPLO (issue #32/#36), igual que datos/precios.csv: ningún precio real,
  // pendientes de validar por Pablo. Solo para ver la forma del estimador de coste de la compra.
  const PRECIOS_EJEMPLO_CSV = `ingrediente,unidad,precio_medio,nota
pollo,kg,6.5,EJEMPLO-PENDIENTE-PABLO
patata,kg,1.2,EJEMPLO-PENDIENTE-PABLO
aceite de oliva,kg,6,EJEMPLO-PENDIENTE-PABLO
avena,kg,2.5,EJEMPLO-PENDIENTE-PABLO
yogur griego,kg,4,EJEMPLO-PENDIENTE-PABLO
plátano,kg,1.5,EJEMPLO-PENDIENTE-PABLO
atún en lata,kg,12,EJEMPLO-PENDIENTE-PABLO
merluza,kg,14,EJEMPLO-PENDIENTE-PABLO
pan,kg,3,EJEMPLO-PENDIENTE-PABLO
huevo,ud,0.25,EJEMPLO-PENDIENTE-PABLO`;
  const PRECIOS_EJEMPLO = Motor.parsearPrecios(PRECIOS_EJEMPLO_CSV).filas;

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
  const MENSAJE_LLANO = {
    menor: '👦 Es menor de edad: esto lo tiene que ver Pablo en persona.',
    vida_supuesta: '🚶 No se sabe cuánto te mueves en el día a día aparte de entrenar: de momento se ha supuesto poco (sedentario). Si te mueves más, dilo.',
    ritmo_alto: '⚡ El ritmo de pérdida de peso pedido es alto para hacerlo sin que te lo revisen.',
    deficit_alto: '⚠️ Con lo que entrenas, este recorte de calorías es grande: se puede perder músculo, no solo grasa.',
    superavit_alto: '🍔 El extra de calorías para ganar músculo es alto: se gana sobre todo grasa. Conviene bajarlo.',
    hidrato_bajo: '🔋 Poco hidrato de carbono para lo que entrenas ese día: puede costar rendir y recuperarte.',
    grasa_baja: '🧈 La grasa de ese día se queda corta.',
    disponibilidad_baja: '🚨 Muy pocas calorías libres para lo que gastas entrenando: esto hay que hablarlo con Pablo antes de seguir.',
    kcal_bajas: '📉 La media de calorías de la semana es baja para llevarla sin que te la supervisen.',
    revisar_con_pablo: '🚩 Con estos datos, la dieta bajaría del mínimo seguro. Esto lo tiene que revisar Pablo contigo antes de seguir.',
  };

  const sesionesDiv = document.getElementById('sesiones');
  const franjasDiv = document.getElementById('franjas');

  function horaATexto(t) { return t ? t.slice(0, 5) : ''; }
  function textoAHora(s) { // "08:30" -> 8.5
    if (!s) return undefined;
    const [h, m] = s.split(':').map(Number);
    return h + m / 60;
  }

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

  document.getElementById('btn-siguiente').addEventListener('click', () => {
    if (pasoActual < PASOS.length) mostrarPaso(pasoActual + 1);
    else document.getElementById('form-cuestionario').requestSubmit();
  });
  document.getElementById('btn-atras').addEventListener('click', () => { if (pasoActual > 1) mostrarPaso(pasoActual - 1); });

  function mostrarFormulario() {
    document.body.classList.remove('vista-resultado');
    document.getElementById('form-cuestionario').hidden = false;
    document.getElementById('barra-pasos').hidden = false;
    document.getElementById('progreso').hidden = false;
    document.getElementById('paso-nombre').hidden = false;
  }
  function ocultarFormulario() {
    document.body.classList.add('vista-resultado');
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

  function nuevaFilaSesion(dia, deporte, minutos, horaInicio, actividad, nota) {
    const fila = document.createElement('div');
    fila.className = 'sesion sesion-card';
    fila.innerHTML = `
      <div class="fila2">
        <select class="s-dia">${DIAS.map((d) => `<option value="${d}">${d}</option>`).join('')}</select>
        <select class="s-deporte">${opcionesDeporteRapido()}</select>
      </div>
      <select class="s-actividad-completa" hidden>${opcionesActividadCompleta()}</select>
      <div class="fila2">
        <input class="s-hora" type="time" title="hora de inicio (para colocar la toma pre/post)">
        <input class="s-minutos" type="number" min="1" step="1" placeholder="minutos">
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
    if (actividad) {
      selDeporte.value = '__otro__';
      selCompleta.hidden = false;
      selCompleta.value = actividad;
    } else {
      selDeporte.value = deporte;
    }
    selDeporte.addEventListener('change', () => { selCompleta.hidden = selDeporte.value !== '__otro__'; });
    fila.querySelector('.quitar').addEventListener('click', () => fila.remove());
    sesionesDiv.appendChild(fila);
  }

  document.getElementById('add-sesion').addEventListener('click', () => nuevaFilaSesion('L', 'fuerza', 45));

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
    document.getElementById('pref-gustan').value = (ej.preferencias ?? {}).gustan ?? '';
    document.getElementById('pref-evitas').value = (ej.preferencias ?? {}).evitan ?? '';
    fusionarEnListaNegra(partirAlimentos((ej.preferencias ?? {}).evitan)); // la lista negra guardada no se pierde: se suma y deja el campo con toda la lista
    document.getElementById('turnos').checked = !!ej.turnos;
    document.getElementById('tiempo-cocina').value = ej.tiempoCocina ?? 'normal';
    document.getElementById('comunidad').value = ej.comunidad ?? 'Comunidad de Madrid';
    restablecerEstadoDelPlan(conservarSustituciones);
    sesionesDiv.innerHTML = '';
    (ej.sesiones ?? []).forEach((s) => nuevaFilaSesion(s.dia, s.deporte, s.minutos, s.horaInicio, s.actividad, s.nota));
    // Horas de las comidas: las del ejemplo/guardado si las da, si no las de por defecto (bloque 7).
    // ej.franjas[franja] puede ser solo la hora (texto, ejemplos de siempre) o {activa, hora} (guardado).
    Array.from(franjasDiv.children).forEach((fila) => {
      const guardado = (ej.franjas ?? {})[fila.dataset.franja];
      const horaDef = FRANJAS.find((f) => f.franja === fila.dataset.franja).horaDef;
      const esObjeto = guardado && typeof guardado === 'object';
      fila.querySelector('.f-activa').checked = esObjeto ? guardado.activa : true;
      fila.querySelector('.f-hora').value = (esObjeto ? guardado.hora : guardado) ?? horaDef;
    });
    ['incompleto', 'derivar', 'elegir-deporte', 'resultado'].forEach((id) => { document.getElementById(id).hidden = true; });
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
      });
      reparto.franjas.forEach((f) => {
        const rol = f.rol !== 'normal' ? ` (${f.rol.replace(/_/g, ' ')})` : '';
        lineas.push(`  · ${NOMBRE_FRANJA[f.franja] ?? f.franja}${rol}: P ${f.proteina} · G ${f.grasa} · H ${f.hidrato} g`);
      });
    });
    if (plan.avisos.length) {
      lineas.push('', 'Avisos:');
      plan.avisos.forEach((a) => lineas.push(`- ${MENSAJE_LLANO[a.codigo] ?? a.texto}`));
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
        salida.innerHTML = '<p style="color:#a00">La sesión extra necesita una duración mayor que 0 minutos. No se ha cambiado nada de tu plan.</p>';
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
      document.getElementById('comparacion-resultado').innerHTML = `<p style="color:#a00">No se pudo calcular el escenario B (${resultadoB.estado}). Prueba con otro cambio.</p>`;
      return;
    }
    let planB;
    try { planB = Motor.calcular(resultadoB.perfil); } catch (e) {
      salida.innerHTML = `<p style="color:#a00">No se pudo calcular el escenario B: ${escaparHtml(e.message)}. Tu plan (A) no ha cambiado.</p>`;
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
          ${porqueHtml(`cmp-${nombre.startsWith('Escenario A') ? 'A' : 'B'}-kcal`, Motor.explicarKcalMedia(plan), '¿Por qué estas kcal?')}
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
  let vistaSemana = null; // {repartosPorDia, recetaPorSlot, huecoPorSlot, franjas}: lo que ya calculó mostrarResultado
  let panelActual = 'hoy';

  const PANELES = ['hoy', 'semana', 'calendario', 'recetas', 'compra', 'perfil'];
  function mostrarPanel(nombre, { mover = true } = {}) {
    panelActual = nombre;
    const pestana = nombre === 'calendario' ? 'semana' : nombre; // el calendario es una vista dentro de «Semana»
    document.querySelectorAll('#tabs-app [role="tab"]').forEach((t) => {
      const activa = t.dataset.panel === pestana;
      t.setAttribute('aria-selected', String(activa));
      t.tabIndex = activa ? 0 : -1;
    });
    PANELES.forEach((n) => { document.getElementById(`panel-${n}`).hidden = n !== nombre; });
    if (nombre === 'hoy') pintarHoy();
    if (nombre === 'semana' && typeof pintarResumenDia === 'function') pintarResumenDia(); // la marca «hoy» sigue al reloj (#105)
    if (nombre === 'recetas') pintarRecetas();
    if (mover) window.scrollTo({ top: 0 });
  }
  document.querySelectorAll('.subvista .sub-plan').forEach((b) => b.addEventListener('click', () => mostrarPanel('semana')));
  document.querySelectorAll('.subvista .sub-calendario').forEach((b) => b.addEventListener('click', () => mostrarPanel('calendario')));

  // --- Issue #73: «Hoy» (siguiente comida y sesión según el reloj de este dispositivo) y resumen de «Perfil».
  // No hay conexión con calendarios ni con la actividad real: solo el día de la semana y la hora del dispositivo.
  function pintarHoy() {
    const cont = document.getElementById('hoy-ahora');
    if (!vistaSemana || !planActual) { cont.innerHTML = '<h2>Hoy</h2><p class="subt">Calcula tu plan para ver aquí lo que toca hoy.</p>'; return; }
    const ahora = new Date();
    const dia = LETRA_DIA_JS[ahora.getDay()];
    const horaAct = ahora.getHours() + ahora.getMinutes() / 60;
    const iso = `${ahora.getFullYear()}-${String(ahora.getMonth() + 1).padStart(2, '0')}-${String(ahora.getDate()).padStart(2, '0')}`;
    const fechaTxt = ahora.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    const horaTxt = `${String(ahora.getHours()).padStart(2, '0')}:${String(ahora.getMinutes()).padStart(2, '0')}`;
    let nota = 'Día y hora de este dispositivo; el plan se muestra por día de la semana. No está conectado a ningún calendario ni sabe lo que has hecho.';
    if (calInicio && !Motor.diaDeLaFecha(calInicio, iso)) nota = `Hoy queda fuera de la semana con fechas que elegiste en el calendario (lunes ${calInicio}). ${nota}`;

    const { reparto } = vistaSemana.repartosPorDia.find((r) => r.dia.dia === dia);
    const NOMBRE = { desayuno: 'Desayuno', media_manana: 'Media mañana', comida: 'Comida', merienda: 'Merienda', cena: 'Cena' };
    const horas = franjasDelDia(dia);
    const comidas = reparto.franjas.map((f) => {
      const h = horas.find((x) => x.franja === f.franja);
      return { f, hora: h && h.hora !== undefined ? h.hora : undefined };
    });
    const conHora = comidas.filter((c) => c.hora !== undefined).sort((a, b) => a.hora - b.hora);
    const siguiente = conHora.find((c) => c.hora >= horaAct);
    const sinHora = comidas.filter((c) => c.hora === undefined);

    let bloqueComida;
    if (!comidas.length) {
      bloqueComida = '<p>Hoy no hay comidas activas en tu plan.</p>';
    } else if (siguiente) {
      const asignada = vistaSemana.recetaPorSlot.get(`${dia}|${siguiente.f.franja}`);
      const hueco = vistaSemana.huecoPorSlot.get(`${dia}|${siguiente.f.franja}`);
      bloqueComida = `
        <div class="hoy-bloque destacado">
          <h3>Siguiente comida</h3>
          <div class="titulo">${NOMBRE[siguiente.f.franja] ?? siguiente.f.franja} · ${horaDecimalATexto(siguiente.hora)} · ~${siguiente.f.kcalAprox} kcal</div>
          ${asignada ? `<div>EJEMPLO: ${escaparHtml(asignada.receta.nombre)} (ración ${Math.round(asignada.racionAjustada * 100)} %)</div>`
            : `<div class="error-inline" style="margin:0">Sin receta de ejemplo que encaje${hueco ? `: ${escaparHtml(hueco.motivo)}` : ''}.</div>`}
          ${botonVerComida(dia, siguiente.f.franja)}
        </div>`;
    } else if (conHora.length) {
      bloqueComida = `<div class="hoy-bloque"><h3>Comidas</h3><div class="titulo">Ya pasó la hora de todas las comidas de hoy según tu horario.</div>
        <div class="hoy-nota" style="margin:0">La última fue ${NOMBRE[conHora[conHora.length - 1].f.franja]} a las ${horaDecimalATexto(conHora[conHora.length - 1].hora)}. No se registra si la tomaste (lo que pase en la cocina queda entre tú y la nevera).</div></div>`;
    } else {
      bloqueComida = '<div class="hoy-bloque"><h3>Comidas</h3><div class="titulo">Ninguna comida de hoy tiene hora indicada.</div></div>';
    }
    if (sinHora.length && conHora.length) {
      bloqueComida += `<p class="hoy-nota">Sin hora indicada hoy: ${sinHora.map((c) => NOMBRE[c.f.franja]).join(', ')}.</p>`;
    }

    const entrenos = entrenosDelDia(dia);
    const bloqueEntreno = entrenos.length ? entrenos.map((s) => {
      const nombre = (Motor.ACTIVIDADES[s.actividad] && Motor.ACTIVIDADES[s.actividad].nombre) || s.actividad;
      let estado = 'hora sin indicar';
      if (s.horaInicio !== undefined) {
        const fin = s.horaInicio + s.minutos / 60;
        estado = horaAct < s.horaInicio ? `hoy a las ${horaDecimalATexto(s.horaInicio)}`
          : horaAct < fin ? `según el horario previsto, ahora (${horaDecimalATexto(s.horaInicio)}-${horaDecimalATexto(fin % 24)})`
            : `su hora prevista (${horaDecimalATexto(s.horaInicio)}) ya pasó; no se registra si la hiciste`;
      }
      return `<div class="hoy-bloque"><h3>Entreno de hoy</h3><div class="titulo">${escaparHtml(nombre)} · ${s.minutos}'${notaSesionHtml(s)}</div><div>${estado}</div></div>`;
    }).join('') : '<div class="hoy-bloque"><h3>Entreno de hoy</h3><div class="titulo">Sin entreno previsto hoy. Descansar también es parte del plan (y de los buenos).</div></div>';

    cont.innerHTML = `
      <h2>Hoy · ${NOMBRE_DIA_LARGO[dia]}</h2>
      <p class="hoy-fecha">${escaparHtml(fechaTxt)} · ${horaTxt}</p>
      ${bloqueComida}
      ${bloqueEntreno}
      ${cardCompeticionHtml(dia)}
      <p class="hoy-nota">${escaparHtml(nota)}</p>`;
  }
  setInterval(() => { if (panelActual === 'hoy' && !document.getElementById('resultado').hidden) pintarHoy(); }, 60000);

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
        <button type="button" class="btn-texto sos-quitar" data-i="${i}" style="color:#b3271e" aria-label="Quitar ${escaparHtml(r.nombre)} de mis recetas sí o sí">Quitar</button></span></li>`;
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
      <h3>⭐ Recetas «sí o sí»</h3>
      <p class="subt" style="margin:0 0 0.5rem">Si la quieres sí o sí, saldrá en tu semana las veces que elijas (en comidas y cenas, 1 o 2 como máximo; en desayunos, medias mañanas y meriendas, hasta 7) y se mantendrá cada semana hasta que la quites. Si choca con una alergia, tu lista negra o los topes, no se fuerza y se te avisa.</p>
      <div class="campo"><label for="sos-franja">Comida</label><select id="sos-franja">${r.franjas.map((f) => `<option value="${f}" ${f === franja ? 'selected' : ''}>${NOMBRE_FRANJA_SOS[f]}</option>`).join('')}</select></div>
      <div class="campo"><label for="sos-veces">Veces por semana</label><select id="sos-veces">${opcionesVeces(franja, ya ? ya.veces : 1)}</select></div>
      <button type="button" class="btn-principal" id="sos-guardar" data-id="${r.id}">${ya ? 'Guardar cambios' : 'La quiero sí o sí'}</button>
      ${ya ? `<button type="button" class="btn-texto" id="sos-quitar-ficha" data-id="${r.id}" style="color:#b3271e">Quitar de mis «sí o sí»</button>` : ''}`;
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
    const lineas = estadosFija.filter((e) => !e.ok || e.causa || e.aviso).map((e) =>
      `<li>${e.ok ? '⚠️' : '⛔'} <strong>${escaparHtml(e.dia)} · ${NOMBRE_FRANJA_SOS[e.franja]}</strong> · ${escaparHtml(e.nombre)}: ${escaparHtml(e.causa ?? e.aviso ?? '')}${e.arreglo ? ` <span style="color:var(--gris)">${escaparHtml(e.arreglo)}</span>` : ''}${e.aviso && e.causa ? ` <span style="color:var(--gris)">${escaparHtml(e.aviso)}</span>` : ''}</li>`).join('');
    caja.innerHTML = `
      <div class="acciones-rapidas" style="margin:0 0 0.5rem">
        <button type="button" class="btn-secundario" id="fija-toda">📌 Fijar toda la semana</button>
        <button type="button" class="btn-texto" id="fija-quitar" ${semanaFija.size ? '' : 'disabled'}>Quitar todas las fijaciones (${semanaFija.size})</button>
        <button type="button" class="btn-texto" id="fija-deshacer" ${historialFija.length ? '' : 'disabled'}>↩️ Deshacer</button>
      </div>
      ${lineas ? `<details class="plegable" open><summary>Tu semana fija: avisos</summary><ul class="resumen-lista">${lineas}</ul></details>` : ''}`;
  }
  document.addEventListener('click', (ev) => {
    const b = ev.target.closest && ev.target.closest('.fijar-btn, #fija-toda, #fija-quitar, #fija-deshacer');
    if (!b || !planActual) return;
    if (b.id === 'fija-deshacer') {
      if (!historialFija.length) return;
      semanaFija = historialFija.pop();
      guardarFija();
      mostrarResultado(semanaActual, planActual, respuestasActuales, franjasActuales);
    } else if (b.id === 'fija-quitar') cambiarFija(() => semanaFija.clear());
    else if (b.id === 'fija-toda') {
      cambiarFija(() => { for (const a of asignacionSemanaActual.asignaciones) semanaFija.set(`${a.dia}|${a.franja}`, a.receta); });
    } else {
      const k = `${b.dataset.dia}|${b.dataset.franja}`;
      cambiarFija(() => { if (semanaFija.has(k)) semanaFija.delete(k); else { const a = asignacionSemanaActual.asignaciones.find((x) => `${x.dia}|${x.franja}` === k); if (a) semanaFija.set(k, a.receta); } });
    }
  });

  const CLAVE_FAVORITAS = 'app-dietas-recetas-favoritas';
  let restriccionesActuales = null;
  let favoritasRecetas = [];
  try { favoritasRecetas = Motor.favoritasValidas(JSON.parse(localStorage.getItem(CLAVE_FAVORITAS) || 'null'), RECETAS_EJEMPLO); } catch { /* sin almacenamiento o dato corrupto: sin favoritas */ }
  function guardarFavoritas() { try { localStorage.setItem(CLAVE_FAVORITAS, JSON.stringify(favoritasRecetas)); } catch { falloAlmacenamiento(); /* solo dura esta sesión */ } }

  function textoRestricciones(ap) {
    if (!ap) return 'Restricciones del perfil: aún no calculadas.';
    const lista = [ap.celiaquia && 'celiaquía', ap.lactosa && 'lactosa', ap.vegetariano && 'vegetariano/a', ap.vegano && 'vegano/a', ...ap.evitados.map((e) => `evitas «${e}»`)].filter(Boolean);
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
          <div class="rec-img" aria-hidden="true"><span>🍽️</span>Sin imagen</div>
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
    const pasos = Motor.elaboracionEjemplo(r.id);
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
    tab.addEventListener('click', () => mostrarPanel(tab.dataset.panel));
    tab.addEventListener('keydown', (ev) => {
      if (ev.key !== 'ArrowRight' && ev.key !== 'ArrowLeft') return;
      const tabs = Array.from(document.querySelectorAll('#tabs-app [role="tab"]'));
      const siguiente = tabs[(tabs.indexOf(tab) + (ev.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
      siguiente.focus();
      mostrarPanel(siguiente.dataset.panel, { mover: false });
    });
  });

  function horaDecimalATexto(h) {
    if (h === undefined || h === null) return '';
    const horas = Math.floor(h + 1e-9);
    const min = Math.round((h - horas) * 60);
    return `${String(horas).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
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
    const sesiones = sesionesSemana.map((s, i) => ({ ...s, horaInicio: (ultimasSesiones[i] ?? {}).horaInicio, nota: (ultimasSesiones[i] ?? {}).nota })).filter((s) => s.dia === dia);
    const entrenosHtml = sesiones.length
      ? sesiones.map((s) => `<li class="entreno"><span aria-hidden="true">${iconoActividad(s.actividad)}</span> ${(Motor.ACTIVIDADES[s.actividad] && Motor.ACTIVIDADES[s.actividad].nombre) || s.actividad}${notaSesionHtml(s)} · ${s.minutos}'${s.horaInicio !== undefined ? ` · ${horaDecimalATexto(s.horaInicio)}` : ' · hora sin indicar'}</li>`).join('')
      : '<li>Día sin entreno: hoy los músculos se recuperan solos, tú solo tienes que comer bien.</li>';
    const horaFranja = (f) => { const x = franjasDelDia(dia).find((y) => y.franja === f); return x && x.hora !== undefined ? `${horaDecimalATexto(x.hora)} · ` : ''; };
    const comidasHtml = reparto.franjas.length ? reparto.franjas.map((f) => {
      const conflicto = reparto.conflictos.filter((c) => c.franja === f.franja).map((c) => `<br><span class="error-inline">⚠️ ${escaparHtml(textoConflicto(c))}</span>`).join('');
      const asignada = vistaSemana.recetaPorSlot.get(`${dia}|${f.franja}`);
      return asignada
        ? `<li>🍽️ <strong>${NOMBRE_FRANJA_RESUMEN[f.franja] ?? f.franja}</strong> · ${horaFranja(f.franja)}~${f.kcalAprox} kcal${conflicto}<br><span style="color:var(--gris)">EJEMPLO: ${asignada.receta.nombre} (${Math.round(asignada.racionAjustada * 100)} %)</span><br>${botonVerComida(dia, f.franja)}</li>`
        : `<li class="hueco">⚠️ <strong>${NOMBRE_FRANJA_RESUMEN[f.franja] ?? f.franja}</strong> · ${horaFranja(f.franja)}~${f.kcalAprox} kcal${conflicto}<br>Sin receta de ejemplo que encaje.<br>${botonVerComida(dia, f.franja)}</li>`;
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
      <p class="dia-resumen-titulo">${NOMBRE_DIA_LARGO[diaResumen] ?? diaResumen}${diaResumen === diaDeHoy() ? ' (hoy)' : ''} · ${d.tipo}</p>
      <p class="dia-resumen-kcal">${d.kcal} <small style="font-size:0.5em;font-weight:400">kcal</small></p>
      <div class="dia-macros" style="font-size:0.82rem;color:var(--gris)">P ${d.proteinaG} g · G ${d.grasaG} g · H ${d.hidratoG} g</div>
      ${porqueDiaHtml(`res-dia-${diaResumen}`, diaResumen)}
      <h3 style="margin-top:1rem">Entrenos</h3>
      <ul class="dia-resumen-lista">${entrenosHtml}</ul>
      <h3>Comidas</h3>
      <ul class="dia-resumen-lista">${comidasHtml}</ul>
      ${cardCompeticionHtml(diaResumen)}
      <div class="acciones-rapidas">
        <button type="button" class="btn-secundario" id="ir-a-compra">🛒 Ver la compra</button>
      </div>
    `;
    document.getElementById('ir-a-compra').addEventListener('click', () => mostrarPanel('compra'));
  }

  // --- Issue #125: día de competición. Línea de tiempo, combustible de carrera y reorganización de las tomas alrededor de la
  // hora de salida. Ofrece, no impone: el horario por día solo cambia al pulsar el botón (y se deshace con «Volver al horario general»). ---
  const NOMBRE_TOMA = { desayuno: 'Desayuno', media_manana: 'Media mañana', comida: 'Comida', merienda: 'Merienda', cena: 'Cena' };
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
        <h3 style="margin-top:0">🏁 Día de competición · ${escaparHtml(x.c.nombre)}</h3>
        <p class="subt" style="font-size:0.8rem;margin:0 0 0.5rem">${escaparHtml(Motor.NOTA_PAUTA)} Las tomas de antes, entre pruebas y después cuentan dentro del total del día.</p>
        <ul class="dia-resumen-lista">${lineaCompeticionHtml(x)}</ul>
        <details class="plegable"><summary>Combustible de carrera (aparte del total del día)</summary><ul class="dia-resumen-lista">${combustibleHtml(x)}</ul></details>
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
      const compHtml = !calInicio
        ? '<li style="color:var(--gris)">Elige el lunes de inicio para ver las competiciones de este día.</li>'
        : delDia.length
          ? delDia.map((c) => `<li class="entreno">🏁 <strong>${escaparHtml(c.nombre)}</strong> · ${escaparHtml(resumenCompeticion(c))}</li>`).join('')
          : '<li>Ninguna competición anotada este día.</li>';
      detalle.innerHTML = `
        <p class="dia-resumen-titulo">${NOMBRE_DIA_LARGO[diaCal]}${fecha ? ` · ${fechaLegible(fecha)}` : ''} · ${d.tipo}</p>
        <p class="dia-resumen-kcal">${d.kcal} <small style="font-size:0.5em;font-weight:400">kcal</small></p>
        <h3 style="margin-top:1rem">Entrenos</h3><ul class="dia-resumen-lista">${entrenosHtml}</ul>
        <h3>Comidas</h3><ul class="dia-resumen-lista">${comidasHtml}</ul>
        <h3>Competiciones</h3><ul class="dia-resumen-lista">${compHtml}</ul>
        ${cardCompeticionHtml(diaCal)}
      `;
    }

    pintarExportacionIcs();

    const lista = document.getElementById('cal-lista-comp');
    lista.innerHTML = competiciones.length ? competiciones.map((c) => {
      const dia = calInicio ? Motor.diaDeLaFecha(calInicio, c.fecha) : undefined;
      return `
        <li class="comp-item">
          <span><strong>${escaparHtml(c.nombre)}</strong><br><span style="color:var(--gris)">${escaparHtml(resumenCompeticion(c))}${dia ? ` · esta semana (${NOMBRE_DIA_LARGO[dia]})` : ''}</span></span>
          <span class="acciones">
            <button type="button" class="btn-texto" data-accion="editar" data-id="${c.id}" aria-label="Editar ${escaparHtml(c.nombre)}">Editar</button>
            <button type="button" class="btn-texto" data-accion="borrar" data-id="${c.id}" aria-label="Borrar ${escaparHtml(c.nombre)}" style="color:#b3271e">Borrar</button>
          </span>
        </li>`;
    }).join('') : '<li style="color:var(--gris)">Todavía no has anotado ninguna competición.</li>';
    lista.querySelectorAll('button').forEach((b) => b.addEventListener('click', () => {
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
      <div class="campo"><button type="button" class="btn-texto p-quitar" style="color:#b3271e">Quitar prueba</button></div>`;
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
    guardarCalendarioLocal();
    pintarCalendario();
  });
  document.getElementById('cal-lunes-actual').addEventListener('click', () => {
    const hoy = new Date();
    const iso = `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, '0')}-${String(hoy.getDate()).padStart(2, '0')}`;
    calInicio = Motor.lunesDeLaSemana(iso); // se elige con un clic explícito, nunca al cargar
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
    salirDeEdicionCompeticion();
    try { localStorage.removeItem(CLAVE_CALENDARIO); } catch { falloAlmacenamiento(); /* nada que borrar */ }
    pintarCalendario();
  });

  document.getElementById('empezar-de-nuevo').addEventListener('click', () => {
    document.getElementById('resultado').hidden = true;
    mostrarFormulario();
    mostrarPaso(1);
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

  function borrarPerfilGuardado() {
    try { localStorage.removeItem(CLAVE_GUARDADO); } catch { falloAlmacenamiento(); /* nada que borrar */ }
    document.getElementById('aviso-guardado').hidden = true;
    cargarEjemplo('general');
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

  function cargarPerfilGuardadoSiHay() {
    let guardado = null;
    try { guardado = JSON.parse(localStorage.getItem(CLAVE_GUARDADO) || 'null'); } catch { /* storage bloqueado o dato corrupto */ }
    // Un JSON válido pero con otra forma (lista, número, sesiones que no son lista…) se ignora: nunca debe romper la carga.
    const formaValida = guardado && typeof guardado === 'object' && !Array.isArray(guardado)
      && (guardado.sesiones === undefined || Array.isArray(guardado.sesiones))
      && (guardado.franjas === undefined || (guardado.franjas && typeof guardado.franjas === 'object' && !Array.isArray(guardado.franjas)));
    if (!formaValida) { cargarEjemplo('general'); return; }
    try {
      rellenarFormulario(guardado, { conservarSustituciones: true });
    } catch {
      cargarEjemplo('general'); // el perfil guardado estaba dañado a medias: se vuelve a un ejemplo limpio, sin precarga
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
  let diasContextoAbiertos = new Set(); // issue #37: qué formularios de "contexto del día" quedan desplegados
  let contextoPorDia = new Map(DIAS.map((d) => [d, Motor.contextoDiaPorDefecto()])); // issue #37: turno, táper, etc. por día — solo anotación, no cambia kcal ni recetas
  let historialMovimientos = []; // issue #38: días afectados de cada movimiento, en el mismo orden que semana.historial (para el mensaje de "Deshacer")
  let mensajeDeshacer = ''; // issue #38: confirmación tras deshacer, con etiquetas de día legibles
  let filasPlanCSV = []; // issue #31: última tabla día/franja calculada, lista para descargar en CSV
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
      alergias: {
        celiaquia: document.getElementById('al-celiaquia').checked,
        lactosa: document.getElementById('al-lactosa').checked,
        vegetariano: document.getElementById('al-vegetariano').checked,
        vegano: document.getElementById('al-vegano').checked,
        otros: document.getElementById('al-otros').value,
      },
      preferencias: { gustan: document.getElementById('pref-gustan').value, evitan: document.getElementById('pref-evitas').value },
      vidaReal: { turnos: document.getElementById('turnos').checked, tiempoCocina: document.getElementById('tiempo-cocina').value },
      comunidadAutonoma: document.getElementById('comunidad').value,
    };
  }

  function ocultarPantallas() {
    ['incompleto', 'derivar', 'elegir-deporte', 'resultado'].forEach((id) => { document.getElementById(id).hidden = true; });
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
    verdura: '🥦 Verdura', fruta: '🍎 Fruta', carne_pescado: '🍗 Carne y pescado',
    lacteos: '🥛 Lácteos y huevos', despensa: '🥫 Despensa', congelados: '🧊 Congelados', otros: '📦 Otros',
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
    // Issue #36: coste orientativo con datos/precios.csv (valores de EJEMPLO, #32). Responde al mismo
    // filtro de días que la lista: se calcula sobre `lista`, ya filtrada por diasElegidos.
    const euros = (n) => n.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    let cuerpo;
    let costeHtml = '';
    let listaConEstado = [];
    let porqueCompra = '';
    if (!diasElegidos.length) {
      cuerpo = '<p style="color:var(--gris)">Ningún día marcado: elige al menos uno para ver la lista de la compra.</p>';
    } else if (!asignaciones.length) {
      cuerpo = '<p style="color:var(--gris)">No se ha podido asignar ninguna receta de ejemplo a ninguna franja de los días elegidos.</p>';
    } else {
      const listaBase = Motor.generarListaCompra(asignaciones.map((a) => ({ recetaId: a.receta, veces: 1, racion: a.racionAjustada })), catalogoPlan(asignaciones), { esProtegido: Motor.noSeReescala });
      // Issue #76: una marca solo cuenta como cubierta si la cantidad de la dieta no cambió desde que se marcó.
      const evaluacion = Motor.evaluarMarcas(listaBase, Object.fromEntries(marcadosEnCasa));
      const aRevisar = new Map(evaluacion.aRevisar.map((m) => [m.ingrediente, m]));
      const lista = Motor.marcarYaEnCasa(listaBase, evaluacion.cubiertos);
      listaConEstado = lista;
      const gramosTxt = (g) => `${String(Math.round(g * 10) / 10).replace('.', ',')} g`;
      const dietaTxt = (item) => (item.comprar === `${item.gramosTotales} g` ? '' : ` <small class="dieta-dato">(dieta: ${gramosTxt(item.gramosTotales)})</small>`);
      const porSeccion = new Map();
      lista.forEach((item) => {
        if (!porSeccion.has(item.seccion)) porSeccion.set(item.seccion, []);
        porSeccion.get(item.seccion).push(item);
      });
      const secciones = Array.from(porSeccion.keys()).sort();
      cuerpo = secciones.map((sec) => `
        <h3 style="font-size:0.85rem;text-transform:uppercase;color:var(--gris);margin:1rem 0 0.4rem">${NOMBRE_SECCION[sec] ?? sec}</h3>
        <ul class="resumen-lista">
          ${porSeccion.get(sec).map((item) => `
            <li class="item-compra${aRevisar.has(item.ingrediente) ? ' a-revisar' : ''}">
              <label>
                <input type="checkbox" class="marca-en-casa" data-ingrediente="${escaparHtml(item.ingrediente)}" data-gramos="${item.gramosTotales}" ${item.yaEnCasa ? 'checked' : ''} aria-label="Comprado o ya en casa: ${escaparHtml(item.ingrediente)}">
                <span class="${item.yaEnCasa ? 'tachado' : ''}"><strong>${item.comprar}</strong> — ${escaparHtml(item.ingrediente)}${dietaTxt(item)}</span>
              </label>
              ${aRevisar.has(item.ingrediente) ? `<div class="aviso-cantidad" role="status">Lo marcaste cuando hacían falta ${gramosTxt(aRevisar.get(item.ingrediente).marcado)} y ahora hacen falta ${gramosTxt(aRevisar.get(item.ingrediente).ahora)}: no se da por cubierto.
                <button type="button" class="btn-texto marca-confirmar" data-ingrediente="${escaparHtml(item.ingrediente)}" data-gramos="${item.gramosTotales}">Sigue cubierto</button></div>` : ''}
            </li>
          `).join('')}
        </ul>
      `).join('');

      const estimacion = Motor.estimarCoste(lista, PRECIOS_EJEMPLO);
      porqueCompra = porqueHtml('compra', Motor.explicarCompra({ dias: diasElegidos.length, huecos: huecos.length, sinPrecio: estimacion.sinPrecio.length }), '¿Por qué estas cantidades y este coste?');
      const filasSeccionCoste = Object.entries(estimacion.porSeccion)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([sec, coste]) => `<li>${NOMBRE_SECCION[sec] ?? sec}: ≈ ${euros(coste)} €</li>`)
        .join('');
      const sinPrecioHtml = estimacion.sinPrecio.length ? `
        <p style="font-size:0.8rem;color:var(--gris);margin:0.5rem 0 0">
          Sin precio de ejemplo, fuera del total (${estimacion.sinPrecio.length}): ${estimacion.sinPrecio.join(', ')}.
        </p>
      ` : '';
      costeHtml = `
        <div class="coste-estimado">
          <p style="font-size:0.8rem;color:#7a1f18;font-weight:600;margin:0 0 0.4rem">
            ⚠️ Coste de EJEMPLO (datos/precios.csv), pendiente de validar por Pablo — no son precios reales ni una oferta.
          </p>
          <p style="margin:0 0 0.4rem"><strong>≈ ${euros(estimacion.total)} €</strong> en total, con los días elegidos</p>
          <ul class="resumen-lista">${filasSeccionCoste}</ul>
          ${sinPrecioHtml}
        </div>
      `;
    }

    const huecosHtml = huecos.length ? `
      <p style="font-size:0.85rem;color:#7a1f18;margin-top:1rem">
        ⚠️ ${huecos.length} franja${huecos.length === 1 ? '' : 's'} sin receta de ejemplo que encaje
        (normal con solo 5 recetas): ${huecos.slice(0, 3).map((h) => `${h.dia} ${h.franja}`).join(', ')}${huecos.length > 3 ? '…' : ''}.
        Esta lista es <strong>parcial</strong>: no incluye los ingredientes de esas comidas.
      </p>
    ` : '';

    const manualesHtml = `
      <h3 style="font-size:0.85rem;text-transform:uppercase;color:var(--gris);margin:1rem 0 0.4rem">✏️ Añadidos a mano</h3>
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
        <button type="button" id="btn-anadir-manual" class="btn-texto">➕ Añadir</button>
      </div>
      ${(marcadosEnCasa.size || articulosManuales.length) ? `
        <button type="button" id="btn-borrar-lista-manual" class="btn-texto" style="color:#b3271e">
          🗑️ Borrar marcas y añadidos a mano
        </button>
      ` : ''}
    `;

    document.getElementById('lista-compra').innerHTML = `
      <h2>🛒 Lista de la compra</h2>
      <p style="font-size:0.85rem;color:#7a1f18;font-weight:600;margin-top:0">
        ⚠️ Con recetas de EJEMPLO (docs/recetas-formato.md), no reales — la forma de la lista, no los platos.
      </p>
      <p style="font-size:0.82rem;color:var(--gris);margin:0 0 0.6rem">Marca lo que ya has comprado o tienes en casa (el pan olvidado en el congelador también cuenta). Si después cambia la cantidad que hace falta (otra receta, otros días), te avisamos en lugar de darlo por cubierto. «Dieta» es lo que pide el plan; «comprar» está redondeado hacia arriba.</p>
      <p style="font-size:0.85rem;color:var(--gris);margin:0 0 0.4rem">¿Qué días seguirás el plan esta semana?</p>
      ${diasHtml}
      ${porqueCompra}
      ${cuerpo}
      ${costeHtml}
      ${huecosHtml}
      ${manualesHtml}
      <div class="acciones-compra">
        <button type="button" class="btn-secundario" id="btn-copiar-compra">📋 Copiar compra pendiente</button>
        <button type="button" class="btn-secundario" id="btn-descargar-compra">⬇️ Descargar .txt</button>
        <p id="estado-compra" class="subt" role="status" aria-live="polite"></p>
      </div>
    `;

    // Issue #42: mismo estado que se acaba de pintar (días, cantidades por ración asignada, marcas de
    // "ya en casa", extras manuales). Se construye al pulsar, no antes, para no quedarse desfasado.
    const textoCompra = () => Motor.formatearListaPendiente({
      dias: diasElegidos, items: listaConEstado, manuales: articulosManuales, huecos: huecos.length,
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
      ${hayHistorial ? '<button type="button" id="btn-deshacer">↩️ Deshacer último movimiento</button>' : ''}
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
    return (semanaActual.perfil.sesiones ?? []).map((s, i) => ({ ...s, horaInicio: (ultimasSesiones[i] ?? {}).horaInicio, nota: (ultimasSesiones[i] ?? {}).nota })).filter((s) => s.dia === dia);
  }

  let verCocido = false; // interruptor del detalle: el peso por defecto es en seco, el cocido es opcional
  function abrirDetalleComida(dia, franja) {
    if (!vistaSemana || !planActual) return;
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
          <span class="dc-ing-nombre">${escaparHtml(i.nombre)}${i.protegido ? ' <small class="dc-ing-nota">no se escala</small>' : ''}</span>
          <span class="dc-ing-gramos">${String(i.gramosRacion).replace('.', ',')} g${c ? ` <small class="dc-cocido">≈ ${c.gramos} g cocido</small>` : ''}</span>
          <span class="dc-ing-compra">compra: ${enCompra ? escaparHtml(comprados.get(i.nombre) ?? '—') : 'día fuera de la compra'}</span>
        </li>`;
      }).join('');
      const pasos = Motor.elaboracionEjemplo(asignada.receta.id);
      const hayCocido = Motor.ingredientesDeLaRacion(asignada.receta, 1).some((i) => Motor.factorCocido(i.nombre));
      const bloqueCocido = hayCocido ? `
        <label class="check"><input type="checkbox" id="dc-ver-cocido" ${verCocido ? 'checked' : ''}> Ver también el peso en cocido</label>
        ${verCocido ? '<p class="dc-chiste">Los pesos son en seco. Lo único que tendrías que hacer es sacar el móvil y multiplicar por el factor (arroz ×2,5, pasta ×2,25…), pero tranquilo: para trabajar ya estamos nosotros.</p>' : ''}` : '';
      const fila = (letra, clase, objetivo, deLaReceta) => `<tr><th><span class="chip chip-${clase}">${letra}</span></th><td>${objetivo}</td><td>${deLaReceta}</td></tr>`;
      const cuadre = `
        <table class="dc-cuadre">
          <thead><tr><th></th><th>Tu objetivo</th><th>Receta de ejemplo</th></tr></thead>
          <tbody>
            <tr class="dc-cuadre-kcal"><th>kcal</th><td><strong>~${f.kcalAprox}</strong></td><td><strong>~${asignada.kcalResultante}</strong></td></tr>
            ${fila('P', 'p', `${f.proteina} g`, `${asignada.receta.proteina} g base`)}
            ${fila('G', 'g', `${f.grasa} g`, `${asignada.receta.grasa} g base`)}
            ${fila('H', 'h', `${f.hidrato} g`, `${asignada.receta.hidrato} g base`)}
          </tbody>
        </table>
        <p class="dc-nota">La receta usa valores declarados (ración base ${asignada.receta.kcal} kcal), no medidos: sirve para acercarse a las kcal, no para clavar los macros.${asignada.protegidosSinEscalar && asignada.protegidosSinEscalar.length ? ` ${escaparHtml(asignada.protegidosSinEscalar.join(', '))} no se reescala${asignada.protegidosSinEscalar.length > 1 ? 'n' : ''}, así que las cifras son aproximadas.` : ''}</p>`;
      receta = `
        <h3 class="dc-plato">🍽️ ${escaparHtml(asignada.receta.nombre)} <span class="etq-ejemplo">EJEMPLO</span> <span class="dc-racion">ración ${Math.round(asignada.racionAjustada * 100)} %</span></h3>
        <div class="dc-ings-cab"><span>Ingrediente</span><span>Lo que comes</span><span>Lo que compras</span></div>
        <ul class="dc-ings">${filas}</ul>
        ${bloqueCocido}
        <h3>Elaboración</h3>
        ${pasos ? `<ol class="dc-pasos">${pasos.map((p) => `<li>${escaparHtml(p)}</li>`).join('')}</ol>`
          : '<p><strong>Elaboración pendiente:</strong> esta receta no tiene pasos en su ficha y no se inventa una.</p>'}
        <h3>Cómo encaja con tu objetivo</h3>
        ${cuadre}
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
        <p class="dc-nota">${NOMBRE_DIA_LARGO[dia]} (${d.tipo}) · ${NOMBRE[franja] ?? franja}${hora ? ` a las ${hora}` : ''}.</p>
        ${cuerpoPorque(Motor.explicarComida(f0, { tipoDia: d.tipo, pesoRef: planActual.proteina.pesoReferencia, proteinaDia: d.proteinaG, hidratoDia: d.hidratoG, grasaDia: d.grasaG }))}
        ${asignada ? cuerpoPorque(Motor.explicarRacion({ kcalReceta: asignada.receta.kcal, kcalObjetivo: f0.kcalAprox, racion: asignada.racionAjustada, kcalResultante: asignada.kcalResultante, protegidos: asignada.protegidosSinEscalar })) : ''}
      </details>`;

    document.getElementById('dc-cuerpo').innerHTML = receta + contexto
      + `<div class="dc-acciones"><button type="button" class="btn-secundario" id="dc-cambiar">🔄 Cambiar receta de esta comida</button></div>`;
    document.getElementById('dc-cambiar').addEventListener('click', () => abrirAlternativas(dia, franja));
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
    mostrarResultado(semanaActual, planActual, respuestasActuales, franjasActuales);
    const panel = document.querySelector(`#r-dias .horario-dia[data-dia="${b.dataset.dia}"]`);
    if (panel) { panel.scrollIntoView({ block: 'center' }); const i = panel.querySelector('input'); if (i) i.focus(); }
  });
  let disparadorDetalle = null; // para devolver el foco al botón que abrió el detalle
  document.addEventListener('click', (ev) => {
    const b = ev.target.closest && ev.target.closest('.ver-comida');
    if (b) abrirDetalleComida(b.dataset.dia, b.dataset.franja);
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
    const tarjetas = alternativas.map((a, i) => `
      <li class="alt-card">
        <div class="titulo">${escaparHtml(a.receta.nombre)} <span class="rec-etiqueta">EJEMPLO</span></div>
        <div class="dato">Ración propuesta ${Math.round(a.racionAjustada * 100)} % · ~${a.kcalResultante} kcal (objetivo de la comida ~${slot.kcalObjetivo})</div>
        ${a.avisos.map((x) => `<div class="aviso">⚠️ ${escaparHtml(x)}.</div>`).join('')}
        <div class="alt-acciones"><button type="button" class="btn-secundario alt-previsualizar" data-i="${i}" aria-label="Ver cómo quedaría: ${escaparHtml(a.receta.nombre)}">Ver cómo quedaría</button></div>
      </li>`).join('');
    const bloqueadasPorVariedad = descartadas.filter((d) => d.motivo.includes('tercera aparición'));
    const avisoVariedad = bloqueadasPorVariedad.length
      ? `<p class="error-inline">No se ofrece ${bloqueadasPorVariedad.map((d) => `«${escaparHtml(d.receta.nombre)}»`).join(', ')} porque crearía una tercera aparición del mismo plato entre las comidas y cenas de la semana (máximo 2).${alternativas.length ? ' Elige otra opción de la lista.' : ''}</p>` : '';
    const motivos = descartadas.length ? `
      <details class="como-importar"><summary>Recetas no disponibles para esta comida y por qué</summary>
        <ul>${descartadas.map((d) => `<li><strong>${escaparHtml(d.receta.nombre)}:</strong> ${escaparHtml(d.motivo)}.</li>`).join('')}</ul></details>` : '';
    document.getElementById('dc-cuerpo').innerHTML = `
      <p>${actual ? `Ahora: <strong>${escaparHtml(actual.receta.nombre)}</strong> (ración ${Math.round(actual.racionAjustada * 100)} %).` : `Ahora: sin receta de ejemplo${hueco ? ` (${escaparHtml(hueco.motivo)})` : ''}.`}</p>
      <p class="dc-aviso" style="color:var(--gris)">Cambia solo esta comida: no añade otra ni registra que la hayas tomado, y el resto de la semana y tus objetivos no se tocan. Las opciones <strong>no son equivalentes nutricionales</strong>: solo cumplen tus restricciones, el validador de platos, la variedad semanal en comidas y cenas (máx. 2 veces el mismo plato) y la franja. Las kcal y macros de las recetas de ejemplo son aproximados.</p>
      ${avisoVariedad}
      ${alternativas.length ? `<ul class="alt-lista">${tarjetas}</ul>` : `<p class="error-inline">No hay ninguna receta de ejemplo compatible para esta comida${bloqueadasPorVariedad.length ? ' que respete el límite de variedad' : ''}. No se cambia nada ni se rebajan tus restricciones.</p>`}
      ${motivos}
      <div id="alt-previa"></div>
      <div class="dc-acciones"><button type="button" class="btn-texto" id="alt-cancelar">Cancelar y volver al detalle</button></div>`;
    document.getElementById('dc-cuerpo').querySelectorAll('.alt-previsualizar').forEach((b) => b.addEventListener('click', () => previsualizarAlternativa(dia, franja, alternativas[Number(b.dataset.i)], slot, b)));
    document.getElementById('alt-cancelar').addEventListener('click', () => abrirDetalleComida(dia, franja));
    const dlg = document.getElementById('detalle-comida');
    if (!dlg.open) { disparadorDetalle = document.activeElement; dlg.showModal(); }
    document.getElementById('dc-titulo').focus();
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
      .map((i) => `<li>${escaparHtml(i.nombre)}: <strong>${String(i.gramosRacion).replace('.', ',')} g</strong>${i.protegido ? ' (no se escala)' : ''}</li>`).join('');
    document.getElementById('alt-previa').innerHTML = `
      <div class="cambio-zona" style="margin-top:0.8rem" tabindex="-1" id="alt-previa-caja">
        <strong>Así quedaría: ${escaparHtml(alt.receta.nombre)} (EJEMPLO, ración ${Math.round(alt.racionAjustada * 100)} %)</strong>
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
    const planBase = plan.planBase ?? plan;
    const compSem = calInicio && competiciones.length ? Motor.aplicarCompeticion(planBase, semana.perfil, competiciones, calInicio, Motor.fechaLocalISO(new Date())) : null;
    plan = compSem && compSem.activa ? { ...compSem.plan, planBase } : planBase;
    const compPorDia = new Map((compSem ? compSem.dias : []).map((x) => [x.dia, x]));
    semanaActual = semana;
    planActual = plan;
    respuestasActuales = respuestas;
    franjasActuales = franjasBloque7;

    document.getElementById('r-ecuacion').textContent = plan.basal.ecuacion;
    document.getElementById('r-basal').textContent = plan.basal.kcal;
    document.getElementById('r-kcalmedia').textContent = plan.kcalMedia;
    document.getElementById('porque-semana').innerHTML =
      porqueHtml('semana-ecuacion', Motor.explicarEcuacion(plan, semana.perfil), '¿Por qué esta ecuación?')
      + porqueHtml('semana-kcal', Motor.explicarKcalMedia(plan), '¿Por qué estas kcal?');

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
      });
      reparto.avisos.forEach((a) => avisosReparto.push(`${d.dia}: ${a}`));
      reparto.franjas.forEach((f) => {
        slotsSemana.push({ dia: d.dia, franja: f.franja, kcalObjetivo: f.kcalAprox, cargaAlta: d.tipo === 'carga_alta', ...(compPorDia.get(d.dia)?.sinFibraAlta ? { sinFibraAlta: true } : {}) });
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
    const asignacionBase = Motor.asignarRecetas(slotsSemana, RECETAS_EJEMPLO, { alergiasPreferencias, imprescindibles: partirAlimentos(respuestas.preferencias.gustan), recetasSiOSi, fijadas: [...semanaFija].map(([k, v]) => ({ dia: k[0], franja: k.slice(2), receta: v })) });
    // Issue #75: las recetas elegidas a mano se aplican sobre la asignación y se vuelven a validar con el perfil actual.
    const aplicadas = Motor.aplicarSustituciones(asignacionBase, slotsSemana, RECETAS_EJEMPLO, sustituciones, { alergiasPreferencias });
    const asignacionSemana = aplicadas.resultado;
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
          const faltaTxt = falta > 0.08 * x.kcalDespues
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
      const franjasHtml = reparto.franjas.map((f) => {
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
                ${f.rol !== 'normal' ? `<div class="rol">${f.rol.replace(/_/g, ' ')}</div>` : ''}
              </div>
              <div class="macros"><strong>~${f.kcalAprox}</strong> kcal</div>
            </div>
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
              <span>${(Motor.ACTIVIDADES[s.actividad] && Motor.ACTIVIDADES[s.actividad].nombre) || s.actividad} · ${s.minutos}'${notaSesionHtml({ nota: (ultimasSesiones[s.i] ?? {}).nota })}</span>
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
            Solo para anotarlo: todavía no cambia las kcal ni elige receta por esto.
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
        </div>
      `;

      return `
        <div class="dia-card ${diasConSesion.has(d.dia) ? 'con-entreno' : ''}">
          <div class="dia-cabecera">
            <div>
              <div class="dia-nombre">${diasConSesion.has(d.dia) ? `<span aria-hidden="true">${iconosDelDia(sesiones, d.dia)}</span> ` : ''}${d.dia}</div>
              <div class="dia-tipo">${d.tipo}${compPorDia.get(d.dia)?.fase ? ` · <span class="etq-fase">${Motor.ETIQUETA_FASE[compPorDia.get(d.dia).fase]}</span>` : ''}</div>
            </div>
            <div class="dia-kcal">${d.kcal}<small style="font-size:0.55em;font-weight:400"> kcal</small></div>
          </div>
          <div class="dia-macros">P ${d.proteinaG} g · G ${d.grasaG} g · H ${d.hidratoG} g</div>
          ${porqueDiaHtml(`card-dia-${d.dia}`, d.dia)}
          ${badgesHtml}
          ${moverHtml}
          <button type="button" class="dia-toggle" aria-expanded="${abierta}" aria-controls="panel-franjas-${d.dia}">${abierta ? 'Ocultar reparto por comidas ▴' : 'Ver reparto por comidas ▾'}</button>
          <div class="dia-franjas" id="panel-franjas-${d.dia}" ${abierta ? '' : 'hidden'}>${franjasHtml}</div>
          ${contextoFormHtml}
          ${horarioDiaHtml(d.dia)}
        </div>
      `;
    }).join('');

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
    vistaSemana = { repartosPorDia, recetaPorSlot, huecoPorSlot, franjas: franjasBloque7, slots: slotsSemana };
    pintarZonaSustituciones();
    pintarResumenDia();
    pintarHoy();
    pintarPerfil();
    pintarRecetas();
    pintarCalendario();
    pintarListaCompra(asignacionSemana);
    renderizarZonaDeshacer();

    // Issue #21: mensaje en español llano primero, el código técnico se queda visible pero en pequeño.
    document.getElementById('r-avisos').innerHTML = (plan.avisos.length || avisosReparto.length)
      ? [
        ...plan.avisos.map((a) => `<li>${MENSAJE_LLANO[a.codigo] ?? a.texto}<br><small style="opacity:.55">${a.codigo}: ${a.texto}</small></li>`),
        ...avisosReparto.map((a) => `<li>${escaparHtml(a)}<br><small style="opacity:.55">reparto</small></li>`),
      ].join('')
      : '<li>Ninguno.</li>';
    document.getElementById('r-notas').innerHTML = plan.notas.length
      ? plan.notas.map((n) => `<li>${n}</li>`).join('') : '<li>Ninguna.</li>';
    // Issue #119: avisos y notas van plegados (con su recuento) para no saturar la pantalla; si algún aviso exige revisar con Pablo, se abre solo.
    document.querySelector('#tarjeta-avisos summary').textContent = `Avisos del plan (${plan.avisos.length + avisosReparto.length})`;
    document.querySelector('#tarjeta-avisos details').open = plan.avisos.some((a) => a.codigo === 'revisar_con_pablo');
    document.querySelector('#tarjeta-notas summary').textContent = `Notas del plan (${plan.notas.length})`;

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
  document.getElementById('derivar-reiniciar').addEventListener('click', () => {
    document.getElementById('derivar').hidden = true;
    cargarEjemplo('general');
    const peso = document.getElementById('peso');
    if (peso) peso.focus();
  });

  function descartarPlanAnterior() {
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

  document.getElementById('form-cuestionario').addEventListener('submit', (ev) => {
    ev.preventDefault();
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
      mostrarPaso(4);
      document.getElementById('revision-confirmada').focus();
      return;
    }
    ocultarPantallas();
    const respuestas = construirRespuestas();
    const resultado = Motor.perfilDesdeCuestionario(respuestas);

    if (resultado.estado === 'derivar') {
      descartarPlanAnterior(); // la pantalla de derivación no deja ningún plan anterior visible ni exportable (#99)
      ocultarFormulario();
      document.getElementById('derivar').hidden = false;
      document.getElementById('derivar-texto').textContent = '😔 ' + resultado.mensaje;
      document.getElementById('derivar').focus();
      return;
    }
    if (resultado.estado === 'incompleto') {
      document.getElementById('incompleto').hidden = false;
      document.getElementById('incompleto').textContent = resultado.mensaje;
      mostrarPaso(1); // el dato que falta siempre está en el paso 1
      return;
    }
    if (resultado.estado === 'elegir_deporte') {
      mostrarElegirDeporte(resultado);
      mostrarPaso(3); // las sesiones están en el paso 3
      return;
    }

    let plan;
    try {
      plan = Motor.calcular(resultado.perfil);
    } catch (e) {
      document.getElementById('incompleto').hidden = false;
      document.getElementById('incompleto').textContent = e.message;
      return;
    }
    revisionPerfilPendiente = false;
    document.getElementById('revision-precargado').hidden = true;
    const nuevasFranjas = leerFranjas();
    excepcionesHorario.forEach((exc, dia) => {
      const mismas = exc.length === nuevasFranjas.length && exc.every((e) => nuevasFranjas.some((n) => n.franja === e.franja));
      if (!mismas) excepcionesHorario.delete(dia); // las comidas activas cambiaron: esa excepción ya no encaja
    });
    diasAbiertos = new Set(); // cálculo nuevo: todas las tarjetas empiezan cerradas
    guardarPerfilLocal(); // issue #20: para precargarlo la próxima vez que se abra la demo
    mostrarResultado(Motor.crearSemana(resultado.perfil), plan, respuestas, leerFranjas());
  });

  cargarPerfilGuardadoSiHay();
})();
