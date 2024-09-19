<sub> Fecha: 04 de julio del 2024 </sub>
<sub> Clase 23/79 </sub>
## Resumen
### Enlace Explicito

- El **enlace explícito** de `this` se refiere a cuando utilizamos métodos como `call`, `apply` o `bind` para establecer manualmente el valor de `this` en una función. Esto es útil cuando tenemos una función y un objeto separados, y queremos que la función se ejecute en el contexto de ese objeto.
#### Método .call 

- Definición: Es un método que se utiliza para invocar (llamar) a otra función con un valor específico para this (contexto) y con argumentos proporcionados de forma individual.
- Estructura
```JavaScript
funcion.call(thisArg, arg1, arg2, ...);

// funtion: funcion que se va invocar(llamar).
// thisArg: El valor que se asignara como this cuando se llame la funcion.
// arg1, arg2, ... : Argumentos que necesita la funcion para funcionar.
```
- Ejemplo
```JavaScript
function displayInfo () {
    console.log(`My name is ${this.name}. I'm ${this.age} years old.`)
}
let Person = {
    name: 'Juan',
    age: 25
}
displayInfo.call(Person);
```
#### Método .apply

- Definición: Es un método que se utiliza para invocar (llamar) a otra función con un valor específico para this (contexto) y con un array de argumentos (Todos los argumentos que requiera la función van a ir en el array).
- Estructura
```JavaScript
funcion.call(thisArg, [arg1, arg2]);

// funtion: funcion que se va invocar(llamar).
// thisArg: El valor que se asignara como this cuando se llame la funcion.
// [arg1, arg2]: Argumentos en un array que necesita la funcion para ser ejecutada.
```
- Ejemplo
```JavaScript
function displayInfo ( country ) {
    console.log(`My name is ${ this.name }. I'm ${ this.age } years old. I'm from ${ country }`)
}
let Person = {
    name: 'Juan',
    age: 25
}
displayInfo.apply(Person,[ 'Colombia' ]);
```
#### Método .bind

- Definición:  bind() crea una nueva función, que cuando es llamada, asigna a su operador this el valor entregado, con una secuencia de argumentos dados precediendo a cualquiera entregados cuando la función es llamada.
- Estructura
```JavaScript
funcionOriginal.bind(thisArg[, arg1[, arg2[, ...]]]); 

// funcionOriginal: La función original que se va a llamar. 
// thisArg: El valor que se asignará como this cuando la nueva función sea llamada. 
// arg1, arg2, ...: Argumentos opcionales que se predefinirán para la nueva función.
```
- Ejemplo
```JavaScript
function greet () {
    console.log(`Hello! ${ this.name }`);
}
let User = {
    name: 'Maria'
}
const userGreet = greet.bind(User);
userGreet()
```

