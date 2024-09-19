'use strict'

// Esta es la forma clasica llamada commonJS (Antigua de importar un modulo).
// const sum = require('./sum.js');

// Y nos obliga a utilizar el nombre directamente de la funcion. Desestructurando el objeto
// CoomnJS require module
const { sum } = require('./sum.js');

console.log(sum(1,3));