
// Función para mostrar el contenido dependiendo de la opción seleccionada
function bolsas1985(option) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''; // Limpiamos el contenido actual

    switch (option) {
        case '1985':
            // Contenido para la opción 1
            contentContainer.innerHTML = `
                <h3>1985</h3>
                <div class="image-container">
                <img src= "bolsas/1985/IMG_20211022_203051.jpg" alt="Imagen 1">
                <p> 7-ELEVEN </p> 
                </div>      
            `;
         
        default:
            break;
    }
}
function botellines1985(option) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''; // Limpiamos el contenido actual

    switch (option) {
        case '1985':
            // Contenido para la opción 1
            contentContainer.innerHTML = `
                <h3>1985</h3>
                <div class="image-container">
                 <img src= "index/proximamente.png" alt="Imagen 1">
                <p> </p> 
                </div>      
            `;
         
        default:
            break;
    }
}