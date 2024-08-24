document.addEventListener("DOMContentLoaded", function () {
  const estudiantesContainer = document.getElementById("estudiantes-container");

  // Consumir el archivo JSON
  fetch("estudiantes.json")
    .then((response) => response.json())
    .then((data) => {
      const estudiantes = data.estudiantes;

      // Recorrer los estudiantes y crear las tarjetas HTML
      estudiantes.forEach((estudiante) => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        const nombre = document.createElement("div");
        nombre.classList.add("nombre");
        nombre.textContent = estudiante.nombre;

        const casa = document.createElement("div");
        casa.classList.add("casa", estudiante.casa);
        casa.textContent = estudiante.casa;

        // Agregar el nombre y la casa a la tarjeta
        cardDiv.appendChild(nombre);
        cardDiv.appendChild(casa);

        // Agregar la tarjeta al contenedor de estudiantes
        estudiantesContainer.appendChild(cardDiv);
      });
    })
    .catch((error) => {
      console.error("Error al cargar el archivo JSON:", error);
    });
});
