// Clase 9 - Creacion de String

// Creación de String
const firstOption = 'Comillas simples';
const secondOption = "Comillas dobles";
const thirdOption = `Comillas invertidas`;

// Concatenación de String
// 1. Concatenación de String con +
const address = 'Calle falsa 123';
const city = 'Springfield';
const fullAdress = 'Mi direccion completa es ' + address + city;
console.log(fullAdress);
const fullAdressWithSpace = 'Mi direccion completa es ' + address + ' ' + city;
console.log(fullAdressWithSpace);

// 2. Concatenación de String con template literals (interpolación de variables)
const fullName = 'Juan Rojas';
const country = 'Colombia';
const presentation = `Hola, mi nombre es ${ fullName } y soy de ${ country }`;
console.log(presentation);

// 3. Concatenación de String con join
const firstPart = 'Me encanta';
const secondPart = 'la gente de';
const thirdPart = 'Colombia';
const fullPhrase = [firstPart, secondPart, thirdPart];
console.log(fullPhrase.join(' ')); // El join recibe un separador

// 4. Concatenación de String con concat
const hobbie1 = 'Me gusta programar';
const hobbie2 = 'Me gusta leer';
const hobbie3 = 'Me gusta viajar';
const hobbies = 'Mis hobbies son: '.concat(hobbie1, ', ', hobbie2, ' y ', hobbie3, '.');
console.log(hobbies);

// Clase 10 - Caracteres de escape String

// Caracteres de escape
// const exampleError = 'It's a great day';

// Solución 1: Usar comillas dobles
const exampleError = "It's a great day";

// Solución 2: Usar comillas simples y escapar la comilla simple
const exampleError2 = 'It\'s a great day';

// Solución 3: Usar comillas invertidas
const exampleError3 = `It's a great day`;

// Strings largos
/*
Yo no hablo de venganzas ni de perdones;
el olvido es la única venganza
y el único perdón.
*/

// Solución 1: Usar comillas simples y concatenar
const poem = 'Yo no hablo de venganzas ni de perdones;\n' +
'el olvido es la única venganza\n' +
'y el único perdón.';
console.log(poem);

// Solución 2: Usar comillas invertidas
const poem2 = `Yo no hablo de venganzas ni de perdones;
el olvido es la única venganza
y el único perdón.`;
console.log(poem2);

// Solución 3: Usar comillas simples y caracteres de escape
const poem3 = 'Yo no hablo de venganzas ni de perdones;\n\
el olvido es la única venganza\n\
y el único perdón.';
console.log(poem3);

/*
Traducción:
firstOption  = Primera opción
fullAdress   = Dirección completa
exampleError = Ejemplo de error
poem         = Poema
*/
