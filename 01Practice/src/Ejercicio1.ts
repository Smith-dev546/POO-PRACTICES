class Player{
    nombre: string;
    vida: number;

    constructor(nombre:string, vida:number){
        this.nombre = nombre;
        this.vida = vida;
    }

    RecibirDanios(puntos: number): void{
      
        this.vida -= puntos;
        console.log(`
                    ${this.nombre} recibio ${puntos} de danio.
                    Vida restante: ${this.vida}`)
 
    }

    status(){
        if (this.vida > 0){
            console.log(`
                        Nombre: ${this.nombre}
                        Estado: Activo
                        vidas restantes: ${this.vida}`)
        }else{
            console.log(`
                        Nombre: ${this.nombre}
                        Estado: Derrotado`)
        }

    }
}

const Player1 = new Player("Pepito", 3);
Player1.RecibirDanios(4);
Player1.status()