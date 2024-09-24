'use strict'

/* 
En este ejemplo el usuario tecleará dos números. 
Debe devolver la diferencia entre el mayor y el menor
*/

let numberOneUser = 10;  // parseInt(prompt(`Ingrese un número del dividendo.`))
let numberTwoUser = 8;     // parseInt(prompt(`Ingrese un número del divisor.`))

if ( numberOneUser > numberTwoUser ) {
    let result = numberOneUser - numberTwoUser;
    console.log(`El resultado es: ${numberOneUser} - ${numberTwoUser} = ${result}`);
} else {
    let result = numberTwoUser - numberOneUser;
    console.log(`El resultado es: ${numberTwoUser} - ${numberOneUser} = ${result}`);
}


