<sub> Fecha: 12 de agosto del 2024 </sub>
<sub> Clase 67/79 </sub>
## Resumen

- Definición: Un `array bidimencional` o `Matrices` es una estructura de datos que básicamente consiste en un array de arrays. Es como una tabla con filas y columnas y que podemos acceder a cada elemento dando el índice de la fila y el índice de la columna. 
### Estructura

```JavaScript
// Estrutura de un array bidimencional
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```

- Para poder acceder a un elemento se tiene que utilizar el numero de los dos índices. El primero va ser de la fila y el segundo de la columna. Ejemplo: `matrix[0][1]` donde [0] en la fila y [1] es la columna, este accedería al `2`.
### Cuando utilizar un Array

Usar un array cuando se necesita:
- Almacenar una lista de varios elementos ordenados.
- Acceder a los elementos por su índice.
- Recorrer o manipular listas de datos. 
### Métodos comunes de los Arrays

1. **push():** Agrega uno o mas elementos al final del array.
2. **pop():** Elimina el último elemento del array y lo devuelve (Lo muestra como un print).
3. **shift():** Elimina el primer elemento del array y lo devuelve. (Lo muestra como un print).
4. **unshift():** Agrega uno o más elementos al principio del array.
5. **reverse():** Invierte el orden de los elementos en el array.
6. **splice():** Modifica el contenido de un array eliminando, reemplazando o agregando elementos en una posición específica.
7. **sort():** Ordena los elementos de un array según una función de comparación opcional, o en orden lexicográfico si no se proporciona una función.
8. **fill():** Rellena todos los elementos de un array desde una posición inicial hasta una posición final con un valor estático.
9. **filter():** Crea un nuevo array con todos los elementos que pasen una prueba (una función que devuelve `true` o `false`).
10. **reduce():** Aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un solo valor.
11. **find():** Nos devuelve el primer elemento que cumpla una función con una condición.
12. **findIndex():** Nos devuelve el índice del primer elemento que cumpla una función con una condición.