const squareSum = (n) =>
  n.map((element) => element * element).reduce((acc, cur) => acc + cur, 0)

const sum = (numbers) => numbers.reduce((a, b) => a + b ** 2, 0)
