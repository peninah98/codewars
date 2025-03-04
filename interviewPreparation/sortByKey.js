const sortByKey = (arr, key)=>{
    return arr.sort((a, b) => a[key] - b[key]);
}
console.log(
  sortByKey([
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
  ],"age")
)

const factorial =(n)=>{
    if(n<=1) return 1
    return n * factorial (n-1)
}

console.log(factorial(5))