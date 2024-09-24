<sub> Fecha: 11 de mayo del 2024 </sub>
<sub> Clase 8/79 </sub>
## Resumen
### Tema :  TD paso por referencia
#### Conceptos básicos

- Definición: Cuando se refieren al paso por referencia, lo que hace es pasar como referencia la ubicación en memoria de la variable. Cualquier modificación realizada dentro de una función afectará a la variable original.
- Metáfora: Es como crear un acceso directo, así los cambios que hagas en el "nuevo" archivo van a modificar el original.
#### Garbage Collection (Recolector de basura)

- Definición: Mecanismo automático que libera memoria ocupada por variables que ya no se utilizan.
- Es como un limpiador automático que se encarga de deshacerse de las cosas que ya no necesitas en tu programa para mantenerlo funcionando de manera eficiente.

```JavaScript
let Clothes = {
    shirt : '👕',
    pants : '👖'
}
Clothes = null; // Al asignar null a la variable Clothes, el garbage collector se encarga de eliminar la variable Clothes y su contenido.
```

### (Opcional) Spread Operator

- Definición: Es un operador que se utiliza para descomponer o expandir elementos en lugares donde se esperan muchos elementos. De forma fácil de entender, lo que hace el operador es "esparcir" los elementos de un objeto o array en otro objeto o array.
- Cuando se utiliza:
	- Cuando quieras copiar sin modificar todos los elementos de un array o objeto en otro array o objeto.
	- Fusionar 2 o más arrays.
	- Pasar los elementos de un array como argumentos en una función.
- [Documentación oficial sobre Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

```JavaScript
// Copiar un array
const array1 = [1, 2, 3];
const array2 = [...array1]; // Copia todos los elementos de array1 en array2 sin afectar el array1.

// Fusionar dos arrays
const array3 = [4, 5, 6];
const array4 = [...array1, ...array3]; // Fusiona los elementos de array1 y array3 en un nuevo array array4

// Pasar elementos de un array como argumentos a una función
const suma = (a, b, c) => a + b + c;
const numeros = [1, 2, 3];
console.log(suma(...numeros)); // Llama a la función suma con los elementos de numeros como argumentos
```


