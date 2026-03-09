"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BasePersona {
    nombre;
    edad;
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        if (edad < 0)
            throw new Error("La edad debe ser valida");
    }
    Presentarse() {
        console.log(`Nombre: ${this.nombre} | Edad: ${this.edad}`);
    }
}
class Estudiante extends BasePersona {
    nombre;
    edad;
    carnet;
    constructor(nombre, edad, carnet) {
        super(nombre, edad);
        this.nombre = nombre;
        this.edad = edad;
        this.carnet = carnet;
    }
    Presentarse() {
        console.log(`Nombre: ${this.nombre} | Edad: ${this.edad} | carnet: ${this.carnet}`);
    }
}
class Docente extends BasePersona {
    nombre;
    edad;
    especialidad;
    constructor(nombre, edad, especialidad) {
        super(nombre, edad);
        this.nombre = nombre;
        this.edad = edad;
        this.especialidad = especialidad;
    }
    Presentarse() {
        console.log(`Nombre: ${this.nombre} | Edad: ${this.edad} | Especialidad: ${this.especialidad}`);
    }
}
try {
    const Persona1 = new BasePersona("Pepito", 20);
    Persona1.Presentarse();
    //Registrar persona con edad Invalida
    const errorPersona = new BasePersona("Juan", -9);
}
catch (error) {
    console.log(`EROR EN REGISTRO: ${error.message}`);
}
//# sourceMappingURL=Ejercicio2.js.map