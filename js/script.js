// ---------- CALCULADORA ----------
// Cuando se da clic en el botón, se calcula el costo
const botonCalcular = document.getElementById("btn-calcular");

botonCalcular.addEventListener("click", function () {
  const paginas = Number(document.getElementById("paginas").value);
  const precio = Number(document.getElementById("precio").value);
  const resultado = document.getElementById("resultado");

  // Revisamos que los datos sean correctos
  if (paginas <= 0 || precio < 0) {
    resultado.textContent = "Datos incorrectos";
    return;
  }

  const total = paginas * precio;
  // Se cambia el texto del elemento por su id
  resultado.textContent = "$" + total.toLocaleString("es-MX");
});

// ---------- FORMULARIO DE CONTACTO ----------
const formulario = document.getElementById("formulario-contacto");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // para que no se recargue la página

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje").value;
  const aviso = document.getElementById("mensaje-formulario");

  if (nombre === "" || correo === "" || mensaje === "") {
    aviso.textContent = "Por favor llena todos los campos.";
  } else {
    aviso.textContent = "Gracias " + nombre + ", recibimos tu mensaje.";
    formulario.reset();
  }
});

// ---------- ANIMACIONES CON GSAP ----------
gsap.registerPlugin(ScrollTrigger);

// Animación 1: entrada del Hero
gsap.from("#hero-titulo", { y: -50, opacity: 0, duration: 1 });
gsap.from("#hero-texto", { y: 30, opacity: 0, duration: 1, delay: 0.5 });
gsap.from("#hero-boton", { scale: 0, duration: 0.6, delay: 1 });

// Animación 2: aparición de los servicios al hacer scroll
gsap.from(".servicio", {
  opacity: 0,
  y: 60,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#servicios",
    start: "top 75%"
  }
});

// Animación 3: los números de estadísticas suben al hacer scroll
const numeros = document.querySelectorAll(".numero");

numeros.forEach(function (numero) {
  const meta = Number(numero.dataset.numero);
  const contador = { valor: 0 };

  gsap.to(contador, {
    valor: meta,
    duration: 2,
    scrollTrigger: {
      trigger: "#estadisticas",
      start: "top 75%"
    },
    onUpdate: function () {
      numero.textContent = Math.round(contador.valor);
    }
  });
});

// Animación 4: aparición de los proyectos al hacer scroll
gsap.from(".proyecto", {
  opacity: 0,
  x: -60,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#proyectos",
    start: "top 75%"
  }
});
