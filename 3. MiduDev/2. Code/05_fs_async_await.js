"use strict"

/*
// No funciona porque dice que el await solo es valido en funciones asincronas.
// Se tienen 2 opciones: 1. Cambiar a ES6 Modules. 2. Funcion autoinvocada.
const fs = require('node:fs/promises');

console.log('Leyendo el primer archivo...');

const text = await fs.readFile('./archivo.txt', 'utf-8')
console.log('Primer texto:', text);

console.log('Haces cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')

const secondText = await fs.readFile('./archivo2.txt', 'utf-8')
console.log('Segundo texto:', secondText);
*/

const { readFile } = require('node:fs/promises');

// IIFE - Inmediatly Invoked Function Expression
// Una funcion que se envuelve entre parentesis y se esta invocando justo cuando se esta creando.
(
    async () => {
        console.log('Leyendo el primer archivo...');

        const text = await readFile('./archivo.txt', 'utf-8')
        console.log('Primer texto:', text);

        console.log('Haces cosas mientras lee el archivo...')

        console.log('Leyendo el segundo archivo...')

        const secondText = await readFile('./archivo2.txt', 'utf-8')
        console.log('Segundo texto:', secondText);
})()

/*
// Explicando la IIFE
// Es como si hicieramos el siguiente codigo.
// Esto es asincrono secuencial
async function init () {
    console.log('Leyendo el primer archivo...');

        const text = await readFile('./archivo.txt', 'utf-8')
        console.log('Primer texto:', text);

        console.log('Haces cosas mientras lee el archivo...')

        console.log('Leyendo el segundo archivo...')

        const secondText = await readFile('./archivo2.txt', 'utf-8')
        console.log('Segundo texto:', secondText);
}
init()
*/