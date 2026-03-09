class Vehiculo{

    protected marca: string;
    protected modelo: string;
    protected anio: number;

    constructor(marca:string, modelo:string, anio:number){

        if(!marca || !modelo) throw new Error("Marca y modelo son obligatorias ");
        if(anio > new Date().getFullYear()) throw Error("El anio no es valido")
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    public mostrarInformcion(): void{
        console.log(`
                    Vehiculo: ${this.marca} ${this.modelo} (${this.anio})`);
    }
}

class Automovil extends Vehiculo{
    private numPuertas: number;

    constructor(marca:string, modelo:string, anio:number, numPuertas: number){
        super(marca, modelo, anio);
        this.numPuertas = numPuertas;
    }

    public override mostrarInformcion(): void {
        super.mostrarInformcion();
        console.log(`Numero de puertas: ${this.numPuertas}`);
    }
}

console.log(`---- Iniciando Registro de Vehiculos ----`);

try{
    const miCarro = new Automovil("", "", 2030, 2);
    miCarro.mostrarInformcion();
} catch(error: any){
    console.log(`[Log]: Se bloqueo un intento de registro invalido. Razon: ${error.message}`);
}

console.log(`--- Fin del proceso. El sistema continua en ejecucuion ---`);