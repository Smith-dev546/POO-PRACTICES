"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// La clase es abstracta: no pouedes hacer "new Empleado()"
class Empleado {
    nombre;
    id;
    constructor(nombre, id) {
        this.nombre = nombre;
        this.id = id;
        if (!nombre)
            throw new Error("Nombre requerido");
    }
    mostrarRecibo() {
        console.log(`Empleado: ${this.nombre} | ID: ${this.id}`);
        console.log(`Salario Neto: $${this.CalcularSalario()}`);
    }
}
class Desarrollador extends Empleado {
    proyecto;
    constructor(nombre, id, proyecto) {
        super(nombre, id);
        this.proyecto = proyecto;
    }
    //Implementacion obligatoria
    CalcularSalario() {
        return 2500; //Salario fijo para devs
    }
}
class Freelancer extends Empleado {
    horas;
    tarifa;
    constructor(nombre, id, horas, tarifa) {
        super(nombre, id);
        this.horas = horas;
        this.tarifa = tarifa;
        if (horas < 0 || tarifa < 0)
            throw new Error("Valores invalidos");
    }
    CalcularSalario() {
        return this.horas * this.tarifa;
    }
}
//INSTANCIAS
try {
    const emp1 = new Desarrollador("Alex", "DEV-01", "App Movil");
    const emp2 = new Freelancer("Sofia", "FREE-05", 40, 25);
    emp1.mostrarRecibo();
    console.log("---");
    emp2.mostrarRecibo();
}
catch (e) {
    console.log("Error: " + e.message);
}
//# sourceMappingURL=Ejercicio4.js.map