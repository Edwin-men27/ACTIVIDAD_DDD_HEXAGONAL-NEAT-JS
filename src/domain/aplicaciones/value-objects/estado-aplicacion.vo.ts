import { ValueObject } from '../../shared/value-object';

export type EstadoAplicacionTipo = 'ACTIVA' | 'INACTIVA';

interface EstadoAplicacionProps {
  value: EstadoAplicacionTipo;
}

const ESTADOS: EstadoAplicacionTipo[] = ['ACTIVA', 'INACTIVA'];

export class EstadoAplicacion extends ValueObject<EstadoAplicacionProps> {
  protected readonly props: EstadoAplicacionProps;

  constructor(value: string) {
    super();
    const upper = value?.trim().toUpperCase() as EstadoAplicacionTipo;
    if (!upper) {
      throw new Error('El estado de la aplicación es obligatorio');
    }
    if (!ESTADOS.includes(upper)) {
      throw new Error('El estado de la aplicación no es válido');
    }
    this.props = { value: upper };
  }

  get value(): EstadoAplicacionTipo {
    return this.props.value;
  }
}
