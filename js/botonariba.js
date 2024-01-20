// Mostrar el botón cuando se haya desplazado cierta cantidad desde la parte superior
window.onscroll = function () {
  showScrollButton();
};

function showScrollButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("Siguiente").style.display = "block";
  } else {
    document.getElementById("Siguiente").style.display = "none";
  }
}

// Función para desplazarse a la parte superior de la página
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
