import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { DataSource } from 'typeorm';

/**
 * Pequeño inicializador para asegurar que la tabla `aplicaciones`
 * tenga las columnas necesarias incluso si el esquema fue creado sin ellas.
 * Es idempotente y solo corre al arrancar el módulo.
 */
@Injectable()
export class AplicacionesSchemaInitService implements OnModuleInit {
  private readonly logger = new Logger(AplicacionesSchemaInitService.name);

  constructor(private readonly dataSource: DataSource) {}

  async onModuleInit(): Promise<void> {
    try {
      await this.dataSource.query(`
        ALTER TABLE IF EXISTS aplicaciones ADD COLUMN IF NOT EXISTS estado VARCHAR(20);
        ALTER TABLE IF EXISTS aplicaciones ADD COLUMN IF NOT EXISTS versiones JSONB;
        ALTER TABLE IF EXISTS aplicaciones ADD COLUMN IF NOT EXISTS activa BOOLEAN DEFAULT true;

        UPDATE aplicaciones
        SET estado = CASE WHEN activa IS NULL OR activa THEN 'ACTIVA' ELSE 'INACTIVA' END
        WHERE estado IS NULL;

        UPDATE aplicaciones SET versiones = '[]'::jsonb WHERE versiones IS NULL;

        ALTER TABLE IF EXISTS aplicaciones ALTER COLUMN estado SET DEFAULT 'ACTIVA';
        ALTER TABLE IF EXISTS aplicaciones ALTER COLUMN estado SET NOT NULL;
        ALTER TABLE IF EXISTS aplicaciones ALTER COLUMN versiones SET DEFAULT '[]'::jsonb;
        ALTER TABLE IF EXISTS aplicaciones ALTER COLUMN versiones SET NOT NULL;
        ALTER TABLE IF EXISTS aplicaciones ALTER COLUMN activa SET DEFAULT true;
      `);
    } catch (error: any) {
      this.logger.warn(
        `No se pudo aplicar el init de esquema de aplicaciones (se seguirá levantando). Detalle: ${error?.message}`,
      );
    }
  }
}
