
// Función para mostrar el contenido dependiendo de la opción seleccionada
function bolsas1978(option) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''; // Limpiamos el contenido actual

    switch (option) {
        case '1978':
            // Contenido para la opción 1
            contentContainer.innerHTML = `
                <h3>1978</h3>
                <div class="image-container">
                <img src= "bolsas/1978/1647032676326.jpg" alt="Imagen 2">
                <p> d´alessandro tubolari kas</p> 
                </div>      
            `;
         
        default:
            break;
    }
}
function botellines1978(option) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''; // Limpiamos el contenido actual

    switch (option) {
        case '1978':
            // Contenido para la opción 1
            contentContainer.innerHTML = `
                <h3>1978</h3>
                <div class="image-container">
                 <img src= "index/proximamente.png" alt="Imagen 2">
                <p> working</p> 
                </div>      
            `;
         
        default:
            break;
    }
}