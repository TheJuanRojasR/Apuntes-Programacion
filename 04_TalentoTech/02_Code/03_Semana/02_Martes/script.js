'use strict'

/*
Regla de 3 pasos cuando se manipule el DOM (Siempre hacerla) att: Juan Rojas
    1. Referenciar los elementos del DOM.
    2. Crear funciones.
    3. Asignalar las funciones a los eventos.
*/

const PRODUCT_BUTTON = document.getElementById('productButton');
const PRODUCT_TABLE_BODY = document.getElementById('productTableBody');


function createProduct () {
    const PRODUCT_FORM = document.getElementById('productForm');
    const formData = new FormData(PRODUCT_FORM);
    let productsList = JSON.parse(localStorage.getItem('productsList')) || [];

    const isValid = validateInformation(formData);
    if (!isValid) {
        console.log("Form is invalid. Please check the fields.");
        return;
    } 

    const productObject = {
        productName : formData.get('productName'),
        productPrice: formData.get('productPrice'),
        productDescription: formData.get('productDescription'),
        productQuantity: formData.get('productQuantity'),
    }

    productsList.push(productObject);
    localStorage.setItem('productsList', JSON.stringify(productsList));
    
    console.log("Producto guardado en localStorage:", productsList);

    appendProductToTable(productObject);
}

function validateInformation (data) {
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

// Función para agregar un producto a la tabla
function appendProductToTable (product) {
    const row = document.createElement('tr');

    const createCell = (text) => {
        const cell = document.createElement('td');
        cell.textContent = text;
        cell.className = 'product-list__cell';
        return cell;
    };

    row.appendChild(createCell(product.productName));
    row.appendChild(createCell(product.productPrice));
    row.appendChild(createCell(product.productDescription));
    row.appendChild(createCell(product.productQuantity));

    PRODUCT_TABLE_BODY.appendChild(row);
};

// Función para mostrar los productos guardados en localStorage
function showProducts () {
    const productsList = JSON.parse(localStorage.getItem('productsList'));

    if (!productsList || productsList.length === 0) {
        console.info('No hay datos en el localStorage.');
        return;
    }

    productsList.forEach(product => {
        appendProductToTable(product);
    });
};


// Programa principal
showProducts();
PRODUCT_BUTTON.addEventListener('click', createProduct);





