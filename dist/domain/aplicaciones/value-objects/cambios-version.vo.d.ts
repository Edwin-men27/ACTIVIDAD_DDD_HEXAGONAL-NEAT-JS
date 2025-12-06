import { ValueObject } from '../../shared/value-object';
interface CambiosVersionProps {
    value: string;
}
export declare class CambiosVersion extends ValueObject<CambiosVersionProps> {
    protected readonly props: CambiosVersionProps;
    constructor(value: string);
    get value(): string;
}
export {};
