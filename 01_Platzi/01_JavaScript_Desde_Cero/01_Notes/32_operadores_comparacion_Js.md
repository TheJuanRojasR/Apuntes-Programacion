<sub> Fecha: 16 de julio del 2024 </sub>
<sub> Clase 32/79 </sub>
## Resumen

- Definición: Son símbolos especiales que nos ayudan a realizar operaciones de comparación entre dos valores y nos devuelven como resultado verdadero o falso (True or false).
### Tipos de datos de comparación

- ==    (Igualdad): Evalúa si los valores son iguales.
- === (Igualdad estricta): Evalúa si los valores y los tipos de los valores. 
- !=     (Desigualdad): Evalúa si los valores no son iguales.
- !==   (Desigualdad estricta): Evalúa si los valores o los tipos de datos no son iguales.  
- >      (Mayor): Evalúa si el primer valor es mayor al segundo valor.
- <      (Menor): Evalúa si el primer valor es menos al segundo valor. 
- >=   (Mayor o igual): Evalúa si el primer valor es mayor o igual al segundo valor.
- <=   (Menor o igual): Evaluar si el primer valor es menor o igual al segundo valor. 
### Ejercicios

```JavaScript
'use strict'

const a = 10;
const b = 20;
const c = '10';
const d = '10';

console.log( a == b )
console.log( a === c ) // Validacion valor y tipo de valor
console.log( a != b )
console.log( a !== c )
console.log( a > b )
console.log( a >= b )
console.log( c !== d )
```
