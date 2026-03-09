class BaseCuenta{

    constructor(
    protected titular: string,
    protected saldo: number
    ){
        if(saldo < 0) throw new Error("El saldo no puede ser negativo");
    }

}

class CuentaAhorro extends BaseCuenta{

    constructor(
        protected titular: string,
        protected saldo: number,
        private TasaInteres: number = 0.20
    ){
        super(titular, saldo);
    }

    public AplicarInteres(): void{

        let interes = this.saldo * this.TasaInteres;
        let saldoActual = this.saldo -interes;

        console.log(`
                    Nombre: ${this.titular}
                    Saldo: ${this.saldo}
                    Tasa de Interes: ${this.TasaInteres}
                    Interes: ${interes}
                    Saldo Actual: ${saldoActual}`)
    }

}

try{
    const cuenta = new CuentaAhorro("Pepito", 5);
    cuenta.AplicarInteres();

    //Cuenta Error
    console.log("Intentando registrar cuenta sin saldo");
    const errorCuenta = new CuentaAhorro("Juan",-9);
}catch(error: any){
    console.log(`EROR EN REGISTRO: ${error.message}`);
}