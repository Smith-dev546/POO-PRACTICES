abstract class Habilidad{
    constructor(protected nombre: string, protected costo: number){}
    abstract usar(): void;
}

class HechizoFuego extends Habilidad{
    override usar(): void {
        console.log(`Lanzando ${this.nombre} Costo: ${this.costo} Mana`)
    }
}

class GolpeEspada extends Habilidad{
    override usar(): void {
        console.log(`Ejecutando ${this.nombre} Costo: ${this.costo} Estamina`)
    }
}

//FUNCION POLIMORFICA (Acepta cualquier cosa que sea Habilidad)
function activarHabilidad(h: Habilidad){
    h.usar();
}

const poder1 = new HechizoFuego("Bola de Fuego", 20);
const poder2 = new GolpeEspada("Corte Veloz", 10);

activarHabilidad(poder1);
activarHabilidad(poder2);