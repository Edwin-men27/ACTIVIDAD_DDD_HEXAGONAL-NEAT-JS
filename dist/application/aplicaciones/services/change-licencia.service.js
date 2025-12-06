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
exports.ChangeLicenciaService = void 0;
const common_1 = require("@nestjs/common");
const aplicacion_repository_1 = require("../../../domain/aplicaciones/aplicacion.repository");
const aplicacion_mapper_1 = require("../mapper/aplicacion.mapper");
const licencia_tipo_vo_1 = require("../../../domain/aplicaciones/value-objects/licencia-tipo.vo");
const precio_vo_1 = require("../../../domain/aplicaciones/value-objects/precio.vo");
const aplicacion_id_vo_1 = require("../../../domain/aplicaciones/value-objects/aplicacion-id.vo");
const exceptions_1 = require("../../../domain/aplicaciones/exceptions");
let ChangeLicenciaService = class ChangeLicenciaService {
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
        const licencia = new licencia_tipo_vo_1.LicenciaTipo(command.licencia);
        const precio = precio_vo_1.Precio.create(licencia.value === 'gratuita' ? 0 : command.precio, licencia);
        aplicacion.cambiarLicencia(licencia, precio);
        await this.aplicacionRepository.save(aplicacion);
        return aplicacion_mapper_1.AplicacionMapper.toResponse(aplicacion);
    }
};
exports.ChangeLicenciaService = ChangeLicenciaService;
exports.ChangeLicenciaService = ChangeLicenciaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [aplicacion_repository_1.AplicacionRepository])
], ChangeLicenciaService);
//# sourceMappingURL=change-licencia.service.js.map