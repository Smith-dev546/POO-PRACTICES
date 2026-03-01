class Alarma{
    private codigoAcces: string;
    estado: boolean = true;

    constructor(codigo:string){
        this.codigoAcces = codigo;
    }

    Desactivar(intento: string): void{
        if(intento === this.codigoAcces){
            this.estado = false;
            console.log(`Alarma desactivada Exitosamente`);
        }else{
            console.log(`
                        El codigo ingresado es incorrecto!
                        Vuelve a intentarlo dentro de 5 minutos`)
        }
    }
}

const Persona = new Alarma("123");
Persona.Desactivar("1234");