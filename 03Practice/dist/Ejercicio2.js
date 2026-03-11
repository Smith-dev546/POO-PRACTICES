"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MetodoPago {
}
class TarjetaCredito extends MetodoPago {
    ProcesarPago(monto) {
        console.log(`Validando tarjeta y cobrando: $${monto}`);
    }
}
class PayPal extends MetodoPago {
    ProcesarPago(monto) {
        console.log(`Redirigiendo a API de PayPal para cobrar: $${monto}`);
    }
}
//La funcion recibe el tipo General (Metodo Pago)
function realizarCompra(metodo, total) {
    metodo.ProcesarPago(total); //No sabemos que es, pero sabemos que puede pagar
}
//Instancias
const Pago1 = new TarjetaCredito();
const Pago2 = new PayPal();
realizarCompra(Pago1, 150);
realizarCompra(Pago2, 80);
//# sourceMappingURL=Ejercicio2.js.map