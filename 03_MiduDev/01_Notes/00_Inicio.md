
## Node

- Algunas características
    - Su arquitectura es orientada a eventos. 
    - Utiliza el motor V8 (El mismo que utiliza Chrome) pero en distinto entorno.
    - Es monohilo

- Porque utilizar node.js
    - Por la demanda del mercado.
    - Es una de las partes del famoso MERN (Mongo, Express, React, Node.js).
    - Crear aplicaciones web, scraping, APIs.
    - Comunidad grande.
    - Rápido, escalable, y fácil de desplegar. 

- Historia
    - Creado en el 2009
    - Creado por Ryan Dahl
    - Lo crearon para tener una alternativa a Apache

### Descargar Node

- Primera alternativa
    - Descargar desde node. Siempre descargar el LTS (Esta es la versión estable).
- Segunda alternativa
    - Descargar Rust
    - Descargar fnm (Fast and simple Node.js versión) desde Rust. 

### Ejecutar un archivo

- Para ejecutar un archivo tenemos que:
    - Colocar node + nombre del archivo

- Variable global
    - En el navegador se utiliza la variable global `window`;
    - En node.js se utiliza la variable `global`.
    - Pero por buenas practicas vamos a utilizar la variable global `globalThis`.
    - NOTA: console.log esta dentro de la variable global `globalThis` y basicamente todo sale de esta.

    - En node.js vamos a utilizar un patron de diseño `module`. Se trata de separar el codigo en diferentes ficheros y podemos importar y exportar el codigo y porder reutilizarlo.