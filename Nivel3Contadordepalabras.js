// Nivel 3: Avanzado

// Importamos la librería readline-sync
var readlineSync = require('readline-sync');

// 2.Contador de Palabras
// Solicita una frase al usuario y cuenta cuántas palabras tiene. 
// Usa split() para separar las palabras y cuenta la longitud del array resultante.
let fraseUsuario = readlineSync.question('Ingresa una frase cualquiera: ');


let palabras = fraseUsuario.split(' ').length;

// Imprimimos por pantalla
console.log(`La frase ${fraseUsuario} tiene ${palabras} palabras`)