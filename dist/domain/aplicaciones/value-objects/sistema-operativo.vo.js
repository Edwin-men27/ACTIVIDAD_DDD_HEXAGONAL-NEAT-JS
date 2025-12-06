"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SistemaOperativo = void 0;
const value_object_1 = require("../../shared/value-object");
class SistemaOperativo extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim();
        if (!trimmed) {
            throw new Error('El sistema operativo es obligatorio');
        }
        if (trimmed.length > 120) {
            throw new Error('El sistema operativo es demasiado largo');
        }
        this.props = { value: trimmed };
    }
    get value() {
        return this.props.value;
    }
}
exports.SistemaOperativo = SistemaOperativo;
//# sourceMappingURL=sistema-operativo.vo.js.map