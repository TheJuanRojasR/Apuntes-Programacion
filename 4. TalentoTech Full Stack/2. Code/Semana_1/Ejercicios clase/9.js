class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    puedeTenerLicencia() {
        return this.edad >= 18;
    }
}


const persona1 = new Persona("Juan", 20);
const persona2 = new Persona("Ana", 17);

console.log(`${persona1.nombre} ${persona1.puedeTenerLicencia() ? 'puede' : 'no puede'} tener licencia de conducción.`);
console.log(`${persona2.nombre} ${persona2.puedeTenerLicencia() ? 'puede' : 'no puede'} tener licencia de conducción.`);