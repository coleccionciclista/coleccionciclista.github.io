
// Función para mostrar el contenido dependiendo de la opción seleccionada
function showContent1(option) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''; // Limpiamos el contenido actual

    switch (option) {
        case '2016':
            // Contenido para la opción 1
            contentContainer.innerHTML = `
                <h2>Opción 1</h2>
                <div class="image-container">
               <img src= "E:/1/colecion/bolsas/1991/IMG_20210611_180823.jpg" alt="Imagen 2"> 
                </div>
                <p>Texto relacionado con la opción 1.</p>
            `;
         
        default:
            break;
    }
}
 
