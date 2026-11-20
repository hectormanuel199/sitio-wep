// Datos editables
const hitos = [
  ["1985", "Nace en Funchal, en la isla de Madeira (Portugal)."],
  ["1997", "Con 12 años entra a la cantera del Sporting de Lisboa."],
  ["2003", "Fichó por el Manchester United y recibió el dorsal 7."],
  ["2008", "Gana su primer Balón de Oro y su primera Champions League."],
  ["2009", "Llega al Real Madrid, donde se vuelve máximo goleador histórico del club."],
  ["2016", "Campeón de la Eurocopa con Portugal."],
  ["2018", "Firma con la Juventus."],
  ["2021", "Regresa al Manchester United."],
  ["2023", "Se une al Al-Nassr de Arabia Saudita."],
  ["2026", "Anuncia su retiro de la selección tras 23 años con Portugal."]
];

const clubes = [
  { nombre: "Sporting CP", pais: "Portugal", periodo: "1997–2003", color: "#0a8a43", txt: "#fff",
    presFecha: "1997 · cantera",
    pres: "Entró a las categorías inferiores con 12 años, llegado desde el Nacional de Madeira. En 2002, con 17 años, dio el salto al primer equipo.",
    debFecha: "7 de octubre de 2002", rival: "Moreirense", marcador: "3-0",
    deb: "Su estreno oficial con el primer equipo fue en la liga portuguesa y lo celebró con dos goles." },
  { nombre: "Manchester United", pais: "Inglaterra", periodo: "2003–2009", color: "#da291c", txt: "#fff",
    presFecha: "Agosto de 2003",
    pres: "Fichó por unos 12 millones de libras (cifra reportada) y recibió el dorsal 7, el mismo que había vestido Beckham.",
    debFecha: "16 de agosto de 2003", rival: "Bolton Wanderers", marcador: "4-0",
    deb: "Entró como suplente en Old Trafford y dejó una actuación brillante. Su primer gol llegó el 1 de noviembre de 2003, de tiro libre ante el Portsmouth." },
  { nombre: "Real Madrid", pais: "España", periodo: "2009–2018", color: "#e3b93c", txt: "#0b1f3a",
    presFecha: "6 de julio de 2009",
    pres: "Lo presentaron en el Santiago Bernabéu ante una multitud. Su fichaje, de unos 94 millones de euros (cifra reportada), fue récord mundial en ese momento. Estrenó el dorsal 9.",
    debFecha: "29 de agosto de 2009", rival: "Deportivo La Coruña", marcador: "3-2",
    deb: "Debutó en la Liga con gol de penal. Anotó en sus primeros partidos y empezó a escribir su historia en el club." },
  { nombre: "Juventus", pais: "Italia", periodo: "2018–2021", color: "#111111", txt: "#fff",
    presFecha: "Julio de 2018",
    pres: "Su llegada a Turín, por unos 100 millones de euros (cifra reportada), sorprendió a toda Europa. En Italia volvió a lucir el 7.",
    debFecha: "18 de agosto de 2018", rival: "Chievo", marcador: "3-2",
    deb: "No marcó en su estreno en la Serie A, aunque probó al portero ocho veces. Sus primeros goles llegaron el 16 de septiembre ante el Sassuolo, con doblete." },
  { nombre: "Man. United (regreso)", pais: "Inglaterra", periodo: "2021–2022", color: "#da291c", txt: "#fff",
    presFecha: "Agosto de 2021",
    pres: "Volvió a Old Trafford doce años después de irse y recuperó el dorsal 7. Su salida se acordó de mutuo acuerdo en noviembre de 2022.",
    debFecha: "11 de septiembre de 2021", rival: "Newcastle United", marcador: "4-1",
    deb: "Un regreso de película: marcó dos goles en su segundo debut con los Red Devils." },
  { nombre: "Al-Nassr", pais: "Arabia Saudita", periodo: "2023–actualidad", color: "#f7d117", txt: "#0b1f3a",
    presFecha: "3 de enero de 2023",
    pres: "Fue presentado en el estadio Mrsool Park, en Riad, con un ambiente de locura. Después renovó y su contrato llega hasta junio de 2027.",
    debFecha: "22 de enero de 2023", rival: "Al-Ettifaq", marcador: "1-0",
    deb: "Debutó como capitán, tras cumplir una sanción de dos partidos. No marcó, pero ganaron con gol de Talisca." }
];

// Línea de tiempo
document.getElementById("tiempo").innerHTML = hitos.map(function (h) {
  return '<li><span class="anio">' + h[0] + '</span><p>' + h[1] + '</p></li>';
}).join("");

// Pestañas de clubes
const tabs = document.getElementById("tabs");
const panel = document.getElementById("panel");

function mostrar(i) {
  const c = clubes[i];
  tabs.querySelectorAll(".tab").forEach(function (b, n) {
    b.setAttribute("aria-selected", n === i ? "true" : "false");
  });
  panel.style.setProperty("--c", c.color);
  panel.innerHTML =
    '<div class="titulo-club"><strong>' + c.nombre + '</strong><span>' + c.pais + ' · ' + c.periodo + '</span></div>' +
    '<div class="caja"><h3>Presentación</h3><p class="cuando">' + c.presFecha + '</p><p>' + c.pres + '</p></div>' +
    '<div class="caja"><h3>Debut</h3><p class="cuando">' + c.debFecha + '</p>' +
    '<div class="gol">' + c.marcador + '<small>VS ' + c.rival.toUpperCase() + '</small></div><p>' + c.deb + '</p></div>';
  // reinicia la animación
  panel.style.animation = "none"; void panel.offsetWidth; panel.style.animation = "";
}

clubes.forEach(function (c, i) {
  const b = document.createElement("button");
  b.className = "tab";
  b.type = "button";
  b.setAttribute("role", "tab");
  b.style.setProperty("--c", c.color);
  b.style.setProperty("--txt", c.txt);
  b.textContent = c.nombre;
  b.addEventListener("click", function () { mostrar(i); });
  tabs.appendChild(b);
});
mostrar(0);

// ===== Formulario sobre la vida de Cristiano =====
const preguntas = [
  { t: "¿En qué ciudad nació?", tipo: "radio", op: ["Lisboa", "Funchal", "Oporto", "Faro"], ok: "Funchal" },
  { t: "¿En qué año nació?", tipo: "numero", ok: "1985" },
  { t: "¿Con qué club debutó como profesional?", tipo: "radio", op: ["Benfica", "Nacional", "Sporting CP", "Porto"], ok: "Sporting CP" },
  { t: "¿Contra qué equipo debutó con el Manchester United en 2003?", tipo: "select", op: ["Bolton Wanderers", "Chelsea", "Liverpool", "Arsenal"], ok: "Bolton Wanderers" },
  { t: "¿Cuántos Balones de Oro ha ganado?", tipo: "select", op: ["3", "4", "5", "6"], ok: "5" },
  { t: "¿Qué título ganó con Portugal en 2016?", tipo: "radio", op: ["Mundial", "Eurocopa", "Copa América", "Copa Confederaciones"], ok: "Eurocopa" },
  { t: "¿A qué club se fue después del Real Madrid?", tipo: "radio", op: ["Juventus", "Inter", "PSG", "Barcelona"], ok: "Juventus" },
  { t: "¿Contra quién debutó con el Al-Nassr en 2023?", tipo: "select", op: ["Al-Hilal", "Al-Ettifaq", "Al-Ahli", "Al-Ittihad"], ok: "Al-Ettifaq" }
];

document.getElementById("preguntas").innerHTML = preguntas.map(function (p, i) {
  let campo = "";
  if (p.tipo === "radio") {
    campo = '<div class="opciones">' + p.op.map(function (o) {
      return '<label><input type="radio" name="q' + i + '" value="' + o + '"> ' + o + '</label>';
    }).join("") + '</div>';
  } else if (p.tipo === "select") {
    campo = '<select id="q' + i + '"><option value="">Elige una opción</option>' +
      p.op.map(function (o) { return '<option>' + o + '</option>'; }).join("") + '</select>';
  } else {
    campo = '<input type="text" id="q' + i + '" inputmode="numeric" maxlength="4" placeholder="Escribe el año">';
  }
  return '<div class="pregunta" id="p' + i + '"><span class="enunciado"><span class="num">' + (i + 1) + '.</span>' + p.t +
    '</span>' + campo + '<small class="aviso" id="aviso' + i + '"></small></div>';
}).join("");

const btnCal = document.getElementById("btnCalificar");
const resultado = document.getElementById("resultado");
const inputNombre = document.getElementById("nombre");
const REGEX_NOMBRE = /^[A-ZÁÉÍÓÚÜÑ ]{1,100}$/;

function respuesta(i) {
  const p = preguntas[i];
  if (p.tipo === "radio") {
    const r = document.querySelector('input[name="q' + i + '"]:checked');
    return r ? r.value : "";
  }
  return document.getElementById("q" + i).value.trim();
}

function reiniciar() {
  btnCal.textContent = "Calificar";
  btnCal.classList.remove("error");
  resultado.innerHTML = "";
  document.querySelectorAll(".pregunta").forEach(function (d) { d.classList.remove("falta", "bien", "mal"); });
  document.querySelectorAll(".aviso").forEach(function (a) { a.textContent = ""; });
}

// Nombre: mayúsculas, acentos y espacios; sin números ni símbolos
inputNombre.addEventListener("input", function () {
  inputNombre.value = inputNombre.value.toUpperCase().replace(/[^A-ZÁÉÍÓÚÜÑ ]/g, "").slice(0, 100);
  reiniciar();
});
document.getElementById("quiz").addEventListener("change", reiniciar);
document.getElementById("quiz").addEventListener("input", function (e) {
  if (e.target.type === "text" && e.target !== inputNombre) {
    e.target.value = e.target.value.replace(/\D/g, "").slice(0, 4);
    reiniciar();
  }
});

btnCal.addEventListener("click", function () {
  reiniciar();
  let completo = true;

  if (!REGEX_NOMBRE.test(inputNombre.value.trim())) {
    completo = false;
    document.getElementById("p-nombre").classList.add("falta");
    document.getElementById("aviso-nombre").textContent = "Escribe tu nombre (solo letras y espacios).";
  }
  preguntas.forEach(function (p, i) {
    if (!respuesta(i)) {
      completo = false;
      document.getElementById("p" + i).classList.add("falta");
      document.getElementById("aviso" + i).textContent = "Contesta esta pregunta.";
    }
  });

  if (!completo) {
    btnCal.textContent = "Error";
    btnCal.classList.add("error");
    return;
  }

  let aciertos = 0;
  preguntas.forEach(function (p, i) {
    const bien = respuesta(i) === p.ok;
    if (bien) aciertos++;
    document.getElementById("p" + i).classList.add(bien ? "bien" : "mal");
    document.getElementById("aviso" + i).textContent = bien ? "¡Correcto!" : "Respuesta correcta: " + p.ok;
  });
  const nombre = inputNombre.value.trim();
  resultado.innerHTML = "Todo está en orden<small>" + nombre + ", acertaste " + aciertos + " de " + preguntas.length + ".</small>";
  resultado.scrollIntoView({ behavior: "smooth", block: "center" });
});
