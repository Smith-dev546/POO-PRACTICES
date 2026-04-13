const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class CajaFuerte {
    // Atributo privado que guarda el PIN real
    private _pin: string = "0000";

    constructor(pinInicial: string) {
        this.pin = pinInicial; // Usamos el setter para validar el PIN inicial
    }

    // EL GETTER: Por seguridad, nunca muestra el número real
    get pin(): string {
        return "**** (Protegido)";
    }

    // EL SETTER: Validación estricta de 4 dígitos
    set pin(nuevoPin: string) {
        // Explicación: Verificamos que sean solo números y exactamente 4 caracteres
        const esNumerico = /^\d+$/.test(nuevoPin);
        
        if (nuevoPin.length === 4 && esNumerico) {
            this._pin = nuevoPin;
            console.log("--- PIN actualizado exitosamente ---");
        } else {
            console.log("--- ERROR: El PIN debe tener exactamente 4 dígitos numéricos ---");
        }
    }
}

// --- PRUEBA DEL SISTEMA ---
const miCaja = new CajaFuerte("1234");

console.log("=== CONFIGURACIÓN DE SEGURIDAD: CAJA FUERTE ===");

rl.question("Configure su nuevo PIN de 4 dígitos: ", (entrada: string) => {
    
    // Intentamos asignar el PIN a través del setter
    miCaja.pin = entrada;

    console.log(`\n-----------------------------------------`);
    console.log(`Estado del PIN: ${miCaja.pin}`); 
    console.log(`-----------------------------------------`);
    
    console.log("Nota: El sistema ha guardado su clave pero no la mostrará por pantalla.");
    rl.close();
});
