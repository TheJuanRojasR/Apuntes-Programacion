<sub> Fecha: 16 de julio del 2024 </sub>
<sub> Clase 33/79 </sub>
## Resumen

- Definición: Los operadores lógicos se utilizan para determinar la lógica entre variables o valores. Estos operadores siempre devuelven un valor booleano, es decir, `true` (verdadero) o `false` (falso).
### Tipos de datos de comparación

- &&  (AND): Devuelve true si ambas operaciones son verdaderas.
- ||      (OR): Devuelve true si una operación es verdadera.
- !       (NOT): Devuelve true si la operación a evaluar es false y false si la operación a evaluar es true.
### Ejercicios

```JavaScript
'use strict'

const a = 10;
const b = 20;
const c = '10';

console.log( a == b && a === c )
console.log( a!= b || a === c )
console.log( !( a === c ) )

```
