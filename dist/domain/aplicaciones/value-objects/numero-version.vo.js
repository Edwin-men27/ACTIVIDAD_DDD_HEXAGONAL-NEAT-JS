"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumeroVersion = void 0;
const value_object_1 = require("../../shared/value-object");
class NumeroVersion extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim();
        if (!trimmed) {
            throw new Error('El número de versión es obligatorio');
        }
        if (!/^[0-9]+(\.[0-9]+)*$/.test(trimmed)) {
            throw new Error('El número de versión debe tener formato tipo 1.0.0');
        }
        this.props = { value: trimmed };
    }
    get value() {
        return this.props.value;
    }
    compareTo(other) {
        const thisParts = this.props.value.split('.').map((p) => Number(p));
        const otherParts = other.value.split('.').map((p) => Number(p));
        const max = Math.max(thisParts.length, otherParts.length);
        for (let i = 0; i < max; i++) {
            const a = thisParts[i] ?? 0;
            const b = otherParts[i] ?? 0;
            if (a > b)
                return 1;
            if (a < b)
                return -1;
        }
        return 0;
    }
}
exports.NumeroVersion = NumeroVersion;
//# sourceMappingURL=numero-version.vo.js.map