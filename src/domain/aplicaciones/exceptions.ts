export class AplicacionNotFoundException extends Error {
  constructor() {
    super('Aplicación no encontrada');
  }
}

export class NombreAplicacionDuplicadoException extends Error {
  constructor(nombre: string) {
    super(`Ya existe una aplicación con el nombre ${nombre}`);
  }
}

export class VersionDuplicadaException extends Error {
  constructor(numeroVersion: string) {
    super(`Ya existe una versión ${numeroVersion} registrada`);
  }
}

export class VersionNoValidaException extends Error {
  constructor() {
    super('La nueva versión debe ser mayor que la última registrada');
  }
}
