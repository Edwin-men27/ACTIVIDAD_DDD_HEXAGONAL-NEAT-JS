"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionAplicacion = void 0;
const version_id_vo_1 = require("./value-objects/version-id.vo");
class VersionAplicacion {
    id;
    _numeroVersion;
    _fechaPublicacion;
    _cambios;
    constructor(id, _numeroVersion, _fechaPublicacion, _cambios) {
        this.id = id;
        this._numeroVersion = _numeroVersion;
        this._fechaPublicacion = _fechaPublicacion;
        this._cambios = _cambios;
    }
    static create(numeroVersion, fechaPublicacion, cambios) {
        return new VersionAplicacion(version_id_vo_1.VersionId.new(), numeroVersion, fechaPublicacion, cambios);
    }
    static restore(id, numeroVersion, fechaPublicacion, cambios) {
        return new VersionAplicacion(id, numeroVersion, fechaPublicacion, cambios);
    }
    get numeroVersion() {
        return this._numeroVersion;
    }
    get fechaPublicacion() {
        return this._fechaPublicacion;
    }
    get cambios() {
        return this._cambios;
    }
    isGreaterThan(other) {
        return this._numeroVersion.compareTo(other.numeroVersion) > 0;
    }
    toPrimitives() {
        return {
            id: this.id.value,
            numeroVersion: this._numeroVersion.value,
            fechaPublicacion: this._fechaPublicacion,
            cambios: this._cambios.value,
        };
    }
}
exports.VersionAplicacion = VersionAplicacion;
//# sourceMappingURL=version-aplicacion.entity.js.map