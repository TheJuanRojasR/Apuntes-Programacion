<sub> Fecha: 16 de julio del 2024 </sub>
<sub> Clase 34/79 </sub>
## Resumen

- Definición: Los if son estructuras de control que nos permiten tomar decisiones en el flujo de un programa basándose en condiciones booleanas (Verdadero o falso).

### Tipo de sentencias condicionales

- If: Se utiliza para ejecutar un bloque de código si una condición es verdadera. 
```JavaScript
if (condición) {
  // código a ejecutar si la condición es verdadera
}
```

- else: Se utiliza conjunto con el 'if' para ejecutar un bloque de código si la condición del 'if' es falsa.
```JavaScript
if (condición) {
  // código a ejecutar si la condición es verdadera
} else {
  // código a ejecutar si la condición es falsa
}
```

- else if: Se utiliza para probar múltiples condiciones. Si la condición 'if' inicial es falsa, se evalúan las condiciones de los 'else if' siguientes. 
```JavaScript
if (condición1) {
  // código a ejecutar si la condición1 es verdadera
} else if (condición2) {
  // código a ejecutar si la condición1 es falsa y la condición2 es verdadera
} else {
  // código a ejecutar si todas las condiciones anteriores son falsas
}
```

### Ejercicios Platzi

```JavaScript
'use strict'

let nombre = 'Diego';

if ( nombre == 'Diego' ) {
  console.log('Hola Diego')
} else if ( nombre == 'Nico' ) {
  console.log('Hola Nico')
}
else {
  console.log('Nombre no encontrado')
}
```

### Consejos

1. Mantener las condiciones claras y simples para que tengan una buena legibilidad.
2. Usar paréntesis para agrupar condiciones complejas y evitar confusiones. 
```JavaScript
if ((a > b) && (c < d)) {
  // código
}
```
3. Colocar siempre de primeras las condiciones mas especificas para evitar evaluaciones innecesarias. 
4. Evitar hacer muchos niveles de anidamiento porque pueden hacer el código difícil de entender. 