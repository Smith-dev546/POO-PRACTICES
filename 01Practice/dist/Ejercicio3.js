"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mascota {
    nombre;
    hambre = 50;
    constructor(nombre) {
        this.nombre = nombre;
    }
    comer() {
        this.hambre -= 20;
        console.log(`
                    Nombre: ${this.nombre}
                    Su mascota comio
                    Nivel de hambre: ${this.hambre}`);
    }
    correr() {
        this.hambre += 10;
        console.log(`
                    Nombre: ${this.nombre}
                    Su mascota corrio
                    Nivel de hambre: ${this.hambre}`);
    }
}
const Mascota1 = new Mascota("Firu");
Mascota1.comer();
Mascota1.correr();
//# sourceMappingURL=Ejercicio3.js.map