import { ValueObject } from '../../shared/value-object';
interface ProveedorProps {
    value: string;
}
export declare class Proveedor extends ValueObject<ProveedorProps> {
    protected readonly props: ProveedorProps;
    constructor(value: string);
    get value(): string;
}
export {};
