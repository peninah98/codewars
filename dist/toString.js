"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberToString = void 0;
function numberToString(num) {
    let result = `${num}`;
    console.log(typeof result);
    return "" + num;
}
exports.numberToString = numberToString;
console.log(numberToString(19));
