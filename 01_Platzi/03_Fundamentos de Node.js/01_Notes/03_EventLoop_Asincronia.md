<sub>Fecha: 26 de agosto del 2024 </sub>
<sub> Clase 3/35 </sub>

## EventLoop

- Es un bucle que administra todos los eventos de nuestras aplicaciones de forma **asíncrona**.
	- **Asíncrona**: Quiere decir que no nos bloqueara nuestro programa y se ejecutara aparte. 
	- Podemos imaginarlo que es un bucle que esta haciendo iteraciones infinitas.
	- Este procesara los eventos y si no puede resolverlos los enviara al **Thread Pool** para que no se bloquee el bucle. 
## Event Queue

- Contiene todos los eventos que se generan por nuestro código:
	- Funciones
	- Expresiones 
	- Eventos. etc. 
- Estos eventos quedan en una cola que van pasando uno a uno al **EventLoop** para que los pueda ejecutar.
## Thread Pool

- En este espacio se va a gestionar todo de forma asíncrona. Si los eventos se demoran mucho.
- Para cada evento (Petición) que llega a esta zona lo enviara a un thread (hilo) de nuestro procesador. En el **Thread** se demorara lo que se tenga que demorar y cuando ya se allá ejecutado lo pasara de nuevo al **Thread Pool** -> **Event Loop** -> **Event Queue**.

![[Pasted image 20240826151012.png]]

