"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTypeOrmConfig = void 0;
const user_orm_entity_1 = require("../persistence/typeorm/entities/user.orm-entity");
const token_blacklist_orm_entity_1 = require("../persistence/typeorm/entities/token-blacklist.orm-entity");
const aplicacion_orm_entity_1 = require("../persistence/typeorm/entities/aplicacion.orm-entity");
const DEFAULT_DATABASE_URL = 'postgresql://emendoza:emendoza123@144.22.48.194:5432/emendoza_software';
const buildTypeOrmConfig = (config) => ({
    type: 'postgres',
    url: config.get('DATABASE_URL', DEFAULT_DATABASE_URL),
    entities: [user_orm_entity_1.UserOrmEntity, aplicacion_orm_entity_1.AplicacionOrmEntity, token_blacklist_orm_entity_1.TokenBlacklistOrmEntity],
    synchronize: false,
    logging: config.get('TYPEORM_LOGGING', 'false') === 'true',
});
exports.buildTypeOrmConfig = buildTypeOrmConfig;
//# sourceMappingURL=typeorm.config.js.map