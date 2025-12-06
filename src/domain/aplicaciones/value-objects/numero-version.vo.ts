import { ValueObject } from '../../shared/value-object';

interface NumeroVersionProps {
  value: string;
}

export class NumeroVersion extends ValueObject<NumeroVersionProps> {
  protected readonly props: NumeroVersionProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('El número de versión es obligatorio');
    }
    if (!/^[0-9]+(\.[0-9]+)*$/.test(trimmed)) {
      throw new Error('El número de versión debe tener formato tipo 1.0.0');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }

  compareTo(other: NumeroVersion): number {
    const thisParts = this.props.value.split('.').map((p) => Number(p));
    const otherParts = other.value.split('.').map((p) => Number(p));
    const max = Math.max(thisParts.length, otherParts.length);
    for (let i = 0; i < max; i++) {
      const a = thisParts[i] ?? 0;
      const b = otherParts[i] ?? 0;
      if (a > b) return 1;
      if (a < b) return -1;
    }
    return 0;
  }
}
