"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Si usas Node.js estándar, esta es la forma correcta de importar readline
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// EL CONTRATO (Clase Abstracta)
class DispositivoSeguridad {
    ubicacion;
    constructor(ubicacion) {
        this.ubicacion = ubicacion;
    }
}
// LAS IMPLEMENTACIONES
class AlarmaSonora extends DispositivoSeguridad {
    activar() {
        console.log(`[ALERTA]  Sirena activada en ${this.ubicacion}. Sonido a 100dB.`);
    }
}
class SistemaAspersores extends DispositivoSeguridad {
    activar() {
        console.log(`[AGUA]  Aspersores en ${this.ubicacion} abiertos. Liberando presión.`);
    }
}
class LucesEmergencia extends DispositivoSeguridad {
    activar() {
        console.log(`[LUZ]  Luces estroboscópicas encendidas en ${this.ubicacion}.`);
    }
}
// --- EJECUCIÓN ---
const dispositivos = [
    new AlarmaSonora("Piso 1 - Pasillo"),
    new SistemaAspersores("Laboratorio"),
    new LucesEmergencia("Salidas de Emergencia")
];
console.log("--- PANEL DE CONTROL DE EMERGENCIAS ---");
rl.question("¿Desea activar el protocolo de emergencia? (si/no): ", (respuesta) => {
    if (respuesta.toLowerCase() === "si") {
        console.log("\n!!! INICIANDO PROTOCOLO !!!\n");
        // Polimorfismo: recorremos la lista de dispositivos
        dispositivos.forEach(dispositivo => {
            dispositivo.activar();
        });
    }
    else {
        console.log("Sistema en espera.");
    }
    rl.close();
});
//# sourceMappingURL=Ejercicio.js.map