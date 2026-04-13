"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class SensorDiesel {
    _nivel = 0;
    constructor(nivelInicial) {
        this.nivel = nivelInicial; // Usamos el setter para validar desde el inicio
    }
    // GETTER: Retorna el número con el símbolo de porcentaje
    get nivel() {
        return `${this._nivel}%`;
    }
    // SETTER: Bloquea valores fuera del rango 0-100
    set nivel(valor) {
        if (valor < 0 || valor > 100) {
            console.log("--- ERROR: Lectura fuera de rango (0% - 100%) ---");
        }
        else {
            this._nivel = valor;
        }
    }
    // ATRIBUTO CALCULADO: Estado del combustible
    get estadoReserva() {
        return this._nivel < 15 ? "ALERTA: NIVEL CRÍTICO" : "Nivel Normal";
    }
}
// --- PRUEBA DEL SISTEMA ---
const miCamion = new SensorDiesel(50);
console.log("=== MONITOR DE COMBUSTIBLE - TRANSPORTE PESADO ===");
rl.question("Ingrese el nivel actual del tanque (%): ", (entrada) => {
    const n = parseFloat(entrada);
    // Intentamos asignar el valor
    miCamion.nivel = n;
    console.log(`\n-----------------------------------------`);
    console.log(`Lectura del Tanque: ${miCamion.nivel}`);
    console.log(`Estado: ${miCamion.estadoReserva}`);
    console.log(`-----------------------------------------`);
    rl.close();
});
//# sourceMappingURL=Ejercicio2.js.map