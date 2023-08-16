export const distinct = (a: number[]): number[] => {
    return Array.from(new Set(a));
  }

  console.log(distinct([1,2,3,2,3,23,2,3,22]))