<sub> Fecha: 25 de julio del 2024 </sub>
<sub> Clase 43/79 </sub>
## Resumen

- Definición: El bucle `do while` es una estructura de control que ejecuta al menos una vez y luego ve la condición. Si esta es verdadera vuelve a ejecutar el código. Si no se acaba el bucle. 
### Estructura

```JavaScript
// Estrutura de una bucle do while
do {
  // código a ejecutar al menos una vez
} while (condition);

// El codigo dentro de 'do' se ejecuta primero.
// Luego la condicion se evalua. 
// Si la condicion es verdadera el codigo se ejecuta de nuevo.
// si la condicion es falsa el bucle termina. 
```
### Ejemplos

1. **Leer input al menos una vez**

```JavaScript
const prompt = require('prompt-sync')(); // Escribir desde consola.
let input;

do {
  input = prompt('Escribe algo (escribe "exit" para salir): ');
  console.log(`Escribiste: ${input}`);
} while (input !== 'exit');
```
### Recomendaciones

1. Este se usa cuando queremos que al menos se ejecute una vez el código del ciclo. 
2. Igual que el `while` se tiene que tener mucho cuidado la condición del `do while`. Tenemos que asegurarnos en que en algún pedazo del código se cambia la condición para no generar un bucle infinito. 