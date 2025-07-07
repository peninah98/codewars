const pigLatin = word => {
  if (!/^[a-z]+$/i.test(word)) return null;

  const lower = word.toLowerCase();
  const vowels = /^[aeiou]/;
  if (vowels.test(lower)) return `${lower}way`;

  const index = lower.search(/[aeiou]/);
  return index === -1
    ? `${lower}ay`
    : `${lower.slice(index)}${lower.slice(0, index)}ay`;
};