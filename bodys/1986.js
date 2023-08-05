
// Función para mostrar el contenido dependiendo de la opción seleccionada
function bolsas1986(option) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''; // Limpiamos el contenido actual

    switch (option) {
        case '1986':
            // Contenido para la opción 1
            contentContainer.innerHTML = `
                <h3>1986</h3>
                <div class="image-container">
                <img src= "bolsas/1986/IMG_20211022_203021.jpg" alt="Imagen 1">
                <p> PDM-Ultima-Concorde </p> 
                </div>      
            `;
         
        default:
            break;
    }
}
function botellines1986(option) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''; // Limpiamos el contenido actual

    switch (option) {
        case '1986':
            // Contenido para la opción 1
            contentContainer.innerHTML = `
                <h3>1986</h3>
                <div class="image-container">
                 <img src= "index/proximamente.png" alt="Imagen 1">
                <p> </p> 
                </div>      
            `;
         
        default:
            break;
    }
}