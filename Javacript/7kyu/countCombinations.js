function numCombo(arr, num){
  const sum = arr.reduce((a, b) => a + b)
  return arr.filter(x => sum - x == num).length;
}