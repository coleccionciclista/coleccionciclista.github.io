
// Función para mostrar el contenido dependiendo de la opción seleccionada
function bolsas1980(option) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''; // Limpiamos el contenido actual

    switch (option) {
        case '1980':
            // Contenido para la opción 1
            contentContainer.innerHTML = `
                <h3>1980</h3>
                <div class="image-container">
                <img src= "" alt="Imagen 2">
                <p> </p> 
                </div>      
            `;
         
        default:
            break;
    }
}
function botellines1979(option) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''; // Limpiamos el contenido actual

    switch (option) {
        case '1980':
            // Contenido para la opción 1
            contentContainer.innerHTML = `
                <h3>1980</h3>
                <div class="image-container">
                 <img src= "" alt="Imagen 2">
                <p> </p> 
                </div>      
            `;
         
        default:
            break;
    }
}