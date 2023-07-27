function getCount(str) {
const vowel = ['a','e','o','i','u']
let splitted = str.split('')
let count = 0

console.log(splitted)
for(let i = 0; i<str.length;i++ ){
  if(vowel.includes(splitted[i])){
    count++
  }
  
}
  return count;
}

console.log(getCount('abracadabra'))
