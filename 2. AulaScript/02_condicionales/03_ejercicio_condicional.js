'use strict'

/* 
En este ejercicio deber pedir dos números enteros y devolver el cociente
de dividir el primero entre el segundo, pero si este es cero no debe hacer
la division, si no lanzar un mensaje de error.
*/

let dividendo = 2;  // parseInt(prompt(`Ingrese un número del dividendo.`))
let divisor = 0;     // parseInt(prompt(`Ingrese un número del divisor.`))

if ( divisor <= 0 ) {
    console.log(`Error. Ingrese nuevos valores.`);
} else {
    console.log(`El resultado es: ${dividendo} / ${divisor} = ${dividendo / divisor}`);
}


