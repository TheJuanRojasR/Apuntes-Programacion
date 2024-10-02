<sub> Fecha: 23, 25, 26, 27 de septiembre del 2024 </sub>
### Resumen

>[!info]  Buena practica
>Trata de no usar `innerHTML` para evitar problemas de seguridad como ataques XSS. 
#### DOM (Document Object Model)

- Es una interfaz de programación que representa la estructura del documento HTML o XML en forma de árbol. Es una forma estructurada de ver y manipular el contenido de la pagina web.
- Cada parte del árbol es un nodo y cada nodo representa una etiqueta HTML. Esto permite acceder y modificar el contendió, la estructura, y el estilo de la pagina.  
##### COMPONENTES DEL DOM

- `Nodo`: Un nodo es un elemento HTML o punto de conexión. Hay diferentes tipos de nodos:
	- Nodos de elementos: Representa etiquetas HTML, como `<div>`, `<h1>`, `<p>`, etc.
	- Nodos de texto: Representa el contenido dentro de un elemento.
	- Nodos de atributo: Representa los atributos de un elemento HTML, `class="header"`.
	- Nodos de comentarios: Representa los comentarios en HTML, (`<!-- comentario -->`).
	- (Son 12 nodos en total)
##### ESTRUCTURA DEL DOM

- El DOM se organiza en una estructura jerárquica en forma de árbol:
	- El nodo raíz es el `<html>`.
	- El nodo hijo de `<html>` son `<head>` y `<body>`.
	- Dentro de `<body>`, puedes tener nodos como `<div>`, `<h1>`, `<p>`, etc.
	- Y dentro de estos elementos, pueden haber otros nodos (subárboles).
##### ACCEDER AL DOM

###### 1. SELECCIONAR ELEMENTOS

- Podemos utilizar distintos métodos para poder seleccionar un elemento del DOM. Los siguientes son algunos de los mas utilizados
	- `document.getElementById('id')`: Selecciona un elemento por su ID.
	- `document.querySelector('selector')`: Selecciona el primer elemento que coincida con el selector CSS.
	- `document.querySelectorAll('selector')`: Selecciona todos los elementos que coincidan con el selector CSS y devuelve una lista.
###### 2. MODIFICAR CONTENIDO O ATRIBUTOS

- Se pueden cambiar el contenido y los atributos de un elemento. Estos son algunos métodos:
  (teniendo en cuenta que element es el elemento seleccionado)
	- `element.textContent`: Cambia el texto de un elemento.
	- `element.innerHTML`: Cambia el HTML dentro de un elemento.
	- `element.setAttribute('atributo', 'valor')`: Cambia el valor de un atributo.
###### 3. CREAR O ELIMINAR ELEMENTOS

- Se puede crear o eliminar elementos del DOM:
	- `document.createElement('tag')`: Crea un nuevo elemento.
	- `parentElement.appendChild(newElement)`: Añade un nuevo elemento al final del elemento padre.
	- `parentElement.removeChild(childElement)`: Elimina un elemento hijo.
##### EVENTOS EN EL DOM

- Los eventos ayudan a que la pagina responda a la interacción de los usuarios, como cuando dan clic, oprimen una tecla, mueven el mouse, etc. Estos eventos los podemos escuchar con `addEventListener`:

```JavaScript
button.addEventListener('click', () => {
  alert('¡Haz hecho clic en el boton!');
});
```

