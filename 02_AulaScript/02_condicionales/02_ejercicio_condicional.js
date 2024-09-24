'use strict'

/* 
Un programa que pida un número y diga si es positivo o negativo.
el cero se considera positivo
*/

let numberUser =  0; // parseInt(prompt(`Ingrese un número: `))

if ( numberUser >= 0 ) {
    console.log(`El número ${numberUser} es positivo.`)
} else {
    console.log(`El número ${numberUser} es negativo.`)
}