import { AddVersionCommand } from '../../dto/command/add-version.command';
import { ChangeConexionCommand } from '../../dto/command/change-conexion.command';
import { ChangeEstadoAplicacionCommand } from '../../dto/command/change-estado-aplicacion.command';
import { ChangeLicenciaCommand } from '../../dto/command/change-licencia.command';
import { CreateAplicacionCommand } from '../../dto/command/create-aplicacion.command';
import { UpdateAplicacionCommand } from '../../dto/command/update-aplicacion.command';
import { GetAplicacionByIdQuery } from '../../dto/query/get-aplicacion-by-id.query';
import { ListAplicacionesQuery } from '../../dto/query/list-aplicaciones.query';
import { ValidateCompatibilidadQuery } from '../../dto/query/validate-compatibilidad.query';
import { AplicacionListResponse } from '../../dto/response/aplicacion-list.response';
import { AplicacionResponse } from '../../dto/response/aplicacion.response';
import { CompatibilidadResponse } from '../../dto/response/compatibilidad.response';

export abstract class ICreateAplicacionUseCase {
  abstract execute(command: CreateAplicacionCommand): Promise<AplicacionResponse>;
}

export abstract class IUpdateAplicacionUseCase {
  abstract execute(command: UpdateAplicacionCommand): Promise<AplicacionResponse>;
}

export abstract class IChangeConexionUseCase {
  abstract execute(command: ChangeConexionCommand): Promise<AplicacionResponse>;
}

export abstract class IChangeLicenciaUseCase {
  abstract execute(command: ChangeLicenciaCommand): Promise<AplicacionResponse>;
}

export abstract class IAddVersionUseCase {
  abstract execute(command: AddVersionCommand): Promise<AplicacionResponse>;
}

export abstract class IChangeEstadoAplicacionUseCase {
  abstract execute(command: ChangeEstadoAplicacionCommand): Promise<AplicacionResponse>;
}

export abstract class IGetAplicacionByIdUseCase {
  abstract execute(query: GetAplicacionByIdQuery): Promise<AplicacionResponse | null>;
}

export abstract class IListAplicacionesUseCase {
  abstract execute(query: ListAplicacionesQuery): Promise<AplicacionListResponse>;
}

export abstract class IValidateCompatibilidadUseCase {
  abstract execute(query: ValidateCompatibilidadQuery): Promise<CompatibilidadResponse>;
}
