"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Clase abstracta Electrodomestico
class Electrodomestico {
    marca;
    constructor(marca) {
        this.marca = marca;
    }
}
// Clase Licuadora que extiende de Electrodomestico
class Licuadora extends Electrodomestico {
    funcionar() {
        console.log(`La licuadora ${this.marca} esta moliendo fruta`);
    }
}
// Clase Microondas que extiende de Electrodomestico
class Microondas extends Electrodomestico {
    funcionar() {
        console.log(`El microondas ${this.marca} esta calentando comida`);
    }
}
// Instancias
const licuadora = new Licuadora("Oster");
const microondas = new Microondas("Samsung");
// Llamar al método funcionar
licuadora.funcionar();
microondas.funcionar();
//# sourceMappingURL=Ejercicio4.js.map