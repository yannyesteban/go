"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
var test = /** @class */ (function () {
    function test(info) {
        this.name = "";
        for (var x in info) {
            if (this.hasOwnProperty(x)) {
                this[x] = info[x];
            }
        }
    }
    test.prototype.main = function () {
        alert(1000);
    };
    return test;
}());
exports.test = test;
//# sourceMappingURL=testt.js.map