'use strict'

// Crear una funcion para crear una lista de reproduccion.
// Agregar un nuevo elemento al principio de la lista de reproduccion con unshift.
// Eliminar el primer elemento de la lista de reproduccion con shift.
// Mostrar el estado actual de la lista de reproduccion despues de haberle agregado o eliminado un elemento.

// 1. Creacion de la playList vacia.

const playList = [];

// 2. Agregar una cancion a la playlist

function addSong ( nameSong ) {
    playList.unshift( nameSong );
    showPlayList();
}

// 3. Remover una cancion de la playlist

function removeSong () {
    if (playList.length > 0) {
        const removedSong = playList.shift();
        console.log(`Se retiró la cancion '${removedSong}' exitosamente.`);
    } else {
        console.log('Lista vacia.');
    }
    showPlayList();
}

// 4. Mostrar playlist actualizada

function showPlayList () {
    console.log('Playlist actualizada: ', playList);
}

// 5. Validar la opcion del usuario.

function getUserOption () {
    while (true) {
        const userOption = parseInt(prompt(`Elija alguna de las siguientes opciones.
            0. Salir del programa.
            1. Agregar una cancion a la PlayList
            2. Remover la ultima cancion agregada de la PlayList.`));
            
        if (isNaN(userOption)) {
            console.log('Entrada vacía o no valida, por favor ingrese una opcion valida.');
            continue;
        } else if ( userOption < 0 || userOption > 2) {
            console.log('Opcion no valida. Por favor ingrese un libro valido.');
            continue;
        } else {
            return userOption;
        }
    }
}

function startProgram () {
    while (true) {
        const  userOption = getUserOption();

        if (userOption === 1) {
            const songName = prompt(`Ingrese el nombre de la cancion.`);
            if (songName) {
                addSong(songName);
            } else {
                console.log('No se ingreso un nombre valido.');
            }
        } else if (userOption === 2) {
            removeSong();
        } else {
            break;
        }
    }
}

startProgram();
