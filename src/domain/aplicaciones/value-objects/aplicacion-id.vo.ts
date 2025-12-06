import { randomUUID } from 'crypto';
import { ValueObject } from '../../shared/value-object';

interface AplicacionIdProps {
  value: string;
}

export class AplicacionId extends ValueObject<AplicacionIdProps> {
  protected readonly props: AplicacionIdProps;

  private constructor(value: string) {
    super();
    this.props = { value };
  }

  get value(): string {
    return this.props.value;
  }

  static new(): AplicacionId {
    return new AplicacionId(randomUUID());
  }

  static from(value: string): AplicacionId {
    if (!value) {
      throw new Error('El id de la aplicación no puede ser vacío');
    }
    return new AplicacionId(value);
  }
}
