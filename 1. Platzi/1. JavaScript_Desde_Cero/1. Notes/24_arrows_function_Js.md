<sub> Fecha: 08 de julio del 2024 </sub>
<sub> Clase 24/79 </sub>
## Resumen

- Definición: es una alternativa compacta a una `expresión de función` tradicional, pero es limitada y no se puede utilizar en todas las situaciones.
- **Diferencias y limitaciones:**
	- No tiene sus propios enlaces a `this` o `super` y no se debe usar como [métodos](https://developer.mozilla.org/es/docs/Glossary/Method).
	- No tiene `argumentos` o palabras clave `new.target`.
	- No apta para los métodos `call`, `apply` y `bind`, que generalmente se basan en establecer un [ámbito o alcance](https://developer.mozilla.org/es/docs/Glossary/Scope)
	- No se puede utilizar como [constructor](https://developer.mozilla.org/es/docs/Glossary/Constructor).
### Estructura de una arrow function 

```JavaScript 
// Estructura de una expresion de funcion
const gretting = function ( name ) {
  return `Hi, ${name}`
}

// Estructura de una arrow fuction tomando el ejemplo anterior
const newGretting = ( name ) => {
  return `Hi, ${name}`
}

// Estructura de una arrow function cuando solo tiene un parametro
const newGreetingImplicit = name => `Hi, ${name}`
// - Se le pueden quitar los parentecis en el parametro
// - No es necesario colocarle el return porque en una arrow funtion es implicito
// - Se colocan los corchetes y el return si se necesita mas de una linea de ejecucion. 

// Estructura de una arrow function cuando tiene mas de dos parametros

const newGreetingImplicitWithTwoParameters = ( name, lastName ) => `Hi, I'm ${name} ${lastName}`
// - Tiene que llevar los parentesis en los parametros
```