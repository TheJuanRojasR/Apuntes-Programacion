'use strict'

function sum ( a, b ) {
    return a + b;
}

// Esta es la forma clasica (Antigua de exportar un modulo).
// module.exports = sum;

// Para forzar que de ambos lados se llame igual la funcion vamos a utilizar esta forma.
// Vamos a exportar un objeto. CoomonJs Module Export
module.exports = {
    sum
}