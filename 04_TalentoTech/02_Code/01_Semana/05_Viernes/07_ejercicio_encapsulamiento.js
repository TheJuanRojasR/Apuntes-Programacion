'use strict'

/*
Ejercicio 7: Gestión de un inventario con encapsulamiento
Crea una clase Inventory con:

    Una propiedad protegida _stock que almacene la cantidad de un producto.
    Métodos addStock(amount) para agregar más cantidad de producto y removeStock(amount) para quitar.
    Un getter stock que permita consultar la cantidad actual de stock.
    Valida que nunca puedas remover más stock del que tienes disponible.
*/

class Inventory {
    constructor() {
        this._stock = 0;
    }

    // La convencio es colocar el mismo nombre de la pripiedad a los get y set.
    get stock () {
        return this._stock;
    }

    addStock (amount) {
        if (typeof amount !== 'number' || amount < 0) {
            // Voy a comenzar a utilizar throw en logar de console.log
            console.log('El valor ingresado no es valido. Intente de nuevo.');
            return;
        }

        this._stock += amount;
    }

    removeStock (amount) {
        if (typeof amount !== 'number' || amount < 0) {
            console.log('El valor ingresado no es valido. Intente de nuevo.');
            return;
        }

        if (amount > this._stock) {
            console.log('No puede retirar mas del stock disponible.');
            return;
        }

        this._stock -= amount;
    }
}

const testInventory = new Inventory();
testInventory.addStock(100);
console.log(testInventory.stock);

testInventory.removeStock(-10);
testInventory.removeStock(200);
testInventory.removeStock(20);
console.log(testInventory.stock);