"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('readline');
// Configuración de la interfaz de comunicación con el usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// 1. ABSTRACCIÓN: El "molde" de lo que es una figura geométrica
class Figura {
    // Método concreto: Muestra los resultados formateados
    mostrarResultados() {
        const area = this.calcularArea();
        const perimetro = this.calcularPerimetro();
        console.log(`--------------------------------------`);
        console.log(`  RESULTADOS DE LA FIGURA`);
        console.log(`  Área: ${area.toFixed(2)} unidades²`);
        console.log(`  Perímetro: ${perimetro.toFixed(2)} unidades`);
        console.log(`--------------------------------------`);
    }
}
// 2. HERENCIA: Implementaciones específicas
class Cuadrado extends Figura {
    lado;
    constructor(lado) {
        super();
        this.lado = lado;
        if (lado <= 0) {
            throw new Error("El lado debe ser una cantidad positiva");
        }
    }
    calcularArea() {
        return this.lado * this.lado;
    }
    calcularPerimetro() {
        return this.lado * 4;
    }
}
class Circulo extends Figura {
    radio;
    constructor(radio) {
        super();
        this.radio = radio;
        if (radio <= 0) {
            throw new Error("El radio debe ser una cantidad positiva");
        }
    }
    calcularArea() {
        return Math.PI * Math.pow(this.radio, 2);
    }
    calcularPerimetro() {
        return 2 * Math.PI * this.radio;
    }
}
// 3. INTERACCIÓN Y POLIMORFISMO (El programa principal)
console.log(`=== CALCULADORA DE FIGURAS GEOMÉTRICAS ===`);
console.log(`Opciones disponibles:`);
console.log(`  1. Cuadrado`);
console.log(`  2. Círculo`);
console.log(``);
rl.question("Seleccione una figura (1: Cuadrado, 2: Círculo): ", (opcion) => {
    if (opcion === "1") {
        // Caso Cuadrado
        rl.question("Ingrese la longitud del lado: ", (ladoInput) => {
            const lado = parseFloat(ladoInput);
            if (isNaN(lado) || lado <= 0) {
                console.log("Error: Por favor ingrese un lado válido mayor a 0.");
                rl.close();
                return;
            }
            try {
                let miFigura = new Cuadrado(lado); // Polimorfismo
                miFigura.mostrarResultados();
            }
            catch (error) {
                if (error instanceof Error) {
                    console.log(`Error: ${error.message}`);
                }
            }
            rl.close();
        });
    }
    else if (opcion === "2") {
        // Caso Círculo
        rl.question("Ingrese el radio del círculo: ", (radioInput) => {
            const radio = parseFloat(radioInput);
            if (isNaN(radio) || radio <= 0) {
                console.log("Error: Por favor ingrese un radio válido mayor a 0.");
                rl.close();
                return;
            }
            try {
                let miFigura = new Circulo(radio); // Polimorfismo
                miFigura.mostrarResultados();
            }
            catch (error) {
                if (error instanceof Error) {
                    console.log(`Error: ${error.message}`);
                }
            }
            rl.close();
        });
    }
    else {
        console.log("Opción no válida. Por favor seleccione 1 o 2.");
        rl.close();
    }
});
//# sourceMappingURL=Ejercicio4.js.map