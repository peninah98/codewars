const points = (games) =>
  games.reduce((sum, [x, , y]) => sum + (x > y ? 3 : x == y), 0)
