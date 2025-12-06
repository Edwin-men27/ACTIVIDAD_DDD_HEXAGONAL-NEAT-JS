"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AplicacionesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const services_1 = require("../application/aplicaciones/services");
const aplicacion_use_cases_1 = require("../application/aplicaciones/ports/in/aplicacion.use-cases");
const aplicacion_repository_1 = require("../domain/aplicaciones/aplicacion.repository");
const aplicaciones_controller_1 = require("../infrastructure/entrypoints/aplicaciones/aplicaciones.controller");
const aplicacion_orm_entity_1 = require("../infrastructure/persistence/typeorm/entities/aplicacion.orm-entity");
const aplicacion_typeorm_repository_1 = require("../infrastructure/persistence/typeorm/repositories/aplicacion-typeorm.repository");
const schema_init_service_1 = require("../infrastructure/persistence/typeorm/schema-init.service");
let AplicacionesModule = class AplicacionesModule {
};
exports.AplicacionesModule = AplicacionesModule;
exports.AplicacionesModule = AplicacionesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([aplicacion_orm_entity_1.AplicacionOrmEntity])],
        controllers: [aplicaciones_controller_1.AplicacionesController],
        providers: [
            { provide: aplicacion_repository_1.AplicacionRepository, useClass: aplicacion_typeorm_repository_1.AplicacionTypeOrmRepository },
            { provide: aplicacion_use_cases_1.ICreateAplicacionUseCase, useClass: services_1.CreateAplicacionService },
            { provide: aplicacion_use_cases_1.IUpdateAplicacionUseCase, useClass: services_1.UpdateAplicacionService },
            { provide: aplicacion_use_cases_1.IChangeConexionUseCase, useClass: services_1.ChangeConexionService },
            { provide: aplicacion_use_cases_1.IChangeLicenciaUseCase, useClass: services_1.ChangeLicenciaService },
            { provide: aplicacion_use_cases_1.IAddVersionUseCase, useClass: services_1.AddVersionService },
            { provide: aplicacion_use_cases_1.IChangeEstadoAplicacionUseCase, useClass: services_1.ChangeEstadoAplicacionService },
            { provide: aplicacion_use_cases_1.IGetAplicacionByIdUseCase, useClass: services_1.GetAplicacionByIdService },
            { provide: aplicacion_use_cases_1.IListAplicacionesUseCase, useClass: services_1.ListAplicacionesService },
            { provide: aplicacion_use_cases_1.IValidateCompatibilidadUseCase, useClass: services_1.ValidateCompatibilidadService },
            schema_init_service_1.AplicacionesSchemaInitService,
        ],
        exports: [aplicacion_repository_1.AplicacionRepository],
    })
], AplicacionesModule);
//# sourceMappingURL=aplicaciones.module.js.map