import { Aplicacion } from './aplicacion.entity';
import { AplicacionId } from './value-objects/aplicacion-id.vo';
import { NombreAplicacion } from './value-objects/nombre-aplicacion.vo';

export abstract class AplicacionRepository {
  abstract findById(id: AplicacionId): Promise<Aplicacion | null>;
  abstract findByNombre(nombre: NombreAplicacion): Promise<Aplicacion | null>;
  abstract findAll(): Promise<Aplicacion[]>;
  abstract save(aplicacion: Aplicacion): Promise<void>;
  abstract delete(id: AplicacionId): Promise<void>;
}
