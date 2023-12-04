export function adjacentElementsProduct(arr: number[]): number {
  return Math.max(
    ...arr.map((item: number, index: number) =>
      index === arr.length - 1 ? item * arr[index - 1] : item * arr[index + 1]
    )
  );
}
