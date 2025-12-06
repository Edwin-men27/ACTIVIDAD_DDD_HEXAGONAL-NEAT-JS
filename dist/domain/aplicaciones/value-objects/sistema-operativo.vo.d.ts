import { ValueObject } from '../../shared/value-object';
interface SistemaOperativoProps {
    value: string;
}
export declare class SistemaOperativo extends ValueObject<SistemaOperativoProps> {
    protected readonly props: SistemaOperativoProps;
    constructor(value: string);
    get value(): string;
}
export {};
