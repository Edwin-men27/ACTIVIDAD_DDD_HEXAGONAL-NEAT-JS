import { ValueObject } from '../../shared/value-object';

interface DescripcionProps {
  value: string;
}

export class Descripcion extends ValueObject<DescripcionProps> {
  protected readonly props: DescripcionProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim() ?? '';
    if (trimmed.length > 500) {
      throw new Error('La descripción no puede superar los 500 caracteres');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }
}
