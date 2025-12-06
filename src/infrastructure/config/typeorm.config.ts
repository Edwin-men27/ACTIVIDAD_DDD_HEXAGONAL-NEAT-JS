import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserOrmEntity } from '../persistence/typeorm/entities/user.orm-entity';
import { TokenBlacklistOrmEntity } from '../persistence/typeorm/entities/token-blacklist.orm-entity';
import { AplicacionOrmEntity } from '../persistence/typeorm/entities/aplicacion.orm-entity';

const DEFAULT_DATABASE_URL =
  'postgresql://emendoza:emendoza123@144.22.48.194:5432/emendoza_software';

export const buildTypeOrmConfig = (config: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  url: config.get<string>('DATABASE_URL', DEFAULT_DATABASE_URL),
  entities: [UserOrmEntity, AplicacionOrmEntity, TokenBlacklistOrmEntity],
  synchronize: false,
  logging: config.get<string>('TYPEORM_LOGGING', 'false') === 'true',
});
