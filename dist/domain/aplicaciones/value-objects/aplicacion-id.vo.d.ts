import { ValueObject } from '../../shared/value-object';
interface AplicacionIdProps {
    value: string;
}
export declare class AplicacionId extends ValueObject<AplicacionIdProps> {
    protected readonly props: AplicacionIdProps;
    private constructor();
    get value(): string;
    static new(): AplicacionId;
    static from(value: string): AplicacionId;
}
export {};
