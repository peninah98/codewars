function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints)

  const average =
    classPoints.reduce((acc, cur) => acc + cur, 0) / classPoints.length

  return average <= yourPoints ? true : false
}
