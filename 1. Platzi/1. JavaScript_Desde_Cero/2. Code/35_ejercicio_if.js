'use strict';

// Se hara un ejercicio de adivina el numero pero con funciones.

// 1. funcion que genere un numero aleatorio entre 1 y 100

function getRandomNumer () {
    return Math.floor(Math.random() * 10 + 1 ) ; 
}

// 2. funcion que pida un numero al usuario

function getUserNumber () {
    let userNumber = parseInt(prompt('Adivina el numero entre 1 y 10'));

    if ( isNaN(userNumber) || userNumber < 1 || userNumber > 10 ) {
        alert('Por favor ingrese un numero valido');
        // Vuelvo a llamar la funcion para que el usuario ingrese un numero valido
        return getUserNumber();
    }

    return userNumber;
}

// 3. Comparar el numero aleatorio con el numero del usuario

function compareNumbers ( userNumber, randomNumber ) {
    
    if ( userNumber === randomNumber ) {
        alert('Felicidades, adivinaste el numero');
    } else {
        alert(`Lo siento, el numero era ${randomNumber}`);
    }
}

// 4. Ejecutar las funciones

const randomNumber = getRandomNumer();
const userNumber = getUserNumber();
compareNumbers( userNumber, randomNumber );
