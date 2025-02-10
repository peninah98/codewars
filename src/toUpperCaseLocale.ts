// This function returns the converted string like toUpperCase(): expect for the  local conflict  that conflcits the regular Unicode case mappings such as Turkish
// This is a non-destructive function it does not change the original string
const toUpperCaseLocaleFunc = (string: string)=>string.toLocaleUpperCase()
console.log(toUpperCaseLocaleFunc("peninah"))