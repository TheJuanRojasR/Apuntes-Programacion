'use strict'

/*
1. Has hecho una compra y sabes el precio del producto y su iva. Haz un script
que te calcule el precio total que vas a pagar por tu compra.

Re recuerdo que para calcular el total debes sumar el precio el 
resultado de multiplicar precio por el iva y dividir por 10.
*/

// Ejercicio 1
let price = 200;
let iva = 21;

function calculateTotal ( price, iva ) {
    return price + (iva*price/100)
}

let total = calculateTotal(price, iva);
console.log(`El total es: ${total}`);

/* 
2. En una variable tienes el lado de un cuadrado, debes escribir un programa 
que te calcule el área y el perímetro del cuadrado.

El area la calculas como lado multiplicado por lado. 
El perímetro es la suma de los cuatro lados.
*/

// Ejercicio 2
let side = 40;
let calculateAreaOfSquare = function ( side ) {
    return side * side;
}

function calculatePerimeterOfSquare ( side ) {
    const NUMBER_OF_SIDES = 4;
    return NUMBER_OF_SIDES * side;
}

let areaOfSquare = calculateAreaOfSquare(side);
console.log(`El area del cuadrado es: ${areaOfSquare}`);

let perimeterOfSquare = calculatePerimeterOfSquare(side);
console.log(`El perimetro del cuadrado es: ${perimeterOfSquare}`);

/* 
Un poco de interactividad. En este ejercicio debes escribir un programa que 
lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario.

Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre"
*/

// Ejercicio 3
let nameUser = prompt('Escriba su nombre.');
console.log(`Hola ${nameUser}`);

/*
En este ejercicio vas a pedir al usuario que teclee tres números enteros y el 
script mostrará como resultado el valor medio de los tres.

Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3.
*/

// Ejercicio 4
let numberOne = parseInt(prompt('Escriba el primer número, por favor.'));
let numberTwo = parseInt(prompt('Escriba el segundo número, por favor.'));
let numberThree = parseInt(prompt('Escriba el tercer número, por favor.'));
const DIVIDE_BY_THREE = 3;

let balance = (numberOne + numberTwo + numberThree) / DIVIDE_BY_THREE;
console.log(`El promedio de los números ingresados es: ${balance}`)

/*
Escribe un programa que solicite al usuario ingresar el número de kilómetros recorridos 
por su coche y el número de litros consumidos . El script debe mostrar el consumo de 
combustible por kilómetro.

Un problema matemático muy simple numero de litros dividido por número de kilómetros.
*/

// Ejercicio 5
let numberOfLts = parseInt(prompt('Escriba el número de litros consumidos por su coche.'));
let numberOfKms = parseInt(prompt('Escriba el número de kilómetros recorridos por su coche.'));

const consumoCoche = function ( lt,km ) {
    console.log(`La gasolina consumida por su coche es de ${lt/km} lt/km`);
}

consumoCoche(numberOfLts,numberOfKms);

/* 
Cambio de unidades. en este ejercicio debes convertir a segundos una medida de tiempo 
dada en horas y minutos.

Recuerda una hora son 60 minutos y cada minuto son 60 segundos.
NOTA: Estos ejercicios no los estoy haciendo con validacion, resticiones, funciones.
*/

// Ejercicio 6
let hours = 2; // parseInt(prompt('Ingrese el numero de horas que desea convertir.'));
let min = 30;  // parseInt(prompt('Ingrese el numero de minutos que desea convertir.'));
const SIXTEEN = 60; 

let result = ((hours * SIXTEEN) * SIXTEEN) + (min * SIXTEEN);
console.log(result);

/*
En este script debes pedir al usuario un número de dos dígitos y debes devolver 
el número de unidades y de decenas, o sea, cada dígito del número. Usa solo operationes 
aritméticas.

Recuerda si divides un número entre 10 el cociente entero es el número de decenas 
y el resto es el número de unidades
*/

// Ejercicio 7
let numberExample = 94;
let ten = parseInt(numberExample / 10);
let unit = numberExample % 10;

console.log(`Decenas: ${ten} y Unidades: ${unit}`);

/*
Una tortilla de patatas lleva 200 gramos de patatas por persona. 
Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla. 

Escribe un script que dado el número de comensales calcule las cantidades 
de ingredientes necesarias
*/

// Ejercicio 8
let diners = 5; // parseInt(prompt('Ingrese el numero de comensales.'));
const potatoesForOnePerson = 200; // 200g
const eggsForOnePerson = 1;       // Regla de 3. 1000g -> 5ud, 200g -> xud.
const onionsForOnePerson = 60;    // Regla de 3. 1000g -> 300g, 200g -> xg.

console.log(`Para ${diners} comensales se requiere:
    - Patatas: ${potatoesForOnePerson * diners}g,
    - Huevos: ${eggsForOnePerson * diners}ud,
    - Cebollas: ${onionsForOnePerson * diners}g.
    `)

/* 
Este ejercicio es todo un clásico si lo haces a la primera y sin tardar mucho,
puedes estar seguro: entiendes las variables.

Tienes que escribir un programa que intercambie el valor de dos variables.
Al final la primera variable debe terner el valor de la segunda y 
la segunda el valor de la primera. No vale usar arrays ni asignación múltiple
*/

// Ejercicio 9
let variableOne = 2;
let variableTwo = 20;
let variableThree = variableOne;

variableOne = variableTwo;
variableTwo = variableThree;

console.log(`Variable1: ${variableOne}`);
console.log(`Variable2: ${variableTwo}`);

/*
Pues seguimos con los números. Escribe un script  que dado un número 
nos devuelva true si es un número par y false si es un número impar. 
No usar condiconales.
*/

// Ejercicio 10

// Entrada: Numero ingresado por el usuario.
let numberUser = 30;  // parseInt(prompt(`Ingrese un número: `))
let residuo = numberUser % 2;
let result1 = residuo == 0;

console.log(`El número ingresado es: ${result1}`);
// Salida: Booleano. true = par, false = impar.