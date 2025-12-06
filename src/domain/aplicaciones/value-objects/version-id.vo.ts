import { randomUUID } from 'crypto';
import { ValueObject } from '../../shared/value-object';

interface VersionIdProps {
  value: string;
}

export class VersionId extends ValueObject<VersionIdProps> {
  protected readonly props: VersionIdProps;

  private constructor(value: string) {
    super();
    this.props = { value };
  }

  get value(): string {
    return this.props.value;
  }

  static new(): VersionId {
    return new VersionId(randomUUID());
  }

  static from(value: string): VersionId {
    if (!value) {
      throw new Error('El id de la versión es obligatorio');
    }
    return new VersionId(value);
  }
}
