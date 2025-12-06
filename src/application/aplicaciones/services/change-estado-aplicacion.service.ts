import { Injectable } from '@nestjs/common';
import { AplicacionRepository } from '../../../domain/aplicaciones/aplicacion.repository';
import { IChangeEstadoAplicacionUseCase } from '../ports/in/aplicacion.use-cases';
import { ChangeEstadoAplicacionCommand } from '../dto/command/change-estado-aplicacion.command';
import { AplicacionResponse } from '../dto/response/aplicacion.response';
import { AplicacionMapper } from '../mapper/aplicacion.mapper';
import { EstadoAplicacion } from '../../../domain/aplicaciones/value-objects/estado-aplicacion.vo';
import { AplicacionId } from '../../../domain/aplicaciones/value-objects/aplicacion-id.vo';
import { AplicacionNotFoundException } from '../../../domain/aplicaciones/exceptions';

@Injectable()
export class ChangeEstadoAplicacionService implements IChangeEstadoAplicacionUseCase {
  constructor(private readonly aplicacionRepository: AplicacionRepository) {}

  async execute(command: ChangeEstadoAplicacionCommand): Promise<AplicacionResponse> {
    const id = AplicacionId.from(command.id);
    const aplicacion = await this.aplicacionRepository.findById(id);
    if (!aplicacion) {
      throw new AplicacionNotFoundException();
    }

    aplicacion.cambiarEstado(new EstadoAplicacion(command.estado));

    await this.aplicacionRepository.save(aplicacion);
    return AplicacionMapper.toResponse(aplicacion);
  }
}
