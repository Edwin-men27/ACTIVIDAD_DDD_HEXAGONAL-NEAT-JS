import { AplicacionRepository } from '../../../domain/aplicaciones/aplicacion.repository';
import { IValidateCompatibilidadUseCase } from '../ports/in/aplicacion.use-cases';
import { ValidateCompatibilidadQuery } from '../dto/query/validate-compatibilidad.query';
import { CompatibilidadResponse } from '../dto/response/compatibilidad.response';
export declare class ValidateCompatibilidadService implements IValidateCompatibilidadUseCase {
    private readonly aplicacionRepository;
    constructor(aplicacionRepository: AplicacionRepository);
    execute(query: ValidateCompatibilidadQuery): Promise<CompatibilidadResponse>;
}
