import { ValueObject } from '../../shared/value-object';

export type LicenciaTipoPermitido = 'gratuita' | 'pago' | 'opensource' | 'empresarial';

interface LicenciaTipoProps {
  value: LicenciaTipoPermitido;
}

const PERMITIDOS: LicenciaTipoPermitido[] = ['gratuita', 'pago', 'opensource', 'empresarial'];

export class LicenciaTipo extends ValueObject<LicenciaTipoProps> {
  protected readonly props: LicenciaTipoProps;

  constructor(value: string) {
    super();
    const normalized = value?.trim().toLowerCase() as LicenciaTipoPermitido;
    if (!normalized) {
      throw new Error('La licencia es obligatoria');
    }
    if (!PERMITIDOS.includes(normalized)) {
      throw new Error(`La licencia ${value} no es válida`);
    }
    this.props = { value: normalized };
  }

  get value(): LicenciaTipoPermitido {
    return this.props.value;
  }
}
