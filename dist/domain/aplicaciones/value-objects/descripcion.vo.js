"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Descripcion = void 0;
const value_object_1 = require("../../shared/value-object");
class Descripcion extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim() ?? '';
        if (trimmed.length > 500) {
            throw new Error('La descripción no puede superar los 500 caracteres');
        }
        this.props = { value: trimmed };
    }
    get value() {
        return this.props.value;
    }
}
exports.Descripcion = Descripcion;
//# sourceMappingURL=descripcion.vo.js.map