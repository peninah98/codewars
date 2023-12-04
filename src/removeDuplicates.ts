 function removeDuplicateWords(s: string): any {
 return Array.from( new Set(s.split(" "))).join(' ').toString()
 }

console.log(removeDuplicateWords("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"))