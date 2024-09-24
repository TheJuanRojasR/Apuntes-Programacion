<sub> Fecha: 11 de mayo del 2024 </sub>
<sub> Clase 11/79 </sub>
## Resumen
### Tema : Métodos de Strings

#### Conceptos básicos

- Definición: Los métodos de manipulación de un string son funciones integradas en JavaScript que te permiten realizar diversas operaciones y manipulaciones en cadenas de texto. Son funciones (Acciones) de js que nos ayudan a manipular los Strings según nuestra necesidad. 
- Se pueden tener Strings Primitivos y Strings Objetos. La diferencia entre ambos es que los Strings Objetos se pueden modificar por que son mutables.
	- String primitivos: `const primitiveString = 'I am a primitive String';`
	- String objeto: `const stringObject = new Sting('I am a string object');`
- `typeof` : nos sirve para saber que tipo de dato es. 
- Recordar: Recordemos que un string es como un array de caracteres entonces podemos recorrer cada carácter.
#### Métodos de Strings

> contante global `const stringExample = 'Hello World. I am a string';`

- Acceder índices en un string
	- `console.log(stringExample[0]);`
	- `console.log(stringExample.charAt(0));`
- Encontrar la posición de un carácter o una cadena
	- `console.log(stringExample.indexOf('o'));`
	- `console.log(stringExample.indexOf('string'));`
	- Si no encuentra la palabra o carácter nos va mostrar -1
- Encontrar la última posición de un carácter o una cadena:
	- `console.log(stringExample.lastIndexOf('o'));`
- Para saber las letras que están entre un índice y otro índice 
	- `console.log(stringExample.slice(6, 11));`
- Conocer la longitud de un string
	- `console.log(stringExample.length);`
- Convertir el texto en mayúscula 
	- `console.log(stringExample.toLocaleUpperCase());`
- Convertir el texto en minúscula 
	- `console.log(stringExample.toLocaleLowerCase());`
- Dividir un string y convertirlo en un array
	- `console.log(stringExample.split(' '));`
- Eliminar los espacio al comienzo y al final 
	- `const stringWithoutSpaces= stringExample.trim();`
	  `console.log(stringWithoutSpaces);`
- Reemplazar una palabra dentro de nuestro string
	- `const newStringExample = stringExample.replace('remove','add')`
	  `console.log(newStringExample)`
- Convertir un TDP String a TDP Number: 
	- `const string = '10'; `
	  `console.log( typeof Number( string ) );   // number`
	- `console.log( typeof parseInt( string ) ); // number`
	- [[12_creacion_number_Js#Diferencia entre Number() y parseInt()|Diferencia entre Number y parseInt]]