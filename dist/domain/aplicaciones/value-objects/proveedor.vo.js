"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proveedor = void 0;
const value_object_1 = require("../../shared/value-object");
class Proveedor extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim();
        if (!trimmed) {
            throw new Error('El proveedor es obligatorio');
        }
        if (trimmed.length > 150) {
            throw new Error('El proveedor es demasiado largo');
        }
        this.props = { value: trimmed };
    }
    get value() {
        return this.props.value;
    }
}
exports.Proveedor = Proveedor;
//# sourceMappingURL=proveedor.vo.js.map