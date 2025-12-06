"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadoAplicacion = void 0;
const value_object_1 = require("../../shared/value-object");
const ESTADOS = ['ACTIVA', 'INACTIVA'];
class EstadoAplicacion extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const upper = value?.trim().toUpperCase();
        if (!upper) {
            throw new Error('El estado de la aplicación es obligatorio');
        }
        if (!ESTADOS.includes(upper)) {
            throw new Error('El estado de la aplicación no es válido');
        }
        this.props = { value: upper };
    }
    get value() {
        return this.props.value;
    }
}
exports.EstadoAplicacion = EstadoAplicacion;
//# sourceMappingURL=estado-aplicacion.vo.js.map