import { Injectable } from '@nestjs/common';
import { AplicacionRepository } from '../../../domain/aplicaciones/aplicacion.repository';
import { IChangeLicenciaUseCase } from '../ports/in/aplicacion.use-cases';
import { ChangeLicenciaCommand } from '../dto/command/change-licencia.command';
import { AplicacionMapper } from '../mapper/aplicacion.mapper';
import { AplicacionResponse } from '../dto/response/aplicacion.response';
import { LicenciaTipo } from '../../../domain/aplicaciones/value-objects/licencia-tipo.vo';
import { Precio } from '../../../domain/aplicaciones/value-objects/precio.vo';
import { AplicacionId } from '../../../domain/aplicaciones/value-objects/aplicacion-id.vo';
import { AplicacionNotFoundException } from '../../../domain/aplicaciones/exceptions';

@Injectable()
export class ChangeLicenciaService implements IChangeLicenciaUseCase {
  constructor(private readonly aplicacionRepository: AplicacionRepository) {}

  async execute(command: ChangeLicenciaCommand): Promise<AplicacionResponse> {
    const id = AplicacionId.from(command.id);
    const aplicacion = await this.aplicacionRepository.findById(id);
    if (!aplicacion) {
      throw new AplicacionNotFoundException();
    }

    const licencia = new LicenciaTipo(command.licencia);
    const precio = Precio.create(licencia.value === 'gratuita' ? 0 : command.precio, licencia);
    aplicacion.cambiarLicencia(licencia, precio);

    await this.aplicacionRepository.save(aplicacion);
    return AplicacionMapper.toResponse(aplicacion);
  }
}
