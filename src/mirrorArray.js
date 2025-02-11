const mirror = (data) => {
  const sorted = [...data].sort((a, b) => a - b) 
  return [...sorted, ...sorted.slice(0, -1).reverse()] 
}

console.log(mirror([45, -3, 0, 34]))
