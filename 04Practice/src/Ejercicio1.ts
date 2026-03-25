const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//El Molde

abstract class Persona{
    constructor(public nombre: string){}

    //El padre dice que todos saludan, pero no sabe el idioma
    abstract saludar(): void;
}

//2. Las hijas

class Salvadorenio extends Persona{
    saludar(): void {
        console.log(`Hola que tal! Me llamo ${this.nombre}`)
    }
}

class Ingles extends Persona{
    saludar(): void {
        console.log(`Hello! My name is ${this.nombre}`)
    }
}

//ITERACION
console.log(`--- SIMULADOR DE SALUDOS ---`);

rl.question("Como te llamas? ",(nombre:string) =>{
    rl.question("Elige un idioma (1: Espaniol, 2: Ingles) ", (opcion: string) =>{
        
        let alguien: Persona;

        if(opcion === "1"){
            alguien = new Salvadorenio(nombre);
        }else{
            alguien = new Ingles(nombre);
        }

        alguien.saludar();  //Polimorfismo Puro
        rl.close();
    });
});