'use strict'

/* 
En un tramo de un rally los conductores no deben ir ni demasiado rápido ni demasiado lentos. 
Este ejercicio debe tomar la longitud del tramo en kilometros y el tiempo empleado, 
si la velocidad está entre 40 y 60 km/h el conductor pasa la prueba en caso contrario es descalificado.
*/

let distanceInKm  = 120;  //parseInt(prompt(`Ingrese un número del dividendo.`))
let timeInHours  = 2;   //parseInt(prompt(`Ingrese un número del dividendo.`))

let speed = (distanceInKm  / timeInHours ).toFixed(1);

if ( speed >= 40 && speed <= 60) {
    console.log(`Felicitaciones!!. Usted clasifico con una velocidad de ${speed} km/h`)
} else {
    console.log(`Usted esta descalificado. Su velocidad fue de ${speed} km/h`)
}