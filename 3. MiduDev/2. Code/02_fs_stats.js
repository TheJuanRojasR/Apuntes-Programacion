'use strict'

// fs = file system
// Importante: Siempre utilizar el prefijo de los modulos nativos. EJ: ('node:fs') recomendado desde node 16.
const fs = require('node:fs');

// Trae informacion de un archivo.
// 1. Ejemplo sincrono
const stats = fs.statSync('./archivo.txt');

console.log(
    stats.isFile(), // Si es un fichero
    stats.isDirectory(), // Si es un directorio
    stats.isSymbolicLink(), // Si es un enlace simbolico
    stats.size // Tama;o en bytes
);

