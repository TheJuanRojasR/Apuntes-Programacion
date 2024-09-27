'use strict';

/*
Regla de 3 pasos cuando se manipule el DOM (Siempre hacerla) att: Juan Rojas
    1. Referenciar los elementos del DOM.
    2. Crear funciones.
    3. Asignalar las funciones a los eventos.
*/

// Esperar a que el DOM esté cargado.
document.addEventListener('DOMContentLoaded', () => {

    // 1. Referencias a los elementos del DOM.
    const EXAMPLE_IMAGE = document.getElementById('example-imagen');
    const GET_SRC_BUTTON = document.getElementById('get-src-button');
    const SET_ALT_BUTTON = document.getElementById('set-alt-button');
    const HAS_ALT_BUTTON = document.getElementById('has-alt-button');
    const REM_ALT_BUTTON = document.getElementById('rem-alt-button');

    // 2. Funcion para obtener el valor del atributo 'src'.
    const getSrc = () => {
        const IMAGE_SRC = EXAMPLE_IMAGE.getAttribute('src');
        alert(`El valor del atributo 'src' es: ${IMAGE_SRC}`);
    };

    // 2. Funcion para establecer el atributo 'alt'.
    const setAlt = () => {
        EXAMPLE_IMAGE.setAttribute('alt', 'Alt modificado con setAttribute.');
        alert(`El valor actualizado del atributo 'alt' es: ${EXAMPLE_IMAGE.getAttribute('alt')}`);
    };

    // 2. Funcion para verificar la existencia del atributo 'alt'.
    const hasAlt = () => {
        const IMAGE_HAS_ALT = EXAMPLE_IMAGE.hasAttribute('alt');
        const message = IMAGE_HAS_ALT ? "La imagen tiene el atributo 'alt'." : "La imagen NO tiene el atributo 'alt'.";
        alert(message);
    };

    // 2. Funcion para eliminar el atributo 'alt'.
    const removeAlt = () => {
        if (EXAMPLE_IMAGE.hasAttribute('alt')) {
            EXAMPLE_IMAGE.removeAttribute('alt');
            alert("El atributo 'alt' ha sido eliminado.");
        } else {
            alert("La imagen no tiene el atributo 'alt' para eliminar.");
        }
    };

    // 3. Asignar las funciones a los eventos de clic de los botones.
    GET_SRC_BUTTON.addEventListener('click', getSrc);
    SET_ALT_BUTTON.addEventListener('click', setAlt);
    HAS_ALT_BUTTON.addEventListener('click', hasAlt);
    REM_ALT_BUTTON.addEventListener('click', removeAlt);
});
