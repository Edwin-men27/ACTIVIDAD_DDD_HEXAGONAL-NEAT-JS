import { AplicacionRepository } from '../../../domain/aplicaciones/aplicacion.repository';
import { IGetAplicacionByIdUseCase } from '../ports/in/aplicacion.use-cases';
import { GetAplicacionByIdQuery } from '../dto/query/get-aplicacion-by-id.query';
import { AplicacionResponse } from '../dto/response/aplicacion.response';
export declare class GetAplicacionByIdService implements IGetAplicacionByIdUseCase {
    private readonly aplicacionRepository;
    constructor(aplicacionRepository: AplicacionRepository);
    execute(query: GetAplicacionByIdQuery): Promise<AplicacionResponse | null>;
}
