export class Kata {
  static highAndLow(numbers: string): string {
    return `${Math.max(...numbers.split(" ").map((item) => +item))} ${Math.min(
      ...numbers.split(" ").map((item) => +item)
    )}`;
  }
}


// ************************** uncomment the lines of codes below to see the other approach***********************


// export class Kata {
//   static highAndLow(numbers: string): string {
//     let arrayOfNumbers: number[] = [];
//     let nums = numbers.split(" ");
//     for (let i = 0; i < nums.length; i++) {
//       arrayOfNumbers.push(Number(nums[i]));
//     }
//     console.log(arrayOfNumbers);
//     return `${Math.max(...arrayOfNumbers)} ${Math.min(...arrayOfNumbers)}`;
//   }
// }