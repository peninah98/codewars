function longestConsec(strarr) {
  return strarr
    .slice(0, -1)
    .map((name, i) => name + strarr[i + 1])
    .reduce((a, b) => (a.length > b.length ? a : b))
}

// Example usage
console.log(longestConsec(["Alice", "Bob", "Charlie", "Dave"]))
