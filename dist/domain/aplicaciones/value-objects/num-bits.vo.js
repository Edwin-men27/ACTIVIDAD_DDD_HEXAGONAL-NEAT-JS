"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumBits = void 0;
const value_object_1 = require("../../shared/value-object");
class NumBits extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        if (value !== 32 && value !== 64) {
            throw new Error('numBits solo puede ser 32 o 64');
        }
        this.props = { value };
    }
    get value() {
        return this.props.value;
    }
}
exports.NumBits = NumBits;
//# sourceMappingURL=num-bits.vo.js.map