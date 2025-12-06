import { Injectable } from '@nestjs/common';
import { AplicacionRepository } from '../../../domain/aplicaciones/aplicacion.repository';
import { IChangeConexionUseCase } from '../ports/in/aplicacion.use-cases';
import { ChangeConexionCommand } from '../dto/command/change-conexion.command';
import { AplicacionResponse } from '../dto/response/aplicacion.response';
import { AplicacionMapper } from '../mapper/aplicacion.mapper';
import { AplicacionId } from '../../../domain/aplicaciones/value-objects/aplicacion-id.vo';
import { AplicacionNotFoundException } from '../../../domain/aplicaciones/exceptions';
import { Url } from '../../../domain/aplicaciones/value-objects/url.vo';

@Injectable()
export class ChangeConexionService implements IChangeConexionUseCase {
  constructor(private readonly aplicacionRepository: AplicacionRepository) {}

  async execute(command: ChangeConexionCommand): Promise<AplicacionResponse> {
    const id = AplicacionId.from(command.id);
    const aplicacion = await this.aplicacionRepository.findById(id);
    if (!aplicacion) {
      throw new AplicacionNotFoundException();
    }

    const web =
      command.web !== undefined
        ? command.web
          ? new Url(command.web)
          : null
        : aplicacion.web;

    aplicacion.cambiarEstadoConexion(command.requiereConexionRed, web ?? null);

    await this.aplicacionRepository.save(aplicacion);
    return AplicacionMapper.toResponse(aplicacion);
  }
}
