import { ValueObject } from '../../shared/value-object';
interface NombreAplicacionProps {
    value: string;
}
export declare class NombreAplicacion extends ValueObject<NombreAplicacionProps> {
    protected readonly props: NombreAplicacionProps;
    constructor(value: string);
    get value(): string;
}
export {};
