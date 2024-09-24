'use strict'

/* 
Este script pide al usuario que teclee una letra entre A, B, C, D. 
Si pulsa la letra A en mayúsucla o en minúscula le dará el mensaje de que ha acertado, 
en caso contrario le dirá que se equivocó.
*/

let letterUser = 'e'; // prompt(`Ingrese una letra entre: A, B, C, D.`).toLocaleLowerCase()

if ( letterUser  === 'a' ) {
    console.log(`Acertaste!!!`);
} else if ( letterUser === 'b' || letterUser === 'c' || letterUser === 'd' ) {
    console.log(`No acertaste :c`);
} else {
    console.log(`Error. Intenta de nuevo.`)
}