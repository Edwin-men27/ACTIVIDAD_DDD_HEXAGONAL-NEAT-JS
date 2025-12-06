import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AplicacionRepository } from '../../../../domain/aplicaciones/aplicacion.repository';
import { Aplicacion } from '../../../../domain/aplicaciones/aplicacion.entity';
import { AplicacionId } from '../../../../domain/aplicaciones/value-objects/aplicacion-id.vo';
import { NombreAplicacion } from '../../../../domain/aplicaciones/value-objects/nombre-aplicacion.vo';
import { Proveedor } from '../../../../domain/aplicaciones/value-objects/proveedor.vo';
import { Categoria } from '../../../../domain/aplicaciones/value-objects/categoria.vo';
import { Lenguaje } from '../../../../domain/aplicaciones/value-objects/lenguaje.vo';
import { NumBits } from '../../../../domain/aplicaciones/value-objects/num-bits.vo';
import { SistemaOperativo } from '../../../../domain/aplicaciones/value-objects/sistema-operativo.vo';
import { RequisitosHardware } from '../../../../domain/aplicaciones/value-objects/requisitos-hardware.vo';
import { LicenciaTipo } from '../../../../domain/aplicaciones/value-objects/licencia-tipo.vo';
import { Precio } from '../../../../domain/aplicaciones/value-objects/precio.vo';
import { Descripcion } from '../../../../domain/aplicaciones/value-objects/descripcion.vo';
import { Url } from '../../../../domain/aplicaciones/value-objects/url.vo';
import { Email } from '../../../../domain/aplicaciones/value-objects/email.vo';
import { TamanoInstalador } from '../../../../domain/aplicaciones/value-objects/tamano-instalador.vo';
import { EstadoAplicacion } from '../../../../domain/aplicaciones/value-objects/estado-aplicacion.vo';
import { VersionAplicacion } from '../../../../domain/aplicaciones/version-aplicacion.entity';
import { VersionId } from '../../../../domain/aplicaciones/value-objects/version-id.vo';
import { NumeroVersion } from '../../../../domain/aplicaciones/value-objects/numero-version.vo';
import { CambiosVersion } from '../../../../domain/aplicaciones/value-objects/cambios-version.vo';
import { AplicacionOrmEntity } from '../entities/aplicacion.orm-entity';

@Injectable()
export class AplicacionTypeOrmRepository implements AplicacionRepository {
  constructor(@InjectRepository(AplicacionOrmEntity) private readonly repo: Repository<AplicacionOrmEntity>) {}

  async findById(id: AplicacionId): Promise<Aplicacion | null> {
    const model = await this.repo.findOne({ where: { id: id.value } });
    return model ? this.toDomain(model) : null;
  }

  async findByNombre(nombre: NombreAplicacion): Promise<Aplicacion | null> {
    const model = await this.repo.findOne({ where: { nombre: nombre.value } });
    return model ? this.toDomain(model) : null;
  }

  async findAll(): Promise<Aplicacion[]> {
    const models = await this.repo.find();
    return models.map((m) => this.toDomain(m));
  }

  async save(aplicacion: Aplicacion): Promise<void> {
    await this.repo.save(this.toOrm(aplicacion));
  }

  async delete(id: AplicacionId): Promise<void> {
    await this.repo.delete({ id: id.value });
  }

  private toDomain(model: AplicacionOrmEntity): Aplicacion {
    const licencia = new LicenciaTipo(model.licencia);
    const versiones = (model.versiones ?? []).map((v) =>
      VersionAplicacion.restore(
        VersionId.from(v.id),
        new NumeroVersion(v.numeroVersion),
        new Date(v.fechaPublicacion),
        new CambiosVersion(v.cambios),
      ),
    );

    return Aplicacion.restore(
      AplicacionId.from(model.id),
      new NombreAplicacion(model.nombre),
      new Proveedor(model.proveedor),
      new Categoria(model.categoria),
      new Lenguaje(model.lenguajePrincipal),
      model.lenguajeSecundario ? new Lenguaje(model.lenguajeSecundario) : null,
      model.usaBaseDatos,
      model.requiereConexionRed,
      new NumBits(model.numBits),
      new SistemaOperativo(model.sistemaOperativo),
      model.requisitosHardware ? new RequisitosHardware(model.requisitosHardware) : null,
      licencia,
      Precio.create(Number(model.precio), licencia),
      model.descripcion ? new Descripcion(model.descripcion) : null,
      model.web ? new Url(model.web) : null,
      new Email(model.correo),
      new TamanoInstalador(Number(model.tamanoInstalador)),
      new EstadoAplicacion(model.estadoAplicacion),
      versiones,
      model.createdAt,
      model.updatedAt,
    );
  }

  private toOrm(aplicacion: Aplicacion): AplicacionOrmEntity {
    return {
      id: aplicacion.id.value,
      nombre: aplicacion.nombre.value,
      proveedor: aplicacion.proveedor.value,
      categoria: aplicacion.categoria.value,
      lenguajePrincipal: aplicacion.lenguajePrincipal.value,
      lenguajeSecundario: aplicacion.lenguajeSecundario?.value ?? null,
      usaBaseDatos: aplicacion.usaBaseDatos,
      requiereConexionRed: aplicacion.requiereConexionRed,
      numBits: aplicacion.numBits.value,
      sistemaOperativo: aplicacion.sistemaOperativo.value,
      requisitosHardware: aplicacion.requisitosHardware?.value ?? null,
      licencia: aplicacion.licencia.value,
      precio: aplicacion.precio.value,
      descripcion: aplicacion.descripcion?.value ?? null,
      web: aplicacion.web?.value ?? null,
      correo: aplicacion.correo.value,
      tamanoInstalador: aplicacion.tamanoInstalador.value,
      estadoAplicacion: aplicacion.estadoAplicacion.value,
      versiones: aplicacion.versiones.map((v) => ({
        ...v.toPrimitives(),
        fechaPublicacion: v.fechaPublicacion.toISOString(),
      })),
      createdAt: aplicacion.createdAt,
      updatedAt: aplicacion.updatedAt ?? null,
    };
  }
}
