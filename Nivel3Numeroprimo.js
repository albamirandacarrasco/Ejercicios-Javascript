// Nivel 3: Avanzado

// Importamos la librería readline-sync
var readlineSync = require('readline-sync');

// 5.Número Primo
//Pide al usuario un número y determina si es primo. Imprime
//un mensaje indicando si es primo o no.

let numeroUsuario = readlineSync.question('Ingresa un número aleatorio para saber si es o no primo: ');

if (numeroUsuario % 2 === 0 && numeroUsuario != 2) {

    console.log(`El número ${numeroUsuario} es primo `);
}
else {
    console.log(`El número ${numeroUsuario} NO es primo `);
}





