// 1. Null - Se utiliza para indicar que una variable no tiene valor pero de manera INTENCIONAL.
const exampleNull = null;          // No es algo comun asignarle un valor null a una variable
console.log( exampleNull );
console.log( typeof exampleNull ); // error de js que null aparece como object

// 2. Undefined - Aparece cuando una variable es declarada pero no se le encuentra el valor.
let exampleUndefined;
console.log( exampleUndefined );

// 3. Symbol - Valores unicos que no queremos que cambien
const uniqueId = Symbol('id');
console.log( uniqueId );

// Que pasaria si tenemos dos Symbol "iguales"
const symbolOne = Symbol(1);
const symbolTwe = Symbol(1);
console.log( symbolOne === symbolTwe ); // No son iguales

// Ejemplo con objetos
const ID = Symbol('id');
let user = {};
user[ID] = '1234'
console.log( user );

// 4. Bigint - Cuando tenemos numeros muy grandes
const exampleBigint = 321654894723132132132132n; // La n le hace saber a js que es un bigint
console.log( exampleBigint );
