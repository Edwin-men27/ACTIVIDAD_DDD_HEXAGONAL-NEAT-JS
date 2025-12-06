"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lenguaje = void 0;
const value_object_1 = require("../../shared/value-object");
class Lenguaje extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim();
        if (!trimmed) {
            throw new Error('El lenguaje es obligatorio');
        }
        if (trimmed.length > 100) {
            throw new Error('El lenguaje es demasiado largo');
        }
        this.props = { value: trimmed };
    }
    get value() {
        return this.props.value;
    }
}
exports.Lenguaje = Lenguaje;
//# sourceMappingURL=lenguaje.vo.js.map