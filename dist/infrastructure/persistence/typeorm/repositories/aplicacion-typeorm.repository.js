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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AplicacionTypeOrmRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const aplicacion_entity_1 = require("../../../../domain/aplicaciones/aplicacion.entity");
const aplicacion_id_vo_1 = require("../../../../domain/aplicaciones/value-objects/aplicacion-id.vo");
const nombre_aplicacion_vo_1 = require("../../../../domain/aplicaciones/value-objects/nombre-aplicacion.vo");
const proveedor_vo_1 = require("../../../../domain/aplicaciones/value-objects/proveedor.vo");
const categoria_vo_1 = require("../../../../domain/aplicaciones/value-objects/categoria.vo");
const lenguaje_vo_1 = require("../../../../domain/aplicaciones/value-objects/lenguaje.vo");
const num_bits_vo_1 = require("../../../../domain/aplicaciones/value-objects/num-bits.vo");
const sistema_operativo_vo_1 = require("../../../../domain/aplicaciones/value-objects/sistema-operativo.vo");
const requisitos_hardware_vo_1 = require("../../../../domain/aplicaciones/value-objects/requisitos-hardware.vo");
const licencia_tipo_vo_1 = require("../../../../domain/aplicaciones/value-objects/licencia-tipo.vo");
const precio_vo_1 = require("../../../../domain/aplicaciones/value-objects/precio.vo");
const descripcion_vo_1 = require("../../../../domain/aplicaciones/value-objects/descripcion.vo");
const url_vo_1 = require("../../../../domain/aplicaciones/value-objects/url.vo");
const email_vo_1 = require("../../../../domain/aplicaciones/value-objects/email.vo");
const tamano_instalador_vo_1 = require("../../../../domain/aplicaciones/value-objects/tamano-instalador.vo");
const estado_aplicacion_vo_1 = require("../../../../domain/aplicaciones/value-objects/estado-aplicacion.vo");
const version_aplicacion_entity_1 = require("../../../../domain/aplicaciones/version-aplicacion.entity");
const version_id_vo_1 = require("../../../../domain/aplicaciones/value-objects/version-id.vo");
const numero_version_vo_1 = require("../../../../domain/aplicaciones/value-objects/numero-version.vo");
const cambios_version_vo_1 = require("../../../../domain/aplicaciones/value-objects/cambios-version.vo");
const aplicacion_orm_entity_1 = require("../entities/aplicacion.orm-entity");
let AplicacionTypeOrmRepository = class AplicacionTypeOrmRepository {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async findById(id) {
        const model = await this.repo.findOne({ where: { id: id.value } });
        return model ? this.toDomain(model) : null;
    }
    async findByNombre(nombre) {
        const model = await this.repo.findOne({ where: { nombre: nombre.value } });
        return model ? this.toDomain(model) : null;
    }
    async findAll() {
        const models = await this.repo.find();
        return models.map((m) => this.toDomain(m));
    }
    async save(aplicacion) {
        await this.repo.save(this.toOrm(aplicacion));
    }
    async delete(id) {
        await this.repo.delete({ id: id.value });
    }
    toDomain(model) {
        const licencia = new licencia_tipo_vo_1.LicenciaTipo(model.licencia);
        const versiones = (model.versiones ?? []).map((v) => version_aplicacion_entity_1.VersionAplicacion.restore(version_id_vo_1.VersionId.from(v.id), new numero_version_vo_1.NumeroVersion(v.numeroVersion), new Date(v.fechaPublicacion), new cambios_version_vo_1.CambiosVersion(v.cambios)));
        return aplicacion_entity_1.Aplicacion.restore(aplicacion_id_vo_1.AplicacionId.from(model.id), new nombre_aplicacion_vo_1.NombreAplicacion(model.nombre), new proveedor_vo_1.Proveedor(model.proveedor), new categoria_vo_1.Categoria(model.categoria), new lenguaje_vo_1.Lenguaje(model.lenguajePrincipal), model.lenguajeSecundario ? new lenguaje_vo_1.Lenguaje(model.lenguajeSecundario) : null, model.usaBaseDatos, model.requiereConexionRed, new num_bits_vo_1.NumBits(model.numBits), new sistema_operativo_vo_1.SistemaOperativo(model.sistemaOperativo), model.requisitosHardware ? new requisitos_hardware_vo_1.RequisitosHardware(model.requisitosHardware) : null, licencia, precio_vo_1.Precio.create(Number(model.precio), licencia), model.descripcion ? new descripcion_vo_1.Descripcion(model.descripcion) : null, model.web ? new url_vo_1.Url(model.web) : null, new email_vo_1.Email(model.correo), new tamano_instalador_vo_1.TamanoInstalador(Number(model.tamanoInstalador)), new estado_aplicacion_vo_1.EstadoAplicacion(model.estadoAplicacion), versiones, model.createdAt, model.updatedAt);
    }
    toOrm(aplicacion) {
        return {
            id: aplicacion.id.value,
            nombre: aplicacion.nombre.value,
            proveedor: aplicacion.proveedor.value,
            categoria: aplicacion.categoria.value,
            lenguajePrincipal: aplicacion.lenguajePrincipal.value,
            lenguajeSecundario: aplicacion.lenguajeSecundario?.value ?? null,
            usaBaseDatos: aplicacion.usaBaseDatos,
            requiereConexionRed: aplicacion.requiereConexionRed,
            numBits: aplicacion.numBits.value,
            sistemaOperativo: aplicacion.sistemaOperativo.value,
            requisitosHardware: aplicacion.requisitosHardware?.value ?? null,
            licencia: aplicacion.licencia.value,
            precio: aplicacion.precio.value,
            descripcion: aplicacion.descripcion?.value ?? null,
            web: aplicacion.web?.value ?? null,
            correo: aplicacion.correo.value,
            tamanoInstalador: aplicacion.tamanoInstalador.value,
            estadoAplicacion: aplicacion.estadoAplicacion.value,
            versiones: aplicacion.versiones.map((v) => ({
                ...v.toPrimitives(),
                fechaPublicacion: v.fechaPublicacion.toISOString(),
            })),
            createdAt: aplicacion.createdAt,
            updatedAt: aplicacion.updatedAt ?? null,
        };
    }
};
exports.AplicacionTypeOrmRepository = AplicacionTypeOrmRepository;
exports.AplicacionTypeOrmRepository = AplicacionTypeOrmRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(aplicacion_orm_entity_1.AplicacionOrmEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AplicacionTypeOrmRepository);
//# sourceMappingURL=aplicacion-typeorm.repository.js.map