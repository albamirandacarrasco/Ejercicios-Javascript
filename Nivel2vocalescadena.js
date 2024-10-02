// Nivel 2: Intermedio

// Importamos la librería readline-sync
var readlineSync = require('readline-sync');

// 5. Contar Vocales en una Cadena
// Solicita al usuario una cadena de texto y cuenta cuántas vocales tiene. Imprime el resultado en la consola.

let userString = readlineSync.question('Ingresa una palabra ramdon: ');

const vocalesPalabra = [A, E, I, O, U, a, e , i, o, u];
let cantidadVocales = 0;

for (let i = 0; i < userString.length; i++) {
    if (vocales.includes(userString[i])) {
        contadorVocales++;
    }
}

// Imprimimos el número de vocales
console.log(`La cadena tiene ${contadorVocales} vocales.`);