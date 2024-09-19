// Definición del objeto persona1
var persona1 = {
    // Propiedad nombre del objeto persona1. quí se está creando un objeto llamado persona1 utilizando la sintaxis de objeto literal en JavaScript. Este objeto tiene una propiedad llamada nombre y un método llamado saludo.
    nombre: "Chris",
    // Método saludo del objeto persona1. Aquí se define el método saludo dentro del objeto persona1. Este método muestra una alerta que contiene el mensaje "¡Hola!, Soy" seguido del valor de la propiedad nombre del objeto persona1. El this hace referencia al objeto en sí mismo (persona1 en este caso).
    saludo: function () {
      console.log("¡Hola!, Soy " + this.nombre + ".");
    },
  };
  // Llamada al método saludo del objeto persona1. Finalmente, se llama al método saludo del objeto persona1. Esto ejecuta el código dentro del método saludo, que muestra una alerta con el mensaje "¡Hola!, Soy Chris.".
  persona1.saludo(); // Esto imprimirá el mensaje en la consola.
  