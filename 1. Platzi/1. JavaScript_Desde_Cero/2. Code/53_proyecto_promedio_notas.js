'use strict'

/*
// Opcion 1
// Promedio de notas en un array
let gradesList = [ 100, 70, 40, 40, 60 ];
// Necesito sumar todo el array y dividirlo por el numero de calificaciones del array.

// Función para calcular el promedio
function calculateAverage ( array ) {
    let result = 0;

    array.forEach(element => {
        result += element
    });

    return result / gradesList.length
}

// Función para verificar la aprobación
function approval ( grade ) {
    if ( grade >= 70 ) {
        console.log('Approved');
    } else {
        console.log('Reprobate');
    }
}

let averageGrade = calculateAverage( gradesList );
approval( averageGrade );
*/

'use strict'

// Promedio de notas en un array
let gradesList = [ 100, 70, 100, 40, 60 ];

// Función para calcular el promedio
function calculateAverage( array ) {
    let sum = array.reduce((total, grade) => total + grade, 0) / array.length;
    return sum;
}

// total: Es el parametro acumulador del metodo reduce.
// grade: Es el parametro que itera por cada elemento. 
// 0: Es donde va iniciar el acumulador y el tipo de dato.

// Función para verificar la aprobación
function checkApproval( grade ) {
    if (grade >= 70) {
        console.log('Approved');
    } else {
        console.log('Reprobate');
    }
}

// Calcular el promedio y verificar la aprobación
let averageGrade = calculateAverage( gradesList );
checkApproval( averageGrade );
