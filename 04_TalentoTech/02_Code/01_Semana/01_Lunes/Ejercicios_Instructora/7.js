class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    verificarEdad() {
        if (this.edad < 18) {
            console.log(`${this.nombre} es menor de edad.`);
        } else if (this.edad >= 18 && this.edad < 65) {
            console.log(`${this.nombre} es un adulto.`);
        } else {
            console.log(`${this.nombre} es una persona mayor.`);
        }
    }
}

// Crear instancias de la clase Persona
let persona1 = new Persona("Juan", 16);
let persona2 = new Persona("María", 30);
let persona3 = new Persona("Pedro", 70);

// Verificar la edad de cada persona
persona1.verificarEdad(); // Juan es menor de edad.
persona2.verificarEdad(); // María es un adulto.
persona3.verificarEdad(); // Pedro es una persona mayor.
