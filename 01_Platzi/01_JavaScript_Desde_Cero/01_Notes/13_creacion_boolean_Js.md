<sub> Fecha: 12 de mayo del 2024 </sub>
<sub> Clase 13/79 </sub>
## Resumen
### Tema : TDP Boolean (Booleanos)
#### Conceptos básicos

- Definición: Los tipos de datos booleanos nos ayudan a representar valores lógicos. Quiere decir que solo tiene 2 valores:
	- True   (Verdadero)
	- False  (Falso)
- **Buena practica**: el nombre de las variables booleanas siempre comenzar con is o has para identificar que se esta como 'preguntando' y identificarlo de forma rápida.
	- `const isActive = true;`
	- `const hasPermisson = false;`
#### Operaciones 

- Los booleanos tienen sus propias operaciones:
	- And  (Intersección): &&
	- Or    (Unión):           ||
	- Not  (Negación):     ! 
#### Coerción booleana en Js (Conversión Implícita)

- Definición: Es un proceso el cual un valor de cualquier tipo se convierte a un valor booleano. En otras palabras convierte cualquier valor en un valor booleano cuando se usa un contexto que se requiere 'true' o 'false' como en los condicionales 'if' y las expresiones '5 > 3'.
- Casos que se aplica la coerción booleana:
	- Condicionales: Cuando utilizamos if ya que su resultado es un 'true' o 'false'
	- Operadores lógicos: Cuando utilizamos los operadores explicados anteriormente.
	- Comparaciones booleanas: Cuando tenemos que comparar valores booleanos con los operadores: 
		- ==    : Las variables son iguales (No importa el tipo de dato)
		- === : Las variable son iguales (Importa el valor y el tipo de dato)
		- !=     : Las variables son distintas (Solo compara sus valores)
		- !==  :  Las variables son distintas (Compara tipo de dato y valores)
	- Ejemplo:
		- `const result = 5 > 3;`
		  `console.log( result );  // true`
		- `const nameExample = 'Platzi';`
		  `console.log( !!nameExample ) // !! Doble negacion true`
#### Conversión explicita

- Definición: Son las conversiones de pasar de un tipo de dato a booleano que hacemos directamente nosotros. 
- Formas de hacer conversiones a Booleanos:
	- Boolean()    : Espera cualquier tipo de dato como argumento. Devuelve su valor según las reglas de coerción que vimos anteriormente:
	  `const value = 0;`
	  `const explicitBoolean = Boolean( value ); // 0`
	- parseBool() : Espera un string como argumento. Solo devuelve true si el string es 'true' o '1'
	  `console.log(parseBool("true")); // Imprime true`
	- Doble negación !! : Es una forma de operador unitario para convertir un tipo de dato negándolo dos veces. 
	  `const texto = "Hola";`
	  `const booleano = !!texto; // El valor true se guarda en Booleano`
	  `console.log(booleano); // Imprime true (la cadena "Hola" es truthy)`
#### Definición de Truthy y Falsy

- Aclaración: Son términos que se utilizan para describir el comportamiento de algunos valores que se convierten a Booleanos y no son directamente los valores de lo booleanos 'true' o 'false'
- Truthy: Un valor que se evalúa como 'Verdadero' en un contexto booleano. 
- Falsy: Un valor que se evalúa como 'Falso' en un contexto booleano. 

>Los conceptos de "truthy" y "falsy" son formas de describir valores que pueden actuar como "verdaderos" o "falsos" en un contexto booleano, pero no son los valores booleanos directos `true` o `false`. Son como categorías que incluyen valores que pueden comportarse como verdaderos o falsos cuando se evalúan en una expresión booleana, aunque no sean explícitamente `true` o `false`.
>
>Por ejemplo, un valor como `0` puede ser considerado falsy, aunque no sea `false` directamente. Y una cadena de texto con contenido, como `"hola"`, puede ser considerada truthy, aunque no sea `true`.
