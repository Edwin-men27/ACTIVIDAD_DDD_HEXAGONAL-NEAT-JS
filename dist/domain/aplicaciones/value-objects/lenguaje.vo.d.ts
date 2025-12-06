import { ValueObject } from '../../shared/value-object';
interface LenguajeProps {
    value: string;
}
export declare class Lenguaje extends ValueObject<LenguajeProps> {
    protected readonly props: LenguajeProps;
    constructor(value: string);
    get value(): string;
}
export {};
