const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// EL CONTRATO (Clase Abstracta)
abstract class Notificacion {
    constructor(protected destinatario: string) {}

    // Todos deben enviar algo, pero el canal cambia
    abstract enviar(mensaje: string): void;
}

// LAS FORMAS (Clases Hijas)
class MensajeSMS extends Notificacion {
    enviar(mensaje: string): void {
        console.log(`[SMS] Enviando a ${this.destinatario}: ${mensaje}`);
    }
}

class CorreoElectronico extends Notificacion {
    enviar(mensaje: string): void {
        console.log(`[Email] Enviando a ${this.destinatario}: << ${mensaje} >>`);
    }
}

// --- PARTE 2 (Cuadro pequeño) ---

console.log("=== SISTEMA DE ALERTAS MULTICANAL ===");

rl.question("Elija canal (1: SMS, 2: Email): ", (opcion: string) => {
    rl.question("Escriba su mensaje: ", (texto: string) => {
        
        // Creamos una variable del tipo PADRE
        let miAlerta: Notificacion;

        if (opcion === "1") {
            miAlerta = new MensajeSMS("7788-9900");
        } else {
            miAlerta = new CorreoElectronico("soporte@empresa.com");
        }

        miAlerta.enviar(texto);

        rl.close();
    });
});
