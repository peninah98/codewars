
function elimination(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== i) return arr[i]
  }
  return null
}
console.log(elimination([2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3]))
