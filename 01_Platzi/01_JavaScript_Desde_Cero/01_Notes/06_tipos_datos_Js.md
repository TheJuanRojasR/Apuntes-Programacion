<sub> Fecha: 10 de mayo del 2024 </sub>
<sub> Clase 6/79 </sub>
## Resumen

### Tema :  Tipos de datos: Mutabilidad e inmutabilidad
#### Conceptos básicos

- Definición: Son categorías que utilizamos para organizar los valores de las variables. Tenemos dos tipos de datos principales que son:
	- Primitivos (Inmutables)
	- Complejos (Mutables)
- Vamos a definir que es inmutable y mutable:
	- Inmutabilidad : No nos cambia el valor original.
	- Mutabilidad: Nos cambia el valor original.
#### TD Primitivos (Inmutabilidad) 

- Definición: Son valores simples y se almacenan directamente en la variable. [[07_paso_por_valor_Js|Más información]]
- Tipos de datos primitivos en Js
	- String: Almacena cadenas de texto. [[09_creacion_string_Js|Creación de Strings]] ,  
	- Number: Almacena números.
	- Boolean: Almacena valores booleanos (true o false).
	- Null: Representa la ausencia intencional de un valor.
	- Undefined: Representa la falta de valor asignado.
	- Symbol: Almacena valores únicos e inmutables, comúnmente utilizados como identificadores de propiedades de objetos.
	- BigInt: Almacena números enteros de precisión arbitraria.

```JavaScript
function changeValue(a) {
  a = 5;
}
let a = 10;
changeValue(a);
console.log(a); // 10. No lo cambia porque solo tomo una copia de la variable, mas no tomo la original.
```
#### TD Complejos (Mutabilidad)

- Definición: Son estructuras que contienen referencias a ubicaciones en la memoria en lugar de los valores reales directamente. Cuando asignas un objeto a una variable, la variable no almacena el objeto en sí, sino una referencia a la ubicación en la memoria donde se encuentra ese objeto. Esto significa que cuando manipulas un dato complejo, estás manipulando la referencia a la ubicación en la memoria donde reside el objeto. [[08_paso_por_referencia_Js|Más información]] 
- Tipos de datos complejos en Js
	- Object: Almacena colecciones de pares clave-valor, donde las claves son cadenas y los valores pueden ser cualquier tipo de datos, incluyendo otros objetos, arrays y funciones.\
	- Array: Almacena una lista ordenada de elementos, donde cada elemento puede ser cualquier tipo de datos, incluyendo otros arrays y objetos.
	- Function: Almacena bloques de código reutilizables que realizan una tarea específica cuando son invocados.
	  
```JavaScript
<<<<<<< HEAD
let personOne = { name: "Juan" };    // Se guarda como referencia.
let personTwe = personOne;           // Tienen la misma referencia.
personTwe.name = "Carlos";
console.log(personOne.name);         // Output: Carlos
=======
let personOne = { name: "Juan" }; // Se guarda como referencia.
let personTwe = personOne;           // Tienen la misma referencia.
personTwe.name = "Carlos";
console.log(personOne.name); // Output: Carlos
>>>>>>> 780c806 (vault backup: 2024-05-11 16:28:14)
 