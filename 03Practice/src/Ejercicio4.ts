// La clase es abstracta: no pouedes hacer "new Empleado()"
abstract class Empleado{
    constructor(protected nombre: string, protected id: string){
        if(!nombre) throw new Error("Nombre requerido");
    }

    //Metodo abtracto: Oblkiga a las hijas a calcular sus propio salario
    abstract CalcularSalario(): number;

    public mostrarRecibo(): void{
        console.log(`Empleado: ${this.nombre} | ID: ${this.id}`);
        console.log(`Salario Neto: $${this.CalcularSalario()}`);
    }
}

class Desarrollador extends Empleado{
    constructor(nombre: string, id: string, private proyecto: string){
        super(nombre, id);
    }

    //Implementacion obligatoria
    override CalcularSalario(): number {
        return 2500;    //Salario fijo para devs
    }
}

class Freelancer extends Empleado{
    constructor(nombre: string, id: string, private horas: number, private tarifa: number){
        super(nombre, id);
        if(horas < 0 || tarifa < 0) throw new Error("Valores invalidos");
    }

    override CalcularSalario(): number {
        return this.horas * this.tarifa;
    }
}

//INSTANCIAS
try{
    const emp1 = new Desarrollador("Alex", "DEV-01", "App Movil");
    const emp2= new Freelancer("Sofia", "FREE-05", 40, 25);

    emp1.mostrarRecibo();
    console.log("---");
    emp2.mostrarRecibo();
}catch(e: any){
    console.log("Error: " + e.message);
}