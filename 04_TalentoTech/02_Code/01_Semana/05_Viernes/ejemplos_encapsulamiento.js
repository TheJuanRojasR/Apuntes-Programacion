'use strict'

/*
1. publicas: propiedad
2. privadas: #propiedad
3. protegidas: _propiedad
*/

// 1. Propidades publicas

class PersonPublic {
    constructor (name, occupation) {
        this.name = name;
        this.occupation = occupation;
    }
}

// Las propieades publicas se pueden ver y ser pueden modificar directamente sin restricciones.
const testPersonPublic = new PersonPublic('Patricio', 'Teacher');
console.log('Ejemplo publico: ' + testPersonPublic.name);
testPersonPublic.name = 'Julian';
console.log('Ejemplo publico: ' + testPersonPublic.name);

// 2. Propiedades privadas

class PersonPrivate {

    // Declarando propiedades protegidas
    #name
    #occupation

    constructor (name, occupation) {
        this.#name = name;
        this.#occupation = occupation;
    }

    // Mostrar la propiedad name
    getName () {
        return this.#name;
    }

    // Modificar la propiedad name
    setName (newName) {
        this.#name = newName;
    }
}

const testPersonPrivate = new PersonPrivate('Patricio', 'Teacher');
console.log('Tratando de ingresar sin el metodo getName: ' + testPersonPrivate.name);
console.log('Llamando el metodo getName: ' + testPersonPrivate.getName());
testPersonPrivate.setName('Julian');
console.log('Nuevo nombre: ' + testPersonPrivate.getName());

// 3. Propiedades protegidas

class PersonProtected {
    constructor (name, occupation) {
        // Propiedades protegidas (Solo por convencion)
        this._name = name;
        this._occupation = occupation;
    }

    // Mostrar la propiedad name
    getName () {
        return this._name;
    }

    // Modificar la propiedad name
    setName (newName) {
        this._name = newName; // Se agrega una propiedad publica
    }
}

class StudentProtected extends PersonProtected {
    constructor (name, occupation, identification ) {
        super (name, occupation);
        this.identification = identification;
    }

    getDetailsStudent () {
        return `El estudiando: ${this._name}, ${this._occupation}, ${this.identification}.`
    }
}

const testStudentProtected = new StudentProtected('Bryan', 'Student','123456789');
// Se puede acceder a la propiedad pero no se tiene que hacer.
console.log('Ejemplo de propiedad protegida ingresando de forma global (mala forma): ' + testStudentProtected._name);
// Para acceder a ella tenemos que utilizar el metodo indicado.
console.log(testStudentProtected.getDetailsStudent());
// Solo pueden ser modificadas dentro de la clase o subclases.

// Ejemplo sobre getters and setters

class Person {
    #name
    constructor(name) {
        this.#name = name;
    }

    get name () {
        return this.#name;
    }

    set name (newName) {
        if (newName.length > 4) {
            this.#name = newName;
        } else {
            console.log(`Nombre no permitido`);
        }
    }
}

const testPerson = new Person('Tulio');
console.log(testPerson.name); // Utilizando meotodo get name
testPerson.name = 'Carlos';   // Utilizando metodo set name
console.log(testPerson.name); 
testPerson.name = 'Tai';
console.log(testPerson.name); 





