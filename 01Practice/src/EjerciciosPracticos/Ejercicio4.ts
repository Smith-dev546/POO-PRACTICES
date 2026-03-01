class ProductTienda{
    nombre: string;
    precio: number;

    constructor(nombre:string, precio: number){
        this.nombre = nombre;
        this.precio = precio;
    }

    Descuento(desc = 0.10): void{
        let descuento;
        let total;
        if(this.precio >= 50){
            descuento = this.precio * desc;
            total = this.precio - descuento;

            console.log(`
                        Felicidades! Aplico al descuento
                        Precio: $${this.precio}
                        Descuento: $${descuento}
                        Total: $${total}`);
        }else{
            console.log("No aplicas al descuento el dia de hoy")
        }
    }
}

const product = new ProductTienda("Toallas", 100);
product.Descuento();