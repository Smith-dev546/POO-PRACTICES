"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseCuenta {
    titular;
    saldo;
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
        if (saldo < 0)
            throw new Error("El saldo no puede ser negativo");
    }
}
class CuentaAhorro extends BaseCuenta {
    titular;
    saldo;
    TasaInteres;
    constructor(titular, saldo, TasaInteres = 0.20) {
        super(titular, saldo);
        this.titular = titular;
        this.saldo = saldo;
        this.TasaInteres = TasaInteres;
    }
    AplicarInteres() {
        let interes = this.saldo * this.TasaInteres;
        let saldoActual = this.saldo - interes;
        console.log(`
                    Nombre: ${this.titular}
                    Saldo: ${this.saldo}
                    Tasa de Interes: ${this.TasaInteres}
                    Interes: ${interes}
                    Saldo Actual: ${saldoActual}`);
    }
}
try {
    const cuenta = new CuentaAhorro("Pepito", 5);
    cuenta.AplicarInteres();
    //Cuenta Error
    console.log("Intentando registrar cuenta sin saldo");
    const errorCuenta = new CuentaAhorro("Juan", -9);
}
catch (error) {
    console.log(`EROR EN REGISTRO: ${error.message}`);
}
//# sourceMappingURL=Ejercicio1.js.map