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
