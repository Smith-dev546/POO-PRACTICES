"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// 1. CLASE PADRE
class Pedido {
}
// 2. CLASES HIJAS
class Hamburguesa extends Pedido {
    preparar() {
        console.log("\n--- PROCESO DE COCINA: HAMBURGUESA ---");
        console.log("1. Calentar la plancha a temperatura media.");
        console.log("2. Cocinar la carne por ambos lados.");
        console.log("3. Colocar una rebanada de queso para fundir.");
        console.log("4. Tostar el pan y ensamblar con los vegetales.");
        console.log("Resultado: Pedido finalizado.");
    }
}
class Pizza extends Pedido {
    preparar() {
        console.log("\n--- PROCESO DE COCINA: PIZZA ---");
        console.log("1. Extender la masa sobre la superficie de trabajo.");
        console.log("2. Aplicar la base de salsa de tomate.");
        console.log("3. Cubrir con queso mozzarella y los ingredientes.");
        console.log("4. Hornear a 250 grados Celsius.");
        console.log("Resultado: Pedido finalizado.");
    }
}
// 3. INTERACCION
console.log("=== SISTEMA DE GESTION DE PEDIDOS ===");
rl.question("Seleccione el producto (1: Hamburguesa, 2: Pizza): ", (opcion) => {
    let miPedido;
    if (opcion === "1") {
        miPedido = new Hamburguesa();
    }
    else if (opcion === "2") {
        miPedido = new Pizza();
    }
    else {
        console.log("Error: La opcion ingresada no es valida.");
        rl.close();
        return;
    }
    // Ejecucion del metodo abstracto segun la instancia
    miPedido.preparar();
    rl.close();
});
//# sourceMappingURL=Ejercicio4.js.map