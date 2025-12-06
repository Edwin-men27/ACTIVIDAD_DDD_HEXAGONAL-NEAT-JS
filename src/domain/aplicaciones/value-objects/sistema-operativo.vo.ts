import { ValueObject } from '../../shared/value-object';

interface SistemaOperativoProps {
  value: string;
}

export class SistemaOperativo extends ValueObject<SistemaOperativoProps> {
  protected readonly props: SistemaOperativoProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('El sistema operativo es obligatorio');
    }
    if (trimmed.length > 120) {
      throw new Error('El sistema operativo es demasiado largo');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }
}
