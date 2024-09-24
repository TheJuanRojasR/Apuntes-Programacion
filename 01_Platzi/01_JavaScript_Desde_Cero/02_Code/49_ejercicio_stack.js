'use strict';

// Ejercicio crear una stack.
// Anadir un libro nuevo en la parte de arriba de la fila.
// Sacar un libro de la parte de arriba de la fila.
// Mostrar el estado actual de la fila.
// Crear un loop para que los usuarios puedan anadir, sacar y salir del programa.

// 1. Crear una pila vacia.
const stack = [];

// 2. Anadir un libro en la parte superior del stack.

function addBook ( book ) {
    stack.push( book );
    console.log(`El libro agregado fue '${book}'.`);
    showStack();
}

// 3. Remover el libro de la parte superior del stack.

function removeBook () {
    if (stack.length > 0) {
        const removedBook = stack.pop();
        console.log(`Se retiró el libro '${removedBook}' exitosamente.`);
    } else {
        console.log('No hay libros que sacar.');
    }
    showStack();
}

function showStack () {
    console.log(`Pila actualizada: `, stack);
}

// 5. Introducción
function intro() {
    console.log('Buenos días.');
    console.log('Bienvenid@ a la biblioteca Platzi.');
}

// 6. Validar la opcion que ingreso el usuario.
function getUserOption () {
    while (true) {
        const userOption = parseInt(prompt(`Elija alguna de las siguientes opciones.
            1. Salir del programa.
            2. Agregar nuevo libro a la biblioteca.
            3. Sacar el ultimo libro ingresado en la biblioteca.`));
            
        if (isNaN(userOption)) {
            console.log('Entrada vacía o no valida, por favor ingrese una opcion valida.');
            continue;
        } else if ( userOption < 1 || userOption > 3) {
            console.log('Opcion no valida. Por favor ingrese un libro valido.');
            continue;
        } else {
            return userOption;
        }
    }
}

function startProgram () {
    intro()
    while (true) {
        const  userOption = getUserOption();

        if (userOption === 2) {
            const bookName = prompt(`Ingrese el nombre del libro.`);
            if (bookName) {
                addBook(bookName);
            } else {
                console.log('No se ingreso un nombre valido.');
            }
        } else if (userOption === 3) {
            removeBook();
        } else {
            console.log('Gracias por usar la biblioteca Platzi.');
            break;
        }
    }
}

startProgram();



