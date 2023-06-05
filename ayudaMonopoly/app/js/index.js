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

// ############# Reproducir música #############
const playMusicImg = document.getElementById("playMusic");

// Obtener referencia al elemento de audio
const audio = new Audio("../audio/florensia.mp3");

// Función para reproducir la canción
function reproducirCancion() {
	// Verificar si la canción ya se está reproduciendo
	if (audio.paused) {
		audio.play();
	} else {
		audio.pause();
		audio.currentTime = 0;
	}
}
// Agregar el evento de clic a la imagen
playMusicImg.addEventListener("click", reproducirCancion);



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

// Enlace contactar - Hacia el Footer
function scrollToContact() {
	const contactoSection = document.querySelector(".footer-section");
	contactoSection.scrollIntoView({
		behavior: "smooth",
	});
}

// Mostrar o no las preguntas y respuestas de FAQ
function toggleHoverBox(box) {
  const pregunta = box.querySelector('.box-pregunta');
  const respuesta = box.querySelector('.box-respuesta');

  pregunta.classList.toggle('hidden');
  respuesta.classList.toggle('hidden');

	const imagenPregunta = box.querySelector('.box-imgPregunta');
  const imagenRespuesta = box.querySelector('.box-imgRespuesta');

  // Cambiar las imágenes
  if (imagenPregunta.style.display === 'none') {
    imagenPregunta.style.display = 'inline';
    imagenRespuesta.style.display = 'none';
  } else {
    imagenPregunta.style.display = 'none';
    imagenRespuesta.style.display = 'inline';
  }
}

// Establecer tamaño de la imagen de respuesta (check-verde)
const imagenesRespuesta = document.querySelectorAll('.box-imgRespuesta');

for (let i = 0; i < imagenesRespuesta.length; i++) {
  imagenesRespuesta[i].style.width = '40px';
  imagenesRespuesta[i].style.height = 'auto';
}
