const duplicateNumber = (arr) => {
  for (let i = 0; i < arr.lenght; i++) {
    if (arr.indexOf(arr[i]) !== i) return arr[i]
  }
  return null
}

console.log(duplicateNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3])) 