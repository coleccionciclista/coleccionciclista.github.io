document.addEventListener("DOMContentLoaded", function() {
  const currentPageYear = parseInt(location.pathname.split("/").pop().split(".")[0]);

  const previousYear = currentPageYear - 1;
  const nextYear = currentPageYear + 1;

  const previousButton = document.getElementById("botonAnterior");
  const nextButton = document.getElementById("botonSiguiente");

  if (previousButton) {
    if (currentPageYear > 1978) {
      previousButton.addEventListener("click", function() {
        navigateToYear(previousYear);
      });
    } else {
      previousButton.disabled = true;
    }
  }

  if (nextButton) {
    if (currentPageYear < 2024) {  // Verifica si el año actual es menor al siguiente año
      nextButton.addEventListener("click", function() {
        navigateToYear(nextYear);
      });
    } else {
      nextButton.disabled = true;  // Desactiva el botón de siguiente si el año actual es igual o mayor al siguiente año
    }
  }
});

function navigateToYear(year) {
  const currentPagePath = location.pathname;
  const newPath = currentPagePath.replace(/\d{4}/, year);
  window.location.href = newPath;
}
