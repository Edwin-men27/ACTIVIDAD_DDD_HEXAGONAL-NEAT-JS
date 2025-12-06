import { Injectable } from '@nestjs/common';
import { AplicacionRepository } from '../../../domain/aplicaciones/aplicacion.repository';
import { IGetAplicacionByIdUseCase } from '../ports/in/aplicacion.use-cases';
import { GetAplicacionByIdQuery } from '../dto/query/get-aplicacion-by-id.query';
import { AplicacionResponse } from '../dto/response/aplicacion.response';
import { AplicacionMapper } from '../mapper/aplicacion.mapper';
import { AplicacionId } from '../../../domain/aplicaciones/value-objects/aplicacion-id.vo';

@Injectable()
export class GetAplicacionByIdService implements IGetAplicacionByIdUseCase {
  constructor(private readonly aplicacionRepository: AplicacionRepository) {}

  async execute(query: GetAplicacionByIdQuery): Promise<AplicacionResponse | null> {
    const aplicacion = await this.aplicacionRepository.findById(AplicacionId.from(query.id));
    return aplicacion ? AplicacionMapper.toResponse(aplicacion) : null;
  }
}
