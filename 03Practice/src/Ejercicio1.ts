abstract class Sensor{
    constructor(protected id: string, protected valorActual: number){}

    //El padre obliga a procesar la lectura , pero no sabe que tipo de sensor es
    abstract procesarLectura(): void;

    public actualizar(nuevoValor: number): void{
        this.valorActual = nuevoValor;
        console.log(`Sensor ${this.id} actualizo su valor a: ${this.valorActual}`);
        this.procesarLectura(); //Se ejecuta la logica especifica de la hija
    }
}

class SensorTemperatura extends Sensor{
    override procesarLectura(): void {
        if(this.valorActual > 40){
            console.log(`ALERTA: Temperatura Critica en ${this.id}`);
        }
    }
}

class SensorHumedad extends Sensor{
    override procesarLectura(): void {
        if(this.valorActual < 20){
            console.log(`ALERTA: Humedad baja en ${this.id}`);
        }
    }
}

//Instancia
const termometro = new SensorTemperatura("Temp_01", 25);
termometro.actualizar(45);  //Dispara la alerta

//Instancia de sensor de humedad
const humedad = new SensorHumedad("Temp_02", 30);
humedad.actualizar(15);