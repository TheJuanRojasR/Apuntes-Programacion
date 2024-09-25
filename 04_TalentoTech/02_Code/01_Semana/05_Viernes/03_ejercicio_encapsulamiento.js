'use strict'

/*
Ejercicio 3: Control de acceso con propiedades protegidas
Crea una clase Car con las siguientes características:

    Una propiedad protegida _speed que representa la velocidad actual del coche.
    Métodos accelerate(amount) y brake(amount) que aumenten o disminuyan la velocidad del coche.
    Un getter speed que permita consultar la velocidad sin modificarla.
    Asegúrate de que la velocidad no pueda ser negativa usando validaciones en los setters o métodos.

Pregunta
    Al crear cualquier metodo que me modifica el valor de una propiedad se vuelve en un setter?
Respuesta
    Si un metodo modifica una propiedad no necesariamente es un set. Los set son funciones especiales
    que permiter asignar un valor a una propiedad pero de una forma controlada.
*/

class Car {
    constructor (speed = 0) {
        if (speed < 0) {
            throw new Error('No puede introducir velocidades negativas.');
        }
        this._speed = speed; // Propiedad protegida
    }

    get speed () {
        return `La velocidad del carro es ${this._speed} k/h.`
    }

    accelerate (amount) {
        if (amount > 0) {
            this._speed += amount;
        } else {
            console.log('Velocidad no valida. Vuelva a intentar.');
        }
    }

    brake (amount) {
        if (amount > 0 && amount <= this._speed) {
            this._speed -= amount;
        } else if (amount > this._speed) {
            console.log('No puedes frenar mas de lo que la velocidad actual permite.');
        } else {
            console.log('Velocidad no valida. Vuelva a intentar.');
        }
    }
}

// Creando instancia
const testCar = new Car(120);
console.log(testCar.speed);
testCar.accelerate(-20);
testCar.accelerate(0);
testCar.accelerate(20);
console.log(testCar.speed);
testCar.brake(-20);
testCar.brake(0);
testCar.brake(200);
testCar.brake(40);
console.log(testCar.speed);