import { ValueObject } from '../../shared/value-object';
interface NumBitsProps {
    value: number;
}
export declare class NumBits extends ValueObject<NumBitsProps> {
    protected readonly props: NumBitsProps;
    constructor(value: number);
    get value(): number;
}
export {};
