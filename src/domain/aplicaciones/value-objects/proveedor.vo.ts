import { ValueObject } from '../../shared/value-object';

interface ProveedorProps {
  value: string;
}

export class Proveedor extends ValueObject<ProveedorProps> {
  protected readonly props: ProveedorProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('El proveedor es obligatorio');
    }
    if (trimmed.length > 150) {
      throw new Error('El proveedor es demasiado largo');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }
}
