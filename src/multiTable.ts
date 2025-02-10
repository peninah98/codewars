const multiTable = (number: number): string =>
  [...Array(10)]
    .map((_, i) => `${i + 1} * ${number} = ${(i + 1) * number}`)
    .join("\n")

console.log(multiTable(5))
