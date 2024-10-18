<<<<<<< HEAD
<sub> Fecha: 12 de mayo del 2024 </sub>
<sub> Clase 12/79 </sub>
## Resumen
### Tema : TDP Number (Números)
#### Conceptos básicos

- Definición: Un number es un tipo de dato primitivo de Js que se utiliza para representar valores numéricos (Enteros, Decimales, Infinitos, etc.). Js es distinto a otros lenguajes de programación porque no tiene subtipos y todos los guarda internamente del mismo modo (Flotantes de doble precisión)
- En Js puede crear varios tipos de números:
	- Decimal:    `const decimalNumber = 3.14;`
	- Entero:       `const integerNumber = 42;`
	- Científico:  `const cientifica = 5e3;`
	- Infinito:     `const infinity = Infinity;`
	- NaN:         `const notANumber = NaN;`
#### Operaciones

1. Aritméticas: Son los operadores aritméticos básicos que conocemos.
	- Suma:                `const sum = 3 + 4;`
	- Resta:                `const subtract = 3 - 4;`
	- Multiplicación:  `const multiplication = 3 * 4;`
	- División:            `const division = 3 / 4;`
2. Modulo (residuo) y Potencia.
	- Residuo:            `const remainder = 15 % 8;`
	- Potencia:           `const exponentiation = 2 ** 3;`
3. Operaciones avanzadas
	- Raíz cuadrada:         `const squareRoot = Math.sqrt(16)`
	- Numero absoluto: Es la distancia que tiene un numero hasta cero en la recta numérica.
	  `const valueAbsolute = Math.abs(-7);`
	- Numero al azar: Nos muestra un numero random entre 0 - 0.99
	  `const randomValue = Math.random();`
#### Convertir TDP String a TDP Number

- Para castear (convertir) un string a un number tenemos muchos opciones acá solo voy a mostrar 2 formas:
	- `Number()`: Este método nos ayuda a convertir de string a number. convierte el string a cualquier tipo de dato (Entero, decimas, etc.)
	  `const string = '10';`
	  `console.log( Number(string) ); // 10` 
	- `parseInt()`: Este método también nos ayuda a convertir de string a number. Convierte el string solo a tipo de dato entero. En caso de que el string sea decimal le quitara los números después del punto. 

#### Diferencia entre Number() y parseInt()

- Number()me devuelve cualquier tipo, sea entero o decimal. Si el string tiene caracteres me devolverá `NaN` 
- parseInt() solo me devolverá un numero de tipo entero. Una ventaja de parseInt es que si el string comienza con números y luego tiene caracteres este me borrara los caracteres y se quedara con los números. Si solo tiene caracteres me devolverá `NaN`.

