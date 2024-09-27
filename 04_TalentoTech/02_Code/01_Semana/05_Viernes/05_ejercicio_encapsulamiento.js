'use strict'

/*
Ejercicio 5: Control de acceso a propiedades con subclases
Crea una clase Person con:

    Propiedades protegidas _name y _age.
    Métodos getOlder() para aumentar la edad. Luego crea una subclase Student que extienda de Person:
    Agrega una propiedad protegida _grade (calificación).
    Métodos improveGrade(amount) y reduceGrade(amount) que incrementen o reduzcan la calificación del estudiante.
*/

class Person {
    constructor (name, age = 0) {
        if (!name || name.length == 0) {
            throw new Error('Nombre no valido. Intente de nuevo.');
        }

        if (age < 0) {
            throw new Error('Edad no valida. Intente de nuevo.');
        }

        this._name = name;
        this._age = age;
    }

    getOlder () {
        this._age += 1;
    }
}

class Student extends Person {
    constructor (name, age, grade = 0) {
        super(name, age);
        if (grade < 0 || grade >= 100) {
            throw new Error('Calificación no válida. Debe estar entre 0 y 100.');
        }

        this._grade = grade;
    }

    improveGrade (amount) {
        if (amount && amount > this._grade && (amount >= 0 && amount <= 100)) {
            this._grade = amount;
        } else {
            console.log('Nota no valida. Inteten de nuevo')
        }
    }

    reduceGrade (amount) {
        if (amount && amount < this._grade && (amount >= 0 && amount <= 100)) {
            this._grade = amount;
        } else {
            console.log('Nota no valida. Inteten de nuevo')
        }
    }
}

const testStudent = new Student('Gloria', 17, 50);
testStudent.improveGrade(100);

testStudent.getOlder();

testStudent.reduceGrade(90);