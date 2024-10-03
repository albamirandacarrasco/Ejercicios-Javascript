// Nivel 3: Avanzado

// 8. Crea una clase Tarea con atributos nombre y completada. 
// Crea un array de tareas y añade métodos
// para agregar, completar y mostrar tareas pendientes o completadas.

// Creamos la clase Tarea
// Clase Tarea
class Tarea {
    constructor(nombre) {
        this.nombre = nombre;
        this.completada = false;
    }
}

// Clase para gestionar las tareas
class GestorTareas {
    constructor() {
        this.tareas = [];
    }

    // Método para agregar una tarea
    agregarTarea(nombre) {
        const nuevaTarea = new Tarea(nombre);
        this.tareas.push(nuevaTarea);
        console.log(`Tarea "${nombre}" agregada.`);
    }

    // Método para completar una tarea
    completarTarea(index) {
        if (index >= 0 && index < this.tareas.length) {
            this.tareas[index].completada = true;
            console.log(`Tarea "${this.tareas[index].nombre}" completada.`);
        } else {
            console.log('Índice de tarea inválido.');
        }

    }

    // Método para mostrar tareas pendientes
    mostrarTareasPendientes() {
        console.log('Tareas pendientes:');
        this.tareas.forEach((tarea, index) => {
            if (!tarea.completada) {
                console.log(`${index + 1}. ${tarea.nombre}`);
            }
        });
    }

    // Método para mostrar tareas completadas
    mostrarTareasCompletadas() {
        console.log('Tareas completadas:');
        this.tareas.forEach((tarea, index) => {
            if (tarea.completada) {
                console.log(`${index + 1}. ${tarea.nombre}`);
            }
        });
    }
}

// Instanciar el gestor de tareas
const gestor = new GestorTareas();

// Interacción con el usuario
let opcion;
do {
    console.log('\nOpciones:');
    console.log('1. Agregar tarea');
    console.log('2. Completar tarea');
    console.log('3. Mostrar tareas pendientes');
    console.log('4. Mostrar tareas completadas');
    console.log('5. Salir');

    opcion = readlineSync.questionInt('Selecciona una opción: ');

    switch (opcion) {
        case 1:
            const nombreTarea = readlineSync.question('Ingresa el nombre de la tarea: ');
            gestor.agregarTarea(nombreTarea);
            break;
        case 2:
            const index = readlineSync.questionInt('Ingresa el número de la tarea a completar: ') - 1;
            gestor.completarTarea(index);
            break;
        case 3:
            gestor.mostrarTareasPendientes();
            break;
        case 4:
            gestor.mostrarTareasCompletadas();
            break;
        case 5:
            console.log('Saliendo...');
            break;
        default:
            console.log('Opción no válida. Por favor, selecciona de nuevo.');
    }
} while (opcion !== 5);