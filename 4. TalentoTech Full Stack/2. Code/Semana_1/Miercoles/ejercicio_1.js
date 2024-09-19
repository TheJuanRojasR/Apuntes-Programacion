'use strict'

//1. Un corredor de maratón (distancia 42,195 Km) ha recorrido la carrera en 2
// horas 25 minutos. Se desea que calcule la velocidad media en Kilómetros por
// minutos

// Creando clase 
class MarathonRunner  {
    constructor (distanceInKm, hours, minutes) {
        this.distanceInKm = distanceInKm;
        this.hours = hours;
        this.minutes = minutes;
    }

    // Creando el metodo para calcular la velocidad media
    calculateAverageSpeed () {
        let totalMinutes  = (this.hours*60) + this.minutes;
        let averageSpeedInKmPerMinute = this.distanceInKm/ totalMinutes ;
        return averageSpeedInKmPerMinute;
    }
}

// Creando instancia
let runner = new MarathonRunner (42.195, 2, 25);
// Llamando al metodo 
console.log(`La velocidad promedio del corredor es: ${runner.calculateAverageSpeed()} km/min`);

/*
2. Realizar la conversión de una temperatura dada en grados Centígrados a
grados Fahrenheit (Fórmula: F = (9/5) C + 32).
*/

// Creando clase
class Temperature {
    constructor (celsius) {
        this.celsius = celsius; 
    }

    // Creanto metodo para la conversion de Celsius a Fahrenheit
    convertToFahrenheit() {
        // las convierto en constantes para que no sean numeros magicos
        const CONVERSION_FACTOR = 9 / 5; // Constante para la conversión
        const OFF_SET = 32;              // Constante de desplazamiento
        let fahrenheit = (CONVERSION_FACTOR * this.celsius) + OFF_SET;
        return fahrenheit;
    }
}

// Creando instancia
let temperature = new Temperature(50);
// Llamando al metodo
console.log(`${temperature.celsius}°C son ${temperature.convertToFahrenheit()}°F`);


/*
3. Escribir el algoritmo que permite calcular la nota correspondiente al primer
parcial de “análisis” para un estudiante cualquiera. Se debe considerar que hay
dos talleres y un quiz, que en conjunto valen un 30% de la nota y el resto (70%)
corresponde a la nota del examen parcial.
*/

// Creando clase
class FinalGrade {
    constructor (partialExam, workshop1, workshop2, quiz) {
        this.partialExam = partialExam;
        this.workshop1 = workshop1;
        this.workshop2 = workshop2;
        this.quiz = quiz;
    }

    // Creando metodo para calcular la nota final
    calculateFinalGrade() {
        // Los calculos se hacen por separado para tener mayor legibilidad
        let continuousAssessment = (this.workshop1 + this.workshop2 + this.quiz) / 3 * 0.3;
        let partialExamWeight = this.partialExam * 0.7;
        let finalResult = continuousAssessment + partialExamWeight;
        console.log(`La nota final es: ${finalResult}`);
    }
}

// Creando instancia 
let student = new FinalGrade(5, 7, 4, 5);
// Llamando al metodo
student.calculateFinalGrade();


/*
4. Un capital C está situado a un tipo de interés R anual ¿al término de cuántos
años se doblará?

Datos de entrada
    valor inicial, valor de interes
Datos salida
    años en duplicarse el valor inical 
*/

// Creando clase
class CompoundInterest {
    constructor (initialCapital, interestRate) {
        this.initialCapital = initialCapital;
        this.interestRate = interestRate;
    }

    // Creando metodo para saber los años en doplicarse el dinero
    yearsToDouble() {
        let years = 0;
        let currentCapital = this.initialCapital;

        while (currentCapital < this.initialCapital * 2) {
            // Interés compuesto: se suma el interes al valor acumulado
            currentCapital += currentCapital * (this.interestRate / 100);
            years++;
        }

        console.log(`Los años para conseguir el doble del capital inicial es ${years}.`);
    }
}

// Creando instancia
let userOne = new CompoundInterest(1000, 20);
// Llamando al metodo
userOne.yearsToDouble();

/*
5. Elaborar un algoritmo que permita ingresar 20 números y muestre todos los
números menores e iguales a 25.

Datos de entrada
    opciones 1: []
    opciones 2: valores individuales 

Datos de salida
    opcion 1 : devolver numeros individuales
    opcion 2 : devolver array de numeros
*/

// Creando Clase
class NumberAlgorithm {
    constructor (numberList) {
        this.numberList = numberList;
    }

    // Método con nombre más claro y usando filter para filtrar los números
    getNumbersLessThanOrEqualTo25() {
        let filteredNumbers = this.numberList.filter(number => number <= 25);
        return filteredNumbers;
    }
}

// Creando instancia
let testArray = new NumberAlgorithm([20, 26, 3, 2, 56, 6, 34, 546, 23, 54, 200, 1, 50, 13, 49, 53, 4, 5, 8, 10]);
// // Llamando al metodo
console.log(testArray.getNumbersLessThanOrEqualTo25());

/* 
6. Hacer un programa que sume 5 precios de camisas (en dólares) y que luego
muestre el total de la venta en pesos.

Datos de entrada
    Opcion 1: Array con todos los precios ✅
    Opcion 2: Ingresar numeros individuales 

Procedimiento
    1. Sumar los elementos del array
    2. Crear constante con el precio actual del dolar a cop
    3. Formula: multiplicar la suma del array * la constante
    4. Devolver el resultado de la formula

Datos Salida
    Variable con el precio en COP
*/

class Trade {
    constructor (shirtsPriceList) {
        this.shirtsPriceList = shirtsPriceList;
    }

    convertToPesos () {
        const COP_PER_DOLLAR = 4177.54;
        let shirtsPriceTotal = this.shirtsPriceList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        let totalInPesos = shirtsPriceTotal * COP_PER_DOLLAR;
        return totalInPesos;
    }
}

// Creando instancia
let testTrade = new Trade([20, 10, 50, 40, 60]);
// Llamando al metodo
console.log(`El precio es: ${testTrade.convertToPesos()} COP`);

/* 
7. Hacer un programa que registre el consumo realizado por los clientes de un
restaurante, si el consumo de cada cliente excede 50000 se hará un descuento

Datos de entada
    Array que contiene todos los precios de lo consumido por el cliente
    
Prodimiento

Datos de salida

*/