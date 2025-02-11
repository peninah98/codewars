function outed(meet, boss) {
  const peopleCount = Object.keys(meet).length
  const totalScore = Object.entries(meet).reduce((sum, [name, score]) => {
    return sum + (name === boss ? score * 2 : score)
  }, 0)

  return totalScore / peopleCount <= 5 ? "Get Out Now!" : "Nice Work Champ!"
}
