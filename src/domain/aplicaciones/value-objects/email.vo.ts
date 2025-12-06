import { ValueObject } from '../../shared/value-object';

interface EmailProps {
  value: string;
}

export class Email extends ValueObject<EmailProps> {
  protected readonly props: EmailProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('El correo es obligatorio');
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(trimmed)) {
      throw new Error('El formato del correo no es válido');
    }
    this.props = { value: trimmed.toLowerCase() };
  }

  get value(): string {
    return this.props.value;
  }
}
