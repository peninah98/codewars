// Uncomment the lines of code below they all do the same 
export function numberToString(num: number): any {
//   return String(num);
//  return `${num}`
//  return num.toString()

let result = `${num}`
console.log(typeof result)

  return "" + num;

}

console.log(numberToString(19))