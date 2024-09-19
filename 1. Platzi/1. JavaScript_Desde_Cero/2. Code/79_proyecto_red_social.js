'use strict';

// 1. El usuario debe poder ingresar su usuario y contrase;a.✅
// 2. El sistema debe ser capaz de validar si el usuario y contrase;a ingresados por el usuario existen en la base de datos.✅
// 3. Si el usuario y contrase son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario. ✅
// 4. Si el usuario y contrase;a son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

const usersDatabase = [
    {
        username: 'andres',
        password: '123'
    },
    {
        username: 'caro',
        password: '456'
    },
    {
        username: 'mariana',
        password: '789'
    },
];

const usersTimeLine = [
    {
        username: 'Estefany',
        timeline: 'Me encanta JavaScript'
    },
    {
        username: 'Oscar',
        timeline: 'Bebeloper es lo mejor!'
    },
    {
        username: 'Mariana',
        timeline: 'A mi me gusta mas el cafe que el te'
    },
    {
        username: 'Andres',
        timeline: 'Yo hoy no quiero trabajar'
    },
]

function validatingCredentials ( user, psswd, dataBase ) {
    for (let element of dataBase) { 
        if (element.username === user && element.password === psswd) {
            console.log('Ingreso exitoso.');
            return true;
        } 
    }
    return false;
}

function showTimeLine ( user, timeLine ) {
    console.log(`Bienvenid@ ${user.toUpperCase()}`);
    timeLine.forEach((element) => {
        console.log(`${element.username} \n ${element.timeline} \n`);
    })
}

function showTimeLine2 ( user, timeLines ) {
    const userTimeline = timeLines.find(element => element.username.toLowerCase() === user.toLowerCase());

    if (userTimeline) {
        console.log(`Bienvenid@ ${user.toUpperCase()}`);
        console.log(`${userTimeline.timeline}`);
    } else {
        console.log('No se encontro el timeline para este usuario.');
    }
}

// FUNCION PRINCIPAL
function login() {
    let userName = 'mariana'; //prompt('Ingrese su usuario:');
    let userPassword = '789'; //prompt('Ingrese la contraseña:');
    
    const isValidUser = validatingCredentials(userName, userPassword, usersDatabase);
    
    if (!isValidUser) {
        console.log('Usuario o contraseña incorrectos.');
    } else {
        showTimeLine(userName, usersTimeLine);
    }
}

login();
