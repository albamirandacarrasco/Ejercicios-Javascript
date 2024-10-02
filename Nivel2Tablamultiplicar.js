// 4. Tabla de Multiplicar
// Pide al usuario un número y muestra su tabla de multiplicar del 1 al 10 usando un bucle for.

// Importamos la librería readline-sync
var readlineSync = require('readline-sync');

// Pedimos al usuario un número por consola
let userNumber = readlineSync.question('Ingresa un número: ');

for (let i = 0; i <= 10; i++) {
    console.log(`La operación es: ${userNumber} X ${i} = ${userNumber * i}`)
  }
