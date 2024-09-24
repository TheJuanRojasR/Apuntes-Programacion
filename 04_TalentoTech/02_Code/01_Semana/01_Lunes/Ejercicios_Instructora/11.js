class Mascota {
    constructor(tipo) {
      this.tipo = tipo;
    }
  
    describir() {
      switch (this.tipo) {
        case "lagarto":
          return "Tengo un lagarto";
        case "perro":
          return "Tengo un perro";
        case "gato":
          return "Tengo un gato";
        case "serpiente":
          return "Tengo una serpiente";
        case "loro":
          return "Tengo un loro";
        default:
          return "No tengo mascota";
      }
    }
  }
  
  // Ejemplo de uso
  const miMascota = new Mascota("perro");
  console.log(miMascota.describir()); // Salida: "Tengo un perro"
  