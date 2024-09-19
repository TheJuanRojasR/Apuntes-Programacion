'use strict'

/* 
Este programa te ayuda a viajar. El programa pide al usuario si va a viajar con coche, 
tren, bicicleta o autobús. Si va en tren o autobus le recordará que lleve dinero para el billete.
*/

let transportUser = prompt(`Escriba el medio de trasnporte en que va viajar:
    - Coche
    - Tren
    - Bicicleta
    - Autobus`).toLocaleLowerCase().trim();

// Segun lo que escriba el cliente se evaluara con las siguientes condicionales.
if ( transportUser === 'tren' || transportUser === 'autobus') {
    console.log('Recuerda llevar dinero para el tiquete.')
} else if ( transportUser === 'bicicleta' || transportUser === 'coche' ) {
    console.log('Ten un buen viaje.')
} else {
    console.log(`No se cual es el medio de transporte '${[transportUser]}'`);
}