import { ValueObject } from '../../shared/value-object';

interface NumBitsProps {
  value: number;
}

export class NumBits extends ValueObject<NumBitsProps> {
  protected readonly props: NumBitsProps;

  constructor(value: number) {
    super();
    if (value !== 32 && value !== 64) {
      throw new Error('numBits solo puede ser 32 o 64');
    }
    this.props = { value };
  }

  get value(): number {
    return this.props.value;
  }
}
