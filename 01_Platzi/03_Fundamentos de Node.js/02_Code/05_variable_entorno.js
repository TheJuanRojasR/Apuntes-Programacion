'use strict'

// Las variables de entorno son una forma de guardar informacion fuera de nuestro
// Software. Estan sirven para definir parametros sencillos de configuracion del programa.

// Buenas practicas: Todas las variables de entorno se ponen en mayucula y 
// Separados por _ esto se remonta al uso de linux en el pasado. 

// Acceder a las variables de entorno(environment variables)
let nombre = process.env.NOMBRE || 'Sin nombre.';
let web = process.env.WEB || 'Sin web.';

console.log(`Hola ${nombre}`);
console.log(`Mi web es ${web}`)
console.log('Hola Juan')


