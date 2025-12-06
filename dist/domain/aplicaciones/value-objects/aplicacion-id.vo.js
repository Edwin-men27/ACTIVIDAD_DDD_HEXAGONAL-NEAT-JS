"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AplicacionId = void 0;
const crypto_1 = require("crypto");
const value_object_1 = require("../../shared/value-object");
class AplicacionId extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        this.props = { value };
    }
    get value() {
        return this.props.value;
    }
    static new() {
        return new AplicacionId((0, crypto_1.randomUUID)());
    }
    static from(value) {
        if (!value) {
            throw new Error('El id de la aplicación no puede ser vacío');
        }
        return new AplicacionId(value);
    }
}
exports.AplicacionId = AplicacionId;
//# sourceMappingURL=aplicacion-id.vo.js.map