

1. Un corredor de maratón (distancia 42,195 Km) ha recorrido la carrera en 2
horas 25 minutos. Se desea que calcule la velocidad media en Kilómetros por
minutos ✅
2. Realizar la conversión de una temperatura dada en grados Centígrados a
grados Fahrenheit (Fórmula: F = (9/5) C + 32). ✅
3. Escribir el algoritmo que permite calcular la nota correspondiente al primer
parcial de “análisis” para un estudiante cualquiera. Se debe considerar que hay
dos talleres y un quiz, que en conjunto valen un 30% de la nota y el resto (70%)
corresponde a la nota del examen parcial. ✅
4. Un capital C está situado a un tipo de interés R anual ¿al término de cuántos
años se doblará? ✅

```JavaScript
class InteresCompuesto {
    constructor( valorInicial, valorInteres ) {
        this.valorInicial = valorInicial;
        this.valorInteres = valorInteres;
    }

    interesPorAno () {
        let años = 0;
        let valorActual = this.valorInicial;

        while (true) {

            if ( valorActual < ( this.valorInicial * 2 ) ) {
                valorActual += this.valorInicial * (this.valorInteres / 100);
                años++;
            } else {
                console.log(`Los años para conseguir el doble del capital inicial es ${años}`);
                break;
            }
        }
    }
}

// Creando Instacia
let usuarioUno = new InteresCompuesto(1000, 20);
// Llamando al metodo interesPorAno
usuarioUno.interesPorAno();
```

5. Elaborar un algoritmo que permita ingresar 20 números y muestre todos los
números menores e iguales a 25. ✅

```JavaScript
class AlgoritmoNumeros {
    constructor( listaNumeros ) {
        this.listaNumeros = listaNumeros;
    }

    compararNumerosMenores () {
        let arrayVacio = [];

        this.listaNumeros.forEach(element => {
            if ( element < 25 ) {
                arrayVacio.push(element);
            }
        });

        console.log(arrayVacio);
    }
}

let arrayPrueba = new AlgoritmoNumeros([20, 26, 3, 2, 56, 6, 34, 546, 23 , 54]);

arrayPrueba.compararNumerosMenores();

```
6. Hacer un programa que sume 5 precios de camisas (en dólares) y que luego
muestre el total de la venta en pesos. ✅
7. Hacer un programa que registre el consumo realizado por los clientes de un
restaurante, si el consumo de cada cliente excede 50000 se hará un descuento
del 20%. Se debe mostrar el pago de cada cliente y el total de todos los pagos.
8. Diseñar un algoritmo que permita ingresar la hora, minutos y segundos, y
que calcule la hora en el siguiente segundo ("0<= H <=23", "0<= M <=59"
"0<= S<=59").
9. Dado N, escribir el producto desde 1 hasta N.
10. Realizar un algoritmo que muestre por pantalla la tabla de multiplicar