"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionId = void 0;
const crypto_1 = require("crypto");
const value_object_1 = require("../../shared/value-object");
class VersionId extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        this.props = { value };
    }
    get value() {
        return this.props.value;
    }
    static new() {
        return new VersionId((0, crypto_1.randomUUID)());
    }
    static from(value) {
        if (!value) {
            throw new Error('El id de la versión es obligatorio');
        }
        return new VersionId(value);
    }
}
exports.VersionId = VersionId;
//# sourceMappingURL=version-id.vo.js.map