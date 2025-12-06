import { Injectable } from '@nestjs/common';
import { Aplicacion } from '../../../domain/aplicaciones/aplicacion.entity';
import { AplicacionRepository } from '../../../domain/aplicaciones/aplicacion.repository';
import { NombreAplicacion } from '../../../domain/aplicaciones/value-objects/nombre-aplicacion.vo';
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
import { CreateAplicacionCommand } from '../dto/command/create-aplicacion.command';
import { AplicacionResponse } from '../dto/response/aplicacion.response';
import { AplicacionMapper } from '../mapper/aplicacion.mapper';
import { ICreateAplicacionUseCase } from '../ports/in/aplicacion.use-cases';
import { NombreAplicacionDuplicadoException } from '../../../domain/aplicaciones/exceptions';

@Injectable()
export class CreateAplicacionService implements ICreateAplicacionUseCase {
  constructor(private readonly aplicacionRepository: AplicacionRepository) {}

  async execute(command: CreateAplicacionCommand): Promise<AplicacionResponse> {
    const nombre = new NombreAplicacion(command.nombre);

    const existente = await this.aplicacionRepository.findByNombre(nombre);
    if (existente) {
      throw new NombreAplicacionDuplicadoException(command.nombre);
    }

    const licencia = new LicenciaTipo(command.licencia);
    const precioValor = licencia.value === 'gratuita' ? 0 : command.precio;
    const aplicacion = Aplicacion.create(
      nombre,
      new Proveedor(command.proveedor),
      new Categoria(command.categoria),
      new Lenguaje(command.lenguajePrincipal),
      command.lenguajeSecundario ? new Lenguaje(command.lenguajeSecundario) : null,
      command.usaBaseDatos,
      command.requiereConexionRed,
      new NumBits(command.numBits),
      new SistemaOperativo(command.sistemaOperativo),
      command.requisitosHardware ? new RequisitosHardware(command.requisitosHardware) : null,
      licencia,
      Precio.create(precioValor, licencia),
      command.descripcion !== undefined && command.descripcion !== null ? new Descripcion(command.descripcion) : null,
      command.web ? new Url(command.web) : null,
      new Email(command.correo),
      new TamanoInstalador(command.tamanoInstalador),
    );

    await this.aplicacionRepository.save(aplicacion);
    return AplicacionMapper.toResponse(aplicacion);
  }
}
