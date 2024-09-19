<sub> Fecha: 03 de julio del 2024 </sub>
<sub> Clase 21/79 </sub>
## Resumen
### Funciones Puras

- Definición:  Aquella que no interactúa con ningún ámbito externo al de su propia función.
#### Características fundamentales 

- Dada una entrada vamos a tener una salida
- No producen side effects (efectos secundarios) en el programa.
	Side Effects
	- Modificar variables globales.
	- Modificar parámetros de una función .
	- Solicitudes HTTP (Si llama a una API)
	- Imprimir mensajes en pantalla o consola
	- Manipulación del DOM
	- Obtener hora, día, año.
(Que las funciones tengan side effects no significa que sean funciones malas)
#### Estructura de una función  pura 

```JavaScript
function sum ( a, b ){
  return a + b
}
```

#### Ejemplos de funciones impuras

```JavaScript
let total = 0 // Variable global
function sumWihtsideEffect ( number ){
  total = total + number // Modifica una variable global
  return total
}
```