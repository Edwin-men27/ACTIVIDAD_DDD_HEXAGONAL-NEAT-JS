import { Aplicacion } from '../../../domain/aplicaciones/aplicacion.entity';
import { AplicacionListResponse } from '../dto/response/aplicacion-list.response';
import { AplicacionResponse } from '../dto/response/aplicacion.response';
import { VersionResponse } from '../dto/response/version.response';
import { VersionAplicacion } from '../../../domain/aplicaciones/version-aplicacion.entity';

export class AplicacionMapper {
  static toResponse(aplicacion: Aplicacion): AplicacionResponse {
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

  private static toVersionResponse(version: VersionAplicacion): VersionResponse {
    const data = version.toPrimitives();
    return {
      id: data.id,
      numeroVersion: data.numeroVersion,
      fechaPublicacion: data.fechaPublicacion,
      cambios: data.cambios,
    };
  }

  static toList(aplicaciones: Aplicacion[], total: number, page: number, pageSize: number): AplicacionListResponse {
    return {
      aplicaciones: aplicaciones.map((a) => this.toResponse(a)),
      totalCount: total,
      page,
      pageSize,
    };
  }
}
