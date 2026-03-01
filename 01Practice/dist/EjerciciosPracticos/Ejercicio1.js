"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empleado {
    nombre;
    SalarioBase = 400;
    horasExtras;
    constructor(nombre, horasExtras) {
        this.nombre = nombre;
        this.horasExtras = horasExtras;
    }
    Salario() {
        let hora = 5;
        let PagoHoras = this.horasExtras * hora;
        let pagoTotal = this.SalarioBase + PagoHoras;
        console.log(`
                    Su Salario es: $${this.SalarioBase}
                    Realizo: ${this.horasExtras} horas extras
                    Su pago por horas extras es: $${PagoHoras}
                    Su pago Total es: $${pagoTotal}`);
    }
}
const Empleado1 = new Empleado("Pepito", 10);
Empleado1.Salario();
//# sourceMappingURL=Ejercicio1.js.map