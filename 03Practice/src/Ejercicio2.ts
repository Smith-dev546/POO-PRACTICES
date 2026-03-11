abstract class MetodoPago{
    abstract ProcesarPago(monto: number): void;
}

class TarjetaCredito extends MetodoPago{
    override ProcesarPago(monto: number): void {
        console.log(`Validando tarjeta y cobrando: $${monto}`);
    }
}

class PayPal extends MetodoPago{
    override ProcesarPago(monto: number): void {
        console.log(`Redirigiendo a API de PayPal para cobrar: $${monto}`);
    }
}

//La funcion recibe el tipo General (Metodo Pago)
function realizarCompra(metodo: MetodoPago, total: number){
    metodo.ProcesarPago(total); //No sabemos que es, pero sabemos que puede pagar
}

//Instancias
const Pago1 = new TarjetaCredito();
const Pago2 = new PayPal();

realizarCompra(Pago1, 150);
realizarCompra(Pago2, 80);