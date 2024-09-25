'use strict'

/*
Ejercicio 4: Clase con múltiples propiedades protegidas y métodos públicos
Crea una clase Employee con:

    Propiedades protegidas _name, _position y _salary.
    Métodos públicos promote(newPosition) y increaseSalary(amount) para modificar el puesto y el salario, respectivamente.
    Un getter info que retorne un string con toda la información del empleado (nombre, puesto y salario).
*/

class Employee {
    constructor (name, position, salary = 0) {
        if (!name || name.length == 0) {
            throw new Error('Nombre no valido. Intente de nuevo.');
        }

        if (!position || position.length == 0) {
            throw new Error('Posicion no valido. Intente de nuevo.');
        }

        if (salary < 0) {
            throw new Error('Salario no valido. Intente de nuevo.');
        }

        this._name = name;
        this._position = position;
        this._salary = salary;
    }

    get info () {
        return `Informacion del empleado: Nombre: ${this._name}, Posicion: ${this._position}, Salario: ${this._salary}.`
    }

    promote (newPosition) {
        if (newPosition && newPosition.length > 0) {
            this._position = newPosition;
        } else {
            console.log('Posicion no valida. Inteten de nuevo');
        }
    }

    increaseSalary (amount) {
        if (amount && amount > 0 ) {
            this._salary += amount;
        } else {
            console.log('Salario no valido. Inteten de nuevo');
        }
    }
}

const testEmployee = new Employee('Juan', 'Ejecutivo', 1000);
console.log(testEmployee.info);

testEmployee.promote('Gerente');
console.log(testEmployee.info);

testEmployee.increaseSalary(500);
console.log(testEmployee.info);
