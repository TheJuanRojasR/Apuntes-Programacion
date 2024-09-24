class Calculadora {
    constructor(numeros) {
      this.numeros = numeros;
    }
  
    sumarElementos() {
      let suma = 0;
      for (let i = 0; i < this.numeros.length; i++) {
        suma += this.numeros[i];
      }
      return suma;
    }
  }
  
  // Ejemplo de uso
  const numeros = [1, 2, 3, 4, 5];
  const calculadora = new Calculadora(numeros);
  console.log(calculadora.sumarElementos()); // Salida: 15
  