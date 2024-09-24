'use strict'

/* 
El usuario debe introducir dos valores númericos por teclado y 
la aplicacíon deberá indica cual es el mayor, el primero o el segundo.
La idea es usar el condicional ternario.
*/

let numberOne = 200;
let numberTwo = 12001;

let largerNumber = numberOne > numberTwo ? numberOne : numberTwo;
let smallerNumber = numberOne < numberTwo ? numberOne : numberTwo;

console.log(`El numero mayor es: ${largerNumber}`);
console.log(`El numero menor es: ${smallerNumber}`);