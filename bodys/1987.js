
// Función para mostrar el contenido dependiendo de la opción seleccionada
function bolsas1987(option) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''; // Limpiamos el contenido actual

    switch (option) {
        case '1987':
            // Contenido para la opción 1
            contentContainer.innerHTML = `
                <h3>1987</h3>
                
                <div class="image-container">
                <img src= "bolsas/1987/IMG_20211022_202744.jpg" alt="Imagen 1">
                <p> PDM-Ultima-Concorde </p> 
                </div>   


                 
                <div class="image-container">
                <img src= "bolsas/1987/IMG_20211022_203655.jpg" alt="Imagen 1">
                <p> Carrera-Vagabond </p> 
                </div>  


                 
                <div class="image-container">
                <img src= "bolsas/1987/IMG_20211030_155508.jpg" alt="Imagen 1">
                 <img src= "bolsas/1987/IMG_20211030_155512.jpg" alt="Imagen 2">
                <p> Caja Rural-Orbea </p> 
                </div>  

                 
                <div class="image-container">
                <img src= "bolsas/1987/IMG_20211022_194913.jpg" alt="Imagen 1">
                <p> Kas </p> 
                </div>  
            `;
            
         
        default:
            break;
    }
}
function botellines1987(option) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''; // Limpiamos el contenido actual

    switch (option) {
        case '1987':
            // Contenido para la opción 1
            contentContainer.innerHTML = `
                <h3>1987</h3>
                <div class="image-container">
                 <img src= "index/proximamente.png" alt="Imagen 1">
                <p> </p> 
                </div>      
            `;
         
        default:
            break;
    }
}