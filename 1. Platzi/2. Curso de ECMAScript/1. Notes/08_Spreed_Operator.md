<sub>Fecha: 20 de agosto del 2024 </sub>
<sub> Clase 8/35 </sub>
## Resumen

- El `Spread Operator` o `Operador de propagacion` nos ayuda a esparce la información hacia otro elemento mucho mas fácil.

```JavaScript
let person = { nameuser : 'oscar', age : 24 };
let country = 'MX';

// Quiero crear una variable data donde se van a reunir los dos elmentos anteriores
// ...person trae los elementos y los "esparse" dentro de data.

let data = { ...person, country };
console.log(data);

// Parametros rest. Es una logica
// Lo que hace es guardar todos los elementos ingresados despues del primer numero.
function suma ( num, ...values ) {
    console.log(values);
    console.log(num + values[0]);
    return num = values[0];
}
suma(1, 1, 2, 3);
```

`Nota: No crear funciones con mas de 3 elementos en generarl porque se vuelve muy confusa.`
