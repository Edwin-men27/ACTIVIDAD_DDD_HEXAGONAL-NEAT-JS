import { AplicacionResponse } from './aplicacion.response';

export interface AplicacionListResponse {
  aplicaciones: AplicacionResponse[];
  totalCount: number;
  page: number;
  pageSize: number;
}
