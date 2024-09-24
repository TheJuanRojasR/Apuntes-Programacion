<sub> Fecha: 24 de julio del 2024 </sub>
<sub> Clase 40/79 </sub>
## Resumen

- Definición: El bucle `for...of` es una estructura de control que permite recorrer objetos iterables (como arrays, cadenas, mapas, conjuntos, etc.). No funciona con objetos que no sean iterables. 
### Estructura

```JavaScript
// Estrutura de una bucle for...of
for (let element of iterable) {
  // código a ejecutar para cada elemento
}

// let element: Variable que guarda el valor del elmento actual en cada iteracion.
// iterable: Objeto sobre el cual vamos a iterar.
```
### Ejemplos

1. **Iterando sobre un array**

```JavaScript
const array = [1, 2, 3, 4, 5];

for (const element of array) {
  console.log(element);
}
```

2. **Iterando sobre un set**

```JavaScript
const set = new Set([1, 2, 3, 4, 5]);

for (const value of set) {
  console.log(value);
}
```
### Recomendaciones y consejos

1. Utilizar `for...of` cuando se necesite el valor de un elemento pero no su índice.
2. Nos ayuda a iterar mucho sobre estructurar de datos no tradiciones como map. set y otros iterables personalizados. 
3. Si se necesita saber el índice del elemento es mejor utilizar `forEach` o `for`. Pero si quieres utilizar el `for...of` entonces se tendría que colocar un contador global para saber el numero del índice.
4. Como es un bucle soporta las palabras reservadas `break` y `continue`. Estos nos ayudaran a salir del bucle antes de completar todas las iteraciones.

### Importante sobre Objetos

#### Diferencia de Notación de puntos (`.`) vs Notación de corchetes (`[]`)

1. **Notación de Puntos (`.`)**:
	- Se utiliza cuando conoces el nombre de la propiedad de antemano.
	- La propiedad se debe expresar como un identificador válido (sin espacios, no puede empezar con un número, etc.).
2. **Notación de Corchetes (`[]`)**:
	- Permite usar variables y cadenas como nombres de propiedades.
	- Se utiliza cuando el nombre de la propiedad es dinámico o no es un identificador válido. Ejemplo se utiliza cuando la la propiedad que queremos agregar en el objeto es una iterable. 