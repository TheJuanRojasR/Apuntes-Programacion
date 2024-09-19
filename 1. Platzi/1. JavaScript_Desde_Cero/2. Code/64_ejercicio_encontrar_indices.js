'use strict';

const exampleArray = ['cat', 'dog', 'duck', 'chicken', 'shark', 'dog'];
const targetString = 'dog';

function findWordInArray(array, word) {
    if (array.includes(word)) {
        const firstOccurrence = array.indexOf(word);
        const lastOccurrence = array.lastIndexOf(word);
        console.log(`Primera aparicion: ${firstOccurrence} - Ultima aparicion: ${lastOccurrence}`);
    } else {
        console.log(`La palabra "${targetString}" no se encuentra en el array.`);
    }
}

findWordInArray(exampleArray, targetString);