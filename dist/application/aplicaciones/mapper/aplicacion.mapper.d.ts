import { Aplicacion } from '../../../domain/aplicaciones/aplicacion.entity';
import { AplicacionListResponse } from '../dto/response/aplicacion-list.response';
import { AplicacionResponse } from '../dto/response/aplicacion.response';
export declare class AplicacionMapper {
    static toResponse(aplicacion: Aplicacion): AplicacionResponse;
    private static toVersionResponse;
    static toList(aplicaciones: Aplicacion[], total: number, page: number, pageSize: number): AplicacionListResponse;
}
