<sub> Fecha: 10 de julio del 2024 </sub>
<sub> Clase 28/79 </sub>
## Resumen

- Definición: Es una instrucción dirigida al interprete de js. Le indica que el código que vamos hacer a continuación estará en modo estricto, haciendo que cambia la manera que se ejecuta algunas instrucciones.
- El modo estricto salió después de la actualización de ES6 se implemento para evitar errores simples hechos anteriormente. 
- Para utilizar el modo estricto solo basta con colocar el string 'use strict' al principio del programa se habilitara.

```JavaScript
'use strict'
```

ECMASCRIPT: Es una especificación. Un estándar para crear lenguajes de programación. Js es una implementación de esa especificación. 
### Errores que resuelve el 'use strict'

1. Evitar creación de variables globales accidentales: Mostrara error al querer modificar variables no creadas anteriormente.
2. Atributos de solo lectura: Mostrara error al querer cambiarlos
3. Objetos no extensibles: Mostrara error al tratar de crear una propiedad a un objeto no extensible. 
4. Asignar propiedades a una variable. Mostrara un error al tratar de crear una propiedad de una variable. 
5. Tener parámetros duplicados en una función: Si tenemos parámetros con el mismo nombre en una mismo función nos mostrara error de inmediato. 
6. Sistema Octal: Ahora para escribir un numero en octal se tiene que colocar primero el 0 luego una o y ya procede el numero en octal que queramos colocar. 

```JavaScript
console.log( 0o22 )
```

7. Errores con Delete: Mostrara error al tratar de eliminar:
	1. Variables
	2. Funciones 
	3. El objeto global
8. Arguments y Eval: No se puede declarar variables con estos nombres.
9. With(): esta función no se puede utilizar en modo estricto.
10. Nuevas palabras reservadas: no se podrán utilizar las siguiente palabras reservadas.
	1. class, enum, extends, super, const, export, import.
	2. Con 'use strict': implemets, package, public, interface, static, private, protected, yield, let.
11. Funciones libres
