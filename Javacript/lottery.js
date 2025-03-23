function lottery(str) {
  const uniqueNumbers = [...new Set(str.replace(/\D/g, ""))]
  return uniqueNumbers.length ? uniqueNumbers.join("") : "One more run!"
}
