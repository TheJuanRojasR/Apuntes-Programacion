'use strict'

// 1. Crear una clase TablaMultiplicar que genere la tabla de multiplica de un numero dado.
class TablaMultiplicar {
    constructor(number) {
        this.number = number;
    }

    tablaDeMultiplicar() {
        console.log(`La tabla del ${this.number}`);
        for (let i = 0; i <= 10; i++) {
            console.log(`El numero ${i} * ${this.number} = ${i * this.number}`);
        }
    }
}

// Creando instancia
let tablaMultiplica = new TablaMultiplicar(5);
// Creando metodo
tablaMultiplica.tablaDeMultiplicar();

// 2. Crear una clase Clasificador que clasifique un numero como positivo, nevativo o cero usando condicionales.
class Clasificador {
    constructor(num1) {
        this.num1 = num1;
    }

    // Método para determinar si los números son positivos o negativos
    determinarSigno() {
        const esPositivo1 = this.num1 >= 0 ? "positivo" : "negativo";
        console.log(`El primer número (${this.num1}) es ${esPositivo1}.`);
    }

}

// Creando instacion
let number = new Clasificador(-10);
// Llamando metodo
number.determinarSigno();

// 3. Crear una clase Calculadora que realice operaciones basicas (suma, reata, multiplicacion, division) usando switch case.
class Calculadora {
    constructor(num1, num2, operacion) {
        this.num1 = num1;
        this.num2 = num2;
        this.operacion = operacion;
    }

    operaciones(){
        let operacion = this.operacion.toLocaleLowerCase().trim();

        switch ( operacion ) {
            case 'suma' :
                console.log(`La suma de los numero es: ${ this.num1 + this.num2 }`);
                break;
            case 'resta' :
                console.log(`La resta de los numero es: ${ this.num1 - this.num2 }`);
                break;
            case 'multiplicacion' :
                console.log(`La Multiplicación de los numero es: ${ this.num1 * this.num2 }`);
                break;
            case 'division' :
                console.log(`La División de los numero es: ${ this.num1 / this.num2 }`);
                break;
            default:
                console.log(`No tengo la operación ${operacion}`);
                break;
        }
    }
}

// Creando instacion
let calculadora = new Calculadora(5,6,'Suma');
// Llamando el metodo
calculadora.operaciones();

// 4. Crear una clase Estudiante y una clase GestionEstudiantes para gestionar una lista de 
//    estudiantes y sus notas, aplicando un ciclo for para calcular el promedio.

class Student {
    constructor( name, notes ) {
        this.name = name;
        this.notes = notes;
    }
}

// Creando instancias
let studentOne = new Student('Pedro',[5,4,4,5,3]);
let studentTwo = new Student('Sandra',[2,3,1,3,5]);
let studentThree = new Student('Angie',[3,4,4,3,3]);
let studentFour = new Student('Jesus',[1,4,5,5,5]);

// Creando lista para de estudiantes ManagementStudents
const studentsList = [studentOne, studentTwo, studentThree, studentFour];

class ManagementStudents {
    constructor( studenst ) {
        this.students = studenst;
    }

    promedioNotas () {
        this.students.forEach(student => {
            let notes = student.notes;
            let total = 0;
            
            for (let i = 0; i < notes.length; i++) {
                total += notes[i];
            }

            let average = total / notes.length;

            console.log(`${student.name} tiene un promedio de: ${average.toFixed(2)}`);
        });
    }
}

// Crear instancia
let management = new ManagementStudents(studentsList);
// Llamando el metodo
management.promedioNotas();