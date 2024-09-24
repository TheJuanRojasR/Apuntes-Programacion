
### Variable global

- En el navegador se utiliza la variable global `window`;
- En node.js se utiliza la variable `global`.
- `NOTA: console.log esta dentro de la variable global **globalThis** y basicamente todo sale de esta.`

>[!note] Importante 
>- Por buenas practicas vamos a utilizar la variable global `globalThis` tanto en el navegador como en node.js #BuenasPracticas

### Sistema de módulos COMMONJS

- En node.js vamos a utilizar un patrón de diseño `module`. Se trata de separar el código en diferentes ficheros y podemos importar y exportar el código y poder reutilizarlo.

```JavaScript
// Metodo CommonJs
'use strict'

function sum ( a, b ) {
    return a + b;
}
// CommonJS Module Export
module.exports = {
    sum
}
//_______________________________________________________________
'use strict'
// CoomnJS Require Module

const { sum } = require('./sum.js');
console.log(sum(1,3));
```