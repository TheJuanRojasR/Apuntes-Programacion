'use strict'

/*
// Utilidad especial para cuando el modulo no tiene la transformacion a promesas. 
// Solo utilizar en lo modulos nativos que no tienen promesas nativas

const fs = require('node:fs');
const { promisify } = require('node:util'); <-
const readFilePromise = promisify(fs.readFile);
*/

// node:fs/promises : nos ayuda a utilizar promesas en vez de callbacks
const fs = require('node:fs/promises');

console.log('Leyendo el primer archivo...');

fs.readFile('./archivo.txt', 'utf-8')
    // Utilizando promesas para ejercutar esto de forma asincrona.
    .then(data => {
        console.log('Pirmer texto: ', data);
    })

console.log('Haces cosas mientras lee el archivo...');

console.log('Leyendo el segundo archivo...');

fs.readFile('./archivo2.txt', 'utf-8')
    .then(data => {
    console.log('Pirmer texto: ', data);
    })

// Anterior mente node.js utilizaba solo callbacks y ahorita esta pasando algunos modulos con promesas
// Ver node.js para saber cuales modulos son los que aceptan