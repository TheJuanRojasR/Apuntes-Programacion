## Convención de escritura 🖊️
- Para nombrar carpetas voy a utilizar la convención de escritura **PascalCase con snake_case**.
	- Ej: 📁 Talento_Tech
- Para nombrar archivos voy a utilizar la conveción de escritura **snake_case**.
	- Ej: 📄 primera_clase.js
- Para nombrar variables, funciones, arrays, objetos y clases vamos a utilizar distintas convenciones de escritura :
	- Variables **(camelCase)**: miVariable, contadorTotal, esValido.
	- Constantes **(UPPER_CASE_SNAKE_CASE)**: MAX_COUNT, API_KEY, DEFAULT_VALUE.
	- Funciones **(camelCase)**: calcularSuma, obtenerNombre, validarEntrada.
	- Arrays **(camelCase)**: listaNombres, arrayNumeros, elementosValidos.
	- Objetos **(PascalCase)**: MiObjeto, Usuario, Producto.
	- Clases **(PascalCase)**: ClasePrincipal, Estudiante, ControladorUsuario.
	
## Nombrar Variables, Funciones, Objetos y Clases ✅
- ❌ **NO se puede hacer** :
	- Colocar números (Evitarlo).
	- Comenzar con un número.
	- Palabras reservadas.
	- Nombres de una sola letra (i, j, k) Solo utilizar en bucles.
- ✅ **Se puede hacer** :
	- Nombres descriptivos. (Describen su funcion dentro del codigo)
	- Nombres cortos.
	- En positivo.

### Idioma para nombrar tipos de datos en JS
- Para nombrar los tipos de datos vamos a utilizar el idioma **INGLES**. Esto se hace para ir ganando vocabulario, poderse integrar mas con la comunidad angloparlante y tener un reto mayor a la hora de codificar.

### Nombrando variables del DOM
- Lo mas correcto es utilizar el mismo nombre que tienen en el HTML y CSS (En este caso manejo la metodología BEM).

```html
<header class='header'>
    <h1 class='header__h1'>
    <nav class='header__nav'>
</header>
```

```javascript
const HEADER       = document.querySelector('.header');
const HEADER_TITLE = document.querySelector('.header__h1');
const HEADER_NAV   = document.querySelector('.header__nav');
```

### Nombrando variables Numéricas Js
- Desde ahora ya no se dejan de utilizar magic numbers (Números colocados sin explicación, sin saber porque se eligieron o que representa en el código). Para evitar los magic numbers vamos a utilizar nombres descriptivos según su función y si no cambia el valor lo mas correcto es colocarlo en un const (Palabra clave para declarar variables constantes).

```javascript
let imagenes = ['Imagen1','Imagen2'];
/* Ejemplo : Magic Numbers */ ❌
if (imagenes.length > 5){} // No sabemos que funcion tiene el numero 5.

/* Ejemplo correcto */ ✅
const IMAGENES_MAX = 5;
if (imagenes.lenght > IMAGENES_MAX){} // Codigo mas entendible.
```

### Nombrando variables Booleanas Js
- Para nombrar estas variables booleanas lo mas correcto es que su nombre haga referencia a que elemento va activar o desactivas, y lo mejor es colocarle un verbo.

```javascript
let activado        = true;  ❌
let animacion       = false; ❌

let isImgActive     = true;  ✅  // Es la imagen activa?
let hasImgAnimation = true;  ✅  // Tiene la imagen una animacion?
```

### Nombrando arrays Js
- Para nombrar los arrays (listas) vamos a siempre nómbralos en plural según los elementos que vaya a contener el array, y es opcional el quiere agregarle la palabra lista (list) para aclarar que es un array.

```javascript
let imagen       = []; ❌ // No describe que va contener la lista.
let imagenesList = []: ✅ // Esta en plural y el posfijo "List".
```

### Nombrando objetos Js
- Para nombrar los objetos siempre tienen que estar en singular y utilizando la convención de escritura PascalCase.

```javascript
let pelicula = {}; ❌
let Pelicula = {}: ✅
```

### Nombrando funciones Js
- Para nombrar funciones tratamos siempre de colocarle un verbo y que describa que va a hacer (Una función solo resuelve un problema).

```javascript
let activate     = () => {} ❌
let headerIsActive = () => {} ✅
```

### Nombrando funciones handler (Manejadora) Js
- La función handler (Manejadoras) son funciones que se utilizan para manejar o responder a eventos generados por el usuario o por el navegador.

```javascript
const HEADER_BUTTON = document.querySelecto('.header__button');
HEADER_BUTTON.addEventListener(`click`, () => {
}) ❌ // Evitar hacer esta forma.

// _____________________________________________________________

const HEADER_BUTTON = document.querySelector('.header__button')
const HEADER_BUTTON_HANDLER = () => {};
HEADER_BUTTON.addEventListener(`click`, HEADER_BUTTON_HANDLER); ✅
// De esta manera sintetizamos la funcion aparte y asociarla al click y nos ayuda en el manejo de React Js
```