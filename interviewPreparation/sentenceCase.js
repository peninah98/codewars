const sentenceCase = (sentence) => {
  const firstWord = sentence.split(" ")[0]
  const capitalised = firstWord.charAt(0).toUpperCase() + firstWord.slice(1)
  return capitalised + sentence.slice(1)
}

console.log(sentenceCase("my mother is best brave mother I have ever seen"))
console.log(sentenceCase("today, I have a dream ... "))
