"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wordValue = void 0;
function wordValue(arr) {
    return arr.map((mult, index) => mult
        .replace(/\s/g, "")
        .split("")
        .reduce((a, b) => a + b.charCodeAt(0) - 96, 0) *
        (index + 1));
}
exports.wordValue = wordValue;
console.log(wordValue(["abc", "abc abc"]));
