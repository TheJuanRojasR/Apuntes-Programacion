'use strict'

// Como funcionas los callback
const operation = ( numero1, numero2, callback ) => {
    return callback(numero1, numero2);
}

operation(1, 2, ( a, b ) => a + b);
operation(1, 2, ( a, b ) => a * b);
operation(1, 2, ( a, b ) => a - b);