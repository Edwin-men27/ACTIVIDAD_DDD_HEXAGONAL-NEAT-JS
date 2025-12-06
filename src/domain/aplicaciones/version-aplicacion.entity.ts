import { CambiosVersion } from './value-objects/cambios-version.vo';
import { NumeroVersion } from './value-objects/numero-version.vo';
import { VersionId } from './value-objects/version-id.vo';

export interface VersionAplicacionPrimitives {
  id: string;
  numeroVersion: string;
  fechaPublicacion: Date;
  cambios: string;
}

export class VersionAplicacion {
  private constructor(
    public readonly id: VersionId,
    private _numeroVersion: NumeroVersion,
    private _fechaPublicacion: Date,
    private _cambios: CambiosVersion,
  ) {}

  static create(numeroVersion: NumeroVersion, fechaPublicacion: Date, cambios: CambiosVersion): VersionAplicacion {
    return new VersionAplicacion(VersionId.new(), numeroVersion, fechaPublicacion, cambios);
  }

  static restore(
    id: VersionId,
    numeroVersion: NumeroVersion,
    fechaPublicacion: Date,
    cambios: CambiosVersion,
  ): VersionAplicacion {
    return new VersionAplicacion(id, numeroVersion, fechaPublicacion, cambios);
  }

  get numeroVersion(): NumeroVersion {
    return this._numeroVersion;
  }

  get fechaPublicacion(): Date {
    return this._fechaPublicacion;
  }

  get cambios(): CambiosVersion {
    return this._cambios;
  }

  isGreaterThan(other: VersionAplicacion): boolean {
    return this._numeroVersion.compareTo(other.numeroVersion) > 0;
  }

  toPrimitives(): VersionAplicacionPrimitives {
    return {
      id: this.id.value,
      numeroVersion: this._numeroVersion.value,
      fechaPublicacion: this._fechaPublicacion,
      cambios: this._cambios.value,
    };
  }
}
