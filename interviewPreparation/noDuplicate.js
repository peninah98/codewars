const noDuplicate = (arr) => {
  return Array.from(new Set(arr))
}
console.log(noDuplicate([1, 2, 3, 2, 2, 2, 2, 3, 2, 3232, 2, 2, 2]))
