'use strict'

// Llamar (importar) el modulo  que queremos.
import hello from "./08_modulo_exportado.js" 

hello();

/* 
Modulos: Son bloques de codigos escritos en otros archivos. Si lo queremos utilizar
ent otros archivos lo que tenemos que hacer es exportarlos y en el archivo que querramos
que sirva lo tendremos que importar. Esto nos ayuda a mejorar nuestro codigo, separarlo y 
mantenerlo modular.

NOTA: JavaScript vanilla quiere decir que es JavaScrip puro.
1. Se tiene que crear en el package.json despues de autor y licencia un nuevo script.
Este sera "type":"module" para que pueda aceptar los modulos y no mande error.
2. Mirar en el from del import que el archivo tenga su extension. Si no la tiene no sirve y LISTO.

Solo funciona esto si tenemos node.js instalado del caso contrario podemos usar require()
*/