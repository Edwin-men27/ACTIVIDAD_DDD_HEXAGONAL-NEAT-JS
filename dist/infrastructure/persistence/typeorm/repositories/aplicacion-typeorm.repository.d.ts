import { Repository } from 'typeorm';
import { AplicacionRepository } from '../../../../domain/aplicaciones/aplicacion.repository';
import { Aplicacion } from '../../../../domain/aplicaciones/aplicacion.entity';
import { AplicacionId } from '../../../../domain/aplicaciones/value-objects/aplicacion-id.vo';
import { NombreAplicacion } from '../../../../domain/aplicaciones/value-objects/nombre-aplicacion.vo';
import { AplicacionOrmEntity } from '../entities/aplicacion.orm-entity';
export declare class AplicacionTypeOrmRepository implements AplicacionRepository {
    private readonly repo;
    constructor(repo: Repository<AplicacionOrmEntity>);
    findById(id: AplicacionId): Promise<Aplicacion | null>;
    findByNombre(nombre: NombreAplicacion): Promise<Aplicacion | null>;
    findAll(): Promise<Aplicacion[]>;
    save(aplicacion: Aplicacion): Promise<void>;
    delete(id: AplicacionId): Promise<void>;
    private toDomain;
    private toOrm;
}
