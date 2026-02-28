
const allImagesArray = [
    //////// 2025 ////////////
    { year: 2025, bidon: "bidones\\2025\\IMG_6562.webp", equipo: "ROLAND " },
    { year: 2025, bidon: "bidones\\2025\\IMG_6563.webp", equipo: "ROLAND CARA 2 " },
    { year: 2025, bidon: "bidones\\2025\\IMG_6564.webp", equipo: "TEAM MEDELLIN - EPM " },
    { year: 2025, bidon: "bidones\\2025\\IMG_6130.webp", equipo: "EUSKALTEL EUSKADI TEAM EDICION LIMITADA DANA " },
    { year: 2025, bidon: "bidones\\2025\\IMG_6131.webp", equipo: "EUSKALTEL EUSKADI TEAM EDICION LIMITADA DANA CARA 2 " },
    { year: 2025, bidon: "bidones\\2025\\IMG_6132.webp", equipo: "EUSKALTEL EUSKADI TEAM EDICION LIMITADA DANA CARA 3 " },
    { year: 2025, bidon: "bidones\\2025\\IMG_6133.webp", equipo: "VUELTA CICLISTA ANDALUCIA " },
    { year: 2025, bidon: "bidones\\2025\\IMG_6134.webp", equipo: "VUELTA CICLISTA ANDALUCIA PARTE TRASERA " },
    { year: 2025, bidon: "bidones\\2025\\IMG_6484.webp", equipo: "INTERMARCHÉ - WANTY " },
    { year: 2025, bidon: "bidones\\2025\\IMG_6489.webp", equipo: "INTERMARCHÉ - WANTY LATERAL " },
    { year: 2025, bidon: "bidones\\2025\\IMG_6485.webp", equipo: "XSPEED UNITED CONYINENTAL" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6486.webp", equipo: "BAHRAIN VICTORIOUS  " },
    { year: 2025, bidon: "bidones\\2025\\IMG_6487.webp", equipo: "BAHRAIN VICTORIOUS CARA 2  " },
    { year: 2025, bidon: "bidones\\2025\\IMG_6488.webp", equipo: "BAHRAIN VICTORIOUS CARA 3  " },
    { year: 2025, bidon: "bidones\\2025\\IMG_6490.webp", equipo: "GROUPAMA - FDJ " },
    { year: 2025, bidon: "bidones\\2025\\IMG_6491.webp", equipo: "UAE Team ADQ " },
    { year: 2025, bidon: "bidones\\2025\\IMG_6492.webp", equipo: "UAE Team ADQ PARTE TRASERA " },
    { year: 2025, bidon: "bidones\\2025\\IMG_6493.webp", equipo: "" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6494.webp", equipo: "" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6497.webp", equipo: "EUSKALTEL EUSKADI " },
    { year: 2025, bidon: "bidones\\2025\\IMG_6498.webp", equipo: "EUSKALTEL EUSKADI CARA 2" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6499.webp", equipo: "EUSKALTEL EUSKADI CARA 3" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6500.webp", equipo: "LABORAL KUTXA - FUNDACIÓN EUSKADI" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6501.webp", equipo: "LABORAL KUTXA - FUNDACIÓN EUSKADI CARA 2" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6502.webp", equipo: "LABORAL KUTXA - FUNDACIÓN EUSKADI CARA 3" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6504.webp", equipo: "TEAM VISMA | LEASE A BIKE" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6506.webp", equipo: "XDS ASTANA TEAM " },
    { year: 2025, bidon: "bidones\\2025\\IMG_6527.webp", equipo: "XDS ASTANA TEAM" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6507.webp", equipo: "SOUDAL QUICK-STEP " },
    { year: 2025, bidon: "bidones\\2025\\IMG_6508.webp", equipo: "SOUDAL QUICK-STEP CARA 2" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6509.webp", equipo: "BURGOS-BURPELLET-BH" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6510.webp", equipo: "BURGOS-BURPELLET-BH CARA 2" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6511.webp", equipo: "BURGOS-BURPELLET-BH CARA 3" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6516.webp", equipo: "DANENA TXIRRINDULARITZA ESKOLA" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6517.webp", equipo: "DANENA TXIRRINDULARITZA ESKOLA CARA 2 " },
    { year: 2025, bidon: "bidones\\2025\\IMG_6519.webp", equipo: "CYCLING TEAM WAGNER-BAZIN WB" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6518.webp", equipo: "CYCLING TEAM WAGNER-BAZIN WB CARA 2" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6520.webp", equipo: "TEAM PICNIC POSTNL " },
    { year: 2025, bidon: "bidones\\2025\\IMG_6521.webp", equipo: "TEAM PICNIC POSTNL CARA 2" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6522.webp", equipo: "" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6523.webp", equipo: "TUDOR PRO CYCLING TEAM " },
    { year: 2025, bidon: "bidones\\2025\\IMG_6525.webp", equipo: "RED BULL - BORA - HANSGROHE " },
    { year: 2025, bidon: "bidones\\2025\\IMG_6526.webp", equipo: "PROJECT ECHELON RACING" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6528.webp", equipo: "EUSKALTEL EUSKADI" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6529.webp", equipo: "EUSKALTEL EUSKADI CARA 1" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6530.webp", equipo: "EUSKALTEL EUSKADI CARA 2" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6531.webp", equipo: "WINSPACE" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6532.webp", equipo: "MANTECA PROFESIONAL ASSISTANCE" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6538.webp", equipo: "ALIMCO-CAMPAGNOLO" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6539.webp", equipo: "MENTORISE TEEM CCN" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6540.webp", equipo: "ENEICAT - CMTEAM" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6541.webp", equipo: "ENEICAT - CMTEAM CARA 2" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6542.webp", equipo: "ENEICAT - CMTEAM CARA 3" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6543.webp", equipo: "ENEICAT - CMTEAM " },
    { year: 2025, bidon: "bidones\\2025\\IMG_6544.webp", equipo: "ENEICAT - CMTEAM CARA 2 " },
    { year: 2025, bidon: "bidones\\2025\\IMG_6545.webp", equipo: "ENEICAT - CMTEAM CARA 3" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6546.webp", equipo: "TEAM SD WORX – PROTIME" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6547.webp", equipo: "TEAM SD WORX – PROTIME CARA 2" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6548.webp", equipo: "LOTTO CYCLING TEAM" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6549.webp", equipo: "TOTALENERGIES" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6550.webp", equipo: "UAE TEAM EMIRATES - XRG " },
    { year: 2025, bidon: "bidones\\2025\\IMG_6551.webp", equipo: "TDT Unibet" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6554.webp", equipo: "UAE TEAM EMIRATES - XRG " },
    { year: 2025, bidon: "bidones\\2025\\IMG_6552.webp", equipo: "MOVISTAR TEAM" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6555.webp", equipo: "ARKEA-B&B HOTELS" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6556.webp", equipo: "PROJECT ECHELON RACING" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6557.webp", equipo: "LIV - ALULA - JAYCO" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6558.webp", equipo: "BEPINK - IMATRA - BONGIOANNI" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6559.webp", equipo: "BEPINK - IMATRA - BONGIOANNI CARA 2" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6560.webp", equipo: "Q36.5 PRO CYCLING TEAM" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6561.webp", equipo: "Q36.5 PRO CYCLING TEAM CARA 2" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6581.webp", equipo: "" },
    { year: 2025, bidon: "bidones\\2025\\IMG_6582.webp", equipo: "" },
    { year: 1993, bidon: "bidones\\1993\\IMG20221231182132.webp", equipo: "" },
    { year: 1993, bidon: "bidones\\1993\\IMG20221231182138.webp", equipo: "" },
    { year: 1993, bidon: "bidones\\1993\\IMG20221231183216.webp", equipo: "" },
    { year: 1993, bidon: "bidones\\1993\\IMG20221231184156.webp", equipo: "" },
    { year: 1993, bidon: "bidones\\1993\\IMG20221231184202.webp", equipo: "" },

    //////////1992////////////////////

    { year: 1992, bidon: "bidones\\1992\\IMG20221230154329.webp", equipo: "" },
    { year: 1992, bidon: "bidones\\1992\\IMG20221231182039.webp", equipo: "" },
    { year: 1992, bidon: "bidones\\1992\\IMG20221231182044.webp", equipo: "" },
    { year: 1992, bidon: "bidones\\1992\\IMG20221231184115.webp", equipo: "" },
    { year: 1992, bidon: "bidones\\1992\\IMG20221231184132.webp", equipo: "" },

    //////////1991////////////////////

    { year: 1991, bidon: "bidones\\1991\\IMG20221229131345.webp", equipo: "" },
    { year: 1991, bidon: "bidones\\1991\\IMG20221230151952.webp", equipo: "" },
    { year: 1991, bidon: "bidones\\1991\\IMG20221230152423.webp", equipo: "" },
    { year: 1991, bidon: "bidones\\1991\\IMG20221231182558.webp", equipo: "" },

    //////////1990////////////////////

    { year: 1990, bidon: "bidones\\1990\\IMG20221231181757.webp", equipo: "" },
    { year: 1990, bidon: "bidones\\1990\\IMG20221231182028.webp", equipo: "" },
    { year: 1990, bidon: "bidones\\1990\\IMG20221231184009.webp", equipo: "" },
    { year: 1990, bidon: "bidones\\1990\\IMG20221231184014.webp", equipo: "" },


    //////////1989////////////////////

    { year: 1989, bidon: "bidones\\1989\\IMG20221231184302.webp", equipo: "" },
    { year: 1989, bidon: "bidones\\1989\\IMG20221229125643.webp", equipo: "" },
    { year: 1989, bidon: "bidones\\1989\\IMG20221229131200.webp", equipo: "" },
    { year: 1989, bidon: "bidones\\1989\\IMG20221229131658.webp", equipo: "" },
    { year: 1989, bidon: "bidones\\1989\\IMG20221230152453.webp", equipo: "" },
    { year: 1989, bidon: "bidones\\1989\\IMG20221231183953.webp", equipo: "" },
    { year: 1989, bidon: "bidones\\1989\\IMG20221231184233.webp", equipo: "" },

    //////////1988////////////////////

    { year: 1988, bidon: "bidones\\1988\\IMG20221229125837.webp", equipo: "" },
    { year: 1988, bidon: "bidones\\1988\\IMG20221229130201.webp", equipo: "" },
    { year: 1988, bidon: "bidones\\1988\\IMG20221230151313.webp", equipo: "" },
    { year: 1988, bidon: "bidones\\1988\\IMG20221230152655.webp", equipo: "" },
    { year: 1988, bidon: "bidones\\1988\\IMG20221231183939.webp", equipo: "" },
    { year: 1988, bidon: "bidones\\1988\\IMG20230611134054.webp", equipo: "" },

    //////////1987////////////////////
    { year: 1987, bidon: "bidones\\1987\\IMG20230504214441.webp", equipo: "" },
    { year: 1987, bidon: "bidones\\1987\\IMG20221229125958.webp", equipo: "" },
    { year: 1987, bidon: "bidones\\1987\\IMG20221229131747.webp", equipo: "" },
    { year: 1987, bidon: "bidones\\1987\\IMG20221229131758.webp", equipo: "" },
    { year: 1987, bidon: "bidones\\1987\\IMG20221230151915.webp", equipo: "" },
    { year: 1987, bidon: "bidones\\1987\\IMG20221230152144.webp", equipo: "" },
    { year: 1987, bidon: "bidones\\1987\\IMG20221230152153.webp", equipo: "" },
    { year: 1987, bidon: "bidones\\1987\\IMG20221231183848.webp", equipo: "" },
    //////////1986////////////////////

    { year: 1986, bidon: "bidones\\1986\\IMG20221229132735.webp ", equipo: "" },
    { year: 1986, bidon: "bidones\\1986\\IMG20221230151104.webp ", equipo: "" },
    { year: 1986, bidon: "bidones\\1986\\IMG20221230153449.webp ", equipo: "" },
    { year: 1986, bidon: "bidones\\1986\\IMG20221230154209.webp ", equipo: "" },
    { year: 1986, bidon: "bidones\\1986\\IMG20221231184843.webp", equipo: "" },

    //////////1985////////////////////

    { year: 1985, bidon: "bidones\\1985\\IMG20221230150849.webp ", equipo: "" },
    { year: 1985, bidon: "bidones\\1985\\IMG20221230150856.webp ", equipo: "" },
    { year: 1985, bidon: "bidones\\1985\\IMG20221230150910.webp ", equipo: "" },
    { year: 1985, bidon: "bidones\\1985\\IMG20221231183638.webp ", equipo: "" },
    { year: 1985, bidon: "bidones\\1985\\IMG20221231183643.webp ", equipo: "" },

    //////////1984////////////////////

    { year: 1984, bidon: "bidones\\1984\\IMG20221230151446.webp ", equipo: "" },
    { year: 1984, bidon: "bidones\\1984\\IMG20221230151450.webp ", equipo: "" },
    { year: 1984, bidon: "bidones\\1984\\IMG20221230151454.webp ", equipo: "" },
    { year: 1984, bidon: "bidones\\1984\\IMG20221230153355.webp ", equipo: "" },

    //////////1982////////////////////

    { year: 1982, bidon: "bidones\\1982\\IMG20221230150927.webp ", equipo: "" },
    { year: 1982, bidon: "bidones\\1982\\IMG20221230150938.webp ", equipo: "" },

    //////////1980////////////////////

    { year: 1980, bidon: "bidones\\1980\\IMG20221229130126.webp ", equipo: "" },
    { year: 1980, bidon: "bidones\\1980\\IMG20221230150828.webp ", equipo: "" },
    { year: 1980, bidon: "bidones\\1980\\IMG20221230152343.webp ", equipo: "" },

    //////////1978////////////////////

    { year: 1978, bidon: "bidones\\1978\\IMG20221231184817.webp ", equipo: "" },

    //////////1977////////////////////
    //////////1976////////////////////

    { year: 1976, bidon: "bidones\\1976\\IMG20221229125604.webp ", equipo: "" },
    { year: 1976, bidon: "bidones\\1976\\IMG20221229125610.webp", equipo: "" },

    //////////1975////////////////////

    { year: 1975, bidon: "bidones\\1975\\IMG20221229131251.webp", equipo: "" },
];

$(document).ready(function () {
    $("p").css("display", "block");
});

// Anular evento de enter en formulario
$('input').keypress(function (e) {
    if (e.which == 13) {
        return false;
    }
});

const imageGallery = document.getElementById('image-gallery');
const zoomedContainer = document.getElementById('zoomedContainer');
const zoomedImage = document.getElementById('zoomedImage');

function recogervalor() {
    const loader = document.getElementById('loader');
    const gallery = document.getElementById('image-gallery');

    // 1. Mostrar spinner y limpiar/ocultar galería
    if (loader) loader.style.display = 'block';
    gallery.style.opacity = '0.3'; // La dejamos translúcida mientras carga

    const selectedYear2 = document.getElementById('buscador').value;
    let selectedYear = selectedYear2.toString().toUpperCase();

    // 2. Simulamos la "precarga".
    // En lugar de 30 segundos (que es demasiado), pondremos unos 2-3 segundos
    // que es suficiente para que el navegador procese el lazy loading.
    setTimeout(() => {
        updateGallery(selectedYear);

        if (loader) loader.style.display = 'none';
        gallery.style.opacity = '1'; // Restauramos la visibilidad

        // Opcional: Scroll automático al inicio de la galería tras cargar
        gallery.scrollIntoView({ behavior: 'smooth' });
    }, 10000); // 2000 milisegundos = 2 segundos. Cámbialo si quieres más.
}

function updateGallery(selectedYear) {
    // Ocultar párrafos iniciales y limpiar galería
    $("p").css("display", "none");
    imageGallery.innerHTML = '';

    // 2. MEJORA: Filtro Único (Evita que las imágenes salgan repetidas si el año está en el nombre del equipo)
    const filteredImages = allImagesArray.filter(image =>
        image.year.toString() === selectedYear ||
        image.equipo.toUpperCase().includes(selectedYear)
    );

    // 3. MEJORA: DocumentFragment (Carga masiva mucho más rápida)
    const fragment = document.createDocumentFragment();

    filteredImages.forEach(image => {
        const cardElement = document.createElement('div');
        cardElement.className = 'image-card';

        const pictureElement = document.createElement('picture');
        const sourceElement = document.createElement('source');

        // Detectar si el objeto usa 'bolsa' o 'bidon' automáticamente
        const rutaImagen = image.bolsa || image.bidon;

        sourceElement.srcset = rutaImagen;
        sourceElement.type = 'image/webp';

        const imgElement = document.createElement('img');
        imgElement.src = rutaImagen.replace('.webp', '.jpg');
        imgElement.alt = `Equipo: ${image.equipo}`;

        // 4. MEJORA: Lazy Loading (Solo descarga lo que el usuario ve)
        imgElement.loading = 'lazy';
        imgElement.decoding = 'async'; // Procesa la imagen sin bloquear la web

        pictureElement.appendChild(sourceElement);
        pictureElement.appendChild(imgElement);

        const textElement = document.createElement('p');
        textElement.textContent = `${image.equipo} ${image.year}`;

        cardElement.appendChild(pictureElement);
        cardElement.appendChild(textElement);

        // Zoom al hacer clic
        cardElement.addEventListener('click', () => {
            zoomedImage.src = rutaImagen;
            zoomedImage.alt = image.equipo;
            zoomedContainer.style.display = 'flex';
        });

        fragment.appendChild(cardElement);
    });

    // 5. MEJORA: Inserción única al DOM
    imageGallery.appendChild(fragment);

    // Si no hay resultados, avisar al usuario
    if (filteredImages.length === 0 && selectedYear !== "") {
        imageGallery.innerHTML = '<p style="color:white; text-align:center; width:100%;">No se encontraron imágenes para esa búsqueda.</p>';
    }
}

function visualizarBucadores() {
    const buscador = document.getElementById('buscadorHeader');
    if(buscador) buscador.style.visibility = 'visible';
}

// Cierra el zoom
zoomedContainer.addEventListener('click', () => {
    zoomedContainer.style.display = 'none';
});