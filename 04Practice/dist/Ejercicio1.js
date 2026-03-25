"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//El Molde
class Persona {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
}
//2. Las hijas
class Salvadorenio extends Persona {
    saludar() {
        console.log(`Hola que tal! Me llamo ${this.nombre}`);
    }
}
class Ingles extends Persona {
    saludar() {
        console.log(`Hello! My name is ${this.nombre}`);
    }
}
//ITERACION
console.log(`--- SIMULADOR DE SALUDOS ---`);
rl.question("Como te llamas? ", (nombre) => {
    rl.question("Elige un idioma (1: Espaniol, 2: Ingles) ", (opcion) => {
        let alguien;
        if (opcion === "1") {
            alguien = new Salvadorenio(nombre);
        }
        else {
            alguien = new Ingles(nombre);
        }
        alguien.saludar(); //Polimorfismo Puro
        rl.close();
    });
});
//# sourceMappingURL=Ejercicio1.js.map