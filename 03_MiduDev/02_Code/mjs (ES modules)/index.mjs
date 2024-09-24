'use strict'

// Sistemas de modulos ES Modules
// Para importar un modulo lo unico que tenemos que hacer es:
// import { modulos a importar } from 'archivo donde estan';
// Es muy importante al colocar el nombre de la extension EJ: sum.mjs
import { sum, sub, mult } from './sum.mjs'; 

console.log(sum(1,3));
console.log(sub(1,3));
console.log(mult(1,3));