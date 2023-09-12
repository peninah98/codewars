export function findDifference(
  a: [number, number, number],
  b: [number, number, number]
): number {
  return Math.abs(
    a.reduce((acc, cr) => acc * cr, 1) - b.reduce((ac, cr) => ac * cr, 1)
  );
}
