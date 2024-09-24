<sub> Fecha: 08 de julio del 2024 </sub>
<sub> Clase 26/79 </sub>
## Resumen

- Definición: Es una forma especial de Js para crear objetos (Es como un molde o una clase). Estas funciones permiten definir una "Plantilla" para los objetos que se van a crear con ella. 
- Crear funciones constructoras nos ayuda a evitar duplicación de código. Duplicar código implica: 
	- Mantenimiento difícil.
	- Aumento de la complejidad.
	- Mayor probabilidad de errores. 
	- Difícil de escalar.
	- Tiempo y recursos. 
	- Dificultad en la identificación de errores. 
	- Violación de principios de diseño (DRY => Don't repeat yourself)
- El nombre de una función constructora o de una clase siempre va comenzar con mayúscula y en singular. En pocas palabras su convención de escritura será PascalCase.  
### Arrow function para crear objetos  != Función constructora

- Una función constructora crea instancias(objetos) y estas instancias van a heredar las propiedades de la función constructora. Las arrow function crean implícitamente un objeto pero no es una instancia de la función por lo tanto no va a heredar las propiedades y hace que la arrow function sean poco escalable. 
### Estructura de una función Constructora 

```JavaScript
// Creacion de funcion constructora
function ConstructorFunction ( parameterOne, parameterTwo ) {
	// Asignacion de parametros a propiedades del objeto.
	this.exampleOne = parameterOne,
	this.exampleTwo = parameterTwo,
	this.methodOne = function () {
		console.log(`It's a method`)
	};
}
// Creacion de una instancia de ConstructorFunction con la palabra reservada new
const intance = new ConstructorFunction( 'valueOne','valueTwo' )

// ConstructorFunction: Es el nombre de la funcion constructora.
// ( parameterOne, parameterTwo ): Son los parametros que podemos asgnar como propiedades a los objetos creados con la funcion constructora.
// {} : Dentro hira todos las propiedades y metodos que querramos que tenga los objetos. 
// new ConstructorFunction() : La utilizamos para crear una nueva instancia de la funcion constructora ConstructorFunction.
```

### Ejemplos hecho en Platzi

```JavaScript
// Vimos creaciones de objetos a traves de funciones constructoras 

// Creamos una arrow function y se la pasamos como argumento
const personalizedMessage = () => 'Good everybody'

// Creando funcion constructora
function Rocket ( name, ownMessage ) {
  // Propiedades de la funcion constructora.
  this.name = name;
  this.launchMessage = ownMessage
}

// Creando una instancia de la funcion constructora Rocket
// Creando un objeto del molde Rocket
const falcon9Rocket = new Rocket('Falcon 9', personalizedMessage)

console.log(falcon9Rocket.name)
console.log(falcon9Rocket.launchMessage())

// Creacion de objetos con funciones flecha 

//____________________________________________________________________________

// Creando funcion flecha que crea objetos
const Car = ( brand, model, idCar ) => ({
  brand: brand,
  model: model,
  idCar: idCar
})

// Creando una instancia de la funcion flecha Car
const newCarwithArrowFunction = Car( 'Tollota' , 'Prado', 'abc123' )

console.log(newCarwithArrowFunction)
console.group()
console.log(newCarwithArrowFunction.brand)
console.log(newCarwithArrowFunction.model)
console.log(newCarwithArrowFunction.idCar)
```