"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Personaje {
    nombre;
    nivel = 1;
    constructor(nombre) {
        this.nombre = nombre;
    }
    subirNivel() {
        this.nivel++;
        console.log(`Has subido de nivel`);
    }
    Estado() {
        console.log(`
                    Nombre: ${this.nombre}
                    Nivel: ${this.nivel}`);
    }
}
const personaje1 = new Personaje("Pepito");
personaje1.subirNivel();
personaje1.Estado();
//# sourceMappingURL=Ejercicio5.js.map