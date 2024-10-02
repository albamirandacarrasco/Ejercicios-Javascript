// Nivel 3: Avanzado

// Importamos la librería readline-sync
var readlineSync = require('readline-sync');

// 1.Calculadora básica
// Crea un programa que pida dos números y un operador (+, -, *, /) al usuario. 
// Realiza la operación y muestra el resultado en la consola.

// Pedimos los números al usuario
let userNumber1 = readlineSync.questionFloat('¿Me das un número para hacer una operación? ');
let userNumber2 = readlineSync.questionFloat('¿Me das un segundo número, para hacer la operación?');

let resultadoCalculo;

// Pedimos operador
let operadorMatematico = readlineSync.question('Ingresa un operador válido de los siguientes (+, -, *, /): ');

switch (operadorMatematico) {

    case '+':

        console.log(resultadoCalculo = userNumber1 + userNumber2);
        break;

    case '-':

        console.log(resultadoCalculo = userNumber1 - userNumber2);
        break;

    case '*':

        console.log(resultadoCalculo = userNumber1 * userNumber2);
        break;

    case '/':

        console.log(resultadoCalculo = userNumber1 / userNumber2);
        break;

    case other:
        console.log('No se puede hacer ese caso');
        break;

}