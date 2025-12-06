import { AplicacionRepository } from '../../../domain/aplicaciones/aplicacion.repository';
import { IUpdateAplicacionUseCase } from '../ports/in/aplicacion.use-cases';
import { UpdateAplicacionCommand } from '../dto/command/update-aplicacion.command';
import { AplicacionResponse } from '../dto/response/aplicacion.response';
export declare class UpdateAplicacionService implements IUpdateAplicacionUseCase {
    private readonly aplicacionRepository;
    constructor(aplicacionRepository: AplicacionRepository);
    execute(command: UpdateAplicacionCommand): Promise<AplicacionResponse>;
}
