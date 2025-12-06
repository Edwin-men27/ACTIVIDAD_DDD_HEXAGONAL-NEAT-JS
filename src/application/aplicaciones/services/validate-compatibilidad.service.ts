import { Injectable } from '@nestjs/common';
import { AplicacionRepository } from '../../../domain/aplicaciones/aplicacion.repository';
import { IValidateCompatibilidadUseCase } from '../ports/in/aplicacion.use-cases';
import { ValidateCompatibilidadQuery } from '../dto/query/validate-compatibilidad.query';
import { CompatibilidadResponse } from '../dto/response/compatibilidad.response';
import { AplicacionId } from '../../../domain/aplicaciones/value-objects/aplicacion-id.vo';
import { AplicacionNotFoundException } from '../../../domain/aplicaciones/exceptions';

@Injectable()
export class ValidateCompatibilidadService implements IValidateCompatibilidadUseCase {
  constructor(private readonly aplicacionRepository: AplicacionRepository) {}

  async execute(query: ValidateCompatibilidadQuery): Promise<CompatibilidadResponse> {
    const aplicacion = await this.aplicacionRepository.findById(AplicacionId.from(query.id));
    if (!aplicacion) {
      throw new AplicacionNotFoundException();
    }

    const resultado = aplicacion.validarCompatibilidad(
      query.sistemaOperativoUsuario,
      query.arquitecturaBitsUsuario,
      query.requisitosHardwareUsuario,
    );

    return resultado;
  }
}
