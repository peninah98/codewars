"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoSort = void 0;
function twoSort(s) {
    let sum = 0;
    let maxSum = 0;
    let maxString = "";
    for (let i = 0; i < s.length; i++) {
        sum = s[i].split("").reduce((acc, e) => acc + e.charCodeAt(0), 0);
        if (sum > maxSum) {
            maxSum = sum;
            maxString = s[i];
        }
    }
    return maxString.split("").join("***");
}
exports.twoSort = twoSort;
console.log(twoSort(["Lets", "all", "go", "on", "holiday", "somewhere", "very", "cold"]));
