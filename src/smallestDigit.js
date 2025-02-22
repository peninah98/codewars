export function smallest(n) {
  const digits = n.toString().split("")
  const min = Math.min(...digits)
  const filterDigits = digits.filter((d) => d !== min)
  return Number(`${min}${filterDigits}`)
}
console.log(smallest(261235))