'use strict';

/*
// Ejercicio 1: Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista desde el 0 al valor tecleado. Lo numeros se separan por comas.

// Opcion 1: Hice el ejercicio y funciona. Pero falta optimizarlo.
// Error 1: Llamada recursiva en la funcion validateNumber. Esto hace que se llame a si misma hasta que el usuario ingrese un numero valido pero conlleva a problema de rendimiento.
// Error 2: El ultimo numero se imprime con una coma al final.

function validateNumber () {
    let validatedNumber = parseInt( prompt( 'Ingrese un número.' ) );
    
    if ( isNaN( validatedNumber ) ) {
        alert( 'No es un número. Introduzca de nuevo un número' );
        return validateNumber();
    }
    return validatedNumber;
}

function printNumbersUpTo ( maxNumber ) {
    for ( let i = 0; i <= maxNumber; i++ ) {
        console.log( `${i}, ` );
    }
}

const userNumber = validateNumber();
printNumbersUpTo( userNumber );
*/

/*
// Opcion 2: Optimizando el codigo.
// Se elimina la llamada recursiva en la funcion validateNumber. Se reemplaza por un bucle while que se ejecuta hasta que el usuario ingrese un numero valido.
// Se crea un operador ternario en el console.log para que el ultimo numero no se imprima con una coma al final.

function validateNumber () {
    let validatedNumber;

    while ( true ) {
        validatedNumber = parseInt( prompt( 'Ingrese un número.' ) );

        if ( !isNaN( validatedNumber ) ) {
            break;
        }
        alert( 'No es un número. Introduzca de nuevo un número' );
    }
    return validatedNumber;
}

function printNumbersUpTo ( maxNumber ) {
    for ( let i = 0; i <= maxNumber; i++ ) {
        console.log( i === maxNumber ? `${i}` : `${i}, ` );
    }
}

const userNumber = validateNumber();
printNumbersUpTo( userNumber );
*/

// Ejercicio 2 : Se trata de que un numero entero el script muestreuna cuenta atras, es decir, una lista de numerso separados por comas desde el numero teclado hasta el 0.

// En este ejercicio coloque una variable para concatenar los numeros y luego imprimirlos todos juntos al final.

function validateNumber() {
    let validatedNumber;

    while (true) {
        validatedNumber = parseInt(prompt('Ingrese un número.'));
        if (!isNaN(validatedNumber)) {
            break;
        }
        alert('No es un número. Introduzca de nuevo un número');
    }
    return validatedNumber;
}

function printNumbersUpTo(maxNumber) {
    // Variable para concatenar los numeros.
    let numbers = '';
    for (let i = maxNumber; i >= 0; i--) {
        // Se concatena el numero y una coma si no es el ultimo numero.
        numbers += i + (i === 0 ? '' : ', ');
    }
    console.log(numbers);
}

const userNumber = validateNumber();
printNumbersUpTo(userNumber);



