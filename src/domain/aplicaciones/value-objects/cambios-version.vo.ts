import { ValueObject } from '../../shared/value-object';

interface CambiosVersionProps {
  value: string;
}

export class CambiosVersion extends ValueObject<CambiosVersionProps> {
  protected readonly props: CambiosVersionProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('Los cambios de la versión son obligatorios');
    }
    if (trimmed.length > 2000) {
      throw new Error('Los cambios de la versión son demasiado extensos');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }
}
