import { Injectable } from '@nestjs/common';
import { AplicacionRepository } from '../../../domain/aplicaciones/aplicacion.repository';
import { IListAplicacionesUseCase } from '../ports/in/aplicacion.use-cases';
import { ListAplicacionesQuery } from '../dto/query/list-aplicaciones.query';
import { AplicacionListResponse } from '../dto/response/aplicacion-list.response';
import { AplicacionMapper } from '../mapper/aplicacion.mapper';

@Injectable()
export class ListAplicacionesService implements IListAplicacionesUseCase {
  constructor(private readonly aplicacionRepository: AplicacionRepository) {}

  async execute(query: ListAplicacionesQuery): Promise<AplicacionListResponse> {
    let aplicaciones = await this.aplicacionRepository.findAll();

    if (query.categoria) {
      aplicaciones = aplicaciones.filter((a) => a.categoria.value.toLowerCase() === query.categoria!.toLowerCase());
    }
    if (query.proveedor) {
      aplicaciones = aplicaciones.filter((a) => a.proveedor.value.toLowerCase() === query.proveedor!.toLowerCase());
    }
    if (query.licencia) {
      aplicaciones = aplicaciones.filter((a) => a.licencia.value.toLowerCase() === query.licencia!.toLowerCase());
    }
    if (query.requiereConexionRed !== undefined) {
      aplicaciones = aplicaciones.filter((a) => a.requiereConexionRed === query.requiereConexionRed);
    }
    if (query.usaBaseDatos !== undefined) {
      aplicaciones = aplicaciones.filter((a) => a.usaBaseDatos === query.usaBaseDatos);
    }
    if (query.searchTerm) {
      const term = query.searchTerm.toLowerCase();
      aplicaciones = aplicaciones.filter(
        (a) =>
          a.nombre.value.toLowerCase().includes(term) ||
          a.proveedor.value.toLowerCase().includes(term) ||
          (a.descripcion?.value.toLowerCase().includes(term) ?? false),
      );
    }

    const total = aplicaciones.length;
    const start = (query.page - 1) * query.pageSize;
    const paged = aplicaciones.slice(start, start + query.pageSize);

    return AplicacionMapper.toList(paged, total, query.page, query.pageSize);
  }
}
