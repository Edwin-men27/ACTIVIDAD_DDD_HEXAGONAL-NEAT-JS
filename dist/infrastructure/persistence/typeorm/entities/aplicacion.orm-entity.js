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
exports.AplicacionOrmEntity = void 0;
const typeorm_1 = require("typeorm");
let AplicacionOrmEntity = class AplicacionOrmEntity {
    id;
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
    estadoAplicacion;
    versiones;
    createdAt;
    updatedAt;
};
exports.AplicacionOrmEntity = AplicacionOrmEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AplicacionOrmEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 150 }),
    __metadata("design:type", String)
], AplicacionOrmEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 150 }),
    __metadata("design:type", String)
], AplicacionOrmEntity.prototype, "proveedor", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], AplicacionOrmEntity.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'lenguaje_principal', length: 100 }),
    __metadata("design:type", String)
], AplicacionOrmEntity.prototype, "lenguajePrincipal", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'lenguaje_secundario', type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", Object)
], AplicacionOrmEntity.prototype, "lenguajeSecundario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'usa_base_datos', type: 'boolean' }),
    __metadata("design:type", Boolean)
], AplicacionOrmEntity.prototype, "usaBaseDatos", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'requiere_conexion_red', type: 'boolean' }),
    __metadata("design:type", Boolean)
], AplicacionOrmEntity.prototype, "requiereConexionRed", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'num_bits', type: 'int' }),
    __metadata("design:type", Number)
], AplicacionOrmEntity.prototype, "numBits", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sistema_operativo', length: 120 }),
    __metadata("design:type", String)
], AplicacionOrmEntity.prototype, "sistemaOperativo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'requisitos_hardware', type: 'text', nullable: true }),
    __metadata("design:type", Object)
], AplicacionOrmEntity.prototype, "requisitosHardware", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'licencia', length: 50 }),
    __metadata("design:type", String)
], AplicacionOrmEntity.prototype, "licencia", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'precio', type: 'numeric', precision: 18, scale: 2 }),
    __metadata("design:type", Number)
], AplicacionOrmEntity.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'descripcion', type: 'text', nullable: true }),
    __metadata("design:type", Object)
], AplicacionOrmEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'web', type: 'varchar', length: 300, nullable: true }),
    __metadata("design:type", Object)
], AplicacionOrmEntity.prototype, "web", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'correo', length: 150 }),
    __metadata("design:type", String)
], AplicacionOrmEntity.prototype, "correo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tamano_instalador', type: 'numeric', precision: 18, scale: 2 }),
    __metadata("design:type", Number)
], AplicacionOrmEntity.prototype, "tamanoInstalador", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'estado', length: 20 }),
    __metadata("design:type", String)
], AplicacionOrmEntity.prototype, "estadoAplicacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'versiones', type: 'jsonb', default: [] }),
    __metadata("design:type", Array)
], AplicacionOrmEntity.prototype, "versiones", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_at', type: 'timestamp with time zone' }),
    __metadata("design:type", Date)
], AplicacionOrmEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updated_at', type: 'timestamp with time zone', nullable: true }),
    __metadata("design:type", Object)
], AplicacionOrmEntity.prototype, "updatedAt", void 0);
exports.AplicacionOrmEntity = AplicacionOrmEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'aplicaciones' })
], AplicacionOrmEntity);
//# sourceMappingURL=aplicacion.orm-entity.js.map