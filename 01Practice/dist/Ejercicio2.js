"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrdenCafe {
    TipoCafe;
    cantidad;
    precio;
    constructor(TipoCafe, cantidad, precio) {
        this.TipoCafe = TipoCafe;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    TotalPagar() {
        return this.cantidad * this.precio;
    }
    ImprimirTicket() {
        console.log(`
                    Nombre: ${this.TipoCafe}
                    Cantidad: ${this.cantidad}
                    Precio unitario: $${this.precio}
                    Total a pagar: $${this.TotalPagar()} 
                    
                    Gracias por su compra!`);
    }
}
const cliente = new OrdenCafe("Capuchino", 5, 3);
cliente.TotalPagar();
cliente.ImprimirTicket();
//# sourceMappingURL=Ejercicio2.js.map