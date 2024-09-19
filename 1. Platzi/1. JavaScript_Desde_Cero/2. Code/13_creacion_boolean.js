/*
Buena practica: el nombre de las variables booleanas siempre comenzar con is o has
para identificar que se esta como 'preguntando' y identificarlo de forma rapida.
*/
const isActive = true;
const hasPermisson = false;

// Conversion implicita (Lo hace directamente JS)
const result = 5 > 3;
console.log( result );  // true

const nameExample = 'Platzi';
// !! Doble negacion: Esto nos ayuda saber si la variable esta definida y tiene un valor.
console.log( !!nameExample ) // !! Doble negacion
console.log( !nameExample )  // ! negacion

// Conversion explicita (Direcatamente nosotros lo hacemos)
// Todo numero distinto a 0 nos dara true (asi sean negativos)
const value = 0;
const explicitBoolean = Boolean( value );
console.log( explicitBoolean );