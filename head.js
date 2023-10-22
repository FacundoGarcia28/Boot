// Tus líneas de texto
var textArray = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi molestiae, similique voluptatum',
  'consectetur adipisicing elit. Maxime, dignissimos. Commodi neque obcaecati, sequi incidunt',
  'Maxime, dignissimos. Commodi neque obcaecati, sequi incidunt ea soluta laboriosam.'
];

// Índice para seguir la línea de texto actual
var currentIndex = 0;

// Función para cambiar el texto del carrusel
function changeText() {
  var carouselDiv = document.getElementById('carouselText');

  // Cambiar el texto en el div
  carouselDiv.innerHTML = textArray[currentIndex];

  // Actualizar el índice para la próxima vez
  currentIndex++;
  if (currentIndex >= textArray.length) {
    currentIndex = 0;
  }
}
// Cambiar el texto cada 2 segundos
setInterval(changeText, 2000);

function mostrarOcultarOpciones() {
  var opciones = document.getElementById("opcionesMD_SM");
  if (opciones.style.display === "none") {
    opciones.style.display = "block";
  } else {
    opciones.style.display = "none";
  }
}