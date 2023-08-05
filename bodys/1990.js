  
// Función para mostrar el contenido dependiendo de la opción seleccionada
function bolsas1990(option) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''; // Limpiamos el contenido actual

    switch (option) {
        case '1990':
            // Contenido para la opción 1
            contentContainer.innerHTML = `
              <h3>1990</h3>
                
                <div class="image-container">
               <img src="bolsas/1990/IMG_20211022_205047.jpg">
                <p> CLAS-Cajastur </p> 
                </div>   


                 
                <div class="image-container">
               <img src="bolsas/1990/IMG_20211030_155112.jpg">
                <p>     Puertas Mavisa </p> 
                </div>  


                 
                <div class="image-container">
              <img src="bolsas/1990/IMG_20221016_153446_1.jpg">
                <p>     Tulip Computers </p> 
                </div>  

                 
                <div class="image-container">
               <img src="bolsas/1990/IMG_20211022_202117.jpg">
                <p> Kelme-Iberia-Varta </p> 
                </div>  


                <div class="image-container">
                 <img src="bolsas/1990/IMG_20211022_202831.jpg">
                <p>  Team Stuttgart</p> 
                </div>  

                <div class="image-container">
                <img src="bolsas/1990/IMG_20211022_203123.jpg">
                <p>  Isoglass-Garden Wood </p> 
                </div>  

                  <div class="image-container">
                <img src="bolsas/1990/IMG_20211022_202801.jpg" >
                <p> Teka</p> 
                </div>  

                 <div class="image-container">
                <img src="bolsas/1990/IMG20230620200427.jpg" >
                <p>   Seur </p> 
                </div>  

            `;
            
         
        default:
            break;
    }
}
function botellines1990(option) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''; // Limpiamos el contenido actual

    switch (option) {
        case '1990':
            // Contenido para la opción 1
            contentContainer.innerHTML = `
                <h3> 1990 </h3>
                <div class="image-container">
                 <img src= "index/proximamente.png" alt="Imagen 1">
                <p> </p> 
                </div>      
            `;
         
        default:
            break;
    }
}










