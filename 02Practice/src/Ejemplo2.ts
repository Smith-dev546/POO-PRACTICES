class Contenido{
    constructor(
        protected titulo: string,
        protected duracionMinuto: number,
        protected clasificacion: 'A' | 'B' | 'C'
    ) {
        if(!titulo.trim()) throw new Error("El titulo no puede estar vacio");
        if(duracionMinuto <= 0) throw new Error("La duracion debe ser mayor a 0");
    }

    public mostrarDetalles(): void{
        console.log(`Titulo: ${this.titulo} | clasificacion: ${this.clasificacion}`);
    }
}

class Pelicula extends Contenido{
    constructor(
        protected titulo: string,
        protected duracionMinuto: number,
        protected clasificacion: 'A' | 'B' | 'C',
        private director: string
    ){
        super(titulo, duracionMinuto, clasificacion);
        if(!director.trim()) throw Error("El director es obligatorio");
    }

    override mostrarDetalles(): void {
        super.mostrarDetalles();
        console.log(`Director: ${this.director} | Tipo: Largometraje`);
    }
}

class serie extends Contenido{

    constructor(
        titulo: string,
        duracionMinuto: number,
        clasificacion: 'A' | 'B' | 'C',
        private totalEpisodios: number
    ){
        super(titulo, duracionMinuto, clasificacion);
        if (totalEpisodios < 1) throw new Error("La serie debe tener al menos 1 episodio");
    }

    public TiempoTotalMAraton(): number {
        return this.duracionMinuto * this.totalEpisodios;
    }

    override mostrarDetalles(): void {
        super.mostrarDetalles();
        console.log(`
                    Episodios: ${this.totalEpisodios} | Tiempo total: ${this.TiempoTotalMAraton()} min`);
    }
}

console.log(" --- Bienvenidos a UNIVO CINEMAS ---");

try{
    const peli = new Pelicula("Interstellar", 169, "B", "Chritopher Nolan");
    peli.mostrarDetalles();

    console.log("-------------------------");

    const serie1 = new serie("The Beaar", 30, "C", 18);
    serie1.mostrarDetalles();

    console.log("---------------------------------");

    console.log("Intentando registrar serie sin nombre...");
    const errorSerie = new serie("", 45, "A", 10);

}catch(error: any) {
    console.log(`EROR EN REGISTRO: ${error.message}`);
}

console.log(" ---- Proceso Finalizzado ---");