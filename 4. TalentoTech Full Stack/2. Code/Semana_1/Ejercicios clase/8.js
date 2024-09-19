class Calculadora {
    sumar(num1, num2) {
      return num1 + num2;
    }
  
    restar(num1, num2) {
      return num1 - num2;
    }
  
    multiplicar(num1, num2) {
      return num1 * num2;
    }
  
    dividir(num1, num2) {
      if (num2 === 0) {
        return "No se puede dividir por cero";
      }
      return num1 / num2;
    }
  }
  
  // Crear una instancia de la clase Calculadora
  let calculadora = new Calculadora();
  
  // Pedir al usuario que elija la operación
  let operacion = prompt("Ingrese la operación a realizar (+, -, *, /):");
  
  // Pedir al usuario que ingrese los números
  let num1 = parseFloat(prompt("Ingrese el primer número:"));
  let num2 = parseFloat(prompt("Ingrese el segundo número:"));
  
  // Realizar la operación seleccionada
  let resultado;
  switch (operacion) {
    case "+":
      resultado = calculadora.sumar(num1, num2);
      break;
    case "-":
      resultado = calculadora.restar(num1, num2);
      break;
    case "*":
      resultado = calculadora.multiplicar(num1, num2);
      break;
    case "/":
      resultado = calculadora.dividir(num1, num2);
      break;
    default:
      resultado = "Operación no válida";
  }
  
  // Mostrar el resultado
  alert("El resultado es: " + resultado);
  