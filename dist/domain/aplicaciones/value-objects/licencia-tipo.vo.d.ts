import { ValueObject } from '../../shared/value-object';
export type LicenciaTipoPermitido = 'gratuita' | 'pago' | 'opensource' | 'empresarial';
interface LicenciaTipoProps {
    value: LicenciaTipoPermitido;
}
export declare class LicenciaTipo extends ValueObject<LicenciaTipoProps> {
    protected readonly props: LicenciaTipoProps;
    constructor(value: string);
    get value(): LicenciaTipoPermitido;
}
export {};
