<sub>Fecha: 26 de agosto del 2024 </sub>
<sub> Clase 6/35 </sub>

## Herramientas de utilidad

### --watch

- Este es un comando de node.js que hace lo mismo que Nodemon. Lo bueno es que no tenernos que descargar nada y solo escribir el comando

```bash
node --watch archivo.js
```
### Nodemon

- Esta es una herramienta que reinicia el servidor automáticamente cada vez que se hace un cambio en los archivos. Esta nos ayuda a evitar esta escribiendo Node a cada rato para iniciar el servidor. 
- Este se utiliza cuando estamos desarrollando el código. 

```bash
# Instalar nodemon en bash
npm i nodemon -g

# Iniciando nodemon con un archivo
nodemon archivo.js
```
### PM2

- Es un administrador de proceso de Node.js que se utiliza principalmente para gestionar las aplicaciones puestas en producción. Esta se enfoca en el despliegue, la gestión y el monitoreo de la aplicación. 
- Si lo utilizamos cuando estemos desarrollando nos va a causar mas problemas que soluciones. 

```bash
# Instalar pm2 en bash
npm i pm2 -g

# Iniciando pm2 nombre de la aplicacion
pm2 star archivo.js
```

