// Convercion de tipo explicito
// 1. De string a integer con parseInt()
const string = '42';
const integer = parseInt( string );
console.log( integer );
console.log( typeof integer ); 

// 2. De string a float con parseFloat()
const stringDecimal = '3.14';
const float = parseFloat( stringDecimal );
console.log( float );
console.log( typeof float );

// 3. De binario a number con parseInt()
const binary = '1010';
const decimal = parseInt( binary,2 ); // Se coloca la variable y la base que es la variable. En este caso 2.
console.log( decimal );
console.log( typeof decimal );

// Convercion de tipo implicito (Lo hace el programa)
// Cuando inicia con un string lo que va hacer es concatenar
const sum = '5' + 3; // Nos va a concatenar porque toma el + como concatenar
console.log( sum );  // 53

const sumWhitBoolean = '3' + true;
console.log( sumWhitBoolean ); // 3true

// Cuando inicia con un number lo que va hacer es operar
const sumWhitNumber = 2 + true;
console.log( sumWhitNumber );
console.log( '___________' );

// Ejemplos para saber como funciona por dentro js
const stringValue = '10';
const numberValue =  10;
const booleanValue = true;

console.log( stringValue + stringValue );     // Concatena
console.log( stringValue + numberValue );     // Concatena
console.log( stringValue + booleanValue );    // Concatena
console.log( numberValue + stringValue );     // Concatena
console.log( numberValue + numberValue );     // Sumar
console.log( numberValue + booleanValue );    // Sumar
console.log( booleanValue + stringValue );    // Concatena
console.log( booleanValue + numberValue );    // Sumar
console.log( booleanValue + booleanValue );   // Sumar

// Viendo la tabla podemos ver que siempre que haya un string va concatenar.
// Si hay solo numeros y binarios va sumar.