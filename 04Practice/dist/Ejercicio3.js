"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('readline');
// Configuración de la interfaz de comunicación con el usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// 1. ABSTRACCIÓN: El "molde" de lo que es un transporte
class Transporte {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
    // Método concreto: Todos los transportes muestran el detalle igual
    mostrarDetalle(distancia) {
        const total = this.calcularCosto(distancia);
        console.log(`--------------------------------------`);
        console.log(`  DETALLE DEL VIAJE`);
        console.log(`  Vehículo: ${this.nombre}`);
        console.log(`  Distancia: ${distancia} km`);
        console.log(`  Total a pagar: $${total.toFixed(2)}`);
        console.log(`--------------------------------------`);
    }
}
// 2. HERENCIA: Implementaciones específicas
class Taxi extends Transporte {
    constructor() {
        super("Taxi");
    }
    calcularCosto(distancia) {
        return distancia * 0.50;
    }
}
class Uber extends Transporte {
    constructor() {
        super("Uber");
    }
    calcularCosto(distancia) {
        return distancia * 0.75;
    }
}
// 3. INTERACCIÓN Y POLIMORFISMO (El programa principal)
console.log(`=== SISTEMA DE TRANSPORTE ===`);
rl.question("Seleccione transporte (1: Taxi, 2: Uber): ", (opcion) => {
    rl.question("Ingrese la distancia en kilómetros: ", (distanciaInput) => {
        const distancia = parseFloat(distanciaInput);
        if (isNaN(distancia) || distancia <= 0) {
            console.log("Error: Por favor ingrese una distancia válida mayor a 0.");
            rl.close();
            return;
        }
        let miTransporte; // Variable de tipo Padre (Polimorfismo)
        if (opcion === "1") {
            miTransporte = new Taxi();
        }
        else if (opcion === "2") {
            miTransporte = new Uber();
        }
        else {
            console.log("Opción no válida. Por favor seleccione 1 o 2.");
            rl.close();
            return;
        }
        // Polimorfismo puro: El método se comporta según el objeto real
        miTransporte.mostrarDetalle(distancia);
        rl.close();
    });
});
//# sourceMappingURL=Ejercicio3.js.map