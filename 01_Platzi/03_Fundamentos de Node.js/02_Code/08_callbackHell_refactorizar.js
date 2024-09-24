'use strict'

function hola ( nombre, miCallback ) {
    setTimeout(() => {
        console.log(`Hola!!! ${nombre}`);
        miCallback(nombre);
    }, 2000);
}

function adios ( nombre, otroCallback ) {
    setTimeout(() => {
        console.log(`Adios!!! ${nombre}`);
        otroCallback(nombre);
    }, 4000);
}

console.log('Iniciando proceso...');

hola('Juan', ( nombre ) => {
    adios(nombre, () => {
        console.log('Terminar proceso.')
    })
})