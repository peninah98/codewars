const palindrome = (name) => {
  if (name === name.split("").reverse().join("")) {
    return true
  }
  return false
}