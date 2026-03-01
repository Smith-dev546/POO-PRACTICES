"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    nombre;
    vida;
    constructor(nombre, vida) {
        this.nombre = nombre;
        this.vida = vida;
    }
    RecibirDanios(puntos) {
        this.vida -= puntos;
        console.log(`
                    ${this.nombre} recibio ${puntos} de danio.
                    Vida restante: ${this.vida}`);
    }
    status() {
        if (this.vida > 0) {
            console.log(`
                        Nombre: ${this.nombre}
                        Estado: Activo
                        vidas restantes: ${this.vida}`);
        }
        else {
            console.log(`
                        Nombre: ${this.nombre}
                        Estado: Derrotado`);
        }
    }
}
const Player1 = new Player("Pepito", 3);
Player1.RecibirDanios(4);
Player1.status();
//# sourceMappingURL=Ejercicio1.js.map