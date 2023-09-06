"use strict";
function positiveSum(arr) {
    return arr.filter((element) => element > 0).reduce((acc, i) => acc + i, 0);
}
console.log(positiveSum([1, 2, 3, 4, -3]));
