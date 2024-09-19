// Clase 6 - Tipos de datos en Js

// 1. Tipo de dato primitivo - Inmutable
let exampleNumber = 23;
exampleNumber = exampleNumber + 10;
console.log(exampleNumber);

let isTrue = true;
isTrue = false;
console.log(isTrue);

// 2. Tipo de dato complejo - Mutable
let user = { 
    name: 'Juan',
    age: 23
};
user.age = 24;
console.log(user);

let fruitList = ['Apple', 'Pear'];
fruitList[0] = 'Watermelon';
console.log(fruitList);

// Crear una funcion que cambie el nombre de un objeto
function changeName(objeto){
    objeto.name = 'New name';
}

let Person = { name: 'Antonio' };
changeName(Person);

console.log(Person);

/*
Traducción:
exampleNumber = ejemplo de numero.
exampleString = ejemplo de string.
isTrue        = es verdadero.
fruitList     = lista de frutas.
changeName    = cambiar nombre.
*/
