import { ValueObject } from '../../shared/value-object';
interface TamanoInstaladorProps {
    value: number;
}
export declare class TamanoInstalador extends ValueObject<TamanoInstaladorProps> {
    protected readonly props: TamanoInstaladorProps;
    constructor(value: number);
    get value(): number;
}
export {};
