import { ValueObject } from '../../shared/value-object';
export type EstadoAplicacionTipo = 'ACTIVA' | 'INACTIVA';
interface EstadoAplicacionProps {
    value: EstadoAplicacionTipo;
}
export declare class EstadoAplicacion extends ValueObject<EstadoAplicacionProps> {
    protected readonly props: EstadoAplicacionProps;
    constructor(value: string);
    get value(): EstadoAplicacionTipo;
}
export {};
