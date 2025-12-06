import { ValueObject } from '../../shared/value-object';

interface LenguajeProps {
  value: string;
}

export class Lenguaje extends ValueObject<LenguajeProps> {
  protected readonly props: LenguajeProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('El lenguaje es obligatorio');
    }
    if (trimmed.length > 100) {
      throw new Error('El lenguaje es demasiado largo');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }
}
