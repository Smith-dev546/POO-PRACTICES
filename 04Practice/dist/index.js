"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('readline');
//Configuracion de la interfaz de comunicacion con el usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//1.ABSTRACCION: El "molde" de lo que es un pago
class Pago {
    monto;
    constructor(monto) {
        this.monto = monto;
        if (monto <= 0) {
            throw new Error("El monto debe ser una cantidad positiva");
        }
    }
    //Metodo concreto: Todos los pagos muestran el recibo igual
    mostrarRecibo() {
        console.log(`--------------------------------------
                    RECIBO DE PAGO
                    Monto Procesado: $${this.monto}
                    Estado: Exitoso
                    --------------------------------------`);
    }
}
//2. Herencia: Implementaciones especificas
class PagoEfectivo extends Pago {
    procesarPago() {
        console.log(`Procesando pago en efectivo...`);
        console.log(`Por favor, entregue el dinero al cajero`);
    }
}
class PagoTarjeta extends Pago {
    nroTarjeta;
    constructor(monto, nroTarjeta) {
        super(monto); //Enviamos el monto al padre
        this.nroTarjeta = nroTarjeta;
    }
    procesarPago() {
        console.log(`Conectando con el banco`);
        console.log(`Validando tarjeta terminada en: ${this.nroTarjeta.slice(-4)}`);
        console.log(`Cargo de $${this.monto} autorizado`);
    }
}
//3. INTERACION Y POLIMORFISMO (El programa principal)
console.log(`=== SISTEMA DE COBRO UNIVERSITARIO ===`);
rl.question("Seleccione metodo (1: Efectivo, 2: Tarjeta): ", (opcion) => {
    rl.question('Ingrese el monto a pagar: ', (montoInput) => {
        const montoNum = parseFloat(montoInput);
        let miPago; //Vaariable de tipo Padre (Polimorfismo)
        if (opcion === "1") {
            miPago = new PagoEfectivo(montoNum);
            FinalizarTransaccion(miPago);
        }
        else if (opcion === "2") {
            rl.question("Ingrese su numero de tarjeta: ", (tarjeta) => {
                miPago = new PagoTarjeta(montoNum, tarjeta);
                FinalizarTransaccion(miPago);
            });
        }
        else {
            console.log(`Opcion no valida`);
            rl.close();
        }
    });
});
//Funcion polimorfica: Recibe cualquier objeto que sea un "Pago"
function FinalizarTransaccion(p) {
    console.log(`\n Ejecutando proceso de pago...`);
    p.procesarPago(); //Aqui se decide que codigo correr (Efectivo o Taarjeta)
    p.mostrarRecibo();
    rl.close(); //Cerramos la interfaz para que el programa termine
}
//# sourceMappingURL=index.js.map