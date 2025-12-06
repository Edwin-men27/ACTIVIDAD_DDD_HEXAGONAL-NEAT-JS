import { AggregateRoot } from '../shared/aggregate-root';
import { Descripcion } from './value-objects/descripcion.vo';
import { Email } from './value-objects/email.vo';
import { NombreAplicacion } from './value-objects/nombre-aplicacion.vo';
import { NumBits } from './value-objects/num-bits.vo';
import { Precio } from './value-objects/precio.vo';
import { Proveedor } from './value-objects/proveedor.vo';
import { AplicacionId } from './value-objects/aplicacion-id.vo';
import { LicenciaTipo } from './value-objects/licencia-tipo.vo';
import { Url } from './value-objects/url.vo';
import { TamanoInstalador } from './value-objects/tamano-instalador.vo';
import { Categoria } from './value-objects/categoria.vo';
import { Lenguaje } from './value-objects/lenguaje.vo';
import { SistemaOperativo } from './value-objects/sistema-operativo.vo';
import { RequisitosHardware } from './value-objects/requisitos-hardware.vo';
import { EstadoAplicacion } from './value-objects/estado-aplicacion.vo';
import { VersionAplicacion } from './version-aplicacion.entity';
import { VersionDuplicadaException, VersionNoValidaException } from './exceptions';

interface ActualizarAplicacionProps {
  proveedor?: Proveedor;
  categoria?: Categoria;
  lenguajePrincipal?: Lenguaje;
  lenguajeSecundario?: Lenguaje | null;
  usaBaseDatos?: boolean;
  requiereConexionRed?: boolean;
  numBits?: NumBits;
  sistemaOperativo?: SistemaOperativo;
  requisitosHardware?: RequisitosHardware | null;
  licencia?: LicenciaTipo;
  precio?: Precio;
  descripcion?: Descripcion | null;
  web?: Url | null;
  correo?: Email;
  tamanoInstalador?: TamanoInstalador;
}

export class Aplicacion extends AggregateRoot {
  private constructor(
    public readonly id: AplicacionId,
    private _nombre: NombreAplicacion,
    private _proveedor: Proveedor,
    private _categoria: Categoria,
    private _lenguajePrincipal: Lenguaje,
    private _lenguajeSecundario: Lenguaje | null,
    private _usaBaseDatos: boolean,
    private _requiereConexionRed: boolean,
    private _numBits: NumBits,
    private _sistemaOperativo: SistemaOperativo,
    private _requisitosHardware: RequisitosHardware | null,
    private _licencia: LicenciaTipo,
    private _precio: Precio,
    private _descripcion: Descripcion | null,
    private _web: Url | null,
    private _correo: Email,
    private _tamanoInstalador: TamanoInstalador,
    private _estadoAplicacion: EstadoAplicacion,
    private _versiones: VersionAplicacion[],
    private _createdAt: Date,
    private _updatedAt?: Date | null,
  ) {
    super();
  }

  static create(
    nombre: NombreAplicacion,
    proveedor: Proveedor,
    categoria: Categoria,
    lenguajePrincipal: Lenguaje,
    lenguajeSecundario: Lenguaje | null,
    usaBaseDatos: boolean,
    requiereConexionRed: boolean,
    numBits: NumBits,
    sistemaOperativo: SistemaOperativo,
    requisitosHardware: RequisitosHardware | null,
    licencia: LicenciaTipo,
    precio: Precio,
    descripcion: Descripcion | null,
    web: Url | null,
    correo: Email,
    tamanoInstalador: TamanoInstalador,
  ): Aplicacion {
    const app = new Aplicacion(
      AplicacionId.new(),
      nombre,
      proveedor,
      categoria,
      lenguajePrincipal,
      lenguajeSecundario,
      usaBaseDatos,
      requiereConexionRed,
      numBits,
      sistemaOperativo,
      requisitosHardware,
      licencia,
      precio,
      descripcion,
      web,
      correo,
      tamanoInstalador,
      new EstadoAplicacion('ACTIVA'),
      [],
      new Date(),
      null,
    );
    app.ensureConsistencia();
    return app;
  }

  static restore(
    id: AplicacionId,
    nombre: NombreAplicacion,
    proveedor: Proveedor,
    categoria: Categoria,
    lenguajePrincipal: Lenguaje,
    lenguajeSecundario: Lenguaje | null,
    usaBaseDatos: boolean,
    requiereConexionRed: boolean,
    numBits: NumBits,
    sistemaOperativo: SistemaOperativo,
    requisitosHardware: RequisitosHardware | null,
    licencia: LicenciaTipo,
    precio: Precio,
    descripcion: Descripcion | null,
    web: Url | null,
    correo: Email,
    tamanoInstalador: TamanoInstalador,
    estadoAplicacion: EstadoAplicacion,
    versiones: VersionAplicacion[],
    createdAt: Date,
    updatedAt?: Date | null,
  ): Aplicacion {
    const app = new Aplicacion(
      id,
      nombre,
      proveedor,
      categoria,
      lenguajePrincipal,
      lenguajeSecundario,
      usaBaseDatos,
      requiereConexionRed,
      numBits,
      sistemaOperativo,
      requisitosHardware,
      licencia,
      precio,
      descripcion,
      web,
      correo,
      tamanoInstalador,
      estadoAplicacion,
      versiones,
      createdAt,
      updatedAt,
    );
    app.ensureConsistencia();
    return app;
  }

  get nombre(): NombreAplicacion {
    return this._nombre;
  }
  get proveedor(): Proveedor {
    return this._proveedor;
  }
  get categoria(): Categoria {
    return this._categoria;
  }
  get lenguajePrincipal(): Lenguaje {
    return this._lenguajePrincipal;
  }
  get lenguajeSecundario(): Lenguaje | null {
    return this._lenguajeSecundario;
  }
  get usaBaseDatos(): boolean {
    return this._usaBaseDatos;
  }
  get requiereConexionRed(): boolean {
    return this._requiereConexionRed;
  }
  get numBits(): NumBits {
    return this._numBits;
  }
  get sistemaOperativo(): SistemaOperativo {
    return this._sistemaOperativo;
  }
  get requisitosHardware(): RequisitosHardware | null {
    return this._requisitosHardware;
  }
  get licencia(): LicenciaTipo {
    return this._licencia;
  }
  get precio(): Precio {
    return this._precio;
  }
  get descripcion(): Descripcion | null {
    return this._descripcion;
  }
  get web(): Url | null {
    return this._web;
  }
  get correo(): Email {
    return this._correo;
  }
  get tamanoInstalador(): TamanoInstalador {
    return this._tamanoInstalador;
  }
  get estadoAplicacion(): EstadoAplicacion {
    return this._estadoAplicacion;
  }
  get versiones(): VersionAplicacion[] {
    return [...this._versiones];
  }
  get createdAt(): Date {
    return this._createdAt;
  }
  get updatedAt(): Date | null | undefined {
    return this._updatedAt;
  }

  actualizar(props: ActualizarAplicacionProps): void {
    this._proveedor = props.proveedor ?? this._proveedor;
    this._categoria = props.categoria ?? this._categoria;
    this._lenguajePrincipal = props.lenguajePrincipal ?? this._lenguajePrincipal;
    if (props.lenguajeSecundario !== undefined) {
      this._lenguajeSecundario = props.lenguajeSecundario;
    }
    if (props.usaBaseDatos !== undefined) {
      this._usaBaseDatos = props.usaBaseDatos;
    }
    if (props.requiereConexionRed !== undefined) {
      this._requiereConexionRed = props.requiereConexionRed;
    }
    this._numBits = props.numBits ?? this._numBits;
    this._sistemaOperativo = props.sistemaOperativo ?? this._sistemaOperativo;
    if (props.requisitosHardware !== undefined) {
      this._requisitosHardware = props.requisitosHardware;
    }
    this._licencia = props.licencia ?? this._licencia;
    this._precio = props.precio ?? this._precio;
    this._descripcion = props.descripcion ?? this._descripcion;
    if (props.web !== undefined) {
      this._web = props.web;
    }
    this._correo = props.correo ?? this._correo;
    this._tamanoInstalador = props.tamanoInstalador ?? this._tamanoInstalador;

    this.ensureConsistencia();
    this._updatedAt = new Date();
  }

  cambiarEstadoConexion(requiereConexionRed: boolean, web: Url | null): void {
    this._requiereConexionRed = requiereConexionRed;
    this._web = requiereConexionRed ? web : web !== undefined ? web : this._web;
    this.ensureConsistencia();
    this._updatedAt = new Date();
  }

  cambiarLicencia(licencia: LicenciaTipo, precio: Precio): void {
    this._licencia = licencia;
    this._precio = precio;
    this.ensureConsistencia();
    this._updatedAt = new Date();
  }

  agregarVersion(version: VersionAplicacion): void {
    const repetida = this._versiones.find((v) => v.numeroVersion.compareTo(version.numeroVersion) === 0);
    if (repetida) {
      throw new VersionDuplicadaException(version.numeroVersion.value);
    }
    const ultima = this._versiones[this._versiones.length - 1];
    if (ultima && !version.isGreaterThan(ultima)) {
      throw new VersionNoValidaException();
    }
    this._versiones.push(version);
    this._updatedAt = new Date();
  }

  cambiarEstado(estado: EstadoAplicacion): void {
    if (estado.value === 'ACTIVA') {
      this.ensureConsistencia();
    }
    this._estadoAplicacion = estado;
    this._updatedAt = new Date();
  }

  validarCompatibilidad(
    sistemaOperativoUsuario: string,
    arquitecturaBitsUsuario: number,
    requisitosHardwareUsuario?: string,
  ): { aprobado: boolean; razones: string[] } {
    const razones: string[] = [];
    if (this._sistemaOperativo.value.toLowerCase() !== sistemaOperativoUsuario.trim().toLowerCase()) {
      razones.push('Sistema operativo incompatible');
    }
    if (arquitecturaBitsUsuario < this._numBits.value) {
      razones.push('Arquitectura de bits insuficiente');
    }
    if (this._requisitosHardware) {
      const entrada = requisitosHardwareUsuario?.toLowerCase().trim();
      if (!entrada) {
        razones.push('Requisitos de hardware no especificados');
      } else if (!entrada.includes(this._requisitosHardware.value.toLowerCase())) {
        razones.push('No cumple los requisitos de hardware declarados');
      }
    }
    return { aprobado: razones.length === 0, razones };
  }

  private ensureConsistencia(): void {
    if (!this._nombre || !this._proveedor || !this._categoria || !this._lenguajePrincipal) {
      throw new Error('Datos básicos de la aplicación incompletos');
    }
    if (this._lenguajeSecundario && this._lenguajeSecundario.value === this._lenguajePrincipal.value) {
      // no-op, permitido, pero se valida presencia de instancia
    }
    if (this._usaBaseDatos && !this._requisitosHardware) {
      throw new Error('Si la aplicación usa base de datos se requieren requisitos de hardware');
    }
    if (this._requiereConexionRed && !this._web) {
      throw new Error('Si la aplicación requiere conexión a internet la web es obligatoria');
    }
    if (!this._correo) {
      throw new Error('El correo de contacto es obligatorio');
    }
    if (this._precio.value < 0) {
      throw new Error('El precio no puede ser negativo');
    }
    if (this._licencia.value === 'gratuita' && this._precio.value !== 0) {
      throw new Error('Una licencia gratuita debe tener precio 0');
    }
    if (this._tamanoInstalador.value <= 0) {
      throw new Error('El tamaño del instalador debe ser mayor a 0');
    }
  }
}
