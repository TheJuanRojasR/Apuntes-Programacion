<sub>Fecha: 20 de agosto del 2024 </sub>
<sub> Clase 7/35 </sub>
## Resumen

### Desestructuración en arrays

- Nos permite sacar los elementos de un array y asignarlos a un variable de una forma sencilla y fácil de entender. 

```JavaScript
const fruits = ['Apple', 'Banana'];
// Destructurando
let [a,b] = fruits;
console.log(a,b); // Apple Banana
```

`Podemos ver como se guardan los valores del array en las variables suministradas.`
### Desestructuración en objetos

- Mismo principio que el anterior. Va guardar el valor de los parámetros en las variables que le pongamos. 

```JavaScript
const user = { username: 'Oscar', age: 34 };
// Destructurando los valores del objeto
let { username, age } = user;
console.log(username,age); // 'Oscar' 34
```

`Podemos ver como se guardan los valores del array en las variables suministradas.`