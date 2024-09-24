'use strict'

/*
Ejercicio 1: Control de acceso a una propiedad protegida
Crea una clase BankAccount con las siguientes características:

Una propiedad protegida llamada _balance (balance).
Un método público deposit(amount) que permita agregar fondos a la cuenta.
Un método público withdraw(amount) que permita retirar dinero de la cuenta solo si el balance es suficiente.
Un getter balance para obtener el balance actual de la cuenta sin modificarlo directamente.
*/

class BackAccount {
    constructor (balance) {
        this._balance = balance;
    }

    // Methods
    deposit (amount) {
        if (amount > 0) {
            this._balance += amount; 
        } else {
            console.log('Deposito no valdo.');
        }
    }

    withdraw (amount) {
        if (amount < this._balance) {
            this._balance -= amount;
        } else  {
            console.log('Retiro no valido.')
        }
    }

    get amount () {
        return this._balance;
    }
}

const testBackAccount = new BackAccount(1000);
console.log(testBackAccount.amount);
testBackAccount.deposit(500);
testBackAccount.deposit(-500);
console.log(testBackAccount.amount);
testBackAccount.withdraw(250);
testBackAccount.withdraw(2000);
console.log(testBackAccount.amount);

/*
2. Ejercicio 2: Uso de getters y setters con validación
Crea una clase Product con:

Una propiedad privada _price que almacene el precio del producto.
Un getter y un setter para la propiedad price. El setter debe asegurarse de que el precio nunca sea negativo.
Un getter y setter para la propiedad name, validando que el nombre no esté vacío.
*/

class Product {
    #name
    #privada_price
    constructor (name,price) {
        this.#name = name;
        this.#privada_price = price;
    }

    // Methods name 
    get name () {
        return this.#name;
    }

    set name (newName) {
        if (newName.length > 0) {
            this.#name = newName;
        } else {
            console.log(`Nombre no valido.`)
        }
    }

    // Methods price
    get price () {
        return this.#privada_price;
    }

    set price (newPrice) {
        if (newPrice >= 0) {
            this.#privada_price = newPrice;
        } else {
            console.log('Precio no valido.')
        }
    }
}

const testProduct = new Product('Pantalon', 2000);
console.log(testProduct.name);  
testProduct.name = 'Camisa';    
console.log(testProduct.name);  
testProduct.price = 3000;       
console.log(testProduct.price); 
