// ############# Animación de los copos de nieve #############

// Número de copos de nieve
const numSnowflakes = 500;
// Duración de la animación en segundos
const animationDuration = 60;

// Crear los copos de nieve y añadirlos al contenedor
const snowflakesContainer = document.querySelector(".snowflakes");
for (let i = 0; i < numSnowflakes; i++) {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";
  snowflake.style.left = `${Math.random() * 100}%`;
  // Ajustar el retraso de la animación
  snowflake.style.animationDelay = `${Math.random() * animationDuration}s`;
  snowflakesContainer.appendChild(snowflake);
}

// ############# Anclas de la página #############
// Inicio -- Arriba del todo.
const inicioLink = document.getElementById("inicio-link");

inicioLink.addEventListener("click", function (event) {
  // Evitar el comportamiento predeterminado del enlace
  event.preventDefault();

  // Desplazar la página hacia arriba
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Botón "Más Información"
function scrollToInstructions() {
  const instructionsSection = document.querySelector(".faq-section");
  instructionsSection.scrollIntoView({
    behavior: "smooth",
  });
}

// About (Instrucciones) -- Hacia las tarjetas.
const inicioAbout = document.getElementById("inicio-about");

inicioAbout.addEventListener("click", function (event) {
  // Evitar el comportamiento predeterminado del enlace
  event.preventDefault();

  // Desplazar la página hacia arriba
  window.scrollTo({
    top: 1220,
    behavior: "smooth",
  });
});

// FAQ -- Hacia Preguntas y Respuestas.
const inicioFAQ = document.getElementById("inicio-faq");

inicioFAQ.addEventListener("click", function (event) {
  // Evitar el comportamiento predeterminado del enlace
  event.preventDefault();

  // Desplazar la página hacia arriba
  window.scrollTo({
    top: 2200,
    behavior: "smooth",
  });
});

// Mostrar o no las preguntas y respuestas de FAQ
function toggleHoverBox(event) {
  const box = event.currentTarget;
  const pregunta = box.querySelector('.box-pregunta');
  const respuesta = box.querySelector('.box-respuesta');

  pregunta.classList.toggle('hidden');
  respuesta.classList.toggle('hidden');
}
