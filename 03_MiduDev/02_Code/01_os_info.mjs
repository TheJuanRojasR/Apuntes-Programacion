'use strict'

// Modulos nativos de node.js

// 1. os: Este nos da informaciond del sistema operativo
// Si quremos cambiar de commonJS a ES modules le damos clic al require y oprimimos ctrl + . Este nos mostrara un mensaje para convertir todo a ES modules.
// Este es el ejemplo.
import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os';

console.log('Informacion del sistema operativo:');
console.log('----------------------------------');

console.log('Nombre del sistema operativo', platform()); // Muestra el nombre del os.
console.log('Version del sistema operativo', release()); // Muestra la version del os.
console.log('Arquitectura', arch());                     // Muestra la arquitectura del os.
console.log('CPUs', cpus());                             // Muestra cuantos procesadores tiene.
console.log('Memoria libre', freemem() / 1024 / 1024);   // Mustra el espacio libre de memoria.
console.log('Memoria total', totalmem() / 1024 / 1024);  // Muestra el total de memoria.
console.log('uptime', uptime() / 60 / 60);               // Nos muestra el tiempo quee ha estado encendido el computador. 