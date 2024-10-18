'use strict'

/* 
El usuario debe entrar un numero y su cuadrado. 
Si es correcto el script enviara un mensaje de acierto 
en caso contrario dira que se produjo un error.
*/

const number = 8;
const square = 64;

const validateSquare = (number * number) == square ? console.log('Acierto.') : console.log('Se produjo un error.');

