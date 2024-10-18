'use strict'

function welcomeMessage ( callback ) {
    setTimeout(() => {
        let name = 'Juan';
        callback(name);
    }, 2000)
}

function insertarNombre ( name ) {
    console.log(`Bienvenido ${name}!!!`)
}

welcomeMessage(insertarNombre);

function addNumber ( num1, num2, callback ) {
    let result = num1 + num2;
    setTimeout(() => {
        callback(result);
    }, 4000)
}

function showResult ( result ) {
    console.log(`El resultado es: ${result}`);
}

addNumber(1, 2, showResult);

function startTimer ( seconds, callback ) {
    setTimeout(() => {
        callback();
    }, (seconds * 1000))
}

function showTimeFinish () {
    console.log('El tiempo se acabo.');
}

startTimer(6, showTimeFinish);