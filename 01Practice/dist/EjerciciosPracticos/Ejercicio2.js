"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CuentaBancaria {
    titular;
    saldo = 0;
    constructor(titular) {
        this.titular = titular;
    }
    depositar(deposito) {
        this.saldo += deposito;
        console.log(`
                    Desposito realizado exitosamente
                    Deposito: $${deposito}
                    Saldo: $${this.saldo}`);
    }
    retirar(retiro) {
        if (retiro > 0 && retiro <= this.saldo) {
            this.saldo -= retiro;
            console.log(`
                        Retiro realizado exitosamente
                        Retiro: $${retiro}
                        Saldo: $${this.saldo}`);
        }
        else {
            console.log(`
                        Saldo insuficiente
                        Retiro que desea realizar: $${retiro}
                        Saldo: $${this.saldo}`);
        }
    }
    consultar() {
        console.log(`
                    Hola ${this.titular}
                    Tu saldo Actual es de: $${this.saldo}`);
    }
}
const cuenta = new CuentaBancaria("Pepito");
cuenta.depositar(10);
cuenta.retirar(15);
cuenta.consultar();
//# sourceMappingURL=Ejercicio2.js.map