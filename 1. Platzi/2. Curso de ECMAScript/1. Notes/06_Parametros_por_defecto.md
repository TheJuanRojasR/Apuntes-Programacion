<sub>Fecha: 20 de agosto del 2024 </sub>
<sub> Clase 6/35 </sub>
## Resumen

### Antigua forma de colocar parámetros por defecto

- Antes para colocar un parámetros por defecto en funciones o demás se podría utilizar esta forma.

```JavaScript
function newUser ( name, age, country) {
	// Asignando un valor por defecto
	let name = name || 'Oscar';
	let name = age || 24;
	let name = country || 'MX';
	console.log(name, age, country);
}
```

`Nota: Si al llamar la funcion no se le pasan todos los parametros entonces va a cober los parametros por defectos que estan despues del 'o' || `

### Nueva forma de colocar parámetros por defecto

```JavaScript
function newUser ( name = 'Oscar', age = 24, country = 'MX') {
	// Se asignan los valores con los parametros necesarios.
	console.log(name, age, country);
}
```

`Nos ahorramos lineas de codigo y es mucho mas entendible.`