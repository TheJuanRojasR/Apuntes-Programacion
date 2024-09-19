'use strict'
// 1. Crear una lista que contenga varias transsacciones. 
const transactionsList = [
    { transactionNumber: 1, transactionAmount: 100, transactionDescription: 'Freelance' },
    { transactionNumber: 2, transactionAmount: 200, transactionDescription: 'Salario minimo' },
    { transactionNumber: 3, transactionAmount: -250, transactionDescription: 'Zapatos' },
    { transactionNumber: 4, transactionAmount: -100, transactionDescription: 'Camisa' },
    { transactionNumber: 5, transactionAmount: 150, transactionDescription: 'Inversiones' },
    { transactionNumber: 6, transactionAmount: 0, transactionDescription: 'Comida' },
];

// 2. Calcular el saldo total con reduce y mostrar el consola.
function totalTransactionBalance(array) {
    // Se suman todos los valores de transaccion y se guardan en balance.
    const balance = array.reduce((balance, iterable) => balance + iterable.transactionAmount, 0);
    return balance;
}

// 3. Encontrar la transaccion mas grande (ingreso o retiro) con reduce y mostrar el pantalla.
function largestTransaction(array) {
    const largest = array.reduce((balance, iterable) => {
        // Se compara el valor absoluto de la iterable y el valor absoluto del acumulador
        if (Math.abs(iterable.transactionAmount) > Math.abs(balance)) {
            // Se retorna la iterable y ahora se guardara en el acumulador(balance)
            return iterable.transactionAmount;
        }
        return balance;
    }, 0);
    return largest;
}

// 4. Filtrar las transacciones de compra con filter y mostrarlas en consola.
function filterTransactionBuy (array) {
    // Muestra todas la transacciones donde su valor sean menor a 0.
    const transactionBuy = array.filter((transaction) => transaction.transactionAmount < 0);
    return transactionBuy;
}

// 5. Encontrar una transaccion por descripcion con find y mostrala en consola.
function findTransationByDescription (array, searchDescription) {
    // Retorna el primer valor de lo que estamos buscando (searchDescription)
    const findTransation = array.find((transaction) => transaction.transactionDescription === searchDescription);
    return findTransation;
}

// 6. Encontrar el indice de una transaccion por el monto con findIndex y mostrar en consola.
function findTransationByAmount (array, ammount) {
    //Retorna el indice lo que estamos buscando (ammount)
    const findTransation = array.findIndex((transaction) => transaction.transactionAmount === ammount);
    return findTransation;
}

// 7. Actualizar descripcion de un transaccion con forEach. Aquellas que sean negativas iran con un prefijo 'Gasto:' y aquellas que sean positivas tendran el prefijo 'Ingreso:'
function updateDescriptionTransation (array) {
    array.forEach(element => {
        // Recorre el array y si el valor de la transaccion es positiva quiere decir que es un ingreso
        if (element.transactionAmount > 0) {
            element.transactionDescription = `Ingreso: ${element.transactionDescription}`
        } else if (element.transactionAmount == 0) {
            // Si es 0 quiere decir que es neutra
            element.transactionDescription = `Neutro: ${element.transactionDescription}`
        } else {
            // Si no cumple con las condiciones anteriores quiere decir que es negativa y seria un gasto.
            element.transactionDescription = `Gasto: ${element.transactionDescription}`
        }
    });
}
