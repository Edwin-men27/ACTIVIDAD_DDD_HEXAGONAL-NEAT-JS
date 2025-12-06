"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Precio = void 0;
const value_object_1 = require("../../shared/value-object");
class Precio extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        this.props = { value };
    }
    static create(value, licencia) {
        if (value === null || value === undefined || Number.isNaN(value)) {
            throw new Error('El precio es obligatorio');
        }
        if (value < 0) {
            throw new Error('El precio no puede ser negativo');
        }
        if (licencia.value === 'gratuita') {
            if (value !== 0) {
                throw new Error('Una licencia gratuita debe tener precio 0');
            }
            return new Precio(0);
        }
        return new Precio(value);
    }
    get value() {
        return this.props.value;
    }
}
exports.Precio = Precio;
//# sourceMappingURL=precio.vo.js.map