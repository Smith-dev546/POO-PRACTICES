// Clase abstracta Electrodomestico
abstract class Electrodomestico {
    constructor(protected marca: string) {}
    
    // Método abstracto que las hijas deben implementar
    abstract funcionar(): void;
}

// Clase Licuadora que extiende de Electrodomestico
class Licuadora extends Electrodomestico {
    override funcionar(): void {
        console.log(`La licuadora ${this.marca} esta moliendo fruta`);
    }
}

// Clase Microondas que extiende de Electrodomestico
class Microondas extends Electrodomestico {
    override funcionar(): void {
        console.log(`El microondas ${this.marca} esta calentando comida`);
    }
}

// Instancias
const licuadora = new Licuadora("Oster");
const microondas = new Microondas("Samsung");

// Llamar al método funcionar
licuadora.funcionar();
microondas.funcionar();