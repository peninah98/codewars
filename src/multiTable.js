var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var multiTable = function (number) {
    return __spreadArray([], Array(10), true).map(function (_, i) { return "".concat(i + 1, " * ").concat(number, " = ").concat((i + 1) * number); })
        .join("\n");
};
console.log(multiTable(5));
