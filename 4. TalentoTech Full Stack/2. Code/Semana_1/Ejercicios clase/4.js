//Declaración de la clase
class Calculadora {
    //Luego definimos el constructor dentro de la clase y este a su vez,  es un método especial que se llama automáticamente cuando se crea una nueva instancia de una clase. El constructor se utiliza para inicializar las propiedades de la clase Calculadora.
    constructor(num1, num2) {
      //El constructor toma dos parámetros, num1 y num2, que representan los dos números que queremos sumar.La palabra clave this se refiere al objeto que se está creando actualmente, es decir, la instancia de la clase Calculadora.
      this.num1 = num1;
      this.num2 = num2;
    }
    sumar() {
      return this.num1 + this.num2;
    }
  }
  // Crear una instancia de la clase Calculadora
  let calculadora = new Calculadora(5, 3);
  // Llamar al método sumar() para sumar los números
  let resultado = calculadora.sumar();
  console.log("La suma es:", resultado); 
  