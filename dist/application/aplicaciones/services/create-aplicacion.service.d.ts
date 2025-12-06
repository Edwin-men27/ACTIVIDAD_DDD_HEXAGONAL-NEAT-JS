import { AplicacionRepository } from '../../../domain/aplicaciones/aplicacion.repository';
import { CreateAplicacionCommand } from '../dto/command/create-aplicacion.command';
import { AplicacionResponse } from '../dto/response/aplicacion.response';
import { ICreateAplicacionUseCase } from '../ports/in/aplicacion.use-cases';
export declare class CreateAplicacionService implements ICreateAplicacionUseCase {
    private readonly aplicacionRepository;
    constructor(aplicacionRepository: AplicacionRepository);
    execute(command: CreateAplicacionCommand): Promise<AplicacionResponse>;
}
