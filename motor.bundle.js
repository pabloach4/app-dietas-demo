"use strict";
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
    ACTIVIDAD_POR_TIPO: () => ACTIVIDAD_POR_TIPO,
    ACUSE_HAMBRE: () => ACUSE_HAMBRE,
    AVISO_DESCARGA: () => AVISO_DESCARGA,
    AVISO_ETIQUETA_GLUTEN: () => AVISO_ETIQUETA_GLUTEN,
    CADENA_TIPICA: () => CADENA_TIPICA,
    CLAVES_NUBE: () => CLAVES_NUBE,
    COMER_FUERA_CSV: () => COMER_FUERA_CSV,
    CONSEJOS_DERIVADO: () => CONSEJOS_DERIVADO,
    CONSERVACION_CSV: () => CONSERVACION_CSV,
    CORREO_PABLO: () => CORREO_PABLO,
    DEPORTES_PRINCIPALES: () => DEPORTES_PRINCIPALES,
    DIAS: () => DIAS,
    DIAS_AVISO_FIN: () => DIAS_AVISO_FIN,
    DIAS_CITA: () => DIAS_CITA,
    DURACION_PROPUESTA_MIN: () => DURACION_PROPUESTA_MIN,
    ELABORACIONES_EJEMPLO: () => ELABORACIONES_EJEMPLO,
    ENCIMAS_PAN: () => ENCIMAS_PAN,
    ETIQUETA_FASE: () => ETIQUETA_FASE,
    FACTOR_LEGUMBRE_COCIDA: () => FACTOR_LEGUMBRE_COCIDA,
    FILTROS_PERSONAS: () => FILTROS_PERSONAS,
    FRACCION_CENA_LIGERA: () => FRACCION_CENA_LIGERA,
    FRANJAS_CITA: () => FRANJAS_CITA,
    FRANJAS_CON_LIMITE_VARIEDAD: () => FRANJAS_CON_LIMITE_VARIEDAD,
    GLUTEN_CSV: () => GLUTEN_CSV,
    GRUPOS_VOLUMEN: () => GRUPOS_VOLUMEN,
    HORA_ENTRENO_NOCHE: () => HORA_ENTRENO_NOCHE,
    LIMITES_INGREDIENTES_CSV: () => LIMITES_INGREDIENTES_CSV,
    LIQUIDO_RECUPERACION_L_POR_KG: () => LIQUIDO_RECUPERACION_L_POR_KG,
    MAX_BAJADA_COMIDA: () => MAX_BAJADA_COMIDA,
    MAX_INSTANTANEA: () => MAX_INSTANTANEA,
    MAX_KG_PERDIDOS_CREIBLE: () => MAX_KG_PERDIDOS_CREIBLE,
    MAX_MOTIVO_CITA: () => MAX_MOTIVO_CITA,
    MAX_SUBIDA_COMIDA: () => MAX_SUBIDA_COMIDA,
    MEDIDAS_CASERAS_CSV: () => MEDIDAS_CASERAS_CSV,
    MENSAJE_CATEGORIA_PESO: () => MENSAJE_CATEGORIA_PESO,
    MENSAJE_CELIAQUIA_HOY: () => MENSAJE_CELIAQUIA_HOY,
    MENSAJE_CRIBADO_NEUTRO: () => MENSAJE_CRIBADO_NEUTRO,
    MENSAJE_CRIBADO_PRIORITARIO: () => MENSAJE_CRIBADO_PRIORITARIO,
    MENSAJE_DERIVACION_SALUD: () => MENSAJE_DERIVACION_SALUD,
    MENSAJE_LLANO_AVISOS: () => MENSAJE_LLANO_AVISOS,
    MENSAJE_SUELO: () => MENSAJE_SUELO,
    NOMBRE_TIPO_COMPETICION: () => NOMBRE_TIPO_COMPETICION,
    NOTA_PAUTA: () => NOTA_PAUTA,
    NOTA_PAUTA_ORIENTATIVA: () => NOTA_PAUTA_ORIENTATIVA,
    OPCIONES_GELES: () => OPCIONES_GELES,
    ORDEN_FRANJAS: () => ORDEN_FRANJAS,
    PAL_VIDA: () => PAL_VIDA,
    PRECIOS_CSV: () => PRECIOS_CSV,
    PREGUNTAS_CRIBADO: () => PREGUNTAS_CRIBADO,
    RACION_MAX: () => RACION_MAX,
    RACION_MIN: () => RACION_MIN,
    RECETAS_CATALOGO_CSV: () => RECETAS_CATALOGO_CSV,
    RECETAS_CATALOGO_INGREDIENTES_CSV: () => RECETAS_CATALOGO_INGREDIENTES_CSV,
    RECETAS_EJEMPLO_CSV: () => RECETAS_EJEMPLO_CSV,
    RECETAS_EJEMPLO_INGREDIENTES_CSV: () => RECETAS_EJEMPLO_INGREDIENTES_CSV,
    RESPALDO_MS: () => RESPALDO_MS,
    SEMANAS_MAX: () => SEMANAS_MAX,
    SEMANAS_MIN: () => SEMANAS_MIN,
    SEMANAS_POR_DEFECTO: () => SEMANAS_POR_DEFECTO,
    TEXTOS_LOGROS: () => TEXTOS_LOGROS,
    TEXTO_ALERTA_PERSONA: () => TEXTO_ALERTA_PERSONA,
    TEXTO_NIVEL: () => TEXTO_NIVEL,
    TEXTO_PLAN_PABLO: () => TEXTO_PLAN_PABLO,
    TIPOS_ALERTA: () => TIPOS_ALERTA,
    TIPOS_COMPETICION: () => TIPOS_COMPETICION,
    TOLERANCIA_DIA: () => TOLERANCIA_DIA,
    TOMA_AYUNAS: () => TOMA_AYUNAS,
    UMBRALES_FRENO: () => UMBRALES_FRENO,
    UMBRALES_LOGROS: () => UMBRALES_LOGROS,
    UMBRAL_FALTA_COMPETICION: () => UMBRAL_FALTA_COMPETICION,
    VECES_HAMBRE_ALERTA: () => VECES_HAMBRE_ALERTA,
    VERSION_CONSENTIMIENTO_NUBE: () => VERSION_CONSENTIMIENTO_NUBE,
    ZONAS_ICS: () => ZONAS_ICS,
    aHoraTexto: () => aHoraTexto,
    aMinutos: () => aMinutos2,
    accionReintentoNube: () => accionReintentoNube,
    actividadesDesconocidas: () => actividadesDesconocidas,
    acuseValoracion: () => acuseValoracion,
    adaptarNombresGluten: () => adaptarNombresGluten,
    adherenciaSemana: () => adherenciaSemana,
    agruparAvisosPorDia: () => agruparAvisosPorDia,
    agruparPorPersona: () => agruparPorPersona,
    alergiasPreferenciasDesdeTexto: () => alergiasPreferenciasDesdeTexto,
    alertaCeliaquia: () => alertaCeliaquia,
    alertaCita: () => alertaCita,
    alertaDerivacion: () => alertaDerivacion,
    alertaFreno: () => alertaFreno,
    alertaHambre: () => alertaHambre,
    alertaParaPablo: () => alertaParaPablo,
    alertaSuelo: () => alertaSuelo,
    alertasNuevas: () => alertasNuevas,
    alertasPorSubir: () => alertasPorSubir,
    alertasSinAtender: () => alertasSinAtender,
    alternarFavorita: () => alternarFavorita,
    alternativasParaSlot: () => alternativasParaSlot,
    anadirAlerta: () => anadirAlerta,
    anadirCompeticion: () => anadirCompeticion,
    aplicarCompeticion: () => aplicarCompeticion,
    aplicarSustituciones: () => aplicarSustituciones,
    aptitudCeliaca: () => aptitudCeliaca,
    apuntadoPorDia: () => apuntadoPorDia,
    asignarRecetas: () => asignarRecetas,
    avisoClasificacionSesion: () => avisoClasificacionSesion,
    avisoDietaTerminada: () => avisoDietaTerminada,
    avisoFinDeLaDieta: () => avisoFinDeLaDieta,
    avisoMoluscoSuelto: () => avisoMoluscoSuelto,
    avisoSoloPescado: () => avisoSoloPescado,
    avisosParaPersona: () => avisosParaPersona,
    avisosVolumen: () => avisosVolumen,
    bandaPesoServido: () => bandaPesoServido,
    borrarCompeticion: () => borrarCompeticion,
    buscarRecetas: () => buscarRecetas,
    calcular: () => calcular,
    calcularNiveles: () => calcularNiveles,
    cambiarHoraSesion: () => cambiarHoraSesion,
    cargaDeHidratos: () => cargaDeHidratos,
    categoriasDeTexto: () => categoriasDeTexto,
    choquesHorario: () => choquesHorario,
    cifraTipicaRestaurante: () => cifraTipicaRestaurante,
    claseGluten: () => claseGluten,
    clasificarAlerta: () => clasificarAlerta,
    claveSlot: () => claveSlot,
    coherenciaKcalMacros: () => coherenciaKcalMacros,
    coincideAlimento: () => coincideAlimento,
    combinarConRecetas: () => combinarConRecetas,
    comerFueraDesdeCsv: () => comerFueraDesdeCsv,
    comidasFueraPersona: () => comidasFueraPersona,
    competicionesDelDia: () => competicionesDelDia,
    competicionesDesdeJson: () => competicionesDesdeJson,
    componerComida: () => componerComida,
    compraDelPeriodo: () => compraDelPeriodo,
    comprobarComerFueraCsv: () => comprobarComerFueraCsv,
    comprobarConservacionCsv: () => comprobarConservacionCsv,
    comprobarGlutenCsv: () => comprobarGlutenCsv,
    comprobarLimitesIngredientesCsv: () => comprobarLimitesIngredientesCsv,
    comprobarMedidasCsv: () => comprobarMedidasCsv,
    comprobarPrecios: () => comprobarPrecios,
    conLimitesIngredientes: () => conLimitesIngredientes,
    conflictosComidaEntreno: () => conflictosComidaEntreno,
    conservacionDesdeCsv: () => conservacionDesdeCsv,
    construirEventos: () => construirEventos,
    contarPorEstado: () => contarPorEstado,
    contextoDiaPorDefecto: () => contextoDiaPorDefecto,
    copiarAlPortapapeles: () => copiarAlPortapapeles,
    correoCita: () => correoCita,
    correoValido: () => correoValido,
    crearSemana: () => crearSemana,
    csvPersonas: () => csvPersonas,
    cuadrarConComidaFuera: () => cuadrarConComidaFuera,
    cuadrarDias: () => cuadrarDias,
    deducirDeportePrincipal: () => deducirDeportePrincipal,
    definirParametrosReparto: () => definirParametrosReparto,
    definirRolIngrediente: () => definirRolIngrediente,
    definirTablaLimites: () => definirTablaLimites,
    densidadKcalG: () => densidadKcalG,
    deportePrincipal: () => deportePrincipal,
    desayunoCumple: () => desayunoCumple,
    descontarSobras: () => descontarSobras,
    descontarTomaPrevia: () => descontarTomaPrevia,
    deshacer: () => deshacer,
    diaDeLaFecha: () => diaDeLaFecha,
    diasConSuelo: () => diasConSuelo,
    editarCompeticion: () => editarCompeticion,
    elaboracionEjemplo: () => elaboracionEjemplo,
    encimasDe: () => encimasDe,
    enlaceCorreoPablo: () => enlaceCorreoPablo,
    entrenoNocheAntesDeCena: () => entrenoNocheAntesDeCena,
    esDesayunoDePan: () => esDesayunoDePan,
    esFechaValida: () => esFechaValida,
    esFranjaConLimiteVariedad: () => esFranjaConLimiteVariedad,
    esIngredienteProtegido: () => esIngredienteProtegido,
    esLunes: () => esLunes,
    esPlanPabloNuevo: () => esPlanPabloNuevo,
    escaparTextoIcs: () => escaparTextoIcs,
    estadoDeLaPreparada: () => estadoDeLaPreparada,
    estimarComidaFuera: () => estimarComidaFuera,
    estimarCoste: () => estimarCoste,
    etiquetaPlanPablo: () => etiquetaPlanPablo,
    etiquetasContextoDia: () => etiquetasContextoDia,
    evaluarCompatibilidad: () => evaluarCompatibilidad,
    evaluarCribado: () => evaluarCribado,
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
    faltaVisibleCompeticion: () => faltaVisibleCompeticion,
    favoritasValidas: () => favoritasValidas,
    fechaDelDia: () => fechaDelDia,
    fechaLocalISO: () => fechaLocalISO,
    filaAlerta: () => filaAlerta,
    filaPlanPablo: () => filaPlanPablo,
    filtrarAlertas: () => filtrarAlertas,
    filtrarCatalogo: () => filtrarCatalogo,
    filtrarPersonas: () => filtrarPersonas,
    filtrarPorDias: () => filtrarPorDias,
    finDeLaDieta: () => finDeLaDieta,
    finUltimaPruebaH: () => finUltimaPruebaH,
    firmaPlan: () => firmaPlan,
    formatearListaPendiente: () => formatearListaPendiente,
    frenoBajoPeso: () => frenoBajoPeso,
    frenoLogros: () => frenoLogros,
    gastoDePrueba: () => gastoDePrueba,
    generarIcs: () => generarIcs,
    generarListaCompra: () => generarListaCompra,
    glutenDesdeCsv: () => glutenDesdeCsv,
    grupoDeFranja: () => grupoDeFranja,
    hambreCenaValida: () => hambreCenaValida,
    hambresDeLaSemana: () => hambresDeLaSemana,
    historialPlanes: () => historialPlanes,
    horaDeGuardado: () => horaDeGuardado,
    idAlerta: () => idAlerta,
    ingredientesDeLaRacion: () => ingredientesDeLaRacion,
    inicioDeLaSiguiente: () => inicioDeLaSiguiente,
    instantaneaLocal: () => instantaneaLocal,
    itemDesdeGramos: () => itemDesdeGramos,
    kcalConRacion: () => kcalConRacion,
    leerEvitados: () => leerEvitados,
    limiteFibraG: () => limiteFibraG,
    limitesIngredientesDesdeCsv: () => limitesIngredientesDesdeCsv,
    limpiarCodigoTotp: () => limpiarCodigoTotp,
    limpiarNotaSesion: () => limpiarNotaSesion,
    lineasAlertasPersona: () => lineasAlertasPersona,
    lineasIcs: () => lineasIcs,
    liquidoRecuperacion: () => liquidoRecuperacion,
    listaManualDesdeJson: () => listaManualDesdeJson,
    lunesDe: () => lunesDe,
    lunesDeLaSemana: () => lunesDeLaSemana,
    lunesDelInicio: () => lunesDelInicio,
    macrosConRacion: () => macrosConRacion,
    marcarYaEnCasa: () => marcarYaEnCasa,
    medallasDia: () => medallasDia,
    medallasNuevas: () => medallasNuevas,
    medidaCasera: () => medidaCasera,
    medidasDesdeCsv: () => medidasDesdeCsv,
    mezclarAlerta: () => mezclarAlerta,
    motivosAlerta: () => motivosAlerta,
    moverSesion: () => moverSesion,
    necesitaVentanaNube: () => necesitaVentanaNube,
    nivelVolumenCena: () => nivelVolumenCena,
    noSeReescala: () => noSeReescala,
    normalizarBusqueda: () => normalizarBusqueda,
    normalizarSobras: () => normalizarSobras,
    normalizarTexto: () => normalizarTexto2,
    nubeOfrecida: () => nubeOfrecida,
    ordenarCompeticiones: () => ordenarCompeticiones,
    parsearParametrosCSV: () => parsearParametrosCSV,
    parsearPrecios: () => parsearPrecios,
    parsearRecetas: () => parsearRecetas,
    parsearTablaLimites: () => parsearTablaLimites,
    pasoDosPasos: () => pasoDosPasos,
    perfilDesdeCuestionario: () => perfilDesdeCuestionario,
    pesoCocido: () => pesoCocido,
    pesoServido: () => pesoServido,
    planDiaCompeticion: () => planDiaCompeticion,
    planPabloAplicable: () => planPabloAplicable,
    plegarLineaIcs: () => plegarLineaIcs,
    preferenciaDesayunoValida: () => preferenciaDesayunoValida,
    racionEnPalabras: () => racionEnPalabras,
    racionRealistaMinima: () => racionRealistaMinima,
    raizAlimento: () => raizAlimento,
    recetaDeId: () => recetaDeId,
    recetasCompuestas: () => recetasCompuestas,
    recetasParaDerivado: () => recetasParaDerivado,
    reorganizarDia: () => reorganizarDia,
    repartirComidas: () => repartirComidas,
    restriccionesComoApp: () => restriccionesComoApp,
    resultadoBorradoNube: () => resultadoBorradoNube,
    resumenCincoSemanas: () => resumenCincoSemanas,
    resumenPersonas: () => resumenPersonas,
    resumenSemana: () => resumenSemana,
    revisarPlanPablo: () => revisarPlanPablo,
    revisarSiguienteGuardada: () => revisarSiguienteGuardada,
    rolIngrediente: () => rolIngrediente,
    semanaDeLaDieta: () => semanaDeLaDieta,
    semanasValidas: () => semanasValidas,
    sesionCruzaMedianoche: () => sesionCruzaMedianoche,
    sinFilaDeGluten: () => sinFilaDeGluten,
    sustitucionesDesdeJson: () => sustitucionesDesdeJson,
    textoCita: () => textoCita,
    textoLlegaAPablo: () => textoLlegaAPablo,
    textoNotificacion: () => textoNotificacion,
    textoOtrasAlergias: () => textoOtrasAlergias,
    tipoDeSesion: () => tipoDeSesion,
    tituloCentro: () => tituloCentro,
    totalesPorDia: () => totalesPorDia,
    usosVariedadSemana: () => usosVariedadSemana,
    validarCasilla: () => validarCasilla,
    validarCompeticion: () => validarCompeticion,
    validarHorarioDia: () => validarHorarioDia,
    validarPeticionSiOSi: () => validarPeticionSiOSi,
    validarPlato: () => validarPlato,
    validarPlatoGenerado: () => validarPlatoGenerado,
    validarReceta: () => validarReceta,
    whatsappPablo: () => whatsappPablo
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
  var TOPE_DEFICIT_ENTRENO = 0.25;
  var TOPE_DEFICIT_ENTRENO_KCAL = 500;
  var RECOMPOSICION_DEFICIT = 0.05;
  var SUPERAVIT_POR_DEFECTO = 7.5;
  var COMPENSACION_ENTRENO = 0.28;
  var SUELO_PROTEINA_G_KG = 1.6;
  var OSCILACION_CORDURA = 300;
  var OSCILACION_MAX_POR_DEFECTO = 500;
  var UMBRAL_DIA_MUY_ALTO_KCAL = 1e3;
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
    return valores.map((v) => media + Math.max(-max, v - media));
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
      const entrena = sesiones.length > 0;
      const topeFraccion = entrena ? TOPE_DEFICIT_ENTRENO : TOPE_DEFICIT[categoria];
      const tope = entrena ? Math.min(topeFraccion * gastoMedio, TOPE_DEFICIT_ENTRENO_KCAL) : topeFraccion * gastoMedio;
      const deficit = Math.min(deficitRitmo, tope);
      if (deficit < deficitRitmo) {
        notas.push(`El ritmo de ${ritmo} %/semana ped\xEDa ${redondear(deficitRitmo)} kcal de d\xE9ficit; se limita al ${topeFraccion * 100} % del gasto${entrena ? ` sin pasar de ${TOPE_DEFICIT_ENTRENO_KCAL} kcal (entrena)` : ""}.`);
      }
      if (ritmo > 1) aviso("ritmo_alto", "M\xE1s del 1 % del peso por semana: por encima de lo recomendado sin supervisi\xF3n.");
      ajuste = -deficit;
      Object.assign(trazaAjuste, { ritmoPct: ritmo, deficitRitmo: redondear(deficitRitmo), topeFraccion, ...entrena ? { topeKcal: TOPE_DEFICIT_ENTRENO_KCAL } : {}, topeAplicado: deficit < deficitRitmo });
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
    if (max === null && sesiones.length > 0) {
      kcalDias.forEach((k, i) => {
        const sobre = k - kcalMedia;
        if (sobre <= UMBRAL_DIA_MUY_ALTO_KCAL) return;
        const delDia = sesiones.filter((s) => s.dia === DIAS[i] && porDia[i].kcalEntreno > 0);
        const nombres = delDia.map((s) => `${ACTIVIDADES[s.actividad].nombre} ${s.minutos}'`).join(" + ");
        if (delDia.length) {
          aviso("dia_muy_alto", `${DIAS[i]}: ${k} kcal, unas ${Math.round(sobre / 10) * 10} m\xE1s que la media de la semana. Lo explica el entreno de ese d\xEDa (${nombres}); es normal en una sesi\xF3n larga.`);
        } else {
          aviso("revisar_con_pablo", `${DIAS[i]}: ${k} kcal, unas ${Math.round(sobre / 10) * 10} m\xE1s que la media de la semana y ning\xFAn entreno lo explica. Revisar con Pablo antes de seguir.`);
        }
      });
    }
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
    const grasaParaMlg = p.grasa ?? grasaPct;
    const mlg = p.peso * (1 - grasaParaMlg / 100);
    const mlgEstimado = p.grasa === void 0;
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
        disponibilidad: redondear((kcal - d.kcalEntreno) / mlg, 1),
        ...mlgEstimado ? { disponibilidadEstimada: true } : {}
      };
    });
    {
      const minima = Math.min(...dias.map((d) => d.disponibilidad ?? Infinity));
      if (minima < 30) {
        if (mlgEstimado) aviso("disponibilidad_baja_estimada", `Disponibilidad energ\xE9tica m\xEDnima ESTIMADA de ${minima} kcal/kg de masa libre de grasa (<30), calculada con un % graso estimado, no medido: es orientativa. Puede que comas poco para lo que entrenas (IOC 2023); vigila cansancio, rendimiento, sue\xF1o y regla, y com\xE9ntalo con Pablo.`);
        else aviso("disponibilidad_baja", `Disponibilidad energ\xE9tica m\xEDnima de ${minima} kcal/kg de masa libre de grasa (<30): riesgo de REDs (IOC 2023). Vigilar cansancio, rendimiento, sue\xF1o y regla.`);
      } else if (objetivo !== "perder_grasa" && minima < 45) {
        const para = { mantener: "mantener el peso o mejorar el rendimiento", ganar_musculo: "ganar m\xFAsculo", recomposicion: "la recomposici\xF3n", perder_grasa: "perder grasa" }[objetivo];
        notas.push(`Disponibilidad energ\xE9tica m\xEDnima ${mlgEstimado ? "ESTIMADA (con % graso estimado) " : ""}de ${minima} (<45): reducida para ${para} (IOC 2023).`);
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

  // src/motor/cribado-energia.ts
  var NO = { valor: "no", etiqueta: "No" };
  var SI = { valor: "si", etiqueta: "S\xED" };
  var NO_SE = { valor: "nolose", etiqueta: "No lo s\xE9" };
  var PREFIERO_NO = { valor: "prefiero", etiqueta: "Prefiero no responder" };
  var PREGUNTAS_CRIBADO = [
    { n: 1, texto: "En los \xFAltimos 3 meses, \xBFhas perdido peso sin propon\xE9rtelo?", opciones: [NO, SI, NO_SE, PREFIERO_NO], dispara: ["si"], se\u00F1al: "P\xE9rdida de peso sin propon\xE9rselo en los \xFAltimos 3 meses" },
    {
      n: 2,
      texto: "En las \xFAltimas 4 semanas, \xBFhas comido bastante menos de lo que necesitabas, te has saltado comidas o has entrenado sin comer para bajar peso o grasa?",
      opciones: [NO, { valor: "alguna", etiqueta: "S\xED, alguna vez" }, { valor: "varias", etiqueta: "S\xED, varias veces por semana" }, PREFIERO_NO],
      dispara: ["varias"],
      contexto: ["alguna"],
      se\u00F1al: "Comer bastante menos de lo necesario, saltarse comidas o entrenar sin comer varias veces por semana (\xFAltimas 4 semanas)"
    },
    {
      n: 3,
      texto: "\xBFTe cuesta aumentar la comida aunque tengas hambre o entrenes m\xE1s, por miedo a subir de peso o por culpa despu\xE9s de comer?",
      opciones: [NO, SI, NO_SE, PREFIERO_NO],
      dispara: ["si"],
      se\u00F1al: "Dificultad para aumentar la comida por miedo a subir de peso o por culpa"
    },
    {
      n: 4,
      texto: "\xBFHas recurrido a provocarte el v\xF3mito, usar laxantes o diur\xE9ticos, o hacer ejercicio para compensar lo que has comido?",
      opciones: [NO, SI, PREFIERO_NO],
      dispara: ["si"],
      derivaPlan: ["si"],
      se\u00F1al: "Conductas compensatorias (v\xF3mito, laxantes o diur\xE9ticos, ejercicio para compensar): revisi\xF3n prioritaria y valoraci\xF3n sanitaria"
    },
    {
      n: 5,
      texto: "En los \xFAltimos 12 meses, \xBFun profesional te ha diagnosticado una fractura por estr\xE9s o una lesi\xF3n \xF3sea por sobrecarga?",
      opciones: [NO, { valor: "una", etiqueta: "S\xED, una" }, { valor: "mas", etiqueta: "S\xED, m\xE1s de una" }, { valor: "dolor", etiqueta: "Tengo dolor \xF3seo pendiente de valorar" }, NO_SE],
      dispara: ["una", "mas", "dolor"],
      se\u00F1al: "Lesi\xF3n \xF3sea por sobrecarga se\xF1alada por un profesional o dolor \xF3seo pendiente de valorar (\xFAltimos 12 meses)"
    },
    {
      n: 6,
      texto: "Si menstruas o menstruabas: \xBFhas dejado de tener la regla durante 3 meses seguidos o has tenido un cambio claro de regularidad que no has revisado con un profesional?",
      opciones: [NO, SI, { valor: "anticoncepcion", etiqueta: "Uso anticoncepci\xF3n hormonal y no puedo valorar mi ciclo habitual" }, { valor: "embarazo", etiqueta: "Embarazo, posparto o menopausia" }, { valor: "nocorresponde", etiqueta: "No me corresponde" }, PREFIERO_NO],
      dispara: ["si"],
      se\u00F1al: "Falta de regla durante 3 meses o cambio claro de regularidad sin revisar"
    },
    {
      n: 7,
      texto: "En las \xFAltimas 4 semanas, \xBFhas tenido cansancio que no mejora con el descanso habitual o te has recuperado mucho peor de tus entrenamientos?",
      opciones: [NO, { valor: "pocos", etiqueta: "S\xED, unos pocos d\xEDas" }, { valor: "dos", etiqueta: "S\xED, durante al menos 2 semanas" }, NO_SE],
      dispara: ["dos"],
      contexto: ["pocos"],
      se\u00F1al: "Cansancio o peor recuperaci\xF3n durante al menos 2 semanas (\xFAltimas 4 semanas)"
    },
    {
      n: 8,
      texto: "En las \xFAltimas 4 semanas, \xBFha bajado tu rendimiento de forma persistente aunque tu entrenamiento no haya cambiado mucho?",
      opciones: [NO, { valor: "pocos", etiqueta: "S\xED, unos pocos d\xEDas" }, { valor: "dos", etiqueta: "S\xED, durante al menos 2 semanas" }, { valor: "nopuedo", etiqueta: "No puedo compararlo" }],
      dispara: ["dos"],
      contexto: ["pocos"],
      se\u00F1al: "Bajada de rendimiento durante al menos 2 semanas sin cambio de entrenamiento"
    },
    {
      n: 9,
      texto: "\xBFAlg\xFAn profesional te ha indicado que podr\xEDas tener falta de energ\xEDa para tu actividad, un trastorno de la conducta alimentaria o un problema hormonal o de salud \xF3sea que sigue pendiente de revisi\xF3n?",
      opciones: [NO, SI, NO_SE, PREFIERO_NO],
      dispara: ["si"],
      se\u00F1al: "Un profesional ya indic\xF3 una posible falta de energ\xEDa u otro asunto de salud pendiente de revisi\xF3n"
    }
  ];
  var NO_INTERPRETABLES = /* @__PURE__ */ new Set(["prefiero", "nolose", "nopuedo"]);
  function evaluarCribado(entrada) {
    const vacio = { disparadores: [], contexto: [], sinInterpretar: [], contestadas: 0, prioritaria: false, derivaPlan: false };
    const r = entrada?.respuestas;
    if (!r) return vacio;
    const out = { ...vacio, disparadores: [], contexto: [], sinInterpretar: [] };
    for (const p of PREGUNTAS_CRIBADO) {
      const v = r[p.n];
      const op = p.opciones.find((o) => o.valor === v);
      if (!v || !op) continue;
      out.contestadas++;
      const senal = { pregunta: p.n, respuesta: v, etiqueta: op.etiqueta, se\u00F1al: p.se\u00F1al };
      if (NO_INTERPRETABLES.has(v)) out.sinInterpretar.push(p.n);
      else if (p.dispara.includes(v)) out.disparadores.push(senal);
      else if (p.contexto?.includes(v)) out.contexto.push(senal);
      if (p.derivaPlan?.includes(v)) {
        out.prioritaria = true;
        out.derivaPlan = true;
      }
    }
    const a2 = entrada?.pesoHace3m, b = entrada?.pesoAhora;
    if (r[1] === "si" && typeof a2 === "number" && typeof b === "number" && a2 > 0 && b > 0 && a2 < 500 && b < 500) out.perdidaKg = Math.round((a2 - b) * 10) / 10;
    return out;
  }
  var MENSAJE_CRIBADO_NEUTRO = "Gracias por cont\xE1rmelo. Pablo hablar\xE1 contigo para repasar c\xF3mo vas de energ\xEDa y de alimentaci\xF3n.";
  var MENSAJE_CRIBADO_PRIORITARIO = "Gracias por cont\xE1rmelo. Esto lo tiene que valorar Pablo contigo, y conviene que tambi\xE9n lo vea un profesional sanitario; la app no te prepara un plan de ajuste. Pablo hablar\xE1 contigo.";
  function alertaParaPablo(res, fechaISO) {
    if (!res.disparadores.length) return void 0;
    const disparadores = res.disparadores.map((d) => ({ pregunta: d.pregunta, etiqueta: d.etiqueta, se\u00F1al: d.se\u00F1al }));
    const firma = `${res.prioritaria ? "P" : "N"}|${disparadores.map((d) => `${d.pregunta}${res.disparadores.find((x) => x.pregunta === d.pregunta).respuesta}`).join(",")}`;
    return {
      fecha: fechaISO,
      prioritaria: res.prioritaria,
      disparadores,
      contexto: res.contexto.map((c2) => ({ pregunta: c2.pregunta, etiqueta: c2.etiqueta })),
      sinInterpretar: res.sinInterpretar,
      ...res.perdidaKg !== void 0 ? { perdidaKg: res.perdidaKg } : {},
      firma
    };
  }
  function anadirAlerta(lista, nueva) {
    const dia = nueva.fecha.slice(0, 10);
    const resto = lista.filter((a2) => !(a2.firma === nueva.firma && a2.fecha.slice(0, 10) === dia));
    return [nueva, ...resto].slice(0, 30);
  }

  // src/motor/alergenos.ts
  var CATEGORIAS_ALERGENO = [
    {
      clave: "gluten",
      rotulo: "gluten",
      etiquetas: ["gluten"],
      aptitud: "sinGluten",
      nombres: ["gluten", "trigo", "cereales con gluten", "celiaqu\xEDa", "celiaco", "celiaca"],
      alimentos: [
        "trigo",
        "pan",
        "pasta",
        "espagueti",
        "macarr\xF3n",
        "fideo",
        "tallar\xEDn",
        "lasa\xF1a",
        "canel\xF3n",
        "ravioli",
        "tortellini",
        "\xF1oqui",
        "cusc\xFAs",
        "bulgur",
        "seit\xE1n",
        "harina",
        "s\xE9mola",
        "avena",
        "cebada",
        "centeno",
        "espelta",
        "kamut",
        "galleta",
        "tostada",
        "malta",
        "gluten",
        "biscote",
        "picatoste",
        "pizza",
        "empanada",
        "empanadilla",
        "rebozado",
        "bizcocho",
        "magdalena",
        "croissant",
        "boller\xEDa",
        "hojaldre",
        "crepe",
        "wrap",
        "noodle",
        "cereales",
        "muesli",
        "granola",
        "cerveza",
        "salsa de soja"
      ]
    },
    {
      clave: "lacteos",
      rotulo: "l\xE1cteos",
      etiquetas: ["l\xE1cteos", "leche"],
      aptitud: "sinLactosa",
      nombres: ["l\xE1cteos", "productos l\xE1cteos", "lactosa", "case\xEDna", "prote\xEDna de la leche", "prote\xEDna de leche de vaca", "aplv"],
      nombresSoloAlergia: ["leche"],
      alimentos: [
        "leche",
        "l\xE1cteo",
        "l\xE1ctea",
        "yogur",
        "queso",
        "nata",
        "mantequilla",
        "k\xE9fir",
        "cuajada",
        "reques\xF3n",
        "mozzarella",
        "cottage",
        "parmesano",
        "ricotta",
        "mascarpone",
        "burrata",
        "feta",
        "emmental",
        "cheddar",
        "skyr",
        "helado",
        "batido",
        "natillas",
        "flan",
        "bechamel",
        "suero de leche",
        "prote\xEDna de suero",
        "whey",
        "case\xEDna",
        "lactoglobulina",
        "lactoalb\xFAmina",
        "caseinato"
      ]
    },
    {
      clave: "huevo",
      rotulo: "huevo",
      etiquetas: ["huevo", "huevos"],
      nombres: ["huevo", "ovoalb\xFAmina", "prote\xEDna de huevo"],
      alimentos: ["huevo", "clara", "yema", "tortilla francesa", "tortilla de patata", "tortilla espa\xF1ola", "mayonesa", "alioli", "merengue", "revuelto"]
    },
    {
      clave: "pescado",
      rotulo: "pescado",
      etiquetas: ["pescado"],
      nombres: ["pescado"],
      alimentos: [
        "pescado",
        "at\xFAn",
        "bonito",
        "bacalao",
        "merluza",
        "pescadilla",
        "salm\xF3n",
        "lubina",
        "dorada",
        "sardina",
        "caballa",
        "boquer\xF3n",
        "anchoa",
        "lenguado",
        "rape",
        "trucha",
        "emperador",
        "pez espada",
        "gallo",
        "rodaballo",
        "panga",
        "perca",
        "mero",
        "besugo",
        "jurel",
        "melva",
        "arenque",
        "abadejo",
        "flet\xE1n",
        "tilapia",
        "salmonete",
        "caz\xF3n",
        "anguila",
        "surimi",
        "gulas",
        "caviar",
        "huevas"
      ]
    },
    // #260 (punto 36): grupos que la gente escribe en la lista negra («pescado azul» tiene que quitar el atún). Dentro de «pescado».
    {
      clave: "pescado_azul",
      rotulo: "pescado azul",
      etiquetas: ["pescado azul"],
      nombres: ["pescado azul"],
      alimentos: ["at\xFAn", "bonito", "sardina", "caballa", "salm\xF3n", "boquer\xF3n", "anchoa", "jurel", "melva", "arenque", "emperador", "pez espada", "anguila", "trucha"]
    },
    {
      clave: "pescado_blanco",
      rotulo: "pescado blanco",
      etiquetas: ["pescado blanco"],
      nombres: ["pescado blanco"],
      alimentos: ["merluza", "pescadilla", "bacalao", "lubina", "dorada", "lenguado", "rape", "gallo", "rodaballo", "panga", "perca", "mero", "besugo", "abadejo", "flet\xE1n", "tilapia", "caz\xF3n"]
    },
    {
      clave: "crustaceos",
      rotulo: "crust\xE1ceos",
      etiquetas: ["crust\xE1ceos"],
      nombres: ["crust\xE1ceos"],
      alimentos: ["gamba", "langostino", "cigala", "bogavante", "langosta", "cangrejo", "n\xE9cora", "centollo", "buey de mar", "percebe", "camar\xF3n", "quisquilla", "carabinero"]
    },
    {
      clave: "moluscos",
      rotulo: "moluscos",
      etiquetas: ["moluscos"],
      nombres: ["moluscos", "cefal\xF3podos"],
      alimentos: ["mejill\xF3n", "almeja", "berberecho", "calamar", "sepia", "pulpo", "chipir\xF3n", "choco", "pota", "ostra", "vieira", "zamburi\xF1a", "navaja", "caracol", "coquina", "chirla"]
    },
    { clave: "marisco", rotulo: "marisco", etiquetas: ["marisco"], nombres: ["marisco"], alimentos: ["marisco"], incluye: ["crustaceos", "moluscos"] },
    {
      clave: "frutos_cascara",
      rotulo: "frutos de c\xE1scara",
      etiquetas: ["frutos de c\xE1scara"],
      nombres: ["frutos de c\xE1scara", "frutos secos de \xE1rbol"],
      alimentos: ["almendra", "nuez", "avellana", "anacardo", "pistacho", "pi\xF1\xF3n", "pacana", "macadamia", "casta\xF1a", "pralin\xE9", "mazap\xE1n", "turr\xF3n"]
    },
    { clave: "cacahuete", rotulo: "cacahuete", etiquetas: ["cacahuete", "cacahuetes"], nombres: ["cacahuete", "man\xED"], alimentos: ["cacahuete", "man\xED"] },
    { clave: "frutos_secos", rotulo: "frutos secos", etiquetas: ["frutos secos"], nombres: ["frutos secos"], alimentos: ["frutos secos"], incluye: ["frutos_cascara", "cacahuete"] },
    {
      clave: "soja",
      rotulo: "soja",
      etiquetas: ["soja"],
      nombres: ["soja", "soya"],
      alimentos: ["soja", "tofu", "tempeh", "edamame", "miso", "tamari", "natto"]
    },
    { clave: "sesamo", rotulo: "s\xE9samo", etiquetas: ["s\xE9samo"], nombres: ["s\xE9samo", "ajonjol\xED"], alimentos: ["s\xE9samo", "ajonjol\xED", "tahini", "tah\xEDn", "hummus", "gomasio"] },
    { clave: "mostaza", rotulo: "mostaza", etiquetas: ["mostaza"], nombres: ["mostaza"], alimentos: ["mostaza"] },
    { clave: "apio", rotulo: "apio", etiquetas: ["apio"], nombres: ["apio"], alimentos: ["apio", "apionabo"] },
    { clave: "altramuces", rotulo: "altramuces", etiquetas: ["altramuces"], nombres: ["altramuces", "lupino"], alimentos: ["altramuz", "lupino"] },
    {
      clave: "sulfitos",
      rotulo: "sulfitos",
      etiquetas: ["sulfitos"],
      noComprobable: true,
      nombres: ["sulfitos", "di\xF3xido de azufre"],
      alimentos: []
    }
  ];

  // src/motor/csv-simple.ts
  function filasCsv(texto) {
    const filas = [];
    let fila = [], celda2 = "", entreComillas = false;
    for (let i = 0; i < texto.length; i++) {
      const c2 = texto[i];
      if (entreComillas) {
        if (c2 === '"' && texto[i + 1] === '"') {
          celda2 += '"';
          i++;
        } else if (c2 === '"') entreComillas = false;
        else celda2 += c2;
      } else if (c2 === '"') entreComillas = true;
      else if (c2 === ",") {
        fila.push(celda2);
        celda2 = "";
      } else if (c2 === "\n" || c2 === "\r") {
        if (c2 === "\r" && texto[i + 1] === "\n") i++;
        fila.push(celda2);
        celda2 = "";
        if (fila.some((x) => x !== "")) filas.push(fila);
        fila = [];
      } else celda2 += c2;
    }
    fila.push(celda2);
    if (fila.some((x) => x !== "")) filas.push(fila);
    return filas;
  }
  function registros(texto) {
    const [cab = [], ...resto] = filasCsv(texto);
    const nombres = cab.map((x) => x.trim());
    return resto.map((f2) => Object.fromEntries(nombres.map((n, i) => [n, (f2[i] ?? "").trim()])));
  }

  // src/motor/gluten-datos.ts
  var GLUTEN_CSV = `ingrediente,clase,necesita_etiqueta,motivo,fuente
aceite de oliva,sin_gluten_natural,no,"grasa vegetal, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
aceituna negra,sin_gluten_natural,no,"grasa vegetal, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
aguacate,sin_gluten_natural,no,"fruta fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
ajo,sin_gluten_natural,no,"hierba arom\xE1tica fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
alcachofa,sin_gluten_natural,no,"verdura u hortaliza fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
almendra,sin_gluten_natural,no,"fruto seco natural, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
alubia blanca cocida,sin_gluten_natural,no,"legumbre (seca o cocida sin salsa), sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
alubia blanca seca,sin_gluten_natural,no,"legumbre (seca o cocida sin salsa), sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
alubia roja cocida,sin_gluten_natural,no,"legumbre (seca o cocida sin salsa), sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
arroz,sin_gluten_natural,no,cereal sin gluten por naturaleza (FACE: gen\xE9rico),https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
at\xFAn en lata,riesgo,si,"al natural o en aceite suele ser apto, pero en escabeche o con salsas puede llevar gluten seg\xFAn la marca (FACE: convencional)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
at\xFAn fresco,sin_gluten_natural,no,"pescado fresco, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
avena,riesgo,si,"la avena se contamina con trigo/cebada en campo y molino; solo apta la certificada \xABsin gluten\xBB (<20 ppm), RE 828/2014",https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32014R0828
bacalao fresco,sin_gluten_natural,no,"pescado fresco, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
berenjena,sin_gluten_natural,no,"verdura u hortaliza fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
boniato,sin_gluten_natural,no,"tub\xE9rculo, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
br\xF3coli,sin_gluten_natural,no,"verdura u hortaliza fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
caballa,sin_gluten_natural,no,"pescado fresco, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
cacao puro en polvo,riesgo,si,"el cacao es apto, pero el envasado puede a\xF1adir antiapelmazantes o declarar trazas (FACE: convencional)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
calabac\xEDn,sin_gluten_natural,no,"verdura u hortaliza fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
calabaza,sin_gluten_natural,no,"verdura u hortaliza fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
calamar,sin_gluten_natural,no,"pescado fresco, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
canela,riesgo,si,especia molida: riesgo de contaminaci\xF3n cruzada o antiapelmazante seg\xFAn la marca (FACE: convencional),https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
can\xF3nigos,sin_gluten_natural,no,"verdura u hortaliza fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
cebolla,sin_gluten_natural,no,"verdura u hortaliza fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
champi\xF1ones,sin_gluten_natural,no,"seta fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
champi\xF1\xF3n,sin_gluten_natural,no,"seta fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
claras de huevo,sin_gluten_natural,no,"huevo, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
coliflor,sin_gluten_natural,no,"verdura u hortaliza fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
comino,riesgo,si,especia molida: riesgo de contaminaci\xF3n cruzada o antiapelmazante seg\xFAn la marca (FACE: convencional),https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
conejo,sin_gluten_natural,no,"carne fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
copos de avena,riesgo,si,"la avena se contamina con trigo/cebada en campo y molino; solo apta la certificada \xABsin gluten\xBB (<20 ppm), RE 828/2014",https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32014R0828
crema de cacahuete,riesgo,si,"el cacahuete es apto, pero la crema puede llevar aditivos o emulgentes seg\xFAn la marca (FACE: convencional)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
cusc\xFAs,con_gluten,no,"s\xE9mola de trigo (cereal con gluten, anexo II RE 1169/2011)",https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32011R1169
espinaca,sin_gluten_natural,no,"verdura u hortaliza fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
espinacas,sin_gluten_natural,no,"verdura u hortaliza fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
esp\xE1rrago,sin_gluten_natural,no,"verdura u hortaliza fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
esp\xE1rragos,sin_gluten_natural,no,"verdura u hortaliza fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
fresas,sin_gluten_natural,no,"fruta fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
garbanzo cocido,sin_gluten_natural,no,"legumbre (seca o cocida sin salsa), sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
garbanzos cocidos,riesgo,si,"en bote o conserva suelen ser aptos, pero el l\xEDquido de gobierno puede variar seg\xFAn la marca (FACE: convencional); cocidos en casa son aptos",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
gazpacho,riesgo,si,"elaborado que tradicionalmente lleva pan y cuya formulaci\xF3n var\xEDa seg\xFAn la marca (FACE: convencional); el casero sin pan es apto",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
guisantes,sin_gluten_natural,no,"verdura u hortaliza fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
huevo cocido,sin_gluten_natural,no,"huevo, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
huevo,sin_gluten_natural,no,"huevo, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
hummus,riesgo,si,"elaborado: garbanzo y tahini son aptos, pero la formulaci\xF3n (especias, conservantes) var\xEDa seg\xFAn la marca (FACE: convencional)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
jam\xF3n cocido,riesgo,si,"fiambre cocido que puede llevar aditivos o saborizantes con gluten seg\xFAn la marca (FACE: convencional, a revisar en su lista)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
jud\xEDa verde,sin_gluten_natural,no,"verdura u hortaliza fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
jud\xEDas verdes,sin_gluten_natural,no,"verdura u hortaliza fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
kiwi,sin_gluten_natural,no,"fruta fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
leche semidesnatada,sin_gluten_natural,no,"leche o derivado natural sin azucarar ni sabor, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
lechuga hoja verde,sin_gluten_natural,no,"verdura u hortaliza fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
lechuga romana,sin_gluten_natural,no,"verdura u hortaliza fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
lechuga,sin_gluten_natural,no,"verdura u hortaliza fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
legumbre cocida,sin_gluten_natural,no,"legumbre (seca o cocida sin salsa), sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
legumbre seca,sin_gluten_natural,no,"legumbre (seca o cocida sin salsa), sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
lenteja cocida,sin_gluten_natural,no,"legumbre (seca o cocida sin salsa), sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
lenteja seca,sin_gluten_natural,no,"legumbre (seca o cocida sin salsa), sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
lomo de cerdo,sin_gluten_natural,no,"carne fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
lubina,sin_gluten_natural,no,"pescado fresco, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
mandarina,sin_gluten_natural,no,"fruta fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
manzana,sin_gluten_natural,no,"fruta fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
mejill\xF3n,sin_gluten_natural,no,"pescado fresco, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
mel\xF3n,sin_gluten_natural,no,"fruta fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
merluza,sin_gluten_natural,no,"pescado fresco, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
miel,sin_gluten_natural,no,"producto natural puro, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
mozzarella,sin_gluten_natural,no,"leche o derivado natural sin azucarar ni sabor, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
naranja,sin_gluten_natural,no,"fruta fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
nueces,sin_gluten_natural,no,"fruto seco natural, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
pan blanco,con_gluten,no,"harina de trigo (cereal con gluten, anexo II RE 1169/2011)",https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32011R1169
pan integral,con_gluten,no,"harina de trigo (cereal con gluten, anexo II RE 1169/2011)",https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32011R1169
pan,con_gluten,no,"harina de trigo (cereal con gluten, anexo II RE 1169/2011)",https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32011R1169
pasta,con_gluten,no,"s\xE9mola/harina de trigo (cereal con gluten, anexo II RE 1169/2011)",https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32011R1169
patata,sin_gluten_natural,no,"tub\xE9rculo, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
pavo,sin_gluten_natural,no,"carne fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
pechuga de pavo asada,sin_gluten_natural,no,"carne fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
pechuga de pavo en embutido,riesgo,si,"embutido que puede llevar aditivos o saborizantes con gluten seg\xFAn la marca (FACE: convencional, a revisar en su lista)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
pechuga de pavo,sin_gluten_natural,no,"carne fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
pechuga de pollo asada,sin_gluten_natural,no,"carne fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
pechuga de pollo,sin_gluten_natural,no,"carne fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
pepino,sin_gluten_natural,no,"verdura u hortaliza fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
pera,sin_gluten_natural,no,"fruta fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
perejil,sin_gluten_natural,no,"hierba arom\xE1tica fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
piment\xF3n,riesgo,si,especia molida: riesgo de contaminaci\xF3n cruzada o antiapelmazante seg\xFAn la marca (FACE: convencional),https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
pimiento rojo,sin_gluten_natural,no,"verdura u hortaliza fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
pimiento verde,sin_gluten_natural,no,"verdura u hortaliza fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
pimiento,sin_gluten_natural,no,"verdura u hortaliza fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
pi\xF1a,sin_gluten_natural,no,"fruta fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
pl\xE1tano,sin_gluten_natural,no,"fruta fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
pollo,sin_gluten_natural,no,"carne fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
puerro,sin_gluten_natural,no,"verdura u hortaliza fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
queso cottage,sin_gluten_natural,no,"leche o derivado natural sin azucarar ni sabor, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
queso curado,sin_gluten_natural,no,"queso natural, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
queso fresco,sin_gluten_natural,no,"queso natural, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
quinoa,sin_gluten_natural,no,"seudocereal sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
remolacha cocida,sin_gluten_natural,no,"verdura u hortaliza fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
repollo,sin_gluten_natural,no,"verdura u hortaliza fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
r\xFAcula,sin_gluten_natural,no,"verdura u hortaliza fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
salm\xF3n,sin_gluten_natural,no,"pescado fresco, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
sand\xEDa,sin_gluten_natural,no,"fruta fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
sardina en lata,riesgo,si,"en aceite suele ser apta, pero en salsas o escabeche puede llevar gluten seg\xFAn la marca (FACE: convencional)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
sepia,sin_gluten_natural,no,"pescado fresco, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
tempeh,riesgo,si,"la soja es apta, pero algunos tempeh se fermentan con cebada u otros cereales con gluten (FACE: convencional)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
ternera magra (solomillo de aguja),sin_gluten_natural,no,"carne fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
ternera picada,riesgo,si,carne picada en obrador: puede llevar aditivos o contacto con gluten (FACE: convencional); la pieza entera es apta,https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
ternera,sin_gluten_natural,no,"carne fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
tofu firme,riesgo,si,"la soja es apta, pero el tofu puede llevar aditivos o salsa de soja con trigo seg\xFAn la marca (FACE: convencional)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
tomate triturado,riesgo,si,procesado que puede llevar espesantes o aditivos con gluten seg\xFAn la marca (FACE: convencional),https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
tomate,sin_gluten_natural,no,"verdura u hortaliza fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
tortilla de trigo,con_gluten,no,"harina de trigo (cereal con gluten, anexo II RE 1169/2011)",https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32011R1169
yogur griego,sin_gluten_natural,no,"leche o derivado natural sin azucarar ni sabor, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
yogur natural,sin_gluten_natural,no,"leche o derivado natural sin azucarar ni sabor, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
zanahoria,sin_gluten_natural,no,"verdura u hortaliza fresca, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
pan sin gluten,riesgo,si,"pan elaborado sin cereales con gluten; apto solo si el envase declara \xABsin gluten\xBB (<20 ppm, RE 828/2014); marcas certificadas listadas por FACE",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
pasta sin gluten,riesgo,si,"pasta de ma\xEDz/arroz; apta solo con declaraci\xF3n \xABsin gluten\xBB (<20 ppm, RE 828/2014); la convencional sin etiqueta puede tener trazas (FACE: convencional, mirar etiqueta)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
tortita de ma\xEDz,riesgo,si,"el ma\xEDz no tiene gluten por naturaleza, pero el elaborado puede llevar trazas o mezclas; apto solo con etiqueta \xABsin gluten\xBB (FACE: convencional)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
polenta,riesgo,si,"harina de ma\xEDz, sin gluten por naturaleza pero con riesgo de contaminaci\xF3n en molino; elegir con etiqueta \xABsin gluten\xBB (FACE: convencional)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
copos de avena sin gluten,riesgo,si,"la avena se contamina con trigo/cebada en campo y molino; solo apta la certificada \xABsin gluten\xBB (<20 ppm), RE 828/2014; la avena normal no es apta",https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32014R0828
bebida de soja,riesgo,si,"bebida vegetal elaborada: la soja es apta, pero puede llevar aditivos o aromas seg\xFAn la marca (FACE: convencional)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
yogur de soja,riesgo,si,"postre vegetal elaborado: la soja es apta, pero la formulaci\xF3n (espesantes, aromas) var\xEDa seg\xFAn la marca (FACE: convencional)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
soja texturizada,riesgo,si,"elaborado de soja: la legumbre es apta, pero puede contaminarse en la planta o llevar aditivos seg\xFAn la marca (FACE: convencional)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
compota de manzana,riesgo,si,"pur\xE9 de fruta elaborado: la fruta es apta, pero puede llevar aditivos seg\xFAn la marca (FACE: convencional)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
reques\xF3n,sin_gluten_natural,no,"leche o derivado natural sin azucarar ni sabor, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
semillas de calabaza,sin_gluten_natural,no,"semilla natural, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
semillas de girasol,sin_gluten_natural,no,"semilla natural, sin gluten por naturaleza (FACE: gen\xE9rico)",https://celiacos.org/tratamiento/clasificacion-de-los-alimentos/
`;

  // src/motor/gluten.ts
  var CLASES = ["sin_gluten_natural", "riesgo", "con_gluten"];
  var COLUMNAS = ["ingrediente", "clase", "necesita_etiqueta", "motivo", "fuente"];
  var clave = (s) => s.trim().toLowerCase();
  function comprobarGlutenCsv(texto) {
    const fallos = [];
    const cab = (texto.split(/\r?\n/)[0] ?? "").split(",").map((x) => x.trim());
    for (const c2 of COLUMNAS) if (!cab.includes(c2)) fallos.push(`falta la columna \xAB${c2}\xBB`);
    if (fallos.length) return fallos;
    const vistos = /* @__PURE__ */ new Set();
    for (const r of registros(texto)) {
      const id = r.ingrediente || "(sin nombre)";
      if (!r.ingrediente) fallos.push("fila sin ingrediente");
      if (vistos.has(clave(id))) fallos.push(`${id}: fila repetida`);
      vistos.add(clave(id));
      if (!CLASES.includes(r.clase)) fallos.push(`${id}: clase \xAB${r.clase}\xBB (solo ${CLASES.join(", ")})`);
      if (r.necesita_etiqueta !== "si" && r.necesita_etiqueta !== "no") fallos.push(`${id}: necesita_etiqueta \xAB${r.necesita_etiqueta}\xBB (si o no)`);
      if (!r.motivo) fallos.push(`${id}: sin motivo`);
      if (!/^https:\/\/\S+$/.test(r.fuente ?? "")) fallos.push(`${id}: sin fuente https`);
    }
    return fallos;
  }
  function glutenDesdeCsv(texto) {
    return new Map(registros(texto).map((r) => [clave(r.ingrediente), { ingrediente: r.ingrediente, clase: r.clase, necesitaEtiqueta: r.necesita_etiqueta === "si", motivo: r.motivo, fuente: r.fuente }]));
  }
  var tabla;
  var tablaGluten = () => tabla ??= glutenDesdeCsv(GLUTEN_CSV);
  function claseGluten(ingrediente, t2 = tablaGluten()) {
    return t2.get(clave(ingrediente))?.clase ?? "con_gluten";
  }
  function sinFilaDeGluten(nombres, t2 = tablaGluten()) {
    return [...new Set(nombres.filter((n) => !t2.has(clave(n))))];
  }
  function aptitudCeliaca(ingredientes, t2 = tablaGluten()) {
    const nombres = [...new Set(ingredientes.map((i) => i.nombre))];
    const sinFila = nombres.filter((n) => !t2.has(clave(n)));
    const conGluten = nombres.filter((n) => claseGluten(n, t2) === "con_gluten");
    const riesgo = nombres.filter((n) => claseGluten(n, t2) === "riesgo");
    return { apta: conGluten.length === 0, conGluten, riesgo, sinFila };
  }
  var AVISO_ETIQUETA_GLUTEN = "compra la versi\xF3n con el sello sin gluten";
  var MENSAJE_CELIAQUIA_HOY = "Pablo revisar\xE1 tu plan personalmente. Mientras, en los productos marcados de la compra busca el sello \xABsin gluten\xBB o la espiga barrada.";
  function alertaCeliaquia(fechaISO) {
    return {
      fecha: fechaISO,
      prioritaria: false,
      celiaquia: true,
      disparadores: [{ pregunta: 0, etiqueta: "celiaquia", se\u00F1al: "Persona cel\xEDaca: Pablo revisa su plan" }],
      contexto: [],
      sinInterpretar: [],
      firma: "C|celiaquia"
    };
  }
  var quitarSinGluten = (t2) => t2.replace(/\s+sin gluten\b/gi, "");
  var avenaSinGluten = (t2) => t2.replace(/\bavena\b(?!\s+sin gluten)/gi, (m) => `${m} sin gluten`);
  function adaptarNombresGluten(recetas, celiaquia) {
    return recetas.map((r) => {
      if (celiaquia) {
        const conAvena = r.ingredientes.some((i) => /\bavena\b/i.test(i.nombre));
        if (!conAvena) return r;
        return { ...r, nombre: avenaSinGluten(r.nombre), ingredientes: r.ingredientes.map((i) => ({ ...i, nombre: avenaSinGluten(i.nombre) })) };
      }
      if (!/sin gluten/i.test(r.nombre) && !r.ingredientes.some((i) => /sin gluten/i.test(i.nombre))) return r;
      return { ...r, nombre: quitarSinGluten(r.nombre), ingredientes: r.ingredientes.map((i) => ({ ...i, nombre: quitarSinGluten(i.nombre) })) };
    });
  }

  // src/motor/filtro-alergias.ts
  function normalizar(s) {
    return Array.from(s.normalize("NFD")).filter((c2) => c2.codePointAt(0) < 768 || c2.codePointAt(0) > 879).join("").toLowerCase();
  }
  function raizPalabra(w) {
    if (w.length > 5 && w.endsWith("ces")) return `${w.slice(0, -3)}z`;
    if (w.length > 4 && w.endsWith("es")) w = w.slice(0, -2);
    else if (w.length > 3 && w.endsWith("s")) w = w.slice(0, -1);
    if (w.length > 3 && w.endsWith("e")) w = w.slice(0, -1);
    return w;
  }
  function raizAlimento(s) {
    return normalizar(s).split(/[^a-z0-9ñ]+/).filter(Boolean).map(raizPalabra).join(" ");
  }
  function coincideAlimento(a2, b) {
    const x = raizAlimento(a2);
    const y = raizAlimento(b);
    return contienePalabras(x, y) || contienePalabras(y, x);
  }
  var indiceCategorias;
  function categoriasListas() {
    indiceCategorias ??= new Map(CATEGORIAS_ALERGENO.map((cat) => [cat.clave, {
      cat,
      nombres: cat.nombres.map(raizAlimento),
      soloAlergia: (cat.nombresSoloAlergia ?? []).map(raizAlimento),
      etiquetas: cat.etiquetas.map(raizAlimento),
      alimentos: cat.alimentos.map(raizAlimento)
    }]));
    return indiceCategorias;
  }
  function contienePalabras(texto, buscado) {
    return !!buscado && ` ${texto} `.includes(` ${buscado} `);
  }
  var ARTICULOS = /* @__PURE__ */ new Set(["el", "la", "lo", "los", "las", "un", "una", "al", "del", "de", "todo", "toda"]);
  function categoriasDeTexto(texto, esAlergia) {
    const raiz = raizAlimento(texto);
    if (!raiz) return [];
    const palabras = raiz.split(" ");
    while (palabras.length > 1 && ARTICULOS.has(palabras[0])) palabras.shift();
    const exacta = palabras.join(" ");
    const listas = categoriasListas();
    const encontradas = /* @__PURE__ */ new Map();
    const anadir = (c2) => {
      if (encontradas.has(c2.cat.clave)) return;
      encontradas.set(c2.cat.clave, c2.cat);
      for (const clave2 of c2.cat.incluye ?? []) {
        const hija = listas.get(clave2);
        if (hija) anadir(hija);
      }
    };
    for (const c2 of listas.values()) {
      const nombra = esAlergia ? [...c2.nombres, ...c2.soloAlergia].some((n) => contienePalabras(raiz, n)) : c2.nombres.includes(exacta);
      if (nombra) anadir(c2);
    }
    return [...encontradas.values()];
  }
  var sinLoQueNoLleva = (nombre) => nombre.replace(/(^|\s)sin\s+\S+/gi, " ");
  function choqueConCategoria(receta, cat, esAlergia) {
    if (esAlergia && cat.clave === "gluten") return motivoGluten(receta);
    const c2 = categoriasListas().get(cat.clave);
    if ((receta.alergenos ?? []).some((a2) => c2.etiquetas.includes(raizAlimento(a2)))) return `lleva ${cat.rotulo}`;
    const ingrediente = receta.ingredientes.find((ing) => {
      const nombre = raizAlimento(sinLoQueNoLleva(ing.nombre));
      if (cat.clave === "gluten" && /\bsin gluten\b/i.test(ing.nombre)) return false;
      return c2.alimentos.some((a2) => contienePalabras(nombre, a2)) && !(cat.clave === "lacteos" && esAlternativaVegetal(ing.nombre));
    });
    if (ingrediente) return `lleva "${ingrediente.nombre}" (${cat.rotulo})`;
    if (esAlergia && cat.aptitud && receta.aptitudes && receta.aptitudes[cat.aptitud] !== "si") return `no consta como apta sin ${cat.rotulo} (pendiente de ficha)`;
    return void 0;
  }
  var LACTEOS = ["leche", "lacteo", "lactea", "yogur", "queso", "nata", "mantequilla", "kefir", "cuajada"];
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
  var ALTERNATIVAS_ANOTADAS = /* @__PURE__ */ new Set(["leche de coco"]);
  function esAlternativaVegetal(nombre) {
    const n = normalizar(nombre).replace(/\s+/g, " ").trim();
    if (ALTERNATIVAS_ANOTADAS.has(n)) return true;
    if (/\b(con|y)\b/.test(n)) return false;
    if (/^bebida( |$)/.test(n)) return !/\b(leche|lacte[ao]s?|yogur|kefir|nata|queso)\b/.test(n);
    return /^(yogur|leche|nata|queso|postre)( vegetal( de [a-z]+)?| de (soja|avena|almendras?|arroz))$/.test(n);
  }
  function buscarIngrediente(ingredientes, palabras) {
    for (const ing of ingredientes) {
      const n = raizAlimento(ing.nombre);
      const lista = esAlternativaVegetal(ing.nombre) ? palabras.filter((p) => !LACTEOS.includes(p)) : palabras;
      if (lista.some((p) => contienePalabras(n, raizAlimento(p)))) return ing.nombre;
    }
    return void 0;
  }
  function motivoGluten(receta) {
    const a2 = aptitudCeliaca(receta.ingredientes);
    if (a2.apta) return void 0;
    const x = a2.conGluten[0];
    return a2.sinFila.includes(x) ? `lleva "${x}", que no tiene dato de gluten: no se da por segura` : `lleva "${x}" (con gluten)`;
  }
  function evaluarCompatibilidad(receta, ap) {
    if (ap.celiaquia) {
      const detalle = motivoGluten(receta);
      if (detalle) return { compatible: false, motivo: { tipo: "celiaquia_sin_confirmar", detalle } };
    }
    const apt = receta.aptitudes;
    if (ap.lactosa) {
      if (apt) {
        if (apt.sinLactosa !== "si") return { compatible: false, motivo: { tipo: "lactosa", detalle: apt.sinLactosa === "no" ? "lleva l\xE1cteo" : "no consta como sin lactosa (pendiente de ficha)" } };
      } else {
        const ingrediente = buscarIngrediente(receta.ingredientes, LACTEOS);
        if (ingrediente) return { compatible: false, motivo: { tipo: "lactosa", detalle: `lleva "${ingrediente}" (l\xE1cteo)` } };
      }
    }
    if (ap.vegano) {
      if (apt) {
        if (apt.vegano !== "si") return { compatible: false, motivo: { tipo: "no_vegano", detalle: apt.vegano === "no" ? "lleva ingredientes de origen animal" : "no consta como vegana (pendiente de ficha)" } };
      } else {
        const ingrediente = buscarIngrediente(receta.ingredientes, [...CARNE_PESCADO, ...LACTEOS, ...OTROS_NO_VEGANOS]);
        if (ingrediente) return { compatible: false, motivo: { tipo: "no_vegano", detalle: `lleva "${ingrediente}" (no vegano)` } };
      }
    } else if (ap.vegetariano) {
      if (apt) {
        if (apt.vegetariano !== "si") return { compatible: false, motivo: { tipo: "no_vegetariano", detalle: "lleva carne, pescado o marisco" } };
      } else {
        const ingrediente = buscarIngrediente(receta.ingredientes, CARNE_PESCADO);
        if (ingrediente) return { compatible: false, motivo: { tipo: "no_vegetariano", detalle: `lleva "${ingrediente}" (carne o pescado)` } };
      }
    }
    const deAlergia = new Set((ap.deAlergia ?? []).map(raizAlimento));
    for (const evitado of ap.evitados) {
      const raiz = raizAlimento(evitado);
      if (!raiz) continue;
      const ingrediente = receta.ingredientes.find((ing) => coincideAlimento(sinLoQueNoLleva(ing.nombre), evitado));
      if (ingrediente) {
        return { compatible: false, motivo: { tipo: "evitado", detalle: `lleva "${ingrediente.nombre}" (en la lista de alimentos evitados: "${evitado}")` } };
      }
      const esAlergia = deAlergia.has(raiz);
      for (const cat of categoriasDeTexto(evitado, esAlergia)) {
        const choque = choqueConCategoria(receta, cat, esAlergia);
        if (choque) return { compatible: false, motivo: { tipo: "evitado", detalle: `${choque} (en la lista de alimentos evitados: "${evitado}")` } };
      }
    }
    return { compatible: true };
  }
  function partirTexto(texto) {
    return (texto ?? "").split(/[,;\n]| y | e | o | ni /i).map((s) => s.trim()).filter(Boolean);
  }
  function alergiasPreferenciasDesdeTexto(alergias, evitanTexto) {
    const deAlergia = partirTexto(alergias.otros);
    return {
      celiaquia: alergias.celiaquia,
      lactosa: alergias.lactosa,
      vegetariano: alergias.vegetariano,
      vegano: alergias.vegano,
      evitados: [...deAlergia, ...partirTexto(evitanTexto)],
      deAlergia
    };
  }
  function leerEvitados(ap, recetas) {
    const deAlergia = new Set((ap.deAlergia ?? []).map(raizAlimento));
    const vistos = /* @__PURE__ */ new Set();
    const lecturas = [];
    for (const texto of ap.evitados) {
      const raiz = raizAlimento(texto);
      if (!raiz || vistos.has(raiz)) continue;
      vistos.add(raiz);
      const esAlergia = deAlergia.has(raiz);
      const categorias = categoriasDeTexto(texto, esAlergia);
      const solo = { celiaquia: false, lactosa: false, vegetariano: false, vegano: false, evitados: [texto], deAlergia: esAlergia ? [texto] : [] };
      const recetasExcluidas = recetas.filter((r) => !evaluarCompatibilidad(r, solo).compatible).length;
      const lectura = categorias.some((c2) => c2.noComprobable) ? "no_comprobable" : categorias.length ? "categoria" : recetasExcluidas ? "alimento" : "sin_coincidencias";
      lecturas.push({ texto, deAlergia: esAlergia, lectura, categorias: categorias.map((c2) => c2.rotulo), recetasExcluidas });
    }
    return lecturas;
  }
  function textoOtrasAlergias(c2) {
    return [c2.otros, c2.pescado ? "pescado" : "", c2.crustaceos ? "crust\xE1ceos" : "", c2.moluscos ? "moluscos" : "", c2.mas, ...c2.marcadas ?? []].map((t2) => (t2 ?? "").trim()).filter(Boolean).join(", ");
  }
  var RE_PESCADO = /\bpescad/;
  var RE_MARISCO_O_MOLUSCO = /marisc|crust|molusc|cefalop|sepia|calamar|pulpo|chipiron|gamba|langostin|mejillon|almeja|berberech|cigala|bogavante|nécora|necora|ostra|vieira|navaja|centollo/;
  function avisoSoloPescado(textoAlergias) {
    const t2 = normalizar(textoAlergias);
    if (!RE_PESCADO.test(t2) || RE_MARISCO_O_MOLUSCO.test(t2)) return void 0;
    return "Has indicado alergia al pescado: se ha quitado el pescado, pero la sepia, el calamar, el pulpo y el marisco no. Si tambi\xE9n te sientan mal, m\xE1rcalo en Alergias.";
  }
  var MOLUSCOS_SUELTOS = ["calamar", "sepia", "pulpo", "chipiron", "mejillon", "almeja", "berberecho", "ostra", "vieira", "navaja"];
  function avisoMoluscoSuelto(textoAlergias) {
    const t2 = normalizar(textoAlergias);
    if (/molusc|cefalop|marisc/.test(t2)) return void 0;
    const dicho = MOLUSCOS_SUELTOS.find((m) => t2.includes(m));
    if (!dicho) return void 0;
    return `Has indicado ${dicho}: no se han quitado los dem\xE1s moluscos (sepia, calamar, pulpo, mejillones, almejas\u2026). Si tambi\xE9n te sientan mal, m\xE1rcalo en Alergias.`;
  }

  // src/motor/catalogo-recetas.ts
  function normalizarBusqueda(texto) {
    return Array.from(texto.normalize("NFD")).filter((c2) => c2.codePointAt(0) < 768 || c2.codePointAt(0) > 879).join("").toLowerCase().split(/[^a-z0-9ñ]+/).filter(Boolean).map(singular);
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
      const palabras = [r.nombre, ...r.ingredientes.map((i) => i.nombre)].flatMap((t2) => normalizarBusqueda(t2));
      return terminos.every((t2) => palabras.some((p) => p.startsWith(t2)));
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
  function elaboracionEjemplo(recetaId, receta) {
    return ELABORACIONES_EJEMPLO[recetaId] ?? (receta?.preparacion ? [receta.preparacion] : void 0);
  }

  // src/motor/derivacion.ts
  var MENSAJE_DERIVACION_SALUD = "Con lo que nos cuentas de tu salud, tu plan lo prepara Pablo contigo, en persona, para tener en cuenta todo lo tuyo.";
  function alertaDerivacion(d, fechaISO) {
    if (d.motivo === "cribado") return void 0;
    const declarado = d.salud.map((s) => String(s).trim()).filter(Boolean).join(", ").slice(0, 200);
    const se\u00F1al = d.motivo === "salud" ? `Derivaci\xF3n por salud: declara \xAB${declarado}\xBB. Sin plan autom\xE1tico: el plan se prepara en consulta.` : `Derivaci\xF3n por edad: ${d.edad ?? "?"} a\xF1os (menor de 18). Sin plan autom\xE1tico: el plan se prepara en consulta.`;
    return {
      fecha: fechaISO,
      prioritaria: true,
      derivacion: true,
      disparadores: [{ pregunta: 0, etiqueta: d.motivo === "salud" ? "condicion_salud" : "menor", se\u00F1al }],
      contexto: [],
      sinInterpretar: [],
      firma: `D|${d.motivo}|${d.motivo === "salud" ? declarado.toLowerCase() : d.edad}`
    };
  }
  function recetasParaDerivado(catalogo, ap, consulta = "") {
    return buscarRecetas(catalogo, consulta).filter((r) => r.tipoPlato !== "compuesta" && r.ingredientes.length > 0 && evaluarCompatibilidad(r, ap).compatible).map((r) => ({
      id: r.id,
      nombre: r.nombre,
      franjas: [...r.franjas],
      ingredientes: [...new Set(r.ingredientes.map((i) => i.nombre))],
      pasos: elaboracionEjemplo(r.id, r) ?? []
    }));
  }
  var CONSEJOS_DERIVADO = [
    { tema: "Agua", texto: "Salvo que Pablo o tu m\xE9dico te hayan dicho otra cosa, ten agua a mano durante el d\xEDa y bebe con las comidas y cuando tengas sed. Si entrenas, lleva una botella." },
    { tema: "Compra", texto: "Antes de ir, elige qu\xE9 recetas vas a preparar y haz la lista con sus ingredientes. Lee la etiqueta de lo envasado para comprobar los al\xE9rgenos que te afectan." },
    { tema: "Conservaci\xF3n", texto: "Guarda en la nevera lo cocinado en cuanto se temple, en recipientes cerrados. Descongela en la nevera, no a temperatura ambiente, y no vuelvas a congelar lo ya descongelado.", fuente: "https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf" }
  ];

  // src/motor/perfil-cuestionario.ts
  var EDAD_MINIMA = 18;
  var SIN_CONDICION = /* @__PURE__ */ new Set(["no", "nada", "ninguna", "ninguno", "ningun", "no tengo", "no tengo nada", "no tengo ninguna", "ninguna condicion", "n a", "na"]);
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
    return Array.from(s.normalize("NFD")).filter((c2) => c2.codePointAt(0) < 768 || c2.codePointAt(0) > 879).join("").toLowerCase().trim();
  }
  function declaraCondicion(salud) {
    return (salud ?? []).some((t2) => {
      const texto = normalizarTexto(String(t2)).replace(/[^a-z0-9]+/g, " ").trim();
      return texto !== "" && !SIN_CONDICION.has(texto);
    });
  }
  function esPositivo(v) {
    return typeof v === "number" && Number.isFinite(v) && v > 0;
  }
  function objetivoDesde(texto) {
    const t2 = normalizarTexto(texto ?? "");
    if (t2.includes("rendimiento") || t2.includes("mantener")) return "mantener";
    if (t2.includes("recomposicion")) return "recomposicion";
    if (t2.includes("ganar musculo") || t2.includes("volumen")) return "ganar_musculo";
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
    const clave2 = MAPA_DEPORTES[normalizarTexto(s.deporte)];
    return clave2 ? { clave: clave2 } : { opciones: Object.keys(ACTIVIDADES) };
  }
  function perfilDesdeCuestionario(r) {
    if (declaraCondicion(r.salud)) {
      return { estado: "derivar", motivo: "salud", mensaje: MENSAJE_DERIVACION_SALUD };
    }
    if (evaluarCribado(r.cribado).derivaPlan) return { estado: "derivar", motivo: "cribado", mensaje: MENSAJE_CRIBADO_PRIORITARIO };
    const vacio = (v) => v == null || typeof v === "number" && Number.isNaN(v);
    if (!esPositivo(r.peso)) return { estado: "incompleto", falta: "peso", mensaje: vacio(r.peso) ? "Falta el peso." : "El peso tiene que ser un n\xFAmero mayor que 0, en kilos." };
    if (!esPositivo(r.altura)) return { estado: "incompleto", falta: "altura", mensaje: vacio(r.altura) ? "Falta la talla." : "La altura tiene que ser un n\xFAmero mayor que 0, en cent\xEDmetros." };
    if (r.altura < 3) return { estado: "incompleto", falta: "altura", mensaje: "La altura va en cent\xEDmetros (por ejemplo, 175), no en metros." };
    if (!esPositivo(r.edad)) return { estado: "incompleto", falta: "edad", mensaje: vacio(r.edad) ? "Falta la edad." : "La edad tiene que ser un n\xFAmero mayor que 0." };
    if (r.sexo !== "hombre" && r.sexo !== "mujer") return { estado: "incompleto", falta: "sexo", mensaje: "Falta el sexo." };
    if (typeof r.objetivo === "string" && r.objetivo.trim() === "") return { estado: "incompleto", falta: "objetivo", mensaje: "Falta el objetivo." };
    if (r.grasa != null && !(esPositivo(r.grasa) && r.grasa < 100)) {
      return { estado: "incompleto", falta: "grasa", mensaje: "El % graso tiene que ser un n\xFAmero entre 0 y 100. Si no lo sabes, d\xE9jalo sin marcar." };
    }
    if (r.edad < EDAD_MINIMA) {
      return { estado: "derivar", motivo: "edad", mensaje: `La app es para mayores de ${EDAD_MINIMA} a\xF1os. Si eres menor, tu plan lo tiene que hacer Pablo contigo en consulta.` };
    }
    const sesiones = [];
    for (const s of r.sesiones ?? []) {
      if (!Number.isFinite(s.minutos) || s.minutos < 0) {
        return { estado: "incompleto", falta: "sesiones", mensaje: `Revisa los minutos de \xAB${s.deporte}\xBB: tienen que ser un n\xFAmero, no pueden quedar vac\xEDos ni en negativo.` };
      }
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

  // src/motor/cena-tras-entreno.ts
  var HORA_ENTRENO_NOCHE = 20;
  var FRACCION_CENA_LIGERA = 0.2;
  function entrenoNocheAntesDeCena(franjas, sesiones) {
    const cena = franjas.find((f2) => f2.franja === "cena");
    if (!cena) return void 0;
    const validas = sesiones.filter((s2) => s2.fin >= HORA_ENTRENO_NOCHE && cena.hora >= s2.fin);
    if (!validas.length) return void 0;
    const s = validas.reduce((a2, b) => b.fin > a2.fin ? b : a2);
    return { inicio: s.inicio, fin: s.fin };
  }
  var nivelVolumenCena = (nivelPrincipal, hambre) => hambre === "mucha" ? Math.min(2, nivelPrincipal + 1) : nivelPrincipal;
  var hambreCenaValida = (x) => x === "poca" || x === "normal" || x === "mucha" ? x : void 0;

  // src/motor/reparto-comidas.ts
  var PRINCIPALES = ["desayuno", "comida", "cena"];
  var SECUNDARIAS = ["media_manana", "merienda"];
  var TOMA_AYUNAS = { ejemplo: "un pl\xE1tano", gramos: 118, kcal: Math.round(89 * 118 / 100), fuente: "USDA FoodData Central, FDC 173944 (Bananas, raw): 89 kcal/100 g; 1 mediano = 118 g" };
  function hhmm(h) {
    const total = (Math.round(h * 60) % 1440 + 1440) % 1440;
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
      const [grupo, clave2, franja, valorRaw] = linea.split(",");
      const valor = Number(valorRaw);
      if (!Number.isFinite(valor)) continue;
      if (grupo === "peso_base") p.pesoBase[franja] = valor;
      else if (grupo === "factor_contexto") p.factor[clave2] = valor;
      else if (grupo === "ventana_horas") p.ventana[clave2] = valor;
      else if (grupo === "tope") p.tope[clave2] = valor;
      else if (grupo === "proteina_principal") p.proteinaPrincipal[clave2] = valor;
      else if (grupo === "borde_primera_hora") p.bordePrimeraHora[clave2] = valor;
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
          if (despues >= 0 && despues < gapPost && !(f2.franja === "desayuno" && despues > v.POST_hasta_h_despues)) {
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
    const desayunoForzadoPost = primeraHora !== void 0 && horaDesayuno !== void 0 && horaDesayuno >= primeraHora.fin && horaDesayuno - primeraHora.fin <= p.ventana.POST_hasta_h_despues;
    if (primeraHora) {
      avisos.push(
        `Entrenas antes de las ${p.bordePrimeraHora.sesion_antes_de_h}:00 sin una comida principal cerca: si te sienta bien, toma algo ligero ${p.bordePrimeraHora.toma_pre_min_antes}-${p.bordePrimeraHora.toma_pre_max_antes} min antes, por ejemplo ${TOMA_AYUNAS.ejemplo} (unas ${TOMA_AYUNAS.kcal} kcal). Es solo una sugerencia: no se ha reservado nada en el plan. Si te lo tomas, m\xE1rcalo en Hoy (\xABMe la he tomado\xBB) y esas kcal se quitan del resto del d\xEDa; si no, el d\xEDa sigue igual.` + (desayunoForzadoPost ? " El desayuno cuenta como la comida de despu\xE9s del entreno, con m\xE1s hidrato." : "")
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
    let tomaLigera;
    if (primeraHora && e.tomaLigera && salida.length) {
      const peso = e.peso ?? e.pesoRef;
      const gMin = p.bordePrimeraHora.hidrato_rapido_g_kg_min * peso, gMax = p.bordePrimeraHora.hidrato_rapido_g_kg_max * peso;
      let pendiente = redondear((gMin + gMax) / 2, 1);
      const total = pendiente;
      const restado = /* @__PURE__ */ new Map();
      const quitar = (s, g) => {
        const q = Math.min(g, s.hidrato);
        s.hidrato = redondear(s.hidrato - q);
        s.kcalAprox = redondear(4 * s.proteina + 4 * s.hidrato + 9 * s.grasa);
        restado.set(s.franja, (restado.get(s.franja) ?? 0) + q);
        return q;
      };
      if (e.tomaLigera === "pautada") {
        const sumaH = salida.reduce((s, x) => s + x.hidrato, 0);
        if (sumaH > 0) for (const s of salida) pendiente -= quitar(s, total * s.hidrato / sumaH);
      } else {
        const porHora = [...salida].sort((a2, b) => e.franjas.find((x) => x.franja === b.franja).hora - e.franjas.find((x) => x.franja === a2.franja).hora);
        const orden = [...porHora.filter((s) => s.franja === "cena"), ...porHora.filter((s) => s.franja !== "cena")];
        for (const s of orden) {
          if (pendiente <= 0.05) break;
          pendiente -= quitar(s, pendiente);
        }
      }
      const reservado = redondear([...restado.values()].reduce((s, v) => s + v, 0), 1);
      if (reservado > 0) {
        tomaLigera = {
          modo: e.tomaLigera,
          hidrato: reservado,
          kcalAprox: redondear(4 * reservado),
          cuentaComo: e.tomaLigera === "imprevista" ? "merienda" : "comida_extra",
          restadoDe: [...restado].filter(([, g]) => g > 0).map(([franja, hidrato]) => ({ franja, hidrato: redondear(hidrato, 1) }))
        };
        const donde = tomaLigera.restadoDe.map((r) => `${NOMBRE_FRANJA[r.franja]?.toLowerCase() ?? r.franja} \u2212${r.hidrato} g`).join(", ");
        const ya = avisos.findIndex((a2) => a2.startsWith("Entrenas antes de las"));
        const texto = e.tomaLigera === "pautada" ? `Toma ligera pautada antes del entreno (${reservado} g de hidrato r\xE1pido, ${p.bordePrimeraHora.toma_pre_min_antes}-${p.bordePrimeraHora.toma_pre_max_antes} min antes): cuenta como una comida y se resta un poco de cada comida del d\xEDa (${donde}). El total del d\xEDa no cambia.` : `Toma ligera imprevista antes del entreno (${reservado} g de hidrato r\xE1pido): cuenta como una merienda y se resta de la cena (${donde}). El total del d\xEDa no cambia.`;
        if (ya >= 0) avisos[ya] = texto;
        else avisos.push(texto);
      }
    }
    let cenaTrasEntreno;
    const noche = e.hambreCena === "poca" || e.hambreCena === "mucha" ? entrenoNocheAntesDeCena(e.franjas, e.sesionesTodas ?? sesionesCarga) : void 0;
    if (noche && e.hambreCena === "mucha") {
      cenaTrasEntreno = { hambre: "mucha", kcal: 0 };
      avisos.push("Cena despu\xE9s de entrenar de noche: como llegas con mucha hambre, lleva m\xE1s cantidad (m\xE1s volumen, primero y segundo si hace falta) con las mismas calor\xEDas.");
    } else if (noche) {
      const cena = salida.find((s) => s.franja === "cena");
      const hora = (f2) => e.franjas.find((x) => x.franja === f2).hora;
      const previa = salida.filter((s) => s.franja !== "cena" && hora(s.franja) <= noche.inicio).sort((a2, b) => hora(b.franja) - hora(a2.franja))[0];
      const kH = 4 * cena.hidrato, kG = 9 * cena.grasa;
      const mover = Math.min(FRACCION_CENA_LIGERA * cena.kcalAprox, kH + kG);
      if (previa && mover > 0) {
        const dH = cena.hidrato * mover / (kH + kG), dG = cena.grasa * mover / (kH + kG);
        cena.hidrato = redondear(cena.hidrato - dH);
        cena.grasa = redondear(cena.grasa - dG, 1);
        const grasaAntes = previa.grasa;
        let grasa = previa.grasa + dG, hidrato = previa.hidrato + dH;
        const enVentanaPreCarga = sesionesCarga.some((s) => {
          const a2 = s.inicio - hora(previa.franja);
          return a2 > 0 && a2 <= 2;
        });
        const limite = Math.max(p.tope.grasa_pre_carga_g, grasaAntes);
        if (enVentanaPreCarga && grasa > limite) {
          hidrato += (grasa - limite) * 9 / 4;
          grasa = limite;
        }
        previa.hidrato = redondear(hidrato);
        previa.grasa = redondear(grasa, 1);
        for (const s of [cena, previa]) s.kcalAprox = redondear(4 * s.proteina + 4 * s.hidrato + 9 * s.grasa);
        cenaTrasEntreno = { hambre: "poca", kcal: Math.round(mover), haciaFranja: previa.franja };
        avisos.push(`Cena despu\xE9s de entrenar de noche: como llegas con poca hambre, es m\xE1s ligera (unas ${Math.round(mover)} kcal menos) y eso pasa a ${NOMBRE_FRANJA[previa.franja]?.toLowerCase() ?? previa.franja}, antes del entreno. El total del d\xEDa no cambia.`);
      }
    }
    const conflictos = [];
    for (const f2 of e.franjas) {
      for (const ses of e.sesionesTodas ?? sesionesCarga) {
        if (f2.hora >= ses.inicio && f2.hora < ses.fin) conflictos.push({ franja: f2.franja, hora: f2.hora, inicio: ses.inicio, fin: ses.fin });
      }
    }
    for (const c2 of conflictos) {
      avisos.push(
        `${NOMBRE_FRANJA[c2.franja] ?? c2.franja} (${hhmm(c2.hora)}) cae dentro de una sesi\xF3n de ${hhmm(c2.inicio)} a ${hhmm(c2.fin)}: revisa el horario. No se ha movido nada ni se da este horario por viable.`
      );
    }
    const tomaSugerida = primeraHora && !tomaLigera ? { inicio: primeraHora.inicio, kcal: TOMA_AYUNAS.kcal } : void 0;
    return { franjas: salida, avisos, conflictos, ...tomaLigera ? { tomaLigera } : {}, ...cenaTrasEntreno ? { cenaTrasEntreno } : {}, ...tomaSugerida ? { tomaSugerida } : {} };
  }
  function agruparAvisosPorDia(avisos) {
    const NOMBRE2 = { L: "lunes", M: "martes", X: "mi\xE9rcoles", J: "jueves", V: "viernes", S: "s\xE1bado", D: "domingo" };
    const grupos = /* @__PURE__ */ new Map();
    const sueltos = [];
    const orden = [];
    for (const a2 of avisos) {
      const m = /^([LMXJVSD]): (.+)$/s.exec(a2);
      if (!m) {
        orden.push(`\0${sueltos.length}`);
        sueltos.push(a2);
        continue;
      }
      if (!grupos.has(m[2])) {
        grupos.set(m[2], []);
        orden.push(m[2]);
      }
      if (!grupos.get(m[2]).includes(m[1])) grupos.get(m[2]).push(m[1]);
    }
    return orden.map((k) => {
      if (k.startsWith("\0")) return sueltos[Number(k.slice(1))];
      const dias = grupos.get(k);
      if (dias.length === 1) return `${dias[0]}: ${k}`;
      const n = dias.map((d) => NOMBRE2[d]);
      const lista = `${n.slice(0, -1).join(", ")} y ${n[n.length - 1]}`;
      return `${lista.charAt(0).toUpperCase()}${lista.slice(1)}: ${k}`;
    });
  }
  function choquesHorario(franjas, sesiones, nombre = (f2) => f2) {
    const hh = (h) => `${String(Math.floor(h + 1e-9) % 24).padStart(2, "0")}:${String(Math.round(h % 1 * 60) % 60).padStart(2, "0")}`;
    const conHora = franjas.filter((f2) => typeof f2.hora === "number").sort((a2, b) => a2.hora - b.hora);
    const choques = [];
    for (let i = 1; i < conHora.length; i++) {
      const a2 = conHora[i - 1];
      const b = conHora[i];
      const dif = b.hora - a2.hora;
      if (Math.abs(dif) < 1e-6) choques.push({ tipo: "misma_hora", franjas: [a2.franja, b.franja], hora: a2.hora, texto: `${nombre(a2.franja)} y ${nombre(b.franja)} est\xE1n a la misma hora (${hh(a2.hora)}).` });
      else if (dif < 1) choques.push({ tipo: "pegadas", franjas: [a2.franja, b.franja], hora: b.hora, texto: `${nombre(a2.franja)} (${hh(a2.hora)}) y ${nombre(b.franja)} (${hh(b.hora)}) quedan muy pegadas: menos de una hora entre las dos.` });
    }
    for (const f2 of conHora) {
      const s = sesiones.find((x) => f2.hora >= x.inicio && f2.hora < x.fin);
      if (s) choques.push({ tipo: "en_entreno", franjas: [f2.franja], hora: f2.hora, texto: `${nombre(f2.franja)} (${hh(f2.hora)}) cae dentro del entreno de ${hh(s.inicio)} a ${hh(s.fin)}.` });
    }
    return choques;
  }

  // src/motor/validador-plato.ts
  var ALIAS_EXTRA = {
    "ternera / cerdo": ["hamburguesa", "solomillo", "carne picada"],
    "pescado blanco": ["merluza", "bacalao", "lenguado", "rape", "dorada", "lubina"],
    "pescado azul": ["salmon", "sardina", "caballa", "atun fresco"],
    "cereal crudo": ["pasta"],
    "legumbre cocida": ["garbanzo cocido", "lenteja cocida", "alubia blanca cocida", "alubia roja cocida"],
    "legumbre seca": ["lenteja seca", "alubia blanca seca"],
    // #171 (provisional, pendiente de la tabla de Instinct #193): ingredientes del catálogo que ninguna fila reconocía.
    "fruto seco": ["almendra", "nuez", "nueces", "avellana", "anacardo", "pistacho", "cacahuete"],
    "grasa": ["crema de cacahuete", "crema de almendra"],
    "condimentos": ["perejil", "pimenton", "comino", "canela", "miel", "cacao", "pimienta", "oregano"],
    "hoja de ensalada": ["lechuga hoja verde", "lechuga romana", "lechuga"],
    "pan": ["tortilla de trigo"],
    "queso fresco / requeson / cottage": ["mozzarella"]
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
  var cacheNormalizar = /* @__PURE__ */ new Map();
  function normalizar2(s) {
    let r = cacheNormalizar.get(s);
    if (r === void 0) {
      r = normalizarSinCache(s);
      cacheNormalizar.set(s, r);
    }
    return r;
  }
  function normalizarSinCache(s) {
    return Array.from(s.normalize("NFD")).filter((c2) => c2.codePointAt(0) < MARCA_DIACRITICA_MIN || c2.codePointAt(0) > MARCA_DIACRITICA_MAX).join("").toLowerCase();
  }
  function stem(palabra) {
    let s = palabra;
    if (s.endsWith("es") && s.length > 4) s = s.slice(0, -2);
    else if (s.endsWith("s") && s.length > 3) s = s.slice(0, -1);
    if (s.endsWith("e") && s.length > 4) s = s.slice(0, -1);
    return s;
  }
  var cacheTokens = /* @__PURE__ */ new Map();
  function tokens(texto) {
    let r = cacheTokens.get(texto);
    if (r === void 0) {
      r = normalizar2(texto).split(/[^a-z0-9]+/).filter(Boolean).map(stem);
      cacheTokens.set(texto, r);
    }
    return r.slice();
  }
  function parseCsvLine(linea) {
    const campos = [];
    let actual = "";
    let entreComillas = false;
    for (let i = 0; i < linea.length; i++) {
      const c2 = linea[i];
      if (entreComillas) {
        if (c2 === '"' && linea[i + 1] === '"') {
          actual += '"';
          i++;
        } else if (c2 === '"') {
          entreComillas = false;
        } else {
          actual += c2;
        }
      } else if (c2 === '"') {
        entreComillas = true;
      } else if (c2 === ",") {
        campos.push(actual);
        actual = "";
      } else {
        actual += c2;
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
        protegidos = antesDeDosPuntos.split(/,| y /i).map((t2) => normalizar2(t2).trim()).filter(Boolean);
        continue;
      }
      if (minimo == null && recomendado == null && tope == null) continue;
      const sinParentesis = nombreRaw.replace(/\([^)]*\)/, "").trim();
      const nombresBase = sinParentesis.split("/").map((n) => n.replace(/\*/g, "").trim()).filter(Boolean);
      const parentesis = nombreRaw.match(/\(([^)]*)\)/)?.[1] ?? "";
      const esNotaDeRegla = /cada una|por separado/i.test(parentesis);
      const ejemplos = parentesis && !esNotaDeRegla ? parentesis.replace(/\.\.\.$/, "").split(",").map((e) => e.trim()).filter(Boolean) : [];
      const keywords = [...nombresBase.flatMap((n) => n.split(/ y /)), ...ejemplos].map((n) => tokens(n)).filter((t2) => t2.length > 0);
      const categoria = nombresBase[0] ?? nombreRaw;
      const alias = ALIAS_EXTRA[normalizar2(nombresBase.join(" / "))];
      if (alias) keywords.push(...alias.map((a2) => tokens(a2)));
      alimentos.push({
        categoria,
        keywords,
        minimo,
        recomendado,
        tope,
        esBaseDeGuarnicion: CATEGORIAS_GUARNICION.some((c2) => normalizar2(categoria).includes(c2)),
        esRacionRealista: seccionActual === "B"
      });
    }
    const provisional = (categoria, nombres, r) => {
      alimentos.push({ categoria: `${categoria} (provisional)`, keywords: nombres.map((n) => tokens(n)), ...r, esBaseDeGuarnicion: false, esRacionRealista: true });
    };
    provisional("Fruta fresca", ["platano", "naranja", "manzana", "pera", "fresa", "mandarina", "kiwi", "pina", "melon", "sandia", "uva", "melocoton", "albaricoque", "cereza", "mango"], { recomendado: 300, tope: 400 });
    provisional("Tofu / tempeh", ["tofu", "tempeh", "seitan"], { minimo: 80, recomendado: 250, tope: 300 });
    provisional("Hummus", ["hummus"], { tope: 100 });
    const fruto = alimentos.find((a2) => normalizar2(a2.categoria) === "fruto seco");
    if (fruto && fruto.minimo === void 0) fruto.minimo = 10;
    const verdura = alimentos.find((a2) => normalizar2(a2.categoria) === "verdura");
    if (verdura) verdura.keywords.push(...VERDURA_EXTRA.map((v) => tokens(v)));
    return { alimentos, pesoPlatoRecomendado, pesoPlatoTope, guarnicionMinima, protegidos };
  }
  var tablaInyectada;
  function definirTablaLimites(t2) {
    tablaInyectada = t2;
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
    return keywords.some((kw) => kw.every((t2) => tokensIngrediente.has(t2)));
  }
  var cacheLimite = /* @__PURE__ */ new WeakMap();
  var cacheProtegido = /* @__PURE__ */ new WeakMap();
  function deTabla(cache2, tabla2) {
    let m = cache2.get(tabla2);
    if (!m) {
      m = /* @__PURE__ */ new Map();
      cache2.set(tabla2, m);
    }
    return m;
  }
  function buscarLimite(tabla2, nombre) {
    const m = deTabla(cacheLimite, tabla2);
    let r = m.get(nombre);
    if (r === void 0) {
      r = tabla2.alimentos.find((a2) => coincide(nombre, a2.keywords)) ?? null;
      m.set(nombre, r);
    }
    return r ?? void 0;
  }
  function esProtegido(tabla2, nombre) {
    const m = deTabla(cacheProtegido, tabla2);
    let r = m.get(nombre);
    if (r === void 0) {
      const tokensIngrediente = new Set(tokens(nombre));
      r = tabla2.protegidos.some((p) => tokensIngrediente.has(stem(p)));
      m.set(nombre, r);
    }
    return r;
  }
  function esIngredienteProtegido(nombre) {
    const tabla2 = cargarTabla();
    if (esProtegido(tabla2, nombre)) return true;
    const limite = buscarLimite(tabla2, nombre);
    return limite !== void 0 && /^condimentos/i.test(limite.categoria);
  }
  var NO_LIQUIDO = /crema de (leche|cacahuete|cacao|avellana|almendra|queso|pistacho|coco)|crema (untable|de untar)/;
  var cacheLiquido = /* @__PURE__ */ new Map();
  function esLiquidoPorNombre(nombre) {
    let r = cacheLiquido.get(nombre);
    if (r === void 0) {
      r = esLiquidoSinCache(nombre);
      cacheLiquido.set(nombre, r);
    }
    return r;
  }
  function esLiquidoSinCache(nombre) {
    const n = normalizar2(nombre);
    if (NO_LIQUIDO.test(n)) return false;
    return LIQUIDO_KEYWORDS.some((k) => n.includes(k));
  }
  function validarPlato(franja, ingredientes, opts = {}) {
    const tabla2 = cargarTabla();
    const incumplimientos = [];
    const avisos = [];
    const esComidaOCena = franja === "comida" || franja === "cena";
    const esLiquido = opts.esLiquido ?? ingredientes.some((i) => esLiquidoPorNombre(i.nombre));
    let pesoTotalSolidos = 0;
    let pesoGuarnicion = 0;
    for (const ing of ingredientes) {
      const protegido = esProtegido(tabla2, ing.nombre);
      if (!protegido) pesoTotalSolidos += ing.gramos;
      const limite = buscarLimite(tabla2, ing.nombre);
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
    if (pesoTotalSolidos > tabla2.pesoPlatoTope) {
      incumplimientos.push(`Peso total del plato: ${pesoTotalSolidos} g supera el tope de ${tabla2.pesoPlatoTope} g`);
    } else if (pesoTotalSolidos > tabla2.pesoPlatoRecomendado) {
      avisos.push(`Peso total del plato: ${pesoTotalSolidos} g por encima de lo recomendado (${tabla2.pesoPlatoRecomendado} g)`);
    }
    if (esComidaOCena && !esLiquido && pesoGuarnicion < tabla2.guarnicionMinima) {
      incumplimientos.push(
        `Falta guarnici\xF3n: ${pesoGuarnicion} g de base de hidrato o verdura (m\xEDnimo ${tabla2.guarnicionMinima} g; la fruta no cuenta)`
      );
    }
    return { incumplimientos, avisos };
  }
  function rolIngrediente(nombre) {
    const declarado = rolesCatalogo.get(normalizar2(nombre));
    if (declarado) return declarado;
    const tabla2 = cargarTabla();
    const limite = buscarLimite(tabla2, nombre);
    const c2 = limite ? normalizar2(limite.categoria) : "";
    if (/^condimento/.test(c2)) return "condimento";
    if (esProtegido(tabla2, nombre)) return "fruta_lacteo";
    if (!limite) return "fijo";
    if (/^(pollo|ternera|pescado|atun|huevo|marisco|conejo|sepia)/.test(c2)) return "proteina";
    if (/^(legumbre|patata|cereal|pasta|pan)/.test(c2)) return "base";
    if (/^grasa/.test(c2)) return "grasa";
    if (/^cebolla/.test(c2)) return "aromatico";
    if (/^(verdura|hortaliza|hoja)/.test(c2)) return "verdura";
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
    const tabla2 = cargarTabla();
    const base = validarPlato(franja, ingredientes, opts.esLiquido === void 0 ? {} : { esLiquido: opts.esLiquido });
    const incumplimientos = base.incumplimientos.filter((i) => !i.startsWith("Peso total del plato"));
    const avisos = base.avisos.filter((a2) => !a2.startsWith("Peso total del plato"));
    const esLiquido = opts.esLiquido ?? ingredientes.some((i) => esLiquidoPorNombre(i.nombre));
    let peso = 0;
    for (const ing of ingredientes) {
      if (!esProtegido(tabla2, ing.nombre)) peso += ing.gramos;
      const max = racionRealistaMaxima(ing.nombre);
      if (max !== void 0 && !esLiquido && ing.gramos > max && !incumplimientos.some((i) => i.startsWith(`${ing.nombre}:`))) {
        incumplimientos.push(`${ing.nombre}: ${ing.gramos} g pasa de la raci\xF3n normal (${max} g)`);
      }
    }
    const maxPeso = opts.cargaAlta ? tabla2.pesoPlatoTope : tabla2.pesoPlatoRecomendado;
    if (peso > maxPeso) incumplimientos.push(`Peso total del plato: ${peso} g pasa del m\xE1ximo de ${maxPeso} g${opts.cargaAlta ? "" : " (hasta 900 g solo en d\xEDas de carga alta)"}`);
    else if (opts.cargaAlta && peso > tabla2.pesoPlatoRecomendado) avisos.push(`Peso total del plato: ${peso} g, por encima de 700 g (d\xEDa de carga alta)`);
    return { incumplimientos, avisos };
  }
  function limitesDeFactor(franja, ingredientes, cargaAlta = false) {
    const tabla2 = cargarTabla();
    const esComidaOCena = franja === "comida" || franja === "cena";
    const esLiquido = ingredientes.some((i) => esLiquidoPorNombre(i.nombre));
    const maxPeso = cargaAlta ? tabla2.pesoPlatoTope : tabla2.pesoPlatoRecomendado;
    let fMin = 0;
    let fMax = Infinity;
    let pesoFijo = 0;
    let pesoPalancas = 0;
    for (const ing of ingredientes) {
      const cuentaPeso = !esProtegido(tabla2, ing.nombre);
      if (!esPalanca(ing.nombre)) {
        if (cuentaPeso) pesoFijo += ing.gramos;
        continue;
      }
      if (cuentaPeso) pesoPalancas += ing.gramos;
      const limite = buscarLimite(tabla2, ing.nombre);
      const cap = limite ? limite.recomendado ?? limite.tope : void 0;
      if (cap !== void 0 && ing.gramos > 0) fMax = Math.min(fMax, cap / ing.gramos);
      if (limite?.minimo != null && esComidaOCena && !esLiquido && ing.gramos > 0) fMin = Math.max(fMin, limite.minimo / ing.gramos);
    }
    if (pesoPalancas > 0) fMax = Math.min(fMax, (maxPeso - pesoFijo) / pesoPalancas);
    return { fMin, fMax, hayPalancas: pesoPalancas > 0 || ingredientes.some((i) => esPalanca(i.nombre)) };
  }
  var rolesCatalogo = /* @__PURE__ */ new Map();
  var ROLES_VALIDOS = ["base", "proteina", "verdura", "grasa", "aromatico", "condimento", "fruta_lacteo", "fijo"];
  function definirRolIngrediente(nombre, rol) {
    if (ROLES_VALIDOS.includes(rol)) rolesCatalogo.set(normalizar2(nombre), rol);
  }
  function racionRealistaMinima(nombre) {
    const l = buscarLimite(cargarTabla(), nombre);
    return l?.minimo ?? void 0;
  }
  function conLimitesIngredientes(tabla2, limites) {
    const propios = limites.map((l) => {
      const previo = buscarLimite(tabla2, l.ingrediente);
      return {
        categoria: previo?.categoria ?? l.ingrediente,
        keywords: [tokens(l.ingrediente)],
        minimo: l.minG,
        recomendado: l.maxG,
        tope: Math.max(previo?.tope ?? l.maxG, l.maxG),
        esBaseDeGuarnicion: previo?.esBaseDeGuarnicion ?? false,
        esRacionRealista: previo?.esRacionRealista ?? true
      };
    });
    propios.sort((a2, b) => b.keywords[0].length - a2.keywords[0].length);
    return { ...tabla2, alimentos: [...propios, ...tabla2.alimentos] };
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
      const c2 = linea[i];
      if (entreComillas) {
        if (c2 === '"' && linea[i + 1] === '"') {
          actual += '"';
          i++;
        } else if (c2 === '"') {
          entreComillas = false;
        } else {
          actual += c2;
        }
      } else if (c2 === '"') {
        entreComillas = true;
      } else if (c2 === ",") {
        campos.push(actual);
        actual = "";
      } else {
        actual += c2;
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
    const cabIng = parseCsvLine2(csvIngredientes.split(/\r?\n/).find((l) => l.trim() !== "") ?? "");
    const colIng = (n) => cabIng.indexOf(n);
    const ingredientesPorReceta = /* @__PURE__ */ new Map();
    for (const cols of lineasDatos(csvIngredientes)) {
      const [recetaId, ingrediente, gramosRaw] = cols;
      const lista2 = ingredientesPorReceta.get(recetaId) ?? [];
      lista2.push({ nombre: ingrediente, gramos: Number(gramosRaw) });
      ingredientesPorReceta.set(recetaId, lista2);
      const iRol = colIng("rol");
      if (iRol >= 0 && cols[iRol]) definirRolIngrediente(ingrediente, cols[iRol].trim());
    }
    const cab = parseCsvLine2(csvRecetas.split(/\r?\n/).find((l) => l.trim() !== "") ?? "");
    const col = (n) => cab.indexOf(n);
    const dato = (cols, n) => col(n) >= 0 ? (cols[col(n)] ?? "").trim() : "";
    const lista = (t2) => t2.split(";").map((x) => x.trim()).filter(Boolean);
    return lineasDatos(csvRecetas).map((cols) => {
      const [id, nombre, franjasRaw, kcal, proteina, grasa, hidrato, notas] = cols;
      const tipoCol = dato(cols, "tipoPlato");
      const tipoNotas = /\b(primero|segundo|postre)\b/.exec(notas ?? "")?.[1];
      const tipo = tipoCol || tipoNotas || "";
      const uso = dato(cols, "uso_dia");
      const apt = { vegetariano: dato(cols, "apto_vegetariano"), vegano: dato(cols, "apto_vegano"), sinLactosa: dato(cols, "apto_sin_lactosa"), sinGluten: dato(cols, "apto_sin_gluten") };
      return {
        id,
        nombre,
        franjas: franjasRaw.split(";").map((f2) => f2.trim()).filter(Boolean),
        kcal: Number(kcal),
        proteina: Number(proteina),
        grasa: Number(grasa),
        hidrato: Number(hidrato),
        notas: notas ?? "",
        .../fibraAlta/.test(notas ?? "") ? { fibraAlta: true } : {},
        ...["primero", "segundo", "postre"].includes(tipo) ? { tipoPlato: tipo } : {},
        ...uso === "carga" ? { usoDia: "carga" } : {},
        ...col("alergenos") >= 0 ? { alergenos: lista(dato(cols, "alergenos")) } : {},
        ...col("apto_vegano") >= 0 ? { aptitudes: apt } : {},
        ...dato(cols, "bajo_fibra") ? { bajoFibra: dato(cols, "bajo_fibra") === "si" } : {},
        ...dato(cols, "proteina_principal") ? { proteinaPrincipal: dato(cols, "proteina_principal") } : {},
        ...dato(cols, "base_hidrato") ? { baseHidrato: lista(dato(cols, "base_hidrato")) } : {},
        ...dato(cols, "preparacion") ? { preparacion: dato(cols, "preparacion") } : {},
        ...dato(cols, "fibra_g") ? { fibraG: Number(dato(cols, "fibra_g")) } : {},
        ingredientes: ingredientesPorReceta.get(id) ?? []
      };
    });
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
  var normalizar3 = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
  function factorCocido(ingrediente) {
    const n = normalizar3(ingrediente);
    return FACTORES_COCIDO_EJEMPLO.find(([clave2]) => n === clave2 || n.startsWith(`${clave2} `))?.[1];
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
        const paso = v.valor === "hambre" ? 1 : mucha >= 2 ? -1 : 0;
        if (paso === 1 || paso && aMs(v.fecha) - ultimoCambio >= SEMANA_MS) {
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

  // src/motor/medidas-caseras.ts
  var COLUMNAS2 = ["ingrediente", "medida", "gramos", "estado", "fuente_url_o_nota"];
  function comprobarMedidasCsv(texto) {
    const fallos = [];
    const cab = (texto.split(/\r?\n/)[0] ?? "").split(",").map((x) => x.trim());
    for (const c2 of COLUMNAS2) if (!cab.includes(c2)) fallos.push(`falta la columna \xAB${c2}\xBB`);
    if (fallos.length) return fallos;
    const vistas = /* @__PURE__ */ new Set();
    for (const r of registros(texto)) {
      const id = `${r.ingrediente || "(sin nombre)"} \xB7 ${r.medida || "(sin medida)"}`;
      if (!r.ingrediente) fallos.push("fila sin ingrediente");
      if (!r.medida) fallos.push(`${id}: sin medida`);
      if (vistas.has(id.toLowerCase())) fallos.push(`${id}: fila duplicada`);
      vistas.add(id.toLowerCase());
      const g = Number(r.gramos.replace(",", "."));
      if (!Number.isFinite(g) || g <= 0 || g > 500) fallos.push(`${id}: gramos \xAB${r.gramos}\xBB no es el peso de una medida (0-500)`);
      if (r.estado !== "fuente" && r.estado !== "estimacion") fallos.push(`${id}: estado \xAB${r.estado}\xBB (solo fuente o estimacion)`);
      if (!r.fuente_url_o_nota) fallos.push(`${id}: sin fuente_url_o_nota`);
    }
    return fallos;
  }
  function medidasDesdeCsv(texto) {
    return registros(texto).map((r) => ({ ingrediente: r.ingrediente, medida: r.medida, gramos: Number(r.gramos.replace(",", ".")), estado: r.estado }));
  }
  var FRACCIONES = { 0.5: "\xBD", 1.5: "1\xBD", 2.5: "2\xBD", 3.5: "3\xBD" };
  var mismoNombre = (a2, b) => a2.trim().toLowerCase() === b.trim().toLowerCase();
  var esMedidaIndivisible = (m) => /^(vasito|lata)\b/i.test(m.medida) || /^huevo\b/i.test(m.ingrediente.trim()) && /^unidad\b/i.test(m.medida);
  function unidadIndivisible(medidas, ingrediente) {
    return medidas.find((m) => mismoNombre(m.ingrediente, ingrediente) && esMedidaIndivisible(m))?.gramos;
  }
  function medidaCasera(medidas, ingrediente, gramos) {
    if (!(gramos > 0)) return void 0;
    const suyas = medidas.filter((m) => mismoNombre(m.ingrediente, ingrediente)).sort((a2, b) => b.gramos - a2.gramos);
    if (!suyas.length) return void 0;
    const texto = (n, m) => {
      const media = /^media\s+(.+)$/i.exec(m.medida);
      if (!media) return `\u2248 ${FRACCIONES[n] ?? String(n)} \xD7 ${m.medida}`;
      const u = n / 2;
      if (u === 0.25) return `\u2248 \xBC de ${media[1]}`;
      if (u === 0.5) return `\u2248 media ${media[1]}`;
      if (u === 0.75) return `\u2248 \xBE de ${media[1]}`;
      return `\u2248 ${FRACCIONES[u] ?? String(u)} \xD7 ${media[1]}`;
    };
    const [mayor, ...resto] = suyas;
    for (const m of [mayor, ...resto.reverse()]) {
      const n = gramos / m.gramos;
      if (esMedidaIndivisible(m)) {
        const k = Math.round(n);
        if (k >= 1 && k <= 4 && Math.abs(n - k) / k <= 0.12) return texto(k, m);
        if (n >= 0.5) return void 0;
        continue;
      }
      if (n > 4.25) return void 0;
      if (n < 0.45) continue;
      return texto(Math.min(4, Math.round(n * 2) / 2), m);
    }
    return void 0;
  }
  function racionEnPalabras(factor) {
    const c2 = Math.max(1, Math.round(factor * 4));
    const enteras = Math.floor(c2 / 4);
    const resto = c2 % 4;
    const NUM = ["", "una", "dos", "tres", "cuatro"];
    if (enteras === 0) return resto === 1 ? "un cuarto de raci\xF3n" : resto === 2 ? "media raci\xF3n" : "tres cuartos de raci\xF3n";
    const base = enteras === 1 ? "una raci\xF3n" : `${NUM[enteras] ?? String(enteras)} raciones`;
    return resto === 0 ? base : `${base} y ${resto === 1 ? "cuarto" : resto === 2 ? "media" : "tres cuartos"}`;
  }

  // src/motor/medidas-caseras-datos.ts
  var MEDIDAS_CASERAS_CSV = `ingrediente,medida,gramos,estado,fuente_url_o_nota
pan integral,rebanada mediana de barra,30,fuente,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | p10 PAN rebanada30g, tal cual; no todas las barras tienen igual corte."
pan integral,rebanada mediana de molde,20,fuente,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | p10 PAN DE MOLDE rebanada mediana20g, tal cual; confirmar etiqueta si se conoce marca."
pan blanco,rebanada mediana de barra,30,fuente,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | p10 PAN rebanada30g, tal cual; no todas las barras tienen igual corte."
pan blanco,rebanada mediana de molde,20,fuente,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | p10 PAN DE MOLDE rebanada mediana20g, tal cual; confirmar etiqueta si se conoce marca."
aceite de oliva,cucharada sopera rasa,10,fuente,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | p2 ACEITES:10g, no10ml; cuchara dom\xE9stica orientativa."
aceite de oliva,cucharada de postre,5,fuente,https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | p2 ACEITES:5g.
aceite de oliva,cucharada de caf\xE9,3,fuente,https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | p2 ACEITES:3g.
arroz,cucharada sopera colmada en seco,30,fuente,https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | p3 ARROZ:30g; no arroz cocido.
copos de avena,cucharada sopera,13,estimacion,"https://www.bda.uk.com/resource/food-facts-portion-sizes.html | Tabla avena40g=3cucharadas:40/3=13.33g, redondeado13g. Copos secos; forma de colmar var\xEDa."
huevo,unidad mediana sin c\xE1scara,50,estimacion,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf ; https://www.fen.org.es/MercadoAlimentosFEN/pdfs/huevos.pdf | Huevo completo mediano60g\xD7porci\xF3n comestible0.88=52.8g, redondeado50g. No incluir c\xE1scara; pesar si exactitud necesaria."
huevo cocido,unidad mediana sin c\xE1scara,50,estimacion,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf ; https://www.fen.org.es/MercadoAlimentosFEN/pdfs/huevos.pdf | Misma cifra que huevo en crudo (huevo completo mediano60g\xD7porci\xF3n comestible0.88=52.8g, redondeado50g): el cocido pesa lo mismo que en crudo, sin c\xE1scara. No sumar c\xE1scara; pesar si exactitud necesaria."
almendra,pu\xF1ado peque\xF1o sin c\xE1scara,20,estimacion,https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | Raci\xF3n orientativa20-30g=pu\xF1ado; se elige20g prudente. Mano/tama\xF1o var\xEDan; no contar nueces con c\xE1scara.
nueces,pu\xF1ado peque\xF1o sin c\xE1scara,20,estimacion,https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | Raci\xF3n orientativa20-30g=pu\xF1ado; se elige20g prudente. Mano/tama\xF1o var\xEDan; no contar nueces con c\xE1scara.
yogur natural,vasito de 125 g,125,fuente,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | p13 YOGUR unidad125g; preparado tal cual. Para griego s\xF3lo vasito marcado125g, no todos los envases. Sin conversi\xF3n de ml."
yogur griego,vasito de 125 g,125,estimacion,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | p13 YOGUR unidad125g; preparado tal cual. Para griego s\xF3lo vasito marcado125g, no todos los envases. Sin conversi\xF3n de ml."
leche semidesnatada,vaso peque\xF1o,200,fuente,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | p7 LECHE vaso200g, tal cual; cifra en g de la tabla, no confundir con200ml."
leche semidesnatada,taza,250,fuente,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | p7 LECHE taza250g, tal cual; tama\xF1o dom\xE9stico orientativo."
pl\xE1tano,unidad mediana pelada,80,fuente,"https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Tabla4 peso neto de la medida; mandarina2peque\xF1as120g/2=60g. Tama\xF1o medio de la fuente, no garant\xEDa de cualquier pieza."
manzana,unidad mediana sin coraz\xF3n,160,fuente,"https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Tabla4 peso neto de la medida; mandarina2peque\xF1as120g/2=60g. Tama\xF1o medio de la fuente, no garant\xEDa de cualquier pieza."
naranja,unidad mediana pelada,200,fuente,"https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Tabla4 peso neto de la medida; mandarina2peque\xF1as120g/2=60g. Tama\xF1o medio de la fuente, no garant\xEDa de cualquier pieza."
pera,unidad mediana sin coraz\xF3n,150,fuente,"https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Tabla4 peso neto de la medida; mandarina2peque\xF1as120g/2=60g. Tama\xF1o medio de la fuente, no garant\xEDa de cualquier pieza."
kiwi,unidad mediana pelada,80,fuente,"https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Tabla4 peso neto de la medida; mandarina2peque\xF1as120g/2=60g. Tama\xF1o medio de la fuente, no garant\xEDa de cualquier pieza."
mandarina,unidad peque\xF1a pelada,60,estimacion,"https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Tabla4 peso neto de la medida; mandarina2peque\xF1as120g/2=60g. Tama\xF1o medio de la fuente, no garant\xEDa de cualquier pieza."
pi\xF1a,rodaja mediana sin piel,120,fuente,"https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Tabla4 peso neto de la medida; mandarina2peque\xF1as120g/2=60g. Tama\xF1o medio de la fuente, no garant\xEDa de cualquier pieza."
mel\xF3n,rodaja mediana sin piel ni semillas,250,fuente,"https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Tabla4 peso neto de la medida; mandarina2peque\xF1as120g/2=60g. Tama\xF1o medio de la fuente, no garant\xEDa de cualquier pieza."
sand\xEDa,rodaja mediana sin piel,250,fuente,"https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Tabla4 peso neto de la medida; mandarina2peque\xF1as120g/2=60g. Tama\xF1o medio de la fuente, no garant\xEDa de cualquier pieza."
tomate,unidad mediana,150,fuente,https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Tabla4 tomate maduro crudo:unidad150g netos.
zanahoria,unidad grande limpia,100,fuente,https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Tabla4 zanahoria cruda:unidadgrande100g netos.
cebolla,unidad mediana limpia,100,fuente,https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Tabla4:unidadmediana100g netos; distinta a referencia UCM2015entera150g.
pimiento rojo,unidad mediana limpia,150,fuente,"https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Tabla4:unidadmediana150g netos, sin ped\xFAnculo/semillas."
pimiento verde,unidad mediana limpia,75,estimacion,https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Tabla4:2unidades150gnetos;150/2=75g. Tama\xF1o var\xEDa mucho.
champi\xF1\xF3n,unidad mediana limpia,20,estimacion,https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Tabla4:5unidades100gcrudos;100/5=20g.
patata,unidad mediana con piel,170,fuente,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | p11 PATATA unidadmediana170g completa; s\xF3lo usar si receta pesa con piel. Para pelada pesar neto, no usar esta conversi\xF3n."
ajo,diente limpio,5,estimacion,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | p2 diente5g completo como comprado; se asume redondeo similar limpio. Var\xEDa mucho por calibre, pesar si es relevante."
aguacate,media unidad mediana sin piel ni hueso,60,fuente,https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Tabla4:mediaunidad120gbruto=60gneto.
crema de cacahuete,cucharada sopera,30,fuente,"https://www.bda.uk.com/resource/food-facts-portion-sizes.html | Tabla unsaltednutsornutbutter30g=handfulortablespoon; usar cucharada para crema, tal cual. Variaci\xF3n dom\xE9stica alta."
cacao puro en polvo,cucharada de caf\xE9,4,estimacion,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | p4 CACAOENPOLVO4g; analog\xEDa para cacao puro, no mezcla azucarada; comprobar etiqueta/compactaci\xF3n."
tomate triturado,cucharada sopera,15,estimacion,https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Tabla4:10cucharadas150g;150/10=15g. Conserva tal cual.
garbanzo cocido,cucharada sopera de legumbre cocida escurrida,15,estimacion,"https://www.bda.uk.com/resource/food-facts-portion-sizes.html; https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | Peso en crudo (decisi\xF3n Pablo 14/10): 15 g en seco. Ayuda: 1 cucharada sopera de cocida escurrida = 37.5 g (BDA 150 g = 4 cucharadas), factor oficial x0.4. Variabilidad de caldo/escurrido/grano."
lenteja cocida,cucharada sopera de legumbre cocida escurrida,15,estimacion,"https://www.bda.uk.com/resource/food-facts-portion-sizes.html; https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | Peso en crudo (decisi\xF3n Pablo 14/10): 15 g en seco. Ayuda: 1 cucharada sopera de cocida escurrida = 37.5 g (BDA 150 g = 4 cucharadas), factor oficial x0.4. Variabilidad de caldo/escurrido/grano."
alubia blanca cocida,cucharada sopera de legumbre cocida escurrida,15,estimacion,"https://www.bda.uk.com/resource/food-facts-portion-sizes.html; https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | Peso en crudo (decisi\xF3n Pablo 14/10): 15 g en seco. Ayuda: 1 cucharada sopera de cocida escurrida = 37.5 g (BDA 150 g = 4 cucharadas), factor oficial x0.4. Variabilidad de caldo/escurrido/grano."
alubia roja cocida,cucharada sopera de legumbre cocida escurrida,15,estimacion,"https://www.bda.uk.com/resource/food-facts-portion-sizes.html; https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | Peso en crudo (decisi\xF3n Pablo 14/10): 15 g en seco. Ayuda: 1 cucharada sopera de cocida escurrida = 37.5 g (BDA 150 g = 4 cucharadas), factor oficial x0.4. Variabilidad de caldo/escurrido/grano."
hummus,cucharada sopera,30,fuente,"https://www.bda.uk.com/static/61ad81e4-ea30-41d3-a03717a2467754d9/Practical-guide-other-sources-of-PROTEIN.pdf | Tabla hummus2tbsp60g:unacucharada30g de preparado, no garbanzo crudo. | Preparado tal cual; no aplica peso en crudo."
`;

  // src/motor/proteina-grupo.ts
  var GRUPOS = [
    ["pollo", /\bpollo\b/],
    ["pavo", /\bpavo\b/],
    ["ternera", /\b(ternera|vacuno|buey)\b/],
    ["cerdo", /\b(cerdo|jamon|lomo embuchado)\b/],
    ["conejo", /\bconejo\b/],
    ["cordero", /\bcordero\b/],
    ["bacalao", /\bbacalao\b/],
    ["merluza", /\b(merluza|pescadilla)\b/],
    ["atun", /\batun\b/],
    ["salmon", /\bsalmon\b/],
    ["sardina", /\bsardinas?\b/],
    ["caballa", /\bcaballa\b/],
    ["lubina", /\blubina\b/],
    ["dorada", /\bdorada\b/],
    ["marisco", /\b(sepia|calamar(es)?|mejillon(es)?|gambas?|langostinos?|pulpo)\b/],
    ["huevo", /\b(huevos?|claras?)\b/],
    ["legumbre", /\b(lentejas?|garbanzos?|alubias?|judias? (blancas?|rojas?|pintas?)|hummus|frijol(es)?)\b/],
    ["soja", /\b(tofu|tempeh|soja texturizada|edamame)\b/]
  ];
  var normal = (t2) => t2.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  var cache = /* @__PURE__ */ new WeakMap();
  function gruposDePlato(p) {
    let g = cache.get(p);
    if (!g) {
      const textos = [p.proteinaPrincipal ?? "", ...p.ingredientes.map((i) => i.nombre)].map(normal);
      g = new Set(GRUPOS.filter(([, re]) => textos.some((t2) => re.test(t2))).map(([x]) => x));
      cache.set(p, g);
    }
    return g;
  }
  function gruposProteina(r, porId) {
    if (!r.platos || !porId) return gruposDePlato(r);
    const g = /* @__PURE__ */ new Set();
    for (const id of r.platos) {
      const p = porId.get(id);
      if (p && p.tipoPlato !== "postre") for (const x of gruposDePlato(p)) g.add(x);
    }
    return g;
  }
  function chocaConElDia(r, otra, porId) {
    if (!otra) return false;
    const otrasIds = otra.platos ?? [otra.id];
    if ((r.platos ?? [r.id]).some((id) => otrasIds.includes(id))) return true;
    const g = gruposProteina(otra, porId);
    for (const x of gruposProteina(r, porId)) if (g.has(x)) return true;
    return false;
  }
  var BASES = [["arroz", /\barroz\b/], ["pasta", /\bpasta\b/], ["patata", /\bpatatas?\b/]];
  var cacheBases = /* @__PURE__ */ new WeakMap();
  function basesDePlato(p) {
    let b = cacheBases.get(p);
    if (!b) {
      const textos = p.ingredientes.map((i) => normal(i.nombre));
      b = new Set(BASES.filter(([, re]) => textos.some((t2) => re.test(t2))).map(([x]) => x));
      if (gruposDePlato(p).has("legumbre")) b.add("legumbre");
      cacheBases.set(p, b);
    }
    return b;
  }
  function basesDe(r, porId) {
    if (!r.platos || !porId) return basesDePlato(r);
    const b = /* @__PURE__ */ new Set();
    for (const id of r.platos) {
      const p = porId.get(id);
      if (p && p.tipoPlato !== "postre") for (const x of basesDePlato(p)) b.add(x);
    }
    return b;
  }

  // src/motor/desayuno-preferido.ts
  var ENCIMAS_PAN = [
    { id: "tomate", nombre: "Tomate", alimentos: ["tomate"] },
    { id: "huevo", nombre: "Huevo o tortilla", alimentos: ["huevo", "claras de huevo"] },
    { id: "pescado", nombre: "At\xFAn, sardina o salm\xF3n", alimentos: ["at\xFAn", "sardina", "salm\xF3n"] },
    { id: "fiambre", nombre: "Pavo o pollo", alimentos: ["pechuga de pavo", "pechuga de pollo"] },
    { id: "queso", nombre: "Queso", alimentos: ["mozzarella", "reques\xF3n", "queso"] },
    { id: "aguacate", nombre: "Aguacate", alimentos: ["aguacate"] },
    { id: "hummus", nombre: "Hummus", alimentos: ["hummus"] },
    { id: "cacahuete", nombre: "Crema de cacahuete", alimentos: ["crema de cacahuete"] },
    { id: "vegetal", nombre: "Tofu o tempeh", alimentos: ["tofu", "tempeh"] }
  ];
  var empieza = (nombre, alimento) => {
    const n = nombre.toLowerCase().trim();
    return n === alimento || n.startsWith(`${alimento} `);
  };
  var esDesayunoDePan = (r) => r.ingredientes.some((i) => empieza(i.nombre, "pan"));
  function encimasDe(r) {
    return ENCIMAS_PAN.filter((e) => r.ingredientes.some((i) => e.alimentos.some((a2) => empieza(i.nombre, a2)))).map((e) => e.id);
  }
  function preferenciaDesayunoValida(p) {
    const o = p;
    if (o?.modo === "mismo" && typeof o.receta === "string" && o.receta) return { modo: "mismo", receta: o.receta };
    if (o?.modo === "pan") {
      const ids = new Set(ENCIMAS_PAN.map((e) => e.id));
      return { modo: "pan", con: Array.isArray(o.con) ? [...new Set(o.con.filter((c2) => typeof c2 === "string" && ids.has(c2)))] : [] };
    }
    return { modo: "variado" };
  }
  function desayunoCumple(r, p) {
    if (!p || p.modo === "variado") return true;
    if (p.modo === "mismo") return r.id === p.receta;
    if (!esDesayunoDePan(r)) return false;
    return !p.con.length || encimasDe(r).some((e) => p.con.includes(e));
  }

  // src/motor/asignador-recetas.ts
  var MEDIDAS = medidasDesdeCsv(MEDIDAS_CASERAS_CSV);
  function fibraServidaEstimada(r, slot) {
    if (typeof r.fibraG !== "number" || !(r.kcal > 0)) return void 0;
    return r.fibraG * Math.min(2, Math.max(0.5, slot.kcalObjetivo / r.kcal));
  }
  function fibraExcede(slot, r) {
    if (slot.sinFibraAlta && r.fibraAlta) return true;
    if (slot.maxFibraG === void 0) return false;
    if (r.fibraAlta) return true;
    const f2 = fibraServidaEstimada(r, slot);
    return f2 !== void 0 && f2 > slot.maxFibraG;
  }
  function motivoFibra(slot) {
    return slot.maxFibraG !== void 0 && !slot.sinFibraAlta ? `antes de la prueba la raci\xF3n servida lleva como mucho ${slot.maxFibraG} g de fibra` : "la v\xEDspera de una competici\xF3n evita la fibra alta (legumbre, integral o verdura cruda)";
  }
  function validarPeticionSiOSi(franja, veces) {
    if (!Number.isInteger(veces) || veces < 1) return "las veces por semana deben ser un n\xFAmero entero de 1 en adelante";
    const max = franja === "comida" || franja === "cena" ? 2 : 7;
    return veces > max ? `en ${franja === "comida" || franja === "cena" ? "comidas y cenas" : "esta franja"} se puede pedir como mucho ${max} veces por semana` : void 0;
  }
  var AJUSTE_MAX = 0.2;
  var FRANJAS_CON_LIMITE_VARIEDAD = ["comida", "cena"];
  var GRUPO_VARIEDAD = { desayuno: "desayuno", media_manana: "tentempie", merienda: "tentempie" };
  var MIN_DISTINTAS_GRUPO = 2;
  var MAX_SOJA = 2;
  var MIN_LEGUMBRE = 2;
  var MAX_BASE = 4;
  var PESO_VIOLACION_E2 = 300;
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
    let factorRedondeado = factor > 1 ? Math.floor(factor * 100 + 1e-9) / 100 : Math.ceil(factor * 100 - 1e-9) / 100;
    const enteras = opciones.sinUnidades ? [] : palancas.flatMap((i) => {
      const u = unidadIndivisible(MEDIDAS, i.nombre);
      return u && i.gramos > 0 ? [{ g: i.gramos, u }] : [];
    });
    if (enteras.length) {
      const { g, u } = enteras[0];
      const unidadesEnteras = (f2) => enteras.every((x) => {
        const n = x.g * f2 / x.u;
        return n >= 0.95 && Math.abs(n - Math.round(n)) <= 0.05 * Math.round(n) + 1e-9;
      });
      let mejor;
      for (let k = 1; k * u * 0.95 <= techo * g + 1e-9; k++) {
        const f2 = Math.min(techo, Math.max(suelo, k * u / g, k * u * 0.95 / g), k * u * 1.05 / g);
        if (f2 < suelo - 1e-9 || !unidadesEnteras(f2)) continue;
        if (mejor === void 0 || Math.abs(f2 - factor) < Math.abs(mejor - factor)) mejor = f2;
      }
      if (mejor !== void 0) {
        factorRedondeado = Math.round(mejor * 1e4) / 1e4;
        if (factorRedondeado > techo) factorRedondeado = Math.floor(mejor * 1e4) / 1e4;
        if (factorRedondeado < suelo) factorRedondeado = Math.ceil(mejor * 1e4) / 1e4;
      }
    }
    const kcalResultante = Math.round(receta.kcal + kcalPalancas * (factorRedondeado - 1));
    return { factor: factorRedondeado, factorRedondeado, kcalResultante, desviacion: Math.abs(kcalResultante - kcalObjetivo), suelo, techo };
  }
  function gramosEscalados(receta, factorRedondeado) {
    return receta.ingredientes.map((i) => ({
      nombre: i.nombre,
      gramos: esPalanca(i.nombre) ? Math.round(i.gramos * factorRedondeado * 10) / 10 : i.gramos
    }));
  }
  function incumplimientosRacion(franja, receta, factorRedondeado, opciones = {}) {
    const protegidos = receta.ingredientes.filter((i) => esIngredienteProtegido(i.nombre) || ["fruta_lacteo", "condimento"].includes(rolIngrediente(i.nombre))).map((i) => i.nombre);
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
    const principales = platos.filter((p) => p.tipoPlato !== "postre");
    const franjas = (principales.length ? principales : platos)[0].franjas.filter((f2) => (principales.length ? principales : platos).every((p) => p.franjas.includes(f2)));
    const aptitud = (clave2) => {
      const valores = platos.map((p) => p.aptitudes?.[clave2] ?? "pendiente_ficha");
      return valores.includes("no") ? "no" : valores.every((v) => v === "si") ? "si" : "pendiente_ficha";
    };
    return {
      ...platos.some((p) => p.alergenos) ? { alergenos: [...new Set(platos.flatMap((p) => p.alergenos ?? []))] } : {},
      ...platos.some((p) => p.aptitudes) ? { aptitudes: { vegetariano: aptitud("vegetariano"), vegano: aptitud("vegano"), sinLactosa: aptitud("sinLactosa"), sinGluten: aptitud("sinGluten") } } : {},
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
      ...platos.every((p) => typeof p.fibraG === "number") ? { fibraG: platos.reduce((s, p) => s + p.fibraG, 0) } : {},
      ...platos.every((p) => p.preparacion) ? { preparacion: platos.map((p) => p.preparacion).join(" ") } : {},
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
          ...a2.fijada ? { fijada: true } : {},
          ...a2.ajusteDia ? { ajusteDia: a2.ajusteDia } : {}
        });
      }
    }
    return resultado;
  }
  function asignarRecetas(slots, recetas, opciones = {}) {
    const compuestas = /* @__PURE__ */ new Map();
    const componer = (platos) => {
      const id = platos.map((p) => p.id).join("+");
      let c2 = compuestas.get(id);
      if (!c2) {
        c2 = componerComida(platos);
        compuestas.set(id, c2);
      }
      return c2;
    };
    const conMargen = asignarPasada(slots, recetas, opciones, true, componer);
    const lejos = (r) => r.avisos.filter((a3) => / se queda a \d+ kcal /.test(a3)).length;
    if (!conMargen.resultado.huecos.length && !lejos(conMargen.resultado)) return conMargen.resultado;
    const sinMargen = asignarPasada(slots, recetas, opciones, false, componer);
    const nota = (x) => [x.resultado.huecos.length, lejos(x.resultado), x.exceso];
    const [a2, b] = [nota(conMargen), nota(sinMargen)];
    const i = a2.findIndex((v, k) => v !== b[k]);
    return i >= 0 && a2[i] < b[i] ? conMargen.resultado : sinMargen.resultado;
  }
  function asignarPasada(slots, recetas, opciones, conMargen, componer) {
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
    const preferidasPorSlot = /* @__PURE__ */ new Map();
    for (const p of opciones.preferir ?? []) {
      const rp = recetaDeId(catalogoPorId, p.receta);
      if (rp) preferidasPorSlot.set(claveSlotSiOSi(p), rp);
    }
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
      if (fibraExcede(slot, receta)) {
        estadosFijadas.push({ ...base, ok: false, causa: slot.sinFibraAlta ? "es v\xEDspera de competici\xF3n y esta receta lleva fibra alta: ese d\xEDa elige la app" : "es un d\xEDa de competici\xF3n con poca fibra y esta receta lleva demasiada: ese d\xEDa elige la app", arreglo: "Se propone otra receta solo para este d\xEDa." });
        continue;
      }
      if (!receta.franjas.includes(slot.franja)) {
        estadosFijadas.push({ ...base, ok: false, causa: "esta receta no vale para esta comida", arreglo: "La app ha puesto otra receta compatible en su lugar; puedes elegir otra de las opciones o quitar la fijaci\xF3n." });
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
        if (fibraExcede(slot, receta)) {
          motivos.add(motivoFibra(slot));
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
      for (const c2 of candidatos) {
        if (elegidos.length >= p.veces) break;
        if (reservas.has(claveSlotSiOSi(c2.slot)) || fijadasPorSlot.has(claveSlotSiOSi(c2.slot))) continue;
        const i = DIAS.indexOf(c2.slot.dia);
        if (elegidos.some((x) => Math.abs(DIAS.indexOf(x.slot.dia) - i) === 1)) continue;
        elegidos.push(c2);
      }
      for (const c2 of candidatos) {
        if (elegidos.length >= p.veces) break;
        if (!reservas.has(claveSlotSiOSi(c2.slot)) && !fijadasPorSlot.has(claveSlotSiOSi(c2.slot)) && !elegidos.includes(c2)) elegidos.push(c2);
      }
      for (const c2 of elegidos) reservas.set(claveSlotSiOSi(c2.slot), c2.e);
      const causa = elegidos.length >= p.veces ? void 0 : motivos.size ? [...motivos][0] : candidatos.length ? "no hay d\xEDas libres suficientes para colocarla" : "no hay ninguna franja de este tipo en tu plan";
      estadosSiOSi.push({ ...base, colocadas: elegidos.length, ...causa ? { causa } : {} });
    }
    const idsDe = (r) => r.platos ?? [r.id];
    const evitarIds = new Set(opciones.evitar ?? []);
    const usosDe = (r) => Math.max(...idsDe(r).map((id) => usos.get(id) ?? 0));
    const otraComidaDelDia = (slot) => {
      const otra = slot.franja === "comida" ? "cena" : slot.franja === "cena" ? "comida" : void 0;
      if (!otra) return void 0;
      const ya = asignaciones.find((a2) => a2.dia === slot.dia && a2.franja === otra);
      if (ya) return recetaDeId(catalogoPorId, ya.receta);
      const k = `${slot.dia}|${otra}`;
      return (fijadasPorSlot.get(k) ?? reservas.get(k))?.receta;
    };
    const usadosPorGrupo = /* @__PURE__ */ new Map();
    const ultimoPorGrupo = /* @__PURE__ */ new Map();
    const sinPreferenciaDesayuno = /* @__PURE__ */ new Set();
    const libre = (s) => !fijadasPorSlot.has(claveSlotSiOSi(s)) && !reservas.has(claveSlotSiOSi(s));
    const omnivoro = !opciones.alergiasPreferencias?.vegetariano;
    const vecesBase = /* @__PURE__ */ new Map();
    let vecesSoja = 0, vecesLegumbre = 0;
    const cola = [...slots];
    for (let iSlot = 0; iSlot < cola.length; iSlot++) {
      const slot = cola[iSlot];
      const limitada = esFranjaConLimiteVariedad(slot.franja);
      const ap = opciones.alergiasPreferencias;
      const franjaVale = (r) => r.franjas.includes(slot.franja) || r.tipoPlato === "postre" && (r.franjas.includes("merienda") || r.franjas.includes("media_manana"));
      const diaVale = (r) => !(r.usoDia === "carga" && !slot.cargaAlta);
      const vale = (r) => franjaVale(r) && diaVale(r) && !fibraExcede(slot, r) && (!ap || evaluarCompatibilidad(r, ap).compatible);
      const esUnico = (r) => !r.tipoPlato || r.tipoPlato === "unico" || r.tipoPlato === "postre" && slot.franja !== "comida" && slot.franja !== "cena";
      const otraDelDia = otraComidaDelDia(slot);
      let distintaDelDia = true;
      const grupo = GRUPO_VARIEDAD[slot.franja];
      const usadosGrupo = grupo ? usadosPorGrupo.get(grupo) ?? /* @__PURE__ */ new Set() : void 0;
      const quedan = grupo ? cola.slice(iSlot).filter((s) => GRUPO_VARIEDAD[s.franja] === grupo && libre(s)).length : 0;
      const prefDesayuno = slot.franja === "desayuno" && !sinPreferenciaDesayuno.has(claveSlotSiOSi(slot)) && opciones.desayuno?.modo !== "variado" ? opciones.desayuno : void 0;
      const desayunoVale = (r) => desayunoCumple(r, prefDesayuno);
      const forzarVariedad = !!usadosGrupo && usadosGrupo.size > 0 && usadosGrupo.size < MIN_DISTINTAS_GRUPO && quedan <= MIN_DISTINTAS_GRUPO - usadosGrupo.size;
      const ultimo = grupo ? ultimoPorGrupo.get(grupo) : void 0;
      const pasesVariedad = prefDesayuno?.modo === "mismo" ? [void 0] : prefDesayuno?.modo === "pan" && usadosGrupo?.size ? [usadosGrupo, ...ultimo ? [/* @__PURE__ */ new Set([ultimo])] : [], void 0] : forzarVariedad ? [usadosGrupo, void 0] : [void 0];
      let excluir;
      const variado = (r) => !excluir || !idsDe(r).some((id) => excluir.has(id));
      const delDia = (r) => !distintaDelDia || !chocaConElDia(r, otraDelDia, catalogoPorId);
      const esCC = slot.franja === "comida" || slot.franja === "cena";
      const quedanCC = esCC ? cola.slice(iSlot).filter((s) => (s.franja === "comida" || s.franja === "cena") && libre(s)).length : 0;
      const faltaLegumbre = Math.max(0, MIN_LEGUMBRE - vecesLegumbre);
      const forzarLegumbre = faltaLegumbre > 0 && quedanCC <= 2 * faltaLegumbre + (conMargen ? 4 : 0);
      const topeBase = conMargen ? MAX_BASE - 1 : MAX_BASE;
      const basesOtra = otraDelDia ? basesDe(otraDelDia, catalogoPorId) : /* @__PURE__ */ new Set();
      let variedadCC = esCC;
      const violacionesE2 = (r) => {
        if (!esCC) return 0;
        const g = gruposProteina(r, catalogoPorId);
        let n = omnivoro && g.has("soja") && vecesSoja >= MAX_SOJA ? 1 : 0;
        if (forzarLegumbre && !g.has("legumbre")) n++;
        for (const b of basesDe(r, catalogoPorId)) n += (basesOtra.has(b) ? 1 : 0) + ((vecesBase.get(b) ?? 0) >= topeBase ? 1 : 0);
        return n;
      };
      const semanaVaria = (r) => !variedadCC || violacionesE2(r) === 0;
      const intentarBase = (lista, filtrar) => {
        const candidatas = filtrar ? lista.filter((r) => r.franjas.includes(slot.franja) && diaVale(r) && !fibraExcede(slot, r)) : lista;
        if (!candidatas.length) {
          return { motivo: slot.sinFibraAlta || slot.maxFibraG !== void 0 ? "por la fibra (v\xEDspera o antes de la prueba) no hay receta que valga para esta franja" : "ninguna receta del cat\xE1logo declara esta franja" };
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
          const falta = faltaProteina(r, factorRedondeado2) + PESO_VIOLACION_E2 * violacionesE2(r);
          if (!mejor || clave2(desviacion, dist, falta) < clave2(mejor.desviacion, mejor.dist ?? 0, mejor.falta ?? 0)) mejor = { receta: r, factor, kcalResultante, desviacion, dist, falta };
        }
        if (!mejor) return { motivo: `con la raci\xF3n escalada al objetivo ninguna receta disponible pasa el validador de platos (${descartadas.join(" | ")})` };
        return { elegido: mejor };
      };
      const intentar = (listaTodas, filtrar) => {
        const lista = listaTodas.filter((r) => delDia(r) && variado(r) && semanaVaria(r) && desayunoVale(r));
        if (!lista.length) return { motivo: "todas las opciones repiten el plato o la prote\xEDna de la otra comida del d\xEDa" };
        if (evitarIds.size) {
          const nuevas = intentarBase(lista.filter((r) => !idsDe(r).some((id) => evitarIds.has(id))), filtrar);
          if (nuevas.elegido && alcanza(nuevas.elegido)) return nuevas;
        }
        return intentarBase(lista, filtrar);
      };
      const alcanza = (e) => !!e && e.desviacion <= slot.kcalObjetivo * 0.1;
      const faltaProteina = (r, factor) => slot.proteinaObjetivoG === void 0 ? 0 : Math.max(0, slot.proteinaObjetivoG - proteinaServida(r, factor));
      const clave2 = (desv, dist, falta = 0) => desv > slot.kcalObjetivo * 0.1 ? 1e9 + desv : dist * 1e5 + desv + 4 * falta;
      const fijada = fijadasPorSlot.get(claveSlotSiOSi(slot));
      const reservada = fijada ? void 0 : reservas.get(claveSlotSiOSi(slot));
      const preferida = fijada || reservada ? void 0 : preferidasPorSlot.get(claveSlotSiOSi(slot));
      let res = { motivo: "ninguna receta disponible" };
      for (const pase of !fijada && !reservada ? pasesVariedad : [void 0]) {
        excluir = pase;
        variedadCC = esCC;
        const conservada = preferida && vale(preferida) && delDia(preferida) && variado(preferida) && semanaVaria(preferida) && desayunoVale(preferida) && !idsPedidos.has(preferida.id) && !idsDe(preferida).some((id) => evitarIds.has(id)) ? (() => {
          const e = intentarBase([preferida], false);
          return e.elegido && alcanza(e.elegido) ? e : void 0;
        })() : void 0;
        const libreAqui = !fijada && !reservada && !conservada;
        const niveles = !libreAqui ? [2] : otraDelDia ? [0, 1, 2] : esCC ? [0, 2] : [2];
        for (const nivel of niveles) {
          const conFiltroDia = nivel < 2;
          distintaDelDia = conFiltroDia;
          variedadCC = nivel === 0;
          res = fijada ? { elegido: fijada } : reservada ? { elegido: reservada } : conservada ?? intentar(recetas.filter((r) => esUnico(r) && !idsPedidos.has(r.id)), true);
          if (!fijada && !reservada && !conservada && (slot.franja === "comida" || slot.franja === "cena") && (!!slot.bandaPeso || !alcanza(res.elegido))) {
            const primeros = recetas.filter((r) => r.tipoPlato === "primero" && vale(r) && (!limitada || usosDe(r) < maxRep));
            const segundos = recetas.filter((r) => r.tipoPlato === "segundo" && vale(r) && (!limitada || usosDe(r) < maxRep));
            const postres = recetas.filter((r) => r.tipoPlato === "postre" && vale(r));
            const parejas = primeros.flatMap((p) => segundos.filter((s) => combinanBien(p, s)).map((s) => componer([p, s])));
            const mejorDe = (a2, b) => b.elegido && (!a2.elegido || clave2(b.elegido.desviacion, b.elegido.dist ?? 0, b.elegido.falta ?? 0) < clave2(a2.elegido.desviacion, a2.elegido.dist ?? 0, a2.elegido.falta ?? 0)) ? b : a2;
            if (parejas.length) {
              const r2 = intentar(parejas, false);
              res = mejorDe(res, r2);
              if (!!slot.bandaPeso || !alcanza(res.elegido)) {
                const conPostre = parejas.flatMap((c2) => postres.filter((po) => !c2.platos.includes(po.id)).map((po) => componer([...c2.platos.map((id) => catalogoPorId.get(id)), po])));
                if (conPostre.length) res = mejorDe(res, intentar(conPostre, false));
              }
            }
          }
          if (res.elegido && (nivel !== 0 || alcanza(res.elegido) || nivel === niveles[niveles.length - 1])) {
            if (otraDelDia && !conFiltroDia && chocaConElDia(res.elegido.receta, otraDelDia, catalogoPorId)) avisos.push(`${slot.dia} ${slot.franja}: no hay ninguna receta que encaje sin repetir el plato o la prote\xEDna de la otra comida del d\xEDa; se repite.`);
            break;
          }
        }
        if (!pase || alcanza(res.elegido)) break;
      }
      if (!res.elegido && prefDesayuno) {
        const nombre = prefDesayuno.modo === "mismo" ? catalogoPorId.get(prefDesayuno.receta)?.nombre : void 0;
        const aviso = prefDesayuno.modo === "mismo" ? `Desayuno: el que elegiste para todos los d\xEDas${nombre ? ` (\xAB${nombre}\xBB)` : ""} no se puede servir (${nombre ? res.motivo ?? "no encaja" : "ya no est\xE1 en el cat\xE1logo"}); esos d\xEDas se propone otro.` : `Desayuno: no hay ning\xFAn desayuno de pan con lo que elegiste que encaje (${res.motivo ?? "no encaja"}); esos d\xEDas se propone otro.`;
        if (!avisos.includes(aviso)) avisos.push(aviso);
        sinPreferenciaDesayuno.add(claveSlotSiOSi(slot));
        iSlot--;
        continue;
      }
      if (!res.elegido && slot.maxFibraG !== void 0) {
        const { maxFibraG, ...resto } = slot;
        avisos.push(`${slot.dia} ${slot.franja}: no hay receta que lleve tan poca fibra (m\xE1x. ${maxFibraG} g por raci\xF3n servida); se propone la mejor sin fibra alta. A\xF1adir recetas bajas en fibra al cat\xE1logo lo resuelve.`);
        cola[iSlot] = resto;
        iSlot--;
        continue;
      }
      if (!res.elegido) {
        huecos.push({ dia: slot.dia, franja: slot.franja, motivo: res.motivo ?? "ninguna receta disponible" });
        continue;
      }
      const elegido = res.elegido;
      if (limitada) for (const id of idsDe(elegido.receta)) usos.set(id, (usos.get(id) ?? 0) + 1);
      if (grupo) {
        usadosPorGrupo.set(grupo, /* @__PURE__ */ new Set([...usadosGrupo, elegido.receta.id]));
        ultimoPorGrupo.set(grupo, elegido.receta.id);
      }
      if (esCC) {
        const g = gruposProteina(elegido.receta, catalogoPorId);
        if (g.has("soja")) vecesSoja++;
        if (g.has("legumbre")) vecesLegumbre++;
        for (const b of basesDe(elegido.receta, catalogoPorId)) vecesBase.set(b, (vecesBase.get(b) ?? 0) + 1);
      }
      const factorRedondeado = Math.round(elegido.factor * 1e4) / 1e4;
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
    const faltasVariedad = [
      ...omnivoro && vecesSoja > MAX_SOJA ? [`tofu, tempeh o soja ${vecesSoja} veces (m\xE1x. ${MAX_SOJA})`] : [],
      ...vecesLegumbre < MIN_LEGUMBRE && slots.some((s) => s.franja === "comida" || s.franja === "cena") ? [`legumbre ${vecesLegumbre} veces (m\xEDn. ${MIN_LEGUMBRE})`] : [],
      ...[...vecesBase].filter(([, n]) => n > MAX_BASE).map(([b, n]) => `${b} ${n} veces (m\xE1x. ${MAX_BASE})`)
    ];
    if (faltasVariedad.length) avisos.push(`Variedad de la semana: con las recetas que encajan no se ha podido cumplir del todo (${faltasVariedad.join("; ")}); es lo m\xE1s cerca posible.`);
    const imprescindibles = opciones.imprescindibles?.length ? cubrirImprescindibles(opciones.imprescindibles, slots, recetas, asignaciones, avisos, maxRep, opciones.alergiasPreferencias) : void 0;
    const hayCC = slots.some((s) => s.franja === "comida" || s.franja === "cena");
    const exceso = (omnivoro ? Math.max(0, vecesSoja - MAX_SOJA) : 0) + (hayCC ? Math.max(0, MIN_LEGUMBRE - vecesLegumbre) : 0) + [...vecesBase.values()].reduce((s, n) => s + Math.max(0, n - MAX_BASE), 0);
    return { resultado: { asignaciones, huecos, avisos, ...imprescindibles ? { imprescindibles } : {}, ...estadosSiOSi.length ? { recetasSiOSi: estadosSiOSi } : {}, ...estadosFijadas.length ? { fijadas: estadosFijadas } : {} }, exceso };
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
        const choque = evaluarCompatibilidad({ ...recetas[0], alergenos: void 0, aptitudes: void 0, ingredientes: [{ nombre: alimento, gramos: 100 }] }, ap);
        if (!choque.compatible) {
          const t2 = choque.motivo?.tipo;
          const causa = t2 === "evitado" ? "est\xE1 en tu lista negra o en tus alergias, y eso manda siempre" : t2 === "celiaquia_sin_confirmar" ? "con celiaqu\xEDa no se ofrece si lleva gluten o un ingrediente sin dato de gluten" : `choca con lo que has indicado (${t2 === "lactosa" ? "lactosa" : t2 === "no_vegano" ? "vegano" : "vegetariano"})`;
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
          {
            const otra = a2.franja === "comida" ? "cena" : a2.franja === "cena" ? "comida" : void 0;
            const b = otra && asignaciones.find((x) => x.dia === a2.dia && x.franja === otra);
            if (b && chocaConElDia(r, recetaDeId(porId, b.receta), porId)) continue;
          }
          {
            const sl = slots.find((s) => s.dia === a2.dia && s.franja === a2.franja);
            if (sl && fibraExcede(sl, r)) continue;
          }
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
  function proteinaServida(r, factor) {
    const crece = r.ingredientes.some((i) => esPalanca(i.nombre) && rolIngrediente(i.nombre) === "proteina");
    return r.proteina * (crece ? factor : 1);
  }
  function kcalConRacion(receta, factor) {
    const palancas = receta.ingredientes.filter((i) => esPalanca(i.nombre));
    const hay = (rol) => palancas.some((i) => rolIngrediente(i.nombre) === rol);
    const kcalPalancas = Math.min(
      receta.kcal,
      (hay("base") ? 4 * receta.hidrato : 0) + (hay("proteina") ? 4 * receta.proteina : 0) + 9 * palancas.filter((i) => rolIngrediente(i.nombre) === "grasa").reduce((t2, i) => t2 + i.gramos, 0)
    );
    return Math.round(receta.kcal + kcalPalancas * (factor - 1));
  }
  function macrosConRacion(receta, factor) {
    const palancas = receta.ingredientes.filter((i) => esPalanca(i.nombre));
    const hay = (rol) => palancas.some((i) => rolIngrediente(i.nombre) === rol);
    const grasaPalanca = palancas.filter((i) => rolIngrediente(i.nombre) === "grasa").reduce((t2, i) => t2 + i.gramos, 0);
    const r12 = (n) => Math.round(n * 10) / 10;
    if (factor === 1) return { proteina: receta.proteina, grasa: receta.grasa, hidrato: receta.hidrato };
    return {
      proteina: r12(receta.proteina * (hay("proteina") ? factor : 1)),
      grasa: r12(receta.grasa + grasaPalanca * (factor - 1)),
      hidrato: r12(receta.hidrato * (hay("base") ? factor : 1))
    };
  }

  // src/motor/lista-compra.ts
  function normalizar4(s) {
    return Array.from(s.normalize("NFD")).filter((c2) => c2.codePointAt(0) < 768 || c2.codePointAt(0) > 879).join("").toLowerCase();
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
    // #260 (punto 38): la proteína del vegano no va a «Otros», y lo vegetal no va con los lácteos (antes de «lacteos» para que gane).
    ["proteina_vegetal", ["tofu", "tempeh", "soja texturizada", "seitan", "heura", "edamame", "garbanzo", "lenteja", "alubia", "guisante", "hummus", "azuki"]],
    ["vegetal_lacteo", ["bebida vegetal", "bebida de soja", "bebida de avena", "bebida de almendra", "yogur de soja", "yogur vegetal", "postre de soja"]],
    ["lacteos", ["yogur", "queso", "leche", "huevo"]],
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
      "cafe",
      "almendra",
      "nuez",
      "nueces",
      "avellana",
      "anacardo",
      "pistacho",
      "cacahuete",
      "semilla",
      "chia",
      "sesamo",
      "pipa",
      "crema de cacahuete"
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
  function contienePalabra(nombreNormalizado, palabra) {
    return new RegExp(`(^| )${palabra}(s|es)?( |$)`).test(nombreNormalizado.replace(/[^a-z0-9ñ]+/g, " ").trim());
  }
  function clasificar(ingrediente) {
    const n = normalizar4(ingrediente);
    for (const [seccion, palabras] of PALABRAS_SECCION) {
      if (palabras.some((p) => contienePalabra(n, p))) return seccion;
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
    const semanas = opciones.semanas ?? 1;
    if (!Number.isInteger(semanas) || semanas < 1) throw new Error(`Semanas inv\xE1lidas en la lista de la compra: ${semanas}`);
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
        totales.set(ing.nombre, (totales.get(ing.nombre) ?? 0) + ing.gramos * veces * factor * semanas);
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
    proteina_vegetal: "Legumbres y prote\xEDna vegetal",
    vegetal_lacteo: "Bebidas y yogures vegetales",
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
    if (entrada.semanas && entrada.semanas > 1 && pendientes.some((i) => i.grupo)) {
      const n = entrada.semanas;
      const grupos = [
        ["despensa", `LO QUE NO SE VA A PONER MALO (para las ${n} semanas)`, (i) => `${i.comprar} \u2014 ${i.ingrediente}`],
        ["fresco", "FRESCO (esta semana; entre par\xE9ntesis, para todo el periodo)", (i) => `${i.comprar} \u2014 ${i.ingrediente}${i.comprarPeriodo ? ` (${n} semanas: ${i.comprarPeriodo})` : ""}`]
      ];
      for (const [g, titulo, linea] of grupos) {
        const delGrupo = pendientes.filter((i) => i.grupo === g);
        if (!delGrupo.length) continue;
        lineas.push("", titulo);
        for (const i of delGrupo) lineas.push(`- ${linea(i)}`);
      }
      if (manuales.length) {
        lineas.push("", "A\xD1ADIDOS A MANO");
        for (const m of manuales) lineas.push(`- ${[m.cantidad, m.unidad].filter(Boolean).join(" ")} \u2014 ${m.nombre}`.replace("-  \u2014", "-"));
      }
      return lineas.join("\n");
    }
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
  function itemDesdeGramos(ingrediente, gramos) {
    const g = Math.round(gramos * 100) / 100;
    return { ingrediente, gramosTotales: g, seccion: clasificar(ingrediente), comprar: redondearCompra(ingrediente, g) };
  }

  // src/motor/estimador-coste.ts
  var COLUMNAS3 = ["ingrediente", "unidad", "precio_medio", "nota", "fuente", "fecha_consulta"];
  var UNIDADES_VALIDAS = ["kg", "l", "unidad"];
  var GRAMOS_POR_ML = { "aceite de oliva": 0.92 };
  var MEDIDAS2 = medidasDesdeCsv(MEDIDAS_CASERAS_CSV);
  function gramosPorUnidad(ingrediente) {
    return MEDIDAS2.find((m) => normalizar5(m.ingrediente) === normalizar5(ingrediente) && /^unidad\b/i.test(m.medida))?.gramos;
  }
  function normalizar5(s) {
    return Array.from(s.normalize("NFD")).filter((c2) => c2.codePointAt(0) < 768 || c2.codePointAt(0) > 879).join("").trim().toLowerCase();
  }
  function parsearPrecios(csv) {
    const errores = [];
    const filas = [];
    const cabecera = (csv.split(/\r?\n/)[0] ?? "").trim();
    if (cabecera !== COLUMNAS3.join(",")) {
      errores.push({ fila: 1, ingrediente: "(cabecera)", problema: `se esperaba "${COLUMNAS3.join(",")}", se encontr\xF3 "${cabecera}"` });
      return { filas, errores };
    }
    registros(csv).forEach((r, i) => {
      const numFila = i + 2;
      const precioMedio = Number(r.precio_medio);
      if (r.precio_medio === "" || !Number.isFinite(precioMedio) || precioMedio < 0) {
        errores.push({ fila: numFila, ingrediente: r.ingrediente, problema: `precio_medio no num\xE9rico o negativo: "${r.precio_medio}"` });
        return;
      }
      if (!UNIDADES_VALIDAS.includes(r.unidad)) {
        errores.push({ fila: numFila, ingrediente: r.ingrediente, problema: `unidad desconocida: "${r.unidad}" (v\xE1lidas: ${UNIDADES_VALIDAS.join(", ")})` });
        return;
      }
      filas.push({ ingrediente: r.ingrediente, unidad: r.unidad, precioMedio, nota: r.nota, fuente: r.fuente, fechaConsulta: r.fecha_consulta });
    });
    return { filas, errores };
  }
  var BANDA_KG = {
    proteina: [2, 40],
    base: [0.5, 20],
    verdura: [0.5, 20],
    fruta_lacteo: [0.5, 20],
    grasa: [1, 30],
    condimento: [1, 80],
    aromatico: [1, 80]
  };
  var BANDA_L = [0.5, 15];
  var BANDA_UNIDAD = [0.05, 5];
  function comprobarPrecios(csv, catalogo) {
    const { filas, errores } = parsearPrecios(csv);
    const fallos = errores.map((e) => `fila ${e.fila} (${e.ingrediente}): ${e.problema}`);
    const rolDe = new Map(catalogo.map((c2) => [normalizar5(c2.ingrediente), c2.rol]));
    const vistos = /* @__PURE__ */ new Set();
    if (!errores.some((e) => e.fila === 1)) {
      for (const r of registros(csv)) {
        const clave2 = normalizar5(r.ingrediente);
        if (vistos.has(clave2)) fallos.push(`${r.ingrediente}: fila repetida`);
        vistos.add(clave2);
      }
    }
    for (const f2 of filas) {
      const clave2 = normalizar5(f2.ingrediente);
      if (!/^https?:\/\//.test(f2.fuente.replace(/^[^:]+:\s*/, ""))) fallos.push(`${f2.ingrediente}: falta la fuente (tienda y enlace a la ficha)`);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(f2.fechaConsulta)) fallos.push(`${f2.ingrediente}: fecha de consulta "${f2.fechaConsulta}" (se espera AAAA-MM-DD)`);
      const rol = rolDe.get(clave2);
      const [min, max] = f2.unidad === "kg" ? rol ? BANDA_KG[rol] ?? [0.5, 80] : [0.5, 80] : f2.unidad === "l" ? BANDA_L : BANDA_UNIDAD;
      if (f2.precioMedio < min || f2.precioMedio > max) {
        fallos.push(`${f2.ingrediente}: ${f2.precioMedio} \u20AC/${f2.unidad} fuera de lo normal${rol ? ` para ${rol}` : ""} (${min}\u2013${max})`);
      }
    }
    for (const [clave2, rol] of rolDe) {
      if (!vistos.has(clave2)) fallos.push(`${catalogo.find((c2) => normalizar5(c2.ingrediente) === clave2).ingrediente} (${rol}): sin precio`);
    }
    return fallos;
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
      } else if (precio.unidad === "l") {
        coste = item.gramosTotales / (GRAMOS_POR_ML[normalizar5(item.ingrediente)] ?? 1) / 1e3 * precio.precioMedio;
      } else {
        const gramos = gramosPorUnidad(item.ingrediente);
        if (!gramos) {
          sinPrecio.push(item.ingrediente);
          continue;
        }
        coste = Math.ceil(item.gramosTotales / gramos) * precio.precioMedio;
      }
      total += coste;
      porSeccion[item.seccion] = (porSeccion[item.seccion] ?? 0) + coste;
    }
    for (const seccion of Object.keys(porSeccion)) {
      porSeccion[seccion] = redondear2(porSeccion[seccion]);
    }
    return { total: redondear2(total), porSeccion, sinPrecio };
  }

  // src/motor/precios-datos.ts
  var PRECIOS_CSV = `ingrediente,unidad,precio_medio,nota,fuente,fecha_consulta
aceite de oliva,l,4.35,"virgen extra Hacendado, botella 1 l",Mercadona: https://tienda.mercadona.es/product/4740/aceite-oliva-virgen-extra-hacendado-botella,2026-10-20
aceituna negra,kg,7.00,"sin hueso Hacendado, bote; precio por kg escurrido (Instinct puso 3.00, el de kg con l\xEDquido; corregido por el bucle el 2026-10-26, #265 J)",Mercadona: https://tienda.mercadona.es/product/52734/aceitunas-negras-hacendado-sin-hueso-bote,2026-10-20
aguacate,kg,5.00,pieza,Mercadona: https://tienda.mercadona.es/product/3830/aguacate-pieza,2026-10-20
ajo,kg,7.40,"ajos morados, malla",Mercadona: https://tienda.mercadona.es/product/69297/ajos-morados-malla,2026-10-20
alcachofa,kg,10.29,"corazones Hacendado, tarro; precio por kg escurrido (Instinct puso 6.21, el de kg con l\xEDquido; corregido por el bucle el 2026-10-26, #265 J)",Mercadona: https://tienda.mercadona.es/product/16040/corazones-alcachofa-hacendado-tarro,2026-10-20
almendra,kg,11.50,"natural Hacendado, paquete",Mercadona: https://tienda.mercadona.es/product/34865/almendra-natural-hacendado-paquete,2026-10-20
alubia blanca cocida,kg,1.88,"cocida Hacendado, tarro; precio por kg escurrido (Instinct puso 1.32, el de kg con l\xEDquido; corregido por el bucle el 2026-10-26, #265 J)",Mercadona: https://tienda.mercadona.es/product/26019/alubia-cocida-blanca-hacendado-tarro,2026-10-20
alubia blanca seca,kg,2.45,"extra Hacendado, paquete 1 kg",Mercadona: https://tienda.mercadona.es/product/5124/alubia-blanca-hacendado-categoria-extra-paquete,2026-10-20
alubia roja cocida,kg,3.00,"cocida Hacendado, tarro; precio por kg escurrido (Instinct puso 2.11, el de kg con l\xEDquido; corregido por el bucle el 2026-10-26, #265 J)",Mercadona: https://tienda.mercadona.es/product/26000/alubia-cocida-roja-hacendado-tarro,2026-10-20
arroz,kg,1.15,"redondo Hacendado, paquete 1 kg",Mercadona: https://tienda.mercadona.es/product/5044/arroz-redondo-hacendado-paquete,2026-10-20
at\xFAn en lata,kg,10.00,"en aceite de girasol Hacendado, lata 900 g; precio por kg escurrido (Instinct puso 7.22, el de kg con l\xEDquido; corregido por el bucle el 2026-10-26, #265 J)",Mercadona: https://tienda.mercadona.es/product/18086/atun-aceite-girasol-hacendado-lata,2026-10-20
at\xFAn fresco,kg,13.73,"solomillo de at\xFAn congelado Dia Mari Marinera, 250 g",Dia: https://www.dia.es/pescados-y-mariscos/congelado/p/288633,2026-10-20
bacalao fresco,kg,13.75,"a rodajas (desalado), pescader\xEDa",Mercadona: https://tienda.mercadona.es/product/81204.1/bacalao-rodajas-pieza,2026-10-20
bebida de soja,l,0.65,"con calcio sin az\xFAcares a\xF1adidos Hacendado, brick 1 l",Mercadona: https://tienda.mercadona.es/product/14707/bebida-soja-con-calcio-vitaminas-sin-azucares-anadidos-hacendado-brick,2026-10-20
berenjena,kg,2.20,pieza,Mercadona: https://tienda.mercadona.es/product/69326/berenjena-pieza,2026-10-20
boniato,kg,2.55,"batata, granel",Mercadona: https://tienda.mercadona.es/product/69239/batata-pieza,2026-10-20
br\xF3coli,kg,2.30,pieza,Mercadona: https://tienda.mercadona.es/product/69580/brocoli-pieza,2026-10-20
caballa,kg,5.11,"filetes de mostrador Alcampo; peso variable, precio aprox.",Alcampo: https://www.compraonline.alcampo.es/products/caballa-mostrador-filetes/73045-FILETES,2026-10-20
cacao puro en polvo,kg,16.60,"cacao puro 0% az\xFAcares La Chocolatera, bote",Mercadona: https://tienda.mercadona.es/product/22580/cacao-puro-polvo-chocolatera-0-azucares-anadidos-bote,2026-10-20
calabac\xEDn,kg,1.40,"verde, pieza",Mercadona: https://tienda.mercadona.es/product/69338/calabacin-verde-pieza,2026-10-20
calabaza,kg,2.80,media calabaza para asar,Mercadona: https://tienda.mercadona.es/product/68853/media-calabaza-asar-12-pieza,2026-10-20
calamar,kg,19.50,"peque\xF1o limpio patag\xF3nico, bandeja",Mercadona: https://tienda.mercadona.es/product/87177/calamar-pequeno-limpio-patagonico-bandeja,2026-10-20
canela,kg,19.23,"molida Hacendado, bote",Mercadona: https://tienda.mercadona.es/product/34177/canela-molida-hacendado-bote,2026-10-20
cebolla,kg,1.50,malla/paquete,Mercadona: https://tienda.mercadona.es/product/69079/cebollas-malla,2026-10-20
champi\xF1\xF3n,kg,5.20,"blancos, bandeja",Mercadona: https://tienda.mercadona.es/product/26951/champinon-blanco-bandeja,2026-10-20
claras de huevo,l,2.85,"l\xEDquidas pasteurizadas, botella 1 l",Mercadona: https://tienda.mercadona.es/product/31312/claras-huevo-liquidas-pasteurizadas-botella,2026-10-20
coliflor,kg,2.50,pieza,Mercadona: https://tienda.mercadona.es/product/69220/coliflor-pieza,2026-10-20
comino,kg,19.83,"molido Hacendado, bote",Mercadona: https://tienda.mercadona.es/product/34120/comino-molido-hacendado-bote,2026-10-20
compota de manzana,kg,2.68,"postre de manzana (compota) Jamar, tarro",Mercadona: https://tienda.mercadona.es/product/15086/postre-manzana-jamar-tarro,2026-10-20
conejo,kg,8.90,"entero, pieza",Mercadona: https://tienda.mercadona.es/product/2797/conejo-entero-pieza,2026-10-20
copos de avena,kg,1.63,"Br\xFCggen, caja",Mercadona: https://tienda.mercadona.es/product/86341/copos-avena-bruggen-caja,2026-10-20
copos de avena sin gluten,kg,4.00,"sin gluten Hacendado, paquete",Mercadona: https://tienda.mercadona.es/product/86368/copos-avena-hacendado-paquete,2026-10-20
crema de cacahuete,kg,9.38,Capit\xE1n Man\xED 340 g,Dia: https://www.dia.es/chocolates-y-golosinas/cremas-de-cacao-y-de-untar/p/145830,2026-10-20
cusc\xFAs,kg,1.95,"cous cous mediano Hacendado, paquete",Mercadona: https://tienda.mercadona.es/product/9395/cous-cous-mediano-bia-caja,2026-10-20
espinacas,kg,4.33,"cortadas y lavadas, paquete",Mercadona: https://tienda.mercadona.es/product/69730/espinacas-cortadas-paquete,2026-10-20
esp\xE1rrago,kg,11.80,"verdes finos, paquete",Mercadona: https://tienda.mercadona.es/product/69656/esparrago-verde-fino-paquete,2026-10-20
fresas,kg,7.50,bandeja 500 g,Mercadona: https://tienda.mercadona.es/product/3723/fresas-bandeja,2026-10-20
garbanzo cocido,kg,2.00,"cocido Hacendado, tarro; precio por kg escurrido (Instinct puso 1.40, el de kg con l\xEDquido; corregido por el bucle el 2026-10-26, #265 J)",Mercadona: https://tienda.mercadona.es/product/26029/garbanzo-cocido-hacendado-tarro,2026-10-20
guisantes,kg,3.80,"extra Hacendado, bote; precio por kg escurrido (Instinct puso 2.44, el de kg con l\xEDquido; corregido por el bucle el 2026-10-26, #265 J)",Mercadona: https://tienda.mercadona.es/product/16416/guisantes-extra-hacendado-bote,2026-10-20
huevo,unidad,0.25,"huevo L, docena",Mercadona: https://tienda.mercadona.es/product/31504/huevos-grandes-l-paquete,2026-10-20
huevo cocido,unidad,0.25,huevo L (se cuece en casa),Mercadona: https://tienda.mercadona.es/product/31504/huevos-grandes-l-paquete,2026-10-20
hummus,kg,4.38,"de garbanzos Hacendado receta cl\xE1sica, tarrina",Mercadona: https://tienda.mercadona.es/product/80858/hummus-garbanzos-hacendado-receta-clasica-tarrina,2026-10-20
jud\xEDa verde,kg,5.71,"plana, paquete",Mercadona: https://tienda.mercadona.es/product/68131/judia-verde-plana-paquete,2026-10-20
kiwi,kg,4.65,"verde, pieza",Mercadona: https://tienda.mercadona.es/product/3820/kiwi-verde-pieza,2026-10-20
leche semidesnatada,l,0.83,"Hacendado, brick 1 l",Mercadona: https://tienda.mercadona.es/product/10382/leche-semidesnatada-hacendado-brick,2026-10-20
lechuga hoja verde,unidad,1.70,"hoja roble, pieza",Mercadona: https://tienda.mercadona.es/product/69114/lechuga-hoja-roble-paquete,2026-10-20
lechuga romana,unidad,1.10,"coraz\xF3n romana, pieza",Mercadona: https://tienda.mercadona.es/product/69122/lechuga-corazon-romana-paquete,2026-10-20
lenteja cocida,kg,2.25,"cocida Hacendado, tarro; precio por kg escurrido (Instinct puso 1.58, el de kg con l\xEDquido; corregido por el bucle el 2026-10-26, #265 J)",Mercadona: https://tienda.mercadona.es/product/26030/lenteja-cocida-hacendado-tarro,2026-10-20
lenteja seca,kg,1.85,"pardina Hacendado, paquete 1 kg",Mercadona: https://tienda.mercadona.es/product/5330/lenteja-pardina-hacendado-categoria-extra-paquete,2026-10-20
lomo de cerdo,kg,6.30,"filetes, bandeja familiar",Mercadona: https://tienda.mercadona.es/product/3395/filetes-lomo-cerdo-familiar-bandeja,2026-10-20
lubina,kg,9.95,"limpia con cabeza, pescader\xEDa",Mercadona: https://tienda.mercadona.es/product/81241.1/lubina-limpia-con-cabeza-pieza,2026-10-20
mandarina,kg,2.55,pieza,Mercadona: https://tienda.mercadona.es/product/3238/mandarina-pieza,2026-10-20
manzana,kg,2.00,"Golden, pieza",Mercadona: https://tienda.mercadona.es/product/3028/manzana-golden-pieza,2026-10-20
mejill\xF3n,kg,2.95,"vivo, bandeja 1 kg",Mercadona: https://tienda.mercadona.es/product/85144/mejillon-vivo-bandeja,2026-10-20
mel\xF3n,kg,2.49,"medio mel\xF3n piel de sapo Dia, 2.5 kg aprox.",Dia: https://www.dia.es/frutas/melon-y-sandia/p/265125,2026-10-20
merluza,kg,26.95,"porciones frescas, bandeja",Mercadona: https://tienda.mercadona.es/product/87200/porciones-merluza-bandeja,2026-10-20
miel,kg,5.00,"de flores Hacendado, tarro 1 kg",Mercadona: https://tienda.mercadona.es/product/15436/miel-flores-hacendado-tarro,2026-10-20
mozzarella,kg,7.20,"fresca de vaca Hacendado, bola 125 g; precio por kg escurrido (Instinct puso 3.60, el de kg con l\xEDquido; corregido por el bucle el 2026-10-26, #265 J)",Mercadona: https://tienda.mercadona.es/product/51050/mozzarella-fresca-vaca-hacendado-paquete,2026-10-20
naranja,kg,2.50,"de mesa, pieza",Mercadona: https://tienda.mercadona.es/product/3235/naranja-mesa-pieza,2026-10-20
nueces,kg,12.00,"peladas Hacendado, paquete",Mercadona: https://tienda.mercadona.es/product/34024/nuez-natural-hacendado-pelada-paquete,2026-10-20
pan blanco,kg,1.40,de molde familiar Hacendado,Mercadona: https://tienda.mercadona.es/product/82324/pan-molde-blanco-familiar-hacendado-paquete,2026-10-20
pan integral,kg,3.91,barra integral 100%,Mercadona: https://tienda.mercadona.es/product/17912.1/barra-pan-integral-100,2026-10-20
pan sin gluten,kg,5.48,de molde blanco sin gluten Hacendado,Mercadona: https://tienda.mercadona.es/product/35711/pan-molde-sin-gluten-blanco-hacendado-paquete,2026-10-20
pasta,kg,1.15,"spaghetti Hacendado, paquete 1 kg",Mercadona: https://tienda.mercadona.es/product/6245/spaghetti-hacendado-paquete,2026-10-20
pasta sin gluten,kg,4.10,"fusilli sin gluten Felicia, paquete",Mercadona: https://tienda.mercadona.es/product/35643/pasta-fusilli-sin-gluten-felicia-paquete,2026-10-20
patata,kg,1.90,pieza,Mercadona: https://tienda.mercadona.es/product/69066/patata-pieza,2026-10-20
pechuga de pavo,kg,8.75,"filetes, bandeja",Mercadona: https://tienda.mercadona.es/product/2794/filetes-pechuga-pavo-bandeja,2026-10-20
pechuga de pavo asada,kg,8.75,filetes (se asa en casa),Mercadona: https://tienda.mercadona.es/product/2794/filetes-pechuga-pavo-bandeja,2026-10-20
pechuga de pollo,kg,7.70,"filetes, bandeja",Mercadona: https://tienda.mercadona.es/product/2787/filetes-pechuga-pollo-bandeja,2026-10-20
pechuga de pollo asada,kg,7.70,filetes (se asa en casa),Mercadona: https://tienda.mercadona.es/product/2787/filetes-pechuga-pollo-bandeja,2026-10-20
pepino,kg,1.70,pieza,Mercadona: https://tienda.mercadona.es/product/69584/pepino-pieza,2026-10-20
pera,kg,2.50,"Conferencia, pieza",Mercadona: https://tienda.mercadona.es/product/3119/pera-conferencia-pieza,2026-10-20
perejil,kg,55.56,"seco Hacendado, bote",Mercadona: https://tienda.mercadona.es/product/5599/perejil-hacendado-bote,2026-10-20
piment\xF3n,kg,24.67,"dulce de la Vera Hacendado, bote",Mercadona: https://tienda.mercadona.es/product/34102/pimenton-dulce-vera-hacendado-bote,2026-10-20
pimiento rojo,kg,2.90,pieza,Mercadona: https://tienda.mercadona.es/product/69310/pimiento-rojo-pieza,2026-10-20
pimiento verde,kg,2.50,"de fre\xEDr, pieza",Mercadona: https://tienda.mercadona.es/product/69320/pimiento-verde-freir-pieza,2026-10-20
pi\xF1a,kg,2.00,"entera, pieza",Mercadona: https://tienda.mercadona.es/product/3076/pina-pieza,2026-10-20
pl\xE1tano,kg,2.80,"de Canarias IGP, pieza",Mercadona: https://tienda.mercadona.es/product/3819/platano-canarias-igp-pieza,2026-10-20
polenta,kg,3.98,harina de ma\xEDz precocinada Do\xF1a Petrona 500 g (Alcampo),Alcampo: https://www.compraonline.alcampo.es/products/do%C3%B1a-petrona-polenta-harina-de-ma%C3%ADz-precocinada-500-g/506164,2026-10-20
puerro,kg,3.10,paquete,Mercadona: https://tienda.mercadona.es/product/69411/puerros-paquete,2026-10-20
queso cottage,kg,6.75,"Valblu, tarrina",Mercadona: https://tienda.mercadona.es/product/17662/queso-cottage-valblu-tarrina,2026-10-20
queso fresco,kg,4.10,"tipo Burgos natural Hacendado, pack 2",Mercadona: https://tienda.mercadona.es/product/52406/queso-fresco-burgos-natural-hacendado-pack-2,2026-10-20
quinoa,kg,5.30,blanca seca PRODUCTO ALCAMPO 500 g (Alcampo),Alcampo: https://www.compraonline.alcampo.es/products/producto-alcampo-quinoa-blanca-seca-500-g/798106,2026-10-20
remolacha cocida,kg,2.33,"cocida y pelada, paquete",Mercadona: https://tienda.mercadona.es/product/69523/remolacha-cocida-pelada-paquete,2026-10-20
repollo,kg,2.15,"liso, media pieza",Mercadona: https://tienda.mercadona.es/product/68462/medio-repollo-liso-12-pieza,2026-10-20
reques\xF3n,kg,5.00,"Hacendado, tarrina",Mercadona: https://tienda.mercadona.es/product/51012/requeson-mezcla-montesinos-tarrina,2026-10-20
r\xFAcula,kg,17.00,"lavada, paquete",Mercadona: https://tienda.mercadona.es/product/69753/rucula-paquete,2026-10-20
salm\xF3n,kg,10.95,"a rodajas, pescader\xEDa",Mercadona: https://tienda.mercadona.es/product/81649.1/salmon-rodajas-pieza,2026-10-20
sand\xEDa,kg,0.99,"media sand\xEDa negra Dia, 3 kg aprox.",Dia: https://www.dia.es/frutas/melon-y-sandia/p/265126,2026-10-20
sardina en lata,kg,13.39,"en aceite de oliva Hacendado, pack 2; precio por kg escurrido (Instinct puso 9.62, el de kg con l\xEDquido; corregido por el bucle el 2026-10-26, #265 J)",Mercadona: https://tienda.mercadona.es/product/18225/sardinas-aceite-oliva-hacendado-pack-2,2026-10-20
semillas de calabaza,kg,11.00,"pipas de calabaza peladas Hacendado, paquete",Mercadona: https://tienda.mercadona.es/product/18259/pipas-calabaza-natural-hacendado-peladas-paquete,2026-10-20
semillas de girasol,kg,5.75,"pipas de girasol peladas naturales Hacendado, paquete",Mercadona: https://tienda.mercadona.es/product/34193/pipas-girasol-naturales-hacendado-peladas-paquete,2026-10-20
sepia,kg,14.95,"limpia, pieza",Mercadona: https://tienda.mercadona.es/product/81704/sepia-pieza,2026-10-20
soja texturizada,kg,13.50,"Luengo, paquete",Mercadona: https://tienda.mercadona.es/product/13926/soja-texturizada-luengo-paquete,2026-10-20
tempeh,kg,17.96,tempe de garbanzo ecol\xF3gico Vegetalia 250 g (Carrefour),Carrefour: https://www.carrefour.es/supermercado/tempe-de-garbanzo-ecologico-vegetalia-250-g/R-VC4AECOMM-518360/p,2026-10-20
ternera magra (solomillo de aguja),kg,19.00,filetes de vacuno a\xF1ojo para plancha (no hay \xABsolomillo de aguja\xBB online; corte magro equivalente),Mercadona: https://tienda.mercadona.es/product/8936/filetes-vacuno-anojo-plancha-bandeja,2026-10-20
ternera picada,kg,10.80,"preparado de carne picada de vacuno, bandeja",Mercadona: https://tienda.mercadona.es/product/3454/preparado-carne-picada-vacuno-bandeja,2026-10-20
tofu firme,kg,6.36,"firme Hacendado, paquete; precio por kg escurrido (Instinct puso 4.38, el de kg con l\xEDquido; corregido por el bucle el 2026-10-26, #265 J)",Mercadona: https://tienda.mercadona.es/product/51097/tofu-firme-frias-paquete,2026-10-20
tomate,kg,2.10,malla,Mercadona: https://tienda.mercadona.es/product/69971/tomates-malla,2026-10-20
tomate triturado,kg,1.25,"Hacendado, bote 800 g",Mercadona: https://tienda.mercadona.es/product/16043/tomate-triturado-hacendado-freir-bote,2026-10-20
tortilla de trigo,kg,3.19,"tortillas de trigo Hacendado (wraps), paquete",Mercadona: https://tienda.mercadona.es/product/80859/tortillas-trigo-hacendado-paquete,2026-10-20
tortita de ma\xEDz,kg,9.17,"tortitas de ma\xEDz Hacendado, paquete",Mercadona: https://tienda.mercadona.es/product/14158/tortitas-maiz-hacendado-paquete,2026-10-20
yogur de soja,kg,3.00,"postre de soja natural Hacendado, pack",Mercadona: https://tienda.mercadona.es/product/20200/postre-soja-hacendado-natural-pack-4,2026-10-20
yogur griego,kg,1.93,"griego natural Hacendado, pack 6",Mercadona: https://tienda.mercadona.es/product/20559/yogur-griego-natural-hacendado-pack-6,2026-10-20
yogur natural,kg,1.33,"natural Hacendado, pack 6",Mercadona: https://tienda.mercadona.es/product/22313/yogur-natural-hacendado-pack-6,2026-10-20
zanahoria,kg,1.00,paquete 1 kg,Mercadona: https://tienda.mercadona.es/product/69586/zanahorias-paquete,2026-10-20
`;

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
    const etiquetas = ETIQUETAS.filter(({ clave: clave2 }) => contexto[clave2]).map(({ texto }) => texto);
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
    const t2 = Date.UTC(y, mo - 1, d);
    const c2 = new Date(t2);
    return c2.getUTCFullYear() === y && c2.getUTCMonth() === mo - 1 && c2.getUTCDate() === d ? t2 : void 0;
  }
  function deUTC(t2) {
    const c2 = new Date(t2);
    return `${String(c2.getUTCFullYear()).padStart(4, "0")}-${String(c2.getUTCMonth() + 1).padStart(2, "0")}-${String(c2.getUTCDate()).padStart(2, "0")}`;
  }
  function esFechaValida(fecha) {
    return aUTC(fecha) !== void 0;
  }
  function esHoraValida(hora) {
    return RE_HORA.test(hora);
  }
  function esLunes(fecha) {
    const t2 = aUTC(fecha);
    return t2 !== void 0 && new Date(t2).getUTCDay() === 1;
  }
  function lunesDeLaSemana(fecha) {
    const t2 = aUTC(fecha);
    if (t2 === void 0) throw new Error(`Fecha no v\xE1lida: ${fecha}`);
    const desdeLunes = (new Date(t2).getUTCDay() + 6) % 7;
    return deUTC(t2 - desdeLunes * MS_DIA);
  }
  function fechaDelDia(inicio, dia) {
    if (!esLunes(inicio)) throw new Error(`La fecha de inicio debe ser un lunes v\xE1lido (recibido: ${inicio})`);
    const i = DIAS.indexOf(dia);
    if (i < 0) throw new Error(`D\xEDa desconocido: ${dia}`);
    return deUTC(aUTC(inicio) + i * MS_DIA);
  }
  function diaDeLaFecha(inicio, fecha) {
    if (!esLunes(inicio)) return void 0;
    const t2 = aUTC(fecha);
    if (t2 === void 0) return void 0;
    const i = Math.round((t2 - aUTC(inicio)) / MS_DIA);
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
    const problemasIntestinales = (datos.problemasIntestinales ?? "").trim() || "no_se";
    if (!OPCIONES_GELES.includes(problemasIntestinales)) return { ok: false, error: "Indica si has tenido problemas intestinales compitiendo: s\xED, no o no lo s\xE9." };
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
    const comunes = { fecha: datos.fecha, tipo, usaGeles, problemasIntestinales, ...fechaFin ? { fechaFin } : {} };
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
    const max = lista.reduce((m, c2) => Math.max(m, Number(c2.id.replace(/^c/, "")) || 0), 0);
    return `c${max + 1}`;
  }
  function anadirCompeticion(lista, datos) {
    const v = validarCompeticion(datos);
    if (!v.ok) return v;
    return { ok: true, lista: ordenarCompeticiones([...lista, { id: siguienteId(lista), ...v.datos }]) };
  }
  function editarCompeticion(lista, id, datos) {
    if (!lista.some((c2) => c2.id === id)) return { ok: false, error: "Esa competici\xF3n ya no existe." };
    const v = validarCompeticion(datos);
    if (!v.ok) return v;
    return { ok: true, lista: ordenarCompeticiones(lista.map((c2) => c2.id === id ? { id, ...v.datos } : c2)) };
  }
  function borrarCompeticion(lista, id) {
    return lista.filter((c2) => c2.id !== id);
  }
  function ordenarCompeticiones(lista) {
    return [...lista].sort((a2, b) => a2.fecha.localeCompare(b.fecha) || (a2.hora ?? "").localeCompare(b.hora ?? "") || a2.nombre.localeCompare(b.nombre));
  }
  function competicionesDelDia(lista, inicio, dia) {
    const fecha = fechaDelDia(inicio, dia);
    return ordenarCompeticiones(lista.filter((c2) => c2.fecha === fecha || c2.fechaFin !== void 0 && c2.fecha < fecha && fecha <= c2.fechaFin));
  }
  function competicionesDesdeJson(valor) {
    if (!Array.isArray(valor)) return [];
    const resultado = [];
    for (const x of valor) {
      if (!x || typeof x !== "object") continue;
      const { id, nombre, fecha, hora, fechaFin, tipo, pruebas, usaGeles, problemasIntestinales } = x;
      if (typeof id !== "string" || typeof nombre !== "string" || typeof fecha !== "string") continue;
      const texto = (v2) => typeof v2 === "string" ? v2 : void 0;
      const v = validarCompeticion({
        nombre,
        fecha,
        hora: texto(hora),
        fechaFin: texto(fechaFin),
        tipo: texto(tipo),
        usaGeles: texto(usaGeles),
        problemasIntestinales: texto(problemasIntestinales),
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

  // src/motor/periodo-dieta.ts
  var SEMANAS_MIN = 1;
  var SEMANAS_MAX = 4;
  var SEMANAS_POR_DEFECTO = 1;
  var MS_DIA2 = 864e5;
  function aUTC2(f2) {
    const [y, m, d] = f2.split("-").map(Number);
    return Date.UTC(y, m - 1, d);
  }
  function deUTC2(t2) {
    const c2 = new Date(t2);
    return `${String(c2.getUTCFullYear()).padStart(4, "0")}-${String(c2.getUTCMonth() + 1).padStart(2, "0")}-${String(c2.getUTCDate()).padStart(2, "0")}`;
  }
  function semanasValidas(valor) {
    const n = typeof valor === "string" ? Number(valor) : valor;
    return typeof n === "number" && Number.isInteger(n) && n >= SEMANAS_MIN && n <= SEMANAS_MAX ? n : SEMANAS_POR_DEFECTO;
  }
  function finDeLaDieta(inicio, semanas) {
    if (!esFechaValida(inicio)) return void 0;
    return deUTC2(aUTC2(inicio) + (7 * semanasValidas(semanas) - 1) * MS_DIA2);
  }
  function semanaDeLaDieta(hoy, inicio, semanas) {
    if (!esFechaValida(hoy) || !esFechaValida(inicio)) return void 0;
    const de = semanasValidas(semanas);
    const dias = Math.round((aUTC2(hoy) - aUTC2(inicio)) / MS_DIA2);
    if (dias < 0 || dias >= 7 * de) return void 0;
    return { semana: Math.floor(dias / 7) + 1, de };
  }
  function lunesDelInicio(inicio) {
    return esFechaValida(inicio) ? lunesDeLaSemana(inicio) : void 0;
  }
  var DIAS_AVISO_FIN = 3;
  function avisoFinDeLaDieta(hoy, inicio, semanas) {
    if (!esFechaValida(hoy)) return void 0;
    const termina = finDeLaDieta(inicio, semanas);
    if (!termina) return void 0;
    const quedan = Math.round((aUTC2(termina) - aUTC2(hoy)) / MS_DIA2);
    return quedan >= 0 && quedan <= DIAS_AVISO_FIN ? { termina, quedan } : void 0;
  }
  function inicioDeLaSiguiente(inicio, semanas) {
    const fin = finDeLaDieta(inicio, semanas);
    return fin ? deUTC2(aUTC2(fin) + MS_DIA2) : void 0;
  }
  function estadoDeLaPreparada(hoy, inicio, semanas) {
    const fin = finDeLaDieta(inicio, semanas);
    if (!fin || !esFechaValida(hoy)) return void 0;
    return hoy < inicio ? "pendiente" : hoy <= fin ? "activa" : "caducada";
  }
  function avisoDietaTerminada(hoy, inicio, semanas) {
    if (!esFechaValida(hoy)) return void 0;
    const termino = finDeLaDieta(inicio, semanas);
    if (!termino) return void 0;
    const hace = Math.round((aUTC2(hoy) - aUTC2(termino)) / MS_DIA2);
    return hace >= 1 ? { termino, hace } : void 0;
  }

  // src/motor/compra-periodo.ts
  function conservacionDesdeCsv(texto) {
    const tabla2 = /* @__PURE__ */ new Map();
    for (const r of registros(texto)) {
      const lugar = r.lugar ?? r.tipo ?? "";
      const tipo = lugar === "despensa" ? "despensa" : lugar === "nevera" || lugar === "fresco" ? "fresco" : void 0;
      if (!r.ingrediente || !tipo) continue;
      tabla2.set(r.ingrediente, { tipo, congelable: tipo === "fresco" && r.congelable === "si" });
    }
    return tabla2;
  }
  function comprobarConservacionCsv(texto, ingredientesCatalogo) {
    const fallos = [];
    const filas = registros(texto);
    const vistos = /* @__PURE__ */ new Set();
    for (const r of filas) {
      const n = r.ingrediente;
      if (!n) {
        fallos.push("fila sin ingrediente");
        continue;
      }
      if (vistos.has(n)) fallos.push(`${n}: fila duplicada`);
      vistos.add(n);
      if (r.lugar !== "despensa" && r.lugar !== "nevera") fallos.push(`${n}: lugar \xAB${r.lugar}\xBB no permitido (despensa o nevera)`);
      if (r.congelable !== "si" && r.congelable !== "no") fallos.push(`${n}: congelable \xAB${r.congelable}\xBB no permitido (si o no)`);
      if (!/^https?:\/\//.test(r.fuente_url ?? "")) fallos.push(`${n}: sin fuente_url`);
    }
    const catalogo = new Set(ingredientesCatalogo);
    for (const n of catalogo) if (!vistos.has(n)) fallos.push(`${n}: falta en la tabla`);
    for (const n of vistos) if (!catalogo.has(n)) fallos.push(`${n}: sobra, no est\xE1 en ninguna receta`);
    return fallos;
  }
  function compraDelPeriodo(asignaciones, recetas, opciones) {
    const { semanas, conservacion = /* @__PURE__ */ new Map() } = opciones;
    const base = { esProtegido: opciones.esProtegido };
    const unaSemana = generarListaCompra(asignaciones, recetas, base);
    const periodo = semanas > 1 ? new Map(generarListaCompra(asignaciones, recetas, { ...base, semanas }).map((i) => [i.ingrediente, i])) : void 0;
    return unaSemana.map((item) => {
      const c2 = conservacion.get(item.ingrediente);
      if (c2?.tipo === "despensa" && periodo) {
        const p = periodo.get(item.ingrediente);
        return { ...p, grupo: "despensa", congelable: false };
      }
      if (c2?.tipo === "despensa") return { ...item, grupo: "despensa", congelable: false };
      return {
        ...item,
        grupo: "fresco",
        congelable: c2?.congelable === true,
        ...periodo && c2 ? { comprarPeriodo: periodo.get(item.ingrediente).comprar } : {}
      };
    });
  }

  // src/motor/siguiente-guardada.ts
  function revisarSiguienteGuardada(guardados, catalogo, ap) {
    const porId = new Map(catalogo.map((r) => [r.id, r]));
    const validas = [];
    const quitadas = [];
    for (const g of guardados) {
      const r = recetaDeId(porId, g.receta);
      if (!r) {
        quitadas.push({ ...g, nombre: g.receta, motivo: "la receta ya no est\xE1 en el cat\xE1logo" });
        continue;
      }
      const c2 = evaluarCompatibilidad(r, ap);
      if (c2.compatible) validas.push(g);
      else quitadas.push({ ...g, nombre: r.nombre, motivo: c2.motivo?.detalle ?? "ya no encaja con tus restricciones" });
    }
    return { validas, quitadas };
  }

  // src/motor/conservacion-datos.ts
  var CONSERVACION_CSV = `ingrediente,lugar,congelable,nota,fuente_url,validado_pablo
aceite de oliva,despensa,no,Envase cerrado; alejar de luz y calor; seguir etiqueta. No se propone congelaci\xF3n para esta presentaci\xF3n.,https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa,no
aceituna negra,despensa,si,"Criterio de compra indicado por Pablo; no validaci\xF3n de duraci\xF3n ni de todas las preparaciones. Se supone conserva estable cerrada; tras abrir, nevera seg\xFAn etiqueta. Congelar solo fuera del envase y en porciones si la etiqueta lo permite.",https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,si
aguacate,nevera,si,"Congelar parte comestible preparada en porciones; cambia textura: usar en batidos/pur\xE9s/cocina, no prometer fruta fresca al descongelar.",https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
ajo,despensa,si,"Entero sin cocinar: lugar fresco, seco y ventilado. Cortado o cocinado: nevera. No garantiza semanas. Congelar limpio y preparado para cocinar.",https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/la-congelacion-y-seguridad;https://hgic.clemson.edu/factsheet/food-storage-pantry/,no
alcachofa,nevera,si,Se interpreta verdura fresca; preparar/escaldar o cocinar antes de congelar seg\xFAn la verdura; mejor para uso cocinado.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/la-congelacion-y-seguridad;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
almendra,despensa,no,Secos y bien cerrados; pueden enranciarse; revisar etiqueta y estado. No se propone congelaci\xF3n para esta presentaci\xF3n.,https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa,no
alubia blanca cocida,despensa,si,"Criterio de compra indicado por Pablo; no validaci\xF3n de duraci\xF3n ni de todas las preparaciones. Se supone conserva estable cerrada; tras abrir, nevera seg\xFAn etiqueta. Congelar solo fuera del envase y en porciones si la etiqueta lo permite.",https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,si
alubia blanca seca,despensa,no,Seco; guardar cerrado en lugar fresco y seco. Una vez cocinado requiere fr\xEDo. No se propone congelaci\xF3n para esta presentaci\xF3n.,https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa,no
alubia roja cocida,despensa,si,"Criterio de compra indicado por Pablo; no validaci\xF3n de duraci\xF3n ni de todas las preparaciones. Se supone conserva estable cerrada; tras abrir, nevera seg\xFAn etiqueta. Congelar solo fuera del envase y en porciones si la etiqueta lo permite.",https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,si
arroz,despensa,no,Seco; guardar cerrado en lugar fresco y seco. Una vez cocinado requiere fr\xEDo. No se propone congelaci\xF3n para esta presentaci\xF3n.,https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa,no
at\xFAn en lata,despensa,no,Solo conserva intacta sin abrir; una vez abierta guardar en fr\xEDo seg\xFAn etiqueta. No se propone congelaci\xF3n para esta presentaci\xF3n.,https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
at\xFAn fresco,nevera,si,Se interpreta producto fresco; mantener fr\xEDo y congelar pronto en raciones. Si ya ven\xEDa descongelado seguir etiqueta.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
bacalao fresco,nevera,si,Se interpreta producto fresco; mantener fr\xEDo y congelar pronto en raciones. Si ya ven\xEDa descongelado seguir etiqueta.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
berenjena,nevera,si,Se interpreta verdura fresca; preparar/escaldar o cocinar antes de congelar seg\xFAn la verdura; mejor para uso cocinado.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/la-congelacion-y-seguridad;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
boniato,despensa,si,"Entero sin cocinar: lugar fresco, seco y ventilado. Cortado o cocinado: nevera. No garantiza semanas. Congelar solo cocinado y enfriado.",https://nchfp.uga.edu/how/freeze/vegetable/freezing-sweet-potatoes/;https://hgic.clemson.edu/factsheet/food-storage-pantry/,no
br\xF3coli,nevera,si,Se interpreta verdura fresca; preparar/escaldar o cocinar antes de congelar seg\xFAn la verdura; mejor para uso cocinado.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/la-congelacion-y-seguridad;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
caballa,nevera,si,"Criterio de compra indicado por Pablo; no validaci\xF3n de duraci\xF3n ni de todas las preparaciones. Fresca: nevera; en lata estable cerrada: despensa. El lugar depende del formato de compra; abierta, nevera seg\xFAn etiqueta. Congelable solo fresca apta, en porciones.",https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,si
cacao puro en polvo,despensa,no,Producto comercial sin mezclas perecederas; cerrado en lugar fresco y seco. No se propone congelaci\xF3n para esta presentaci\xF3n.,https://hgic.clemson.edu/factsheet/food-storage-pantry/;https://ohioline.osu.edu/factsheet/HYG-5401,no
calabac\xEDn,nevera,si,Se interpreta verdura fresca; preparar/escaldar o cocinar antes de congelar seg\xFAn la verdura; mejor para uso cocinado.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/la-congelacion-y-seguridad;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
calabaza,nevera,si,Se interpreta verdura fresca; preparar/escaldar o cocinar antes de congelar seg\xFAn la verdura; mejor para uso cocinado.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/la-congelacion-y-seguridad;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
calamar,nevera,si,Se interpreta producto fresco; mantener fr\xEDo y congelar pronto en raciones. Si ya ven\xEDa descongelado seguir etiqueta.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
canela,despensa,no,Especia seca; envase cerrado sin humedad ni calor. No se propone congelaci\xF3n para esta presentaci\xF3n.,https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa,no
cebolla,despensa,si,"Entero sin cocinar: lugar fresco, seco y ventilado. Cortado o cocinado: nevera. No garantiza semanas. Congelar limpia y troceada para cocinar.",https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa;https://nchfp.uga.edu/how/freeze/vegetable/freezing-onions/;https://hgic.clemson.edu/factsheet/food-storage-pantry/,no
champi\xF1\xF3n,nevera,si,Se interpreta verdura fresca; preparar/escaldar o cocinar antes de congelar seg\xFAn la verdura; mejor para uso cocinado.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/la-congelacion-y-seguridad;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
claras de huevo,nevera,no,Nevera seg\xFAn etiqueta. No sugerir congelaci\xF3n de huevos o claras por criterio conservador de Pablo; no se afirma imposibilidad t\xE9cnica.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf,no
coliflor,nevera,si,Se interpreta verdura fresca; preparar/escaldar o cocinar antes de congelar seg\xFAn la verdura; mejor para uso cocinado.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/la-congelacion-y-seguridad;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
comino,despensa,no,Especia seca; envase cerrado sin humedad ni calor. No se propone congelaci\xF3n para esta presentaci\xF3n.,https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa,no
conejo,nevera,si,Se interpreta producto fresco; mantener fr\xEDo y congelar pronto en raciones. Si ya ven\xEDa descongelado seguir etiqueta.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
copos de avena,despensa,no,Seco; guardar cerrado en lugar fresco y seco. Una vez cocinado requiere fr\xEDo. No se propone congelaci\xF3n para esta presentaci\xF3n.,https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa,no
crema de cacahuete,despensa,no,"Criterio de compra indicado por Pablo; no validaci\xF3n de duraci\xF3n ni de todas las preparaciones. Se supone tarro comercial estable; manda la etiqueta, tambi\xE9n tras abrir. No se propone congelaci\xF3n.",https://hgic.clemson.edu/factsheet/food-storage-pantry/,si
cusc\xFAs,despensa,no,Seco; guardar cerrado en lugar fresco y seco. Una vez cocinado requiere fr\xEDo. No se propone congelaci\xF3n para esta presentaci\xF3n.,https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa,no
espinacas,nevera,si,Congelar preparadas/escaldadas para cocinar; no se conserva la textura de hoja cruda de ensalada.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/la-congelacion-y-seguridad,no
esp\xE1rrago,nevera,si,Se interpreta verdura fresca; preparar/escaldar o cocinar antes de congelar seg\xFAn la verdura; mejor para uso cocinado.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/la-congelacion-y-seguridad;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
fresas,nevera,si,"Congelar parte comestible preparada en porciones; cambia textura: usar en batidos/pur\xE9s/cocina, no prometer fruta fresca al descongelar.",https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
garbanzo cocido,despensa,si,"Criterio de compra indicado por Pablo; no validaci\xF3n de duraci\xF3n ni de todas las preparaciones. Se supone conserva estable cerrada; tras abrir, nevera seg\xFAn etiqueta. Congelar solo fuera del envase y en porciones si la etiqueta lo permite.",https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,si
guisantes,nevera,si,"Criterio de compra indicado por Pablo; no validaci\xF3n de duraci\xF3n ni de todas las preparaciones. Frescos: nevera; comprados congelados: congelador. No romper cadena de fr\xEDo. Si frescos, preparar/escaldar seg\xFAn producto antes de congelar.",https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/la-congelacion-y-seguridad;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,si
huevo,nevera,no,"Criterio de compra indicado por Pablo; no validaci\xF3n de duraci\xF3n ni de todas las preparaciones. Siempre nevera. No sugerir congelaci\xF3n, por criterio de Pablo; no congelar con c\xE1scara.",https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,si
huevo cocido,nevera,no,"Criterio de compra indicado por Pablo; no validaci\xF3n de duraci\xF3n ni de todas las preparaciones. Huevo cocido: nevera; no sugerir congelar huevos, por criterio de Pablo.",https://www.fao.org/fileadmin/user_upload/rlc/come-sano/t_es.pdf,si
hummus,nevera,si,Criterio de compra indicado por Pablo; no validaci\xF3n de duraci\xF3n ni de todas las preparaciones. Seguir etiqueta de la marca/formato: nunca sustituir su lugar de conservaci\xF3n por esta orientaci\xF3n. Se interpreta hummus refrigerado; congelar porciones cerradas; puede cambiar textura; verificar etiqueta.,https://www.hellofresh.com.au/stories/freezing-and-storage/can-you-freeze-hummus;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,si
jud\xEDa verde,nevera,si,Se interpreta verdura fresca; preparar/escaldar o cocinar antes de congelar seg\xFAn la verdura; mejor para uso cocinado.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/la-congelacion-y-seguridad;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
kiwi,nevera,si,"Congelar parte comestible preparada en porciones; cambia textura: usar en batidos/pur\xE9s/cocina, no prometer fruta fresca al descongelar.",https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
leche semidesnatada,despensa,no,"Criterio de compra indicado por Pablo; no validaci\xF3n de duraci\xF3n ni de todas las preparaciones. Se supone UHT cerrada; abierta, nevera seg\xFAn etiqueta. No se propone congelar el envase cerrado.",https://www.tetrapak.com/es-es/insights/food-categories/dairy/uht-faq,si
lechuga hoja verde,nevera,no,Para consumo crudo: congelar empeora mucho la textura; comprar fresco en tandas.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/la-congelacion-y-seguridad,no
lechuga romana,nevera,no,Para consumo crudo: congelar empeora mucho la textura; comprar fresco en tandas.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/la-congelacion-y-seguridad,no
lenteja cocida,despensa,si,"Criterio de compra indicado por Pablo; no validaci\xF3n de duraci\xF3n ni de todas las preparaciones. Se supone conserva estable cerrada; tras abrir, nevera seg\xFAn etiqueta. Congelar solo fuera del envase y en porciones si la etiqueta lo permite.",https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,si
lenteja seca,despensa,no,Seco; guardar cerrado en lugar fresco y seco. Una vez cocinado requiere fr\xEDo. No se propone congelaci\xF3n para esta presentaci\xF3n.,https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa,no
lomo de cerdo,nevera,si,Se interpreta producto fresco; mantener fr\xEDo y congelar pronto en raciones. Si ya ven\xEDa descongelado seguir etiqueta.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
lubina,nevera,si,Se interpreta producto fresco; mantener fr\xEDo y congelar pronto en raciones. Si ya ven\xEDa descongelado seguir etiqueta.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
mandarina,nevera,si,"Congelar parte comestible preparada en porciones; cambia textura: usar en batidos/pur\xE9s/cocina, no prometer fruta fresca al descongelar.",https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
manzana,nevera,si,"Congelar parte comestible preparada en porciones; cambia textura: usar en batidos/pur\xE9s/cocina, no prometer fruta fresca al descongelar.",https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
mejill\xF3n,nevera,si,Se interpreta producto fresco; mantener fr\xEDo y congelar pronto en raciones. Si ya ven\xEDa descongelado seguir etiqueta.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
mel\xF3n,nevera,si,"Congelar parte comestible preparada en porciones; cambia textura: usar en batidos/pur\xE9s/cocina, no prometer fruta fresca al descongelar.",https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
merluza,nevera,si,Se interpreta producto fresco; mantener fr\xEDo y congelar pronto en raciones. Si ya ven\xEDa descongelado seguir etiqueta.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
miel,despensa,no,Producto comercial sin mezclas perecederas; cerrado en lugar fresco y seco. No se propone congelaci\xF3n para esta presentaci\xF3n.,https://hgic.clemson.edu/factsheet/food-storage-pantry/;https://ohioline.osu.edu/factsheet/HYG-5401,no
mozzarella,nevera,no,Criterio de compra indicado por Pablo; no validaci\xF3n de duraci\xF3n ni de todas las preparaciones. Nevera seg\xFAn etiqueta. No se propone congelaci\xF3n para consumo fresco por p\xE9rdida de textura; no es prohibici\xF3n sanitaria.,https://nchfp.uga.edu/how/freeze/dairy-products/freezing-cheese/;https://www.hogarmania.com/cocina/actualidad/congelar-yogur_1_1155642.html,si
naranja,nevera,si,"Congelar parte comestible preparada en porciones; cambia textura: usar en batidos/pur\xE9s/cocina, no prometer fruta fresca al descongelar.",https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
nueces,despensa,no,Secos y bien cerrados; pueden enranciarse; revisar etiqueta y estado. No se propone congelaci\xF3n para esta presentaci\xF3n.,https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa,no
pan blanco,despensa,si,"A temperatura ambiente para consumo cercano; no garantiza varias semanas. Si el usuario elige congelar, hacerlo en porciones. No sugerir nevera para prolongar la textura.",https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://hgic.clemson.edu/factsheet/food-storage-pantry/,no
pan integral,despensa,si,"A temperatura ambiente para consumo cercano; no garantiza varias semanas. Si el usuario elige congelar, hacerlo en porciones. No sugerir nevera para prolongar la textura.",https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://hgic.clemson.edu/factsheet/food-storage-pantry/,no
pasta,despensa,no,Seco; guardar cerrado en lugar fresco y seco. Una vez cocinado requiere fr\xEDo. No se propone congelaci\xF3n para esta presentaci\xF3n.,https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa,no
patata,despensa,no,"Entero sin cocinar: lugar fresco, seco y ventilado; patata lejos de luz. Cortado o cocinado: nevera. No garantiza semanas. No se propone congelaci\xF3n cruda por p\xE9rdida de calidad.",https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa;https://hgic.clemson.edu/factsheet/food-storage-pantry/,no
pechuga de pavo,nevera,si,"Criterio de compra indicado por Pablo; no validaci\xF3n de duraci\xF3n ni de todas las preparaciones. Nevera al comprar, por criterio de Pablo. El usuario decide si congela: Se interpreta producto fresco; mantener fr\xEDo y congelar pronto en raciones. Si ya ven\xEDa descongelado seguir etiqueta.",https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,si
pechuga de pavo asada,nevera,si,"Criterio de compra indicado por Pablo; no validaci\xF3n de duraci\xF3n ni de todas las preparaciones. Nevera al comprar, por criterio de Pablo. El usuario decide si congela: Ya cocinado; enfriar en nevera y congelar en raciones el mismo d\xEDa. No equivale a fiambre estable.",https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,si
pechuga de pollo,nevera,si,"Criterio de compra indicado por Pablo; no validaci\xF3n de duraci\xF3n ni de todas las preparaciones. Nevera al comprar, por criterio de Pablo. El usuario decide si congela: Se interpreta producto fresco; mantener fr\xEDo y congelar pronto en raciones. Si ya ven\xEDa descongelado seguir etiqueta.",https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,si
pechuga de pollo asada,nevera,si,"Criterio de compra indicado por Pablo; no validaci\xF3n de duraci\xF3n ni de todas las preparaciones. Nevera al comprar, por criterio de Pablo. El usuario decide si congela: Ya cocinado; enfriar en nevera y congelar en raciones el mismo d\xEDa. No equivale a fiambre estable.",https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,si
pepino,nevera,no,Para consumo crudo: congelar empeora mucho la textura; comprar fresco en tandas.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/la-congelacion-y-seguridad,no
pera,nevera,si,"Congelar parte comestible preparada en porciones; cambia textura: usar en batidos/pur\xE9s/cocina, no prometer fruta fresca al descongelar.",https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
perejil,nevera,si,Criterio de compra indicado por Pablo; no validaci\xF3n de duraci\xF3n ni de todas las preparaciones. Fresco: nevera; seco comercial: despensa seg\xFAn etiqueta. Congelar solo el fresco lavado y seco para cocinar.,https://nchfp.uga.edu/how/freeze/vegetable/freezing-fresh-herbs,si
piment\xF3n,despensa,no,Especia seca; envase cerrado sin humedad ni calor. No se propone congelaci\xF3n para esta presentaci\xF3n.,https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa,no
pimiento rojo,nevera,si,Se interpreta verdura fresca; preparar/escaldar o cocinar antes de congelar seg\xFAn la verdura; mejor para uso cocinado.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/la-congelacion-y-seguridad;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
pimiento verde,nevera,si,Se interpreta verdura fresca; preparar/escaldar o cocinar antes de congelar seg\xFAn la verdura; mejor para uso cocinado.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/la-congelacion-y-seguridad;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
pi\xF1a,nevera,si,"Congelar parte comestible preparada en porciones; cambia textura: usar en batidos/pur\xE9s/cocina, no prometer fruta fresca al descongelar.",https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
pl\xE1tano,nevera,si,"Congelar parte comestible preparada en porciones; cambia textura: usar en batidos/pur\xE9s/cocina, no prometer fruta fresca al descongelar.",https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
puerro,nevera,si,Se interpreta verdura fresca; preparar/escaldar o cocinar antes de congelar seg\xFAn la verdura; mejor para uso cocinado.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/la-congelacion-y-seguridad;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
queso cottage,nevera,no,Queso fresco: propuesta conservadora por p\xE9rdida de textura al congelar; mozzarella debe confirmar fresca o baja humedad.,https://nchfp.uga.edu/how/freeze/dairy-products/freezing-cheese/;https://www.hogarmania.com/cocina/actualidad/congelar-yogur_1_1155642.html,no
remolacha cocida,despensa,si,"Criterio de compra indicado por Pablo; no validaci\xF3n de duraci\xF3n ni de todas las preparaciones. Se supone conserva estable cerrada; tras abrir, nevera seg\xFAn etiqueta. Congelar solo fuera del envase y en porciones si la etiqueta lo permite.",https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,si
repollo,nevera,si,Se interpreta verdura fresca; preparar/escaldar o cocinar antes de congelar seg\xFAn la verdura; mejor para uso cocinado.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/la-congelacion-y-seguridad;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
r\xFAcula,nevera,no,Para consumo crudo: congelar empeora mucho la textura; comprar fresco en tandas.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/la-congelacion-y-seguridad,no
salm\xF3n,nevera,si,Se interpreta producto fresco; mantener fr\xEDo y congelar pronto en raciones. Si ya ven\xEDa descongelado seguir etiqueta.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
sand\xEDa,nevera,si,"Congelar parte comestible preparada en porciones; cambia textura: usar en batidos/pur\xE9s/cocina, no prometer fruta fresca al descongelar.",https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
sardina en lata,despensa,no,Solo conserva intacta sin abrir; una vez abierta guardar en fr\xEDo seg\xFAn etiqueta. No se propone congelaci\xF3n para esta presentaci\xF3n.,https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
sepia,nevera,si,Se interpreta producto fresco; mantener fr\xEDo y congelar pronto en raciones. Si ya ven\xEDa descongelado seguir etiqueta.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
tempeh,nevera,si,Criterio de compra indicado por Pablo; no validaci\xF3n de duraci\xF3n ni de todas las preparaciones. Seguir etiqueta de la marca/formato: nunca sustituir su lugar de conservaci\xF3n por esta orientaci\xF3n. Se interpreta tempeh refrigerado; congelar en porciones; revisar etiqueta de la marca concreta.,https://www.protempeh.com/faq,si
ternera magra (solomillo de aguja),nevera,si,Se interpreta producto fresco; mantener fr\xEDo y congelar pronto en raciones. Si ya ven\xEDa descongelado seguir etiqueta.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
ternera picada,nevera,si,Se interpreta producto fresco; mantener fr\xEDo y congelar pronto en raciones. Si ya ven\xEDa descongelado seguir etiqueta.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
tofu firme,nevera,si,Criterio de compra indicado por Pablo; no validaci\xF3n de duraci\xF3n ni de todas las preparaciones. Seguir etiqueta de la marca/formato: nunca sustituir su lugar de conservaci\xF3n por esta orientaci\xF3n. Refrigerado; se puede congelar pero cambia color y se vuelve m\xE1s firme; revisar marca y etiqueta.,https://www.taifun-tofu.de/en/magazine/how-to-use-plain-tofu-properly,si
tomate,nevera,no,No se propone congelar para ensalada; s\xED puede prepararse para salsa o uso cocinado. Un \xFAnico flag pierde esta distinci\xF3n.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/la-congelacion-y-seguridad,no
tomate triturado,despensa,si,"Criterio de compra indicado por Pablo; no validaci\xF3n de duraci\xF3n ni de todas las preparaciones. Se supone conserva estable cerrada; tras abrir, nevera seg\xFAn etiqueta. Congelar solo fuera del envase y en porciones si la etiqueta lo permite.",https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa;https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/la-congelacion-y-seguridad,si
tortilla de trigo,nevera,si,Criterio de compra indicado por Pablo; no validaci\xF3n de duraci\xF3n ni de todas las preparaciones. Seguir etiqueta de la marca/formato: nunca sustituir su lugar de conservaci\xF3n por esta orientaci\xF3n. Wrap listo para rellenar; congelable. Sin marca/envase no se presume estable semanas; presentaci\xF3n comercial puede ser despensa.,https://www.missionfoods.com/faq/,si
yogur griego,nevera,no,"No recomendado para conservar textura de yogur al natural; t\xE9cnicamente congelable para batidos/cocina, no prohibici\xF3n sanitaria.",https://ask.fsis.usda.gov/article/How-long-can-you-keep-dairy-products-like-yogurt-milk-and-cheese-in-the-refrigerator;https://www.hogarmania.com/cocina/actualidad/congelar-yogur_1_1155642.html,no
yogur natural,nevera,no,"No recomendado para conservar textura de yogur al natural; t\xE9cnicamente congelable para batidos/cocina, no prohibici\xF3n sanitaria.",https://ask.fsis.usda.gov/article/How-long-can-you-keep-dairy-products-like-yogurt-milk-and-cheese-in-the-refrigerator;https://www.hogarmania.com/cocina/actualidad/congelar-yogur_1_1155642.html,no
zanahoria,nevera,si,Se interpreta verdura fresca; preparar/escaldar o cocinar antes de congelar seg\xFAn la verdura; mejor para uso cocinado.,https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf;https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/la-congelacion-y-seguridad;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
bebida de soja,despensa,no,"Se supone bebida vegetal UHT estable cerrada; tras abrir, nevera y consumir en pocos d\xEDas seg\xFAn etiqueta. No se propone congelaci\xF3n para esta presentaci\xF3n.",https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa,no
yogur de soja,nevera,no,"No recomendado para conservar la textura; t\xE9cnicamente congelable para batidos o cocina, no prohibici\xF3n sanitaria.",https://ask.fsis.usda.gov/article/How-long-can-you-keep-dairy-products-like-yogurt-milk-and-cheese-in-the-refrigerator,no
soja texturizada,despensa,no,"Seca y bien cerrada, en lugar fresco y seco; puede enranciarse por su residuo graso; revisar etiqueta y estado. No se propone congelaci\xF3n para esta presentaci\xF3n.",https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa,no
quinoa,despensa,no,"Seca; guardar cerrada en lugar fresco y seco. Una vez cocida requiere fr\xEDo. No se propone congelaci\xF3n para esta presentaci\xF3n.",https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa,no
compota de manzana,despensa,si,"Se supone conserva estable cerrada; tras abrir, nevera seg\xFAn etiqueta. Congelar solo fuera del envase y en porciones si la etiqueta lo permite.",https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa;https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/ampliacion/colocar_segura.htm,no
semillas de calabaza,despensa,no,"Secas y bien cerradas; pueden enranciarse; revisar etiqueta y estado. No se propone congelaci\xF3n para esta presentaci\xF3n.",https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa,no
semillas de girasol,despensa,no,"Secas y bien cerradas; pueden enranciarse; revisar etiqueta y estado. No se propone congelaci\xF3n para esta presentaci\xF3n.",https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa,no
queso fresco,nevera,no,"Queso fresco: propuesta conservadora por p\xE9rdida de textura; t\xE9cnicamente congelable para cocinar, no prohibici\xF3n sanitaria.",https://ask.fsis.usda.gov/article/How-long-can-you-keep-dairy-products-like-yogurt-milk-and-cheese-in-the-refrigerator,no
reques\xF3n,nevera,no,"Queso fresco batido: propuesta conservadora por p\xE9rdida de textura al congelar; seguir etiqueta de la marca.",https://nchfp.uga.edu/how/freeze/dairy-products/freezing-cheese/,no
pan sin gluten,despensa,si,"A temperatura ambiente para consumo cercano; no garantiza varias semanas. Si el usuario elige congelar, hacerlo en porciones. Misma pauta que el pan del cat\xE1logo; seguir etiqueta de la marca.",https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf,no
pasta sin gluten,despensa,no,"Seca; guardar cerrada en lugar fresco y seco. Una vez cocinada requiere fr\xEDo. No se propone congelaci\xF3n para esta presentaci\xF3n.",https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa,no
tortita de ma\xEDz,despensa,no,"Seca; guardar cerrada en lugar fresco y seco para que no se ablande. No se propone congelaci\xF3n para esta presentaci\xF3n.",https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa,no
polenta,despensa,no,"Harina seca; guardar cerrada en lugar fresco y seco. Una vez cocida requiere fr\xEDo. No se propone congelaci\xF3n para esta presentaci\xF3n.",https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa,no
copos de avena sin gluten,despensa,no,"Secos; guardar cerrados en lugar fresco y seco. Una vez cocinados requieren fr\xEDo. No se propone congelaci\xF3n para esta presentaci\xF3n.",https://www.ocu.org/alimentacion/platos-preparados/consejos/alimentos-basicos-despensa,no
`;

  // src/motor/limites-ingredientes-datos.ts
  var LIMITES_INGREDIENTES_CSV = `ingrediente,min_g,max_g,familia,fuente_url_o_nota,estado
garbanzo cocido,30,120,legumbre_cocida,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | CRUDO/SECO (decisi\xF3n Pablo 14/10 13:15: en la receta priman los pesos en crudo/seco): 30-120 g en seco. Ayuda para el cliente: 75-300 g cocidos, factor oficial cocinado->crudo x0.4 (arroz y legumbres) y raci\xF3n 60-80 g seco = 150-200 g cocido. M\xEDnimo 30 g seco = media raci\xF3n, plato mixto. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
pechuga de pollo asada,80,300,carne_cocinada,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | CRUDO neto (decisi\xF3n Pablo 14/10 13:15): \xABasada\xBB es el nombre del plato; el peso de la receta es en crudo. M\xEDnimo 80 g como prote\xEDna principal conservado del m\xE9todo; gu\xEDa carne 100-125 g por raci\xF3n. La pieza ya asada pesa menos por p\xE9rdida de agua: referencia de ayuda sin factor citado, no mezclar bases. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
patata,75,400,tuberculo,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | Crudo neto; m\xEDnimo 75 g como media raci\xF3n de referencia 150-200 g, guarnici\xF3n. Tope previo conservado, no raci\xF3n diaria objetivo. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
zanahoria,40,200,hortaliza,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo 40 g conservado del m\xE9todo para comida/cena, no una raci\xF3n oficial; referencia de grupo 150-200 g. Puede ser ingrediente secundario; no forzar todos a 150 g. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
puerro,10,200,aromatico,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | Crudo neto; m\xEDnimo 10 g culinario para sofrito por persona, no aplicar m\xEDnimo de verdura principal. Referencias unidades cebolla150g/puerro75g enteros. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
aceite de oliva,3,30,grasa,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | Peso a\xF1adido; m\xEDnimo 3 g por cucharada de caf\xE9 de referencia. No forzar aceite cuando una receta no lo necesita; no escalar para tapar kcal. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
repollo,40,200,hortaliza,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo 40 g conservado del m\xE9todo para comida/cena, no una raci\xF3n oficial; referencia de grupo 150-200 g. Puede ser ingrediente secundario; no forzar todos a 150 g. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
calabac\xEDn,40,200,hortaliza,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo 40 g conservado del m\xE9todo para comida/cena, no una raci\xF3n oficial; referencia de grupo 150-200 g. Puede ser ingrediente secundario; no forzar todos a 150 g. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
tomate,40,300,hortaliza_fruto,"https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Crudo neto; m\xEDnimo 40 g como complemento de ensalada; referencia tomate/pepino 150 g. No una raci\xF3n oficial m\xEDnima. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
pimiento rojo,40,200,hortaliza,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo 40 g conservado del m\xE9todo para comida/cena, no una raci\xF3n oficial; referencia de grupo 150-200 g. Puede ser ingrediente secundario; no forzar todos a 150 g. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
cebolla,10,200,aromatico,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | Crudo neto; m\xEDnimo 10 g culinario para sofrito por persona, no aplicar m\xEDnimo de verdura principal. Referencias unidades cebolla150g/puerro75g enteros. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
huevo,50,240,huevo,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | Sin c\xE1scara; m\xEDnimo 50 g como un huevo neto aproximado; cocido se pesa cocido, no sumar c\xE1scara. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
pan integral,20,150,pan,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | Tal cual, no harina cruda; m\xEDnimo 20 g como rebanada mediana de molde de referencia. Forma/barra var\xEDan. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
bacalao fresco,80,300,pescado,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo de prote\xEDna principal conservado (80 g); referencia pescado 125-150 g. No m\xEDnimo universal para platos mixtos. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
alubia blanca seca,30,125,legumbre_seca,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | Seca antes de cocci\xF3n; m\xEDnimo 30 g como media raci\xF3n de la referencia 60-80 g, \xFAtil en plato mixto; no convertir con un factor universal. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
arroz,30,150,cereal_seco,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | Seco sin cocer; m\xEDnimo 30 g como media raci\xF3n de referencia 60-80 g, para plato mixto/guarnici\xF3n. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
jud\xEDa verde,40,200,hortaliza,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo 40 g conservado del m\xE9todo para comida/cena, no una raci\xF3n oficial; referencia de grupo 150-200 g. Puede ser ingrediente secundario; no forzar todos a 150 g. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
pimiento verde,40,200,hortaliza,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo 40 g conservado del m\xE9todo para comida/cena, no una raci\xF3n oficial; referencia de grupo 150-200 g. Puede ser ingrediente secundario; no forzar todos a 150 g. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
at\xFAn en lata,40,160,pescado_conserva,"https://www.bda.uk.com/resource/food-facts-portion-sizes.html | Peso neto escurrido; m\xEDnimo de complemento proteico 40 g por analog\xEDa con at\xFAn del m\xE9todo; referencia pescado en conserva 140 g, no un m\xE1ximo cl\xEDnico. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
lenteja seca,30,125,legumbre_seca,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | Seca antes de cocci\xF3n; m\xEDnimo 30 g como media raci\xF3n de la referencia 60-80 g, \xFAtil en plato mixto; no convertir con un factor universal. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
ajo,1,10,condimento,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | Peso a\xF1adido neto; propuesta culinaria para una persona, NO m\xEDnimo nutricional ni obligaci\xF3n de a\xF1adirlo. Ajo: referencia diente5g; cacao: cucharada caf\xE94g/postre9g; especias por dosis peque\xF1a de condimento. No escalar para completar kcal. Canela sin especie verificada: no usar m\xE1ximo como umbral toxicol\xF3gico. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
yogur natural,60,250,yogur,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | Tal cual; m\xEDnimo 60 g como media unidad habitual de125g redondeada a60g; para griego misma unidad es analog\xEDa, confirmar envase. No obligar a este m\xEDnimo si se usa como salsa. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
copos de avena,20,150,avena,"https://www.bda.uk.com/resource/food-facts-portion-sizes.html | Seco; m\xEDnimo 20 g como media raci\xF3n de referencia de avena 40 g, para desayuno mixto. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
pl\xE1tano,40,160,fruta,"https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Crudo neto sin partes no comestibles; propuesta de porci\xF3n peque\xF1a/grande alrededor de tabla4, no l\xEDmites cl\xEDnicos. Pl\xE1tano media unidad; kiwi una unidad; fresas50g como complemento de bol (no raci\xF3n completa); otras frutas admiten media unidad/raci\xF3n. Fresas sin equivalencia de unidades por tama\xF1o variable. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
almendra,10,40,fruto_seco,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | Neto sin c\xE1scara; gu\xEDa20-30g por raci\xF3n, m\xEDnimo10g como media raci\xF3n peque\xF1a de20g que no baja de10g de Pablo; m\xE1ximo40g del m\xE9todo para familia fruto seco. Endpoints operativos, no oficiales. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
salm\xF3n,70,300,pescado_azul,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo como prote\xEDna principal 70 g por analog\xEDa con el m\xE9todo; gu\xEDa pescado 125-150 g. At\xFAn fresco no es at\xFAn de lata. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
espinacas,40,200,hortaliza,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo 40 g conservado del m\xE9todo para comida/cena, no una raci\xF3n oficial; referencia de grupo 150-200 g. Puede ser ingrediente secundario; no forzar todos a 150 g. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
naranja,100,300,fruta,"https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Crudo neto sin partes no comestibles; propuesta de porci\xF3n peque\xF1a/grande alrededor de tabla4, no l\xEDmites cl\xEDnicos. Pl\xE1tano media unidad; kiwi una unidad; fresas50g como complemento de bol (no raci\xF3n completa); otras frutas admiten media unidad/raci\xF3n. Fresas sin equivalencia de unidades por tama\xF1o variable. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
ternera picada,80,300,carne,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo de prote\xEDna principal en comida/cena conservado del m\xE9todo (80 g); gu\xEDa carne 100-125 g por raci\xF3n. No m\xEDnimo universal para trozos dentro de platos mixtos. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
at\xFAn fresco,70,300,pescado_azul,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo como prote\xEDna principal 70 g por analog\xEDa con el m\xE9todo; gu\xEDa pescado 125-150 g. At\xFAn fresco no es at\xFAn de lata. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
alubia blanca cocida,30,120,legumbre_cocida,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | CRUDO/SECO (decisi\xF3n Pablo 14/10 13:15: en la receta priman los pesos en crudo/seco): 30-120 g en seco. Ayuda para el cliente: 75-300 g cocidos, factor oficial cocinado->crudo x0.4 (arroz y legumbres) y raci\xF3n 60-80 g seco = 150-200 g cocido. M\xEDnimo 30 g seco = media raci\xF3n, plato mixto. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
champi\xF1\xF3n,40,200,hortaliza,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo 40 g conservado del m\xE9todo para comida/cena, no una raci\xF3n oficial; referencia de grupo 150-200 g. Puede ser ingrediente secundario; no forzar todos a 150 g. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
huevo cocido,50,240,huevo,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | Sin c\xE1scara; m\xEDnimo 50 g como un huevo neto aproximado. El huevo cocido pesa lo mismo que en crudo: misma cifra en ambos estados, no sumar c\xE1scara. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
berenjena,40,200,hortaliza,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo 40 g conservado del m\xE9todo para comida/cena, no una raci\xF3n oficial; referencia de grupo 150-200 g. Puede ser ingrediente secundario; no forzar todos a 150 g. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
pechuga de pavo asada,80,300,carne_cocinada,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | CRUDO neto (decisi\xF3n Pablo 14/10 13:15): \xABasada\xBB es el nombre del plato; el peso de la receta es en crudo. M\xEDnimo 80 g como prote\xEDna principal conservado del m\xE9todo; gu\xEDa carne 100-125 g por raci\xF3n. La pieza ya asada pesa menos por p\xE9rdida de agua: referencia de ayuda sin factor citado, no mezclar bases. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
alubia roja cocida,30,120,legumbre_cocida,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | CRUDO/SECO (decisi\xF3n Pablo 14/10 13:15: en la receta priman los pesos en crudo/seco): 30-120 g en seco. Ayuda para el cliente: 75-300 g cocidos, factor oficial cocinado->crudo x0.4 (arroz y legumbres) y raci\xF3n 60-80 g seco = 150-200 g cocido. M\xEDnimo 30 g seco = media raci\xF3n, plato mixto. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
manzana,80,240,fruta,"https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Crudo neto sin partes no comestibles; propuesta de porci\xF3n peque\xF1a/grande alrededor de tabla4, no l\xEDmites cl\xEDnicos. Pl\xE1tano media unidad; kiwi una unidad; fresas50g como complemento de bol (no raci\xF3n completa); otras frutas admiten media unidad/raci\xF3n. Fresas sin equivalencia de unidades por tama\xF1o variable. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
nueces,10,40,fruto_seco,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | Neto sin c\xE1scara; gu\xEDa20-30g por raci\xF3n, m\xEDnimo10g como media raci\xF3n peque\xF1a de20g que no baja de10g de Pablo; m\xE1ximo40g del m\xE9todo para familia fruto seco. Endpoints operativos, no oficiales. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
fresas,50,250,fruta,"https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Crudo neto sin partes no comestibles; propuesta de porci\xF3n peque\xF1a/grande alrededor de tabla4, no l\xEDmites cl\xEDnicos. Pl\xE1tano media unidad; kiwi una unidad; fresas50g como complemento de bol (no raci\xF3n completa); otras frutas admiten media unidad/raci\xF3n. Fresas sin equivalencia de unidades por tama\xF1o variable. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
yogur griego,60,250,yogur,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | Tal cual; m\xEDnimo 60 g como media unidad habitual de125g redondeada a60g; para griego misma unidad es analog\xEDa, confirmar envase. No obligar a este m\xEDnimo si se usa como salsa. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
queso cottage,60,300,queso_fresco,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | Tal cual; m\xEDnimo propuesto 60 g como porci\xF3n peque\xF1a frente a referencia queso fresco80-125g. Cottage no id\xE9ntico a queso fresco; no m\xEDnimo universal. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
miel,5,20,endulzante,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | Peso a\xF1adido; m\xE1ximo20g por cucharada de postre de referencia; m\xEDnimo5g un cuarto de esa cantidad para endulzar, estimaci\xF3n culinaria. No una ingesta recomendada ni un m\xEDnimo obligatorio. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
leche semidesnatada,100,500,leche,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | Tal cual; m\xEDnimo 100 g como medio vaso de referencia 200 g, complemento de desayuno. No confundir g con ml ni imponer m\xEDnimo en caf\xE9. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
crema de cacahuete,10,30,crema_fruto_seco,"https://www.bda.uk.com/resource/food-facts-portion-sizes.html | Tal cual; referencia crema/fruto seco30g. M\xEDnimo10g para untar y m\xE1ximo30g una porci\xF3n, no tratar como crema l\xEDquida exenta. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
pan blanco,20,150,pan,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | Tal cual, no harina cruda; m\xEDnimo 20 g como rebanada mediana de molde de referencia. Forma/barra var\xEDan. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
claras de huevo,36,240,clara,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | Cruda; m\xEDnimo 36 g como clara aproximada de un huevo. Fuente: clara 60% de huevo entero, c\xE1lculo orientativo de huevo de 60 g; no m\xEDnimo nutricional independiente. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
merluza,80,300,pescado,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo de prote\xEDna principal conservado (80 g); referencia pescado 125-150 g. No m\xEDnimo universal para platos mixtos. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
pasta,30,150,cereal_seco,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | Seco sin cocer; m\xEDnimo 30 g como media raci\xF3n de referencia 60-80 g, para plato mixto/guarnici\xF3n. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
calabaza,40,200,hortaliza,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo 40 g conservado del m\xE9todo para comida/cena, no una raci\xF3n oficial; referencia de grupo 150-200 g. Puede ser ingrediente secundario; no forzar todos a 150 g. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
pechuga de pavo,80,300,carne,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo de prote\xEDna principal en comida/cena conservado del m\xE9todo (80 g); gu\xEDa carne 100-125 g por raci\xF3n. No m\xEDnimo universal para trozos dentro de platos mixtos. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
boniato,75,400,tuberculo,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | Crudo neto; m\xEDnimo 75 g como media raci\xF3n de referencia 150-200 g, guarnici\xF3n. Tope previo conservado, no raci\xF3n diaria objetivo. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
br\xF3coli,40,200,hortaliza,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo 40 g conservado del m\xE9todo para comida/cena, no una raci\xF3n oficial; referencia de grupo 150-200 g. Puede ser ingrediente secundario; no forzar todos a 150 g. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
lenteja cocida,30,120,legumbre_cocida,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | CRUDO/SECO (decisi\xF3n Pablo 14/10 13:15: en la receta priman los pesos en crudo/seco): 30-120 g en seco. Ayuda para el cliente: 75-300 g cocidos, factor oficial cocinado->crudo x0.4 (arroz y legumbres) y raci\xF3n 60-80 g seco = 150-200 g cocido. M\xEDnimo 30 g seco = media raci\xF3n, plato mixto. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
sepia,60,300,marisco,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo de prote\xEDna principal conservado/por analog\xEDa con marisco del m\xE9todo 60 g; peso comestible sin conchas. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
sardina en lata,40,300,pescado_conserva,"https://www.bda.uk.com/resource/food-facts-portion-sizes.html | Peso neto escurrido; m\xEDnimo de complemento proteico 40 g por analog\xEDa con at\xFAn del m\xE9todo; referencia pescado en conserva 140 g, no un m\xE1ximo cl\xEDnico. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
lechuga hoja verde,20,150,hoja_ensalada,"https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Crudo neto; m\xEDnimo 20 g como complemento, m\xE1ximo propuesto 150 g por plato grande de lechuga de referencia. No equivalencia id\xE9ntica de volumen para r\xFAcula. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
lechuga romana,20,150,hoja_ensalada,"https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Crudo neto; m\xEDnimo 20 g como complemento, m\xE1ximo propuesto 150 g por plato grande de lechuga de referencia. No equivalencia id\xE9ntica de volumen para r\xFAcula. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
pepino,40,300,hortaliza_fruto,"https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Crudo neto; m\xEDnimo 40 g como complemento de ensalada; referencia tomate/pepino 150 g. No una raci\xF3n oficial m\xEDnima. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
r\xFAcula,20,200,hoja_ensalada,"https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Crudo neto; m\xEDnimo 20 g como complemento, m\xE1ximo propuesto 150 g por plato grande de lechuga de referencia. No equivalencia id\xE9ntica de volumen para r\xFAcula. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
pera,75,225,fruta,"https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Crudo neto sin partes no comestibles; propuesta de porci\xF3n peque\xF1a/grande alrededor de tabla4, no l\xEDmites cl\xEDnicos. Pl\xE1tano media unidad; kiwi una unidad; fresas50g como complemento de bol (no raci\xF3n completa); otras frutas admiten media unidad/raci\xF3n. Fresas sin equivalencia de unidades por tama\xF1o variable. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
aceituna negra,10,80,aceituna,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | Peso comestible escurrido sin hueso; m\xEDnimo10g culinario para complemento. No convertir peso con hueso a neto sin comprobar. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
remolacha cocida,40,200,hortaliza,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo 40 g conservado del m\xE9todo para comida/cena, no una raci\xF3n oficial; referencia de grupo 150-200 g. Puede ser ingrediente secundario; no forzar todos a 150 g. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
alcachofa,40,200,hortaliza,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo 40 g conservado del m\xE9todo para comida/cena, no una raci\xF3n oficial; referencia de grupo 150-200 g. Puede ser ingrediente secundario; no forzar todos a 150 g. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
esp\xE1rrago,40,200,hortaliza,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo 40 g conservado del m\xE9todo para comida/cena, no una raci\xF3n oficial; referencia de grupo 150-200 g. Puede ser ingrediente secundario; no forzar todos a 150 g. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
perejil,0.5,5,condimento,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | Peso a\xF1adido neto; propuesta culinaria para una persona, NO m\xEDnimo nutricional ni obligaci\xF3n de a\xF1adirlo. Ajo: referencia diente5g; cacao: cucharada caf\xE94g/postre9g; especias por dosis peque\xF1a de condimento. No escalar para completar kcal. Canela sin especie verificada: no usar m\xE1ximo como umbral toxicol\xF3gico. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
coliflor,40,200,hortaliza,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo 40 g conservado del m\xE9todo para comida/cena, no una raci\xF3n oficial; referencia de grupo 150-200 g. Puede ser ingrediente secundario; no forzar todos a 150 g. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
piment\xF3n,0.5,3,condimento,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | Peso a\xF1adido neto; propuesta culinaria para una persona, NO m\xEDnimo nutricional ni obligaci\xF3n de a\xF1adirlo. Ajo: referencia diente5g; cacao: cucharada caf\xE94g/postre9g; especias por dosis peque\xF1a de condimento. No escalar para completar kcal. Canela sin especie verificada: no usar m\xE1ximo como umbral toxicol\xF3gico. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
comino,0.2,2,condimento,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | Peso a\xF1adido neto; propuesta culinaria para una persona, NO m\xEDnimo nutricional ni obligaci\xF3n de a\xF1adirlo. Ajo: referencia diente5g; cacao: cucharada caf\xE94g/postre9g; especias por dosis peque\xF1a de condimento. No escalar para completar kcal. Canela sin especie verificada: no usar m\xE1ximo como umbral toxicol\xF3gico. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
tomate triturado,15,300,salsa_tomate,"https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Tal cual; m\xEDnimo15g calculado de tabla4:10cucharadas=150g. Salsa/sofrito, no aplicar m\xEDnimo de tomate entero. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
pechuga de pollo,80,300,carne,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo de prote\xEDna principal en comida/cena conservado del m\xE9todo (80 g); gu\xEDa carne 100-125 g por raci\xF3n. No m\xEDnimo universal para trozos dentro de platos mixtos. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
ternera magra (solomillo de aguja),80,300,carne,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo de prote\xEDna principal en comida/cena conservado del m\xE9todo (80 g); gu\xEDa carne 100-125 g por raci\xF3n. No m\xEDnimo universal para trozos dentro de platos mixtos. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
lomo de cerdo,80,300,carne,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo de prote\xEDna principal en comida/cena conservado del m\xE9todo (80 g); gu\xEDa carne 100-125 g por raci\xF3n. No m\xEDnimo universal para trozos dentro de platos mixtos. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
conejo,80,400,carne,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo de prote\xEDna principal en comida/cena conservado del m\xE9todo (80 g); gu\xEDa carne 100-125 g por raci\xF3n. No m\xEDnimo universal para trozos dentro de platos mixtos. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
guisantes,40,250,hortaliza,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo 40 g conservado del m\xE9todo para comida/cena, no una raci\xF3n oficial; referencia de grupo 150-200 g. Puede ser ingrediente secundario; no forzar todos a 150 g. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
caballa,70,300,pescado_azul,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo como prote\xEDna principal 70 g por analog\xEDa con el m\xE9todo; gu\xEDa pescado 125-150 g. At\xFAn fresco no es at\xFAn de lata. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
lubina,80,300,pescado,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo de prote\xEDna principal conservado (80 g); referencia pescado 125-150 g. No m\xEDnimo universal para platos mixtos. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
mejill\xF3n,60,300,marisco,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo de prote\xEDna principal conservado/por analog\xEDa con marisco del m\xE9todo 60 g; peso comestible sin conchas. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
calamar,60,300,marisco,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | M\xEDnimo de prote\xEDna principal conservado/por analog\xEDa con marisco del m\xE9todo 60 g; peso comestible sin conchas. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
tofu firme,75,200,proteina_vegetal,"https://www.bda.uk.com/resource/food-facts-portion-sizes.html ; https://www.bda.uk.com/static/61ad81e4-ea30-41d3-a03717a2467754d9/Practical-guide-other-sources-of-PROTEIN.pdf | Tal cual neto antes de cocinar; referencias75-100g. M\xEDnimo75g; m\xE1ximo200g hasta dos porciones de100g en plato principal, estimaci\xF3n culinaria, no l\xEDmite oficial. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
tempeh,80,160,proteina_vegetal,"https://knowledge-for-policy.ec.europa.eu/health-promotion-knowledge-gateway/food-based-dietary-guidelines-europe-table-6_en | Tal cual neto antes de cocinar; tablaAustria80g/Suiza120g. M\xEDnimo80g y m\xE1ximo160g dos porciones peque\xF1as, propuesta culinaria, no l\xEDmite oficial. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
mozzarella,20,60,queso_mozzarella,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | Peso escurrido tal cual; m\xEDnimo20g como complemento (media porci\xF3n40g de queso), m\xE1ximo60g por analog\xEDa raci\xF3n de queso40-60g. No rango oficial para mozzarella ni equivalencia con cottage. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
cusc\xFAs,30,150,cereal_seco,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | Seco sin cocer; m\xEDnimo 30 g como media raci\xF3n de referencia 60-80 g, para plato mixto/guarnici\xF3n. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
tortilla de trigo,25,60,pan_plano,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | Tal cual, no harina cruda; m\xEDnimo25g una pieza peque\xF1a estimada y m\xE1ximo60g por analog\xEDa raci\xF3n pan40-60g. Unidades y marcas var\xEDan; no convertir a unidades sin etiqueta. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
aguacate,30,200,aguacate,"https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Neto sin piel ni hueso; m\xEDnimo30g=mitad de la media unidad neta60g de referencia, complemento graso; no tratar como fruta gen\xE9rica. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
hummus,30,90,crema_legumbre,"https://www.bda.uk.com/static/61ad81e4-ea30-41d3-a03717a2467754d9/Practical-guide-other-sources-of-PROTEIN.pdf | Preparado tal cual; referencia2cucharadas60g. M\xEDnimo30g una cucharada/m\xE1ximo90g tres; no gramos de garbanzo seco ni familia legumbre en grano. | Preparado tal cual (sin estado crudo aplicable). Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
mandarina,60,180,fruta,"https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Crudo neto sin partes no comestibles; propuesta de porci\xF3n peque\xF1a/grande alrededor de tabla4, no l\xEDmites cl\xEDnicos. Pl\xE1tano media unidad; kiwi una unidad; fresas50g como complemento de bol (no raci\xF3n completa); otras frutas admiten media unidad/raci\xF3n. Fresas sin equivalencia de unidades por tama\xF1o variable. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
canela,0.5,3,condimento,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | Peso a\xF1adido neto; propuesta culinaria para una persona, NO m\xEDnimo nutricional ni obligaci\xF3n de a\xF1adirlo. Ajo: referencia diente5g; cacao: cucharada caf\xE94g/postre9g; especias por dosis peque\xF1a de condimento. No escalar para completar kcal. Canela sin especie verificada: no usar m\xE1ximo como umbral toxicol\xF3gico. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
kiwi,80,160,fruta,"https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Crudo neto sin partes no comestibles; propuesta de porci\xF3n peque\xF1a/grande alrededor de tabla4, no l\xEDmites cl\xEDnicos. Pl\xE1tano media unidad; kiwi una unidad; fresas50g como complemento de bol (no raci\xF3n completa); otras frutas admiten media unidad/raci\xF3n. Fresas sin equivalencia de unidades por tama\xF1o variable. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
pi\xF1a,60,240,fruta,"https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Crudo neto sin partes no comestibles; propuesta de porci\xF3n peque\xF1a/grande alrededor de tabla4, no l\xEDmites cl\xEDnicos. Pl\xE1tano media unidad; kiwi una unidad; fresas50g como complemento de bol (no raci\xF3n completa); otras frutas admiten media unidad/raci\xF3n. Fresas sin equivalencia de unidades por tama\xF1o variable. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
cacao puro en polvo,2,10,condimento,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | Peso a\xF1adido neto; propuesta culinaria para una persona, NO m\xEDnimo nutricional ni obligaci\xF3n de a\xF1adirlo. Ajo: referencia diente5g; cacao: cucharada caf\xE94g/postre9g; especias por dosis peque\xF1a de condimento. No escalar para completar kcal. Canela sin especie verificada: no usar m\xE1ximo como umbral toxicol\xF3gico. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
mel\xF3n,125,375,fruta,"https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Crudo neto sin partes no comestibles; propuesta de porci\xF3n peque\xF1a/grande alrededor de tabla4, no l\xEDmites cl\xEDnicos. Pl\xE1tano media unidad; kiwi una unidad; fresas50g como complemento de bol (no raci\xF3n completa); otras frutas admiten media unidad/raci\xF3n. Fresas sin equivalencia de unidades por tama\xF1o variable. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
sand\xEDa,125,375,fruta,"https://scielo.isciii.es/scielo.php?lng=es&nrm=iso&pid=S2174-51452019000400002&script=sci_arttext | Crudo neto sin partes no comestibles; propuesta de porci\xF3n peque\xF1a/grande alrededor de tabla4, no l\xEDmites cl\xEDnicos. Pl\xE1tano media unidad; kiwi una unidad; fresas50g como complemento de bol (no raci\xF3n completa); otras frutas admiten media unidad/raci\xF3n. Fresas sin equivalencia de unidades por tama\xF1o variable. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
bebida de soja,100,500,bebida_vegetal,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | Tal cual; m\xEDnimo 100 g como media taza de acompa\xF1amiento; tope 500 g conservado del m\xE9todo (familia \xABBebida vegetal / leche\xBB, tope duro 500 g). Raci\xF3n habitual de uso 200 g. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
yogur de soja,60,250,yogur,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | Tal cual; misma banda que yogur natural y yogur griego del cat\xE1logo: m\xEDnimo 60 g como media unidad y tope 250 g del m\xE9todo (familia yogur). Unidad comercial 125 g. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
soja texturizada,30,80,proteina_vegetal_seca,"Sin fuente oficial de raci\xF3n (estimaci\xF3n propia). | Seco, tal cual se pesa antes de hidratar. Referencia nutricional USDA 174275 (harina de soja desgrasada como equivalente aproximado): 50 g secos aportan ~26 g de prote\xEDna; m\xEDnimo 30 g como media raci\xF3n proteica y m\xE1ximo 80 g (~41 g de prote\xEDna, plato muy proteico). Sin tope previo del m\xE9todo. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
quinoa,30,150,cereal_seco,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | Seco sin cocer, como el arroz: m\xEDnimo 30 g como media raci\xF3n y tope 150 g conservado del m\xE9todo (familia \xABCereal crudo\xBB, tope duro 150 g en crudo). | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
compota de manzana,50,200,fruta_procesada,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | Tal cual; m\xEDnimo 50 g como complemento de un bol; m\xE1ximo 200 g como equivalente aproximado a una raci\xF3n de fruta en pur\xE9 (m\xE1s denso que la pieza). Sin tope previo del m\xE9todo. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
semillas de calabaza,10,40,semilla,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | Neto sin c\xE1scara; misma banda que los frutos secos del cat\xE1logo (almendra y nueces 10-40 g): m\xEDnimo 10 g culinario para completar un bol, m\xE1ximo 40 g como raci\xF3n grasa del d\xEDa. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
semillas de girasol,10,40,semilla,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | Neto sin c\xE1scara; misma banda que los frutos secos del cat\xE1logo (almendra y nueces 10-40 g): m\xEDnimo 10 g culinario para completar un bol, m\xE1ximo 40 g como raci\xF3n grasa del d\xEDa. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
queso fresco,60,300,queso_fresco,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | Tal cual; misma banda que el queso cottage del cat\xE1logo (60-300 g, familia queso_fresco): m\xEDnimo 60 g como prote\xEDna principal de una cena, m\xE1ximo 300 g conservado del m\xE9todo. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
reques\xF3n,60,300,queso_fresco,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | Tal cual; m\xEDnimo propuesto 60 g como porci\xF3n peque\xF1a frente a la referencia de queso fresco 80-125 g. Reques\xF3n aproximado con queso cottage en alimentos-usda.csv (equivalente_aprox=si). | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
pan sin gluten,20,150,pan,"https://www.ucm.es/data/cont/docs/458-2015-10-22-pesos-medidas-caseras-raciones-2015.pdf | Tal cual; misma banda que el pan del cat\xE1logo (20-150 g) por analog\xEDa de uso. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
pasta sin gluten,30,150,cereal_seco,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | Seco sin cocer; misma banda que la pasta del cat\xE1logo (30-150 g) por analog\xEDa. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
tortita de ma\xEDz,10,60,pan_plano,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | Tal cual; m\xEDnimo 10 g como una tortita de referencia y m\xE1ximo 60 g por analog\xEDa con la raci\xF3n de pan 40-60 g. Unidades y marcas var\xEDan; no convertir a unidades sin etiqueta. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
polenta,30,150,cereal_seco,"https://estilosdevidasaludable.sanidad.gob.es/alimentacionSaludable/habilidades/compra/menus/home.htm | Harina de ma\xEDz en seco antes de cocer; misma banda que los cereales secos del cat\xE1logo (30-150 g). | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
copos de avena sin gluten,20,150,avena,"https://www.bda.uk.com/resource/food-facts-portion-sizes.html | Seco; misma banda que los copos de avena del cat\xE1logo (20-150 g): misma semilla en su versi\xF3n certificada sin gluten. | Propuesta, no activar sin validaci\xF3n de contexto.",estimacion
`;

  // src/motor/limites-ingredientes.ts
  var FACTOR_LEGUMBRE_COCIDA = 0.4;
  var RE_LEGUMBRE_COCIDA = /\b(garbanzo|lenteja|alubia)s?\b.*\bcocid/i;
  var COLUMNAS4 = ["ingrediente", "min_g", "max_g", "familia", "fuente_url_o_nota", "estado"];
  function comprobarLimitesIngredientesCsv(texto) {
    const fallos = [];
    const cab = (texto.split(/\r?\n/)[0] ?? "").split(",").map((x) => x.trim());
    for (const c2 of COLUMNAS4) if (!cab.includes(c2)) fallos.push(`falta la columna \xAB${c2}\xBB`);
    if (fallos.length) return fallos;
    const vistos = /* @__PURE__ */ new Set();
    for (const r of registros(texto)) {
      const id = r.ingrediente || "(sin nombre)";
      if (!r.ingrediente) fallos.push("fila sin ingrediente");
      if (vistos.has(id.toLowerCase())) fallos.push(`${id}: fila duplicada`);
      vistos.add(id.toLowerCase());
      const min = Number(r.min_g.replace(",", ".")), max = Number(r.max_g.replace(",", "."));
      if (!Number.isFinite(min) || min <= 0 || min > 1e3) fallos.push(`${id}: min_g \xAB${r.min_g}\xBB no es una raci\xF3n con sentido (0-1000)`);
      if (!Number.isFinite(max) || max <= 0 || max > 1e3) fallos.push(`${id}: max_g \xAB${r.max_g}\xBB no es una raci\xF3n con sentido (0-1000)`);
      if (Number.isFinite(min) && Number.isFinite(max) && min >= max) fallos.push(`${id}: el m\xEDnimo (${r.min_g}) no es menor que el m\xE1ximo (${r.max_g})`);
      if (r.estado !== "fuente" && r.estado !== "estimacion") fallos.push(`${id}: estado \xAB${r.estado}\xBB (solo fuente o estimacion)`);
      if (!r.fuente_url_o_nota) fallos.push(`${id}: sin fuente_url_o_nota`);
      if (!r.familia) fallos.push(`${id}: sin familia`);
    }
    return fallos;
  }
  function limitesIngredientesDesdeCsv(texto) {
    return registros(texto).map((r) => {
      const cocida = RE_LEGUMBRE_COCIDA.test(r.ingrediente);
      const f2 = (g) => Math.round((cocida ? g / FACTOR_LEGUMBRE_COCIDA : g) * 10) / 10;
      return { ingrediente: r.ingrediente, minG: f2(Number(r.min_g.replace(",", "."))), maxG: f2(Number(r.max_g.replace(",", "."))), familia: r.familia, estado: r.estado };
    });
  }

  // src/motor/comer-fuera.ts
  function normalizarTexto2(s) {
    return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/coca[\s-]*cola/g, "cocacola").replace(/mc[\s-]*donald'?s?/g, "mcdonalds").replace(/[^a-z0-9]+/g, " ").trim();
  }
  var num = (s) => {
    const n = Number((s ?? "").replace(",", "."));
    return s !== void 0 && s.trim() !== "" && Number.isFinite(n) ? n : void 0;
  };
  function comerFueraDesdeCsv(texto) {
    return registros(texto).filter((r) => r.cadena && r.plato && (r.estado === "oficial" || r.estado === "estimacion")).map((r) => ({
      cadena: r.cadena,
      plato: r.plato,
      tamano: r.tamano,
      sinonimos: (r.sinonimos ?? "").split(";").map((x) => x.trim()).filter(Boolean),
      kcalUnidad: num(r.kcal_unidad),
      kcal100: num(r.kcal_100),
      peso: num(r.peso_g_o_ml),
      pesoMin: num(r.peso_min_g),
      pesoMax: num(r.peso_max_g),
      estado: r.estado,
      fuenteUrl: r.fuente_url,
      fecha: r.fecha_consulta
    }));
  }
  function comprobarComerFueraCsv(texto) {
    const fallos = [];
    const cab = (texto.split(/\r?\n/)[0] ?? "").split(",").map((x) => x.trim());
    for (const c2 of ["cadena", "plato", "tamano", "sinonimos", "kcal_unidad", "kcal_100", "peso_g_o_ml", "peso_min_g", "peso_max_g", "estado", "fuente_url", "fecha_consulta"]) {
      if (!cab.includes(c2)) fallos.push(`falta la columna ${c2}`);
    }
    if (fallos.length) return fallos;
    const claves = /* @__PURE__ */ new Set();
    const aliasPorCadena = /* @__PURE__ */ new Map();
    for (const r of registros(texto)) {
      const id = `${r.cadena} \xB7 ${r.plato} \xB7 ${r.tamano}`;
      if (!r.cadena || !r.plato) {
        fallos.push(`fila sin cadena o plato (${id})`);
        continue;
      }
      if (claves.has(id)) fallos.push(`${id}: fila duplicada`);
      claves.add(id);
      if (r.estado !== "oficial" && r.estado !== "estimacion") fallos.push(`${id}: estado \xAB${r.estado}\xBB no permitido (oficial o estimacion)`);
      if (!/^https:\/\//.test(r.fuente_url)) fallos.push(`${id}: sin fuente_url https`);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(r.fecha_consulta)) fallos.push(`${id}: fecha_consulta no es AAAA-MM-DD`);
      const campos = [
        ["kcal_unidad", num(r.kcal_unidad), 0, 3e3],
        ["kcal_100", num(r.kcal_100), 0, 900],
        ["peso_g_o_ml", num(r.peso_g_o_ml), 1, 3e3],
        ["peso_min_g", num(r.peso_min_g), 1, 3e3],
        ["peso_max_g", num(r.peso_max_g), 1, 3e3]
      ];
      for (const [nombre, v, min, max] of campos) {
        if (r[nombre] !== "" && (v === void 0 || v < min || v > max)) fallos.push(`${id}: ${nombre} \xAB${r[nombre]}\xBB fuera de rango (${min}-${max})`);
      }
      const [ku, k100, peso, pmin, pmax] = campos.map((c2) => c2[1]);
      if (pmin !== void 0 && pmax !== void 0 && pmin >= pmax) fallos.push(`${id}: peso_min_g no es menor que peso_max_g`);
      const sePuedeCalcular = ku !== void 0 || k100 !== void 0 && (peso !== void 0 || pmin !== void 0 && pmax !== void 0);
      if (!sePuedeCalcular) fallos.push(`${id}: no hay forma de calcular las kcal (kcal_unidad, o kcal_100 con peso o con rango de peso)`);
      if (r.estado === "oficial" && ku === void 0 && !(k100 !== void 0 && peso !== void 0)) fallos.push(`${id}: una fila oficial necesita kcal_unidad o kcal_100 con peso oficial`);
      if (r.estado === "estimacion" && pmin === void 0 && ku === void 0 && peso === void 0) fallos.push(`${id}: una estimaci\xF3n necesita un rango de peso`);
      for (const a2 of [r.plato, ...(r.sinonimos ?? "").split(";")].map(normalizarTexto2).filter(Boolean)) {
        const k = `${normalizarTexto2(r.cadena)}|${normalizarTexto2(r.tamano)}|${a2}`;
        const otro = aliasPorCadena.get(k);
        if (otro && otro !== id) fallos.push(`${id}: el nombre \xAB${a2}\xBB ya lo usa ${otro}`);
        aliasPorCadena.set(k, id);
      }
    }
    return fallos;
  }
  var CADENA_BAR = "Ejemplo acotado de bar";
  var PALABRAS_VACIAS = /* @__PURE__ */ new Set(["un", "una", "uno", "unos", "unas", "de", "del", "la", "el", "los", "las", "en", "al", "a", "me", "he", "comido", "tomado", "bebido", "con", "y", "mas"]);
  var NUMEROS = { un: 1, una: 1, uno: 1, dos: 2, tres: 3, cuatro: 4, cinco: 5, seis: 6, media: 0.5, medio: 0.5 };
  var TAMANOS_PIZZA = ["familiar", "grande", "individual", "pequena", "mediana", "xl"];
  var FORMATOS = /* @__PURE__ */ new Set(["lata", "latas", "botella", "botellin", "vaso", "jarra", "litro", "pack"]);
  var CONTENEDORES_SIN_DATO = ["botella", "botellin", "vaso", "jarra", "litro"];
  var esPizza = (f2) => normalizarTexto2(f2.tamano).split(" ").includes("masa");
  var unidadPeso = (f2) => /\bml\b/.test(normalizarTexto2(f2.tamano)) ? "ml" : "g";
  function cantidadDe(tokens2) {
    let cantidad = 1;
    const resto = [];
    for (const t2 of tokens2) {
      if (/^\d+([.,]\d+)?x?$/.test(t2) && Number(t2.replace(",", ".").replace("x", "")) <= 20) {
        cantidad = Number(t2.replace(",", ".").replace("x", ""));
        continue;
      }
      if (t2 in NUMEROS) {
        cantidad = NUMEROS[t2];
        continue;
      }
      resto.push(t2);
    }
    return { cantidad, resto };
  }
  var FIN_NO_VALIDO = /* @__PURE__ */ new Set([...PALABRAS_VACIAS, "sin"]);
  function nombresGenericos(tabla2) {
    const ocupados = new Set(tabla2.flatMap((f2) => [f2.plato, ...f2.sinonimos].map(normalizarTexto2)));
    const duenos = /* @__PURE__ */ new Map();
    for (const f2 of tabla2.filter((x) => x.estado === "estimacion" && !esPizza(x))) {
      const t2 = normalizarTexto2(f2.plato).split(" ").filter(Boolean);
      for (let n = 2; n < t2.length; n++) {
        if (FIN_NO_VALIDO.has(t2[n - 1])) continue;
        const a2 = t2.slice(0, n).join(" ");
        if (ocupados.has(a2)) continue;
        (duenos.get(a2) ?? duenos.set(a2, /* @__PURE__ */ new Set()).get(a2)).add(f2);
      }
    }
    const out = /* @__PURE__ */ new Map();
    for (const [a2, fs] of duenos) for (const f2 of fs) out.set(f2, [...out.get(f2) ?? [], a2]);
    return out;
  }
  function rangoKcal(f2) {
    if (f2.kcalUnidad !== void 0) return { min: f2.kcalUnidad, max: f2.kcalUnidad };
    if (f2.kcal100 === void 0) return void 0;
    if (f2.peso !== void 0) {
      const k = Math.round(f2.kcal100 * f2.peso / 100);
      return { min: k, max: k };
    }
    if (f2.pesoMin !== void 0 && f2.pesoMax !== void 0) return { min: Math.round(f2.kcal100 * f2.pesoMin / 100), max: Math.round(f2.kcal100 * f2.pesoMax / 100) };
    return void 0;
  }
  function estimarComidaFuera(texto, tabla2) {
    tabla2 = tabla2.filter((f2) => f2.cadena !== CADENA_TIPICA);
    const genericos = nombresGenericos(tabla2);
    const aliasesDe = (f2) => [f2.plato, ...f2.sinonimos, ...genericos.get(f2) ?? []];
    const conPlural = (a2) => {
      const [p, ...resto] = a2.split(" ");
      return [a2, [`${p}s`, ...resto].join(" "), [`${p}es`, ...resto].join(" ")];
    };
    const conConector = [...new Set(tabla2.flatMap((f2) => aliasesDe(f2).map(normalizarTexto2)).filter((a2) => /\b(?:con|y|mas)\b/.test(a2)).flatMap(conPlural))].sort((a2, b) => b.length - a2.length);
    const proteger = (n) => conConector.reduce((acc, a2) => acc.split(a2).join(a2.replace(/ /g, "_")), n);
    const trozos = texto.split(/[,;+]/).flatMap((p) => proteger(normalizarTexto2(p)).split(/\b(?:con|y|mas)\b/)).map((t2) => t2.trim().replace(/_/g, " ")).filter(Boolean);
    const cadenas = [...new Set(tabla2.map((f2) => f2.cadena))].map((c2) => ({ c: c2, alias: normalizarTexto2(c2).replace(/ espana$/, "") }));
    const lineas = [];
    const sinReconocer = [];
    let cadenaPrevia;
    for (const trozo of trozos) {
      const toks = trozo.split(" ").filter(Boolean);
      const numeroEscrito = toks.some((t2) => /^\d+([.,]\d+)?x?$/.test(t2) && Number(t2.replace(",", ".").replace("x", "")) <= 20) || toks.some((t2) => t2 in NUMEROS && !["un", "una", "uno"].includes(t2));
      const { cantidad, resto } = cantidadDe(toks.filter((t2) => !PALABRAS_VACIAS.has(t2) || t2 in NUMEROS || t2 === "con"));
      const utiles = resto.filter((t2) => !PALABRAS_VACIAS.has(t2));
      let cadena = cadenas.find((x) => ` ${utiles.join(" ")} `.includes(` ${x.alias} `));
      let delTrozo = new Set(utiles.map((t2) => t2.replace(/s$/, "")).concat(utiles));
      const delTrozoEscrito = delTrozo;
      const puntuar = (candidatas2, del, conCadena) => {
        let mejor2 = [];
        let mejorPuntos = 0;
        for (const f2 of candidatas2) {
          let p = 0;
          const deLaCadena = new Set(normalizarTexto2(f2.cadena).replace(/ espana$/, "").split(" "));
          for (const a2 of aliasesDe(f2).map(normalizarTexto2)) {
            const ts = a2.split(" ").filter((t2) => t2 && !PALABRAS_VACIAS.has(t2));
            const delPlato = ts.filter((t2) => !deLaCadena.has(t2)).length || (ts.every((t2) => delTrozoEscrito.has(t2)) ? 0.5 : 0);
            if (ts.length && delPlato && ts.every((t2) => del.has(t2) || del.has(t2.replace(/s$/, "")))) p = Math.max(p, delPlato);
          }
          if (p === 0) continue;
          if (f2.estado === "estimacion" && esPizza(f2) && !conCadena && !del.has("pizza")) continue;
          const deSuNombre = new Set(normalizarTexto2(f2.plato).split(" "));
          for (const t2 of normalizarTexto2(f2.tamano).split(" ")) if (t2.length > 3 && del.has(t2) && !deSuNombre.has(t2)) p += 0.5;
          if (p > mejorPuntos) {
            mejorPuntos = p;
            mejor2 = [{ f: f2, puntos: p }];
          } else if (p === mejorPuntos) mejor2.push({ f: f2, puntos: p });
        }
        return mejor2;
      };
      let mejor = [];
      if (!cadena && cadenaPrevia) {
        const conPrevia = /* @__PURE__ */ new Set([...delTrozo, ...cadenaPrevia.alias.split(" ")]);
        const m = puntuar(tabla2.filter((f2) => f2.cadena === cadenaPrevia.c), conPrevia, true);
        if (m.length === 1 || m.length > 1 && m.every((x) => x.f.plato === m[0].f.plato)) {
          mejor = m;
          cadena = cadenaPrevia;
          delTrozo = conPrevia;
        }
      }
      const candidatas = tabla2.filter((f2) => !cadena || f2.cadena === cadena.c);
      if (!mejor.length) mejor = puntuar(candidatas, delTrozo, Boolean(cadena));
      let otras = [];
      if (!cadena && mejor.length > 1) {
        const deBar = mejor.filter((m) => m.f.cadena === CADENA_BAR);
        if (deBar.length && deBar.length < mejor.length) mejor = deBar;
      }
      if (mejor.length === 0 && !delTrozo.has("pizza")) {
        const marca = utiles.filter((t2) => t2.length >= 4 && !(cadena && cadena.alias.split(" ").includes(t2)) && !FORMATOS.has(t2));
        const familia = marca.length ? candidatas.filter((f2) => f2.estado === "oficial" && (() => {
          const ts = new Set([f2.plato, ...f2.sinonimos].map((a2) => normalizarTexto2(a2).split(" ")[0]));
          return marca.every((m) => ts.has(m) || ts.has(m.replace(/s$/, "")));
        })()) : [];
        const deBar = !cadena && marca.length === 1 ? tabla2.filter((f2) => f2.cadena === CADENA_BAR && normalizarTexto2(f2.plato).split(" ")[0] === marca[0].replace(/s$/, "")) : [];
        if (deBar.length) {
          mejor = [{ f: deBar[0], puntos: 1 }];
          otras = deBar.slice(1).map((f2) => f2.plato);
        } else if (familia.length && !cadena && new Set(familia.map((f2) => f2.cadena)).size > 1) {
          const donde = [...new Set(familia.map((f2) => f2.cadena.replace(/ España$/, "")))];
          sinReconocer.push(`${trozo} (dime de d\xF3nde: ${donde.join(", ")})`);
          continue;
        } else if (familia.length) {
          const elegida = familia.find((f2) => !/zero|sin/.test(normalizarTexto2(f2.plato))) ?? familia[0];
          mejor = [{ f: elegida, puntos: 1 }];
          otras = familia.filter((f2) => f2 !== elegida).map((f2) => f2.plato);
        }
      }
      if (mejor.length > 1 && mejor.every((m) => m.f.estado === "estimacion" && !esPizza(m.f) && m.f.cadena === mejor[0].f.cadena)) {
        otras = mejor.slice(1).map((m) => m.f.plato);
        mejor = [mejor[0]];
      }
      if (mejor.length > 1 && mejor.every((m) => m.f.plato === mejor[0].f.plato && m.f.cadena === mejor[0].f.cadena)) {
        const pref = mejor.find((m) => /lata/.test(normalizarTexto2(m.f.tamano))) ?? mejor[0];
        otras = mejor.filter((m) => m !== pref).map((m) => `${m.f.plato} (${m.f.tamano})`);
        mejor = [pref];
      }
      if (mejor.length === 1) {
        const f2 = mejor[0].f;
        const r = rangoKcal(f2);
        const contenedor = utiles.find((t2) => CONTENEDORES_SIN_DATO.includes(t2) && !normalizarTexto2(f2.tamano).split(" ").includes(t2));
        if (contenedor && f2.estado === "oficial") {
          sinReconocer.push(`${trozo} (solo tengo ${f2.tamano || "un formato"}: dime las calor\xEDas o cu\xE1ntas latas son)`);
          continue;
        }
        const tamPedido = utiles.find((t2) => TAMANOS_PIZZA.includes(t2));
        if (tamPedido === "individual" && f2.estado === "estimacion" && esPizza(f2)) {
          sinReconocer.push(`${trozo} (la pizza individual no tiene datos: dime los gramos o las calor\xEDas)`);
          continue;
        }
        const comoMinimo = f2.estado === "estimacion" && esPizza(f2) && tamPedido !== void 0 && tamPedido !== "mediana" && !normalizarTexto2(f2.tamano).split(" ").includes(tamPedido);
        const supuesto = f2.estado === "oficial" && f2.tamano && !normalizarTexto2(f2.tamano).split(" ").some((t2) => t2.length > 3 && delTrozo.has(t2));
        const notas = [];
        if (comoMinimo) notas.push(`\xAB${tamPedido}\xBB no tiene dato propio: la cifra es como m\xEDnimo la de una mediana (${f2.pesoMin} g, sin inventar el peso de la ${tamPedido}). Dime cu\xE1ntas porciones o cu\xE1nto pesaba y aj\xFAstalo.`);
        else if (f2.estado === "estimacion" && f2.pesoMin !== void 0 && f2.pesoMax !== void 0) notas.push(`${esPizza(f2) ? "Peso" : "Cantidad"} estimad${esPizza(f2) ? "o" : "a"} (${f2.pesoMin}-${f2.pesoMax} ${unidadPeso(f2)}): la cifra es un rango. Si sabes ${unidadPeso(f2) === "ml" ? "cu\xE1nto has tomado" : "cu\xE1nto pesaba o cu\xE1nto comiste"}, aj\xFAstalo.`);
        else if (f2.estado === "estimacion") notas.push("Cifra aproximada (no es de la informaci\xF3n oficial de la cadena). Si sabes las calor\xEDas, aj\xFAstalo.");
        if (supuesto) notas.push(`He supuesto ${f2.tamano}.`);
        const nombreCompleto = [f2.plato, ...f2.sinonimos].some((a2) => normalizarTexto2(a2).split(" ").filter((t2) => t2 && !PALABRAS_VACIAS.has(t2)).every((t2) => delTrozo.has(t2) || delTrozo.has(t2.replace(/s$/, ""))));
        if (f2.estado === "estimacion" && !nombreCompleto) notas.push(`He usado \xAB${f2.plato}\xBB (${f2.tamano}), la cifra de ese tipo m\xE1s general que tengo; si fue otra cosa, aj\xFAstalo.`);
        const enUnidades = /(\d+)(?:\s*-\s*(\d+))?\s+unidades/.exec(normalizarTexto2(f2.tamano));
        let min = r.min * cantidad;
        let max = r.max * cantidad;
        if (enUnidades && numeroEscrito) {
          const nMin = Number(enUnidades[1]);
          const nMax = Number(enUnidades[2] ?? enUnidades[1]);
          min = r.min / nMax * cantidad;
          max = r.max / nMin * cantidad;
          notas.push(`Cuento ${String(cantidad).replace(".", ",")} unidad${cantidad === 1 ? "" : "es"} (la cifra de la tabla es de ${f2.tamano.split(";")[0].trim()}).`);
        }
        lineas.push({
          nombre: `${f2.plato}${f2.tamano ? ` (${f2.tamano})` : ""}`,
          cadena: f2.cadena,
          cantidad,
          kcalMin: Math.round(min),
          kcalMax: comoMinimo ? Math.round(min) : Math.round(max),
          estado: f2.estado,
          ...comoMinimo ? { comoMinimo: true } : {},
          ...notas.length ? { nota: notas.join(" ") } : {},
          ...otras.length ? { opciones: otras } : {}
        });
        cadenaPrevia = cadenas.find((x) => x.c === f2.cadena && x.c !== CADENA_BAR);
        continue;
      }
      const quierePizza = delTrozo.has("pizza") && cadena !== void 0;
      if (quierePizza) {
        const pizzas = candidatas.filter((f2) => f2.estado === "estimacion" && f2.pesoMin !== void 0 && f2.kcal100 !== void 0);
        const tam = utiles.find((t2) => TAMANOS_PIZZA.includes(t2));
        if (tam === "individual") {
          sinReconocer.push(`${trozo} (la pizza individual de Telepizza no tiene datos: dime los gramos o las calor\xEDas)`);
          continue;
        }
        if (pizzas.length) {
          const media = pizzas.reduce((s, f2) => s + f2.kcal100, 0) / pizzas.length;
          const pmin = Math.min(...pizzas.map((f2) => f2.pesoMin)), pmax = Math.max(...pizzas.map((f2) => f2.pesoMax));
          const comoMinimo = tam !== void 0 && tam !== "mediana";
          const tamNota = comoMinimo ? ` \xAB${tam}\xBB no tiene dato propio: la cifra es como m\xEDnimo la de una mediana (${pmin} g), sin inventar el peso de la ${tam}. Dime cu\xE1ntas porciones o cu\xE1nto pesaba y aj\xFAstalo.` : "";
          lineas.push({
            nombre: `Pizza de ${cadena.c} (sin elegir variedad)`,
            cadena: cadena.c,
            cantidad,
            kcalMin: Math.round(media * pmin / 100 * cantidad),
            kcalMax: Math.round(media * (comoMinimo ? pmin : pmax) / 100 * cantidad),
            estado: "estimacion",
            ...comoMinimo ? { comoMinimo: true } : {},
            nota: comoMinimo ? `Densidad media de sus pizzas.${tamNota} Elige la variedad para afinar.` : `Densidad media de sus pizzas y peso estimado (${pmin}-${pmax} g): un rango. Elige la variedad para afinar.`,
            opciones: pizzas.map((f2) => f2.plato)
          });
          continue;
        }
      }
      sinReconocer.push(trozo);
    }
    const total = { min: lineas.reduce((s, l) => s + l.kcalMin, 0), max: lineas.reduce((s, l) => s + l.kcalMax, 0), ...lineas.some((l) => l.comoMinimo) ? { comoMinimo: true } : {} };
    return { lineas, total, sinReconocer };
  }
  var CADENA_TIPICA = "Referencia t\xEDpica de restaurante";
  function cifraTipicaRestaurante(tabla2, franja) {
    const plato = franja === "media_manana" || franja === "merienda" ? "tentempi\xE9" : franja;
    const f2 = tabla2.find((x) => x.cadena === CADENA_TIPICA && normalizarTexto2(x.plato) === normalizarTexto2(plato));
    if (!f2) return void 0;
    const peso = f2.peso ?? (f2.pesoMin !== void 0 && f2.pesoMax !== void 0 ? (f2.pesoMin + f2.pesoMax) / 2 : void 0);
    const kcal = f2.kcalUnidad ?? (f2.kcal100 !== void 0 && peso !== void 0 ? f2.kcal100 * peso / 100 : void 0);
    return kcal === void 0 ? void 0 : { kcal: Math.round(kcal / 10) * 10, fuenteUrl: f2.fuenteUrl, fecha: f2.fecha, tamano: f2.tamano };
  }

  // src/motor/comer-fuera-datos.ts
  var COMER_FUERA_CSV = `cadena,plato,tamano,sinonimos,kcal_unidad,kcal_100,peso_g_o_ml,peso_min_g,peso_max_g,estado,fuente_url,fecha_consulta
Telepizza,4 quesos,mediana masa cl\xE1sica,4 quesos;pizza 4 quesos,,224,,500,700,estimacion,https://www.telepizza.es/on/demandware.static/-/Sites-TelepizzaES-Library/default/dw50cfa1dc/documents/nutricion.pdf,2026-10-13
Telepizza,Bacon crispy,mediana masa cl\xE1sica,bacon crispy;pizza bacon crispy,,232,,500,700,estimacion,https://www.telepizza.es/on/demandware.static/-/Sites-TelepizzaES-Library/default/dw50cfa1dc/documents/nutricion.pdf,2026-10-13
Telepizza,Barbacoa,mediana masa cl\xE1sica,barbacoa;pizza barbacoa,,213,,500,700,estimacion,https://www.telepizza.es/on/demandware.static/-/Sites-TelepizzaES-Library/default/dw50cfa1dc/documents/nutricion.pdf,2026-10-13
Telepizza,Barbacoa cr\xE8me,mediana masa cl\xE1sica,barbacoa creme;pizza barbacoa creme,,211,,500,700,estimacion,https://www.telepizza.es/on/demandware.static/-/Sites-TelepizzaES-Library/default/dw50cfa1dc/documents/nutricion.pdf,2026-10-13
Telepizza,Burger,mediana masa cl\xE1sica,burger;pizza burger,,243,,500,700,estimacion,https://www.telepizza.es/on/demandware.static/-/Sites-TelepizzaES-Library/default/dw50cfa1dc/documents/nutricion.pdf,2026-10-13
Telepizza,Carbonara (cebolla),mediana masa cl\xE1sica,carbonara (cebolla);pizza carbonara (cebolla),,211,,500,700,estimacion,https://www.telepizza.es/on/demandware.static/-/Sites-TelepizzaES-Library/default/dw50cfa1dc/documents/nutricion.pdf,2026-10-13
Telepizza,Carbonara (extra de fundido para pizza),mediana masa cl\xE1sica,carbonara (extra de fundido para pizza);pizza carbonara (extra de fundido para pizza),,228,,500,700,estimacion,https://www.telepizza.es/on/demandware.static/-/Sites-TelepizzaES-Library/default/dw50cfa1dc/documents/nutricion.pdf,2026-10-13
Telepizza,De la huerta,mediana masa cl\xE1sica,de la huerta;pizza de la huerta,,165,,500,700,estimacion,https://www.telepizza.es/on/demandware.static/-/Sites-TelepizzaES-Library/default/dw50cfa1dc/documents/nutricion.pdf,2026-10-13
Telepizza,Delicheese,mediana masa cl\xE1sica,delicheese;pizza delicheese,,222,,500,700,estimacion,https://www.telepizza.es/on/demandware.static/-/Sites-TelepizzaES-Library/default/dw50cfa1dc/documents/nutricion.pdf,2026-10-13
Telepizza,Especial de la casa (cebolla),mediana masa cl\xE1sica,especial de la casa (cebolla);pizza especial de la casa (cebolla),,183,,500,700,estimacion,https://www.telepizza.es/on/demandware.static/-/Sites-TelepizzaES-Library/default/dw50cfa1dc/documents/nutricion.pdf,2026-10-13
Telepizza,Especial de la casa (champi\xF1\xF3n),mediana masa cl\xE1sica,especial de la casa (champinon);pizza especial de la casa (champinon),,179,,500,700,estimacion,https://www.telepizza.es/on/demandware.static/-/Sites-TelepizzaES-Library/default/dw50cfa1dc/documents/nutricion.pdf,2026-10-13
Telepizza,Formaggio,mediana masa cl\xE1sica,formaggio;pizza formaggio,,241,,500,700,estimacion,https://www.telepizza.es/on/demandware.static/-/Sites-TelepizzaES-Library/default/dw50cfa1dc/documents/nutricion.pdf,2026-10-13
Telepizza,Hawaiana,mediana masa cl\xE1sica,hawaiana;pizza hawaiana,,197,,500,700,estimacion,https://www.telepizza.es/on/demandware.static/-/Sites-TelepizzaES-Library/default/dw50cfa1dc/documents/nutricion.pdf,2026-10-13
Telepizza,Kebab,mediana masa cl\xE1sica,kebab;pizza kebab,,210,,500,700,estimacion,https://www.telepizza.es/on/demandware.static/-/Sites-TelepizzaES-Library/default/dw50cfa1dc/documents/nutricion.pdf,2026-10-13
Telepizza,La Furiosa,mediana masa cl\xE1sica,la furiosa;pizza la furiosa,,226,,500,700,estimacion,https://www.telepizza.es/on/demandware.static/-/Sites-TelepizzaES-Library/default/dw50cfa1dc/documents/nutricion.pdf,2026-10-13
Telepizza,Pepe Pepperoni,mediana masa cl\xE1sica,pepe pepperoni;pizza pepe pepperoni,,258,,500,700,estimacion,https://www.telepizza.es/on/demandware.static/-/Sites-TelepizzaES-Library/default/dw50cfa1dc/documents/nutricion.pdf,2026-10-13
Coca-Cola Espa\xF1a,Coca-Cola sabor original,lata 330 ml,cocacola;coca cola;cola,139,42,330,,,oficial,https://www.coca-cola.com/es/es/brands/coca-cola/coca-cola-sabor-original;https://www.coca-cola.com/es/es/about-us/faq/cuanto-azucar-hay-en-una-lata-de-cocacola;https://www.coca-cola.com/es/es/legal/bases-promocionales-verano-2025,2026-10-13
Coca-Cola Espa\xF1a,Coca-Cola Zero Az\xFAcar,lata 330 ml,cocacola zero;coca cola zero,,0.2,330,,,oficial,https://www.coca-cola.com/es/es/brands/coca-cola/coca-cola-zero;https://www.coca-cola.com/es/es/offerings/portfolio-zero,2026-10-13
Coca-Cola Espa\xF1a,Coca-Cola Sin Cafe\xEDna,lata 330 ml,coca cola sin cafeina,,44,330,,,oficial,https://www.coca-cola.com/es/es/brands/coca-cola/coca-cola-sin-cafeina;https://www.coca-cola.com/es/es/legal/bases-promocionales-verano-2025,2026-10-13
Coca-Cola Espa\xF1a,Fanta Naranja,lata 330 ml,fanta naranja,,18,330,,,oficial,https://www.coca-cola.com/es/es/brands/fanta;https://www.coca-cola.com/es/es/legal/bases-promocionales-verano-2025,2026-10-13
Coca-Cola Espa\xF1a,Fanta Lim\xF3n,lata 330 ml,fanta limon,,19,330,,,oficial,https://www.coca-cola.com/es/es/brands/fanta;https://www.coca-cola.com/es/es/legal/bases-promocionales-verano-2025,2026-10-13
Coca-Cola Espa\xF1a,Fanta Naranja Zero Az\xFAcares A\xF1adidos,lata 330 ml,fanta naranja zero,,3,330,,,oficial,https://www.coca-cola.com/es/es/brands/fanta;https://www.coca-cola.com/es/es/offerings/portfolio-zero,2026-10-13
Coca-Cola Espa\xF1a,Fanta Lim\xF3n Zero Az\xFAcares A\xF1adidos,lata 330 ml,fanta limon zero,,2,330,,,oficial,https://www.coca-cola.com/es/es/brands/fanta;https://www.coca-cola.com/es/es/offerings/portfolio-zero,2026-10-13
Coca-Cola Espa\xF1a,Sprite,lata 330 ml,sprite;refresco lima limon,,19,330,,,oficial,https://www.coca-cola.com/es/es/brands/sprite;https://www.coca-cola.com/es/es/legal/bases-promocionales-sprite-verano-2026,2026-10-13
Coca-Cola Espa\xF1a,Sprite Zero Az\xFAcar,lata 330 ml,sprite zero,,1,330,,,oficial,https://www.coca-cola.com/es/es/brands/sprite;https://www.coca-cola.com/es/es/legal/bases-promocionales-sprite-verano-2026,2026-10-13
Coca-Cola Espa\xF1a,Aquarius Zero Az\xFAcar,lata 330 ml,aquarius zero limon,,1,330,,,oficial,https://www.coca-cola.com/es/es/brands/descubre-aquarius/productos;https://www.coca-cola.com/es/es/offerings/portfolio-zero,2026-10-13
Burger King Espa\xF1a,Whopper,unidad,whopper,643,,289,,,oficial,https://eu-west-3-146514239214-prod-bk-fz.s3.eu-west-3.amazonaws.com/en-ES/2026/MANTEL+NUTRICIONAL+ESP+ING+08+SEPTIEMBRE+2026.pdf,2026-10-14
Burger King Espa\xF1a,Doble Whopper,unidad,doble whopper,893,,378,,,oficial,https://eu-west-3-146514239214-prod-bk-fz.s3.eu-west-3.amazonaws.com/en-ES/2026/MANTEL+NUTRICIONAL+ESP+ING+08+SEPTIEMBRE+2026.pdf,2026-10-14
Burger King Espa\xF1a,Hamburger,unidad,hamburguesa sencilla,231,,100,,,oficial,https://eu-west-3-146514239214-prod-bk-fz.s3.eu-west-3.amazonaws.com/en-ES/2026/MANTEL+NUTRICIONAL+ESP+ING+08+SEPTIEMBRE+2026.pdf,2026-10-14
Burger King Espa\xF1a,Cheeseburger,unidad,hamburguesa con queso,267,,111,,,oficial,https://eu-west-3-146514239214-prod-bk-fz.s3.eu-west-3.amazonaws.com/en-ES/2026/MANTEL+NUTRICIONAL+ESP+ING+08+SEPTIEMBRE+2026.pdf,2026-10-14
Burger King Espa\xF1a,Crispy Chicken,unidad,crispy chicken,506,,184,,,oficial,https://eu-west-3-146514239214-prod-bk-fz.s3.eu-west-3.amazonaws.com/en-ES/2026/MANTEL+NUTRICIONAL+ESP+ING+08+SEPTIEMBRE+2026.pdf,2026-10-14
Burger King Espa\xF1a,Long Chicken,unidad,long chicken,585,,213,,,oficial,https://eu-west-3-146514239214-prod-bk-fz.s3.eu-west-3.amazonaws.com/en-ES/2026/MANTEL+NUTRICIONAL+ESP+ING+08+SEPTIEMBRE+2026.pdf,2026-10-14
Burger King Espa\xF1a,Big King,unidad,big king,525,,200,,,oficial,https://eu-west-3-146514239214-prod-bk-fz.s3.eu-west-3.amazonaws.com/en-ES/2026/MANTEL+NUTRICIONAL+ESP+ING+08+SEPTIEMBRE+2026.pdf,2026-10-14
Burger King Espa\xF1a,Whopper Vegetal,unidad,whopper vegetal,578,,291,,,oficial,https://eu-west-3-146514239214-prod-bk-fz.s3.eu-west-3.amazonaws.com/en-ES/2026/MANTEL+NUTRICIONAL+ESP+ING+08+SEPTIEMBRE+2026.pdf,2026-10-14
Burger King Espa\xF1a,Patatas fritas,peque\xF1as,patatas peque\xF1as,219,,90,,,oficial,https://eu-west-3-146514239214-prod-bk-fz.s3.eu-west-3.amazonaws.com/en-ES/2026/MANTEL+NUTRICIONAL+ESP+ING+08+SEPTIEMBRE+2026.pdf,2026-10-14
Burger King Espa\xF1a,Patatas fritas,medianas,patatas medianas,386,,159,,,oficial,https://eu-west-3-146514239214-prod-bk-fz.s3.eu-west-3.amazonaws.com/en-ES/2026/MANTEL+NUTRICIONAL+ESP+ING+08+SEPTIEMBRE+2026.pdf,2026-10-14
Burger King Espa\xF1a,Patatas fritas,grandes,patatas grandes,530,,218,,,oficial,https://eu-west-3-146514239214-prod-bk-fz.s3.eu-west-3.amazonaws.com/en-ES/2026/MANTEL+NUTRICIONAL+ESP+ING+08+SEPTIEMBRE+2026.pdf,2026-10-14
Burger King Espa\xF1a,King Nuggets,6 unidades,nuggets 6,271,,108,,,oficial,https://eu-west-3-146514239214-prod-bk-fz.s3.eu-west-3.amazonaws.com/en-ES/2026/MANTEL+NUTRICIONAL+ESP+ING+08+SEPTIEMBRE+2026.pdf,2026-10-14
Burger King Espa\xF1a,Ensalada King C\xE9sar Queso de Cabra,unidad,cesar queso cabra,669,,415,,,oficial,https://eu-west-3-146514239214-prod-bk-fz.s3.eu-west-3.amazonaws.com/en-ES/2026/MANTEL+NUTRICIONAL+ESP+ING+08+SEPTIEMBRE+2026.pdf,2026-10-14
Mahou,Cinco Estrellas,tercio botella 330 ml,cerveza mahou tercio;tercio mahou,,49,330,,,oficial,https://www.mahou-sanmiguel.com/tienda/p/mahou-cinco-estrellas.html,2026-10-14
Mahou,Sin,lata 330 ml,cerveza mahou sin;mahou sin alcohol,,25,330,,,oficial,https://www.mahou-sanmiguel.com/tienda/p/mahou-sin.html;https://www.bodegasbelmonte.com/es/nacional/2025-caja-24-mahou-sin-lata-33-cl.html,2026-10-14
Don Sim\xF3n,Zumo 100% exprimido de naranja,brik 200 ml,zumo naranja don simon,,43,200,,,oficial,https://garciacarrion.com/products/zumo-100-exprimido-de-naranja-briks-de-200-ml-000000000000011928,2026-10-14
NEA,Agua mineral con gas,lata 330 ml,agua con gas nea,0,0,330,,,oficial,https://aguanea.com/blogs/diario-de-abordo/el-agua-con-gas-engorda,2026-10-14
Schweppes Espa\xF1a,T\xF3nica Original,botella 200 ml,tonica schweppes,23,11,200,,,oficial,https://www.schweppes.es/tonicas/tonica-original/,2026-10-14
Coca-Cola Espa\xF1a,Coca-Cola sabor original,botella 500 ml,cocacola botella;coca cola botella,,42,500,,,oficial,https://www.coca-cola.com/es/es/brands/coca-cola/coca-cola-sabor-original;https://easyvending.com/wp-content/uploads/2023/03/COCA-COLA-500-ML-24-U-COCA-COLA-40402_1.pdf,2026-10-14
Coca-Cola Espa\xF1a,Coca-Cola Zero Az\xFAcar,botella 500 ml,cocacola zero botella,,0.2,500,,,oficial,https://www.coca-cola.com/es/es/brands/coca-cola/coca-cola-zero;https://www.distribucionsbalague.es/wp-content/uploads/2023/11/Fam-Refrescos.pdf,2026-10-14
Coca-Cola Espa\xF1a,Fanta Naranja,botella 500 ml,fanta naranja botella,,18,500,,,oficial,https://www.coca-cola.com/es/es/brands/fanta;https://www.despensa.es/detalle/-/Producto/refresco-naranja--fanta-naranja-500ml/500027,2026-10-14
Coca-Cola Espa\xF1a,Fanta Lim\xF3n,botella 500 ml,fanta limon botella,,19,500,,,oficial,https://www.coca-cola.com/es/es/brands/fanta;https://www.distribucionsbalague.es/wp-content/uploads/2023/11/Fam-Refrescos.pdf,2026-10-14
Coca-Cola Espa\xF1a,Sprite,botella 500 ml,sprite botella,,19,500,,,oficial,https://www.coca-cola.com/es/es/brands/sprite;https://www.cocacolaep.com/assets/legacy-assets/Spain/Informe-Sostenibilidad/Informe-Sostenibilidad-2023-CCEP.pdf,2026-10-14
Coca-Cola Espa\xF1a,Aquarius Lim\xF3n,botella 500 ml,aquarius limon botella,,18,500,,,oficial,https://www.coca-cola.com/es/es/brands/descubre-aquarius/productos;https://bodegasoviedo.com/products/caja-24-unidades-aquarius-limon-botella-50cl,2026-10-14
Coca-Cola Espa\xF1a,Aquarius Naranja,botella 500 ml,aquarius naranja botella,,19,500,,,oficial,https://www.coca-cola.com/es/es/brands/descubre-aquarius/productos;https://fruteriacantomeu.com/products/aquarius-naranja-500ml,2026-10-14
Ejemplo acotado de bar,Copa de vino tinto Ribeiro Gandarela,copa orientativa 125-150 ml,copa vino gandarela,,65,,125,150,estimacion,https://vinoribeiro.eu/vino-cosechero-tinto-075/;https://info.comandator.com/cuantas-copas-salen-de-una-botella-de-vino/,2026-10-14
Ejemplo acotado de bar,Caf\xE9 con leche entera sin az\xFAcar mitad caf\xE9 mitad leche,taza orientativa 125-200 ml,cafe con leche entera mitad y mitad,,36.5,,125,200,estimacion,https://cafesabora.com/es/el-caf%C3%A9-con-leche-en-cafeter%C3%ADa-espa%C3%B1ola-qu%C3%A9-es-y-c%C3%B3mo-se-hace;https://lechepascual.es/productos/leches-clasicas/leche-entera-botella-sostenible/;https://whatyoueat.io/foods/171891,2026-10-14
Ejemplo acotado de bar,Ca\xF1a de cerveza Mahou Cinco Estrellas,vaso peque\xF1o 200-250 ml; ejemplo Mahou 49 kcal/100 ml,una ca\xF1a;ca\xF1a;ca\xF1a de cerveza;cerveza de barril,,49,,200,250,estimacion,https://www.somosnexho.com/mahou-sanmiguel/productos/mahou-5-estrellas;https://boakandbailey.com/2007/05/how-to-order-a-beer-in-spain/,2026-10-14
Ejemplo acotado de bar,Vino tinto de mesa (referencia USDA),copa 125-150 ml; densidad aproximada 1 g/ml; no vino dulce,copa de vino tinto;vino tinto;una copa de tinto,,85,,125,150,estimacion,https://whatyoueat.io/foods/173190-red-table-wine;https://info.comandator.com/cuantas-copas-salen-de-una-botella-de-vino/,2026-10-14
Ejemplo acotado de bar,Vino blanco de mesa (referencia USDA),copa 125-150 ml; densidad aproximada 1 g/ml; no vino dulce,copa de vino blanco;vino blanco;una copa de blanco,,82,,125,150,estimacion,https://whatyoueat.io/foods/174837-white-table-wine;https://info.comandator.com/cuantas-copas-salen-de-una-botella-de-vino/,2026-10-14
Ejemplo acotado de bar,Caf\xE9 solo espresso sin az\xFAcar,25-30 ml; aproximaci\xF3n 1 g/ml,cafe solo;un cafe solo;espresso,,9,,25,30,estimacion,https://whatyoueat.io/foods/171891;https://koficafe.com/blogs/p/guia-rapida-para-entender-el-cafe-solo/,2026-10-14
Ejemplo acotado de bar,Cortado con leche semidesnatada sin az\xFAcar (75/25),33.3-40 ml; 75% espresso y 25% leche Pascual semi; no az\xFAcar,cortado;un cortado;cafe cortado,,18.25,,33.3,40,estimacion,https://www.cafesabora.com/es/caf%C3%A9-cortado-qu%C3%A9-es-y-c%C3%B3mo-se-prepara;https://lechepascual.es/productos/leches-clasicas/leche-semidesnatada-botella-sostenible/;https://whatyoueat.io/foods/171891;https://cafesabora.com/es/el-caf%C3%A9-con-leche-en-cafeter%C3%ADa-espa%C3%B1ola-qu%C3%A9-es-y-c%C3%B3mo-se-hace,2026-10-14
Ejemplo acotado de bar,Caf\xE9 con leche semidesnatada sin az\xFAcar (50/50),taza 125-200 ml; 50% espresso y 50% leche Pascual semi,cafe con leche semidesnatada;cafe con leche semi,,27.5,,125,200,estimacion,https://lechepascual.es/productos/leches-clasicas/leche-semidesnatada-botella-sostenible/;https://whatyoueat.io/foods/171891;https://cafesabora.com/es/el-caf%C3%A9-con-leche-en-cafeter%C3%ADa-espa%C3%B1ola-qu%C3%A9-es-y-c%C3%B3mo-se-hace,2026-10-14
Ejemplo acotado de bar,Caf\xE9 con leche desnatada sin az\xFAcar (50/50),taza 125-200 ml; 50% espresso y 50% leche Pascual desnatada,cafe con leche desnatada;cafe con leche desnatado,,21.5,,125,200,estimacion,https://lechepascual.es/productos/leches-clasicas/leche-desnatada-botella-sostenible/;https://whatyoueat.io/foods/171891;https://cafesabora.com/es/el-caf%C3%A9-con-leche-en-cafeter%C3%ADa-espa%C3%B1ola-qu%C3%A9-es-y-c%C3%B3mo-se-hace,2026-10-14
Ejemplo acotado de bar,Croissant de mantequilla sin relleno (referencia USDA),peque\xF1o-grande 42-67 g ya horneado; no mini ni relleno,croissant;un croissant;cruasan;croissant de mantequilla,,406,,42,67,estimacion,https://foodstruct.com/food/croissant;https://www.prospre.io/ingredients/butter-croissant-276065,2026-10-14
Ejemplo acotado de bar,Pincho de tortilla con cebolla (ejemplo Tortiburguer),unidad 120 \xB110 g de producto ya cocido; no tortilla casera universal,pincho de tortilla;pincho tortilla;tortilla de patatas;tortiburguer;tortiburger,,148.3,,110,130,estimacion,https://hnosmesones.com/fichas-tecnicas/FT-6755.pdf,2026-10-14
Ejemplo acotado de bar,Refresco de cola Coca-Cola original en vaso sin hielo,vaso mediano 150-250 ml de l\xEDquido; no Zero ni hielo,refresco de cola en vaso;cola en vaso;vaso de cola;vaso de cocacola,,42,,150,250,estimacion,https://www.coca-cola.com/es/es/brands/coca-cola/coca-cola-sabor-original;https://blog.fumisan.es/cuantos-mililitros-tiene-un-vaso-guia-de-capacidad-segun-el-tipo/,2026-10-14
Ejemplo acotado de bar,Tercio de cerveza Mahou Cinco Estrellas,botella 330 ml de peso fijo; ejemplo Mahou 49 kcal/100 ml,tercio;un tercio;tercio de cerveza,,49,330,,,estimacion,https://www.somosnexho.com/mahou-sanmiguel/productos/mahou-5-estrellas,2026-10-14
Ejemplo acotado de bar,Tostada con tomate y aceite (ejemplo receta Dietfarma),pieza fija 105 g: pan60g + tomate40g + aceite5g; 196.6 kcal/100 g calculada de la receta (206.44 kcal),tostada con tomate y aceite;pan con tomate;una tostada con tomate;tostada,,196.6,105,,,estimacion,https://www.dietfarma.com/receta/tostada-con-aceite-y-tomate,2026-10-14
Ejemplo acotado de bar,Bocadillo de jam\xF3n serrano (ejemplo fijo),unidad 200 g: pan120g + jam\xF3n80g; sin aceite ni queso; densidad por ingredientes FEN,bocadillo de jamon;bocata de jamon;bocadillo de jamon serrano;un bocadillo de jamon,,262.6,200,,,estimacion,https://fen.org.es/MercadoAlimentosFEN/pdfs/panblanco.pdf;https://fen.org.es/MercadoAlimentosFEN/pdfs/jamonserrano.pdf,2026-10-14
KFC Espa\xF1a,3 tiras de pechuga original,3 unidades,tiras de pechuga;tiras de pollo;tiritas de pollo,250.8,209,,,,oficial,https://static.kfc.es/pdf/contenido-nutricional.pdf,2026-10-16
KFC Espa\xF1a,5 tiras de pechuga original,5 unidades,5 tiras;tiras 5,418,209,,,,oficial,https://static.kfc.es/pdf/contenido-nutricional.pdf,2026-10-16
KFC Espa\xF1a,Pieza de pollo original,1 unidad,pieza de pollo;muslo de pollo frito;pollo kfc,233.77,241,,,,oficial,https://static.kfc.es/pdf/contenido-nutricional.pdf,2026-10-16
KFC Espa\xF1a,2 piezas de pollo original,2 unidades,2 piezas de pollo;dos piezas de pollo,467.54,241,,,,oficial,https://static.kfc.es/pdf/contenido-nutricional.pdf,2026-10-16
KFC Espa\xF1a,3 alitas picantes,3 unidades,alitas;alitas picantes;alitas de pollo,267.96,319,,,,oficial,https://static.kfc.es/pdf/contenido-nutricional.pdf,2026-10-16
KFC Espa\xF1a,Coronel Simple,unidad,coronel;hamburguesa coronel;burguer coronel,534.13,214.25,,,,oficial,https://static.kfc.es/pdf/contenido-nutricional.pdf,2026-10-16
KFC Espa\xF1a,BBQ Cheese Burger,unidad,bbq cheese burger;hamburguesa bbq,522.25,261.65,,,,oficial,https://static.kfc.es/pdf/contenido-nutricional.pdf,2026-10-16
KFC Espa\xF1a,Wrap Cl\xE1sico,unidad,wrap clasico;wrap de pollo;wrap kfc,748.05,242.64,,,,oficial,https://static.kfc.es/pdf/contenido-nutricional.pdf,2026-10-16
KFC Espa\xF1a,Patatas fritas,medianas,patatas medianas;patatas fritas medianas,264.96,288,,,,oficial,https://static.kfc.es/pdf/contenido-nutricional.pdf,2026-10-16
KFC Espa\xF1a,Patatas fritas,grandes,patatas grandes;patatas fritas grandes,278.13,219,,,,oficial,https://static.kfc.es/pdf/contenido-nutricional.pdf,2026-10-16
KFC Espa\xF1a,Popcorn de pollo,10 unidades,popcorn;popcorn pollo;palomitas de pollo,245.7,351,,,,oficial,https://static.kfc.es/pdf/contenido-nutricional.pdf,2026-10-16
KFC Espa\xF1a,Ensalada Original,unidad,ensalada;ensalada kfc,530.33,220.05,,,,oficial,https://static.kfc.es/pdf/contenido-nutricional.pdf,2026-10-16
KFC Espa\xF1a,Kentucky Shake Oreo con nata,unidad,shake oreo;batido oreo;kentucky shake,439.7,157.04,,,,oficial,https://static.kfc.es/pdf/contenido-nutricional.pdf,2026-10-16
KFC Espa\xF1a,Chick&Share 9 tiras de pechuga original,9 unidades para compartir,chick&share;cubo tiras;cubo de tiras,752.4,209,,,,oficial,https://static.kfc.es/pdf/contenido-nutricional.pdf,2026-10-16
KFC Espa\xF1a,Mazorca de ma\xEDz,unidad,mazorca;maiz;mazorca de maiz,83.82,106.1,,,,oficial,https://static.kfc.es/pdf/contenido-nutricional.pdf,2026-10-16
Burger King Espa\xF1a,Triple Whopper,unidad,triple whopper,1143,,467,,,oficial,https://eu-west-3-146514239214-prod-bk-fz.s3.eu-west-3.amazonaws.com/en-ES/2026/MANTEL+NUTRICIONAL+ESP+ING+08+SEPTIEMBRE+2026.pdf,2026-10-16
Burger King Espa\xF1a,Steakhouse,unidad,steakhouse,825,,296,,,oficial,https://eu-west-3-146514239214-prod-bk-fz.s3.eu-west-3.amazonaws.com/en-ES/2026/MANTEL+NUTRICIONAL+ESP+ING+08+SEPTIEMBRE+2026.pdf,2026-10-16
Burger King Espa\xF1a,Big King XXL,unidad,big king xxl,980,,379,,,oficial,https://eu-west-3-146514239214-prod-bk-fz.s3.eu-west-3.amazonaws.com/en-ES/2026/MANTEL+NUTRICIONAL+ESP+ING+08+SEPTIEMBRE+2026.pdf,2026-10-16
Burger King Espa\xF1a,Doble Cheeseburger,unidad,doble cheeseburger;hamburguesa doble con queso,387,,152,,,oficial,https://eu-west-3-146514239214-prod-bk-fz.s3.eu-west-3.amazonaws.com/en-ES/2026/MANTEL+NUTRICIONAL+ESP+ING+08+SEPTIEMBRE+2026.pdf,2026-10-16
Burger King Espa\xF1a,Chicken Burger,unidad,chicken burger;hamburguesa de pollo,443,,144,,,oficial,https://eu-west-3-146514239214-prod-bk-fz.s3.eu-west-3.amazonaws.com/en-ES/2026/MANTEL+NUTRICIONAL+ESP+ING+08+SEPTIEMBRE+2026.pdf,2026-10-16
Burger King Espa\xF1a,Big Fish,unidad,big fish;hamburguesa de pescado,617,,228,,,oficial,https://eu-west-3-146514239214-prod-bk-fz.s3.eu-west-3.amazonaws.com/en-ES/2026/MANTEL+NUTRICIONAL+ESP+ING+08+SEPTIEMBRE+2026.pdf,2026-10-16
Burger King Espa\xF1a,Long Vegetal,unidad,long vegetal;hamburguesa vegetal,612,,212,,,oficial,https://eu-west-3-146514239214-prod-bk-fz.s3.eu-west-3.amazonaws.com/en-ES/2026/MANTEL+NUTRICIONAL+ESP+ING+08+SEPTIEMBRE+2026.pdf,2026-10-16
Burger King Espa\xF1a,Alitas de pollo,3 unidades,alitas de pollo;alitas 3,238,,117,,,oficial,https://eu-west-3-146514239214-prod-bk-fz.s3.eu-west-3.amazonaws.com/en-ES/2026/MANTEL+NUTRICIONAL+ESP+ING+08+SEPTIEMBRE+2026.pdf,2026-10-16
Burger King Espa\xF1a,King Nuggets,9 unidades,nuggets 9;nuggets,407,,162,,,oficial,https://eu-west-3-146514239214-prod-bk-fz.s3.eu-west-3.amazonaws.com/en-ES/2026/MANTEL+NUTRICIONAL+ESP+ING+08+SEPTIEMBRE+2026.pdf,2026-10-16
Burger King Espa\xF1a,Chicken Fries,6 unidades,chicken fries;palitos de pollo,175,,72,,,oficial,https://eu-west-3-146514239214-prod-bk-fz.s3.eu-west-3.amazonaws.com/en-ES/2026/MANTEL+NUTRICIONAL+ESP+ING+08+SEPTIEMBRE+2026.pdf,2026-10-16
Burger King Espa\xF1a,King Aros de Cebolla,7 unidades,aros de cebolla;aros cebolla,199,,82,,,oficial,https://eu-west-3-146514239214-prod-bk-fz.s3.eu-west-3.amazonaws.com/en-ES/2026/MANTEL+NUTRICIONAL+ESP+ING+08+SEPTIEMBRE+2026.pdf,2026-10-16
Burger King Espa\xF1a,Patatas Supreme,medianas,patatas supreme;patatas supreme medianas,323,,159,,,oficial,https://eu-west-3-146514239214-prod-bk-fz.s3.eu-west-3.amazonaws.com/en-ES/2026/MANTEL+NUTRICIONAL+ESP+ING+08+SEPTIEMBRE+2026.pdf,2026-10-16
Burger King Espa\xF1a,Chilli Cheese Bites,6 unidades,chilli cheese bites;bocados de queso picantes,303,,105,,,oficial,https://eu-west-3-146514239214-prod-bk-fz.s3.eu-west-3.amazonaws.com/en-ES/2026/MANTEL+NUTRICIONAL+ESP+ING+08+SEPTIEMBRE+2026.pdf,2026-10-16
Starbucks Espa\xF1a,Croissant horneado,unidad,croissant;croissant starbucks,289.4,,,,,oficial,https://www.starbucks.es/sites/starbucks-es-pwa/files/2026-05/informacion-nutricional-summer26-es.pdf,2026-10-16
Starbucks Espa\xF1a,Croissant horneado mixto,unidad,croissant mixto;croissant jamon y queso,405.6,,,,,oficial,https://www.starbucks.es/sites/starbucks-es-pwa/files/2026-05/informacion-nutricional-summer26-es.pdf,2026-10-16
Starbucks Espa\xF1a,Muffin de ar\xE1ndanos,unidad,muffin arandanos;muffin;magdalena arandanos,456.3,,,,,oficial,https://www.starbucks.es/sites/starbucks-es-pwa/files/2026-05/informacion-nutricional-summer26-es.pdf,2026-10-16
Starbucks Espa\xF1a,Muffin de chocolate,unidad,muffin chocolate;muffin de chocolate,557.2,,,,,oficial,https://www.starbucks.es/sites/starbucks-es-pwa/files/2026-05/informacion-nutricional-summer26-es.pdf,2026-10-16
Starbucks Espa\xF1a,Cookie Chocolate Chunk,unidad,cookie;galleta con chocolate;cookie chocolate,415.65,,,,,oficial,https://www.starbucks.es/sites/starbucks-es-pwa/files/2026-05/informacion-nutricional-summer26-es.pdf,2026-10-16
Starbucks Espa\xF1a,Brownie Ube,unidad,brownie,372,,,,,oficial,https://www.starbucks.es/sites/starbucks-es-pwa/files/2026-05/informacion-nutricional-summer26-es.pdf,2026-10-16
Starbucks Espa\xF1a,Bocadillo de jam\xF3n y manchego con tomate rallado,unidad,bocadillo jamon y manchego;bocadillo jamon manchego,450.75,,,,,oficial,https://www.starbucks.es/sites/starbucks-es-pwa/files/2026-05/informacion-nutricional-summer26-es.pdf,2026-10-16
Starbucks Espa\xF1a,Bocadillo Pulled Pork,unidad,bocadillo pulled pork;pulled pork,496,,,,,oficial,https://www.starbucks.es/sites/starbucks-es-pwa/files/2026-05/informacion-nutricional-summer26-es.pdf,2026-10-16
Starbucks Espa\xF1a,Tostada con jam\xF3n tomate y aceite,unidad,tostada con jamon;tostada jamon tomate y aceite,438.22,,,,,oficial,https://www.starbucks.es/sites/starbucks-es-pwa/files/2026-05/informacion-nutricional-summer26-es.pdf,2026-10-16
Starbucks Espa\xF1a,Asian Bowl,unidad,asian bowl;bowl,365.65,,,,,oficial,https://www.starbucks.es/sites/starbucks-es-pwa/files/2026-05/informacion-nutricional-summer26-es.pdf,2026-10-16
Starbucks Espa\xF1a,Gourmet Cheesecake,porci\xF3n,cheesecake;tarta de queso,254.7,,,,,oficial,https://www.starbucks.es/sites/starbucks-es-pwa/files/2026-05/informacion-nutricional-summer26-es.pdf,2026-10-16
Starbucks Espa\xF1a,Cake de chocolate,porci\xF3n,cake de chocolate;bizcocho de chocolate,639,,,,,oficial,https://www.starbucks.es/sites/starbucks-es-pwa/files/2026-05/informacion-nutricional-summer26-es.pdf,2026-10-16
Starbucks Espa\xF1a,Caffe Latte con leche semidesnatada,vaso Tall ~354 ml; kcal/100 ml oficial,caffe latte;latte; cafe latte,,44,354,,,estimacion,https://www.starbucks.es/sites/starbucks-es-pwa/files/2025-06/Info%20Nutri%20web%20bebidas%20Spring%202024%20V1%20-ESP.pdf,2026-10-16
Starbucks Espa\xF1a,Cappuccino con leche semidesnatada,vaso Tall ~354 ml; kcal/100 ml oficial,cappuccino;capuchino,,43,354,,,estimacion,https://www.starbucks.es/sites/starbucks-es-pwa/files/2025-06/Info%20Nutri%20web%20bebidas%20Spring%202024%20V1%20-ESP.pdf,2026-10-16
Starbucks Espa\xF1a,Caramel Macchiato con leche semidesnatada,vaso Tall ~354 ml; kcal/100 ml oficial,caramel macchiato;macchiato caramelo,,57,354,,,estimacion,https://www.starbucks.es/sites/starbucks-es-pwa/files/2025-06/Info%20Nutri%20web%20bebidas%20Spring%202024%20V1%20-ESP.pdf,2026-10-16
Starbucks Espa\xF1a,Mocha con leche semidesnatada,vaso Tall ~354 ml; kcal/100 ml oficial,mocha;moca,,83,354,,,estimacion,https://www.starbucks.es/sites/starbucks-es-pwa/files/2025-06/Info%20Nutri%20web%20bebidas%20Spring%202024%20V1%20-ESP.pdf,2026-10-16
Starbucks Espa\xF1a,White Mocha con leche semidesnatada,vaso Tall ~354 ml; kcal/100 ml oficial,white mocha;mocha blanco,,101,354,,,estimacion,https://www.starbucks.es/sites/starbucks-es-pwa/files/2025-06/Info%20Nutri%20web%20bebidas%20Spring%202024%20V1%20-ESP.pdf,2026-10-16
Starbucks Espa\xF1a,Classic Hot Chocolate con leche semidesnatada,vaso Tall ~354 ml; kcal/100 ml oficial,chocolate caliente;hot chocolate,,90,354,,,estimacion,https://www.starbucks.es/sites/starbucks-es-pwa/files/2025-06/Info%20Nutri%20web%20bebidas%20Spring%202024%20V1%20-ESP.pdf,2026-10-16
Starbucks Espa\xF1a,Cold Brew,vaso Tall ~354 ml; kcal/100 ml oficial,cold brew;cafe frio,,10,354,,,estimacion,https://www.starbucks.es/sites/starbucks-es-pwa/files/2025-06/Info%20Nutri%20web%20bebidas%20Spring%202024%20V1%20-ESP.pdf,2026-10-16
Starbucks Espa\xF1a,Latte Macchiato con leche semidesnatada,vaso Tall ~354 ml; kcal/100 ml oficial,latte macchiato;macchiato,,44,354,,,estimacion,https://www.starbucks.es/sites/starbucks-es-pwa/files/2025-06/Info%20Nutri%20web%20bebidas%20Spring%202024%20V1%20-ESP.pdf,2026-10-16
Papa John's Espa\xF1a,Pizza Pepperoni Estelar,mediana; kcal/100 g oficial; peso estimado,pizza pepperoni estelar;pepperoni estelar,,192.84,,350,410,estimacion,https://cdn.new.papajohns.es/Alergenos+Espa%C3%B1a/Inf_NutricionalEspa%C3%B1a+Ed+27.pdf,2026-10-16
Papa John's Espa\xF1a,Pizza Vaquera BBQ,mediana; kcal/100 g oficial; peso estimado,pizza vaquera;vaquera bbq,,158,,350,410,estimacion,https://cdn.new.papajohns.es/Alergenos+Espa%C3%B1a/Inf_NutricionalEspa%C3%B1a+Ed+27.pdf,2026-10-16
Papa John's Espa\xF1a,Pizza Rodeo Peppers,mediana; kcal/100 g oficial; peso estimado,pizza rodeo peppers;rodeo peppers,,161.54,,350,410,estimacion,https://cdn.new.papajohns.es/Alergenos+Espa%C3%B1a/Inf_NutricionalEspa%C3%B1a+Ed+27.pdf,2026-10-16
Papa John's Espa\xF1a,Pizza Margarita,mediana; kcal/100 g oficial; peso estimado,pizza margarita;margarita,,228.37,,350,410,estimacion,https://cdn.new.papajohns.es/Alergenos+Espa%C3%B1a/Inf_NutricionalEspa%C3%B1a+Ed+27.pdf,2026-10-16
Papa John's Espa\xF1a,Pizza BBQ Bacon,mediana; kcal/100 g oficial; peso estimado,pizza bbq bacon;bbq bacon,,224.24,,350,410,estimacion,https://cdn.new.papajohns.es/Alergenos+Espa%C3%B1a/Inf_NutricionalEspa%C3%B1a+Ed+27.pdf,2026-10-16
Papa John's Espa\xF1a,Pizza Pollo y bacon,mediana; kcal/100 g oficial; peso estimado,pizza pollo y bacon;pollo y bacon,,207.45,,350,410,estimacion,https://cdn.new.papajohns.es/Alergenos+Espa%C3%B1a/Inf_NutricionalEspa%C3%B1a+Ed+27.pdf,2026-10-16
Papa John's Espa\xF1a,Alitas de pollo,porci\xF3n; kcal/100 g oficial; peso estimado,alitas de pollo;alitas,,210,,180,220,estimacion,https://cdn.new.papajohns.es/Alergenos+Espa%C3%B1a/Inf_NutricionalEspa%C3%B1a+Ed+27.pdf,2026-10-16
Papa John's Espa\xF1a,Aros de cebolla,porci\xF3n; kcal/100 g oficial; peso estimado,aros de cebolla,,243,,120,180,estimacion,https://cdn.new.papajohns.es/Alergenos+Espa%C3%B1a/Inf_NutricionalEspa%C3%B1a+Ed+27.pdf,2026-10-16
Papa John's Espa\xF1a,Muslitos de pollo picantes,porci\xF3n; kcal/100 g oficial; peso estimado,muslitos de pollo;muslitos picantes,,225,,180,220,estimacion,https://cdn.new.papajohns.es/Alergenos+Espa%C3%B1a/Inf_NutricionalEspa%C3%B1a+Ed+27.pdf,2026-10-16
Papa John's Espa\xF1a,Papa Rolls Pepperoni,porci\xF3n; kcal/100 g oficial; peso estimado,papa rolls pepperoni;papa rolls,,274.96,,130,170,estimacion,https://cdn.new.papajohns.es/Alergenos+Espa%C3%B1a/Inf_NutricionalEspa%C3%B1a+Ed+27.pdf,2026-10-16
Papa John's Espa\xF1a,Papa Rolls Crispy Bacon,porci\xF3n; kcal/100 g oficial; peso estimado,papa rolls crispy bacon,,243.43,,130,170,estimacion,https://cdn.new.papajohns.es/Alergenos+Espa%C3%B1a/Inf_NutricionalEspa%C3%B1a+Ed+27.pdf,2026-10-16
Papa John's Espa\xF1a,ChocoCookie,unidad; kcal/100 g oficial; peso estimado,chococookie;galleta chocolate,,451,,80,100,estimacion,https://cdn.new.papajohns.es/Alergenos+Espa%C3%B1a/Inf_NutricionalEspa%C3%B1a+Ed+27.pdf,2026-10-16
Telepizza,Barbacoa,familiar masa cl\xE1sica; kcal/100 g oficial; peso estimado,barbacoa familiar;pizza barbacoa familiar,,213,,750,1000,estimacion,https://www.telepizza.es/on/demandware.static/-/Sites-TelepizzaES-Library/default/dw50cfa1dc/documents/nutricion.pdf,2026-10-16
Telepizza,Carbonara (cebolla),familiar masa cl\xE1sica; kcal/100 g oficial; peso estimado,carbonara familiar;pizza carbonara familiar,,211,,750,1000,estimacion,https://www.telepizza.es/on/demandware.static/-/Sites-TelepizzaES-Library/default/dw50cfa1dc/documents/nutricion.pdf,2026-10-16
Telepizza,4 quesos,familiar masa cl\xE1sica; kcal/100 g oficial; peso estimado,4 quesos familiar;pizza 4 quesos familiar,,224,,750,1000,estimacion,https://www.telepizza.es/on/demandware.static/-/Sites-TelepizzaES-Library/default/dw50cfa1dc/documents/nutricion.pdf,2026-10-16
Telepizza,Hawaiana,familiar masa cl\xE1sica; kcal/100 g oficial; peso estimado,hawaiana familiar;pizza hawaiana familiar,,197,,750,1000,estimacion,https://www.telepizza.es/on/demandware.static/-/Sites-TelepizzaES-Library/default/dw50cfa1dc/documents/nutricion.pdf,2026-10-16
Telepizza,Pepe Pepperoni,familiar masa cl\xE1sica; kcal/100 g oficial; peso estimado,pepe pepperoni familiar;pepperoni familiar,,258,,750,1000,estimacion,https://www.telepizza.es/on/demandware.static/-/Sites-TelepizzaES-Library/default/dw50cfa1dc/documents/nutricion.pdf,2026-10-16
Telepizza,Burger,familiar masa cl\xE1sica; kcal/100 g oficial; peso estimado,burger familiar;pizza burger familiar,,243,,750,1000,estimacion,https://www.telepizza.es/on/demandware.static/-/Sites-TelepizzaES-Library/default/dw50cfa1dc/documents/nutricion.pdf,2026-10-16
Telepizza,Formaggio,familiar masa cl\xE1sica; kcal/100 g oficial; peso estimado,formaggio familiar;pizza formaggio familiar,,241,,750,1000,estimacion,https://www.telepizza.es/on/demandware.static/-/Sites-TelepizzaES-Library/default/dw50cfa1dc/documents/nutricion.pdf,2026-10-16
Telepizza,La Furiosa,familiar masa cl\xE1sica; kcal/100 g oficial; peso estimado,la furiosa familiar;furiosa familiar,,226,,750,1000,estimacion,https://www.telepizza.es/on/demandware.static/-/Sites-TelepizzaES-Library/default/dw50cfa1dc/documents/nutricion.pdf,2026-10-16
McDonald's Espa\xF1a,McPollo,unidad,mcpollo;hamburguesa de pollo mcdonalds,427,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/mcdonalds/mcpollo/1-porci%C3%B3n,2026-10-16
McDonald's Espa\xF1a,Big Mac,unidad,big mac,544,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/mcdonalds/big-mac/1-porci%C3%B3n,2026-10-16
McDonald's Espa\xF1a,Cuarto de Libra con Queso,unidad,cuarto de libra;cuarto de libra con queso,547,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/mcdonalds/cuarto-de-libra/1-porci%C3%B3n,2026-10-16
McDonald's Espa\xF1a,Cheeseburger,unidad,cheeseburger;hamburguesa con queso mcdonalds,306,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/mcdonalds/cheeseburger/1-porci%C3%B3n,2026-10-16
McDonald's Espa\xF1a,Hamburguesa sencilla,unidad,hamburguesa mcdonalds;hamburguesa sencilla,258,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/mcdonalds/hamburguesa/1-porci%C3%B3n,2026-10-16
McDonald's Espa\xF1a,Double Cheeseburger,unidad,double cheeseburger;doble cheeseburger mcdonalds,457,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/mcdonalds/double-cheeseburger/1-porci%C3%B3n,2026-10-16
McDonald's Espa\xF1a,CBO,unidad,cbo;cbo mcdonalds,618,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/mcdonalds/cbo/1-porci%C3%B3n,2026-10-16
McDonald's Espa\xF1a,McExtreme Bacon,unidad,mcextreme;mcextreme bacon,787,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/mcdonalds/mcextreme-bacon/1-porci%C3%B3n,2026-10-16
McDonald's Espa\xF1a,Patatas fritas,medianas,patatas medianas mcdonalds;patatas fritas medianas mcdonalds,330,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/mcdonalds/patatas-fritas-medianas/1-porci%C3%B3n,2026-10-16
McDonald's Espa\xF1a,Patatas fritas,grandes,patatas grandes mcdonalds;patatas fritas grandes mcdonalds,434,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/mcdonalds/patatas-fritas-grandes/1-porci%C3%B3n,2026-10-16
McDonald's Espa\xF1a,Patatas Deluxe,medianas,patatas deluxe;patatas deluxe medianas,220,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/mcdonalds/patatas-deluxe-medianas/1-porci%C3%B3n,2026-10-16
McDonald's Espa\xF1a,6 Chicken McNuggets,6 unidades,mcnuggets;nuggets mcdonalds,265,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/mcdonalds/6-mcnuggets-de-pollo/1-porci%C3%B3n,2026-10-16
McDonald's Espa\xF1a,McFlurry Oreo,unidad,mcflurry;mcflurry oreo,410,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/mcdonalds/mcflurry-oreo/1-porci%C3%B3n,2026-10-16
McDonald's Espa\xF1a,Cono de helado,unidad,cono de helado;helado de cucurucho mcdonalds,157,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/mcdonalds/cono-de-helado/1-porci%C3%B3n,2026-10-16
Pans & Company,Bocadillo de pechuga de pollo,unidad,bocadillo pechuga de pollo;bocadillo de pollo pans,596,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/pans-company/bocadillo-pechuga-de-pollo/1-bocadillo,2026-10-16
Pans & Company,Bocadillo de tortilla de patata,unidad,bocadillo de tortilla;bocadillo tortilla de patata,670,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/pans-company/bocadillo-de-tortilla-de-patata/1-bocadillo,2026-10-16
Pans & Company,Bocadillo vegetal de at\xFAn,unidad,bocadillo vegetal de atun;bocadillo atun vegetal,567,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/pans-company/bocadillo-vegetal-de-at%C3%BAn/1-bocadillo,2026-10-16
Pans & Company,Bocadillo de jam\xF3n serrano,unidad,bocadillo jamon serrano pans,480,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/pans-company/bocadillo-jamon-serrano/1-bocadillo,2026-10-16
Pans & Company,Bocadillo British Bacon,unidad,british bacon;bocadillo british bacon,619,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/pans-company/bocadillo-british-bacon/1-bocadillo,2026-10-16
Pans & Company,Bocadillo Pollo Supreme,unidad,pollo supreme;bocadillo pollo supreme,754,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/pans-company/bocadillo-pollo-supreme/1-bocadillo,2026-10-16
Pans & Company,Bocadillo Noruego,unidad,bocadillo noruego;noruego,424,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/pans-company/bocadillo-noruego/1-bocadillo,2026-10-16
Pans & Company,Bocadillo Mediterranneo,unidad,bocadillo mediterraneo;mediterranneo,423,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/pans-company/bocadillo-mediterranneo/1-bocadillo,2026-10-16
Pans & Company,Bocadillo Griego,unidad,bocadillo griego;griego,501,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/pans-company/bocadillo-griego/1-bocadillo,2026-10-16
Pans & Company,Patatas fritas,raci\xF3n,patatas fritas pans,194,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/pans-company/patatas-fritas/1-raci%C3%B3n,2026-10-16
Pans & Company,Ensalada Mediterr\xE1nea,plato,ensalada mediterranea pans,206,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/pans-company/ensalada-mediterr%C3%A1nea/1-plato,2026-10-16
Pans & Company,Bocadillo Extreme\xF1o,unidad,bocadillo extremeno;extremeno,658,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/pans-company/bocadillo-extreme%C3%B1o/1-bocadillo,2026-10-16
Ejemplo acotado de bar,Tortilla de patatas,raci\xF3n 125-200 g; kcal/100 g FatSecret gen\xE9rico,tortilla de patatas;tortilla espanola;pincho de tortilla,,126,,125,200,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/tortilla-de-patatas,2026-10-16
Ejemplo acotado de bar,Patatas bravas,1 taza ~200 g (FatSecret gen\xE9rico),patatas bravas;bravas,258,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/patatas-bravas,2026-10-16
Ejemplo acotado de bar,Ensaladilla rusa,raci\xF3n 150-200 g; kcal/100 g FatSecret gen\xE9rico,ensaladilla rusa;ensaladilla,,122,,150,200,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/ensaladilla-rusa,2026-10-16
Ejemplo acotado de bar,Gazpacho casero,1 porci\xF3n ~250 ml (FatSecret gen\xE9rico),gazpacho,143,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/gazpacho-casero,2026-10-16
Ejemplo acotado de bar,Salmorejo,cuenco 200-250 g; kcal/100 g FatSecret gen\xE9rico,salmorejo,,70,,200,250,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/salmorejo,2026-10-16
Ejemplo acotado de bar,Paella,raci\xF3n 300-400 g; kcal/100 g FatSecret gen\xE9rico,paella,,158,,300,400,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/paella,2026-10-16
Ejemplo acotado de bar,Guiso de lentejas,1 plato (FatSecret gen\xE9rico),lentejas;guiso de lentejas;lentejas estofadas,380,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/guiso-de-lentejas,2026-10-16
Ejemplo acotado de bar,Cocido completo,1 porci\xF3n (FatSecret gen\xE9rico),cocido;cocido completo;cocido madrileno,509,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/cocido-completo,2026-10-16
Ejemplo acotado de bar,Fabada,plato 250-350 g; kcal/100 g FatSecret gen\xE9rico,fabada;fabada asturiana,,162,,250,350,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/fabada,2026-10-16
Ejemplo acotado de bar,Pollo asado,1/4 de pollo 200-300 g; kcal/100 g FatSecret gen\xE9rico,pollo asado;cuarto de pollo asado,,237,,200,300,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/pollo-asado,2026-10-16
Ejemplo acotado de bar,Merluza,filete 150-200 g; kcal/100 g FatSecret gen\xE9rico,merluza;filete de merluza,,132,,150,200,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/merluza,2026-10-16
Ejemplo acotado de bar,Dorada,unidad 250-350 g; kcal/100 g FatSecret gen\xE9rico,dorada;dorada a la plancha,,85,,250,350,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/dorada,2026-10-16
Ejemplo acotado de bar,Ensalada mixta,1 taza ~150 g (FatSecret gen\xE9rico),ensalada mixta;ensalada,135,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/ensalada-mixta,2026-10-16
Ejemplo acotado de bar,Pechuga de pollo empanada,filete 150-200 g; kcal/100 g FatSecret gen\xE9rico,pechuga empanada;filete empanado;pollo empanado,,297,,150,200,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/pechuga-de-pollo-empanada,2026-10-16
Ejemplo acotado de bar,Flan de huevo,1 unidad (FatSecret gen\xE9rico),flan;flan de huevo,204,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/flan-de-huevo,2026-10-16
Ejemplo acotado de bar,Arroz con leche,cuenco 150-200 g; kcal/100 g FatSecret gen\xE9rico,arroz con leche,,142,,150,200,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/arroz-con-leche,2026-10-16
Ejemplo acotado de bar,Tarta de queso,1 porci\xF3n (FatSecret gen\xE9rico),tarta de queso;porcion de tarta de queso,397,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/tarta-de-queso,2026-10-16
Ejemplo acotado de bar,Gambas al ajillo,raci\xF3n 100-150 g; kcal/100 g FatSecret gen\xE9rico,gambas al ajillo;gambas al ajillo racion,,304,,100,150,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/gambas-al-ajillo,2026-10-16
Ejemplo acotado de bar,Pulpo (a la gallega),raci\xF3n 150-200 g; kcal/100 g FatSecret gen\xE9rico,pulpo;pulpo a la gallega;pulpo a feira,,82,,150,200,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/pulpo,2026-10-16
Ejemplo acotado de bar,Pimientos de Padr\xF3n,raci\xF3n 100-150 g; kcal/100 g FatSecret gen\xE9rico,pimientos de padron;pimientos del padron,,21,,100,150,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/pimientos-de-padr%C3%B3n,2026-10-16
Ejemplo acotado de bar,Huevo frito,1 unidad grande (FatSecret gen\xE9rico),huevo frito;un huevo frito,89,,,,,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/huevo-frito,2026-10-16
Ejemplo acotado de bar,Callos,plato 250-350 g; kcal/100 g FatSecret gen\xE9rico,callos;callos a la madrilena,,89,,250,350,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/callos,2026-10-16
Ejemplo acotado de bar,Migas,raci\xF3n 150-250 g; kcal/100 g FatSecret gen\xE9rico,migas;migas de pastor,,403,,150,250,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/migas,2026-10-16
Ejemplo acotado de bar,Rabo de toro,plato 250-350 g; kcal/100 g FatSecret gen\xE9rico,rabo de toro;rabo de buey,,133,,250,350,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/rabo-de-toro,2026-10-16
Ejemplo acotado de bar,Pisto,raci\xF3n 150-200 g; kcal/100 g FatSecret gen\xE9rico,pisto;pisto manchego,,72,,150,200,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/pisto,2026-10-16
Ejemplo acotado de bar,Calamares fritos,raci\xF3n 150-200 g; kcal/100 g FatSecret gen\xE9rico,calamares fritos;calamares a la romana;calamares,,125,,150,200,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/calamares-fritos,2026-10-17
Ejemplo acotado de bar,Croquetas de jam\xF3n,raci\xF3n 150-200 g (4-6 unidades); kcal/100 g FatSecret gen\xE9rico,croqueta de jamon;croquetas;croquetas de jamon,,241,,150,200,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/croquetas-de-jam%C3%B3n,2026-10-17
Ejemplo acotado de bar,Alb\xF3ndigas de carne,raci\xF3n 180-250 g con salsa; kcal/100 g FatSecret gen\xE9rico,albondiga;albondigas;albondigas de carne,,202,,180,250,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/alb%C3%B3ndigas-de-carne,2026-10-17
Ejemplo acotado de bar,Churros,raci\xF3n 100-150 g (4-6 unidades); kcal/100 g FatSecret gen\xE9rico,churro;churros;churros con chocolate,,443,,100,150,estimacion,https://www.fatsecret.es/calor%C3%ADas-nutrici%C3%B3n/gen%C3%A9rico/churros,2026-10-17
`;

  // src/motor/sobras.ts
  function normalizarSobras(sobras) {
    const m = /* @__PURE__ */ new Map();
    for (const s of sobras) {
      if (!s || typeof s.ingrediente !== "string" || !s.ingrediente) continue;
      const g = Number(s.gramos);
      if (!Number.isFinite(g) || g <= 0) continue;
      m.set(s.ingrediente, (m.get(s.ingrediente) ?? 0) + g);
    }
    return Array.from(m, ([ingrediente, gramos]) => ({ ingrediente, gramos: Math.round(gramos * 100) / 100 }));
  }
  function descontarSobras(lista, sobras) {
    const por = new Map(normalizarSobras(sobras).map((s) => [s.ingrediente, s.gramos]));
    const nombres = new Set(lista.map((i) => i.ingrediente));
    const cubiertos = [];
    const resultado = [];
    for (const item of lista) {
      const tengo = por.get(item.ingrediente);
      if (!tengo) {
        resultado.push(item);
        continue;
      }
      const falta = Math.round((item.gramosTotales - tengo) * 100) / 100;
      if (falta <= 0) {
        cubiertos.push(item.ingrediente);
        continue;
      }
      resultado.push({ ...itemDesdeGramos(item.ingrediente, falta), sobra: tengo });
    }
    const sinUso = Array.from(por).filter(([n]) => !nombres.has(n)).map(([ingrediente, gramos]) => ({ ingrediente, gramos }));
    return { lista: resultado, cubiertos, sinUso };
  }

  // src/motor/ics.ts
  var ZONAS_ICS = [
    { id: "Europe/Madrid", nombre: "Pen\xEDnsula y Baleares (Europe/Madrid)" },
    { id: "Atlantic/Canary", nombre: "Canarias (Atlantic/Canary)" },
    { id: "flotante", nombre: "Hora local del dispositivo (sin zona fija)" }
  ];
  var DOMINIO_UID = "app-dietas.local";
  function slug(t2) {
    return t2.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "x";
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
      for (const c2 of op.comidas) {
        if (!c2.hora) {
          omitidos.push(`${c2.nombreFranja} del ${c2.dia} sin hora indicada: no se exporta.`);
          continue;
        }
        const fecha = fechaDelDia(op.inicio, c2.dia);
        eventos.push({
          uid: `comida-${fecha}-${slug(c2.franja)}@${DOMINIO_UID}`,
          categoria: "comidas",
          titulo: c2.nombreFranja,
          fecha,
          hora: c2.hora,
          ...op.conDetalle && c2.detalle ? { detalle: c2.detalle } : {}
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
    if (quiere.has("comidas") && op.finDieta && op.finDieta >= op.inicio) {
      eventos.push({ uid: `fin-dieta-${op.finDieta}@${DOMINIO_UID}`, categoria: "comidas", titulo: "Termina tu dieta: prepara la siguiente compra", fecha: op.finDieta });
    }
    eventos.sort((a2, b) => a2.fecha.localeCompare(b.fecha) || (a2.hora ?? "").localeCompare(b.hora ?? "") || a2.uid.localeCompare(b.uid));
    return { eventos, omitidos };
  }
  function escaparTextoIcs(t2) {
    return t2.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "").replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\r\n|\r|\n/g, "\\n");
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
    const t2 = new Date(Date.UTC(y, m - 1, d + 1));
    return `${t2.getUTCFullYear()}-${String(t2.getUTCMonth() + 1).padStart(2, "0")}-${String(t2.getUTCDate()).padStart(2, "0")}`;
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
  var NOMBRE_FORMULA = { mifflin: "la f\xF3rmula general", ten_haaf: "la f\xF3rmula para deportistas", cunningham: "la f\xF3rmula con tu masa libre de grasa" };
  function explicarEcuacion(plan, perfil) {
    const { ecuacion, kcal, valores } = plan.basal;
    const m = plan.detalle.basalMotivo;
    const entradas = `${perfil.sexo === "hombre" ? "hombre" : "mujer"}, ${perfil.edad} a\xF1os, ${f(perfil.peso, 1)} kg, ${f(perfil.altura, 1)} cm`;
    const N = NOMBRE_FORMULA;
    if (ecuacion === "mifflin") {
      const noCumple = [];
      if (m.sesionesNoSuaves < 3) noCumple.push(`necesita al menos 3 sesiones de entreno que no sean suaves (tienes ${m.sesionesNoSuaves})`);
      if (m.imc >= 30) noCumple.push(`IMC menor de 30 (el tuyo es ${f(m.imc, 1)})`);
      if (m.edad >= 50) noCumple.push(`menos de 50 a\xF1os (tienes ${m.edad})`);
      return {
        resumen: `Lo que gastas en reposo (sin moverte), calculado con ${N.mifflin} a partir de tu edad, sexo, peso y talla: ${f(kcal)} kcal al d\xEDa.`,
        detalle: [
          `Datos usados: ${entradas}.`,
          noCumple.length ? `Se usa ${N.mifflin} porque no se cumple lo que pide ${N.ten_haaf}: ${noCumple.join("; ")}.` : `Se usa ${N.mifflin}.`,
          ...valores.ten_haaf !== void 0 ? [`Para comparar, ${N.ten_haaf} habr\xEDa dado ${f(valores.ten_haaf)} kcal (no aplicable a tu perfil).`] : []
        ]
      };
    }
    if (ecuacion === "cunningham") {
      const mlg = perfil.grasa !== void 0 ? perfil.peso * (1 - perfil.grasa / 100) : void 0;
      return {
        resumen: `Lo que gastas en reposo, calculado con tu masa libre de grasa${mlg !== void 0 ? ` (${f(mlg, 1)} kg)` : ""}: ${f(kcal)} kcal al d\xEDa.`,
        detalle: [
          `Datos usados: ${entradas}${perfil.grasa !== void 0 ? `, ${f(perfil.grasa, 1)} % graso indicado` : ""}.`,
          `Cumples lo de deportista (al menos 3 sesiones que no son suaves, IMC menor de 30 y menos de 50 a\xF1os) y, como conoces tu % graso, se comparan ${N.ten_haaf} (${f(valores.ten_haaf ?? 0)} kcal) y ${N.cunningham} (${f(kcal)} kcal): se toma la m\xE1s prudente, la m\xE1s baja.`,
          `Para comparar, ${N.mifflin} habr\xEDa dado ${f(valores.mifflin ?? 0)} kcal.`
        ]
      };
    }
    return {
      resumen: `Lo que gastas en reposo, calculado con ${N.ten_haaf} (validada en gente que entrena): ${f(kcal)} kcal al d\xEDa.`,
      detalle: [
        `Datos usados: ${entradas}.`,
        `Se usa porque cumples lo de deportista: al menos 3 sesiones que no son suaves (tienes ${m.sesionesNoSuaves}), IMC menor de 30 (${f(m.imc, 1)}) y menos de 50 a\xF1os (${m.edad}).`,
        m.conGrasaMedida ? `Como conoces tu % graso se compar\xF3 con ${N.cunningham} (${f(valores.cunningham ?? 0)} kcal) y ${N.ten_haaf} sali\xF3 igual o m\xE1s baja, as\xED que se queda esta.` : `Sin % graso medido no se puede usar ${N.cunningham}.`,
        `Para comparar, ${N.mifflin} habr\xEDa dado ${f(valores.mifflin ?? 0)} kcal.`
      ]
    };
  }
  function lineasAjuste(plan, objetivoElegido) {
    const a2 = plan.detalle.ajuste;
    const obj = NOMBRE_OBJETIVO[a2.objetivo] ?? a2.objetivo;
    if (a2.objetivo === "mantener" && /rendimiento/i.test(objetivoElegido ?? "")) return ["Objetivo \xABmejorar el rendimiento\xBB: para rendir comes lo que gastas; no se a\xF1ade ni se quita nada al gasto."];
    if (a2.objetivo === "mantener") return [`Objetivo \xAB${obj}\xBB: no se a\xF1ade ni se quita nada al gasto.`];
    if (a2.objetivo === "perder_grasa") {
      const l = [
        `Objetivo \xAB${obj}\xBB: d\xE9ficit de ${f(-a2.kcal)} kcal al d\xEDa. Sale del ritmo de ${f(a2.ritmoPct ?? 0, 2)} % del peso por semana: ritmo \xD7 peso \xD7 kcal por kg de peso perdido (${f(a2.densidadKcalKg ?? 0)} kcal/kg con ${f(a2.grasaPct ?? 0, 1)} % graso) \xF7 7 d\xEDas = ${f(a2.deficitRitmo ?? 0)} kcal/d\xEDa.`
      ];
      if (a2.topeAplicado) l.push(`Ese d\xE9ficit pasaba del tope de seguridad (${f((a2.topeFraccion ?? 0) * 100)} % del gasto medio${a2.topeKcal ? `, y como entrena, nunca m\xE1s de ${f(a2.topeKcal)} kcal` : ""}), as\xED que se limit\xF3 a ${f(-a2.kcal)} kcal.`);
      else l.push(`Est\xE1 por debajo del tope de seguridad (${f((a2.topeFraccion ?? 0) * 100)} % del gasto medio${a2.topeKcal ? `, y como entrena, nunca m\xE1s de ${f(a2.topeKcal)} kcal` : ""}).`);
      return l;
    }
    if (a2.objetivo === "recomposicion") return [`Objetivo \xAB${obj}\xBB: d\xE9ficit suave del ${f(a2.porcentaje ?? 0)} % del gasto medio = ${f(-a2.kcal)} kcal al d\xEDa.`];
    return [`Objetivo \xAB${obj}\xBB: super\xE1vit del ${f(a2.porcentaje ?? 0, 1)} % del gasto medio = ${f(a2.kcal)} kcal al d\xEDa.`];
  }
  function explicarKcalMedia(plan, opts = {}) {
    const d = plan.detalle;
    const diferencia = plan.kcalMedia - plan.gastoMedio;
    const sentido = diferencia < -0.5 ? "menos" : diferencia > 0.5 ? "m\xE1s" : "lo mismo";
    return {
      resumen: `Es la media de las kcal que se prescriben los 7 d\xEDas (${f(plan.kcalMedia)}): ${sentido === "lo mismo" ? "lo mismo que" : `${f(Math.abs(diferencia))} kcal ${sentido} que`} tu gasto medio estimado (${f(plan.gastoMedio)}).`,
      detalle: [
        `Diferencia entre las kcal prescritas y tu gasto medio: ${f(diferencia)} kcal/d\xEDa. Sale del ajuste de tu objetivo (${f(d.ajuste.kcal)} kcal/d\xEDa al calcular) m\xE1s el efecto de los l\xEDmites por d\xEDa y del redondeo.`,
        `Gasto de un d\xEDa sin entreno = gasto en reposo (${f(plan.basal.kcal)}) \xD7 actividad diaria ${f(d.pal, 2)} (${d.vidaSupuesta ? "no indicada: se supone sedentaria" : NOMBRE_VIDA[d.vida] ?? d.vida}) = ${f(d.gastoBase)} kcal.`,
        `Cada entreno suma solo el ${f((1 - d.compensacionEntreno) * 100)} % de lo que gasta, porque el cuerpo compensa el resto durante el d\xEDa.`,
        ...lineasAjuste(plan, opts.objetivoElegido),
        `Despu\xE9s se aplican dos l\xEDmites por d\xEDa: ${d.oscilacion.modo === "compresion" ? `las diferencias entre d\xEDas se comprimen hasta ${f(d.oscilacion.maxKcal ?? 0)} kcal` : d.oscilacion.modo === "tope" ? `ning\xFAn d\xEDa se aleja m\xE1s de ${f(d.oscilacion.maxKcal ?? 0)} kcal de la media (tope de seguridad)` : "sin entrenos no hay diferencias entre d\xEDas que limitar"}, y el suelo de seguridad de ${f(d.suelo)} kcal.`,
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
      detalle.push(d.oscilacion.modo === "compresion" ? `Se aplic\xF3 el l\xEDmite de oscilaci\xF3n: las diferencias entre d\xEDas se comprimen para que no pasen de ${f(d.oscilacion.maxKcal ?? 0)} kcal. El c\xE1lculo daba ${f(dia.kcalSinLimites)} y se prescriben ${f(dia.kcal)}.` : `Se aplic\xF3 el tope de seguridad: ning\xFAn d\xEDa se aleja m\xE1s de ${f(d.oscilacion.maxKcal ?? 0)} kcal de la media de la semana. El c\xE1lculo daba ${f(dia.kcalSinLimites)} y se prescriben ${f(dia.kcal)}.`);
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
      descanso: "D\xEDa de descanso: no hay entreno de carga ni de fuerza ese d\xEDa (caminar r\xE1pido o similar no cuenta como carga)."
    };
    return {
      resumen: base[dia.tipo] ?? `D\xEDa ${dia.tipo}.`,
      detalle: [
        `El tipo de d\xEDa decide el rango recomendado de hidrato: ${rango}.`,
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
      // #260 (punto 30): en palabras («su parte del hidrato del día»), sin «peso de la franja × factor».
      `Hidrato (${f(franja.hidrato)} g): de los ${f(contexto.hidratoDia)} g del d\xEDa, a esta comida le toca su parte${d.factor !== 1 ? `, con un extra (\xD7${f(d.factor, 1)}) por el entreno` : ""}: ${f(franja.hidrato)} g.`,
      franja.rol !== "normal" ? TEXTO_ROL[franja.rol] : sinCarga ? `Sin extra de hidrato: ${contexto.tipoDia === "fuerza" ? "la fuerza sola no cuenta como entreno de carga" : "es un d\xEDa de descanso"}, as\xED que ninguna comida lleva un extra por el entreno.` : "Sin extra de hidrato: esta comida no cae justo antes ni justo despu\xE9s de un entreno de carga.",
      `Grasa (${f(franja.grasa, 1)} g): la parte de la grasa del d\xEDa que le toca a esta comida.`,
      ...d.grasaTopeAplicado ? ["La grasa se limit\xF3 a 15 g porque es una toma de menos de 2 h antes de un entreno de carga (comodidad digestiva); el exceso pas\xF3 a otras comidas."] : [],
      ...d.grasaExcesoRecibido > 0 ? [`Recibe ${f(d.grasaExcesoRecibido, 1)} g de grasa que otra toma no pudo llevar por el tope pre-entreno.`] : [],
      // #260.30: la nota «Parámetros provisionales… pendientes de revisión de Pablo» es para Pablo, no para la persona.
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
        `Objetivo de la comida ${f(datos.kcalObjetivo)} kcal \xF7 kcal de la receta base ${f(datos.kcalReceta)} \u2248 ${f(ideal * 100)} %.`,
        dentro ? `Est\xE1 dentro de 80-120 %, as\xED que se usa tal cual: ${f(datos.kcalResultante)} kcal.` : ideal > 1.2 ? datos.kcalResultante >= datos.kcalObjetivo * 0.97 ? `Pasa de 120 %, pero el plato sigue dentro de las cantidades normales, as\xED que se sube hasta ${f(datos.racion * 100)} % y la receta aporta ${f(datos.kcalResultante)} kcal: llega al objetivo.` : `Queda fuera de 80-120 % y no se puede subir m\xE1s: se queda en ${f(datos.racion * 100)} % (pasar de ah\xED har\xEDa que un ingrediente pasara de su raci\xF3n normal) y la receta aporta ${f(datos.kcalResultante)} kcal: por debajo del objetivo (no llega a ${f(datos.kcalObjetivo)}). Faltan ${f(datos.kcalObjetivo - datos.kcalResultante)} kcal. No cabe en una raci\xF3n normal y no se infla nada: puedes repartir lo que falta en otra toma del d\xEDa, cerrar con un postre (fruta o yogur) o cambiar el plato.` : `Queda fuera de 80-120 %, as\xED que se limita a ${f(datos.racion * 100)} % y la receta aporta ${f(datos.kcalResultante)} kcal: por encima del objetivo (supera los ${f(datos.kcalObjetivo)} aunque es la raci\xF3n m\xEDnima).`,
        datos.protegidos && datos.protegidos.length ? `Algunos ingredientes van en cantidad fija (no crecen con la raci\xF3n: lo que no es base, prote\xEDna ni aceite, como fruta, verdura, l\xE1cteos o condimentos); aqu\xED ${datos.protegidos.join(", ")} mantiene${datos.protegidos.length > 1 ? "n" : ""} sus gramos. Como no hay composici\xF3n nutricional fiable de la receta de ejemplo, ${f(datos.kcalResultante)} kcal es una cifra aproximada: no se asegura que la raci\xF3n alcance exactamente las kcal ni los macros del objetivo.` : "Al cambiar la raci\xF3n solo crecen la base, la prote\xEDna y el aceite; lo dem\xE1s va en cantidad fija. Las kcal son aproximadas.",
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
        "El coste usa precios aproximados de supermercado por kg, litro o unidad, consultados en su tienda online: es una aproximaci\xF3n, no una oferta; lo que no tiene precio queda fuera del total" + (ctx.sinPrecio ? ` (ahora ${ctx.sinPrecio} ingredientes).` : "."),
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
    if (fibraExcede(slot, r)) return { receta: r, motivo: motivoFibra(slot) };
    if (o.alergiasPreferencias) {
      const c2 = evaluarCompatibilidad(r, o.alergiasPreferencias);
      if (!c2.compatible) return { receta: r, motivo: `no encaja con tus alergias/preferencias (${c2.motivo?.detalle ?? "sin detalle"})` };
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
    const vistos = /* @__PURE__ */ new Set();
    const unicas = alternativas.filter((a2) => {
      const k = a2.receta.nombre.trim().toLowerCase();
      if (vistos.has(k)) return false;
      vistos.add(k);
      return true;
    });
    return { alternativas: unicas, descartadas };
  }
  function aplicarSustituciones(resultado, slots, recetas, sustituciones, opciones = {}) {
    let asignaciones = resultado.asignaciones.map((a2) => ({ ...a2 }));
    let huecos = resultado.huecos.map((h) => ({ ...h }));
    const avisos = [...resultado.avisos];
    const invalidadas = [];
    for (const [clave2, recetaId] of Object.entries(sustituciones)) {
      const slot = slots.find((s) => claveSlot(s.dia, s.franja) === clave2);
      const receta = recetaDeId(new Map(recetas.map((r) => [r.id, r])), recetaId);
      if (!slot) {
        invalidadas.push({ clave: clave2, recetaId, motivo: "esa comida ya no existe en tu plan" });
        continue;
      }
      if (!receta) {
        invalidadas.push({ clave: clave2, recetaId, motivo: "la receta ya no est\xE1 en el cat\xE1logo" });
        continue;
      }
      const usos = usosVariedadSemana(asignaciones, clave2);
      const e = evaluar(slot, receta, { ...opciones, usosSemana: usos });
      if ("motivo" in e) {
        invalidadas.push({ clave: clave2, recetaId, motivo: e.motivo });
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
      asignaciones = asignaciones.filter((a2) => claveSlot(a2.dia, a2.franja) !== clave2);
      huecos = huecos.filter((h) => claveSlot(h.dia, h.franja) !== clave2);
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
    const t2 = valor.replace(/\s+/g, " ").trim().slice(0, LIMITE_NOTA);
    return t2 ? t2 : void 0;
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
  var MS_DIA3 = 864e5;
  var PRIORIDAD = { descarga: 0, previa: 1, recuperacion: 2, carga: 3, vispera: 4, competicion: 5 };
  var ACTIVIDAD_POR_TIPO = {
    carrera_10k: [["correr", 1]],
    media_maraton: [["correr", 1]],
    maraton: [["correr", 1]],
    trail_ultra: [["correr_suave", 1]],
    triatlon_sprint: [["natacion", 0.15], ["bici", 0.5], ["correr", 0.35]],
    triatlon_olimpico: [["natacion", 0.15], ["bici", 0.5], ["correr", 0.35]],
    triatlon_medio: [["natacion", 0.1], ["bici", 0.55], ["correr", 0.35]],
    triatlon_largo: [["natacion", 0.1], ["bici", 0.55], ["correr", 0.35]],
    marcha_ciclista: [["bici", 1]],
    hyrox: [["hyrox", 1]],
    crossfit: [["crossfit", 1]],
    equipo: [["futbol_partido", 1]]
  };
  function gastoDePrueba(tipo, minutos, peso) {
    const partes = ACTIVIDAD_POR_TIPO[tipo ?? "otra"];
    if (!partes || !(minutos > 0)) return void 0;
    return partes.reduce((s, [act, fr]) => s + kcalSesionNeta(act, minutos * fr, peso), 0);
  }
  var TIPO_POR_MINUTOS = (min) => min >= 180 ? { tipo: "carga_alta", rango: [6, 10] } : min >= 60 ? { tipo: "duro", rango: [5, 7] } : { tipo: "suave", rango: [3, 5] };
  var ORDEN_TIPO = { descanso: 0, suave: 1, fuerza: 2, duro: 3, carga_alta: 4 };
  function minutosDelDia(c2, fecha) {
    if (c2.pruebas?.length) return c2.pruebas.filter((p) => (p.fecha ?? c2.fecha) === fecha).reduce((s, p) => s + p.duracionMin, 0);
    return DURACION_PROPUESTA_MIN[c2.tipo ?? "otra"];
  }
  var FIBRA_VISPERA_PRINCIPAL_G = 5;
  var FIBRA_VISPERA_TOMA_G = 2;
  var FIBRA_ANTES_PRUEBA_G = 3;
  function limiteFibraG(fase, franja, horaH, finUltimaPruebaH2) {
    if (fase === "vispera") return franja === "comida" || franja === "cena" ? FIBRA_VISPERA_PRINCIPAL_G : FIBRA_VISPERA_TOMA_G;
    if (fase === "competicion" && (finUltimaPruebaH2 === void 0 || horaH === void 0 || horaH < finUltimaPruebaH2)) return FIBRA_ANTES_PRUEBA_G;
    return void 0;
  }
  function finUltimaPruebaH(competiciones, fecha) {
    let fin;
    for (const c2 of competiciones) {
      if (c2.tipo === "categoria_peso") continue;
      const pruebas = c2.pruebas?.length ? c2.pruebas.filter((p) => (p.fecha ?? c2.fecha) === fecha) : fecha >= c2.fecha && fecha <= (c2.fechaFin ?? c2.fecha) && c2.hora ? [{ hora: c2.hora, duracionMin: DURACION_PROPUESTA_MIN[c2.tipo ?? "otra"] }] : [];
      for (const p of pruebas) {
        const h = Number(p.hora.slice(0, 2)) + Number(p.hora.slice(3, 5)) / 60 + p.duracionMin / 60;
        fin = fin === void 0 ? h : Math.max(fin, h);
      }
    }
    return fin;
  }
  var aUTC3 = (f2) => Date.UTC(Number(f2.slice(0, 4)), Number(f2.slice(5, 7)) - 1, Number(f2.slice(8, 10)));
  var diasEntre = (a2, b) => Math.round((aUTC3(b) - aUTC3(a2)) / MS_DIA3);
  var NOMBRE_DIA_SEMANA = ["domingo", "lunes", "martes", "mi\xE9rcoles", "jueves", "viernes", "s\xE1bado"];
  function perfilDeEsfuerzo(c2) {
    if (!c2.pruebas?.length) return { duracionMax: DURACION_PROPUESTA_MIN[c2.tipo ?? "otra"], variasMismoDia: false };
    const porDia = /* @__PURE__ */ new Map();
    for (const p of c2.pruebas) {
      const f2 = p.fecha ?? c2.fecha;
      porDia.set(f2, (porDia.get(f2) ?? 0) + 1);
    }
    return { duracionMax: Math.max(...c2.pruebas.map((p) => p.duracionMin)), variasMismoDia: [...porDia.values()].some((n) => n >= 2) };
  }
  function cargaDeHidratos(c2) {
    if (c2.tipo === "categoria_peso") return void 0;
    const { duracionMax, variasMismoDia } = perfilDeEsfuerzo(c2);
    if (duracionMax > UMBRAL_CARGA_COMPLETA_MIN) return { diasPrevios: [2, 1], gKg: 10 };
    if (duracionMax >= 45 || variasMismoDia) return { diasPrevios: [1], gKg: 7 };
    return void 0;
  }
  function aplicarCompeticion(base, perfil, competiciones, inicio, hoy) {
    const avisos = [];
    const dias = [];
    const nuevosDias = [];
    let avisoDescargaDado = false;
    const mlgEstimada = perfil.grasa === void 0;
    const grasaParaMlg = perfil.grasa ?? base.detalle.ajuste.grasaPct;
    const mlg = grasaParaMlg !== void 0 ? perfil.peso * (1 - grasaParaMlg / 100) : void 0;
    for (const d of base.dias) {
      const fecha = fechaDelDia(inicio, d.dia);
      let fase;
      let nombre;
      let pausa = false;
      let minGKg = 0;
      let sinFibra = false;
      let fibraIntestino = false;
      let minPrueba = 0;
      let kcalPrueba = 0;
      const nombresAct = /* @__PURE__ */ new Set();
      const motivos = [];
      for (const c2 of competiciones) {
        if (c2.tipo === "categoria_peso") continue;
        const fin = c2.fechaFin ?? c2.fecha;
        const offset = fecha < c2.fecha ? -diasEntre(fecha, c2.fecha) : fecha > fin ? diasEntre(fin, fecha) : 0;
        if (offset < -6 || offset > 1) continue;
        const carga = cargaDeHidratos(c2);
        let f2;
        if (offset === 0) {
          f2 = "competicion";
          const min = minutosDelDia(c2, fecha);
          const kcal2 = gastoDePrueba(c2.tipo, min, perfil.peso);
          if (kcal2 !== void 0) {
            minPrueba += min;
            kcalPrueba += kcal2;
            for (const [act] of ACTIVIDAD_POR_TIPO[c2.tipo ?? "otra"]) nombresAct.add(ACTIVIDADES[act].nombre);
          }
        } else if (offset === 1) f2 = "recuperacion";
        else if (offset === -1) f2 = "vispera";
        else if (offset === -2 && carga?.diasPrevios.includes(2)) f2 = "carga";
        else if (offset === -2) f2 = "previa";
        else f2 = "descarga";
        if (fase === void 0 || PRIORIDAD[f2] > PRIORIDAD[fase]) {
          fase = f2;
          nombre = c2.nombre;
        }
        if (c2.problemasIntestinales === "si" && fin === c2.fecha && (offset === -2 || offset === -1)) {
          sinFibra = true;
          fibraIntestino = true;
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
      let gastoDia = d.gasto;
      let kcalDia = d.kcal;
      let tipoDia2 = d.tipo;
      let rangoDia = d.hidratoRecomendadoGKg;
      let kcalEntrenoDia = d.kcalEntreno;
      let minutosCargaDia = d.minutosCarga;
      let gastoPrueba;
      if (fase === "competicion" && kcalPrueba > 0) {
        gastoDia = d.gasto + (kcalPrueba - d.kcalEntreno) * (1 - COMPENSACION_ENTRENO);
        kcalDia = d.kcal + (gastoDia - d.gasto);
        kcalEntrenoDia = kcalPrueba;
        minutosCargaDia = minPrueba;
        const t2 = TIPO_POR_MINUTOS(minPrueba);
        if (ORDEN_TIPO[t2.tipo] >= ORDEN_TIPO[d.tipo]) {
          tipoDia2 = t2.tipo;
          rangoDia = t2.rango;
        }
        gastoPrueba = { kcal: Math.round(kcalPrueba), minutos: minPrueba, actividad: [...nombresAct].join(" + ") };
        motivos.push(`gasto estimado de la prueba: ~${gastoPrueba.kcal} kcal (tu peso, ${minPrueba} min de ${gastoPrueba.actividad}); sustituye al entreno habitual de este d\xEDa`);
      }
      let kcal = kcalDia;
      if (pausa && gastoDia - kcal >= 20) {
        kcal = gastoDia;
        motivos.push(`d\xE9ficit en pausa: comes lo que gastas (${Math.round(gastoDia)} kcal)`);
      }
      const base4 = 4 * d.proteinaG + 9 * d.grasaG;
      let hidrato = d.hidratoG;
      if (Math.abs(kcal - d.kcal) < 1) kcal = d.kcal;
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
      if (sinFibra && fibraIntestino && fase !== "vispera") motivos.push("has tenido problemas intestinales compitiendo: poca fibra desde 2 d\xEDas antes (sin legumbre, integrales ni verdura cruda)");
      else if (sinFibra) motivos.push("v\xEDspera con poca fibra: sin legumbre, integrales ni verdura cruda");
      if (fase === "descarga" && !avisoDescargaDado) {
        motivos.push(AVISO_DESCARGA);
        avisoDescargaDado = true;
      }
      if (fase === "competicion") motivos.push("d\xEDa de competici\xF3n");
      if (fase === "recuperacion") motivos.push("d\xEDa de recuperaci\xF3n; despu\xE9s vuelve el plan normal");
      const kcalFinal = Math.round(kcal);
      const hidratoFinal = kcalFinal === d.kcal && hidrato === d.hidratoG ? d.hidratoG : redondear(hidrato);
      const cambia = kcalFinal !== d.kcal || hidratoFinal !== d.hidratoG || gastoPrueba !== void 0;
      nuevosDias.push(cambia ? {
        ...d,
        fase,
        kcal: kcalFinal,
        hidratoG: hidratoFinal,
        hidratoGKg: redondear(hidrato / perfil.peso, 1),
        ...gastoPrueba ? { tipo: tipoDia2, gasto: Math.round(gastoDia), kcalEntreno: Math.round(kcalEntrenoDia), minutosCarga: minutosCargaDia, hidratoRecomendadoGKg: rangoDia } : {},
        ...mlg ? { disponibilidad: redondear((kcalFinal - kcalEntrenoDia) / mlg, 1), ...mlgEstimada ? { disponibilidadEstimada: true } : {} } : {}
      } : { ...d, fase });
      dias.push({
        dia: d.dia,
        fase,
        competicion: nombre,
        deficitEnPausa: pausa && kcalFinal !== d.kcal,
        ...minGKg ? { hidratoMinGKg: minGKg } : {},
        sinFibraAlta: sinFibra,
        ...gastoPrueba ? { gastoPrueba } : {},
        kcalAntes: d.kcal,
        kcalDespues: kcalFinal,
        hidratoAntes: d.hidratoG,
        hidratoDespues: hidratoFinal,
        motivos
      });
    }
    const futuras = competiciones.filter((c2) => hoy !== void 0 && c2.tipo !== "categoria_peso" && diasEntre(hoy, c2.fechaFin ?? c2.fecha) >= 0 && diasEntre(hoy, c2.fecha) <= 7).sort((a2, b) => a2.fecha.localeCompare(b.fecha));
    if (hoy !== void 0 && futuras.length) {
      const c2 = futuras[0];
      const faltan = Math.max(0, diasEntre(hoy, c2.fecha));
      const diaSemana = NOMBRE_DIA_SEMANA[new Date(aUTC3(c2.fecha)).getUTCDay()];
      avisos.push(faltan === 0 ? `Compites hoy: ${c2.nombre}.` : `Compites el ${diaSemana}: faltan ${faltan} ${faltan === 1 ? "d\xEDa" : "d\xEDas"} (${c2.nombre}).`);
    }
    const pesoCerca = competiciones.some((c2) => c2.tipo === "categoria_peso" && DIAS.some((dia) => {
      const f2 = fechaDelDia(inicio, dia);
      return f2 >= c2.fecha && f2 <= (c2.fechaFin ?? c2.fecha);
    }));
    if (pesoCerca) avisos.push(MENSAJE_CATEGORIA_PESO);
    const activa = dias.some((x) => x.fase !== void 0);
    if (!activa) return { activa: false, plan: base, base, dias, avisos, notas: [] };
    const kcalMedia = redondear(nuevosDias.reduce((s, x) => s + x.kcal, 0) / nuevosDias.length);
    const avisosGrasa = nuevosDias.filter((x) => x.kcal > 0 && x.grasaG * 9 / x.kcal < 0.2).map((x) => {
      const cd = dias.find((y) => y.dia === x.dia);
      const pct = Math.round(x.grasaG * 9 / x.kcal * 1e3) / 10;
      return { codigo: "grasa_baja", texto: `${x.dia}: grasa por debajo del 20 % de las kcal (${String(pct).replace(".", ",")} %)${cd?.hidratoMinGKg ? `: en carga o competici\xF3n mandan los hidratos (m\xEDnimo ${cd.hidratoMinGKg} g/kg), as\xED que no se sube la grasa` : ""} (ACSM 2016).` };
    });
    const avisosDisponibilidad = nuevosDias.filter((x) => x.fase === "competicion" && x.disponibilidad !== void 0 && x.disponibilidad < 30).map((x) => ({
      codigo: x.disponibilidadEstimada ? "disponibilidad_baja_competicion_estimada" : "disponibilidad_baja_competicion",
      texto: `${x.dia}: d\xEDa de competici\xF3n con una disponibilidad energ\xE9tica ${x.disponibilidadEstimada ? "ESTIMADA " : ""}de ${x.disponibilidad} kcal/kg de masa libre de grasa (<30)${x.disponibilidadEstimada ? ", calculada con un % graso estimado, no medido: es orientativa" : ""}. Con lo que gasta la prueba, las kcal del d\xEDa se quedan cortas: com\xE9ntalo con Pablo y planifica la comida y la recuperaci\xF3n (IOC 2023).`
    }));
    const plan = { ...base, dias: nuevosDias, kcalMedia, avisos: [...base.avisos.filter((a2) => a2.codigo !== "grasa_baja"), ...avisosGrasa, ...avisosDisponibilidad], notas: [...base.notas, `Semana con competici\xF3n: ${NOTA_PAUTA_ORIENTATIVA}`] };
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
  var esTriatlon = (c2) => !!c2.tipo && c2.tipo.startsWith("triatlon");
  function tasaDuranteGH(duracionMin) {
    if (duracionMin < 45) return { obligatorio: false };
    if (duracionMin < 75) return { tasa: [15, 30], obligatorio: false, nota: "poca cantidad, opcional" };
    if (duracionMin <= 150) return { tasa: [30, 60], obligatorio: true };
    return { tasa: [60, 90], obligatorio: true, nota: "solo si lo has entrenado" };
  }
  function combustibleDe(c2, n, p, peso, calor) {
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
    if (c2.usaGeles === "si") {
      const medio = (tasa[0] + tasa[1]) / 2;
      const cada = Math.max(10, Math.round(GRAMOS_GEL / medio * 60));
      const minutos = [];
      for (let m = 20; m < p.duracionMin - 10; m += cada) minutos.push(m);
      base.geles = { n: [redondear3(total[0] / GRAMOS_GEL), redondear3(total[1] / GRAMOS_GEL)], gramosPorGel: GRAMOS_GEL, minutos };
    } else if (c2.usaGeles === "no") {
      base.alternativas = [
        `bebida isot\xF3nica (\u2248 6 g de hidratos por 100 ml): ${redondear3(total[0] / 0.06)}\u2013${redondear3(total[1] / 0.06)} ml en total`,
        `fruta (un pl\xE1tano mediano \u2248 25 g de hidratos): ${redondear3(total[0] / 25)}\u2013${redondear3(total[1] / 25)} unidades`,
        `gominolas (\u2248 75 g de hidratos por 100 g): ${redondear3(total[0] / 0.75)}\u2013${redondear3(total[1] / 0.75)} g`
      ];
    }
    if (esTriatlon(c2)) base.nota = `${base.nota ? `${base.nota}; ` : ""}en triatl\xF3n se come y se bebe sobre todo en la bici; nada en el agua`;
    return base;
  }
  function planDiaCompeticion(c2, fecha, peso, opciones = {}) {
    const delDia = (c2.pruebas ?? []).filter((p) => (p.fecha ?? c2.fecha) === fecha);
    if (!delDia.length || c2.tipo === "categoria_peso") return void 0;
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
    const combustible = pruebas.map((p, i) => combustibleDe(c2, i + 1, p, peso, !!opciones.calor));
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
      // #155 B: hidratos 1,0–1,2 g/kg/h (Burke 2011, Tabla II, en docs/1-evidencia-competicion-14-tipos-v3.md); si hay que recuperar rápido
      // (compites mañana), durante las 4 primeras horas. Proteína 0,25 g/kg, la misma cifra que ya usa la app entre pruebas. El líquido
      // (1,25-1,5 L por kg perdido, ACSM 2016 p. 556) solo se da con pesaje: ver liquidoRecuperacion.
      hidratoG: opciones.compiteAlDiaSiguiente ? [redondear3(peso * 4 * 1), redondear3(peso * 4 * 1.2)] : [redondear3(peso * 1), redondear3(peso * 1.2)],
      proteinaG: [redondear3(peso * 0.25), redondear3(peso * 0.25)],
      detalle: (opciones.compiteAlDiaSiguiente ? "Compites ma\xF1ana: hidratos en las 4 primeras horas (1,0\u20131,2 g/kg cada hora, repartidos en comidas y tomas) y la primera comida principal como recuperaci\xF3n." : "La primera comida principal es la de recuperaci\xF3n: con hidratos y prote\xEDna de verdad (cantidades a la derecha).") + " Bebe con la comida y despu\xE9s. Si te pesas antes y despu\xE9s de la prueba, abajo te decimos cu\xE1nto l\xEDquido (poco a poco y con sodio); sin pesaje no se da cifra."
    });
    linea.sort((a2, b) => a2.minuto - b.minuto);
    return { fecha, nombre: c2.nombre, pruebas, linea, combustible, avisos, nota: NOTA_PAUTA };
  }
  var FRACCION_LIGERA_MADRUGADA = 0.3;
  function reorganizarDia(habitual, salida, fin) {
    const orden = [...habitual].sort((a2, b) => a2.minuto - b.minuto);
    const salidas = [];
    const cambios = [];
    const avisos = [];
    const movidasDespues = [];
    const procesadas = /* @__PURE__ */ new Set();
    const mover = (t2, motivo) => {
      salidas.push({ ...t2, motivo });
      if (t2.habitual === void 0 || t2.minuto !== t2.habitual) cambios.push({ franja: t2.franja, de: t2.habitual, a: t2.minuto, motivo });
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
      const previa = orden.reduce((mejor, t2) => Math.abs(t2.minuto - objetivo) < Math.abs(mejor.minuto - objetivo) ? t2 : mejor, orden[0]);
      procesadas.add(previa);
      const valida = previa.minuto >= salida - 240 && previa.minuto <= salida - 120;
      const minuto = valida ? previa.minuto : objetivo;
      mover({ franja: previa.franja, habitual: previa.minuto, minuto, rol: "previa", fraccion: 1 }, valida ? "ya cae 2-4 h antes de la salida: no se mueve" : "comida previa 3 h antes de la salida");
      minutoPrevia = minuto;
      if (!previa.principal) avisos.push(`La comida previa es \xAB${previa.franja}\xBB reforzada: t\xF3mala como comida previa (hidratos de siempre, poca grasa y fibra).`);
    }
    const intermedias = orden.filter((t2) => !procesadas.has(t2) && minutoPrevia !== void 0 && t2.minuto > minutoPrevia && t2.minuto < salida);
    const ligeraRegla4 = intermedias.length ? intermedias[intermedias.length - 1] : void 0;
    for (const t2 of orden) {
      if (procesadas.has(t2)) continue;
      procesadas.add(t2);
      if (t2 === ligeraRegla4) {
        mover({ franja: t2.franja, habitual: t2.minuto, minuto: salida - 75, rol: "ligera", fraccion: 1 }, "entre la comida previa y la salida: pasa a toma ligera 75 min antes");
      } else if (intermedias.includes(t2) || t2.minuto >= salida && t2.minuto < fin) {
        movidasDespues.push(t2);
      } else {
        tratarResto(t2, 1);
      }
    }
    function tratarResto(t2, fraccion) {
      if (t2.minuto >= salida && t2.minuto < fin) {
        movidasDespues.push(t2);
        t2._f = fraccion;
        return;
      }
      if (t2.minuto >= fin && t2.minuto < fin + 30) {
        mover({ franja: t2.franja, habitual: t2.minuto, minuto: fin + 30, rol: "recuperacion", fraccion }, "coincid\xEDa con el final de la prueba: se retrasa 30 min");
        return;
      }
      salidas.push({ franja: t2.franja, habitual: t2.minuto, minuto: t2.minuto, rol: "normal", fraccion });
    }
    const yaRecuperacion = salidas.some((s) => s.rol === "recuperacion");
    if (!yaRecuperacion) {
      const siguiente = orden.find((t2) => t2.principal && t2.minuto >= fin && !movidasDespues.includes(t2) && !salidas.some((s) => s.franja === t2.franja && s.rol !== "normal"));
      if (siguiente && siguiente.minuto - fin <= 120) {
        const s = salidas.find((x) => x.franja === siguiente.franja);
        if (s) s.rol = "recuperacion", s.motivo = "es la siguiente comida principal y queda a 120 min o menos del final: hace de recuperaci\xF3n";
      } else if (movidasDespues.length) {
        const t2 = movidasDespues.shift();
        mover({ franja: t2.franja, habitual: t2.minuto, minuto: fin + 30, rol: "recuperacion", fraccion: t2._f ?? 1 }, "toma de recuperaci\xF3n 30 min despu\xE9s de acabar, con la toma que se movi\xF3");
      } else {
        salidas.push({ franja: "recuperaci\xF3n", minuto: fin + 30, rol: "opcional", fraccion: 0, motivo: "la siguiente comida principal queda lejos: toma de recuperaci\xF3n opcional 30 min despu\xE9s de acabar" });
        avisos.push("La siguiente comida principal queda a m\xE1s de 2 h del final: toma de recuperaci\xF3n opcional.");
      }
    }
    for (const t2 of movidasDespues) {
      mover({ franja: t2.franja, habitual: t2.minuto, minuto: fin + 60, rol: "despues", fraccion: t2._f ?? 1 }, "ca\xEDa dentro de la prueba: pasa a despu\xE9s");
    }
    salidas.sort((a2, b) => a2.minuto - b.minuto);
    return { tomas: salidas, cambios, avisos };
  }
  var LIQUIDO_RECUPERACION_L_POR_KG = [1.25, 1.5];
  var MAX_KG_PERDIDOS_CREIBLE = 5;
  function liquidoRecuperacion(kgPerdidos) {
    if (!Number.isFinite(kgPerdidos) || kgPerdidos <= 0 || kgPerdidos > MAX_KG_PERDIDOS_CREIBLE) return void 0;
    return [redondear1(kgPerdidos * LIQUIDO_RECUPERACION_L_POR_KG[0]), redondear1(kgPerdidos * LIQUIDO_RECUPERACION_L_POR_KG[1])];
  }

  // src/motor/hambre.ts
  var VECES_HAMBRE_ALERTA = 3;
  var ACUSE_HAMBRE = "Anotado: la pr\xF3xima vez esta comida ser\xE1 m\xE1s abundante, con las mismas calor\xEDas.";
  var NOMBRE_FRANJA2 = { desayuno: "desayuno", media_manana: "media ma\xF1ana", comida: "comida", merienda: "merienda", cena: "cena" };
  function acuseValoracion(valor, antes, despues, manual, avisaPablo = false) {
    let t2;
    if (valor === "bien") t2 = "Anotado. Seguimos con esta cantidad.";
    else if (valor === "hambre") {
      t2 = despues > antes ? ACUSE_HAMBRE : manual ? "Anotado. La cantidad de estas comidas la tienes puesta a mano en Perfil: si quieres que sean m\xE1s abundantes, s\xFAbela all\xED." : "Anotado. Esta comida ya lleva la mayor cantidad posible con tus calor\xEDas.";
    } else {
      t2 = despues < antes ? "Anotado: la pr\xF3xima vez esta comida ser\xE1 m\xE1s concentrada, con las mismas calor\xEDas." : manual ? "Anotado. La cantidad de estas comidas la tienes puesta a mano en Perfil: si quieres que sean m\xE1s concentradas, b\xE1jala all\xED." : despues <= -2 ? "Anotado. Esta comida ya va lo m\xE1s concentrada posible con tus calor\xEDas." : "Anotado: si se repite, tus platos ser\xE1n m\xE1s concentrados, con las mismas calor\xEDas.";
    }
    return avisaPablo ? `${t2} Es la ${VECES_HAMBRE_ALERTA}.\xAA vez esta semana que te quedas con hambre: queda anotado para Pablo.` : t2;
  }
  var aMs2 = (f2) => Date.UTC(Number(f2.slice(0, 4)), Number(f2.slice(5, 7)) - 1, Number(f2.slice(8, 10)));
  var aISO = (ms) => new Date(ms).toISOString().slice(0, 10);
  function hambresDeLaSemana(valoraciones, hoy) {
    const lunes = lunesDeLaSemana(hoy);
    const domingo = aISO(aMs2(lunes) + 6 * 864e5);
    return valoraciones.filter((v) => v.valor === "hambre" && v.fecha >= lunes && v.fecha <= domingo).sort((a2, b) => a2.fecha.localeCompare(b.fecha));
  }
  function alertaHambre(valoraciones, hoy, fechaISO, existentes = []) {
    const lunes = lunesDeLaSemana(hoy);
    const firma = `H|${lunes}`;
    const lista = hambresDeLaSemana(valoraciones, hoy);
    if (lista.length < VECES_HAMBRE_ALERTA || existentes.some((a2) => a2.firma === firma)) return void 0;
    const cuales = lista.map((v) => `${NOMBRE_FRANJA2[v.franja] ?? v.franja} del ${v.fecha.slice(8, 10)}/${v.fecha.slice(5, 7)}`).join(", ");
    return {
      fecha: fechaISO,
      prioritaria: false,
      tipo: "hambre",
      hambre: true,
      disparadores: [{ pregunta: 0, etiqueta: "hambre", se\u00F1al: `\xABMe he quedado con hambre\xBB ${lista.length} veces esta semana (desde el lunes ${lunes.slice(8, 10)}/${lunes.slice(5, 7)}): ${cuales}. La app sube el volumen de esas comidas, no las calor\xEDas.` }],
      contexto: [],
      sinInterpretar: [],
      firma
    };
  }

  // src/motor/catalogo-amplio.ts
  var RECETAS_CATALOGO_CSV = `id,nombre,franjas,kcal,proteina_g,grasa_g,hidrato_g,notas,tipoPlato,fibra_g,proteina_principal,base_hidrato,alergenos,apto_vegetariano,apto_vegano,apto_sin_lactosa,apto_sin_gluten,bajo_fibra,tiempo_min,origen,preparacion,uso_dia
R01,Puchero ligero de garbanzos y pollo,comida,673,50.9,18.1,78.2,EJEMPLO | fibraAlta | doble_base | carga,unico,17.0,pechuga de pollo asada,legumbre;patata,,no,no,si,pendiente_ficha,no,65,recetario42,Cocer verduras con agua; a\xF1adir garbanzo ya cocido y pollo asado pesado despu\xE9s de cocinar. Servir con aceite al final.,carga
R02,Cocido sencillo de garbanzos y verduras,comida,639,46.4,17.8,76.0,EJEMPLO | fibraAlta | doble_base | carga,unico,19.5,pechuga de pollo asada,legumbre;patata,,no,no,si,pendiente_ficha,no,65,recetario42,"Cocer patata, zanahoria y repollo con agua. A\xF1adir garbanzo cocido y pollo asado; terminar con aceite.",carga
R03,Pisto con huevo y pan integral,comida;cena,541,26.7,25.2,55.4,EJEMPLO | fibraAlta,unico,11.3,huevo,pan,gluten;huevo,si,no,pendiente_ficha,no,no,30,recetario42,Pochar cebolla y pimientos con aceite; a\xF1adir calabac\xEDn y tomate. Cocinar el huevo completamente y servir con pan.,normal
R04,Escalivada con bacalao y patata,comida,542,36.9,17.1,63.5,EJEMPLO,unico,11.5,bacalao fresco,patata,pescado,no,no,si,pendiente_ficha,no,50,recetario42,"Asar pimiento, cebolla y tomate. Cocer patata y cocinar bacalao completamente; ali\xF1ar con aceite.",normal
R05,"Caldo de alubias, repollo y patata",comida,560,24.1,13.0,91.9,EJEMPLO | fibraAlta | doble_base | carga,unico,20.7,,legumbre;patata,,si,si,si,pendiente_ficha,no,90,recetario42,Cocer alubias desde seco tras remojo y desechar el agua de remojo. A\xF1adir repollo y patata; aceite al servir.,carga
R06,Arroz con pollo y jud\xEDas verdes,comida,706,48.8,18.6,84.6,EJEMPLO,unico,7.2,pechuga de pollo asada,cereal,,no,no,si,pendiente_ficha,no,45,recetario42,Cocer arroz con verduras y tomate; incorporar pollo asado pesado ya cocinado. Aceite incluido en el total.,normal
R07,"Ensalada templada de garbanzos, at\xFAn y tomate",comida,677,44.8,19.8,84.6,EJEMPLO | fibraAlta | doble_base | carga,unico,20.1,at\xFAn en lata,legumbre;pan,gluten;pescado,no,no,pendiente_ficha,no,no,15,recetario42,Escurrir el at\xFAn y pesar. Mezclar con garbanzos cocidos y verduras; a\xF1adir aceite y pan aparte.,carga
R08,Lentejas con arroz y verduras,comida,655,25.1,13.7,111.0,EJEMPLO | fibraAlta | doble_base | carga,unico,14.4,,cereal;legumbre,,si,si,si,pendiente_ficha,no,45,recetario42,"Pochar cebolla, ajo y zanahoria; a\xF1adir lentejas y agua. Cocer arroz por separado; combinar y ali\xF1ar.",carga
R09,"Bol de yogur, avena, pl\xE1tano y almendras",desayuno;merienda,621,22.8,22.7,87.4,EJEMPLO,unico,12.2,,avena,frutos de c\xE1scara;gluten;l\xE1cteos,si,no,no,no,no,5,recetario42,Mezclar yogur y copos de avena; a\xF1adir pl\xE1tano troceado y almendras picadas.,normal
R10,Salm\xF3n con patata y espinacas,comida;cena,653,40.3,32.9,50.9,EJEMPLO,unico,8.8,salm\xF3n,patata,pescado,no,no,si,pendiente_ficha,no,30,recetario42,Asar salm\xF3n; cocer patata y saltear espinacas con el aceite pesado.,normal
R11,"Tostadas integrales de huevo, tomate y fruta",desayuno,531,27.5,18.4,65.7,EJEMPLO | fibraAlta,unico,11.0,huevo,pan,gluten;huevo,si,no,pendiente_ficha,no,no,15,recetario42,Tostar el pan; cocinar huevo completamente con el aceite; acompa\xF1ar de tomate y naranja pelada.,normal
R12,Arroz con ternera magra y verduras,comida,733,38.1,25.6,86.5,EJEMPLO,unico,6.0,ternera picada,cereal,,no,no,si,pendiente_ficha,si,30,recetario42,"Cocer arroz, saltear ternera y verduras con el aceite medido y mezclar.",normal
R13,Marmitako ligero de at\xFAn y patata,comida,482,47.6,11.4,47.3,EJEMPLO,unico,7.4,at\xFAn fresco,patata,pescado,no,no,si,pendiente_ficha,no,40,recetario42,"Pochar cebolla, pimiento y tomate; a\xF1adir la patata chascada y agua y cocer. Incorporar el at\xFAn en dados los \xFAltimos 3-4 minutos.",normal
R14,Fabada ligera de alubias con verduras,comida,433,20.4,11.1,67.1,EJEMPLO | fibraAlta,unico,17.2,,legumbre,,si,si,si,pendiente_ficha,no,45,recetario42,Pochar las verduras; a\xF1adir la alubia ya cocida con parte de su agua y cocer a fuego suave. Aceite al final.,normal
R15,Pollo al chilindr\xF3n ligero con patata,comida,495,46.4,15.4,43.7,EJEMPLO,unico,8.1,pechuga de pollo asada,patata,,no,no,si,pendiente_ficha,no,45,recetario42,"Cocer la patata con el tomate, el pimiento y la cebolla pochados; a\xF1adir el pollo cocinado al final.",normal
R16,Patatas estofadas con champi\xF1ones y huevo,comida,487,19.3,17.4,67.8,EJEMPLO,unico,10.6,huevo cocido,patata,huevo,si,no,si,pendiente_ficha,no,40,recetario42,"Pochar las verduras, a\xF1adir la patata y agua y cocer; terminar con el huevo duro en cuartos.",normal
R17,Menestra de verduras con huevo,comida,384,14.3,17.1,46.9,EJEMPLO,unico,10.0,huevo cocido,patata,huevo,si,no,si,pendiente_ficha,no,35,recetario42,"Cocer las verduras por orden de dureza, escurrir y saltear con el aceite; servir con el huevo duro.",normal
R18,Tumbet con huevo,comida;cena,414,15.2,16.7,54.9,EJEMPLO,unico,12.2,huevo,patata,huevo,si,no,si,pendiente_ficha,no,45,recetario42,Hornear las verduras en capas con el tomate; terminar con el huevo cuajado al horno.,normal
R19,Papas con pescado blanco y mojo ligero,comida,440,34.1,13.4,46.0,EJEMPLO,unico,6.1,bacalao fresco,patata,pescado,no,no,si,pendiente_ficha,no,35,recetario42,Cocer la patata; cocinar el pescado a la plancha o al vapor; ali\xF1ar con el aceite y el pimiento picado.,normal
R20,Zarangollo con patata,cena,458,22.3,22.4,44.2,EJEMPLO,unico,7.3,huevo,patata,huevo,si,no,si,pendiente_ficha,no,30,recetario42,Pochar calabac\xEDn y cebolla; a\xF1adir el huevo batido y cuajar; servir con la patata cocida.,normal
R21,"Gazpacho con at\xFAn, huevo y pan integral",comida,545,38.1,25.2,44.5,EJEMPLO | fibraAlta,unico,8.9,at\xFAn en lata,pan,gluten;huevo;pescado,no,no,pendiente_ficha,no,no,15,recetario42,"Triturar tomate, pimiento y cebolla con el aceite; acompa\xF1ar con el at\xFAn, el huevo duro y el pan.",normal
R22,Migas de pan integral con verduras y huevo,comida,534,21.6,21.3,66.9,EJEMPLO | fibraAlta,unico,11.7,huevo,pan,gluten;huevo,si,no,pendiente_ficha,no,no,25,recetario42,Humedecer el pan y dorarlo con el aceite y las verduras; cuajar el huevo; acompa\xF1ar de la naranja.,normal
R23,Alubias estofadas con pavo y verduras,comida,575,52.9,13.4,62.3,EJEMPLO | fibraAlta,unico,15.8,pechuga de pavo asada,legumbre,,no,no,si,pendiente_ficha,no,35,recetario42,"Pochar las verduras, a\xF1adir la alubia cocida y cocer a fuego suave; incorporar el pavo al final.",normal
R24,Cocido monta\xF1\xE9s ligero de alubias rojas,comida,597,44.8,13.0,78.4,EJEMPLO | fibraAlta | doble_base | carga,unico,21.8,pechuga de pavo asada,legumbre;patata,,no,no,si,pendiente_ficha,no,45,recetario42,Cocer las verduras y la patata; a\xF1adir la alubia cocida y el pavo; cocer a fuego suave y ali\xF1ar.,carga
R25,"Porridge de avena con yogur, manzana y nueces",desayuno,558,18.3,23.7,73.4,EJEMPLO,unico,11.0,,avena,frutos de c\xE1scara;gluten;l\xE1cteos,si,no,no,no,no,10,recetario42,"Cocer la avena con agua; a\xF1adir el yogur, la manzana en dados y las nueces picadas.",normal
R26,Tortitas de avena y huevo con fresas y yogur,desayuno,527,35.4,20.6,50.7,EJEMPLO,unico,8.1,huevo,avena,gluten;huevo;l\xE1cteos,si,no,no,no,no,15,recetario42,Batir la avena y el huevo; cocinar dos tortitas con el aceite; cubrir con el yogur y las fresas.,normal
R27,Tostadas integrales de at\xFAn y tomate con naranja,desayuno,483,30.4,14.1,62.3,EJEMPLO | fibraAlta,unico,11.0,at\xFAn en lata,pan,gluten;pescado,no,no,pendiente_ficha,no,no,10,recetario42,Tostar el pan con el tomate rallado y el aceite; a\xF1adir el at\xFAn; acompa\xF1ar de la naranja.,normal
R28,"Queso fresco batido con avena, fresas y miel",desayuno,445,28.5,8.2,67.2,"EJEMPLO | queso cottage: solo en desayuno o dentro de una elaboraci\xF3n, nunca como plato principal ni merienda (Pablo, 05/10)",unico,8.1,queso cottage,avena,gluten;l\xE1cteos,si,no,no,no,no,5,recetario42,"Mezclar todo en un bol, sin cocci\xF3n.",normal
R29,Bocadillo integral de tortilla francesa con yogur,desayuno,563,31.5,26.8,49.0,EJEMPLO | fibraAlta,unico,6.6,huevo,pan,gluten;huevo;l\xE1cteos,si,no,no,no,no,15,recetario42,Cuajar el huevo con el aceite; rellenar el pan con la tortilla y el tomate; yogur aparte.,normal
R30,"Batido de leche, pl\xE1tano, avena y crema de cacahuete",desayuno;merienda,558,22.0,21.8,74.5,EJEMPLO,unico,8.4,,avena,cacahuete;gluten;l\xE1cteos,si,no,no,no,no,5,recetario42,Triturar todo y servir fr\xEDo.,normal
R31,"Bol de arroz, pollo y pl\xE1tano",comida,654,44.0,10.1,95.0,EJEMPLO,unico,3.7,pechuga de pollo asada,cereal,,no,no,si,pendiente_ficha,si,20,recetario42,Cocer el arroz; calentarlo con el pollo; a\xF1adir el pl\xE1tano y la miel.,normal
R32,Tostadas de pan blanco con pavo y yogur,desayuno,510,39.4,16.8,49.3,EJEMPLO,unico,3.4,pechuga de pavo asada,pan,gluten;l\xE1cteos,no,no,no,no,si,10,recetario42,Tostar el pan con el tomate y el aceite; a\xF1adir el pavo; yogur aparte.,normal
R33,"Bol de arroz, at\xFAn y claras",comida,551,44.0,10.0,68.7,EJEMPLO,unico,2.3,claras de huevo,cereal,huevo;pescado,no,no,si,pendiente_ficha,si,20,recetario42,"Cuajar las claras; mezclar con el arroz, el at\xFAn y el pimiento; ali\xF1ar.",normal
R34,Merluza al horno con patata y jud\xEDas verdes,comida;cena,453,35.6,11.3,54.2,EJEMPLO | pescado/carne con equivalente USDA aproximado,unico,9.3,merluza,patata,pescado,no,no,si,pendiente_ficha,no,25,recetario42,Hornear el pescado y la patata; cocer las jud\xEDas; ali\xF1ar.,normal
R35,Pasta con pavo y tomate (d\xEDa de carga),comida,681,51.2,14.4,84.2,EJEMPLO,unico,5.2,pechuga de pavo asada,cereal,gluten,no,no,si,no,si,20,recetario42,"Cocer la pasta; mezclar con el tomate pochado, el pavo y el aceite.",carga
R36,"Bol r\xE1pido de yogur griego, avena y pl\xE1tano",merienda;media_manana,580,37.0,15.1,79.1,EJEMPLO,unico,10.2,,avena,frutos de c\xE1scara;gluten;l\xE1cteos,si,no,no,no,no,5,recetario42,Mezclar todo en un bol.,normal
R37,Tortilla de calabac\xEDn con tomate y pan integral,cena,462,25.1,24.0,38.3,EJEMPLO | fibraAlta,unico,7.3,huevo,pan,gluten;huevo,si,no,pendiente_ficha,no,no,20,recetario42,Pochar el calabac\xEDn y la cebolla y cuajar el huevo; servir con el tomate y el pan.,normal
R38,Crema de calabaza con pollo y pan integral,cena,557,45.4,14.0,65.4,EJEMPLO | fibraAlta | doble_base | carga,unico,7.4,pechuga de pollo asada,pan;patata,gluten,no,no,pendiente_ficha,no,no,30,recetario42,"Cocer la calabaza, el puerro y la patata; triturar; servir con el pollo y el pan.",carga
R39,Pavo a la plancha con boniato y br\xF3coli,cena,548,48.4,13.2,60.5,EJEMPLO,unico,11.4,pechuga de pavo,patata,,no,no,si,pendiente_ficha,no,25,recetario42,Asar el boniato; cocer el br\xF3coli; hacer el pavo a la plancha con el aceite.,normal
R40,Ensalada templada de lentejas con huevo,cena,534,30.5,18.8,63.6,EJEMPLO | fibraAlta | doble_base | carga,unico,19.1,huevo cocido,legumbre;pan,gluten;huevo,si,no,pendiente_ficha,no,no,15,recetario42,Mezclar la lenteja templada con las verduras y el huevo; ali\xF1ar y servir con el pan.,carga
R41,Sepia a la plancha con patata y pimiento,cena,436,37.8,11.8,44.8,EJEMPLO,unico,6.3,sepia,patata,moluscos,no,no,si,pendiente_ficha,no,25,recetario42,Cocer la patata; hacer la sepia y el pimiento a la plancha con el aceite.,normal
R42,Tostas de sardina con tomate y espinacas,cena,495,37.6,19.8,42.2,EJEMPLO | fibraAlta,unico,7.9,sardina en lata,pan,gluten;pescado,no,no,pendiente_ficha,no,no,10,recetario42,Tostar el pan con el tomate rallado; a\xF1adir las sardinas y las espinacas; ali\xF1ar.,normal
R43,"Ensalada de can\xF3nigos, huevo duro y pollo",comida;cena,339,37.3,17.9,6.1,EJEMPLO | fibraAlta,primero,2.0,pechuga de pollo asada,,huevo,no,no,si,pendiente_ficha,no,15,nuevo,"Cocer el huevo, trocear el pollo ya asado, mezclar con la lechuga y el tomate y ali\xF1ar con aceite.",normal
R44,"Ensalada de lechuga, tomate y at\xFAn",comida;cena,171,14.1,9.1,10.6,EJEMPLO | fibraAlta,primero,3.5,at\xFAn en lata,,pescado,no,no,si,pendiente_ficha,no,10,nuevo,Mezclar las verduras troceadas con el at\xFAn escurrido y ali\xF1ar.,normal
R45,"Ensalada de r\xFAcula, pera y nueces",comida;cena,252,4.3,18.3,22.5,EJEMPLO | fibraAlta,primero,5.7,,,frutos de c\xE1scara,si,si,si,pendiente_ficha,no,10,nuevo,Montar la r\xFAcula con la pera en l\xE1minas y las nueces; ali\xF1ar con aceite.,normal
R46,"Ensalada de tomate, pepino y aceituna",comida;cena,175,2.9,12.7,15.4,EJEMPLO | fibraAlta,primero,3.7,,,,si,pendiente_ficha,pendiente_ficha,pendiente_ficha,no,10,nuevo,Trocear y ali\xF1ar.,normal
R47,"Ensalada de remolacha, zanahoria y huevo",comida;cena,248,10.7,14.8,19.7,EJEMPLO | fibraAlta,primero,4.9,huevo cocido,,huevo,si,no,si,pendiente_ficha,no,15,nuevo,"Rallar la zanahoria, trocear la remolacha cocida y el huevo cocido, mezclar y ali\xF1ar.",normal
R48,Crema de calabaza y zanahoria,comida;cena,194,3.7,8.6,29.7,EJEMPLO,primero,4.7,,,,si,si,si,pendiente_ficha,si,30,nuevo,"Cocer las verduras con agua, triturar y a\xF1adir el aceite al servir.",normal
R49,Crema de calabac\xEDn y puerro con patata,comida;cena,246,6.1,9.0,38.5,EJEMPLO,primero,6.0,,patata,,si,si,si,pendiente_ficha,si,30,nuevo,"Cocer todo en agua, triturar y servir con un hilo de aceite.",normal
R50,Gazpacho andaluz,comida;cena,296,6.6,16.8,33.4,EJEMPLO | fibraAlta,primero,5.8,,pan,gluten,si,pendiente_ficha,pendiente_ficha,no,no,10,nuevo,Triturar las verduras con el pan remojado y el aceite; servir fr\xEDo.,normal
R51,Salmorejo con huevo,comida;cena,428,14.4,22.9,42.9,EJEMPLO | fibraAlta,primero,5.3,huevo cocido,pan,gluten;huevo,si,no,pendiente_ficha,no,no,10,nuevo,"Triturar tomate, pan, ajo y aceite hasta obtener una crema; servir con huevo cocido picado.",normal
R52,Menestra de verduras salteadas,comida;cena,227,7.1,10.7,31.4,EJEMPLO,primero,12.2,,,,si,si,si,pendiente_ficha,no,25,nuevo,Cocer las verduras y saltearlas con el aceite.,normal
R53,Esp\xE1rragos y champi\xF1ones a la plancha,comida;cena,132,7.3,8.6,10.9,EJEMPLO,primero,4.5,,,,si,si,si,pendiente_ficha,si,15,nuevo,Marcar a la plancha con el ajo laminado; perejil al final.,normal
R54,Br\xF3coli y coliflor al horno,comida;cena,181,7.3,11.0,18.4,EJEMPLO,primero,7.0,,,,si,si,si,pendiente_ficha,no,30,nuevo,Hornear a 200 \xB0C con el aceite y el ajo.,normal
R55,Lentejas estofadas con verduras,comida;cena,304,15.3,9.2,43.8,EJEMPLO | fibraAlta,primero,16.0,,legumbre,,si,si,si,pendiente_ficha,no,35,nuevo,"Sofre\xEDr la verdura, a\xF1adir la lenteja cocida y el piment\xF3n y estofar unos minutos.",normal
R56,Garbanzos con espinacas,comida;cena,348,16.5,12.5,46.2,EJEMPLO | fibraAlta,primero,13.8,,legumbre,,si,si,si,pendiente_ficha,no,15,nuevo,"Saltear el ajo, a\xF1adir las espinacas, el garbanzo cocido y el comino.",normal
R57,Arroz con tomate,comida;cena,362,6.5,8.9,64.0,EJEMPLO,primero,4.3,,cereal,,si,pendiente_ficha,pendiente_ficha,pendiente_ficha,si,25,nuevo,"Sofre\xEDr la cebolla, a\xF1adir el tomate y el arroz y cocer con agua.",normal
R58,Pasta con tomate,comida;cena,396,11.8,9.6,65.9,EJEMPLO,primero,5.5,,cereal,gluten,si,pendiente_ficha,pendiente_ficha,no,si,20,nuevo,Cocer la pasta y mezclar con el tomate sofrito con ajo.,normal
R59,Sopa de verduras con fideos,comida;cena,266,7.6,6.0,46.9,EJEMPLO,primero,5.5,,cereal,gluten,si,si,si,no,si,25,nuevo,Cocer las verduras en agua y a\xF1adir los fideos al final.,normal
R60,Pollo a la plancha con patata asada y pimiento,comida;cena,508,50.1,15.7,41.0,EJEMPLO,segundo,6.3,pechuga de pollo,patata,,no,no,si,pendiente_ficha,no,35,nuevo,Asar patata y pimiento; hacer el pollo a la plancha.,normal
R61,Pollo al lim\xF3n con arroz y jud\xEDas verdes,comida;cena,597,51.8,13.9,62.9,EJEMPLO,segundo,3.6,pechuga de pollo,cereal,,no,no,si,pendiente_ficha,si,30,nuevo,Marcar el pollo (3-4 min por lado); cocer el arroz (15-18 min) y las jud\xEDas verdes (8 min) aparte.,normal
R62,Pavo en salsa de verduras con patata,comida;cena,504,52.2,13.4,43.2,EJEMPLO,segundo,6.7,pechuga de pavo,patata,,no,no,si,pendiente_ficha,no,40,nuevo,"Sofre\xEDr la verdura, estofar el pavo y la patata.",normal
R63,Ternera salteada con champi\xF1ones y arroz,comida;cena,650,48.9,19.3,67.9,EJEMPLO | pescado/carne con equivalente USDA aproximado,segundo,2.2,ternera magra (solomillo de aguja),cereal,,no,no,si,pendiente_ficha,si,30,nuevo,Saltear la ternera en tiras con el champi\xF1\xF3n; servir con el arroz cocido.,normal
R64,Lomo de cerdo con boniato y br\xF3coli,comida;cena,541,45.1,18.7,48.2,EJEMPLO,segundo,9.1,lomo de cerdo,patata,,no,no,si,pendiente_ficha,no,35,nuevo,Hornear el boniato; lomo a la plancha; br\xF3coli al vapor.,normal
R65,Hamburguesa de ternera con patata y ensalada,comida;cena,528,35.5,25.4,39.5,EJEMPLO,segundo,5.8,ternera picada,patata,,no,no,si,pendiente_ficha,si,35,nuevo,"Hamburguesa a la plancha, patata asada y ensalada aparte.",normal
R66,Conejo a la cazadora con patata,comida;cena,564,46.0,21.7,46.4,EJEMPLO,segundo,7.3,conejo,patata,,no,no,si,pendiente_ficha,no,50,nuevo,"Sofre\xEDr la verdura, estofar el conejo con la patata.",normal
R67,Merluza en salsa verde con patata y guisantes,comida;cena,445,40.3,11.4,44.8,EJEMPLO | pescado/carne con equivalente USDA aproximado,segundo,7.8,merluza,patata,pescado,no,no,si,pendiente_ficha,no,30,nuevo,"Cocer patata y guisantes, a\xF1adir la merluza con ajo y perejil.",normal
R68,Bacalao con tomate y arroz,comida;cena,548,42.2,12.2,64.9,EJEMPLO,segundo,4.4,bacalao fresco,cereal,pescado,no,no,pendiente_ficha,pendiente_ficha,si,35,nuevo,Sofrito de cebolla y tomate; cocer el bacalao en \xE9l; arroz aparte.,normal
R69,Salm\xF3n al horno con esp\xE1rragos y patata,comida;cena,519,37.0,25.4,36.1,EJEMPLO,segundo,6.3,salm\xF3n,patata,pescado,no,no,si,pendiente_ficha,no,30,nuevo,Hornear salm\xF3n y esp\xE1rragos; patata cocida.,normal
R70,At\xFAn a la plancha con pisto,comida;cena,342,42.8,11.7,16.9,EJEMPLO,segundo,4.9,at\xFAn fresco,,pescado,no,no,si,pendiente_ficha,si,35,nuevo,Pisto con la verdura y at\xFAn a la plancha.,normal
R71,Caballa al horno con patata y cebolla,comida;cena,571,33.4,29.2,43.7,EJEMPLO,segundo,6.2,caballa,patata,pescado,no,no,si,pendiente_ficha,no,40,nuevo,Hornear la caballa sobre la patata y la cebolla.,normal
R72,Lubina al horno con verduras,comida;cena,430,40.5,13.3,37.0,EJEMPLO | pescado/carne con equivalente USDA aproximado,segundo,6.4,lubina,patata,pescado,no,no,si,pendiente_ficha,no,40,nuevo,Hornear el pescado con las verduras laminadas.,normal
R73,Mejillones al vapor con arroz,comida;cena,528,30.0,13.2,70.0,EJEMPLO,segundo,2.6,mejill\xF3n,cereal,moluscos,no,no,si,pendiente_ficha,si,25,nuevo,Abrir los mejillones al vapor; arroz con tomate y cebolla.,normal
R74,Calamar a la plancha con patata y ensalada,comida;cena,436,36.4,13.2,43.0,EJEMPLO,segundo,5.6,calamar,patata,moluscos,no,no,si,pendiente_ficha,si,30,nuevo,Calamar a la plancha; patata cocida y ensalada.,normal
R75,Tortilla francesa con ensalada y pan,comida;cena,472,25.8,24.6,36.3,EJEMPLO,segundo,3.6,huevo,pan,gluten;huevo,si,no,pendiente_ficha,no,si,15,nuevo,Tortilla de 3 huevos; ensalada y pan aparte.,normal
R76,Tortilla de patata ligera con ensalada,comida;cena,480,24.1,24.6,41.2,EJEMPLO,segundo,5.5,huevo,patata,huevo,si,no,si,pendiente_ficha,si,35,nuevo,"Pochar patata y cebolla con poco aceite, cuajar con el huevo.",normal
R77,Huevos al plato con verduras y pan,comida;cena,433,22.8,20.2,41.5,EJEMPLO | fibraAlta,segundo,7.9,huevo,pan,gluten;huevo,si,no,pendiente_ficha,no,no,25,nuevo,"Sofrito de verduras, cuajar los huevos en \xE9l; pan aparte.",normal
R78,Tofu salteado con br\xF3coli y arroz,comida;cena,609,34.5,22.1,74.4,EJEMPLO,segundo,9.2,tofu firme,cereal,soja,si,pendiente_ficha,pendiente_ficha,pendiente_ficha,no,25,nuevo,Saltear el tofu y las verduras; arroz cocido aparte.,normal
R79,Tempeh a la plancha con boniato y espinacas,comida;cena,496,30.3,21.5,53.0,EJEMPLO,segundo,8.2,tempeh,patata,soja,si,pendiente_ficha,pendiente_ficha,pendiente_ficha,no,30,nuevo,"Tempeh a la plancha, boniato asado, espinacas salteadas.",normal
R80,Garbanzos salteados con espinacas y huevo,comida;cena,493,29.2,22.1,47.6,EJEMPLO | fibraAlta,segundo,14.4,huevo,legumbre,huevo,si,no,si,pendiente_ficha,no,20,nuevo,Saltear garbanzo cocido con espinacas y ajo; a\xF1adir huevo cocinado.,normal
R81,Pavo con calabaza asada y champi\xF1ones,comida;cena,373,52.4,11.5,16.5,EJEMPLO,segundo,2.0,pechuga de pavo,,,no,no,si,pendiente_ficha,si,35,nuevo,Hornear la calabaza; pavo y champi\xF1\xF3n a la plancha.,normal
R82,Pasta con ternera y tomate (d\xEDa de carga),comida,822,42.6,24.4,106.0,EJEMPLO,unico,7.7,ternera picada,cereal,gluten,no,no,pendiente_ficha,no,no,30,nuevo,Sofre\xEDr la ternera con cebolla y tomate; mezclar con la pasta cocida.,carga
R83,"Arroz con pollo y zanahoria",comida;cena,853,55.0,18.3,111.6,EJEMPLO,unico,3.9,pechuga de pollo,cereal,,no,no,si,pendiente_ficha,si,35,nuevo,Cocer el arroz con la zanahoria; saltear el pollo y mezclar.,carga
R84,Pasta blanca con at\xFAn y tomate,comida;cena,622,32.1,12.9,93.8,EJEMPLO,unico,6.1,at\xFAn en lata,cereal,gluten;pescado,no,no,pendiente_ficha,no,no,20,nuevo,Pasta cocida con el at\xFAn escurrido y el tomate.,normal
R85,Patata cocida con huevo y at\xFAn,comida;cena,526,30.4,21.5,53.6,EJEMPLO,unico,6.3,huevo cocido,patata,huevo;pescado,no,no,si,pendiente_ficha,no,30,nuevo,"Cocer la patata, mezclar con el huevo cocido y el at\xFAn; ali\xF1ar.",normal
R86,"Salteado de tofu, verduras y arroz",comida;cena,706,35.9,24.4,92.0,EJEMPLO,unico,10.1,tofu firme,cereal,soja,si,pendiente_ficha,pendiente_ficha,pendiente_ficha,no,30,nuevo,Saltear tofu y verduras; mezclar con el arroz cocido.,normal
R87,"Pasta con calabac\xEDn, tomate y mozzarella",comida;cena,660,28.7,23.4,83.7,EJEMPLO,unico,5.6,mozzarella,cereal,gluten;l\xE1cteos,si,no,no,no,si,25,nuevo,Saltear calabac\xEDn y tomate; mezclar con la pasta y la mozzarella.,normal
R88,Cusc\xFAs de verduras y tofu,comida;cena,632,34.0,21.5,79.8,EJEMPLO,unico,9.5,tofu firme,cereal,gluten;soja,si,pendiente_ficha,pendiente_ficha,no,no,20,nuevo,Hidratar el cusc\xFAs; saltear verduras y tofu y mezclar.,normal
R89,"Wrap de pollo, pimiento y aguacate (d\xEDa de carga)",comida;cena,650,56.7,20.6,59.2,EJEMPLO,unico,7.8,pechuga de pollo asada,pan,gluten,no,no,pendiente_ficha,no,no,20,nuevo,Rellenar la tortilla con el pollo ya asado y las verduras.,carga
R90,Tostada integral con aguacate y huevo,desayuno,367,17.9,17.1,37.4,EJEMPLO | fibraAlta,unico,8.8,huevo,pan,gluten;huevo,si,no,pendiente_ficha,no,no,10,nuevo,"Tostar el pan, aguacate machacado, huevo cocinado y tomate.",normal
R91,"Mollete con tomate, aceite y at\xFAn",desayuno;merienda,363,16.6,11.6,48.4,EJEMPLO,unico,3.6,at\xFAn en lata,pan,gluten;pescado,no,no,pendiente_ficha,no,si,10,nuevo,"Pan abierto con tomate rallado, at\xFAn y aceite.",normal
R92,Gachas de avena con leche y pl\xE1tano,desayuno,404,15.9,8.5,68.7,EJEMPLO,unico,7.7,,avena,gluten;l\xE1cteos,si,no,no,no,no,10,nuevo,Calentar la avena con la leche y a\xF1adir el pl\xE1tano.,normal
R93,Tortilla francesa con pan y naranja,desayuno,444,20.2,17.0,52.9,EJEMPLO,unico,5.5,huevo,pan,gluten;huevo,si,no,pendiente_ficha,no,si,10,nuevo,"Tortilla de 2 huevos, pan y naranja.",normal
R94,Tostada con crema de cacahuete y pl\xE1tano,desayuno;merienda,360,13.0,12.7,52.9,EJEMPLO | fibraAlta,unico,7.2,,pan,cacahuete;gluten,si,pendiente_ficha,pendiente_ficha,no,no,5,nuevo,Pan tostado con la crema y el pl\xE1tano en rodajas.,normal
R95,Yogur con nueces y manzana,media_manana;merienda,226,6.9,14.0,21.7,EJEMPLO,unico,3.4,,,frutos de c\xE1scara;l\xE1cteos,si,no,no,pendiente_ficha,si,5,nuevo,Mezclar.,normal
R96,Hummus con zanahoria,media_manana;merienda,183,5.6,10.9,18.6,EJEMPLO | fibraAlta,unico,6.1,,legumbre,s\xE9samo,si,pendiente_ficha,pendiente_ficha,pendiente_ficha,no,5,nuevo,Bastones de zanahoria con el hummus.,normal
R97,Pl\xE1tano con almendras,media_manana;merienda,205,5.3,10.3,27.1,EJEMPLO,unico,5.1,,,frutos de c\xE1scara,si,si,si,pendiente_ficha,si,2,nuevo,Tomar junto.,normal
R98,Bocadillo peque\xF1o de pavo y tomate,media_manana;merienda,226,17.7,2.9,31.2,EJEMPLO,unico,2.1,pechuga de pavo asada,pan,gluten,no,no,pendiente_ficha,no,si,5,nuevo,Pan con pavo asado y tomate.,normal
R99,Tostada de at\xFAn y tomate,media_manana;merienda,176,12.6,2.1,26.7,EJEMPLO,unico,2.0,at\xFAn en lata,pan,gluten;pescado,no,no,pendiente_ficha,no,si,5,nuevo,Pan tostado con at\xFAn escurrido y tomate.,normal
R100,Batido de yogur griego y fresas,media_manana;merienda,170,19.3,2.9,17.9,EJEMPLO,unico,2.0,,,l\xE1cteos,si,no,no,pendiente_ficha,si,5,nuevo,Triturar.,normal
R101,Huevo cocido con pera,media_manana;merienda,178,8.1,6.6,23.5,EJEMPLO,unico,4.7,huevo cocido,,huevo,si,no,si,pendiente_ficha,si,10,nuevo,Huevo cocido y pera.,normal
R102,Frutos secos y mandarina,media_manana;merienda,264,6.7,17.7,25.3,EJEMPLO,unico,5.6,,,frutos de c\xE1scara,si,si,si,pendiente_ficha,si,2,nuevo,Pu\xF1ado de frutos secos y fruta.,normal
R103,Yogur con avena y miel,media_manana;merienda,176,7.0,5.4,26.0,EJEMPLO,unico,2.0,,avena,gluten;l\xE1cteos,si,no,no,no,si,5,nuevo,Mezclar.,normal
R104,Manzana con crema de cacahuete,media_manana;merienda,168,3.7,8.0,24.1,EJEMPLO,unico,4.3,,,cacahuete,si,pendiente_ficha,pendiente_ficha,pendiente_ficha,si,3,nuevo,Manzana en gajos con la crema.,normal
R105,Yogur natural con fresas,comida;cena,108,5.0,4.4,13.5,EJEMPLO,postre,2.0,,,l\xE1cteos,si,no,no,pendiente_ficha,si,3,nuevo,Mezclar.,normal
R106,Yogur griego con miel y nueces,comida;cena,163,14.3,7.0,12.5,EJEMPLO,postre,0.7,,,frutos de c\xE1scara;l\xE1cteos,si,no,no,pendiente_ficha,si,3,nuevo,Mezclar.,normal
R107,Manzana asada con canela,comida;cena,111,0.5,0.3,29.8,EJEMPLO,postre,4.9,,,,si,no,si,pendiente_ficha,si,25,nuevo,Hornear la manzana con canela y un toque de miel.,normal
R108,Macedonia de frutas,comida;cena,162,2.7,0.8,40.4,EJEMPLO,postre,7.2,,,,si,si,si,pendiente_ficha,no,10,nuevo,Trocear y mezclar.,normal
R109,Pl\xE1tano con yogur y cacao,comida;cena,177,6.4,5.1,31.6,EJEMPLO,postre,4.5,,,l\xE1cteos,si,no,no,pendiente_ficha,si,5,nuevo,Pl\xE1tano troceado con yogur y cacao.,normal
R110,Pera cocida con canela,comida;cena,116,0.8,0.3,31.3,EJEMPLO,postre,6.7,,,,si,si,si,pendiente_ficha,no,20,nuevo,Cocer la pera pelada con canela.,normal
R111,Mel\xF3n,comida;cena,85,2.1,0.5,20.4,EJEMPLO,postre,2.2,,,,si,si,si,pendiente_ficha,si,2,nuevo,Servir fr\xEDo.,normal
R112,Sand\xEDa,comida;cena,90,1.8,0.5,22.6,EJEMPLO,postre,1.2,,,,si,si,si,pendiente_ficha,si,2,nuevo,Servir fr\xEDa.,normal
R113,Naranja con almendras,comida;cena,181,5.1,7.7,26.7,EJEMPLO,postre,6.7,,,frutos de c\xE1scara,si,si,si,pendiente_ficha,no,3,nuevo,Naranja pelada con almendras.,normal
R114,Kiwi con yogur griego,comida;cena,147,14.1,1.1,22.1,EJEMPLO,postre,3.6,,,l\xE1cteos,si,no,no,pendiente_ficha,si,3,nuevo,Kiwi troceado con el yogur.,normal
R115,Compota de manzana sin az\xFAcar,comida;cena,106,0.6,0.4,28.4,EJEMPLO,postre,5.3,,,,si,si,si,pendiente_ficha,si,20,nuevo,Cocer la manzana pelada con canela y triturar.,normal
R116,Tostada blanca con huevo y yogur,desayuno;media_manana;merienda,322,16.3,14.4,31.0,EJEMPLO | bajo fibra base \u22643g; no garantiza raci\xF3n escalada,unico,1.35,huevo,pan,gluten;huevo;l\xE1cteos,si,no,no,no,si,10,nuevo,Tostar el pan; cocinar bien el huevo con el aceite. Servir el yogur aparte.,normal
R117,Arroz con leche y canela,desayuno;media_manana;merienda,278,9.5,4.2,50.2,EJEMPLO | bajo fibra base \u22643g; no garantiza raci\xF3n escalada,unico,0.81,,cereal,l\xE1cteos,si,no,no,pendiente_ficha,si,10,nuevo,Pesar arroz seco y cocerlo en leche a fuego suave hasta que est\xE9 hecho; a\xF1adir miel y canela.,normal
R118,Yogur con pl\xE1tano y miel,desayuno;media_manana;merienda,206,7.6,6.7,31.3,EJEMPLO | bajo fibra base \u22643g; no garantiza raci\xF3n escalada,unico,1.58,,,l\xE1cteos,si,no,no,pendiente_ficha,si,10,nuevo,Trocear el pl\xE1tano sin piel y mezclar con el yogur y la miel.,normal
R119,Bocadillo de pollo asado y yogur,desayuno;media_manana;merienda,318,25.2,7.8,35.5,EJEMPLO | bajo fibra base \u22643g; no garantiza raci\xF3n escalada,unico,1.62,pechuga de pollo asada,pan,gluten;l\xE1cteos,no,no,no,no,si,10,nuevo,"Pesar el pollo ya asado, rellenar el pan y servir el yogur aparte.",normal
R120,Pan blanco con mozzarella y aceite,desayuno;media_manana;merienda,306,14.2,13.9,30.6,EJEMPLO | bajo fibra base \u22643g; no garantiza raci\xF3n escalada,unico,1.62,mozzarella,pan,gluten;l\xE1cteos,no,no,no,no,si,10,nuevo,Tostar el pan y a\xF1adir mozzarella y aceite; calentar si se desea.,normal
R121,Tortilla de claras con pan blanco,desayuno;media_manana;merienda,324,23.7,10.9,30.8,EJEMPLO | bajo fibra base \u22643g; no garantiza raci\xF3n escalada,unico,1.62,claras de huevo,pan,gluten;huevo,si,no,pendiente_ficha,no,si,10,nuevo,Cuajar bien las claras y el huevo con el aceite; servir con el pan.,normal
R122,Tostada de pavo asado con leche,desayuno;media_manana;merienda,308,25.3,6.0,36.9,EJEMPLO | bajo fibra base \u22643g; no garantiza raci\xF3n escalada,unico,1.62,pechuga de pavo asada,pan,gluten;l\xE1cteos,no,no,no,no,si,10,nuevo,"Pesar el pavo ya asado y servir sobre pan tostado, con la leche aparte.",normal
R123,Tostada de huevo duro y at\xFAn,desayuno;media_manana;merienda,272,19.4,7.7,30.2,EJEMPLO | bajo fibra base \u22643g; no garantiza raci\xF3n escalada,unico,1.62,huevo cocido,pan,gluten;huevo;pescado,no,no,pendiente_ficha,no,si,10,nuevo,Pesar huevo ya cocido y at\xFAn escurrido. Trocear y colocar sobre el pan.,normal
R124,Arroz con pollo y calabac\xEDn,comida;cena,574,40.4,14.7,66.4,EJEMPLO | bajo fibra base \u22643g; no garantiza raci\xF3n escalada,unico,1.84,pechuga de pollo,cereal,,no,no,si,pendiente_ficha,si,20,nuevo,Pesar arroz seco y pollo/calabac\xEDn crudos. Cocer el arroz; cocinar el pollo por completo y saltear calabac\xEDn con aceite.,normal
R125,Arroz con pavo y calabaza,comida;cena,577,42.2,12.8,70.7,EJEMPLO | bajo fibra base \u22643g; no garantiza raci\xF3n escalada,unico,1.54,pechuga de pavo,cereal,,no,no,si,pendiente_ficha,si,20,nuevo,Pesar arroz seco y pavo/calabaza crudos. Cocer arroz y asar pavo por completo con calabaza y aceite.,normal
R126,Arroz con bacalao y zanahoria,comida;cena,544,38.1,11.8,67.8,EJEMPLO | bajo fibra base \u22643g; no garantiza raci\xF3n escalada,unico,2.16,bacalao fresco,cereal,pescado,no,no,si,pendiente_ficha,si,20,nuevo,"Pesar arroz seco, bacalao fresco y zanahoria crudos. Cocer arroz y zanahoria; cocinar el pescado con aceite.",normal
R127,Pasta blanca con pollo y calabac\xEDn,comida;cena,501,42.3,15.0,46.7,EJEMPLO | bajo fibra base \u22643g; no garantiza raci\xF3n escalada,unico,2.52,pechuga de pollo,cereal,gluten,no,no,si,no,si,20,nuevo,Pesar pasta seca y pollo/calabac\xEDn crudos. Cocer pasta; cocinar pollo completamente y calabac\xEDn con aceite.,normal
R128,Arroz con tortilla y calabac\xEDn,comida;cena,548,21.7,20.2,67.3,EJEMPLO | bajo fibra base \u22643g; no garantiza raci\xF3n escalada,unico,1.84,huevo,cereal,huevo,si,no,si,pendiente_ficha,si,20,nuevo,"Pesar arroz seco y huevo/calabac\xEDn crudos. Cocer arroz, cuajar tortilla y cocinar calabac\xEDn con aceite.",normal
R129,Arroz con salm\xF3n y calabaza,comida;cena,674,37.3,25.8,70.5,EJEMPLO | bajo fibra base \u22643g; no garantiza raci\xF3n escalada,unico,1.54,salm\xF3n,cereal,pescado,no,no,si,pendiente_ficha,si,20,nuevo,Pesar arroz seco y salm\xF3n/calabaza crudos. Cocer arroz y hornear salm\xF3n y calabaza con aceite.,normal
R130,Arroz con ternera y champi\xF1\xF3n,comida;cena,592,32.2,20.8,66.6,EJEMPLO | bajo fibra base \u22643g; no garantiza raci\xF3n escalada,unico,1.84,ternera picada,cereal,,no,no,si,pendiente_ficha,si,20,nuevo,Pesar arroz seco y ternera/champi\xF1\xF3n crudos. Cocer arroz; saltear ternera y champi\xF1\xF3n con aceite.,normal
R131,Arroz con at\xFAn y calabac\xEDn,comida;cena,480,26.1,11.7,66.4,EJEMPLO | bajo fibra base \u22643g; no garantiza raci\xF3n escalada,unico,1.84,at\xFAn en lata,cereal,pescado,no,no,pendiente_ficha,pendiente_ficha,si,20,nuevo,"Pesar arroz seco, at\xFAn escurrido y calabac\xEDn crudo. Cocer arroz y cocinar calabac\xEDn con aceite; a\xF1adir at\xFAn al final.",normal
R132,"Avena con pl\xE1tano, huevo y almendra",desayuno;media_manana;merienda,384,16.0,13.6,52.5,EJEMPLO | fibraAlta,unico,7.89,huevo,cereal,frutos de c\xE1scara;gluten;huevo,si,no,si,no,no,15,nuevo,Cocer la avena en agua. Cocinar el huevo por completo aparte; servir con fruta lavada y frutos secos. Pesar avena seca y huevo crudo; fruta en porci\xF3n comestible.,normal
R133,"Avena con manzana, huevo y nueces",desayuno;media_manana;merienda,355,14.6,15.0,42.7,EJEMPLO | fibraAlta,unico,7.11,huevo,cereal,frutos de c\xE1scara;gluten;huevo,si,no,si,no,no,15,nuevo,Cocer la avena en agua. Cocinar el huevo por completo aparte; servir con fruta lavada y frutos secos. Pesar avena seca y huevo crudo; fruta en porci\xF3n comestible.,normal
R134,"Avena con pera, huevo y almendra",desayuno;media_manana;merienda,352,15.3,13.4,44.9,EJEMPLO | fibraAlta,unico,8.39,huevo,cereal,frutos de c\xE1scara;gluten;huevo,si,no,si,no,no,15,nuevo,Cocer la avena en agua. Cocinar el huevo por completo aparte; servir con fruta lavada y frutos secos. Pesar avena seca y huevo crudo; fruta en porci\xF3n comestible.,normal
R135,"Avena con fresas, huevo y nueces",desayuno;media_manana;merienda,335,15.0,15.1,36.6,EJEMPLO | fibraAlta,unico,6.71,huevo,cereal,frutos de c\xE1scara;gluten;huevo,si,no,si,no,no,15,nuevo,Cocer la avena en agua. Cocinar el huevo por completo aparte; servir con fruta lavada y frutos secos. Pesar avena seca y huevo crudo; fruta en porci\xF3n comestible.,normal
R136,"Tortilla con arroz, naranja y almendra",desayuno;media_manana;merienda,337,13.4,11.1,46.3,EJEMPLO | fibraAlta,unico,4.17,huevo,cereal,frutos de c\xE1scara;huevo,si,no,si,pendiente_ficha,no,15,nuevo,Cocer arroz pesado seco en agua. Cuajar bien el huevo en sart\xE9n antiadherente; servir con fruta y frutos secos. Huevo pesado crudo y fruta en porci\xF3n comestible.,normal
R137,"Arroz con huevo, pi\xF1a y nueces",desayuno;media_manana;merienda,347,12.5,12.6,46.9,EJEMPLO | fibra base \u22643g,unico,2.59,huevo,cereal,frutos de c\xE1scara;huevo,si,no,si,pendiente_ficha,si,15,nuevo,Cocer arroz pesado seco en agua. Cuajar bien el huevo en sart\xE9n antiadherente; servir con fruta y frutos secos. Huevo pesado crudo y fruta en porci\xF3n comestible.,normal
R138,"Arroz con huevo, kiwi y almendra",desayuno;media_manana;merienda,351,13.6,11.5,49.2,EJEMPLO | fibraAlta,unico,4.77,huevo,cereal,frutos de c\xE1scara;huevo,si,no,si,pendiente_ficha,no,15,nuevo,Cocer arroz pesado seco en agua. Cuajar bien el huevo en sart\xE9n antiadherente; servir con fruta y frutos secos. Huevo pesado crudo y fruta en porci\xF3n comestible.,normal
R139,"Arroz con huevo, mandarina y nueces",desayuno;media_manana;merienda,350,12.7,12.8,47.1,EJEMPLO | fibra base \u22643g,unico,2.99,huevo,cereal,frutos de c\xE1scara;huevo,si,no,si,pendiente_ficha,si,15,nuevo,Cocer arroz pesado seco en agua. Cuajar bien el huevo en sart\xE9n antiadherente; servir con fruta y frutos secos. Huevo pesado crudo y fruta en porci\xF3n comestible.,normal
R140,Arroz con huevo y pimientos,comida;cena,524,21.1,20.2,62.9,EJEMPLO | fibraAlta,unico,3.01,huevo,cereal,huevo,si,no,si,pendiente_ficha,no,30,nuevo,Cocer arroz seco; cocinar completamente huevo y pimientos crudos con aceite.,normal
R141,"Arroz con claras, huevo y calabaza",comida;cena,523,26.8,16.5,65.1,EJEMPLO | fibra base \u22643g,unico,1.51,huevo,cereal,huevo,si,no,si,pendiente_ficha,si,30,nuevo,"Cocer arroz seco. Asar calabaza y cuajar huevo y claras por completo con aceite; pesar huevo, claras y calabaza crudos.",normal
R142,Patata con tortilla y calabac\xEDn,comida;cena,473,21.6,22.0,48.3,EJEMPLO | fibraAlta,unico,6.45,huevo,patata,huevo,si,no,si,pendiente_ficha,no,30,nuevo,Lavar y cocer patata con piel (ficha con piel). Cocinar huevo y calabac\xEDn con aceite; pesos crudos.,normal
R143,Boniato con huevo y espinacas,comida;cena,481,21.5,21.9,50.8,EJEMPLO | fibraAlta,unico,9.10,huevo,patata,huevo,si,no,si,pendiente_ficha,no,30,nuevo,Cocer boniato y espinacas; cocinar completamente huevo con aceite. Pesar ingredientes crudos seg\xFAn ficha.,normal
R144,Lentejas con huevo y zanahoria,comida;cena,463,28.6,22.2,38.6,EJEMPLO | fibraAlta,unico,13.86,huevo,legumbre,huevo,si,no,si,pendiente_ficha,no,30,nuevo,"Pesar lentejas ya cocidas, huevo y zanahoria crudos. Cocinar zanahoria y huevo completamente, a\xF1adir lentejas y aceite.",normal
R145,Garbanzos con huevo y calabac\xEDn,comida;cena,544,29.7,24.5,53.2,EJEMPLO | fibraAlta,unico,14.68,huevo,legumbre,huevo,si,no,si,pendiente_ficha,no,30,nuevo,"Pesar garbanzos ya cocidos, huevo y calabac\xEDn crudos. Saltear calabac\xEDn, cocinar huevo por completo y a\xF1adir garbanzos y aceite.",normal
R146,Manzana con almendra,media_manana;merienda,136,2.5,5.2,22.9,EJEMPLO | fibraAlta,unico,4.85,,,frutos de c\xE1scara,si,si,si,pendiente_ficha,no,5,nuevo,"Lavar la manzana, cortarla en trozos y servir con las almendras. Listo en 2 min.",normal
R147,Pera con nueces,media_manana;merienda,145,2.0,6.7,22.7,EJEMPLO | fibraAlta,unico,5.01,,,frutos de c\xE1scara,si,si,si,pendiente_ficha,no,5,nuevo,"Lavar la pera, cortarla en trozos y servir con las nueces. Listo en 2 min.",normal
R148,Naranja con nueces,media_manana;merienda,136,2.9,6.7,19.0,EJEMPLO | fibraAlta,unico,4.27,,,frutos de c\xE1scara,si,si,si,pendiente_ficha,no,5,nuevo,"Pelar la naranja, cortarla en rodajas y servir con las nueces. Listo en 2 min.",normal
R149,Mandarina con almendra,media_manana;merienda,137,3.3,5.5,22.2,EJEMPLO | fibraAlta,unico,3.95,,,frutos de c\xE1scara,si,si,si,pendiente_ficha,no,5,nuevo,"Pelar la mandarina, separar los segmentos y servir con las almendras. Listo en 2 min.",normal
R150,Pi\xF1a con almendra,media_manana;merienda,133,2.9,5.2,21.8,EJEMPLO | fibraAlta,unico,3.35,,,frutos de c\xE1scara,si,si,si,pendiente_ficha,no,5,nuevo,Cortar la pi\xF1a en dados y servir con las almendras. Listo en 2 min.,normal
R151,Fresas con nueces,media_manana;merienda,126,2.8,8.3,13.2,EJEMPLO | fibraAlta,unico,3.80,,,frutos de c\xE1scara,si,si,si,pendiente_ficha,no,5,nuevo,"Lavar las fresas, cortarlas por la mitad y servir con las nueces. Listo en 2 min.",normal
R152,Kiwi con nueces,media_manana;merienda,139,2.9,7.1,19.0,EJEMPLO | fibraAlta,unico,4.27,,,frutos de c\xE1scara,si,si,si,pendiente_ficha,no,5,nuevo,"Pelar el kiwi, cortarlo en rodajas y servir con las nueces. Listo en 2 min.",normal
R153,Mel\xF3n con almendra,media_manana;merienda,131,4.0,6.3,17.3,EJEMPLO | fibraAlta,unico,3.12,,,frutos de c\xE1scara,si,si,si,pendiente_ficha,no,5,nuevo,Cortar el mel\xF3n en dados y servir con las almendras. Listo en 2 min.,normal
R154,Sand\xEDa con nueces,media_manana;merienda,119,2.6,6.8,15.0,EJEMPLO | fibra base \u22643g,unico,1.39,,,frutos de c\xE1scara,si,si,si,pendiente_ficha,si,5,nuevo,Cortar la sand\xEDa en dados y servir con las nueces. Listo en 2 min.,normal
R155,Yogur natural con unas fresas,media_manana;merienda,108,5.0,4.4,13.5,EJEMPLO | fibra base \u22643g,unico,2.00,,,l\xE1cteos,si,no,no,pendiente_ficha,si,5,nuevo,"Lavar las fresas, cortarlas y servir sobre el yogur. Listo en 2 min.",normal
R156,Yogur natural con kiwi,media_manana;merienda,125,5.2,4.5,17.6,EJEMPLO | fibra base \u22643g,unico,2.40,,,l\xE1cteos,si,no,no,pendiente_ficha,si,5,nuevo,"Pelar el kiwi, cortarlo y servir sobre el yogur. Listo en 2 min.",normal
R157,Yogur natural con manzana,media_manana;merienda,128,4.6,4.2,19.6,EJEMPLO | fibra base \u22643g,unico,2.40,,,l\xE1cteos,si,no,no,pendiente_ficha,si,5,nuevo,"Lavar la manzana, cortarla en dados y servir sobre el yogur. Listo en 2 min.",normal
R158,Yogur natural con pi\xF1a,media_manana;merienda,126,4.9,4.2,18.9,EJEMPLO | fibra base \u22643g,unico,1.40,,,l\xE1cteos,si,no,no,pendiente_ficha,si,5,nuevo,Cortar la pi\xF1a en dados y servir sobre el yogur. Listo en 2 min.,normal
R159,Huevo cocido con naranja,media_manana;merienda,124,7.2,5.4,12.3,EJEMPLO | fibra base \u22643g,unico,2.40,huevo cocido,,huevo,si,no,si,pendiente_ficha,si,5,nuevo,"Pelar el huevo cocido (pesado ya cocido y sin c\xE1scara), partirlo y servir con la naranja pelada en rodajas. Listo en 2 min.",normal
R160,Huevo cocido con fresas,media_manana;merienda,110,7.0,5.6,8.2,EJEMPLO | fibra base \u22643g,unico,2.00,huevo cocido,,huevo,si,no,si,pendiente_ficha,si,5,nuevo,"Pelar el huevo cocido (pesado ya cocido y sin c\xE1scara), partirlo y servir con las fresas lavadas. Listo en 2 min.",normal
R161,"Bol grande de avena, yogur, pl\xE1tano y nueces",desayuno;merienda,727,23.5,25.9,107.3,EJEMPLO | fibraAlta,unico,14.33,,cereal,frutos de c\xE1scara;gluten;l\xE1cteos,si,no,no,no,no,15,nuevo,"Cocer avena en agua o hidratarla; servir yogur, fruta y nueces. Pesar avena seca; fruta en porci\xF3n comestible.",normal
R162,"Bol grande de avena, yogur, manzana y nueces",desayuno;merienda,672,22.2,25.7,93.7,EJEMPLO | fibraAlta,unico,14.03,,cereal,frutos de c\xE1scara;gluten;l\xE1cteos,si,no,no,no,no,15,nuevo,"Cocer avena en agua o hidratarla; servir yogur, fruta y nueces. Pesar avena seca; fruta en porci\xF3n comestible.",normal
R163,"Bol grande de avena, yogur, pera y nueces",desayuno;merienda,679,22.4,25.6,95.8,EJEMPLO | fibraAlta,unico,15.08,,cereal,frutos de c\xE1scara;gluten;l\xE1cteos,si,no,no,no,no,15,nuevo,"Cocer avena en agua o hidratarla; servir yogur, fruta y nueces. Pesar avena seca; fruta en porci\xF3n comestible.",normal
R164,"Bol grande de avena, yogur, pi\xF1a y nueces",desayuno;merienda,669,22.6,25.6,92.7,EJEMPLO | fibraAlta,unico,12.53,,cereal,frutos de c\xE1scara;gluten;l\xE1cteos,si,no,no,no,no,15,nuevo,"Cocer avena en agua o hidratarla; servir yogur, fruta y nueces. Pesar avena seca; fruta en porci\xF3n comestible.",normal
R165,"Tostadas grandes con huevo, pl\xE1tano y almendra",desayuno;merienda,694,34.8,23.6,89.6,EJEMPLO | fibraAlta,unico,12.97,huevo,pan,frutos de c\xE1scara;gluten;huevo,si,no,pendiente_ficha,no,no,15,nuevo,Tostar pan y cocinar bien el huevo en sart\xE9n antiadherente; servir fruta y almendra. Huevo pesado crudo.,normal
R166,"Tostadas grandes con huevo, manzana y almendra",desayuno;merienda,639,33.6,23.4,76.1,EJEMPLO | fibraAlta,unico,12.68,huevo,pan,frutos de c\xE1scara;gluten;huevo,si,no,pendiente_ficha,no,no,15,nuevo,Tostar pan y cocinar bien el huevo en sart\xE9n antiadherente; servir fruta y almendra. Huevo pesado crudo.,normal
R167,"Tostadas grandes con huevo, pera y almendra",desayuno;merienda,646,33.7,23.3,78.2,EJEMPLO | fibraAlta,unico,13.73,huevo,pan,frutos de c\xE1scara;gluten;huevo,si,no,pendiente_ficha,no,no,15,nuevo,Tostar pan y cocinar bien el huevo en sart\xE9n antiadherente; servir fruta y almendra. Huevo pesado crudo.,normal
R168,"Tostadas grandes con huevo, naranja y almendra",desayuno;merienda,631,34.6,23.3,73.0,EJEMPLO | fibraAlta,unico,12.68,huevo,pan,frutos de c\xE1scara;gluten;huevo,si,no,pendiente_ficha,no,no,15,nuevo,Tostar pan y cocinar bien el huevo en sart\xE9n antiadherente; servir fruta y almendra. Huevo pesado crudo.,normal
R169,"Arroz con leche, pl\xE1tano y nueces (raci\xF3n grande)",desayuno;merienda,754,20.1,19.1,129.0,EJEMPLO | fibraAlta,unico,6.54,,cereal,frutos de c\xE1scara;l\xE1cteos,si,no,no,pendiente_ficha,no,15,nuevo,Cocer arroz pesado seco en leche y agua hasta quedar hecho; servir fruta y nueces aparte. No a\xF1adir az\xFAcar fuera de la ficha.,normal
R170,"Arroz con leche, pera y nueces (raci\xF3n grande)",desayuno;merienda,706,19.0,18.9,117.5,EJEMPLO | fibraAlta,unico,7.29,,cereal,frutos de c\xE1scara;l\xE1cteos,si,no,no,pendiente_ficha,no,15,nuevo,Cocer arroz pesado seco en leche y agua hasta quedar hecho; servir fruta y nueces aparte. No a\xF1adir az\xFAcar fuera de la ficha.,normal
R171,"Arroz con leche, pi\xF1a y nueces (raci\xF3n grande)",desayuno;merienda,696,19.2,18.8,114.4,EJEMPLO | fibraAlta,unico,4.74,,cereal,frutos de c\xE1scara;l\xE1cteos,si,no,no,pendiente_ficha,no,15,nuevo,Cocer arroz pesado seco en leche y agua hasta quedar hecho; servir fruta y nueces aparte. No a\xF1adir az\xFAcar fuera de la ficha.,normal
R172,"Arroz con leche, mandarina y nueces (raci\xF3n grande)",desayuno;merienda,700,19.6,19.1,114.7,EJEMPLO | fibraAlta,unico,5.34,,cereal,frutos de c\xE1scara;l\xE1cteos,si,no,no,pendiente_ficha,no,15,nuevo,Cocer arroz pesado seco en leche y agua hasta quedar hecho; servir fruta y nueces aparte. No a\xF1adir az\xFAcar fuera de la ficha.,normal
R173,Manzana con nueces (acompa\xF1amiento),comida;cena,128,1.8,6.7,17.9,EJEMPLO | fibraAlta,postre,3.55,,,frutos de c\xE1scara,si,si,si,pendiente_ficha,no,5,nuevo,"Lavar la manzana, cortarla y servir con las nueces. Listo en 2 min.",normal
R174,Pera con almendra (acompa\xF1amiento),comida;cena,126,2.5,5.2,20.4,EJEMPLO | fibraAlta,postre,4.97,,,frutos de c\xE1scara,si,si,si,pendiente_ficha,no,5,nuevo,"Lavar la pera, cortarla y servir con las almendras. Listo en 2 min.",normal
R175,Pi\xF1a con yogur (acompa\xF1amiento),comida;cena,126,4.9,4.2,18.9,EJEMPLO | fibra base \u22643g,postre,1.40,,,l\xE1cteos,si,no,no,pendiente_ficha,si,5,nuevo,Cortar la pi\xF1a en dados y servir sobre el yogur. Listo en 2 min.,normal
R176,Kiwi con yogur (acompa\xF1amiento),comida;cena,137,5.5,4.6,20.5,EJEMPLO | fibra base \u22643g,postre,3.00,,,l\xE1cteos,si,no,no,pendiente_ficha,si,5,nuevo,"Pelar el kiwi, cortarlo y servir sobre el yogur. Listo en 2 min.",normal
R177,Fresas con yogur (acompa\xF1amiento),comida;cena,124,5.3,4.5,17.3,EJEMPLO | fibra base \u22643g,postre,3.00,,,l\xE1cteos,si,no,no,pendiente_ficha,si,5,nuevo,"Lavar las fresas, cortarlas y servir sobre el yogur. Listo en 2 min.",normal
R178,Mel\xF3n con yogur (acompa\xF1amiento),comida;cena,127,5.6,4.3,18.1,EJEMPLO | fibra base \u22643g,postre,1.35,,,l\xE1cteos,si,no,no,pendiente_ficha,si,5,nuevo,Cortar el mel\xF3n en dados y servir sobre el yogur. Listo en 2 min.,normal
R179,Mandarina con yogur (acompa\xF1amiento),comida;cena,129,5.1,4.4,19.2,EJEMPLO | fibra base \u22643g,postre,1.80,,,l\xE1cteos,si,no,no,pendiente_ficha,si,5,nuevo,"Pelar la mandarina, separar los segmentos y servir sobre el yogur. Listo en 2 min.",normal
R180,Yogur con cacao puro (acompa\xF1amiento),comida;cena,88,5.3,4.7,8.7,EJEMPLO | fibra base \u22643g,postre,1.85,,,l\xE1cteos,si,no,no,pendiente_ficha,si,5,nuevo,Mezclar el yogur con el cacao puro hasta integrarlo. Listo en 2 min.,normal
R181,Yogur con miel (acompa\xF1amiento),comida;cena,107,4.4,4.1,14.1,EJEMPLO | fibra base \u22643g,postre,0.02,,,l\xE1cteos,si,no,no,pendiente_ficha,si,5,nuevo,Servir el yogur con la miel por encima. Listo en 2 min.,normal
R182,Tostada blanca con aceite (acompa\xF1amiento),comida;cena,151,3.5,6.3,19.8,EJEMPLO | fibra base \u22643g,postre,1.08,,pan,gluten,si,pendiente_ficha,pendiente_ficha,no,si,5,nuevo,Tostar el pan (2-3 min) y repartir el aceite por encima.,normal
R183,Tostada integral con tomate y aceite (acompa\xF1amiento),comida;cena,156,5.5,6.5,19.4,EJEMPLO | fibraAlta,postre,3.12,,pan,gluten,si,pendiente_ficha,pendiente_ficha,no,no,5,nuevo,Servir ingredientes pesados tal cual o fruta en porci\xF3n comestible. Tostar pan si corresponde; repartir tomate lavado y aceite sin a\xF1adir otros ingredientes.,normal
R184,Almendras y nueces (acompa\xF1amiento),comida;cena,123,3.6,11.5,3.5,EJEMPLO | fibra base \u22643g,postre,1.92,,,frutos de c\xE1scara,si,si,si,pendiente_ficha,si,5,nuevo,Servir las almendras y las nueces pesadas tal cual. Sin preparaci\xF3n.,normal
R300,Avena cocida en bebida de soja con pl\xE1tano y canela,desayuno;media_manana;merienda,354,13.0,6.5,64.1,EJEMPLO,unico,8.90,copos de avena,avena,gluten;soja,si,si,si,no,no,10,nuevo,Cocer la avena en la bebida de soja. Servir con el pl\xE1tano en rodajas y la canela. Pesar la avena seca y la fruta en porci\xF3n comestible.,normal
R301,"Avena con manzana, nueces y bebida de soja",desayuno;media_manana;merienda,410,14.3,16.1,55.5,EJEMPLO,unico,8.64,copos de avena,avena,frutos de c\xE1scara;gluten;soja,si,si,si,no,no,10,nuevo,Cocer la avena en la bebida de soja y servir con la manzana y las nueces. Pesar la avena seca y la fruta en porci\xF3n comestible.,normal
R302,Tostada integral de hummus y tomate con yogur de soja,desayuno;media_manana;merienda,394,16.3,15.2,50.6,EJEMPLO,unico,8.60,hummus,pan,gluten;soja;s\xE9samo,si,si,si,no,no,10,nuevo,"Tostar el pan, untar el hummus y cubrir con el tomate rallado. Servir con el yogur de soja.",normal
R303,Pan integral con crema de cacahuete y pl\xE1tano,desayuno;media_manana;merienda,385,14.2,13.1,57.2,EJEMPLO,unico,7.80,crema de cacahuete,pan,cacahuete;gluten,si,si,si,no,no,5,nuevo,"Tostar el pan, untar la crema de cacahuete y cubrir con el pl\xE1tano en rodajas.",normal
R304,"Yogur de soja con avena, fresas y almendra",desayuno;media_manana;merienda,416,15.0,14.5,58.8,EJEMPLO,unico,8.41,yogur de soja,avena,frutos de c\xE1scara;gluten;soja,si,si,si,no,no,5,nuevo,Mezclar el yogur con la avena y dejar reposar 10 minutos; servir con las fresas y la almendra picada.,normal
R305,"Yogur de soja con kiwi, nueces y copos de avena",desayuno;media_manana;merienda,457,14.6,17.0,64.6,EJEMPLO,unico,8.54,yogur de soja,avena,frutos de c\xE1scara;gluten;soja,si,si,si,no,no,5,nuevo,Mezclar el yogur con la avena y servir con el kiwi y las nueces.,normal
R306,Avena cocida en bebida de soja con pera y almendra,desayuno;media_manana;merienda,403,15.3,13.7,58.1,EJEMPLO,unico,10.21,copos de avena,avena,frutos de c\xE1scara;gluten;soja,si,si,si,no,no,10,nuevo,Cocer la avena en la bebida de soja y servir con la pera y la almendra picada.,normal
R307,Tostada integral de aguacate y tomate con yogur de soja,desayuno;media_manana;merienda,332,12.6,11.8,45.9,EJEMPLO,unico,8.65,yogur de soja,pan,gluten;soja,si,si,si,no,no,10,nuevo,Tostar el pan y cubrir con el aguacate y el tomate. Servir con el yogur de soja.,normal
R308,"Avena con mandarina, yogur de soja y canela",desayuno;media_manana;merienda,366,12.3,7.1,65.5,EJEMPLO,unico,7.76,yogur de soja,avena,gluten;soja,si,si,si,no,no,5,nuevo,"Mezclar el yogur con la avena, servir con la mandarina en gajos y la canela.",normal
R309,Tostada integral de hummus y pepino con naranja,desayuno;media_manana;merienda,355,13.4,11.3,54.4,EJEMPLO,unico,10.45,hummus,pan,gluten;s\xE9samo,si,si,si,no,no,5,nuevo,"Tostar el pan, untar el hummus y cubrir con el pepino en rodajas. Servir con la naranja.",normal
R310,"Yogur de soja con pl\xE1tano, cacao y crema de cacahuete",desayuno;media_manana;merienda,362,12.6,13.5,55.0,EJEMPLO,unico,7.31,yogur de soja,,cacahuete;soja,si,si,si,pendiente_ficha,no,5,nuevo,Mezclar el yogur con el cacao y servir con el pl\xE1tano y la crema de cacahuete.,normal
R311,Tostada integral de tempeh a la plancha con tomate,desayuno;media_manana;merienda,329,20.5,13.8,34.1,EJEMPLO,unico,4.80,tempeh,pan,gluten;soja,si,si,si,no,si,15,nuevo,"Dorar el tempeh en rodajas en la plancha. Tostar el pan, cubrir con el tomate rallado y el tempeh.",normal
R312,Salteado de tofu con br\xF3coli y arroz,comida;cena,582,34.7,24.1,63.8,EJEMPLO,unico,8.24,tofu firme,cereal,soja,si,si,si,pendiente_ficha,no,25,nuevo,Cocer el arroz. Saltear el tofu en dados con el br\xF3coli y el ajo; servir sobre el arroz. Pesar el arroz en seco.,normal
R313,Salteado de tempeh con pimiento y arroz,comida;cena,609,31.0,23.9,73.7,EJEMPLO,unico,5.29,tempeh,cereal,soja,si,si,si,pendiente_ficha,si,25,nuevo,Cocer el arroz. Saltear el tempeh en tiras con el pimiento y la cebolla; servir sobre el arroz. Pesar el arroz en seco.,normal
R314,Lentejas estofadas con zanahoria y tomate,comida;cena,409,20.8,11.4,60.6,EJEMPLO | fibraAlta,unico,22.47,lenteja cocida,legumbre,,si,si,si,pendiente_ficha,no,40,nuevo,Sofre\xEDr la cebolla y la zanahoria (5 min a fuego medio); a\xF1adir la lenteja cocida y el tomate triturado y cocer 15 minutos. Pesar la lenteja ya cocida.,normal
R315,Garbanzos con espinacas al comino,comida;cena,442,21.4,15.9,59.2,EJEMPLO | fibraAlta,unico,19.09,garbanzo cocido,legumbre,,si,si,si,pendiente_ficha,no,25,nuevo,"Rehogar las espinacas (2-3 min), a\xF1adir el garbanzo cocido con el comino y cocer 10 minutos. Pesar el garbanzo ya cocido.",normal
R316,Tofu a la plancha con boniato asado y jud\xEDa verde,comida;cena,523,31.8,23.5,54.9,EJEMPLO,unico,13.50,tofu firme,patata,soja,si,si,si,pendiente_ficha,no,40,nuevo,Asar el boniato. Cocer la jud\xEDa verde y hacer el tofu a la plancha con el aceite.,normal
R317,"Tempeh con calabac\xEDn, tomate y patata",comida;cena,555,32.2,23.9,61.4,EJEMPLO,unico,7.95,tempeh,patata,soja,si,si,si,pendiente_ficha,no,35,nuevo,Cocer la patata. Saltear el tempeh con el calabac\xEDn y terminar con el tomate; servir con la patata.,normal
R318,Salteado de soja texturizada con pimiento y arroz,comida;cena,533,32.2,11.3,79.4,EJEMPLO,unico,13.44,soja texturizada,cereal,soja,si,si,si,pendiente_ficha,no,25,nuevo,Hidratar la soja texturizada. Cocer el arroz y saltear la soja con el pimiento y la cebolla; servir sobre el arroz. Pesar la soja y el arroz en seco.,normal
R319,"Ensalada templada de lenteja, tomate y aguacate",comida;cena,433,20.6,18.4,52.0,EJEMPLO | fibraAlta,unico,20.85,lenteja cocida,legumbre,,si,si,si,pendiente_ficha,no,15,nuevo,Mezclar la lenteja cocida con el tomate y el pepino; ali\xF1ar con el aceite y servir con el aguacate. Listo en 5 min. Pesar la lenteja ya cocida.,normal
R321,Revuelto de tofu con champi\xF1\xF3n y pan integral,comida;cena,539,43.5,28.3,37.2,EJEMPLO,unico,9.35,tofu firme,pan,gluten;soja,si,si,si,no,no,20,nuevo,"Dorar el champi\xF1\xF3n con el ajo, a\xF1adir el tofu desmigado y cocinar 5 minutos; servir con el pan tostado.",normal
R322,Alubia blanca guisada con pimiento y tomate,comida;cena,440,22.3,11.4,67.0,EJEMPLO | fibraAlta,unico,18.57,alubia blanca cocida,legumbre,,si,si,si,pendiente_ficha,no,30,nuevo,"Sofre\xEDr el pimiento y la cebolla, a\xF1adir la alubia cocida y el tomate triturado; cocer 15 minutos. Pesar la alubia ya cocida.",normal
R323,Guiso de soja texturizada con patata y guisantes,comida;cena,541,37.1,11.5,78.6,EJEMPLO | fibraAlta,unico,21.60,soja texturizada,patata,soja,si,si,si,pendiente_ficha,no,35,nuevo,Hidratar la soja texturizada (15 min). Cocer la patata con el tomate triturado (20 min); a\xF1adir la soja y los guisantes y cocer 5 minutos m\xE1s. Pesar la soja en seco.,normal
R324,Quinoa con verduras asadas y tofu,comida;cena,577,37.2,27.5,53.4,EJEMPLO | fibraAlta,unico,11.25,tofu firme,cereal,soja,si,si,si,pendiente_ficha,no,30,nuevo,Cocer la quinoa (12 min). Asar el pimiento y el calabac\xEDn (20 min a 200 \xBAC); dorar el tofu (5 min) y servir todo sobre la quinoa. Pesar la quinoa en seco.,normal
R325,Puchero vegano de garbanzos y verduras,comida;cena,511,19.7,15.3,78.9,EJEMPLO | fibraAlta,unico,20.78,garbanzo cocido,legumbre,,si,si,si,pendiente_ficha,no,60,nuevo,Cocer la zanahoria y el puerro (15 min); a\xF1adir el garbanzo cocido y el repollo al final (5 min) y terminar con el aceite al servir. Pesar el garbanzo ya cocido.,normal
R326,Pasta con soja texturizada al tomate,comida;cena,576,37.3,12.2,83.6,EJEMPLO,unico,16.15,soja texturizada,cereal,gluten;soja,si,si,si,no,no,25,nuevo,"Hidratar la soja texturizada (15 min). Cocer la pasta en seco pesada (10-12 min). Sofre\xEDr la cebolla (5 min), a\xF1adir la soja y el tomate triturado (10 min); mezclar con la pasta.",normal
R327,Arroz con verduras y tofu a la plancha,comida;cena,631,36.0,24.3,74.7,EJEMPLO,unico,9.96,tofu firme,cereal,soja,si,si,si,pendiente_ficha,no,30,nuevo,Cocer el arroz con el piment\xF3n. Saltear el br\xF3coli y el pimiento y hacer el tofu a la plancha; servir junto. Pesar el arroz en seco.,normal
R328,"Quinoa con tempeh, berenjena y tomate",comida;cena,608,35.7,27.2,63.3,EJEMPLO,unico,11.40,tempeh,cereal,soja,si,si,si,pendiente_ficha,no,30,nuevo,"Cocer la quinoa. Saltear la berenjena y el tempeh en dados, a\xF1adir el tomate al final; servir sobre la quinoa. Pesar la quinoa en seco.",normal
R329,Alubia roja guisada con verduras,comida;cena,433,20.4,11.9,66.4,EJEMPLO | fibraAlta,unico,22.55,alubia roja cocida,legumbre,,si,si,si,pendiente_ficha,no,30,nuevo,"Sofre\xEDr la zanahoria y el pimiento (5 min a fuego medio), a\xF1adir la alubia cocida y el tomate triturado; cocer 15 minutos. Pesar la alubia ya cocida.",normal
R330,"Pasta con berenjena, tomate y almendra",comida;cena,509,15.4,19.3,72.5,EJEMPLO,unico,12.96,pasta,cereal,frutos de c\xE1scara;gluten,si,si,si,no,no,30,nuevo,"Cocer la pasta (10-12 min). Saltear la berenjena (8 min), a\xF1adir el tomate triturado (10 min); mezclar con la pasta y coronar con la almendra picada. Pesar la pasta en seco.",normal
R331,Patata asada con ensalada y tofu marinado,comida;cena,565,34.0,23.7,62.8,EJEMPLO,unico,11.99,tofu firme,patata,soja,si,si,si,pendiente_ficha,no,45,nuevo,Asar la patata (40 min a 200 \xBAC). Marinar el tofu en parte del aceite (10 min) y dorarlo a la plancha (5 min); servir con la lechuga y el tomate ali\xF1ados.,normal
R332,Yogur de soja con nueces y manzana,media_manana;merienda,282,7.8,13.5,35.2,EJEMPLO,unico,4.21,yogur de soja,,frutos de c\xE1scara;soja,si,si,si,pendiente_ficha,si,5,nuevo,Mezclar el yogur con la manzana en dados y las nueces.,normal
R333,Hummus con zanahoria y pepino,media_manana;merienda,198,6.2,11.0,22.2,EJEMPLO | fibraAlta,unico,6.60,hummus,legumbre,s\xE9samo,si,si,si,pendiente_ficha,no,5,nuevo,Bastones de zanahoria y pepino con el hummus.,normal
R334,Media tostada integral con crema de cacahuete y pl\xE1tano,media_manana;merienda,287,10.4,9.7,43.0,EJEMPLO,unico,5.83,crema de cacahuete,pan,cacahuete;gluten,si,si,si,no,si,5,nuevo,Untar el pan con la crema de cacahuete y cubrir con el pl\xE1tano en rodajas.,normal
R335,Yogur de soja con fresas y almendra,media_manana;merienda,222,8.1,8.8,29.2,EJEMPLO,unico,4.05,yogur de soja,,frutos de c\xE1scara;soja,si,si,si,pendiente_ficha,si,5,nuevo,Servir el yogur con las fresas y la almendra picada.,normal
R336,Tostada integral con tomate y aceite,media_manana;merienda,188,7.1,7.0,25.2,EJEMPLO,unico,4.20,pan integral,pan,gluten,si,si,si,no,si,5,nuevo,Tostar el pan y cubrir con el tomate rallado y el aceite.,normal
R337,Pera con nueces y yogur de soja,media_manana;merienda,287,7.9,13.4,36.7,EJEMPLO,unico,4.91,yogur de soja,,frutos de c\xE1scara;soja,si,si,si,pendiente_ficha,si,5,nuevo,Servir el yogur con la pera en dados y las nueces.,normal
R340,Tostada integral con tomate y aceite y una naranja,desayuno;media_manana;merienda,296,8.2,12.1,41.3,EJEMPLO | fibraAlta,unico,7.32,aceite de oliva,pan,gluten,si,pendiente_ficha,si,no,no,10,nuevo,"Tostar el pan, untar el tomate y a\xF1adir el aceite. La naranja entera, pelada. Pesar el pan tal cual y la fruta en porci\xF3n comestible.",normal
R341,Bocadillo integral de pavo con tomate y un pl\xE1tano,desayuno;media_manana;merienda,465,33.4,5.5,72.2,EJEMPLO | fibraAlta,unico,9.92,pechuga de pavo asada,pan,gluten,no,no,si,no,no,10,nuevo,"Abrir el pan, poner el pavo y el tomate en rodajas. El pl\xE1tano de postre. Pesar el pan tal cual y la fruta en porci\xF3n comestible.",normal
R342,Avena cocida en bebida de soja con pera y canela,desayuno;media_manana;merienda,350,12.4,6.3,64.1,EJEMPLO | fibraAlta,unico,10.95,bebida de soja,avena,gluten;soja,si,pendiente_ficha,si,no,no,10,nuevo,Cocer la avena en la bebida de soja. Servir con la pera en dados y la canela. Pesar la avena seca y la fruta en porci\xF3n comestible.,normal
R343,Avena con compota de manzana y semillas de calabaza,desayuno;media_manana;merienda,461,19.1,14.9,66.1,EJEMPLO | fibraAlta,unico,9.26,bebida de soja,avena,gluten;soja,si,pendiente_ficha,si,no,no,10,nuevo,Cocer la avena en la bebida de soja. Servir con la compota y las semillas por encima. Pesar la avena seca.,normal
R344,Tostada integral de at\xFAn y tomate con una mandarina,desayuno;media_manana;merienda,277,18.3,2.9,47.7,EJEMPLO | fibraAlta,unico,6.96,at\xFAn en lata,pan,gluten;pescado,no,no,si,no,no,10,nuevo,"Tostar el pan, untar el tomate y poner el at\xFAn escurrido. La mandarina de postre. Pesar el at\xFAn escurrido.",normal
R345,Pan integral con hummus y tomate y un kiwi,desayuno;media_manana;merienda,453,17.8,14.6,67.4,EJEMPLO | fibraAlta,unico,13.02,hummus,pan,gluten;s\xE9samo,si,pendiente_ficha,si,no,no,10,nuevo,Untar el hummus en el pan y a\xF1adir el tomate en rodajas. El kiwi de postre. Pesar el pan tal cual.,normal
R346,"Yogur de soja con avena, fresas y semillas de girasol",desayuno;media_manana;merienda,476,16.6,15.3,71.1,EJEMPLO | fibraAlta,unico,10.64,yogur de soja,avena,gluten;soja,si,pendiente_ficha,si,no,no,5,nuevo,Mezclar el yogur con la avena y dejar reposar 5 minutos. A\xF1adir las fresas y las semillas. Pesar la avena seca.,normal
R347,"Tostada integral con aguacate, tomate y pavo",desayuno;media_manana;merienda,274,19.7,10.0,27.6,EJEMPLO | fibraAlta,unico,6.95,pechuga de pavo asada,pan,gluten,no,no,si,no,no,10,nuevo,"Tostar el pan, untar el aguacate y cubrir con el tomate y el pavo. Pesar el pan tal cual y el aguacate en porci\xF3n comestible.",normal
R348,Bocadillo de pan blanco con pavo y tomate y un mel\xF3n,desayuno;media_manana;merienda,322,23.0,3.8,49.2,EJEMPLO,unico,3.96,pechuga de pavo asada,pan,gluten,no,no,si,no,si,10,nuevo,"Abrir el pan, poner el pavo y el tomate. El mel\xF3n de postre. Pesar el pan tal cual y la fruta en porci\xF3n comestible.",normal
R349,"Avena con pl\xE1tano, cacao y bebida de soja",desayuno;media_manana;merienda,462,17.7,9.2,84.0,EJEMPLO | fibraAlta,unico,13.32,bebida de soja,avena,gluten;soja,si,pendiente_ficha,si,no,no,10,nuevo,Cocer la avena en la bebida de soja con el cacao. Servir con el pl\xE1tano en rodajas. Pesar la avena seca y la fruta en porci\xF3n comestible.,normal
R350,Tostada de sardina con tomate y una naranja,desayuno;media_manana;merienda,470,34.1,13.4,54.1,EJEMPLO | fibraAlta,unico,9.12,sardina en lata,pan,gluten;pescado,no,no,si,no,no,10,nuevo,"Tostar el pan, untar el tomate y poner las sardinas escurridas. La naranja de postre. Pesar las sardinas escurridas.",normal
R351,Yogur de soja con mel\xF3n y copos de avena,desayuno;media_manana;merienda,314,10.9,5.9,56.0,EJEMPLO,unico,5.63,yogur de soja,avena,gluten;soja,si,pendiente_ficha,si,no,si,5,nuevo,Servir el yogur con el mel\xF3n en dados y la avena por encima. Pesar la avena seca.,normal
R352,Tostada integral con pavo y tomate,media_manana;merienda,208,21.7,2.9,23.3,EJEMPLO | fibraAlta,unico,3.60,pechuga de pavo asada,pan,gluten,no,no,si,no,no,5,nuevo,"Tostar el pan, untar el tomate y poner el pavo. Pesar el pan tal cual.",normal
R353,Yogur de soja con fresas y semillas de girasol,media_manana;merienda,268,9.4,11.7,33.9,EJEMPLO,unico,5.09,yogur de soja,,soja,si,pendiente_ficha,si,pendiente_ficha,si,5,nuevo,Servir el yogur con las fresas y las semillas por encima.,normal
R354,Pan integral con hummus y pepino,media_manana;merienda,203,8.4,8.6,24.9,EJEMPLO | fibraAlta,unico,4.85,hummus,pan,gluten;s\xE9samo,si,pendiente_ficha,si,no,no,5,nuevo,Untar el hummus en el pan y a\xF1adir el pepino en rodajas. Pesar el pan tal cual.,normal
R355,Tostada blanca con tomate y aceite y una manzana,media_manana;merienda,211,3.5,6.4,37.5,EJEMPLO,unico,5.01,tomate,pan,gluten,si,pendiente_ficha,si,no,si,5,nuevo,"Tostar el pan, untar el tomate y a\xF1adir el aceite. La manzana entera. Pesar la fruta en porci\xF3n comestible.",normal
R356,Mini bocadillo de at\xFAn con tomate,media_manana;merienda,180,16.8,2.3,23.3,EJEMPLO | fibraAlta,unico,3.60,at\xFAn en lata,pan,gluten;pescado,no,no,si,no,no,5,nuevo,"Abrir el pan, untar el tomate y poner el at\xFAn escurrido. Pesar el at\xFAn escurrido.",normal
R357,Pera con yogur de soja y canela,media_manana;merienda,173,3.9,2.4,36.6,EJEMPLO,unico,6.21,yogur de soja,,soja,si,pendiente_ficha,si,pendiente_ficha,no,5,nuevo,Servir la pera en dados con el yogur y la canela. Pesar la fruta en porci\xF3n comestible.,normal
R358,Pan integral con aguacate y tomate,media_manana;merienda,190,6.4,8.8,23.3,EJEMPLO | fibraAlta,unico,6.35,aguacate,pan,gluten,si,pendiente_ficha,si,no,no,5,nuevo,Untar el aguacate en el pan y a\xF1adir el tomate. Pesar el pan tal cual y el aguacate en porci\xF3n comestible.,normal
R359,Tostada integral con compota de manzana y canela,media_manana;merienda,181,6.5,1.9,36.5,EJEMPLO | fibraAlta,unico,5.38,compota de manzana,pan,gluten,si,pendiente_ficha,si,no,no,5,nuevo,Tostar el pan y untar la compota con la canela. Pesar el pan tal cual.,normal
R380,Avena cocida en bebida de soja con manzana y canela,desayuno;media_manana;merienda,343,12.3,6.4,62.0,EJEMPLO | fibraAlta,unico,9.90,bebida de soja,avena,gluten;soja,si,si,si,no,no,10,nuevo,Cocer la avena en la bebida de soja. Servir con la manzana en dados y la canela. Pesar la avena seca y la fruta en porci\xF3n comestible.,normal
R381,Tostada integral de tofu a la plancha con tomate,desayuno;media_manana;merienda,296,20.6,13.8,25.9,EJEMPLO | fibraAlta,unico,5.56,tofu firme,pan,gluten;soja,si,si,si,no,no,15,nuevo,Hacer el tofu a la plancha y ponerlo sobre la tostada con el tomate y el aceite. Pesar el pan tal cual.,normal
R382,"Yogur de soja con kiwi, avena y semillas de calabaza",desayuno;media_manana;merienda,441,16.4,14.1,65.7,EJEMPLO | fibraAlta,unico,9.34,yogur de soja,avena,gluten;soja,si,si,si,no,no,5,nuevo,"Servir el yogur con el kiwi, la avena y las semillas por encima. Pesar la avena seca.",normal
R383,Bocadillo integral de tempeh con pimiento,desayuno;media_manana;merienda,415,26.8,16.6,43.9,EJEMPLO | fibraAlta,unico,6.06,tempeh,pan,gluten;soja,si,si,si,no,no,15,nuevo,Hacer el tempeh a la plancha con el pimiento y rellenar el bocadillo con el aceite. Pesar el pan tal cual.,normal
R384,"Avena con pera, yogur de soja y semillas de girasol",desayuno;media_manana;merienda,457,14.2,14.1,72.3,EJEMPLO | fibraAlta,unico,10.78,yogur de soja,avena,gluten;soja,si,si,si,no,no,5,nuevo,Mezclar la avena con el yogur y servir con la pera y las semillas. Pesar la avena seca y la fruta en porci\xF3n comestible.,normal
R385,"Tostada integral con hummus, aguacate y tomate",desayuno;media_manana;merienda,294,10.6,14.8,32.7,EJEMPLO | fibraAlta,unico,8.48,hummus,pan,gluten;s\xE9samo,si,si,si,no,no,10,nuevo,Untar el hummus y el aguacate en la tostada y cubrir con el tomate. Pesar el pan tal cual y el aguacate en porci\xF3n comestible.,normal
R386,"Avena con fresas, bebida de soja y semillas de girasol",desayuno;media_manana;merienda,404,16.2,12.4,59.9,EJEMPLO | fibraAlta,unico,10.11,bebida de soja,avena,gluten;soja,si,si,si,no,no,10,nuevo,Cocer la avena en la bebida de soja. Servir con las fresas y las semillas. Pesar la avena seca.,normal
R387,"Yogur de soja con mel\xF3n, avena y semillas de calabaza",desayuno;media_manana;merienda,370,13.9,10.8,57.1,EJEMPLO,unico,6.23,yogur de soja,avena,gluten;soja,si,si,si,no,no,5,nuevo,"Servir el yogur con el mel\xF3n en dados, la avena y las semillas. Pesar la avena seca.",normal
R388,Pan integral con hummus y tomate,media_manana;merienda,156,6.5,6.5,19.3,EJEMPLO | fibraAlta,unico,4.05,hummus,pan,gluten;s\xE9samo,si,si,si,no,no,5,nuevo,Untar el hummus en el pan y a\xF1adir el tomate. Pesar el pan tal cual.,normal
R389,Yogur de soja con mandarina y semillas de girasol,media_manana;merienda,204,6.4,7.7,30.1,EJEMPLO,unico,3.52,yogur de soja,,soja,si,si,si,pendiente_ficha,si,5,nuevo,Servir el yogur con la mandarina en gajos y las semillas.,normal
R390,Tostada integral con aguacate y pepino,media_manana;merienda,147,4.9,7.0,18.0,EJEMPLO | fibraAlta,unico,4.73,aguacate,pan,gluten,si,si,si,no,no,5,nuevo,Untar el aguacate en la tostada y cubrir con el pepino. Pesar el pan tal cual y el aguacate en porci\xF3n comestible.,normal
R391,Manzana con yogur de soja y canela,media_manana;merienda,165,3.8,2.5,34.4,EJEMPLO,unico,5.16,yogur de soja,,soja,si,si,si,pendiente_ficha,si,5,nuevo,Servir la manzana en dados con el yogur y la canela. Pesar la fruta en porci\xF3n comestible.,normal
R392,Tostada integral con tomate y semillas de calabaza,media_manana;merienda,186,7.3,11.1,16.2,EJEMPLO | fibraAlta,unico,3.12,tomate,pan,gluten,si,si,si,no,no,5,nuevo,"Tostar el pan, untar el tomate, a\xF1adir el aceite y las semillas. Pesar el pan tal cual.",normal
R393,Bocadillo peque\xF1o de tofu con tomate,media_manana;merienda,196,15.8,6.7,20.7,EJEMPLO | fibraAlta,unico,4.38,tofu firme,pan,gluten;soja,si,si,si,no,no,5,nuevo,Rellenar el pan con el tofu a la plancha y el tomate. Pesar el pan tal cual.,normal
R394,Lentejas cocidas con arroz y tomate,comida;cena,564,23.5,11.5,94.1,EJEMPLO | fibraAlta | doble_base | carga,unico,20.88,lenteja cocida,legumbre;cereal,,si,si,si,pendiente_ficha,no,30,nuevo,"Sofre\xEDr la cebolla y la zanahoria, a\xF1adir el tomate y la lenteja y cocer 10 minutos. Cocer el arroz aparte y servir juntos. Pesar la lenteja cocida y el arroz en seco.",carga
R395,Garbanzos con espinacas y pimiento,comida;cena,516,24.3,17.0,73.1,EJEMPLO | fibraAlta,unico,22.71,garbanzo cocido,legumbre,,si,si,si,pendiente_ficha,no,25,nuevo,"Sofre\xEDr el pimiento, a\xF1adir el tomate, el garbanzo y el comino; terminar con las espinacas. Pesar el garbanzo cocido.",normal
R396,"Pasta con tempeh, br\xF3coli y tomate",comida;cena,610,34.6,22.7,74.0,EJEMPLO | fibraAlta,unico,8.42,tempeh,cereal,gluten;soja,si,si,si,no,no,25,nuevo,"Cocer la pasta y el br\xF3coli. Saltear el tempeh, a\xF1adir el tomate y mezclar con la pasta. Pesar la pasta en seco.",normal
R397,Arroz con soja texturizada y guisantes,comida;cena,584,36.8,11.8,86.5,EJEMPLO | fibraAlta,unico,18.39,soja texturizada,cereal,soja,si,si,si,pendiente_ficha,no,30,nuevo,"Hidratar la soja texturizada. Sofre\xEDr el pimiento, a\xF1adir la soja y el tomate; cocer el arroz aparte y terminar con los guisantes. Pesar la soja y el arroz en seco.",normal
R398,"Quinoa con tofu, calabac\xEDn y zanahoria",comida;cena,532,31.6,24.7,52.2,EJEMPLO | fibraAlta,unico,10.14,tofu firme,cereal,soja,si,si,si,pendiente_ficha,no,25,nuevo,Cocer la quinoa. Saltear el tofu con el calabac\xEDn y la zanahoria y mezclar con la quinoa. Pesar la quinoa en seco.,normal
R399,Alubia blanca guisada con puerro y zanahoria,comida;cena,546,27.4,11.6,88.0,EJEMPLO | fibraAlta,unico,21.69,alubia blanca cocida,legumbre,,si,si,si,pendiente_ficha,no,30,nuevo,"Sofre\xEDr el puerro y la zanahoria, a\xF1adir el tomate y la alubia y cocer 15 minutos. Pesar la alubia cocida.",normal
R400,Salteado de tofu con champi\xF1\xF3n y pimiento y pan integral,comida;cena,474,36.8,25.2,34.5,EJEMPLO | fibraAlta,unico,9.56,tofu firme,pan,gluten;soja,si,si,si,no,no,20,nuevo,"Saltear la cebolla, el pimiento y el champi\xF1\xF3n; a\xF1adir el tofu al final. Servir con el pan. Pesar el pan tal cual.",normal
R402,"Ensalada templada de garbanzo, tomate y aguacate",comida;cena,413,16.7,16.8,53.7,EJEMPLO | fibraAlta,unico,17.76,garbanzo cocido,legumbre,,si,si,si,pendiente_ficha,no,15,nuevo,"Templar el garbanzo y mezclar con la lechuga, el tomate y el aguacate; ali\xF1ar con el aceite. Pesar el garbanzo cocido y el aguacate en porci\xF3n comestible.",normal
R403,Guiso de lentejas con calabaza,comida;cena,398,20.9,11.3,59.0,EJEMPLO | fibraAlta,unico,18.35,lenteja cocida,legumbre,,si,si,si,pendiente_ficha,no,25,nuevo,"Sofre\xEDr la cebolla con el piment\xF3n, a\xF1adir la calabaza y la lenteja y cocer 15 minutos. Pesar la lenteja cocida.",normal
R404,Tempeh con jud\xEDa verde y patata asada,comida;cena,481,27.1,21.3,53.1,EJEMPLO,unico,8.25,tempeh,patata,soja,si,si,si,pendiente_ficha,no,35,nuevo,Asar la patata. Cocer la jud\xEDa verde y hacer el tempeh a la plancha. Servir con el aceite. Pesar la patata en crudo.,normal
R405,Soja texturizada con br\xF3coli y boniato,comida;cena,459,29.4,11.3,67.1,EJEMPLO | fibraAlta,unico,18.20,soja texturizada,patata,soja,si,si,si,pendiente_ficha,no,35,nuevo,Asar el boniato. Hidratar la soja y saltearla con el br\xF3coli. Pesar la soja en seco y el boniato en crudo.,normal
R406,Revuelto de tofu con espinacas y pan integral,comida;cena,460,35.7,25.1,31.4,EJEMPLO | fibraAlta,unico,10.00,tofu firme,pan,gluten;soja,si,si,si,no,no,20,nuevo,"Sofre\xEDr la cebolla, a\xF1adir las espinacas y el tofu desmigado; servir con el pan. Pesar el pan tal cual.",normal
R407,Ensalada de alubia roja con pimiento y aguacate,comida;cena,365,16.2,13.5,49.6,EJEMPLO | fibraAlta,unico,17.80,alubia roja cocida,legumbre,,si,si,si,pendiente_ficha,no,10,nuevo,"Mezclar la alubia con el pimiento, la cebolla y el aguacate; ali\xF1ar con el aceite. Pesar la alubia cocida y el aguacate en porci\xF3n comestible.",normal
R408,Lentejas con arroz y yogur,comida;cena,624,27.1,15.3,96.5,EJEMPLO | fibraAlta | doble_base | carga,unico,18.98,lenteja cocida,legumbre;cereal,l\xE1cteos,si,no,no,pendiente_ficha,no,30,nuevo,"Sofre\xEDr la cebolla y la zanahoria, a\xF1adir la lenteja y cocer 10 minutos. Cocer el arroz aparte y servir con el yogur. Pesar la lenteja cocida y el arroz en seco.",carga
R410,Pasta con verduras y mozzarella,comida;cena,593,26.0,25.4,67.4,EJEMPLO,unico,7.70,mozzarella,cereal,gluten;l\xE1cteos,si,no,no,no,no,25,nuevo,"Cocer la pasta. Sofre\xEDr el calabac\xEDn y el pimiento con el tomate, mezclar con la pasta y fundir la mozzarella encima. Pesar la pasta en seco.",normal
R411,Arroz con verduras y queso fresco,comida;cena,622,23.5,30.1,66.1,EJEMPLO,unico,6.36,queso fresco,cereal,l\xE1cteos,si,no,no,pendiente_ficha,no,25,nuevo,"Cocer el arroz y el br\xF3coli. Saltear la zanahoria, mezclar con el arroz y desmigar el queso fresco por encima. Pesar el arroz en seco.",normal
R412,Cusc\xFAs con verduras asadas y yogur,comida;cena,469,14.8,15.0,70.6,EJEMPLO,unico,10.03,yogur natural,cereal,gluten;l\xE1cteos,si,no,no,no,no,30,nuevo,"Asar la berenjena, el pimiento y la cebolla. Preparar el cusc\xFAs y servir con las verduras y el yogur. Pesar el cusc\xFAs en seco.",normal
R413,Pisto con queso fresco y pan integral,comida;cena,522,24.0,31.5,39.6,EJEMPLO | fibraAlta,unico,9.47,queso fresco,pan,gluten;l\xE1cteos,si,no,no,no,no,30,nuevo,"Pochar la cebolla, el pimiento y el calabac\xEDn; a\xF1adir el tomate y cocer. Servir con el queso fresco desmigado y el pan. Pesar el pan tal cual.",normal
R414,Ensalada templada de lenteja con queso fresco,comida;cena,530,30.3,25.3,48.8,EJEMPLO | fibraAlta,unico,17.40,queso fresco,legumbre,l\xE1cteos,si,no,no,pendiente_ficha,no,15,nuevo,"Templar la lenteja y mezclar con el tomate, el pepino y el queso fresco; ali\xF1ar con el aceite. Pesar la lenteja cocida.",normal
R417,Ensalada de garbanzo con yogur y pepino,comida;cena,416,20.0,13.5,57.2,EJEMPLO | fibraAlta,unico,13.86,garbanzo cocido,legumbre,l\xE1cteos,si,no,no,pendiente_ficha,no,10,nuevo,Mezclar el garbanzo con el pepino y el tomate; ali\xF1ar con el yogur y el aceite. Pesar el garbanzo cocido.,normal
R320,Calabaza asada con tofu y pan integral,comida;cena,508,35.4,25.4,42.8,EJEMPLO,unico,8.05,tofu firme,pan,gluten;soja,si,si,si,no,no,40,nuevo,Asar la calabaza y dorar el tofu en dados con el aceite; servir con el pan tostado.,normal
R409,Garbanzos con espinacas y reques\xF3n,comida;cena,553,32.5,20.1,65.3,EJEMPLO | fibraAlta,unico,19.30,reques\xF3n,legumbre,l\xE1cteos,si,no,no,pendiente_ficha,no,25,nuevo,"Sofre\xEDr el tomate, a\xF1adir el garbanzo y las espinacas; servir con el reques\xF3n por encima. Pesar el garbanzo cocido.",normal
R416,Boniato asado relleno de reques\xF3n con ensalada,comida;cena,382,16.5,9.8,58.8,EJEMPLO | fibraAlta,unico,9.72,reques\xF3n,patata,l\xE1cteos,si,no,no,pendiente_ficha,no,40,nuevo,"Asar el boniato, abrirlo y rellenarlo con el reques\xF3n. Servir con la ensalada ali\xF1ada. Pesar el boniato en crudo.",normal
R401,Crema de calabac\xEDn con tofu y patata,comida;cena,338,22.8,14.5,35.2,EJEMPLO,unico,7.45,tofu firme,patata,soja,si,si,si,pendiente_ficha,no,30,nuevo,Cocer el calabac\xEDn y la patata y triturar. Servir con el tofu a la plancha en dados y el aceite. Pesar la patata en crudo.,normal
R415,Crema de calabaza con reques\xF3n y patata,comida;cena,348,17.2,9.7,51.4,EJEMPLO,unico,5.20,reques\xF3n,patata,l\xE1cteos,si,no,no,pendiente_ficha,si,30,nuevo,Cocer la calabaza y la patata y triturar. Servir con el reques\xF3n y el aceite. Pesar la patata en crudo.,normal
R418,Berenjena asada con mozzarella y tomate y pan integral,comida;cena,390,21.0,20.3,33.8,EJEMPLO | fibraAlta,unico,10.30,mozzarella,pan,gluten;l\xE1cteos,si,no,no,no,no,35,nuevo,"Asar la berenjena en rodajas con el tomate, gratinar con la mozzarella y servir con el pan. Pesar el pan tal cual.",normal
R420,Pan sin gluten tostado con pavo y tomate,desayuno,369,27.4,15.0,30.6,EJEMPLO,unico,3.54,pechuga de pavo asada,pan,,no,no,pendiente_ficha,si,si,10,nuevo,Tostar el pan sin gluten. Cubrir con el tomate rallado y el aceite y terminar con el pavo. Pesar el pan tal cual.,normal
R421,"Tortitas de ma\xEDz con at\xFAn, aguacate y tomate",desayuno,318,20.5,9.2,40.7,EJEMPLO,unico,5.07,at\xFAn en lata,tortita de ma\xEDz,pescado,no,no,pendiente_ficha,si,no,10,nuevo,Escurrir el at\xFAn y mezclarlo con el tomate rallado; servir sobre las tortitas de ma\xEDz.,normal
R422,Huevos revueltos con salm\xF3n y pan sin gluten,desayuno,432,28.6,26.0,19.0,EJEMPLO,unico,1.72,huevo,pan,huevo;pescado,no,no,pendiente_ficha,si,si,10,nuevo,Hacer el revuelto con el aceite y a\xF1adir el salm\xF3n en tiras al final. Servir con el pan sin gluten tostado.,normal
R423,"Huevo cocido con tortitas de ma\xEDz, aguacate y pavo",desayuno,448,40.2,18.9,28.5,EJEMPLO | fibraAlta,unico,4.12,huevo cocido,tortita de ma\xEDz,huevo,no,no,pendiente_ficha,si,si,15,nuevo,"Cocer el huevo 10 minutos. Machacar el aguacate con el tomate y servir con las tortitas, el huevo en rodajas y el pavo.",normal
R424,Revuelto de claras con pavo y pan sin gluten,desayuno,433,43.0,15.1,28.6,EJEMPLO,unico,2.58,claras de huevo,pan,huevo,no,no,pendiente_ficha,si,si,10,nuevo,Cuajar las claras con el aceite y a\xF1adir el pavo en dados. Servir con el pan sin gluten.,normal
R425,"Pan sin gluten con tortilla francesa, salm\xF3n y tomate",desayuno,446,29.3,26.2,22.1,EJEMPLO,unico,2.68,huevo,pan,huevo;pescado,no,no,pendiente_ficha,si,si,10,nuevo,"Hacer la tortilla francesa con el aceite. Servir con el salm\xF3n, el pan sin gluten tostado y el tomate rallado.",normal
R426,"Yogur griego con copos de avena sin gluten, fresas y miel",desayuno,332,26.3,3.7,50.2,EJEMPLO,unico,6.06,yogur griego,copos de avena sin gluten,l\xE1cteos,si,no,no,si,no,5,nuevo,Mezclar el yogur con los copos de avena sin gluten y las fresas en trozos; terminar con la miel.,normal
R427,"Gachas de copos de avena sin gluten con leche, manzana y canela",desayuno,344,13.5,7.4,58.1,EJEMPLO,unico,7.98,leche semidesnatada,copos de avena sin gluten,l\xE1cteos,si,no,no,si,no,10,nuevo,Cocer los copos con la leche 5 minutos removiendo; servir con la manzana en dados y la canela.,normal
R428,"Pan sin gluten con reques\xF3n y miel, y una naranja",desayuno,303,12.5,6.2,51.5,EJEMPLO,unico,5.77,reques\xF3n,pan,l\xE1cteos,si,no,no,si,no,5,nuevo,Untar el pan sin gluten con el reques\xF3n y la miel. Servir con la naranja.,normal
R429,"Yogur natural con copos de avena sin gluten, kiwi y almendras",desayuno,421,16.5,17.1,54.3,EJEMPLO,unico,8.91,yogur natural,copos de avena sin gluten,l\xE1cteos;frutos de c\xE1scara,si,no,no,si,no,5,nuevo,"Mezclar el yogur con los copos de avena sin gluten, el kiwi en trozos y las almendras picadas.",normal
R430,Tortitas de ma\xEDz con pavo,media_manana;merienda,206,26.3,2.3,19.0,EJEMPLO | fibraAlta,unico,1.10,pechuga de pavo asada,tortita de ma\xEDz,,no,no,pendiente_ficha,si,si,5,nuevo,Cubrir las tortitas con el tomate rallado y el pavo.,normal
R431,At\xFAn con tortitas de ma\xEDz,media_manana;merienda,145,13.9,1.2,20.3,EJEMPLO | fibraAlta,unico,1.64,at\xFAn en lata,tortita de ma\xEDz,pescado,no,no,pendiente_ficha,si,si,5,nuevo,Escurrir el at\xFAn y servirlo con el pimiento en tiras sobre las tortitas.,normal
R432,Salm\xF3n con tortitas de ma\xEDz y tomate,media_manana;merienda,237,16.6,10.0,19.8,EJEMPLO | fibraAlta,unico,1.34,salm\xF3n,tortita de ma\xEDz,pescado,no,no,pendiente_ficha,si,si,5,nuevo,Servir el salm\xF3n en lonchas finas sobre las tortitas con el tomate rallado.,normal
R433,Yogur natural con pl\xE1tano y copos de avena sin gluten,media_manana;merienda,223,7.8,5.6,37.6,EJEMPLO,unico,4.10,yogur natural,copos de avena sin gluten,l\xE1cteos,si,no,no,si,si,5,nuevo,Mezclar el yogur con el pl\xE1tano en rodajas y los copos de avena sin gluten.,normal
R434,Pan sin gluten con reques\xF3n y tomate,media_manana;merienda,144,8.5,4.3,18.1,EJEMPLO | fibraAlta,unico,2.01,reques\xF3n,pan,l\xE1cteos,si,no,no,si,si,5,nuevo,Untar el pan sin gluten con el reques\xF3n y cubrir con el tomate en rodajas.,normal
R435,Mandarina con yogur griego y almendras,media_manana;merienda,196,13.5,5.8,25.8,EJEMPLO,unico,3.95,yogur griego,fruta,l\xE1cteos;frutos de c\xE1scara,si,no,no,si,si,5,nuevo,Servir el yogur con la mandarina en gajos y las almendras picadas.,normal
R436,Arroz con pollo y verduras,comida,549,34.2,14.2,69.9,EJEMPLO,unico,5.51,pechuga de pollo,arroz,,no,no,pendiente_ficha,si,no,35,nuevo,"Sofre\xEDr la cebolla y el pimiento, dorar el pollo en dados, a\xF1adir el tomate y el arroz con el doble de agua; cocer 18 minutos. Pesar el arroz en seco.",normal
R437,Merluza a la plancha con patata cocida y jud\xEDas verdes,comida,400,31.3,11.2,45.4,EJEMPLO,unico,8.25,merluza,patata,pescado,no,no,si,si,no,30,nuevo,Cocer la patata y las jud\xEDas; hacer la merluza a la plancha. Ali\xF1ar con el aceite. Pesar la patata en crudo.,normal
R438,Ternera magra con boniato asado y br\xF3coli,comida,487,35.9,16.7,50.2,EJEMPLO,unico,9.90,ternera magra (solomillo de aguja),boniato,,no,no,si,si,no,40,nuevo,Asar el boniato 35 minutos; cocer el br\xF3coli al vapor y hacer la ternera a la plancha. Ali\xF1ar con el aceite.,normal
R439,"Pasta sin gluten con at\xFAn, tomate y calabac\xEDn",comida,440,21.4,12.9,63.6,EJEMPLO,unico,11.10,at\xFAn en lata,pasta sin gluten,pescado,no,no,pendiente_ficha,si,no,25,nuevo,"Cocer la pasta sin gluten seg\xFAn su envase. Sofre\xEDr el calabac\xEDn, a\xF1adir el tomate y el at\xFAn; mezclar con la pasta. Pesar la pasta en seco.",normal
R440,Lubina al horno con patata panadera y pimiento,comida,434,32.2,14.0,45.7,EJEMPLO,unico,7.15,lubina,patata,pescado,no,no,si,si,no,40,nuevo,"Hornear la patata, el pimiento y la cebolla 25 minutos; a\xF1adir la lubina y hornear 12 minutos m\xE1s. Pesar la patata en crudo.",normal
R441,Lentejas estofadas con arroz y verduras,comida,552,22.0,11.5,92.9,EJEMPLO | fibraAlta,unico,20.03,lenteja cocida,legumbre;arroz,,si,si,si,si,no,30,nuevo,"Sofre\xEDr la cebolla y la zanahoria, a\xF1adir el tomate y la lenteja cocida y cocer 15 minutos; servir con el arroz hervido. Pesar la lenteja cocida y el arroz en seco.",normal
R442,Garbanzos con espinacas y quinoa,comida,570,25.2,17.7,82.1,EJEMPLO | fibraAlta,unico,20.58,garbanzo cocido,legumbre;quinoa,,si,si,si,si,no,30,nuevo,"Cocer la quinoa 15 minutos. Sofre\xEDr las espinacas, a\xF1adir el garbanzo y el tomate y cocer 10 minutos; servir con la quinoa. Pesar la quinoa en seco.",normal
R443,"Polenta con champi\xF1ones, huevo poch\xE9 y tomate",comida,431,16.0,16.6,56.4,EJEMPLO,unico,5.74,huevo,polenta,huevo,si,no,pendiente_ficha,si,no,30,nuevo,"Cocer la polenta seg\xFAn su envase. Saltear los champi\xF1ones, sumar el tomate y escalfar el huevo encima. Pesar la polenta en seco.",normal
R444,Pechuga de pollo a la plancha con calabac\xEDn y arroz,cena,380,34.5,9.3,38.2,EJEMPLO,unico,2.52,pechuga de pollo,arroz,,no,no,si,si,si,25,nuevo,Hervir el arroz. Hacer el pollo y el calabac\xEDn a la plancha; ali\xF1ar con el aceite. Pesar el arroz en seco.,normal
R445,"Tortilla francesa con at\xFAn, ensalada y tortitas de ma\xEDz",cena,332,25.3,15.8,22.5,EJEMPLO | fibraAlta,unico,2.60,huevo,tortita de ma\xEDz,huevo;pescado,no,no,pendiente_ficha,si,si,15,nuevo,Hacer la tortilla con el aceite y rellenar con el at\xFAn escurrido; servir con la ensalada y las tortitas.,normal
R446,Salm\xF3n a la plancha con boniato y esp\xE1rragos,cena,443,29.1,21.3,34.1,EJEMPLO,unico,6.60,salm\xF3n,boniato,pescado,no,no,si,si,no,30,nuevo,Asar el boniato 25 minutos; hacer el salm\xF3n y los esp\xE1rragos a la plancha. Ali\xF1ar con el aceite.,normal
R447,Crema de calabac\xEDn con pavo y pan sin gluten,cena,364,28.7,14.9,29.1,EJEMPLO,unico,4.15,pechuga de pavo asada,pan,,no,no,pendiente_ficha,si,si,25,nuevo,Cocer el calabac\xEDn y triturarlo con el aceite; servir con el pavo en dados y el pan sin gluten tostado.,normal
R448,Sepia a la plancha con patata y pimiento rojo,cena,348,28.4,11.5,33.5,EJEMPLO,unico,5.25,sepia,patata,moluscos,no,no,si,si,no,30,nuevo,Cocer la patata; hacer la sepia y el pimiento a la plancha. Ali\xF1ar con el aceite. Pesar la patata en crudo.,normal
R449,Revuelto de claras con champi\xF1ones y pan sin gluten,cena,349,28.6,13.5,29.2,EJEMPLO,unico,3.65,claras de huevo,pan,huevo,si,no,pendiente_ficha,si,si,15,nuevo,Saltear los champi\xF1ones y cuajar las claras con el aceite; servir con el pan sin gluten.,normal
R450,Crema de calabaza con reques\xF3n y quinoa,cena,341,18.8,11.9,42.0,EJEMPLO,unico,3.80,reques\xF3n,quinoa,l\xE1cteos,si,no,no,si,si,30,nuevo,Cocer la quinoa 15 minutos. Cocer la calabaza y triturarla con el aceite; servir con el reques\xF3n y la quinoa. Pesar la quinoa en seco.,normal
R451,Tortilla de patata con ensalada,cena,430,18.7,20.1,45.5,EJEMPLO | fibraAlta,unico,7.27,huevo,patata,huevo,si,no,si,si,no,35,nuevo,"Pochar la patata y la cebolla en el aceite, cuajar con el huevo; servir con la ensalada. Pesar la patata en crudo.",normal
R460,"Gachas de copos de avena sin gluten con bebida de soja, pl\xE1tano y canela",desayuno,389,14.2,7.1,70.1,EJEMPLO,unico,9.38,bebida de soja,copos de avena sin gluten,soja,si,si,si,si,no,10,nuevo,Cocer los copos de avena sin gluten en la bebida de soja 5 minutos removiendo. Servir con el pl\xE1tano en rodajas y la canela. Pesar los copos en seco.,normal
R461,"Yogur de soja con copos de avena sin gluten, fresas y semillas de girasol",desayuno,436,15.6,15.0,62.0,EJEMPLO,unico,8.33,yogur de soja,copos de avena sin gluten,soja,si,si,si,si,no,5,nuevo,"Mezclar el yogur de soja con los copos de avena sin gluten, las fresas en trozos y las semillas de girasol.",normal
R462,Pan sin gluten con crema de cacahuete y pl\xE1tano,desayuno,357,8.1,13.7,54.8,EJEMPLO,unico,6.18,crema de cacahuete,pan,cacahuete,si,si,si,si,no,5,nuevo,"Tostar el pan sin gluten, untar la crema de cacahuete y cubrir con el pl\xE1tano en rodajas. Pesar el pan tal cual.",normal
R463,Tortitas de ma\xEDz con crema de cacahuete y manzana,desayuno,352,8.1,11.5,58.5,EJEMPLO,unico,5.36,crema de cacahuete,tortita de ma\xEDz,cacahuete,si,si,si,si,si,5,nuevo,Untar las tortitas con la crema de cacahuete y servir con la manzana en l\xE1minas.,normal
R464,Pan sin gluten con hummus y tomate,desayuno,305,8.0,14.0,39.6,EJEMPLO,unico,6.84,hummus,pan,s\xE9samo,si,si,si,si,no,5,nuevo,"Tostar el pan sin gluten, untar el hummus y cubrir con el tomate en rodajas.",normal
R465,Gachas de copos de avena sin gluten con compota de manzana y semillas de calabaza,desayuno,388,16.1,13.3,53.9,EJEMPLO,unico,7.73,bebida de soja,copos de avena sin gluten,soja,si,si,si,si,no,10,nuevo,Cocer los copos en la bebida de soja 5 minutos. Servir con la compota de manzana y las semillas de calabaza. Pesar los copos en seco.,normal
R466,"Yogur de soja con kiwi, mandarina y copos de avena sin gluten",desayuno,393,12.5,7.2,72.5,EJEMPLO,unico,8.83,yogur de soja,copos de avena sin gluten,soja,si,si,si,si,no,5,nuevo,"Mezclar el yogur de soja con el kiwi en trozos, la mandarina en gajos y los copos de avena sin gluten.",normal
R467,Pan sin gluten con tofu firme a la plancha y tomate,desayuno,327,20.1,16.5,28.8,EJEMPLO,unico,5.41,tofu firme,pan,soja,si,si,si,si,si,10,nuevo,Hacer el tofu firme a la plancha con el aceite. Servir sobre el pan sin gluten tostado con el tomate rallado.,normal
R468,Tortitas de ma\xEDz con hummus y tomate,media_manana;merienda,195,5.6,8.6,25.8,EJEMPLO | fibraAlta,unico,3.58,hummus,tortita de ma\xEDz,s\xE9samo,si,si,si,si,no,5,nuevo,Untar las tortitas con el hummus y cubrir con el tomate en rodajas.,normal
R469,Pan sin gluten con crema de cacahuete y manzana,media_manana;merienda,216,4.9,9.4,30.9,EJEMPLO | fibraAlta,unico,4.44,crema de cacahuete,pan,cacahuete,si,si,si,si,no,5,nuevo,Untar el pan sin gluten con la crema de cacahuete y servir con la manzana.,normal
R470,Yogur de soja con fresas y semillas de calabaza,media_manana;merienda,170,7.0,7.4,20.9,EJEMPLO,unico,3.1,yogur de soja,fruta,soja,si,si,si,si,si,5,nuevo,Servir el yogur de soja con las fresas en trozos y las semillas de calabaza.,normal
R471,"Batido de bebida de soja, pl\xE1tano y crema de cacahuete",media_manana;merienda,239,9.6,8.9,33.1,EJEMPLO,unico,3.78,bebida de soja,fruta,soja;cacahuete,si,si,si,si,si,5,nuevo,Batir todo junto hasta que quede fino.,normal
R472,Tortitas de ma\xEDz con tofu firme y pimiento,media_manana;merienda,201,15.2,7.2,22.4,EJEMPLO | fibraAlta,unico,3.37,tofu firme,tortita de ma\xEDz,soja,si,si,si,si,no,10,nuevo,Hacer el tofu a la plancha y servirlo sobre las tortitas con el pimiento en tiras.,normal
R473,Yogur de soja con compota de manzana y canela,media_manana;merienda,176,5.5,3.6,31.5,EJEMPLO,unico,2.43,yogur de soja,fruta,soja,si,si,si,si,si,5,nuevo,Mezclar el yogur de soja con la compota de manzana y la canela.,normal
R474,"Salteado de tofu firme con quinoa, calabac\xEDn y pimiento",cena,535,35.6,26.8,45.7,EJEMPLO,unico,10.13,tofu firme,quinoa,soja,si,si,si,si,no,25,nuevo,"Cocer la quinoa 15 minutos. Saltear el tofu en dados con el aceite, a\xF1adir el calabac\xEDn y el pimiento y saltear 8 minutos; mezclar con la quinoa. Pesar la quinoa en seco.",normal
R475,Tempeh a la plancha con boniato asado y br\xF3coli,cena,503,27.7,21.5,57.8,EJEMPLO,unico,9.9,tempeh,boniato,soja,si,si,si,si,no,35,nuevo,Asar el boniato 30 minutos. Cocer el br\xF3coli al vapor y hacer el tempeh a la plancha con el aceite. Pesar el boniato en crudo.,normal
R476,"Soja texturizada con tomate, calabac\xEDn y arroz",cena,415,26.5,11.6,55.4,EJEMPLO,unico,11.87,soja texturizada,arroz,soja,si,si,si,si,no,30,nuevo,"Hidratar la soja texturizada 15 minutos y escurrir. Hervir el arroz. Sofre\xEDr el calabac\xEDn, a\xF1adir la soja y el tomate y cocer 10 minutos; servir con el arroz. Pesar la soja y el arroz en seco.",normal
R477,Crema de calabac\xEDn con tofu firme y pan sin gluten,cena,390,21.8,22.0,31.9,EJEMPLO,unico,6.45,tofu firme,pan,soja,si,si,si,si,no,25,nuevo,Cocer el calabac\xEDn y triturarlo con el aceite. Hacer el tofu a la plancha en dados y servir sobre la crema con el pan sin gluten tostado.,normal`;
  var RECETAS_CATALOGO_INGREDIENTES_CSV = `receta_id,ingrediente,gramos,rol,fdc_id,estado_peso,equivalente_aprox
R01,garbanzo cocido,140,base,173757,peso cocido,
R01,pechuga de pollo asada,110,proteina,171477,peso cocinado,
R01,patata,130,base,170026,peso crudo,
R01,zanahoria,90,verdura,170393,peso crudo,
R01,puerro,60,aromatico,169246,peso crudo,
R01,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R02,garbanzo cocido,160,base,173757,peso cocido,
R02,pechuga de pollo asada,90,proteina,171477,peso cocinado,
R02,patata,100,base,170026,peso crudo,
R02,zanahoria,80,verdura,170393,peso crudo,
R02,repollo,120,verdura,169975,peso crudo,
R02,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R03,calabac\xEDn,180,verdura,169291,peso crudo,
R03,tomate,170,verdura,170457,peso crudo,
R03,pimiento rojo,100,verdura,170108,peso crudo,
R03,cebolla,70,aromatico,170000,peso crudo,
R03,aceite de oliva,12,grasa,171413,peso a\xF1adido,
R03,huevo,100,proteina,171287,peso crudo,
R03,pan integral,70,base,172688,peso del pan,
R04,pimiento rojo,180,verdura,170108,peso crudo,
R04,cebolla,110,aromatico,170000,peso crudo,
R04,tomate,100,verdura,170457,peso crudo,
R04,patata,220,base,170026,peso crudo,
R04,bacalao fresco,160,proteina,171955,peso crudo,
R04,aceite de oliva,15,grasa,171413,peso a\xF1adido,
R05,alubia blanca seca,75,base,175202,peso seco,
R05,repollo,180,verdura,169975,peso crudo,
R05,patata,170,base,170026,peso crudo,
R05,cebolla,70,aromatico,170000,peso crudo,
R05,aceite de oliva,12,grasa,171413,peso a\xF1adido,
R06,arroz,85,base,169756,peso seco,
R06,pechuga de pollo asada,125,proteina,171477,peso cocinado,
R06,jud\xEDa verde,130,verdura,169961,peso crudo,
R06,tomate,100,verdura,170457,peso crudo,
R06,pimiento verde,80,verdura,170427,peso crudo,
R06,aceite de oliva,13,grasa,171413,peso a\xF1adido,
R07,garbanzo cocido,160,base,173757,peso cocido,
R07,at\xFAn en lata,105,proteina,173709,peso escurrido,
R07,tomate,160,verdura,170457,peso crudo,
R07,pimiento verde,90,verdura,170427,peso crudo,
R07,cebolla,50,aromatico,170000,peso crudo,
R07,aceite de oliva,12,grasa,171413,peso a\xF1adido,
R07,pan integral,60,base,172688,peso del pan,
R08,lenteja seca,75,base,172420,peso seco,
R08,arroz,50,base,169756,peso seco,
R08,cebolla,80,aromatico,170000,peso crudo,
R08,zanahoria,110,verdura,170393,peso crudo,
R08,tomate,100,verdura,170457,peso crudo,
R08,ajo,5,condimento,169230,peso crudo,
R08,aceite de oliva,12,grasa,171413,peso a\xF1adido,
R09,yogur natural,250,fruta_lacteo,171284,peso neto,
R09,copos de avena,65,base,173904,peso seco,
R09,pl\xE1tano,120,fruta_lacteo,173944,peso comestible,
R09,almendra,20,grasa,170567,peso comestible,
R10,salm\xF3n,150,proteina,175167,peso crudo,
R10,patata,260,base,170026,peso crudo,
R10,espinacas,150,verdura,168462,peso crudo,
R10,aceite de oliva,12,grasa,171413,peso a\xF1adido,
R11,pan integral,100,base,172688,peso del pan,
R11,huevo,100,proteina,171287,peso crudo,
R11,tomate,120,verdura,170457,peso crudo,
R11,naranja,150,fruta_lacteo,169097,peso comestible,
R11,aceite de oliva,5,grasa,171413,peso a\xF1adido,
R12,arroz,90,base,169756,peso seco,
R12,ternera picada,140,proteina,174030,peso crudo,
R12,calabac\xEDn,150,verdura,169291,peso crudo,
R12,pimiento rojo,100,verdura,170108,peso crudo,
R12,tomate,100,verdura,170457,peso crudo,
R12,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R13,at\xFAn fresco,170,proteina,175159,peso crudo,
R13,patata,200,base,170026,peso crudo,
R13,pimiento verde,60,verdura,170427,peso crudo,
R13,cebolla,60,aromatico,170000,peso crudo,
R13,tomate,100,verdura,170457,peso crudo,
R13,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R14,alubia blanca cocida,180,base,175203,peso cocido,
R14,repollo,100,verdura,169975,peso crudo,
R14,zanahoria,80,verdura,170393,peso crudo,
R14,puerro,60,aromatico,169246,peso crudo,
R14,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R15,pechuga de pollo asada,130,proteina,171477,peso cocinado,
R15,pimiento rojo,100,verdura,170108,peso crudo,
R15,tomate,150,verdura,170457,peso crudo,
R15,cebolla,60,aromatico,170000,peso crudo,
R15,patata,150,base,170026,peso crudo,
R15,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R16,patata,280,base,170026,peso crudo,
R16,champi\xF1\xF3n,150,verdura,169251,peso crudo,
R16,zanahoria,80,verdura,170393,peso crudo,
R16,cebolla,60,aromatico,170000,peso crudo,
R16,huevo cocido,60,proteina,173424,peso cocido,
R16,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R17,jud\xEDa verde,150,verdura,169961,peso crudo,
R17,zanahoria,100,verdura,170393,peso crudo,
R17,patata,150,base,170026,peso crudo,
R17,huevo cocido,60,proteina,173424,peso cocido,
R17,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R18,patata,200,base,170026,peso crudo,
R18,berenjena,150,verdura,169228,peso crudo,
R18,pimiento rojo,80,verdura,170108,peso crudo,
R18,tomate,150,verdura,170457,peso crudo,
R18,huevo,60,proteina,171287,peso crudo,
R18,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R19,patata,250,base,170026,peso crudo,
R19,bacalao fresco,160,proteina,171955,peso crudo,
R19,pimiento verde,50,verdura,170427,peso crudo,
R19,aceite de oliva,12,grasa,171413,peso a\xF1adido,
R20,calabac\xEDn,250,verdura,169291,peso crudo,
R20,cebolla,100,aromatico,170000,peso crudo,
R20,huevo,120,proteina,171287,peso crudo,
R20,patata,150,base,170026,peso crudo,
R20,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R21,tomate,300,verdura,170457,peso crudo,
R21,pimiento verde,60,verdura,170427,peso crudo,
R21,cebolla,40,aromatico,170000,peso crudo,
R21,at\xFAn en lata,100,proteina,173709,peso escurrido,
R21,huevo cocido,60,proteina,173424,peso cocido,
R21,pan integral,60,base,172688,peso tal cual,
R21,aceite de oliva,15,grasa,171413,peso a\xF1adido,
R22,pan integral,90,base,172688,peso tal cual,
R22,pimiento rojo,80,verdura,170108,peso crudo,
R22,cebolla,60,aromatico,170000,peso crudo,
R22,huevo,60,proteina,171287,peso crudo,
R22,aceite de oliva,12,grasa,171413,peso a\xF1adido,
R22,naranja,150,fruta_lacteo,169097,peso comestible,
R23,alubia blanca cocida,180,base,175203,peso cocido,
R23,pechuga de pavo asada,110,proteina,171496,peso cocinado,
R23,zanahoria,80,verdura,170393,peso crudo,
R23,cebolla,60,aromatico,170000,peso crudo,
R23,tomate,100,verdura,170457,peso crudo,
R23,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R24,alubia roja cocida,180,base,175194,peso cocido,
R24,repollo,150,verdura,169975,peso crudo,
R24,zanahoria,80,verdura,170393,peso crudo,
R24,patata,120,base,170026,peso crudo,
R24,pechuga de pavo asada,80,proteina,171496,peso cocinado,
R24,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R25,copos de avena,60,base,173904,peso en seco,
R25,yogur natural,200,fruta_lacteo,171284,peso tal cual,
R25,manzana,150,fruta_lacteo,171688,peso comestible,
R25,nueces,20,grasa,170187,peso comestible,
R26,copos de avena,50,base,173904,peso en seco,
R26,huevo,120,proteina,171287,peso crudo,
R26,fresas,150,fruta_lacteo,167762,peso comestible,
R26,yogur griego,125,fruta_lacteo,170894,peso tal cual,
R26,aceite de oliva,5,grasa,171413,peso a\xF1adido,
R27,pan integral,80,base,172688,peso tal cual,
R27,at\xFAn en lata,90,proteina,173709,peso escurrido,
R27,tomate,120,verdura,170457,peso crudo,
R27,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R27,naranja,200,fruta_lacteo,169097,peso comestible,
R28,queso cottage,200,proteina,172182,peso tal cual,
R28,copos de avena,50,base,173904,peso en seco,
R28,fresas,150,fruta_lacteo,167762,peso comestible,
R28,miel,15,condimento,169640,peso a\xF1adido,
R29,pan integral,90,base,172688,peso tal cual,
R29,huevo,120,proteina,171287,peso crudo,
R29,tomate,100,verdura,170457,peso crudo,
R29,aceite de oliva,8,grasa,171413,peso a\xF1adido,
R29,yogur natural,125,fruta_lacteo,171284,peso tal cual,
R30,leche semidesnatada,300,fruta_lacteo,171267,peso tal cual,
R30,pl\xE1tano,120,fruta_lacteo,173944,peso pelado,
R30,copos de avena,40,base,173904,peso en seco,
R30,crema de cacahuete,25,grasa,172470,peso a\xF1adido,
R31,arroz,80,base,169756,"peso seco (convertido de 220 g cocido, mismas kcal)",
R31,pechuga de pollo asada,120,proteina,171477,peso cocinado,
R31,pl\xE1tano,100,fruta_lacteo,173944,peso pelado,
R31,miel,10,condimento,169640,peso a\xF1adido,
R31,aceite de oliva,5,grasa,171413,peso a\xF1adido,
R32,pan blanco,80,base,174924,peso tal cual,
R32,pechuga de pavo asada,90,proteina,171496,peso cocinado,
R32,tomate,100,verdura,170457,peso crudo,
R32,aceite de oliva,8,grasa,171413,peso a\xF1adido,
R32,yogur natural,125,fruta_lacteo,171284,peso tal cual,
R33,arroz,80,base,169756,"peso seco (convertido de 220 g cocido, mismas kcal)",
R33,at\xFAn en lata,110,proteina,173709,peso escurrido,
R33,claras de huevo,150,proteina,172183,peso crudo,
R33,pimiento rojo,60,verdura,170108,peso crudo,
R33,aceite de oliva,8,grasa,171413,peso a\xF1adido,
R34,merluza,170,proteina,171964,peso crudo (aprox. haddock USDA),si
R34,patata,250,base,170026,peso crudo,
R34,jud\xEDa verde,150,verdura,169961,peso crudo,
R34,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R35,pasta,105,base,168927,"peso seco (convertido de 250 g cocido, mismas kcal)",
R35,pechuga de pavo asada,120,proteina,171496,peso cocinado,
R35,tomate,150,verdura,170457,peso crudo,
R35,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R36,yogur griego,250,fruta_lacteo,170894,peso tal cual,
R36,copos de avena,60,base,173904,peso en seco,
R36,pl\xE1tano,120,fruta_lacteo,173944,peso pelado,
R36,nueces,15,grasa,170187,peso comestible,
R37,huevo,120,proteina,171287,peso crudo,
R37,calabac\xEDn,150,verdura,169291,peso crudo,
R37,cebolla,60,aromatico,170000,peso crudo,
R37,tomate,150,verdura,170457,peso crudo,
R37,pan integral,50,base,172688,peso tal cual,
R37,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R38,calabaza,300,verdura,168448,peso crudo,
R38,puerro,80,aromatico,169246,peso crudo,
R38,patata,100,base,170026,peso crudo,
R38,pechuga de pollo asada,110,proteina,171477,peso cocinado,
R38,pan integral,40,base,172688,peso tal cual,
R38,aceite de oliva,8,grasa,171413,peso a\xF1adido,
R39,pechuga de pavo,170,proteina,171098,peso crudo,
R39,boniato,250,base,168482,peso crudo,
R39,br\xF3coli,150,verdura,170379,peso crudo,
R39,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R40,lenteja cocida,180,base,172421,peso cocido,
R40,huevo cocido,60,proteina,173424,peso cocido,
R40,tomate,150,verdura,170457,peso crudo,
R40,cebolla,40,aromatico,170000,peso crudo,
R40,pan integral,40,base,172688,peso tal cual,
R40,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R41,sepia,200,proteina,174215,peso crudo,
R41,patata,220,base,170026,peso crudo,
R41,pimiento verde,100,verdura,170427,peso crudo,
R41,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R42,sardina en lata,100,proteina,175139,peso escurrido,
R42,pan integral,80,base,172688,peso tal cual,
R42,tomate,150,verdura,170457,peso crudo,
R42,espinacas,60,verdura,168462,peso crudo,
R42,aceite de oliva,5,grasa,171413,peso a\xF1adido,
R43,lechuga hoja verde,80,verdura,169249,crudo,
R43,huevo cocido,60,proteina,173424,crudo,
R43,pechuga de pollo asada,90,proteina,171477,cocido,
R43,tomate,80,verdura,170457,crudo,
R43,aceite de oliva,8,grasa,171413,crudo,
R44,lechuga romana,80,verdura,169247,crudo,
R44,tomate,100,verdura,170457,crudo,
R44,pepino,60,verdura,168409,crudo,
R44,at\xFAn en lata,60,proteina,173709,crudo,
R44,cebolla,20,aromatico,170000,crudo,
R44,aceite de oliva,8,grasa,171413,crudo,
R45,r\xFAcula,60,verdura,169387,crudo,
R45,pera,120,fruta_lacteo,169118,crudo,
R45,nueces,15,grasa,170187,crudo,
R45,aceite de oliva,8,grasa,171413,crudo,
R46,tomate,200,verdura,170457,crudo,
R46,pepino,100,verdura,168409,crudo,
R46,cebolla,30,aromatico,170000,crudo,
R46,aceituna negra,20,grasa,169094,crudo,
R46,aceite de oliva,10,grasa,171413,crudo,
R47,remolacha cocida,100,verdura,169146,crudo,
R47,zanahoria,80,verdura,170393,crudo,
R47,lechuga hoja verde,50,verdura,169249,crudo,
R47,huevo cocido,60,proteina,173424,crudo,
R47,aceite de oliva,8,grasa,171413,crudo,
R48,calabaza,200,verdura,168448,crudo,
R48,zanahoria,100,verdura,170393,crudo,
R48,puerro,50,aromatico,169246,crudo,
R48,aceite de oliva,8,grasa,171413,crudo,
R49,calabac\xEDn,200,verdura,169291,crudo,
R49,puerro,80,aromatico,169246,crudo,
R49,patata,120,base,170026,crudo,
R49,aceite de oliva,8,grasa,171413,crudo,
R50,tomate,300,verdura,170457,crudo,
R50,pepino,100,verdura,168409,crudo,
R50,pimiento verde,50,verdura,170427,crudo,
R50,ajo,3,condimento,169230,crudo,
R50,pan blanco,30,base,174924,crudo,
R50,aceite de oliva,15,grasa,171413,crudo,
R51,tomate,300,verdura,170457,crudo,
R51,pan blanco,60,base,174924,crudo,
R51,ajo,3,condimento,169230,crudo,
R51,huevo cocido,50,proteina,173424,crudo,
R51,aceite de oliva,15,grasa,171413,crudo,
R52,jud\xEDa verde,150,verdura,169961,crudo,
R52,alcachofa,100,verdura,169205,crudo,
R52,zanahoria,80,verdura,170393,crudo,
R52,cebolla,30,aromatico,170000,crudo,
R52,aceite de oliva,10,grasa,171413,crudo,
R53,esp\xE1rrago,150,verdura,168389,crudo,
R53,champi\xF1\xF3n,120,verdura,169251,crudo,
R53,ajo,3,condimento,169230,crudo,
R53,perejil,2,condimento,170416,crudo,
R53,aceite de oliva,8,grasa,171413,crudo,
R54,br\xF3coli,150,verdura,170379,crudo,
R54,coliflor,150,verdura,169986,crudo,
R54,ajo,3,condimento,169230,crudo,
R54,aceite de oliva,10,grasa,171413,crudo,
R55,lenteja cocida,150,base,172421,cocido,
R55,zanahoria,60,verdura,170393,crudo,
R55,cebolla,40,aromatico,170000,crudo,
R55,pimiento rojo,50,verdura,170108,crudo,
R55,piment\xF3n,2,condimento,171329,crudo,
R55,aceite de oliva,8,grasa,171413,crudo,
R56,garbanzo cocido,150,base,173757,cocido,
R56,espinacas,100,verdura,168462,crudo,
R56,ajo,3,condimento,169230,crudo,
R56,comino,1,condimento,170923,crudo,
R56,aceite de oliva,8,grasa,171413,crudo,
R57,arroz,70,base,169756,crudo,
R57,tomate triturado,150,verdura,170051,crudo,
R57,cebolla,30,aromatico,170000,crudo,
R57,aceite de oliva,8,grasa,171413,crudo,
R58,pasta,80,base,168927,crudo,
R58,tomate triturado,150,verdura,170051,crudo,
R58,ajo,3,condimento,169230,crudo,
R58,aceite de oliva,8,grasa,171413,crudo,
R59,pasta,40,base,168927,crudo,
R59,zanahoria,60,verdura,170393,crudo,
R59,puerro,50,aromatico,169246,crudo,
R59,jud\xEDa verde,60,verdura,169961,crudo,
R59,aceite de oliva,5,grasa,171413,crudo,
R60,pechuga de pollo,200,proteina,171077,crudo,
R60,patata,200,base,170026,crudo,
R60,pimiento rojo,100,verdura,170108,crudo,
R60,aceite de oliva,10,grasa,171413,crudo,
R61,pechuga de pollo,200,proteina,171077,crudo,
R61,arroz,70,base,169756,crudo,
R61,jud\xEDa verde,100,verdura,169961,crudo,
R61,aceite de oliva,8,grasa,171413,crudo,
R62,pechuga de pavo,200,proteina,171098,crudo,
R62,patata,180,base,170026,crudo,
R62,zanahoria,80,verdura,170393,crudo,
R62,cebolla,40,aromatico,170000,crudo,
R62,aceite de oliva,10,grasa,171413,crudo,
R63,ternera magra (solomillo de aguja),180,proteina,174763,crudo,si
R63,champi\xF1\xF3n,120,verdura,169251,crudo,
R63,arroz,80,base,169756,crudo,
R63,aceite de oliva,10,grasa,171413,crudo,
R64,lomo de cerdo,180,proteina,168230,crudo,
R64,boniato,200,base,168482,crudo,
R64,br\xF3coli,120,verdura,170379,crudo,
R64,aceite de oliva,8,grasa,171413,crudo,
R65,ternera picada,150,proteina,174030,crudo,
R65,patata,200,base,170026,crudo,
R65,lechuga hoja verde,50,verdura,169249,crudo,
R65,tomate,80,verdura,170457,crudo,
R65,aceite de oliva,10,grasa,171413,crudo,
R66,conejo,200,proteina,172521,crudo,
R66,patata,200,base,170026,crudo,
R66,cebolla,50,aromatico,170000,crudo,
R66,pimiento rojo,60,verdura,170108,crudo,
R66,tomate,80,verdura,170457,crudo,
R66,aceite de oliva,10,grasa,171413,crudo,
R67,merluza,200,proteina,171964,crudo,si
R67,patata,200,base,170026,crudo,
R67,guisantes,60,verdura,170419,crudo,
R67,ajo,3,condimento,169230,crudo,
R67,perejil,3,condimento,170416,crudo,
R67,aceite de oliva,10,grasa,171413,crudo,
R68,bacalao fresco,200,proteina,171955,crudo,
R68,arroz,70,base,169756,crudo,
R68,tomate triturado,150,verdura,170051,crudo,
R68,cebolla,40,aromatico,170000,crudo,
R68,aceite de oliva,10,grasa,171413,crudo,
R69,salm\xF3n,150,proteina,175167,crudo,
R69,esp\xE1rrago,120,verdura,168389,crudo,
R69,patata,180,base,170026,crudo,
R69,aceite de oliva,5,grasa,171413,crudo,
R70,at\xFAn fresco,160,proteina,175159,crudo,
R70,tomate,150,verdura,170457,crudo,
R70,calabac\xEDn,120,verdura,169291,crudo,
R70,pimiento rojo,60,verdura,170108,crudo,
R70,cebolla,40,aromatico,170000,crudo,
R70,aceite de oliva,10,grasa,171413,crudo,
R71,caballa,150,proteina,175119,crudo,
R71,patata,200,base,170026,crudo,
R71,cebolla,60,aromatico,170000,crudo,
R71,tomate,80,verdura,170457,crudo,
R71,aceite de oliva,8,grasa,171413,crudo,
R72,lubina,200,proteina,171948,crudo,si
R72,calabac\xEDn,100,verdura,169291,crudo,
R72,zanahoria,80,verdura,170393,crudo,
R72,patata,150,base,170026,crudo,
R72,aceite de oliva,8,grasa,171413,crudo,
R73,mejill\xF3n,200,proteina,174216,crudo,
R73,arroz,70,base,169756,crudo,
R73,tomate,100,verdura,170457,crudo,
R73,cebolla,30,aromatico,170000,crudo,
R73,aceite de oliva,8,grasa,171413,crudo,
R74,calamar,200,proteina,174223,crudo,
R74,patata,180,base,170026,crudo,
R74,lechuga hoja verde,50,verdura,169249,crudo,
R74,tomate,100,verdura,170457,crudo,
R74,aceite de oliva,10,grasa,171413,crudo,
R75,huevo,150,proteina,171287,crudo,
R75,lechuga hoja verde,60,verdura,169249,crudo,
R75,tomate,100,verdura,170457,crudo,
R75,pan blanco,60,base,174924,crudo,
R75,aceite de oliva,8,grasa,171413,crudo,
R76,huevo,150,proteina,171287,crudo,
R76,patata,200,base,170026,crudo,
R76,cebolla,40,aromatico,170000,crudo,
R76,lechuga hoja verde,50,verdura,169249,crudo,
R76,aceite de oliva,10,grasa,171413,crudo,
R77,huevo,100,proteina,171287,crudo,
R77,tomate,200,verdura,170457,crudo,
R77,pimiento rojo,60,verdura,170108,crudo,
R77,cebolla,40,aromatico,170000,crudo,
R77,pan integral,60,base,172688,crudo,
R77,aceite de oliva,8,grasa,171413,crudo,
R78,tofu firme,150,proteina,172475,crudo,
R78,br\xF3coli,100,verdura,170379,crudo,
R78,zanahoria,80,verdura,170393,crudo,
R78,arroz,70,base,169756,crudo,
R78,aceite de oliva,8,grasa,171413,crudo,
R79,tempeh,120,proteina,174272,crudo,
R79,boniato,200,base,168482,crudo,
R79,espinacas,100,verdura,168462,crudo,
R79,aceite de oliva,8,grasa,171413,crudo,
R80,garbanzo cocido,150,base,173757,cocido,
R80,espinacas,100,verdura,168462,crudo,
R80,huevo,100,proteina,171287,crudo,
R80,ajo,3,condimento,169230,crudo,
R80,piment\xF3n,2,condimento,171329,crudo,
R80,aceite de oliva,8,grasa,171413,crudo,
R81,pechuga de pavo,200,proteina,171098,crudo,
R81,calabaza,200,verdura,168448,crudo,
R81,champi\xF1\xF3n,100,verdura,169251,crudo,
R81,aceite de oliva,8,grasa,171413,crudo,
R82,pasta,130,base,168927,crudo,
R82,ternera picada,120,proteina,174030,crudo,
R82,tomate triturado,150,verdura,170051,crudo,
R82,cebolla,40,aromatico,170000,crudo,
R82,aceite de oliva,10,grasa,171413,crudo,
R83,arroz,130,base,169756,crudo,
R83,pechuga de pollo,200,proteina,171077,crudo,
R83,zanahoria,80,verdura,170393,crudo,
R83,aceite de oliva,12,grasa,171413,crudo,
R84,pasta,120,base,168927,crudo,
R84,at\xFAn en lata,80,proteina,173709,crudo,
R84,tomate triturado,120,verdura,170051,crudo,
R84,aceite de oliva,10,grasa,171413,crudo,
R85,patata,300,base,170026,crudo,
R85,huevo cocido,100,proteina,173424,crudo,
R85,at\xFAn en lata,60,proteina,173709,crudo,
R85,aceite de oliva,10,grasa,171413,crudo,
R86,tofu firme,150,proteina,172475,crudo,
R86,arroz,90,base,169756,crudo,
R86,pimiento rojo,80,verdura,170108,crudo,
R86,zanahoria,60,verdura,170393,crudo,
R86,br\xF3coli,80,verdura,170379,crudo,
R86,aceite de oliva,10,grasa,171413,crudo,
R87,pasta,100,base,168927,crudo,
R87,calabac\xEDn,120,verdura,169291,crudo,
R87,tomate,100,verdura,170457,crudo,
R87,mozzarella,60,proteina,170845,crudo,
R87,aceite de oliva,8,grasa,171413,crudo,
R88,cusc\xFAs,90,base,169699,crudo,
R88,tofu firme,120,proteina,172475,crudo,
R88,calabac\xEDn,100,verdura,169291,crudo,
R88,pimiento rojo,60,verdura,170108,crudo,
R88,aceite de oliva,10,grasa,171413,crudo,
R89,tortilla de trigo,100,base,167535,crudo,
R89,pechuga de pollo asada,150,proteina,171477,cocido,
R89,pimiento rojo,80,verdura,170108,crudo,
R89,lechuga hoja verde,30,verdura,169249,crudo,
R89,aguacate,50,grasa,171705,crudo,
R90,pan integral,70,base,172688,crudo,
R90,aguacate,60,grasa,171705,crudo,
R90,huevo,60,proteina,171287,crudo,
R90,tomate,50,verdura,170457,crudo,
R91,pan blanco,90,base,174924,crudo,
R91,tomate,100,verdura,170457,crudo,
R91,at\xFAn en lata,40,proteina,173709,crudo,
R91,aceite de oliva,8,grasa,171413,crudo,
R92,copos de avena,50,base,173904,crudo,
R92,leche semidesnatada,250,fruta_lacteo,171267,crudo,
R92,pl\xE1tano,100,fruta_lacteo,173944,crudo,
R93,huevo,100,proteina,171287,crudo,
R93,pan blanco,70,base,174924,crudo,
R93,naranja,150,fruta_lacteo,169097,crudo,
R93,aceite de oliva,5,grasa,171413,crudo,
R94,pan integral,60,base,172688,crudo,
R94,crema de cacahuete,20,grasa,172470,crudo,
R94,pl\xE1tano,100,fruta_lacteo,173944,crudo,
R95,yogur natural,125,fruta_lacteo,171284,crudo,
R95,nueces,15,grasa,170187,crudo,
R95,manzana,100,fruta_lacteo,171688,crudo,
R96,hummus,60,base,174289,cocido,
R96,zanahoria,100,verdura,170393,crudo,
R97,pl\xE1tano,100,fruta_lacteo,173944,crudo,
R97,almendra,20,grasa,170567,crudo,
R98,pan blanco,60,base,174924,crudo,
R98,pechuga de pavo asada,40,proteina,171496,cocido,
R98,tomate,40,verdura,170457,crudo,
R99,pan blanco,50,base,174924,crudo,
R99,at\xFAn en lata,40,proteina,173709,crudo,
R99,tomate,50,verdura,170457,crudo,
R100,yogur griego,150,fruta_lacteo,170894,crudo,
R100,fresas,100,fruta_lacteo,167762,crudo,
R100,leche semidesnatada,100,fruta_lacteo,171267,crudo,
R101,huevo cocido,60,proteina,173424,crudo,
R101,pera,150,fruta_lacteo,169118,crudo,
R102,nueces,15,grasa,170187,crudo,
R102,almendra,15,grasa,170567,crudo,
R102,mandarina,150,fruta_lacteo,169105,crudo,
R103,yogur natural,125,fruta_lacteo,171284,crudo,
R103,copos de avena,20,base,173904,crudo,
R103,miel,8,condimento,169640,crudo,
R104,manzana,150,fruta_lacteo,171688,crudo,
R104,crema de cacahuete,15,grasa,172470,crudo,
R105,yogur natural,125,fruta_lacteo,171284,crudo,
R105,fresas,100,fruta_lacteo,167762,crudo,
R106,yogur griego,125,fruta_lacteo,170894,crudo,
R106,miel,8,condimento,169640,crudo,
R106,nueces,10,grasa,170187,crudo,
R107,manzana,180,fruta_lacteo,171688,crudo,
R107,canela,1,condimento,171320,crudo,
R107,miel,5,condimento,169640,crudo,
R108,naranja,100,fruta_lacteo,169097,crudo,
R108,kiwi,80,fruta_lacteo,168153,crudo,
R108,pi\xF1a,100,fruta_lacteo,169124,crudo,
R108,fresas,50,fruta_lacteo,167762,crudo,
R109,pl\xE1tano,100,fruta_lacteo,173944,crudo,
R109,yogur natural,125,fruta_lacteo,171284,crudo,
R109,cacao puro en polvo,5,condimento,169593,crudo,
R110,pera,200,fruta_lacteo,169118,crudo,
R110,canela,1,condimento,171320,crudo,
R111,mel\xF3n,250,fruta_lacteo,169092,crudo,
R112,sand\xEDa,300,fruta_lacteo,167765,crudo,
R113,naranja,200,fruta_lacteo,169097,crudo,
R113,almendra,15,grasa,170567,crudo,
R114,kiwi,120,fruta_lacteo,168153,crudo,
R114,yogur griego,125,fruta_lacteo,170894,crudo,
R115,manzana,200,fruta_lacteo,171688,crudo,
R115,canela,1,condimento,171320,crudo,
R116,pan blanco,50,base,174924,tal cual,
R116,huevo,60,proteina,171287,crudo,
R116,aceite de oliva,3,grasa,171413,peso a\xF1adido,
R116,yogur natural,125,fruta_lacteo,171284,tal cual,
R117,arroz,40,base,169756,peso seco,
R117,leche semidesnatada,200,fruta_lacteo,171267,tal cual,
R117,miel,10,condimento,169640,peso a\xF1adido,
R117,canela,0.5,condimento,171320,peso a\xF1adido,
R118,yogur natural,200,fruta_lacteo,171284,tal cual,
R118,pl\xE1tano,60,fruta_lacteo,173944,peso comestible,
R118,miel,10,condimento,169640,peso a\xF1adido,
R119,pan blanco,60,base,174924,tal cual,
R119,pechuga de pollo asada,50,proteina,171477,cocido,
R119,yogur natural,125,fruta_lacteo,171284,tal cual,
R120,pan blanco,60,base,174924,tal cual,
R120,mozzarella,40,proteina,170845,tal cual,
R120,aceite de oliva,3,grasa,171413,peso a\xF1adido,
R121,pan blanco,60,base,174924,tal cual,
R121,claras de huevo,100,proteina,172183,crudo,
R121,huevo,60,proteina,171287,crudo,
R121,aceite de oliva,3,grasa,171413,peso a\xF1adido,
R122,pan blanco,60,base,174924,tal cual,
R122,pechuga de pavo asada,50,proteina,171496,cocido,
R122,leche semidesnatada,150,fruta_lacteo,171267,tal cual,
R123,pan blanco,60,base,174924,tal cual,
R123,huevo cocido,50,proteina,173424,cocido,
R123,at\xFAn en lata,40,proteina,173709,peso escurrido,
R124,arroz,80,base,169756,peso seco,
R124,pechuga de pollo,150,proteina,171077,crudo,
R124,calabac\xEDn,80,verdura,169291,crudo,
R124,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R125,arroz,80,base,169756,peso seco,
R125,pechuga de pavo,150,proteina,171098,crudo,
R125,calabaza,100,verdura,168448,crudo,
R125,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R126,arroz,80,base,169756,peso seco,
R126,bacalao fresco,180,proteina,171955,crudo,
R126,zanahoria,40,verdura,170393,crudo,
R126,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R127,pasta,60,base,168927,peso seco,
R127,pechuga de pollo,150,proteina,171077,crudo,
R127,calabac\xEDn,60,verdura,169291,crudo,
R127,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R128,arroz,80,base,169756,peso seco,
R128,huevo,120,proteina,171287,crudo,
R128,calabac\xEDn,80,verdura,169291,crudo,
R128,aceite de oliva,8,grasa,171413,peso a\xF1adido,
R129,arroz,80,base,169756,peso seco,
R129,salm\xF3n,150,proteina,175167,crudo,
R129,calabaza,100,verdura,168448,crudo,
R129,aceite de oliva,5,grasa,171413,peso a\xF1adido,
R130,arroz,80,base,169756,peso seco,
R130,ternera picada,120,proteina,174030,crudo,
R130,champi\xF1\xF3n,80,verdura,169251,crudo,
R130,aceite de oliva,8,grasa,171413,peso a\xF1adido,
R131,arroz,80,base,169756,peso seco,
R131,at\xFAn en lata,100,proteina,173709,peso escurrido,
R131,calabac\xEDn,80,verdura,169291,crudo,
R131,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R132,copos de avena,40,base,173904,peso seco,
R132,huevo,60,proteina,171287,crudo,
R132,pl\xE1tano,100,fruta_lacteo,173944,peso comestible,
R132,almendra,10,grasa,170567,tal cual,
R133,copos de avena,40,base,173904,peso seco,
R133,huevo,60,proteina,171287,crudo,
R133,manzana,100,fruta_lacteo,171688,peso comestible,
R133,nueces,10,grasa,170187,tal cual,
R134,copos de avena,40,base,173904,peso seco,
R134,huevo,60,proteina,171287,crudo,
R134,pera,100,fruta_lacteo,169118,peso comestible,
R134,almendra,10,grasa,170567,tal cual,
R135,copos de avena,40,base,173904,peso seco,
R135,huevo,60,proteina,171287,crudo,
R135,fresas,100,fruta_lacteo,167762,peso comestible,
R135,nueces,10,grasa,170187,tal cual,
R136,arroz,40,base,169756,peso seco,
R136,huevo,60,proteina,171287,crudo,
R136,naranja,100,fruta_lacteo,169097,peso comestible,
R136,almendra,10,grasa,170567,tal cual,
R137,arroz,40,base,169756,peso seco,
R137,huevo,60,proteina,171287,crudo,
R137,pi\xF1a,100,fruta_lacteo,169124,peso comestible,
R137,nueces,10,grasa,170187,tal cual,
R138,arroz,40,base,169756,peso seco,
R138,huevo,60,proteina,171287,crudo,
R138,kiwi,100,fruta_lacteo,168153,peso comestible,
R138,almendra,10,grasa,170567,tal cual,
R139,arroz,40,base,169756,peso seco,
R139,huevo,60,proteina,171287,crudo,
R139,mandarina,100,fruta_lacteo,169105,peso comestible,
R139,nueces,10,grasa,170187,tal cual,
R140,arroz,70,base,169756,peso seco,
R140,huevo,120,proteina,171287,crudo,
R140,pimiento rojo,100,verdura,170108,crudo,
R140,aceite de oliva,8,grasa,171413,peso a\xF1adido,
R141,arroz,70,base,169756,peso seco,
R141,huevo,60,proteina,171287,crudo,
R141,claras de huevo,120,proteina,172183,crudo,
R141,calabaza,120,verdura,168448,crudo,
R141,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R142,patata,250,base,170026,crudo con piel,
R142,huevo,120,proteina,171287,crudo,
R142,calabac\xEDn,120,verdura,169291,crudo,
R142,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R143,boniato,230,base,168482,crudo,
R143,huevo,120,proteina,171287,crudo,
R143,espinacas,100,verdura,168462,crudo,
R143,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R144,lenteja cocida,140,base,172421,cocido,
R144,huevo,120,proteina,171287,crudo,
R144,zanahoria,100,verdura,170393,crudo,
R144,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R145,garbanzo cocido,180,base,173757,cocido,
R145,huevo,100,proteina,171287,crudo,
R145,calabac\xEDn,100,verdura,169291,crudo,
R145,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R146,manzana,150,fruta_lacteo,171688,peso comestible,
R146,almendra,10,grasa,170567,tal cual,
R147,pera,140,fruta_lacteo,169118,peso comestible,
R147,nueces,10,grasa,170187,tal cual,
R148,naranja,150,fruta_lacteo,169097,peso comestible,
R148,nueces,10,grasa,170187,tal cual,
R149,mandarina,150,fruta_lacteo,169105,peso comestible,
R149,almendra,10,grasa,170567,tal cual,
R150,pi\xF1a,150,fruta_lacteo,169124,peso comestible,
R150,almendra,10,grasa,170567,tal cual,
R151,fresas,150,fruta_lacteo,167762,peso comestible,
R151,nueces,12,grasa,170187,tal cual,
R152,kiwi,120,fruta_lacteo,168153,peso comestible,
R152,nueces,10,grasa,170187,tal cual,
R153,mel\xF3n,180,fruta_lacteo,169092,peso comestible,
R153,almendra,12,grasa,170567,tal cual,
R154,sand\xEDa,180,fruta_lacteo,167765,peso comestible,
R154,nueces,10,grasa,170187,tal cual,
R155,yogur natural,125,fruta_lacteo,171284,tal cual,
R155,fresas,100,fruta_lacteo,167762,peso comestible,
R156,yogur natural,125,fruta_lacteo,171284,tal cual,
R156,kiwi,80,fruta_lacteo,168153,peso comestible,
R157,yogur natural,125,fruta_lacteo,171284,tal cual,
R157,manzana,100,fruta_lacteo,171688,peso comestible,
R158,yogur natural,125,fruta_lacteo,171284,tal cual,
R158,pi\xF1a,100,fruta_lacteo,169124,peso comestible,
R159,huevo cocido,50,proteina,173424,cocido,
R159,naranja,100,fruta_lacteo,169097,peso comestible,
R160,huevo cocido,50,proteina,173424,cocido,
R160,fresas,100,fruta_lacteo,167762,peso comestible,
R161,copos de avena,90,base,173904,peso seco,
R161,yogur natural,200,fruta_lacteo,171284,tal cual,
R161,pl\xE1tano,150,fruta_lacteo,173944,peso comestible,
R161,nueces,20,grasa,170187,tal cual,
R162,copos de avena,90,base,173904,peso seco,
R162,yogur natural,200,fruta_lacteo,171284,tal cual,
R162,manzana,150,fruta_lacteo,171688,peso comestible,
R162,nueces,20,grasa,170187,tal cual,
R163,copos de avena,90,base,173904,peso seco,
R163,yogur natural,200,fruta_lacteo,171284,tal cual,
R163,pera,150,fruta_lacteo,169118,peso comestible,
R163,nueces,20,grasa,170187,tal cual,
R164,copos de avena,90,base,173904,peso seco,
R164,yogur natural,200,fruta_lacteo,171284,tal cual,
R164,pi\xF1a,150,fruta_lacteo,169124,peso comestible,
R164,nueces,20,grasa,170187,tal cual,
R165,pan integral,120,base,172688,tal cual,
R165,huevo,120,proteina,171287,crudo,
R165,pl\xE1tano,150,fruta_lacteo,173944,peso comestible,
R165,almendra,15,grasa,170567,tal cual,
R166,pan integral,120,base,172688,tal cual,
R166,huevo,120,proteina,171287,crudo,
R166,manzana,150,fruta_lacteo,171688,peso comestible,
R166,almendra,15,grasa,170567,tal cual,
R167,pan integral,120,base,172688,tal cual,
R167,huevo,120,proteina,171287,crudo,
R167,pera,150,fruta_lacteo,169118,peso comestible,
R167,almendra,15,grasa,170567,tal cual,
R168,pan integral,120,base,172688,tal cual,
R168,huevo,120,proteina,171287,crudo,
R168,naranja,150,fruta_lacteo,169097,peso comestible,
R168,almendra,15,grasa,170567,tal cual,
R169,arroz,100,base,169756,peso seco,
R169,leche semidesnatada,250,fruta_lacteo,171267,tal cual,
R169,pl\xE1tano,150,fruta_lacteo,173944,peso comestible,
R169,nueces,20,grasa,170187,tal cual,
R170,arroz,100,base,169756,peso seco,
R170,leche semidesnatada,250,fruta_lacteo,171267,tal cual,
R170,pera,150,fruta_lacteo,169118,peso comestible,
R170,nueces,20,grasa,170187,tal cual,
R171,arroz,100,base,169756,peso seco,
R171,leche semidesnatada,250,fruta_lacteo,171267,tal cual,
R171,pi\xF1a,150,fruta_lacteo,169124,peso comestible,
R171,nueces,20,grasa,170187,tal cual,
R172,arroz,100,base,169756,peso seco,
R172,leche semidesnatada,250,fruta_lacteo,171267,tal cual,
R172,mandarina,150,fruta_lacteo,169105,peso comestible,
R172,nueces,20,grasa,170187,tal cual,
R173,manzana,120,fruta_lacteo,171688,peso comestible,
R173,nueces,10,grasa,170187,tal cual,
R174,pera,120,fruta_lacteo,169118,peso comestible,
R174,almendra,10,grasa,170567,tal cual,
R175,pi\xF1a,100,fruta_lacteo,169124,peso comestible,
R175,yogur natural,125,fruta_lacteo,171284,tal cual,
R176,kiwi,100,fruta_lacteo,168153,peso comestible,
R176,yogur natural,125,fruta_lacteo,171284,tal cual,
R177,fresas,150,fruta_lacteo,167762,peso comestible,
R177,yogur natural,125,fruta_lacteo,171284,tal cual,
R178,mel\xF3n,150,fruta_lacteo,169092,peso comestible,
R178,yogur natural,125,fruta_lacteo,171284,tal cual,
R179,mandarina,100,fruta_lacteo,169105,peso comestible,
R179,yogur natural,125,fruta_lacteo,171284,tal cual,
R180,yogur natural,125,fruta_lacteo,171284,tal cual,
R180,cacao puro en polvo,5,condimento,169593,peso a\xF1adido,
R181,yogur natural,125,fruta_lacteo,171284,tal cual,
R181,miel,10,condimento,169640,peso a\xF1adido,
R182,pan blanco,40,base,174924,tal cual,
R182,aceite de oliva,5,grasa,171413,peso a\xF1adido,
R183,pan integral,40,base,172688,tal cual,
R183,tomate,60,verdura,170457,crudo,
R183,aceite de oliva,5,grasa,171413,peso a\xF1adido,
R184,almendra,10,grasa,170567,tal cual,
R184,nueces,10,grasa,170187,tal cual,
R300,copos de avena,40,base,173904,peso seco,
R300,bebida de soja,200,fruta_lacteo,172446,tal cual,
R300,pl\xE1tano,100,fruta_lacteo,173944,peso comestible,
R300,canela,2,condimento,171320,tal cual,
R301,copos de avena,40,base,173904,peso seco,
R301,bebida de soja,200,fruta_lacteo,172446,tal cual,
R301,manzana,100,fruta_lacteo,171688,peso comestible,
R301,nueces,15,grasa,170187,tal cual,
R302,pan integral,60,base,172688,tal cual,
R302,hummus,60,base,174289,tal cual,
R302,tomate,100,verdura,170457,peso crudo,
R302,yogur de soja,125,fruta_lacteo,175227,tal cual,
R303,pan integral,70,base,172688,tal cual,
R303,crema de cacahuete,20,grasa,172470,tal cual,
R303,pl\xE1tano,100,fruta_lacteo,173944,peso comestible,
R304,yogur de soja,250,fruta_lacteo,175227,tal cual,
R304,copos de avena,35,base,173904,peso seco,
R304,fresas,100,fruta_lacteo,167762,peso comestible,
R304,almendra,15,grasa,170567,tal cual,
R305,yogur de soja,250,fruta_lacteo,175227,tal cual,
R305,copos de avena,35,base,173904,peso seco,
R305,kiwi,100,fruta_lacteo,168153,peso comestible,
R305,nueces,15,grasa,170187,tal cual,
R306,copos de avena,40,base,173904,peso seco,
R306,bebida de soja,200,fruta_lacteo,172446,tal cual,
R306,pera,100,fruta_lacteo,169118,peso comestible,
R306,almendra,15,grasa,170567,tal cual,
R307,pan integral,60,base,172688,tal cual,
R307,aguacate,50,grasa,171705,peso comestible,
R307,tomate,100,verdura,170457,peso crudo,
R307,yogur de soja,125,fruta_lacteo,175227,tal cual,
R308,yogur de soja,250,fruta_lacteo,175227,tal cual,
R308,copos de avena,35,base,173904,peso seco,
R308,mandarina,120,fruta_lacteo,169105,peso comestible,
R308,canela,2,condimento,171320,tal cual,
R309,pan integral,60,base,172688,tal cual,
R309,hummus,50,base,174289,tal cual,
R309,pepino,100,verdura,168409,peso crudo,
R309,naranja,150,fruta_lacteo,169097,peso comestible,
R310,yogur de soja,250,fruta_lacteo,175227,tal cual,
R310,cacao puro en polvo,8,condimento,169593,tal cual,
R310,pl\xE1tano,100,fruta_lacteo,173944,peso comestible,
R310,crema de cacahuete,15,grasa,172470,tal cual,
R311,pan integral,60,base,172688,tal cual,
R311,tempeh,60,proteina,174272,tal cual,
R311,tomate,100,verdura,170457,peso crudo,
R311,aceite de oliva,5,grasa,171413,tal cual,
R312,arroz,60,base,169756,peso seco,
R312,tofu firme,150,proteina,172475,tal cual,
R312,br\xF3coli,150,verdura,170379,peso crudo,
R312,ajo,5,condimento,169230,peso crudo,
R312,aceite de oliva,10,grasa,171413,tal cual,
R313,arroz,60,base,169756,peso seco,
R313,tempeh,120,proteina,174272,tal cual,
R313,pimiento rojo,150,verdura,170108,peso crudo,
R313,cebolla,80,aromatico,170000,peso crudo,
R313,aceite de oliva,10,grasa,171413,tal cual,
R314,lenteja cocida,200,base,172421,peso cocido,
R314,zanahoria,100,verdura,170393,peso crudo,
R314,tomate triturado,150,verdura,170051,peso crudo,
R314,cebolla,60,aromatico,170000,peso crudo,
R314,aceite de oliva,10,grasa,171413,tal cual,
R315,garbanzo cocido,180,base,173757,peso cocido,
R315,espinacas,150,verdura,168462,peso crudo,
R315,tomate triturado,100,verdura,170051,peso crudo,
R315,comino,2,condimento,170923,tal cual,
R315,aceite de oliva,10,grasa,171413,tal cual,
R316,boniato,200,base,168482,peso crudo,
R316,tofu firme,150,proteina,172475,tal cual,
R316,jud\xEDa verde,150,verdura,169961,peso crudo,
R316,aceite de oliva,10,grasa,171413,tal cual,
R317,patata,250,base,170026,peso crudo,
R317,tempeh,120,proteina,174272,tal cual,
R317,calabac\xEDn,150,verdura,169291,peso crudo,
R317,tomate,100,verdura,170457,peso crudo,
R317,aceite de oliva,10,grasa,171413,tal cual,
R318,arroz,60,base,169756,peso seco,
R318,soja texturizada,50,proteina,174275,peso seco,si
R318,pimiento verde,150,verdura,170427,peso crudo,
R318,cebolla,80,aromatico,170000,peso crudo,
R318,aceite de oliva,10,grasa,171413,tal cual,
R319,lenteja cocida,200,base,172421,peso cocido,
R319,tomate,100,verdura,170457,peso crudo,
R319,pepino,100,verdura,168409,peso crudo,
R319,aguacate,50,grasa,171705,peso comestible,
R319,aceite de oliva,10,grasa,171413,tal cual,
R321,tofu firme,180,proteina,172475,tal cual,
R321,champi\xF1\xF3n,150,verdura,169251,peso crudo,
R321,pan integral,60,base,172688,tal cual,
R321,ajo,5,condimento,169230,peso crudo,
R321,aceite de oliva,10,grasa,171413,tal cual,
R322,alubia blanca cocida,200,base,175203,peso cocido,
R322,pimiento rojo,100,verdura,170108,peso crudo,
R322,tomate triturado,150,verdura,170051,peso crudo,
R322,cebolla,60,aromatico,170000,peso crudo,
R322,aceite de oliva,10,grasa,171413,tal cual,
R323,patata,250,base,170026,peso crudo,
R323,soja texturizada,50,proteina,174275,peso seco,si
R323,guisantes,100,verdura,170419,peso crudo,
R323,tomate triturado,100,verdura,170051,peso crudo,
R323,aceite de oliva,10,grasa,171413,tal cual,
R324,quinoa,60,base,168874,peso seco,
R324,tofu firme,150,proteina,172475,tal cual,
R324,pimiento rojo,100,verdura,170108,peso crudo,
R324,calabac\xEDn,150,verdura,169291,peso crudo,
R324,aceite de oliva,10,grasa,171413,tal cual,
R325,garbanzo cocido,180,base,173757,peso cocido,
R325,zanahoria,100,verdura,170393,peso crudo,
R325,puerro,100,aromatico,169246,peso crudo,
R325,repollo,100,verdura,169975,peso crudo,
R325,aceite de oliva,10,grasa,171413,tal cual,
R326,pasta,70,base,168927,peso seco,
R326,soja texturizada,50,proteina,174275,peso seco,si
R326,tomate triturado,200,verdura,170051,peso crudo,
R326,cebolla,80,aromatico,170000,peso crudo,
R326,aceite de oliva,10,grasa,171413,tal cual,
R327,arroz,70,base,169756,peso seco,
R327,tofu firme,150,proteina,172475,tal cual,
R327,br\xF3coli,150,verdura,170379,peso crudo,
R327,pimiento verde,100,verdura,170427,peso crudo,
R327,aceite de oliva,10,grasa,171413,tal cual,
R328,quinoa,60,base,168874,peso seco,
R328,tempeh,120,proteina,174272,tal cual,
R328,berenjena,200,verdura,169228,peso crudo,
R328,tomate,100,verdura,170457,peso crudo,
R328,aceite de oliva,10,grasa,171413,tal cual,
R329,alubia roja cocida,200,base,175194,peso cocido,
R329,zanahoria,100,verdura,170393,peso crudo,
R329,pimiento rojo,100,verdura,170108,peso crudo,
R329,tomate triturado,150,verdura,170051,peso crudo,
R329,aceite de oliva,10,grasa,171413,tal cual,
R330,pasta,70,base,168927,peso seco,
R330,berenjena,200,verdura,169228,peso crudo,
R330,tomate triturado,150,verdura,170051,peso crudo,
R330,almendra,15,grasa,170567,tal cual,
R330,aceite de oliva,10,grasa,171413,tal cual,
R331,patata,300,base,170026,peso crudo,
R331,tofu firme,150,proteina,172475,tal cual,
R331,lechuga hoja verde,80,verdura,169249,peso crudo,
R331,tomate,100,verdura,170457,peso crudo,
R331,aceite de oliva,10,grasa,171413,tal cual,
R332,yogur de soja,200,fruta_lacteo,175227,tal cual,
R332,manzana,100,fruta_lacteo,171688,peso comestible,
R332,nueces,15,grasa,170187,tal cual,
R333,hummus,60,base,174289,tal cual,
R333,zanahoria,100,verdura,170393,peso crudo,
R333,pepino,100,verdura,168409,peso crudo,
R334,pan integral,50,base,172688,tal cual,
R334,crema de cacahuete,15,grasa,172470,tal cual,
R334,pl\xE1tano,80,fruta_lacteo,173944,peso comestible,
R335,yogur de soja,200,fruta_lacteo,175227,tal cual,
R335,fresas,100,fruta_lacteo,167762,peso comestible,
R335,almendra,10,grasa,170567,tal cual,
R336,pan integral,50,base,172688,tal cual,
R336,tomate,100,verdura,170457,peso crudo,
R336,aceite de oliva,5,grasa,171413,tal cual,
R337,yogur de soja,200,fruta_lacteo,175227,tal cual,
R337,pera,100,fruta_lacteo,169118,peso comestible,
R337,nueces,15,grasa,170187,tal cual,
R340,pan integral,50,base,172688,tal cual,
R340,tomate,60,verdura,170457,crudo,
R340,aceite de oliva,10,grasa,171413,tal cual,
R340,naranja,150,fruta_lacteo,169097,peso comestible,
R341,pan integral,110,base,172688,tal cual,
R341,pechuga de pavo asada,60,proteina,171496,tal cual,
R341,tomate,60,verdura,170457,crudo,
R341,pl\xE1tano,100,fruta_lacteo,173944,peso comestible,
R342,copos de avena,40,base,173904,peso seco,
R342,bebida de soja,200,fruta_lacteo,172446,tal cual,
R342,pera,150,fruta_lacteo,169118,peso comestible,
R342,canela,2,condimento,171320,tal cual,
R343,copos de avena,60,base,173904,peso seco,
R343,bebida de soja,200,fruta_lacteo,172446,tal cual,
R343,compota de manzana,100,fruta_lacteo,171695,tal cual,
R343,semillas de calabaza,15,grasa,170556,tal cual,
R344,pan integral,50,base,172688,tal cual,
R344,at\xFAn en lata,52,proteina,173709,peso escurrido,
R344,tomate,60,verdura,170457,crudo,
R344,mandarina,180,fruta_lacteo,169105,peso comestible,
R345,pan integral,90,base,172688,tal cual,
R345,hummus,60,proteina,174289,tal cual,
R345,tomate,60,verdura,170457,crudo,
R345,kiwi,120,fruta_lacteo,168153,peso comestible,
R346,yogur de soja,200,proteina,175227,tal cual,si
R346,copos de avena,55,base,173904,peso seco,
R346,fresas,150,fruta_lacteo,167762,peso comestible,
R346,semillas de girasol,15,grasa,170562,tal cual,
R347,pan integral,50,base,172688,tal cual,
R347,aguacate,50,grasa,171705,crudo,
R347,tomate,50,verdura,170457,crudo,
R347,pechuga de pavo asada,40,proteina,171496,tal cual,
R348,pan blanco,70,base,174924,tal cual,
R348,pechuga de pavo asada,50,proteina,171496,tal cual,
R348,tomate,60,verdura,170457,crudo,
R348,mel\xF3n,150,fruta_lacteo,169092,peso comestible,
R349,copos de avena,65,base,173904,peso seco,
R349,bebida de soja,200,fruta_lacteo,172446,tal cual,
R349,pl\xE1tano,100,fruta_lacteo,173944,peso comestible,
R349,cacao puro en polvo,8,condimento,169593,tal cual,
R350,pan integral,80,base,172688,tal cual,
R350,sardina en lata,90,proteina,175139,peso escurrido,
R350,tomate,60,verdura,170457,crudo,
R350,naranja,150,fruta_lacteo,169097,peso comestible,
R351,yogur de soja,200,proteina,175227,tal cual,si
R351,mel\xF3n,200,fruta_lacteo,169092,peso comestible,
R351,copos de avena,30,base,173904,peso seco,
R352,pan integral,50,base,172688,tal cual,
R352,pechuga de pavo asada,50,proteina,171496,tal cual,
R352,tomate,50,verdura,170457,crudo,
R353,yogur de soja,200,proteina,175227,tal cual,si
R353,fresas,150,fruta_lacteo,167762,peso comestible,
R353,semillas de girasol,15,grasa,170562,tal cual,
R354,pan integral,40,base,172688,tal cual,
R354,hummus,40,proteina,174289,tal cual,
R354,pepino,50,verdura,168409,crudo,
R355,pan blanco,30,base,174924,tal cual,
R355,tomate,50,verdura,170457,crudo,
R355,aceite de oliva,5,grasa,171413,tal cual,
R355,manzana,150,fruta_lacteo,171688,peso comestible,
R356,pan integral,50,base,172688,tal cual,
R356,at\xFAn en lata,52,proteina,173709,peso escurrido,
R356,tomate,50,verdura,170457,crudo,
R357,pera,150,fruta_lacteo,169118,peso comestible,
R357,yogur de soja,125,proteina,175227,tal cual,si
R357,canela,2,condimento,171320,tal cual,
R358,pan integral,40,base,172688,tal cual,
R358,aguacate,50,grasa,171705,crudo,
R358,tomate,50,verdura,170457,crudo,
R359,pan integral,50,base,172688,tal cual,
R359,compota de manzana,120,fruta_lacteo,171695,tal cual,
R359,canela,2,condimento,171320,tal cual,
R380,copos de avena,40,base,173904,peso seco,
R380,bebida de soja,200,fruta_lacteo,172446,tal cual,
R380,manzana,150,fruta_lacteo,171688,peso comestible,
R380,canela,2,condimento,171320,tal cual,
R381,pan integral,50,base,172688,tal cual,
R381,tofu firme,80,proteina,172475,tal cual,
R381,tomate,60,verdura,170457,peso crudo,
R381,aceite de oliva,5,grasa,171413,peso a\xF1adido,
R382,yogur de soja,200,proteina,175227,tal cual,si
R382,kiwi,120,fruta_lacteo,168153,peso comestible,
R382,copos de avena,40,base,173904,peso seco,
R382,semillas de calabaza,15,grasa,170556,tal cual,
R383,pan integral,80,base,172688,tal cual,
R383,tempeh,80,proteina,174272,tal cual,
R383,pimiento rojo,60,verdura,170108,peso crudo,
R383,aceite de oliva,5,grasa,171413,peso a\xF1adido,
R384,copos de avena,40,base,173904,peso seco,
R384,yogur de soja,200,proteina,175227,tal cual,si
R384,pera,150,fruta_lacteo,169118,peso comestible,
R384,semillas de girasol,15,grasa,170562,tal cual,
R385,pan integral,50,base,172688,tal cual,
R385,hummus,40,proteina,174289,tal cual,
R385,aguacate,40,grasa,171705,crudo,
R385,tomate,50,verdura,170457,peso crudo,
R386,copos de avena,50,base,173904,peso seco,
R386,bebida de soja,200,fruta_lacteo,172446,tal cual,
R386,fresas,150,fruta_lacteo,167762,peso comestible,
R386,semillas de girasol,10,grasa,170562,tal cual,
R387,yogur de soja,200,proteina,175227,tal cual,si
R387,mel\xF3n,200,fruta_lacteo,169092,peso comestible,
R387,copos de avena,30,base,173904,peso seco,
R387,semillas de calabaza,10,grasa,170556,tal cual,
R388,pan integral,30,base,172688,tal cual,
R388,hummus,30,proteina,174289,tal cual,
R388,tomate,50,verdura,170457,peso crudo,
R389,yogur de soja,125,proteina,175227,tal cual,si
R389,mandarina,120,fruta_lacteo,169105,peso comestible,
R389,semillas de girasol,10,grasa,170562,tal cual,
R390,pan integral,30,base,172688,tal cual,
R390,aguacate,40,grasa,171705,crudo,
R390,pepino,50,verdura,168409,peso crudo,
R391,manzana,150,fruta_lacteo,171688,peso comestible,
R391,yogur de soja,125,proteina,175227,tal cual,si
R391,canela,2,condimento,171320,tal cual,
R392,pan integral,30,base,172688,tal cual,
R392,tomate,60,verdura,170457,peso crudo,
R392,aceite de oliva,5,grasa,171413,peso a\xF1adido,
R392,semillas de calabaza,10,grasa,170556,tal cual,
R393,pan integral,40,base,172688,tal cual,
R393,tofu firme,60,proteina,172475,tal cual,
R393,tomate,50,verdura,170457,peso crudo,
R394,lenteja cocida,200,base,172421,peso cocido,
R394,arroz,50,base,169756,peso seco,
R394,zanahoria,60,verdura,170393,peso crudo,
R394,cebolla,50,aromatico,170000,peso crudo,
R394,tomate triturado,100,verdura,170051,crudo,
R394,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R395,garbanzo cocido,220,base,173757,peso cocido,
R395,espinacas,100,verdura,168462,peso crudo,
R395,pimiento rojo,80,verdura,170108,peso crudo,
R395,tomate triturado,100,verdura,170051,crudo,
R395,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R395,comino,2,condimento,170923,tal cual,
R396,pasta,70,base,168927,peso seco,
R396,tempeh,100,proteina,174272,tal cual,
R396,br\xF3coli,150,verdura,170379,peso crudo,
R396,tomate triturado,120,verdura,170051,crudo,
R396,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R397,arroz,60,base,169756,peso seco,
R397,soja texturizada,50,proteina,174275,peso seco,si
R397,guisantes,100,verdura,170419,peso crudo,
R397,pimiento rojo,60,verdura,170108,peso crudo,
R397,tomate triturado,100,verdura,170051,crudo,
R397,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R398,quinoa,60,base,168874,peso seco,
R398,tofu firme,120,proteina,172475,tal cual,
R398,calabac\xEDn,150,verdura,169291,peso crudo,
R398,zanahoria,60,verdura,170393,peso crudo,
R398,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R399,alubia blanca cocida,250,base,175203,peso cocido,
R399,puerro,100,aromatico,169246,peso crudo,
R399,zanahoria,80,verdura,170393,peso crudo,
R399,tomate triturado,100,verdura,170051,crudo,
R399,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R400,tofu firme,150,proteina,172475,tal cual,
R400,champi\xF1\xF3n,150,verdura,169251,peso crudo,
R400,pimiento verde,80,verdura,170427,peso crudo,
R400,cebolla,50,aromatico,170000,peso crudo,
R400,pan integral,40,base,172688,tal cual,
R400,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R402,garbanzo cocido,160,base,173757,peso cocido,
R402,tomate,100,verdura,170457,peso crudo,
R402,aguacate,50,grasa,171705,crudo,
R402,lechuga romana,50,verdura,169247,peso crudo,
R402,aceite de oliva,5,grasa,171413,peso a\xF1adido,
R403,lenteja cocida,200,base,172421,peso cocido,
R403,calabaza,200,verdura,168448,peso crudo,
R403,cebolla,50,aromatico,170000,peso crudo,
R403,piment\xF3n,2,condimento,171329,tal cual,
R403,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R404,tempeh,100,proteina,174272,tal cual,
R404,jud\xEDa verde,150,verdura,169961,peso crudo,
R404,patata,200,base,170026,peso crudo,
R404,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R405,soja texturizada,40,proteina,174275,peso seco,si
R405,br\xF3coli,200,verdura,170379,peso crudo,
R405,boniato,200,base,168482,peso crudo,
R405,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R406,tofu firme,150,proteina,172475,tal cual,
R406,espinacas,150,verdura,168462,peso crudo,
R406,cebolla,50,aromatico,170000,peso crudo,
R406,pan integral,40,base,172688,tal cual,
R406,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R407,alubia roja cocida,160,base,175194,peso cocido,
R407,pimiento rojo,100,verdura,170108,peso crudo,
R407,aguacate,50,grasa,171705,crudo,
R407,cebolla,30,aromatico,170000,peso crudo,
R407,aceite de oliva,5,grasa,171413,peso a\xF1adido,
R408,lenteja cocida,200,base,172421,peso cocido,
R408,arroz,50,base,169756,peso seco,
R408,zanahoria,60,verdura,170393,peso crudo,
R408,cebolla,50,aromatico,170000,peso crudo,
R408,yogur natural,125,fruta_lacteo,171284,tal cual,
R408,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R410,pasta,70,base,168927,peso seco,
R410,calabac\xEDn,150,verdura,169291,peso crudo,
R410,pimiento rojo,80,verdura,170108,peso crudo,
R410,tomate triturado,120,verdura,170051,crudo,
R410,mozzarella,60,proteina,170845,tal cual,
R410,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R411,arroz,60,base,169756,peso seco,
R411,br\xF3coli,150,verdura,170379,peso crudo,
R411,zanahoria,60,verdura,170393,peso crudo,
R411,queso fresco,80,proteina,172223,tal cual,
R411,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R412,cusc\xFAs,60,base,169699,peso seco,
R412,berenjena,150,verdura,169228,peso crudo,
R412,pimiento rojo,80,verdura,170108,peso crudo,
R412,cebolla,50,aromatico,170000,peso crudo,
R412,yogur natural,125,fruta_lacteo,171284,tal cual,
R412,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R413,calabac\xEDn,150,verdura,169291,peso crudo,
R413,pimiento verde,100,verdura,170427,peso crudo,
R413,cebolla,60,aromatico,170000,peso crudo,
R413,tomate triturado,150,verdura,170051,crudo,
R413,queso fresco,80,proteina,172223,tal cual,
R413,pan integral,40,base,172688,tal cual,
R413,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R414,lenteja cocida,200,base,172421,peso cocido,
R414,tomate,100,verdura,170457,peso crudo,
R414,pepino,80,verdura,168409,peso crudo,
R414,queso fresco,60,proteina,172223,tal cual,
R414,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R417,garbanzo cocido,160,base,173757,peso cocido,
R417,pepino,100,verdura,168409,peso crudo,
R417,tomate,100,verdura,170457,peso crudo,
R417,yogur natural,125,fruta_lacteo,171284,tal cual,
R417,aceite de oliva,5,grasa,171413,peso a\xF1adido,
R320,calabaza,200,verdura,168448,peso crudo,
R320,tofu firme,150,proteina,172475,tal cual,
R320,pan integral,60,base,172688,tal cual,
R320,aceite de oliva,10,grasa,171413,tal cual,
R409,garbanzo cocido,200,base,173757,peso cocido,
R409,espinacas,100,verdura,168462,peso crudo,
R409,reques\xF3n,100,proteina,172182,tal cual,si
R409,tomate triturado,100,verdura,170051,crudo,
R409,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R416,boniato,250,base,168482,peso crudo,
R416,reques\xF3n,100,proteina,172182,tal cual,si
R416,lechuga romana,60,verdura,169247,peso crudo,
R416,tomate,80,verdura,170457,peso crudo,
R416,aceite de oliva,5,grasa,171413,peso a\xF1adido,
R401,calabac\xEDn,200,verdura,169291,peso crudo,
R401,patata,150,base,170026,peso crudo,
R401,tofu firme,100,proteina,172475,tal cual,
R401,aceite de oliva,5,grasa,171413,peso a\xF1adido,
R415,calabaza,200,verdura,168448,peso crudo,
R415,patata,200,base,170026,peso crudo,
R415,reques\xF3n,100,proteina,172182,tal cual,si
R415,aceite de oliva,5,grasa,171413,peso a\xF1adido,
R418,berenjena,200,verdura,169228,peso crudo,
R418,mozzarella,60,proteina,170845,tal cual,
R418,tomate triturado,100,verdura,170051,crudo,
R418,pan integral,40,base,172688,tal cual,
R418,aceite de oliva,5,grasa,171413,peso a\xF1adido,
R420,pan sin gluten,60,base,2707797,tal cual,
R420,pechuga de pavo asada,80,proteina,171496,peso cocinado,
R420,tomate,80,verdura,170457,peso crudo,
R420,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R421,tortita de ma\xEDz,40,base,168857,tal cual,
R421,at\xFAn en lata,80,proteina,173709,peso escurrido,
R421,aguacate,50,grasa,171705,peso comestible,
R421,tomate,80,verdura,170457,peso crudo,
R422,huevo,100,proteina,171287,peso crudo,
R422,salm\xF3n,70,proteina,175167,peso crudo,
R422,pan sin gluten,40,base,2707797,tal cual,
R422,aceite de oliva,5,grasa,171413,peso a\xF1adido,
R423,huevo cocido,100,proteina,173424,peso cocido,
R423,pechuga de pavo asada,80,proteina,171496,peso cocinado,
R423,tortita de ma\xEDz,25,base,168857,tal cual,
R423,aguacate,40,grasa,171705,peso comestible,
R423,tomate,80,verdura,170457,peso crudo,
R424,claras de huevo,150,proteina,172183,peso crudo,
R424,pechuga de pavo asada,80,proteina,171496,peso cocinado,
R424,pan sin gluten,60,base,2707797,tal cual,
R424,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R425,huevo,100,proteina,171287,peso crudo,
R425,salm\xF3n,70,proteina,175167,peso crudo,
R425,pan sin gluten,40,base,2707797,tal cual,
R425,tomate,80,verdura,170457,peso crudo,
R425,aceite de oliva,5,grasa,171413,peso a\xF1adido,
R426,yogur griego,200,fruta_lacteo,170894,tal cual,
R426,copos de avena sin gluten,40,base,173904,peso seco,si
R426,fresas,100,fruta_lacteo,167762,peso comestible,
R426,miel,10,fruta_lacteo,169640,tal cual,
R427,copos de avena sin gluten,50,base,173904,peso seco,si
R427,leche semidesnatada,200,fruta_lacteo,171267,tal cual,
R427,manzana,100,fruta_lacteo,171688,peso comestible,
R427,canela,1,condimento,171320,tal cual,
R428,pan sin gluten,50,base,2707797,tal cual,
R428,reques\xF3n,80,proteina,172182,tal cual,si
R428,miel,10,fruta_lacteo,169640,tal cual,
R428,naranja,150,fruta_lacteo,169097,peso comestible,
R429,yogur natural,200,fruta_lacteo,171284,tal cual,
R429,copos de avena sin gluten,40,base,173904,peso seco,si
R429,kiwi,100,fruta_lacteo,168153,peso comestible,
R429,almendra,15,grasa,170567,peso comestible,
R430,tortita de ma\xEDz,20,base,168857,tal cual,
R430,pechuga de pavo asada,80,proteina,171496,peso cocinado,
R430,tomate,60,verdura,170457,peso crudo,
R431,at\xFAn en lata,60,proteina,173709,peso escurrido,
R431,tortita de ma\xEDz,20,base,168857,tal cual,
R431,pimiento rojo,60,verdura,170108,peso crudo,
R432,salm\xF3n,70,proteina,175167,peso crudo,
R432,tortita de ma\xEDz,20,base,168857,tal cual,
R432,tomate,80,verdura,170457,peso crudo,
R433,yogur natural,125,fruta_lacteo,171284,tal cual,
R433,pl\xE1tano,80,fruta_lacteo,173944,peso comestible,
R433,copos de avena sin gluten,20,base,173904,peso seco,si
R434,pan sin gluten,30,base,2707797,tal cual,
R434,reques\xF3n,60,proteina,172182,tal cual,si
R434,tomate,60,verdura,170457,peso crudo,
R435,mandarina,150,fruta_lacteo,169105,peso comestible,
R435,yogur griego,100,fruta_lacteo,170894,tal cual,
R435,almendra,10,grasa,170567,peso comestible,
R436,arroz,70,base,169756,peso seco,
R436,pechuga de pollo,120,proteina,171077,peso crudo,
R436,pimiento rojo,80,verdura,170108,peso crudo,
R436,cebolla,60,verdura,170000,peso crudo,
R436,tomate triturado,100,verdura,170051,crudo,
R436,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R437,merluza,150,proteina,171964,peso crudo,si
R437,patata,200,base,170026,peso crudo,
R437,jud\xEDa verde,150,verdura,169961,peso crudo,
R437,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R438,ternera magra (solomillo de aguja),130,proteina,174763,peso crudo,si
R438,boniato,200,base,168482,peso crudo,
R438,br\xF3coli,150,verdura,170379,peso crudo,
R438,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R439,pasta sin gluten,70,base,168899,peso seco,
R439,at\xFAn en lata,70,proteina,173709,peso escurrido,
R439,tomate triturado,100,verdura,170051,crudo,
R439,calabac\xEDn,150,verdura,169291,peso crudo,
R439,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R440,lubina,150,proteina,171948,peso crudo,si
R440,patata,200,base,170026,peso crudo,
R440,pimiento rojo,100,verdura,170108,peso crudo,
R440,cebolla,50,verdura,170000,peso crudo,
R440,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R441,lenteja cocida,180,base,172421,peso cocido,
R441,arroz,50,base,169756,peso seco,
R441,zanahoria,80,verdura,170393,peso crudo,
R441,cebolla,60,verdura,170000,peso crudo,
R441,tomate triturado,100,verdura,170051,crudo,
R441,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R442,garbanzo cocido,180,base,173757,peso cocido,
R442,espinacas,100,verdura,168462,peso crudo,
R442,quinoa,40,base,168874,peso seco,
R442,tomate triturado,100,verdura,170051,crudo,
R442,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R443,polenta,60,base,168867,peso seco,
R443,champi\xF1\xF3n,150,verdura,169251,peso crudo,
R443,huevo,50,proteina,171287,peso crudo,
R443,tomate triturado,100,verdura,170051,crudo,
R443,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R444,pechuga de pollo,130,proteina,171077,peso crudo,
R444,calabac\xEDn,200,verdura,169291,peso crudo,
R444,arroz,40,base,169756,peso seco,
R444,aceite de oliva,5,grasa,171413,peso a\xF1adido,
R445,huevo,100,proteina,171287,peso crudo,
R445,at\xFAn en lata,50,proteina,173709,peso escurrido,
R445,lechuga romana,60,verdura,169247,peso crudo,
R445,tomate,80,verdura,170457,peso crudo,
R445,tortita de ma\xEDz,20,base,168857,tal cual,
R445,aceite de oliva,5,grasa,171413,peso a\xF1adido,
R446,salm\xF3n,120,proteina,175167,peso crudo,
R446,boniato,150,base,168482,peso crudo,
R446,esp\xE1rrago,100,verdura,168389,peso crudo,
R446,aceite de oliva,5,grasa,171413,peso a\xF1adido,
R447,calabac\xEDn,200,verdura,169291,peso crudo,
R447,pechuga de pavo asada,80,proteina,171496,peso cocinado,
R447,pan sin gluten,50,base,2707797,tal cual,
R447,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R448,sepia,150,proteina,174215,peso crudo,
R448,patata,150,base,170026,peso crudo,
R448,pimiento rojo,100,verdura,170108,peso crudo,
R448,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R449,claras de huevo,200,proteina,172183,peso crudo,
R449,champi\xF1\xF3n,150,verdura,169251,peso crudo,
R449,pan sin gluten,50,base,2707797,tal cual,
R449,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R450,calabaza,200,verdura,168448,peso crudo,
R450,reques\xF3n,100,proteina,172182,tal cual,si
R450,quinoa,40,base,168874,peso seco,
R450,aceite de oliva,5,grasa,171413,peso a\xF1adido,
R451,huevo,100,proteina,171287,peso crudo,
R451,patata,200,base,170026,peso crudo,
R451,cebolla,50,verdura,170000,peso crudo,
R451,lechuga romana,60,verdura,169247,peso crudo,
R451,tomate,80,verdura,170457,peso crudo,
R451,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R460,copos de avena sin gluten,50,base,173904,peso seco,si
R460,bebida de soja,200,fruta_lacteo,172446,tal cual,
R460,pl\xE1tano,100,fruta_lacteo,173944,peso comestible,
R460,canela,1,condimento,171320,tal cual,
R461,yogur de soja,250,fruta_lacteo,175227,tal cual,si
R461,copos de avena sin gluten,40,base,173904,peso seco,si
R461,fresas,100,fruta_lacteo,167762,peso comestible,
R461,semillas de girasol,15,grasa,170562,peso comestible,
R462,pan sin gluten,60,base,2707797,tal cual,
R462,crema de cacahuete,20,grasa,172470,tal cual,
R462,pl\xE1tano,100,fruta_lacteo,173944,peso comestible,
R463,tortita de ma\xEDz,40,base,168857,tal cual,
R463,crema de cacahuete,20,grasa,172470,tal cual,
R463,manzana,150,fruta_lacteo,171688,peso comestible,
R464,pan sin gluten,60,base,2707797,tal cual,
R464,hummus,60,proteina,174289,tal cual,
R464,tomate,80,verdura,170457,peso crudo,
R465,copos de avena sin gluten,50,base,173904,peso seco,si
R465,bebida de soja,150,fruta_lacteo,172446,tal cual,
R465,compota de manzana,80,fruta_lacteo,171695,tal cual,
R465,semillas de calabaza,15,grasa,170556,peso comestible,
R466,yogur de soja,250,fruta_lacteo,175227,tal cual,si
R466,kiwi,100,fruta_lacteo,168153,peso comestible,
R466,mandarina,100,fruta_lacteo,169105,peso comestible,
R466,copos de avena sin gluten,30,base,173904,peso seco,si
R467,pan sin gluten,50,base,2707797,tal cual,
R467,tofu firme,100,proteina,172475,peso crudo,
R467,tomate,80,verdura,170457,peso crudo,
R467,aceite de oliva,5,grasa,171413,peso a\xF1adido,
R468,tortita de ma\xEDz,20,base,168857,tal cual,
R468,hummus,45,proteina,174289,tal cual,
R468,tomate,60,verdura,170457,peso crudo,
R469,pan sin gluten,30,base,2707797,tal cual,
R469,crema de cacahuete,15,grasa,172470,tal cual,
R469,manzana,100,fruta_lacteo,171688,peso comestible,
R470,yogur de soja,125,fruta_lacteo,175227,tal cual,si
R470,fresas,100,fruta_lacteo,167762,peso comestible,
R470,semillas de calabaza,10,grasa,170556,peso comestible,
R471,bebida de soja,200,fruta_lacteo,172446,tal cual,
R471,pl\xE1tano,80,fruta_lacteo,173944,peso comestible,
R471,crema de cacahuete,10,grasa,172470,tal cual,
R472,tortita de ma\xEDz,20,base,168857,tal cual,
R472,tofu firme,75,proteina,172475,peso crudo,
R472,pimiento rojo,60,verdura,170108,peso crudo,
R473,yogur de soja,200,fruta_lacteo,175227,tal cual,si
R473,compota de manzana,100,fruta_lacteo,171695,tal cual,
R473,canela,1,condimento,171320,tal cual,
R474,tofu firme,150,proteina,172475,peso crudo,
R474,quinoa,50,base,168874,peso seco,
R474,calabac\xEDn,150,verdura,169291,peso crudo,
R474,pimiento rojo,80,verdura,170108,peso crudo,
R474,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R475,tempeh,100,proteina,174272,peso crudo,
R475,boniato,200,base,168482,peso crudo,
R475,br\xF3coli,150,verdura,170379,peso crudo,
R475,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R476,soja texturizada,40,proteina,174275,peso seco,si
R476,tomate triturado,150,verdura,170051,crudo,
R476,calabac\xEDn,150,verdura,169291,peso crudo,
R476,arroz,40,base,169756,peso seco,
R476,aceite de oliva,10,grasa,171413,peso a\xF1adido,
R477,calabac\xEDn,200,verdura,169291,peso crudo,
R477,tofu firme,100,proteina,172475,peso crudo,
R477,pan sin gluten,50,base,2707797,tal cual,
R477,aceite de oliva,10,grasa,171413,peso a\xF1adido,`;

  // src/motor/coherencia-nutricional.ts
  var TOLERANCIA_RELATIVA = 0.1;
  var TOLERANCIA_ABSOLUTA_KCAL = 10;
  function coherenciaKcalMacros(r) {
    const conFibra = typeof r.fibraG === "number" && Number.isFinite(r.fibraG) && r.fibraG >= 0 && r.fibraG <= r.hidrato;
    const estimadas = conFibra ? 4 * r.proteina + 4 * (r.hidrato - r.fibraG) + 2 * r.fibraG + 9 * r.grasa : 4 * r.proteina + 4 * r.hidrato + 9 * r.grasa;
    const diferencia = estimadas - r.kcal;
    const relativa = r.kcal > 0 ? Math.abs(diferencia) / r.kcal : Infinity;
    return {
      kcalDeclaradas: r.kcal,
      kcalEstimadas: Math.round(estimadas),
      diferencia: Math.round(diferencia),
      relativa,
      ok: Math.abs(diferencia) <= Math.max(TOLERANCIA_RELATIVA * r.kcal, TOLERANCIA_ABSOLUTA_KCAL),
      metodo: conFibra ? "con_fibra" : "simple"
    };
  }

  // src/motor/cuadrar-dia.ts
  var TOLERANCIA_DIA = 0.05;
  var MAX_SUBIDA_COMIDA = 0.35;
  var MAX_BAJADA_COMIDA = 0.2;
  var FRACCIONES_AJUSTE = [1, 0.75, 0.5, 0.25];
  var ORDEN_SUBIDA = ["comida", "cena", "desayuno", "merienda", "media_manana"];
  var ORDEN_BAJADA = ["media_manana", "merienda", "desayuno", "cena", "comida"];
  function cuadrarDias(asignaciones, slots, recetas, opciones = {}) {
    const porId = new Map(recetas.map((r) => [r.id, r]));
    const salida = asignaciones.map((a2) => ({ ...a2 }));
    const dias = [];
    const avisos = [];
    const diasPresentes = [...new Set(slots.map((s) => s.dia))];
    for (const dia of diasPresentes) {
      const delDia = slots.filter((s) => s.dia === dia);
      const objetivo = delDia.reduce((s, x) => s + x.kcalObjetivo, 0);
      const mias = salida.filter((a2) => a2.dia === dia);
      const sumar = () => mias.reduce((s, a2) => s + a2.kcalResultante, 0);
      const antes = sumar();
      const margen = TOLERANCIA_DIA * objetivo;
      let resto = objetivo - antes;
      if (Math.abs(resto) > margen && objetivo > 0) {
        const subir = resto > 0;
        const orden = subir ? ORDEN_SUBIDA : ORDEN_BAJADA;
        const candidatas = [...mias].sort((a2, b) => orden.indexOf(a2.franja) - orden.indexOf(b.franja));
        for (const a2 of candidatas) {
          if (Math.abs(resto) <= margen * 0.5) break;
          if (opciones.noMover?.(dia, a2.franja)) continue;
          const slot = delDia.find((s) => s.franja === a2.franja);
          const receta = recetaDeId(porId, a2.receta);
          if (!slot || !receta) continue;
          const tope = subir ? slot.kcalObjetivo * (1 + MAX_SUBIDA_COMIDA) : slot.kcalObjetivo * (1 - MAX_BAJADA_COMIDA);
          const deseada = subir ? Math.min(tope, a2.kcalResultante + resto) : Math.max(tope, a2.kcalResultante + resto);
          if (subir ? deseada <= a2.kcalResultante : deseada >= a2.kcalResultante) continue;
          let r;
          for (const fraccion of FRACCIONES_AJUSTE) {
            const objetivoIntento = a2.kcalResultante + fraccion * (deseada - a2.kcalResultante);
            const cand = racionParaObjetivo(receta, objetivoIntento, a2.franja, { cargaAlta: slot.cargaAlta, piso: 0.5 });
            const mejora = subir ? cand.kcalResultante > a2.kcalResultante : cand.kcalResultante < a2.kcalResultante;
            const dentro = subir ? cand.kcalResultante <= tope + 1 : cand.kcalResultante >= tope - 1;
            if (!mejora || !dentro) continue;
            if (incumplimientosRacion(a2.franja, receta, cand.factorRedondeado, { cargaAlta: slot.cargaAlta }).incumplimientos.length) continue;
            if (validarPlatoGenerado(a2.franja, gramosEscalados(receta, cand.factorRedondeado), { cargaAlta: slot.cargaAlta }).incumplimientos.length) continue;
            r = cand;
            break;
          }
          if (!r) continue;
          const delta = r.kcalResultante - a2.kcalResultante;
          a2.racionAjustada = r.factorRedondeado;
          a2.kcalResultante = r.kcalResultante;
          a2.ajusteDia = {
            kcal: (a2.ajusteDia?.kcal ?? 0) + delta,
            motivo: `Hoy esta comida lleva ${Math.abs(delta)} kcal ${delta > 0 ? "m\xE1s" : "menos"} porque las otras comidas del d\xEDa ${delta > 0 ? "no daban m\xE1s de s\xED" : "se pasaban"} con cantidades normales.`
          };
          resto = objetivo - sumar();
        }
      }
      if (opciones.admite && objetivo - sumar() > margen) {
        const postres = recetas.filter((x) => x.tipoPlato === "postre" && opciones.admite(x));
        for (const fr of ["comida", "cena"]) {
          const falta = objetivo - sumar();
          if (falta <= margen) break;
          const a2 = mias.find((x) => x.franja === fr);
          if (!a2 || opciones.noMover?.(dia, fr)) continue;
          const base = recetaDeId(porId, a2.receta);
          const slot = delDia.find((x) => x.franja === fr);
          if (!base || !slot) continue;
          const platos = base.platos ? base.platos.map((id) => porId.get(id)).filter((x) => !!x) : [base];
          if (platos.some((x) => x.tipoPlato === "postre")) continue;
          let mejor;
          const usos = (id) => salida.filter((x) => (x.franja === "comida" || x.franja === "cena") && (recetaDeId(porId, x.receta)?.platos ?? [x.receta]).includes(id)).length;
          for (const po of postres.filter((x) => x.franjas.includes(fr) && usos(x.id) < 2)) {
            const comp = componerComida([...platos, po]);
            const kcal = kcalConRacion(comp, a2.racionAjustada);
            const delta = kcal - a2.kcalResultante;
            if (delta <= 0 || delta > falta + margen) continue;
            if (incumplimientosRacion(fr, comp, a2.racionAjustada, { cargaAlta: slot.cargaAlta }).incumplimientos.length) continue;
            if (validarPlatoGenerado(fr, gramosEscalados(comp, a2.racionAjustada), { cargaAlta: slot.cargaAlta }).incumplimientos.length) continue;
            if (!mejor || Math.abs(falta - delta) < Math.abs(falta - mejor.delta)) mejor = { comp, kcal, delta };
          }
          if (!mejor) continue;
          porId.set(mejor.comp.id, mejor.comp);
          a2.receta = mejor.comp.id;
          a2.kcalResultante = mejor.kcal;
          const postre = recetaDeId(porId, mejor.comp.platos[mejor.comp.platos.length - 1]);
          a2.ajusteDia = { kcal: (a2.ajusteDia?.kcal ?? 0) + mejor.delta, motivo: `Hoy esta comida lleva de postre ${postre ? postre.nombre.toLowerCase() : "un postre"} (${mejor.delta} kcal) para llegar a las kcal del d\xEDa con cantidades normales.` };
        }
      }
      const servido = sumar();
      const cuadrado = Math.abs(objetivo - servido) <= margen || objetivo === 0;
      const aviso = cuadrado ? void 0 : `${dia}: ${objetivo - servido > 0 ? "faltan" : "sobran"} ${Math.abs(Math.round(objetivo - servido))} kcal del d\xEDa (objetivo ${Math.round(objetivo)}, servido ${Math.round(servido)}) con cantidades normales. Se puede repartir en otra toma, cerrar con un postre o cambiar alg\xFAn plato; no se infla nada.`;
      if (aviso) avisos.push(aviso);
      dias.push({ dia, objetivo: Math.round(objetivo), servidoAntes: Math.round(antes), servido: Math.round(servido), cuadrado, ...aviso ? { aviso } : {} });
    }
    return { asignaciones: salida, dias, avisos };
  }
  function cuadrarConComidaFuera(primera, slots, recetas, o) {
    if (!o.fuera.size) return primera;
    const { diaHoy, fuera, horaDe } = o;
    const primeraFuera = Math.min(...[...fuera.keys()].map((f2) => horaDe(f2) ?? -1));
    const previas = primera.asignaciones;
    const entrada = previas.map((a2) => a2.dia === diaHoy && fuera.has(a2.franja) ? { ...a2, kcalResultante: fuera.get(a2.franja) } : a2);
    for (const [f2, kcal] of fuera) {
      if (!previas.some((a2) => a2.dia === diaHoy && a2.franja === f2)) entrada.push({ dia: diaHoy, franja: f2, receta: "", racionAjustada: 1, kcalResultante: kcal, soloFuera: true });
    }
    const segunda = cuadrarDias(entrada, slots, recetas, {
      noMover: (dia, franja) => dia !== diaHoy || !!o.noMoverDia?.(dia) || fuera.has(franja) || !o.todoElDia && (horaDe(franja) ?? 24) <= primeraFuera
    });
    const asignaciones = segunda.asignaciones.filter((a2) => !a2.soloFuera).map((a2) => a2.dia === diaHoy && fuera.has(a2.franja) ? previas.find((b) => b.dia === a2.dia && b.franja === a2.franja) : a2);
    return { ...segunda, asignaciones };
  }
  function descontarTomaPrevia(primera, slots, recetas, o) {
    const porId = new Map(recetas.map((r) => [r.id, r]));
    const asignaciones = primera.asignaciones.map((a2) => ({ ...a2 }));
    const delDia = slots.filter((s) => s.dia === o.dia);
    const candidatas = asignaciones.filter((a2) => a2.dia === o.dia && (o.horaDe(a2.franja) ?? -1) > o.hora && !o.noMover?.(o.dia, a2.franja)).sort((a2, b) => ORDEN_BAJADA.indexOf(a2.franja) - ORDEN_BAJADA.indexOf(b.franja));
    const HOLGURA = 25;
    let pendiente = o.kcal;
    for (const a2 of candidatas) {
      if (pendiente <= HOLGURA / 2) break;
      const slot = delDia.find((s) => s.franja === a2.franja);
      const receta = recetaDeId(porId, a2.receta);
      if (!slot || !receta) continue;
      const tope = slot.kcalObjetivo * (1 - MAX_BAJADA_COMIDA);
      const deseada = Math.max(tope, a2.kcalResultante - pendiente);
      if (deseada >= a2.kcalResultante) continue;
      let r;
      for (const fraccion of FRACCIONES_AJUSTE) {
        const cand = racionParaObjetivo(receta, a2.kcalResultante + fraccion * (deseada - a2.kcalResultante), a2.franja, { cargaAlta: slot.cargaAlta, piso: 0.5 });
        const quita = a2.kcalResultante - cand.kcalResultante;
        if (quita <= 0 || quita > pendiente + HOLGURA || cand.kcalResultante < tope - 1) continue;
        if (incumplimientosRacion(a2.franja, receta, cand.factorRedondeado, { cargaAlta: slot.cargaAlta }).incumplimientos.length) continue;
        if (validarPlatoGenerado(a2.franja, gramosEscalados(receta, cand.factorRedondeado), { cargaAlta: slot.cargaAlta }).incumplimientos.length) continue;
        r = cand;
        break;
      }
      if (!r) continue;
      const delta = r.kcalResultante - a2.kcalResultante;
      a2.racionAjustada = r.factorRedondeado;
      a2.kcalResultante = r.kcalResultante;
      a2.ajusteDia = { kcal: (a2.ajusteDia?.kcal ?? 0) + delta, motivo: `Hoy esta comida lleva ${Math.abs(delta)} kcal menos porque te has tomado algo antes de entrenar.` };
      pendiente += delta;
    }
    const descontado = Math.round(o.kcal - pendiente);
    const dias = primera.dias.map((d) => {
      if (d.dia !== o.dia) return d;
      const servido = Math.round(asignaciones.filter((a2) => a2.dia === o.dia).reduce((s, a2) => s + a2.kcalResultante, 0) + o.kcal);
      const cuadrado = Math.abs(d.objetivo - servido) <= TOLERANCIA_DIA * d.objetivo || d.objetivo === 0;
      const { aviso: _aviso, ...resto } = d;
      return { ...resto, servido, cuadrado, ...cuadrado ? {} : { aviso: _aviso } };
    });
    return { asignaciones, dias, avisos: primera.avisos, descontado };
  }
  var UMBRAL_FALTA_COMPETICION = 0.08;
  var faltaVisibleCompeticion = (falta, kcalDia) => falta > UMBRAL_FALTA_COMPETICION * kcalDia;

  // src/motor/nube-datos.ts
  var CLAVES_NUBE = [
    "app-dietas-consentimiento",
    "app-dietas-ultimo-perfil",
    "app-dietas-periodo",
    "app-dietas-siguiente",
    "app-dietas-lista-negra",
    "app-dietas-recetas-si-o-si",
    "app-dietas-semana-fija",
    "app-dietas-volumen",
    "app-dietas-comidas-hechas",
    "app-dietas-comidas-fuera",
    "app-dietas-recetas-favoritas",
    "app-dietas-calendario",
    "app-dietas-sustituciones",
    "app-dietas-lista-compra-manual",
    "app-dietas-alertas-pablo"
  ];
  var VERSION_CONSENTIMIENTO_NUBE = "2026-10-14-nube-3";
  var MAX_INSTANTANEA = 4e5;
  function nubeOfrecida(search) {
    return new URLSearchParams(search).get("nube") === "1";
  }
  function instantaneaLocal(leer) {
    const datos = {};
    for (const clave2 of CLAVES_NUBE) {
      const crudo = leer(clave2);
      if (crudo === null || crudo === "") continue;
      try {
        datos[clave2] = JSON.parse(crudo);
      } catch {
      }
    }
    return { datos, tamano: JSON.stringify(datos).length };
  }
  function firmaPlan(asignaciones) {
    const texto = [...asignaciones].map((a2) => `${a2.dia}|${a2.franja}|${a2.receta}|${Math.round((a2.racionAjustada ?? 1) * 100)}`).sort().join(";");
    let h = 5381;
    for (let i = 0; i < texto.length; i++) h = (h * 33 ^ texto.charCodeAt(i)) >>> 0;
    return `${asignaciones.length}-${h.toString(36)}`;
  }
  var idAlerta = (a2) => `${a2.fecha.slice(0, 10)}|${a2.firma}`;
  function alertasPorSubir(alertas, subidas) {
    const ya = new Set(subidas);
    return alertas.filter((a2) => a2 && typeof a2.fecha === "string" && typeof a2.firma === "string" && !ya.has(idAlerta(a2)));
  }
  function filaAlerta(a2) {
    const tipo = typeof a2.tipo === "string" && /^[a-z_]{1,40}$/.test(a2.tipo) ? a2.tipo : "cribado";
    return { tipo, prioritaria: a2.prioritaria === true, datos: a2 };
  }
  function correoValido(c2) {
    return /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/.test(c2.trim());
  }
  function necesitaVentanaNube(e) {
    if (!e.nubeOfrecida) return false;
    return !(e.haySesion && correoValido(e.contacto ?? "") && e.consentimientoVersion === VERSION_CONSENTIMIENTO_NUBE);
  }
  function accionReintentoNube(e) {
    if (!e.nubeOfrecida || !correoValido(e.contacto ?? "") || e.consentimientoVersion !== VERSION_CONSENTIMIENTO_NUBE) return "nada";
    return e.haySesion ? "subir" : "entrar_y_subir";
  }
  function resultadoBorradoNube(r) {
    const codigo = r.error?.code ?? "";
    if (codigo === "PGRST202" || codigo === "42883") return "sin_funcion";
    if (r.error) return "error";
    return r.data === "BORRADO" ? "total" : "error";
  }

  // src/motor/plan-pablo.ts
  function restriccionesComoApp(r) {
    const a2 = r?.alergias ?? {};
    const evitan = [r?.evitan, ...r?.listaNegra ?? []].filter((x) => typeof x === "string" && x.trim() !== "").join(", ");
    return alergiasPreferenciasDesdeTexto({ celiaquia: !!a2.celiaquia, lactosa: !!a2.lactosa, vegetariano: !!a2.vegetariano, vegano: !!a2.vegano, otros: a2.otros }, evitan);
  }
  var RACION_MIN = 0.5;
  var RACION_MAX = 2;
  function validarCasilla(c2, catalogo, ap) {
    const porId = new Map(catalogo.map((r2) => [r2.id, r2]));
    const r = recetaDeId(porId, c2.receta);
    if (!r) return { ok: false, existe: false, compatible: false, kcal: 0, avisos: [`la receta \xAB${c2.receta}\xBB no est\xE1 en el cat\xE1logo`] };
    const avisos = [];
    const compat = evaluarCompatibilidad(r, ap);
    if (!compat.compatible) avisos.push(`no encaja con las restricciones de la persona (${compat.motivo?.detalle ?? "alergia o lista negra"})`);
    if (!r.franjas.includes(c2.franja) && !(r.platos && r.platos.length)) avisos.push(`esta receta no est\xE1 pensada para ${c2.franja.replace("_", " ")}`);
    if (!Number.isFinite(c2.racionAjustada) || c2.racionAjustada < RACION_MIN || c2.racionAjustada > RACION_MAX) {
      avisos.push(`la raci\xF3n tiene que estar entre ${RACION_MIN * 100} % y ${RACION_MAX * 100} %`);
    } else {
      const { incumplimientos } = incumplimientosRacion(c2.franja, r, c2.racionAjustada);
      for (const i of incumplimientos) avisos.push(`sale de su raci\xF3n normal: ${i}`);
    }
    const kcal = Number.isFinite(c2.racionAjustada) ? kcalConRacion(r, c2.racionAjustada) : 0;
    return { ok: avisos.length === 0, existe: true, compatible: compat.compatible, ...compat.compatible ? {} : { motivoIncompatible: compat.motivo?.detalle ?? "alergia o lista negra" }, kcal, avisos };
  }
  function totalesPorDia(casillas, dias, kcalDe) {
    return dias.map((d) => {
      const servido = casillas.filter((c2) => c2.dia === d.dia).reduce((s, c2) => s + kcalDe(c2), 0);
      return { dia: d.dia, objetivo: d.kcal, servido, diferencia: servido - d.kcal, pct: d.kcal > 0 ? Math.round((servido - d.kcal) / d.kcal * 1e3) / 10 : 0 };
    });
  }
  function filaPlanPablo(base, casillas, catalogo) {
    const ap = restriccionesComoApp(base.plan.restricciones);
    const asignaciones = casillas.filter((c2) => c2.receta).map((c2) => ({ dia: c2.dia, franja: c2.franja, receta: c2.receta, racionAjustada: Math.round(c2.racionAjustada * 1e4) / 1e4, kcalResultante: validarCasilla(c2, catalogo, ap).kcal }));
    const dias = base.plan.dias.map((d) => ({ ...d }));
    return { inicio: base.inicio, semanas: base.semanas, origen: "pablo", plan: { ...base.plan, dias, asignaciones, huecos: 0 } };
  }
  function planPabloAplicable(planes, hoy) {
    return planes.filter((p) => p && p.origen === "pablo" && p.plan && Array.isArray(p.plan.asignaciones) && estadoDeLaPreparada(hoy, p.inicio, p.semanas) === "activa").sort((a2, b) => String(b.creado).localeCompare(String(a2.creado)))[0];
  }
  function esPlanPabloNuevo(recibido, guardado) {
    if (!recibido) return false;
    return !guardado || String(recibido.creado) > String(guardado.creado);
  }
  function revisarPlanPablo(asignaciones, catalogo, ap) {
    return revisarSiguienteGuardada(asignaciones.map((a2) => ({ dia: a2.dia, franja: a2.franja, receta: a2.receta })), catalogo, ap);
  }
  function etiquetaPlanPablo(enUso, deP) {
    const clave2 = (x) => `${x.dia}|${x.franja}|${x.receta}`;
    const uso = new Set(enUso.map(clave2));
    return deP.every((x) => uso.has(clave2(x))) && enUso.length === deP.length ? "pablo" : "pablo_con_cambios";
  }
  var TEXTO_PLAN_PABLO = {
    pablo: "Revisado por Pablo",
    pablo_con_cambios: "Revisado por Pablo, con cambios tuyos"
  };

  // src/motor/contacto-pablo.ts
  var CORREO_PABLO = "nutriciondeportiva7777@gmail.com";
  var WHATSAPP_PABLO = "";
  var DIAS_CITA = ["lunes", "martes", "mi\xE9rcoles", "jueves", "viernes"];
  var FRANJAS_CITA = { manana: "por la ma\xF1ana", tarde: "por la tarde", indiferente: "me da igual la hora" };
  var MAX_MOTIVO_CITA = 300;
  var enlaceCorreoPablo = () => `mailto:${CORREO_PABLO}?subject=${encodeURIComponent("Desde la app")}`;
  function limpiar(p) {
    const dias = DIAS_CITA.filter((d) => p.dias.includes(d));
    const franja = Object.keys(FRANJAS_CITA).includes(p.franja) ? p.franja : "indiferente";
    return { dias, franja, motivo: String(p.motivo ?? "").replace(/\s+/g, " ").trim().slice(0, MAX_MOTIVO_CITA) };
  }
  function textoCita(p) {
    const c2 = limpiar(p);
    const dias = c2.dias.length ? c2.dias.join(", ") : "cualquier d\xEDa";
    return `Pide cita: ${dias}, ${FRANJAS_CITA[c2.franja]}.${c2.motivo ? ` Motivo: ${c2.motivo}` : ""}`;
  }
  function alertaCita(p, fechaISO) {
    const c2 = limpiar(p);
    return {
      fecha: fechaISO,
      prioritaria: true,
      tipo: "cita",
      cita: true,
      disparadores: [{ pregunta: 0, etiqueta: "cita", se\u00F1al: textoCita(c2) }],
      contexto: [],
      sinInterpretar: [],
      firma: `C|${c2.dias.join(",")}|${c2.franja}|${c2.motivo.toLowerCase().slice(0, 60)}`
    };
  }
  var correoCita = (p) => `mailto:${CORREO_PABLO}?subject=${encodeURIComponent("Pedir cita (desde la app)")}&body=${encodeURIComponent(`Hola, Pablo:

${textoCita(p)}
`)}`;
  var TEXTO_WHATSAPP_DEMO = "En la app de verdad, este bot\xF3n abre el WhatsApp de Pablo para cerrar la cita. En esta demo no hay n\xFAmero.";
  function whatsappPablo(citaPedida, numero = WHATSAPP_PABLO) {
    if (!citaPedida) return null;
    const n = numero.replace(/\D/g, "");
    if (n.length < 9) return { href: null, nota: TEXTO_WHATSAPP_DEMO };
    return { href: `https://wa.me/${n}?text=${encodeURIComponent("Hola, Pablo: he pedido cita desde la app.")}` };
  }

  // src/motor/alertas-persona.ts
  var TEXTO_ALERTA_PERSONA = "Pablo revisar\xE1 tus respuestas y hablar\xE1 contigo.";
  var TEXTO_NUBE_ACTIVA = "Pablo ya lo tiene.";
  var TEXTO_NUBE_INACTIVA = "Cuando actives \xABQue Pablo vea mis datos\xBB (en Perfil), le llegar\xE1 a Pablo.";
  var TEXTO_NUBE_NO_OFRECIDA = "Puedes escribirle o pedirle cita en \xABHablar con Pablo\xBB.";
  function textoLlegaAPablo(nube) {
    if (nube === "no_ofrecida") return TEXTO_NUBE_NO_OFRECIDA;
    return nube ? TEXTO_NUBE_ACTIVA : TEXTO_NUBE_INACTIVA;
  }
  function fechaLocal(iso) {
    if (typeof iso !== "string") return "";
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return /^\d{4}-\d{2}-\d{2}$/.test(iso) ? iso : "";
    return `${String(d.getFullYear()).padStart(4, "0")}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }
  function lineasAlertasPersona(alertas, nubeActiva) {
    return alertas.filter((a2) => a2.tipo !== "cita" && a2.tipo !== "hambre").map((a2) => ({
      fecha: fechaLocal(a2.fecha),
      texto: `${TEXTO_ALERTA_PERSONA} ${textoLlegaAPablo(nubeActiva)}`
    }));
  }
  var MENSAJE_LLANO_AVISOS = {
    menor: "\u{1F466} Es menor de edad: esto lo tiene que ver Pablo en persona.",
    vida_supuesta: "\u{1F6B6} No se sabe cu\xE1nto te mueves en el d\xEDa a d\xEDa aparte de entrenar: de momento se ha supuesto poco (sedentario). Si te mueves m\xE1s, dilo.",
    ritmo_alto: "\u26A1 El ritmo de p\xE9rdida de peso pedido es alto para hacerlo sin que te lo revisen.",
    deficit_alto: "\u26A0\uFE0F Con lo que entrenas, este recorte de calor\xEDas es grande: se puede perder m\xFAsculo, no solo grasa.",
    superavit_alto: "\u{1F354} El extra de calor\xEDas para ganar m\xFAsculo es alto: se gana sobre todo grasa. Conviene bajarlo.",
    hidrato_bajo: "\u{1F50B} Poco hidrato de carbono para lo que entrenas alg\xFAn d\xEDa: puede costar rendir y recuperarte.",
    grasa_baja: "\u{1F9C8} La grasa de alg\xFAn d\xEDa se queda corta.",
    disponibilidad_baja: "\u{1F6A8} Muy pocas calor\xEDas libres para lo que gastas entrenando: esto hay que hablarlo con Pablo antes de seguir.",
    disponibilidad_baja_estimada: "\u26A0\uFE0F Las calor\xEDas libres para lo que entrenas salen bajas (es una estimaci\xF3n): conviene comentarlo con Pablo.",
    disponibilidad_baja_competicion: "\u{1F6A8} El d\xEDa de la prueba, con lo que gastas, las calor\xEDas libres salen muy bajas: hay que hablarlo con Pablo antes.",
    disponibilidad_baja_competicion_estimada: "\u26A0\uFE0F El d\xEDa de la prueba las calor\xEDas libres salen bajas (es una estimaci\xF3n): conviene comentarlo con Pablo.",
    kcal_bajas: "\u{1F4C9} La media de calor\xEDas de la semana es baja para llevarla sin que te la supervisen.",
    revisar_con_pablo: "\u{1F6A9} Con estos datos, la dieta bajar\xEDa del m\xEDnimo seguro. Esto lo tiene que revisar Pablo contigo antes de seguir.",
    dia_muy_alto: "\u{1F4C8} Alg\xFAn d\xEDa come bastante m\xE1s que el resto: lo explica el entreno de ese d\xEDa."
  };
  function avisosParaPersona(avisos) {
    return [...new Set(avisos.map((a2) => MENSAJE_LLANO_AVISOS[a2.codigo]).filter((x) => Boolean(x)))];
  }

  // src/motor/logros.ts
  var TEXTOS_LOGROS = {
    nombre: { completo: "D\xEDa completo", proteina: "Prote\xEDna cumplida", sincera: "Sincera" },
    explica: {
      completo: "Todas las comidas de hoy hechas o apuntadas (comer fuera tambi\xE9n cuenta).",
      proteina: "Las comidas de hoy ya suman casi toda la prote\xEDna del plan.",
      sincera: "Has apuntado una comida fuera con lo que comiste."
    },
    aviso: { completo: "\xA1D\xEDa completo!", proteina: "\xA1Prote\xEDna cumplida!", sincera: "\xA1Gracias por apuntarlo!" },
    titulo: "Mis medallas",
    semanaRedonda: "Semana redonda",
    animo: "Cada semana cuenta. Las celebraciones tambi\xE9n son parte de la vida.",
    sinRegistro: "Sin nada apuntado esa semana.",
    interruptor: "Ense\xF1ar las medallas"
  };
  var UMBRALES_LOGROS = { proteina: 0.9, semanaRedonda: 85 };
  var LETRA_DIA = ["D", "L", "M", "X", "J", "V", "S"];
  var letraDe = (iso) => LETRA_DIA[(/* @__PURE__ */ new Date(`${iso}T12:00:00Z`)).getUTCDay()];
  var isoMasDias = (iso, n) => {
    const d = /* @__PURE__ */ new Date(`${iso}T12:00:00Z`);
    d.setUTCDate(d.getUTCDate() + n);
    return d.toISOString().slice(0, 10);
  };
  var lunesDe = (iso) => isoMasDias(iso, -(((/* @__PURE__ */ new Date(`${iso}T12:00:00Z`)).getUTCDay() + 6) % 7));
  function apuntadoPorDia(hechas, fuera) {
    const m = /* @__PURE__ */ new Map();
    const dia = (iso) => {
      let d = m.get(iso);
      if (!d) {
        d = { hechas: /* @__PURE__ */ new Set(), fuera: /* @__PURE__ */ new Map() };
        m.set(iso, d);
      }
      return d;
    };
    const esIso = (x) => typeof x === "string" && /^\d{4}-\d{2}-\d{2}$/.test(x);
    if (hechas && typeof hechas === "object") {
      const h = hechas;
      if (esIso(h.fecha) && Array.isArray(h.franjas)) {
        for (const f2 of h.franjas) if (typeof f2 === "string") dia(h.fecha).hechas.add(f2);
      }
      if (h.dias && typeof h.dias === "object") {
        for (const [iso, l] of Object.entries(h.dias)) if (esIso(iso) && Array.isArray(l)) {
          for (const f2 of l) if (typeof f2 === "string") dia(iso).hechas.add(f2);
        }
      }
    }
    if (Array.isArray(fuera)) for (const c2 of fuera) {
      if (!c2 || typeof c2 !== "object") continue;
      const x = c2;
      if (!esIso(x.fecha) || typeof x.franja !== "string") continue;
      dia(x.fecha).fuera.set(x.franja, { texto: typeof x.texto === "string" ? x.texto : "", ...typeof x.proteina === "number" && Number.isFinite(x.proteina) && x.proteina >= 0 ? { proteina: x.proteina } : {} });
    }
    return m;
  }
  function medallasDia(plan, apuntado) {
    const sin = { completo: false, proteina: false, sincera: false };
    if (!plan || !apuntado) return sin;
    const franjas = plan.franjas.map((f2) => f2.franja);
    const hechaOFuera = (f2) => apuntado.hechas.has(f2) || apuntado.fuera.has(f2);
    let prot = 0;
    for (const f2 of plan.franjas) {
      if (apuntado.fuera.has(f2.franja)) prot += apuntado.fuera.get(f2.franja).proteina ?? 0;
      else if (apuntado.hechas.has(f2.franja)) prot += f2.proteina;
    }
    return {
      completo: franjas.length > 0 && franjas.every(hechaOFuera),
      proteina: plan.proteinaObjetivo > 0 && prot >= UMBRALES_LOGROS.proteina * plan.proteinaObjetivo - 1e-9,
      sincera: [...apuntado.fuera.values()].some((x) => x.texto.trim().length > 0)
    };
  }
  var PREGUNTAS_FRENO_LOGROS = [2, 3, 4, 9];
  function frenoLogros(alertas, planEnSuelo = false) {
    if (planEnSuelo) return true;
    if (!Array.isArray(alertas)) return false;
    return alertas.some((a2) => {
      if (!a2 || typeof a2 !== "object") return false;
      const x = a2;
      if (x.freno === true || x.suelo === true) return true;
      const preguntas = [...Array.isArray(x.disparadores) ? x.disparadores : [], ...Array.isArray(x.contexto) ? x.contexto : []].map((d) => d && typeof d === "object" ? d.pregunta : void 0);
      return preguntas.some((n) => PREGUNTAS_FRENO_LOGROS.includes(n));
    });
  }
  function resumenSemana(plan, apuntado, lunes, hoyISO) {
    const fin = isoMasDias(lunes, 6) < hoyISO ? isoMasDias(lunes, 6) : hoyISO;
    const dias = [...apuntado.keys()].filter((iso) => iso >= lunes && iso <= fin).sort();
    if (!dias.length) return void 0;
    let conMedalla = 0, x = 0, y = 0;
    for (let iso = lunes; iso <= fin; iso = isoMasDias(iso, 1)) {
      const p = plan[letraDe(iso)];
      const a2 = apuntado.get(iso);
      const m = medallasDia(p, a2);
      if (m.completo || m.proteina || m.sincera) conMedalla++;
      if (iso < dias[0] || !p) continue;
      const hecho = p.franjas.filter((f2) => a2 && (a2.hechas.has(f2.franja) || a2.fuera.has(f2.franja))).length;
      x += hecho;
      y += iso === hoyISO ? hecho : p.franjas.length;
    }
    const pct = y ? Math.round(x / y * 100) : 0;
    const redonda = y > 0 && pct >= UMBRALES_LOGROS.semanaRedonda;
    const texto = `${conMedalla} de 7 d\xEDas con alguna medalla \xB7 comidas hechas ${x} de ${y}${y ? ` (${pct} %)` : ""}`;
    return { lunes, diasConMedalla: conMedalla, hechas: x, total: y, pct, redonda, texto };
  }
  function resumenCincoSemanas(plan, apuntado, hoyISO) {
    const lunes = lunesDe(hoyISO);
    return [0, 1, 2, 3, 4].map((i) => {
      const l = isoMasDias(lunes, -7 * i);
      return { lunes: l, resumen: resumenSemana(plan, apuntado, l, hoyISO) };
    });
  }
  function medallasNuevas(antes, ahora) {
    return Object.keys(ahora).filter((m) => ahora[m] && !antes[m]);
  }

  // src/motor/centro-alertas.ts
  function alertasSinAtender(alertas, gestion) {
    const hablado = new Set(gestion.filter((g) => g.estado === "hablado").map((g) => g.alerta_id));
    return alertas.filter((a2) => !hablado.has(a2.id)).length;
  }
  function tituloCentro(sinAtender) {
    return `${sinAtender > 0 ? `(${sinAtender > 99 ? "99+" : sinAtender}) ` : ""}Centro de control`;
  }
  function textoNotificacion(a2, contacto) {
    return { titulo: `Nueva alerta${a2.prioritaria ? " \xB7 prioritaria" : ""}`, cuerpo: contacto && contacto.trim() ? contacto.trim() : "Persona sin correo guardado" };
  }
  function mezclarAlerta(lista, nueva) {
    if (lista.some((a2) => a2.id === nueva.id)) return { lista, esNueva: false };
    return { lista: [nueva, ...lista].sort((a2, b) => String(b.creada ?? "").localeCompare(String(a2.creada ?? ""))), esNueva: true };
  }
  function alertasNuevas(conocidas, recibidas) {
    const ya = new Set(conocidas.map((a2) => a2.id));
    return recibidas.filter((a2) => !ya.has(a2.id));
  }
  var RESPALDO_MS = 6e4;
  var TIPOS_ALERTA = {
    cribado: "Cribado",
    freno: "Freno de \xABperder grasa\xBB",
    suelo: "Suelo de kcal",
    celiaquia: "Celiaqu\xEDa",
    derivacion: "Derivaci\xF3n (salud o edad)",
    cita: "Pide cita",
    hambre: "Hambre repetida"
  };
  var datosDe = (a2) => a2.datos && typeof a2.datos === "object" ? a2.datos : {};
  function clasificarAlerta(a2) {
    const d = datosDe(a2);
    if (a2.tipo === "cita" || d.cita === true) return "cita";
    if (a2.tipo === "hambre" || d.hambre === true) return "hambre";
    if (d.freno === true) return "freno";
    if (d.suelo === true) return "suelo";
    if (d.celiaquia === true) return "celiaquia";
    if (d.derivacion === true) return "derivacion";
    return "cribado";
  }
  function motivosAlerta(a2) {
    const disp = datosDe(a2).disparadores;
    const lista = Array.isArray(disp) ? disp : [];
    const m = lista.map((x) => {
      const se\u00F1al = typeof x.se\u00F1al === "string" && x.se\u00F1al.trim() ? x.se\u00F1al.trim() : x.etiqueta || "Sin detalle";
      return typeof x.pregunta === "number" && x.pregunta > 0 ? `${se\u00F1al} (pregunta ${x.pregunta}: ${x.etiqueta ?? ""})` : se\u00F1al;
    });
    return m.length ? m : ["(sin detalle)"];
  }
  var estadoDe = (gestion) => {
    const m = new Map(gestion.map((g) => [g.alerta_id, g.estado]));
    return (a2) => m.get(a2.id) === "vista" || m.get(a2.id) === "hablado" ? m.get(a2.id) : "nueva";
  };
  function contarPorEstado(alertas, gestion, f2 = {}) {
    const est = estadoDe(gestion);
    const c2 = { nueva: 0, vista: 0, hablado: 0, todas: 0 };
    for (const a2 of alertas) {
      if (f2.soloPrioritarias && !a2.prioritaria) continue;
      if (f2.tipo && clasificarAlerta(a2) !== f2.tipo) continue;
      c2[est(a2)]++;
      c2.todas++;
    }
    return c2;
  }
  function filtrarAlertas(alertas, gestion, f2 = {}) {
    const est = estadoDe(gestion);
    return alertas.filter((a2) => (!f2.estado || f2.estado === "todas" || est(a2) === f2.estado) && (!f2.soloPrioritarias || a2.prioritaria) && (!f2.tipo || clasificarAlerta(a2) === f2.tipo)).sort((a2, b) => Number(!!b.prioritaria) - Number(!!a2.prioritaria) || String(b.creada ?? "").localeCompare(String(a2.creada ?? "")));
  }
  function agruparPorPersona(alertas, gestion) {
    const est = estadoDe(gestion);
    const g = /* @__PURE__ */ new Map();
    for (const a2 of alertas) g.set(a2.usuario, [...g.get(a2.usuario) || [], a2]);
    return [...g].map(([usuario, l]) => {
      const orden = [...l].sort((a2, b) => String(b.creada ?? "").localeCompare(String(a2.creada ?? "")));
      return { usuario, alertas: orden, sinAtender: l.filter((a2) => est(a2) !== "hablado").length, ultima: String(orden[0].creada ?? "") };
    }).sort((a2, b) => b.ultima.localeCompare(a2.ultima));
  }
  var LETRA_DIA2 = ["D", "L", "M", "X", "J", "V", "S"];
  var isoMas = (iso, n) => {
    const d = /* @__PURE__ */ new Date(`${iso}T12:00:00Z`);
    d.setUTCDate(d.getUTCDate() + n);
    return d.toISOString().slice(0, 10);
  };
  function adherenciaSemana(hechas, fuera, asignaciones, hoyISO) {
    const porDia = /* @__PURE__ */ new Map();
    const anota = (iso, f2) => {
      if (typeof iso === "string" && typeof f2 === "string") porDia.set(iso, (porDia.get(iso) || /* @__PURE__ */ new Set()).add(f2));
    };
    if (hechas && typeof hechas === "object") {
      const h = hechas;
      if (Array.isArray(h.franjas)) for (const f2 of h.franjas) anota(h.fecha, f2);
      if (h.dias && typeof h.dias === "object") {
        for (const [iso, l] of Object.entries(h.dias)) if (Array.isArray(l)) for (const f2 of l) anota(iso, f2);
      }
    }
    if (Array.isArray(fuera)) {
      for (const c2 of fuera) if (c2 && typeof c2 === "object") anota(c2.fecha, c2.franja);
    }
    const dow = (/* @__PURE__ */ new Date(`${hoyISO}T12:00:00Z`)).getUTCDay();
    const lunes = isoMas(hoyISO, -((dow + 6) % 7));
    const conDato = [...porDia.keys()].filter((iso) => iso >= lunes && iso <= hoyISO).sort();
    if (!conDato.length) return void 0;
    const planDe = (iso) => new Set(asignaciones.filter((a2) => a2.dia === LETRA_DIA2[(/* @__PURE__ */ new Date(`${iso}T12:00:00Z`)).getUTCDay()]).map((a2) => a2.franja));
    let x = 0, y = 0;
    for (let iso = conDato[0]; iso <= hoyISO; iso = isoMas(iso, 1)) {
      const plan = planDe(iso);
      const hecho = [...porDia.get(iso) || []].filter((f2) => plan.has(f2));
      x += hecho.length;
      y += iso === hoyISO ? hecho.length : plan.size;
    }
    if (!y) return void 0;
    return { hechas: x, total: y, pct: Math.round(x / y * 100), desde: conDato[0] };
  }

  // src/motor/centro-personas.ts
  var FILTROS_PERSONAS = {
    todas: "Todas",
    "con-alertas": "Con alertas sin atender",
    "sin-plan": "Sin plan",
    revisado: "Plan revisado por m\xED"
  };
  var masReciente = (...fechas) => fechas.filter((f2) => Boolean(f2)).sort().pop() ?? "";
  function resumenPersonas(d) {
    const hablado = new Set((d.gestion ?? []).filter((g) => g.estado === "hablado").map((g) => g.alerta_id));
    return d.perfiles.map((p) => {
      const ficha = (d.fichas ?? []).find((f2) => f2.usuario === p.usuario);
      const resp = (d.respuestas ?? []).find((r) => r.usuario === p.usuario);
      const planes = (d.planes ?? []).filter((x) => x.usuario === p.usuario).sort((a2, b) => String(b.creado ?? "").localeCompare(String(a2.creado ?? "")));
      const alertas = (d.alertas ?? []).filter((a2) => a2.usuario === p.usuario);
      const pendientes = alertas.filter((a2) => !hablado.has(a2.id));
      const contacto = (p.contacto ?? "").trim();
      return {
        usuario: p.usuario,
        nombre: (ficha?.nombre ?? "").trim() || (p.nombre ?? "").trim() || contacto || "sin nombre",
        contacto,
        ultimaActividad: masReciente(p.actualizado, p.creado, resp?.actualizado, planes[0]?.creado, ...alertas.map((a2) => a2.creada)),
        alertasSinAtender: pendientes.length,
        prioritariaSinAtender: pendientes.some((a2) => a2.prioritaria === true),
        tienePlan: planes.length > 0,
        revisadoPorPablo: planes[0]?.origen === "pablo"
      };
    });
  }
  function sinTildes(t2) {
    return String(t2 ?? "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
  }
  function filtrarPersonas(filas, texto, filtro = "todas") {
    const palabras = sinTildes(texto).split(/\s+/).filter(Boolean);
    return filas.filter((f2) => {
      const donde = sinTildes(f2.nombre + " " + f2.contacto);
      return palabras.every((w) => donde.includes(w));
    }).filter((f2) => filtro === "con-alertas" ? f2.alertasSinAtender > 0 : filtro === "sin-plan" ? !f2.tienePlan : filtro === "revisado" ? f2.revisadoPorPablo : true).sort((a2, b) => b.ultimaActividad.localeCompare(a2.ultimaActividad) || a2.nombre.localeCompare(b.nombre, "es"));
  }
  function historialPlanes(planes, usuario) {
    return planes.filter((p) => p.usuario === usuario).sort((a2, b) => String(b.creado ?? "").localeCompare(String(a2.creado ?? "")));
  }
  function comidasFueraPersona(registro, copiaMovil, usuario) {
    const todas = [
      ...registro.filter((r) => r.usuario === usuario && r.estado === "fuera").map((r) => ({ fecha: r.fecha, franja: r.franja, texto: r.texto ?? "", kcal: r.kcal ?? null })),
      ...Array.isArray(copiaMovil) ? copiaMovil : []
    ];
    const vistas = /* @__PURE__ */ new Set();
    return todas.filter((c2) => {
      const k = [c2.fecha, c2.franja, sinTildes(c2.texto ?? "")].join("|");
      if (vistas.has(k)) return false;
      vistas.add(k);
      return true;
    }).sort((a2, b) => String(b.fecha ?? "").localeCompare(String(a2.fecha ?? "")));
  }
  function celda(v) {
    let t2 = String(v);
    if (/^[=+\-@\t\r]/.test(t2)) t2 = "'" + t2;
    return /[;"\n\r]/.test(t2) ? '"' + t2.replace(/"/g, '""') + '"' : t2;
  }
  function csvPersonas(filas) {
    const cab = ["nombre", "correo", "ultima_actividad", "alerta_prioritaria", "tiene_plan", "plan_revisado_por_pablo"];
    const si = (b) => b ? "s\xED" : "no";
    const lineas = filas.map((f2) => [f2.nombre, f2.contacto, f2.ultimaActividad.slice(0, 10), si(f2.prioritariaSinAtender), si(f2.tienePlan), si(f2.revisadoPorPablo)].map(celda).join(";"));
    return "\uFEFF" + [cab.join(";"), ...lineas].join("\r\n") + "\r\n";
  }

  // src/motor/deporte-principal.ts
  var t = (nombre, actividad) => ({ nombre, actividad });
  var DEPORTES_PRINCIPALES = [
    { id: "hyrox", nombre: "Hyrox", tipos: [t("Carrera", "correr"), t("Carrera suave", "correr_suave"), t("Series / carrera r\xE1pida", "correr_rapido"), t("Fuerza", "fuerza"), t("Erg\xF3metros (remo, ski, bici)", "remo_maquina"), t("Simulaci\xF3n Hyrox / circuito", "hyrox")] },
    { id: "running", nombre: "Running", tipos: [t("Rodaje suave", "correr_suave"), t("Rodaje", "correr"), t("Series", "correr_rapido"), t("Tirada larga", "correr"), t("Fuerza", "fuerza")] },
    { id: "ciclismo", nombre: "Ciclismo", tipos: [t("Rodaje", "bici"), t("Suave", "bici_paseo"), t("Intensa / series", "bici_intensa"), t("MTB", "bici_montana"), t("Rodillo / spinning", "spinning"), t("Fuerza", "fuerza")] },
    { id: "triatlon", nombre: "Triatl\xF3n", tipos: [t("Nataci\xF3n", "natacion"), t("Bici", "bici"), t("Carrera", "correr"), t("Transici\xF3n / combinado", "bici_intensa"), t("Fuerza", "fuerza")] },
    { id: "crossfit", nombre: "CrossFit", tipos: [t("WOD", "crossfit"), t("Fuerza", "fuerza"), t("Halterofilia", "fuerza_intensa"), t("Cardio", "remo_maquina")] },
    { id: "gimnasio", nombre: "Gimnasio / fuerza", tipos: [t("Fuerza", "fuerza"), t("Fuerza intensa", "fuerza_intensa"), t("M\xE1quinas", "fuerza_suave"), t("Cardio", "eliptica")] },
    { id: "natacion", nombre: "Nataci\xF3n", tipos: [t("Suave", "natacion_suave"), t("Entreno", "natacion"), t("Fuerza", "fuerza")] },
    { id: "futbol", nombre: "F\xFAtbol", tipos: [t("Entreno", "futbol"), t("Partido", "futbol_partido"), t("Fuerza", "fuerza")] },
    { id: "padel", nombre: "P\xE1del", tipos: [t("Partido", "padel"), t("Fuerza", "fuerza")] },
    { id: "otro", nombre: "Otro", tipos: [] },
    { id: "ninguno", nombre: "Ninguno en concreto", tipos: [] }
  ];
  var deportePrincipal = (id) => DEPORTES_PRINCIPALES.find((d) => d.id === id);
  function actividadesDesconocidas() {
    return DEPORTES_PRINCIPALES.flatMap((d) => d.tipos.filter((x) => !ACTIVIDADES[x.actividad]).map((x) => `${d.nombre} \xB7 ${x.nombre} \u2192 ${x.actividad}`));
  }
  function tipoDeSesion(id, actividad, nombre) {
    const tipos = deportePrincipal(id)?.tipos ?? [];
    return tipos.find((x) => x.actividad === actividad && x.nombre === nombre) ?? tipos.find((x) => x.actividad === actividad);
  }
  var DEPORTE_DE_ACTIVIDAD = [
    [/^hyrox$/, "hyrox"],
    [/^correr/, "running"],
    [/^(bici|spinning)/, "ciclismo"],
    [/^natacion/, "natacion"],
    [/^crossfit$/, "crossfit"],
    [/^(fuerza|eliptica)/, "gimnasio"],
    [/^futbol/, "futbol"],
    [/^padel$/, "padel"]
  ];
  function deducirDeportePrincipal(actividades) {
    const cuenta = /* @__PURE__ */ new Map();
    for (const a2 of actividades) {
      const d = a2 ? DEPORTE_DE_ACTIVIDAD.find(([re]) => re.test(a2))?.[1] : void 0;
      if (d) cuenta.set(d, (cuenta.get(d) ?? 0) + 1);
    }
    let mejor = "otro";
    let max = 0;
    for (const [d, n] of cuenta) if (n > max) {
      mejor = d;
      max = n;
    }
    return mejor;
  }

  // src/motor/dos-pasos.ts
  function pasoDosPasos(e) {
    if (e.verificados < 1) return "activar";
    return e.nivel === "aal2" ? "listo" : "pedir_codigo";
  }
  function limpiarCodigoTotp(texto) {
    const c2 = String(texto ?? "").replace(/[\s-]/g, "");
    return /^\d{6}$/.test(c2) ? c2 : null;
  }

  // src/motor/freno-bajo-peso.ts
  var UMBRALES_FRENO = {
    ffmi: { hombre: 17, mujer: 15 },
    imcSinGrasa: 18.5,
    // solo sin % graso medido (confirmado por Pablo el 16/10)
    perdida3m: 5,
    // % en 3 meses
    perdidaHabitual: 10,
    // % sobre el peso habitual
    disponibilidad: 30,
    // kcal/kg de masa libre de grasa
    grasaMinima: { hombre: 6, mujer: 14 }
  };
  var r1 = (n) => Math.round(n * 10) / 10;
  var c = (n) => String(n).replace(".", ",");
  var positivo = (n) => typeof n === "number" && Number.isFinite(n) && n > 0;
  function frenoBajoPeso(perfil, cribado) {
    if (perfil.objetivo !== "perder_grasa") return { salta: false, motivos: [] };
    const motivos = [];
    const sexo = perfil.sexo === "mujer" ? "mujer" : "hombre";
    const medida = positivo(perfil.grasa) ? perfil.grasa : void 0;
    if (positivo(perfil.altura) && medida !== void 0) {
      const ffmi = perfil.peso * (1 - medida / 100) / (perfil.altura / 100) ** 2;
      const umbral = UMBRALES_FRENO.ffmi[sexo];
      if (ffmi < umbral) motivos.push({ codigo: "ffmi_bajo", cifra: r1(ffmi), umbral, texto: `Masa libre de grasa por altura (FFMI) de ${c(r1(ffmi))} kg/m\xB2, por debajo de ${umbral}` });
    } else if (positivo(perfil.altura)) {
      const i = imc(perfil.peso, perfil.altura);
      if (i < UMBRALES_FRENO.imcSinGrasa) motivos.push({ codigo: "imc_bajo", cifra: r1(i), umbral: UMBRALES_FRENO.imcSinGrasa, texto: `IMC de ${c(r1(i))} (< 18,5, criterio ESPEN 2015; sin % graso medido)` });
    }
    if (medida !== void 0) {
      const g = UMBRALES_FRENO.grasaMinima[sexo];
      if (medida < g) motivos.push({ codigo: "grasa_minima", cifra: medida, umbral: g, texto: `% de grasa medido de ${c(medida)} %, por debajo de ${g} %` });
    }
    if (cribado?.respuestas?.[1] === "si") {
      if (positivo(cribado.pesoHace3m) && positivo(cribado.pesoAhora) && cribado.pesoHace3m > cribado.pesoAhora) {
        const p = (cribado.pesoHace3m - cribado.pesoAhora) / cribado.pesoHace3m * 100;
        if (p > UMBRALES_FRENO.perdida3m) motivos.push({ codigo: "perdida_3m", cifra: r1(p), umbral: UMBRALES_FRENO.perdida3m, texto: `P\xE9rdida de peso sin buscarla del ${c(r1(p))} % en 3 meses (de ${c(cribado.pesoHace3m)} a ${c(cribado.pesoAhora)} kg)` });
      }
      const ahora = positivo(cribado.pesoAhora) ? cribado.pesoAhora : perfil.peso;
      if (positivo(cribado.pesoHabitual) && cribado.pesoHabitual > ahora) {
        const p = (cribado.pesoHabitual - ahora) / cribado.pesoHabitual * 100;
        if (p > UMBRALES_FRENO.perdidaHabitual) motivos.push({ codigo: "perdida_habitual", cifra: r1(p), umbral: UMBRALES_FRENO.perdidaHabitual, texto: `P\xE9rdida de peso sin buscarla del ${c(r1(p))} % sobre su peso habitual (de ${c(cribado.pesoHabitual)} a ${c(ahora)} kg)` });
      }
    }
    const disp = calcular(perfil).dias.map((d) => d.disponibilidad).filter((x) => typeof x === "number");
    if (disp.length) {
      const media = r1(disp.reduce((s, x) => s + x, 0) / disp.length);
      if (media < UMBRALES_FRENO.disponibilidad) motivos.push({ codigo: "disponibilidad_baja", cifra: media, umbral: UMBRALES_FRENO.disponibilidad, texto: `Disponibilidad energ\xE9tica estimada de ${c(media)} kcal/kg de masa libre de grasa de media en la semana, por debajo de ${UMBRALES_FRENO.disponibilidad}${medida === void 0 ? " (con % graso estimado)" : ""}` });
    }
    return { salta: motivos.length > 0, motivos };
  }
  function alertaFreno(r, fechaISO) {
    if (!r.salta) return void 0;
    return {
      fecha: fechaISO,
      prioritaria: true,
      freno: true,
      disparadores: r.motivos.map((m) => ({ pregunta: 0, etiqueta: m.codigo, se\u00F1al: `Freno de \xABperder grasa\xBB: ${m.texto}` })),
      contexto: [],
      sinInterpretar: [],
      firma: `F|${r.motivos.map((m) => `${m.codigo}${m.cifra}`).join(",")}`
    };
  }

  // src/motor/suelo-kcal.ts
  var MENSAJE_SUELO = "Tu c\xE1lculo sale por debajo del m\xEDnimo seguro; te damos el m\xEDnimo y Pablo lo revisar\xE1 contigo.";
  function diasConSuelo(plan) {
    return plan.dias.filter((d) => d.limitadoPor === "suelo").map((d) => ({ dia: d.dia, calculadas: Math.round(d.kcalSinLimites) }));
  }
  function alertaSuelo(plan, fechaISO) {
    const dias = diasConSuelo(plan);
    if (!dias.length) return void 0;
    const min = Math.min(...dias.map((d) => d.calculadas));
    const max = Math.max(...dias.map((d) => d.calculadas));
    const rango = min === max ? `${min}` : `${min}\u2013${max}`;
    return {
      fecha: fechaISO,
      prioritaria: false,
      suelo: true,
      disparadores: [{ pregunta: 0, etiqueta: "suelo_kcal", se\u00F1al: `Suelo de kcal: ${dias.length === 7 ? "los 7 d\xEDas" : `d\xEDas ${dias.map((d) => d.dia).join(", ")}`} sal\xEDan en ${rango} kcal calculadas, por debajo del suelo de ${plan.detalle.suelo}; se prescribe el suelo y hay que revisarlo con la persona` }],
      contexto: [],
      sinInterpretar: [],
      firma: `S|${dias.map((d) => `${d.dia}${d.calculadas}`).join(",")}`
    };
  }
  return __toCommonJS(motor_exports);
})();
