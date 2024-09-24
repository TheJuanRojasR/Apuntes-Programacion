'use strict'

const fs = require('node:fs');

/* 
// 1. Ejemplo: Explicando como leer un archivo
// Trae los datos pero en informacion que no podemos leer, el segundo parametro es para hacer la conversion y si entendamos.
const text = fs.readFileSync('./archivo.txt', 'utf-8');

console.log(text);
// <Buffer 48 6f 6c 61 20 6d 75 6e 64 6f> -> mensaje sin 'utf-8'.
// Hola mundo -> mensaje con 'utf-8'
*/

/*
// 2. Ejemplo: Sincrono.
console.log('Leyendo el primer archivo...');
const text = fs.readFileSync('./archivo.txt', 'utf-8'); // readFileSync = funcion sincrona

console.log(text);

console.log('Leyendo el segundo archivo...');
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8');

console.log(secondText);
*/

// 3. Ejemplo. Asincrono. Vamos a utilizar callbacks
console.log('Leyendo el primer archivo...');
// readFile recibe un callback para saber si existe un error o no. 
// El archivo dice algo como "Lee el archivo, codificalo a utf-8, callback: Si hay un error muestralo (err). Si no hay errores entonces muestrame la informacion (data)"
fs.readFile('./archivo.txt', 'utf-8', ( err, data ) => {
    console.log('Primer archivo: ', data);
}); 

console.log('Haces cosas mientras lee el archivo...');

console.log('Leyendo el segundo archivo...');
fs.readFile('./archivo2.txt', 'utf-8', ( err, data ) => {
    console.log('Segundo archivo: ',data);
}); 
