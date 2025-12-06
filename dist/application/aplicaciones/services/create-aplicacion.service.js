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
exports.CreateAplicacionService = void 0;
const common_1 = require("@nestjs/common");
const aplicacion_entity_1 = require("../../../domain/aplicaciones/aplicacion.entity");
const aplicacion_repository_1 = require("../../../domain/aplicaciones/aplicacion.repository");
const nombre_aplicacion_vo_1 = require("../../../domain/aplicaciones/value-objects/nombre-aplicacion.vo");
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
const aplicacion_mapper_1 = require("../mapper/aplicacion.mapper");
const exceptions_1 = require("../../../domain/aplicaciones/exceptions");
let CreateAplicacionService = class CreateAplicacionService {
    aplicacionRepository;
    constructor(aplicacionRepository) {
        this.aplicacionRepository = aplicacionRepository;
    }
    async execute(command) {
        const nombre = new nombre_aplicacion_vo_1.NombreAplicacion(command.nombre);
        const existente = await this.aplicacionRepository.findByNombre(nombre);
        if (existente) {
            throw new exceptions_1.NombreAplicacionDuplicadoException(command.nombre);
        }
        const licencia = new licencia_tipo_vo_1.LicenciaTipo(command.licencia);
        const precioValor = licencia.value === 'gratuita' ? 0 : command.precio;
        const aplicacion = aplicacion_entity_1.Aplicacion.create(nombre, new proveedor_vo_1.Proveedor(command.proveedor), new categoria_vo_1.Categoria(command.categoria), new lenguaje_vo_1.Lenguaje(command.lenguajePrincipal), command.lenguajeSecundario ? new lenguaje_vo_1.Lenguaje(command.lenguajeSecundario) : null, command.usaBaseDatos, command.requiereConexionRed, new num_bits_vo_1.NumBits(command.numBits), new sistema_operativo_vo_1.SistemaOperativo(command.sistemaOperativo), command.requisitosHardware ? new requisitos_hardware_vo_1.RequisitosHardware(command.requisitosHardware) : null, licencia, precio_vo_1.Precio.create(precioValor, licencia), command.descripcion !== undefined && command.descripcion !== null ? new descripcion_vo_1.Descripcion(command.descripcion) : null, command.web ? new url_vo_1.Url(command.web) : null, new email_vo_1.Email(command.correo), new tamano_instalador_vo_1.TamanoInstalador(command.tamanoInstalador));
        await this.aplicacionRepository.save(aplicacion);
        return aplicacion_mapper_1.AplicacionMapper.toResponse(aplicacion);
    }
};
exports.CreateAplicacionService = CreateAplicacionService;
exports.CreateAplicacionService = CreateAplicacionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [aplicacion_repository_1.AplicacionRepository])
], CreateAplicacionService);
//# sourceMappingURL=create-aplicacion.service.js.map