"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distinct = void 0;
const distinct = (a) => {
    return Array.from(new Set(a));
};
exports.distinct = distinct;
console.log((0, exports.distinct)([1, 2, 3, 2, 3, 23, 2, 3, 22]));
