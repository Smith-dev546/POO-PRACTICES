class Mascota{
    nombre: string;
    hambre: number = 50;

    constructor(nombre: string){
        this.nombre = nombre;
    }

    comer(): void{
        this.hambre -= 20;
        console.log(`
                    Nombre: ${this.nombre}
                    Su mascota comio
                    Nivel de hambre: ${this.hambre}`)
    }

    correr(): void{
        this.hambre += 10;
        console.log(`
                    Nombre: ${this.nombre}
                    Su mascota corrio
                    Nivel de hambre: ${this.hambre}`);
    }
}

const Mascota1 = new Mascota("Firu");
Mascota1.comer();
Mascota1.correr();