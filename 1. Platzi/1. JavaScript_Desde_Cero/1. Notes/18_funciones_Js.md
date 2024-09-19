<sub> Fecha: 5 de junio del 2024 </sub>
<sub> Clase 18/79 </sub>
## Resumen
### Tema : Anatomía de una función 

- Definición: Fragmentos de código que nos permite escribir funcionalidades genéricas para poder utilizarlas una y otra vez.
- Metáfora: Son como piezas de lego porque podemos arma muchos elementos mas complejos con las mismas funciones. 
#### Entender que necesitamos para crear una función

1. Entender lo que necesitamos. (El que quiero que me resuelva la función) 
   OUTPUT (Salida)
2. Que datos tengo. (Los datos que tengo o que requiere la función para servir)
   INPUT (Entrada)
#### Partes de una función 

```JavaScript
function suma (a, b){
	return a + b;
}
suma(3,5)
```
   
- Palabra Clave (function): Palabra clave para decirle al programa que estamos creando una función.
- Nombre de la función (suma): Nombre para poder identificar la función (Utilizar siempre camelCase)
- Parámetros ((a, b)): Estas son las entradas a nuestro código. Son opcionales, no siempre se requieren de parámetros. 
- Llaves ( {} ): Dentro de las llaves vamos a poner el código para solucionar el problema.
- Cuerpo de función ( return a + b; ): El código creado dentro de las llaves.
- Llamado ( suma(3,5) ): Cuando creamos una función tenemos que llamarla para que se pueda ejecutar. Para poder llamar una función lo que tenemos que hacer es poder el nombre de la función seguido de paréntesis. Si tenemos parámetros lo agregamos (Se pasan a llamar Argumentos)
#### Tipos de funciones

1. **Funciones Declarativas (o con nombre)**
2. **Funciones Expresivas (o anónimas)**
3. **Funciones Flecha**
4. **Funciones Constructoras**
5. **Funciones de Orden Superior (Higher-Order Functions)**
6. **Funciones Recursivas**
7. **Funciones Anidadas (Nested Functions)**
8. **Métodos de Objeto**
9. **Funciones Asincrónicas**
10. **Funciones Puras**

