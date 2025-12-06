"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AplicacionesSchemaInitService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AplicacionesSchemaInitService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let AplicacionesSchemaInitService = AplicacionesSchemaInitService_1 = class AplicacionesSchemaInitService {
    dataSource;
    logger = new common_1.Logger(AplicacionesSchemaInitService_1.name);
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async onModuleInit() {
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
        }
        catch (error) {
            this.logger.warn(`No se pudo aplicar el init de esquema de aplicaciones (se seguirá levantando). Detalle: ${error?.message}`);
        }
    }
};
exports.AplicacionesSchemaInitService = AplicacionesSchemaInitService;
exports.AplicacionesSchemaInitService = AplicacionesSchemaInitService = AplicacionesSchemaInitService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], AplicacionesSchemaInitService);
//# sourceMappingURL=schema-init.service.js.map