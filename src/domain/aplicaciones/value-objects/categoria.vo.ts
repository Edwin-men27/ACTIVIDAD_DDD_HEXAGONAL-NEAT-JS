import { ValueObject } from '../../shared/value-object';

interface CategoriaProps {
  value: string;
}

export class Categoria extends ValueObject<CategoriaProps> {
  protected readonly props: CategoriaProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('La categoría es obligatoria');
    }
    if (trimmed.length > 100) {
      throw new Error('La categoría es demasiado larga');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }
}
