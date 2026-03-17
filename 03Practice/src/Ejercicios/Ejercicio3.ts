// Clase abstracta Persona
abstract class Persona {
    constructor(protected nombre: string) {}
    
    // Método abstracto que las hijas deben implementar
    abstract saludar(): void;
}

// Clase Formal que extiende de Persona
class Formal extends Persona {
    override saludar(): void {
        console.log(`Mucho gusto, mi nombre es ${this.nombre}`);
    }
}

// Clase Informal que extiende de Persona
class Informal extends Persona {
    override saludar(): void {
        console.log(`Que onda, soy ${this.nombre}`);
    }
}

// Instancias
const personaFormal = new Formal("Pepito");
const personaInformal = new Informal("Juan");

// Llamar al método saludar
personaFormal.saludar();
personaInformal.saludar();