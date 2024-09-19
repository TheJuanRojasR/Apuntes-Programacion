<sub> Fecha: 13 de mayo del 2024 </sub>
<sub> Clase 15/79 </sub>
## Resumen
### Tema : Conversión de tipos: Type Casting y Coerción

#### ¿Qué son los lenguajes interpretados, Compilados e Híbridos?

- Definición: 
	- Compiladores: Los lenguajes que son compilados lo que hace es que cogen nuestro código y lo traducen a código de maquina para que la maquina pueda entender antes de la ejecución.
		- Ej: Vamos hacer una receta pero esta en francés. Si la receta ya esta traducida (Un compilador tradujo nuestra receta) para después poderla leer y crear nuestra receta.
	- Interpretes: Los lenguajes interpretados lo que hace es coger nuestro código y traducirlo a instrucciones a medida que se va ejecutando el código.  
		- Ej: Vamos hacer una receta pero esta en francés. Si no esta traducida podemos tener un amigo que sepa francés y que vaya traduciendo a medida que vayamos haciendo la receta. (Ese amigo seria un interprete)
	- Hibrido: Los lenguajes interpretados combinan características de los interpretados y los compilados. Pueden utilizar un compilador para que sea mas optimo y tenga mayor rendimiento y utilizar la flexibilidad del interprete para que ejecute el código sin la necesidad de estar compilando todo. La mayoría utilizan la técnica (JIT, Just-In-Time compilación) para compilar partes del código durante la ejecución del programa, lo que mejora la velocidad de ejecución.
#### Chequeo Estático de Tipos  y Chequeo Dinámico de Tipos.

- Chequeo estático de tipos:
	- Definición: En lenguajes como C++, Java o TypeScript, los tipos de datos se verifican durante la **COMPILACION** del programa. Esto significa que cualquier error de tipo se detecta antes de que el programa se ejecute.
	- Ejemplo: En Java, si intentas asignar un valor de tipo `String` a una variable de tipo `int`, el compilador mostrará un error en tiempo de compilación.
- Chequeo Dinámico de tipos:
	- Definición: En lenguajes como JavaScript o Python, los tipos de datos se verifican durante la **EJECUCION DEL PROGRAMA**. Esto significa que los errores de tipo pueden ocurrir durante la ejecución del programa, ya que los tipos se evalúan en tiempo de ejecución.
	- Ejemplo: En JavaScript, si intentas sumar un número y una cadena de texto, no obtendrás un error en tiempo de compilación, pero podría generar un resultado inesperado en tiempo de ejecución si la cadena no se puede convertir a un número.

#### Coerción Implícita y Explícita

- Coerción Implícita:
    - Definición: Es el proceso automático de conversión de un tipo de dato a otro sin intervención del programador.
    - Ejemplo: En JavaScript, cuando se suma un número y una cadena de texto, la cadena se convierte automáticamente a un número si es posible.
    - [[13_creacion_boolean_Js#Coerción booleana en Js (Conversión Implícita)|Ejemplo coerción implícita Booleana ]]
- Coerción Explícita:
    - Definición: Es el proceso de conversión de un tipo de dato a otro utilizando funciones o expresiones específicas en el código.
    - Ejemplo: En JavaScript, se puede utilizar la función `parseInt()` para convertir una cadena de texto a un número entero de manera explícita.
    - [[13_creacion_boolean_Js#Conversión explicita|Ejemplo coerción explicita Booleana ]]