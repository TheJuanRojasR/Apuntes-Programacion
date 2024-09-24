<sub> Fecha: 19 y 20 de septiembre del 2024 </sub>
<sub> Clase 3, 4 y 5 </sub>
### Resumen

#### ENCAPSULAMIENTO (PROTEGER)

- El objetivo principal del encapsulamiento es ocultar los detalles internos de un objeto o una clase y solo mostrar los detalles necesarios para el funcionamiento de esta.
- El encapsulamiento es uno de los pilares del OPP.
- El encapsulamiento ayuda:
	- Proteger los datos de accidentes y cosas no deseadas.
	- Seguridad al momento de acceder o modificar datos.

##### TIPO DE PROPIEDADES

1. Propiedades publicas: Son accesibles desde cualquier lugar.
	- Podemos acceder a las propiedades desde cualquier lado. Del mismo las podemos modificar y no va mostrar ningún error o restricción. 
2. Propiedades privadas: Solo pueden ser accedidas desde dentro de la clase.
	- Para poder acceder y modificar las propiedades de la clase se tiene que utilizar los métodos get(mostrar) y set(modificar) de la clase. 
	- Las propiedades se declara al principio con un # inicial. Ejemplo: #variable
3. Propiedades Protegidas: Aunque no son nativas en JavaScript, existen convenciones que simulan este comportamiento.
	- Las propiedades protegidas implican que solo son accedidas dentro de la clase y sus subclases. No se pueden acceder desde fuera como si fueran publicas.
	- Las propiedades se declara al principio con un __ inicial. Ejemplo:  _ variable 
	  Se usa el __ por convención porque no hay ninguna restricción técnica que diga que impida acceder a esas propiedades. 
	- De igual modo no se debe ingresar ni modificar directamente. Para modificarlas solo se puede dentro de la clase o desde una subclase.

##### GETTERS AND SETTERS

- Estos métodos son muy utilizados para controlar como acceden y modifican las propiedades dentro de clases y subclases.
- Se pueden hacer de 2 formas.
	1. Utilizando palabras reservadas `set` y `get` (forma recomendada): Es una forma mas fácil y mas elegante de escribir el código. Estos permiten acceder a las propiedades como si fueran publicas, pero en realidad se están utilizando métodos internos para el control de estas. 
``` JavaScript
class Person {
  constructor(name) {
    this._name = name;
  }

  // Getter
  get name() {
    return this._name;
  }

  // Setter
  set name(newName) {
    this._name = newName;
  }
}

const person = new Person('Juan');
console.log(person.name);  // Output: Juan (usamos el getter, sin paréntesis)
// Lo ejecutamos como una propiedad pero es un metodo.
person.name = 'Carlos';  // Usamos el setter como si fuera una propiedad pero en realidad es un metodo.
console.log(person.name);  // Output: Carlos
```

2.  El `Metodo convencional` que es creando un método normal (Ej: getName, setName) funciona normal, como si fuera el método de una clase. Toca colocar los () para poder ser llamados 
```JavaScript
class Person {
  constructor(name) {
    this._name = name;
  }

  getName() {
    return this._name;  // Método convencional
  }

  setName(newName) {
    this._name = newName;  // Método convencional
  }
}

const person = new Person('Juan');
console.log(person.getName()); // Output: Juan.   Se llaman con los parentesis
person.setName('Carlos');
console.log(person.getName()); // Output: Carlos. Se llaman con los parentesis
```
