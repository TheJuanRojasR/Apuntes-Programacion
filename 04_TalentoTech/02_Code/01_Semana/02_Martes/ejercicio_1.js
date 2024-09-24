'use strict'

class Person {
    constructor(name) {
        this.name = name;
    }

    transport( meansOfTransport ) {
        meansOfTransport = meansOfTransport.toLocaleLowerCase().trim();

        if (meansOfTransport === 'tren' || meansOfTransport === 'autobus') {
            return 'Recuerda llevar dinero para el tiquete.';
        } else if (meansOfTransport === 'bicicleta' || meansOfTransport === 'coche') {
            return 'Recuerda seguir las recomendaciones en carretera.';
        } else {
            return `No sé cuál es el medio de transporte '${meansOfTransport}'`;
        }
    }
}

let person = new Person('Juan');

console.log(person.transport('tren'));        
console.log(person.transport('autobus'));     
console.log(person.transport('bicicleta'));   
console.log(person.transport('coche'));       
console.log(person.transport('asdfasdf'));    
