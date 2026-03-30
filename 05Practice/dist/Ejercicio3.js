"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// 1. CLASE PADRE (El contrato)
class Alarma {
}
// 2. CLASES HIJAS (La implementación específica)
class Incendio extends Alarma {
    sonar() {
        console.log("\n--- ¡ALERTA DE SEGURIDAD! ---");
        console.log("Sonido: ¡BEEP-BEEP-BEEP!");
        console.log("Mensaje: ¡Fuego detectado! Por favor, evacue el edificio de inmediato.");
    }
}
class Reloj extends Alarma {
    sonar() {
        console.log("\n--- ALARMA DESPERTADOR ---");
        console.log("Sonido: ¡RIIIIING-RIIIIING!");
        console.log("Mensaje: ¡Buenos días! Es hora de despertar y empezar el día.");
    }
}
// 3. INTERACCIÓN (Panel de Control)
console.log(`=== PANEL DE ALARMAS CENTRALIZADO ===`);
rl.question("¿Qué alarma desea activar? (1: Incendio, 2: Reloj): ", (opcion) => {
    let alarma;
    if (opcion === "1") {
        alarma = new Incendio();
    }
    else if (opcion === "2") {
        alarma = new Reloj();
    }
    else {
        console.log("Opción no válida. Sistema en espera...");
        rl.close();
        return;
    }
    // Ejecución polimórfica: no importa cuál sea, solo sabemos que "suena"
    alarma.sonar();
    rl.close();
});
//# sourceMappingURL=Ejercicio3.js.map