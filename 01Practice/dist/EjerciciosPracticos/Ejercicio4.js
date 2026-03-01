"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductTienda {
    nombre;
    precio;
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    Descuento(desc = 0.10) {
        let descuento;
        let total;
        if (this.precio >= 50) {
            descuento = this.precio * desc;
            total = this.precio - descuento;
            console.log(`
                        Felicidades! Aplico al descuento
                        Precio: $${this.precio}
                        Descuento: $${descuento}
                        Total: $${total}`);
        }
        else {
            console.log("No aplicas al descuento el dia de hoy");
        }
    }
}
const product = new ProductTienda("Toallas", 100);
product.Descuento();
//# sourceMappingURL=Ejercicio4.js.map