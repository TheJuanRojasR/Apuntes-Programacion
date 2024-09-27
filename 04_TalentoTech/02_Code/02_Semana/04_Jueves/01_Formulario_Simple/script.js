'use strict'

document.addEventListener('DOMContentLoaded', () => {

    const EXAMPLE_IMPUT = document.getElementById('example-input');
    const SEND_BUTTON = document.getElementById('send-button');

    const readInput = () => {
        alert(`Input: ${EXAMPLE_IMPUT.value}`);
    }

    SEND_BUTTON.addEventListener('click', readInput);
})