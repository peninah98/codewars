export function areaOfPolygonInsideCircle(
  circleRadius: number,
  numberOfSides: number
): number {
  return (
    Math.round(
      (1 / 2) *
        Math.pow(circleRadius, 2) *
        Math.sin((2 * Math.PI) / numberOfSides) *
        numberOfSides *
        1000
    ) / 1000
  );
}
