// Nivel 3: Avanzado

// Importamos la librería readline-sync
var readlineSync = require('readline-sync');

// 3.Invertir una Cadena
// Escribe un programa que tome una cadena ingresada por el usuario e imprima 
// la cadena invertida.

let fraseUsuario = readlineSync.question('Ingresa una frase cualquiera: ');
let cadenaInvertida = '';

for (var i = fraseUsuario.length - 1; i >= 0; i--){

    cadenaInvertida += fraseUsuario[i];
}
// Imprimir la cadena invertida en la consola
console.log(`La cadena invertida es: ${cadenaInvertida}`);