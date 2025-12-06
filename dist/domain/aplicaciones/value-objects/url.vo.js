"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url = void 0;
const value_object_1 = require("../../shared/value-object");
class Url extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim();
        if (!trimmed) {
            throw new Error('La URL es obligatoria cuando se requiere conexión a red');
        }
        if (!/^https?:\/\//i.test(trimmed)) {
            throw new Error('La URL debe comenzar con http:// o https://');
        }
        this.props = { value: trimmed };
    }
    get value() {
        return this.props.value;
    }
}
exports.Url = Url;
//# sourceMappingURL=url.vo.js.map