import { ValueObject } from '../../shared/value-object';
import { LicenciaTipo } from './licencia-tipo.vo';
interface PrecioProps {
    value: number;
}
export declare class Precio extends ValueObject<PrecioProps> {
    protected readonly props: PrecioProps;
    private constructor();
    static create(value: number, licencia: LicenciaTipo): Precio;
    get value(): number;
}
export {};
