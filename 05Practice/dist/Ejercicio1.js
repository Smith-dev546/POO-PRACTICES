"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//1. CLASE PADRE (El contrato)
class Producto {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
    mostrarPrecioFinal(precioBase) {
        const final = this.aplicarDescuento(precioBase);
        console.log(`----------------------------------`);
        console.log(`Producto: ${this.nombre}`);
        console.log(`Precio Original: $${precioBase}`);
        console.log(`Precio con descuento: $${final.toFixed(2)}`);
        console.log(`----------------------------------`);
    }
}
//2. CLASE HIJAS (El relleno)
class Ropa extends Producto {
    //La ropa tiene un 20%  de descuento fijo
    aplicarDescuento(precio) {
        return precio * 0.80;
    }
}
class Electronica extends Producto {
    //La electronica tien un 10% por que es mas cara de producir
    aplicarDescuento(precio) {
        return precio * 0.90;
    }
}
//3. ITERACCION
console.log(`=== SISTEMA DE CAJA REGISTRADORA ===`);
rl.question("Tipo de Producto: (1. Ropa, 2. Electronica):", (opcion) => {
    rl.question("Ingrese el precio de etiqueta: ", (entrada) => {
        const precio = parseFloat(entrada);
        let prod;
        if (opcion === "1") {
            prod = new Ropa("Camiseta de algodon");
        }
        else {
            prod = new Electronica("Audifonos Bluetooth");
        }
        prod.mostrarPrecioFinal(precio);
        rl.close();
    });
});
//# sourceMappingURL=Ejercicio1.js.map