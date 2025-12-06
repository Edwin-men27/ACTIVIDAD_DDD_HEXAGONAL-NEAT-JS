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
exports.AplicacionesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const aplicacion_use_cases_1 = require("../../../application/aplicaciones/ports/in/aplicacion.use-cases");
const create_aplicacion_request_1 = require("./dto/create-aplicacion.request");
const update_aplicacion_request_1 = require("./dto/update-aplicacion.request");
const change_conexion_request_1 = require("./dto/change-conexion.request");
const change_licencia_request_1 = require("./dto/change-licencia.request");
const add_version_request_1 = require("./dto/add-version.request");
const change_estado_request_1 = require("./dto/change-estado.request");
const validate_compatibilidad_request_1 = require("./dto/validate-compatibilidad.request");
const get_aplicacion_by_id_query_1 = require("../../../application/aplicaciones/dto/query/get-aplicacion-by-id.query");
const list_aplicaciones_query_1 = require("../../../application/aplicaciones/dto/query/list-aplicaciones.query");
const domain_exception_filter_1 = require("../common/domain-exception.filter");
let AplicacionesController = class AplicacionesController {
    createUseCase;
    updateUseCase;
    changeConexionUseCase;
    changeLicenciaUseCase;
    addVersionUseCase;
    changeEstadoUseCase;
    getByIdUseCase;
    listUseCase;
    validateCompatibilidadUseCase;
    constructor(createUseCase, updateUseCase, changeConexionUseCase, changeLicenciaUseCase, addVersionUseCase, changeEstadoUseCase, getByIdUseCase, listUseCase, validateCompatibilidadUseCase) {
        this.createUseCase = createUseCase;
        this.updateUseCase = updateUseCase;
        this.changeConexionUseCase = changeConexionUseCase;
        this.changeLicenciaUseCase = changeLicenciaUseCase;
        this.addVersionUseCase = addVersionUseCase;
        this.changeEstadoUseCase = changeEstadoUseCase;
        this.getByIdUseCase = getByIdUseCase;
        this.listUseCase = listUseCase;
        this.validateCompatibilidadUseCase = validateCompatibilidadUseCase;
    }
    create(request) {
        const command = request;
        return this.createUseCase.execute(command);
    }
    getById(id) {
        const query = new get_aplicacion_by_id_query_1.GetAplicacionByIdQuery();
        query.id = id;
        return this.getByIdUseCase.execute(query);
    }
    list(page = 1, pageSize = 10, searchTerm, categoria, proveedor, licencia, requiereConexionRed, usaBaseDatos) {
        const toBoolean = (value) => {
            if (value === undefined)
                return undefined;
            if (typeof value === 'boolean')
                return value;
            return value.toLowerCase() === 'true' || value === '1';
        };
        const query = new list_aplicaciones_query_1.ListAplicacionesQuery();
        query.page = Number(page) || 1;
        query.pageSize = Number(pageSize) || 10;
        query.searchTerm = searchTerm;
        query.categoria = categoria;
        query.proveedor = proveedor;
        query.licencia = licencia;
        const requiereBool = toBoolean(requiereConexionRed);
        const usaBdBool = toBoolean(usaBaseDatos);
        if (requiereBool !== undefined)
            query.requiereConexionRed = requiereBool;
        if (usaBdBool !== undefined)
            query.usaBaseDatos = usaBdBool;
        return this.listUseCase.execute(query);
    }
    update(id, request) {
        const command = request;
        command.id = id;
        return this.updateUseCase.execute(command);
    }
    changeConexion(id, request) {
        const command = request;
        command.id = id;
        return this.changeConexionUseCase.execute(command);
    }
    changeLicencia(id, request) {
        const command = request;
        command.id = id;
        return this.changeLicenciaUseCase.execute(command);
    }
    addVersion(id, request) {
        const command = request;
        command.id = id;
        return this.addVersionUseCase.execute(command);
    }
    changeEstado(id, request) {
        const command = request;
        command.id = id;
        return this.changeEstadoUseCase.execute(command);
    }
    validateCompatibilidad(id, request) {
        const query = request;
        query.id = id;
        return this.validateCompatibilidadUseCase.execute(query);
    }
};
exports.AplicacionesController = AplicacionesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_aplicacion_request_1.CreateAplicacionRequest]),
    __metadata("design:returntype", void 0)
], AplicacionesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AplicacionesController.prototype, "getById", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'searchTerm', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'categoria', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'proveedor', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'licencia', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'requiereConexionRed', required: false, type: Boolean }),
    (0, swagger_1.ApiQuery)({ name: 'usaBaseDatos', required: false, type: Boolean }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Query)('searchTerm')),
    __param(3, (0, common_1.Query)('categoria')),
    __param(4, (0, common_1.Query)('proveedor')),
    __param(5, (0, common_1.Query)('licencia')),
    __param(6, (0, common_1.Query)('requiereConexionRed')),
    __param(7, (0, common_1.Query)('usaBaseDatos')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String, String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], AplicacionesController.prototype, "list", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_aplicacion_request_1.UpdateAplicacionRequest]),
    __metadata("design:returntype", void 0)
], AplicacionesController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/conexion'),
    (0, swagger_1.ApiParam)({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, change_conexion_request_1.ChangeConexionRequest]),
    __metadata("design:returntype", void 0)
], AplicacionesController.prototype, "changeConexion", null);
__decorate([
    (0, common_1.Patch)(':id/licencia'),
    (0, swagger_1.ApiParam)({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, change_licencia_request_1.ChangeLicenciaRequest]),
    __metadata("design:returntype", void 0)
], AplicacionesController.prototype, "changeLicencia", null);
__decorate([
    (0, common_1.Post)(':id/versiones'),
    (0, swagger_1.ApiParam)({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, add_version_request_1.AddVersionRequest]),
    __metadata("design:returntype", void 0)
], AplicacionesController.prototype, "addVersion", null);
__decorate([
    (0, common_1.Patch)(':id/estado'),
    (0, swagger_1.ApiParam)({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, change_estado_request_1.ChangeEstadoRequest]),
    __metadata("design:returntype", void 0)
], AplicacionesController.prototype, "changeEstado", null);
__decorate([
    (0, common_1.Post)(':id/compatibilidad'),
    (0, swagger_1.ApiParam)({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, validate_compatibilidad_request_1.ValidateCompatibilidadRequest]),
    __metadata("design:returntype", void 0)
], AplicacionesController.prototype, "validateCompatibilidad", null);
exports.AplicacionesController = AplicacionesController = __decorate([
    (0, common_1.Controller)('aplicaciones'),
    (0, common_1.UseFilters)(new domain_exception_filter_1.DomainExceptionFilter()),
    __metadata("design:paramtypes", [aplicacion_use_cases_1.ICreateAplicacionUseCase,
        aplicacion_use_cases_1.IUpdateAplicacionUseCase,
        aplicacion_use_cases_1.IChangeConexionUseCase,
        aplicacion_use_cases_1.IChangeLicenciaUseCase,
        aplicacion_use_cases_1.IAddVersionUseCase,
        aplicacion_use_cases_1.IChangeEstadoAplicacionUseCase,
        aplicacion_use_cases_1.IGetAplicacionByIdUseCase,
        aplicacion_use_cases_1.IListAplicacionesUseCase,
        aplicacion_use_cases_1.IValidateCompatibilidadUseCase])
], AplicacionesController);
//# sourceMappingURL=aplicaciones.controller.js.map