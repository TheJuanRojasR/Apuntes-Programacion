<sub> Fecha: 04 de julio del 2024 </sub>
<sub> Clase 22/79 </sub>
## Resumen
### this (Contexto)

- Definición: Es una referencia al contexto en el que una función está siendo ejecutada. El valor de `this` se determina en el momento de la llamada a la función y puede variar dependiendo de cómo y dónde se invoca la función.
- Analogía: `this` es un actor en una obra de teatro. El papel que interpreta el actor (`this`) depende de la escena (el contexto) en la que se encuentre. En cada escena, `this` puede representar a un personaje diferente dependiendo de cómo se invoque.
#### this según el contexto

- **General:** `this` se refiere al objeto desde el cual se ha invocado la función.
- **Global Context (fuera de cualquier función):** En el contexto global, `this` se refiere al objeto global (`window` en navegadores o `global` en Node.js).
- **En un método de un objeto:** Cuando una función se invoca como un método de un objeto, `this` se refiere a ese objeto.
- **En una función de constructor:** Cuando una función se utiliza como un constructor con `new`, `this` se refiere al nuevo objeto que se está creando.
- **En una función en modo estricto:** En modo estricto (`"use strict";`), `this` será `undefined` si la función se invoca sin un contexto.
#### Enlace Implícito

- El **enlace implícito** ocurre cuando una función es invocada como un método de un objeto. En este caso, `this` se refiere al objeto desde el cual se invoca la función.
- Ejemplo
```JavaScript
const person = { 
	name: 'Juan', 
	showDetails: function() { 
		console.log(`My name is ${this.name}`); 
	} 
}; 
person.showDetails(); // My name is Juan
```
#### Enlace Explicito

- El **enlace explícito** de `this` se refiere a cuando utilizamos métodos como `call`, `apply` o `bind` para establecer manualmente el valor de `this` en una función. Esto es útil cuando tenemos una función y un objeto separados, y queremos que la función se ejecute en el contexto de ese objeto.
- Ejemplo
```JavaScript
function showDetails ( country ) { 
	console.log(`My name is ${this.name} and I'm from ${country}`); 
}
const person = { name: 'Juan' };
// Se llamo a la funcion con el metodo call. El metodo requiere del objeto a establecer y en este caso el argumento country.
showDetails.call( person, 'Colombia' ); 
```
