'use strict'

/* 
Este ejercicio dirigirá a los clientes a la barra de bebidas o a la de comidas, 
para ello el cliente puede pedir vino, cerveza, refresco, agua. 
Si pide un cerveza o vino se le dirige a la barra y si no pues se le dirige a la tienda.
*/

let transportUser = prompt(`Escriba el producto que quiera consumir
    - Vino
    - Cerveza
    - Refresco
    - Agua`).toLocaleLowerCase().trim();

// Segun lo que escriba el cliente se evaluara con las siguientes condicionales.
if ( transportUser === 'vino' || transportUser === 'cerveza') {
    console.log('Por favor diríjase a la barra.')
} else if ( transportUser === 'refresco' || transportUser === 'agua' ) {
    console.log('Por favor diríjase a la tienda.')
} else {
    console.log(`No contamos con el producto '${transportUser}'.`);
}