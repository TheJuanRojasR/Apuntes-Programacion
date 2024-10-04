---

---
--- 
### 1. Sobrescribiendo el localStorage

- Estaba teniendo el error de cuando creaba un objeto y lo enviaba al localStorage lo estaba sobrescribiendo y siempre me aparecía solo un producto.
#### Solución 

- La solución para este problema fueron los siguientes pasos:
	1. Estaba enviando un objeto y lo que tenia que enviar es un array de objetos. Teniendo en cuenta que puedo enviar varios productos.
	2. Verificar la existencia del array productos en el localStorage, si el array no existía entonces se creaba una vacío. 
	3. Se inserta el objeto Producto al array. 
	4. Se inserta la lista al localStorage

```JavaScript
// 2. Verificar existencia del array
let productos = JSON.parse(localStorage.getItem('productos')) || [];
// 3. Insertando el objetoProducto al array
productos.push(objetoProducto);
// Enviando el array al localStorage
localStorage.setItem('productos', JSON.stringify(productos));
```

###  JSON.stringify()

-  No sabia muy bien para que se utilizaba y para que servía. El JSON.stringify() sirve para convertir un objeto a un JSON. Esto es debido a que el localStorage solo acepta cadenas de texto JSON.

```JavaScript
localStorage.setItem('productsList', JSON.stringify(productsList));
```

    