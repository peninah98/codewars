const squareSum = (n) =>
  n.map((element) => element * element).reduce((acc, cur) => acc + cur, 0)
