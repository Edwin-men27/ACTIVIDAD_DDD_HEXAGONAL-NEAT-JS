import { Injectable } from '@nestjs/common';
import { AplicacionRepository } from '../../../domain/aplicaciones/aplicacion.repository';
import { IAddVersionUseCase } from '../ports/in/aplicacion.use-cases';
import { AddVersionCommand } from '../dto/command/add-version.command';
import { AplicacionResponse } from '../dto/response/aplicacion.response';
import { AplicacionMapper } from '../mapper/aplicacion.mapper';
import { NumeroVersion } from '../../../domain/aplicaciones/value-objects/numero-version.vo';
import { CambiosVersion } from '../../../domain/aplicaciones/value-objects/cambios-version.vo';
import { VersionAplicacion } from '../../../domain/aplicaciones/version-aplicacion.entity';
import { AplicacionId } from '../../../domain/aplicaciones/value-objects/aplicacion-id.vo';
import { AplicacionNotFoundException } from '../../../domain/aplicaciones/exceptions';

@Injectable()
export class AddVersionService implements IAddVersionUseCase {
  constructor(private readonly aplicacionRepository: AplicacionRepository) {}

  async execute(command: AddVersionCommand): Promise<AplicacionResponse> {
    const id = AplicacionId.from(command.id);
    const aplicacion = await this.aplicacionRepository.findById(id);
    if (!aplicacion) {
      throw new AplicacionNotFoundException();
    }

    const version = VersionAplicacion.create(
      new NumeroVersion(command.numeroVersion),
      command.fechaPublicacion ? new Date(command.fechaPublicacion) : new Date(),
      new CambiosVersion(command.cambios),
    );

    aplicacion.agregarVersion(version);

    await this.aplicacionRepository.save(aplicacion);
    return AplicacionMapper.toResponse(aplicacion);
  }
}
