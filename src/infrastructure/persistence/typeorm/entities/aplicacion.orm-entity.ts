import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'aplicaciones' })
export class AplicacionOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 150 })
  nombre!: string;

  @Column({ length: 150 })
  proveedor!: string;

  @Column({ length: 100 })
  categoria!: string;

  @Column({ name: 'lenguaje_principal', length: 100 })
  lenguajePrincipal!: string;

  @Column({ name: 'lenguaje_secundario', type: 'varchar', length: 100, nullable: true })
  lenguajeSecundario?: string | null;

  @Column({ name: 'usa_base_datos', type: 'boolean' })
  usaBaseDatos!: boolean;

  @Column({ name: 'requiere_conexion_red', type: 'boolean' })
  requiereConexionRed!: boolean;

  @Column({ name: 'num_bits', type: 'int' })
  numBits!: number;

  @Column({ name: 'sistema_operativo', length: 120 })
  sistemaOperativo!: string;

  @Column({ name: 'requisitos_hardware', type: 'text', nullable: true })
  requisitosHardware?: string | null;

  @Column({ name: 'licencia', length: 50 })
  licencia!: string;

  @Column({ name: 'precio', type: 'numeric', precision: 18, scale: 2 })
  precio!: number;

  @Column({ name: 'descripcion', type: 'text', nullable: true })
  descripcion?: string | null;

  @Column({ name: 'web', type: 'varchar', length: 300, nullable: true })
  web?: string | null;

  @Column({ name: 'correo', length: 150 })
  correo!: string;

  @Column({ name: 'tamano_instalador', type: 'numeric', precision: 18, scale: 2 })
  tamanoInstalador!: number;

  @Column({ name: 'estado', length: 20 })
  estadoAplicacion!: string;

  @Column({ name: 'versiones', type: 'jsonb', default: [] })
  versiones!: { id: string; numeroVersion: string; fechaPublicacion: string; cambios: string }[];

  @Column({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt!: Date;

  @Column({ name: 'updated_at', type: 'timestamp with time zone', nullable: true })
  updatedAt?: Date | null;
}
