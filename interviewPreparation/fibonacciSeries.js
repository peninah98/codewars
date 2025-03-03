// fibonacaci series
// each number is the sum of two preceding numbers
// 0, 1, 1, 2,3,5,8,13,21

const fibonacci = (n) => {
  if (n <= 0) return []; 
  if (n === 1) return [0];
  if (n === 2) return [0, 1]; 

  let sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
};

console.log(fibonacci(8));