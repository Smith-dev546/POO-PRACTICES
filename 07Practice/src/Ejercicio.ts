// Si usas Node.js estándar, esta es la forma correcta de importar readline
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// EL CONTRATO (Clase Abstracta)
abstract class DispositivoSeguridad {
    constructor(protected ubicacion: string) {}

    // Contrato: Todos deben implementar activar
    abstract activar(): void;
}

// LAS IMPLEMENTACIONES
class AlarmaSonora extends DispositivoSeguridad {
    activar(): void {
        console.log(`[ALERTA]  Sirena activada en ${this.ubicacion}. Sonido a 100dB.`);
    }
}

class SistemaAspersores extends DispositivoSeguridad {
    activar(): void {
        console.log(`[AGUA]  Aspersores en ${this.ubicacion} abiertos. Liberando presión.`);
    }
}

class LucesEmergencia extends DispositivoSeguridad {
    activar(): void {
        console.log(`[LUZ]  Luces estroboscópicas encendidas en ${this.ubicacion}.`);
    }
}

// --- EJECUCIÓN ---
const dispositivos: DispositivoSeguridad[] = [
    new AlarmaSonora("Piso 1 - Pasillo"),
    new SistemaAspersores("Laboratorio"),
    new LucesEmergencia("Salidas de Emergencia")
];

console.log("--- PANEL DE CONTROL DE EMERGENCIAS ---");

rl.question("¿Desea activar el protocolo de emergencia? (si/no): ", (respuesta: string) => {
    if (respuesta.toLowerCase() === "si") {
        console.log("\n!!! INICIANDO PROTOCOLO !!!\n");
        
        // Polimorfismo: recorremos la lista de dispositivos
        dispositivos.forEach(dispositivo => {
            dispositivo.activar();
        });
    } else {
        console.log("Sistema en espera.");
    }
    rl.close();
});
