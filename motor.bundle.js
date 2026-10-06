var Motor = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/motor/index.ts
  var motor_exports = {};
  __export(motor_exports, {
    ACTIVIDADES: () => ACTIVIDADES,
    AVISO_DESCARGA: () => AVISO_DESCARGA,
    DIAS: () => DIAS,
    DURACION_PROPUESTA_MIN: () => DURACION_PROPUESTA_MIN,
    ELABORACIONES_EJEMPLO: () => ELABORACIONES_EJEMPLO,
    ETIQUETA_FASE: () => ETIQUETA_FASE,
    FRANJAS_CON_LIMITE_VARIEDAD: () => FRANJAS_CON_LIMITE_VARIEDAD,
    GRUPOS_VOLUMEN: () => GRUPOS_VOLUMEN,
    MENSAJE_CATEGORIA_PESO: () => MENSAJE_CATEGORIA_PESO,
    NOMBRE_TIPO_COMPETICION: () => NOMBRE_TIPO_COMPETICION,
    NOTA_PAUTA: () => NOTA_PAUTA,
    NOTA_PAUTA_ORIENTATIVA: () => NOTA_PAUTA_ORIENTATIVA,
    OPCIONES_GELES: () => OPCIONES_GELES,
    ORDEN_FRANJAS: () => ORDEN_FRANJAS,
    PAL_VIDA: () => PAL_VIDA,
    RECETAS_EJEMPLO_CSV: () => RECETAS_EJEMPLO_CSV,
    RECETAS_EJEMPLO_INGREDIENTES_CSV: () => RECETAS_EJEMPLO_INGREDIENTES_CSV,
    TEXTO_NIVEL: () => TEXTO_NIVEL,
    TIPOS_COMPETICION: () => TIPOS_COMPETICION,
    ZONAS_ICS: () => ZONAS_ICS,
    aHoraTexto: () => aHoraTexto,
    aMinutos: () => aMinutos2,
    alergiasPreferenciasDesdeTexto: () => alergiasPreferenciasDesdeTexto,
    alternarFavorita: () => alternarFavorita,
    alternativasParaSlot: () => alternativasParaSlot,
    anadirCompeticion: () => anadirCompeticion,
    aplicarCompeticion: () => aplicarCompeticion,
    aplicarSustituciones: () => aplicarSustituciones,
    asignarRecetas: () => asignarRecetas,
    avisoClasificacionSesion: () => avisoClasificacionSesion,
    avisosVolumen: () => avisosVolumen,
    bandaPesoServido: () => bandaPesoServido,
    borrarCompeticion: () => borrarCompeticion,
    buscarRecetas: () => buscarRecetas,
    calcular: () => calcular,
    calcularNiveles: () => calcularNiveles,
    cambiarHoraSesion: () => cambiarHoraSesion,
    cargaDeHidratos: () => cargaDeHidratos,
    claveSlot: () => claveSlot,
    coincideAlimento: () => coincideAlimento,
    combinarConRecetas: () => combinarConRecetas,
    competicionesDelDia: () => competicionesDelDia,
    competicionesDesdeJson: () => competicionesDesdeJson,
    componerComida: () => componerComida,
    conflictosComidaEntreno: () => conflictosComidaEntreno,
    construirEventos: () => construirEventos,
    contextoDiaPorDefecto: () => contextoDiaPorDefecto,
    copiarAlPortapapeles: () => copiarAlPortapapeles,
    crearSemana: () => crearSemana,
    definirParametrosReparto: () => definirParametrosReparto,
    definirTablaLimites: () => definirTablaLimites,
    densidadKcalG: () => densidadKcalG,
    deshacer: () => deshacer,
    diaDeLaFecha: () => diaDeLaFecha,
    editarCompeticion: () => editarCompeticion,
    elaboracionEjemplo: () => elaboracionEjemplo,
    esFechaValida: () => esFechaValida,
    esFranjaConLimiteVariedad: () => esFranjaConLimiteVariedad,
    esIngredienteProtegido: () => esIngredienteProtegido,
    esLunes: () => esLunes,
    escaparTextoIcs: () => escaparTextoIcs,
    estimarCoste: () => estimarCoste,
    etiquetasContextoDia: () => etiquetasContextoDia,
    evaluarCompatibilidad: () => evaluarCompatibilidad,
    evaluarMarcas: () => evaluarMarcas,
    explicarComida: () => explicarComida,
    explicarCompra: () => explicarCompra,
    explicarEcuacion: () => explicarEcuacion,
    explicarGrasa: () => explicarGrasa,
    explicarHidrato: () => explicarHidrato,
    explicarKcalDia: () => explicarKcalDia,
    explicarKcalMedia: () => explicarKcalMedia,
    explicarProteina: () => explicarProteina,
    explicarRacion: () => explicarRacion,
    explicarTipoDia: () => explicarTipoDia,
    factorCocido: () => factorCocido,
    favoritasValidas: () => favoritasValidas,
    fechaDelDia: () => fechaDelDia,
    fechaLocalISO: () => fechaLocalISO,
    filtrarCatalogo: () => filtrarCatalogo,
    filtrarPorDias: () => filtrarPorDias,
    formatearListaPendiente: () => formatearListaPendiente,
    generarIcs: () => generarIcs,
    generarListaCompra: () => generarListaCompra,
    grupoDeFranja: () => grupoDeFranja,
    horaDeGuardado: () => horaDeGuardado,
    ingredientesDeLaRacion: () => ingredientesDeLaRacion,
    limpiarNotaSesion: () => limpiarNotaSesion,
    lineasIcs: () => lineasIcs,
    listaManualDesdeJson: () => listaManualDesdeJson,
    lunesDeLaSemana: () => lunesDeLaSemana,
    marcarYaEnCasa: () => marcarYaEnCasa,
    moverSesion: () => moverSesion,
    noSeReescala: () => noSeReescala,
    normalizarBusqueda: () => normalizarBusqueda,
    ordenarCompeticiones: () => ordenarCompeticiones,
    parsearParametrosCSV: () => parsearParametrosCSV,
    parsearPrecios: () => parsearPrecios,
    parsearRecetas: () => parsearRecetas,
    parsearTablaLimites: () => parsearTablaLimites,
    perfilDesdeCuestionario: () => perfilDesdeCuestionario,
    pesoCocido: () => pesoCocido,
    pesoServido: () => pesoServido,
    planDiaCompeticion: () => planDiaCompeticion,
    plegarLineaIcs: () => plegarLineaIcs,
    raizAlimento: () => raizAlimento,
    recetaDeId: () => recetaDeId,
    recetasCompuestas: () => recetasCompuestas,
    reorganizarDia: () => reorganizarDia,
    repartirComidas: () => repartirComidas,
    rolIngrediente: () => rolIngrediente,
    sesionCruzaMedianoche: () => sesionCruzaMedianoche,
    sustitucionesDesdeJson: () => sustitucionesDesdeJson,
    usosVariedadSemana: () => usosVariedadSemana,
    validarCompeticion: () => validarCompeticion,
    validarHorarioDia: () => validarHorarioDia,
    validarPeticionSiOSi: () => validarPeticionSiOSi,
    validarPlato: () => validarPlato,
    validarPlatoGenerado: () => validarPlatoGenerado,
    validarReceta: () => validarReceta
  });

  // src/motor/actividades.ts
  var PAL_VIDA = {
    sedentaria: 1.35,
    // trabajo sentado, <5.000 pasos
    ligera: 1.45,
    // sentado pero se mueve algo, 5.000-7.500 pasos
    moderada: 1.55,
    // de pie buena parte del día, 7.500-10.000 pasos
    alta: 1.7,
    // trabajo físico, >10.000 pasos
    muy_alta: 1.85
    // trabajo físico muy duro toda la jornada
  };
  var a = (met, tipo, nombre) => ({ met, tipo, nombre });
  var ACTIVIDADES = {
    fuerza: a(5, "fuerza", "fuerza con cargas (sentadilla, peso muerto)"),
    fuerza_suave: a(3.5, "fuerza", "fuerza en m\xE1quinas, series de 8-15, ritmo tranquilo"),
    fuerza_intensa: a(6, "fuerza", "powerlifting o culturismo, vigoroso"),
    tonificacion: a(3.5, "fuerza", "tonificaci\xF3n guiada (v\xEDdeos, clases)"),
    calistenia: a(3.8, "fuerza", "calistenia, esfuerzo moderado"),
    calistenia_intensa: a(7.5, "fuerza", "calistenia, esfuerzo vigoroso"),
    funcional: a(5, "intermitente", "circuito o funcional, esfuerzo moderado"),
    crossfit: a(7.5, "intermitente", "circuito vigoroso (aprox. crossfit)"),
    hyrox: a(7.5, "intermitente", "circuito vigoroso (aprox. hyrox)"),
    hiit: a(7, "intermitente", "HIIT, esfuerzo moderado"),
    correr_suave: a(7.5, "resistencia", "trote a ritmo propio"),
    correr: a(9.3, "resistencia", "correr a ~10 km/h"),
    correr_rapido: a(11, "resistencia", "correr a ~11,3 km/h"),
    correr_caminar: a(6, "resistencia", "run-walk (trote y caminar)"),
    caminar: a(3.8, "suave", "caminar a 4,5-5,5 km/h"),
    caminar_rapido: a(4.8, "suave", "caminar r\xE1pido a 5,6-6,3 km/h"),
    senderismo: a(5.3, "resistencia", "senderismo por campo o cuestas, sin carga"),
    bici_paseo: a(5.8, "resistencia", "bici de paseo a ~15 km/h"),
    bici: a(8, "resistencia", "bici a 19-22 km/h, moderado"),
    bici_intensa: a(10, "resistencia", "bici a 22-26 km/h, vigoroso"),
    bici_montana: a(8.5, "resistencia", "bici de monta\xF1a"),
    spinning: a(9, "resistencia", "clase de spinning"),
    eliptica: a(5, "resistencia", "el\xEDptica, moderado"),
    remo_maquina: a(5, "resistencia", "remo erg\xF3metro, moderado"),
    natacion_suave: a(5.8, "resistencia", "nadar crol lento, recreativo"),
    natacion: a(9.8, "resistencia", "nadar crol r\xE1pido o vigoroso"),
    futbol: a(7, "intermitente", "f\xFAtbol casual"),
    futbol_partido: a(9.5, "intermitente", "f\xFAtbol de competici\xF3n"),
    futbol_sala: a(7.8, "intermitente", "f\xFAtbol sala"),
    balonmano: a(8, "intermitente", "balonmano de equipo"),
    baloncesto: a(7.5, "intermitente", "baloncesto general"),
    baloncesto_partido: a(8, "intermitente", "baloncesto, partido"),
    voleibol: a(6, "intermitente", "voleibol de competici\xF3n en pista"),
    padel: a(6, "intermitente", "p\xE1del (aprox.: no tiene c\xF3digo propio)"),
    tenis: a(6.8, "intermitente", "tenis general"),
    boxeo: a(7.8, "intermitente", "boxeo, sparring"),
    kickboxing: a(7.3, "intermitente", "kickboxing"),
    artes_marciales: a(10.3, "intermitente", "artes marciales a ritmo moderado"),
    escalada: a(8, "intermitente", "escalada"),
    rugby: a(8.3, "intermitente", "rugby de competici\xF3n"),
    zumba: a(6.5, "resistencia", "zumba en clase"),
    aerobic: a(7.3, "resistencia", "aer\xF3bic general"),
    yoga: a(2.3, "suave", "yoga general"),
    yoga_power: a(4, "suave", "power yoga"),
    pilates: a(2.8, "suave", "pilates general")
  };

  // src/motor/formulas.ts
  var imc = (peso, altura) => peso / (altura / 100) ** 2;
  var rmrMifflin = (peso, altura, edad, sexo) => 10 * peso + 6.25 * altura - 5 * edad + (sexo === "hombre" ? 5 : -161);
  var rmrTenHaaf = (peso, altura, edad, sexo) => (49.94 * peso + 2459.053 * (altura / 100) - 34.014 * edad + (sexo === "hombre" ? 799.257 : 0) + 122.502) / 4.184;
  var rmrCunningham = (masaLibreGrasa) => 500 + 22 * masaLibreGrasa;
  var grasaDeurenberg = (imc_, edad, sexo) => 1.2 * imc_ + 0.23 * edad - (sexo === "hombre" ? 10.8 : 0) - 5.4;
  var pesoIdealDevine = (altura, sexo) => (sexo === "hombre" ? 50 : 45.5) + 0.91 * (altura - 152.4);
  function pesoReferenciaProteina(peso, altura, sexo) {
    if (imc(peso, altura) < 30) return peso;
    const ideal = pesoIdealDevine(altura, sexo);
    return ideal + 0.25 * (peso - ideal);
  }
  function densidadEnergeticaPeso(masaGrasa) {
    const pMagra = 10.4 / (10.4 + Math.max(masaGrasa, 1));
    return pMagra * 1816 + (1 - pMagra) * 9440;
  }
  function kcalSesionNeta(actividad, minutos, peso) {
    const act = ACTIVIDADES[actividad];
    if (!act) throw new Error(`actividad desconocida: ${actividad}`);
    return Math.max(act.met - 1, 0) * peso * minutos / 60;
  }

  // src/motor/calcular.ts
  var DIAS = ["L", "M", "X", "J", "V", "S", "D"];
  var RITMO_POR_DEFECTO = { magro: 0.5, normal: 0.6, obesidad: 0.75 };
  var TOPE_DEFICIT = { magro: 0.25, normal: 0.25, obesidad: 0.3 };
  var RECOMPOSICION_DEFICIT = 0.05;
  var SUPERAVIT_POR_DEFECTO = 7.5;
  var COMPENSACION_ENTRENO = 0.28;
  var SUELO_PROTEINA_G_KG = 1.6;
  var OSCILACION_CORDURA = 300;
  var OSCILACION_MAX_POR_DEFECTO = 500;
  var SUELO_KCAL = { hombre: 1500, mujer: 1200 };
  function redondear(x, decimales = 0) {
    const f2 = 10 ** decimales;
    const v = x * f2;
    const r = Math.round(v);
    return (Math.abs(v % 1) === 0.5 && r % 2 !== 0 ? r - 1 : r) / f2;
  }
  var suma = (xs) => xs.reduce((s, x) => s + x, 0);
  function comprimirOscilacion(valores, max) {
    const media = suma(valores) / valores.length;
    const rango = Math.max(...valores) - Math.min(...valores);
    if (rango <= max || rango === 0) return valores;
    return valores.map((v) => media + max / rango * (v - media));
  }
  function limitarOscilacion(valores, max) {
    const media = suma(valores) / valores.length;
    return valores.map((v) => media + Math.max(-max, Math.min(max, v - media)));
  }
  function tipoDia(minutosCarga, tieneFuerza) {
    if (minutosCarga >= 180) return { tipo: "carga_alta", rango: [6, 10] };
    if (minutosCarga >= 60) return { tipo: "duro", rango: [5, 7] };
    if (minutosCarga > 0) return { tipo: "suave", rango: [3, 5] };
    if (tieneFuerza) return { tipo: "fuerza", rango: [3, 5] };
    return { tipo: "descanso", rango: [3, 5] };
  }
  function calcular(p) {
    const objetivo = p.objetivo ?? "perder_grasa";
    const sesiones = p.sesiones ?? [];
    const avisos = [];
    const notas = [];
    const aviso = (codigo, texto) => {
      avisos.push({ codigo, texto });
    };
    if (p.grasa !== void 0 && !(p.grasa >= 3 && p.grasa <= 70)) throw new Error("grasa es el % graso (3-70)");
    for (const s of sesiones) {
      if (!ACTIVIDADES[s.actividad]) throw new Error(`actividad desconocida: ${s.actividad}`);
      if (!(s.minutos > 0)) throw new Error(`minutos no v\xE1lidos: ${s.dia} ${s.actividad}`);
    }
    const imc_ = imc(p.peso, p.altura);
    const deportista = sesiones.filter((s) => ACTIVIDADES[s.actividad].tipo !== "suave").length >= 3;
    const categoria = imc_ >= 30 ? "obesidad" : p.grasa !== void 0 && p.grasa < (p.sexo === "hombre" ? 15 : 23) ? "magro" : "normal";
    if (p.edad < 18) aviso("menor", "Menor de 18: estas ecuaciones son de adultos. Pasar por Pablo.");
    const mifflin = rmrMifflin(p.peso, p.altura, p.edad, p.sexo);
    const tenHaaf = rmrTenHaaf(p.peso, p.altura, p.edad, p.sexo);
    const cunningham = p.grasa !== void 0 ? rmrCunningham(p.peso * (1 - p.grasa / 100)) : void 0;
    let ecuacion = "mifflin";
    let rmr = mifflin;
    if (deportista && imc_ < 30 && p.edad < 50) {
      if (cunningham !== void 0 && cunningham < tenHaaf) {
        ecuacion = "cunningham";
        rmr = cunningham;
      } else {
        ecuacion = "ten_haaf";
        rmr = tenHaaf;
      }
    }
    if (!p.vida) aviso("vida_supuesta", "Sin actividad diaria: se supone sedentaria. Si trabaja de pie o camina mucho, gasta m\xE1s.");
    const base = rmr * PAL_VIDA[p.vida ?? "sedentaria"];
    const porDia = DIAS.map((dia) => {
      const hoy = sesiones.filter((s) => s.dia === dia);
      const kcalEntreno = suma(hoy.map((s) => kcalSesionNeta(s.actividad, s.minutos, p.peso)));
      const deCarga = hoy.filter((s) => ["intermitente", "resistencia"].includes(ACTIVIDADES[s.actividad].tipo));
      const minutosCarga = suma(deCarga.map((s) => s.minutos));
      const tieneFuerza = hoy.some((s) => ACTIVIDADES[s.actividad].tipo === "fuerza");
      return { dia, kcalEntreno, minutosCarga, tieneFuerza, gasto: base + kcalEntreno * (1 - COMPENSACION_ENTRENO) };
    });
    const gastoMedio = suma(porDia.map((d) => d.gasto)) / 7;
    const grasaPct = p.grasa ?? grasaDeurenberg(imc_, p.edad, p.sexo);
    const rho = densidadEnergeticaPeso(p.peso * grasaPct / 100);
    let ajuste = 0;
    const trazaAjuste = { objetivo, kcal: 0, grasaPct: redondear(grasaPct, 1), densidadKcalKg: redondear(rho) };
    if (objetivo === "perder_grasa") {
      const ritmo = p.ritmo ?? RITMO_POR_DEFECTO[categoria];
      const deficitRitmo = ritmo / 100 * p.peso * rho / 7;
      const deficit = Math.min(deficitRitmo, TOPE_DEFICIT[categoria] * gastoMedio);
      if (deficit < deficitRitmo) {
        notas.push(`El ritmo de ${ritmo} %/semana ped\xEDa ${redondear(deficitRitmo)} kcal de d\xE9ficit; se limita al ${TOPE_DEFICIT[categoria] * 100} % del gasto.`);
      }
      if (ritmo > 1) aviso("ritmo_alto", "M\xE1s del 1 % del peso por semana: por encima de lo recomendado sin supervisi\xF3n.");
      if (deportista && categoria !== "obesidad" && deficit > 500) {
        aviso("deficit_alto", `D\xE9ficit de ${redondear(deficit)} kcal/d\xEDa entrenando: con m\xE1s de ~500 se pierde masa magra (Murphy y Koehler 2022). Valorar un ritmo menor.`);
      }
      ajuste = -deficit;
      Object.assign(trazaAjuste, { ritmoPct: ritmo, deficitRitmo: redondear(deficitRitmo), topeFraccion: TOPE_DEFICIT[categoria], topeAplicado: deficit < deficitRitmo });
    } else if (objetivo === "recomposicion") {
      ajuste = -RECOMPOSICION_DEFICIT * gastoMedio;
      trazaAjuste.porcentaje = RECOMPOSICION_DEFICIT * 100;
    } else if (objetivo === "ganar_musculo") {
      const superavit = p.superavit ?? SUPERAVIT_POR_DEFECTO;
      if (superavit > 15) aviso("superavit_alto", "Super\xE1vit de m\xE1s del 15 %: se gana sobre todo grasa (Helms 2023).");
      ajuste = superavit / 100 * gastoMedio;
      trazaAjuste.porcentaje = superavit;
    }
    trazaAjuste.kcal = redondear(ajuste);
    const crudo = porDia.map((d) => d.gasto + ajuste);
    const max = p.maxOscilacion ?? null;
    const conOscilacionControlada = sesiones.length === 0 ? crudo : max !== null ? comprimirOscilacion(crudo, max) : limitarOscilacion(crudo, OSCILACION_MAX_POR_DEFECTO);
    const kcalDias = conOscilacionControlada.map((k) => redondear(k / 10) * 10);
    if (max === null && Math.max(...kcalDias) - Math.min(...kcalDias) > OSCILACION_CORDURA) {
      notas.push("M\xE1s de 300 kcal entre el d\xEDa m\xE1s alto y el m\xE1s bajo: lo marca el entreno de cada d\xEDa (D10).");
    }
    const suelo = SUELO_KCAL[p.sexo];
    const limitadoPor = conOscilacionControlada.map((v, i) => Math.abs(v - crudo[i]) > 0.5 ? "oscilacion" : void 0);
    kcalDias.forEach((k, i) => {
      if (k < suelo) {
        limitadoPor[i] = "suelo";
        kcalDias[i] = suelo;
        aviso("revisar_con_pablo", `${DIAS[i]}: ${k} kcal calculadas, por debajo del suelo seguro (${suelo}). Se prescribe el suelo; revisar con Pablo antes de seguir.`);
      }
    });
    const kcalMedia = suma(kcalDias) / 7;
    const pesoRef = pesoReferenciaProteina(p.peso, p.altura, p.sexo);
    const enDeficit = objetivo === "perder_grasa" || objetivo === "recomposicion";
    const protGKg = Math.max(
      enDeficit && deportista ? categoria === "magro" ? 2.2 : 2 : deportista ? 1.8 : 1.6,
      SUELO_PROTEINA_G_KG
    );
    const protG = protGKg * pesoRef;
    const fraccionGrasa = deportista ? 0.25 : 0.3;
    const grasaPorKcal = fraccionGrasa * kcalMedia / 9;
    const grasaMinima = 0.5 * pesoRef;
    const grasaG = Math.max(grasaPorKcal, grasaMinima);
    const mlg = p.grasa !== void 0 ? p.peso * (1 - p.grasa / 100) : void 0;
    const dias = porDia.map((d, i) => {
      const kcal = kcalDias[i];
      const hidratoG = (kcal - 4 * protG - 9 * grasaG) / 4;
      if (hidratoG < 0) throw new Error(`${d.dia}: ${kcal} kcal no llegan ni para la prote\xEDna y la grasa m\xEDnimas.`);
      if (d.minutosCarga >= 60 && hidratoG / p.peso < 3) {
        aviso("hidrato_bajo", `${d.dia}: ${redondear(hidratoG / p.peso, 1)} g/kg de hidrato con ${d.minutosCarga}' de entreno exigente: poco para rendir y recuperar (ACSM 2016).`);
      }
      if (grasaG * 9 / kcal < 0.2) aviso("grasa_baja", `${d.dia}: grasa por debajo del 20 % de las kcal (ACSM 2016).`);
      const { tipo, rango } = tipoDia(d.minutosCarga, d.tieneFuerza);
      return {
        dia: d.dia,
        tipo,
        gasto: redondear(d.gasto),
        kcalEntreno: redondear(d.kcalEntreno),
        kcal,
        minutosCarga: d.minutosCarga,
        tieneFuerza: d.tieneFuerza,
        kcalSinLimites: redondear(crudo[i]),
        ...limitadoPor[i] ? { limitadoPor: limitadoPor[i] } : {},
        proteinaG: redondear(protG),
        grasaG: redondear(grasaG),
        hidratoG: redondear(hidratoG),
        hidratoGKg: redondear(hidratoG / p.peso, 1),
        hidratoRecomendadoGKg: rango,
        ...mlg ? { disponibilidad: redondear((kcal - d.kcalEntreno) / mlg, 1) } : {}
      };
    });
    if (mlg) {
      const minima = Math.min(...dias.map((d) => d.disponibilidad ?? Infinity));
      if (minima < 30) {
        aviso("disponibilidad_baja", `Disponibilidad energ\xE9tica m\xEDnima de ${minima} kcal/kg de masa libre de grasa (<30): riesgo de REDs (IOC 2023). Vigilar cansancio, rendimiento, sue\xF1o y regla.`);
      } else if (objetivo !== "perder_grasa" && minima < 45) {
        const para = { mantener: "mantener el peso o mejorar el rendimiento", ganar_musculo: "ganar m\xFAsculo", recomposicion: "la recomposici\xF3n", perder_grasa: "perder grasa" }[objetivo];
        notas.push(`Disponibilidad energ\xE9tica m\xEDnima de ${minima} (<45): reducida para ${para} (IOC 2023).`);
      }
    }
    if (kcalMedia < (p.sexo === "hombre" ? 1500 : 1200)) {
      aviso("kcal_bajas", `Media de ${redondear(kcalMedia)} kcal: por debajo de lo que pautan las gu\xEDas sin supervisi\xF3n (AHA/ACC/TOS 2013).`);
    }
    if (categoria === "obesidad") notas.push(`IMC ${redondear(imc_, 1)}: prote\xEDna sobre el peso ajustado (${redondear(pesoRef, 1)} kg), regla 16bis.`);
    return {
      imc: redondear(imc_, 1),
      categoria,
      deportista,
      basal: {
        ecuacion,
        kcal: redondear(rmr),
        valores: { mifflin: redondear(mifflin), ten_haaf: redondear(tenHaaf), ...cunningham !== void 0 ? { cunningham: redondear(cunningham) } : {} }
      },
      gastoMedio: redondear(gastoMedio),
      kcalMedia: redondear(kcalMedia),
      proteina: { gKg: protGKg, pesoReferencia: redondear(pesoRef, 1), gDia: redondear(protG), porComidaG: [redondear(0.25 * pesoRef), redondear(0.4 * pesoRef)] },
      dias,
      avisos,
      notas,
      detalle: {
        vida: p.vida ?? "sedentaria",
        vidaSupuesta: !p.vida,
        pal: PAL_VIDA[p.vida ?? "sedentaria"],
        gastoBase: redondear(base),
        compensacionEntreno: COMPENSACION_ENTRENO,
        basalMotivo: {
          deportista,
          sesionesNoSuaves: sesiones.filter((s) => ACTIVIDADES[s.actividad].tipo !== "suave").length,
          edad: p.edad,
          imc: redondear(imc_, 1),
          conGrasaMedida: p.grasa !== void 0
        },
        ajuste: trazaAjuste,
        oscilacion: sesiones.length === 0 ? { modo: "sin_sesiones" } : max !== null ? { modo: "compresion", maxKcal: max } : { modo: "tope", maxKcal: OSCILACION_MAX_POR_DEFECTO },
        suelo,
        grasa: { fraccion: fraccionGrasa, porKcalG: redondear(grasaPorKcal), minimoG: redondear(grasaMinima), aplicado: grasaPorKcal >= grasaMinima ? "kcal" : "minimo" },
        proteina: {
          rama: enDeficit && deportista ? categoria === "magro" ? "deficit_magro" : "deficit_deportista" : deportista ? "deportista" : "general",
          suelo: SUELO_PROTEINA_G_KG
        }
      }
    };
  }

  // src/motor/perfil-cuestionario.ts
  var PALABRAS_DERIVAR = [
    "fodmap",
    "sii",
    "diabetes",
    "embarazo",
    "embarazada",
    "tca",
    "trastorno de la conducta alimentaria",
    "trastorno alimentario",
    "condicion clinica"
  ];
  var MAPA_DEPORTES = {
    "correr suave": "correr_suave",
    correr: "correr",
    "correr rapido": "correr_rapido",
    "caminar rapido": "caminar_rapido",
    bici: "bici",
    natacion: "natacion",
    fuerza: "fuerza",
    "fuerza en maquinas": "fuerza_suave",
    hyrox: "hyrox",
    crossfit: "crossfit",
    padel: "padel",
    futbol: "futbol"
  };
  function normalizarTexto(s) {
    return Array.from(s.normalize("NFD")).filter((c) => c.codePointAt(0) < 768 || c.codePointAt(0) > 879).join("").toLowerCase().trim();
  }
  function contiene(textos, clave) {
    return textos.some((t) => normalizarTexto(t).includes(clave));
  }
  function objetivoDesde(texto) {
    const t = normalizarTexto(texto ?? "");
    if (t.includes("rendimiento") || t.includes("mantener")) return "mantener";
    if (t.includes("recomposicion")) return "recomposicion";
    if (t.includes("ganar musculo") || t.includes("volumen")) return "ganar_musculo";
    return "perder_grasa";
  }
  function vidaDesde(v) {
    if (!v) return void 0;
    if (v.pasos === "<5000") return "sedentaria";
    if (v.pasos === "5000-7500") return "ligera";
    if (v.pasos === "7500-10000") return "moderada";
    if (v.pasos === ">10000") return "alta";
    if (v.trabajo === "sentado") return "sedentaria";
    if (v.trabajo === "de_pie") return "moderada";
    if (v.trabajo === "fisico") return "alta";
    if (v.trabajo === "fisico_intenso") return "muy_alta";
    return void 0;
  }
  function resolverActividad(s) {
    if (s.actividad) {
      return ACTIVIDADES[s.actividad] ? { clave: s.actividad } : { opciones: Object.keys(ACTIVIDADES) };
    }
    const clave = MAPA_DEPORTES[normalizarTexto(s.deporte)];
    return clave ? { clave } : { opciones: Object.keys(ACTIVIDADES) };
  }
  function perfilDesdeCuestionario(r) {
    if (PALABRAS_DERIVAR.some((p) => contiene(r.salud ?? [], p))) {
      return {
        estado: "derivar",
        mensaje: "Esto lo tiene que valorar Pablo en consulta; la app no genera protocolo cl\xEDnico autom\xE1tico."
      };
    }
    if (r.peso == null) return { estado: "incompleto", falta: "peso", mensaje: "Falta el peso." };
    if (r.altura == null) return { estado: "incompleto", falta: "altura", mensaje: "Falta la talla." };
    if (r.edad == null) return { estado: "incompleto", falta: "edad", mensaje: "Falta la edad." };
    if (r.sexo == null) return { estado: "incompleto", falta: "sexo", mensaje: "Falta el sexo." };
    const sesiones = [];
    for (const s of r.sesiones ?? []) {
      const resuelto = resolverActividad(s);
      if ("opciones" in resuelto) {
        return {
          estado: "elegir_deporte",
          deporte: s.deporte,
          opciones: resuelto.opciones,
          mensaje: `"${s.deporte}" no est\xE1 en la lista de deportes. Elige uno de la lista.`
        };
      }
      sesiones.push({ dia: s.dia, actividad: resuelto.clave, minutos: s.minutos });
    }
    const perfil = {
      peso: r.peso,
      altura: r.altura,
      edad: r.edad,
      sexo: r.sexo,
      objetivo: objetivoDesde(r.objetivo),
      grasa: r.grasa,
      vida: vidaDesde(r.vida),
      sesiones
    };
    return { estado: "ok", perfil };
  }

  // src/motor/reparto-comidas.ts
  var PRINCIPALES = ["desayuno", "comida", "cena"];
  var SECUNDARIAS = ["media_manana", "merienda"];
  function hhmm(h) {
    const total = Math.round(h * 60);
    return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
  }
  var NOMBRE_FRANJA = { desayuno: "El desayuno", media_manana: "La media ma\xF1ana", comida: "La comida", merienda: "La merienda", cena: "La cena" };
  function parsearParametrosCSV(texto) {
    const lineas = texto.split(/\r?\n/).filter((l) => l.trim() !== "");
    const p = {
      pesoBase: {},
      factor: { PRE: 1.6, POST: 1.4, toma_ligera_PRE: 1.5, PRE_POST_combinado: 2.2 },
      ventana: { PRE_desde_h_antes: 4, PRE_hasta_h_antes: 1.5, POST_hasta_h_despues: 2, ligera_desde_h_antes: 1.5, ligera_hasta_h_antes: 0.5 },
      tope: { proteina_secundaria_g: 25, grasa_pre_carga_g: 15 },
      proteinaPrincipal: { g_kg_min: 0.25, g_kg_max: 0.4 },
      bordePrimeraHora: { sesion_antes_de_h: 9, toma_pre_min_antes: 30, toma_pre_max_antes: 60, hidrato_rapido_g_kg_min: 0.5, hidrato_rapido_g_kg_max: 1 }
    };
    for (const linea of lineas.slice(1)) {
      const [grupo, clave, franja, valorRaw] = linea.split(",");
      const valor = Number(valorRaw);
      if (!Number.isFinite(valor)) continue;
      if (grupo === "peso_base") p.pesoBase[franja] = valor;
      else if (grupo === "factor_contexto") p.factor[clave] = valor;
      else if (grupo === "ventana_horas") p.ventana[clave] = valor;
      else if (grupo === "tope") p.tope[clave] = valor;
      else if (grupo === "proteina_principal") p.proteinaPrincipal[clave] = valor;
      else if (grupo === "borde_primera_hora") p.bordePrimeraHora[clave] = valor;
    }
    return p;
  }
  var parametrosInyectados;
  function definirParametrosReparto(p) {
    parametrosInyectados = p;
  }
  function cargarParametros() {
    if (!parametrosInyectados) {
      throw new Error(
        "Par\xE1metros de reparto no cargados: llama a definirParametrosReparto(parsearParametrosCSV(texto)) antes de repartirComidas() (en Node, importa reparto-comidas-node.ts)."
      );
    }
    return parametrosInyectados;
  }
  function calcularRoles(franjas, sesiones, v) {
    const roles = /* @__PURE__ */ new Map();
    franjas.forEach((f2) => roles.set(f2.franja, /* @__PURE__ */ new Set()));
    for (const s of sesiones) {
      let mejorPre;
      let gapPre = Infinity;
      let mejorPost;
      let gapPost = Infinity;
      let mejorLigera;
      let gapLigera = Infinity;
      for (const f2 of franjas) {
        const antes = s.inicio - f2.hora;
        const despues = f2.hora - s.fin;
        if (PRINCIPALES.includes(f2.franja)) {
          if (antes >= v.PRE_hasta_h_antes && antes <= v.PRE_desde_h_antes && antes < gapPre) {
            mejorPre = f2.franja;
            gapPre = antes;
          }
          if (despues >= 0 && despues < gapPost) {
            mejorPost = f2.franja;
            gapPost = despues;
          }
        } else if (SECUNDARIAS.includes(f2.franja)) {
          if (antes >= v.ligera_hasta_h_antes && antes <= v.ligera_desde_h_antes && antes < gapLigera) {
            mejorLigera = f2.franja;
            gapLigera = antes;
          }
        }
      }
      if (mejorPre) roles.get(mejorPre).add("PRE");
      if (mejorPost) roles.get(mejorPost).add("POST");
      if (mejorLigera) roles.get(mejorLigera).add("toma_ligera_PRE");
    }
    return roles;
  }
  function rolYFactor(marcas, f2) {
    if (marcas.has("PRE") && marcas.has("POST")) return { rol: "PRE_POST_combinado", factor: f2.PRE_POST_combinado };
    if (marcas.has("PRE")) return { rol: "PRE", factor: f2.PRE };
    if (marcas.has("POST")) return { rol: "POST", factor: f2.POST };
    if (marcas.has("toma_ligera_PRE")) return { rol: "toma_ligera_PRE", factor: f2.toma_ligera_PRE };
    return { rol: "normal", factor: 1 };
  }
  function repartirComidas(e) {
    if (!e.franjas.length) throw new Error("Hace falta al menos una comida activa para repartir el d\xEDa.");
    const p = cargarParametros();
    const avisos = [];
    const franjas = e.franjas.map((f2) => f2.franja);
    const principales = franjas.filter((f2) => PRINCIPALES.includes(f2));
    const secundarias = franjas.filter((f2) => SECUNDARIAS.includes(f2));
    const sesionesCarga = e.tipoDia === "descanso" ? [] : e.sesiones ?? [];
    const primeraHora = sesionesCarga.find((s) => {
      if (s.inicio >= p.bordePrimeraHora.sesion_antes_de_h) return false;
      return !e.franjas.some((f2) => PRINCIPALES.includes(f2.franja) && s.inicio - f2.hora >= p.ventana.PRE_hasta_h_antes && s.inicio - f2.hora <= p.ventana.PRE_desde_h_antes);
    });
    const horaDesayuno = e.franjas.find((f2) => f2.franja === "desayuno")?.hora;
    const desayunoForzadoPost = primeraHora !== void 0 && horaDesayuno !== void 0 && horaDesayuno >= primeraHora.fin;
    if (primeraHora) {
      const peso = e.peso ?? e.pesoRef;
      const gMin = redondear(p.bordePrimeraHora.hidrato_rapido_g_kg_min * peso, 1);
      const gMax = redondear(p.bordePrimeraHora.hidrato_rapido_g_kg_max * peso, 1);
      avisos.push(
        `Sesi\xF3n antes de las ${p.bordePrimeraHora.sesion_antes_de_h}:00 sin comida principal cerca: se sugiere una toma ligera ${p.bordePrimeraHora.toma_pre_min_antes}-${p.bordePrimeraHora.toma_pre_max_antes} min antes (${gMin}-${gMax} g de hidrato r\xE1pido). Es solo una sugerencia: no se ha reservado ni descontado nada del reparto del d\xEDa, las comidas ya suman el total del d\xEDa.` + (desayunoForzadoPost ? " El desayuno se trata como POST porque empieza despu\xE9s de acabar el entreno." : "")
      );
    }
    const pPrincipalCap = p.proteinaPrincipal.g_kg_max * e.pesoRef;
    const pPrincipalMinAviso = p.proteinaPrincipal.g_kg_min * e.pesoRef;
    let pPrincipal = 0;
    let pSecundaria = 0;
    let topeSecundariaAplicado = false;
    if (secundarias.length > 0) {
      pPrincipal = principales.length ? Math.min(e.proteina / principales.length, pPrincipalCap) : 0;
      const restante = e.proteina - pPrincipal * principales.length;
      pSecundaria = restante / secundarias.length;
      if (pSecundaria > p.tope.proteina_secundaria_g) {
        const exceso = (pSecundaria - p.tope.proteina_secundaria_g) * secundarias.length;
        topeSecundariaAplicado = true;
        pSecundaria = p.tope.proteina_secundaria_g;
        if (principales.length) pPrincipal += exceso / principales.length;
      }
    } else if (principales.length) {
      pPrincipal = e.proteina / principales.length;
      if (pPrincipal > pPrincipalCap) {
        avisos.push(
          `Sin media ma\xF1ana ni merienda, cada principal lleva ${redondear(pPrincipal, 1)} g de prote\xEDna (pasa de ${p.proteinaPrincipal.g_kg_max} g/kg = ${redondear(pPrincipalCap, 1)} g). Se puede sugerir una toma proteica opcional; nunca se impone.`
        );
      }
    }
    if (principales.length && pPrincipal < pPrincipalMinAviso) {
      avisos.push(
        `Prote\xEDna por principal (${redondear(pPrincipal, 1)} g) por debajo de ${p.proteinaPrincipal.g_kg_min} g/kg de pesoRef (${redondear(pPrincipalMinAviso, 1)} g): caso raro, revisar con Pablo.`
      );
    }
    const roles = calcularRoles(e.franjas, sesionesCarga, p.ventana);
    const rolYFactorPorFranja = /* @__PURE__ */ new Map();
    for (const f2 of e.franjas) {
      const marcas = roles.get(f2.franja);
      const { rol, factor } = rolYFactor(marcas, p.factor);
      rolYFactorPorFranja.set(f2.franja, desayunoForzadoPost && f2.franja === "desayuno" ? { rol: "POST", factor: p.factor.POST } : { rol, factor });
    }
    const pesoBase = (f2) => p.pesoBase[f2] ?? 0;
    const sumaPesoContextual = franjas.reduce((s, f2) => s + pesoBase(f2) * rolYFactorPorFranja.get(f2).factor, 0);
    const sumaPesoBase = franjas.reduce((s, f2) => s + pesoBase(f2), 0);
    const grasaPorFranja = /* @__PURE__ */ new Map();
    for (const f2 of franjas) grasaPorFranja.set(f2, sumaPesoBase > 0 ? e.grasa * pesoBase(f2) / sumaPesoBase : 0);
    const grasaTopada = /* @__PURE__ */ new Set();
    const grasaRecibida = /* @__PURE__ */ new Map();
    for (const f2 of franjas) {
      const hora = e.franjas.find((x) => x.franja === f2).hora;
      const enVentanaPreCarga = sesionesCarga.some((s) => {
        const a2 = s.inicio - hora;
        return a2 > 0 && a2 <= 2;
      });
      const g = grasaPorFranja.get(f2);
      if (enVentanaPreCarga && g > p.tope.grasa_pre_carga_g) {
        const exceso = g - p.tope.grasa_pre_carga_g;
        grasaPorFranja.set(f2, p.tope.grasa_pre_carga_g);
        grasaTopada.add(f2);
        const resto = franjas.filter((x) => x !== f2 && !rolYFactorPorFranja.get(x).rol.startsWith("PRE"));
        const destino = resto.length ? resto : franjas.filter((x) => x !== f2);
        if (destino.length) {
          destino.forEach((x) => {
            grasaPorFranja.set(x, grasaPorFranja.get(x) + exceso / destino.length);
            grasaRecibida.set(x, (grasaRecibida.get(x) ?? 0) + exceso / destino.length);
          });
        }
      }
    }
    const salida = franjas.map((f2) => {
      const { rol, factor } = rolYFactorPorFranja.get(f2);
      const proteina = PRINCIPALES.includes(f2) ? pPrincipal : pSecundaria;
      const hidrato = sumaPesoContextual > 0 ? redondear(e.hidrato * pesoBase(f2) * factor / sumaPesoContextual) : 0;
      const grasa = redondear(grasaPorFranja.get(f2), 1);
      return {
        franja: f2,
        rol,
        proteina: redondear(proteina),
        hidrato,
        grasa,
        kcalAprox: redondear(4 * proteina + 4 * hidrato + 9 * grasa),
        detalle: {
          pesoBase: pesoBase(f2),
          factor,
          sumaPesoBase,
          sumaPesoContextual,
          proteinaTipo: PRINCIPALES.includes(f2) ? "principal" : "secundaria",
          proteinaTopeSecundaria: topeSecundariaAplicado,
          grasaTopeAplicado: grasaTopada.has(f2),
          grasaExcesoRecibido: redondear(grasaRecibida.get(f2) ?? 0, 1)
        }
      };
    });
    const conflictos = [];
    for (const f2 of e.franjas) {
      for (const ses of e.sesionesTodas ?? sesionesCarga) {
        if (f2.hora >= ses.inicio && f2.hora < ses.fin) conflictos.push({ franja: f2.franja, hora: f2.hora, inicio: ses.inicio, fin: ses.fin });
      }
    }
    for (const c of conflictos) {
      avisos.push(
        `${NOMBRE_FRANJA[c.franja] ?? c.franja} (${hhmm(c.hora)}) cae dentro de una sesi\xF3n de ${hhmm(c.inicio)} a ${hhmm(c.fin)}: revisa el horario. No se ha movido nada ni se da este horario por viable.`
      );
    }
    return { franjas: salida, avisos, conflictos };
  }

  // src/motor/validador-plato.ts
  var ALIAS_EXTRA = {
    "ternera / cerdo": ["hamburguesa", "solomillo", "carne picada"],
    "pescado blanco": ["merluza", "bacalao", "lenguado", "rape", "dorada", "lubina"],
    "pescado azul": ["salmon", "sardina", "caballa"],
    "cereal crudo": ["pasta"]
  };
  var VERDURA_EXTRA = [
    "judia verde",
    "judia",
    "alcachofa",
    "brocoli",
    "espinaca",
    "acelga",
    "coliflor",
    "pimiento",
    "berenjena",
    "champinon",
    "seta",
    "esparrago",
    "zanahoria",
    "remolacha",
    "apio",
    "endibia",
    "escarola",
    "canonigo",
    "rucula",
    "repollo",
    "col",
    "calabaza",
    "nabo",
    "calabacin"
  ];
  var LIQUIDO_KEYWORDS = ["gazpacho", "salmorejo", "crema", "pure"];
  var CATEGORIAS_GUARNICION = [
    "verdura",
    "patata",
    "boniato",
    "pan",
    "cereal crudo",
    "pasta fresca",
    "noqui",
    "legumbre",
    "hortaliza de fruto",
    "hoja de ensalada",
    "cebolla"
  ];
  var MARCA_DIACRITICA_MIN = 768;
  var MARCA_DIACRITICA_MAX = 879;
  function normalizar(s) {
    return Array.from(s.normalize("NFD")).filter((c) => c.codePointAt(0) < MARCA_DIACRITICA_MIN || c.codePointAt(0) > MARCA_DIACRITICA_MAX).join("").toLowerCase();
  }
  function stem(palabra) {
    if (palabra.endsWith("es") && palabra.length > 4) return palabra.slice(0, -2);
    if (palabra.endsWith("s") && palabra.length > 3) return palabra.slice(0, -1);
    return palabra;
  }
  function tokens(texto) {
    return normalizar(texto).split(/[^a-z0-9]+/).filter(Boolean).map(stem);
  }
  function parseCsvLine(linea) {
    const campos = [];
    let actual = "";
    let entreComillas = false;
    for (let i = 0; i < linea.length; i++) {
      const c = linea[i];
      if (entreComillas) {
        if (c === '"' && linea[i + 1] === '"') {
          actual += '"';
          i++;
        } else if (c === '"') {
          entreComillas = false;
        } else {
          actual += c;
        }
      } else if (c === '"') {
        entreComillas = true;
      } else if (c === ",") {
        campos.push(actual);
        actual = "";
      } else {
        actual += c;
      }
    }
    campos.push(actual);
    return campos;
  }
  function parseNum(s) {
    if (!s) return void 0;
    const n = Number(s.trim().replace(",", "."));
    return Number.isFinite(n) && s.trim() !== "" ? n : void 0;
  }
  function parsearTablaLimites(texto) {
    const lineas = texto.split(/\r?\n/).filter((l) => l.trim() !== "");
    const alimentos = [];
    let pesoPlatoRecomendado = 700;
    let pesoPlatoTope = 900;
    let guarnicionMinima = 40;
    let protegidos = ["fruta", "yogur", "cafe", "condimentos", "ajo"];
    let seccionActual = "A";
    for (const linea of lineas) {
      const cols = parseCsvLine(linea);
      const nombreRaw = (cols[0] ?? "").trim();
      if (!nombreRaw) continue;
      const cabeceraSeccion = nombreRaw.match(/^([ABC])\.\s/);
      if (cabeceraSeccion) {
        seccionActual = cabeceraSeccion[1];
        continue;
      }
      if (nombreRaw === "Alimento / familia") continue;
      const minimo = parseNum(cols[1]);
      const recomendado = parseNum(cols[2]);
      const tope = parseNum(cols[3]);
      const nota = cols[4] ?? "";
      if (nombreRaw === "Peso total del plato") {
        if (recomendado != null) pesoPlatoRecomendado = recomendado;
        if (tope != null) pesoPlatoTope = tope;
        continue;
      }
      if (nombreRaw === "Guarnici\xF3n obligatoria") {
        const m = nota.match(/(\d+)\s*g/);
        if (m) guarnicionMinima = Number(m[1]);
        continue;
      }
      if (nombreRaw === "Protegidos que nunca se reescalan") {
        const antesDeDosPuntos = nota.split(":")[0] ?? "";
        protegidos = antesDeDosPuntos.split(/,| y /i).map((t) => normalizar(t).trim()).filter(Boolean);
        continue;
      }
      if (minimo == null && recomendado == null && tope == null) continue;
      const sinParentesis = nombreRaw.replace(/\([^)]*\)/, "").trim();
      const nombresBase = sinParentesis.split("/").map((n) => n.replace(/\*/g, "").trim()).filter(Boolean);
      const parentesis = nombreRaw.match(/\(([^)]*)\)/)?.[1] ?? "";
      const esNotaDeRegla = /cada una|por separado/i.test(parentesis);
      const ejemplos = parentesis && !esNotaDeRegla ? parentesis.replace(/\.\.\.$/, "").split(",").map((e) => e.trim()).filter(Boolean) : [];
      const keywords = [...nombresBase.flatMap((n) => n.split(/ y /)), ...ejemplos].map((n) => tokens(n)).filter((t) => t.length > 0);
      const categoria = nombresBase[0] ?? nombreRaw;
      const alias = ALIAS_EXTRA[normalizar(nombresBase.join(" / "))];
      if (alias) keywords.push(...alias.map((a2) => tokens(a2)));
      alimentos.push({
        categoria,
        keywords,
        minimo,
        recomendado,
        tope,
        esBaseDeGuarnicion: CATEGORIAS_GUARNICION.some((c) => normalizar(categoria).includes(c)),
        esRacionRealista: seccionActual === "B"
      });
    }
    const verdura = alimentos.find((a2) => normalizar(a2.categoria) === "verdura");
    if (verdura) verdura.keywords.push(...VERDURA_EXTRA.map((v) => tokens(v)));
    return { alimentos, pesoPlatoRecomendado, pesoPlatoTope, guarnicionMinima, protegidos };
  }
  var tablaInyectada;
  function definirTablaLimites(t) {
    tablaInyectada = t;
  }
  function cargarTabla() {
    if (!tablaInyectada) {
      throw new Error(
        "Tabla de l\xEDmites no cargada: llama a definirTablaLimites(parsearTablaLimites(texto)) antes de validarPlato() (en Node, importa validador-plato-node.ts)."
      );
    }
    return tablaInyectada;
  }
  function coincide(nombreIngrediente, keywords) {
    const tokensIngrediente = new Set(tokens(nombreIngrediente));
    return keywords.some((kw) => kw.every((t) => tokensIngrediente.has(t)));
  }
  function buscarLimite(tabla, nombre) {
    return tabla.alimentos.find((a2) => coincide(nombre, a2.keywords));
  }
  function esProtegido(tabla, nombre) {
    const tokensIngrediente = new Set(tokens(nombre));
    return tabla.protegidos.some((p) => tokensIngrediente.has(stem(p)));
  }
  function esIngredienteProtegido(nombre) {
    const tabla = cargarTabla();
    if (esProtegido(tabla, nombre)) return true;
    const limite = buscarLimite(tabla, nombre);
    return limite !== void 0 && /^condimentos/i.test(limite.categoria);
  }
  function esLiquidoPorNombre(nombre) {
    const n = normalizar(nombre);
    return LIQUIDO_KEYWORDS.some((k) => n.includes(k));
  }
  function validarPlato(franja, ingredientes, opts = {}) {
    const tabla = cargarTabla();
    const incumplimientos = [];
    const avisos = [];
    const esComidaOCena = franja === "comida" || franja === "cena";
    const esLiquido = opts.esLiquido ?? ingredientes.some((i) => esLiquidoPorNombre(i.nombre));
    let pesoTotalSolidos = 0;
    let pesoGuarnicion = 0;
    for (const ing of ingredientes) {
      const protegido = esProtegido(tabla, ing.nombre);
      if (!protegido) pesoTotalSolidos += ing.gramos;
      const limite = buscarLimite(tabla, ing.nombre);
      if (!limite) continue;
      if (limite.minimo != null && esComidaOCena && !esLiquido && ing.gramos < limite.minimo) {
        incumplimientos.push(
          `${ing.nombre}: ${ing.gramos} g por debajo del m\xEDnimo de raci\xF3n de ${limite.categoria} (${limite.minimo} g)`
        );
      }
      if (limite.tope != null && limite.esRacionRealista) {
        if (ing.gramos > limite.tope * 1.5) {
          incumplimientos.push(
            `${ing.nombre}: ${ing.gramos} g supera con creces la raci\xF3n realista de ${limite.categoria} (${limite.tope} g)`
          );
        } else if (ing.gramos > limite.tope) {
          avisos.push(
            `${ing.nombre}: ${ing.gramos} g por encima de la raci\xF3n realista de ${limite.categoria} (${limite.tope} g)`
          );
        }
      } else if (limite.tope != null && ing.gramos > limite.tope) {
        incumplimientos.push(
          `${ing.nombre}: ${ing.gramos} g supera el tope de ${limite.categoria} (${limite.tope} g)`
        );
      } else if (limite.recomendado != null && ing.gramos > limite.recomendado) {
        avisos.push(
          `${ing.nombre}: ${ing.gramos} g por encima de lo recomendado de ${limite.categoria} (${limite.recomendado} g), dentro del tope (${limite.tope} g)`
        );
      }
      if (!protegido && limite.esBaseDeGuarnicion) pesoGuarnicion += ing.gramos;
    }
    if (pesoTotalSolidos > tabla.pesoPlatoTope) {
      incumplimientos.push(`Peso total del plato: ${pesoTotalSolidos} g supera el tope de ${tabla.pesoPlatoTope} g`);
    } else if (pesoTotalSolidos > tabla.pesoPlatoRecomendado) {
      avisos.push(`Peso total del plato: ${pesoTotalSolidos} g por encima de lo recomendado (${tabla.pesoPlatoRecomendado} g)`);
    }
    if (esComidaOCena && !esLiquido && pesoGuarnicion < tabla.guarnicionMinima) {
      incumplimientos.push(
        `Falta guarnici\xF3n: ${pesoGuarnicion} g de base de hidrato o verdura (m\xEDnimo ${tabla.guarnicionMinima} g; la fruta no cuenta)`
      );
    }
    return { incumplimientos, avisos };
  }
  function rolIngrediente(nombre) {
    const tabla = cargarTabla();
    const limite = buscarLimite(tabla, nombre);
    const c = limite ? normalizar(limite.categoria) : "";
    if (/^condimento/.test(c)) return "condimento";
    if (esProtegido(tabla, nombre)) return "fruta_lacteo";
    if (!limite) return "fijo";
    if (/^(pollo|ternera|pescado|atun|huevo|marisco|conejo|sepia)/.test(c)) return "proteina";
    if (/^(legumbre|patata|cereal|pasta|pan)/.test(c)) return "base";
    if (/^grasa/.test(c)) return "grasa";
    if (/^cebolla/.test(c)) return "aromatico";
    if (/^(verdura|hortaliza|hoja)/.test(c)) return "verdura";
    return "fruta_lacteo";
  }
  var ROLES_PALANCA = ["base", "proteina", "grasa"];
  var esPalanca = (nombre) => ROLES_PALANCA.includes(rolIngrediente(nombre));
  var noSeReescala = (nombre) => !esPalanca(nombre);
  function racionRealistaMaxima(nombre) {
    const l = buscarLimite(cargarTabla(), nombre);
    return l ? l.recomendado ?? l.tope : void 0;
  }
  function validarPlatoGenerado(franja, ingredientes, opts = {}) {
    const tabla = cargarTabla();
    const base = validarPlato(franja, ingredientes, opts.esLiquido === void 0 ? {} : { esLiquido: opts.esLiquido });
    const incumplimientos = base.incumplimientos.filter((i) => !i.startsWith("Peso total del plato"));
    const avisos = base.avisos.filter((a2) => !a2.startsWith("Peso total del plato"));
    const esLiquido = opts.esLiquido ?? ingredientes.some((i) => esLiquidoPorNombre(i.nombre));
    let peso = 0;
    for (const ing of ingredientes) {
      if (!esProtegido(tabla, ing.nombre)) peso += ing.gramos;
      const max = racionRealistaMaxima(ing.nombre);
      if (max !== void 0 && !esLiquido && ing.gramos > max && !incumplimientos.some((i) => i.startsWith(`${ing.nombre}:`))) {
        incumplimientos.push(`${ing.nombre}: ${ing.gramos} g pasa de la raci\xF3n normal (${max} g)`);
      }
    }
    const maxPeso = opts.cargaAlta ? tabla.pesoPlatoTope : tabla.pesoPlatoRecomendado;
    if (peso > maxPeso) incumplimientos.push(`Peso total del plato: ${peso} g pasa del m\xE1ximo de ${maxPeso} g${opts.cargaAlta ? "" : " (hasta 900 g solo en d\xEDas de carga alta)"}`);
    else if (opts.cargaAlta && peso > tabla.pesoPlatoRecomendado) avisos.push(`Peso total del plato: ${peso} g, por encima de 700 g (d\xEDa de carga alta)`);
    return { incumplimientos, avisos };
  }
  function limitesDeFactor(franja, ingredientes, cargaAlta = false) {
    const tabla = cargarTabla();
    const esComidaOCena = franja === "comida" || franja === "cena";
    const esLiquido = ingredientes.some((i) => esLiquidoPorNombre(i.nombre));
    const maxPeso = cargaAlta ? tabla.pesoPlatoTope : tabla.pesoPlatoRecomendado;
    let fMin = 0;
    let fMax = Infinity;
    let pesoFijo = 0;
    let pesoPalancas = 0;
    for (const ing of ingredientes) {
      const cuentaPeso = !esProtegido(tabla, ing.nombre);
      if (!esPalanca(ing.nombre)) {
        if (cuentaPeso) pesoFijo += ing.gramos;
        continue;
      }
      if (cuentaPeso) pesoPalancas += ing.gramos;
      const limite = buscarLimite(tabla, ing.nombre);
      const cap = limite ? limite.recomendado ?? limite.tope : void 0;
      if (cap !== void 0 && ing.gramos > 0) fMax = Math.min(fMax, cap / ing.gramos);
      if (limite?.minimo != null && esComidaOCena && !esLiquido && ing.gramos > 0) fMin = Math.max(fMin, limite.minimo / ing.gramos);
    }
    if (pesoPalancas > 0) fMax = Math.min(fMax, (maxPeso - pesoFijo) / pesoPalancas);
    return { fMin, fMax, hayPalancas: pesoPalancas > 0 || ingredientes.some((i) => esPalanca(i.nombre)) };
  }

  // src/motor/semana.ts
  function crearSemana(perfil, opciones = {}) {
    return {
      perfil,
      horas: opciones.horas ?? (perfil.sesiones ?? []).map(() => void 0),
      diasConsumidos: opciones.diasConsumidos ?? [],
      historial: []
    };
  }
  function moverSesion(semana, indiceSesion, cambios) {
    const sesiones = semana.perfil.sesiones ?? [];
    const original = sesiones[indiceSesion];
    if (!original) throw new Error(`No existe la sesi\xF3n ${indiceSesion} (la semana tiene ${sesiones.length}).`);
    const antes = calcular(semana.perfil);
    const diaDestino = cambios.dia ?? original.dia;
    const nuevasSesiones = sesiones.map((s, i) => i === indiceSesion ? { ...s, dia: diaDestino } : s);
    const nuevoPerfil = { ...semana.perfil, sesiones: nuevasSesiones };
    const despuesCrudo = calcular(nuevoPerfil);
    const diasTocados = /* @__PURE__ */ new Set([original.dia, diaDestino]);
    const diasAfectados = [];
    const diasPreservados = [];
    const dias = DIAS.map((dia) => {
      const consumido = semana.diasConsumidos.includes(dia);
      const tocado = diasTocados.has(dia);
      if (!tocado || consumido) {
        if (tocado && consumido) diasPreservados.push(dia);
        return antes.dias.find((d) => d.dia === dia);
      }
      diasAfectados.push(dia);
      return despuesCrudo.dias.find((d) => d.dia === dia);
    });
    const despues = {
      ...despuesCrudo,
      dias,
      gastoMedio: redondear(dias.reduce((s, d) => s + d.gasto, 0) / 7),
      kcalMedia: redondear(dias.reduce((s, d) => s + d.kcal, 0) / 7)
    };
    const horas = cambios.hora !== void 0 ? semana.horas.map((h, i) => i === indiceSesion ? cambios.hora : h) : semana.horas;
    const nuevaSemana = {
      perfil: nuevoPerfil,
      horas,
      diasConsumidos: semana.diasConsumidos,
      historial: [...semana.historial, semana]
    };
    return { semana: nuevaSemana, antes, despues, despuesSinPreservar: despuesCrudo, diasAfectados, diasPreservados };
  }
  function cambiarHoraSesion(semana, indiceSesion, nuevaHora) {
    if (!(semana.perfil.sesiones ?? [])[indiceSesion]) throw new Error(`No existe la sesi\xF3n ${indiceSesion}.`);
    return {
      ...semana,
      horas: semana.horas.map((h, i) => i === indiceSesion ? nuevaHora : h),
      historial: [...semana.historial, semana]
    };
  }
  function deshacer(semana) {
    return semana.historial.length ? semana.historial[semana.historial.length - 1] : void 0;
  }

  // src/motor/validador-recetas.ts
  function parseCsvLine2(linea) {
    const campos = [];
    let actual = "";
    let entreComillas = false;
    for (let i = 0; i < linea.length; i++) {
      const c = linea[i];
      if (entreComillas) {
        if (c === '"' && linea[i + 1] === '"') {
          actual += '"';
          i++;
        } else if (c === '"') {
          entreComillas = false;
        } else {
          actual += c;
        }
      } else if (c === '"') {
        entreComillas = true;
      } else if (c === ",") {
        campos.push(actual);
        actual = "";
      } else {
        actual += c;
      }
    }
    campos.push(actual);
    return campos;
  }
  function lineasDatos(texto) {
    const lineas = texto.split(/\r?\n/).filter((l) => l.trim() !== "");
    return lineas.slice(1).map(parseCsvLine2);
  }
  function parsearRecetas(csvRecetas, csvIngredientes) {
    const ingredientesPorReceta = /* @__PURE__ */ new Map();
    for (const [recetaId, ingrediente, gramosRaw] of lineasDatos(csvIngredientes)) {
      const lista = ingredientesPorReceta.get(recetaId) ?? [];
      lista.push({ nombre: ingrediente, gramos: Number(gramosRaw) });
      ingredientesPorReceta.set(recetaId, lista);
    }
    return lineasDatos(csvRecetas).map(([id, nombre, franjasRaw, kcal, proteina, grasa, hidrato, notas]) => ({
      id,
      nombre,
      franjas: franjasRaw.split(";").map((f2) => f2.trim()).filter(Boolean),
      kcal: Number(kcal),
      proteina: Number(proteina),
      grasa: Number(grasa),
      hidrato: Number(hidrato),
      notas: notas ?? "",
      .../fibraAlta/.test(notas ?? "") ? { fibraAlta: true } : {},
      .../\b(primero|segundo|postre)\b/.exec(notas ?? "") ? { tipoPlato: /\b(primero|segundo|postre)\b/.exec(notas ?? "")[1] } : {},
      ingredientes: ingredientesPorReceta.get(id) ?? []
    }));
  }
  function validarReceta(receta) {
    const porFranja = {};
    for (const franja of receta.franjas) {
      porFranja[franja] = validarPlato(franja, receta.ingredientes);
    }
    const ok = receta.franjas.every((f2) => porFranja[f2].incumplimientos.length === 0);
    return { id: receta.id, nombre: receta.nombre, porFranja, ok };
  }

  // src/motor/peso-cocido.ts
  var FACTORES_COCIDO_EJEMPLO = [
    ["arroz", 2.5],
    ["pasta", 2.25],
    ["quinoa", 3],
    ["cuscus", 2.5],
    ["legumbre seca", 2.5],
    ["lentejas", 2.5],
    ["garbanzos secos", 2.5]
  ];
  var normalizar2 = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
  function factorCocido(ingrediente) {
    const n = normalizar2(ingrediente);
    return FACTORES_COCIDO_EJEMPLO.find(([clave]) => n === clave || n.startsWith(`${clave} `))?.[1];
  }
  function pesoCocido(ingrediente, gramosSecos) {
    const factor = factorCocido(ingrediente);
    if (factor === void 0 || !Number.isFinite(gramosSecos) || gramosSecos <= 0) return void 0;
    return { gramos: Math.round(gramosSecos * factor / 5) * 5, factor };
  }

  // src/motor/volumen.ts
  var GRUPOS_VOLUMEN = ["desayuno", "principal", "pequena"];
  var grupoDeFranja = (franja) => franja === "desayuno" ? "desayuno" : franja === "comida" || franja === "cena" ? "principal" : "pequena";
  var BANDAS_PRINCIPAL = { [-2]: [250, 400], [-1]: [350, 500], 0: [450, 650], 1: [550, 750], 2: [650, 900] };
  function bandaPesoServido(franja, nivel) {
    const n = Math.max(-2, Math.min(2, Math.round(nivel)));
    const [a2, b] = BANDAS_PRINCIPAL[n];
    return grupoDeFranja(franja) === "principal" ? [a2, b] : [Math.round(a2 / 2), Math.round(b / 2)];
  }
  function pesoServido(ingredientes) {
    return Math.round(ingredientes.reduce((s, i) => s + i.gramos * (factorCocido(i.nombre) ?? 1), 0));
  }
  var distanciaABanda = (peso, banda) => Math.max(0, banda[0] - peso, peso - banda[1]);
  var densidadKcalG = (kcal, peso) => peso > 0 ? Math.round(kcal / peso * 100) / 100 : 0;
  var SEMANA_MS = 7 * 864e5;
  var aMs = (f2) => Date.UTC(Number(f2.slice(0, 4)), Number(f2.slice(5, 7)) - 1, Number(f2.slice(8, 10)));
  function calcularNiveles(valoraciones, ajusteManual = {}) {
    const niveles = { desayuno: 0, principal: 0, pequena: 0 };
    for (const g of GRUPOS_VOLUMEN) {
      const propias = valoraciones.filter((v) => grupoDeFranja(v.franja) === g).sort((a2, b) => a2.fecha.localeCompare(b.fecha));
      let ultimas = [];
      let ultimoCambio = -Infinity;
      for (const v of propias) {
        ultimas = [...ultimas, v.valor].slice(-3);
        const mucha = ultimas.filter((x) => x === "mucha").length;
        const hambre = ultimas.filter((x) => x === "hambre").length;
        const paso = mucha >= 2 ? -1 : hambre >= 2 ? 1 : 0;
        if (paso && aMs(v.fecha) - ultimoCambio >= SEMANA_MS) {
          niveles[g] = Math.max(-2, Math.min(2, niveles[g] + paso));
          ultimoCambio = aMs(v.fecha);
          ultimas = [];
        }
      }
      if (ajusteManual[g] !== void 0) niveles[g] = Math.max(-2, Math.min(2, ajusteManual[g]));
    }
    return niveles;
  }
  var TEXTO_NIVEL = (nivel) => nivel < 0 ? "Te hemos puesto platos m\xE1s concentrados: las mismas calor\xEDas en menos cantidad." : nivel > 0 ? "Te hemos puesto platos m\xE1s voluminosos: las mismas calor\xEDas en m\xE1s cantidad, para saciar m\xE1s." : "Cantidad habitual.";
  function avisosVolumen(valoraciones, niveles, enDeficit, hoy) {
    const avisos = [];
    const dias = new Set(valoraciones.filter((v) => v.valor === "hambre" && aMs(hoy) - aMs(v.fecha) >= 0 && aMs(hoy) - aMs(v.fecha) < SEMANA_MS).map((v) => v.fecha));
    if (enDeficit && dias.size >= 5) {
      avisos.push("Has tenido hambre en 5 de los \xFAltimos 7 d\xEDas. Las calor\xEDas no se cambian solas con estos botones: si te pasa a menudo, cons\xFAltalo con Pablo.");
    }
    const principales = valoraciones.filter((v) => grupoDeFranja(v.franja) === "principal").sort((a2, b) => a2.fecha.localeCompare(b.fecha)).slice(-3);
    if (niveles.principal <= -2 && principales.filter((v) => v.valor === "mucha").length >= 2) {
      avisos.push("Sigues notando mucha comida aunque ya est\xE1 en el nivel m\xE1s concentrado. Las calor\xEDas no se cambian solas con estos botones: cons\xFAltalo con Pablo, o reparte en una toma m\xE1s.");
    }
    return avisos;
  }

  // src/motor/filtro-alergias.ts
  function normalizar3(s) {
    return Array.from(s.normalize("NFD")).filter((c) => c.codePointAt(0) < 768 || c.codePointAt(0) > 879).join("").toLowerCase();
  }
  function raizPalabra(w) {
    if (w.length > 5 && w.endsWith("ces")) return `${w.slice(0, -3)}z`;
    if (w.length > 4 && w.endsWith("es")) w = w.slice(0, -2);
    else if (w.length > 3 && w.endsWith("s")) w = w.slice(0, -1);
    if (w.length > 3 && w.endsWith("e")) w = w.slice(0, -1);
    return w;
  }
  function raizAlimento(s) {
    return normalizar3(s).split(/[^a-z0-9ñ]+/).filter(Boolean).map(raizPalabra).join(" ");
  }
  function coincideAlimento(a2, b) {
    const x = raizAlimento(a2);
    const y = raizAlimento(b);
    return !!x && !!y && (x.includes(y) || y.includes(x));
  }
  var LACTEOS = ["leche", "yogur", "queso", "nata", "mantequilla", "kefir", "cuajada"];
  var CARNE_PESCADO = [
    "pollo",
    "pavo",
    "ternera",
    "cerdo",
    "pescado",
    "atun",
    "marisco",
    "conejo",
    "cordero",
    "sepia",
    "calamar",
    "pulpo",
    "mejillon",
    "almeja",
    "berberecho",
    "jamon",
    "embutido",
    "merluza",
    "salmon",
    "bacalao",
    "lenguado",
    "rape",
    "dorada",
    "lubina",
    "sardina",
    "caballa"
  ];
  var OTROS_NO_VEGANOS = ["huevo", "miel"];
  function buscarIngrediente(ingredientes, palabras) {
    for (const ing of ingredientes) {
      const n = normalizar3(ing.nombre);
      if (palabras.some((p) => n.includes(p))) return ing.nombre;
    }
    return void 0;
  }
  function evaluarCompatibilidad(receta, ap) {
    if (ap.celiaquia) {
      return {
        compatible: false,
        motivo: {
          tipo: "celiaquia_sin_confirmar",
          detalle: "ninguna receta de este cat\xE1logo de ejemplo tiene el gluten verificado: no se afirma que sea segura para celiaqu\xEDa"
        }
      };
    }
    if (ap.lactosa) {
      const ingrediente = buscarIngrediente(receta.ingredientes, LACTEOS);
      if (ingrediente) return { compatible: false, motivo: { tipo: "lactosa", detalle: `lleva "${ingrediente}" (l\xE1cteo)` } };
    }
    if (ap.vegano) {
      const ingrediente = buscarIngrediente(receta.ingredientes, [...CARNE_PESCADO, ...LACTEOS, ...OTROS_NO_VEGANOS]);
      if (ingrediente) return { compatible: false, motivo: { tipo: "no_vegano", detalle: `lleva "${ingrediente}" (no vegano)` } };
    } else if (ap.vegetariano) {
      const ingrediente = buscarIngrediente(receta.ingredientes, CARNE_PESCADO);
      if (ingrediente) return { compatible: false, motivo: { tipo: "no_vegetariano", detalle: `lleva "${ingrediente}" (carne o pescado)` } };
    }
    for (const evitado of ap.evitados) {
      if (!raizAlimento(evitado)) continue;
      const ingrediente = receta.ingredientes.find((ing) => coincideAlimento(ing.nombre, evitado));
      if (ingrediente) {
        return { compatible: false, motivo: { tipo: "evitado", detalle: `lleva "${ingrediente.nombre}" (en la lista de alimentos evitados: "${evitado}")` } };
      }
    }
    return { compatible: true };
  }
  function partirTexto(texto) {
    return (texto ?? "").split(/[,;]| y /i).map((s) => s.trim()).filter(Boolean);
  }
  function alergiasPreferenciasDesdeTexto(alergias, evitanTexto) {
    return {
      celiaquia: alergias.celiaquia,
      lactosa: alergias.lactosa,
      vegetariano: alergias.vegetariano,
      vegano: alergias.vegano,
      evitados: [...partirTexto(alergias.otros), ...partirTexto(evitanTexto)]
    };
  }

  // src/motor/asignador-recetas.ts
  function validarPeticionSiOSi(franja, veces) {
    if (!Number.isInteger(veces) || veces < 1) return "las veces por semana deben ser un n\xFAmero entero de 1 en adelante";
    const max = franja === "comida" || franja === "cena" ? 2 : 7;
    return veces > max ? `en ${franja === "comida" || franja === "cena" ? "comidas y cenas" : "esta franja"} se puede pedir como mucho ${max} ${max === 1 ? "vez" : "veces"} por semana` : void 0;
  }
  var AJUSTE_MAX = 0.2;
  var FRANJAS_CON_LIMITE_VARIEDAD = ["comida", "cena"];
  var esFranjaConLimiteVariedad = (franja) => FRANJAS_CON_LIMITE_VARIEDAD.includes(franja);
  var RACION_MAX_SUBIDA = 2;
  function racionParaObjetivo(receta, kcalObjetivo, franja, opciones = {}) {
    const { fMin, fMax, hayPalancas } = limitesDeFactor(franja ?? "comida", receta.ingredientes, !!opciones.cargaAlta);
    const palancas = receta.ingredientes.filter((i) => esPalanca(i.nombre));
    const hay = (rol) => palancas.some((i) => rolIngrediente(i.nombre) === rol);
    const kcalPalancas = Math.min(
      receta.kcal,
      (hay("base") ? 4 * receta.hidrato : 0) + (hay("proteina") ? 4 * receta.proteina : 0) + 9 * palancas.filter((i) => rolIngrediente(i.nombre) === "grasa").reduce((s, i) => s + i.gramos, 0)
    );
    const factorIdeal = hayPalancas && kcalPalancas > 0 ? 1 + (kcalObjetivo - receta.kcal) / kcalPalancas : 1;
    const suelo = Math.min(1, Math.max(opciones.piso ?? 1 - AJUSTE_MAX, fMin));
    const techo = Math.max(suelo, Math.min(RACION_MAX_SUBIDA, fMax));
    const factor = Math.min(techo, Math.max(suelo, factorIdeal));
    const factorRedondeado = factor > 1 ? Math.floor(factor * 100 + 1e-9) / 100 : Math.ceil(factor * 100 - 1e-9) / 100;
    const kcalResultante = Math.round(receta.kcal + kcalPalancas * (factorRedondeado - 1));
    return { factor: factorRedondeado, factorRedondeado, kcalResultante, desviacion: Math.abs(kcalResultante - kcalObjetivo) };
  }
  function gramosEscalados(receta, factorRedondeado) {
    return receta.ingredientes.map((i) => ({
      nombre: i.nombre,
      gramos: esPalanca(i.nombre) ? Math.round(i.gramos * factorRedondeado * 10) / 10 : i.gramos
    }));
  }
  function incumplimientosRacion(franja, receta, factorRedondeado, opciones = {}) {
    const protegidos = receta.ingredientes.filter((i) => esIngredienteProtegido(i.nombre)).map((i) => i.nombre);
    return { protegidos, incumplimientos: validarPlatoGenerado(franja, gramosEscalados(receta, factorRedondeado), opciones).incumplimientos };
  }
  function filtrarPorDias(items, dias) {
    const permitidos = new Set(dias);
    return items.filter((item) => permitidos.has(item.dia));
  }
  var ROTULO_PLATO = { primero: "Primero", segundo: "Segundo", postre: "Postre" };
  function componerComida(platos) {
    const ingredientes = [];
    for (const p of platos) {
      for (const i of p.ingredientes) {
        const ya = ingredientes.find((x) => x.nombre === i.nombre);
        if (ya) ya.gramos += i.gramos;
        else ingredientes.push({ ...i });
      }
    }
    const franjas = platos[0].franjas.filter((f2) => platos.every((p) => p.franjas.includes(f2)));
    return {
      id: platos.map((p) => p.id).join("+"),
      nombre: platos.map((p) => `${ROTULO_PLATO[p.tipoPlato ?? ""] ?? "Plato"}: ${p.nombre}`).join(" \xB7 "),
      franjas,
      kcal: platos.reduce((s, p) => s + p.kcal, 0),
      proteina: platos.reduce((s, p) => s + p.proteina, 0),
      grasa: platos.reduce((s, p) => s + p.grasa, 0),
      hidrato: platos.reduce((s, p) => s + p.hidrato, 0),
      notas: "",
      ingredientes,
      ...platos.some((p) => p.fibraAlta) ? { fibraAlta: true } : {},
      tipoPlato: "compuesta",
      platos: platos.map((p) => p.id)
    };
  }
  function combinanBien(primero, segundo) {
    const nombres = (r, rol) => r.ingredientes.filter((i) => rolIngrediente(i.nombre) === rol).map((i) => i.nombre);
    if (nombres(primero, "base").length && nombres(segundo, "base").length) return false;
    const pp = nombres(primero, "proteina");
    const ps = nombres(segundo, "proteina");
    return !pp.some((a2) => ps.some((b) => coincideAlimento(a2, b)));
  }
  function recetaDeId(porId, id) {
    const directa = porId.get(id);
    if (directa || !id.includes("+")) return directa;
    const platos = id.split("+").map((x) => porId.get(x));
    return platos.every(Boolean) ? componerComida(platos) : void 0;
  }
  function recetasCompuestas(ids, recetas) {
    const porId = new Map(recetas.map((r) => [r.id, r]));
    return [...new Set(ids.filter((i) => i.includes("+")))].map((i) => recetaDeId(porId, i)).filter((r) => !!r);
  }
  function combinarConRecetas(asignaciones, recetas) {
    const porId = new Map(recetas.map((r) => [r.id, r]));
    const resultado = [];
    for (const a2 of asignaciones) {
      const receta = recetaDeId(porId, a2.receta);
      if (receta) {
        resultado.push({
          dia: a2.dia,
          franja: a2.franja,
          receta,
          racionAjustada: a2.racionAjustada,
          kcalResultante: a2.kcalResultante,
          ...a2.protegidosSinEscalar ? { protegidosSinEscalar: a2.protegidosSinEscalar } : {},
          ...a2.pedidoPorUsuario ? { pedidoPorUsuario: a2.pedidoPorUsuario } : {},
          ...a2.fijada ? { fijada: true } : {}
        });
      }
    }
    return resultado;
  }
  function asignarRecetas(slots, recetas, opciones = {}) {
    const maxRep = opciones.maxRepeticionesSemana ?? 2;
    const usos = /* @__PURE__ */ new Map();
    const asignaciones = [];
    const huecos = [];
    const avisos = [];
    const reservas = /* @__PURE__ */ new Map();
    const estadosSiOSi = [];
    const idsPedidos = /* @__PURE__ */ new Set();
    const claveSlotSiOSi = (s) => `${s.dia}|${s.franja}`;
    const estadosFijadas = [];
    const fijadasPorSlot = /* @__PURE__ */ new Map();
    const catalogoPorId = new Map(recetas.map((r) => [r.id, r]));
    const vecesFijadas = /* @__PURE__ */ new Map();
    for (const p of opciones.fijadas ?? []) {
      const slot = slots.find((s) => s.dia === p.dia && s.franja === p.franja);
      const receta = recetaDeId(catalogoPorId, p.receta);
      const base = { dia: p.dia, franja: p.franja, receta: p.receta, nombre: receta?.nombre ?? p.receta };
      if (!slot) {
        estadosFijadas.push({ ...base, ok: false, causa: "esa comida ya no existe en tu plan" });
        continue;
      }
      if (!receta) {
        estadosFijadas.push({ ...base, ok: false, causa: "la receta ya no est\xE1 en el cat\xE1logo" });
        continue;
      }
      const ap = opciones.alergiasPreferencias;
      const compat = ap ? evaluarCompatibilidad(receta, ap) : { compatible: true };
      if (!compat.compatible) {
        estadosFijadas.push({ ...base, ok: false, causa: `choca con tu perfil (${compat.motivo?.detalle ?? "alergia o lista negra"}): no se sirve`, arreglo: "Quita la fijaci\xF3n o elige una receta parecida." });
        continue;
      }
      if (slot.sinFibraAlta && receta.fibraAlta) {
        estadosFijadas.push({ ...base, ok: false, causa: "es v\xEDspera de competici\xF3n y esta receta lleva fibra alta: ese d\xEDa elige la app", arreglo: "Se propone otra receta solo para este d\xEDa." });
        continue;
      }
      if (!receta.franjas.includes(slot.franja)) {
        estadosFijadas.push({ ...base, ok: false, causa: "esta receta no vale para esta comida" });
        continue;
      }
      const { factorRedondeado, kcalResultante, desviacion } = racionParaObjetivo(receta, slot.kcalObjetivo, slot.franja, { cargaAlta: slot.cargaAlta, piso: 0.5 });
      const rotos = [
        ...validarPlatoGenerado(slot.franja, receta.ingredientes, { cargaAlta: slot.cargaAlta }).incumplimientos,
        ...incumplimientosRacion(slot.franja, receta, factorRedondeado, { cargaAlta: slot.cargaAlta }).incumplimientos
      ];
      if (rotos.length) {
        estadosFijadas.push({ ...base, ok: false, causa: `no pasa el validador de platos (${rotos[0]}): esa comida la elige la app`, arreglo: "Cambia a una receta parecida o quita la fijaci\xF3n." });
        continue;
      }
      fijadasPorSlot.set(claveSlotSiOSi(slot), { receta, factor: factorRedondeado, kcalResultante, desviacion });
      const falta = kcalResultante - slot.kcalObjetivo;
      estadosFijadas.push({
        ...base,
        ok: true,
        ...desviacion > slot.kcalObjetivo * 0.1 ? { causa: `con la raci\xF3n al ${Math.round(factorRedondeado * 100)} % ${falta < 0 ? "faltan" : "sobran"} ${desviacion} kcal del objetivo`, arreglo: falta < 0 ? "A\xF1ade un postre (fruta o yogur) o una guarnici\xF3n para cubrir lo que falta." : "Reduce la raci\xF3n o cambia a una receta m\xE1s ligera." } : {}
      });
      for (const id of receta.platos ?? [receta.id]) vecesFijadas.set(id, (vecesFijadas.get(id) ?? 0) + 1);
    }
    for (const e of estadosFijadas) {
      if (!e.ok || e.franja !== "comida" && e.franja !== "cena") continue;
      const r = recetaDeId(catalogoPorId, e.receta);
      if (Math.max(...(r.platos ?? [r.id]).map((id) => vecesFijadas.get(id) ?? 0)) >= 3 && !e.aviso) e.aviso = "Lo has elegido t\xFA; variar un poco suele sentar bien.";
    }
    for (const p of opciones.recetasSiOSi ?? []) {
      const receta = recetas.find((r) => r.id === p.id);
      const base = { id: p.id, nombre: receta?.nombre ?? p.id, franja: p.franja, pedidas: p.veces };
      const errorPeticion = validarPeticionSiOSi(p.franja, p.veces);
      if (!receta) {
        estadosSiOSi.push({ ...base, colocadas: 0, causa: "esa receta ya no est\xE1 en el cat\xE1logo" });
        continue;
      }
      if (errorPeticion) {
        estadosSiOSi.push({ ...base, colocadas: 0, causa: errorPeticion });
        continue;
      }
      if (!receta.franjas.includes(p.franja)) {
        estadosSiOSi.push({ ...base, colocadas: 0, causa: `esta receta no vale para ${p.franja}` });
        continue;
      }
      idsPedidos.add(receta.id);
      const motivos = /* @__PURE__ */ new Set();
      const candidatos = [];
      for (const slot of slots.filter((s) => s.franja === p.franja)) {
        if (slot.sinFibraAlta && receta.fibraAlta) {
          motivos.add("la v\xEDspera de una competici\xF3n evita la fibra alta (legumbre, integral o verdura cruda)");
          continue;
        }
        const ap = opciones.alergiasPreferencias;
        const compat = ap ? evaluarCompatibilidad(receta, ap) : { compatible: true };
        if (!compat.compatible) {
          motivos.add(`choca con tu perfil: ${compat.motivo?.detalle ?? "alergia o lista negra"}`);
          continue;
        }
        const { factorRedondeado, kcalResultante, desviacion } = racionParaObjetivo(receta, slot.kcalObjetivo, slot.franja, { cargaAlta: slot.cargaAlta });
        const rotos = [
          ...validarPlatoGenerado(slot.franja, receta.ingredientes, { cargaAlta: slot.cargaAlta }).incumplimientos,
          ...incumplimientosRacion(slot.franja, receta, factorRedondeado, { cargaAlta: slot.cargaAlta }).incumplimientos
        ];
        if (rotos.length) {
          motivos.add(`no cabe en los topes del plato (${rotos[0]})`);
          continue;
        }
        candidatos.push({ slot, e: { receta, factor: factorRedondeado, kcalResultante, desviacion } });
      }
      candidatos.sort((a2, b) => a2.e.desviacion - b.e.desviacion);
      const elegidos = [];
      const limitada = esFranjaConLimiteVariedad(p.franja);
      for (const c of candidatos) {
        if (elegidos.length >= p.veces) break;
        if (reservas.has(claveSlotSiOSi(c.slot)) || fijadasPorSlot.has(claveSlotSiOSi(c.slot))) continue;
        const i = DIAS.indexOf(c.slot.dia);
        if (elegidos.some((x) => Math.abs(DIAS.indexOf(x.slot.dia) - i) === 1)) continue;
        elegidos.push(c);
      }
      for (const c of candidatos) {
        if (elegidos.length >= p.veces) break;
        if (!reservas.has(claveSlotSiOSi(c.slot)) && !fijadasPorSlot.has(claveSlotSiOSi(c.slot)) && !elegidos.includes(c)) elegidos.push(c);
      }
      for (const c of elegidos) reservas.set(claveSlotSiOSi(c.slot), c.e);
      const causa = elegidos.length >= p.veces ? void 0 : motivos.size ? [...motivos][0] : candidatos.length ? "no hay d\xEDas libres suficientes para colocarla" : "no hay ninguna franja de este tipo en tu plan";
      estadosSiOSi.push({ ...base, colocadas: elegidos.length, ...causa ? { causa } : {} });
    }
    const idsDe = (r) => r.platos ?? [r.id];
    const usosDe = (r) => Math.max(...idsDe(r).map((id) => usos.get(id) ?? 0));
    for (const slot of slots) {
      const limitada = esFranjaConLimiteVariedad(slot.franja);
      const ap = opciones.alergiasPreferencias;
      const vale = (r) => r.franjas.includes(slot.franja) && !(slot.sinFibraAlta && r.fibraAlta) && (!ap || evaluarCompatibilidad(r, ap).compatible);
      const esUnico = (r) => !r.tipoPlato || r.tipoPlato === "unico";
      const intentar = (lista, filtrar) => {
        const candidatas = filtrar ? lista.filter((r) => r.franjas.includes(slot.franja) && !(slot.sinFibraAlta && r.fibraAlta)) : lista;
        if (!candidatas.length) {
          return { motivo: slot.sinFibraAlta ? "la v\xEDspera de competici\xF3n no se proponen recetas con fibra alta (legumbre, integral o verdura cruda) y no hay otra para esta franja" : "ninguna receta del cat\xE1logo declara esta franja" };
        }
        let aptas = candidatas;
        if (ap && filtrar) {
          aptas = candidatas.filter((r) => evaluarCompatibilidad(r, ap).compatible);
          if (!aptas.length) {
            return { motivo: `ninguna receta de esta franja es compatible con las alergias/preferencias indicadas (${evaluarCompatibilidad(candidatas[0], ap).motivo?.detalle ?? "sin detalle"})` };
          }
        }
        const disponibles = limitada ? aptas.filter((r) => usosDe(r) < maxRep) : aptas;
        if (!disponibles.length) return { motivo: `todas las recetas de esta franja ya llegaron al m\xE1ximo de ${maxRep} veces/semana entre comidas y cenas` };
        const validas = disponibles.filter((r) => validarPlatoGenerado(slot.franja, r.ingredientes, { cargaAlta: slot.cargaAlta }).incumplimientos.length === 0);
        if (!validas.length) {
          const detalle = disponibles.slice(0, 3).map((r) => `"${r.nombre}": ${validarPlatoGenerado(slot.franja, r.ingredientes, { cargaAlta: slot.cargaAlta }).incumplimientos.join("; ")}`).join(" | ");
          return { motivo: `no cabe en una raci\xF3n normal: ninguna receta disponible pasa el validador de platos para esta franja (${detalle})` };
        }
        let mejor;
        const descartadas = [];
        for (const r of validas) {
          const { factor, kcalResultante, desviacion, factorRedondeado: factorRedondeado2 } = racionParaObjetivo(r, slot.kcalObjetivo, slot.franja, { cargaAlta: slot.cargaAlta });
          const { incumplimientos: rotos } = incumplimientosRacion(slot.franja, r, factorRedondeado2, { cargaAlta: slot.cargaAlta });
          if (rotos.length) {
            descartadas.push(`"${r.nombre}" al ${Math.round(factorRedondeado2 * 100)} %: ${rotos.join("; ")}`);
            continue;
          }
          const dist = slot.bandaPeso ? distanciaABanda(pesoServido(gramosEscalados(r, factorRedondeado2)), slot.bandaPeso) : 0;
          if (!mejor || clave(desviacion, dist) < clave(mejor.desviacion, mejor.dist ?? 0)) mejor = { receta: r, factor, kcalResultante, desviacion, dist };
        }
        if (!mejor) return { motivo: `con la raci\xF3n escalada al objetivo ninguna receta disponible pasa el validador de platos (${descartadas.join(" | ")})` };
        return { elegido: mejor };
      };
      const alcanza = (e) => !!e && e.desviacion <= slot.kcalObjetivo * 0.1;
      const clave = (desv, dist) => desv > slot.kcalObjetivo * 0.1 ? 1e9 + desv : dist * 1e5 + desv;
      const fijada = fijadasPorSlot.get(claveSlotSiOSi(slot));
      const reservada = fijada ? void 0 : reservas.get(claveSlotSiOSi(slot));
      let res = fijada ? { elegido: fijada } : reservada ? { elegido: reservada } : intentar(recetas.filter((r) => esUnico(r) && !idsPedidos.has(r.id)), true);
      if (!fijada && !reservada && (slot.franja === "comida" || slot.franja === "cena") && (!!slot.bandaPeso || !alcanza(res.elegido))) {
        const primeros = recetas.filter((r) => r.tipoPlato === "primero" && vale(r) && (!limitada || usosDe(r) < maxRep));
        const segundos = recetas.filter((r) => r.tipoPlato === "segundo" && vale(r) && (!limitada || usosDe(r) < maxRep));
        const postres = recetas.filter((r) => r.tipoPlato === "postre" && vale(r));
        const parejas = primeros.flatMap((p) => segundos.filter((s) => combinanBien(p, s)).map((s) => componerComida([p, s])));
        const mejorDe = (a2, b) => b.elegido && (!a2.elegido || clave(b.elegido.desviacion, b.elegido.dist ?? 0) < clave(a2.elegido.desviacion, a2.elegido.dist ?? 0)) ? b : a2;
        if (parejas.length) {
          const r2 = intentar(parejas, false);
          res = mejorDe(res, r2);
          if (!!slot.bandaPeso || !alcanza(res.elegido)) {
            const conPostre = parejas.flatMap((c) => postres.filter((po) => !c.platos.includes(po.id)).map((po) => componerComida([...c.platos.map((id) => recetas.find((x) => x.id === id)), po])));
            if (conPostre.length) res = mejorDe(res, intentar(conPostre, false));
          }
        }
      }
      if (!res.elegido) {
        huecos.push({ dia: slot.dia, franja: slot.franja, motivo: res.motivo ?? "ninguna receta disponible" });
        continue;
      }
      const elegido = res.elegido;
      if (limitada) for (const id of idsDe(elegido.receta)) usos.set(id, (usos.get(id) ?? 0) + 1);
      const factorRedondeado = Math.round(elegido.factor * 100) / 100;
      const { protegidos, incumplimientos } = incumplimientosRacion(slot.franja, elegido.receta, factorRedondeado, { cargaAlta: slot.cargaAlta });
      if (incumplimientos.length) {
        avisos.push(`${slot.dia} ${slot.franja}: con la raci\xF3n escalada al ${Math.round(factorRedondeado * 100)} % "${elegido.receta.nombre}" ya no pasa el validador de platos (${incumplimientos.join("; ")}).`);
      }
      asignaciones.push({
        dia: slot.dia,
        franja: slot.franja,
        receta: elegido.receta.id,
        racionAjustada: factorRedondeado,
        kcalResultante: elegido.kcalResultante,
        ...protegidos.length ? { protegidosSinEscalar: protegidos } : {},
        ...reservada ? { pedidoPorUsuario: reservada.receta.nombre } : {},
        ...fijada ? { fijada: true } : {}
      });
      if (slot.bandaPeso && (elegido.dist ?? 0) > 0) avisos.push(`${slot.dia} ${slot.franja}: con comida normal no se puede ajustar m\xE1s el volumen (queda a ${elegido.dist} g de la banda de peso servido): si quieres, reparte esta comida en una toma m\xE1s.`);
      if (elegido.desviacion > slot.kcalObjetivo * 0.1) {
        avisos.push(
          `${slot.dia} ${slot.franja}: "${elegido.receta.nombre}" se queda a ${elegido.desviacion} kcal del objetivo (${slot.kcalObjetivo}) aun ajustando la raci\xF3n todo lo que permiten los topes del m\xE9todo: no cabe en una raci\xF3n normal y no se infla nada. Reparte lo que falta entre las otras comidas del d\xEDa, cierra con un postre (fruta o yogur) o cambia el plato.`
        );
      }
    }
    const imprescindibles = opciones.imprescindibles?.length ? cubrirImprescindibles(opciones.imprescindibles, slots, recetas, asignaciones, avisos, maxRep, opciones.alergiasPreferencias) : void 0;
    return { asignaciones, huecos, avisos, ...imprescindibles ? { imprescindibles } : {}, ...estadosSiOSi.length ? { recetasSiOSi: estadosSiOSi } : {}, ...estadosFijadas.length ? { fijadas: estadosFijadas } : {} };
  }
  var llevaAlimento = (r, alimento) => r.ingredientes.some((i) => coincideAlimento(i.nombre, alimento));
  function cubrirImprescindibles(pedidos, slots, recetas, asignaciones, avisos, maxRep, ap) {
    const porId = new Map(recetas.map((r) => [r.id, r]));
    const estados = [];
    const vistos = [];
    for (const alimento of pedidos.map((p) => p.trim()).filter(Boolean)) {
      if (vistos.some((v) => coincideAlimento(v, alimento))) continue;
      vistos.push(alimento);
      const ya = asignaciones.find((a2) => {
        const r = recetaDeId(porId, a2.receta);
        return r && llevaAlimento(r, alimento);
      });
      if (ya) {
        if (!ya.pedidoPorUsuario) ya.pedidoPorUsuario = alimento;
        estados.push({ alimento, cubierto: true });
        continue;
      }
      if (ap && recetas.length) {
        const choque = evaluarCompatibilidad({ ...recetas[0], ingredientes: [{ nombre: alimento, gramos: 100 }] }, ap);
        if (!choque.compatible) {
          const t = choque.motivo?.tipo;
          const causa = t === "evitado" ? "est\xE1 en tu lista negra o en tus alergias, y eso manda siempre" : t === "celiaquia_sin_confirmar" ? "con celiaqu\xEDa no se da por segura ninguna receta de ejemplo" : `choca con lo que has indicado (${t === "lactosa" ? "lactosa" : t === "no_vegano" ? "vegano" : "vegetariano"})`;
          estados.push({ alimento, cubierto: false, causa });
          continue;
        }
      }
      const conAlimento = recetas.filter((r) => (!r.tipoPlato || r.tipoPlato === "unico") && llevaAlimento(r, alimento));
      if (!conAlimento.length) {
        estados.push({ alimento, cubierto: false, causa: "no hay ninguna receta en el cat\xE1logo que lo lleve" });
        continue;
      }
      const aptas = conAlimento.filter((r) => (!ap || evaluarCompatibilidad(r, ap).compatible) && r.franjas.some((f2) => validarPlatoGenerado(f2, r.ingredientes).incumplimientos.length === 0));
      if (!aptas.length) {
        estados.push({ alimento, cubierto: false, causa: "las recetas que lo llevan chocan con tus alergias, tu lista negra o los topes del plato" });
        continue;
      }
      let mejor;
      for (const r of aptas) {
        for (let i = 0; i < asignaciones.length; i++) {
          const a2 = asignaciones[i];
          if (a2.pedidoPorUsuario || !r.franjas.includes(a2.franja)) continue;
          if (slots.find((s) => s.dia === a2.dia && s.franja === a2.franja)?.sinFibraAlta && r.fibraAlta) continue;
          const slot = slots.find((s) => s.dia === a2.dia && s.franja === a2.franja);
          if (!slot) continue;
          if (validarPlatoGenerado(a2.franja, r.ingredientes, { cargaAlta: slot.cargaAlta }).incumplimientos.length) continue;
          if (esFranjaConLimiteVariedad(a2.franja)) {
            const usos = asignaciones.filter((b, j) => j !== i && b.receta === r.id && esFranjaConLimiteVariedad(b.franja)).length;
            if (usos >= maxRep) continue;
          }
          const { factorRedondeado, kcalResultante, desviacion } = racionParaObjetivo(r, slot.kcalObjetivo, a2.franja, { cargaAlta: slot.cargaAlta });
          if (incumplimientosRacion(a2.franja, r, factorRedondeado, { cargaAlta: slot.cargaAlta }).incumplimientos.length) continue;
          if (desviacion > slot.kcalObjetivo * 0.1) continue;
          if (!mejor || desviacion < mejor.desv) mejor = { i, r, factor: factorRedondeado, kcal: kcalResultante, desv: desviacion };
        }
      }
      if (!mejor) {
        estados.push({ alimento, cubierto: false, causa: "no cabe en los topes de la semana (variedad, l\xEDmites del plato o kcal de la franja)" });
        continue;
      }
      const viejo = asignaciones[mejor.i];
      const { protegidos } = incumplimientosRacion(viejo.franja, mejor.r, mejor.factor);
      asignaciones[mejor.i] = {
        dia: viejo.dia,
        franja: viejo.franja,
        receta: mejor.r.id,
        racionAjustada: mejor.factor,
        kcalResultante: mejor.kcal,
        ...protegidos.length ? { protegidosSinEscalar: protegidos } : {},
        pedidoPorUsuario: alimento
      };
      for (let k = avisos.length - 1; k >= 0; k--) if (avisos[k].startsWith(`${viejo.dia} ${viejo.franja}:`)) avisos.splice(k, 1);
      estados.push({ alimento, cubierto: true });
    }
    return estados;
  }

  // src/motor/lista-compra.ts
  function normalizar4(s) {
    return Array.from(s.normalize("NFD")).filter((c) => c.codePointAt(0) < 768 || c.codePointAt(0) > 879).join("").toLowerCase();
  }
  var PALABRAS_SECCION = [
    ["carne_pescado", [
      "pollo",
      "pavo",
      "ternera",
      "cerdo",
      "pescado",
      "atun",
      "marisco",
      "conejo",
      "cordero",
      "sepia",
      "calamar",
      "pulpo",
      "mejillon",
      "almeja",
      "berberecho",
      "jamon",
      "embutido",
      "merluza",
      "salmon",
      "bacalao",
      "lenguado",
      "rape",
      "dorada",
      "lubina",
      "sardina",
      "caballa"
    ]],
    ["lacteos", ["yogur", "queso", "leche", "bebida vegetal", "huevo"]],
    ["fruta", [
      "platano",
      "manzana",
      "naranja",
      "pera",
      "fresa",
      "uva",
      "melon",
      "sandia",
      "kiwi",
      "mandarina",
      "pina",
      "aguacate"
    ]],
    ["congelados", ["congelado", "congelada"]],
    ["despensa", [
      "avena",
      "arroz",
      "pasta",
      "pan",
      "legumbre",
      "aceite",
      "especias",
      "condimento",
      "cereal",
      "harina",
      "fruto seco",
      "aceituna",
      "encurtido",
      "cafe"
    ]],
    ["verdura", [
      "judia",
      "calabacin",
      "brocoli",
      "patata",
      "boniato",
      "alcachofa",
      "cebolla",
      "puerro",
      "tomate",
      "pepino",
      "lechuga",
      "espinaca",
      "acelga",
      "coliflor",
      "pimiento",
      "berenjena",
      "champinon",
      "seta",
      "esparrago",
      "zanahoria",
      "calabaza",
      "verdura",
      "gazpacho",
      "salmorejo"
    ]]
  ];
  function clasificar(ingrediente) {
    const n = normalizar4(ingrediente);
    for (const [seccion, palabras] of PALABRAS_SECCION) {
      if (palabras.some((p) => n.includes(p))) return seccion;
    }
    return "otros";
  }
  function redondearCompra(ingrediente, gramos) {
    if (normalizar4(ingrediente).includes("huevo")) {
      const unidades = Math.ceil(gramos / 50);
      return `${unidades} ud${unidades === 1 ? "" : "s"} (huevos, ~50 g/ud)`;
    }
    const paso = clasificar(ingrediente) === "carne_pescado" ? 50 : 25;
    return `${Math.ceil(gramos / paso) * paso} g`;
  }
  function generarListaCompra(asignaciones, recetas, opciones = {}) {
    const porId = new Map(recetas.map((r) => [r.id, r]));
    const totales = /* @__PURE__ */ new Map();
    for (const { recetaId, veces, racion = 1 } of asignaciones) {
      const receta = porId.get(recetaId);
      if (!receta) throw new Error(`Receta desconocida en la lista de la compra: ${recetaId}`);
      if (!Number.isFinite(veces) || veces <= 0) {
        throw new Error(`Escala inv\xE1lida para la receta ${recetaId} en la lista de la compra: ${veces} (debe ser un n\xFAmero mayor que 0)`);
      }
      if (!Number.isFinite(racion) || racion <= 0) {
        throw new Error(`Raci\xF3n inv\xE1lida para la receta ${recetaId} en la lista de la compra: ${racion} (debe ser un n\xFAmero mayor que 0)`);
      }
      for (const ing of receta.ingredientes) {
        const factor = opciones.esProtegido?.(ing.nombre) ? 1 : racion;
        totales.set(ing.nombre, (totales.get(ing.nombre) ?? 0) + ing.gramos * veces * factor);
      }
    }
    return Array.from(totales.entries()).map(([ingrediente, gramosTotales]) => ({
      ingrediente,
      gramosTotales: Math.round(gramosTotales * 100) / 100,
      // evita restos de coma flotante (0,1 + 0,2)
      seccion: clasificar(ingrediente),
      comprar: redondearCompra(ingrediente, Math.round(gramosTotales * 100) / 100)
    })).sort((a2, b) => a2.seccion.localeCompare(b.seccion) || a2.ingrediente.localeCompare(b.ingrediente));
  }
  function marcarYaEnCasa(lista, marcados) {
    return lista.map((item) => ({ ...item, yaEnCasa: marcados.has(item.ingrediente) }));
  }
  var NOMBRE_DIA = {
    L: "lunes",
    M: "martes",
    X: "mi\xE9rcoles",
    J: "jueves",
    V: "viernes",
    S: "s\xE1bado",
    D: "domingo"
  };
  var TITULO_SECCION = {
    verdura: "Verdura",
    fruta: "Fruta",
    carne_pescado: "Carne y pescado",
    lacteos: "L\xE1cteos y huevos",
    despensa: "Despensa",
    congelados: "Congelados",
    otros: "Otros"
  };
  function formatearListaPendiente(entrada) {
    const cabecera = [
      "LISTA DE LA COMPRA \u2014 recetas de EJEMPLO, no reales",
      `D\xEDas: ${entrada.dias.length ? entrada.dias.map((d) => NOMBRE_DIA[d] ?? d).join(", ") : "ninguno"}`
    ];
    if (entrada.huecos > 0) {
      cabecera.push(
        `AVISO: lista parcial con recetas de ejemplo \u2014 ${entrada.huecos} franja${entrada.huecos === 1 ? "" : "s"} sin receta que encaje, sus ingredientes no est\xE1n incluidos.`
      );
    }
    if (!entrada.dias.length) return [...cabecera, "", "Ning\xFAn d\xEDa elegido: no hay lista de la compra."].join("\n");
    const pendientes = entrada.items.filter((i) => !i.yaEnCasa);
    const manuales = entrada.manuales.filter((m) => !m.yaEnCasa);
    if (!pendientes.length && !manuales.length) {
      return [...cabecera, "", "No hay nada pendiente: todo est\xE1 marcado como ya en casa (o no hay ingredientes)."].join("\n");
    }
    const lineas = [...cabecera];
    const orden = Object.keys(TITULO_SECCION);
    for (const sec of orden) {
      const delSec = pendientes.filter((i) => i.seccion === sec);
      if (!delSec.length) continue;
      lineas.push("", TITULO_SECCION[sec].toUpperCase());
      for (const i of delSec) lineas.push(`- ${i.comprar} \u2014 ${i.ingrediente}`);
    }
    if (manuales.length) {
      lineas.push("", "A\xD1ADIDOS A MANO");
      for (const m of manuales) lineas.push(`- ${[m.cantidad, m.unidad].filter(Boolean).join(" ")} \u2014 ${m.nombre}`.replace("-  \u2014", "-"));
    }
    return lineas.join("\n");
  }
  function evaluarMarcas(lista, marcas) {
    const cubiertos = /* @__PURE__ */ new Set();
    const aRevisar = [];
    for (const item of lista) {
      if (!(item.ingrediente in marcas)) continue;
      const marcado = marcas[item.ingrediente];
      if (marcado === null || Math.abs(marcado - item.gramosTotales) < 0.05) cubiertos.add(item.ingrediente);
      else aRevisar.push({ ingrediente: item.ingrediente, marcado, ahora: item.gramosTotales });
    }
    return { cubiertos, aRevisar };
  }
  function listaManualDesdeJson(valor) {
    const marcas = {};
    const manuales = [];
    if (!valor || typeof valor !== "object") return { marcas, manuales };
    const { marcados, manuales: lista } = valor;
    for (const m of Array.isArray(marcados) ? marcados : []) {
      if (typeof m === "string") marcas[m] = null;
      else if (Array.isArray(m) && typeof m[0] === "string") marcas[m[0]] = typeof m[1] === "number" && Number.isFinite(m[1]) ? m[1] : null;
    }
    for (const a2 of Array.isArray(lista) ? lista : []) {
      if (!a2 || typeof a2 !== "object") continue;
      const { id, nombre, cantidad, unidad, yaEnCasa } = a2;
      if (typeof id !== "string" || typeof nombre !== "string") continue;
      manuales.push({ id, nombre, cantidad: String(cantidad ?? ""), unidad: typeof unidad === "string" ? unidad : "", yaEnCasa: !!yaEnCasa });
    }
    return { marcas, manuales };
  }

  // src/motor/estimador-coste.ts
  var COLUMNAS = ["ingrediente", "unidad", "precio_medio", "nota"];
  var UNIDADES_VALIDAS = ["kg", "ud"];
  var GRAMOS_POR_UNIDAD = { huevo: 50 };
  function normalizar5(s) {
    return Array.from(s.normalize("NFD")).filter((c) => c.codePointAt(0) < 768 || c.codePointAt(0) > 879).join("").toLowerCase();
  }
  function parsearPrecios(csv) {
    const lineas = csv.split(/\r?\n/).filter((l) => l.trim() !== "");
    const errores = [];
    const filas = [];
    const cabecera = (lineas[0] ?? "").split(",");
    if (cabecera.join(",") !== COLUMNAS.join(",")) {
      errores.push({ fila: 1, ingrediente: "(cabecera)", problema: `se esperaba "${COLUMNAS.join(",")}", se encontr\xF3 "${cabecera.join(",")}"` });
    }
    lineas.slice(1).forEach((linea, i) => {
      const numFila = i + 2;
      const cols = linea.split(",");
      if (cols.length !== COLUMNAS.length) {
        errores.push({ fila: numFila, ingrediente: cols[0] ?? "(vac\xEDo)", problema: `${cols.length} columnas, se esperaban ${COLUMNAS.length}` });
        return;
      }
      const [ingrediente, unidad, precioRaw, nota] = cols;
      const precioMedio = Number(precioRaw);
      if (!Number.isFinite(precioMedio) || precioMedio < 0) {
        errores.push({ fila: numFila, ingrediente, problema: `precio_medio no num\xE9rico o negativo: "${precioRaw}"` });
        return;
      }
      if (!UNIDADES_VALIDAS.includes(unidad)) {
        errores.push({ fila: numFila, ingrediente, problema: `unidad desconocida: "${unidad}" (v\xE1lidas: ${UNIDADES_VALIDAS.join(", ")})` });
        return;
      }
      filas.push({ ingrediente, unidad, precioMedio, nota });
    });
    return { filas, errores };
  }
  function redondear2(n) {
    return Math.round(n * 100) / 100;
  }
  function estimarCoste(lista, precios) {
    const porNombre = new Map(precios.map((p) => [normalizar5(p.ingrediente), p]));
    let total = 0;
    const porSeccion = {};
    const sinPrecio = [];
    for (const item of lista) {
      const precio = porNombre.get(normalizar5(item.ingrediente));
      if (!precio) {
        sinPrecio.push(item.ingrediente);
        continue;
      }
      let coste;
      if (precio.unidad === "kg") {
        coste = item.gramosTotales / 1e3 * precio.precioMedio;
      } else {
        const gramosPorUnidad = GRAMOS_POR_UNIDAD[normalizar5(item.ingrediente)];
        if (!gramosPorUnidad) {
          sinPrecio.push(item.ingrediente);
          continue;
        }
        coste = Math.ceil(item.gramosTotales / gramosPorUnidad) * precio.precioMedio;
      }
      total += coste;
      porSeccion[item.seccion] = (porSeccion[item.seccion] ?? 0) + coste;
    }
    for (const seccion of Object.keys(porSeccion)) {
      porSeccion[seccion] = redondear2(porSeccion[seccion]);
    }
    return { total: redondear2(total), porSeccion, sinPrecio };
  }

  // src/motor/contexto-dia.ts
  function contextoDiaPorDefecto() {
    return { turno: false, comidaFuera: false, microondas: false, taperFrio: false, comedor: false, tiempoCocina: "normal" };
  }
  var ETIQUETAS = [
    { clave: "turno", texto: "Guardia/turno" },
    { clave: "comidaFuera", texto: "Come fuera" },
    { clave: "microondas", texto: "Con microondas" },
    { clave: "taperFrio", texto: "T\xE1per fr\xEDo" },
    { clave: "comedor", texto: "Comedor/cantina" }
  ];
  function etiquetasContextoDia(contexto) {
    const etiquetas = ETIQUETAS.filter(({ clave }) => contexto[clave]).map(({ texto }) => texto);
    if (contexto.tiempoCocina !== "normal") {
      etiquetas.push(contexto.tiempoCocina === "poco" ? "Poco tiempo para cocinar" : "Le gusta cocinar");
    }
    return etiquetas;
  }

  // src/motor/calendario.ts
  var TIPOS_COMPETICION = [
    "carrera_10k",
    "media_maraton",
    "maraton",
    "trail_ultra",
    "triatlon_sprint",
    "triatlon_olimpico",
    "triatlon_medio",
    "triatlon_largo",
    "marcha_ciclista",
    "hyrox",
    "crossfit",
    "equipo",
    "categoria_peso",
    "otra"
  ];
  var NOMBRE_TIPO_COMPETICION = {
    carrera_10k: "Carrera hasta 10 km",
    media_maraton: "Media marat\xF3n",
    maraton: "Marat\xF3n",
    trail_ultra: "Trail o ultra",
    triatlon_sprint: "Triatl\xF3n sprint",
    triatlon_olimpico: "Triatl\xF3n ol\xEDmpico",
    triatlon_medio: "Triatl\xF3n medio",
    triatlon_largo: "Triatl\xF3n largo",
    marcha_ciclista: "Marcha ciclista",
    hyrox: "Hyrox",
    crossfit: "CrossFit (varios WOD)",
    equipo: "Partido de deporte de equipo",
    categoria_peso: "Deporte con categor\xEDa de peso",
    otra: "Otra"
  };
  var DURACION_PROPUESTA_MIN = {
    carrera_10k: 60,
    media_maraton: 120,
    maraton: 240,
    trail_ultra: 480,
    triatlon_sprint: 90,
    triatlon_olimpico: 150,
    triatlon_medio: 330,
    triatlon_largo: 720,
    marcha_ciclista: 300,
    hyrox: 90,
    crossfit: 20,
    equipo: 90,
    categoria_peso: 60,
    otra: 60
  };
  var MENSAJE_CATEGORIA_PESO = "En deportes con categor\xEDa de peso la app no calcula nada: el peso de competici\xF3n se lleva directamente con Pablo.";
  var OPCIONES_GELES = ["si", "no", "no_se"];
  var RE_FECHA = /^(\d{4})-(\d{2})-(\d{2})$/;
  var RE_HORA = /^([01]\d|2[0-3]):[0-5]\d$/;
  var MS_DIA = 864e5;
  function aUTC(fecha) {
    const m = RE_FECHA.exec(fecha);
    if (!m) return void 0;
    const [y, mo, d] = [Number(m[1]), Number(m[2]), Number(m[3])];
    const t = Date.UTC(y, mo - 1, d);
    const c = new Date(t);
    return c.getUTCFullYear() === y && c.getUTCMonth() === mo - 1 && c.getUTCDate() === d ? t : void 0;
  }
  function deUTC(t) {
    const c = new Date(t);
    return `${String(c.getUTCFullYear()).padStart(4, "0")}-${String(c.getUTCMonth() + 1).padStart(2, "0")}-${String(c.getUTCDate()).padStart(2, "0")}`;
  }
  function esFechaValida(fecha) {
    return aUTC(fecha) !== void 0;
  }
  function esHoraValida(hora) {
    return RE_HORA.test(hora);
  }
  function esLunes(fecha) {
    const t = aUTC(fecha);
    return t !== void 0 && new Date(t).getUTCDay() === 1;
  }
  function lunesDeLaSemana(fecha) {
    const t = aUTC(fecha);
    if (t === void 0) throw new Error(`Fecha no v\xE1lida: ${fecha}`);
    const desdeLunes = (new Date(t).getUTCDay() + 6) % 7;
    return deUTC(t - desdeLunes * MS_DIA);
  }
  function fechaDelDia(inicio, dia) {
    if (!esLunes(inicio)) throw new Error(`La fecha de inicio debe ser un lunes v\xE1lido (recibido: ${inicio})`);
    const i = DIAS.indexOf(dia);
    if (i < 0) throw new Error(`D\xEDa desconocido: ${dia}`);
    return deUTC(aUTC(inicio) + i * MS_DIA);
  }
  function diaDeLaFecha(inicio, fecha) {
    if (!esLunes(inicio)) return void 0;
    const t = aUTC(fecha);
    if (t === void 0) return void 0;
    const i = Math.round((t - aUTC(inicio)) / MS_DIA);
    return i >= 0 && i < DIAS.length ? DIAS[i] : void 0;
  }
  var MAX_DIAS_COMPETICION = 14;
  var MAX_DURACION_PRUEBA_MIN = 3 * 1440;
  var aMin = (hora) => Number(hora.slice(0, 2)) * 60 + Number(hora.slice(3, 5));
  function validarCompeticion(datos) {
    const nombre = (datos.nombre ?? "").trim();
    if (!nombre) return { ok: false, error: "Escribe el nombre de la competici\xF3n." };
    if (nombre.length > 80) return { ok: false, error: "El nombre es demasiado largo (m\xE1ximo 80 caracteres)." };
    if (!esFechaValida(datos.fecha ?? "")) return { ok: false, error: "Elige una fecha v\xE1lida para la competici\xF3n." };
    const tipo = (datos.tipo ?? "").trim() || "otra";
    if (!TIPOS_COMPETICION.includes(tipo)) return { ok: false, error: "Elige un tipo de competici\xF3n de la lista." };
    const usaGeles = (datos.usaGeles ?? "").trim() || "no_se";
    if (!OPCIONES_GELES.includes(usaGeles)) return { ok: false, error: "Indica si tomas geles: s\xED, no o no lo s\xE9." };
    let fechaFin = (datos.fechaFin ?? "").trim();
    const t0 = aUTC(datos.fecha);
    if (fechaFin) {
      const t1 = aUTC(fechaFin);
      if (t1 === void 0) return { ok: false, error: "La fecha de fin no es v\xE1lida." };
      if (t1 < t0) return { ok: false, error: "La fecha de fin no puede ser anterior a la de inicio." };
      if ((t1 - t0) / MS_DIA >= MAX_DIAS_COMPETICION) return { ok: false, error: `Una competici\xF3n no puede durar m\xE1s de ${MAX_DIAS_COMPETICION} d\xEDas.` };
      if (t1 === t0) fechaFin = "";
    }
    const comunes = { fecha: datos.fecha, tipo, usaGeles, ...fechaFin ? { fechaFin } : {} };
    const pruebasEntrada = datos.pruebas ?? [];
    if (pruebasEntrada.length) {
      const tFin = fechaFin ? aUTC(fechaFin) : t0;
      const pruebas = [];
      for (const [i, p] of pruebasEntrada.entries()) {
        const n = i + 1;
        if (!esHoraValida(p.hora ?? "")) return { ok: false, error: `La hora de la prueba ${n} debe tener el formato HH:MM.` };
        if (!Number.isInteger(p.duracionMin) || p.duracionMin <= 0) return { ok: false, error: `La duraci\xF3n de la prueba ${n} debe ser un n\xFAmero de minutos mayor que 0.` };
        if (p.duracionMin > MAX_DURACION_PRUEBA_MIN) return { ok: false, error: `La duraci\xF3n de la prueba ${n} es demasiado larga.` };
        const f2 = (p.fecha ?? "").trim();
        if (f2 && f2 !== datos.fecha) {
          const tf = aUTC(f2);
          if (tf === void 0 || tf < t0 || tf > tFin) return { ok: false, error: `El d\xEDa de la prueba ${n} debe estar dentro de la competici\xF3n.` };
        }
        pruebas.push({ hora: p.hora, duracionMin: p.duracionMin, ...f2 && f2 !== datos.fecha ? { fecha: f2 } : {} });
      }
      const absoluto = (p) => Math.round(((p.fecha ? aUTC(p.fecha) : t0) - t0) / MS_DIA) * 1440 + aMin(p.hora);
      pruebas.sort((a2, b) => absoluto(a2) - absoluto(b));
      for (let i = 1; i < pruebas.length; i++) {
        if (absoluto(pruebas[i]) < absoluto(pruebas[i - 1]) + pruebas[i - 1].duracionMin) {
          return { ok: false, error: `Las pruebas ${i} y ${i + 1} se solapan: la segunda empieza antes de que acabe la primera.` };
        }
      }
      return { ok: true, datos: { nombre, ...comunes, ...pruebas[0].fecha ? {} : { hora: pruebas[0].hora }, pruebas } };
    }
    const hora = (datos.hora ?? "").trim();
    if (hora && !esHoraValida(hora)) return { ok: false, error: "La hora debe tener el formato HH:MM (o d\xE9jala vac\xEDa)." };
    return { ok: true, datos: { nombre, ...comunes, ...hora ? { hora } : {} } };
  }
  function siguienteId(lista) {
    const max = lista.reduce((m, c) => Math.max(m, Number(c.id.replace(/^c/, "")) || 0), 0);
    return `c${max + 1}`;
  }
  function anadirCompeticion(lista, datos) {
    const v = validarCompeticion(datos);
    if (!v.ok) return v;
    return { ok: true, lista: ordenarCompeticiones([...lista, { id: siguienteId(lista), ...v.datos }]) };
  }
  function editarCompeticion(lista, id, datos) {
    if (!lista.some((c) => c.id === id)) return { ok: false, error: "Esa competici\xF3n ya no existe." };
    const v = validarCompeticion(datos);
    if (!v.ok) return v;
    return { ok: true, lista: ordenarCompeticiones(lista.map((c) => c.id === id ? { id, ...v.datos } : c)) };
  }
  function borrarCompeticion(lista, id) {
    return lista.filter((c) => c.id !== id);
  }
  function ordenarCompeticiones(lista) {
    return [...lista].sort((a2, b) => a2.fecha.localeCompare(b.fecha) || (a2.hora ?? "").localeCompare(b.hora ?? "") || a2.nombre.localeCompare(b.nombre));
  }
  function competicionesDelDia(lista, inicio, dia) {
    const fecha = fechaDelDia(inicio, dia);
    return ordenarCompeticiones(lista.filter((c) => c.fecha === fecha || c.fechaFin !== void 0 && c.fecha < fecha && fecha <= c.fechaFin));
  }
  function competicionesDesdeJson(valor) {
    if (!Array.isArray(valor)) return [];
    const resultado = [];
    for (const x of valor) {
      if (!x || typeof x !== "object") continue;
      const { id, nombre, fecha, hora, fechaFin, tipo, pruebas, usaGeles } = x;
      if (typeof id !== "string" || typeof nombre !== "string" || typeof fecha !== "string") continue;
      const texto = (v2) => typeof v2 === "string" ? v2 : void 0;
      const v = validarCompeticion({
        nombre,
        fecha,
        hora: texto(hora),
        fechaFin: texto(fechaFin),
        tipo: texto(tipo),
        usaGeles: texto(usaGeles),
        pruebas: Array.isArray(pruebas) ? pruebas.filter((p) => !!p && typeof p === "object").map((p) => ({
          hora: texto(p.hora) ?? "",
          duracionMin: Number(p.duracionMin),
          fecha: texto(p.fecha)
        })) : void 0
      });
      if (v.ok) resultado.push({ id, ...v.datos });
    }
    return ordenarCompeticiones(resultado);
  }
  function fechaLocalISO(fecha) {
    return `${String(fecha.getFullYear()).padStart(4, "0")}-${String(fecha.getMonth() + 1).padStart(2, "0")}-${String(fecha.getDate()).padStart(2, "0")}`;
  }

  // src/motor/ics.ts
  var ZONAS_ICS = [
    { id: "Europe/Madrid", nombre: "Pen\xEDnsula y Baleares (Europe/Madrid)" },
    { id: "Atlantic/Canary", nombre: "Canarias (Atlantic/Canary)" },
    { id: "flotante", nombre: "Hora local del dispositivo (sin zona fija)" }
  ];
  var DOMINIO_UID = "app-dietas.local";
  function slug(t) {
    return t.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "x";
  }
  function construirEventos(op) {
    if (!esLunes(op.inicio)) throw new Error("Para exportar hace falta haber elegido el lunes de inicio de la semana.");
    const quiere = new Set(op.categorias);
    const eventos = [];
    const omitidos = [];
    const vistos = /* @__PURE__ */ new Map();
    const uidUnico = (raiz) => {
      const n = (vistos.get(raiz) ?? 0) + 1;
      vistos.set(raiz, n);
      return `${raiz}${n > 1 ? `-${n}` : ""}@${DOMINIO_UID}`;
    };
    if (quiere.has("entrenos")) {
      for (const s of op.sesiones) {
        if (!s.hora) {
          omitidos.push(`Entreno del ${s.dia} sin hora indicada: no se exporta.`);
          continue;
        }
        const fecha = fechaDelDia(op.inicio, s.dia);
        eventos.push({
          uid: uidUnico(`entreno-${fecha}-${s.hora.replace(":", "")}`),
          categoria: "entrenos",
          titulo: "Entrenamiento",
          fecha,
          hora: s.hora,
          duracionMin: s.minutos,
          ...op.conDetalle ? { detalle: s.nota ? `${s.nombre} \xB7 ${s.nota}` : s.nombre } : {}
        });
      }
    }
    if (quiere.has("comidas")) {
      for (const c of op.comidas) {
        if (!c.hora) {
          omitidos.push(`${c.nombreFranja} del ${c.dia} sin hora indicada: no se exporta.`);
          continue;
        }
        const fecha = fechaDelDia(op.inicio, c.dia);
        eventos.push({
          uid: `comida-${fecha}-${slug(c.franja)}@${DOMINIO_UID}`,
          categoria: "comidas",
          titulo: c.nombreFranja,
          fecha,
          hora: c.hora,
          ...op.conDetalle && c.detalle ? { detalle: c.detalle } : {}
        });
      }
    }
    if (quiere.has("competiciones")) {
      for (const comp of op.competiciones) {
        const detalleComp = op.conDetalle && comp.tipo ? `${NOMBRE_TIPO_COMPETICION[comp.tipo ?? "otra"]}${comp.usaGeles === "si" ? " \xB7 con geles" : comp.usaGeles === "no" ? " \xB7 sin geles" : ""}` : void 0;
        if (comp.pruebas?.length) {
          comp.pruebas.forEach((p, i) => {
            eventos.push({
              uid: `competicion-${comp.id}${comp.pruebas.length > 1 ? `-p${i + 1}` : ""}@${DOMINIO_UID}`,
              categoria: "competiciones",
              titulo: `Competici\xF3n: ${comp.nombre}${comp.pruebas.length > 1 ? ` (prueba ${i + 1} de ${comp.pruebas.length})` : ""}`,
              fecha: p.fecha ?? comp.fecha,
              hora: p.hora,
              duracionMin: p.duracionMin,
              ...detalleComp ? { detalle: detalleComp } : {}
            });
          });
          continue;
        }
        eventos.push({
          uid: `competicion-${comp.id}@${DOMINIO_UID}`,
          categoria: "competiciones",
          titulo: `Competici\xF3n: ${comp.nombre}`,
          fecha: comp.fecha,
          ...comp.hora ? { hora: comp.hora } : {},
          ...comp.fechaFin && !comp.hora ? { fechaFin: comp.fechaFin } : {},
          ...detalleComp ? { detalle: detalleComp } : {}
        });
      }
      for (const x of op.extrasCompeticion ?? []) {
        eventos.push({ uid: `${x.uid}@${DOMINIO_UID}`, categoria: "competiciones", titulo: x.titulo, fecha: x.fecha, hora: x.hora, ...op.conDetalle && x.detalle ? { detalle: x.detalle } : {} });
      }
    }
    eventos.sort((a2, b) => a2.fecha.localeCompare(b.fecha) || (a2.hora ?? "").localeCompare(b.hora ?? "") || a2.uid.localeCompare(b.uid));
    return { eventos, omitidos };
  }
  function escaparTextoIcs(t) {
    return t.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "").replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\r\n|\r|\n/g, "\\n");
  }
  function plegarLineaIcs(linea) {
    const enc = new TextEncoder();
    const partes = [];
    let actual = "";
    let bytes = 0;
    let limite = 75;
    for (const ch of linea) {
      const n = enc.encode(ch).length;
      if (bytes + n > limite) {
        partes.push(actual);
        actual = "";
        bytes = 0;
        limite = 74;
      }
      actual += ch;
      bytes += n;
    }
    partes.push(actual);
    return partes.join("\r\n ");
  }
  function compactaFecha(f2) {
    return f2.replace(/-/g, "");
  }
  function compactaHora(h) {
    return `${h.replace(":", "")}00`;
  }
  function siguienteDia(f2) {
    const [y, m, d] = f2.split("-").map(Number);
    const t = new Date(Date.UTC(y, m - 1, d + 1));
    return `${t.getUTCFullYear()}-${String(t.getUTCMonth() + 1).padStart(2, "0")}-${String(t.getUTCDate()).padStart(2, "0")}`;
  }
  function dtstamp(ahora) {
    const p = (n, l = 2) => String(n).padStart(l, "0");
    return `${p(ahora.getUTCFullYear(), 4)}${p(ahora.getUTCMonth() + 1)}${p(ahora.getUTCDate())}T${p(ahora.getUTCHours())}${p(ahora.getUTCMinutes())}${p(ahora.getUTCSeconds())}Z`;
  }
  var VTIMEZONE = {
    "Europe/Madrid": [
      "BEGIN:VTIMEZONE",
      "TZID:Europe/Madrid",
      "BEGIN:STANDARD",
      "DTSTART:19701025T030000",
      "TZOFFSETFROM:+0200",
      "TZOFFSETTO:+0100",
      "TZNAME:CET",
      "RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU",
      "END:STANDARD",
      "BEGIN:DAYLIGHT",
      "DTSTART:19700329T020000",
      "TZOFFSETFROM:+0100",
      "TZOFFSETTO:+0200",
      "TZNAME:CEST",
      "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU",
      "END:DAYLIGHT",
      "END:VTIMEZONE"
    ],
    "Atlantic/Canary": [
      "BEGIN:VTIMEZONE",
      "TZID:Atlantic/Canary",
      "BEGIN:STANDARD",
      "DTSTART:19701025T020000",
      "TZOFFSETFROM:+0100",
      "TZOFFSETTO:+0000",
      "TZNAME:WET",
      "RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU",
      "END:STANDARD",
      "BEGIN:DAYLIGHT",
      "DTSTART:19700329T010000",
      "TZOFFSETFROM:+0000",
      "TZOFFSETTO:+0100",
      "TZNAME:WEST",
      "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU",
      "END:DAYLIGHT",
      "END:VTIMEZONE"
    ]
  };
  function lineasIcs(eventos, zona, ahora) {
    const lineas = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//app-dietas//demo de exportacion manual//ES", "CALSCALE:GREGORIAN", "METHOD:PUBLISH"];
    if (zona !== "flotante") lineas.push(...VTIMEZONE[zona]);
    const sello = dtstamp(ahora);
    for (const e of eventos) {
      lineas.push("BEGIN:VEVENT", `UID:${e.uid}`, `DTSTAMP:${sello}`);
      if (e.hora === void 0) {
        lineas.push(`DTSTART;VALUE=DATE:${compactaFecha(e.fecha)}`, `DTEND;VALUE=DATE:${compactaFecha(siguienteDia(e.fechaFin ?? e.fecha))}`);
      } else {
        const valor = `${compactaFecha(e.fecha)}T${compactaHora(e.hora)}`;
        lineas.push(zona === "flotante" ? `DTSTART:${valor}` : `DTSTART;TZID=${zona}:${valor}`);
        if (e.duracionMin !== void 0) lineas.push(`DURATION:PT${e.duracionMin}M`);
      }
      lineas.push(`SUMMARY:${escaparTextoIcs(e.titulo)}`);
      if (e.detalle) lineas.push(`DESCRIPTION:${escaparTextoIcs(e.detalle)}`);
      lineas.push("END:VEVENT");
    }
    lineas.push("END:VCALENDAR");
    return lineas;
  }
  function generarIcs(eventos, zona, ahora = /* @__PURE__ */ new Date()) {
    return lineasIcs(eventos, zona, ahora).map(plegarLineaIcs).join("\r\n") + "\r\n";
  }
  var aMinutos = (hora) => Number(hora.slice(0, 2)) * 60 + Number(hora.slice(3, 5));
  var deMinutos = (m) => `${String(Math.floor(m / 60) % 24).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
  function conflictosComidaEntreno(eventos) {
    const resultado = [];
    for (const entreno of eventos.filter((e) => e.categoria === "entrenos" && e.hora !== void 0 && e.duracionMin !== void 0)) {
      const inicio = aMinutos(entreno.hora);
      const fin = inicio + entreno.duracionMin;
      for (const comida of eventos.filter((e) => e.categoria === "comidas" && e.hora !== void 0 && e.fecha === entreno.fecha)) {
        const m = aMinutos(comida.hora);
        if (m >= inicio && m < fin) resultado.push({ comida, entreno, finEntreno: deMinutos(fin) });
      }
    }
    return resultado;
  }

  // src/motor/explicaciones.ts
  function f(x, decimales = 0) {
    const v = Math.round(x * 10 ** decimales) / 10 ** decimales;
    return String(v).replace(".", ",");
  }
  var NOMBRE_VIDA = {
    sedentaria: "sedentaria: trabajo sentado, menos de 5.000 pasos",
    ligera: "ligera: se mueve algo, 5.000-7.500 pasos",
    moderada: "moderada: de pie buena parte del d\xEDa, 7.500-10.000 pasos",
    alta: "alta: trabajo f\xEDsico, m\xE1s de 10.000 pasos",
    muy_alta: "muy alta: trabajo f\xEDsico muy duro"
  };
  var NOMBRE_DIA_LARGO = { L: "lunes", M: "martes", X: "mi\xE9rcoles", J: "jueves", V: "viernes", S: "s\xE1bado", D: "domingo" };
  var NOMBRE_OBJETIVO = {
    perder_grasa: "perder grasa",
    recomposicion: "recomposici\xF3n",
    mantener: "mantener el peso",
    ganar_musculo: "ganar m\xFAsculo"
  };
  function explicarEcuacion(plan, perfil) {
    const { ecuacion, kcal, valores } = plan.basal;
    const m = plan.detalle.basalMotivo;
    const entradas = `${perfil.sexo === "hombre" ? "hombre" : "mujer"}, ${perfil.edad} a\xF1os, ${f(perfil.peso, 1)} kg, ${f(perfil.altura, 1)} cm`;
    if (ecuacion === "mifflin") {
      const noCumple = [];
      if (m.sesionesNoSuaves < 3) noCumple.push(`necesita al menos 3 sesiones de entreno que no sean suaves (tienes ${m.sesionesNoSuaves})`);
      if (m.imc >= 30) noCumple.push(`IMC menor de 30 (el tuyo es ${f(m.imc, 1)})`);
      if (m.edad >= 50) noCumple.push(`menos de 50 a\xF1os (tienes ${m.edad})`);
      return {
        resumen: `Mifflin-St Jeor estima lo que gastas en reposo (sin moverte) a partir de tu edad, sexo, peso y talla: ${f(kcal)} kcal al d\xEDa.`,
        detalle: [
          `Datos usados: ${entradas}.`,
          noCumple.length ? `Se elige Mifflin, la ecuaci\xF3n general, porque no se cumple lo que pide Ten Haaf (la de deportistas): ${noCumple.join("; ")}.` : "Se elige Mifflin, la ecuaci\xF3n general.",
          ...valores.ten_haaf !== void 0 ? [`Para comparar, Ten Haaf habr\xEDa dado ${f(valores.ten_haaf)} kcal (no aplicable a tu perfil).`] : []
        ]
      };
    }
    if (ecuacion === "cunningham") {
      const mlg = perfil.grasa !== void 0 ? perfil.peso * (1 - perfil.grasa / 100) : void 0;
      return {
        resumen: `Cunningham estima tu gasto en reposo a partir de tu masa libre de grasa${mlg !== void 0 ? ` (${f(mlg, 1)} kg)` : ""}: ${f(kcal)} kcal al d\xEDa.`,
        detalle: [
          `Datos usados: ${entradas}${perfil.grasa !== void 0 ? `, ${f(perfil.grasa, 1)} % graso indicado` : ""}.`,
          `Cumples lo de deportista (al menos 3 sesiones que no son suaves, IMC menor de 30 y menos de 50 a\xF1os) y al conocer tu % graso se comparan Ten Haaf (${f(valores.ten_haaf ?? 0)} kcal) y Cunningham (${f(kcal)} kcal): se toma la m\xE1s prudente, es decir, la m\xE1s baja.`,
          `Para comparar, Mifflin habr\xEDa dado ${f(valores.mifflin ?? 0)} kcal.`
        ]
      };
    }
    return {
      resumen: `Ten Haaf estima tu gasto en reposo con una ecuaci\xF3n validada en deportistas: ${f(kcal)} kcal al d\xEDa.`,
      detalle: [
        `Datos usados: ${entradas}.`,
        `Se elige porque cumples lo de deportista: al menos 3 sesiones que no son suaves (tienes ${m.sesionesNoSuaves}), IMC menor de 30 (${f(m.imc, 1)}) y menos de 50 a\xF1os (${m.edad}).`,
        m.conGrasaMedida ? `Como conoces tu % graso se compar\xF3 con Cunningham (${f(valores.cunningham ?? 0)} kcal) y Ten Haaf sali\xF3 igual o m\xE1s baja, as\xED que se queda Ten Haaf.` : "Sin % graso medido no se puede usar Cunningham.",
        `Para comparar, Mifflin habr\xEDa dado ${f(valores.mifflin ?? 0)} kcal.`
      ]
    };
  }
  function lineasAjuste(plan) {
    const a2 = plan.detalle.ajuste;
    const obj = NOMBRE_OBJETIVO[a2.objetivo] ?? a2.objetivo;
    if (a2.objetivo === "mantener") return [`Objetivo \xAB${obj}\xBB: no se a\xF1ade ni se quita nada al gasto.`];
    if (a2.objetivo === "perder_grasa") {
      const l = [
        `Objetivo \xAB${obj}\xBB: d\xE9ficit de ${f(-a2.kcal)} kcal al d\xEDa. Sale del ritmo de ${f(a2.ritmoPct ?? 0, 2)} % del peso por semana: ritmo \xD7 peso \xD7 kcal por kg de peso perdido (${f(a2.densidadKcalKg ?? 0)} kcal/kg con ${f(a2.grasaPct ?? 0, 1)} % graso) \xF7 7 d\xEDas = ${f(a2.deficitRitmo ?? 0)} kcal/d\xEDa.`
      ];
      if (a2.topeAplicado) l.push(`Ese d\xE9ficit pasaba del tope de seguridad (${f((a2.topeFraccion ?? 0) * 100)} % del gasto medio), as\xED que se limit\xF3 a ${f(-a2.kcal)} kcal.`);
      else l.push(`Est\xE1 por debajo del tope de seguridad (${f((a2.topeFraccion ?? 0) * 100)} % del gasto medio).`);
      return l;
    }
    if (a2.objetivo === "recomposicion") return [`Objetivo \xAB${obj}\xBB: d\xE9ficit suave del ${f(a2.porcentaje ?? 0)} % del gasto medio = ${f(-a2.kcal)} kcal al d\xEDa.`];
    return [`Objetivo \xAB${obj}\xBB: super\xE1vit del ${f(a2.porcentaje ?? 0, 1)} % del gasto medio = ${f(a2.kcal)} kcal al d\xEDa.`];
  }
  function explicarKcalMedia(plan) {
    const d = plan.detalle;
    const diferencia = plan.kcalMedia - plan.gastoMedio;
    const sentido = diferencia < -0.5 ? "menos" : diferencia > 0.5 ? "m\xE1s" : "lo mismo";
    return {
      resumen: `Es la media de las kcal que se prescriben los 7 d\xEDas (${f(plan.kcalMedia)}): ${sentido === "lo mismo" ? "lo mismo que" : `${f(Math.abs(diferencia))} kcal ${sentido} que`} tu gasto medio estimado (${f(plan.gastoMedio)}).`,
      detalle: [
        `Diferencia entre las kcal prescritas y tu gasto medio: ${f(diferencia)} kcal/d\xEDa. Sale del ajuste de tu objetivo (${f(d.ajuste.kcal)} kcal/d\xEDa al calcular) m\xE1s el efecto de los l\xEDmites por d\xEDa y del redondeo.`,
        `Gasto de un d\xEDa sin entreno = gasto en reposo (${f(plan.basal.kcal)}) \xD7 actividad diaria ${f(d.pal, 2)} (${d.vidaSupuesta ? "no indicada: se supone sedentaria" : NOMBRE_VIDA[d.vida] ?? d.vida}) = ${f(d.gastoBase)} kcal.`,
        `Cada entreno suma solo el ${f((1 - d.compensacionEntreno) * 100)} % de lo que gasta, porque el cuerpo compensa el resto durante el d\xEDa.`,
        ...lineasAjuste(plan),
        `Despu\xE9s se aplican dos l\xEDmites por d\xEDa: ${d.oscilacion.modo === "compresion" ? `las diferencias entre d\xEDas se comprimen hasta ${f(d.oscilacion.maxKcal ?? 0)} kcal` : d.oscilacion.modo === "tope" ? `ning\xFAn d\xEDa se aleja m\xE1s de ${f(d.oscilacion.maxKcal ?? 0)} kcal de la media (tope de seguridad, provisional pendiente del OK de Pablo)` : "sin entrenos no hay diferencias entre d\xEDas que limitar"}, y el suelo de seguridad de ${f(d.suelo)} kcal.`,
        `Las cifras se redondean a decenas de kcal.`
      ]
    };
  }
  function explicarKcalDia(plan, dia) {
    const d = plan.detalle;
    const ajusteDia = dia.kcalSinLimites - dia.gasto;
    const nombre = NOMBRE_DIA_LARGO[dia.dia] ?? dia.dia;
    const detalle = [
      dia.kcalEntreno > 0 ? `Gasto del ${nombre} = ${f(d.gastoBase)} kcal de un d\xEDa sin entreno + el ${f((1 - d.compensacionEntreno) * 100)} % de lo que gasta el entreno (${f(dia.kcalEntreno)} kcal) = ${f(dia.gasto)} kcal.` : `Gasto del ${nombre} = ${f(d.gastoBase)} kcal de un d\xEDa sin entreno (no hay entreno ese d\xEDa) = ${f(dia.gasto)} kcal.`,
      Math.abs(ajusteDia) < 0.5 ? `Tu objetivo no a\xF1ade ni quita nada, as\xED que salen ${f(dia.kcalSinLimites)} kcal.` : `Con el ajuste del objetivo (${ajusteDia < 0 ? "d\xE9ficit" : "super\xE1vit"} de ${f(Math.abs(ajusteDia))} kcal) salen ${f(dia.kcalSinLimites)} kcal.`
    ];
    let resumen = `Las ${f(dia.kcal)} kcal del ${nombre} son lo que gastas ese d\xEDa (${f(dia.gasto)}) m\xE1s el ajuste de tu objetivo.`;
    if (dia.limitadoPor === "oscilacion") {
      resumen = `Las ${f(dia.kcal)} kcal del ${nombre} salen del gasto del d\xEDa y del objetivo, acercadas a la media de la semana por el l\xEDmite de oscilaci\xF3n.`;
      detalle.push(d.oscilacion.modo === "compresion" ? `Se aplic\xF3 el l\xEDmite de oscilaci\xF3n: las diferencias entre d\xEDas se comprimen para que no pasen de ${f(d.oscilacion.maxKcal ?? 0)} kcal. El c\xE1lculo daba ${f(dia.kcalSinLimites)} y se prescriben ${f(dia.kcal)}.` : `Se aplic\xF3 el tope de seguridad: ning\xFAn d\xEDa se aleja m\xE1s de ${f(d.oscilacion.maxKcal ?? 0)} kcal de la media de la semana (provisional pendiente del OK de Pablo). El c\xE1lculo daba ${f(dia.kcalSinLimites)} y se prescriben ${f(dia.kcal)}.`);
    } else if (dia.limitadoPor === "suelo") {
      resumen = `Las ${f(dia.kcal)} kcal del ${nombre} son el suelo de seguridad: el c\xE1lculo daba menos.`;
      detalle.push(`El c\xE1lculo daba ${f(dia.kcalSinLimites)} kcal, por debajo del suelo de ${f(d.suelo)} kcal: se prescribe el suelo y hay que revisarlo con Pablo antes de seguir.`);
    } else {
      detalle.push("Ning\xFAn l\xEDmite cambi\xF3 esta cifra (solo se redondea a decenas de kcal).");
    }
    return { resumen, detalle };
  }
  function explicarTipoDia(dia) {
    const [a2, b] = dia.hidratoRecomendadoGKg;
    const rango = `${a2}-${b} g/kg de hidrato`;
    const base = {
      carga_alta: `D\xEDa de carga alta: hay ${dia.minutosCarga} min de entreno de carga (intermitente o de resistencia), a partir de 180 min.`,
      duro: `D\xEDa duro: hay ${dia.minutosCarga} min de entreno de carga (intermitente o de resistencia), entre 60 y 179 min.`,
      suave: `D\xEDa suave: hay ${dia.minutosCarga} min de entreno de carga (intermitente o de resistencia), menos de 60 min.`,
      fuerza: "D\xEDa de fuerza: solo hay fuerza, que no cuenta como carga; reparte igual que un d\xEDa de descanso, pero se etiqueta para que se vea que la sesi\xF3n est\xE1 registrada.",
      descanso: "D\xEDa de descanso: no hay ning\xFAn entreno ese d\xEDa."
    };
    return {
      resumen: base[dia.tipo] ?? `D\xEDa ${dia.tipo}.`,
      detalle: [
        `El tipo de d\xEDa decide el rango recomendado de hidrato: ${rango} (datos/objetivos-por-dia.csv).`,
        `Hoy el plan da ${f(dia.hidratoGKg, 1)} g/kg.`
      ]
    };
  }
  function explicarProteina(plan, perfil) {
    const p = plan.proteina;
    const rama = plan.detalle.proteina.rama;
    const porQue = {
      deficit_magro: "En d\xE9ficit, con poca grasa corporal y entrenando, sube a 2,2 g/kg para proteger el m\xFAsculo.",
      deficit_deportista: "En d\xE9ficit y entrenando sube a 2,0 g/kg para proteger el m\xFAsculo.",
      deportista: "Entrenando de forma regular se usa 1,8 g/kg.",
      general: "Sin entreno regular se usa 1,6 g/kg, que tambi\xE9n es el suelo del m\xE9todo."
    };
    const ajustado = Math.abs(p.pesoReferencia - perfil.peso) > 0.05;
    return {
      resumen: `La prote\xEDna es la misma todos los d\xEDas: ${f(p.gKg, 1)} g por kg \xD7 ${f(p.pesoReferencia, 1)} kg de peso de referencia = ${f(p.gDia)} g.`,
      detalle: [
        porQue[rama],
        ajustado ? `El peso de referencia (${f(p.pesoReferencia, 1)} kg) es un peso ajustado, no tu peso real (${f(perfil.peso, 1)} kg), porque tu IMC es de 30 o m\xE1s (regla 16bis).` : "El peso de referencia es tu peso real.",
        `Por comida principal, el m\xE9todo recomienda entre ${f(p.porComidaG[0])} y ${f(p.porComidaG[1])} g (0,25-0,4 g/kg).`
      ]
    };
  }
  function explicarGrasa(plan, dia) {
    const g = plan.detalle.grasa;
    const kcalMediasBase = g.porKcalG * 9 / g.fraccion;
    return {
      resumen: `La grasa es la misma todos los d\xEDas: ${f(dia.grasaG)} g, ${g.aplicado === "kcal" ? `el ${f(g.fraccion * 100)} % de las kcal medias` : "el m\xEDnimo por peso, porque el porcentaje daba menos"}.`,
      detalle: [
        `Por porcentaje: ${f(g.fraccion * 100)} % de las kcal medias del plan (${f(kcalMediasBase)} kcal) \xF7 9 kcal por gramo = ${f(g.porKcalG)} g (${f(g.fraccion * 100)} % si entrenas con regularidad, 30 % si no).`,
        `M\xEDnimo por peso: 0,5 g \xD7 peso de referencia = ${f(g.minimoG)} g.`,
        `Se usa el mayor de los dos: ${g.aplicado === "kcal" ? "el porcentaje" : "el m\xEDnimo"}.`
      ]
    };
  }
  function explicarHidrato(plan, dia) {
    const [a2, b] = dia.hidratoRecomendadoGKg;
    const hayAviso = plan.avisos.some((x) => x.codigo === "hidrato_bajo" && x.texto.startsWith(dia.dia));
    const posicion = dia.hidratoGKg < a2 ? "por debajo de" : dia.hidratoGKg > b ? "por encima de" : "dentro de";
    return {
      resumen: `El hidrato es lo que queda de las kcal del d\xEDa tras la prote\xEDna y la grasa: (${f(dia.kcal)} \u2212 4 \xD7 ${f(dia.proteinaG)} \u2212 9 \xD7 ${f(dia.grasaG)}) \xF7 4 = ${f(dia.hidratoG)} g.`,
      detalle: [
        `Son ${f(dia.hidratoGKg, 1)} g por kg de peso.`,
        `Para un d\xEDa de tipo \xAB${dia.tipo}\xBB el rango recomendado es ${a2}-${b} g/kg: este d\xEDa queda ${posicion} ese rango.`,
        ...hayAviso ? ["Hay un aviso de hidrato bajo para este d\xEDa (ver Avisos): el plan no afirma que cumpla el rango."] : []
      ]
    };
  }
  var TEXTO_ROL = {
    PRE: "PRE: la comida principal que acaba entre 1,5 y 4 h antes del entreno, con m\xE1s hidrato (\xD71,6).",
    POST: "POST: la siguiente comida principal despu\xE9s del entreno (sin l\xEDmite de horas, decisi\xF3n de Pablo en #64), con m\xE1s hidrato (\xD71,4); no se crea una toma aparte; tambi\xE9n es el desayuno que empieza despu\xE9s de un entreno anterior a las 9:00 sin comida principal cerca.",
    toma_ligera_PRE: "Toma ligera antes del entreno: una media ma\xF1ana o merienda entre 0,5 y 1,5 h antes, con m\xE1s hidrato (\xD71,5).",
    PRE_POST_combinado: "PRE y POST a la vez: la misma comida cae antes de un entreno y despu\xE9s de otro, y lleva \xD72,2."
  };
  function explicarComida(franja, contexto) {
    const d = franja.detalle;
    const esPrincipal = d.proteinaTipo === "principal";
    const sinCarga = franja.rol === "normal" && (contexto.tipoDia === "descanso" || contexto.tipoDia === "fuerza");
    const lineas = [
      esPrincipal ? `Prote\xEDna (${f(franja.proteina)} g): las comidas principales (desayuno, comida y cena) se reparten la del d\xEDa (${f(contexto.proteinaDia)} g). La referencia orientativa es 0,25-0,4 g/kg por principal (hasta ${f(0.4 * contexto.pesoRef, 1)} g); no es un m\xE1ximo absoluto.` : `Prote\xEDna (${f(franja.proteina)} g): media ma\xF1ana y merienda se reparten lo que sobra tras las principales, con un tope de 25 g cada una.`,
      ...d.proteinaTopeSecundaria ? [esPrincipal ? `Las tomas secundarias (media ma\xF1ana y merienda) llegaron a su tope de 25 g y el sobrante volvi\xF3 a las comidas principales: por eso ${franja.proteina > 0.4 * contexto.pesoRef ? `esta principal pasa de los ${f(0.4 * contexto.pesoRef, 1)} g de referencia` : "esta principal lleva m\xE1s que sin ese tope"}.` : "Esta toma secundaria lleg\xF3 al tope de 25 g y el exceso se movi\xF3 a las comidas principales."] : [],
      `Hidrato (${f(franja.hidrato)} g): ${f(contexto.hidratoDia)} g del d\xEDa \xD7 (peso de la franja ${f(d.pesoBase)} \xD7 factor ${f(d.factor, 1)}) \xF7 ${f(d.sumaPesoContextual, 1)} (suma de pesos de las comidas del d\xEDa) = ${f(franja.hidrato)} g.`,
      franja.rol !== "normal" ? TEXTO_ROL[franja.rol] : sinCarga ? `Factor 1: ${contexto.tipoDia === "fuerza" ? "la fuerza sola no cuenta como entreno de carga" : "es un d\xEDa de descanso"}, as\xED que ninguna comida lleva multiplicador pre/post.` : "Factor 1: esta comida no cae en la ventana pre ni post de ning\xFAn entreno de carga.",
      `Grasa (${f(franja.grasa, 1)} g): reparto proporcional al peso de la franja (${f(d.pesoBase)} de ${f(d.sumaPesoBase)}).`,
      ...d.grasaTopeAplicado ? ["La grasa se limit\xF3 a 15 g porque es una toma de menos de 2 h antes de un entreno de carga (comodidad digestiva); el exceso pas\xF3 a otras comidas."] : [],
      ...d.grasaExcesoRecibido > 0 ? [`Recibe ${f(d.grasaExcesoRecibido, 1)} g de grasa que otra toma no pudo llevar por el tope pre-entreno.`] : [],
      "Par\xE1metros provisionales: los pesos por franja (25/5/35/5/30) y los factores pre/post est\xE1n pendientes de revisi\xF3n de Pablo (docs/reparto-comidas.md).",
      "Es el objetivo de la comida, no lo que lleva una receta: una receta de ejemplo puede tener otros macros; solo se ajusta su raci\xF3n para acercarse a las kcal."
    ];
    return {
      resumen: `Esta comida tiene un objetivo de unas ${f(franja.kcalAprox)} kcal (prote\xEDna + hidrato + grasa), repartido seg\xFAn la hora de tus comidas y entrenos.`,
      detalle: lineas
    };
  }
  function explicarRacion(datos) {
    const ideal = datos.kcalObjetivo / datos.kcalReceta;
    const dentro = ideal >= 0.8 && ideal <= 1.2;
    return {
      resumen: `La raci\xF3n (${f(datos.racion * 100)} %) es cu\xE1nto crecen o bajan solo la base (arroz, pasta, patata, pan, legumbre), la prote\xEDna y el aceite de la receta para acercarla a las kcal objetivo de esta comida: no baja de 80 % y ning\xFAn ingrediente pasa de su raci\xF3n normal. Verdura, cebolla, condimentos, fruta y l\xE1cteos se quedan en sus gramos.`,
      detalle: [
        `Objetivo de la comida ${f(datos.kcalObjetivo)} kcal \xF7 kcal de la receta base ${f(datos.kcalReceta)} = ${f(ideal * 100)} %.`,
        dentro ? `Est\xE1 dentro de 80-120 %, as\xED que se usa tal cual: ${f(datos.kcalResultante)} kcal.` : ideal > 1.2 ? datos.kcalResultante >= datos.kcalObjetivo * 0.97 ? `Pasa de 120 %, pero el plato escalado sigue dentro de los topes del m\xE9todo, as\xED que se sube hasta ${f(datos.racion * 100)} % y la receta aporta ${f(datos.kcalResultante)} kcal: llega al objetivo.` : `Queda fuera de 80-120 % y no se puede subir m\xE1s: se queda en ${f(datos.racion * 100)} % (pasar de ah\xED har\xEDa que un ingrediente pasara de su raci\xF3n normal) y la receta aporta ${f(datos.kcalResultante)} kcal: por debajo del objetivo (no llega a ${f(datos.kcalObjetivo)}). Faltan ${f(datos.kcalObjetivo - datos.kcalResultante)} kcal. No cabe en una raci\xF3n normal y no se infla nada: puedes repartir lo que falta en otra toma del d\xEDa, cerrar con un postre (fruta o yogur) o cambiar el plato.` : `Queda fuera de 80-120 %, as\xED que se limita a ${f(datos.racion * 100)} % y la receta aporta ${f(datos.kcalResultante)} kcal: por encima del objetivo (supera los ${f(datos.kcalObjetivo)} aunque es la raci\xF3n m\xEDnima).`,
        datos.protegidos && datos.protegidos.length ? `Entre los \xABprotegidos\xBB (fruta, yogur, caf\xE9, condimentos, ajo), que el m\xE9todo nunca reescala, aqu\xED ${datos.protegidos.join(", ")} mantiene${datos.protegidos.length > 1 ? "n" : ""} sus gramos base. Como no hay composici\xF3n nutricional fiable de la receta de ejemplo, ${f(datos.kcalResultante)} kcal es una cifra aproximada: no se asegura que la raci\xF3n alcance exactamente las kcal ni los macros del objetivo.` : "De los \xABprotegidos\xBB (fruta, yogur, caf\xE9, condimentos, ajo), que el m\xE9todo nunca reescala, en esta receta ninguno es de los \xABprotegidos\xBB; aun as\xED solo crecen la base, la prote\xEDna y el aceite, y las kcal son aproximadas.",
        "La receta es de EJEMPLO, no una receta real."
      ]
    };
  }
  function explicarCompra(ctx) {
    return {
      resumen: "Cada cantidad suma los gramos de ese ingrediente en las recetas de ejemplo de los d\xEDas elegidos, multiplicados por la raci\xF3n de cada comida, y se redondea hacia arriba para poder comprarla.",
      detalle: [
        `D\xEDas incluidos: ${ctx.dias}. Los d\xEDas sin marcar no entran ni en la lista ni en el coste.`,
        "Redondeo: carne y pescado de 50 en 50 g; el resto de 25 en 25 g; huevos en unidades de 50 g.",
        "Marcar \xABya en casa\xBB tacha el ingrediente pero no resta de lo que pide la dieta.",
        "El coste usa precios de EJEMPLO (datos/precios.csv) por kg o por unidad, sin ninguna tienda real; lo que no tiene precio queda fuera del total" + (ctx.sinPrecio ? ` (ahora ${ctx.sinPrecio} ingredientes).` : "."),
        ctx.huecos ? `Hay ${ctx.huecos} comidas sin receta de ejemplo: la lista es parcial y no incluye sus ingredientes.` : "Todas las comidas de los d\xEDas elegidos tienen receta de ejemplo."
      ]
    };
  }

  // src/motor/horario-dia.ts
  var ORDEN_FRANJAS = ["desayuno", "media_manana", "comida", "merienda", "cena"];
  var NOMBRE = {
    desayuno: "desayuno",
    media_manana: "media ma\xF1ana",
    comida: "comida",
    merienda: "merienda",
    cena: "cena"
  };
  function validarHorarioDia(franjas) {
    if (!franjas.length) return { ok: false, error: "Hace falta al menos una comida activa." };
    const vistas = /* @__PURE__ */ new Set();
    for (const f2 of franjas) {
      if (!ORDEN_FRANJAS.includes(f2.franja)) return { ok: false, error: `Comida desconocida: ${f2.franja}.` };
      if (vistas.has(f2.franja)) return { ok: false, error: `La ${NOMBRE[f2.franja]} est\xE1 repetida.` };
      vistas.add(f2.franja);
      if (f2.hora === void 0 || !Number.isFinite(f2.hora)) return { ok: false, error: `Indica la hora de la ${NOMBRE[f2.franja]}.` };
      if (f2.hora < 0 || f2.hora >= 24) return { ok: false, error: `La hora de la ${NOMBRE[f2.franja]} debe estar entre 00:00 y 23:59.` };
    }
    const ordenadas = [...franjas].sort((a2, b) => ORDEN_FRANJAS.indexOf(a2.franja) - ORDEN_FRANJAS.indexOf(b.franja));
    for (let i = 1; i < ordenadas.length; i++) {
      if (ordenadas[i].hora <= ordenadas[i - 1].hora) {
        return {
          ok: false,
          error: `La ${NOMBRE[ordenadas[i].franja]} tiene que ir despu\xE9s de la ${NOMBRE[ordenadas[i - 1].franja]} dentro del mismo d\xEDa. Una comida despu\xE9s de medianoche (por ejemplo, tras un turno de noche) todav\xEDa no se puede representar: el plan cuenta cada d\xEDa de 00:00 a 23:59.`
        };
      }
    }
    return { ok: true };
  }
  function sesionCruzaMedianoche(inicio, minutos) {
    return inicio + minutos / 60 > 24;
  }
  function horaDeGuardado(valor) {
    if (typeof valor === "number") {
      if (!Number.isFinite(valor) || valor < 0) return "";
      const total = Math.round(valor * 60);
      if (total >= 24 * 60) return "";
      return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
    }
    if (typeof valor === "string") {
      const m = /^(\d{1,2}):([0-5]\d)(?::[0-5]\d)?$/.exec(valor.trim());
      if (m && Number(m[1]) < 24) return `${m[1].padStart(2, "0")}:${m[2]}`;
    }
    return "";
  }

  // src/motor/detalle-comida.ts
  function ingredientesDeLaRacion(receta, racion, esProtegido2 = () => false) {
    if (!Number.isFinite(racion) || racion <= 0) {
      throw new Error(`Raci\xF3n inv\xE1lida para la receta ${receta.id}: ${racion} (debe ser un n\xFAmero mayor que 0)`);
    }
    return receta.ingredientes.map((i) => {
      const protegido = esProtegido2(i.nombre);
      return {
        nombre: i.nombre,
        gramosBase: i.gramos,
        gramosRacion: protegido ? i.gramos : Math.round(i.gramos * racion * 10) / 10,
        protegido
      };
    });
  }
  var ELABORACIONES_EJEMPLO = {
    r01: [
      "Corta las patatas en trozos y cu\xE9celas junto con las jud\xEDas verdes hasta que est\xE9n tiernas.",
      "Cocina el pollo a la plancha o al horno con el aceite de oliva.",
      "Sirve el pollo con las patatas y las jud\xEDas verdes."
    ],
    r02: [
      "Mezcla la avena con parte del pl\xE1tano machacado hasta formar una masa.",
      "Cocina la masa en una sart\xE9n antiadherente, por los dos lados, para hacer las tortitas.",
      "S\xEDrvelas con el yogur griego, el resto del pl\xE1tano en rodajas y la canela por encima."
    ],
    r03: [
      "Sirve el gazpacho fr\xEDo.",
      "A\xF1ade el at\xFAn en lata escurrido por encima."
    ],
    r04: [
      "Cuece el br\xF3coli al vapor o en agua hasta que est\xE9 tierno.",
      "Cocina la merluza a la plancha o al horno con el aceite de oliva.",
      "Sirve la merluza con el br\xF3coli."
    ],
    r05: [
      "Tuesta el pan.",
      "Cocina el huevo a la plancha o cocido.",
      "Machaca el aguacate sobre el pan tostado y coloca el huevo encima."
    ],
    r06: [
      "Pon el yogur griego en un bol.",
      "Trocea la manzana y a\xF1\xE1dela por encima."
    ],
    r07: [
      "Abre el pan.",
      "Rell\xE9nalo con el jam\xF3n cocido."
    ],
    r08: [
      "Corta el tomate en rodajas.",
      "Monta el bocadillo con el pan, la pechuga de pavo en embutido y el tomate."
    ],
    r09: [
      "Pela la naranja y sep\xE1rala en gajos.",
      "Acomp\xE1\xF1ala con las nueces."
    ],
    r10: [
      "Tuesta el pan.",
      "Ralla o trocea el tomate sobre la tostada.",
      "Termina con el aceite de oliva."
    ],
    r11: [
      "Lava y trocea las fresas.",
      "S\xEDrvelas sobre el queso fresco."
    ],
    r12: [
      "Sofr\xEDe el pimiento troceado con el aceite de oliva.",
      "A\xF1ade el pollo en dados y d\xF3ralo.",
      "Incorpora el arroz con agua y cu\xE9celo hasta que est\xE9 hecho."
    ],
    r13: [
      "Cuece la pasta seg\xFAn el tiempo del envase.",
      "Cocina el tomate troceado con el aceite de oliva.",
      "Mezcla el tomate con el at\xFAn en lata escurrido y la pasta."
    ],
    r14: [
      "Cuece la legumbre seca con la zanahoria y la patata troceadas hasta que est\xE9n tiernas.",
      "A\xF1ade el aceite de oliva al servir."
    ],
    r15: [
      "Hornea el boniato en trozos.",
      "Cocina el salm\xF3n a la plancha con parte del aceite de oliva.",
      "Saltea las espinacas con el resto del aceite y sirve todo junto."
    ],
    r16: [
      "Cuece el arroz.",
      "Cocina la ternera a la plancha con el aceite de oliva.",
      "Cuece las jud\xEDas verdes y sirve todo junto."
    ],
    r17: [
      "Cuece o fr\xEDe la patata en l\xE1minas con el aceite de oliva.",
      "Bate el huevo, m\xE9zclalo con la patata y cuaja la tortilla.",
      "S\xEDrvela con la lechuga."
    ],
    r18: [
      "Sofr\xEDe la cebolla con el aceite de oliva.",
      "A\xF1ade las espinacas y los garbanzos cocidos y cali\xE9ntalo unos minutos."
    ],
    r19: [
      "Cuece la quinoa.",
      "Cocina el pavo a la plancha con el aceite de oliva.",
      "Saltea el calabac\xEDn y sirve todo junto."
    ],
    r20: [
      "Corta la patata y el pimiento y col\xF3calos en una fuente de horno con el aceite de oliva.",
      "A\xF1ade la merluza y hornea hasta que est\xE9 hecha."
    ],
    r21: [
      "Cuece el huevo hasta que cuaje y trocea el pollo ya cocinado a la plancha.",
      "Monta los can\xF3nigos con el tomate en rodajas, el pollo y el huevo, y ali\xF1a con el aceite de oliva."
    ],
    r22: [
      "Cuece el calabac\xEDn troceado en agua hasta que est\xE9 tierno y trit\xFAralo hasta obtener una crema fina.",
      "Sirve la crema con el queso fresco desmenuzado por encima."
    ],
    r23: [
      "Corta el tomate y la cebolla en trozos peque\xF1os y m\xE9zclalos con el at\xFAn escurrido.",
      "Ali\xF1a con el aceite de oliva."
    ],
    r24: [
      "Cuece el pollo con la zanahoria, el puerro y las jud\xEDas verdes en agua hasta que todo est\xE9 tierno.",
      "Sirve caliente con parte del caldo."
    ],
    r25: [
      "Saltea el br\xF3coli, la zanahoria y las jud\xEDas verdes con el aceite de oliva hasta que est\xE9n tiernos.",
      "Sirve caliente."
    ],
    r26: [
      "Escurre la legumbre cocida y m\xE9zclala con el pimiento y la cebolla en trozos peque\xF1os.",
      "Ali\xF1a con el aceite de oliva y sirve templada."
    ],
    r27: [
      "Cuece el arroz y reserva.",
      "Saltea el calabac\xEDn y la zanahoria en tiras con el aceite de oliva y mezcla con el arroz."
    ],
    r28: [
      "Tritura el tomate con el aceite de oliva hasta obtener una crema espesa.",
      "Sirve fr\xEDa con el huevo cocido troceado por encima."
    ],
    r29: [
      "Cocina el pollo a la plancha con el aceite de oliva.",
      "Asa el pimiento en tiras y sirve junto al pollo."
    ],
    r30: [
      "Corta el calabac\xEDn en rodajas y col\xF3calo en una fuente de horno con el aceite de oliva.",
      "A\xF1ade la merluza y hornea hasta que est\xE9 hecha."
    ],
    r31: [
      "Sofr\xEDe la cebolla y la zanahoria con el aceite de oliva.",
      "A\xF1ade la ternera troceada, cubre con agua y cuece a fuego lento hasta que est\xE9 tierna."
    ],
    r32: [
      "Cocina el salm\xF3n a la plancha con el aceite de oliva.",
      "Saltea los esp\xE1rragos y sirve junto al salm\xF3n."
    ],
    r33: [
      "Calienta la legumbre cocida con la zanahoria y la cebolla troceadas y el aceite de oliva.",
      "Deja estofar unos minutos y sirve."
    ],
    r34: [
      "Saltea los champi\xF1ones laminados con el aceite de oliva.",
      "A\xF1ade los huevos batidos y remueve hasta que cuajen."
    ],
    r35: [
      "Cuece el arroz y reserva.",
      "Cocina el pavo troceado con el pimiento y el aceite de oliva y sirve sobre el arroz."
    ],
    r36: [
      "Forma una hamburguesa con la ternera y coc\xEDnala a la plancha con el aceite de oliva.",
      "Sirve con el tomate y la lechuga."
    ],
    r37: [
      "Sirve el yogur griego con las fresas troceadas."
    ],
    r38: [
      "Asa la manzana en el horno hasta que est\xE9 blanda y espolvorea la canela."
    ],
    r39: [
      "Sirve el queso fresco con las nueces troceadas por encima."
    ],
    r40: [
      "Cocina el pollo a la plancha y c\xF3rtalo en lonchas.",
      "Abre el pan y rell\xE9nalo con el pollo, el aguacate machacado y el tomate en rodajas."
    ],
    r41: [
      "Cuece la pasta y esc\xFArrela.",
      "M\xE9zclala con el at\xFAn escurrido y el aceite de oliva."
    ],
    r42: [
      "Cocina la ternera a la plancha en tiras.",
      "Rellena el pan con la ternera, el queso curado en l\xE1minas y el aguacate."
    ],
    r43: [
      "Sofr\xEDe el pollo troceado y el pimiento con el aceite de oliva.",
      "A\xF1ade el arroz y las jud\xEDas verdes, cubre con agua y cuece hasta que el arroz est\xE9 tierno."
    ]
  };
  function elaboracionEjemplo(recetaId) {
    return ELABORACIONES_EJEMPLO[recetaId];
  }

  // src/motor/catalogo-recetas.ts
  function normalizarBusqueda(texto) {
    return Array.from(texto.normalize("NFD")).filter((c) => c.codePointAt(0) < 768 || c.codePointAt(0) > 879).join("").toLowerCase().split(/[^a-z0-9ñ]+/).filter(Boolean).map(singular);
  }
  function singular(p) {
    if (p.length > 4 && p.endsWith("es")) return p.slice(0, -2);
    if (p.length > 3 && p.endsWith("s")) return p.slice(0, -1);
    return p;
  }
  function buscarRecetas(recetas, consulta) {
    const terminos = normalizarBusqueda(consulta);
    if (!terminos.length) return recetas;
    return recetas.filter((r) => {
      const palabras = [r.nombre, ...r.ingredientes.map((i) => i.nombre)].flatMap((t) => normalizarBusqueda(t));
      return terminos.every((t) => palabras.some((p) => p.startsWith(t)));
    });
  }
  function filtrarCatalogo(recetas, f2) {
    let lista = buscarRecetas(recetas, f2.consulta ?? "");
    if (f2.franja) lista = lista.filter((r) => r.franjas.includes(f2.franja));
    if (f2.soloFavoritas) {
      const fav = new Set(f2.favoritas ?? []);
      lista = lista.filter((r) => fav.has(r.id));
    }
    return lista;
  }
  function favoritasValidas(valor, recetas) {
    if (!Array.isArray(valor)) return [];
    const ids = new Set(recetas.map((r) => r.id));
    return Array.from(new Set(valor.filter((x) => typeof x === "string" && ids.has(x))));
  }
  function alternarFavorita(favoritas, id) {
    return favoritas.includes(id) ? favoritas.filter((x) => x !== id) : [...favoritas, id];
  }

  // src/motor/sustitucion-receta.ts
  var ROTULO_CAMBIO = { primero: "primero", segundo: "segundo", postre: "postre" };
  var claveSlot = (dia, franja) => `${dia}|${franja}`;
  function usosVariedadSemana(asignaciones, excluirClave) {
    const usos = {};
    for (const a2 of asignaciones) {
      if (!esFranjaConLimiteVariedad(a2.franja) || claveSlot(a2.dia, a2.franja) === excluirClave) continue;
      for (const id of a2.receta.split("+")) usos[id] = (usos[id] ?? 0) + 1;
    }
    return usos;
  }
  function evaluar(slot, r, o) {
    if (!r.franjas.includes(slot.franja)) return { receta: r, motivo: "no declara esta franja" };
    if (slot.sinFibraAlta && r.fibraAlta) return { receta: r, motivo: "la v\xEDspera de competici\xF3n se evita la fibra alta (legumbre, integral o verdura cruda)" };
    if (o.alergiasPreferencias) {
      const c = evaluarCompatibilidad(r, o.alergiasPreferencias);
      if (!c.compatible) return { receta: r, motivo: `no encaja con tus alergias/preferencias (${c.motivo?.detalle ?? "sin detalle"})` };
    }
    const max = o.maxRepeticionesSemana ?? 2;
    const usos = Math.max(...(r.platos ?? [r.id]).map((id) => o.usosSemana?.[id] ?? 0));
    if (esFranjaConLimiteVariedad(slot.franja) && usos >= max) {
      return { receta: r, motivo: `ya aparece ${usos} veces esta semana entre comidas y cenas (m\xE1ximo ${max}): un cambio crear\xEDa una tercera aparici\xF3n` };
    }
    const base = validarPlatoGenerado(slot.franja, r.ingredientes, { cargaAlta: slot.cargaAlta }).incumplimientos;
    if (base.length) return { receta: r, motivo: `no pasa el validador de platos (${base.join("; ")})` };
    const { factorRedondeado, kcalResultante, desviacion } = racionParaObjetivo(r, slot.kcalObjetivo, slot.franja, { cargaAlta: slot.cargaAlta });
    const { protegidos, incumplimientos } = incumplimientosRacion(slot.franja, r, factorRedondeado, { cargaAlta: slot.cargaAlta });
    if (incumplimientos.length) {
      return { receta: r, motivo: `con la raci\xF3n escalada al ${Math.round(factorRedondeado * 100)} % no pasa el validador de platos (${incumplimientos.join("; ")})` };
    }
    const avisos = [];
    if (desviacion > slot.kcalObjetivo * 0.1) {
      avisos.push(`se queda a ${desviacion} kcal del objetivo (${slot.kcalObjetivo}) aun subiendo o bajando la raci\xF3n todo lo que permiten los topes del m\xE9todo (no cabe en una raci\xF3n normal: reparte lo que falta con otras comidas, cierra con postre o cambia el plato)`);
    }
    if (protegidos.length && factorRedondeado !== 1) {
      avisos.push(`${protegidos.join(", ")} no se escala${protegidos.length > 1 ? "n" : ""} (protegido): las kcal y macros del plato son aproximados`);
    }
    return { receta: r, racionAjustada: factorRedondeado, kcalResultante, desviacion, protegidosSinEscalar: protegidos, avisos };
  }
  function alternativasParaSlot(slot, recetas, opciones = {}) {
    const alternativas = [];
    const descartadas = [];
    for (const r of recetas) {
      if (r.id === opciones.actual || r.tipoPlato && r.tipoPlato !== "unico") continue;
      const e = evaluar(slot, r, opciones);
      if ("motivo" in e) {
        if (e.motivo !== "no declara esta franja") descartadas.push(e);
      } else alternativas.push(e);
    }
    if (opciones.actual?.includes("+")) {
      const porId = new Map(recetas.map((r) => [r.id, r]));
      const actuales = opciones.actual.split("+").map((id) => porId.get(id));
      if (actuales.every(Boolean)) {
        const platos = actuales;
        platos.forEach((plato, i) => {
          for (const cand of recetas) {
            if (cand.tipoPlato !== plato.tipoPlato || platos.some((p) => p.id === cand.id)) continue;
            const nuevos = platos.map((p, j) => j === i ? cand : p);
            const primero = nuevos.find((p) => p.tipoPlato === "primero");
            const segundo = nuevos.find((p) => p.tipoPlato === "segundo");
            const compuesta = componerComida(nuevos);
            if (primero && segundo && !combinanBien(primero, segundo)) {
              descartadas.push({ receta: compuesta, motivo: "no combina con el resto de la comida (una sola base de hidrato y prote\xEDnas distintas)" });
              continue;
            }
            const e = evaluar(slot, compuesta, opciones);
            if ("motivo" in e) {
              descartadas.push(e);
              continue;
            }
            alternativas.push({ ...e, avisos: [`cambia solo el ${ROTULO_CAMBIO[plato.tipoPlato ?? ""] ?? "plato"} (${plato.nombre} \u2192 ${cand.nombre}) y conserva el resto`, ...e.avisos] });
          }
        });
      }
    }
    alternativas.sort((a2, b) => a2.desviacion - b.desviacion || a2.receta.id.localeCompare(b.receta.id));
    return { alternativas, descartadas };
  }
  function aplicarSustituciones(resultado, slots, recetas, sustituciones, opciones = {}) {
    let asignaciones = resultado.asignaciones.map((a2) => ({ ...a2 }));
    let huecos = resultado.huecos.map((h) => ({ ...h }));
    const avisos = [...resultado.avisos];
    const invalidadas = [];
    for (const [clave, recetaId] of Object.entries(sustituciones)) {
      const slot = slots.find((s) => claveSlot(s.dia, s.franja) === clave);
      const receta = recetaDeId(new Map(recetas.map((r) => [r.id, r])), recetaId);
      if (!slot) {
        invalidadas.push({ clave, recetaId, motivo: "esa comida ya no existe en tu plan" });
        continue;
      }
      if (!receta) {
        invalidadas.push({ clave, recetaId, motivo: "la receta ya no est\xE1 en el cat\xE1logo" });
        continue;
      }
      const usos = usosVariedadSemana(asignaciones, clave);
      const e = evaluar(slot, receta, { ...opciones, usosSemana: usos });
      if ("motivo" in e) {
        invalidadas.push({ clave, recetaId, motivo: e.motivo });
        continue;
      }
      const nueva = {
        dia: slot.dia,
        franja: slot.franja,
        receta: receta.id,
        racionAjustada: e.racionAjustada,
        kcalResultante: e.kcalResultante,
        ...e.protegidosSinEscalar.length ? { protegidosSinEscalar: e.protegidosSinEscalar } : {}
      };
      asignaciones = asignaciones.filter((a2) => claveSlot(a2.dia, a2.franja) !== clave);
      huecos = huecos.filter((h) => claveSlot(h.dia, h.franja) !== clave);
      asignaciones.push(nueva);
      for (const av of e.avisos) avisos.push(`${slot.dia} ${slot.franja}: "${receta.nombre}" ${av}.`);
    }
    const orden = new Map(slots.map((s, i) => [claveSlot(s.dia, s.franja), i]));
    asignaciones.sort((a2, b) => (orden.get(claveSlot(a2.dia, a2.franja)) ?? 0) - (orden.get(claveSlot(b.dia, b.franja)) ?? 0));
    huecos.sort((a2, b) => (orden.get(claveSlot(a2.dia, a2.franja)) ?? 0) - (orden.get(claveSlot(b.dia, b.franja)) ?? 0));
    return { resultado: { asignaciones, huecos, avisos }, invalidadas };
  }
  var RE_CLAVE_SLOT = /^[LMXJVSD]\|(desayuno|media_manana|comida|merienda|cena)$/;
  function sustitucionesDesdeJson(valor) {
    const resultado = {};
    if (!valor || typeof valor !== "object" || Array.isArray(valor)) return resultado;
    for (const [k, v] of Object.entries(valor)) {
      if (RE_CLAVE_SLOT.test(k) && typeof v === "string") resultado[k] = v;
    }
    return resultado;
  }

  // src/motor/portapapeles.ts
  async function copiarAlPortapapeles(texto, v\u00EDas) {
    if (v\u00EDas.clipboard && typeof v\u00EDas.clipboard.writeText === "function") {
      try {
        await v\u00EDas.clipboard.writeText(texto);
        return true;
      } catch {
        return false;
      }
    }
    if (v\u00EDas.copiarConTextarea) {
      try {
        return v\u00EDas.copiarConTextarea(texto) === true;
      } catch {
        return false;
      }
    }
    return false;
  }

  // src/motor/catalogo-ejemplo.ts
  var RECETAS_EJEMPLO_CSV = `id,nombre,franjas,kcal,proteina_g,grasa_g,hidrato_g,notas
r01,Pollo con patatas y jud\xEDas verdes,comida;cena,650,45,18,70,
r02,Tortitas de avena con yogur y pl\xE1tano,desayuno;media_manana;merienda,410,22,12,55,
r03,Gazpacho con at\xFAn,comida,380,28,14,32,liquido;fibraAlta
r04,Merluza con br\xF3coli,cena,480,40,14,18,
r05,Tostada con huevo y aguacate,desayuno,380,18,20,30,
r06,Yogur griego con manzana,media_manana;merienda,205,12,7,26,
r07,Pan con jam\xF3n cocido,desayuno;media_manana;merienda,200,13,3,30,
r08,Pan con pavo en lonchas y tomate,desayuno;media_manana;merienda,220,15,3,34,
r09,Fruta con frutos secos,media_manana;merienda,255,6,16,26,
r10,Tostada con tomate y aceite,desayuno;media_manana;merienda,250,6,10,34,
r11,Queso fresco con fresas,media_manana;merienda,175,15,5,16,
r12,Arroz con pollo y pimiento,comida;cena,910,65,24,104,
r13,Pasta con at\xFAn y tomate,comida,630,40,13,87,
r14,Lentejas con zanahoria y patata,comida,585,28,12,90,fibraAlta
r15,Salm\xF3n con boniato y espinacas,comida;cena,775,51,39,54,
r16,Ternera con arroz y jud\xEDas verdes,comida,855,50,31,88,
r17,Tortilla de patata con ensalada,comida;cena,555,25,30,46,fibraAlta
r18,Garbanzos con espinacas,comida;cena,515,25,19,60,fibraAlta
r19,Pavo con quinoa y calabac\xEDn,comida;cena,730,72,20,64,
r20,Merluza al horno con patata,comida;cena,555,54,15,48,
r21,Ensalada de can\xF3nigos con pollo y huevo duro,comida;cena,270,29,14,6,primero
r22,Crema de calabac\xEDn con queso fresco,comida;cena,110,8,5,8,primero
r23,Ensalada de tomate y at\xFAn,comida;cena,230,16,12,8,primero
r24,Sopa de pollo y verduras,comida;cena,190,20,6,12,primero
r25,Menestra de verduras al ajillo,comida;cena,150,5,8,13,primero
r26,Ensalada templada de garbanzos y pimiento,comida;cena,300,15,10,38,primero fibraAlta
r27,Arroz salteado con verduras,comida;cena,300,7,9,48,primero
r28,Salmorejo ligero con huevo,comida;cena,260,10,15,22,primero fibraAlta
r29,Pollo a la plancha con pimientos,comida;cena,340,46,14,9,segundo
r30,Merluza al horno con calabac\xEDn,comida;cena,300,40,12,8,segundo
r31,Ternera guisada con zanahoria y cebolla,comida;cena,360,38,18,12,segundo
r32,Salm\xF3n con esp\xE1rragos,comida;cena,420,36,28,6,segundo
r33,Lentejas estofadas con verduras,comida;cena,340,20,9,45,segundo fibraAlta
r34,Huevos revueltos con champi\xF1ones,comida;cena,300,20,23,4,segundo
r35,Pavo con arroz y pimiento,comida;cena,450,37,7,60,segundo
r36,Hamburguesa de ternera con tomate,comida;cena,360,32,22,8,segundo
r37,Yogur griego con fresas,comida;cena,130,11,4,12,postre
r38,Manzana asada con canela,comida;cena,100,1,0,24,postre
r39,Queso fresco con nueces,comida;cena,170,12,12,4,postre
r40,Bocadillo de pollo con aguacate,comida;cena,650,42,17,81,
r41,Pasta con at\xFAn y aceite de oliva,comida;cena,560,32,16,72,
r42,Wrap de ternera con queso curado y aguacate,comida;cena,700,45,34,54,
r43,Arroz caldoso de pollo y verduras,comida;cena,700,45,16,93,`;
  var RECETAS_EJEMPLO_INGREDIENTES_CSV = `receta_id,ingrediente,gramos
r01,pollo,300
r01,patata,200
r01,jud\xEDas verdes,150
r01,aceite de oliva,10
r02,avena,60
r02,yogur griego,200
r02,pl\xE1tano,120
r02,canela,2
r03,gazpacho,500
r03,at\xFAn en lata,100
r04,merluza,250
r04,br\xF3coli,200
r04,aceite de oliva,10
r05,pan,60
r05,huevo,100
r05,aguacate,80
r06,yogur griego,125
r06,manzana,150
r07,pan,60
r07,jam\xF3n cocido,40
r08,pan,60
r08,pechuga de pavo en embutido,50
r08,tomate,80
r09,naranja,200
r09,nueces,25
r10,pan,60
r10,tomate,100
r10,aceite de oliva,8
r11,queso fresco,125
r11,fresas,150
r12,arroz,120
r12,pollo,250
r12,pimiento,150
r12,aceite de oliva,15
r13,pasta,110
r13,at\xFAn en lata,100
r13,tomate,200
r13,aceite de oliva,10
r14,legumbre seca,100
r14,zanahoria,100
r14,patata,150
r14,aceite de oliva,10
r15,salm\xF3n,220
r15,boniato,250
r15,espinaca,120
r15,aceite de oliva,10
r16,ternera,200
r16,arroz,100
r16,jud\xEDas verdes,150
r16,aceite de oliva,10
r17,huevo,150
r17,patata,250
r17,lechuga,80
r17,aceite de oliva,15
r18,garbanzos cocidos,250
r18,espinaca,150
r18,cebolla,50
r18,aceite de oliva,12
r19,pavo,250
r19,quinoa,90
r19,calabac\xEDn,200
r19,aceite de oliva,10
r20,merluza,280
r20,patata,250
r20,pimiento,100
r20,aceite de oliva,12
r21,can\xF3nigos,80
r21,pollo,100
r21,huevo,50
r21,tomate,80
r21,aceite de oliva,8
r22,calabac\xEDn,200
r22,queso fresco,60
r23,tomate,150
r23,at\xFAn en lata,60
r23,cebolla,30
r23,aceite de oliva,8
r24,pollo,80
r24,zanahoria,100
r24,puerro,50
r24,jud\xEDas verdes,100
r25,br\xF3coli,120
r25,zanahoria,100
r25,jud\xEDas verdes,100
r25,aceite de oliva,8
r26,legumbre cocida,120
r26,pimiento,80
r26,cebolla,30
r26,aceite de oliva,8
r27,arroz,60
r27,calabac\xEDn,100
r27,zanahoria,80
r27,aceite de oliva,8
r28,tomate,250
r28,huevo,50
r28,aceite de oliva,10
r29,pollo,200
r29,pimiento,150
r29,aceite de oliva,8
r30,merluza,220
r30,calabac\xEDn,150
r30,aceite de oliva,10
r31,ternera,180
r31,zanahoria,100
r31,cebolla,50
r31,aceite de oliva,10
r32,salm\xF3n,180
r32,esp\xE1rragos,150
r32,aceite de oliva,5
r33,legumbre cocida,250
r33,zanahoria,60
r33,cebolla,40
r33,aceite de oliva,8
r34,huevo,150
r34,champi\xF1ones,150
r34,aceite de oliva,8
r35,pavo,160
r35,arroz,70
r35,pimiento,80
r35,aceite de oliva,6
r36,ternera,150
r36,tomate,100
r36,lechuga,60
r36,aceite de oliva,8
r37,yogur griego,125
r37,fresas,100
r38,manzana,180
r38,canela,2
r39,queso fresco,100
r39,nueces,15
r40,pan,150
r40,pollo,120
r40,aguacate,80
r40,tomate,50
r41,pasta,100
r41,at\xFAn en lata,80
r41,aceite de oliva,15
r42,pan,100
r42,ternera,120
r42,queso curado,40
r42,aguacate,50
r43,arroz,100
r43,pollo,150
r43,pimiento,100
r43,jud\xEDas verdes,100
r43,aceite de oliva,10`;

  // src/motor/nota-sesion.ts
  var LIMITE_NOTA = 120;
  function limpiarNotaSesion(valor) {
    if (typeof valor !== "string") return void 0;
    const t = valor.replace(/\s+/g, " ").trim().slice(0, LIMITE_NOTA);
    return t ? t : void 0;
  }
  var PIDE_INTERMITENTE = /metcon|\bwod\b|\bengine\b|amrap|emom|crossfit|hyrox|circuito/i;
  var PIDE_INTERVALOS = /intervalo|series|fartlek|cuestas|progresiv|\b\d+\s*[x×]\s*\d+/i;
  function avisoClasificacionSesion(nota, actividad) {
    const n = limpiarNotaSesion(nota);
    const a2 = ACTIVIDADES[actividad];
    if (!n || !a2) return void 0;
    const ritmoConstanteSuave = a2.tipo === "suave" || actividad === "correr_suave" || actividad === "correr_caminar";
    if (PIDE_INTERMITENTE.test(n) && a2.tipo !== "intermitente") {
      return `Tu nota (\xAB${n}\xBB) parece un circuito o esfuerzo por intervalos, pero la actividad elegida (\xAB${a2.nombre}\xBB) no se calcula as\xED. Revisa la actividad; la app no la cambia por su cuenta.`;
    }
    if (PIDE_INTERVALOS.test(n) && ritmoConstanteSuave) {
      return `Tu nota (\xAB${n}\xBB) parece tener intervalos o ritmos m\xE1s fuertes, pero la actividad elegida (\xAB${a2.nombre}\xBB) es de ritmo suave o constante. Revisa la actividad; la app no la cambia por su cuenta.`;
    }
    return void 0;
  }

  // src/motor/competicion-semana.ts
  var NOTA_PAUTA_ORIENTATIVA = "Pauta orientativa, pendiente de validar por Pablo.";
  var ETIQUETA_FASE = {
    descarga: "Descarga",
    previa: "Previa",
    carga: "Carga de hidratos",
    vispera: "V\xEDspera",
    competicion: "Competici\xF3n",
    recuperacion: "Recuperaci\xF3n"
  };
  var AVISO_DESCARGA = "Si bajas el entreno esta semana, actualiza tus sesiones y el plan se ajusta.";
  var UMBRAL_CARGA_COMPLETA_MIN = 150;
  var KCAL_POR_G_HIDRATO = 4;
  var MS_DIA2 = 864e5;
  var PRIORIDAD = { descarga: 0, previa: 1, recuperacion: 2, carga: 3, vispera: 4, competicion: 5 };
  var aUTC2 = (f2) => Date.UTC(Number(f2.slice(0, 4)), Number(f2.slice(5, 7)) - 1, Number(f2.slice(8, 10)));
  var diasEntre = (a2, b) => Math.round((aUTC2(b) - aUTC2(a2)) / MS_DIA2);
  var NOMBRE_DIA_SEMANA = ["domingo", "lunes", "martes", "mi\xE9rcoles", "jueves", "viernes", "s\xE1bado"];
  function perfilDeEsfuerzo(c) {
    if (!c.pruebas?.length) return { duracionMax: DURACION_PROPUESTA_MIN[c.tipo ?? "otra"], variasMismoDia: false };
    const porDia = /* @__PURE__ */ new Map();
    for (const p of c.pruebas) {
      const f2 = p.fecha ?? c.fecha;
      porDia.set(f2, (porDia.get(f2) ?? 0) + 1);
    }
    return { duracionMax: Math.max(...c.pruebas.map((p) => p.duracionMin)), variasMismoDia: [...porDia.values()].some((n) => n >= 2) };
  }
  function cargaDeHidratos(c) {
    if (c.tipo === "categoria_peso") return void 0;
    const { duracionMax, variasMismoDia } = perfilDeEsfuerzo(c);
    if (duracionMax > UMBRAL_CARGA_COMPLETA_MIN) return { diasPrevios: [2, 1], gKg: 10 };
    if (duracionMax >= 45 || variasMismoDia) return { diasPrevios: [1], gKg: 7 };
    return void 0;
  }
  function aplicarCompeticion(base, perfil, competiciones, inicio, hoy) {
    const avisos = [];
    const dias = [];
    const nuevosDias = [];
    let avisoDescargaDado = false;
    const mlg = perfil.grasa !== void 0 ? perfil.peso * (1 - perfil.grasa / 100) : void 0;
    for (const d of base.dias) {
      const fecha = fechaDelDia(inicio, d.dia);
      let fase;
      let nombre;
      let pausa = false;
      let minGKg = 0;
      let sinFibra = false;
      const motivos = [];
      for (const c of competiciones) {
        if (c.tipo === "categoria_peso") continue;
        const fin = c.fechaFin ?? c.fecha;
        const offset = fecha < c.fecha ? -diasEntre(fecha, c.fecha) : fecha > fin ? diasEntre(fin, fecha) : 0;
        if (offset < -6 || offset > 1) continue;
        const carga = cargaDeHidratos(c);
        let f2;
        if (offset === 0) f2 = "competicion";
        else if (offset === 1) f2 = "recuperacion";
        else if (offset === -1) f2 = "vispera";
        else if (offset === -2 && carga?.diasPrevios.includes(2)) f2 = "carga";
        else if (offset === -2) f2 = "previa";
        else f2 = "descarga";
        if (fase === void 0 || PRIORIDAD[f2] > PRIORIDAD[fase]) {
          fase = f2;
          nombre = c.nombre;
        }
        if (offset >= -3) pausa = true;
        if (carga && offset < 0 && carga.diasPrevios.includes(-offset)) {
          minGKg = Math.max(minGKg, carga.gKg);
          if (offset === -1) sinFibra = true;
        }
      }
      if (fase === void 0) {
        nuevosDias.push(d);
        dias.push({ dia: d.dia, deficitEnPausa: false, sinFibraAlta: false, kcalAntes: d.kcal, kcalDespues: d.kcal, hidratoAntes: d.hidratoG, hidratoDespues: d.hidratoG, motivos });
        continue;
      }
      let kcal = d.kcal;
      if (pausa && d.gasto - kcal >= 20) {
        kcal = d.gasto;
        motivos.push(`d\xE9ficit en pausa: comes lo que gastas (${d.gasto} kcal)`);
      }
      const base4 = 4 * d.proteinaG + 9 * d.grasaG;
      let hidrato = d.hidratoG;
      if (kcal !== d.kcal) hidrato = (kcal - base4) / KCAL_POR_G_HIDRATO;
      if (minGKg > 0) {
        const minimo = Math.ceil(minGKg * perfil.peso);
        if (hidrato < minimo) {
          kcal = base4 + KCAL_POR_G_HIDRATO * minimo;
          hidrato = minimo;
          motivos.push(`hidratos al m\xEDnimo de ${minGKg} g/kg (${minimo} g): suben las kcal lo mismo (4 kcal/g); prote\xEDna y grasa no cambian`);
        } else {
          motivos.push(`hidratos ya por encima del m\xEDnimo de ${minGKg} g/kg (${Math.ceil(minGKg * perfil.peso)} g)`);
        }
      }
      if (sinFibra) motivos.push("v\xEDspera con poca fibra: sin legumbre, integrales ni verdura cruda");
      if (fase === "descarga" && !avisoDescargaDado) {
        motivos.push(AVISO_DESCARGA);
        avisoDescargaDado = true;
      }
      if (fase === "competicion") motivos.push("d\xEDa de competici\xF3n");
      if (fase === "recuperacion") motivos.push("d\xEDa de recuperaci\xF3n; despu\xE9s vuelve el plan normal");
      const kcalFinal = Math.round(kcal);
      const hidratoFinal = kcalFinal === d.kcal && hidrato === d.hidratoG ? d.hidratoG : redondear(hidrato);
      const cambia = kcalFinal !== d.kcal || hidratoFinal !== d.hidratoG;
      nuevosDias.push(cambia ? {
        ...d,
        fase,
        kcal: kcalFinal,
        hidratoG: hidratoFinal,
        hidratoGKg: redondear(hidrato / perfil.peso, 1),
        ...mlg && d.disponibilidad !== void 0 ? { disponibilidad: redondear((kcalFinal - d.kcalEntreno) / mlg, 1) } : {}
      } : { ...d, fase });
      dias.push({
        dia: d.dia,
        fase,
        competicion: nombre,
        deficitEnPausa: pausa && kcalFinal !== d.kcal,
        ...minGKg ? { hidratoMinGKg: minGKg } : {},
        sinFibraAlta: sinFibra,
        kcalAntes: d.kcal,
        kcalDespues: kcalFinal,
        hidratoAntes: d.hidratoG,
        hidratoDespues: hidratoFinal,
        motivos
      });
    }
    const futuras = competiciones.filter((c) => hoy !== void 0 && c.tipo !== "categoria_peso" && diasEntre(hoy, c.fechaFin ?? c.fecha) >= 0 && diasEntre(hoy, c.fecha) <= 7).sort((a2, b) => a2.fecha.localeCompare(b.fecha));
    if (hoy !== void 0 && futuras.length) {
      const c = futuras[0];
      const faltan = Math.max(0, diasEntre(hoy, c.fecha));
      const diaSemana = NOMBRE_DIA_SEMANA[new Date(aUTC2(c.fecha)).getUTCDay()];
      avisos.push(faltan === 0 ? `Compites hoy: ${c.nombre}.` : `Compites el ${diaSemana}: faltan ${faltan} ${faltan === 1 ? "d\xEDa" : "d\xEDas"} (${c.nombre}).`);
    }
    const pesoCerca = competiciones.some((c) => c.tipo === "categoria_peso" && DIAS.some((dia) => {
      const f2 = fechaDelDia(inicio, dia);
      return f2 >= c.fecha && f2 <= (c.fechaFin ?? c.fecha);
    }));
    if (pesoCerca) avisos.push(MENSAJE_CATEGORIA_PESO);
    const activa = dias.some((x) => x.fase !== void 0);
    if (!activa) return { activa: false, plan: base, base, dias, avisos, notas: [] };
    const kcalMedia = redondear(nuevosDias.reduce((s, x) => s + x.kcal, 0) / nuevosDias.length);
    const plan = { ...base, dias: nuevosDias, kcalMedia, notas: [...base.notas, `Semana con competici\xF3n: ${NOTA_PAUTA_ORIENTATIVA}`] };
    return { activa, plan, base, dias, avisos, notas: [NOTA_PAUTA_ORIENTATIVA] };
  }

  // src/motor/dia-competicion.ts
  var NOTA_PAUTA = "Pauta orientativa, pendiente de validar por Pablo.";
  var aMinutos2 = (hora) => Number(hora.slice(0, 2)) * 60 + Number(hora.slice(3, 5));
  var aHoraTexto = (min) => {
    const m = (Math.round(min) % 1440 + 1440) % 1440;
    return `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
  };
  var GRAMOS_GEL = 25;
  var redondear3 = (x) => Math.round(x);
  var redondear1 = (x) => Math.round(x * 10) / 10;
  var esTriatlon = (c) => !!c.tipo && c.tipo.startsWith("triatlon");
  function tasaDuranteGH(duracionMin) {
    if (duracionMin < 45) return { obligatorio: false };
    if (duracionMin < 75) return { tasa: [15, 30], obligatorio: false, nota: "poca cantidad, opcional" };
    if (duracionMin <= 150) return { tasa: [30, 60], obligatorio: true };
    return { tasa: [60, 90], obligatorio: true, nota: "solo si lo has entrenado" };
  }
  function combustibleDe(c, n, p, peso, calor) {
    const { tasa, obligatorio, nota } = tasaDuranteGH(p.duracionMin);
    const horas = p.duracionMin / 60;
    const aguaL = [redondear1(0.4 * horas), redondear1(0.8 * horas)];
    const sodio = p.duracionMin > 120 || calor;
    const base = {
      prueba: n,
      duracionMin: p.duracionMin,
      hidratoGHora: tasa ?? [0, 0],
      hidratoG: [0, 0],
      obligatorio,
      aguaL,
      sodio,
      ...nota ? { nota } : {}
    };
    if (!tasa) return { ...base, nota: "menos de 45 min: no hace falta tomar nada durante la prueba; agua si la necesitas" };
    const total = [redondear3(tasa[0] * horas), redondear3(tasa[1] * horas)];
    base.hidratoG = total;
    if (c.usaGeles === "si") {
      const medio = (tasa[0] + tasa[1]) / 2;
      const cada = Math.max(10, Math.round(GRAMOS_GEL / medio * 60));
      const minutos = [];
      for (let m = 20; m < p.duracionMin - 10; m += cada) minutos.push(m);
      base.geles = { n: [redondear3(total[0] / GRAMOS_GEL), redondear3(total[1] / GRAMOS_GEL)], gramosPorGel: GRAMOS_GEL, minutos };
    } else if (c.usaGeles === "no") {
      base.alternativas = [
        `bebida isot\xF3nica (\u2248 6 g de hidratos por 100 ml): ${redondear3(total[0] / 0.06)}\u2013${redondear3(total[1] / 0.06)} ml en total`,
        `fruta (un pl\xE1tano mediano \u2248 25 g de hidratos): ${redondear3(total[0] / 25)}\u2013${redondear3(total[1] / 25)} unidades`,
        `gominolas (\u2248 75 g de hidratos por 100 g): ${redondear3(total[0] / 0.75)}\u2013${redondear3(total[1] / 0.75)} g`
      ];
    }
    if (esTriatlon(c)) base.nota = `${base.nota ? `${base.nota}; ` : ""}en triatl\xF3n se come y se bebe sobre todo en la bici; nada en el agua`;
    return base;
  }
  function planDiaCompeticion(c, fecha, peso, opciones = {}) {
    const delDia = (c.pruebas ?? []).filter((p) => (p.fecha ?? c.fecha) === fecha);
    if (!delDia.length || c.tipo === "categoria_peso") return void 0;
    const pruebas = delDia.map((p) => ({ inicio: aMinutos2(p.hora), duracionMin: p.duracionMin, fin: aMinutos2(p.hora) + p.duracionMin })).sort((a2, b) => a2.inicio - b.inicio);
    const salida = pruebas[0].inicio;
    const fin = pruebas[pruebas.length - 1].fin;
    const linea = [];
    const avisos = [];
    linea.push({
      minuto: -1,
      tipo: "vispera",
      titulo: "Hidrataci\xF3n",
      detalle: `Bebe a sorbos a lo largo del d\xEDa anterior.${salida < 9 * 60 ? " Salida antes de las 9:00: cena pronto." : ""}`
    });
    const objetivo = salida - 180;
    if (objetivo < 5 * 60) {
      linea.push({
        minuto: salida - 75,
        tipo: "ligera",
        titulo: "Toma ligera antes de salir",
        detalle: "Poca grasa y fibra, nada nuevo. Es lo que cabe con una salida tan temprana.",
        hidratoG: [redondear3(peso * 0.5), redondear3(peso * 1)]
      });
      avisos.push(`La salida es a las ${aHoraTexto(salida)}: no hay 2-3 h para una comida previa, as\xED que se propone una toma ligera 75 min antes.`);
    } else {
      linea.push({
        minuto: objetivo,
        tipo: "previa",
        titulo: "Comida previa (2-3 h antes de salir)",
        detalle: "Hidratos de siempre, poca grasa y fibra, nada nuevo.",
        hidratoG: [redondear3(peso * 1), redondear3(peso * 4)]
      });
    }
    const combustible = pruebas.map((p, i) => combustibleDe(c, i + 1, p, peso, !!opciones.calor));
    pruebas.forEach((p, i) => {
      const f2 = combustible[i];
      const detalleDurante = f2.hidratoG[1] > 0 ? `${f2.hidratoG[0]}\u2013${f2.hidratoG[1]} g de hidratos en total (${f2.hidratoGHora[0]}\u2013${f2.hidratoGHora[1]} g/h)${f2.nota ? ` \xB7 ${f2.nota}` : ""}. Agua: ${f2.aguaL[0]}\u2013${f2.aguaL[1]} L, sin beber de m\xE1s${f2.sodio ? "; con sodio" : ""}.` : `${f2.nota ?? "Nada obligatorio"}.`;
      linea.push({ minuto: p.inicio, tipo: "durante", titulo: pruebas.length > 1 ? `Prueba ${i + 1} (${p.duracionMin} min)` : `Prueba (${p.duracionMin} min)`, detalle: detalleDurante, ...f2.hidratoG[1] > 0 ? { hidratoG: f2.hidratoG } : {} });
      const sig = pruebas[i + 1];
      if (!sig) return;
      const hueco = sig.inicio - p.fin;
      if (hueco < 60) {
        linea.push({ minuto: p.fin, tipo: "entre", titulo: `Entre pruebas (${hueco} min)`, detalle: "Hidratos r\xE1pidos y agua.", hidratoG: [20, 30] });
      } else if (hueco <= 120) {
        linea.push({ minuto: p.fin, tipo: "entre", titulo: `Entre pruebas (${hueco} min)`, detalle: "Hidratos f\xE1ciles de digerir y algo de prote\xEDna.", hidratoG: [redondear3(peso * 0.5), redondear3(peso * 1)], proteinaG: [10, 20] });
      } else {
        linea.push({ minuto: p.fin, tipo: "entre", titulo: `Entre pruebas (${Math.floor(hueco / 60)} h ${hueco % 60} min)`, detalle: "Comida peque\xF1a, baja en grasa y fibra.", hidratoG: [redondear3(peso * 1), redondear3(peso * 1)], proteinaG: [redondear3(peso * 0.25), redondear3(peso * 0.25)] });
      }
    });
    linea.push({
      minuto: fin + 30,
      tipo: "recuperacion",
      titulo: "Despu\xE9s: recuperaci\xF3n",
      detalle: opciones.compiteAlDiaSiguiente ? "Compites ma\xF1ana: hidratos r\xE1pidos en la primera hora y la primera comida principal como recuperaci\xF3n." : "La primera comida principal es la de recuperaci\xF3n."
    });
    linea.sort((a2, b) => a2.minuto - b.minuto);
    return { fecha, nombre: c.nombre, pruebas, linea, combustible, avisos, nota: NOTA_PAUTA };
  }
  var FRACCION_LIGERA_MADRUGADA = 0.3;
  function reorganizarDia(habitual, salida, fin) {
    const orden = [...habitual].sort((a2, b) => a2.minuto - b.minuto);
    const salidas = [];
    const cambios = [];
    const avisos = [];
    const movidasDespues = [];
    const procesadas = /* @__PURE__ */ new Set();
    const mover = (t, motivo) => {
      salidas.push({ ...t, motivo });
      if (t.habitual === void 0 || t.minuto !== t.habitual) cambios.push({ franja: t.franja, de: t.habitual, a: t.minuto, motivo });
    };
    const objetivo = salida - 180;
    let minutoPrevia;
    if (objetivo < 5 * 60) {
      const fuente = orden[0];
      if (fuente) {
        mover({ franja: fuente.franja, habitual: fuente.minuto, minuto: salida - 75, rol: "ligera", fraccion: FRACCION_LIGERA_MADRUGADA }, "salida muy temprana: toma ligera 75 min antes, descontada de esa toma");
        avisos.push(`Salida a las ${aHoraTexto(salida)}: toma ligera ${aHoraTexto(salida - 75)} en vez de comida previa.`);
        minutoPrevia = salida - 75;
        procesadas.add(fuente);
        tratarResto(fuente, 1 - FRACCION_LIGERA_MADRUGADA);
      }
    } else if (orden.length) {
      const previa = orden.reduce((mejor, t) => Math.abs(t.minuto - objetivo) < Math.abs(mejor.minuto - objetivo) ? t : mejor, orden[0]);
      procesadas.add(previa);
      const valida = previa.minuto >= salida - 240 && previa.minuto <= salida - 120;
      const minuto = valida ? previa.minuto : objetivo;
      mover({ franja: previa.franja, habitual: previa.minuto, minuto, rol: "previa", fraccion: 1 }, valida ? "ya cae 2-4 h antes de la salida: no se mueve" : "comida previa 3 h antes de la salida");
      minutoPrevia = minuto;
      if (!previa.principal) avisos.push(`La comida previa es \xAB${previa.franja}\xBB reforzada: t\xF3mala como comida previa (hidratos de siempre, poca grasa y fibra).`);
    }
    const intermedias = orden.filter((t) => !procesadas.has(t) && minutoPrevia !== void 0 && t.minuto > minutoPrevia && t.minuto < salida);
    const ligeraRegla4 = intermedias.length ? intermedias[intermedias.length - 1] : void 0;
    for (const t of orden) {
      if (procesadas.has(t)) continue;
      procesadas.add(t);
      if (t === ligeraRegla4) {
        mover({ franja: t.franja, habitual: t.minuto, minuto: salida - 75, rol: "ligera", fraccion: 1 }, "entre la comida previa y la salida: pasa a toma ligera 75 min antes");
      } else if (intermedias.includes(t) || t.minuto >= salida && t.minuto < fin) {
        movidasDespues.push(t);
      } else {
        tratarResto(t, 1);
      }
    }
    function tratarResto(t, fraccion) {
      if (t.minuto >= salida && t.minuto < fin) {
        movidasDespues.push(t);
        t._f = fraccion;
        return;
      }
      if (t.minuto >= fin && t.minuto < fin + 30) {
        mover({ franja: t.franja, habitual: t.minuto, minuto: fin + 30, rol: "recuperacion", fraccion }, "coincid\xEDa con el final de la prueba: se retrasa 30 min");
        return;
      }
      salidas.push({ franja: t.franja, habitual: t.minuto, minuto: t.minuto, rol: "normal", fraccion });
    }
    const yaRecuperacion = salidas.some((s) => s.rol === "recuperacion");
    if (!yaRecuperacion) {
      const siguiente = orden.find((t) => t.principal && t.minuto >= fin && !movidasDespues.includes(t) && !salidas.some((s) => s.franja === t.franja && s.rol !== "normal"));
      if (siguiente && siguiente.minuto - fin <= 120) {
        const s = salidas.find((x) => x.franja === siguiente.franja);
        if (s) s.rol = "recuperacion", s.motivo = "es la siguiente comida principal y queda a 120 min o menos del final: hace de recuperaci\xF3n";
      } else if (movidasDespues.length) {
        const t = movidasDespues.shift();
        mover({ franja: t.franja, habitual: t.minuto, minuto: fin + 30, rol: "recuperacion", fraccion: t._f ?? 1 }, "toma de recuperaci\xF3n 30 min despu\xE9s de acabar, con la toma que se movi\xF3");
      } else {
        salidas.push({ franja: "recuperaci\xF3n", minuto: fin + 30, rol: "opcional", fraccion: 0, motivo: "la siguiente comida principal queda lejos: toma de recuperaci\xF3n opcional 30 min despu\xE9s de acabar" });
        avisos.push("La siguiente comida principal queda a m\xE1s de 2 h del final: toma de recuperaci\xF3n opcional.");
      }
    }
    for (const t of movidasDespues) {
      mover({ franja: t.franja, habitual: t.minuto, minuto: fin + 60, rol: "despues", fraccion: t._f ?? 1 }, "ca\xEDa dentro de la prueba: pasa a despu\xE9s");
    }
    salidas.sort((a2, b) => a2.minuto - b.minuto);
    return { tomas: salidas, cambios, avisos };
  }
  return __toCommonJS(motor_exports);
})();
