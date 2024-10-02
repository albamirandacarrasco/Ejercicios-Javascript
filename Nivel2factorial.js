// Nivel 2: Intermedio

// Importamos la librería readline-sync
var readlineSync = require('readline-sync');

// 3. Calcular Factorial
// Escribe un programa que pida un número al usuario y calcule su factorial utilizando un bucle while.
let numeroUsuario = readlineSync.questionInt('Ingresa el número que quieras: ');

if (numeroUsuario < 0) {
    console.log('No podemos hacer factorial de número negativos.');
} else {
    let factorial = 1;
    let contador = numeroUsuario;

    // Calculamos el factorial usando un bucle while
    while (contador > 1) {
        factorial *= contador;
        contador--;
    }
        console.log(`El factorial de ${numeroUsuario} es: ${factorial}`);
    }