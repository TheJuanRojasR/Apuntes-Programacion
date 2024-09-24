<sub> Fecha: 20 de junio del 2024 </sub>
<sub> Clase 20/79 </sub>
## Resumen
### Capacidades que tienen las funciones al igual que otros objetos

1. **Las funciones pueden ser pasadas como argumentos a otras funciones**. Esto es común en las funciones de orden superior y los callbacks.
	   Callback : Cuando pasamos una función como argumento de otra función. 
```JavaScript
function saluda(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}

function procesaUsuario(callback) {
    let nombre = prompt('Por favor, introduce tu nombre.');
    callback(nombre);
}

procesaUsuario(saluda);
```

2. Asignar funciones a variables = Se conoce como expresión de función 
```JavaScript
let miFuncion = function() { 
	console.log('¡Hola, mundo!'); 
	} 
miFuncion(); 
// '¡Hola, mundo!'

// Declaracion de funciones es cuando las pasamos las creamos de manera normal
```

3. **Las funciones pueden devolver otras funciones**. Esto es común en los patrones de programación funcional.
```JavaScript
function creaSaludo(saludo) { 
	return function(nombre) { 
		console.log(`${saludo}, ${nombre}!`); 
		}
	} 
	
let saludoPersonalizado = 
	creaSaludo('Bienvenido'); 
	saludoPersonalizado('Juan');
```

4. Anidar funciones = Nested functions (Buscar)

5. Almacenar funciones en objetos = Las funciones dentro de los objetos se les llama métodos.
```JavaScript
const rockect = {
  name : 'Falcon 9',
  launchMessage : function launchMessage () {
    console.log('🔥');
  }
}
rockect.launchMessage()
```