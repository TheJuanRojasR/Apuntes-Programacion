'use strict'
console.log('Hola mundo!!');

// Esta funcion repite de forma infinita lo que tiene dentro de ella.
let i = 0;

setInterval(() => {
    console.log(i);
    i++;

}, 1000);

console.log('Segunda instruccion.')