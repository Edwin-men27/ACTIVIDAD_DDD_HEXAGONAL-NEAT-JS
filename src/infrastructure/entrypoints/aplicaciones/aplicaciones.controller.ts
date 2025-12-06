import { Body, Controller, Get, Param, Patch, Post, Put, Query, UseFilters } from '@nestjs/common';
import { ApiParam, ApiQuery } from '@nestjs/swagger';
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
} from '../../../application/aplicaciones/ports/in/aplicacion.use-cases';
import { CreateAplicacionRequest } from './dto/create-aplicacion.request';
import { UpdateAplicacionRequest } from './dto/update-aplicacion.request';
import { ChangeConexionRequest } from './dto/change-conexion.request';
import { ChangeLicenciaRequest } from './dto/change-licencia.request';
import { AddVersionRequest } from './dto/add-version.request';
import { ChangeEstadoRequest } from './dto/change-estado.request';
import { ValidateCompatibilidadRequest } from './dto/validate-compatibilidad.request';
import { CreateAplicacionCommand } from '../../../application/aplicaciones/dto/command/create-aplicacion.command';
import { UpdateAplicacionCommand } from '../../../application/aplicaciones/dto/command/update-aplicacion.command';
import { ChangeConexionCommand } from '../../../application/aplicaciones/dto/command/change-conexion.command';
import { ChangeLicenciaCommand } from '../../../application/aplicaciones/dto/command/change-licencia.command';
import { AddVersionCommand } from '../../../application/aplicaciones/dto/command/add-version.command';
import { ChangeEstadoAplicacionCommand } from '../../../application/aplicaciones/dto/command/change-estado-aplicacion.command';
import { GetAplicacionByIdQuery } from '../../../application/aplicaciones/dto/query/get-aplicacion-by-id.query';
import { ListAplicacionesQuery } from '../../../application/aplicaciones/dto/query/list-aplicaciones.query';
import { ValidateCompatibilidadQuery } from '../../../application/aplicaciones/dto/query/validate-compatibilidad.query';
import { DomainExceptionFilter } from '../common/domain-exception.filter';

@Controller('aplicaciones')
@UseFilters(new DomainExceptionFilter())
export class AplicacionesController {
  constructor(
    private readonly createUseCase: ICreateAplicacionUseCase,
    private readonly updateUseCase: IUpdateAplicacionUseCase,
    private readonly changeConexionUseCase: IChangeConexionUseCase,
    private readonly changeLicenciaUseCase: IChangeLicenciaUseCase,
    private readonly addVersionUseCase: IAddVersionUseCase,
    private readonly changeEstadoUseCase: IChangeEstadoAplicacionUseCase,
    private readonly getByIdUseCase: IGetAplicacionByIdUseCase,
    private readonly listUseCase: IListAplicacionesUseCase,
    private readonly validateCompatibilidadUseCase: IValidateCompatibilidadUseCase,
  ) {}

  @Post()
  create(@Body() request: CreateAplicacionRequest) {
    const command = request as unknown as CreateAplicacionCommand;
    return this.createUseCase.execute(command);
  }

  @Get(':id')
  @ApiParam({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' })
  getById(@Param('id') id: string) {
    const query = new GetAplicacionByIdQuery();
    query.id = id;
    return this.getByIdUseCase.execute(query);
  }

  @Get()
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'pageSize', required: false, type: Number })
  @ApiQuery({ name: 'searchTerm', required: false, type: String })
  @ApiQuery({ name: 'categoria', required: false, type: String })
  @ApiQuery({ name: 'proveedor', required: false, type: String })
  @ApiQuery({ name: 'licencia', required: false, type: String })
  @ApiQuery({ name: 'requiereConexionRed', required: false, type: Boolean })
  @ApiQuery({ name: 'usaBaseDatos', required: false, type: Boolean })
  list(
    @Query('page') page = 1,
    @Query('pageSize') pageSize = 10,
    @Query('searchTerm') searchTerm?: string,
    @Query('categoria') categoria?: string,
    @Query('proveedor') proveedor?: string,
    @Query('licencia') licencia?: string,
    @Query('requiereConexionRed') requiereConexionRed?: string,
    @Query('usaBaseDatos') usaBaseDatos?: string,
  ) {
    const toBoolean = (value: string | boolean | undefined): boolean | undefined => {
      if (value === undefined) return undefined;
      if (typeof value === 'boolean') return value;
      return value.toLowerCase() === 'true' || value === '1';
    };

    const query = new ListAplicacionesQuery();
    query.page = Number(page) || 1;
    query.pageSize = Number(pageSize) || 10;
    query.searchTerm = searchTerm;
    query.categoria = categoria;
    query.proveedor = proveedor;
    query.licencia = licencia;
    const requiereBool = toBoolean(requiereConexionRed as any);
    const usaBdBool = toBoolean(usaBaseDatos as any);
    if (requiereBool !== undefined) query.requiereConexionRed = requiereBool;
    if (usaBdBool !== undefined) query.usaBaseDatos = usaBdBool;
    return this.listUseCase.execute(query);
  }

  @Put(':id')
  @ApiParam({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' })
  update(@Param('id') id: string, @Body() request: UpdateAplicacionRequest) {
    const command = request as unknown as UpdateAplicacionCommand;
    command.id = id;
    return this.updateUseCase.execute(command);
  }

  @Patch(':id/conexion')
  @ApiParam({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' })
  changeConexion(@Param('id') id: string, @Body() request: ChangeConexionRequest) {
    const command = request as unknown as ChangeConexionCommand;
    command.id = id;
    return this.changeConexionUseCase.execute(command);
  }

  @Patch(':id/licencia')
  @ApiParam({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' })
  changeLicencia(@Param('id') id: string, @Body() request: ChangeLicenciaRequest) {
    const command = request as unknown as ChangeLicenciaCommand;
    command.id = id;
    return this.changeLicenciaUseCase.execute(command);
  }

  @Post(':id/versiones')
  @ApiParam({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' })
  addVersion(@Param('id') id: string, @Body() request: AddVersionRequest) {
    const command = request as unknown as AddVersionCommand;
    command.id = id;
    return this.addVersionUseCase.execute(command);
  }

  @Patch(':id/estado')
  @ApiParam({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' })
  changeEstado(@Param('id') id: string, @Body() request: ChangeEstadoRequest) {
    const command = request as unknown as ChangeEstadoAplicacionCommand;
    command.id = id;
    return this.changeEstadoUseCase.execute(command);
  }

  @Post(':id/compatibilidad')
  @ApiParam({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' })
  validateCompatibilidad(@Param('id') id: string, @Body() request: ValidateCompatibilidadRequest) {
    const query = request as unknown as ValidateCompatibilidadQuery;
    query.id = id;
    return this.validateCompatibilidadUseCase.execute(query);
  }
}
