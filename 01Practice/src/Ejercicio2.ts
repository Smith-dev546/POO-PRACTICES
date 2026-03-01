class OrdenCafe{
    TipoCafe: string;
    cantidad: number;
    precio: number;

    constructor(TipoCafe:string, cantidad:number, precio:number){
        this.TipoCafe = TipoCafe;
        this.cantidad = cantidad;
        this.precio = precio;
    }

    TotalPagar(): number{
        return this.cantidad * this.precio;
    }

    ImprimirTicket():void{
        console.log(`
                    Nombre: ${this.TipoCafe}
                    Cantidad: ${this.cantidad}
                    Precio unitario: $${this.precio}
                    Total a pagar: $${this.TotalPagar()} 
                    
                    Gracias por su compra!`);
    }
    
}

const cliente = new OrdenCafe("Capuchino", 5, 3);
cliente.TotalPagar()
cliente.ImprimirTicket();