"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//1. CLASE PADRE
class Ejercicio {
}
//2.CLASES HIJAS    
class Correr extends Ejercicio {
    //Correr quema 10 calorias por minuto
    calcularCalorias(minutos) {
        return minutos * 10;
    }
}
class Yoga extends Ejercicio {
    //Yoga quema 4 calorias por minuto
    calcularCalorias(minutos) {
        return minutos * 4;
    }
}
//3. INTERACCION
console.log(`=== MONITOR DE ACTIVIDAD FISICA ===`);
rl.question("Que ejercicio hizo? (1: Correr, 2: Yoga): ", (opcion) => {
    rl.question("Cuantos minutos entreno?: ", (tiempo) => {
        const minutos = parseFloat(tiempo);
        let entrenamiento;
        if (opcion === "1") {
            entrenamiento = new Correr();
            console.log(`Gran esfuerzo caardiovascular!`);
        }
        else {
            entrenamiento = new Yoga();
            console.log(`Excelente para la flexibilidad y mente`);
        }
        const quemadas = entrenamiento.calcularCalorias(minutos);
        console.log(`Total de calorias quemadas: ${quemadas} kcal`);
        rl.close();
    });
});
//# sourceMappingURL=Ejercicio2.js.map