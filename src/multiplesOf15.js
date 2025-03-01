const multipleos = number => {
    if (typeof number!== 'number' || number <= 0) {
        throw new Error('Invalid input. Please enter a positive integer.');
    }
    if (number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz';
    }
    return 15 % number === 0;
}

console.log(multipleos(3));