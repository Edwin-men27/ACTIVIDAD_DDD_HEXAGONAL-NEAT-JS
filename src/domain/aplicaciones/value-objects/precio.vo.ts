import { ValueObject } from '../../shared/value-object';
import { LicenciaTipo } from './licencia-tipo.vo';

interface PrecioProps {
  value: number;
}

export class Precio extends ValueObject<PrecioProps> {
  protected readonly props: PrecioProps;

  private constructor(value: number) {
    super();
    this.props = { value };
  }

  static create(value: number, licencia: LicenciaTipo): Precio {
    if (value === null || value === undefined || Number.isNaN(value)) {
      throw new Error('El precio es obligatorio');
    }
    if (value < 0) {
      throw new Error('El precio no puede ser negativo');
    }
    if (licencia.value === 'gratuita') {
      if (value !== 0) {
        throw new Error('Una licencia gratuita debe tener precio 0');
      }
      return new Precio(0);
    }
    return new Precio(value);
  }

  get value(): number {
    return this.props.value;
  }
}
