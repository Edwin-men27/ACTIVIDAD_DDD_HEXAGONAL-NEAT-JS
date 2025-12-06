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
exports.UpdateAplicacionRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const LICENCIAS = ['gratuita', 'pago', 'opensource', 'empresarial'];
class UpdateAplicacionRequest {
    proveedor;
    categoria;
    lenguajePrincipal;
    lenguajeSecundario;
    usaBaseDatos;
    requiereConexionRed;
    numBits;
    sistemaOperativo;
    requisitosHardware;
    licencia;
    precio;
    descripcion;
    web;
    correo;
    tamanoInstalador;
}
exports.UpdateAplicacionRequest = UpdateAplicacionRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'ACME Corp' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(150),
    __metadata("design:type", String)
], UpdateAplicacionRequest.prototype, "proveedor", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Productividad' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], UpdateAplicacionRequest.prototype, "categoria", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Node.js' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], UpdateAplicacionRequest.prototype, "lenguajePrincipal", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'TypeScript' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", Object)
], UpdateAplicacionRequest.prototype, "lenguajeSecundario", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateAplicacionRequest.prototype, "usaBaseDatos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: false }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateAplicacionRequest.prototype, "requiereConexionRed", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 64, enum: [32, 64] }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateAplicacionRequest.prototype, "numBits", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Windows 11' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(120),
    __metadata("design:type", String)
], UpdateAplicacionRequest.prototype, "sistemaOperativo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '8GB RAM, 2 CPU' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(1000),
    __metadata("design:type", Object)
], UpdateAplicacionRequest.prototype, "requisitosHardware", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'pago', enum: LICENCIAS }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(LICENCIAS),
    __metadata("design:type", String)
], UpdateAplicacionRequest.prototype, "licencia", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateAplicacionRequest.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Nueva descripción' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", Object)
], UpdateAplicacionRequest.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://app.ejemplo.com' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], UpdateAplicacionRequest.prototype, "web", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'soporte@ejemplo.com' }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateAplicacionRequest.prototype, "correo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 120.4 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateAplicacionRequest.prototype, "tamanoInstalador", void 0);
//# sourceMappingURL=update-aplicacion.request.js.map