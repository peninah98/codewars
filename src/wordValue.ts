export function wordValue(arr: string[]) {
  return arr.map(
    (mult, index) =>
      mult
        .replace(/\s/g, "")
        .split("")
        .reduce((a, b) => a + b.charCodeAt(0) - 96, 0) *
      (index + 1)
  );
}

console.log(wordValue(["abc", "abc abc"]));
