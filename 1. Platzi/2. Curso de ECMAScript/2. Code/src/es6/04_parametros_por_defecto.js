'use strict'

// 1. Destructuracion
function sum (x = 3, y = 5) {
    return x + y;
};

console.log(sum(5,15));
console.log(sum(7));
console.log(sum());

const fruits = ['Apple', 'Banana'];
// Destructurando
let [a,b] = fruits;
console.log(a,b);

// 2. Spread Operator
let person = { nameuser : 'oscar', age : 24 };
let country = 'MX';

// Quiero crear una variable data donde se van a reunir los dos elmentos anteriores
// ...person trae los elementos y los "esparse" dentro de data.
let data = { ...person, country };
console.log(data);

// Parametros rest. Es una logica
// Lo que hace es guardar todos los elementos ingresados despues del primer numero.
function suma ( num, ...values ) {
    console.log(values);
    console.log(num + values[0]);
    return num = values[0];
}

suma(1, 1, 2, 3);