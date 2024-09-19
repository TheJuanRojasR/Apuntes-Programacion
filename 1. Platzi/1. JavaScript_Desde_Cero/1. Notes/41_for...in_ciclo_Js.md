<sub> Fecha: 25 de julio del 2024 </sub>
<sub> Clase 41/79 </sub>
## Resumen

- Definición: El bucle `for...of` es una estructura de control que permite iterar sobre las propiedades enumerables de un objetos. Es muy útil para recorrer todas la propiedades de un objeto incluso las heredadas. 
### Estructura

```JavaScript
// Estrutura de una bucle for...in
for (let property in object) {
  // código a ejecutar para cada propiedad
}

// let property Variable que guarda el nombre de la propiedad en cada iteracion.
// iterable: Objeto cuyas propiedades se van a iterar.
```
### Ejemplos

1. **Iterar sobre un objeto**

```JavaScript
const listaDeCompras = {
  manzana: 3,
  pera: 2,
  naranja: 1
};

for (let fruta in listaDeCompras) {
  console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}

// Opcion 2
for (const fruta in listaDeCompras) {
  if (listaDeCompras.hasOwnProperty(fruta)) {
    console.log(`${fruta} : ${listaDeCompras[fruta]}`);
  }
}
```
### Recomendaciones y consejos

1. Fácil de usar con objetos. Permite obtener los nombres de las propiedades directamente. 
2. Como itera sobre todas la propiedades incluidas las heredadas por el prototipo lo cual no se puede querer. Se tiene que filtrar con el método `hasOwnProperty` si solo se quiere las propiedades directas del proyecto. 
