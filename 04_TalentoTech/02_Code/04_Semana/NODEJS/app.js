'use strict';

// Ejemplo con un concesonario de autos

const prompt = require('prompt-sync')();
const data = require('./data');
const autos = [];

// Obtener el catalogo de autos
let catalogo = data.arrayData();
// Mostrar el catalogo de autos
let cantidad = catalogo.length;

for (let i = 0; i < cantidad; i++) {
    for (let key in catalogo[i]) {
        // .hasOwnProperty() es un método que devuelve un booleano indicando si el objeto tiene la propiedad especificada
        if (catalogo[i].hasOwnProperty(key) && key === 'marca') { 
            autos.push(catalogo[i][key]);
        }
    }
}

console.log('Catalogo de autos: ');

for (let i = 0; i < autos.length; i++) {
    let msg = `${i}: ${autos[i]}`;
    console.log(msg);
}

let opcion = prompt('Ingrese el número del auto que desea comprar: ');
console.log(catalogo[opcion]);


