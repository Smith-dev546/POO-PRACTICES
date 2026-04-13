const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class RegistroMateria {
    private _nombreMateria: string;
    private _nota: number = 0;

    constructor(materia: string) {
        this._nombreMateria = materia;
    }

    // El nombre es de solo lectura (Encapsulado para que no cambie)
    get nombreMateria(): string {
        return this._nombreMateria;
    }

    get nota(): number {
        return this._nota;
    }

    set nota(valor:number){
        //Validacion tecnica: No se acpetan valores fuera del estandar academico
        if(valor >= 0 && valor <= 10){
            this._nota = valor;
        }else{
            console.log("--- ERROR: La calificacion debe estar entre 0.0 y 10.0 ---");
        }
    }

    //Atributo calculado: No existe una variable '_estado', se deduce de la nota
    get estado(): string{
        return this._nota >= 6.0 ? "APROBADO": "REPROBADO";
    }
}

const registro = new RegistroMateria("Programacion Orientada a Objetos");

console.log("=== SISTEMA DE GESTION ACADEMICA ===");
rl.question(`Ingrese la nota para ${registro.nombreMateria}: `,(entrada: string)=>{
    const n = parseFloat(entrada);

    registro.nota = n;

    console.log(`\n-----------------------------------------------------`);
    console.log(`Materia: ${registro.nombreMateria}`);
    console.log(`Nota Final: ${registro.nota}`);
    console.log(`Resultado: ${registro.estado}`);
    console.log(`\n-----------------------------------------------------`);
    rl.close();
});
