"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Habilidad {
    nombre;
    costo;
    constructor(nombre, costo) {
        this.nombre = nombre;
        this.costo = costo;
    }
}
class HechizoFuego extends Habilidad {
    usar() {
        console.log(`Lanzando ${this.nombre} Costo: ${this.costo} Mana`);
    }
}
class GolpeEspada extends Habilidad {
    usar() {
        console.log(`Ejecutando ${this.nombre} Costo: ${this.costo} Estamina`);
    }
}
//FUNCION POLIMORFICA (Acepta cualquier cosa que sea Habilidad)
function activarHabilidad(h) {
    h.usar();
}
const poder1 = new HechizoFuego("Bola de Fuego", 20);
const poder2 = new GolpeEspada("Corte Veloz", 10);
activarHabilidad(poder1);
activarHabilidad(poder2);
//# sourceMappingURL=Ejercicio3.js.map