'use strict'

/* 
Se trata de escribir un script que diga si un numero es par o impar.
Recordemos que un numero es par si al dividirlo por 2 da como resto 0.
*/

let numberUser =  11; // parseInt(prompt(`Ingrese un número: `))

if ( (numberUser % 2) === 0 ) {
    console.log(`El número ${numberUser} es par.`)
} else {
    console.log(`El número ${numberUser} es impar.`)
}