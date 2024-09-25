'use strict'

/*
Ejercicio 2: Uso de getters y setters con validación
Crea una clase Product con:

    Una propiedad privada _price que almacene el precio del producto.
    Un getter y un setter para la propiedad price. El setter debe asegurarse de que el precio nunca sea negativo.
    Un getter y setter para la propiedad name, validando que el nombre no esté vacío.

En este ejercicio se tuvo un error (Maximum call stack size exceeded) porque se creaba un bucle infinito 
en el get y set por el this.name. Para solucionarlo toco volver la propiedad privada.

!name || name.trim().length === 0 - Si name no existe o name.trim() le quita los espacios .length === 0 entonces genera un error.
newName && newName.trim().length > 0 - Si newName existe y newName.trim().length > 0 entonces si se puede cambiar el nombre.
*/

class Product {
    #name
    #price
    constructor (name, price = 0) {

        if (price < 0) {
            throw new Error('El precio inicial no puede ser negativo');
        }

        if (!name || name.trim().length === 0) { 
            throw new Error('Escribir el nombre del producto nuevamente.');
        }

        this.#name = name;
        this.#price = price;
    }

    // Methods name 
    get name () {
        return this.#name;
    }

    set name (newName) {
        if (newName && newName.trim().length > 0) {
            this.#name = newName;
        } else {
            console.log(`Nombre no valido.`)
        }
    }

    // Methods price
    get price () {
        return this.#price;
    }

    set price (newPrice) {
        if (newPrice >= 0) {
            this.#price = newPrice;
        } else {
            console.log('Precio no valido.')
        }
    }
}

// Test cases
const testProduct = new Product('Pantalón', 2000);
console.log(testProduct.name);
testProduct.name = 'Camisa';
console.log(testProduct.name);
testProduct.price = 3000;
console.log(testProduct.price);

// Casos de prueba no validos
testProduct.name = '';
testProduct.price = -500;