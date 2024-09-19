<sub>Fecha: 26 de agosto del 2024 </sub>
<sub> Clase 5/35 </sub>

## Variables de entorno

- Estas son variables que se almacén en el entorno de un sistema operativo y se pueden usar para pasar información a aplicaciones o scripts. Es una forma de poder configurar el programa sin tener que modificar el código fuente. 
### Características

- **Almacenamiento temporal**: Estas son temporales y solo existen mientras se ejecutan en el entorno (La terminal como el siguiente ejemplo). Si se cierra la terminal estas variables ya dejan de existir.
- **Acceso global**: Estas pueden ser accedidas por cualquier programa ejecutado en el entorno.

> Estas son utilizadas para almacenar datos sensibles que no deberían ir escritos en el código fuente (Contraseñas, clave API, Tokens. etc.).


```JavaScript
'use strict'

// Las variables de entorno son una forma de guardar informacion fuera de nuestro
// Software. Estan sirven para definir parametros sencillos de configuracion del programa.

// Buenas practicas: Todas las variables de entorno se ponen en mayucula y
// Separados por _ esto se remonta al uso de linux en el pasado.

// Acceder a las variables de entorno(environment variables)
let nombre = process.env.NOMBRE || 'Sin nombre.';
let web = process.env.WEB || 'Sin web.';

console.log(`Hola ${nombre}`);
console.log(`Mi web es ${web}`)
```


