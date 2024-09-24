'use strict'

// Modulos nativos de node.js

// 1. os: Este nos da informaciond del sistema operativo
const os = require('node:os');

console.log('Informacion del sistema operativo:');
console.log('----------------------------------');

console.log('Nombre del sistema operativo', os.platform()); // Muestra el nombre del os.
console.log('Version del sistema operativo', os.release()); // Muestra la version del os.
console.log('Arquitectura', os.arch());                     // Muestra la arquitectura del os.
console.log('CPUs', os.cpus());                             // Muestra cuantos procesadores tiene.
console.log('Memoria libre', os.freemem() / 1024 / 1024);   // Mustra el espacio libre de memoria.
console.log('Memoria total', os.totalmem() / 1024 / 1024);  // Muestra el total de memoria.
console.log('uptime', os.uptime() / 60 / 60);               // Nos muestra el tiempo quee ha estado encendido el computador. 