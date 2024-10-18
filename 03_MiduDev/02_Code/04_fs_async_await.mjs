'use strict'

// Vamos a utilizar el modo ES6 Modules
// Los ES6 Modules soporta el await en el cuerpo del archivo. Esto se llama TOP LEVEL AWAIT.
import { readFile } from 'node:fs/promises';

console.log('Leyendo el primer archivo...');

const text = await readFile('./archivo.txt', 'utf-8')
console.log('Primer texto:', text);

console.log('Haces cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')

const secondText = await readFile('./archivo2.txt', 'utf-8')
console.log('Segundo texto:', secondText);
