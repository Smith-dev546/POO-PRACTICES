"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Alarma {
    codigoAcces;
    estado = true;
    constructor(codigo) {
        this.codigoAcces = codigo;
    }
    Desactivar(intento) {
        if (intento === this.codigoAcces) {
            this.estado = false;
            console.log(`Alarma desactivada Exitosamente`);
        }
        else {
            console.log(`
                        El codigo ingresado es incorrecto!
                        Vuelve a intentarlo dentro de 5 minutos`);
        }
    }
}
const Persona = new Alarma("123");
Persona.Desactivar("1234");
//# sourceMappingURL=Ejercicio4.js.map