<sub> Fecha: 25 de julio del 2024 </sub>
<sub> Clase 42/79 </sub>
## Resumen

- Definición: El bucle `while` es una estructura de control que ejecuta un bloque de código mientras una condición especifica sea verdadera. Es muy útil cuando no sabemos cuantas veces tiene que iterar un ciclo.
### Estructura

```JavaScript
// Estrutura de una bucle while
while (condition) {
  // código a ejecutar mientras la condición sea verdadera
}

// condition: Es una expresion que se evalua cada vez que se itera. Si la                        condicion es verdadera, el bloque de codigo se ejecuta. Si es falsa                se termina el bucle.
```
### Ejemplos

1. **Contador simple**

```JavaScript
let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}
```
### Recomendaciones

1. Asegurarse de que algo en el bloque de código cambie la condición en algún momento para evitar un bucle infinito.
2. Utilizarlo cuando no conocemos el numero de iteraciones.