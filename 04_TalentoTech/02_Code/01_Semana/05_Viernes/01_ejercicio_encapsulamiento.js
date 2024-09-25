'use strict'

/*
Ejercicio 1: Control de acceso a una propiedad protegida
Crea una clase BankAccount con las siguientes características:

    Una propiedad protegida llamada _balance (balance).
    Un método público deposit(amount) que permita agregar fondos a la cuenta.
    Un método público withdraw(amount) que permita retirar dinero de la cuenta solo si el balance es suficiente.
    Un getter balance para obtener el balance actual de la cuenta sin modificarlo directamente.

    throw: crea una excepcion (error) y para el programaga. Al nosotros crear un nuevo objeto de la clase Error
    lo que hace es darnos mas detalles del error (mensaje, stack trace,) y es mas facil de manejar el error y poder depurar.
*/

class BankAccount {
    constructor (balance = 0) {
        if (balance < 0) {
            throw new Error('El balance inicial no puede ser negativo.'); 
        }
        this._balance = balance;
    }

    get balance () {
        return this._balance;
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
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
        } else  {
            console.log('Retiro no valido.')
        }
    }
}

const testBankAccount = new BankAccount(1000);
console.log(testBankAccount.balance);
testBankAccount.deposit(500);
testBankAccount.deposit(-500);
console.log(testBankAccount.balance);
testBankAccount.withdraw(250);
testBankAccount.withdraw(2000);
console.log(testBankAccount.balance);

