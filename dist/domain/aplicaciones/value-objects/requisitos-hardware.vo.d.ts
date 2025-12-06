import { ValueObject } from '../../shared/value-object';
interface RequisitosHardwareProps {
    value: string;
}
export declare class RequisitosHardware extends ValueObject<RequisitosHardwareProps> {
    protected readonly props: RequisitosHardwareProps;
    constructor(value: string);
    get value(): string;
}
export {};
