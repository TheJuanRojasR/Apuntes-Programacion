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
    const COLOR_BUTTON = document.getElementById('color-button');
    const SIZE_BUTTON = document.getElementById('size-button');
    const POSITION_BUTTON = document.getElementById('position-button');
    const FONT_BUTTON = document.getElementById('font-button');

    // 2. Funciones
    // Cambiar el color de parrfo
    const changeColor = () => {
        const COLOR_PARAGRAPH = document.getElementById('color-paragraph');
        COLOR_PARAGRAPH.style.color = ('red');
    }
    // Cambiar el tamaño del parrafo
    const changeSize = () => {
        const SIZE_PARAGRAPH = document.getElementById('size-paragraph');
        SIZE_PARAGRAPH.style.fontSize = ('30px');
    }
    // Cambiar la posicion de un parrafo
    const changePosition = () => {
        const POSITION_PARAGRAPH = document.getElementById('position-paragraph');
        POSITION_PARAGRAPH.style.textAlign = ('start');
    }
    // Cambiar la posicion de un parrafo
    const changeFont = () => {
        const FONT_PARAGRAPH = document.getElementById('font-paragraph');
        FONT_PARAGRAPH.style.fontFamily = ('Arial');
    }

    // 3. Asignar las funciones a los eventos de clic de los botones.
    COLOR_BUTTON.addEventListener('click', changeColor);
    SIZE_BUTTON.addEventListener('click', changeSize);
    POSITION_BUTTON.addEventListener('click', changePosition);
    FONT_BUTTON.addEventListener('click', changeFont);
});
