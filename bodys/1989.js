
// Función para mostrar el contenido dependiendo de la opción seleccionada
function bolsas1989(option) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''; // Limpiamos el contenido actual

    switch (option) {
        case '1989':
            // Contenido para la opción 1
            contentContainer.innerHTML = `
              <h3>1989</h3>
                
                <div class="image-container">
                <img src= "bolsas/1989/IMG_20211022_201951.jpg"  alt="Imagen 1">
                <p>     Kelme-Iberia-Varta </p> 
                </div>   


                 
                <div class="image-container">
                <img src= "bolsas/1989/IMG_20211022_203627.jpg"  alt="Imagen 1">
                <p> Carrera-Vagabond </p> 
                </div>  


                 
                <div class="image-container">
                <img src= "bolsas/1989/IMG_20211030_121810.jpg"   alt="Imagen 1">
                <p>     Lotus-Zahor </p> 
                </div>  

                 
                <div class="image-container">
                <img src= "bolsas/1989/IMG_20211030_150926.jpg"  alt="Imagen 1">
                <p>     Puertas Mavisa-Galli </p> 
                </div>  


                <div class="image-container">
                <img src= "bolsas/1989/IMG_20211022_202933.jpg"  alt="Imagen 1">
                <p>   R.M.O. </p> 
                </div>  

                <div class="image-container">
                <img src="bolsas/1989/IMG_20211031_223531.jpg"  alt="Imagen 1" >
                <p>    </p> 
                </div>  

                  <div class="image-container">
                <img src=  "bolsas/1989/IMG_20221016_153343_1.jpg"  alt="Imagen 1">
                <p>     PDM-Ultima-Concorde  </p> 
                </div>  

                 <div class="image-container">
                <img src= "bolsas/1989/IMG_20210611_180907.jpg" alt="Imagen 1" >
                <p>   Sicasal Acral Campocarne  </p> 
                </div>  
                

                 <div class="image-container">
                <img src= "bolsas/1989/IMG_20210611_182925.jpg"  alt="Imagen 1">
                <p>       </p> 
                </div>  

                 <div class="image-container">
                <img src= "bolsas/1989/IMG_20211022_202841.jpg"   alt="Imagen 1">
                <p>     Domex-Weinmann  </p> 
                </div>  

            `;
            
         
        default:
            break;
    }
}
function botellines1989(option) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''; // Limpiamos el contenido actual

    switch (option) {
        case '1989':
            // Contenido para la opción 1
            contentContainer.innerHTML = `
                <h3> 1989 </h3>
                <div class="image-container">
                 <img src= "index/proximamente.png" alt="Imagen 1">
                <p> </p> 
                </div>      
            `;
         
        default:
            break;
    }
}