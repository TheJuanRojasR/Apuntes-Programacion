'use strict'

/*
Ejercicio 1: Gestión de un Inventario de Productos

Descripción: Crea una clase Producto que encapsule la información sobre productos en un inventario. 
Cada producto debe tener propiedades privadas como nombre, precio, y cantidad. Implementa métodos para 
actualizar el precio y la cantidad, y otro método para mostrar la información completa del producto.

Requisitos:
    - Crear una clase Producto con las propiedades privadas nombre, precio, y cantidad.
    - Implementar métodos públicos actualizarPrecio(nuevoPrecio) y actualizarCantidad(nuevaCantidad) para modificar 
    el precio y la cantidad.
    - Implementar un método mostrarInformacion() que devuelva una cadena con todos los detalles del producto.
    - Crear instancias de Producto y demostrar cómo se pueden modificar las propiedades usando los métodos públicos.
*/

class Producto {
    #nombre
    #precio
    #cantidad

    constructor(nombre, precio, cantidad) {
        this.#nombre = nombre;
        this.#precio = precio;
        this.#cantidad = cantidad;
    }

    // Set = ajusta, Get = mostrar 
    actualizarPrecio (nuevoPrecio) {
        this.#precio = nuevoPrecio;
        console.log(this.#precio);
    }

    actualizarCantidad (nuevaCantidad) {
        this.#cantidad = nuevaCantidad;
        console.log(this.#cantidad);
    }

    mostrarInformacion () {
        return `Informacion del equipo: Nombre: ${this.#nombre}, Precio: ${this.#precio}, Cantidad: ${this.#cantidad}`
    }
    
}

let pruebaProducto = new Producto('Pantalon', 3000, 50);

console.log(pruebaProducto.mostrarInformacion());
pruebaProducto.actualizarPrecio(2000);
pruebaProducto.actualizarCantidad(10);
console.log(pruebaProducto.mostrarInformacion());
