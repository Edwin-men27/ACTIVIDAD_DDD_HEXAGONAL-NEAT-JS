import { ValueObject } from '../../shared/value-object';
interface NumeroVersionProps {
    value: string;
}
export declare class NumeroVersion extends ValueObject<NumeroVersionProps> {
    protected readonly props: NumeroVersionProps;
    constructor(value: string);
    get value(): string;
    compareTo(other: NumeroVersion): number;
}
export {};
