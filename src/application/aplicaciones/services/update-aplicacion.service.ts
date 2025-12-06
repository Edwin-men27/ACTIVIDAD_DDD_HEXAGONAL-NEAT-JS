import { Injectable } from '@nestjs/common';
import { AplicacionRepository } from '../../../domain/aplicaciones/aplicacion.repository';
import { IUpdateAplicacionUseCase } from '../ports/in/aplicacion.use-cases';
import { UpdateAplicacionCommand } from '../dto/command/update-aplicacion.command';
import { AplicacionMapper } from '../mapper/aplicacion.mapper';
import { AplicacionResponse } from '../dto/response/aplicacion.response';
import { AplicacionId } from '../../../domain/aplicaciones/value-objects/aplicacion-id.vo';
import { Proveedor } from '../../../domain/aplicaciones/value-objects/proveedor.vo';
import { Categoria } from '../../../domain/aplicaciones/value-objects/categoria.vo';
import { Lenguaje } from '../../../domain/aplicaciones/value-objects/lenguaje.vo';
import { NumBits } from '../../../domain/aplicaciones/value-objects/num-bits.vo';
import { SistemaOperativo } from '../../../domain/aplicaciones/value-objects/sistema-operativo.vo';
import { RequisitosHardware } from '../../../domain/aplicaciones/value-objects/requisitos-hardware.vo';
import { LicenciaTipo } from '../../../domain/aplicaciones/value-objects/licencia-tipo.vo';
import { Precio } from '../../../domain/aplicaciones/value-objects/precio.vo';
import { Descripcion } from '../../../domain/aplicaciones/value-objects/descripcion.vo';
import { Url } from '../../../domain/aplicaciones/value-objects/url.vo';
import { Email } from '../../../domain/aplicaciones/value-objects/email.vo';
import { TamanoInstalador } from '../../../domain/aplicaciones/value-objects/tamano-instalador.vo';
import { AplicacionNotFoundException } from '../../../domain/aplicaciones/exceptions';

@Injectable()
export class UpdateAplicacionService implements IUpdateAplicacionUseCase {
  constructor(private readonly aplicacionRepository: AplicacionRepository) {}

  async execute(command: UpdateAplicacionCommand): Promise<AplicacionResponse> {
    const id = AplicacionId.from(command.id);
    const aplicacion = await this.aplicacionRepository.findById(id);
    if (!aplicacion) {
      throw new AplicacionNotFoundException();
    }

    const licencia = command.licencia ? new LicenciaTipo(command.licencia) : undefined;
    const precio = (() => {
      if (licencia) {
        const valor = licencia.value === 'gratuita' ? 0 : command.precio ?? aplicacion.precio.value;
        return Precio.create(valor, licencia);
      }
      if (command.precio !== undefined) {
        return Precio.create(command.precio, aplicacion.licencia);
      }
      return undefined;
    })();

    aplicacion.actualizar({
      proveedor: command.proveedor ? new Proveedor(command.proveedor) : undefined,
      categoria: command.categoria ? new Categoria(command.categoria) : undefined,
      lenguajePrincipal: command.lenguajePrincipal ? new Lenguaje(command.lenguajePrincipal) : undefined,
      lenguajeSecundario:
        command.lenguajeSecundario !== undefined
          ? command.lenguajeSecundario
            ? new Lenguaje(command.lenguajeSecundario)
            : null
          : undefined,
      usaBaseDatos: command.usaBaseDatos,
      requiereConexionRed: command.requiereConexionRed,
      numBits: command.numBits !== undefined ? new NumBits(command.numBits) : undefined,
      sistemaOperativo: command.sistemaOperativo ? new SistemaOperativo(command.sistemaOperativo) : undefined,
      requisitosHardware:
        command.requisitosHardware !== undefined
          ? command.requisitosHardware
            ? new RequisitosHardware(command.requisitosHardware)
            : null
          : undefined,
      licencia,
      precio,
      descripcion:
        command.descripcion !== undefined
          ? command.descripcion !== null
            ? new Descripcion(command.descripcion)
            : null
          : undefined,
      web:
        command.web !== undefined
          ? command.web
            ? new Url(command.web)
            : null
          : undefined,
      correo: command.correo ? new Email(command.correo) : undefined,
      tamanoInstalador:
        command.tamanoInstalador !== undefined ? new TamanoInstalador(command.tamanoInstalador) : undefined,
    });

    await this.aplicacionRepository.save(aplicacion);
    return AplicacionMapper.toResponse(aplicacion);
  }
}
