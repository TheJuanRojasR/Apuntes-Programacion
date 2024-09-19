<sub> Fecha: 11 de mayo del 2024 </sub>
<sub> Clase 9/79 </sub>
## Resumen
### Tema :  TDP String (Cadena de texto)
#### Conceptos básicos

- Definición: Un String (Cadena de texto) es un tipo de dato primitivo de Js que contiene una secuencia de caracteres como letras, números, símbolos, etc. (Contiene en lo general Texto).
- Para crear un string tenemos 3 formas: 
	- Comillas simples. `const firstOption = 'Comillas simples';`
	- Comillas dobles.  `const secondOption = "Comillas dobles";`
	- Comillas invertidas. (Backtick o Templates literals) 
	  `const thirdOption = `Comillas invertidas`;`
- Para poder concatenar un string tenemos 4 formas:
	- Operador `+`: `const phrase = "Hola" + " " + "mundo";`
	- Template literals: 
	  `const presentation = 'Hi, my name is ${ name } and I from ${ country}' ;` 
	- Método `join()`: `const phrase = ["Hello", "world"].join(" ");`
	- Método `concat()`: `const hobbies = "My hobbies are: ".concat(hobbie1, ", ", hobbie2, " y ", hobbie3, ".");`
		- El método concat() también nos puede servir para:
			- Unir arrays
			- Agregar elementos a un array
			- Clonar arrays
<<<<<<< HEAD
	- [[11_manipulacion_string_Js#Métodos de Strings|Métodos de manipulación de Strings]]
=======
>>>>>>> 780c806 (vault backup: 2024-05-11 16:28:14)
#### Caracteres de escape

- Definición: Los caracteres de escape son una forma de indicar al programa que un determinado carácter debe interpretarse literalmente, en lugar de su significado especial. 
- Definición mía: Son como pequeños trucos que usamos para decirle al programa que queremos incluir ciertos caracteres especiales dentro de un texto, como comillas, saltos de línea o tabulaciones.
- Ejemplos: `\n` (salto de línea), `\t` (tabulación), `\\` (barra invertida).
- Cuando trabajamos con Strings largos tenemos 3 formas de hacerlos:
<<<<<<< HEAD
	- Usar comillas simples y concatenar +
=======
	- Usar comillas simples y concatenar
>>>>>>> 780c806 (vault backup: 2024-05-11 16:28:14)
	  ```JavaScript
const poem = 'Yo no hablo de venganzas ni de perdones;\n' +
'el olvido es la única venganza\n' +
'y el único perdón.';
console.log(poem);
```
	- Usar comillas invertidas (Mi preferida)
	  ```JavaScript
const poem2 = `Yo no hablo de venganzas ni de perdones;
el olvido es la única venganza
y el único perdón.`;
console.log(poem2);
```
	- Usar comillas simples y caracteres de escape
	  ```JavaScript
const poem3 = 'Yo no hablo de venganzas ni de perdones;\n\
el olvido es la única venganza\n\
y el único perdón.';
console.log(poem3);
```
