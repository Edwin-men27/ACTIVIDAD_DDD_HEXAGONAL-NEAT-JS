import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  AddVersionService,
  ChangeConexionService,
  ChangeEstadoAplicacionService,
  ChangeLicenciaService,
  CreateAplicacionService,
  GetAplicacionByIdService,
  ListAplicacionesService,
  UpdateAplicacionService,
  ValidateCompatibilidadService,
} from '../application/aplicaciones/services';
import {
  IAddVersionUseCase,
  IChangeConexionUseCase,
  IChangeEstadoAplicacionUseCase,
  IChangeLicenciaUseCase,
  ICreateAplicacionUseCase,
  IGetAplicacionByIdUseCase,
  IListAplicacionesUseCase,
  IUpdateAplicacionUseCase,
  IValidateCompatibilidadUseCase,
} from '../application/aplicaciones/ports/in/aplicacion.use-cases';
import { AplicacionRepository } from '../domain/aplicaciones/aplicacion.repository';
import { AplicacionesController } from '../infrastructure/entrypoints/aplicaciones/aplicaciones.controller';
import { AplicacionOrmEntity } from '../infrastructure/persistence/typeorm/entities/aplicacion.orm-entity';
import { AplicacionTypeOrmRepository } from '../infrastructure/persistence/typeorm/repositories/aplicacion-typeorm.repository';
import { AplicacionesSchemaInitService } from '../infrastructure/persistence/typeorm/schema-init.service';

@Module({
  imports: [TypeOrmModule.forFeature([AplicacionOrmEntity])],
  controllers: [AplicacionesController],
  providers: [
    { provide: AplicacionRepository, useClass: AplicacionTypeOrmRepository },
    { provide: ICreateAplicacionUseCase, useClass: CreateAplicacionService },
    { provide: IUpdateAplicacionUseCase, useClass: UpdateAplicacionService },
    { provide: IChangeConexionUseCase, useClass: ChangeConexionService },
    { provide: IChangeLicenciaUseCase, useClass: ChangeLicenciaService },
    { provide: IAddVersionUseCase, useClass: AddVersionService },
    { provide: IChangeEstadoAplicacionUseCase, useClass: ChangeEstadoAplicacionService },
    { provide: IGetAplicacionByIdUseCase, useClass: GetAplicacionByIdService },
    { provide: IListAplicacionesUseCase, useClass: ListAplicacionesService },
    { provide: IValidateCompatibilidadUseCase, useClass: ValidateCompatibilidadService },
    AplicacionesSchemaInitService,
  ],
  exports: [AplicacionRepository],
})
export class AplicacionesModule {}
