// Nivel 3: Avanzado

// Importamos la librería readline-sync
var readlineSync = require('readline-sync');

// 7. Sistema de Notas

//Pide al usuario su calificación y usa condicionales para determinar 
//si aprobó o reprobó. Usa las siguientes reglas: ≥ 60 aprobado, < 60 reprobado.

let calificacionUsuario = readlineSync.question('Ingresa tu número de clasificación: ');

if (calificacionUsuario >= 60){

    console.log(`Enhorabuena has aprobado con calificación de: ${calificacionUsuario}`);
 }
 else{

    console.log(`Muy mal, tienes que estudiar, has suspendido con un  ${calificacionUsuario}`);

 }


