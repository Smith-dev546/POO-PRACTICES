const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//1. CLASE PADRE
abstract class Ejercicio{
    //Obligatorio: Clacular calorias segun los minutos
    abstract calcularCalorias(minutos: number): number;
}

//2.CLASES HIJAS    
class Correr extends Ejercicio{
    //Correr quema 10 calorias por minuto
    calcularCalorias(minutos: number): number {
        return minutos * 10;
    }
}

class Yoga extends Ejercicio{
    //Yoga quema 4 calorias por minuto
    calcularCalorias(minutos: number): number {
        return minutos * 4;
    }
}

//3. INTERACCION
 console.log(`=== MONITOR DE ACTIVIDAD FISICA ===`);

rl.question("Que ejercicio hizo? (1: Correr, 2: Yoga): ",(opcion: string)=> {
    rl.question("Cuantos minutos entreno?: ", (tiempo: string)=>{

        const minutos = parseFloat(tiempo);
        let entrenamiento: Ejercicio;

        if(opcion === "1"){
            entrenamiento = new Correr();
            console.log(`Gran esfuerzo caardiovascular!`);
        }else{
            entrenamiento = new Yoga();
            console.log(`Excelente para la flexibilidad y mente`);
        }

        const quemadas = entrenamiento.calcularCalorias(minutos);
        console.log(`Total de calorias quemadas: ${quemadas} kcal`);
        rl.close();
    });
});