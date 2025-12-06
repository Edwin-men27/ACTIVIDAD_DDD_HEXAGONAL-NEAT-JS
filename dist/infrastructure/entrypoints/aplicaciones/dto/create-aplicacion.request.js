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
exports.CreateAplicacionRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const LICENCIAS = ['gratuita', 'pago', 'opensource', 'empresarial'];
class CreateAplicacionRequest {
    nombre;
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
exports.CreateAplicacionRequest = CreateAplicacionRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Gestor de Tareas' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(150),
    __metadata("design:type", String)
], CreateAplicacionRequest.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ACME Corp' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(150),
    __metadata("design:type", String)
], CreateAplicacionRequest.prototype, "proveedor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Productividad' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateAplicacionRequest.prototype, "categoria", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Node.js' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateAplicacionRequest.prototype, "lenguajePrincipal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'TypeScript', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", Object)
], CreateAplicacionRequest.prototype, "lenguajeSecundario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateAplicacionRequest.prototype, "usaBaseDatos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateAplicacionRequest.prototype, "requiereConexionRed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 64, enum: [32, 64] }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateAplicacionRequest.prototype, "numBits", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Windows 11' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(120),
    __metadata("design:type", String)
], CreateAplicacionRequest.prototype, "sistemaOperativo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '8GB RAM, 2 CPU', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(1000),
    __metadata("design:type", Object)
], CreateAplicacionRequest.prototype, "requisitosHardware", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'pago', enum: LICENCIAS }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(LICENCIAS),
    __metadata("design:type", String)
], CreateAplicacionRequest.prototype, "licencia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 49.99 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateAplicacionRequest.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Aplicación para gestionar proyectos', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", Object)
], CreateAplicacionRequest.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://app.ejemplo.com', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateAplicacionRequest.prototype, "web", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'soporte@ejemplo.com' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateAplicacionRequest.prototype, "correo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 150.5 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateAplicacionRequest.prototype, "tamanoInstalador", void 0);
//# sourceMappingURL=create-aplicacion.request.js.map