class Producto{
    constructor(
        nombre: string,
        protected PrecioBase: number
    ){}
}

class ProductFisico extends Producto{
    constructor(
        nombre: string,
        protected PrecioBase: number,
        private pesoKG: number
    ){
        super(nombre, PrecioBase);
    }

    public PrecioFinal(): number{
        return this.PrecioBase + (this.pesoKG * 2);
    }
}

class ProductoDigital extends Producto{
    constructor(
        nombre: string,
        protected PrecioBase: number,
        plataforma: string
    ){
        super(nombre, PrecioBase);
    }

    PrecioBaseFinal(): number{
        return this.PrecioBase;
    }
}

const Product = new ProductFisico("Toallas", 10, 5);
console.log(`El precio final del producto ${Product.PrecioFinal()}`);