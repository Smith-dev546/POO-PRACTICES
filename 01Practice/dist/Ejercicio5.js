"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TanqueCombustible {
    CapacidadMaxima = 10;
    nivelActual;
    constructor(nivelActual) {
        this.nivelActual = nivelActual;
    }
    AgregarCombustible(combustible) {
        const nuevoNivel = this.nivelActual + combustible;
        if (nuevoNivel > this.CapacidadMaxima) {
            const espacioDisponible = this.CapacidadMaxima - this.nivelActual;
            console.log(`No se puede agregar ${combustible}L. Capacidad máxima excedida.`);
            console.log(`Espacio disponible: ${espacioDisponible}L`);
        }
        else {
            this.nivelActual = nuevoNivel;
            console.log(`Se agregaron ${combustible}L. Nivel actual: ${this.nivelActual}L`);
        }
    }
    consumir(consumo) {
        if (this.nivelActual >= consumo) {
            this.nivelActual -= consumo;
            console.log(`Consumo exitoso. Nivel actual: ${this.nivelActual}L`);
        }
        else {
            console.log(`Combustible insuficiente. Disponible: ${this.nivelActual}L, Requerido: ${consumo}L`);
        }
    }
}
const recorrido = new TanqueCombustible(10);
recorrido.AgregarCombustible(5);
recorrido.consumir(5);
//# sourceMappingURL=Ejercicio5.js.map