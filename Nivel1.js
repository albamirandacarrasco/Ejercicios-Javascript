// Nivel 1: PRINCIPIANTE

// Importamos la librería readline-sync
var readlineSync = require('readline-sync');

// 1. Declaración e Inicialización de Variables
// Declara tres variables usando let, const, y var. Inicializa una con tu nombre, otra con 
// tu edad, y otra con un booleano que indique si te gusta programar. Muestra los valores en la consola.
// var
var nombreChica = "Alba";
console.log(nombreChica); // Output: Alba

// let
let edad = 33;
edad = 25; // Cambiamos el valor
console.log(edad); // Output: 25

// const
const INVENTADA = 225;
console.log(INVENTADA); // Output: 3.14

//2. Suma de Dos Números
//Declara dos variables a y b, asígnales valores numéricos y muestra en la consola la suma de ambos.
let primerDigito = 1;
let segundoDigito = 5;
let tercerDigito = (primerDigito + segundoDigito);
console.log(tercerDigito); // Output: 6

//3. Concatenación de Cadenas
// Declara dos variables con tu nombre y apellido. Concáténalas para mostrar tu nombre completo en la consola.

let nombreAlumno = 'Alba';
let apellidoUnoAlumno = 'Miranda';
let apellidoDosAlumno = 'Carrasco';
console.log('Mi nombre es '+ nombreAlumno + ' ' + apellidoUnoAlumno + ' ' + apellidoDosAlumno); // Mi nombre es Alba Miranda Carrasco

//4. Conversión de Tipos
// Declara una variable con el valor "50". Convierte esta variable a un número utilizando Number() 
// y muestra el tipo resultante usando typeof.
let newNumber = 50;
console.log('La variable es de tipo ' + typeof newNumber); // La variable es de tipo number.

//5. Operaciones Matemáticas Básicas
// Declara dos variables numéricas. Realiza y muestra en la consola la suma, 
// resta, multiplicación, y división de ambas.
let newNumberUno = 2;
let newNumberDos = 3;
console.log('La suma es ' + newNumberUno + newNumberDos);
console.log('La resta es ' + newNumberUno - newNumberDos);
console.log('La multiplicación es ' + newNumberUno * newNumberDos);
console.log('La división es ' + newNumberUno / newNumberDos);

//6. Condicional Simple: Mayor o Menor
//Pide al usuario un número y verifica si es mayor o menor que 10. 
//Muestra un mensaje indicando el resultado.
var userNumber = readlineSync.question('¿Me puedes dar un número aleatorio ?');
let esNumberMayorMenor = userNumber >= 10 ? "mayor de diez" : "menor de diez";
console.log('Hola! tu número es ' + esNumberMayorMenor);


