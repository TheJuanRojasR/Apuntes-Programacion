'use strict'

/*
Ejercicio 6: Encapsulamiento y validación con múltiples clases
Crea una clase Order con las siguientes características:

    Propiedades protegidas _totalAmount (total del pedido) y _items (lista de artículos en el pedido).
    Métodos addItem(item, price) para agregar un artículo al pedido y removeItem(item) para quitarlo.
    Un getter para consultar el total del pedido.
    Un setter que impida que el total sea menor a 0.
*/

class Order {
    constructor() {
        this._totalAmount = 0;
        this._items = [];
    }

    get totalAmount() {
        return this._totalAmount;
    }

    set totalAmount (amount) {
        if (amount >= 0) {
            this._totalAmount = amount;
        } else {
            console.log('El total no puede ser menor a 0.');
        }
    }

    addItem(item, price) {
        if (!item || price < 0) {
            console.log('Item o precio no valido. Intente de nuevo.')
        }
        this._items.push({ item, price });
        this._totalAmount += price;
    }

    // Este metodo no lo supe hacer y me toco pedir ayuda a chatGPT
    removeItem(item) {
        
        // Esta buscando el indece en la lista _items del item que queremos borra.
        const index = this._items.findIndex(i => i.item === item);
        // Si no lo muestra el resultado sera -1, si lo encuentra sera el resultado del indice. 

        // Si encuentra el indice
        if (index !== -1) {
            // Lo resta del _totalAmount
            this._totalAmount -= this._items[index].price; 
            // Elimina un elemento pasandole su indice.
            this._items.splice(index, 1); 
        } else {
            console.log(`El artículo ${item} no se encuentra en el pedido.`);
        }
    }
}

// Ejemplo de uso:
const order = new Order();
order.addItem('Pizza', 15);
order.addItem('Refresco', 5);
console.log(order.totalAmount);

order.removeItem('Pizza');
console.log(order.totalAmount);

order.totalAmount = -10; // Intenta establecer un total negativo, se rechaza
console.log(order.totalAmount);