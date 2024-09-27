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
        this.items = [];
    }

    get totalAmount () {
        return this._totalAmount;
    }

    set () {

    }

    addItem (item, price) {
        if (!item) {

        }   
    }

    removeItem (item) {

    }
}