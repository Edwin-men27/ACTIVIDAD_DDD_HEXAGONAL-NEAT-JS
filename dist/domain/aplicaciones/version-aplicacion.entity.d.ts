import { CambiosVersion } from './value-objects/cambios-version.vo';
import { NumeroVersion } from './value-objects/numero-version.vo';
import { VersionId } from './value-objects/version-id.vo';
export interface VersionAplicacionPrimitives {
    id: string;
    numeroVersion: string;
    fechaPublicacion: Date;
    cambios: string;
}
export declare class VersionAplicacion {
    readonly id: VersionId;
    private _numeroVersion;
    private _fechaPublicacion;
    private _cambios;
    private constructor();
    static create(numeroVersion: NumeroVersion, fechaPublicacion: Date, cambios: CambiosVersion): VersionAplicacion;
    static restore(id: VersionId, numeroVersion: NumeroVersion, fechaPublicacion: Date, cambios: CambiosVersion): VersionAplicacion;
    get numeroVersion(): NumeroVersion;
    get fechaPublicacion(): Date;
    get cambios(): CambiosVersion;
    isGreaterThan(other: VersionAplicacion): boolean;
    toPrimitives(): VersionAplicacionPrimitives;
}
