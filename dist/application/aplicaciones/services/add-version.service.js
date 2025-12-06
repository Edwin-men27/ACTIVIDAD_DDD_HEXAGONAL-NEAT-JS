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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddVersionService = void 0;
const common_1 = require("@nestjs/common");
const aplicacion_repository_1 = require("../../../domain/aplicaciones/aplicacion.repository");
const aplicacion_mapper_1 = require("../mapper/aplicacion.mapper");
const numero_version_vo_1 = require("../../../domain/aplicaciones/value-objects/numero-version.vo");
const cambios_version_vo_1 = require("../../../domain/aplicaciones/value-objects/cambios-version.vo");
const version_aplicacion_entity_1 = require("../../../domain/aplicaciones/version-aplicacion.entity");
const aplicacion_id_vo_1 = require("../../../domain/aplicaciones/value-objects/aplicacion-id.vo");
const exceptions_1 = require("../../../domain/aplicaciones/exceptions");
let AddVersionService = class AddVersionService {
    aplicacionRepository;
    constructor(aplicacionRepository) {
        this.aplicacionRepository = aplicacionRepository;
    }
    async execute(command) {
        const id = aplicacion_id_vo_1.AplicacionId.from(command.id);
        const aplicacion = await this.aplicacionRepository.findById(id);
        if (!aplicacion) {
            throw new exceptions_1.AplicacionNotFoundException();
        }
        const version = version_aplicacion_entity_1.VersionAplicacion.create(new numero_version_vo_1.NumeroVersion(command.numeroVersion), command.fechaPublicacion ? new Date(command.fechaPublicacion) : new Date(), new cambios_version_vo_1.CambiosVersion(command.cambios));
        aplicacion.agregarVersion(version);
        await this.aplicacionRepository.save(aplicacion);
        return aplicacion_mapper_1.AplicacionMapper.toResponse(aplicacion);
    }
};
exports.AddVersionService = AddVersionService;
exports.AddVersionService = AddVersionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [aplicacion_repository_1.AplicacionRepository])
], AddVersionService);
//# sourceMappingURL=add-version.service.js.map