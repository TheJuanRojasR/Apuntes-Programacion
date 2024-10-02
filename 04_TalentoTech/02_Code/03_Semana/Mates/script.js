'use strict'

/*
Regla de 3 pasos cuando se manipule el DOM (Siempre hacerla) att: Juan Rojas
    1. Referenciar los elementos del DOM.
    2. Crear funciones.
    3. Asignalar las funciones a los eventos.
*/

const PRODUCT_BUTTON = document.getElementById('productButton');


const sendInformation = () => {
    const PRODUCT_FORM = document.getElementById('productForm');
    const formData = new FormData(PRODUCT_FORM);

    const isValid = validateInformation(formData);
    if (!isValid) {
        console.log("Form is invalid. Please check the fields.");
        return;
    } 

    const objetoProducto = {
        productName : formData.get('productName'),
        productPrice: formData.get('productPrice'),
        productDescription: formData.get('productDescription'),
        productQuantity: formData.get('productQuantity'),
    }

    // El objeto se tiene que convertir en JSON porque el localStorage solo acepta cadenas de texto.
    // JSON.stringify() convierte el objeto en una cadena de texto JSON
    localStorage.setItem('producto', JSON.stringify(objetoProducto));
    
    console.log("Producto guardado en localStorage:", objetoProducto);
}

const validateInformation = (data) => {
    let isValid = true;

    for (let [key, value] of data.entries()) {
        
        // Validar que los campos esten diligenciados.
        if (!value.trim()) {
            console.error(`${key} es requerido.`);
            isValid = false;
        }

        // Validar que los numeros sean correctos.
        if (key === 'productPrice' || key === 'productQuantity') {
            if (isNaN(value) || Number(value) <= 0) {
                console.error(`${key} tiene que ser un numero y superior a cero.`)
                isValid = false;
            }
        }
    }
    return isValid;
}



PRODUCT_BUTTON.addEventListener('click', sendInformation);





