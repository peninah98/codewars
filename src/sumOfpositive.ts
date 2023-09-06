function positiveSum(arr: number[]): number {
  return arr.filter((element) => element > 0).reduce((acc, i) => acc + i, 0);
}

console.log(positiveSum([1,2,3,4,-3]))