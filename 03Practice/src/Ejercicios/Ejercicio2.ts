// Clase abstracta MaquinaBebida
abstract class MaquinaBebida {
    constructor(protected tipo: string) {}
    
    // Método abstracto que las hijas deben implementar
    abstract servir(): void;
}

// Clase Cafetera que extiende de MaquinaBebida
class Cafetera extends MaquinaBebida {
    constructor() {
        super("Cafetera");
    }
    
    override servir(): void {
        console.log(`${this.tipo}: Sirviendo un café caliente`);
    }
}

// Clase DispensadorSoda que extiende de MaquinaBebida
class DispensadorSoda extends MaquinaBebida {
    constructor() {
        super("Dispensador de Soda");
    }
    
    override servir(): void {
        console.log(`${this.tipo}: Sirviendo soda con hielo`);
    }
}

// Instancias
const cafetera = new Cafetera();
const dispensador = new DispensadorSoda();

// Llamar al método servir
cafetera.servir();
dispensador.servir();