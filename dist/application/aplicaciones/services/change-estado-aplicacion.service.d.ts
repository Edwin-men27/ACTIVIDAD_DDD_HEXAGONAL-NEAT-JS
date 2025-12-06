import { AplicacionRepository } from '../../../domain/aplicaciones/aplicacion.repository';
import { IChangeEstadoAplicacionUseCase } from '../ports/in/aplicacion.use-cases';
import { ChangeEstadoAplicacionCommand } from '../dto/command/change-estado-aplicacion.command';
import { AplicacionResponse } from '../dto/response/aplicacion.response';
export declare class ChangeEstadoAplicacionService implements IChangeEstadoAplicacionUseCase {
    private readonly aplicacionRepository;
    constructor(aplicacionRepository: AplicacionRepository);
    execute(command: ChangeEstadoAplicacionCommand): Promise<AplicacionResponse>;
}
