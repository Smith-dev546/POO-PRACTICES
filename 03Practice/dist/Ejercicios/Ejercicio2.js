"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Clase abstracta MaquinaBebida
class MaquinaBebida {
    tipo;
    constructor(tipo) {
        this.tipo = tipo;
    }
}
// Clase Cafetera que extiende de MaquinaBebida
class Cafetera extends MaquinaBebida {
    constructor() {
        super("Cafetera");
    }
    servir() {
        console.log(`${this.tipo}: Sirviendo un café caliente`);
    }
}
// Clase DispensadorSoda que extiende de MaquinaBebida
class DispensadorSoda extends MaquinaBebida {
    constructor() {
        super("Dispensador de Soda");
    }
    servir() {
        console.log(`${this.tipo}: Sirviendo soda con hielo`);
    }
}
// Instancias
const cafetera = new Cafetera();
const dispensador = new DispensadorSoda();
// Llamar al método servir
cafetera.servir();
dispensador.servir();
//# sourceMappingURL=Ejercicio2.js.map