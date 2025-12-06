import { ValueObject } from '../../shared/value-object';

interface NombreAplicacionProps {
  value: string;
}

export class NombreAplicacion extends ValueObject<NombreAplicacionProps> {
  protected readonly props: NombreAplicacionProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('El nombre de la aplicación es obligatorio');
    }
    if (trimmed.length < 3) {
      throw new Error('El nombre de la aplicación debe tener al menos 3 caracteres');
    }
    if (trimmed.length > 150) {
      throw new Error('El nombre de la aplicación es demasiado largo');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }
}
