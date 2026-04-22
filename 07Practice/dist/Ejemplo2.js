"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
// EL CONTRATO (Clase Abstracta)
class Personaje {
    nombre;
    _vida;
    constructor(nombre, _vida) {
        this.nombre = nombre;
        this._vida = _vida;
    }
    // Getter para leer la vida de forma segura
    get vida() { return this._vida; }
    mostrarEstado() {
        console.log(`[ ESTADO ] Personaje: ${this.nombre} | HP: ${this._vida}`);
    }
}
// LAS IMPLEMENTACIONES (Polimorfismo)
class Guerrero extends Personaje {
    usarHabilidad() {
        console.log(`${this.nombre} usa [GOLPE DE ESPADA]: causa 50 de daño físico!`);
    }
}
class Mago extends Personaje {
    usarHabilidad() {
        console.log(`${this.nombre} usa [BOLA DE FUEGO]: explosión mágica en área!`);
    }
}
class Sanador extends Personaje {
    usarHabilidad() {
        console.log(`${this.nombre} usa [CURACIÓN]: recupera puntos de vida para el equipo!`);
    }
}
// --- LA EJECUCIÓN ---
console.log("--- SELECCIÓN DE HABILIDAD ---");
console.log("1: Guerrero | 2: Mago | 3: Sanador");
rl.question("Elija su clase: ", (opcion) => {
    let heroe; // (Referencia al Padre)
    // Dependiendo de la opción, instanciamos un hijo diferente
    if (opcion === "1") {
        heroe = new Guerrero("Ragnar", 150);
    }
    else if (opcion === "2") {
        heroe = new Mago("Gandalf", 80);
    }
    else if (opcion === "3") {
        heroe = new Sanador("Lifeline", 100);
    }
    else {
        console.log("Opción inválida");
        rl.close();
        return;
    }
    heroe.mostrarEstado();
    heroe.usarHabilidad();
    rl.close();
});
//# sourceMappingURL=Ejemplo2.js.map