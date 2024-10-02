// Nivel 2: Intermedio

// Importamos la librería readline-sync
var readlineSync = require('readline-sync');
// 1. Determinar Par o Impar
// Escribe un programa que pida un número al usuario y determine si es par o impar usando un condicional if-else.
let userNumber = readlineSync.question('¿Me puedes dar un número aleatorio ?');
if(parseInt(userNumber) % 2 == 0) {
    console.log ('El número que has elegido es PAR ')
  } else {
    console.log ('El número que has elegido es IMPAR ')
  }

