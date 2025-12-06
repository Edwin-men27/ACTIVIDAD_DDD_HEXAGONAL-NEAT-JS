"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AplicacionMapper = void 0;
class AplicacionMapper {
    static toResponse(aplicacion) {
        return {
            id: aplicacion.id.value,
            nombre: aplicacion.nombre.value,
            proveedor: aplicacion.proveedor.value,
            categoria: aplicacion.categoria.value,
            lenguajePrincipal: aplicacion.lenguajePrincipal.value,
            lenguajeSecundario: aplicacion.lenguajeSecundario?.value ?? null,
            usaBaseDatos: aplicacion.usaBaseDatos,
            requiereConexionRed: aplicacion.requiereConexionRed,
            numBits: aplicacion.numBits.value,
            sistemaOperativo: aplicacion.sistemaOperativo.value,
            requisitosHardware: aplicacion.requisitosHardware?.value ?? null,
            licencia: aplicacion.licencia.value,
            precio: aplicacion.precio.value,
            descripcion: aplicacion.descripcion?.value ?? null,
            web: aplicacion.web?.value ?? null,
            correo: aplicacion.correo.value,
            tamanoInstalador: aplicacion.tamanoInstalador.value,
            estadoAplicacion: aplicacion.estadoAplicacion.value,
            versiones: aplicacion.versiones.map((v) => this.toVersionResponse(v)),
            createdAt: aplicacion.createdAt,
            updatedAt: aplicacion.updatedAt ?? null,
        };
    }
    static toVersionResponse(version) {
        const data = version.toPrimitives();
        return {
            id: data.id,
            numeroVersion: data.numeroVersion,
            fechaPublicacion: data.fechaPublicacion,
            cambios: data.cambios,
        };
    }
    static toList(aplicaciones, total, page, pageSize) {
        return {
            aplicaciones: aplicaciones.map((a) => this.toResponse(a)),
            totalCount: total,
            page,
            pageSize,
        };
    }
}
exports.AplicacionMapper = AplicacionMapper;
//# sourceMappingURL=aplicacion.mapper.js.map