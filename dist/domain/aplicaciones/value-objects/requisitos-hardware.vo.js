"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequisitosHardware = void 0;
const value_object_1 = require("../../shared/value-object");
class RequisitosHardware extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim();
        if (!trimmed) {
            throw new Error('Los requisitos de hardware son obligatorios cuando aplica');
        }
        if (trimmed.length > 1000) {
            throw new Error('Los requisitos de hardware son demasiado extensos');
        }
        this.props = { value: trimmed };
    }
    get value() {
        return this.props.value;
    }
}
exports.RequisitosHardware = RequisitosHardware;
//# sourceMappingURL=requisitos-hardware.vo.js.map