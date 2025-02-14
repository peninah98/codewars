function countOddBellowN(n) {
  return Array.from({ length: n }, (_, i) => {
    i % 2 !== 0
    return i}).filter((i)=>i%2 !== 0).length
}

console.log(countOddBellowN(20))
