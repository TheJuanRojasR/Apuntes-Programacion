<sub> Fecha: 13 de mayo del 2024 </sub>
<sub> Clase 14/79 </sub>
## Resumen
### Tema : TDP null, undefined, symbol y bigint
#### Conceptos básicos

- Definición: 
	- Null: Tipo de dato primitivo que solo tiene un valor y es 'null'. Se utiliza para reconocer que una variable no tiene asignado un valor pero de forma INTENCIONAL.
		- `const exampleNull = null;`
		  `console.log( exampleNull );`
	- Undefined: Tipo de dato primitivo que solo tiene un valor y es 'undefined'. Indica que una variable no ha sido inicializada o no tiene o no se encuentra su valor. 
		- `let exampleUndefined;`
		  `console.log( exampleUndefined );`
	- Symbol: Es un tipo de dato primitivo en JavaScript que crea identificadores únicos. Su valor es privado y se utiliza para uso interno, especialmente para propiedades de objetos.
		- **Creación**: Se crean utilizando su constructor `Symbol()`. Es una buena práctica declararlos con `const` para evitar reasignaciones.
		- **Acceso a propiedades**: Para acceder a propiedades de un objeto que fueron declaradas con símbolos como claves, se utiliza la notación de corchetes: `objeto[symbol]`.
		- `const ID = Symbol('id');`
		  `let user = {};`
		  `user[ID] = '1234'`
		  `console.log( user );`
	- Bigint: Tipo de dato primitivo de js que permite escribir enteros muy grandes. A diferencia de number, bigint pueden tener como valor números muy muy grandes. Para representarlos se tiene que colocar la letra n a lo ultimo del numero.
		- `const exampleBigint = 321654894723132132132132n;`
		  `console.log( exampleBigint );`
	