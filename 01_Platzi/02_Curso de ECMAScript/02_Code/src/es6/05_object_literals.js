'use strict'

// Object literals - Representacion de la asginacion

// Pasamos de hacerlo des este modo
function newUser ( user, age, country ) {
    return {
        user: user,
        age : age,
        country: country
    }
}

// A este modo mas facil.
function newUser1 ( user, age, country ) {
    return {
        user,
        age,
        country
    }
}

// Este no lo entendi tanto entonces toca buscarlo. 