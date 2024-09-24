"use strict";

// 1. Crear funcion para recibir un numero valido.

function numberValidation() {
    const number = parseInt(prompt("Ingrese un numero"));

    if (isNaN(number)) {
        alert("Por favor ingrese un numero valido");
        return numberValidation();
    }
    return number;
}

// 2. Crear funcion que va calcular los numeros suministrados.

function calculator(num1, num2, operation) {
    let result;
    let validateOperation = operation.toLocaleLowerCase();

    switch (validateOperation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                console.log("No se puede dividir un numero por 0.");
            }
            result = num1 / num2;
            break;
        case "modulo":
            if (num2 === 0) {
                console.log("No se puede obtener el módulo por cero.");
            }
            result = num1 % num2;
            break;
        default:
            console.log("La operacion ingresada no es valida");
    }
    return result;
}

// 3. Ejecutar la sentencia.

console.log(calculator(4, 2, "add")); // Debe devolver 6
console.log(calculator(4, 2, "subtract")); // Debe devolver 2
console.log(calculator(4, 2, "multiply")); // Debe devolver 8
console.log(calculator(4, 2, "divide")); // Debe devolver 2
console.log(calculator(4, 2, "modulo")); // Debe devolver "Operación no válida"
