'use strict';

const path = require('node:path');

// Mala practica al crear una ruta `./content/subfolder/test.txt` ❌
// Malo porque las separaciones cambian dependiendo del OS

// Barra separadora de carpetas segun OS
console.log(path.sep); 

// (imporntate) Unir rutas con path.join ✅
const filePath = path.join('content', 'subfolde', 'test.text')
console.log(filePath); // content\subfolde\test.text

// (imporntate) basename da el nombre del fichero
const base = path.basename('/tmp/midu-secret-file/password.txt');
console.log(base); // password.txt

// (imporntate) Ahora traemos solo el nombre del fichero
const fileName = path.basename('/tmp/midu-secret-file/password.txt', '.txt');
console.log(fileName); // password

// (imporntate) extname nos trae la extension de un archivo 
const extension = path.extname('image.jpg');
console.log(extension);