// Nivel 3: Avanzado

// Importamos la librería readline-sync
var readlineSync = require('readline-sync');

// 4. Encuentra el Número Mayor
// Pide tres números al usuario 
// y determina cuál es el mayor utilizando condicionales.

let numeroUsuario1 = readlineSync.question('Ingresa un número aleaorio: ');
let numeroUsuario2 = readlineSync.question('Ingresa un segundo número aleaorio: ');
let numeroUsuario3 = readlineSync.question('Ingresa un tercer número aleaorio: ');

if (numeroUsuario1 >= numeroUsuario2) {
   
    if(numeroUsuario1 >= numeroUsuario3){
    // Imprimir la cadena invertida en la consola
       console.log('El número mayor de los tres introducidos: ' + numeroUsuario1);
    }
}
if (numeroUsuario2 >= numeroUsuario1) {
   
    if(numeroUsuario2 >= numeroUsuario3){
    // Imprimir la cadena invertida en la consola
       console.log('El número mayor de los tres introducidos: ' + numeroUsuario2);
    }
}
if (numeroUsuario3 >= numeroUsuario1) {
   
    if(numeroUsuario3 >= numeroUsuario2){
    // Imprimir la cadena invertida en la consola
       console.log('El número mayor de los tres introducidos: ' + numeroUsuario3);
    }
}


