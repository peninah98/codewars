// const palindrome = (name) => {
//   if (name === name.split("").reverse().join("")) {
//     return true
//   }
//   return false
// }

const palindromeName = (str)=>str === str.split("").reverse().join("")?true:false

console.log(palindromeName("madam"))