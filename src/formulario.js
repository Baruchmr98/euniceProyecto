//ESTE JS RECIBE LOS DATOS DEL FORMULARIO Y LOS ALMACENA DEN EL LS. AQUÍ NO SE CREAN LAS CARDS

// Agrega un event listener al evento 'submit' del formulario
document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario
    
    //Se obtienen los valores (.values) del formulario y guardarlos en variables
    const productName = document.getElementById('productName').value;
    const description = document.getElementById('description').value; 
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
    const imageFile = document.getElementById('image').files[0];

    const reader = new FileReader();
    reader.readAsDataURL(imageFile);

    reader.onload = function () {
        const imageBase64 = reader.result;

        //Crear un objeto JS con las variables 
        const cardData = {
            productName: productName,
            description: description,
            quantity: quantity,
            price: price,
            image: imageBase64
        }
    
        let cardList = JSON.parse(localStorage.getItem('cardList')) || [];
    
        cardList.push(cardData);
    
        //Almacenar el objeto en el LS
        localStorage.setItem('cardList', JSON.stringify(cardList));
    
        window.location.href = '/index.html';
    }

});
