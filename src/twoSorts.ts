// export function twoSort(s: string[]): string {
//     let sum = 0;
// for(let i of s){
  
//   let currentSum =i.split("").reduce((acc,e)=>acc + e,0)
  
//   if(currentSum>sum){
//     sum = currentSum
//   }
//   return s[i].join("***")
  
// }
// }

// console.log(twoSort([ "bitcoin","take","over","the","world","maybe","who","knows","perhaps"]));




export function twoSort(s: string[]): string {
  let sum = 0;
  let maxSum = 0;
  let maxString = "";

  for (let i = 0; i < s.length; i++) {
    sum = s[i].split("").reduce((acc, e) => acc + e.charCodeAt(0), 0);
    if (sum > maxSum) {
      maxSum = sum;
      maxString = s[i];
    }
  }
  return maxString.split("").join("***");
}

console.log(
  twoSort(["Lets", "all", "go", "on", "holiday", "somewhere", "very", "cold"])
);

