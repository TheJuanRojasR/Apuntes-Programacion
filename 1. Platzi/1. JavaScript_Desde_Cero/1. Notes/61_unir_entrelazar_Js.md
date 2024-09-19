<sub> Fecha: 12 de agosto del 2024 </sub>
<sub> Clase 63/79 </sub>
## Resumen

- Definición: Hay métodos que nos ayudan a unir arrays, objetos, strings, etc. En este ejemplo veremos 3 métodos para unir principalmente arrays. 
- concat(): Este método nos ayuda a unir 2 o mas arrays creando uno nuevo y no alterando a los arrays originales.
- spread Operator:  Este método "exparse" o "expande" los elementos de arrays, objetos o iterables. En Arrays se utiliza mucho copiando o combinando.

`nota: concat() y spread Operator crear copias superficiales de los elementos primitivos de un array. Esto quiere decir que son copias independientes y se pueden modificar sin alterarl el array principal. Pero si el array contiene objetos o arrays se van a copiar la referencia y esto si modificaria al original.`

- join(): Convierte todos los elementos de una array en una sola cadena de texto, separándolos por un separador que nosotros elijamos. 
### Estructuras y ejemplos

1. **Concat()**
```JavaScript
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// Unir solo 2 arrays
let combinedArray = array1.concat(array2);
// Unir mas de dos arrays.
let moreArrays = [].concat(arra1,arra2,array3...);

console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
console.log(array1); // Output: [1, 2, 3] (No se modifica)
console.log(array2); // Output: [4, 5, 6] (No se modifica)
```

2. **Spread Operator**
```JavaScript
// Creando una copia de un array.
let array1 = [1, 2, 3];
let copyArray = [...array1];

console.log(copyArray); // Output: [1, 2, 3]

// Conbinando arrays.
let array3 = [1, 2, 3];
let array4 = [4, 5, 6];

let combinedArray = [...array3, ...array4];

console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
```

3. **join()**
```JavaScript
let words = ["Hello", "world", "this", "is", "JavaScript"];

let sentence = words.join(" ");

console.log(sentence); // Output: "Hello world this is JavaScript"
```
### Recomendaciones

- **`concat()`**
    - **Ventajas:** Fácil de entender, inmutable.
    - **Desventajas:** Menos flexible, posible impacto en el rendimiento con arrays grandes.
    - **Usar cuando:** Necesitas combinar arrays sin modificar los originales.
- **`spread operator (...)`**
    - **Ventajas:** Versátil, legible.
    - **Desventajas:** Posible impacto en el rendimiento con arrays grandes, confusión en estructuras complejas.
    - **Usar cuando:** Necesitas combinar arrays, copiar arrays, o trabajar con objetos.
- **`join()`**
    - **Ventajas:** Transforma arrays en cadenas con un formato personalizado.
    - **Desventajas:** Uso limitado, pérdida de estructura de array.
    - **Usar cuando:** Necesitas convertir un array en un string para mostrar o almacenar.

verificacion y evaluacion metodos every y some

every sonsulta todos los elementos y da true si todos cumplen con la condicion. Da false si uno de todos los elementos no la cumple.
some igual que el anterior pero si solo un elemento cumple con la condicion es true. Si ninguno cumple la condicion en false.

Metodos de busqueda includes(),indexOf(),lastIndexof()

### Resumen de la clase

Se estudiaron los siguientes métodos

1. [`.includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) → Retorna `true` si el argumento es un elemento del array, de lo contrario, `false`.
2. [`.indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) → Retorna el índice de la primera aparición del argumento si este pertenece al array, de lo contrario retorna `-1`
3. [`.lastIndexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) → A diferencia de `.indexOf()`, retorna el índice de la última aparición del elemento, si pertenece al array

slice nos ayuda a crear copia de algunos elementos de un array.