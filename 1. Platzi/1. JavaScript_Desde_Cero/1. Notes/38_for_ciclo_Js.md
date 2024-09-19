<sub> Fecha: 22 de julio del 2024 </sub>
<sub> Clase 38/79 </sub>
## Resumen

- Definición: `for` es una de las estructuras de control mas comunes en la programación. Es utilizada para repetir una secuencia de instrucciones un numero especifico de veces (`bucle`). El `bucle for` ejecuta un bloque de código repetidamente (`iterar`) mientras se cumpla una condición especifica.
### Estructura

```JavaScript
// Estrutura de una bucle for
for ( variable; condicion; actualizacion ) {
	// Codigo a ejecutarse en cada iteracion.
}

// varible: Esta se ejecuta solamente una vez al comienzo del bucle. Esta es una               varibale de control.
// condicion: Se coloca una condicion y si esta es true el bloque de codigo se va                a ejecuutar. Esta se evalua antes de cada iteracion. 
// actualizacion: Esta se ejecuta al final de cada iteracion. Incrementa o                           decrementa la variable de control.
```
### Utilidad

1. **Iteración sobre un Rango de Números**: Cuando necesitas ejecutar un bloque de código un número específico de veces.
2. **Iteración sobre Arrays**: Cuando necesitas recorrer un array y realizar operaciones en cada elemento.
3. **Generación de Secuencias o Series**: Cuando necesitas generar una secuencia de valores siguiendo una lógica específica.
4. **Manipulación de Datos**: Cuando necesitas manipular datos estructurados, como modificar elementos de un array.

```JavaScript
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  numbers[i] *= 2; // Duplicar cada número en el array
}
console.log(numbers); // [2, 4, 6, 8, 10]
```
### Recomendaciones

- Variable de control: Es buena practica declarar la variable de control con `let` y con nombre `i`.
- Condiciones claras: Las condiciones tienen que ser claras para evitar que que se vuelva un bucle infinito. Este se vuelve infinito cuando la condición siempre es verdadera. 
- Uso de `break` y `continue`: 
	- `break`: Se utiliza para salir del bucle antes de que la condición sea falsa.
		- **Salir del bucle cuando se encuentra un valor específico**
	- `continue`: Se utiliza para saltar a la siguiente iteración del bucle.
		- **Saltar iteraciones específicas**
		- **Omitir valores nulos o indefinidos**