// Clase 7 - Pasos por valor 

// Paso por valor
let exampleNumber = 1;
let exampleString = 'Hello';
let exampleNull = null;

let exampleNumber2 = exampleNumber;
let exampleString2 = exampleString;
let exampleNull2 = exampleNull;
console.log(exampleNumber,exampleString,exampleNull,exampleNumber2,exampleString2,exampleNull2);

exampleNumber2 = 12;
exampleString2 = 'Platzi';
exampleNull2 = undefined;
console.log(exampleNumber,exampleString,exampleNull,exampleNumber2,exampleString2,exampleNull2);

// Paso por referencia
// Ejemplo 1 - Array
let breadList = ['White bread'];
let copyBreadList = breadList;
copyBreadList.push('Baguette');
console.log(breadList,copyBreadList); // Vemos como se modifican mi array original.

// Ejemplo 2 - Object
let Fruts = {
    orange : '🍊',
}
let Vegetables = Fruts;
Vegetables.orange = '🥕';
console.log(Fruts); // Vemos como se modifican mi objeto original por modificar el objeto copia.

// Ejemplo 3 - Object y garbarge collector
let Clothes = {
    shirt : '👕',
    pants : '👖'
}
Clothes = null; // Al asignar null a la variable Clothes, el garbage collector se encarga de eliminar la variable Clothes y su contenido.

/*
Traducción:
exampleNull   = ejemplo de nulo.
breadList     = lista de pan.
copyBreadList = copia de lista de pan.
Fruts         = frutas.
Vegetables    = verduras.
Clothes       = ropa.
*/
