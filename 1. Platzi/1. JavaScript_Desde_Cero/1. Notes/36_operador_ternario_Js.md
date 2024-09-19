<sub> Fecha: 22 de julio del 2024 </sub>
<sub> Clase 36/79 </sub>
## Resumen

- Definición: El operador ternario es una forma más corta y concisa de escribir condicionales `if-else`. Se llama "ternario" porque involucra tres operandos: una condición, un resultado para `true` y un resultado para `false`.
### Estructura

```JavaScript
// Estrutura de un operador ternario
condición ? expresiónSiVerdadero : expresiónSiFalso
```
### Ejemplo 

```JavaScript
// Ejemplo con if

let message;
const age = 20;

if ( age >= 18 ) {
	mensaje = 'Es mayor de edad, puede pasar.';
} else {
	mensaje = 'No es mayor de edad, no puede pasar';
}

console.log( message );

// Ejemplo operador ternario
// Esctructura => condicion ? true : false

const userAge = 20;
const userMessage = userAge >= 18 ? 'Es mayor de edad, puede pasar.' : 'No es mayor de edad, no puede pasar';

console.log( userMessage );
```
### Consejos de cuando utilizarla

- La condición ternario no va a sustituir a if. Cuando son cosas sencillas y validaciones sencillas la podemos utilizar. Cuando es mas complejo y necesita de mas condiciones entonces utilizaremos if, else if o else.