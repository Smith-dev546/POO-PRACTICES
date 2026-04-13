class CuentaBancaria {
  // 1. Atributo privado (Nadie puede tocarlo directamente)
  private _saldo: number;

  constructor(saldoInicial: number) {
    this._saldo = saldoInicial;
  }

  // 2. El GETTER: Para que el usuario pueda ver su saldo
  get saldo(): number {
    return this._saldo;
  }

  // 3. El SETTER: Con reglas de seguridad
  set saldo(nuevoMonto: number) {
    if (nuevoMonto < 0) {
      console.log("Error: No puedes tener un saldo negativo.");
    } else {
      this._saldo = nuevoMonto;
      console.log("Saldo actualizado correctamente.");
    }
  }
}

// --- USO DEL CÓDIGO ---
const miCuenta = new CuentaBancaria(100);

// Usamos el GET (se ve como una variable normal, pero es un método)
console.log("Tu saldo es: " + miCuenta.saldo);

// Usamos el SET
miCuenta.saldo = 500; // Funciona bien
miCuenta.saldo = -20; // Dispara la validación de error