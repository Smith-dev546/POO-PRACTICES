"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Producto {
    PrecioBase;
    constructor(nombre, PrecioBase) {
        this.PrecioBase = PrecioBase;
    }
}
class ProductFisico extends Producto {
    PrecioBase;
    pesoKG;
    constructor(nombre, PrecioBase, pesoKG) {
        super(nombre, PrecioBase);
        this.PrecioBase = PrecioBase;
        this.pesoKG = pesoKG;
    }
    PrecioFinal() {
        return this.PrecioBase + (this.pesoKG * 2);
    }
}
class ProductoDigital extends Producto {
    PrecioBase;
    constructor(nombre, PrecioBase, plataforma) {
        super(nombre, PrecioBase);
        this.PrecioBase = PrecioBase;
    }
    PrecioBaseFinal() {
        return this.PrecioBase;
    }
}
const Product = new ProductFisico("Toallas", 10, 5);
console.log(`El precio final del producto ${Product.PrecioFinal()}`);
//# sourceMappingURL=Ejercicio3.js.map