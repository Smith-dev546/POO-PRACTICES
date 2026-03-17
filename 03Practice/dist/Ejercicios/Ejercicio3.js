"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Clase abstracta Persona
class Persona {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
}
// Clase Formal que extiende de Persona
class Formal extends Persona {
    saludar() {
        console.log(`Mucho gusto, mi nombre es ${this.nombre}`);
    }
}
// Clase Informal que extiende de Persona
class Informal extends Persona {
    saludar() {
        console.log(`Que onda, soy ${this.nombre}`);
    }
}
// Instancias
const personaFormal = new Formal("Pepito");
const personaInformal = new Informal("Juan");
// Llamar al método saludar
personaFormal.saludar();
personaInformal.saludar();
//# sourceMappingURL=Ejercicio3.js.map