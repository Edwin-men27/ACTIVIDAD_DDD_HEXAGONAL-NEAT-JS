import { AplicacionRepository } from '../../../domain/aplicaciones/aplicacion.repository';
import { IChangeLicenciaUseCase } from '../ports/in/aplicacion.use-cases';
import { ChangeLicenciaCommand } from '../dto/command/change-licencia.command';
import { AplicacionResponse } from '../dto/response/aplicacion.response';
export declare class ChangeLicenciaService implements IChangeLicenciaUseCase {
    private readonly aplicacionRepository;
    constructor(aplicacionRepository: AplicacionRepository);
    execute(command: ChangeLicenciaCommand): Promise<AplicacionResponse>;
}
