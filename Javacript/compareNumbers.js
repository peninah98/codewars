function noIfsNoButs(a, b) {
  const cases = {
    [`${a > b}`]: `${a} is greater than ${b}`,
    [`${a < b}`]: `${a} is smaller than ${b}`,
    [`${a === b}`]: `${a} is equal to ${b}`,
  }

  return cases["true"]
}
