class TanqueCombustible{
    CapacidadMaxima: number = 10;
    nivelActual:number;

    constructor(nivelActual:number){
        this.nivelActual = nivelActual;
    }

    AgregarCombustible(combustible: number): void{
        const nuevoNivel = this.nivelActual + combustible;
        
        if (nuevoNivel > this.CapacidadMaxima) {
            const espacioDisponible = this.CapacidadMaxima - this.nivelActual;
            console.log(`No se puede agregar ${combustible}L. Capacidad máxima excedida.`);
            console.log(`Espacio disponible: ${espacioDisponible}L`);
        } else {
            this.nivelActual = nuevoNivel;
            console.log(`Se agregaron ${combustible}L. Nivel actual: ${this.nivelActual}L`);
        }
    }

    consumir(consumo:number): void{
        if (this.nivelActual >= consumo) {
            this.nivelActual -= consumo;
            console.log(`Consumo exitoso. Nivel actual: ${this.nivelActual}L`);
        } else {
            console.log(`Combustible insuficiente. Disponible: ${this.nivelActual}L, Requerido: ${consumo}L`);
        }
    }
}

const recorrido = new TanqueCombustible(10);
recorrido.AgregarCombustible(5);
recorrido.consumir(5);