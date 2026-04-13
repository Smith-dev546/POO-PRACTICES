class Usuario {
    // 1. ATRIBUTOS PRIVADOS (Encapsulados)
    private _id: number;
    private _nombre: string;
    private _edad: number;

    constructor(id: number, nombre: string, edad: number) {
        this._id = id;
        this._nombre = nombre;
        this._edad = edad;
    }

    // 2. GETTER para el ID (Solo Lectura)
    // No creamos un SET para el ID porque el ID nunca debe cambiar
    get id(): number {
        return this._id;
    }

    // 3. GET y SET para el NOMBRE (Lectura y Escritura básica)
    get nombre(): string {
        return this._nombre.toUpperCase(); // Retorna siempre en mayúsculas
    }

    set nombre(nuevoNombre: string) {
        if (nuevoNombre.length > 2) {
            this._nombre = nuevoNombre;
        } else {
            console.log("Error: El nombre es muy corto.");
        }
    }

    // 4. GET y SET para la EDAD (Con lógica de validación)
    get edad(): number {
        return this._edad;
    }

    set edad(nuevaEdad: number) {
        // Regla de negocio: No aceptamos menores de 18 ni edades irreales
        if (nuevaEdad >= 18 && nuevaEdad <= 99) {
            this._edad = nuevaEdad;
            console.log("Edad actualizada a: " + nuevaEdad);
        } else {
            console.log("Error: Edad no permitida para el sistema.");
        }
    }
}

// --- PRUEBA DEL SISTEMA ---
const usuario1 = new Usuario(101, "beto", 22);

console.log("ID del usuario: " + usuario1.id); // Funciona (Get)
// usuario1.id = 200; // ERROR: No existe un Set para el ID, es inmutable.

// usuario1.nombre = "Be"; // Error: Nombre muy corto
usuario1.nombre = "Bullicio"; // Funciona (Set)
console.log("Nombre: " + usuario1.nombre); // Muestro "BULLICIO" (Gracias al Get)

// usuario1.edad = 15; // Error: Validación de minoría de edad
usuario1.edad = 25; // Funciona (Set)
