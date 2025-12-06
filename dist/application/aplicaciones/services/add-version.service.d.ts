import { AplicacionRepository } from '../../../domain/aplicaciones/aplicacion.repository';
import { IAddVersionUseCase } from '../ports/in/aplicacion.use-cases';
import { AddVersionCommand } from '../dto/command/add-version.command';
import { AplicacionResponse } from '../dto/response/aplicacion.response';
export declare class AddVersionService implements IAddVersionUseCase {
    private readonly aplicacionRepository;
    constructor(aplicacionRepository: AplicacionRepository);
    execute(command: AddVersionCommand): Promise<AplicacionResponse>;
}
