<sub> Fecha: 23 de julio del 2024 </sub>
<sub> Clase 39/79 </sub>
## Resumen

- Definición: `forEach` es un método de los arrays en Js que se utiliza para ejecutar una función especifica (`callback`) por cada elemento del array. Este método es mas legible y condensado. 
### Estructura

```JavaScript
// Estrutura de una bucle for
array.forEach(function(currentValue, index, array) {
  // código a ejecutar por cada elemento
});

// array: El el array sobre el que va a iterar.
// currentValue: El valor del elemento actual del array que se esta utilizando.
// index(opcional): Indice del elemento actual que se esta utilizando.
// array(opcional): Es el array actual sobre el cual estamos llando 'forEach'
```
### Ejemplos

1. **Utilizando índice**

```JavaScript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number, index) {
  console.log('Index: ' + index + ', Value: ' + number);
});
```

2. **Utilizando Función Flecha**

```JavaScript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index) => {
  console.log(`Index: ${index}, Value: ${number}`);
});
```
### Recomendaciones y consejos

1. Evitar utilizar forEach para modificar los elementos del array mientras se recorre. Esto es debido a que si se agrega o elimina los elementos de un array con el forEach puede causar problemas porque afecta el índice y la longitud del array durante la iteración. Si se necesita modificar el array mejor utilizar el método `map`. 
2. Intentar mantener la función del callback como una función pura.
3. El forEach no se puede interrumpir hasta que haya recorrido todos los elementos del array. Si se necesita salir temprano utilizar `for`,  `for...of`, `some` o `every`.
### Usos comunes 

1. **Modificación de objetos en array:** Es común utilizar forEach para modificar las propiedades de un objeto dentro de un array.

```JavaScript
const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 300 }
];

products.forEach(product => {
  product.price *= 1.1; // Multiplica el precio de todos los objetos
});

console.log(products);
```

2. **Repasar cada elemento de un array:** Podemos utilizarlo normalmente para mostrar cada elementos de un array. 

```JavaScript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number);
});
```

3. **Realizar operaciones de entradas/salidas para cada elemento de un array:** 

```JavaScript
const names = ['Alice', 'Bob', 'Charlie'];
const namesList = document.createElement( 'ul' );

names.forEach(name => {
  const listItem = document.createElement( 'li' );
  listItem.textContent = name;
  namesList.appendChild( listItem );
});

document.body.appendChild( namesList );
```
