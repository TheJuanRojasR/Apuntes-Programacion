/*
// First exercise: Enlace Implícito
// Crea un objeto car con una propiedad brand y un método showBrand que imprima en la consola el valor de brand usando this.
let Car = {
    brand: 'Toyota',
    showBrand: function(){
    console.log(`The brand is ${this.brand}`)
    }
}
Car.showBrand()

// Second exercise: Enlace Explícito con call
// Crea una función displayInfo que imprima en la consola name y age usando this. Luego, crea un objeto person y utiliza call para invocar displayInfo con el contexto de person.
function displayInfo () {
    console.log(`My name is ${this.name}. I'm ${this.age} years old.`)
}
let Person = {
    name: 'Juan',
    age: 25
}
displayInfo.call(Person);

// Third exercise: Enlace Explícito con apply
// Modifica el ejercicio anterior para que displayInfo acepte un argumento adicional country y utiliza apply para pasar el contexto y el argumento a la función.

function displayInfo ( country ) {
    console.log(`My name is ${ this.name }. I'm ${ this.age } years old. I'm from ${ country }`)
}
let Person = {
    name: 'Juan',
    age: 25
}
displayInfo.apply(Person,[ 'Colombia' ]);

// Fourth exercise: Enlace Explícito con bind
// Crea una función greet que imprima un saludo utilizando this.name. Luego, crea un objeto user y utiliza bind para crear una nueva función userGreet que utilice user como su contexto.

function greet () {
    console.log(`Hello! ${ this.name }`);
}
let User = {
    name: 'Maria'
}
const userGreet = greet.bind(User);
userGreet()

// Fifth exercise: Función dentro de un Objeto y this
// Crea un objeto counter con una propiedad count inicializada en 0 y un método increment que aumente count en 1 e imprima el nuevo valor de count. Asegúrate de usar this correctamente dentro del método.

const Counter = {
    count: 0,
    increment: function () {
    const ADD = 1;
    this.count += ADD;
    console.log(this.count)
    } 
}
Counter.increment()

// Sixth exercise: Función Anidada y this
// Crea un objeto calculator con una propiedad number y un método double que use una función interna para duplicar el valor de number y lo imprima. Asegúrate de que la función interna acceda correctamente a this.number.

const Calculator = {
    number: 10,
    double: function () {
  // Las Arraw fuction se ejecutan en el mismo contexto que fueron creadas.
  // No se puede cambiar el contexto a la arraw function.
        const innerDouble = () => {
        const DOUBLE = 2;
        this.number *= DOUBLE;
        console.log(this.number)
        }
    innerDouble()
    }
};
Calculator.double();

//Seventh exercise: Métodos en Objetos
// Crea un objeto player con propiedades name y score, y métodos incrementScore y showScore. El método incrementScore debe aumentar el score en 10 y showScore debe imprimir el nombre del jugador y su puntaje.

const Player = {
    name: 'Luis',
    score: 0,
    incrementScore: function () {
    const INCREMENT_FOR_TEN = 10
    this.score += INCREMENT_FOR_TEN
    },
    showScore: function () {
    console.log(`Name: ${ this.name }, Score: ${ this.score }`)
    }
}
Player.showScore()
Player.incrementScore()
Player.showScore()

// Eighth exercise: Usar this en un Constructor
// Crea una función constructora Person que tenga propiedades name y age. Agrega un método greet al prototipo de Person que imprima un saludo utilizando this.name.

function Person ( name, age ){
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function () {
    console.log(`Hello! I'm ${ this.name }`)
}
const Juan = new Person ( 'Juan', 25 )
Juan.greet()

// Nineth exercise: Problema de this en Funciones Anidadas
// Corrige el siguiente código para que la función interna innerFunction pueda acceder a this.value.

const obj = {
    value: 5,
    outerFunction: function() {
        function innerFunction() {
            console.log(this.value);
        }
        innerFunction.bind(this)();
    }
};
obj.outerFunction(); 
*/

// tenth excercise: this en Callbacks
// Corrige el siguiente código para que this.message se imprima correctamente en el callback.

const obj = {
    message: "Hello, World!",
    showMessage: function() {
        const self = this;
        setTimeout(function() {
            console.log(self.message);
        }, 1000);
    }
};
obj.showMessage();

