"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
    getInformation() {
        return [this.title, `$${this.price}`];
    }
}
exports.Produto = Produto;
//# sourceMappingURL=product.model.js.map