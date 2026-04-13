const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class TermostatoServidores {
    private _temperatura: number;
    private readonly MIN: number = 18;
    private readonly MAX: number = 25;

    constructor(tempInicial: number) {
        // Inicializamos usando el setter para aplicar las reglas desde el principio
        this._temperatura = tempInicial; 
        this.temperatura = tempInicial; 
    }

    // El GETTER: Retorna el valor con la unidad de medida "°C"
    get temperatura(): any {
        return `${this._temperatura}°C`;
    }

    // El SETTER: Lógica de ajuste automático (Clamping)
    set temperatura(valor: number) {
        if (valor < this.MIN) {
            console.log(`--- AVISO: ${valor}°C es demasiado bajo. Ajustando al mínimo permitido: ${this.MIN}°C ---`);
            this._temperatura = this.MIN;
        } else if (valor > this.MAX) {
            console.log(`--- AVISO: ${valor}°C es demasiado alto. Ajustando al máximo permitido: ${this.MAX}°C ---`);
            this._temperatura = this.MAX;
        } else {
            this._temperatura = valor;
            console.log("--- Temperatura establecida correctamente ---");
        }
    }
}

// --- PRUEBA CON READLINE ---
const controlClima = new TermostatoServidores(20);

console.log("=== SISTEMA DE CONTROL: SALA DE SERVIDORES ===");
console.log("Rango permitido: 18°C a 25°C");

rl.question("Ingrese la nueva temperatura para la sala: ", (entrada: string) => {
    const t = parseFloat(entrada);

    // Aplicamos el valor a través del setter
    controlClima.temperatura = t;

    console.log(`\n-----------------------------------------`);
    console.log(`Estado actual del sensor: ${controlClima.temperatura}`);
    console.log(`-----------------------------------------`);
    
    rl.close();
});
