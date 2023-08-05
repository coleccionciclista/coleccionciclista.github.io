
// Función para mostrar el contenido dependiendo de la opción seleccionada
function inicio(option) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''; // Limpiamos el contenido actual

    switch (option) {
        case 'index':
            // Contenido para la opción 1
            contentContainer.innerHTML = `
               
           <h1>Bienvenido a la página</h1>
      
       
          <img class=" espacio" src="index/s1.jpg">
       
            `;
         
        default:
            break;
    }
}
