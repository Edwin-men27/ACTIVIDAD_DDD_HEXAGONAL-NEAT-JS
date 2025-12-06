"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicenciaTipo = void 0;
const value_object_1 = require("../../shared/value-object");
const PERMITIDOS = ['gratuita', 'pago', 'opensource', 'empresarial'];
class LicenciaTipo extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const normalized = value?.trim().toLowerCase();
        if (!normalized) {
            throw new Error('La licencia es obligatoria');
        }
        if (!PERMITIDOS.includes(normalized)) {
            throw new Error(`La licencia ${value} no es válida`);
        }
        this.props = { value: normalized };
    }
    get value() {
        return this.props.value;
    }
}
exports.LicenciaTipo = LicenciaTipo;
//# sourceMappingURL=licencia-tipo.vo.js.map