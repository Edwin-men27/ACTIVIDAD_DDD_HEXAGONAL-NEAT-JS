"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionNoValidaException = exports.VersionDuplicadaException = exports.NombreAplicacionDuplicadoException = exports.AplicacionNotFoundException = void 0;
class AplicacionNotFoundException extends Error {
    constructor() {
        super('Aplicación no encontrada');
    }
}
exports.AplicacionNotFoundException = AplicacionNotFoundException;
class NombreAplicacionDuplicadoException extends Error {
    constructor(nombre) {
        super(`Ya existe una aplicación con el nombre ${nombre}`);
    }
}
exports.NombreAplicacionDuplicadoException = NombreAplicacionDuplicadoException;
class VersionDuplicadaException extends Error {
    constructor(numeroVersion) {
        super(`Ya existe una versión ${numeroVersion} registrada`);
    }
}
exports.VersionDuplicadaException = VersionDuplicadaException;
class VersionNoValidaException extends Error {
    constructor() {
        super('La nueva versión debe ser mayor que la última registrada');
    }
}
exports.VersionNoValidaException = VersionNoValidaException;
//# sourceMappingURL=exceptions.js.map