function capitalize(s: string): string[] {
const evenIndexedChar = s.split("").map((char,index)=>(index % 2 === 0 ? char.toLowerCase() : char.toUpperCase())).join('')
const oddindexedChar = s.split("").map((char,index) =>(index % 2 !== 0 ? char.toLowerCase() : char.toUpperCase())).join("")

return [evenIndexedChar, oddindexedChar]
}

console.log(capitalize("Hello"))
