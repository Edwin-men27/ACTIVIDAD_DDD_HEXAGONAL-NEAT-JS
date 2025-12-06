import { ValueObject } from '../../shared/value-object';

interface RequisitosHardwareProps {
  value: string;
}

export class RequisitosHardware extends ValueObject<RequisitosHardwareProps> {
  protected readonly props: RequisitosHardwareProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('Los requisitos de hardware son obligatorios cuando aplica');
    }
    if (trimmed.length > 1000) {
      throw new Error('Los requisitos de hardware son demasiado extensos');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }
}
