<sub> Fecha: 13 de mayo del 2024 </sub>
<sub> Clase 16/79 </sub>
## Resumen
### Tema : Conversión Explicita e Implícita

#### Conversión Explicita en código js

> Conversión = Coerción  

- [[15_casting_coercion_Js#Coerción Implícita y Explícita|Explicación coerción explicita]]
- Ver el archivo 16_casting_coercion.js para ver todos los ejemplos sobre conversión explicita.
#### Conversión Implícita de js

- [[15_casting_coercion_Js#Coerción Implícita y Explícita|Definición y Explicación de coerción implícita]]
- Cuando inicia con un string: Cuando el proceso comienza o contiene un string el programa va a interpretar que queremos concatenar.
	- `const sum = '5' + 3;`
	  `console.log( sum ); // '53' ` 
- Cuando inicia con un number: Cuando el proceso inicia con un number el programa va interpretar que queremos hacer operaciones. 
	- `const sumWhitNumber = 2 + true;`
	  `console.log( sumWhitNumber ); // 3` 
- Para comprender mejor:
	- Siempre que haya un string en la operación, se realizará una concatenación.
	- Si solo hay números y valores booleanos, se realizará una suma.
##### Ejemplos prácticos conversión implícita js

```JavaScript
const stringValue = '10';
const numberValue =  10;
const booleanValue = true;

console.log( stringValue + stringValue );   //1010     // Concatena
console.log( stringValue + numberValue );   //1010     // Concatena
console.log( stringValue + booleanValue );  //10true   // Concatena
console.log( numberValue + stringValue );   //1010     // Concatena
console.log( numberValue + numberValue );   //20       // Sumar
console.log( numberValue + booleanValue );  //11       // Sumar
console.log( booleanValue + stringValue );  //true10   // Concatena
console.log( booleanValue + numberValue );  //11       // Sumar
console.log( booleanValue + booleanValue ); //2        // Sumar
```


