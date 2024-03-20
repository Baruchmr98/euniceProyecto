// AQUÍ SE RECUPERAN LOS DATOS DEL LocalStorage, Y SE CREAN LAS CARDS USANDO LA INFORMACIÓN

//Función que recupera los datos del formularioProducto.html que se enviaron al LS y, a su vez, itera sobre cada objeto JS perteneciente al arrayList denominado 'cardList' mediante la variable denominada 'cardData' para ejecutar sobre cada uno la función 'crateProductCard'

document.addEventListener('DOMContentLoaded', function() {
    // Recuperar los datos del almacenamiento local
    const cardListJSON = localStorage.getItem('cardList');
    if (cardListJSON) {
        const cardList = JSON.parse(cardListJSON);
        cardList.forEach(cardData => {
            createProductCard(cardData);
        });
    } else {
        console.error('No se encontraron datos de productos en el almacenamiento local.');
    }
});

// FUNCIÓN para crear la estructura de las cards y asignar a los elementos creados los valores obtenidos del formulario.

function createProductCard(cardData) {

    // Crear elementos para la card '<div>' y asignarles clases de estilos
    const card = document.createElement('div');
    card.classList.add('card');
    
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
        
    // Crear elemento <h5> y asignarle clases de estilos
    const productNameElement = document.createElement('h5');
    productNameElement.classList.add('card-title');
    // Asignar los valores del formulario    
    productNameElement.textContent = cardData.productName;
    
    // Crear elemento <p> y asignarle clases de estilos
    const descriptionElement = document.createElement('p');
    descriptionElement.classList.add('card-text');
    // Asignar los valores del formulario    
    descriptionElement.textContent = cardData.description;
    
    // Crear elemento <p> y asignarle clases de estilos
    const quantityElement = document.createElement('p');
    quantityElement.classList.add('card-text');
    // Asignar los valores del formulario    
    quantityElement.textContent = 'Cantidad: ' + cardData.quantity;
    
    // Crear elemento <p> y asignarle clases de estilos
    const priceElement = document.createElement('p');
    priceElement.classList.add('card-text');
    // Asignar los valores del formulario    
    priceElement.textContent = 'Precio: ' + cardData.price;

    //Crear elemento <img> y asignarle clases de estilos
    const imageElement = document.createElement('img');
    imageElement.src = cardData.image;
    
    // Diseño de la estructura del componente. 
    //Ubicación dentro del documento, en este caso, dentro de cardBody y de card.
    cardBody.appendChild(productNameElement);
    cardBody.appendChild(descriptionElement);
    cardBody.appendChild(quantityElement);
    cardBody.appendChild(priceElement);
    card.appendChild(imageElement);
    card.appendChild(cardBody);
    // Ubicación de las cards dentro del archivo index.html, en este caso, dentro del <div> con ID = productCards.
    document.getElementById('productCards').appendChild(card);
}


//DAR FORMATO CON BASE EN BOOTSTRAP