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
exports.UpdateAplicacionService = void 0;
const common_1 = require("@nestjs/common");
const aplicacion_repository_1 = require("../../../domain/aplicaciones/aplicacion.repository");
const aplicacion_mapper_1 = require("../mapper/aplicacion.mapper");
const aplicacion_id_vo_1 = require("../../../domain/aplicaciones/value-objects/aplicacion-id.vo");
const proveedor_vo_1 = require("../../../domain/aplicaciones/value-objects/proveedor.vo");
const categoria_vo_1 = require("../../../domain/aplicaciones/value-objects/categoria.vo");
const lenguaje_vo_1 = require("../../../domain/aplicaciones/value-objects/lenguaje.vo");
const num_bits_vo_1 = require("../../../domain/aplicaciones/value-objects/num-bits.vo");
const sistema_operativo_vo_1 = require("../../../domain/aplicaciones/value-objects/sistema-operativo.vo");
const requisitos_hardware_vo_1 = require("../../../domain/aplicaciones/value-objects/requisitos-hardware.vo");
const licencia_tipo_vo_1 = require("../../../domain/aplicaciones/value-objects/licencia-tipo.vo");
const precio_vo_1 = require("../../../domain/aplicaciones/value-objects/precio.vo");
const descripcion_vo_1 = require("../../../domain/aplicaciones/value-objects/descripcion.vo");
const url_vo_1 = require("../../../domain/aplicaciones/value-objects/url.vo");
const email_vo_1 = require("../../../domain/aplicaciones/value-objects/email.vo");
const tamano_instalador_vo_1 = require("../../../domain/aplicaciones/value-objects/tamano-instalador.vo");
const exceptions_1 = require("../../../domain/aplicaciones/exceptions");
let UpdateAplicacionService = class UpdateAplicacionService {
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
        const licencia = command.licencia ? new licencia_tipo_vo_1.LicenciaTipo(command.licencia) : undefined;
        const precio = (() => {
            if (licencia) {
                const valor = licencia.value === 'gratuita' ? 0 : command.precio ?? aplicacion.precio.value;
                return precio_vo_1.Precio.create(valor, licencia);
            }
            if (command.precio !== undefined) {
                return precio_vo_1.Precio.create(command.precio, aplicacion.licencia);
            }
            return undefined;
        })();
        aplicacion.actualizar({
            proveedor: command.proveedor ? new proveedor_vo_1.Proveedor(command.proveedor) : undefined,
            categoria: command.categoria ? new categoria_vo_1.Categoria(command.categoria) : undefined,
            lenguajePrincipal: command.lenguajePrincipal ? new lenguaje_vo_1.Lenguaje(command.lenguajePrincipal) : undefined,
            lenguajeSecundario: command.lenguajeSecundario !== undefined
                ? command.lenguajeSecundario
                    ? new lenguaje_vo_1.Lenguaje(command.lenguajeSecundario)
                    : null
                : undefined,
            usaBaseDatos: command.usaBaseDatos,
            requiereConexionRed: command.requiereConexionRed,
            numBits: command.numBits !== undefined ? new num_bits_vo_1.NumBits(command.numBits) : undefined,
            sistemaOperativo: command.sistemaOperativo ? new sistema_operativo_vo_1.SistemaOperativo(command.sistemaOperativo) : undefined,
            requisitosHardware: command.requisitosHardware !== undefined
                ? command.requisitosHardware
                    ? new requisitos_hardware_vo_1.RequisitosHardware(command.requisitosHardware)
                    : null
                : undefined,
            licencia,
            precio,
            descripcion: command.descripcion !== undefined
                ? command.descripcion !== null
                    ? new descripcion_vo_1.Descripcion(command.descripcion)
                    : null
                : undefined,
            web: command.web !== undefined
                ? command.web
                    ? new url_vo_1.Url(command.web)
                    : null
                : undefined,
            correo: command.correo ? new email_vo_1.Email(command.correo) : undefined,
            tamanoInstalador: command.tamanoInstalador !== undefined ? new tamano_instalador_vo_1.TamanoInstalador(command.tamanoInstalador) : undefined,
        });
        await this.aplicacionRepository.save(aplicacion);
        return aplicacion_mapper_1.AplicacionMapper.toResponse(aplicacion);
    }
};
exports.UpdateAplicacionService = UpdateAplicacionService;
exports.UpdateAplicacionService = UpdateAplicacionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [aplicacion_repository_1.AplicacionRepository])
], UpdateAplicacionService);
//# sourceMappingURL=update-aplicacion.service.js.map