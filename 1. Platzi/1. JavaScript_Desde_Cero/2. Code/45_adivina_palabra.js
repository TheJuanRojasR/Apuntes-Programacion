/**
Juguemos a adivinar la palabra.

El usuario tiene 3 intentos para adivirna la palabra oculta.

Requrimientos.

1. El juego debe tener una palabra oculta.
2. El juego puede dar 1 piesta de la palabra.
3. El usuario debe ingresar una suposicion.
4. El juego debe verificar si la suposicion es correcta.
5. El juego debe tener un numero limitado de intentos.
6. El juego debe terminar cuando el usuario adivine la palabra o se quede sin intentos.
*/

/*
hiddenWord   = Palabra oculta
MAX_ATTEMPTS = Numero limitado de intentos
userAttempts = Intentos del usuario
userWord     = Palabra ingresada por el usuario
*/

// 1. Crear una palabra oculta.
const iddenWord = 'herencia';
// 5. Numero limitado de intentos.
const MAX_ATTEMPTS = 3;
let userAttempts = 0;

// 2. Dar una pista de la palabra.
console.log(`PISTA: La palabra oculta tiene ${iddenWord.length} letras.`);

while (userAttempts < MAX_ATTEMPTS) {
    // 3. El usuario debe ingresar una suposicion.
    const userWord = prompt(`Ingrese la palabra que sea correcta.`).toLocaleLowerCase();

    if (!userWord) {
        console.log('Entrada vacía, por favor ingrese una palabra.');
        continue; // Salta a la siguiente iteracion hasta que introduzca algo valido.
    }

    // 4. Verificar si la palabra del usuario es igual a la palabra oculta
    if (userWord === iddenWord) {
        console.log(`Felilicitaciones, ${userWord} es la palabra correcta.`);
        break;
    } else {
        userAttempts++;
        console.log(`Palabra incorrecta. Te quedan ${MAX_ATTEMPTS - userAttempts} intentos`);
    }

    // 6. Si el usuario se queda sin intentos, mostrar la palabra oculta.
    if (userAttempts === MAX_ATTEMPTS) {
        console.log(`Se te acabaron los intentos. La palabra oculta era ${iddenWord}.`)
        break;
    } else {
        switch (userAttempts) {
            case 1:
                console.log('PISTA: Es uno de los pilares fundamentales de la POO.');
                break;
            case 2:
                console.log('PISTA: Nos permite derivar una nueva clase a partir de una existente.');
                break;
        }
    }
}
