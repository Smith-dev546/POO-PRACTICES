"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// EL CONTRATO (Clase Abstracta)
class Notificacion {
    destinatario;
    constructor(destinatario) {
        this.destinatario = destinatario;
    }
}
// LAS FORMAS (Clases Hijas)
class MensajeSMS extends Notificacion {
    enviar(mensaje) {
        console.log(`[SMS] Enviando a ${this.destinatario}: ${mensaje}`);
    }
}
class CorreoElectronico extends Notificacion {
    enviar(mensaje) {
        console.log(`[Email] Enviando a ${this.destinatario}: << ${mensaje} >>`);
    }
}
// --- PARTE 2 (Cuadro pequeño) ---
console.log("=== SISTEMA DE ALERTAS MULTICANAL ===");
rl.question("Elija canal (1: SMS, 2: Email): ", (opcion) => {
    rl.question("Escriba su mensaje: ", (texto) => {
        // Creamos una variable del tipo PADRE
        let miAlerta;
        if (opcion === "1") {
            miAlerta = new MensajeSMS("7788-9900");
        }
        else {
            miAlerta = new CorreoElectronico("soporte@empresa.com");
        }
        miAlerta.enviar(texto);
        rl.close();
    });
});
//# sourceMappingURL=Ejemplo1.js.map