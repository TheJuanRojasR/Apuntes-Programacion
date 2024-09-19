class CuentaBancaria {
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
    }

    depositar(cantidad) {
        this.saldo += cantidad; // Usamos el operador += para sumar la cantidad al saldo
    }

    mostrarSaldo() {
        console.log(`El saldo actual es: ${this.saldo}`);
    }
}

// Crear una instancia de la clase CuentaBancaria
let miCuenta = new CuentaBancaria(1000);

// Mostrar el saldo inicial
miCuenta.mostrarSaldo(); // El saldo actual es: 1000

// Depositar 500
miCuenta.depositar(500);

// Mostrar el saldo después del depósito
miCuenta.mostrarSaldo(); // El saldo actual es: 1500
