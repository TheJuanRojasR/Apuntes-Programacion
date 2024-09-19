'use strict';

// Hacer el ejemplo con la seleccion colombia 
function footballPlayer(name, age, position, nationality) {
    (this.isCaptain = false),
        (this.name = name),
        (this.age = age),
        (this.position = position),
        (this.nationality = nationality),
        (this.infoPlayer = function () {
            console.log(`Football Player Information:
        Name: ${this.name}
        Age: ${this.age}
        Position: ${this.position}
        Nationality: ${this.nationality}
        ${this.isCaptain ? "Captain: Yes" : "Captain: No"}`);
        });
    this.becomeCaptain = function () {
        this.isCaptain = true;
        console.log(`Is Captain`);
    };
}

let playerOne = new footballPlayer("Falcao", 30, "Delantero", "Colombia");

playerOne.infoPlayer();
playerOne.becomeCaptain();
playerOne.infoPlayer();

/*
La linea 16 es un operador terniario, es una forma de hacer un if else en una sola linea.
condición ? expresión_si_verdadero : expresión_si_falso
Si this.isCaptain es verdadero entonces imprime "Captain: Yes" de lo contrario imprime "Captain: No"
*/


/*
// Hacer el ejemplo con las chicas superpoderosas
function Powerpuffgirl(name, color, superpower) {
    this.name = name,
        this.color = color,
        this.superpower = superpower,
        this.isLeader = false
    this.displayInfo = function () {
        console.log(`Powerpull Girl Information:
        Name: ${this.name}
        Color: ${this.color}
        Superpower: ${this.superpower}
        ${this.isLeader ? 'Leader: Yes' : 'Leader: No'}
    `)
        this.becomeLeader = function () {
            this.isLeader = true;
            console.log(`${this.name} has become the leader the Powerpuff Girls`)
        }
    }
}

const blossom = new Powerpuffgirl('Blossom', 'Pink', 'Ice Breath')
const buttercup = new Powerpuffgirl('Buttercup', 'Green', 'Super Strength')
const bubbles = new Powerpuffgirl('Bubbles', 'Blue', 'Flight')

blossom.displayInfo()
buttercup.displayInfo()

blossom.becomeLeader()

blossom.displayInfo()
buttercup.displayInfo()
*/

