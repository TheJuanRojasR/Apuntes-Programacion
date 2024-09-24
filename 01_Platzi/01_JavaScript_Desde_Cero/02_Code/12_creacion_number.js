// Crear 3 tipos de numeros
// 1. Tipo entero y decimal
const integerNumber = 42;
const decimalNumber = 3.14;
console.log( typeof integerNumber, typeof decimalNumber );

// 2. Notacion cientifica
const cientifica = 5e3;

// 3. Infinitos y NaN
const infinity = Infinity;
const notANumber = NaN;

// Operaciones artimeticas
// 1. Suma, Resta, Multiplicacion, Division
const sum = 3 + 4;
const subtract = 3 - 4;
const multiplication = 3 * 4;
const division = 3 / 4;

// 2. Modulo y Exponenciacion
const remainder = 15 % 8;          // Residuo 
const exponentiation = 2 ** 3;

// Js tiene problema con la precision de numeros
const result = 0.1 + 0.2; 
console.log(result);               // result = 0.30000000000000004
console.log(result.toFixed(2));    // result = 0.30. 
// El metodo .toFixed lo que hace es formatear el numero y mostrarlo como un string
// con un numero especifico de decimales (lo elegimos nosotros)


// Operaciones Avanzadas
const squareRoot = Math.sqrt(16)
const valueAbsolute = Math.abs(-7); // Es la distancia que tiene un numero hasta cero en la recta numerica.
const randomValue = Math.random();  // Nos muestra un numero random entre 0 - 0.99

const string = '10ab';
console.log( typeof Number( string ) );
console.log( typeof parseInt( string ) );

