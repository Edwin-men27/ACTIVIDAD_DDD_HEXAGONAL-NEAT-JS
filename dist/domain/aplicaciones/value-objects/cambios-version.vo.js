"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CambiosVersion = void 0;
const value_object_1 = require("../../shared/value-object");
class CambiosVersion extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim();
        if (!trimmed) {
            throw new Error('Los cambios de la versión son obligatorios');
        }
        if (trimmed.length > 2000) {
            throw new Error('Los cambios de la versión son demasiado extensos');
        }
        this.props = { value: trimmed };
    }
    get value() {
        return this.props.value;
    }
}
exports.CambiosVersion = CambiosVersion;
//# sourceMappingURL=cambios-version.vo.js.map