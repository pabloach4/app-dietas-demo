// Demo estática del motor (issue #8). Script clásico (no type="module") para que funcione abriendo
// web/index.html directamente con file:// sin líos de CORS. Usa el global Motor de motor.bundle.js
// (generado con esbuild desde src/motor/index.ts: .github/workflows/build-web.yml).
(function () {
  'use strict';

  const DIAS = Motor.DIAS;
  const sesionesDiv = document.getElementById('sesiones');

  function opcionesActividad() {
    return Object.entries(Motor.ACTIVIDADES)
      .map(([clave, act]) => `<option value="${clave}">${act.nombre} (${clave})</option>`)
      .join('');
  }

  function nuevaFilaSesion(dia, actividad, minutos) {
    const fila = document.createElement('div');
    fila.className = 'sesion';
    fila.innerHTML = `
      <select class="s-dia">${DIAS.map((d) => `<option value="${d}">${d}</option>`).join('')}</select>
      <select class="s-actividad">${opcionesActividad()}</select>
      <input class="s-minutos" type="number" min="1" step="1" style="width:5rem" placeholder="min">
      <button type="button" class="quitar">Quitar</button>
    `;
    fila.querySelector('.s-dia').value = dia;
    fila.querySelector('.s-actividad').value = actividad;
    fila.querySelector('.s-minutos').value = minutos;
    fila.querySelector('.quitar').addEventListener('click', () => fila.remove());
    sesionesDiv.appendChild(fila);
  }

  document.getElementById('add-sesion').addEventListener('click', () => nuevaFilaSesion('L', 'fuerza', 45));

  function leerSesiones() {
    return Array.from(sesionesDiv.querySelectorAll('.sesion')).map((fila) => ({
      dia: fila.querySelector('.s-dia').value,
      actividad: fila.querySelector('.s-actividad').value,
      minutos: Number(fila.querySelector('.s-minutos').value),
    }));
  }

  function num(id) {
    const v = document.getElementById(id).value;
    return v === '' ? undefined : Number(v);
  }

  function cargarPerfil(p) {
    document.getElementById('peso').value = p.peso;
    document.getElementById('altura').value = p.altura;
    document.getElementById('edad').value = p.edad;
    document.getElementById('sexo').value = p.sexo;
    document.getElementById('grasa').value = p.grasa ?? '';
    document.getElementById('objetivo').value = p.objetivo;
    document.getElementById('vida').value = p.vida;
    sesionesDiv.innerHTML = '';
    p.sesiones.forEach((s) => nuevaFilaSesion(s.dia, s.actividad, s.minutos));
    document.getElementById('resultado').hidden = true;
  }

  // Los 3 perfiles de tests/perfiles.test.ts, para comparar con lo que ya está validado.
  const PERFILES_EJEMPLO = {
    general: {
      peso: 70, altura: 164, edad: 34, sexo: 'mujer', objetivo: 'perder_grasa', vida: 'sedentaria',
      sesiones: [
        { dia: 'L', actividad: 'fuerza_suave', minutos: 50 },
        { dia: 'X', actividad: 'fuerza_suave', minutos: 50 },
        { dia: 'V', actividad: 'caminar_rapido', minutos: 45 },
      ],
    },
    maraton: {
      peso: 68, altura: 176, edad: 36, sexo: 'hombre', objetivo: 'mantener', grasa: 11, vida: 'ligera',
      sesiones: [
        { dia: 'L', actividad: 'correr_suave', minutos: 50 },
        { dia: 'M', actividad: 'correr', minutos: 70 },
        { dia: 'X', actividad: 'fuerza', minutos: 40 },
        { dia: 'J', actividad: 'correr_rapido', minutos: 60 },
        { dia: 'S', actividad: 'correr', minutos: 150 },
        { dia: 'D', actividad: 'correr_suave', minutos: 40 },
      ],
    },
    hyrox: {
      peso: 84, altura: 181, edad: 29, sexo: 'hombre', objetivo: 'perder_grasa', grasa: 16, vida: 'moderada',
      sesiones: [
        { dia: 'L', actividad: 'hyrox', minutos: 75 },
        { dia: 'M', actividad: 'correr', minutos: 50 },
        { dia: 'X', actividad: 'fuerza', minutos: 60 },
        { dia: 'J', actividad: 'hyrox', minutos: 60 },
        { dia: 'V', actividad: 'correr_suave', minutos: 40 },
        { dia: 'S', actividad: 'hyrox', minutos: 90 },
      ],
    },
  };

  document.querySelectorAll('[data-perfil]').forEach((btn) => {
    btn.addEventListener('click', () => cargarPerfil(PERFILES_EJEMPLO[btn.dataset.perfil]));
  });

  document.getElementById('form-perfil').addEventListener('submit', (ev) => {
    ev.preventDefault();
    const errorEl = document.getElementById('error');
    errorEl.textContent = '';
    const perfil = {
      peso: num('peso'), altura: num('altura'), edad: num('edad'),
      sexo: document.getElementById('sexo').value,
      grasa: num('grasa'),
      objetivo: document.getElementById('objetivo').value,
      vida: document.getElementById('vida').value,
      sesiones: leerSesiones(),
    };
    let plan;
    try {
      plan = Motor.calcular(perfil);
    } catch (e) {
      errorEl.textContent = e.message;
      document.getElementById('resultado').hidden = true;
      return;
    }
    mostrarResultado(plan, new Set(perfil.sesiones.map((s) => s.dia)));
  });

  function mostrarResultado(plan, diasConSesion) {
    document.getElementById('r-ecuacion').textContent = plan.basal.ecuacion;
    document.getElementById('r-basal').textContent = plan.basal.kcal;
    document.getElementById('r-gasto').textContent = plan.gastoMedio;
    document.getElementById('r-kcalmedia').textContent = plan.kcalMedia;

    // Issue #12: que un día con sesión se note a simple vista, aunque el reparto de kcal sea parecido
    // al de descanso (caso "solo fuerza" o actividades que no cuentan como carga, como caminar rápido).
    // Issue #13: tarjetas por día (sin tabla ancha) para que se lea bien en móvil.
    document.getElementById('r-dias').innerHTML = plan.dias.map((d) => `
      <div class="dia-card ${diasConSesion.has(d.dia) ? 'con-entreno' : ''}">
        <div class="n">${diasConSesion.has(d.dia) ? '🏋️ ' : ''}${d.dia} · ${d.tipo}</div>
        <div class="k">${d.kcal} <small style="font-size:0.6em;font-weight:400">kcal</small></div>
        <div class="m">P ${d.proteinaG} g · G ${d.grasaG} g · H ${d.hidratoG} g (${d.hidratoGKg} g/kg)</div>
      </div>
    `).join('');

    const avisosEl = document.getElementById('r-avisos');
    avisosEl.innerHTML = plan.avisos.length
      ? plan.avisos.map((a) => `<li><strong>${a.codigo}:</strong> ${a.texto}</li>`).join('')
      : '<li>Ninguno.</li>';

    const notasEl = document.getElementById('r-notas');
    notasEl.innerHTML = plan.notas.length ? plan.notas.map((n) => `<li>${n}</li>`).join('') : '<li>Ninguna.</li>';

    document.getElementById('resultado').hidden = false;
  }

  // Arranca con el perfil general cargado, para no abrir el formulario vacío.
  cargarPerfil(PERFILES_EJEMPLO.general);
})();
