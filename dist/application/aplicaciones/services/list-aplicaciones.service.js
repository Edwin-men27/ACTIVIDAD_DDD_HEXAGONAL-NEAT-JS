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
exports.ListAplicacionesService = void 0;
const common_1 = require("@nestjs/common");
const aplicacion_repository_1 = require("../../../domain/aplicaciones/aplicacion.repository");
const aplicacion_mapper_1 = require("../mapper/aplicacion.mapper");
let ListAplicacionesService = class ListAplicacionesService {
    aplicacionRepository;
    constructor(aplicacionRepository) {
        this.aplicacionRepository = aplicacionRepository;
    }
    async execute(query) {
        let aplicaciones = await this.aplicacionRepository.findAll();
        if (query.categoria) {
            aplicaciones = aplicaciones.filter((a) => a.categoria.value.toLowerCase() === query.categoria.toLowerCase());
        }
        if (query.proveedor) {
            aplicaciones = aplicaciones.filter((a) => a.proveedor.value.toLowerCase() === query.proveedor.toLowerCase());
        }
        if (query.licencia) {
            aplicaciones = aplicaciones.filter((a) => a.licencia.value.toLowerCase() === query.licencia.toLowerCase());
        }
        if (query.requiereConexionRed !== undefined) {
            aplicaciones = aplicaciones.filter((a) => a.requiereConexionRed === query.requiereConexionRed);
        }
        if (query.usaBaseDatos !== undefined) {
            aplicaciones = aplicaciones.filter((a) => a.usaBaseDatos === query.usaBaseDatos);
        }
        if (query.searchTerm) {
            const term = query.searchTerm.toLowerCase();
            aplicaciones = aplicaciones.filter((a) => a.nombre.value.toLowerCase().includes(term) ||
                a.proveedor.value.toLowerCase().includes(term) ||
                (a.descripcion?.value.toLowerCase().includes(term) ?? false));
        }
        const total = aplicaciones.length;
        const start = (query.page - 1) * query.pageSize;
        const paged = aplicaciones.slice(start, start + query.pageSize);
        return aplicacion_mapper_1.AplicacionMapper.toList(paged, total, query.page, query.pageSize);
    }
};
exports.ListAplicacionesService = ListAplicacionesService;
exports.ListAplicacionesService = ListAplicacionesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [aplicacion_repository_1.AplicacionRepository])
], ListAplicacionesService);
//# sourceMappingURL=list-aplicaciones.service.js.map