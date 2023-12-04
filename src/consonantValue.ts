const solve = (s: string): number =>
  Math.max(
    ...s
      .split(/[aeiou]/)
      .map((substr) =>
        substr.split("").reduce((sum, char) => sum + char.charCodeAt(0) - 96, 0)
      )
  );

console.log(solve("DEVELOPER")); 

