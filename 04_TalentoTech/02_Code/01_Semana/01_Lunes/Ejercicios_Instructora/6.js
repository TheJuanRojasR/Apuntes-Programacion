// Definición de una clase CuentaBancaria
class CuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular; // Nombre del titular
        this.saldo = saldo;     // Saldo inicial de la cuenta
    }

    // Método para depositar dinero
    depositar(cantidad) {
        this.saldo += cantidad; // Usamos el operador += para incrementar el saldo
        console.log(`Se han depositado $${cantidad}. Saldo actual: $${this.saldo}`);
    }

    // Método para retirar dinero
    retirar(cantidad) {
        if (this.saldo >= cantidad) {
            this.saldo -= cantidad; // Se retira el dinero
            console.log(`Se han retirado $${cantidad}. Saldo actual: $${this.saldo}`);
        } else {
            console.log('Saldo insuficiente para realizar la operación.');
        }
    }

    // Método para cobrar comisión
    cobrarComision() {
        this.saldo--; // Usamos el operador -- para restar 1 al saldo
        console.log(`Se ha cobrado una comisión de $1. Saldo actual: $${this.saldo}`);
    }
}

// Crear una instancia de la clase CuentaBancaria
const cuenta = new CuentaBancaria('Mónica', 100);

// Llamamos a los métodos de la cuenta
cuenta.depositar(50);   // Incrementa el saldo en 50
cuenta.retirar(30);     // Resta 30 del saldo
cuenta.cobrarComision(); // Resta 1 del saldo
