
// Función para mostrar el contenido dependiendo de la opción seleccionada
function bolsas1988(option) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''; // Limpiamos el contenido actual

    switch (option) {
        case '1988':
            // Contenido para la opción 1
            contentContainer.innerHTML = `
                <h3>1988</h3>
                
                <div class="image-container">
                <img src= "bolsas/1988/IMG_20211022_201924.jpg" alt="Imagen 1">
                <p>     Kelme-Iberia-Varta </p> 
                </div>   


                 
                <div class="image-container">
                <img src= "bolsas/1988/IMG_20211022_203634.jpg" alt="Imagen 1">
                <p> Carrera-Vagabond </p> 
                </div>  


                 
                <div class="image-container">
                <img src= "bolsas/1988/IMG_20211022_202858.jpg" alt="Imagen 1">
                <p> Panasonic-Isostar-Colnago-Agu </p> 
                </div>  

                 
                <div class="image-container">
                <img src= "bolsas/1988/IMG_20211022_202923.jpg" alt="Imagen 1">
                <p> Helios-CR </p> 
                </div>  


                <div class="image-container">
                <img src= "bolsas/1988/IMG_20211022_203114.jpg" alt="Imagen 1">
                <p>   R.M.O. </p> 
                </div>  

            `;
            
         
        default:
            break;
    }
}
function botellines1988(option) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''; // Limpiamos el contenido actual

    switch (option) {
        case '1988':
            // Contenido para la opción 1
            contentContainer.innerHTML = `
                <h3> 1988 </h3>
                <div class="image-container">
                 <img src= "index/proximamente.png" alt="Imagen 1">
                <p> </p> 
                </div>      
            `;
         
        default:
            break;
    }
}