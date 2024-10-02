// Nivel 3: Avanzado


// 6. Clase Básica de Círculo
//Crea una clase Círculo con un atributo radio. 
//Añade un método para calcular el área del círculo. Instancia la clase y muestra el área en la consola.

// Creamos la clase círculo
class Circulo {
    constructor(radio) {
        this.radio = radio;
    }
    // Creamos método para calcular el área del círculo.
    areaCirculo(){

        return Math.PI*this.radio**2;
    }
}
// Instancia la clase y muestra el área en la consola.

const circulo = new Circulo (5);

console.log(`El área del círculo es ${circulo.areaCirculo()}`);