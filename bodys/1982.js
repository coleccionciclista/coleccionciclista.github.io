
// Función para mostrar el contenido dependiendo de la opción seleccionada
function bolsas1982(option) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''; // Limpiamos el contenido actual

    switch (option) {
        case '1982':
            // Contenido para la opción 1
            contentContainer.innerHTML = `
                <h3>1982</h3>
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
        case '1982':
            // Contenido para la opción 1
            contentContainer.innerHTML = `
                <h3>1982</h3>
                <div class="image-container">
                 <img src= "" alt="Imagen 2">
                <p> </p> 
                </div>      
            `;
         
        default:
            break;
    }
}