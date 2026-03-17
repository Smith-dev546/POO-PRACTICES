"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Clase abstracta Héroe
class Heroe {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
}
// Clase Volador que extiende de Héroe
class Volador extends Heroe {
    usarPoder() {
        console.log(`${this.nombre}: Estoy volando por los cielos`);
    }
}
// Clase Fuerte que extiende de Héroe
class Fuerte extends Heroe {
    usarPoder() {
        console.log(`${this.nombre}: Estoy levantando un camion`);
    }
}
// Instancias
const heroeVolador = new Volador("Superman");
const heroeFuerte = new Fuerte("Hulk");
// Llamar a sus poderes
heroeVolador.usarPoder();
heroeFuerte.usarPoder();
//# sourceMappingURL=Ejercicio1.js.map