const API_URL = "http://localhost/dulce-diva/backend"; // ajusta a tu ruta PHP local

document.getElementById("formCliente").addEventListener("submit", async (e) => {
  e.preventDefault();
  const estado = document.getElementById("registroEstado");
  const datos = {
    nombre: document.getElementById("nombre").value.trim(),
    telefono: document.getElementById("telefono").value.trim(),
    email: document.getElementById("email").value.trim(),
    direccion: document.getElementById("direccion").value.trim(),
    alergias: document.getElementById("alergias").value.trim(),
    consentimiento: document.getElementById("consentimiento").checked
  };
  if (!datos.consentimiento) {
    estado.textContent = "Debes autorizar el tratamiento de tus datos.";
    estado.className = "estado-mensaje error";
    return;
  }
  try {
    const res = await fetch(`${API_URL}/clientes.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos)
    });
    if (!res.ok) throw new Error();
    estado.textContent = "¡Registro exitoso!";
    estado.className = "estado-mensaje ok";
    e.target.reset();
  } catch {
    estado.textContent = "No se pudo registrar. Verifica el servidor PHP.";
    estado.className = "estado-mensaje error";
  }
});

function cambiarIdioma(idioma) {
  document.querySelectorAll("[data-es]").forEach(el => {
    const t = idioma === "en" ? el.getAttribute("data-en") : el.getAttribute("data-es");
    if (t) el.textContent = t;
  });
  document.getElementById("btn-es").classList.toggle("activo", idioma === "es");
  document.getElementById("btn-en").classList.toggle("activo", idioma === "en");
}
document.getElementById("btn-es").addEventListener("click", () => cambiarIdioma("es"));
document.getElementById("btn-en").addEventListener("click", () => cambiarIdioma("en"));

// ---- Chatbot burbuja ----
const REGLAS = [
  { p: ["hola"], r: "¡Hola! Soy Diva 🍰 ¿En qué te ayudo?" },
  { p: ["sabor"], r: "Tenemos Chocolate, Limón y Maracuyá." },
  { p: ["precio"], r: "Chocolate y Limón: $18.000. Maracuyá: $19.000." },
  { p: ["horario"], r: "Atendemos lunes a sábado, 8am-6pm." }
];
let chatAbierto = false, intercambios = 0, calificado = false;

function toggleChat() {
  chatAbierto = !chatAbierto;
  document.getElementById("chat-window").classList.toggle("abierto", chatAbierto);
  if (chatAbierto && document.getElementById("chat-log").children.length === 0) {
    agregarMensaje("¡Hola! Soy Diva 🍰 ¿En qué te ayudo?", "bot");
  }
}
function agregarMensaje(texto, tipo) {
  const log = document.getElementById("chat-log");
  const div = document.createElement("div");
  div.className = "chat-msg " + tipo;
  div.textContent = texto;
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
}
document.getElementById("chat-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("chat-input");
  const msg = input.value.trim();
  if (!msg) return;
  agregarMensaje(msg, "user");
  input.value = "";
  const regla = REGLAS.find(x => x.p.some(p => msg.toLowerCase().includes(p)));
  const respuesta = regla ? regla.r : "Un asesor revisará tu mensaje pronto.";
  setTimeout(() => agregarMensaje(respuesta, "bot"), 400);

  fetch(`${API_URL}/atencion.php`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mensaje: msg, respuesta })
  }).catch(() => {});

  intercambios++;
  if (intercambios >= 2 && !calificado) document.getElementById("chat-rating").hidden = false;
});
document.querySelectorAll(".star").forEach(star => {
  star.addEventListener("click", () => {
    const valor = Number(star.dataset.valor);
    calificado = true;
    fetch(`${API_URL}/atencion.php`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ calificacion: valor })
    }).catch(() => {});
    agregarMensaje("¡Gracias por calificar! 💛", "bot");
    document.getElementById("chat-rating").hidden = true;
  });
});

async function cargarReporte() {
  const caja = document.getElementById("reporteResultado");
  caja.classList.add("visible");
  caja.innerHTML = "Cargando...";
  try {
    const res = await fetch(`${API_URL}/atencion.php?reporte=1`);
    const data = await res.json();
    caja.innerHTML = `
      <p>👥 Personas atendidas: <strong>${data.totalAtendidos}</strong></p>
      <p>⭐ Calificación promedio: <strong>${data.promedioCalificacion}</strong> / 5</p>
      <p><strong>Sugerencia:</strong> ${data.sugerencia}</p>`;
  } catch {
    caja.innerHTML = "No se pudo cargar el reporte.";
  }
}
