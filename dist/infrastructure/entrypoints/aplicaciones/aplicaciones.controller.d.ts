import { IAddVersionUseCase, IChangeConexionUseCase, IChangeEstadoAplicacionUseCase, IChangeLicenciaUseCase, ICreateAplicacionUseCase, IGetAplicacionByIdUseCase, IListAplicacionesUseCase, IUpdateAplicacionUseCase, IValidateCompatibilidadUseCase } from '../../../application/aplicaciones/ports/in/aplicacion.use-cases';
import { CreateAplicacionRequest } from './dto/create-aplicacion.request';
import { UpdateAplicacionRequest } from './dto/update-aplicacion.request';
import { ChangeConexionRequest } from './dto/change-conexion.request';
import { ChangeLicenciaRequest } from './dto/change-licencia.request';
import { AddVersionRequest } from './dto/add-version.request';
import { ChangeEstadoRequest } from './dto/change-estado.request';
import { ValidateCompatibilidadRequest } from './dto/validate-compatibilidad.request';
export declare class AplicacionesController {
    private readonly createUseCase;
    private readonly updateUseCase;
    private readonly changeConexionUseCase;
    private readonly changeLicenciaUseCase;
    private readonly addVersionUseCase;
    private readonly changeEstadoUseCase;
    private readonly getByIdUseCase;
    private readonly listUseCase;
    private readonly validateCompatibilidadUseCase;
    constructor(createUseCase: ICreateAplicacionUseCase, updateUseCase: IUpdateAplicacionUseCase, changeConexionUseCase: IChangeConexionUseCase, changeLicenciaUseCase: IChangeLicenciaUseCase, addVersionUseCase: IAddVersionUseCase, changeEstadoUseCase: IChangeEstadoAplicacionUseCase, getByIdUseCase: IGetAplicacionByIdUseCase, listUseCase: IListAplicacionesUseCase, validateCompatibilidadUseCase: IValidateCompatibilidadUseCase);
    create(request: CreateAplicacionRequest): Promise<import("../../../application/aplicaciones/dto/response/aplicacion.response").AplicacionResponse>;
    getById(id: string): Promise<import("../../../application/aplicaciones/dto/response/aplicacion.response").AplicacionResponse | null>;
    list(page?: number, pageSize?: number, searchTerm?: string, categoria?: string, proveedor?: string, licencia?: string, requiereConexionRed?: string, usaBaseDatos?: string): Promise<import("../../../application/aplicaciones/dto/response/aplicacion-list.response").AplicacionListResponse>;
    update(id: string, request: UpdateAplicacionRequest): Promise<import("../../../application/aplicaciones/dto/response/aplicacion.response").AplicacionResponse>;
    changeConexion(id: string, request: ChangeConexionRequest): Promise<import("../../../application/aplicaciones/dto/response/aplicacion.response").AplicacionResponse>;
    changeLicencia(id: string, request: ChangeLicenciaRequest): Promise<import("../../../application/aplicaciones/dto/response/aplicacion.response").AplicacionResponse>;
    addVersion(id: string, request: AddVersionRequest): Promise<import("../../../application/aplicaciones/dto/response/aplicacion.response").AplicacionResponse>;
    changeEstado(id: string, request: ChangeEstadoRequest): Promise<import("../../../application/aplicaciones/dto/response/aplicacion.response").AplicacionResponse>;
    validateCompatibilidad(id: string, request: ValidateCompatibilidadRequest): Promise<import("../../../application/aplicaciones/dto/response/compatibilidad.response").CompatibilidadResponse>;
}
