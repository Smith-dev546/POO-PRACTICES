const readline = require('readline');

// Configuración de la interfaz de comunicación con el usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1. ABSTRACCIÓN: El "molde" de lo que es un transporte
abstract class Transporte {
    constructor(protected nombre: string) {}

    // Método abstracto: Obliga a las hijas a definir cómo calcular el costo
    abstract calcularCosto(distancia: number): number;

    // Método concreto: Todos los transportes muestran el detalle igual
    public mostrarDetalle(distancia: number): void {
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

    override calcularCosto(distancia: number): number {
        return distancia * 0.50;
    }
}

class Uber extends Transporte {
    constructor() {
        super("Uber");
    }

    override calcularCosto(distancia: number): number {
        return distancia * 0.75;
    }
}

// 3. INTERACCIÓN Y POLIMORFISMO (El programa principal)
console.log(`=== SISTEMA DE TRANSPORTE ===`);

rl.question("Seleccione transporte (1: Taxi, 2: Uber): ", (opcion: string) => {
    rl.question("Ingrese la distancia en kilómetros: ", (distanciaInput: string) => {
        const distancia = parseFloat(distanciaInput);
        
        if (isNaN(distancia) || distancia <= 0) {
            console.log("Error: Por favor ingrese una distancia válida mayor a 0.");
            rl.close();
            return;
        }

        let miTransporte: Transporte; // Variable de tipo Padre (Polimorfismo)

        if (opcion === "1") {
            miTransporte = new Taxi();
        } else if (opcion === "2") {
            miTransporte = new Uber();
        } else {
            console.log("Opción no válida. Por favor seleccione 1 o 2.");
            rl.close();
            return;
        }

        // Polimorfismo puro: El método se comporta según el objeto real
        miTransporte.mostrarDetalle(distancia);
        rl.close();
    });
});