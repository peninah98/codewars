// function findShort(s) {
//   return s.split(" ").sort((a, b) => a.length - b.length)[0].length
// }

function findShort(s) {
  return Math.min(...s.split(" ").map((s) => s.length))
}

console.log(findShort("ahaganya  agan agfs asjd asdf jkl jss"))
