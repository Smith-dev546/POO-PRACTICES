"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sensor {
    id;
    valorActual;
    constructor(id, valorActual) {
        this.id = id;
        this.valorActual = valorActual;
    }
    actualizar(nuevoValor) {
        this.valorActual = nuevoValor;
        console.log(`Sensor ${this.id} actualizo su valor a: ${this.valorActual}`);
        this.procesarLectura(); //Se ejecuta la logica especifica de la hija
    }
}
class SensorTemperatura extends Sensor {
    procesarLectura() {
        if (this.valorActual > 40) {
            console.log(`ALERTA: Temperatura Critica en ${this.id}`);
        }
    }
}
class SensorHumedad extends Sensor {
    procesarLectura() {
        if (this.valorActual < 20) {
            console.log(`ALERTA: Humedad baja en ${this.id}`);
        }
    }
}
//Instancia
const termometro = new SensorTemperatura("Temp_01", 25);
termometro.actualizar(45); //Dispara la alerta
//Instancia de sensor de humedad
const humedad = new SensorHumedad("Temp_02", 30);
humedad.actualizar(15);
//# sourceMappingURL=Ejercicio1.js.map