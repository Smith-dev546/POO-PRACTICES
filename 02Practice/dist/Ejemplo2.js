"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Contenido {
    titulo;
    duracionMinuto;
    clasificacion;
    constructor(titulo, duracionMinuto, clasificacion) {
        this.titulo = titulo;
        this.duracionMinuto = duracionMinuto;
        this.clasificacion = clasificacion;
        if (!titulo.trim())
            throw new Error("El titulo no puede estar vacio");
        if (duracionMinuto <= 0)
            throw new Error("La duracion debe ser mayor a 0");
    }
    mostrarDetalles() {
        console.log(`Titulo: ${this.titulo} | clasificacion: ${this.clasificacion}`);
    }
}
class Pelicula extends Contenido {
    titulo;
    duracionMinuto;
    clasificacion;
    director;
    constructor(titulo, duracionMinuto, clasificacion, director) {
        super(titulo, duracionMinuto, clasificacion);
        this.titulo = titulo;
        this.duracionMinuto = duracionMinuto;
        this.clasificacion = clasificacion;
        this.director = director;
        if (!director.trim())
            throw Error("El director es obligatorio");
    }
    mostrarDetalles() {
        super.mostrarDetalles();
        console.log(`Director: ${this.director} | Tipo: Largometraje`);
    }
}
class serie extends Contenido {
    totalEpisodios;
    constructor(titulo, duracionMinuto, clasificacion, totalEpisodios) {
        super(titulo, duracionMinuto, clasificacion);
        this.totalEpisodios = totalEpisodios;
        if (totalEpisodios < 1)
            throw new Error("La serie debe tener al menos 1 episodio");
    }
    TiempoTotalMAraton() {
        return this.duracionMinuto * this.totalEpisodios;
    }
    mostrarDetalles() {
        super.mostrarDetalles();
        console.log(`
                    Episodios: ${this.totalEpisodios} | Tiempo total: ${this.TiempoTotalMAraton()} min`);
    }
}
console.log(" --- Bienvenidos a UNIVO CINEMAS ---");
try {
    const peli = new Pelicula("Interstellar", 169, "B", "Chritopher Nolan");
    peli.mostrarDetalles();
    console.log("-------------------------");
    const serie1 = new serie("The Beaar", 30, "C", 18);
    serie1.mostrarDetalles();
    console.log("---------------------------------");
    console.log("Intentando registrar serie sin nombre...");
    const errorSerie = new serie("", 45, "A", 10);
}
catch (error) {
    console.log(`EROR EN REGISTRO: ${error.message}`);
}
console.log(" ---- Proceso Finalizzado ---");
//# sourceMappingURL=Ejemplo2.js.map