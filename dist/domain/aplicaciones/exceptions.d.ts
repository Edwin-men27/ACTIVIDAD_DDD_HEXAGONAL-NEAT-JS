export declare class AplicacionNotFoundException extends Error {
    constructor();
}
export declare class NombreAplicacionDuplicadoException extends Error {
    constructor(nombre: string);
}
export declare class VersionDuplicadaException extends Error {
    constructor(numeroVersion: string);
}
export declare class VersionNoValidaException extends Error {
    constructor();
}
