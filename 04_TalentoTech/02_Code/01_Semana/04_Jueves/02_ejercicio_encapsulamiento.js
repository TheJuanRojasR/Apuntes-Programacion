'use strict'

/*
Ejercicio 2: Sistema de Puntos en un Videojuego

Descripción: Crea una clase Jugador que represente a un jugador en un videojuego. 
Cada jugador debe tener propiedades privadas como nombre, nivel, y puntos. Implementa métodos para 
incrementar los puntos y subir de nivel cuando los puntos alcanzan un cierto umbral.

Requisitos:
    - Crear una clase Jugador con las propiedades privadas nombre, nivel, y puntos.
    - Implementar un método ganarPuntos(cantidad) que incremente los puntos del jugador. ✅
    - Implementar un método subirNivel() que incremente el nivel del jugador si los puntos alcanzan un umbral definido.
    - Implementar un método mostrarEstado() que muestre el nombre, nivel y puntos del jugador. ✅
    - Crear instancias de Jugador y demostrar cómo los puntos y el nivel cambian usando los métodos públicos.
*/

class Jugador {
    #nombre
    #nivel
    #puntos
    constructor(nombre) {
        this.#nombre = nombre;
        this.#nivel = 1;
        this.#puntos = 0;
    }

    ganarPuntos (cantidad) {
        if (typeof cantidad !== 'number' || cantidad <= 0) {
            throw new Error('El numero ingresado no es valido. Vuelva a intentar.');
        }

        if (cantidad < 0 || cantidad > 50) {
            throw new Error('El numero esta por fuera del rango permitido. Vuelva a intentar.');
        }

        this.#puntos += cantidad;
        this.subirNivel(); // Verificamos si ya puede subir de nivel
    }

    subirNivel () {
        const UMBRAL = 50;

        if (this.#puntos >= UMBRAL) {
            this.#nivel++;
            this.#puntos = 0;
        }
    }

    mostrarEstado () {
        return `Las caracteristicas de jugador son: Nombre: ${this.#nombre}, Nivel: ${this.#nivel}, Puntos: ${this.#puntos}.`
    }
}

// Crear instancia
const jugador1 = new Jugador('Juan');

// Comprobando metodos
console.log(jugador1.mostrarEstado());
jugador1.ganarPuntos(20);
console.log(jugador1.mostrarEstado());
jugador1.ganarPuntos(40);
console.log(jugador1.mostrarEstado());