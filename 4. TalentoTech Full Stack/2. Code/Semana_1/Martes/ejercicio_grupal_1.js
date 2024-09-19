'use strict'

// Clase para manejar los números
class Numero {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    // Método para determinar si los números son positivos o negativos
    determinarSigno() {
                        //  condicional    ?  ejecutar cuando es positivo : ejecutar cuando es negativa 
        const esPositivo1 = this.num1 >= 0 ? "positivo" : "negativo";
        const esPositivo2 = this.num2 >= 0 ? "positivo" : "negativo";

        console.log(`El primer número (${this.num1}) es ${esPositivo1}.`);
        console.log(`El primer número (${this.num2}) es ${esPositivo2}.`);

    }

    // Método para calcular la diferencia entre el mayor y el menor
    calcularDiferencia() {
        const mayor = Math.max(this.num1, this.num2);
        const menor = Math.min(this.num1, this.num2);
        const diferencia = mayor - menor;

        console.log(`La diferencia entre el mayor (${mayor}) y el menor (${menor}) es: ${diferencia}`);
    }
}

let number = new Numero(-20, -10);

number.determinarSigno();
number.calcularDiferencia();