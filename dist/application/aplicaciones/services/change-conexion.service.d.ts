import { AplicacionRepository } from '../../../domain/aplicaciones/aplicacion.repository';
import { IChangeConexionUseCase } from '../ports/in/aplicacion.use-cases';
import { ChangeConexionCommand } from '../dto/command/change-conexion.command';
import { AplicacionResponse } from '../dto/response/aplicacion.response';
export declare class ChangeConexionService implements IChangeConexionUseCase {
    private readonly aplicacionRepository;
    constructor(aplicacionRepository: AplicacionRepository);
    execute(command: ChangeConexionCommand): Promise<AplicacionResponse>;
}
