"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TamanoInstalador = void 0;
const value_object_1 = require("../../shared/value-object");
class TamanoInstalador extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        if (value === null || value === undefined || Number.isNaN(value)) {
            throw new Error('El tamaño del instalador es obligatorio');
        }
        if (value <= 0) {
            throw new Error('El tamaño del instalador debe ser mayor que 0');
        }
        this.props = { value };
    }
    get value() {
        return this.props.value;
    }
}
exports.TamanoInstalador = TamanoInstalador;
//# sourceMappingURL=tamano-instalador.vo.js.map