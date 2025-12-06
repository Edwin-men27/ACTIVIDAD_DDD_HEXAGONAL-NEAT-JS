"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
const value_object_1 = require("../../shared/value-object");
class Categoria extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim();
        if (!trimmed) {
            throw new Error('La categoría es obligatoria');
        }
        if (trimmed.length > 100) {
            throw new Error('La categoría es demasiado larga');
        }
        this.props = { value: trimmed };
    }
    get value() {
        return this.props.value;
    }
}
exports.Categoria = Categoria;
//# sourceMappingURL=categoria.vo.js.map