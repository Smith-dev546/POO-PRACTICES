"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehiculo {
    marca;
    modelo;
    anio;
    constructor(marca, modelo, anio) {
        if (!marca || !modelo)
            throw new Error("Marca y modelo son obligatorias ");
        if (anio > new Date().getFullYear())
            throw Error("El anio no es valido");
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    mostrarInformcion() {
        console.log(`
                    Vehiculo: ${this.marca} ${this.modelo} (${this.anio})`);
    }
}
class Automovil extends Vehiculo {
    numPuertas;
    constructor(marca, modelo, anio, numPuertas) {
        super(marca, modelo, anio);
        this.numPuertas = numPuertas;
    }
    mostrarInformcion() {
        super.mostrarInformcion();
        console.log(`Numero de puertas: ${this.numPuertas}`);
    }
}
console.log(`---- Iniciando Registro de Vehiculos ----`);
try {
    const miCarro = new Automovil("", "", 2030, 2);
    miCarro.mostrarInformcion();
}
catch (error) {
    console.log(`[Log]: Se bloqueo un intento de registro invalido. Razon: ${error.message}`);
}
console.log(`--- Fin del proceso. El sistema continua en ejecucuion ---`);
//# sourceMappingURL=index.js.map