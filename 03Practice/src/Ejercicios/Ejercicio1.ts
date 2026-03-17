// Clase abstracta Héroe
abstract class Heroe {
    constructor(protected nombre: string) {}

    // Método abstracto que las hijas deben implementar
    abstract usarPoder(): void;
}

// Clase Volador que extiende de Héroe
class Volador extends Heroe {
    override usarPoder(): void {
        console.log(`${this.nombre}: Estoy volando por los cielos`);
    }
}

// Clase Fuerte que extiende de Héroe
class Fuerte extends Heroe {
    override usarPoder(): void {
        console.log(`${this.nombre}: Estoy levantando un camion`);
    }
}

// Instancias
const heroeVolador = new Volador("Superman");
const heroeFuerte = new Fuerte("Hulk");

// Llamar a sus poderes
heroeVolador.usarPoder();
heroeFuerte.usarPoder();