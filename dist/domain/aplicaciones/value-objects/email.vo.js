"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const value_object_1 = require("../../shared/value-object");
class Email extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim();
        if (!trimmed) {
            throw new Error('El correo es obligatorio');
        }
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(trimmed)) {
            throw new Error('El formato del correo no es válido');
        }
        this.props = { value: trimmed.toLowerCase() };
    }
    get value() {
        return this.props.value;
    }
}
exports.Email = Email;
//# sourceMappingURL=email.vo.js.map