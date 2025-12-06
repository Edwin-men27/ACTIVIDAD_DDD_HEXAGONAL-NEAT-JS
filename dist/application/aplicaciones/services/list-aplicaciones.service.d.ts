import { AplicacionRepository } from '../../../domain/aplicaciones/aplicacion.repository';
import { IListAplicacionesUseCase } from '../ports/in/aplicacion.use-cases';
import { ListAplicacionesQuery } from '../dto/query/list-aplicaciones.query';
import { AplicacionListResponse } from '../dto/response/aplicacion-list.response';
export declare class ListAplicacionesService implements IListAplicacionesUseCase {
    private readonly aplicacionRepository;
    constructor(aplicacionRepository: AplicacionRepository);
    execute(query: ListAplicacionesQuery): Promise<AplicacionListResponse>;
}
