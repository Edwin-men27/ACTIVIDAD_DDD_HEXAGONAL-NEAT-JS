"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aplicacion = void 0;
const aggregate_root_1 = require("../shared/aggregate-root");
const aplicacion_id_vo_1 = require("./value-objects/aplicacion-id.vo");
const estado_aplicacion_vo_1 = require("./value-objects/estado-aplicacion.vo");
const exceptions_1 = require("./exceptions");
class Aplicacion extends aggregate_root_1.AggregateRoot {
    id;
    _nombre;
    _proveedor;
    _categoria;
    _lenguajePrincipal;
    _lenguajeSecundario;
    _usaBaseDatos;
    _requiereConexionRed;
    _numBits;
    _sistemaOperativo;
    _requisitosHardware;
    _licencia;
    _precio;
    _descripcion;
    _web;
    _correo;
    _tamanoInstalador;
    _estadoAplicacion;
    _versiones;
    _createdAt;
    _updatedAt;
    constructor(id, _nombre, _proveedor, _categoria, _lenguajePrincipal, _lenguajeSecundario, _usaBaseDatos, _requiereConexionRed, _numBits, _sistemaOperativo, _requisitosHardware, _licencia, _precio, _descripcion, _web, _correo, _tamanoInstalador, _estadoAplicacion, _versiones, _createdAt, _updatedAt) {
        super();
        this.id = id;
        this._nombre = _nombre;
        this._proveedor = _proveedor;
        this._categoria = _categoria;
        this._lenguajePrincipal = _lenguajePrincipal;
        this._lenguajeSecundario = _lenguajeSecundario;
        this._usaBaseDatos = _usaBaseDatos;
        this._requiereConexionRed = _requiereConexionRed;
        this._numBits = _numBits;
        this._sistemaOperativo = _sistemaOperativo;
        this._requisitosHardware = _requisitosHardware;
        this._licencia = _licencia;
        this._precio = _precio;
        this._descripcion = _descripcion;
        this._web = _web;
        this._correo = _correo;
        this._tamanoInstalador = _tamanoInstalador;
        this._estadoAplicacion = _estadoAplicacion;
        this._versiones = _versiones;
        this._createdAt = _createdAt;
        this._updatedAt = _updatedAt;
    }
    static create(nombre, proveedor, categoria, lenguajePrincipal, lenguajeSecundario, usaBaseDatos, requiereConexionRed, numBits, sistemaOperativo, requisitosHardware, licencia, precio, descripcion, web, correo, tamanoInstalador) {
        const app = new Aplicacion(aplicacion_id_vo_1.AplicacionId.new(), nombre, proveedor, categoria, lenguajePrincipal, lenguajeSecundario, usaBaseDatos, requiereConexionRed, numBits, sistemaOperativo, requisitosHardware, licencia, precio, descripcion, web, correo, tamanoInstalador, new estado_aplicacion_vo_1.EstadoAplicacion('ACTIVA'), [], new Date(), null);
        app.ensureConsistencia();
        return app;
    }
    static restore(id, nombre, proveedor, categoria, lenguajePrincipal, lenguajeSecundario, usaBaseDatos, requiereConexionRed, numBits, sistemaOperativo, requisitosHardware, licencia, precio, descripcion, web, correo, tamanoInstalador, estadoAplicacion, versiones, createdAt, updatedAt) {
        const app = new Aplicacion(id, nombre, proveedor, categoria, lenguajePrincipal, lenguajeSecundario, usaBaseDatos, requiereConexionRed, numBits, sistemaOperativo, requisitosHardware, licencia, precio, descripcion, web, correo, tamanoInstalador, estadoAplicacion, versiones, createdAt, updatedAt);
        app.ensureConsistencia();
        return app;
    }
    get nombre() {
        return this._nombre;
    }
    get proveedor() {
        return this._proveedor;
    }
    get categoria() {
        return this._categoria;
    }
    get lenguajePrincipal() {
        return this._lenguajePrincipal;
    }
    get lenguajeSecundario() {
        return this._lenguajeSecundario;
    }
    get usaBaseDatos() {
        return this._usaBaseDatos;
    }
    get requiereConexionRed() {
        return this._requiereConexionRed;
    }
    get numBits() {
        return this._numBits;
    }
    get sistemaOperativo() {
        return this._sistemaOperativo;
    }
    get requisitosHardware() {
        return this._requisitosHardware;
    }
    get licencia() {
        return this._licencia;
    }
    get precio() {
        return this._precio;
    }
    get descripcion() {
        return this._descripcion;
    }
    get web() {
        return this._web;
    }
    get correo() {
        return this._correo;
    }
    get tamanoInstalador() {
        return this._tamanoInstalador;
    }
    get estadoAplicacion() {
        return this._estadoAplicacion;
    }
    get versiones() {
        return [...this._versiones];
    }
    get createdAt() {
        return this._createdAt;
    }
    get updatedAt() {
        return this._updatedAt;
    }
    actualizar(props) {
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
    cambiarEstadoConexion(requiereConexionRed, web) {
        this._requiereConexionRed = requiereConexionRed;
        this._web = requiereConexionRed ? web : web !== undefined ? web : this._web;
        this.ensureConsistencia();
        this._updatedAt = new Date();
    }
    cambiarLicencia(licencia, precio) {
        this._licencia = licencia;
        this._precio = precio;
        this.ensureConsistencia();
        this._updatedAt = new Date();
    }
    agregarVersion(version) {
        const repetida = this._versiones.find((v) => v.numeroVersion.compareTo(version.numeroVersion) === 0);
        if (repetida) {
            throw new exceptions_1.VersionDuplicadaException(version.numeroVersion.value);
        }
        const ultima = this._versiones[this._versiones.length - 1];
        if (ultima && !version.isGreaterThan(ultima)) {
            throw new exceptions_1.VersionNoValidaException();
        }
        this._versiones.push(version);
        this._updatedAt = new Date();
    }
    cambiarEstado(estado) {
        if (estado.value === 'ACTIVA') {
            this.ensureConsistencia();
        }
        this._estadoAplicacion = estado;
        this._updatedAt = new Date();
    }
    validarCompatibilidad(sistemaOperativoUsuario, arquitecturaBitsUsuario, requisitosHardwareUsuario) {
        const razones = [];
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
            }
            else if (!entrada.includes(this._requisitosHardware.value.toLowerCase())) {
                razones.push('No cumple los requisitos de hardware declarados');
            }
        }
        return { aprobado: razones.length === 0, razones };
    }
    ensureConsistencia() {
        if (!this._nombre || !this._proveedor || !this._categoria || !this._lenguajePrincipal) {
            throw new Error('Datos básicos de la aplicación incompletos');
        }
        if (this._lenguajeSecundario && this._lenguajeSecundario.value === this._lenguajePrincipal.value) {
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
exports.Aplicacion = Aplicacion;
//# sourceMappingURL=aplicacion.entity.js.map