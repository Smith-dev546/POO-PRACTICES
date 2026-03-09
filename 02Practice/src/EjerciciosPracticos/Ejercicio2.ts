class BasePersona{

    constructor(
        protected nombre: string,
        protected edad: number
    ){
        if (edad < 0) throw new Error("La edad debe ser valida");
    }

    public Presentarse(): void{
        console.log(`Nombre: ${this.nombre} | Edad: ${this.edad}`);
    }
}

class Estudiante extends BasePersona{
    constructor(
        protected nombre: string,
        protected edad: number,
        private carnet: string
    ){
        super(nombre,edad);
    }

    override Presentarse(): void{
        console.log(`Nombre: ${this.nombre} | Edad: ${this.edad} | carnet: ${this.carnet}`)
    }
}

class Docente extends BasePersona{
    constructor(
        protected nombre: string,
        protected edad: number,
        private especialidad: string
    ){
        super(nombre, edad);
    }

    override Presentarse(): void{
        console.log(`Nombre: ${this.nombre} | Edad: ${this.edad} | Especialidad: ${this.especialidad}`);

    }
}

try{
    const Persona1 = new BasePersona("Pepito", 20);
    Persona1.Presentarse();

    //Registrar persona con edad Invalida
    const errorPersona = new BasePersona("Juan", -9);
}catch (error: any){
    console.log(`EROR EN REGISTRO: ${error.message}`);
}

