"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehiculo {
    marca;
    modelo;
    anio;
    constructor(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    mostrar() {
        console.log(`
                    Informacion de vehiculos:
                    Marca: ${this.marca}
                    Modelo: ${this.modelo};
                    anio: ${this.anio}`);
    }
}
const Vehiculo1 = new Vehiculo("Toyota Corolla", "LE Sedán", 2024);
Vehiculo1.mostrar();
const Vehiculo2 = new Vehiculo("Ford Mustang", "GT Premium", 1967);
Vehiculo2.mostrar();
//# sourceMappingURL=Ejercicio3.js.map