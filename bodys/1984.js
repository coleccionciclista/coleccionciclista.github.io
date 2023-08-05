
// Función para mostrar el contenido dependiendo de la opción seleccionada
function bolsas1984(option) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''; // Limpiamos el contenido actual

    switch (option) {
        case '1984':
            // Contenido para la opción 1
            contentContainer.innerHTML = `
                <h3>1984</h3>
                <div class="image-container">s
                <img src= "bolsas/1984/IMG_20211022_194610.jpg" alt="Imagen 2">
                <p> </p> 
                </div>      
            `;
         
        default:
            break;
    }
}
function botellines1984(option) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''; // Limpiamos el contenido actual

    switch (option) {
        case '1984':
            // Contenido para la opción 1
            contentContainer.innerHTML = `
                <h3>1984</h3>
                <div class="image-container">
                 <img src= "index/proximamente.png" alt="Imagen 2">
                <p> </p> 
                </div>      
            `;
         
        default:
            break;
    }
}