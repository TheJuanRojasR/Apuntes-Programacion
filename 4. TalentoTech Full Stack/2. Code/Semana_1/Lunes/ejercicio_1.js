'use strict'

let Persona = {
    nombre: ['Bob', 'Smith'],
    id: 123456789,
    edad: 31,
    genero: 'Masculino',
    intereses: ['Musica', 'Esqui']
};

console.log(Persona.nombre);
console.log(Persona.id);
console.log(Persona.edad);
console.log(Persona.genero);
console.log(Persona.intereses);

// Reto: Realizar un ejercio similar al visto en la clase donde se aplique la POO

class Car {
    constructor( brand, model, color ) {
        this.brand = brand;
        this.model = model;
        this.color = color;
    }

    accelerate () {
        return `The car ${this.brand} ${this.model} accelerated.`;
    }
}

let car = new Car('Toyota', 'Yaris', 'Black')

console.log(car.brand);
console.log(car.model);
console.log(car.color);
console.log(car.accelerate())