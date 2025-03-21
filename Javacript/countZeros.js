function countZeros(n) {
  let count = 0

  for (let i = 1; i <= n; i++) {
    const digits = i.toString().split("")

    digits.forEach((digit) => {
      if (digit === "0") {
        count++
      }
    })
  }

  return count
}

