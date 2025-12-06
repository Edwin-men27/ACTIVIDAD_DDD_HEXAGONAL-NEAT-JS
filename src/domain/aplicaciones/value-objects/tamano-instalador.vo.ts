import { ValueObject } from '../../shared/value-object';

interface TamanoInstaladorProps {
  value: number;
}

export class TamanoInstalador extends ValueObject<TamanoInstaladorProps> {
  protected readonly props: TamanoInstaladorProps;

  constructor(value: number) {
    super();
    if (value === null || value === undefined || Number.isNaN(value)) {
      throw new Error('El tamaño del instalador es obligatorio');
    }
    if (value <= 0) {
      throw new Error('El tamaño del instalador debe ser mayor que 0');
    }
    this.props = { value };
  }

  get value(): number {
    return this.props.value;
  }
}
