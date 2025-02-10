const multiTable = (number: number): string =>
  Array.from(
    { length: 10 },
    (_, i) => `${i} * ${number} = ${(i + 1) * number}`
  ).join("/n")
