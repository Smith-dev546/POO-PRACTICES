class Personaje{
    nombre: string;
    nivel: number = 1;

    constructor(nombre:string){
        this.nombre = nombre;
    }

    subirNivel(): void{
        this.nivel++;
        console.log(`Has subido de nivel`);
    }

    Estado(): void{
        console.log(`
                    Nombre: ${this.nombre}
                    Nivel: ${this.nivel}`);
    }
}

const personaje1 = new Personaje("Pepito");
personaje1.subirNivel();
personaje1.Estado();