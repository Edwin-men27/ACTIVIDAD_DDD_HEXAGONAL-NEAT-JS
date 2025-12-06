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
exports.ChangeConexionService = void 0;
const common_1 = require("@nestjs/common");
const aplicacion_repository_1 = require("../../../domain/aplicaciones/aplicacion.repository");
const aplicacion_mapper_1 = require("../mapper/aplicacion.mapper");
const aplicacion_id_vo_1 = require("../../../domain/aplicaciones/value-objects/aplicacion-id.vo");
const exceptions_1 = require("../../../domain/aplicaciones/exceptions");
const url_vo_1 = require("../../../domain/aplicaciones/value-objects/url.vo");
let ChangeConexionService = class ChangeConexionService {
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
        const web = command.web !== undefined
            ? command.web
                ? new url_vo_1.Url(command.web)
                : null
            : aplicacion.web;
        aplicacion.cambiarEstadoConexion(command.requiereConexionRed, web ?? null);
        await this.aplicacionRepository.save(aplicacion);
        return aplicacion_mapper_1.AplicacionMapper.toResponse(aplicacion);
    }
};
exports.ChangeConexionService = ChangeConexionService;
exports.ChangeConexionService = ChangeConexionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [aplicacion_repository_1.AplicacionRepository])
], ChangeConexionService);
//# sourceMappingURL=change-conexion.service.js.map