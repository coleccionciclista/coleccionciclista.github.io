var cambiarContenidoButton = document.getElementById('cambiarContenido');
var contenidoActualDiv = document.getElementById('contenidoActual');

// Función para cambiar el contenido
function cambiarContenido() {
      var script = document.createElement('script');
    script.src ="bodys/1984.js"; // Reemplaza 'ruta-del-archivo.js' con la ruta correcta de tu archivo JavaScript
    document.head.appendChild(script);
}

// Agregar evento clic al botón
cambiarContenidoButton.addEventListener('click', cambiarContenido);