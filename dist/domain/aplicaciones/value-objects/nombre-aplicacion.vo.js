"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NombreAplicacion = void 0;
const value_object_1 = require("../../shared/value-object");
class NombreAplicacion extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim();
        if (!trimmed) {
            throw new Error('El nombre de la aplicación es obligatorio');
        }
        if (trimmed.length < 3) {
            throw new Error('El nombre de la aplicación debe tener al menos 3 caracteres');
        }
        if (trimmed.length > 150) {
            throw new Error('El nombre de la aplicación es demasiado largo');
        }
        this.props = { value: trimmed };
    }
    get value() {
        return this.props.value;
    }
}
exports.NombreAplicacion = NombreAplicacion;
//# sourceMappingURL=nombre-aplicacion.vo.js.map