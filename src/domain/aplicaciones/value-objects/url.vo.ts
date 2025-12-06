import { ValueObject } from '../../shared/value-object';

interface UrlProps {
  value: string;
}

export class Url extends ValueObject<UrlProps> {
  protected readonly props: UrlProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('La URL es obligatoria cuando se requiere conexión a red');
    }
    if (!/^https?:\/\//i.test(trimmed)) {
      throw new Error('La URL debe comenzar con http:// o https://');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }
}
